import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import agentManager from '../ai/agentManager';

const ProfilePage = () => {
  const { agentId } = useParams();
  const agent = agentManager.getAgent(agentId);

  return (
    <div className="min-h-screen bg-primary p-8">
      {agent ? (
        <ProfileCard agent={agent} />
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary">Agent Not Found</h1>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
