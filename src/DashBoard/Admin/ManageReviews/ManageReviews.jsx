import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import ManageReviewCard from "./ManageReviewCard";
import { Helmet } from "react-helmet-async";


const ManageReviews = () => {

    const axiosSecure = UseAxiosSecure()
    const { data: review = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosSecure.get('/review')
            // console.log(res.data)
            return res.data
        }
    })
    return (
        <div>
            <Helmet><title>Evergreen Estates | Manage Review</title></Helmet>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    review.map(singleReview => <ManageReviewCard key={singleReview._id} refetch={refetch} singleReview={singleReview}></ManageReviewCard>)
                }
            </div>
        </div>
    );
};

export default ManageReviews;