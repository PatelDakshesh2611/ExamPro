import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center justify-center bg-gray-200 text-black"
        >
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 3 }}
                className="text-5xl font-bold mb-8"
            >
                Question Paper Management
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 2 }}
                className="text-lg mb-4"
            >
                Welcome to Question Paper Management System! In this platform, teachers can create question papers, and students can attempt them.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 2 }}
                className="text-lg ml-6"
            >
                Our platform aims to revolutionize the process of managing question papers. With our system, teachers can effortlessly create comprehensive question <p className=' ml-10'>
                papers tailored to their curriculum, while students can easily access and attempt these papers to enhance their learning experience.
                </p>
            </motion.p>
        </motion.div>
    );
};

export default LandingPage;
