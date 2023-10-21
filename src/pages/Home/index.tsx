import Hero from "../../components/Home/Hero";
import Snippets from "../../components/Home/Snippets";
import Clipboard from "../../components/Home/Clipboard";
import Workflow from "../../components/Home/Workflow";
import Partners from "../../components/Home/Partners";
import DownloadSection from "../../components/Home/DownloadSection";

const LandingPage: React.FC = () => {
    return (
        <main className="flex flex-col gap-y-20">
            <Hero />
            <Snippets />
            <Clipboard />
            <Workflow />
            <Partners />
            <DownloadSection />
        </main>
    );
}
 
export default LandingPage;