import logo from "../../assets/images/logo.svg";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";
const Footer: React.FC = () => {
	return (
		<footer className="flex sm:flex-row sm:text-left text-center flex-col w-[100dvw] justify-around mt-20 bg-[#9EABB2] bg-opacity-40 py-8 gap-y-5">
			<section className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-y-3  gap-x-16">
				<img className="w-[40px]" src={logo} alt="logo" />
				<div className="flex flex-col gap-y-3 sm:gap-y-1">
					<a
						href="#"
						className="text-darkGrayishBlue hover:text-strongCyan active:text-strongCyan text-md"
					>
						FAQs
					</a>
					<a
						href="#"
						className="text-darkGrayishBlue hover:text-strongCyan active:text-strongCyan text-md"
					>
						Contact Us
					</a>
				</div>
				<div className="flex flex-col  gap-y-3 sm:gap-y-1">
					<a
						href="#"
						className="text-darkGrayishBlue hover:text-strongCyan active:text-strongCyan text-md"
					>
						Privacy Policy
					</a>
					<a
						href="#"
						className="text-darkGrayishBlue hover:text-strongCyan active:text-strongCyan text-md"
					>
						Press Kit
					</a>
				</div>
				<div className="flex flex-col gap-y-3 sm:gap-y-1">
					<a
						href="#"
						className="text-darkGrayishBlue hover:text-strongCyan text-md"
					>
						Install Guide
					</a>
				</div>
			</section>
			<section className="flex justify-center gap-x-5 items-center">
				<img
					className="cursor-pointer hover:fill-strongCyan"
					src={facebookIcon}
					alt="facebook icon"
				/>
				<img
					className="cursor-pointer hover:fill-strongCyan"
					src={twitterIcon}
					alt="twitter icon"
				/>
				<img
					className="cursor-pointer hover:fill-strongCyan"
					src={instagramIcon}
					alt="instagram icon"
				/>
			</section>
		</footer>
	);
};

export default Footer;
