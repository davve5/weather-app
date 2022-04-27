import rainIcon from "@bybas/weather-icons/design/fill/animation-ready/rain.svg";
import cloudyIcon from "@bybas/weather-icons/design/fill/animation-ready/cloudy.svg";
import partlyCloudyDayIcon from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day.svg";
import clearDayIcon from "@bybas/weather-icons/design/fill/animation-ready/clear-day.svg";
import thunderstormsIcon from "@bybas/weather-icons/design/fill/animation-ready/thunderstorms.svg";

export const STATS = [
  { name: 'Pressure', value: '810mb' },
  { name: 'Visibility', value: '5 Km' },
  { name: 'Humidity', value: '94%' },
]

export const TODAY = [
  {
    value: 22,
    hour: "2 AM",
    nimTemperature: 18,
    maxTemperature: 22,
    icon: rainIcon
  },
  {
    value: 26,
    hour: "4 AM",
    nimTemperature: 18,
    maxTemperature: 26,
    icon: cloudyIcon
  },
  {
    value: 28,
    hour: "10 PM",
    nimTemperature: 18,
    maxTemperature: 28,
    icon: partlyCloudyDayIcon
  },
  {
    value: 28,
    hour: "1 AM",
    nimTemperature: 18,
    maxTemperature: 28,
    icon: cloudyIcon
  },
  {
    value: 24,
    hour: "4 AM",
    nimTemperature: 17,
    maxTemperature: 24,
    icon: clearDayIcon
  },
  {
    value: 24,
    hour: "7 AM",
    nimTemperature: 17,
    maxTemperature: 24,
    icon: clearDayIcon
  },
  {
    value: 24,
    hour: "10 AM",
    nimTemperature: 17,
    maxTemperature: 24,
    icon: clearDayIcon
  }
];

export const WEEK = [
  {day: 'wed', maxTemp: 24, minTemp: 18, icon: rainIcon, label: 'rainy'},
  {day: 'thu', maxTemp: 24, minTemp: 18, icon: thunderstormsIcon, label: 'isolated thunderstormsny'},
  {day: 'fri', maxTemp: 26, minTemp: 19, icon: cloudyIcon, label: 'cloudy'},
  {day: 'sat', maxTemp: 26, minTemp: 19, icon: rainIcon, label: 'mostly cloudy'},
  {day: 'sun', maxTemp: 26, minTemp: 19, icon: partlyCloudyDayIcon, label: 'cloudy'},
  {day: 'mon', maxTemp: 24, minTemp: 18, icon: thunderstormsIcon, label: 'isolated thunderstormsny'},
  {day: 'tue', maxTemp: 26, minTemp: 18, icon: cloudyIcon, label: 'cloudy'},
]

export const AIR_CONDITION = [
  { color: 'bg-green-500', index: 0, size: 'w-1/12' },
  { color: 'bg-yellow-500', index: 50, size: 'w-1/12' },
  { color: 'bg-orange-500', index: 100, size: 'w-1/12' },
  { color: 'bg-red-500', index: 150, size: 'w-1/12' },
  { color: 'bg-purple-500', index: 200, size: 'w-2/12' },
  { color: 'bg-rose-500', index: 300, size: 'w-6/12' },
]
