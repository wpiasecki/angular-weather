import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySearchComponent } from './city-search/city-search.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySearchComponent,
    WeatherDetailsComponent
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
