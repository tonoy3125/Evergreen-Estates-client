/* eslint-disable react/no-unknown-property */
import { ImProfile } from "react-icons/im";
import { MdOutlineAddModerator } from "react-icons/md";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { MdImageSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AgentNav = () => {
    return (
        <div>
            <ul class="space-y-2 font-medium">
                {/* Routes One */}
                <NavLink to='/dashboard/agentprofile'>
                    <li>
                        <div class="flex items-center p-2 text-white hover:text-black rounded-lg hover:bg-gray-100  group">
                            <ImProfile className="text-base lg:text-xl" />
                            <span class="ms-3 lg:text-xl">Agent Profile</span>
                        </div>
                    </li>
                </NavLink>
                {/* Routes Two */}
                <NavLink to='/dashboard/addproperty'>
                    <li>
                        <div class="flex items-center p-2 text-white hover:text-black rounded-lg hover:bg-gray-100  group">
                            <MdOutlineAddModerator className="text-base lg:text-xl" />
                            <span class="ms-3 lg:text-xl">Add Property</span>
                        </div>
                    </li>
                </NavLink>
                {/* Routes Three */}
                <NavLink to='/dashboard/myaddedproperties'>
                    <li>
                        <div class="flex items-center p-2 text-white hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdOutlineBookmarkAdded className="text-base lg:text-xl" />
                            <span class="ms-3 lg:text-xl">My added properties</span>
                        </div>
                    </li>
                </NavLink>
                {/* Routes Four */}
                <NavLink to='/dashboard/mysoldproperties'>
                    <li>
                        <div class="flex items-center p-2 text-white hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdOutlineAddHomeWork className="text-base lg:text-xl" />
                            <span class="ms-3 lg:text-xl">My Sold Properties</span>
                        </div>
                    </li>
                </NavLink>
                {/* Routes Five */}
                <NavLink to='/dashboard/requestedproperties'>
                    <li>
                        <div class="flex items-center p-2 text-white hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdImageSearch className="text-base lg:text-xl" />
                            <span class="ms-3 lg:text-xl">Requested Properties</span>
                        </div>
                    </li>
                </NavLink>

            </ul>
        </div>
    );
};

export default AgentNav;