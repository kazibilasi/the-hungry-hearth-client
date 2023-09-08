import React from 'react';
import { FaShoppingCart, FaHome, FaUtensils, FaWallet, FaBook,  FaUsers } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useCarts from '../Hooks/useCarts';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCarts()
    // const isAdmin = true;
    const [isAdmin]= useAdmin()
    console.log(isAdmin)
   
   
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full  text-base-content">
                        {/* Sidebar content here */}

                        {
                            isAdmin?.admin?  <>
                                <li><Link to='dashboard/adminHome'><FaHome></FaHome>Admin Home</Link></li>
                                <li><Link to='dashboard/addItems'><FaUtensils></FaUtensils> Add Items</Link></li>
                                <li><Link to='dashboard/manageItems'><FaWallet></FaWallet> Manage Items</Link></li>
                                <li><Link to='dashboard/bookingItems'><FaBook></FaBook> Booking Items</Link></li>
                                <li><Link to='dashboard/allUsers'><FaUsers></FaUsers> All Users</Link></li>

                            </> : <>
                                <li><Link to='dashboard/userHome'><FaHome></FaHome>User Home</Link></li>
                                <li><Link to='dashboard/myCart'><FaShoppingCart></FaShoppingCart>My Cart
                                    <div className="badge badge-secondary badge-sm">{cart?.length || 0}</div> </Link>
                                </li>
                                <li><Link to='/dashboard/payment'><FaWallet></FaWallet> Payment</Link></li>

                            </>
                        }

                        <div className="divider"></div>
                        <li><Link to='/'><FaHome></FaHome>Home</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;