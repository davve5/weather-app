import React, { useEffect, useRef, useState } from "react";
import map from '../../helpers/map';

import Text from './Text';
import Path from './Path';

const PADDING = 20;

const R = 5;

export type Point = {
	x: number,
	y: number,
	point: boolean,
	hour: string | null,
	nimTemperature: number | null,
	maxTemperature: number | null,
	icon: string
}

export type Data = {
	value: number,
	hour: string,
	nimTemperature: number | null,
	maxTemperature: number | null,
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

  const minYValue = Math.min(...data.map((d) => d.value));
  const maxYValue = Math.max(...data.map((d) => d.value));


  const points = data.reduce(
    (result: Point[], { value, hour, nimTemperature, maxTemperature, icon }, index) => {
      const detailsVisible = index !== 0 && index !== maxXValue;

      const x = map(index, minXValue, maxXValue, 0, width);

      const y = map(
        value,
        maxYValue,
        minYValue,
        height - 2.5 * PADDING, // height - PADDING,
        height - 5 * PADDING // 0 + PADDING
      );

      const line = {
        x,
        y,
        point: index === 3,
        hour: detailsVisible ? hour : null,
        nimTemperature: detailsVisible ? nimTemperature : null,
        maxTemperature: detailsVisible ? maxTemperature : null,
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
          { x, y, point, hour, nimTemperature, maxTemperature, icon },
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
            {maxTemperature && (
              <Text x={x} y={y - 2 * PADDING} text={maxTemperature} />
            )}
            {nimTemperature && (
              <Text x={x} y={y - PADDING} text={nimTemperature} />
            )}
            {hour && <Text x={x} y={y + PADDING} text={hour} className={'text-xl text-slate-500'} />}
          </React.Fragment>
        )
      )}
    </svg>
  );
};

export default LineChart;
