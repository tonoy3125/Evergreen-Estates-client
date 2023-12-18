
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
import MyProfile from "../DashBoard/User/MyProfile/MyProfile";
import Wishlist from "../DashBoard/User/Wishlist/Wishlist";
import PropertyBought from "../DashBoard/User/PropertyBought/PropertyBought";
import MyReviews from "../DashBoard/User/MyReviews/MyReviews";
import UpdateProducts from "../DashBoard/Agent/MyAddedProperties/UpdateProducts";
import PropertyDetails from "../Pages/Advertisement/PropertyDetails/PropertyDetails";
import WIshlistForm from "../DashBoard/User/Wishlist/WIshlistForm";
import Payment from "../DashBoard/Payment/Payment";
import AdvertisementProperty from "../DashBoard/Admin/Advertisement/AdvertisementProperty";
import ReportedProperty from "../DashBoard/Admin/ReportedProperty/ReportedProperty";


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
                element: <PrivateRoute><AllProperties></AllProperties></PrivateRoute>
            },
            {
                path: "/propertydetails/:id",
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://evergreen-estates-server-assignment.vercel.app/properties/${params.id}`)
            },
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
            {
                path: "reportedproperty",
                element: <ReportedProperty></ReportedProperty>
                
            },
            {
                path: "advertisementproperty",
                element: <AdvertisementProperty></AdvertisementProperty>
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
                path: "myaddedproperties/updatedproperties/:id",
                element: <UpdateProducts></UpdateProducts>,
                loader: ({ params }) => fetch(`https://evergreen-estates-server-assignment.vercel.app/properties/${params.id}`)
            },
            {
                path: "mysoldproperties",
                element: <MySoldProperties></MySoldProperties>
            },
            {
                path: "requestedproperties",
                element: <RequestedProperties></RequestedProperties>
            },
            // User Routes
            {
                path: "myprofile",
                element: <MyProfile></MyProfile>
            },
            {
                path: "wishlist",
                element: <Wishlist></Wishlist>
            },
            {
                path: "wishlist/wishlistoffer/:id",
                element: <WIshlistForm></WIshlistForm>,
                loader: ({ params }) => fetch(`https://evergreen-estates-server-assignment.vercel.app/wishlists/${params.id}`)
            },
            {
                path: "propertybought",
                element: <PropertyBought></PropertyBought>
            },
            {
                path: "propertybought/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://evergreen-estates-server-assignment.vercel.app/paymentBrought/${params.id}`)
            },
            {
                path: "myreviews",
                element: <MyReviews></MyReviews>
            },
        ]
    }
]);

export default router