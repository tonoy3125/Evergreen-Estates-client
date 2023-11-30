import { Helmet } from "react-helmet-async";
import AdvertisementCard from "../Advertisement/AdvertisementCard";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import OurServices from "../Our Services/OurServices";
import Blog from "../Blog/Blog";
import Property from "../Property/Property";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Helmet><title>Evergreen Estates | Home</title></Helmet>
            <AdvertisementCard></AdvertisementCard>
            <OurServices></OurServices>
            <Property></Property>
            <Blog></Blog>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;