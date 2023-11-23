import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import logo from "../../../assets/logo.png";

const Navbar = () => {
    return (
        <div className="">
            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <AiOutlineMenu className="text-2xl font-bold"></AiOutlineMenu>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/">Home</NavLink></li>
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/addjob">All properties</NavLink></li>
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/postedjobs">Dashboard</NavLink></li>


                        </ul>
                    </div>
                    <div className="ml-14 md:ml-0 flex items-center gap-2 ">
                        <img className="w-10 h-10" src={logo} alt="" />
                        <h1 className=" text-center md:text-left text-base md:text-2xl lg:text-3xl font-extrabold"><span className="text-white">Evergreen</span> <span className="text-white">Estates</span></h1>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex gap-5">
                        <li className="text-white text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-gray-50 underline" : ""
                        } to="/">Home</NavLink></li>
                        <li className="text-white text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-gray-50 font-bold underline" : ""
                        } to="/addjob">All properties</NavLink></li>
                        <li className="text-white text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-gray-50 underline" : ""
                        } to="/postedjobs">Dashboard</NavLink></li>
                        
                       


                    </ul>
                </div>

                {/* User login and logout toggle */}

                <div className="navbar-end flex items-center gap-5">

                </div>
            </div>
        </div>
    );
};

export default Navbar;