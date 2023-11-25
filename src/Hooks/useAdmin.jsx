
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";



const UseAdmin = () => {
    const axiosSecure = UseAxiosSecure()
    const { user } = useAuth()
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default UseAdmin;