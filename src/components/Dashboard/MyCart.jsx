import React from 'react';
import useCarts from '../Hooks/useCarts';
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch ] = useCarts()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const price = total.toFixed(2)

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        refetch();
                    })
            }
        })
    }
    return (
        <div className='w-full'>
            <div className='flex gap-5 mt-10 w-2/3 mx-auto'>
                <p className=' uppercase text-2xl '>Total Items-{cart.length}</p>
                <p className=' uppercase text-2xl '>Total Price-${price}</p>
              <Link to='/dashboard/payment'><button className='btn btn-sm rounded-full btn-neutral ml-10'>PAY</button></Link>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        cart.map((row, index) => <tbody key={row._id}>
                            {/* row 1 */}
                            <tr>
                                <td>{index + 1}</td>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {row.name}

                                </td>
                                <td>${row.price}</td>
                                <th >
                                    <button onClick={() => handleDelete(row)} className="btn btn-ghost text-2xl "><AiFillDelete></AiFillDelete></button>
                                </th>
                            </tr>

                        </tbody>)
                    }


                </table>
            </div>
        </div>
    );
};

export default MyCart;