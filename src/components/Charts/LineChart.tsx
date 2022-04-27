import React, { useEffect, useRef, useState } from "react";
import map from '../../helpers/map';

import Text from './Text';
import Path from './Path';

const PADDING = 20;

const R = 5;

type Temperature = number | null
type Hour = string | null

export type Point = {
	x: number,
	y: number,
	point: boolean,
	hour: Hour,
	nimTemperature: Temperature,
	maxTemperature: Temperature,
	icon: string
}

interface Weather {
  id: number,
  main: string,
  description: string,
  icon: string
}

interface Hourly {
  dt: number,
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  dew_point: number,
  uvi: number,
  clouds: number,
  visibility: number,
  wind_speed: number,
  wind_deg: number,
  wind_gust: number,
  weather: Weather[],
  pop: number
}

export type Data = {
  dt: number,
  temp: number,
  feels_like: number,
	icon: string,
}

interface LineChartProps {
	data: Data[],
	padding?: number
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const svgRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const minXValue = 0;
  const maxXValue = data.length - 1;

  const minYValue = Math.min(...data.map((d) => d.temp));
  const maxYValue = Math.max(...data.map((d) => d.temp));


  const points = data.reduce(
    (result: Point[], { temp, dt, feels_like, icon }, index) => {
      const detailsVisible = index !== 0 && index !== maxXValue;

      const x = map(index, minXValue, maxXValue, 0, width);

      const y = map(
        temp,
        maxYValue,
        minYValue,
        height - 2.5 * PADDING, // height - PADDING,
        height - 5 * PADDING // 0 + PADDING
      );

      const line = {
        x,
        y,
        point: index === 3,
        hour: detailsVisible ? dt : null,
        temp: detailsVisible ? temp : null,
        feels_like: detailsVisible ? feels_like : null,
        icon
      };

      return [...result, line];
    },
    []
  );

  useEffect(() => {
    const svg = svgRef.current;
    if (svg) {
      setWidth(svg.clientWidth);
      setHeight(svg.clientHeight);
    }
  })

  return (
    <svg
      className="w-full h-60"
      ref={svgRef}
    >
      <Path points={points} />
      {points.map(
        (
          { x, y, point, dt, temp, feels_like, icon },
          index
        ) => (
          <React.Fragment key={index}>
            {point && (
              <>
                <circle cx={x} cy={y} r={R * 2.5} fill="rgba(0, 0, 0, 0.1)" />
                <circle cx={x} cy={y} r={R} fill="black" />
              </>
            )}
            {/* {icon && (
              // <image xlinkHref={icon} height="200" width="200" />
            )} */}
            {temp && (
              <Text x={x} y={y - 2 * PADDING} text={temp} />
            )}
            {feels_like && (
              <Text x={x} y={y - PADDING} text={feels_like} />
            )}
            {dt && <Text x={x} y={y + PADDING} text={dt} className={'text-xl text-slate-500'} />}
          </React.Fragment>
        )
      )}
    </svg>
  );
};

export default LineChart;
