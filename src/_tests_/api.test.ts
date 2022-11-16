import { expect, test, describe } from "vitest";

import {
  formatWeather,
  kelvinToCelcius,
  type Weather,
  type RawWeather,
} from "../api";

/*
Test unitarios
*/

describe("KelvinToCelcius", () => {
  test("should convert temperatures from kelvin to celcius", () => {
    expect(kelvinToCelcius(288.24)).toBe(15);
    expect(kelvinToCelcius(290.24)).toBe(17);
  });
});

describe("formatWeather", () => {
  const RESPONSE: RawWeather = {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1668632400,
        main: {
          temp: 307.86,
          feels_like: 305.59,
          temp_min: 307.86,
          temp_max: 308.14,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 927,
          humidity: 17,
          temp_kf: -0.28,
        },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
        ],
        clouds: { all: 20 },
        wind: { speed: 2.38, deg: 167, gust: 2.36 },
        visibility: 10000,
        pop: 0.01,
        sys: { pod: "d" },
        dt_txt: "2022-11-16 21:00:00",
      },
      {
        dt: 1668643200,
        main: {
          temp: 306.54,
          feels_like: 304.41,
          temp_min: 303.91,
          temp_max: 306.54,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 928,
          humidity: 19,
          temp_kf: 2.63,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10n" },
        ],
        clouds: { all: 24 },
        wind: { speed: 1.92, deg: 202, gust: 6.24 },
        visibility: 10000,
        pop: 0.3,
        rain: { "3h": 0.21 },
        sys: { pod: "n" },
        dt_txt: "2022-11-17 00:00:00",
      },
      {
        dt: 1668654000,
        main: {
          temp: 301.3,
          feels_like: 300.81,
          temp_min: 298.02,
          temp_max: 301.3,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 930,
          humidity: 38,
          temp_kf: 3.28,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10n" },
        ],
        clouds: { all: 29 },
        wind: { speed: 8.17, deg: 212, gust: 10.79 },
        visibility: 10000,
        pop: 0.68,
        rain: { "3h": 0.68 },
        sys: { pod: "n" },
        dt_txt: "2022-11-17 03:00:00",
      },
      {
        dt: 1668664800,
        main: {
          temp: 296.75,
          feels_like: 296.47,
          temp_min: 296.75,
          temp_max: 296.75,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 928,
          humidity: 50,
          temp_kf: 0,
        },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
        ],
        clouds: { all: 17 },
        wind: { speed: 5.79, deg: 206, gust: 8.84 },
        visibility: 10000,
        pop: 0.46,
        sys: { pod: "n" },
        dt_txt: "2022-11-17 06:00:00",
      },
      {
        dt: 1668675600,
        main: {
          temp: 295.44,
          feels_like: 295.11,
          temp_min: 295.44,
          temp_max: 295.44,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 927,
          humidity: 53,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
        clouds: { all: 0 },
        wind: { speed: 3.9, deg: 196, gust: 6.76 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2022-11-17 09:00:00",
      },
      {
        dt: 1668686400,
        main: {
          temp: 298.52,
          feels_like: 298.26,
          temp_min: 298.52,
          temp_max: 298.52,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 929,
          humidity: 44,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 0 },
        wind: { speed: 5.3, deg: 170, gust: 5.65 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-17 12:00:00",
      },
      {
        dt: 1668697200,
        main: {
          temp: 302.63,
          feels_like: 301.72,
          temp_min: 302.63,
          temp_max: 302.63,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 928,
          humidity: 34,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 0 },
        wind: { speed: 4.59, deg: 155, gust: 4.3 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-17 15:00:00",
      },
      {
        dt: 1668708000,
        main: {
          temp: 305.75,
          feels_like: 304.3,
          temp_min: 305.75,
          temp_max: 305.75,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 927,
          humidity: 27,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 3 },
        wind: { speed: 4.34, deg: 154, gust: 3.49 },
        visibility: 10000,
        pop: 0.1,
        sys: { pod: "d" },
        dt_txt: "2022-11-17 18:00:00",
      },
      {
        dt: 1668718800,
        main: {
          temp: 306.41,
          feels_like: 304.71,
          temp_min: 306.41,
          temp_max: 306.41,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 925,
          humidity: 24,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 4 },
        wind: { speed: 3.85, deg: 165, gust: 3.64 },
        visibility: 10000,
        pop: 0.16,
        sys: { pod: "d" },
        dt_txt: "2022-11-17 21:00:00",
      },
      {
        dt: 1668729600,
        main: {
          temp: 301.81,
          feels_like: 300.98,
          temp_min: 301.81,
          temp_max: 301.81,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 927,
          humidity: 34,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
        clouds: { all: 5 },
        wind: { speed: 5.5, deg: 153, gust: 8.5 },
        visibility: 10000,
        pop: 0.16,
        sys: { pod: "n" },
        dt_txt: "2022-11-18 00:00:00",
      },
      {
        dt: 1668740400,
        main: {
          temp: 300.24,
          feels_like: 299.98,
          temp_min: 300.24,
          temp_max: 300.24,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 927,
          humidity: 38,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
        clouds: { all: 8 },
        wind: { speed: 4.14, deg: 220, gust: 5.96 },
        visibility: 10000,
        pop: 0.2,
        sys: { pod: "n" },
        dt_txt: "2022-11-18 03:00:00",
      },
      {
        dt: 1668751200,
        main: {
          temp: 299.09,
          feels_like: 298.78,
          temp_min: 299.09,
          temp_max: 299.09,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 925,
          humidity: 40,
          temp_kf: 0,
        },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
        ],
        clouds: { all: 12 },
        wind: { speed: 3.22, deg: 201, gust: 5.35 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2022-11-18 06:00:00",
      },
      {
        dt: 1668762000,
        main: {
          temp: 296.91,
          feels_like: 296.57,
          temp_min: 296.91,
          temp_max: 296.91,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 925,
          humidity: 47,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
        clouds: { all: 0 },
        wind: { speed: 3.72, deg: 192, gust: 5.34 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2022-11-18 09:00:00",
      },
      {
        dt: 1668772800,
        main: {
          temp: 300.34,
          feels_like: 300,
          temp_min: 300.34,
          temp_max: 300.34,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 927,
          humidity: 37,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 0 },
        wind: { speed: 4.67, deg: 157, gust: 4.89 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-18 12:00:00",
      },
      {
        dt: 1668783600,
        main: {
          temp: 304.07,
          feels_like: 302.8,
          temp_min: 304.07,
          temp_max: 304.07,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 926,
          humidity: 30,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 0 },
        wind: { speed: 5.2, deg: 147, gust: 4.38 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-18 15:00:00",
      },
      {
        dt: 1668794400,
        main: {
          temp: 306.85,
          feels_like: 305.32,
          temp_min: 306.85,
          temp_max: 306.85,
          pressure: 1004,
          sea_level: 1004,
          grnd_level: 924,
          humidity: 25,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 2 },
        wind: { speed: 4.99, deg: 160, gust: 4.1 },
        visibility: 10000,
        pop: 0.08,
        sys: { pod: "d" },
        dt_txt: "2022-11-18 18:00:00",
      },
      {
        dt: 1668805200,
        main: {
          temp: 306.69,
          feels_like: 305.02,
          temp_min: 306.69,
          temp_max: 306.69,
          pressure: 1002,
          sea_level: 1002,
          grnd_level: 922,
          humidity: 24,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: { all: 35 },
        wind: { speed: 3.88, deg: 199, gust: 3.9 },
        visibility: 10000,
        pop: 0.16,
        sys: { pod: "d" },
        dt_txt: "2022-11-18 21:00:00",
      },
      {
        dt: 1668816000,
        main: {
          temp: 302.94,
          feels_like: 301.71,
          temp_min: 302.94,
          temp_max: 302.94,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 923,
          humidity: 30,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10n" },
        ],
        clouds: { all: 27 },
        wind: { speed: 3.25, deg: 197, gust: 5.7 },
        visibility: 10000,
        pop: 0.29,
        rain: { "3h": 0.16 },
        sys: { pod: "n" },
        dt_txt: "2022-11-19 00:00:00",
      },
      {
        dt: 1668826800,
        main: {
          temp: 297.94,
          feels_like: 297.83,
          temp_min: 297.94,
          temp_max: 297.94,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 925,
          humidity: 52,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10n" },
        ],
        clouds: { all: 50 },
        wind: { speed: 7.14, deg: 173, gust: 10.19 },
        visibility: 10000,
        pop: 0.94,
        rain: { "3h": 1.31 },
        sys: { pod: "n" },
        dt_txt: "2022-11-19 03:00:00",
      },
      {
        dt: 1668837600,
        main: {
          temp: 294.57,
          feels_like: 294.57,
          temp_min: 294.57,
          temp_max: 294.57,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 925,
          humidity: 69,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10n" },
        ],
        clouds: { all: 28 },
        wind: { speed: 7.11, deg: 188, gust: 9.36 },
        visibility: 10000,
        pop: 0.87,
        rain: { "3h": 0.5 },
        sys: { pod: "n" },
        dt_txt: "2022-11-19 06:00:00",
      },
      {
        dt: 1668848400,
        main: {
          temp: 292.99,
          feels_like: 292.99,
          temp_min: 292.99,
          temp_max: 292.99,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 926,
          humidity: 75,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10n" },
        ],
        clouds: { all: 25 },
        wind: { speed: 3.81, deg: 170, gust: 5.44 },
        visibility: 10000,
        pop: 0.46,
        rain: { "3h": 0.48 },
        sys: { pod: "n" },
        dt_txt: "2022-11-19 09:00:00",
      },
      {
        dt: 1668859200,
        main: {
          temp: 295.55,
          feels_like: 295.44,
          temp_min: 295.55,
          temp_max: 295.55,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 927,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: { all: 43 },
        wind: { speed: 1.61, deg: 191, gust: 2.98 },
        visibility: 10000,
        pop: 0.31,
        sys: { pod: "d" },
        dt_txt: "2022-11-19 12:00:00",
      },
      {
        dt: 1668870000,
        main: {
          temp: 300.7,
          feels_like: 300.38,
          temp_min: 300.7,
          temp_max: 300.7,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 926,
          humidity: 39,
          temp_kf: 0,
        },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
        ],
        clouds: { all: 14 },
        wind: { speed: 2.79, deg: 120, gust: 2.76 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-19 15:00:00",
      },
      {
        dt: 1668880800,
        main: {
          temp: 304.1,
          feels_like: 302.66,
          temp_min: 304.1,
          temp_max: 304.1,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 923,
          humidity: 28,
          temp_kf: 0,
        },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
        ],
        clouds: { all: 12 },
        wind: { speed: 3.24, deg: 88, gust: 2.31 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-19 18:00:00",
      },
      {
        dt: 1668891600,
        main: {
          temp: 304.78,
          feels_like: 303.18,
          temp_min: 304.78,
          temp_max: 304.78,
          pressure: 1002,
          sea_level: 1002,
          grnd_level: 922,
          humidity: 26,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: { all: 25 },
        wind: { speed: 5.04, deg: 89, gust: 2.99 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-19 21:00:00",
      },
      {
        dt: 1668902400,
        main: {
          temp: 300.96,
          feels_like: 300.41,
          temp_min: 300.96,
          temp_max: 300.96,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 922,
          humidity: 36,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: { all: 41 },
        wind: { speed: 3.97, deg: 92, gust: 6.04 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2022-11-20 00:00:00",
      },
      {
        dt: 1668913200,
        main: {
          temp: 298.83,
          feels_like: 298.65,
          temp_min: 298.83,
          temp_max: 298.83,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 923,
          humidity: 46,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
        clouds: { all: 4 },
        wind: { speed: 1.53, deg: 179, gust: 2.26 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2022-11-20 03:00:00",
      },
      {
        dt: 1668924000,
        main: {
          temp: 290.52,
          feels_like: 290.43,
          temp_min: 290.52,
          temp_max: 290.52,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 926,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10n" },
        ],
        clouds: { all: 24 },
        wind: { speed: 9.09, deg: 170, gust: 11.88 },
        visibility: 6429,
        pop: 0.83,
        rain: { "3h": 2.92 },
        sys: { pod: "n" },
        dt_txt: "2022-11-20 06:00:00",
      },
      {
        dt: 1668934800,
        main: {
          temp: 290.03,
          feels_like: 289.26,
          temp_min: 290.03,
          temp_max: 290.03,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 930,
          humidity: 57,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10n" },
        ],
        clouds: { all: 100 },
        wind: { speed: 7.63, deg: 188, gust: 10.63 },
        visibility: 10000,
        pop: 0.68,
        rain: { "3h": 0.5 },
        sys: { pod: "n" },
        dt_txt: "2022-11-20 09:00:00",
      },
      {
        dt: 1668945600,
        main: {
          temp: 289.92,
          feels_like: 288.93,
          temp_min: 289.92,
          temp_max: 289.92,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 932,
          humidity: 49,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 7.81, deg: 169, gust: 9.29 },
        visibility: 10000,
        pop: 0.44,
        sys: { pod: "d" },
        dt_txt: "2022-11-20 12:00:00",
      },
      {
        dt: 1668956400,
        main: {
          temp: 292.62,
          feels_like: 291.51,
          temp_min: 292.62,
          temp_max: 292.62,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 933,
          humidity: 34,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 59 },
        wind: { speed: 6.3, deg: 162, gust: 6.71 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-20 15:00:00",
      },
      {
        dt: 1668967200,
        main: {
          temp: 295.35,
          feels_like: 294.33,
          temp_min: 295.35,
          temp_max: 295.35,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 932,
          humidity: 27,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 61 },
        wind: { speed: 6.06, deg: 137, gust: 5.52 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-20 18:00:00",
      },
      {
        dt: 1668978000,
        main: {
          temp: 295.65,
          feels_like: 294.63,
          temp_min: 295.65,
          temp_max: 295.65,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 931,
          humidity: 26,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 52 },
        wind: { speed: 5.02, deg: 116, gust: 4 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-20 21:00:00",
      },
      {
        dt: 1668988800,
        main: {
          temp: 292.56,
          feels_like: 291.34,
          temp_min: 292.56,
          temp_max: 292.56,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 933,
          humidity: 30,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: { all: 50 },
        wind: { speed: 4.49, deg: 107, gust: 6.55 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2022-11-21 00:00:00",
      },
      {
        dt: 1668999600,
        main: {
          temp: 289.71,
          feels_like: 288.2,
          temp_min: 289.71,
          temp_max: 289.71,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 935,
          humidity: 30,
          temp_kf: 0,
        },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
        ],
        clouds: { all: 20 },
        wind: { speed: 0.99, deg: 118, gust: 2.31 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2022-11-21 03:00:00",
      },
      {
        dt: 1669010400,
        main: {
          temp: 288.28,
          feels_like: 286.63,
          temp_min: 288.28,
          temp_max: 288.28,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 933,
          humidity: 30,
          temp_kf: 0,
        },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
        ],
        clouds: { all: 11 },
        wind: { speed: 0.65, deg: 116, gust: 1.51 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2022-11-21 06:00:00",
      },
      {
        dt: 1669021200,
        main: {
          temp: 286.87,
          feels_like: 285.16,
          temp_min: 286.87,
          temp_max: 286.87,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 932,
          humidity: 33,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
        clouds: { all: 0 },
        wind: { speed: 1.36, deg: 67, gust: 1.92 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2022-11-21 09:00:00",
      },
      {
        dt: 1669032000,
        main: {
          temp: 290.76,
          feels_like: 289.26,
          temp_min: 290.76,
          temp_max: 290.76,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 932,
          humidity: 26,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 0 },
        wind: { speed: 2.25, deg: 63, gust: 2.29 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-21 12:00:00",
      },
      {
        dt: 1669042800,
        main: {
          temp: 294.78,
          feels_like: 293.63,
          temp_min: 294.78,
          temp_max: 294.78,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 931,
          humidity: 24,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 0 },
        wind: { speed: 3.93, deg: 44, gust: 3.9 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-21 15:00:00",
      },
      {
        dt: 1669053600,
        main: {
          temp: 298.11,
          feels_like: 297.24,
          temp_min: 298.11,
          temp_max: 298.11,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 928,
          humidity: 22,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 3 },
        wind: { speed: 4.87, deg: 43, gust: 4.49 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2022-11-21 18:00:00",
      },
    ],
    city: {
      id: 3844421,
      name: "Mendoza",
      coord: { lat: -32.8884, lon: -68.8388 },
      country: "AR",
      population: 876884,
      timezone: -10800,
      sunrise: 1668590712,
      sunset: 1668640519,
    },
  };

  test("should format raw weather correctly", () => {
    const actual = formatWeather(RESPONSE);
    const expected: Weather = {
      city: {
        id: "3844421",
        name: "Mendoza",
      },
      forecast: [
        { date: "16/11/2022", min: 35, max: 35 },
        { date: "17/11/2022", min: 33, max: 33 },
        { date: "18/11/2022", min: 34, max: 34 },
        { date: "19/11/2022", min: 32, max: 32 },
        { date: "20/11/2022", min: 23, max: 23 },
      ],
    };
    expect(actual).toStrictEqual(expected);
  });
});
