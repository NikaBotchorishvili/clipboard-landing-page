type Props = {
	text: string;
	colorClass: string;
};
const Button: React.FC<Props> = ({ text, colorClass }) => {
	return (
		<button
			className={`text-white active:bg-opacity-80 font-bold px-5 py-2 rounded-full ${colorClass}`}
		>
			{text}
		</button>
	);
};

export default Button;
