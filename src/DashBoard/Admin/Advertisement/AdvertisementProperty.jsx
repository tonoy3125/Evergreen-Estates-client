
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from './../../../Hooks/useAxiosPublic';
import UseAxiosSecure from './../../../Hooks/UseAxiosSecure';
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";


const AdvertisementProperty = () => {
    const axiosSecure = UseAxiosSecure();
    const axiosPublic = UseAxiosPublic();

    const [Ads, setAds] = useState([]);

    const { data: advertisement = [], refetch } = useQuery({
        queryKey: ["advertisement"],
        queryFn: async () => {
            const res = await axiosSecure.get("/advertisement");
            return res.data;
        },
    });
    // console.log(advertisement);

    useEffect(() => {
        axiosPublic("advertise").then((res) => {
            // console.log(res);
            const findTotalAds = res.data.filter((one) => (one.advertise = true));
            setAds(findTotalAds);
        });
    }, [advertisement, axiosPublic]);

    //  add advertisement
    const handleAdvertisement = (properties) => {
        if (Ads.length >= 6) {
            return toast.error('you cannot add More then 6 properties')
        }
        axiosSecure.patch(`/advertise/${properties._id}`).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch();
                toast.success(`${properties.propertyname} Have Been Added`)
            }
        });
    };
    //  remov advertisement
    const handleRemovAdvertisement = (properties) => {
        axiosSecure.patch(`/advertiseRemove/${properties._id}`).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch();
                toast.success(`${properties.propertyname} Have Been Removed`)
            }
        });
    };
    return (
        <div>
            <Helmet><title>Evergreen Estates | Manage Review Card</title></Helmet>
            <h1 className="text-2xl lg:text-4xl text-white font-bold text-center mb-2">Manage Advertisement</h1>
            <hr className=" w-[320px] lg:w-[500px] mx-auto mb-10 border-2" />
            <h3 className=" text-xl lg:text-3xl font-bold text-white text-center lg:text-left mb-4">Total Users {advertisement.length}</h3>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-white text-xl"></th>
                                <th className="text-white text-xl">Name</th>
                                <th className="text-white text-xl">Agent Email</th>
                                <th className="text-white text-xl">Agent Name</th>
                                <th className="text-white text-xl">Price Range</th>
                                <th className="text-white text-xl">Advertise</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                advertisement.map((item, index) => <tr key={item._id}>
                                    <th className="text-white">{index + 1}</th>
                                    <td className="text-white">{item.propertyname}</td>
                                    <td className="text-white">{item.agentname}</td>
                                    <td className="text-white">{item.agentemail}</td>
                                    <td className="text-white"> $ {item.price}</td>
                                    <td className="text-white flex items-center">
                                        <div className="flex-1">
                                            <button
                                                onClick={() => handleAdvertisement(item)}
                                                disabled={item.advertise == true && true}
                                                className="btn btn-outline text-white">
                                                Advertise
                                            </button>
                                        </div>
                                        <div className="flex-1">
                                            <button
                                                onClick={() => handleRemovAdvertisement(item)}
                                                disabled={item.advertise == true ? false : true}
                                                className="btn btn-outline text-white">
                                                Remove
                                            </button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default AdvertisementProperty;