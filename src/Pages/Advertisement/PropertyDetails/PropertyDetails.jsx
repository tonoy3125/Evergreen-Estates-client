import { useLoaderData } from "react-router-dom";
import PropertyDetailsCard from "./PropertyDetailsCard";


const PropertyDetails = () => {

    const properties = useLoaderData()
    console.log(properties)

    return (
        <div>
            <div className="container mx-auto">
                {
                    properties?.map(item => <PropertyDetailsCard key={item._id} item={item}></PropertyDetailsCard>)
                }
            </div>
        </div>
    );
};

export default PropertyDetails;