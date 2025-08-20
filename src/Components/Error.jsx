import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-red-700 font-sans">
      <h1 className="text-4xl mb-2">⚠️ Error</h1>
      <p className="mb-6 text-lg">Oops! Something went wrong.</p>
      <button
        onClick={handleHome}
        className="mt-2 px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
      >
        Return to Home
      </button>
    </div>
  )
}

export default Error