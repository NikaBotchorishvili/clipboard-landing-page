import { useRouteError } from "react-router-dom";
import logo from "../../assets/images/logo.svg";


const Error: React.FC = () => {
    const error = useRouteError()
    
    return (
        <section className="flex w-[100dvw] h-[100dvh] justify-center items-center flex-col gap-y-8 ">
            <img src={logo} alt="" />
            <h1 className="text-2xl sm:text-4xl text-darkGrayishBlue">Oops unexpected error occurred!</h1>

            <p className="text-grayishBlue">
                <i>{(error as Error).message || (error as { statusText: string}).statusText}</i>
            </p>
        </section>
    )
}
 
export default Error;