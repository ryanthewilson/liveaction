import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
      <h1 className="text-5xl font-bold mb-8 text-secondary">Welcome to the AI Agent Chat</h1>
      <Link to="/setup">
        <button data-testid="get-started-button" className="px-8 py-4 text-xl font-semibold text-primary bg-accent rounded-lg hover:bg-secondary">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
