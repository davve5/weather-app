import type { NextPage } from 'next'
import Image from 'next/image'
import map from '../helpers/map'
import { WEEK, AIR_CONDITION } from '../mock/weather'

const MIN_AIR_CONDITION = 0;
const MAX_AIR_CONDITION = 600;
const CURRENT_AIR_CONDITION = 50;

const Example: NextPage = () => {
  return (
    <main className="p-5 flex flex-col min-h-screen space-y-5 dark:bg-neutral-900">
      <section className='mb-auto'>
        <header className="font-semibold text-2xl mb-5 capitalize dark:text-white">This week</header>
        <ul className='space-y-7'>
          {WEEK.map(({ day, maxTemp, minTemp, icon, label }) => (
            <li key={day} className="flex items-cetner justify-between">
              <div className='flex items-center w-3/12'>
                <span className='text-xl text-slate-400 dark:text-slate-300 uppercase'>{day}</span>
              </div>
              <div className='w-3/12 space-x-2 flex items-center'>
                <span className='text-xl dark:text-white'>{maxTemp}&deg;</span>
                <span className=' text-slate-400 dark:text-slate-300'>{minTemp}&deg;</span>
              </div>
              <div className='w-1/2 space-x-2 flex items-center'>
                <Image src={icon}  className='w-16 h-16' width={64} height={64} alt={label} />
                <span className='w-full text-xl text-slate-400 dark:text-slate-300 truncate capitalize'>{label}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className='flex justify-between'>
          <header className="font-semibold text-2xl mb-5 capitalize dark:text-white">Air quality index</header>
          <div className='capitalize flex flex-col'>
            <span className='text-6xl dark:text-white'>72</span>
            <span className='text-right text-slate-800 dark:text-slate-200'>Moderate</span>
          </div>
        </div>
        <div>
          <div className='flex my-2 relative'>
            <span
              className='w-4 h-4 top-8 bg-blue-500 absolute rounded-full'
              style={{
                left: `${map(CURRENT_AIR_CONDITION, MIN_AIR_CONDITION, MAX_AIR_CONDITION, -0.5, 99.5)}%`
              }}
            />
            {AIR_CONDITION.map(({ color, index, size }) => (
              <div key={index} className={`flex flex-col my-2 w-${size}/12`}>
                <span className='text-sm text-slate-400 dark:text-slate-300 pb-2'>{index}</span>
                <span className={`w-full h-2 bg-${color}-500`} />
              </div>
            ))}
          </div>
          <div className='capitalize text-sm text-slate-700 dark:text-slate-200 flex justify-between'>
            <span>good</span>
            <span>hazardous</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Example
