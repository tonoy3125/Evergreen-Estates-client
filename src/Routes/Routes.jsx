
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
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                
            }
        ]
    }
]);

export default router