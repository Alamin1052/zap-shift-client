import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Express & Standard Delivery",
            desc: "We deliver parcels within 24–72 hours in Dhaka, Chattogram, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
            highlight: false,
        },
        {
            title: "Nationwide Delivery",
            desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
            highlight: true, // Center highlighted card
        },
        {
            title: "Fulfillment Solution",
            desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
            highlight: false,
        },
        {
            title: "Cash on Home Delivery",
            desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
            highlight: false,
        },
        {
            title: "Corporate Service / Contract In Logistics",
            desc: "Customized corporate services including warehouse and inventory management support.",
            highlight: false,
        },
        {
            title: "Parcel Return",
            desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online merchants.",
            highlight: false,
        },
    ];
    return (
        <div className='bg-[#03373D] p-12 rounded-xl mb-12'>
            <div className='text-center mb-5'>
                <h1 className='text-white text-3xl font-bold'>Our Services</h1>
                <p className='text-white max-w-lg mx-auto'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl p-6 shadow-sm transition ${item.highlight
                            ? "bg-[#CFF169] border-2 border-[#addd4a]"
                            : "bg-white"
                            }`}
                    >
                        <div className="flex justify-center mb-4">
                            {/* Icon placeholder (replace with image if you want) */}
                            <div className="w-14 h-14 bg-[#FFECEC] rounded-full flex items-center justify-center">
                                📦
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-center mb-3">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm text-center">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;