import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { OpenWeatherMapService } from '../open-weather-map.service';

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
      this.cityWeather = result;
      this.searchText = this.cityWeather.name;
    });
      
    this.openWeatherMapService.forecast(this.cityId)
      .subscribe(result => this.cityForecast = result);
  }
  
  searchOnEnter(event) {
    if (event.keyCode == ENTER_KEYCODE) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchText } });
    }
  }
  
}

