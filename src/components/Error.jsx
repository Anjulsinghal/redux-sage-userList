import React from 'react'

const Error = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-xl font-semibold text-red-500 mb-4">
        Error occurred
      </div>
      <div className="text-gray-700">
        {message || 'An unexpected error occurred. Please try again later.'}
      </div>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  )
}

export default Error