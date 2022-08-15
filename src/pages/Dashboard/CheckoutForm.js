import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutForm = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const {price, _id, patient, patientName} = appointment;

    useEffect(() => {
      fetch('https://doctor-portal-server22.herokuapp.com/create-payment-intent', {
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
       
        setCardError(error?.message || '' ) ;
        setSuccess('');
        setProcessing(true);

        // confirm error method
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
         clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: patientName,
                email: patient
            },
            },
          },
        );

        if (intentError) {
          setCardError(intentError?.message);

      }
      else{
        setCardError('');
        setTransactionId(paymentIntent.id);
        setSuccess('Congrats! Your payment is completed.');

        const payment = {
          appointment: _id,
          transactionId: paymentIntent.id
      }
      fetch(`https://doctor-portal-server22.herokuapp.com/booking/${_id}`, {
          method: 'PATCH',
          headers: {
              'content-type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(payment)
      }).then(res=>res.json())
      .then(data => {
          setProcessing(false);
          console.log(data);
      })
      }
       
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
       {
                success && <div className='text-green-500'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
      </>
    );
};

export default CheckoutForm;