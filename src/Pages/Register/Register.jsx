import { useState } from "react";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";
import login from "../../assets/login.jpg";
import '../../Pages/ButtonHover/hover.css'
const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="pb-5" style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover' }}>
            <div className="container mx-auto lg:gap-0 items-center flex justify-center mb-32">
                <div className="border md:w-[500px] lg:w-[600px] h-[880px] mt-16 pt-5 md:p-5 lg:p-[75px] shadow-2xl rounded-lg ">
                    <h1 className="text-[40px] font-black text-black text-center  mb-12">Sign Up</h1>
                    <form className="px-1 md:px-0">
                        <div className="mb-7">
                            <h2 className="text-lg font-bold text-black mb-5">Your Name</h2>
                            <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type="text" name="name" id="" placeholder="Enter your name" />
                        </div>
                        <div className="mb-7">
                            <h2 className="text-lg font-bold text-black mb-5">Photo URL</h2>
                            <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type="text" name="photo" id="" placeholder="Enter your Photo URL" />
                        </div>
                        <div className="mb-7">
                            <h2 className="text-lg font-bold text-black mb-5">Email address</h2>
                            <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type="email" name="email" id="" placeholder="Enter your email address" />
                        </div>
                        <div className="mb-7">
                            <h2 className="text-lg font-bold text-black mb-5">Password</h2>
                            <div className="relative">
                                <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type={showPassword ? "text" : "password"} name="password" id="" placeholder="Enter your password" />
                                <span className="absolute right-4 md:right-1 top-5 rtl:left-0 rtl:right-auto " onClick={() => { setShowPassword(!showPassword) }} >
                                    {
                                        showPassword ? <AiOutlineEyeInvisible className='text-xl'></AiOutlineEyeInvisible> : <AiOutlineEye className='text-xl'></AiOutlineEye>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="mb-7">
                            <button className="hvr-shutter-in-vertical">
                                <input type="submit" className="py-4  text-white w-[415px] md:w-[461px] rounded-lg text-xl font-semibold" value="Sign Up" />
                            </button>
                        </div>
                    </form>

                    <h3 className="text-lg font-semibold text-black text-center">Already have an account?  <Link to='/login'><span className="text-[#FF3811]">Sign In</span></Link> </h3>
                </div>
            </div>
        </div>
    );
};

export default Register;