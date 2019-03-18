import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../open-weather-map.service';

const ENTER_KEYCODE = 13;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {
  
  weatherResult
  searchText = ''
  
  constructor(private openWeatherMapService: OpenWeatherMapService) {
  }

  ngOnInit() {
  }
  
  searchOnEnter(event) {
    console.log('search on enter', this.searchText, event);
    if (event.keyCode == ENTER_KEYCODE && this.searchText && this.searchText.length >= 3) {
      this.openWeatherMapService.searchCities(this.searchText)
        .subscribe(result => {
          console.log('owm result', result);
          this.weatherResult = result.list;
        });
    }
  }

}


