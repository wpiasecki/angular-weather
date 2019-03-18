import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = 'f9737a774919613c170f742c312fe822';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  endpoint = 'http://api.openweathermap.org/data/2.5';
  citiesSearch = `${this.endpoint}/find`;

  constructor(private http: HttpClient) { }
  
  searchCities(searchText) {
    return this.http.get(this.citiesSearch, {
      params: {
        q: searchText,
        units: 'metric',
        appid: API_KEY
      }
    });
  }
}
