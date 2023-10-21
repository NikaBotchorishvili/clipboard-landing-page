import blackListIcon from "../../assets/images/icon-blacklist.svg";
import textIcon from "../../assets/images/icon-text.svg";
import previewIcon from "../../assets/images/icon-preview.svg";

const Workflow: React.FC = () => {
	return (
		<section className="flex flex-col items-center gap-y-14 text-center">
			<article>
				<h2 className="text-3xl text-darkGrayishBlue font-bold">
					Supercharge your workflow
				</h2>
				<p className="text-grayishBlue mt-5">We've got the tools to boost your productivity.</p>

			</article>
			<ul className="flex w-[100dvw] gap-y-10 justify-evenly flex-wrap">
				<li className="max-w-xs flex flex-col justify-start items-center text-center gap-y-3 ">
					<img src={blackListIcon} className="mb-3" alt="blacklist icon" />
					<h3 className="font-bold text-xl">Create blacklists</h3>
					<p className="text-grayishBlue leading-7">
						Ensure sensitive information never makes its way to your
						clipboard by excluding certain sources.
					</p>
				</li>
				<li className="max-w-xs flex flex-col justify-start items-center text-center gap-y-3">
					<img src={textIcon} className="mb-3" alt="text icon" />
					<h3 className="font-bold text-xl">Plain text snippets</h3>
					<p className="text-grayishBlue leading-7">
						Remove unwanted formatting from copied text for a
						consistent look.
					</p>
				</li>
				<li className="max-w-xs flex flex-col justify-start items-center text-center gap-y-3">
					<img src={previewIcon} className="mb-3" alt="preview icon" />
					<h3 className="font-bold text-xl">Sneak preview</h3>
					<p className="text-grayishBlue leading-7">
						Quick preview of all snippets on your Clipboard for easy
						access.
					</p>
				</li>
			</ul>
		</section>
	);
};

export default Workflow;
