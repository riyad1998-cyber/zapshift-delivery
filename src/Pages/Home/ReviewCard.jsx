import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const {userName, review : testimonial,user_photoURL} = review;
  return (
    <div className="max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200">
      {/* Quote Icon */}
      <div className="text-primary text-3xl mb-3">
        <FaQuoteLeft />
      </div>

      {/* Text */}
      <p className="text-gray-600 leading-relaxed mb-5">
        {testimonial}
      </p>

      <div className="border-t border-dashed mb-4"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10  rounded-full">
            <img src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-bold text-gray-800">{userName}</h3>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
