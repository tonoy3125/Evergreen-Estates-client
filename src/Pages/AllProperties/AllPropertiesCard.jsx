import { FaShower } from "react-icons/fa6";
import { FiTriangle } from "react-icons/fi";
import { GiHomeGarage } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";



const AllPropertiesCard = ({ item }) => {
    return (
        <div className="mt-10">
            <div className="relative shadow-2xl shadow-[#2980b9]">
                <img src={item.propertyImage} alt="" className="object-cover w-full h-64" />
                <div className="absolute top-0 p-2 m-2 " >
                    <a href="" className="text-sm text-white badge badge-secondary ">For Sale</a>
                </div>
                <div className="p-3 text-white dark:bg-gray-800 text-center">
                    <a href="" className="text-xl font-bold tracking-tight  ">
                        {item.propertyname}
                    </a>
                    <p className="py-2 font-normal ">
                        {item.location}
                    </p>
                    <div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-4">
                                <img className="object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600" src={item.agentImage} alt="" />
                                <h3>{item.agentname}</h3>
                            </div>

                            <div>
                                <span className="flex items-center gap-2 ">
                                    <MdVerified className="text-xl" />
                                    <span>{item.status}</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex items-center gap-4 justify-center">
                        <div className="flex items-center gap-3">
                            <IoBedOutline className="text-base" />
                            <span>{item.bed}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaShower className="text-base" />
                            <span>{item.bath}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <GiHomeGarage className="text-base" /><IoBedOutline className="text-xl" />
                            <span>2</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FiTriangle className="text-base" />
                            <span>{item.size}</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-outline text-white">Details</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllPropertiesCard;