import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../services/open-weather-map.service';
import { ActivatedRoute, Router } from '@angular/router';

const ENTER_KEYCODE = 13;

@Component({
  selector: 'app-weather',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.sass']
})
export class CitySearchComponent implements OnInit {
  
  weatherResult
  searchText = ''
  
  constructor(
    private openWeatherMapService: OpenWeatherMapService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    const query = this.route.snapshot.queryParams.q;
    if (query) { 
      this.searchText = query;
      this.search();
    }
  }
  
  searchOnEnter(event) {
    if (event.keyCode == ENTER_KEYCODE && this.searchText && this.searchText.length >= 3) {
      this.search();
    }
  }
  
  search() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchText } });
      
    this.openWeatherMapService.searchCities(this.searchText)
      .subscribe( (result: any) => this.weatherResult = result.list );
  }
  
  toDetails(city) {
    this.router.navigate(['/details', city.id]);
  }

}


