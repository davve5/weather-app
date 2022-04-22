
interface TextProps {
	x: number;
	y: number;
  text: string | number;
  className?: string;
}

const Text: React.FC<TextProps> = ({ x, y, text, ...props }) => {
  return (
    <text x={x} y={y} dominantBaseline="middle" textAnchor="middle" {...props}>
      {text}
    </text>
  );
};

export default Text;