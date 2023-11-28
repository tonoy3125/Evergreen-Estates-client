import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
import WishlistCard from "./WishlistCard";
import useAuth from "../../../Hooks/useAuth";


const Wishlist = () => {
    const { user } = useAuth()
    const axiosPublic = UseAxiosPublic()
    const { data: wishlister = [], refetch } = useQuery({
        queryKey: ['wishlister', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/wishlister/${user.email}`)
            // console.log(res.data)
            return res.data
        }
    })


    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 container mx-auto">
                {
                    wishlister?.map(item => <WishlistCard key={item._id} item={item} refetch={refetch}></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;