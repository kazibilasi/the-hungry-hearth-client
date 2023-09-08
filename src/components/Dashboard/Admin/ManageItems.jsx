/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import useMenu from '../../Hooks/useMenu';
import Swal from 'sweetalert2';
import { AiFillDelete, AiFillUpSquare } from 'react-icons/ai';

const ManageItems = () => {
    const token = localStorage.getItem('access-token')
    const [menu, refetch] = useMenu()
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
                fetch(`http://localhost:5000/menu/${item._id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `bearer ${token}`
                    }

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
        <div className=' w-full p-3'>
            <SectionTitle heading={'manage all Items'} subHeading={'Hurry Up'}></SectionTitle>
            <div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        menu.map((row, index) => <tbody key={row._id}>
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
                                <td><button className='btn btn-sm rounded-full'>Update</button></td>
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

export default ManageItems;