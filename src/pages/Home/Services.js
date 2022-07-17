import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import Cavity from '../../assets/images/cavity.png'
import Teeth from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
        const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: fluoride  
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: Cavity  
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: Teeth  
        },
    ];
    return (
        <div className='py-5 my-4'>
           <div>
                <h2 className='font-bold text-center text-sky-500 text-2xl py-3'>Our Services</h2>
                <h4 className='text-center text-white text-4xl font-normal '>Services We Provide</h4>
           </div>
           <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                {services.map(service => <Service service={service} key={service._id}></Service>)}
           </div>
        </div>
    );
};

export default Services;