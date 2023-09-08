import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCarts from '../Hooks/useCarts';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)


const Payment = () => {
    const [cart ] = useCarts()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className=' w-2/3'>
            <SectionTitle subHeading={'Please Provide'} heading={'payment'}></SectionTitle>
            <div className='mt-10'>
                <Elements stripe={stripePromise} >
                    <CheckoutForm cart={cart} totalPrice={price}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;