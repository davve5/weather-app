import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import partlyCloudyDay from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day.svg";
import LineChart from '../components/Charts/LineChart';

const DATA = [
  {
    value: 26,
    hour: "4 AM",
    nimTemperature: 18,
    maxTemperature: 26,
    icon: "icon"
  },
  {
    value: 28,
    hour: "10 PM",
    nimTemperature: 18,
    maxTemperature: 28,
    icon: "icon"
  },
  {
    value: 28,
    hour: "1 AM",
    nimTemperature: 18,
    maxTemperature: 28,
    icon: "icon"
  },
  {
    value: 24,
    hour: "4 AM",
    nimTemperature: 17,
    maxTemperature: 24,
    icon: "icon"
  },
  {
    value: 24,
    hour: "7 AM",
    nimTemperature: 17,
    maxTemperature: 24,
    icon: "icon"
  }
];

const STATS = [
  { name: 'Pressure', value: '810mb' },
  { name: 'Visibility', value: '5 Km' },
  { name: 'Humidity', value: '94%' },
]

const Home: NextPage = () => {
  return (
    <main className="p-5 flex flex-col h-screen">
      <h1 className="font-semibold text-3xl">Calicut, Kerala</h1>
      <span className='text-xl text-slate-500'>Sunday, 1 AM</span>
      <div className='flex flex-col items-center space-y-2'>
        <Image
          className=''
          src={partlyCloudyDay}
          alt={"Prartly Cloudy"}
          width={200}
          height={200}
        />
        <span className='font-semibold text-5xl'>28&deg;</span>
        <span className='text-xl text-slate-500'>Prartly Cloudy</span>
      </div>
      <section className='p-4 bg-slate-100 rounded-xl text-xl mt-auto space-y-5'>
        <span className='text-2xl'>Today</span>
        <div className='flex justify-between'>
          {STATS.map(({ name, value }) => (
            <div key={name} className='flex flex-col items-center justify-center'>
              <span className='text-slate-500'>{name}</span>
              <span className='font-semibold'>{value}</span>
            </div>
          ))}
        </div>
          <div className='pt-10'>
            <LineChart data={DATA} />
          </div>
      </section>
    </main>
  )
}

export default Home
