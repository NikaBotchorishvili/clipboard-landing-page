import { useRouteError } from "react-router-dom";


const Error: React.FC = () => {
    const error = useRouteError()
    
    return (
        <section>
            <h1>Oops unexpected error occurred!</h1>

            <p>
                <i>{(error as Error).message || (error as { statusText: string}).statusText}</i>
            </p>
        </section>
    )
}
 
export default Error;