import React from 'react'

export const Alerts = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed top-[-5px] right-10 space-y-2  z-[99999] backdrop-blur-none backdrop-filter-none pointer-events-none ">
      {message === "success" && (
        <div className="alert alert-success shadow-lg border">
          <span className="text-black ">Message sent successfully!</span>
        </div>
      )}
      {message === "error" && (
        <div className="alert alert-warning shadow-lg">
          <span className="text-black text-[13px]">Something went wrong. Please try again.</span>
        </div>
      )}
      {message === "network" && (
        <div className="alert alert-error shadow-lg">
          <span className="text-white">Network error. </span>
        </div>
      )}
    </div>
  );
};
