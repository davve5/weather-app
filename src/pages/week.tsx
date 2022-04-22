import type { NextPage } from 'next'
import Image from 'next/image'
import rain from "@bybas/weather-icons/design/fill/animation-ready/rain.svg";
import cloudy from "@bybas/weather-icons/design/fill/animation-ready/cloudy.svg";
import thunderstorms from "@bybas/weather-icons/design/fill/animation-ready/thunderstorms.svg";
import partlyCloudyDay from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day.svg";

const WEEK = [
  {day: 'wed', maxTemp: 24, minTemp: 18, icon: rain, label: 'rainy'},
  {day: 'thu', maxTemp: 24, minTemp: 18, icon: thunderstorms, label: 'isolated thunderstormsny'},
  {day: 'fri', maxTemp: 26, minTemp: 19, icon: cloudy, label: 'cloudy'},
  {day: 'sat', maxTemp: 26, minTemp: 19, icon: rain, label: 'mostly cloudy'},
  {day: 'sun', maxTemp: 26, minTemp: 19, icon: partlyCloudyDay, label: 'cloudy'},
  {day: 'mon', maxTemp: 24, minTemp: 18, icon: thunderstorms, label: 'isolated thunderstormsny'},
  {day: 'tue', maxTemp: 26, minTemp: 18, icon: cloudy, label: 'cloudy'},
]

const AIR_CONDITION = [
  { color: 'green', index: 0, size: 1 },
  { color: 'yellow', index: 50, size: 1 },
  { color: 'orange', index: 100, size: 1 },
  { color: 'red', index: 150, size: 1 },
  { color: 'purple', index: 200, size: 2 },
  { color: 'rose', index: 300, size: 6 },
]


const Example: NextPage = () => {
  return (
    <main className="p-5 flex flex-col h-screen space-y-5">
      <section>
        <header className="font-semibold text-2xl mb-5 capitalize">This week</header>
        <ul className='space-y-4'>
          {WEEK.map(({ day, maxTemp, minTemp, icon, label }) => (
            <li key={day} className="flex items-cetner justify-between">
              <div className='flex flex-row items-center w-3/12'>
                <span className='text-xl text-slate-400 uppercase'>{day}</span>
              </div>
              <div className='w-3/12 space-x-2 flex flex-row items-center'>
                <span className='text-xl'>{maxTemp}&deg;</span>
                <span className=' text-slate-400'>{minTemp}&deg;</span>
              </div>
              <div className='w-1/2 space-x-2 flex flex-row items-center'>
                <Image src={icon} className="w-12 h-12" alt={label} />
                <span className='text-xl text-slate-400 truncate capitalize'>{label}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className='flex justify-between'>
          <header className="font-semibold text-2xl mb-5 capitalize">Air quality index</header>
          <div className='capitalize flex flex-col'>
            <span className='text-6xl'>72</span>
            <span className='text-right text-slate-800'>Moderate</span>
          </div>
        </div>
        <div>
          <div className='flex flex-row my-2'>
            {AIR_CONDITION.map(({ color, index, size }) => (
              <div key={index} className={`flex flex-col my-2 w-${size}/12`}>
                <span className='text-slate-500 pb-2'>{index}</span>
                <div className={`w-full h-2 bg-${color}-500`} />
              </div>
            ))}
          </div>
          <div className='capitalize text-sm text-slate-700 flex flex-row justify-between'>
            <span>good</span>
            <span>hazardous</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Example
