import React from "react";

const width = 800;
const height = 200;

const R = 5;

const clamp = (input, min, max) => {
  return input < min ? min : input > max ? max : input;
};

const map = (current, in_min, in_max, out_min, out_max) => {
  const mapped =
    ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  return clamp(mapped, out_min, out_max);
};

const Text = ({ x, y, text }) => {
  return (
    <text x={x} y={y} dominantBaseline="middle" textAnchor="middle">
      {text}
    </text>
  );
};

const Path = ({ points }) => {
  const [{ x1, y1 }] = points;

  return (
    <path
      d={`M  ${x1} ${y1}` + points.map(({ x2, y2 }) => ` L ${x2} ${y2}`)}
      stroke="black"
      strokeWidth="2"
      fill="transparent"
      className="path"
    />
  );
};

const MyChart = ({ points, padding = 80 }) => {
  const minXValue = 0;
  const maxXValue = points.length - 1;

  const minYValue = Math.min(...points.map((d) => d.value));
  const maxYValue = Math.max(...points.map((d) => d.value));

  const lines = points.reduce(
    (result, { value, hour, nimTemperature, maxTemperature, icon }, index) => {
      if (index === 0) return [];
      const { value: prevValue } = points[index - 1];

      const currentX = map(
        index,
        minXValue,
        maxXValue,
        0 + padding,
        width - padding
      );

      const currentY = map(
        value,
        maxYValue,
        minYValue,
        height - padding,
        0 + padding
      );

      const previousX = map(
        index - 1,
        minXValue,
        maxXValue,
        0 + padding,
        width - padding
      );

      const previousY = map(
        prevValue,
        maxYValue,
        minYValue,
        height - padding,
        0 + padding
      );

      const line = {
        x1: previousX,
        y1: previousY,
        x2: currentX,
        y2: currentY,
        point: index === 3,
        hour,
        nimTemperature,
        maxTemperature,
        icon
      };

      return [...result, line];
    },
    []
  );

  return (
    <svg
      width={width}
      height={height}
      style={{ backgroundColor: "rgba(0, 0, 0, .1)" }}
    >
      <Path points={lines} />
      {lines.map(
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
              <Text x={x1} y={y1 - 60} text={maxTemperature} />
            )}
            {nimTemperature && (
              <Text x={x1} y={y1 - 30} text={nimTemperature} />
            )}
            {hour && <Text x={x1} y={y1 + 30} text={hour} />}
          </React.Fragment>
        )
      )}
    </svg>
  );
};

export default MyChart;
