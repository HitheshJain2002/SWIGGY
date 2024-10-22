import React, { useEffect } from 'react';

const Grocery = () => {
  useEffect(() => {
    // Redirect to Swiggy Instamart
    window.location.href = 'https://www.swiggy.com/instamart';
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Redirecting to Swiggy Instamart...</h1>
      <p className="text-lg mt-4">Please wait while we take you to Instamart.</p>
    </div>
  );
};

export default Grocery;
