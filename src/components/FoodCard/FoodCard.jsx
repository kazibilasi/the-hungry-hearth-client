/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCarts from '../Hooks/useCarts';

const FoodCard = ({ item }) => {
    const [refetch] = useCarts()
    const navigate = useNavigate()
    const location = useLocation()
    const { image, name, price, recipe, _id } = item
    
    const { user  } = useContext(AuthContext)
    const handleAddToCart = item => {
        const cartItem = {menuItemId:_id,name:name, image:image, recipe:recipe, price:price, user:user.email}

        console.log(item)
        if (user && user.email) {
            fetch('http://localhost:5000/carts', {
                method : 'POST',
                headers : {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                       
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to add the card',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state : {from : location}})
                }
            })
        }

    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className=' bg-black text-white absolute right-2'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-sm rounded-full">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;