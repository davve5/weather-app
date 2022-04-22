import type { NextPage } from 'next'
import LineChart from '../components/Charts/LineChart';

const DATA = [
  {
    value: 22,
    hour: "2 AM",
    nimTemperature: 18,
    maxTemperature: 22,
    icon: "icon"
  },
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
  },
  {
    value: 24,
    hour: "10 AM",
    nimTemperature: 17,
    maxTemperature: 24,
    icon: "icon"
  }
];

const Example: NextPage = () => {
  return (
    <main className="p-5 flex flex-col h-screen">
    	<LineChart data={DATA} />
    </main>
  )
}

export default Example
