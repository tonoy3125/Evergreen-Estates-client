/* eslint-disable react/no-unknown-property */

import { Outlet, useNavigation } from "react-router-dom";
import DashBoardNav from "../../Components/DashBoardNav/DashBoardNav";
import AdminNav from "../../Components/AdminNav/AdminNav";
import AgentDashBoardNav from "../../Components/AgentDashBoardNav/AgentDashBoardNav";
import AgentNav from "../../Components/AgentNav/AgentNav";
import UseAdmin from "../../Hooks/useAdmin";
import useAgent from "../../Hooks/useAgent";
import UserDashBoardNav from "../../Components/UserDashBoardNav/UserDashBoardNav";
import UserNav from "../../Components/UserNav/UserNav";


const DashBoardLayout = () => {
    const [isAdmin] = UseAdmin()
    const [isAgent] = useAgent()
    const navigation = useNavigation()

    return (
        <div className=" min-h-screen ">
            {/* Nav */}
            {
                navigation.state === 'loading' ? <div className="h-full flex-grow w-full flex justify-center items-center">
                    <span className="loading loading-dots loading-lg"></span>
                </div> : <div>
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
                            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0 " aria-label="Sidebar">
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
            }



            <div className="p-4 pt-14 md:pt-4 sm:ml-64">
                <div className="p-4 md:ml-7 lg:ml-10   rounded-lg dark:border-gray-700 mt-14">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;