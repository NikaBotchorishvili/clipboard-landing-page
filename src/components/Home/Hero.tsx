import logo from "../../assets/images/logo.svg";
import Button from "../common/Button";

const Hero: React.FC = () => {
	return (
		<section className="hero-bg gap-y-8 flex flex-col items-center pt-10 w-[100dvw]">
			<img src={logo} alt="" />
			<article className="max-w-xl text-center mx-5">
				<h1 className="text-3xl md:text-4xl text-darkGrayishBlue font-bold">
					A history of everything you copy
				</h1>
				<p className="mt-5 text-grayishBlue">
					Clipboard allows you to track and organize everything you
					copy. Instantly access your clipboard on all your devices.
				</p>
			</article>
			<div className="flex md:flex-row flex-col gap-4">
				<Button colorClass="bg-strongCyan" text="Download for IOS" />
				<Button colorClass="bg-lightBlue" text="Download for Mac" />
			</div>
		</section>
	);
};

export default Hero;
