/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Reviews = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-white text-center text-5xl mb-10 mt-10'>Users Reviews</h1>
            <div className='max-w-3xl mx-auto'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='max-w-2xl mx-auto mb-7'>
                            <img class="object-cover w-32 h-32 mt-2 mx-auto rounded-full ring-4 ring-gray-300" src="https://i.ibb.co/YQ9xkSs/portrait-beautiful-young-woman-standing-grey-wall.jpg" alt="" />
                            <div className='mt-10 text-center'>
                                <p className='text-white mb-7'>Your Home Journey Starts Here - Explore
                                    Affordable and Elegant Properties.We'll
                                    help you find a place you'll love.</p>
                                <h1 className='text-white mb-3'>Bob Marley</h1>
                                <h1 className='text-white mb-3'>Property Title</h1>
                                <div className="rating rating-xs mb-5">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='max-w-2xl mx-auto'>
                            <img class="object-cover w-32 h-32 mt-2 mx-auto rounded-full ring-4 ring-gray-300" src="https://i.ibb.co/YQ9xkSs/portrait-beautiful-young-woman-standing-grey-wall.jpg" alt="" />
                            <div className='mt-10 text-center'>
                                <p className='text-white mb-7'>Your Home Journey Starts Here - Explore
                                    Affordable and Elegant Properties.We'll
                                    help you find a place you'll love.</p>
                                <h1 className='text-white mb-3'>Bob Marley</h1>
                                <h1 className='text-white mb-3'>Property Title</h1>
                                <div className="rating rating-xs mb-5">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <hr className="w-[400px] mx-auto mt-20 border-2" />
        </div>
    );
};

export default Reviews;