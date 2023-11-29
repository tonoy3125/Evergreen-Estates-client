/* eslint-disable react/no-unknown-property */

import { Link, Outlet, useNavigation } from "react-router-dom";
import DashBoardNav from "../../Components/DashBoardNav/DashBoardNav";
import AdminNav from "../../Components/AdminNav/AdminNav";
import AgentDashBoardNav from "../../Components/AgentDashBoardNav/AgentDashBoardNav";
import AgentNav from "../../Components/AgentNav/AgentNav";
import UseAdmin from "../../Hooks/useAdmin";
import useAgent from "../../Hooks/useAgent";
import UserDashBoardNav from "../../Components/UserDashBoardNav/UserDashBoardNav";
import UserNav from "../../Components/UserNav/UserNav";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";


const DashBoardLayout = () => {
    const { user, logOut } = useAuth()
    const [isAdmin] = UseAdmin()
    const [isAgent] = useAgent()


    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .then(error => {
                console.log(error)
            })
    }

    return (
        <div className=" min-h-screen">
            <Helmet><title>Evergreen Estates | DashBoard</title></Helmet>
            {/* Nav */}
            <div className="flex justify-between border-b-2">
                <div>
                    <div>
                        {isAdmin && <><DashBoardNav></DashBoardNav>
                            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0 " aria-label="Sidebar">
                                <div className="h-full px-3 pb-4 overflow-y-auto  ">
                                    <AdminNav></AdminNav>
                                </div>
                            </aside></>}
                    </div>
                    <div>
                        {isAgent && <><AgentDashBoardNav></AgentDashBoardNav>
                            <aside id="logo-sidebar" className=" fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0 " aria-label="Sidebar">
                                <div className="h-full px-3 pb-4 overflow-y-auto  ">
                                    <AgentNav></AgentNav>
                                </div>
                            </aside></>}
                    </div>
                    <div>
                        {!isAdmin && !isAgent && <><UserDashBoardNav></UserDashBoardNav>
                            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0 " aria-label="Sidebar">
                                <div className="h-full px-3 pb-4 overflow-y-auto  ">
                                    <UserNav></UserNav>
                                </div>
                            </aside></>}
                    </div>
                </div>
                <div className=" pt-5 md:pt-2">
                    <div className="flex gap-2 pr-3">
                        <div className="form-control md:block hidden">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        {
                            user ? <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                    </div>
                                </div>
                                <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><button onClick={handleLogOut}>Logout</button></li>
                                </ul>
                            </div>
                                :
                                <Link to="/login">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://i.ibb.co/WsLGC0q/user.png" />
                                        </div>
                                    </label>
                                </Link>
                        }
                    </div>
                </div>
            </div>



            <div className="p-4 pt-14 md:pt-4 sm:ml-64">
                <div className="p-4 md:ml-7 lg:ml-10   rounded-lg dark:border-gray-700 mt-14">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;