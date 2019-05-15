import React from 'react';

const ErrorIndicator = () => {
  return (
    <div className="container">
      <h1 className="text-warning text-center">
        503 Service Unavailable, Please reload app
      </h1>
      <button
        className="btn btn-primary btn-block w-50 m-auto"
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
    </div>
  );
};

export default ErrorIndicator;
