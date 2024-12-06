import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    navigate('/home');
                } else {
                    alert(result.data);
                }
            })
            .catch(err => console.log(err));
    };
    
    return(
    <>
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-5">
        <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded border' style={{width:'400px'}}>
            <h4 className='md-3 align-items-center'>BankNex</h4>
            <div><hr className="divider" /></div>
            <h2>Login</h2>
            <p>Welcome! Please enter your details.</p>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        autoComplete='off'
                        name="email"
                        className='form-control rounded-0'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Password</strong>
                    </label>
                    <input
                        type="password"
                        placeholder='Enter Password'
                        name="password"
                        className='form-control rounded-0'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-primary w-100 rounded-3'>
                    Login
                </button>
            </form>
            <div><hr className="divider" /></div>
            <p>Already have an account</p>
            <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-direction-none">
                Sign Up
            </Link>
        </div>
        </div>
    </div>

    <div className="col d-flex justify-content-center align-items-center vh-100 p-0">
        <img src="/src/assets/28.webp"
        className="img-fluid h-100 w-100" 
        style={{ objectFit: "cover" }}
        >
        </img>
    </div>
    </div>
    </div>
    </>
    )
}

export default Login;