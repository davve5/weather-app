import React from "react";

const STROKE = 2;
const COLOR = '#fff'

type Data = {
	x: number,
	y: number,
	label: string,
}

interface LineChartProps {
	data: Data[],
  height: number,
  width?: number,
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  height = 200,
	width = 500,
}) => {

	const maxXValue = Math.max(...data.map(d => d.x));
	const minXValue = Math.min(...data.map(d => d.x));

	const maxYValue = Math.max(...data.map(d => d.y));
	const minYValue = Math.min(...data.map(d => d.y));


	const getSvgX = (x: number) => (x / maxXValue * width);
  const getSvgY = (y: number) => height - (y / maxYValue * height);

	const makePath = () => {
		let pathD = ` M  ${getSvgX(data[0].x)} ${getSvgY(data[0].y)} `
		pathD += data.map((point, i) => {
			return `L ${getSvgX(point.x)} ${getSvgY(point.y)}  `
		})
	}
		
	const makeAxis = () => {
    return (
      <g className="linechart_axis">
        <line
          x1={getSvgX(minXValue)}
          y1={getSvgY(minYValue)}
          x2={getSvgX(maxXValue)}
          y2={getSvgY(minYValue)}
        />
        <line
          x1={getSvgX(minXValue)}
          y1={getSvgY(minYValue)}
          x2={getSvgX(minXValue)}
          y2={getSvgY(maxYValue)}
        />
      </g>
    )
  }

	return (
		<svg viewBox={`0 0 ${width} ${height}`}>
			{makePath()}
			{makeAxis()}
		</svg>
	)
};

export default LineChart;