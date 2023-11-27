/* eslint-disable no-unused-vars */
import { FaClover, FaShower } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { GiHomeGarage } from "react-icons/gi";
import { FiTriangle } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import ReviewCards from "../../../Components/Reviews/ReviewCards";
import { useQuery } from "@tanstack/react-query";
import Reviews from './../../Reviews/Reviews';
import ContactUs from "../../../Components/ContactUs/ContactUs";


const PropertyDetailsCard = ({ item }) => {
    const axiosPublic = UseAxiosPublic()
    const { user } = useAuth()
    const image = item.propertyImage
    const title = item.propertyname
    const location = item.location
    const agentname = item.agentname
    const agentImage = item.agentImage
    // const status = item.status
    const price = item.price
    const wishlistdata = { image, title, location, agentname, agentImage, price }
    console.log(wishlistdata)


    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/reviewer/${item._id}`)
            return res.data
        }
    })
    // console.log(reviews)


    const handleAddWishList = async () => {
        const res = await axiosPublic.post('/wishlist', wishlistdata)
        // console.log(res)
        if (res.data.insertedId) {
            toast.success('Your WishList Have Been Added')
        }
    }




    // Handle Add  Review
    const handleAddReview = async e => {


        e.preventDefault()
        console.log("Form submitted");
        const form = e.target
        const title = form.title.value
        const name = form.name.value
        const email = form.email.value
        const rating = form.rating.value
        const review = form.review.value
        const userImage = user.photoURL
        const productId = item._id
        const date = new Date()
        // console.log(title, name, email, rating, review)
        const newReview = { title, name, email, rating, review, userImage, productId, date }
        console.log(newReview)


        const res = await axiosPublic.post('/review', newReview)
        // console.log(res)
        if (res.data.insertedId) {
            form.reset()
            toast.success('Your Review is Submitted')
        }
    }








    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col mx-auto lg:flex-row">

                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                        <div className="flex items-center  p-4 md:p-8 lg:p-12">
                            <img src={item.propertyImage} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                        <h3 className="text-xl font-semibold text-white">Features</h3>
                        <hr className="mt-5" />
                        <div className="flex items-center gap-5 w-full">
                            <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-white" />
                                <div className="space-y-2">
                                    <p className="text-sm md:text-lg font-medium text-white">Air Conditioning</p>

                                </div>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-white" />
                                <div className="space-y-2">
                                    <p className="text-sm md:text-lg font-medium text-white">Swimming Pool</p>

                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 w-full">
                            <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-white" />
                                <div className="space-y-2">
                                    <p className="text-sm md:text-lg font-medium text-white">TV Cable</p>

                                </div>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-white" />
                                <div className="space-y-2">
                                    <p className="text-sm md:text-lg font-medium text-white">Outdoor Shower</p>

                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 w-full">
                            <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-white" />
                                <div className="space-y-2">
                                    <p className="text-sm md:text-lg font-medium text-white">Washer</p>

                                </div>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-white" />
                                <div className="space-y-2">
                                    <p className="text-sm md:text-lg font-medium text-white">WiFi</p>

                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 w-full">
                            <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-white" />
                                <div className="space-y-2">
                                    <p className="text-sm md:text-lg font-medium text-white">Window Coverings</p>

                                </div>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-white" />
                                <div className="space-y-2">
                                    <p className="text-sm md:text-lg font-medium text-white">Gym</p>

                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 w-full">
                            <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-white" />
                                <div className="space-y-2">
                                    <p className="text-sm md:text-lg font-medium text-white">Laundry</p>

                                </div>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl text-white" />
                                <div className="space-y-2">
                                    <p className="text-sm md:text-lg font-medium text-white">Dryer</p>

                                </div>
                            </div>
                        </div>

                        <button onClick={handleAddWishList} className="btn btn-outline text-white flex items-center text-base">
                            <FaClover />
                            Add To Wishlist
                        </button>

                    </div>
                </div>
            </section>

            <div className="flex flex-col lg:flex-row gap-5">
                <div className="max-w-4xl flex-1 mx-2 lg:mx-0 px-8 py-4 shadow-2xl  shadow-gray-300/50 border border-white rounded-lg dark:bg-gray-800">
                    <h3 className="text-xl font-semibold text-white">Overview</h3>
                    <hr className="mt-5" />
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-3">
                        <div className="border-l-2 border-r-2 text-center">
                            <div className="flex items-center gap-2 text-white justify-center mb-1">
                                <IoBedOutline className="text-2xl" />
                                <p>{item.bed}</p>
                            </div>
                            <p className="text-white font-medium text-lg">Bedrooms</p>
                        </div>
                        <div className="border-l-2 border-r-2 text-center">
                            <div className="flex items-center gap-2 text-white justify-center mb-1">
                                <FaShower className="text-2xl" />
                                <p>{item.bath}</p>
                            </div>
                            <p className="text-white font-medium text-lg">Bathrooms</p>
                        </div>
                        <div className="border-l-2 border-r-2 text-center">
                            <div className="flex items-center gap-2 text-white justify-center mb-1">
                                <GiHomeGarage className="text-2xl" />
                                <p>2</p>
                            </div>
                            <p className="text-white font-medium text-lg">Garage</p>
                        </div>
                        <div className=" border-r-2 border-l-2 text-center">
                            <div className="flex items-center gap-2 text-white justify-center mb-1">
                                <FiTriangle className="text-2xl" />
                                <p>{item.size}</p>
                            </div>
                            <p className="text-white font-medium text-lg">Size</p>
                        </div>
                        <div className=" border-l-2 border-r-2 text-center">
                            <div className="flex items-center gap-2 text-white justify-center mb-1">
                                <SlCalender className="text-2xl" />
                                <p>{item.year}</p>
                            </div>
                            <p className="text-white font-medium text-lg">Year</p>
                        </div>

                    </div>
                </div>
                <div className="flex-1">
                    <div className="lg:max-w-2xl flex-1 mx-2 lg:mx-0 px-8 py-4  rounded-lg border border-white shadow-2xl  shadow-gray-300/50 dark:bg-gray-800">
                        <h3 className="text-xl font-semibold text-white">Additional Details</h3>
                        <hr className="mt-2" />
                        <h1 className="text-white mt-2 ">{item.propertyname}</h1>
                        <h3 className="text-white mt-1">Agent Name : {item.agentname}</h3>
                        <p className="text-white mt-1">Price Range : $ {item.price}</p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-10">
                <div className="max-w-4xl flex-1 mx-2 lg:mx-0 px-8 py-4 mt-5 rounded-lg border border-white shadow-2xl  shadow-gray-300/50 dark:bg-gray-800">
                    <h3 className="text-xl font-semibold text-white">Description</h3>
                    <hr className="mt-5" />
                    <p className="text-white mt-3">{item.description}</p>
                </div>
                <div className="flex-1">
                    <h3 className="text-white font-bold text-3xl text-center mb-5">Contact Us</h3>
                    <ContactUs></ContactUs>
                </div>
            </div>


            <div className=" mt-10">
                <h1 className="text-4xl mb-10 text-white font-bold">Recent Reviews</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 lg:mx-0 gap-5">
                    {
                        reviews?.map(review => <ReviewCards key={review._id} review={review}></ReviewCards>)
                    }
                </div>
            </div>


            <div className="mt-5">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}

                <button className=" btn btn-outline text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Add a Review</button>
                <dialog id="my_modal_1" className="modal">

                    <div className="modal-box w-11/12 max-w-5xl">
                        <form onSubmit={handleAddReview}>
                            <div className="">
                                <h3 className="font-bold text-lg">Leave a Review</h3>
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                </form>
                            </div>
                            <hr className="mt-1 mb-2" />

                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full lg:col-span-3">
                                    <h2 className=" text-base md:text-xl font-semibold text-black mb-2">Title <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff] border border-black  text-base font-normal text-[#1B1A1A99] rounded" type='text' name="title" defaultValue={item.propertyname} placeholder="Enter Title Here" id="" />
                                </div>
                                <div className="col-span-full lg:col-span-3">
                                    <h2 className=" text-base md:text-xl font-semibold text-black mb-2">Reviewer Name <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff] border border-black  text-base font-normal text-[#1B1A1A99] rounded" defaultValue={user?.displayName} type='text' name="name" placeholder="Enter Reviewer Name Here" id="" />
                                </div>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mt-2">
                                <div className="col-span-full lg:col-span-3">
                                    <h2 className=" text-base md:text-xl font-semibold text-black mb-2">Reviewer Email <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff] border border-black  text-base font-normal text-[#1B1A1A99] rounded" defaultValue={user?.email} type='email' name="email" placeholder="Enter Reviewer Email Here" id="" />
                                </div>
                                <div className="col-span-full lg:col-span-3">
                                    <h2 className=" text-base md:text-xl font-semibold text-black mb-2"> Rating <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff] border border-black  text-base font-normal text-[#1B1A1A99] rounded" type='text' name="rating" placeholder="Enter Rating Here" id="" />
                                </div>
                            </div>
                            <div className="col-span-full mt-2">
                                <h2 className=" text-base md:text-xl font-semibold text-black mb-2"> Review <span className="text-red-700">*</span></h2>
                                <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]  border border-black text-base font-normal text-[#1B1A1A99] rounded" type="text" name="review" placeholder="Enter Review Here" id="" />
                            </div>
                            <div className="modal-action flex justify-center">
                                {/* <form method="dialog">
                                    if there is a button, it will close the modal

                                </form> */}
                                <input type="submit" value='Submit Review' className="btn btn-accent text-white" />
                            </div>

                        </form>
                    </div>

                </dialog>

            </div>
            <Toaster />
        </div >
    );
};

export default PropertyDetailsCard;