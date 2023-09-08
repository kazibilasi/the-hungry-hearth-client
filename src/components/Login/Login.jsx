import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleLogin from '../SocialLogin/GoogleLogin';
const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { signIn } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user
                Swal.fire({
                    title: 'login successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                form.reset()
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(err=>console.log(err))

    }

    return (
        <div>
            <Helmet>
                <title>Login || Bistro Boss</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200  ">
                <div className="hero-content flex-col lg:flex-row-reverse w-2/3">


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="type the captcha" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">

                                <button className='btn rounded-3xl' type="submit">Login</button>
                            </div>
                            <Link to='/signUp'><p>New in this site? Please SignUp</p></Link>
                        </form>
                        <div className=' mx-auto mb-6'>
                        <GoogleLogin ></GoogleLogin>
                        </div>
                    </div>


                    <div className="text-center lg:text-left ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;