import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewPromise }) => {
    const reviews = use(reviewPromise);

    return (
        <div className='my-10'>
            <div className='text-center mb-5'>
                <h3 className="text-3xl text-secondary text-center font-bold">What our customers are sayings</h3>
                <p className='text-gray-400'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: '50%',
                    depth: 60,
                    modifier: 1,
                    scale: 0.85,
                    // slideShadows: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Reviews;