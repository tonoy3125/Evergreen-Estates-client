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
            <h1 className="text-2xl lg:text-4xl text-white font-bold text-center mb-2">Manage Reviews</h1>
            <hr className=" w-[250px] lg:w-[370px] mx-auto mb-10 border-2" />
            <h3 className=" text-xl lg:text-3xl font-bold text-white text-center lg:text-left mb-4 mt-10">Total Reviews {review.length}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    review.map(singleReview => <ManageReviewCard key={singleReview._id} refetch={refetch} singleReview={singleReview}></ManageReviewCard>)
                }
            </div>
        </div>
    );
};

export default ManageReviews;