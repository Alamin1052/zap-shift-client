import React from 'react';
import Banner from '../Banner/Banner';
import HowItWork from '../HowItWork/HowItWork';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';

const reviewPromise = fetch('/reviews.json').then(res => res.json());
const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWork />
            <Services />
            <Brands />
            <Reviews reviewPromise={reviewPromise}></Reviews>
        </div >
    );
};

export default Home;