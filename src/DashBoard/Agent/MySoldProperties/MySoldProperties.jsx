import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FcPaid } from "react-icons/fc";


const MySoldProperties = () => {

    const { user } = useAuth()
    const axiosPublic = UseAxiosPublic()
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payments/${user.email}`)
            // console.log(res.data)
            return res.data
        }
    })


    return (
        <div>
            <div>
                <h1 className="text-2xl lg:text-4xl text-white font-bold text-center"> All Sold Properties</h1>
                <div className="lg:px-32 mt-10">
                    <h3 className=" text-xl lg:text-3xl font-bold text-white text-center lg:text-left mb-4">Total Sold Properties {payments.length}</h3>
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
                                    <th className="text-white text-xl">Sold Price</th>
                                    <th className="text-white text-xl"></th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments.map((item, index) => <tr key={item._id}>
                                        <th className="text-white">{index + 1}</th>
                                        <td className="text-white">{item.title}</td>
                                        <td className="text-white">{item.location}</td>
                                        <td className="text-white">{item.buyeremail}</td>
                                        <td className="text-white">{item.buyername}</td>
                                        <td className="text-white"> $ {item.price}</td>
                                        <td className="text-white"> <span className="flex items-center gap-3">Paid <FcPaid className="text-2xl" /></span></td>

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

export default MySoldProperties;