import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const ManageProperties = () => {

    const axiosSecure = UseAxiosSecure()
    const { data: property = [], refetch } = useQuery({
        queryKey: ['property'],
        queryFn: async () => {
            const res = await axiosSecure.get('/property')
            // console.log(res.data)
            return res.data
        }
    })

    return (
        <div>
            <h1 className="text-2xl lg:text-4xl text-white font-bold text-center">Manage All Properties</h1>
            <div className="lg:px-32 mt-10">
                <h3 className=" text-xl lg:text-3xl font-bold text-white text-center lg:text-left mb-4">Total Properties : {property.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-white text-xl"></th>
                                <th className="text-white text-xl">Title</th>
                                <th className="text-white text-xl">Location</th>
                                <th className="text-white text-xl">Agent Name</th>
                                <th className="text-white text-xl">Agent Email</th>
                                <th className="text-white text-xl">Price Range</th>
                                <th className="text-white text-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                property.map((user, index) => <tr key={user._id}>
                                    <th className="text-white">{index + 1}</th>
                                    <td className="text-white">{user.propertyname}</td>
                                    <td className="text-white">{user.location}</td>
                                    <td className="text-white">{user.agentname}</td>
                                    <td className="text-white">{user.agentemail}</td>
                                    <td className="text-white">$ {user.price}</td>
                                    <td className="text-white">
                                        <div className="flex items-center gap-[1px]">
                                            <div className="flex-1">
                                                <button className="btn btn-outline text-white">Verify</button>
                                            </div>
                                            <div className="flex-1">
                                                <button className="btn btn-outline text-white">Reject</button>
                                            </div>
                                        </div>
                                    </td>

                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProperties;