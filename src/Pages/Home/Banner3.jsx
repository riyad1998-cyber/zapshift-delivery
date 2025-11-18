import React from 'react';
import service from '../../assets/service.png';

const Banner3 = () => {
    return (
        <div className="bg-[#03373D] p-6 rounded-2xl">
            {/* Header */}
            <div className="flex flex-col items-center text-center">
                <h1 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl">
                    Our Services
                </h1>
                <p className="text-white font-medium mt-2 max-w-2xl">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {/* Card 1 */}
                <div className="bg-white flex flex-col items-center justify-center space-y-6 p-6 rounded-2xl shadow-md">
                    <img src={service} alt="service" className="w-20 h-20 object-contain" />
                    <h2 className="font-bold text-xl md:text-2xl text-center">
                        Express & Standard Delivery
                    </h2>
                    <p className="font-medium text-gray-600 text-center text-sm md:text-base">
                        We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. 
                        Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white flex flex-col items-center justify-center space-y-6 p-6 rounded-2xl shadow-md">
                    <img src={service} alt="service" className="w-20 h-20 object-contain" />
                    <h2 className="font-bold text-xl md:text-2xl text-center">
                        Nationwide Delivery
                    </h2>
                    <p className="font-medium text-gray-600 text-center text-sm md:text-base">
                        We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. 
                        Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white flex flex-col items-center justify-center space-y-6 p-6 rounded-2xl shadow-md">
                    <img src={service} alt="service" className="w-20 h-20 object-contain" />
                    <h2 className="font-bold text-xl md:text-2xl text-center">
                        Fulfillment Solution
                    </h2>
                    <p className="font-medium text-gray-600 text-center text-sm md:text-base">
                        We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. 
                        Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white flex flex-col items-center justify-center space-y-6 p-6 rounded-2xl shadow-md">
                    <img src={service} alt="service" className="w-20 h-20 object-contain" />
                    <h2 className="font-bold text-xl md:text-2xl text-center">
                        Cash on Home Delivery
                    </h2>
                    <p className="font-medium text-gray-600 text-center text-sm md:text-base">
                        We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. 
                        Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.
                    </p>
                </div>

                {/* Card 5 */}
                <div className="bg-white flex flex-col items-center justify-center space-y-6 p-6 rounded-2xl shadow-md">
                    <img src={service} alt="service" className="w-20 h-20 object-contain" />
                    <h2 className="font-bold text-xl md:text-2xl text-center">
                      Corporate Service / Contract In Logistics
                    </h2>
                    <p className="font-medium text-gray-600 text-center text-sm md:text-base">
                        We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. 
                        Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.
                    </p>
                </div>

                {/* Card 6 */}
                <div className="bg-white flex flex-col items-center justify-center space-y-6 p-6 rounded-2xl shadow-md">
                    <img src={service} alt="service" className="w-20 h-20 object-contain" />
                    <h2 className="font-bold text-xl md:text-2xl text-center">
                       Parcel Return
                    </h2>
                    <p className="font-medium text-gray-600 text-center text-sm md:text-base">
                        We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. 
                        Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner3;
