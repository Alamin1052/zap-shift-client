import React from 'react';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Shared/Footer/Footer';

const Root = () => {
    return (
        <div className='bg-[#E9EFEF] '>
            <section className='max-w-7xl mx-auto py-5'>
                <Navbar />
            </section>
            <section className='max-w-7xl mx-auto'>
                <Outlet />
            </section>
            <section className='max-w-7xl mx-auto'>
                <Footer />
            </section>

        </div>
    );
};

export default Root;