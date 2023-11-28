/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";


const WIshlistForm = () => {
    const axiosPublic = UseAxiosPublic()
    const { user } = useAuth()
    const wishlist = useLoaderData()
    const [minPrice, maxPrice] = wishlist.price;
    const { register, handleSubmit, reset } = useForm()
    // console.log(wishlist)
    const { agentname, title, location } = wishlist
    // console.log(agentname)

    const onSubmit = async (data) => {
        console.log(data)
        const boughtProperty = {
            propertiesId: wishlist._id,
            status: 'pending',
            image: wishlist.image,
            propertytitle: data.propertytitle,
            location: data.location,
            agentname: data.agentname,
            agentImage: wishlist.agentImage,
            buyername: data.buyername,
            buyeremail: data.buyeremail,
            date: data.date,
            offerprice: data.offerprice,
        }
        const offerprice = parseFloat(data.offerprice)
        console.log(offerprice)
        if (isNaN(offerprice) || offerprice < minPrice || offerprice > maxPrice) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Offer price must be between in price range!',
            })
            return;
        }
        else {
            const res = await axiosPublic.post('/propertyBrought', boughtProperty)
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your offer is successful.',
                });
            }
        }


    }




    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full lg:col-span-3">
                        <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Property Title <span className="text-red-700">*</span></h2>
                        <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="propertytitle" {...register("propertytitle")} readOnly defaultValue={title} placeholder="Enter Property Title Here" id="" />
                    </div>
                    <div className="col-span-full lg:col-span-3">
                        <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Agent Name <span className="text-red-700">*</span></h2>
                        <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="agentname" {...register("agentname")} readOnly defaultValue={agentname} placeholder="Enter Agent Name Here" id="" />
                    </div>
                    <div className="col-span-full lg:col-span-3">
                        <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Buyer Name <span className="text-red-700">*</span></h2>
                        <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="buyername" {...register("buyername")} readOnly defaultValue={user?.displayName} placeholder="Enter Buyer Name Here" id="" />
                    </div>
                    <div className="col-span-full lg:col-span-3">
                        <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Buyer Email <span className="text-red-700">*</span></h2>
                        <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="buyeremail" {...register("buyeremail")} readOnly defaultValue={user.email} placeholder="Enter Buyer Email Here" id="" />
                    </div>
                    <div className="col-span-full lg:col-span-3">
                        <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Offer Price <span className="text-red-700">*</span></h2>
                        <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="number" name="offerprice" {...register("offerprice")} placeholder="Enter Offer Price Here" id="" />
                    </div>
                    <div className="col-span-full lg:col-span-3">
                        <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Location <span className="text-red-700">*</span></h2>
                        <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="location" {...register("location")} readOnly defaultValue={location} placeholder="Enter Location Here" id="" />
                    </div>
                    <div className="col-span-full lg:col-span-3">
                        <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Date <span className="text-red-700">*</span></h2>
                        <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="date" {...register("date")} name="date" placeholder="Enter Date Here" id="" />
                    </div>
                    <div className="col-span-full mt-5">
                        <input type="submit" value="Offer" className="btn btn-block bg-[#4357AD] text-lg text-[#fff] hover:bg-[#154360] " />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WIshlistForm;