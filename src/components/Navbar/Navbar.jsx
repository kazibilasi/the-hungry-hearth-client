import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }

    const navbar = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/orderFood/pizza'>Order Food</Link></li>
        <li><Link to='/dashboard'>
            Dashboard
        </Link></li>

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-10 text-white max-w-screen-xl bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <> <button onClick={handleLogOut} className='btn btn-sm rounded-s-2xl'>LogOut</button> <img className="h-[50px] w-[50px] ml-3 rounded-full" onMouseMove={user.displayName} src={user.photoURL} alt="" /></> : <>
                            <Link to='/login'><button className='btn btn-sm rounded-s-2xl'>Login</button></Link>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;