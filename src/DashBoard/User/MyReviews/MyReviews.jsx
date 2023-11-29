import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
import ReviewCard from "./ReviewCard";
import { Helmet } from "react-helmet-async";


const MyReviews = () => {
    const { user } = useAuth()
    const axiosSecure = UseAxiosPublic()
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myreviews/${user.email}`)
            console.log(res.data)
            return res.data
        }
    })



    return (
        <div>
            <Helmet><title>Evergreen Estates | My Reviews</title></Helmet>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {
                    reviews?.map(review => <ReviewCard key={review._id} refetch={refetch} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;