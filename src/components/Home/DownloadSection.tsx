import Button from "../common/Button";

const DownloadSection: React.FC = () => {
	return (
		<section className="gap-y-6 flex flex-col items-center pt-10 w-[100dvw] text-center">
			<h1 className="text-3xl font-bold text-darkGrayishBlue">
				Clipboard for IOS and MAC OS
			</h1>
			<p className="max-w-xl leading-7 text-md text-grayishBlue">
				Available for free on the App Store. Download for Mac or iOS,
				sync with iCloud and you're ready to start adding to your
				clipboard.
			</p>

			<div className="flex md:flex-row flex-col gap-4">
				<Button colorClass="bg-strongCyan" text="Download for IOS" />
				<Button colorClass="bg-lightBlue" text="Download for Mac" />
			</div>
		</section>
	);
};

export default DownloadSection;
