import React from 'react';

export default function HireMe() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Hire Me</h2>
        
        {/* Name */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Name:</h3>
          <p className="text-gray-600">Abdullah</p>
        </div>

        {/* Age */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Age:</h3>
          <p className="text-gray-600">18</p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Email:</h3>
          <p className="text-gray-600">abdullahateeq331@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Phone:</h3>
          <p className="text-gray-600">03362310043</p>
        </div>

        {/* Skill */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Skill:</h3>
          <p className="text-gray-600">FrontEnd-Development | Programming</p>
        </div>
      </div>
    </div>
  );
}

