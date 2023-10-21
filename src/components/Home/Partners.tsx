import GoogleIcon from "../../assets/images/logo-google.png";
import IBMIcon from "../../assets/images/logo-ibm.png";
import MicrosoftIcon from "../../assets/images/logo-microsoft.png";
import HpIcon from "../../assets/images/logo-hp.png";
import VGIcon from "../../assets/images/logo-vector-graphics.png";

const Partners: React.FC = () => {
	return (
		<section className="mx-auto mt-20">
			<ul className="flex  justify-evenly items-center flex-wrap gap-16 mx-5">
				<li>
					<img src={GoogleIcon} alt="" />
				</li>
				<li>
					<img src={IBMIcon} alt="" />
				</li>
				<li>
					<img src={MicrosoftIcon} alt="" />
				</li>
				<li>
					<img src={HpIcon} alt="" />
				</li>
				<li>
					<img src={VGIcon} alt="" />
				</li>
			</ul>
		</section>
	);
};

export default Partners;
