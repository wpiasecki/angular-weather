import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherResultComponent } from './weather-result/weather-result.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherSearchComponent,
    WeatherResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
