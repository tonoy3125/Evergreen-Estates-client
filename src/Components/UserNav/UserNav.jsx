import { NavLink } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { MdOutlineFormatListBulleted } from "react-icons/md"
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { MdOutlineAddHomeWork } from "react-icons/md";

const UserNav = () => {
    return (
        <div>
            <ul className="space-y-2 font-medium">
                {/* Routes one */}
                <NavLink to='/dashboard/myprofile'>
                    <li>
                        <div className="flex items-center p-2 text-white hover:text-black rounded-lg hover:bg-gray-100  group">
                            <ImProfile className="text-base lg:text-xl" />
                            <span className="ms-3 lg:text-xl">My Profile</span>
                        </div>
                    </li>
                </NavLink>
                {/* Routes Two */}
                <NavLink to='/dashboard/wishlist'>
                    <li>
                        <div className="flex items-center p-2 text-white hover:text-black rounded-lg hover:bg-gray-100  group">
                            <MdOutlineFormatListBulleted className="text-base lg:text-xl" />
                            <span className="ms-3 lg:text-xl">Wishlist</span>
                        </div>
                    </li>
                </NavLink>
                {/* Routes Three */}
                <NavLink to='/dashboard/propertybought'>
                    <li>
                        <div className="flex items-center p-2 text-white hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdOutlineBookmarkAdded className="text-base lg:text-xl" />
                            <span className="ms-3 lg:text-xl">Property Bought</span>
                        </div>
                    </li>
                </NavLink>
                {/* Routes Four */}
                <NavLink to='/dashboard/myreviews'>
                    <li>
                        <div className="flex items-center p-2 text-white hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdOutlineAddHomeWork className="text-base lg:text-xl" />
                            <span className="ms-3 lg:text-xl">My Reviews</span>
                        </div>
                    </li>
                </NavLink>

            </ul>
        </div>
    );
};

export default UserNav;