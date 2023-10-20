import Hero from "../../components/Home/Hero";
import Snippets from "../../components/Home/Snippets";

const LandingPage: React.FC = () => {
    return (
        <main className="flex flex-col gap-y-16">
            <Hero />
            <Snippets />
        </main>
    );
}
 
export default LandingPage;