import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
           <InfoCard cardTitle="Opening Ours" img={clock} bgColor="bg-sky-400" ></InfoCard>
           <InfoCard cardTitle="Visit our location" img={marker} bgColor="bg-teal-400" ></InfoCard>
           <InfoCard cardTitle="Contact us now" img={phone} bgColor="bg-green-500" ></InfoCard>
        </div>
    );
};

export default Info;