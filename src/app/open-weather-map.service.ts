import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const API_KEY = 'f9737a774919613c170f742c312fe822';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  endpoint = path => `http://api.openweathermap.org/data/2.5/${path}`
  
  citiesSearchPath = this.endpoint('find')
  currentWeatherPath = this.endpoint('weather')
  forecastPath = this.endpoint('forecast')

  constructor(
    private http: HttpClient) { }
  
  private createQueryParams(query) {
    return {
      params: {
        units: 'metric',
        appid: API_KEY,
        ...query
      }
    };
  }
  
  searchCities(searchText) {
    return this.http.get(this.citiesSearchPath, this.createQueryParams({ q: searchText }));
  }
  
  currentWeather(cityId) {
    return this.http.get(this.currentWeatherPath, this.createQueryParams({ id: cityId }));
  }
  
  forecast(cityId) {
    return this.http.get(this.forecastPath, this.createQueryParams({ id: cityId }));
  }
  
}


