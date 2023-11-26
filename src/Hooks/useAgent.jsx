import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";


const useAgent = () => {
    const axiosSecure = UseAxiosSecure()
    const { user } = useAuth()
    const { data: isAgent, isPending: isAgentLoading } = useQuery({
        queryKey: [user?.email, 'isAgent'],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/agent/${user?.email}`)
            console.log(res.data)
            return res.data?.agent
        }
    })
    return [isAgent, isAgentLoading]
};

export default useAgent;