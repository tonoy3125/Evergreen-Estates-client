import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { MdVerified } from "react-icons/md";
import { MdOutlineCancel } from 'react-icons/md';


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


    // handle verify or rejected
    const handleaccepted = async (id, status) => {
        const updateStatus = status;
        const res = await axiosSecure.patch(`/propertyBrought/${id}`, updateStatus)
            .then(updateRes => {
                console.log(updateRes.data)
                if (updateRes.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Status Updated successfully.',
                    })
                    refetch()
                }
            })
    }


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
                                    {
                                        propertyBrought?.status === 'accepted' || propertyBrought?.status === 'rejected' ? (<th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                            Status
                                        </th>) : (<thead><th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                            Accept
                                        </th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                                Reject
                                            </th></thead>)
                                    }
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
                                        <td className="text-white">
                                            {item.status === "accepted" || item.status === "rejected" ? (
                                                <td className="px-6 py-4 text-sm">
                                                    {item.status}
                                                </td>
                                            ) : (
                                                <tr>
                                                    <td className="px-6 py-4 text-sm">
                                                        <button className="btn btn-outline text-white" onClick={() => handleaccepted(item._id, { status: "accepted" })}>
                                                            <MdVerified className="text-3xl text-green-600"></MdVerified>
                                                        </button>
                                                    </td>
                                                    {/* Change this line to <td> instead of <tr> */}
                                                    <td className="px-6 py-4 text-sm">
                                                        <button className="btn btn-outline text-white" onClick={() => handleaccepted(item._id, { status: "rejected" })}>
                                                            <MdOutlineCancel className="text-3xl text-red-600"></MdOutlineCancel>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )}
                                        </td>

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