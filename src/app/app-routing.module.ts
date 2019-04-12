import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitySearchComponent } from './city-search/city-search.component';
import { CityWeatherDetailsComponent } from './city-weather-details/city-weather-details.component';

const routes: Routes = [
	{ path: '', redirectTo: 'search', pathMatch: 'full' },
	{ path: 'search', component: CitySearchComponent },
	{ path: 'details/:id', component: CityWeatherDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
