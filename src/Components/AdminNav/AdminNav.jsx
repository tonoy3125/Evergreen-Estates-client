/* eslint-disable react/no-unknown-property */
import { ImProfile } from "react-icons/im";
import { FaList } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminNav = () => {
    return (
        <div>
            <ul class="space-y-2 font-medium">
                <NavLink to='/dashboard/adminprofile'>
                    <li>
                        <div class="flex items-center p-2 text-white hover:text-black rounded-lg hover:bg-gray-100  group">
                            <ImProfile className="text-base lg:text-xl" />
                            <span class="ms-3 lg:text-xl">Admin Profile</span>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/dashboard/manageproperties'>
                    <li>
                        <div class="flex items-center p-2 text-white hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaList className="text-base lg:text-xl" />
                            <span class="ms-3 lg:text-xl">Manage Properties</span>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/dashboard/manageusers'>
                    <li>
                        <div class="flex items-center p-2 text-white hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaUsers className="text-base lg:text-xl" />
                            <span class="ms-3 lg:text-xl">Manage Users</span>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/dashboard/managereviews'>
                    <li>
                        <div class="flex items-center p-2 text-white hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdOutlineReviews className="text-base lg:text-xl" />
                            <span class="ms-3 lg:text-xl">Manage Reviews</span>
                        </div>
                    </li>
                </NavLink>

            </ul>
        </div>
    );
};

export default AdminNav;