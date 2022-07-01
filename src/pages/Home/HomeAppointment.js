import React from 'react';
import appointmnet from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const HomeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointmnet})`
        }} className='flex lg:flex-row  justify-center items-center mt-14'>
            <div className='max-w-sm lg:max-w-lg '>
                <img className='mt-10 lg:-mt-24' src={doctor} alt="" />
            </div>
            <div className='text-white flex-shrink-0 w-full max-w-sm pl-8 py-4 mt-4'>
                <h2 className='text-2xl font-bold text-cyan-500 y-3'>Appointment</h2>
                <h1 className='text-4xl pb-3'>Make an appointment Today</h1>
                <p className='py-4 mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae minus sit vero. Quasi, natus ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, velit.</p>
                <PrimaryBtn>GET STARTED</PrimaryBtn>
            </div>
        </section>
    );
};

export default HomeAppointment;