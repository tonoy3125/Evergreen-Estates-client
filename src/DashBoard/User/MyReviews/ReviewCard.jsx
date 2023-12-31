import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa6";
import Swal from "sweetalert2";

import { AiOutlineCloseCircle } from "react-icons/ai";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const ReviewCard = ({ review, refetch }) => {
    const axiosSecure = UseAxiosSecure()

    const handleDeleteCard = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/review/${_id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div>
                <div className="container relative border flex flex-col w-full shadow-2xl  shadow-gray-300/50  p-6 pt-9 mx-auto divide-y rounded-md">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={review.userImage} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-base">{review.name}</h4>
                                <span className="text-xs dark:text-gray-400 text-white">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">{review.rating}</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-base text-white">
                        <p>{review.review}</p>
                    </div>
                    <div className="pt-3 flex justify-end">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-2 text-white">
                                <SlLike />
                                <p>Like</p>
                            </span>
                            <span className="flex items-center gap-2 text-white">
                                <FaRegCommentDots />
                                <p>Reply</p>
                            </span>
                        </div>
                    </div>
                    <button onClick={() => handleDeleteCard(review._id)} className=" absolute right-4 top-3">
                        <AiOutlineCloseCircle className="text-4xl text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;