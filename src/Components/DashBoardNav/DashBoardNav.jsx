/* eslint-disable react/no-unknown-property */
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineMenu } from 'react-icons/ai';
import { ImProfile } from "react-icons/im";
import { FaList } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";

const DashBoardNav = () => {
    return (
        <div>
            <nav className=" top-0 z-50 w-full">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className=" drawer flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="drawer-content inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" >
                                <label for="my-drawer-2" className="btn btn-ghost lg:hidden">
                                    <AiOutlineMenu className="text-2xl font-bold"></AiOutlineMenu>
                                </label>
                            </button>
                            <div className="drawer-side">
                                <label for="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* <!-- Sidebar content here --> */}
                                    <NavLink to='/dashboard/adminprofile'>
                                        <li>
                                            <div className="flex items-center p-2 text-black font-bold md:text-white hover:text-black rounded-lg hover:bg-gray-100  group">
                                                <ImProfile className="text-base lg:text-xl" />
                                                <span className="ms-3 lg:text-xl">Admin Profile</span>
                                            </div>
                                        </li>
                                    </NavLink>
                                    <NavLink to='/dashboard/manageproperties'>
                                        <li>
                                            <div className="flex items-center p-2 text-black font-bold md:text-white hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <FaList className="text-base lg:text-xl" />
                                                <span className="ms-3 lg:text-xl">Manage Properties</span>
                                            </div>
                                        </li>
                                    </NavLink>
                                    <NavLink to='/dashboard/manageusers'>
                                        <li>
                                            <a href="#" className="flex items-center p-2 text-black font-bold md:text-white hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <FaUsers className="text-base lg:text-xl" />
                                                <span className="ms-3 lg:text-xl">Manage Users</span>
                                            </a>
                                        </li>
                                    </NavLink>
                                    <NavLink to='/dashboard/managereviews'>
                                        <li>
                                            <a href="#" className="flex items-center p-2 text-black font-bold md:text-white hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <MdOutlineReviews className="text-base lg:text-xl" />
                                                <span className="ms-3 lg:text-xl">Manage Reviews</span>
                                            </a>
                                        </li>
                                    </NavLink>
                                </ul>

                            </div>
                            <div className="flex items-center gap-2 ms-2 md:me-24">
                                <img className="w-10 h-10" src={logo} alt="" />
                                <h1 className=" text-center md:text-left text-base md:text-xl lg:text-xl font-extrabold"><span className="text-white">Evergreen</span> <span className="text-white">Estates</span></h1>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default DashBoardNav;