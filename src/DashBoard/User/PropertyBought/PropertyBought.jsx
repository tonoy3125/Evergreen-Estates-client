import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
import PropertyBoughtCard from "./PropertyBoughtCard";
import { Helmet } from "react-helmet-async";


const PropertyBought = () => {
    const { user } = useAuth()
    const axiosPublic = UseAxiosPublic()
    const { data: propertyBroughts = [], refetch } = useQuery({
        queryKey: ['propertyBroughts', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/propertyBroughts/${user.email}`)
            console.log(res.data)
            return res.data
        }
    })

    return (
        <div>
            <Helmet><title>Evergreen Estates | Property Bought</title></Helmet>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {
                    propertyBroughts.map(item => <PropertyBoughtCard key={item._id} item={item}></PropertyBoughtCard>)
                }
            </div>
        </div>
    );
};

export default PropertyBought;