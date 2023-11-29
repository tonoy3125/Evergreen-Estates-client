import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { GiHandcuffed } from "react-icons/gi";
import { LuUserCog } from "react-icons/lu";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ManageUsers = () => {

    const axiosSecure = UseAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    // Update The User role

    const handleRole = (_id, role) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you really want to update the ${role.role}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm it"
        }).then((result) => {
            const updateRole = role
            console.log(updateRole)
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${_id}`, updateRole)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Updated!",
                                text: "Your role has been updated.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    // Delete a User by id

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    // handle fraud agent
    const handleFraud = (id, status) => {
        Swal.fire({
            title: "Are you sure make fraud?",
            text: "You won't recover it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make this user fraud!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/users/fraud/${id}`, status)
                console.log(res.data)
                if (res.data.statusResult.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }


    return (
        <div>
            <Helmet><title>Evergreen Estates | Manage Review Card</title></Helmet>
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
                                <th className="text-white text-xl">Admin</th>
                                <th className="text-white text-xl">Agent</th>
                                <th className="text-white text-xl">Fraud</th>
                                <th className="text-white text-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th className="text-white">{index + 1}</th>
                                    <td className="text-white">{user.name}</td>
                                    <td className="text-white">{user.email}</td>
                                    <td className="text-white">{user.role}</td>
                                    {/* <td>
                                        <button onClick={() => handleRole(user._id, { role: "admin" })} className="btn btn-outline text-white">
                                            <GrUserAdmin className="text-2xl"></GrUserAdmin>
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleRole(user._id, { role: "agent" })} className="btn btn-outline text-white">
                                            <LuUserCog className="text-2xl "></LuUserCog>
                                        </button>
                                    </td>
                                    <td className="text-white">Blue</td>
                                    <td><button onClick={() => handleDeleteUser(user)} className="btn btn-outline text-white">
                                        <RiDeleteBin5Line className="text-xl" />
                                    </button></td> */}


                                    <td className="px-6 py-4">
                                        {
                                            user?.status === "Fraud" ?
                                                <td className="px-6 py-4 text-lg text-white">
                                                    {user?.status}
                                                </td>
                                                : <button onClick={() => handleRole(user._id, { role: "admin" })} className="btn btn-outline text-white ">
                                                    <GrUserAdmin className="text-2xl"></GrUserAdmin>
                                                </button>
                                        }
                                    </td>

                                    <td className="px-6 py-4">
                                        {
                                            user?.status === "Fraud" ?
                                                <td className="px-6 py-4 text-lg text-white">
                                                    {user?.status}
                                                </td>
                                                : <button onClick={() => handleRole(user._id, { role: "agent" })} className="btn btn-outline text-white">
                                                    <LuUserCog className="text-2xl "></LuUserCog>
                                                </button>
                                        }
                                    </td>

                                    {/* make fraud */}
                                    <td className="px-6 py-4">
                                        {
                                            user?.status === "Fraud" ?
                                                <td className="px-6 py-4 text-lg text-white">
                                                    {user?.status}
                                                </td>
                                                : <button
                                                    onClick={() => handleFraud(user?._id, { status: "Fraud" })}
                                                    disabled={user?.role === "user" || user?.role === "admin"} className="mr-4  btn bg-amber-500">
                                                    <GiHandcuffed className="text-2xl text-white"></GiHandcuffed>
                                                </button>
                                        }
                                    </td>
                                    <td><button onClick={() => handleDeleteUser(user)} className="btn btn-outline text-white">
                                        <RiDeleteBin5Line className="text-xl" />
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