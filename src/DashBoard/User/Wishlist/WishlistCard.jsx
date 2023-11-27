
import { RiDeleteBin4Line } from "react-icons/ri";
import { TbProgressAlert } from "react-icons/tb";
import { MdOutlineLocalOffer } from "react-icons/md";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const WishlistCard = ({ item, refetch }) => {
    const axiosPublic = UseAxiosPublic()
    const handleDeleteUser = _id => {
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
                axiosPublic.delete(`/wishlist/${_id}`)
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
                <div className="flex flex-col dark:bg-gray-900 border">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={item.image} />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">{item.title}</h1>
                        <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">{item.location}</h3>
                        <div className="flex items-center gap-5 ">
                            <div className="avatar mb-3 mt-3">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={item.agentImage} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white">{item.agentname}</h3>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                            <span className="text-base">Price : $ {item.price}</span>
                            <span className="flex items-center gap-2">
                                <span><TbProgressAlert className="text-xl" /></span>
                                <span className="text-base">{item.status}</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-5  mt-3">
                            <div className="flex-1">
                                <button className="btn btn-outline border-white text-white w-full"><MdOutlineLocalOffer /> Offer</button>
                            </div>
                            <div className="flex-1">
                                <button onClick={() => handleDeleteUser(item._id)} className="btn btn-outline border-white text-white w-full"> <RiDeleteBin4Line /> Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WishlistCard;