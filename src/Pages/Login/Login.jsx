import { FiGithub } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import login from "../../assets/login.jpg";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='pb-10 pt-10 ' style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover' }}>

            <div className="container mx-auto gap-10 lg:gap-0 items-center md:flex md:justify-center mb-32">
                <div className="border-2 md:w-[500px] lg:w-[600px] h-[750px] mt-16 pt-5 md:p-5 lg:p-[75px] shadow-2xl rounded-lg">
                    <h1 className="text-[40px] font-semibold text-black text-center  mb-12">Sign In</h1>
                    <form className="px-1 md:px-0">
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
                            <input type="submit" className="py-4 bg-[#FF3811] text-white w-[415px] md:w-[461px] rounded-lg text-xl font-semibold cursor-pointer" value="Sign In" />
                        </div>
                    </form>
                    <h2 className="text-lg font-semibold text-black text-center mb-7">Or Sign In with</h2>
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <button><FcGoogle className="text-3xl"></FcGoogle></button>
                        <button><FiGithub className="text-3xl "></FiGithub></button>
                        <button><FiTwitter className="text-3xl "></FiTwitter></button>

                    </div>
                    <h3 className="text-lg font-semibold text-black text-center">Dont’t Have An Account ? <Link to='/register'><span className="text-[#FF3811]">Sign Up</span></Link> </h3>
                </div>
            </div>
        </div>
    );
};

export default Login;