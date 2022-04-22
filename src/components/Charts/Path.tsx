import type { Point } from './LineChart'

interface PathProps {
	points: Point[];
}

const Path: React.FC<PathProps> = ({ points }) => {
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

export default Path;