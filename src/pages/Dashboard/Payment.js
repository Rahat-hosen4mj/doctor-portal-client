import React from 'react';
import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51LLXsyHA3nJCoW2U9oVRkeFCsXDneMJa1XUIKTdCqRQe15E8YcpHCeTSgfmr1ddhDwvcTnq2THblO16s6HhFL82B00mda1SkZq');

const Payment = () => {
   const {id} = useParams();
   const url = `https://doctor-server-side-six.vercel.app/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
   if(isLoading){
    return <Loading />
   }
    return (
       
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {appointment?.patientName}</p>
                    <h2 className="card-title">Please Pay for {appointment?.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-gray-50">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
           
        </div>
    );
};

export default Payment;