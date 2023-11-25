import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";


const ManageUsers = () => {

    const axiosSecure = UseAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    return (
        <div>
            <h1 className="text-2xl lg:text-4xl text-white font-bold text-center">Manage All Users</h1>
            <div className="lg:px-32 mt-10">
                <h3 className=" text-xl lg:text-3xl font-bold text-white text-center lg:text-left mb-4">Total Users {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-white text-xl"></th>
                                <th className="text-white text-xl">Name</th>
                                <th className="text-white text-xl">Email</th>
                                <th className="text-white text-xl">Role</th>
                                <th className="text-white text-xl">Role</th>
                                <th className="text-white text-xl">Role</th>
                                <th className="text-white text-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th className="text-white">{index + 1}</th>
                                    <td className="text-white">{user.name}</td>
                                    <td className="text-white">{user.email}</td>
                                    <td className="text-white">Blue</td>
                                    <td className="text-white">Blue</td>
                                    <td className="text-white">Blue</td>
                                    <td><button className="btn btn-outline text-white">
                                        <RiDeleteBin5Line className="text-xl"/>
                                    </button></td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;