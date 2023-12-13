import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";


const Root = () => {
    const location = useLocation()
    const [loading, setLoading] = useState(true);
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register')


    useEffect(() => {
        // Simulate a loading delay (replace with your actual data fetching logic)
        const delay = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(delay);
    }, []); // Run only once on component mount

    return (
        <div>

            {loading ? (
                <div>
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/cea9212d-8f86-4096-a3d5-b5c8839ba977/h60Gsnco7e.json"

                    >
                    </Player>
                </div>
            ) : (
                <>
                    {noHeaderFooter || <Navbar />}
                    <Outlet />
                    {noHeaderFooter || <Footer />}
                </>
            )}
        </div>
    );
};

export default Root;