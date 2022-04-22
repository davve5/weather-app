import React, { useEffect, useRef, useState } from "react";
import map from '../../helpers/map';

import Text from './Text';
import Path from './Path';

const TOP_PADDING = -40;
const TEXT_PADDING = 25;

const R = 5;

export type Point = {
	x: number,
	y: number,
	point: boolean,
	hour: string,
	nimTemperature: number,
	maxTemperature: number,
	icon: string
}

export type Data = {
	value: number,
	hour: string,
	nimTemperature: number,
	maxTemperature: number,
	icon: string,
}

interface LineChartProps {
	data: Data[],
	padding?: number
}

const LineChart: React.FC<LineChartProps> = ({ data, padding = 30 }) => {
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

      const xOutMin = detailsVisible ? 0 + padding : 0;
      const xOutMax = detailsVisible ? 0 + width - padding : width;

      const currentX = map(index, minXValue, maxXValue, xOutMin, xOutMax);

      const currentY = map(
        value,
        maxYValue,
        minYValue,
        height - padding,
        0 + padding
      );

      const line = {
        x1: currentX,
        y1: currentY,
        point: index === 6,
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
      className="w-full h-full bg-red-200"
      ref={svgRef}
    >
      <Path points={points} />
      {points.map(
        (
          { x1, x2, y1, y2, point, hour, nimTemperature, maxTemperature, icon },
          index
        ) => (
          <React.Fragment key={index}>
            {point && (
              <>
                <circle cx={x1} cy={y1} r={R * 2.5} fill="rgba(0, 0, 0, 0.1)" />
                <circle cx={x1} cy={y1} r={R} fill="black" />
              </>
            )}
            {maxTemperature && (
              <Text x={x1} y={y1 - 2 * TEXT_PADDING} text={maxTemperature} />
            )}
            {nimTemperature && (
              <Text x={x1} y={y1 - TEXT_PADDING} text={nimTemperature} />
            )}
            {hour && <Text x={x1} y={y1 + TEXT_PADDING} text={hour} />}
          </React.Fragment>
        )
      )}
    </svg>
  );
};

export default LineChart;
