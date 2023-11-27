import { FaShower } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { GiHomeGarage } from "react-icons/gi";
import { FiTriangle } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const PropertyDetailsCard = ({ item }) => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col mx-auto lg:flex-row">

                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
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

                    </div>
                </div>
            </section>

            <div>
                <div className="max-w-4xl mx-2 lg:mx-0 px-8 py-4 border border-white rounded-lg shadow-md dark:bg-gray-800">
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
            </div>
            <div>
                <div className="max-w-4xl mx-2 lg:mx-0 px-8 py-4 mt-5 rounded-lg border border-white shadow-md dark:bg-gray-800">
                    <h3 className="text-xl font-semibold text-white">Description</h3>
                    <hr className="mt-5" />
                    <p className="text-white mt-3">{item.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsCard;