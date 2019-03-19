import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

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
  
  private createQueryParams(q) {
    return {
      params: {
        q: q,
        units: 'metric',
        appid: API_KEY
      }
    };
  }
  
  searchCities(searchText) {
    return this.http.get(this.citiesSearchPath, this.createQueryParams(searchText));
  }
  
  currentWeather(cityId) {
    //return this.http.get(this.currentWeatherPath, this.createQueryParams(cityId));
    return of(WEATHER_MOCK);
  }
  
  forecast(cityId) {
    //return this.http.get(this.forecastPath, this.createQueryParams(cityId));
    return of(FORECAST_MOCK);
  }
  
}

const WEATHER_MOCK = {
    "coord": {
        "lon": -122.42,
        "lat": 37.77
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 282.67,
        "pressure": 1013,
        "humidity": 93,
        "temp_min": 280.93,
        "temp_max": 284.82
    },
    "visibility": 11265,
    "wind": {
        "speed": 0.76,
        "deg": 247.003
    },
    "clouds": {
        "all": 1
    },
    "dt": 1552995017,
    "sys": {
        "type": 1,
        "id": 5903,
        "message": 0.0084,
        "country": "US",
        "sunrise": 1553004895,
        "sunset": 1553048401
    },
    "id": 5391959,
    "name": "San Francisco",
    "cod": 200
}

