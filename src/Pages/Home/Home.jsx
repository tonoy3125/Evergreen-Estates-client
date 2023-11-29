import { Helmet } from "react-helmet-async";
import AdvertisementCard from "../Advertisement/AdvertisementCard";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import OurServices from "../Our Services/OurServices";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Helmet><title>Evergreen Estates | Home</title></Helmet>
            <AdvertisementCard></AdvertisementCard>
            <OurServices></OurServices>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;