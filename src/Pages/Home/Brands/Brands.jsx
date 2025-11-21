import React from 'react';
import amazon from '../../../assets/brands/amazon.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'
import Marquee from 'react-fast-marquee';


const Brands = () => {
    const brandLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, start_people];
    return (
        <div className='my-10'>
            <div className="py-6 px-12">
                <Marquee speed={50} >
                    {brandLogos.map((b, i) => (
                        <img
                            key={i}
                            src={b}
                            className="object-cover mx-8"
                            alt=""
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Brands;