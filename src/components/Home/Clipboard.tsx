import deviceImage from "../../assets/images/image-devices.png"
const Clipboard: React.FC = () => {
	return (
		<section className="lg:mt-[120px] flex flex-col items-center text-center gap-3 mx-5">
			<h2 className="text-3xl font-bold text-darkGrayishBlue">Access Clipboard Anywhere</h2>
			<p className="max-w-lg text-grayishBlue">
				Whether you're on the go, or at your computer, you can access
				all your Clipboard snippets in a few simple clicks.
			</p>
            <img className="mt-10  w-[600px]" src={deviceImage} alt="" />
		</section>
	);
};

export default Clipboard;
