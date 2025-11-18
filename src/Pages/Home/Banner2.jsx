import React from "react";
import booking from "../../assets/bookingIcon.png";

const Banner2 = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 mb-6 md:mt-6">
      <h1 className="font-extrabold text-[24px] md:text-[32px] text-center md:text-left">
        How it Works
      </h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white rounded-2xl p-6 space-y-4 shadow">
          <img src={booking} alt="" className="w-12 h-12" />
          <h2 className="font-bold text-[18px] md:text-[20px]">
            Booking Pick & Drop
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 space-y-4 shadow">
          <img src={booking} alt="" className="w-12 h-12" />
          <h2 className="font-bold text-[18px] md:text-[20px]">
            Cash On Delivery
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 space-y-4 shadow">
          <img src={booking} alt="" className="w-12 h-12" />
          <h2 className="font-bold text-[18px] md:text-[20px]">
            Delivery Hub
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 space-y-4 shadow">
          <img src={booking} alt="" className="w-12 h-12" />
          <h2 className="font-bold text-[18px] md:text-[20px]">
            Booking SME & Corporate
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
