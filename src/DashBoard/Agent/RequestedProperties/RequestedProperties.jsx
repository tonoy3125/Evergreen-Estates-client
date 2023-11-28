import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const RequestedProperties = () => {

    const axiosSecure = UseAxiosSecure()
    const { data: propertyBrought = [], refetch } = useQuery({
        queryKey: ['propertyBrought'],
        queryFn: async () => {
            const res = await axiosSecure.get('/propertyBrought')
            console.log(res.data)
            return res.data
        }
    })


    return (
        <div>
            <div>
                <h1 className="text-2xl lg:text-4xl text-white font-bold text-center">Manage All Users</h1>
                <div className="lg:px-32 mt-10">
                    <h3 className=" text-xl lg:text-3xl font-bold text-white text-center lg:text-left mb-4">Total Requested Properties {propertyBrought.length}</h3>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-white text-xl"></th>
                                    <th className="text-white text-xl">Title</th>
                                    <th className="text-white text-xl">Location</th>
                                    <th className="text-white text-xl">Buyer Email</th>
                                    <th className="text-white text-xl">Buyer Name</th>
                                    <th className="text-white text-xl">Offered Price</th>
                                    <th className="text-white text-xl">Fraud</th>
                                    <th className="text-white text-xl">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    propertyBrought.map((item, index) => <tr key={item._id}>
                                        <th className="text-white">{index + 1}</th>
                                        <td className="text-white">{item.propertytitle}</td>
                                        <td className="text-white">{item.location}</td>
                                        <td className="text-white">{item.buyeremail}</td>
                                        <td className="text-white">{item.buyername}</td>
                                        <td className="text-white"> $ {item.offerprice}</td>

                                    </tr>)
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestedProperties;