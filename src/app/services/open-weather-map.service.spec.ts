import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OpenWeatherMapService } from './open-weather-map.service';

describe('OpenWeatherMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: OpenWeatherMapService = TestBed.get(OpenWeatherMapService);
    expect(service).toBeTruthy();
  });
  
  it('search cities', () => {
    const service: OpenWeatherMapService = TestBed.get(OpenWeatherMapService);
    service.searchCities('san francisco');
  });
  
  it('current weather', () => {
    const service: OpenWeatherMapService = TestBed.get(OpenWeatherMapService);
    service.currentWeather('1486');
  });
  
  it('forecast', () => {
    const service: OpenWeatherMapService = TestBed.get(OpenWeatherMapService);
    service.forecast('1486');
  });
});
