
interface TextProps {
	x: number;
	y: number;
	text: string | number;
}

const Text: React.FC<TextProps> = ({ x, y, text }) => {
  return (
    <text x={x} y={y} dominantBaseline="middle" textAnchor="middle">
      {text}
    </text>
  );
};

export default Text;