import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';

const agents = [
  {
    id: '1',
    name: 'Agent Alpha',
    backstory: 'The leader of the group, a strategic thinker with a mysterious past.',
    imageUrl: 'https://via.placeholder.com/400x300',
    interests: ['Strategy games', 'History', 'Philosophy'],
    motives: ['To achieve the group\'s mission', 'To protect the team', 'To uncover the truth'],
  },
  {
    id: '2',
    name: 'Agent Beta',
    backstory: 'The tech expert, a brilliant hacker and inventor.',
    imageUrl: 'https://via.placeholder.com/400x300',
    interests: ['Coding', 'Gadgets', 'Sci-fi movies'],
    motives: ['To create innovative technology', 'To solve complex problems', 'To push the boundaries of what\'s possible'],
  },
  {
    id: '3',
    name: 'Agent Gamma',
    backstory: 'The communications specialist, a master of languages and psychology.',
    imageUrl: 'https://via.placeholder.com/400x300',
    interests: ['Psychology', 'Languages', 'Travel'],
    motives: ['To understand others', 'To facilitate communication', 'To build bridges between different cultures'],
  },
  {
    id: '4',
    name: 'Agent Delta',
    backstory: 'The muscle of the team, a skilled fighter and survival expert.',
    imageUrl: 'https://via.placeholder.com/400x300',
    interests: ['Martial arts', 'Survival skills', 'Fitness'],
    motives: ['To protect the innocent', 'To overcome physical challenges', 'To be a reliable teammate'],
  },
  {
    id: '5',
    name: 'Agent Epsilon',
    backstory: 'The wildcard, a creative and unpredictable artist.',
    imageUrl: 'https://via.placeholder.com/400x300',
    interests: ['Art', 'Music', 'Poetry'],
    motives: ['To express themselves', 'To inspire others', 'To see the world in a different way'],
  },
];

const ProfilePage = () => {
  const { agentId } = useParams();
  const agent = agents.find((a) => a.id === agentId);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {agent ? (
        <ProfileCard agent={agent} />
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold">Agent Not Found</h1>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
