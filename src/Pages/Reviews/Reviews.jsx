/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../Hooks/useAxiosPublic';


const Reviews = () => {
    const axiosPublic = UseAxiosPublic()

    const { data: review = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosPublic.get('/review')
            // console.log(res.data)
            return res.data
        }
    })



    return (
        <div className='container mx-auto'>
            <h1 className='text-white text-center text-5xl mb-20 mt-20'>Users Reviews</h1>
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
                    modules={[Autoplay,  Navigation]}
                    className="mySwiper"
                >
                    {
                        review.map(item => <SwiperSlide key={item._id}>
                            <div className='max-w-2xl mx-auto mb-7'>
                                <img class="object-cover w-32 h-32 mt-2 mx-auto rounded-full ring-4 ring-gray-300" src={item.userImage} alt="" />
                                <div className='mt-10 text-center'>
                                    <p className='text-white mb-7'>{item.review}</p>
                                    <h1 className='text-white mb-3'>{item.name}</h1>
                                    <h1 className='text-white mb-3'>{item.title}</h1>
                                    <div className="star-rating text-white">
                                        {[...Array(Math.floor(item.rating))].map((_, i) => (
                                            <span key={i} className="star">&#9733;</span>
                                        ))}
                                        {[...Array(5 - Math.floor(item.rating))].map((_, i) => (
                                            <span key={i + Math.floor(item.rating)} className="star">&#9734;</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <hr className="w-[400px] mx-auto mt-20 border-2" />
        </div>
    );
};

export default Reviews;