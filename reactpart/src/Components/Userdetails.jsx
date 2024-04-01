import React from 'react';

const UserProfile = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 text-gray-800">
            <div className="max-w-md w-full p-6 bg-gray-100 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">User Profile</h1>
                <div className="mb-4">
                    <p className="text-lg"><span className="font-bold">Name:</span> Dakshesh</p>
                    <p className="text-lg"><span className="font-bold">Email:</span> Pdakahshe424@gmail.com</p>
                    <p className="text-lg"><span className="font-bold">Role:</span> Teacher</p>
                </div>
               
            </div>
        </div>
    );
};

export default UserProfile;
