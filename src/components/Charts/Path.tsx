import type { Point } from './LineChart'

interface PathProps {
	points: Point[];
}

const Path: React.FC<PathProps> = ({ points }) => {
	const [{ x1, y1 }, ...rest] = points;

	return (
		<path
			d={`M ${x1} ${y1}` + rest.map(({ x1, y1 }) => `L ${x1} ${y1} `)}
			stroke="black"
			strokeWidth="2"
			fill="transparent"
			className="path"
		/>
	);
};

export default Path;
