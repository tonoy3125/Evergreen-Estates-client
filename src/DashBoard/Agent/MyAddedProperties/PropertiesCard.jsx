import { TbProgressAlert } from "react-icons/tb";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin4Line } from "react-icons/ri";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { MdCancel, MdVerified } from "react-icons/md";

const PropertiesCard = ({ item, refetch }) => {
    const axiosSecure = UseAxiosSecure()

    const { _id, propertyImage, propertyname, agentname, agentemail, agentImage, location, price, year, bed, bath, size, status } = item





    const handleDeleteCard = item => {
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
                axiosSecure.delete(`/properties/${item._id}`)
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
            <div className="flex flex-col dark:bg-gray-900 border">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={propertyImage} />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                    <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">{propertyname}</h1>
                    <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">{location}</h3>
                    <div className="flex items-center gap-5 ">
                        <div className="avatar mb-3 mt-3">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={agentImage} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white">{agentname}</h3>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                        <span className="text-base">Price : $ {price}</span>
                        <span className="flex items-center gap-2">
                            {status === 'pending' && <span><TbProgressAlert className="text-xl" /></span>}
                            {status === 'verified' && <span><MdVerified className="text-xl" /></span>}
                            {status === 'rejected' && <span><MdCancel className="text-xl" /></span>}
                            <span className="text-base">{status}</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-5  mt-3">
                        <div className="flex-1">
                            <Link to={`updatedproperties/${_id}`}>
                                <button className="btn btn-outline border-white text-white w-full"><FiEdit3 /> Edit</button>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <button onClick={() => handleDeleteCard(item)} className="btn btn-outline border-white text-white w-full"> <RiDeleteBin4Line /> Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PropertiesCard;