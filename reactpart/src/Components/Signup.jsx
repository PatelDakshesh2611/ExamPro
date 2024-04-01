import React, { useState } from 'react';
import axios from 'axios';
import  { Link,useNavigate } from "react-router-dom";

const Signup = () => {
    const nav=useNavigate();
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata((prev) => ({
            ...prev, [name]: value
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (formdata.email && formdata.name && formdata.password && formdata.role) {
            try {
                const response = await axios.post('http://localhost:4000/signup', formdata);
                console.log(response.data);
                nav('/Home')

            } catch (error) {
                console.error('Error signing up:', error.message);
            }
        } else {
            alert('All fields are required');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover" style={{backgroundImage: 'url("/R.jpg")'}}>
            <div className="max-w-md w-full p-6 bg-white bg-opacity-75 rounded-lg shadow-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSignup}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your name"
                        />
                    </div>
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
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select your role</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                        </select>
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
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="mt-4">
                    <Link to="/login" className="text-indigo-600 hover:text-indigo-900 hover:cursor-pointer">Already have an account? Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
