import Hero from "../../components/Home/Hero";
import Snippets from "../../components/Home/Snippets";
import Clipboard from "../../components/Home/Clipboard";
const LandingPage: React.FC = () => {
    return (
        <main className="flex flex-col gap-y-16">
            <Hero />
            <Snippets />
            <Clipboard />
        </main>
    );
}
 
export default LandingPage;