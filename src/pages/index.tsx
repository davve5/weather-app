import type { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'
import partlyCloudyDay from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day.svg";
import LineChart from '../components/Charts/LineChart';

import convertDtToDate from '../helpers/convertDtToDate';

import { TODAY, STATS } from '../mock/weather'
import API from '../mock/API'
import type { WeatherResponse } from '../types';

interface HomeProps {
  weather: WeatherResponse,
  city: string,
  country: string,
}

const Home: NextPage<HomeProps> = ({ geo, weather, city, country }: any) => {
  const { dayOfWeek, hour } = convertDtToDate(weather?.current?.dt)

  console.log(geo)

  return (
    <main className="p-5 flex flex-col min-h-screen">
      <h1 className="font-semibold text-3xl">{city}, {country}</h1>
      <span className='text-xl text-slate-500'>{dayOfWeek}, {hour}</span>
      <div className='flex flex-col items-center space-y-2'>
        <Image
          className=''
          src={partlyCloudyDay}
          alt={"Prartly Cloudy"}
          width={200}
          height={200}
        />
        <span className='font-semibold text-5xl'>{API.current.temp.toFixed(0)}&deg;</span>
        <span className='text-xl text-slate-500'>{API.current.weather[0].main}</span>
      </div>
      <section className='bg-slate-100 rounded-xl text-xl mt-auto'>
        <div className='p-4 space-y-5'>
          <span className='text-2xl'>Today</span>
          <div className='flex justify-between'>
            {STATS.map(({ name, value }) => (
              <div key={name} className='flex flex-col items-center justify-center'>
                <span className='text-slate-500'>{name}</span>
                <span className='font-semibold'>{value}</span>
              </div>
            ))}
          </div>
        </div>
        {/* <LineChart data={API.hourly} /> */}
      </section>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { city, country, latitude, longitude } = JSON.parse(req.cookies.geo)

  const geo = JSON.parse(req.cookies.geo)

	const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely&appid=${process.env.WEATHER_API_KEY}`
  
  const response = await fetch(API_URL);
  const data = await response.json();

  return {
    props: { geo: geo, city, country, weather: data },
  };
};

export default Home
