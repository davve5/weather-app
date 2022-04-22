import type { Point } from './LineChart'

interface PathProps {
	points: Point[];
}

const Path: React.FC<PathProps> = ({ points }) => {
	const [{ x, y }, ...rest] = points;

	return (
		<path
			d={`M ${x} ${y}` + rest.map(({ x, y }) => `L ${x} ${y} `)}
			stroke="black"
			strokeWidth="2"
			fill="transparent"
		/>
	);
};

export default Path;
