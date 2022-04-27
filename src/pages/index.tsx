import type { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'
import partlyCloudyDay from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day.svg";
import LineChart from '../components/Charts/LineChart';

import { TODAY, STATS } from '../mock/weather'
import API from '../mock/API'
import useWeather from '../hooks/useWeather';

const convertDtToDate = (dt: number = new Date().getUTCMilliseconds()) => {
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const date = new Date(dt * 1000)
  const dayOfWeek = weekday[date.getDay()];
  const hour = date.getHours();
  
  return {
    dayOfWeek,
    hour
  }
}

const Home: NextPage = ({ weather, ip }: any) => {
  // const weather = useWeather()

  const { dayOfWeek, hour } = convertDtToDate(weather?.current?.dt)

  return (
    <main className="p-5 flex flex-col min-h-screen">
      <h1 className="font-semibold text-3xl">Calicut, Kerala</h1>
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
  const location = { latitude: '10.8', longitude: '76.7' }
	const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=metric&exclude=minutely&appid=${process.env.WEATHER_API_KEY}`
  
  const response = await fetch(API_URL);
  const data = await response.json();

  const forwarded = req.headers['x-forwarded-for'];

  const ip = typeof forwarded === 'string' ? forwarded.split(/, /)[0] : req.socket.remoteAddress;

  console.log(ip);

  return {
    props: { weather: data, ip },
  };
};

export default Home
