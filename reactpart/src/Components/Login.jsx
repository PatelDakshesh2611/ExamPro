import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation

const Login = () => {
    const nav = useNavigate();
    const [formdata, setformdata] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata((prev) => ({
            ...prev, [name]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (formdata.email && formdata.password) {
            try {
                // const response = await axios.post('http://localhost:4000/login', formdata);
                // console.log(response.data);
                nav('/Home')
            } catch (error) {
                console.error('Error logging in:', error.message);
            }
        } else {
            alert('Please enter your email and password');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: 'url("/R.jpg")' }}>
            <div className="max-w-md w-full p-6 bg-white bg-opacity-75 rounded-lg shadow-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Login</h2>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            autoComplete="email"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            onChange={handleChange}
                            type="password"
                            autoComplete="current-password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-4">
                    <Link to="/signup" className="text-indigo-600 hover:text-indigo-900">Don't have an account? Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
