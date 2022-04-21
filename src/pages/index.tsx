import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import partlyCloudyDay from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

export const options = {
  plugins: {
    legend: {
      display: false
    },
  },
  elements: {
    line: {
      tension: 0.2,
      borderJoinStyle: 'round',
      borederWidth: 2,
      borderColor: 'rgba(0, 0, 0, 1)',
      fill: 'start',
      // backgroundColor: 'rgba(0, 0, 0, .3)',
    },
    // point: {
    //   radius: 0,
    //   hitRadius: 0,
    // }
  },
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
          callback: (value: number, index: number) => labels[index]
      }
    },
  },
};

const labels = ['4 PM', '10 PM', '1 AM', '4 AM', '7 AM'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Today',
      data: [18, 15, 16, 17, 17, 14],
      pointBackgroundColor: ['transparent', 'transparent', '#000000', 'transparent', 'transparent', 'transparent'],
      pointBorderColor: ['transparent', 'transparent', 'rgba(0, 0, 0, 0.2)', 'transparent', 'transparent', 'transparent'],
      pointBorderWidth: [0, 0, 12, 0, 0, 0]
    },
  ],
};

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
            <Line options={options} data={data} />
          </div>
      </section>
    </main>
  )
}

export default Home
