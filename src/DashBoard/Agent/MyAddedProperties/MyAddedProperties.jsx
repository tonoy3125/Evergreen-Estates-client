import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import PropertiesCard from "./PropertiesCard";
import { Helmet } from "react-helmet-async";


const MyAddedProperties = () => {
    const { user } = useAuth()
    const axiosSecure = UseAxiosSecure()
    const { data: property = [], refetch } = useQuery({
        queryKey: [user.email, 'property'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/postedproperty/${user.email}`)
            console.log(res.data)
            return res.data
        }
    })

    return (
        <div>
            <h1 className="text-2xl lg:text-4xl text-white font-bold text-center mb-2">My Added Properties</h1>
            <hr className=" w-[300px] lg:w-[450px] mx-auto mb-10 border-2" />
            <Helmet><title>Evergreen Estates | My Added Properties</title></Helmet>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 container mx-auto">
                {
                    property.map(item => <PropertiesCard key={item._id} item={item} refetch={refetch}></PropertiesCard>)
                }
            </div>
        </div>
    );
};

export default MyAddedProperties;