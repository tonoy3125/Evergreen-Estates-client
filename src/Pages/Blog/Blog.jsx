import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const Blog = () => {
    return (
        <div className='container mx-auto mt-20'>
            <div className="space-y-2 text-center mb-10">
                <h2 className=" text-3xl lg:text-5xl text-white font-bold">News and Blogs</h2>
                <p className="font-serif text-white dark:text-gray-400 pt-5">Write and deliver news stories with the reader’s perspective in mind</p>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    425: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {/* Slider 1 */}
                <SwiperSlide className='mb-12'>
                    <div className="flex flex-col dark:bg-gray-900 border ">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52  dark:bg-gray-500" src="https://i.ibb.co/Fgh2bfZ/business-partners-shaking-hands-with-engineer-by-architectural-model-meeting-1.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Essential Tips for Real Estate Transactions</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Explore how cutting-edge technology is reshaping the real estate landscape, from smart home features to sustainable living solutions.</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider 2 */}
                <SwiperSlide>
                    <div className="flex flex-col dark:bg-gray-900 border ">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52  dark:bg-gray-500" src="https://i.ibb.co/9gdwkH3/female-real-estate-agent-communicating-with-couple-while-showing-them-new-apartment-2.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Transforming Properties for Maximum Value</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Delve into lesser-known but promising neighborhoods, revealing their unique charms and potential for real estate investment in your city</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider 3 */}
                <SwiperSlide>
                    <div className="flex flex-col dark:bg-gray-900 border ">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52  dark:bg-gray-500" src="https://i.ibb.co/hHsnBBS/young-happy-couple-signing-contract-while-being-meeting-with-insurance-agent-office-1.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Trends and Preferences Shaping the Market</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Get insider tips on thriving in a seller's market, from strategic pricing to effective staging, ensuring your property stands out amidst fierce competition</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider 4 */}
                <SwiperSlide>
                    <div className="flex flex-col dark:bg-gray-900 border ">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52  dark:bg-gray-500" src="https://i.ibb.co/CtCQWFP/side-view-female-realtor-shaking-hands-with-couple-new-house-deal.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Diversifying Your Portfolio with Real Estate</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Explore the growing trend of eco-friendly homes and sustainable real estate practices, conscious choices can enhance property value</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider 5 */}
                <SwiperSlide>
                    <div className="flex flex-col dark:bg-gray-900 border ">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52  dark:bg-gray-500" src="https://i.ibb.co/qDj2kGS/happy-man-taking-keys-from-realtor-woman-standing-indoors-1.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Sustainable Practices in Modern Real Estate</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Customize your resume and cover letter for each job application. Highlight relevant skills and experiences that align with the specific job description</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider 6 */}
                <SwiperSlide>
                    <div className="flex flex-col dark:bg-gray-900 border ">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52  dark:bg-gray-500" src="https://i.ibb.co/qDj2kGS/happy-man-taking-keys-from-realtor-woman-standing-indoors-1.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Tips for Success in a Competitive Environment</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Discover how the preferences of the millennial generation are influencing the real estate market, from urban living to tech-integrated homes.</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider 7 */}
                <SwiperSlide>
                    <div className="flex flex-col dark:bg-gray-900 border ">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52  dark:bg-gray-500" src="https://i.ibb.co/qDj2kGS/happy-man-taking-keys-from-realtor-woman-standing-indoors-1.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Uncovering Underrated Neighborhoods</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Learn about the advantages of diversifying your investment portfolio with real estate, offering stability and potential for long-term growth.</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider 8 */}
                <SwiperSlide>
                    <div className="flex flex-col dark:bg-gray-900 border ">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52  dark:bg-gray-500" src="https://i.ibb.co/R0Chwcp/rsz-candidates-waiting-job-interview.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Embracing Technology in Real Estate</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Dive into the world of property renovations and how strategic improvements can significantly increase the value of your real estate investments</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col dark:bg-gray-900 border ">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52  dark:bg-gray-500" src="https://i.ibb.co/R0Chwcp/rsz-candidates-waiting-job-interview.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Tailor Your Resume and Cover Letter</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Gain insights into the legal aspects of real estate transactions, covering key considerations and expert  and secure property dealings</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <hr className="w-[400px] mx-auto mt-20 border-2" />
        </div>
    );
};

export default Blog;