import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa6";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";

const Card = ({ item }) => {
    const { _id, propertyImage, propertyname, agentname, agentemail, agentImage, location, price, year, bed, bath, size, status } = item
    return (
        <div>
            <div className="card border shadow-2xl shadow-[#2980b9] px-5 relative mx-2 lg:mx-0">

                <figure className=" pt-5">
                    <img src={propertyImage} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="badge badge-secondary absolute left-7 top-8">Featured</div>
                <p className="absolute text-white top-56 md:top-48 lg:top-52 left-7 font-bold">{price}</p>
                <div className="flex items-center text-white gap-3 absolute right-7 top-56 md:top-48 lg:top-52">
                    <button className="px-2 py-1 rounded-full bg-red-600"><FaArrowRightArrowLeft /></button>
                    <button className="px-2 py-1 rounded-full bg-red-600"><CiBookmark /></button>
                </div>
                <h1 className=" text-white mt-3 font-bold text-base">{propertyname}</h1>
                <div className="flex items-center  mt-3 text-white gap-2">
                    <CiLocationOn />
                    <p className="text-sm">{location}</p>
                </div>
                <div className="flex items-center gap-7 mt-3">
                    <div className="flex items-center text-white gap-2 ">
                        <IoBedOutline />
                        <p className="text-sm">Beds {bed}</p>
                    </div>
                    <div className="flex items-center text-white gap-2 ">
                        <FaShower />
                        <p className="text-sm">Bath {bath}</p>
                    </div>
                    <div className="flex items-center text-white gap-2 ">
                        <SlSizeFullscreen />
                        <p className="text-sm">{size}</p>
                    </div>
                </div>
                <hr className=" mt-3 mb-3" />
                <div className="flex items-center justify-between mb-2">
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
                    <div>
                        <p className="text-white">Year {year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;