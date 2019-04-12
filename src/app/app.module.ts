import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CitySearchComponent } from './city-search/city-search.component';
import { CityWeatherDetailsComponent } from './city-weather-details/city-weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySearchComponent,
    CityWeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
