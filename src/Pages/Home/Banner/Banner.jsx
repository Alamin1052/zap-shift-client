import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from './../../../assets/banner/banner1.png'
import img2 from './../../../assets/banner/banner2.png'
import img3 from './../../../assets/banner/banner3.png'


const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Banner;