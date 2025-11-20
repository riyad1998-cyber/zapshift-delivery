import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);

  return (
    <div className="mb-4 md:mb-6">
      <div className="text-center mb-4">
        <h3 className="text-3xl text-center font-bold">Review</h3>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nostrum sunt laborum commodi fugit soluta debitis ea velit, iste porro.</p>
      </div>

      <>
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}

          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
          pagination={true}
          modules={[EffectCoverflow, Pagination,Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Reviews;
