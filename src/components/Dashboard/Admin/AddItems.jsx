/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import axios from 'axios';
import Swal from 'sweetalert2';
// import { FaUtensils } from 'react-icons/fa';
const image_hosting_token = import.meta.env.VITE_Image_Upload_token


const AddItems = () => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const token = localStorage.getItem('access-token')

    const handleAddItem = (event) => {
        event.preventDefault()
        const form = event.target;
        console.log(form.image.value)
        const name = form.name.value;
        const category = form.category.value;
        const recipe = form.recipe.value;
        const image = form.image.value;
        const price = form.price.value;
        // console.log(name, category, recipe, image, price)

        const formData = new FormData()
        formData.append('image', form.image.files[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData,

        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const photoURL = data.data.display_url;

                    const newItem = { name, category, recipe, price: parseFloat(price), image: photoURL }

                    axios.post('http://localhost:5000/Menu', newItem, {
                        headers: {
                            authorization: `bearer ${token}`
                        }
                    })
                        .then((response) => {
                            console.log('after posting new menu item', response.data);
                            if (response.data.insertedId) {
                                Swal.fire({
                                    title: 'Menu Added Successfully',
                                    showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                    }
                                })
                                form.reset()
                            }

                            return response.data;
                        })
                        .catch((error) => {
                            console.error('Error:', error);

                            throw error;
                        });


                }
            })

    }
    return (
        <div className=' w-full h-screen p-10'>
            <SectionTitle subHeading={" what's new"} heading={"add an item"}></SectionTitle>
            <form onSubmit={handleAddItem} className=' w-full  bg-slate-200 p-8'>
                <div className=" w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>

                    </label>
                    <input type="text" name='name' placeholder="recipe name" className="input input-bordered w-full " />

                </div>
                <div className="w-full flex gap-x-6">
                    <div className='w-2/3'>

                        <label className="label w-full">
                            <span className="label-text font-semibold">Category*</span>

                        </label>
                        <select name='category' className="select select-bordered w-full">
                            <option disabled selected>Pick one</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>dessert</option>
                            <option>drinks</option>
                            <option>salad</option>
                        </select>


                    </div>
                    <div className='w-2/3'>
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>

                        </label>
                        <input type="number" name='price' placeholder="Price" className="input input-bordered w-full " />
                    </div>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details</span>

                    </label>
                    <textarea name='recipe' className="textarea textarea-bordered h-24" placeholder="recipe details"></textarea>

                </div>
                <input type="file" name='image' className="file-input file-input-ghost file-input-bordered mt-5 w-full max-w-xs" /><br />
                {/* <button className='btn btn-square bg-[#D1A054] w-fit p-3 mt-2'>Add Item <FaUtensils></FaUtensils></button> */}
                <input type='submit' value='Add Item' className='btn btn-square bg-[#D1A054] w-fit p-3 mt-2'></input>
            </form>
        </div>
    );
};

export default AddItems;