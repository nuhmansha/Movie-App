import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Movie App Admin</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex flex-col justify-center items-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H8a1 1 0 01-1-1V4zM17 5h.01M15 5h.01M19 5h.01M19 9h.01M19 13h.01M19 17h.01M5 9h.01M5 13h.01M5 17h.01"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No movies added</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by adding new movies.</p>
              <div className="mt-6">
                <Link
                  to="/addmovie"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Movie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminHome;