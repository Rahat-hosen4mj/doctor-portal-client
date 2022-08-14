import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutForm = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const {price} = appointment;

    useEffect(() => {
      fetch('http://localhost:5000/create-payment-intent', {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify({ price })
      })
          .then(res => res.json())
          .then(data => {
              if (data?.clientSecret) {
                console.log(data.clientSecret)
                  setClientSecret(data.clientSecret);
              }
          });

  }, [price])
    const handleSubmit = async event =>{
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }
      
          // Get a reference to a mounted CardElement. Elements knows how
          // to find your CardElement because there can only ever be one of
          // each type of element.
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }

          const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

       
            setCardError(error?.message || '' ) 
       
    }

    
return (
       <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button  className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
        cardError && cardError && <p className='text-red-500'>{cardError}</p>
      }
      </>
    );
};

export default CheckoutForm;