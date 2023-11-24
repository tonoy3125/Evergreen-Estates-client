import { FiGithub } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import login from "../../assets/login.jpg";
import '../../Pages/ButtonHover/hover.css'
import useAuth from '../../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signIn, setLoading, signInWithGoogle, signInWithGithub } = useAuth()
    const navigate = useNavigate()


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)


        // Password regex
        if (!/^.{6,}$/.test(password)) {
            toast.error("Password must be at least 6 characters");
            return
        }

        // Sign in 
        signIn(email, password)
            .then(result => {
                console.log('Navigating to:', location?.state ? location.state : "/");
                navigate(location?.state ? location.state : "/")
                swal("Good job!", "User logged Successfully", "success");
            })




            .catch(error => {
                const errormsg = error.message;
                toast.error(errormsg);
                setLoading(false)
                e.target.reset()
            })
    }
    return (
        <div className='pb-10 pt-10 ' style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover' }}>

            <div className="container mx-auto gap-10 lg:gap-0 items-center md:flex md:justify-center mb-32">
                <div className="border-2 md:w-[500px] lg:w-[600px] h-[750px] mt-16 pt-5 md:p-5 lg:p-[75px] shadow-2xl rounded-lg">
                    <h1 className="text-[40px] font-black text-black text-center  mb-12">Sign In</h1>
                    <form onSubmit={handleLogin} className="px-1 md:px-0">
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
                            <button className='hvr-shutter-in-vertical'>
                                <input type="submit" className="py-4  text-white w-[415px] md:w-[461px] rounded-lg text-xl font-semibold cursor-pointer" value="Sign In" />
                            </button>
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
            <Toaster />
        </div>
    );
};

export default Login;