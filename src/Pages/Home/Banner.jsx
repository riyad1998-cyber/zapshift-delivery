import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3000}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
      >
        <div>
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[550px] object-cover"
          />
        </div>

        <div>
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[550px] object-cover"
          />
        </div>

        <div>
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[550px] object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
