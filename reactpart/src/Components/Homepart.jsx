import React from "react";
import { Link } from "react-router-dom";

const Homepart = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Introduction Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Question Paper Management System</h1>
        <p className="text-gray-600">
          Create, manage, and access question papers effortlessly.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">Features</h2>
          {/* Feature 1 */}
          <div className="mb-6">
            <h3 className="text-lg font-medium">Create Question Papers</h3>
            <p className="text-gray-600">Easily compose and organize questions.</p>
          </div>
          {/* Feature 2 */}
          <div className="mb-6">
            <h3 className="text-lg font-medium">Access Codes</h3>
            <p className="text-gray-600">
              Generate unique access codes for each question paper.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 pr-3 px-3">
  <div className="lg:flex lg:justify-between md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center">
    {/* Replace with actual images */}    
    <div className="">
      <img
        src="/images/rowfirst.jpg"
        alt="Sample Question Paper"
        className="rounded-lg"
        style={{ width: '300px', height: '250px' }}
      />
    </div>
    <div className="md:mt-3 sm:mt-2">
      <img
        src="/images/OIP.jpg"
        alt="Sample Question Paper"
        className="rounded-lg"
        style={{ width: '300px', height: '250px' }}
      />
    </div>
    <div className="md:mt-3 sm:mt-2">
      <img
        src="/images/OIP.jpg"
        alt="Sample Question Paper"
        className="rounded-lg"
        style={{ width: '300px', height: '250px' }}
      />
    </div>
    {/* Add more images here */}
  </div>
</section>


      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16 text-center">
        <p className="text-lg">
          Ready to get started?{" "}
          <Link to="/create-paper" className="underline">
            Create a Question Paper
          </Link>
        </p>
      </section>
    </div>
  );
};


export default Homepart;
