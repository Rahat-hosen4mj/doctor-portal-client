import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import fi from 'date-fns/esm/locale/fi/index.js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
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
        <button  className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
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