import React from 'react';
import { DragCards } from '@/pages/Dragcards';

const LandingPage = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-gray-100"
      style={{
        backgroundImage: "url('../../public/img/cc1b83f22d2d5468cfbb586731f63774.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '130vh',
      }}
    >
      <header className="bg-blue-800 text-white text-center py-4 w-full bg-opacity-75">
        <h1 className="text-4xl font-bold mb-2">Hospital Management System</h1>
        {/* <p className="text-lg">Manage your hospital's operations efficiently</p> */}
      </header>

    <DragCards/>
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg mt-8 bg-opacity-75">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Our System</h2>
        <p className="text-base mb-6">Please sign up or sign in to access your dashboard.</p>

        <div className="flex space-x-4">
          <a
            href="/auth/sign-up"
            className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 transition"
          >
            Sign Up
          </a>
          <a
            href="/auth/sign-in"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Sign In
          </a>
          <a
            href="/dashboard/home"
            className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600 transition"
          >
            Go to Dashboard
          </a>
        </div>
      </div>

    
    </div>
  );
};

export default LandingPage;

//
