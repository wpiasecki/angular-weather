import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

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
  
  private addSunsetAndSunriseDate(result) {
    result.sys['sunrise_dt'] = moment(result.sys.sunrise);
    result.sys['sunset_dt'] = moment(result.sys.sunset);
    result['curr_dt'] = moment(result.dt);
    return result;
  }
  
  private addForecastDatetime(result) {
    result.list.forEach(forecast => {
      const dt_txt = forecast.dt_txt.split(' ');
      forecast['dt_day'] = moment(forecast.dt_txt);
    });
    return result;
  }
  
  searchCities(searchText) {
    return this.http.get(this.citiesSearchPath, this.createQueryParams({ q: searchText }));
  }
  
  currentWeather(cityId) {
    const addSunset = map(r => this.addSunsetAndSunriseDate(r));
    return this.http.get(this.currentWeatherPath, this.createQueryParams({ id: cityId })).pipe(addSunset);
  }
  
  forecast(cityId) {
    const addForecast = map(r => this.addForecastDatetime(r));
    return this.http.get(this.forecastPath, this.createQueryParams({ id: cityId })).pipe(addForecast);
  }
  
}


