import Hero from "../../components/Home/Hero";
import Snippets from "../../components/Home/Snippets";
import Clipboard from "../../components/Home/Clipboard";
import Workflow from "../../components/Home/Workflow";
import Partners from "../../components/Home/Partners";

const LandingPage: React.FC = () => {
    return (
        <main className="flex flex-col gap-y-16">
            <Hero />
            <Snippets />
            <Clipboard />
            <Workflow />
            <Partners />
        </main>
    );
}
 
export default LandingPage;