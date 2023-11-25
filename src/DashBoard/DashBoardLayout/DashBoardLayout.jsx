/* eslint-disable react/no-unknown-property */

import { Outlet } from "react-router-dom";
import DashBoardNav from "../../Components/DashBoardNav/DashBoardNav";
import AdminNav from "../../Components/AdminNav/AdminNav";


const DashBoardLayout = () => {


    return (
        <div className=" min-h-screen ">
            <DashBoardNav></DashBoardNav>

            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0 " aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto  ">
                    <AdminNav></AdminNav>
                </div>
            </aside>

            <div class="p-4 pt-14 md:pt-4 sm:ml-64">
                <div class="p-4 md:ml-7 lg:ml-10 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;