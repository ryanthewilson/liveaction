import React from 'react';
import SetupForm from '../components/SetupForm';

const SetupPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Initial Setup</h1>
      <SetupForm />
    </div>
  );
};

export default SetupPage;
