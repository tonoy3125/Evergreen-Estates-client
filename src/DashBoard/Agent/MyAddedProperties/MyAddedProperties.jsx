import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import PropertiesCard from "./PropertiesCard";


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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 container mx-auto">
                {
                    property.map(item => <PropertiesCard key={item._id} item={item} refetch={refetch}></PropertiesCard>)
                }
            </div>
        </div>
    );
};

export default MyAddedProperties;