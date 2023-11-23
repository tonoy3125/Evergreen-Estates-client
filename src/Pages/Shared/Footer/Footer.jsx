import { FaFacebookF } from 'react-icons/fa';
import { CiTwitter } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';
import logo from "../../../assets/logo.png";

const Footer = () => {
    return (
        <div>
            <div className='mt-10 container mx-auto'>
                <div className='flex flex-col gap-5 lg:flex-row pt-10 '>
                    <div className='text-center md:text-left md:ml-14 lg:ml-0'>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3 ">
                            <img className="w-10 h-10" src={logo} alt="" />
                            <h1 className=" text-center md:text-left text-base lg:text-2xl font-extrabold text-white">Evergreen Estates</h1>
                        </div>
                        <p className='text-white text-sm lg:text-base font-medium mb-5'>Where Nature Meets Luxury</p>
                        <p className='text-white text-sm font-medium mb-5 px-2 md:px-0'>Discover the charm of Evergreen <br /> Estates, a  premier community offering <br /> modern living  surrounded by lush <br /> greenery and scenic landscapes.</p>
                        <p className="text-white text-sm font-medium mb-5 px-2 md:px-0">House # 7/B, Road # 103, Gulshan-2, Dhaka-1212</p>
                        <div className="flex items-center justify-center md:justify-start text-white gap-5 mb-5  md:px-0">
                            <FaFacebookF className="text-xl"></FaFacebookF>
                            <CiTwitter className="text-xl"></CiTwitter>
                            <AiOutlineInstagram className="text-xl"></AiOutlineInstagram>
                            <FiLinkedin className="text-xl"></FiLinkedin>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16 px-14 text-start">
                        <div>
                            <h1 className='text-white font-bold footer-title text-base mb-5'>USEFUL LINKS</h1>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer  mb-2'>About Us</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>FAQs Page</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Checkout</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Login</p>
                        </div>
                        <div>
                            <h1 className='text-white font-bold footer-title text-base mb-5'>DEVELOPERS</h1>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Booking</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Stays</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Adventures</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Author Detail</p>
                        </div>
                        <div>
                            <h1 className='text-white font-bold footer-title text-base mb-5'>Community</h1>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Hot Listings</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Properties</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Top Picks</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Exclusive Offers</p>
                        </div>
                        <div>
                            <h1 className='text-white font-bold footer-title text-base mb-5'>Resources</h1>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Buying Guide</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Selling Tips</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Stay Updated</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Legal Guidance</p>
                        </div>
                    </div>
                    <form className="ml-14 lg:ml-0 mb-5">
                        <header className="footer-title text-white">News Portal</header>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white ">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="Enter Your Email Here" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-accent text-black absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>


            </div>
            <hr className='pb-5' />
            <div className='text-center pb-5'>
                <small className='text-white text-base font-semibold '> Evergreen Estates © 2023. All rights reserved.</small>
            </div>
        </div>
    );
};

export default Footer;