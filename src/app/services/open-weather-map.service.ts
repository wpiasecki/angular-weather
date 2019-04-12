import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import * as CitySearchModel from '../city-search/city-search.model';
import * as CityWeatherModel from '../city-weather-details/city-weather.model';
import * as CityForecastModel from '../city-weather-details/city-forecast.model';

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
  
  searchCities(searchText): Observable<CitySearchModel.RootObject> {
    return this.http
      .get<CitySearchModel.RootObject>(this.citiesSearchPath, this.createQueryParams({ q: searchText }));
  }
  
  currentWeather(cityId): Observable<CityWeatherModel.RootObject> {
    const addSunset = map(r => this.addSunsetAndSunriseDate(r));
    return this.http
      .get<CityWeatherModel.RootObject>(this.currentWeatherPath, this.createQueryParams({ id: cityId })).pipe(addSunset);
  }
  
  forecast(cityId): Observable<CityForecastModel.RootObject> {
    const addForecast = map(r => this.addForecastDatetime(r));
    return this.http
      .get<CityForecastModel.RootObject>(this.forecastPath, this.createQueryParams({ id: cityId })).pipe(addForecast);
  }
  
}