const FORECAST_MOCK = {
    "cod": "200",
    "message": 0.0099,
    "cnt": 40,
    "list": [
        {
            "dt": 1552996800,
            "main": {
                "temp": 282.32,
                "temp_min": 282.32,
                "temp_max": 283.221,
                "pressure": 1013.03,
                "sea_level": 1013.03,
                "grnd_level": 1004.8,
                "humidity": 93,
                "temp_kf": -0.9
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 0.76,
                "deg": 247.003
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-19 12:00:00"
        },
        {
            "dt": 1553007600,
            "main": {
                "temp": 282.52,
                "temp_min": 282.52,
                "temp_max": 283.199,
                "pressure": 1012.77,
                "sea_level": 1012.77,
                "grnd_level": 1004.56,
                "humidity": 93,
                "temp_kf": -0.67
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 0.71,
                "deg": 325.006
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-19 15:00:00"
        },
        {
            "dt": 1553018400,
            "main": {
                "temp": 286.5,
                "temp_min": 286.5,
                "temp_max": 286.951,
                "pressure": 1012.73,
                "sea_level": 1012.73,
                "grnd_level": 1004.74,
                "humidity": 84,
                "temp_kf": -0.45
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 0.62,
                "deg": 304.502
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-19 18:00:00"
        },
        {
            "dt": 1553029200,
            "main": {
                "temp": 287.63,
                "temp_min": 287.63,
                "temp_max": 287.857,
                "pressure": 1011.16,
                "sea_level": 1011.16,
                "grnd_level": 1003.14,
                "humidity": 78,
                "temp_kf": -0.22
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 0.81,
                "deg": 261.502
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-19 21:00:00"
        },
        {
            "dt": 1553040000,
            "main": {
                "temp": 287.893,
                "temp_min": 287.893,
                "temp_max": 287.893,
                "pressure": 1010.53,
                "sea_level": 1010.53,
                "grnd_level": 1002.51,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 1.66,
                "deg": 226
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-20 00:00:00"
        },
        {
            "dt": 1553050800,
            "main": {
                "temp": 285.705,
                "temp_min": 285.705,
                "temp_max": 285.705,
                "pressure": 1010.76,
                "sea_level": 1010.76,
                "grnd_level": 1002.72,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 2.42,
                "deg": 235.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-20 03:00:00"
        },
        {
            "dt": 1553061600,
            "main": {
                "temp": 284.716,
                "temp_min": 284.716,
                "temp_max": 284.716,
                "pressure": 1011.61,
                "sea_level": 1011.61,
                "grnd_level": 1003.5,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 1.87,
                "deg": 228.502
            },
            "rain": {
                "3h": 0.245
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-20 06:00:00"
        },
        {
            "dt": 1553072400,
            "main": {
                "temp": 284.51,
                "temp_min": 284.51,
                "temp_max": 284.51,
                "pressure": 1011.38,
                "sea_level": 1011.38,
                "grnd_level": 1003.06,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 1.17,
                "deg": 197.003
            },
            "rain": {
                "3h": 0.21
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-20 09:00:00"
        },
        {
            "dt": 1553083200,
            "main": {
                "temp": 284.056,
                "temp_min": 284.056,
                "temp_max": 284.056,
                "pressure": 1011.15,
                "sea_level": 1011.15,
                "grnd_level": 1002.87,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 0.75,
                "deg": 204.503
            },
            "rain": {
                "3h": 2.605
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-20 12:00:00"
        },
        {
            "dt": 1553094000,
            "main": {
                "temp": 283.318,
                "temp_min": 283.318,
                "temp_max": 283.318,
                "pressure": 1011.9,
                "sea_level": 1011.9,
                "grnd_level": 1003.57,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 1.47,
                "deg": 13.0009
            },
            "rain": {
                "3h": 5.235
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-20 15:00:00"
        },
        {
            "dt": 1553104800,
            "main": {
                "temp": 283.651,
                "temp_min": 283.651,
                "temp_max": 283.651,
                "pressure": 1012.63,
                "sea_level": 1012.63,
                "grnd_level": 1004.31,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 1.82,
                "deg": 75.0052
            },
            "rain": {
                "3h": 4.255
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-20 18:00:00"
        },
        {
            "dt": 1553115600,
            "main": {
                "temp": 284.098,
                "temp_min": 284.098,
                "temp_max": 284.098,
                "pressure": 1013.09,
                "sea_level": 1013.09,
                "grnd_level": 1004.75,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 0.5,
                "deg": 112.502
            },
            "rain": {
                "3h": 2.015
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-20 21:00:00"
        },
        {
            "dt": 1553126400,
            "main": {
                "temp": 283.854,
                "temp_min": 283.854,
                "temp_max": 283.854,
                "pressure": 1014.02,
                "sea_level": 1014.02,
                "grnd_level": 1005.86,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 3.77,
                "deg": 277.003
            },
            "rain": {
                "3h": 1.025
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-21 00:00:00"
        },
        {
            "dt": 1553137200,
            "main": {
                "temp": 283.608,
                "temp_min": 283.608,
                "temp_max": 283.608,
                "pressure": 1015.11,
                "sea_level": 1015.11,
                "grnd_level": 1006.89,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 2.52,
                "deg": 267.005
            },
            "rain": {
                "3h": 0.43
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-21 03:00:00"
        },
        {
            "dt": 1553148000,
            "main": {
                "temp": 283.276,
                "temp_min": 283.276,
                "temp_max": 283.276,
                "pressure": 1016.44,
                "sea_level": 1016.44,
                "grnd_level": 1008.14,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 2.86,
                "deg": 249.01
            },
            "rain": {
                "3h": 0.12
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-21 06:00:00"
        },
        {
            "dt": 1553158800,
            "main": {
                "temp": 283.445,
                "temp_min": 283.445,
                "temp_max": 283.445,
                "pressure": 1017.59,
                "sea_level": 1017.59,
                "grnd_level": 1009.31,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 3.22,
                "deg": 265.004
            },
            "rain": {
                "3h": 0.14
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-21 09:00:00"
        },
        {
            "dt": 1553169600,
            "main": {
                "temp": 283.048,
                "temp_min": 283.048,
                "temp_max": 283.048,
                "pressure": 1018.05,
                "sea_level": 1018.05,
                "grnd_level": 1009.85,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 2.71,
                "deg": 259.009
            },
            "rain": {
                "3h": 0.009999999999998
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-21 12:00:00"
        },
        {
            "dt": 1553180400,
            "main": {
                "temp": 283.184,
                "temp_min": 283.184,
                "temp_max": 283.184,
                "pressure": 1019.52,
                "sea_level": 1019.52,
                "grnd_level": 1011.21,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 2.77,
                "deg": 246.005
            },
            "rain": {
                "3h": 0.15
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-21 15:00:00"
        },
        {
            "dt": 1553191200,
            "main": {
                "temp": 284.138,
                "temp_min": 284.138,
                "temp_max": 284.138,
                "pressure": 1020.87,
                "sea_level": 1020.87,
                "grnd_level": 1012.74,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 56
            },
            "wind": {
                "speed": 2.21,
                "deg": 246.002
            },
            "rain": {
                "3h": 0.12
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-21 18:00:00"
        },
        {
            "dt": 1553202000,
            "main": {
                "temp": 285.332,
                "temp_min": 285.332,
                "temp_max": 285.332,
                "pressure": 1020.41,
                "sea_level": 1020.41,
                "grnd_level": 1012.31,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 1.86,
                "deg": 254.501
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-21 21:00:00"
        },
        {
            "dt": 1553212800,
            "main": {
                "temp": 285.349,
                "temp_min": 285.349,
                "temp_max": 285.349,
                "pressure": 1019.93,
                "sea_level": 1019.93,
                "grnd_level": 1011.9,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3,
                "deg": 252.002
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-22 00:00:00"
        },
        {
            "dt": 1553223600,
            "main": {
                "temp": 283.213,
                "temp_min": 283.213,
                "temp_max": 283.213,
                "pressure": 1020.99,
                "sea_level": 1020.99,
                "grnd_level": 1012.81,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 2.27,
                "deg": 252.501
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-22 03:00:00"
        },
        {
            "dt": 1553234400,
            "main": {
                "temp": 281.274,
                "temp_min": 281.274,
                "temp_max": 281.274,
                "pressure": 1021.86,
                "sea_level": 1021.86,
                "grnd_level": 1013.52,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.46,
                "deg": 226.5
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-22 06:00:00"
        },
        {
            "dt": 1553245200,
            "main": {
                "temp": 280.356,
                "temp_min": 280.356,
                "temp_max": 280.356,
                "pressure": 1021.45,
                "sea_level": 1021.45,
                "grnd_level": 1013.07,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 1.65,
                "deg": 195.505
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-22 09:00:00"
        },
        {
            "dt": 1553256000,
            "main": {
                "temp": 280.571,
                "temp_min": 280.571,
                "temp_max": 280.571,
                "pressure": 1020.83,
                "sea_level": 1020.83,
                "grnd_level": 1012.59,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 2.22,
                "deg": 155.001
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-22 12:00:00"
        },
        {
            "dt": 1553266800,
            "main": {
                "temp": 281.458,
                "temp_min": 281.458,
                "temp_max": 281.458,
                "pressure": 1020.97,
                "sea_level": 1020.97,
                "grnd_level": 1012.63,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 2.86,
                "deg": 135.001
            },
            "rain": {
                "3h": 0.19
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-22 15:00:00"
        },
        {
            "dt": 1553277600,
            "main": {
                "temp": 282.569,
                "temp_min": 282.569,
                "temp_max": 282.569,
                "pressure": 1021.52,
                "sea_level": 1021.52,
                "grnd_level": 1013.24,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 2.5,
                "deg": 131.001
            },
            "rain": {
                "3h": 1.25
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-22 18:00:00"
        },
        {
            "dt": 1553288400,
            "main": {
                "temp": 284.212,
                "temp_min": 284.212,
                "temp_max": 284.212,
                "pressure": 1020.4,
                "sea_level": 1020.4,
                "grnd_level": 1012.29,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.11,
                "deg": 157.5
            },
            "rain": {
                "3h": 0.6
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-22 21:00:00"
        },
        {
            "dt": 1553299200,
            "main": {
                "temp": 284.682,
                "temp_min": 284.682,
                "temp_max": 284.682,
                "pressure": 1018.9,
                "sea_level": 1018.9,
                "grnd_level": 1010.56,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 5.11,
                "deg": 171.501
            },
            "rain": {
                "3h": 3.975
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-23 00:00:00"
        },
        {
            "dt": 1553310000,
            "main": {
                "temp": 284.869,
                "temp_min": 284.869,
                "temp_max": 284.869,
                "pressure": 1019.05,
                "sea_level": 1019.05,
                "grnd_level": 1010.85,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.06,
                "deg": 209.001
            },
            "rain": {
                "3h": 4.15
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-23 03:00:00"
        },
        {
            "dt": 1553320800,
            "main": {
                "temp": 284.06,
                "temp_min": 284.06,
                "temp_max": 284.06,
                "pressure": 1020.1,
                "sea_level": 1020.1,
                "grnd_level": 1012.01,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 32
            },
            "wind": {
                "speed": 3.22,
                "deg": 277.5
            },
            "rain": {
                "3h": 0.375
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-23 06:00:00"
        },
        {
            "dt": 1553331600,
            "main": {
                "temp": 283.408,
                "temp_min": 283.408,
                "temp_max": 283.408,
                "pressure": 1020.08,
                "sea_level": 1020.08,
                "grnd_level": 1011.85,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 2.57,
                "deg": 251
            },
            "rain": {
                "3h": 0.024999999999999
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-23 09:00:00"
        },
        {
            "dt": 1553342400,
            "main": {
                "temp": 282.245,
                "temp_min": 282.245,
                "temp_max": 282.245,
                "pressure": 1019.69,
                "sea_level": 1019.69,
                "grnd_level": 1011.47,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 3.2,
                "deg": 228.001
            },
            "rain": {
                "3h": 1.225
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-23 12:00:00"
        },
        {
            "dt": 1553353200,
            "main": {
                "temp": 282.392,
                "temp_min": 282.392,
                "temp_max": 282.392,
                "pressure": 1020.92,
                "sea_level": 1020.92,
                "grnd_level": 1012.64,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 0.16,
                "deg": 207.003
            },
            "rain": {
                "3h": 2.175
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-23 15:00:00"
        },
        {
            "dt": 1553364000,
            "main": {
                "temp": 284.105,
                "temp_min": 284.105,
                "temp_max": 284.105,
                "pressure": 1022.53,
                "sea_level": 1022.53,
                "grnd_level": 1014.27,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 48
            },
            "wind": {
                "speed": 1.43,
                "deg": 283.503
            },
            "rain": {
                "3h": 0.025000000000002
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-23 18:00:00"
        },
        {
            "dt": 1553374800,
            "main": {
                "temp": 286.238,
                "temp_min": 286.238,
                "temp_max": 286.238,
                "pressure": 1022.25,
                "sea_level": 1022.25,
                "grnd_level": 1014.11,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 2.86,
                "deg": 279.003
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-03-23 21:00:00"
        },
        {
            "dt": 1553385600,
            "main": {
                "temp": 286.456,
                "temp_min": 286.456,
                "temp_max": 286.456,
                "pressure": 1021.64,
                "sea_level": 1021.64,
                "grnd_level": 1013.42,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.26,
                "deg": 290.001
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-24 00:00:00"
        },
        {
            "dt": 1553396400,
            "main": {
                "temp": 284.536,
                "temp_min": 284.536,
                "temp_max": 284.536,
                "pressure": 1022.35,
                "sea_level": 1022.35,
                "grnd_level": 1014.05,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.32,
                "deg": 298.502
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-24 03:00:00"
        },
        {
            "dt": 1553407200,
            "main": {
                "temp": 283.304,
                "temp_min": 283.304,
                "temp_max": 283.304,
                "pressure": 1023.09,
                "sea_level": 1023.09,
                "grnd_level": 1014.73,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.56,
                "deg": 301.505
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-24 06:00:00"
        },
        {
            "dt": 1553418000,
            "main": {
                "temp": 281.605,
                "temp_min": 281.605,
                "temp_max": 281.605,
                "pressure": 1022.96,
                "sea_level": 1022.96,
                "grnd_level": 1014.51,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.84,
                "deg": 291.002
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-03-24 09:00:00"
        }
    ],
    "city": {
        "id": 5391959,
        "name": "San Francisco",
        "coord": {
            "lat": 37.7749,
            "lon": -122.4195
        },
        "country": "US"
    }
}
