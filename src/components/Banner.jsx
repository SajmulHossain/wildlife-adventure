import { Navigation,  Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import image1 from '../assets/banner1.jpg'
import image2 from '../assets/banner2.jpg'
import image3 from '../assets/banner3.jpg'
import image4 from '../assets/banner4.jpg'
import image5 from '../assets/banner5.jpg'

const Banner = () => {
  return (
    <div className="rounded-xl overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]} 
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        navigation
        loop 
        spaceBetween={0} 
        slidesPerView={1} 
        centeredSlides={true} 
      >
        <SwiperSlide>
          <img className="w-full h-[350px] md:h-[450px] object-cover lg:h-[530px]" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[350px] md:h-[450px] object-cover lg:h-[530px]" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[350px] md:h-[450px] object-cover lg:h-[530px]" src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[350px] md:h-[450px] object-cover lg:h-[530px]" src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[350px] md:h-[450px] object-cover lg:h-[530px]" src={image5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
