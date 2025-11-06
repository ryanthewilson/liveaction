import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

const SetupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useLocalStorage('setupData', {
    userName: '',
    groupName: '',
    groupLeader: '',
    groupPurpose: '',
    agents: [
      { name: '', backstory: '' },
      { name: '', backstory: '' },
      { name: '', backstory: '' },
      { name: '', backstory: '' },
      { name: '', backstory: '' },
    ],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgentChange = (index, e) => {
    const { name, value } = e.target;
    const newAgents = [...formData.agents];
    newAgents[index][name] = value;
    setFormData({ ...formData, agents: newAgents });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/chat');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">User and Group Setup</h2>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 text-primary">Your Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg bg-gray-200 text-primary"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 text-primary">Group Name</label>
              <input
                type="text"
                name="groupName"
                value={formData.groupName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg bg-gray-200 text-primary"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 text-primary">Group Leader</label>
              <input
                type="text"
                name="groupLeader"
                value={formData.groupLeader}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg bg-gray-200 text-primary"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 text-primary">Group Purpose</label>
              <textarea
                name="groupPurpose"
                value={formData.groupPurpose}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg bg-gray-200 text-primary"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Agent Setup</h2>
            {formData.agents.map((agent, index) => (
              <div key={index} className="mb-4 p-4 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-primary">Agent {index + 1}</h3>
                <div className="mb-2">
                  <label className="block text-lg font-semibold mb-1 text-primary">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={agent.name}
                    onChange={(e) => handleAgentChange(index, e)}
                    className="w-full px-3 py-1 border rounded-lg bg-gray-200 text-primary"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-1 text-primary">Backstory</label>
                  <textarea
                    name="backstory"
                    value={agent.backstory}
                    onChange={(e) => handleAgentChange(index, e)}
                    className="w-full px-3 py-1 border rounded-lg bg-gray-200 text-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-secondary shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 text-lg font-semibold text-secondary bg-gray-500 rounded-lg hover:bg-gray-600"
            >
              Back
            </button>
          )}
          {step < 2 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 text-lg font-semibold text-primary bg-accent rounded-lg hover:bg-primary hover:text-secondary"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 text-lg font-semibold text-primary bg-green-500 rounded-lg hover:bg-green-600"
            >
              Finish
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SetupForm;
