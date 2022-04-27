import { useEffect, useState } from "react";
import useUserGeolocation from "./useUserGeolocation";

export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Current {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	weather: Weather[];
}

export interface Hourly {
	dt: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: Weather[];
	pop: number;
}

export interface Temp {
	day: number;
	min: number;
	max: number;
	night: number;
	eve: number;
	morn: number;
}

export interface FeelsLike {
	day: number;
	night: number;
	eve: number;
	morn: number;
}

export interface Daily {
	dt: number;
	sunrise: number;
	sunset: number;
	moonrise: number;
	moonset: number;
	moon_phase: number;
	temp: Temp;
	feels_like: FeelsLike;
	pressure: number;
	humidity: number;
	dew_point: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: Weather[];
	clouds: number;
	pop: number;
	uvi: number;
}

export interface WeatherResponse {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current: Current;
	hourly: Hourly[];
	daily: Daily[];
}

const API_KEY = ''

const useWeather = () => {
	const { latitude = '33.44', longitude = '-94.04' } = useUserGeolocation()
	const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely&appid=${API_KEY}`

	const [weather, setWeather] = useState<WeatherResponse | {}>({});

	useEffect(() => {
		fetch(API_URL).then(res => res.json()).then(data => setWeather(data))
	}, [API_URL]);
	return weather;
}


export default useWeather