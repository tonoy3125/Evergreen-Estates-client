import UseAdmin from "../Hooks/UseAdmin";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = UseAdmin()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <p className="text-center"><span className="loading loading-spinner loading-lg"></span></p>
    }

    if (user && isAdmin) {
        return children
    }
    return <Navigate state={location.pathname} to="/"></Navigate>
};

export default AdminRoute;