import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import AllPropertiesCard from "./AllPropertiesCard";


const AllProperties = () => {

    const axiosPublic = UseAxiosPublic()
    const { data: propertys = [], refetch } = useQuery({
        queryKey: ['propertys'],
        queryFn: async () => {
            const res = await axiosPublic.get('/propertys/verified')
            // console.log(res.data)
            return res.data
        }
    })

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto">
                {
                    propertys.map(item => <AllPropertiesCard key={item._id} item={item}></AllPropertiesCard>)
                }
            </div>
        </div>
    );
};

export default AllProperties;