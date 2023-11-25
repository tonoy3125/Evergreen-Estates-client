
import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root/Root";
import ErrorElement from "../Layout/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProperties from "../Pages/AllProperties/AllProperties";
import DashBoardLayout from "../DashBoard/DashBoardLayout/DashBoardLayout";
import AdminProfile from "../DashBoard/Admin/AdminProfile/AdminProfile";
import ManageProperties from "../DashBoard/Admin/ManageProperties/ManageProperties";
import ManageUsers from "../DashBoard/Admin/ManageUsers/ManageUsers";
import ManageReviews from "../DashBoard/Admin/ManageReviews/ManageReviews";
import PrivateRoute from './PrivateRoute';
import AgentProfile from "../DashBoard/Agent/AgentProfile/AgentProfile";
import MyAddedProperties from "../DashBoard/Agent/MyAddedProperties/MyAddedProperties";
import AddProperty from "../DashBoard/Agent/AddProperty/AddProperty";
import MySoldProperties from "../DashBoard/Agent/MySoldProperties/MySoldProperties";
import RequestedProperties from "../DashBoard/Agent/RequestedProperties/RequestedProperties";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/allproperties",
                element: <AllProperties></AllProperties>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            // Admin Routes
            {
                path: "adminprofile",
                element: <AdminProfile></AdminProfile>
            },
            {
                path: "manageproperties",
                element: <ManageProperties></ManageProperties>
            },
            {
                path: "manageusers",
                element: <ManageUsers></ManageUsers>
            },
            {
                path: "managereviews",
                element: <ManageReviews></ManageReviews>
            },
            // Agent Routes
            {
                path: "agentprofile",
                element: <AgentProfile></AgentProfile>
            },
            {
                path: "addproperty",
                element: <AddProperty></AddProperty>
            },
            {
                path: "myaddedproperties",
                element: <MyAddedProperties></MyAddedProperties>
            },
            {
                path: "mysoldproperties",
                element: <MySoldProperties></MySoldProperties>
            },
            {
                path: "requestedproperties",
                element: <RequestedProperties></RequestedProperties>
            },
        ]
    }
]);

export default router