import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "../../assets/brands/amazon.png";
import pic2 from "../../assets/brands/amazon_vector.png";
import pic3 from "../../assets/brands/casio.png";
import pic4 from "../../assets/brands/moonstar.png";
import pic5 from "../../assets/brands/randstad.png";
import pic6 from "../../assets/brands/star.png";
import pic7 from "../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogos = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

const Brands = () => {
  return (
    <div className="px-4 md:px-10">
      <h1 className="text-center mt-6 font-extrabold text-[22px] md:text-[28px]">
        We've helped thousands of sales teams
      </h1>

      <Swiper
        className="mt-8 mb-10"
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        spaceBetween={20}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          480: { slidesPerView: 3 },  
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },      
        }}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={logo}
              alt="brand logo"
              className="w-20 md:w-28 lg:w-32 object-contain opacity-80 hover:opacity-100 transition-all"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
