import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import AllPropertiesCard from "./AllPropertiesCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const AllProperties = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [asc, setAsc] = useState(false)
    const axiosPublic = UseAxiosPublic()

    const [propertys, setPropertys] = useState([])

    useEffect(() => {
        axiosPublic.get(`/propertys/verified?sort=${asc ? 'asc' : 'desc'}`)
            .then(res => setPropertys(res.data))
    }, [axiosPublic, asc])


    // const { data: propertys = [], refetch } = useQuery({
    //     queryKey: ['propertys'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/propertys/verified?sort=${asc ? 'desc' : 'asc'}`)
    //         // console.log(res.data)
    //         return res.data
    //     }
    // })

    const filteredData = propertys?.filter((item) => {
        if (item && item.propertyname) {
            return item.propertyname.toLowerCase().includes(searchTerm.toLowerCase());
        }

        return false;
    });

    return (
        <div className="container mx-auto mt-10">
            <Helmet><title>Evergreen Estates | All Properties</title></Helmet>
            <div>
                <div className="text-center">
                    <input type="text" value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="flex justify-center lg:justify-end mt-5 lg:mt-0">
                    <button onClick={() => setAsc(!asc)} className="btn btn-outline text-white">{asc ? 'Price : High To low' : 'Price : Low To High'}</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {
                    filteredData.map(item => <AllPropertiesCard key={item._id} item={item}></AllPropertiesCard>)
                }
            </div>
        </div>
    );
};

export default AllProperties;