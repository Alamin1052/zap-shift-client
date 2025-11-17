import React from 'react';

const HowItWork = () => {
    const items = [
        {
            title: "Booking Pick & Drop",
            desc: "From personal packages to business shipments — we deliver on time, every time.",
            icon: "📦",
        },
        {
            title: "Cash On Delivery",
            desc: "From personal packages to business shipments — we deliver on time, every time.",
            icon: "🚚",
        },
        {
            title: "Delivery Hub",
            desc: "From personal packages to business shipments — we deliver on time, every time.",
            icon: "🏣",
        },
        {
            title: "Booking SME & Corporate",
            desc: "From personal packages to business shipments — we deliver on time, every time.",
            icon: "🏢",
        },
    ];
    return (
        <div className="py-12 px-6 md:px-10">
            <h2 className="text-2xl font-bold mb-8 text-secondary">How it Works</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                    >
                        <div className="text-4xl mb-4">{item.icon}</div>

                        <h3 className="text-lg text-secondary font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWork;