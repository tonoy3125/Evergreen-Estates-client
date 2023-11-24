import { useEffect, useState } from "react";
import Card from "./Card";


const AdvertisementCard = () => {
    const [advertisement, setAdvertisement] = useState([])

    useEffect(() => {
        fetch('./card.json')
            .then(res => res.json())
            .then(data => setAdvertisement(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5">
            {
                advertisement.map(item => <Card key={item._id} item={item}></Card>)
            }
        </div>
    );
};

export default AdvertisementCard;