import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, phone, password }); // Check if values are captured correctly
        axios.post('http://localhost:3001/register', { name, email, phone, password })
            .then(result => {
                console.log("Record created successfully:", result);
                navigate('/login');
            })
            .catch(err => console.error("Error:", err));
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
                <h2>Register</h2>
                <p>Please enter your details.</p>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete='off'
                            name="name"
                            className='form-control rounded-0'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete='off'
                            name='email'
                            className='form-control rouded-0'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='phone'>
                            <strong>Phone Number</strong>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Phone Number"
                            autoComplete='off'
                            name='phone'
                            className='form-control rouded-0'
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>
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
                    <button type="submit" className='btn btn-primary w-100 rounded-3'>
                        Register
                    </button>
                </form>

                <div><hr className="divider" /></div>
                <p>Already have an account</p>
                <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                    Login
                </Link>
            </div>
        </div>
    </div>

    <div className="col d-flex justify-content-center align-items-center vh-100 p-0">
        <img src="/src/assets/32.webp"
        className="img-fluid h-100 w-100" 
        style={{ objectFit: "cover" }}
        >
        </img>
    </div>
    </div>
    </div>
    </>
    );
}

export default Signup;