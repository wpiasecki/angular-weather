import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { OpenWeatherMapService } from '../open-weather-map.service';

import * as moment from 'moment';

const ENTER_KEYCODE = 13;

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.sass']
})
export class WeatherDetailsComponent implements OnInit {
  
  searchText = ''
  cityId
  cityWeather
  cityForecast
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private openWeatherMapService: OpenWeatherMapService) { }

  ngOnInit() {
    this.cityId = this.route.snapshot.params.id;
    this.openWeatherMapService.currentWeather(this.cityId).subscribe(result => {
      this.cityWeather = this.addSunsetAndSunriseDate(result);
      this.searchText = this.cityWeather.name;
    });
      
    this.openWeatherMapService.forecast(this.cityId)
      .subscribe(result => {
        this.cityForecast = this.addForecastDatetime(result);
      });
  }
  
  addSunsetAndSunriseDate(result) {
    result.sys['sunrise_dt'] = new Date(result.sys.sunrise);
    result.sys['sunset_dt'] = new Date(result.sys.sunset);
    return result;
  }
  
  addForecastDatetime(result) {
    result.list.forEach(forecast => {
      const dt_txt = forecast.dt_txt.split(' ');
      forecast['dt_day'] = this.toDate(dt_txt[0]);
      forecast['dt_hour'] = dt_txt[1];
    });
    return result;
  }
  
  toDate(dateTxt) {
    return moment(dateTxt).format('ddd D MMM');
  }
  
  searchOnEnter(event) {
    if (event.keyCode == ENTER_KEYCODE) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchText } });
    }
  }
  
}

