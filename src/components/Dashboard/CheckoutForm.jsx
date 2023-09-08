/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
// import Swal from 'sweetalert2';

const CheckoutForm = ({ totalPrice, cart }) => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements()
    // const token = localStorage.getItem('access-token')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')





    useEffect(() => {

        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [totalPrice])
    console.log(clientSecret,totalPrice)

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'anonymous',
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError)
        }
        console.log(paymentIntent)

        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                totalPrice,
                date:new Date(),
                quantity: cart.length,
                menuItems: cart.map(item=> item.menuItemsId),
                cartItems: cart.map(item=> item._id),
                itemsName: cart.map(item=> item.name),
                // status: 'service pending'
                
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.result.insertedId) {
                        console.log(res.data)
                        // const options = { method: 'PUT', headers: { 'content-type': 'application/json' } }
                        // fetch(`http://localhost:5000/seat/${selectedItem}`, options)
                        //     .then(res => res.json())
                        //     .then(data => console.log(data))

                        // Swal.fire({
                        //     position: 'top-end',
                        //     icon: 'success',
                        //     title: 'Payment successfully done',
                        //     showConfirmButton: false,
                        //     timer: 1500
                        // })

                    }
                })
        }

    };

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
                <button className='btn btn-sm  pr-4 rounded-full mt-5 bg-[#D1A054]' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                transactionId && <p className='text-center'>Transaction complete with transaction id: {transactionId}</p>
            }
          
        </>
    );
};

export default CheckoutForm;