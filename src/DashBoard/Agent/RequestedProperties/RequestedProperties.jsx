import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { MdVerified } from "react-icons/md";
import { MdOutlineCancel } from 'react-icons/md';
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";


const RequestedProperties = () => {
    const { user } = useAuth()
    const axiosSecure = UseAxiosSecure()
    const { data: propertyBrought = [], refetch } = useQuery({
        queryKey: ['propertyBrought'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/propertyBroughts/${user.email}`)
            console.log(res.data)
            return res.data
        }
    })


    const handleAccept = (requestId, status) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, accepted it!",
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.put(`/api/request/${requestId}`, status)
                console.log(res.data)
                if (res.data.accptedResult.modifiedCount > 0 || res.data.rejectedResult.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Property has been accepted",
                        icon: "success"
                    });
                    refetch()
                }
            }
        });

    }
    const handleReject = (requestId, status) => {
        console.log(status)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: 'Yes, rejected it!',
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.patch(`/api/reject/${requestId}`, status)
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: 'Property has been rejected',
                        icon: "success"
                    });
                    refetch()
                }
            }
        });
    }


    return (
        <div>
            <div>
                <Helmet><title>Evergreen Estates | Requested Properties</title></Helmet>
                <h1 className="text-2xl lg:text-4xl text-white font-bold text-center mb-2">Requested Properties</h1>
                <hr className=" w-[300px] lg:w-[450px] mx-auto mb-10 border-2" />
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
                                    <th className="text-white text-xl">Status</th>

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
                                        <tr>
                                            {
                                                item?.status === "accepted" || item?.status === "rejected" ? (
                                                    <td className="px-6 py-4 text-white">{item?.status}</td>
                                                ) : (
                                                    <>
                                                        <td className="px-6 py-4 text-sm">
                                                            <button className="mr-4 btn ">
                                                                <MdVerified onClick={() => handleAccept(item?._id, { status: "accepted" })} className="text-2xl text-green-600"></MdVerified>
                                                            </button>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm">
                                                            <button onClick={() => handleReject(item._id, { status: "rejected" })} className="mr-4 btn">
                                                                <MdOutlineCancel className="text-2xl text-red-600 font-bold "></MdOutlineCancel>
                                                            </button>
                                                        </td>
                                                    </>
                                                )
                                            }
                                        </tr>

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