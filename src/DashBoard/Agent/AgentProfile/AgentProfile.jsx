import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import { GiSelfLove } from "react-icons/gi";


const AgentProfile = () => {
    const { user } = useAuth()
    return (
        <div>
            <Helmet><title>Evergreen Estates | Agent Profile</title></Helmet>
            <h1 className="text-4xl font-black text-white mb-5">Welcome ! !</h1>


            <div className="mb-10">
                <div className="lg:max-w-2xl flex-1 mx-2 lg:mx-0 px-8 py-4  rounded-lg border border-white shadow-2xl  shadow-gray-300/50 dark:bg-gray-800">
                    <h3 className="text-xl font-semibold text-white">Additional Details</h3>
                    <hr className="mt-2" />
                    <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 justify-between mt-5">
                        <div>
                            <h1 className="text-white text-xl"> Agent Name : {user.displayName}</h1>
                            <h3 className="text-white text-xl">Role : Agent</h3>
                        </div>
                        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                            <img src={user?.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                <div className="stat border border-white rounded-lg shadow-2xl  shadow-gray-300/50 text-center">
                    <div className="stat-title text-white">Current balance</div>
                    <div className="stat-value text-white">$89,400</div>
                    <div className="stat-actions">
                        <button className="btn btn-outline text-white btn-sm mr-3">Withdrawal</button>
                        <button className="btn btn-sm btn-outline text-white">deposit</button>
                    </div>
                </div>
                <div className="stat border border-white rounded-lg shadow-2xl  shadow-gray-300/50">
                    <div className="stat-figure text-white">
                        <div className="stat-figure text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                    </div>
                    <div className="stat-title text-white">Total Property</div>
                    <div className="stat-value text-white">2.6k</div>
                    <div className="stat-desc text-white">21% more than last month</div>
                </div>
                <div className="stat border border-white rounded-lg shadow-2xl  shadow-gray-300/50">
                    <div className="stat-figure text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title text-white">Total Sold Properties</div>
                    <div className="stat-value text-white">2.6M</div>
                    <div className="stat-desc text-white">52% more than last month</div>
                </div>
                <div className="stat border border-white rounded-lg shadow-2xl  shadow-gray-300/50">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title text-white">Requested Properties</div>
                    <div className="stat-value text-white">2.6k</div>
                    <div className="stat-desc text-white">51% more than last month</div>
                </div>


            </div>

        </div>
    );
};

export default AgentProfile;