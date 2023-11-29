import { Helmet } from "react-helmet-async";
import AdvertisementCard from "../Advertisement/AdvertisementCard";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Helmet><title>Evergreen Estates | Home</title></Helmet>
            <AdvertisementCard></AdvertisementCard>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;