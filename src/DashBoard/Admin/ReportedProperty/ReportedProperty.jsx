
import { useQuery } from "@tanstack/react-query";


import ReportedCards from "./ReportedCards";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const ReportedProperty = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: reportedProperty = [], refetch } = useQuery({
        queryKey: ["reportedProperty"],
        queryFn: async () => {
            const res = await axiosSecure.get('/reportedProperties')
            return res.data;
        }
    })
    return (
        <div className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen mx-6">
                {reportedProperty?.map(report => <ReportedCards key={report._id} report={report} refetch={refetch}></ReportedCards>)}
            </div>
        </div>
    );
};

export default ReportedProperty;