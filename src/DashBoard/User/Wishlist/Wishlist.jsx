import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
import WishlistCard from "./WishlistCard";


const Wishlist = () => {

    const axiosPublic = UseAxiosPublic()
    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await axiosPublic.get('/wishlist')
            // console.log(res.data)
            return res.data
        }
    })


    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 container mx-auto">
                {
                    wishlist?.map(item => <WishlistCard key={item._id} item={item} refetch={refetch}></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;