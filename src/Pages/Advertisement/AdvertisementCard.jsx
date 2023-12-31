import { useEffect, useState } from "react";
import Card from "./Card";


const AdvertisementCard = () => {
    const [advertisement, setAdvertisement] = useState([])

    useEffect(() => {
        fetch('https://evergreen-estates-server-assignment.vercel.app/advertise')
            .then(res => res.json())
            .then(data => setAdvertisement(data))
    }, [])

    return (
        <div>
            <div className="mt-20">
                <h1 className="text-5xl font-bold text-white text-center mb-20">Explore Our Properties</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5">
                {
                    advertisement.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
            <hr className="w-[400px] mx-auto mt-20 border-2" />
        </div>
    );
};

export default AdvertisementCard;