import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className='text-center pt-32 pb-64 '>
            <Player
                autoplay
                loop
                src="https://lottie.host/c7deb792-7660-4a6f-9e18-d553bab15418/WAceyvuvAO.json"
                className='md:w-[700px] '
            >
            </Player>
            <h2 className='md:text-5xl text-white font-bold'>
                NOT FOUND
            </h2>
            <Link to="/"><button className="btn btn-accent text-white mt-7">Go Home</button></Link>
        </div>
    );
};

export default ErrorElement;