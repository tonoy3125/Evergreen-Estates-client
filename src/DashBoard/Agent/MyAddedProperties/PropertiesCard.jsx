import { TbProgressAlert } from "react-icons/tb";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin4Line } from "react-icons/ri";

const PropertiesCard = ({ item }) => {
    const { _id, propertyImage, propertyname, agentname, agentemail, agentImage, location, price, year, bed, bath, size, status } = item




    
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
                            <span><TbProgressAlert className="text-xl" /></span>
                            <span className="text-base">{status}</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-5  mt-3">
                        <div className="flex-1">
                            <button className="btn btn-outline border-white text-white w-full"><FiEdit3 /> Edit</button>
                        </div>
                        <div className="flex-1">
                            <button className="btn btn-outline border-white text-white w-full"> <RiDeleteBin4Line /> Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PropertiesCard;