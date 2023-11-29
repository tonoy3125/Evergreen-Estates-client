/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { MdVerified } from "react-icons/md";
import { MdOutlineCancel } from 'react-icons/md';
import { Helmet } from "react-helmet-async";


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


    // handle verify or rejected
    const handleVerify = async (id, status) => {
        const updateStatus = status;
        const res = await axiosSecure.patch(`/property/${id}`, updateStatus)
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
            <Helmet><title>Evergreen Estates | Manage Properties</title></Helmet>
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
                                {/* <th className="text-white text-xl">Action</th> */}
                                {
                                    property?.status === 'verified' || property?.status === 'rejected' ? (<th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                        Status
                                    </th>) : (<thead><th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                        Verify
                                    </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                            Reject
                                        </th></thead>)
                                }

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
                                    {/* <td className="text-white">
                                        <div className="flex items-center gap-[1px]">
                                            <div className="flex-1">
                                                <button className="btn btn-outline text-white">Verify</button>
                                            </div>
                                            <div className="flex-1">
                                                <button className="btn btn-outline text-white">Reject</button>
                                            </div>
                                        </div>
                                    </td> */}

                                    {user.status === "verified" || user.status === "rejected" ? (
                                        <td className="px-6 py-4 text-white text-sm">
                                            {user.status}
                                        </td>
                                    ) : (
                                        <tr>
                                            <td className="px-6 py-4 text-sm">
                                                <button className="btn btn-outline text-white" onClick={() => handleVerify(user._id, { status: "verified" })}>
                                                    <MdVerified className="text-3xl text-green-600"></MdVerified>
                                                </button>
                                            </td>
                                            {/* Change this line to <td> instead of <tr> */}
                                            <td className="px-6 py-4 text-sm">
                                                <button className="btn btn-outline text-white" onClick={() => handleVerify(user._id, { status: "rejected" })}>
                                                    <MdOutlineCancel className="text-3xl text-red-600"></MdOutlineCancel>
                                                </button>
                                            </td>
                                        </tr>
                                    )}


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