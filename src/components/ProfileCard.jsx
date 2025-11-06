import React from 'react';

const ProfileCard = ({ agent }) => {
  return (
    <div className="bg-secondary shadow-lg rounded-lg overflow-hidden text-primary">
      <img className="w-full h-56 object-cover object-center" src={agent.imageUrl} alt={agent.name} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{agent.name}</h2>
        <p className="text-gray-700 mb-4">{agent.backstory}</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Interests</h3>
          <ul className="list-disc list-inside">
            {agent.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Motives</h3>
          <ul className="list-disc list-inside">
            {agent.motives.map((motive, index) => (
              <li key={index}>{motive}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
