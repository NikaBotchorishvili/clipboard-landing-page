import laptopImage from "../../assets/images/image-computer.png";
const Snippets: React.FC = () => {
	return (
		<section className="flex flex-col w-[100dvw] gap-20">
			<article className="max-w-xl text-center mt-5 md:mx-auto mx-5">
				<h1 className="text-2xl text-darkGrayishBlue ">
					Keep track of your snippets
				</h1>
				<p className="mt-5 text-grayishBlue">
					Clipboard instantly stores any item you copy in the cloud,
					meaning you can access your snippets immediately on all your
					devices. Our Mac and iOS apps will help you organize
					everything.
				</p>
			</article>

			<article className="relative flex flex-col lg:block items-center mx-5 md:mx-0 gap-y-10">
				<img
					className="lg:absolute w-[250px] md:w-[400px] lg:w-[600px] lg:-translate-x-[20%]"
					src={laptopImage}
					alt=""
				/>

				<div className="flex lg:w-[85%] justify-end md:mt-5">
					<ul className="max-w-sm flex flex-col gap-y-4">
						<li className="flex flex-col gap-y-1">
							<h1 className="text-xl text-darkGrayishBlue font-bold">Quick Search</h1>
							<p className="text-md text-grayishBlue">
								Easily search your snippets by content,
								category, web address, application, and more.
							</p>
						</li>
						<li className="flex flex-col gap-y-1">
							<h1 className="text-xl text-darkGrayishBlue font-bold">iCloud Sync</h1>
							<p className="text-md text-grayishBlue">
								Instantly saves and syncs snippets across all
								your devices.
							</p>
						</li>
						<li className="flex flex-col gap-y-1">
							<h1 className="text-xl text-darkGrayishBlue font-bold">Complete History</h1>
							<p className="text-md text-grayishBlue">
								Retrieve any snippets from the first moment you
								started using the app.
							</p>
						</li>
					</ul>
				</div>
			</article>
		</section>
	);
};

export default Snippets;
