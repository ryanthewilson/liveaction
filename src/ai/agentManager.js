import Agent from './agent';

const agentsData = [
  {
    id: '1',
    name: 'Agent Alpha',
    backstory: 'The leader of the group, a strategic thinker with a mysterious past.',
    interests: ['Strategy games', 'History', 'Philosophy'],
    motives: ['To achieve the group\'s mission', 'To protect the team', 'To uncover the truth'],
  },
  {
    id: '2',
    name: 'Agent Beta',
    backstory: 'The tech expert, a brilliant hacker and inventor.',
    interests: ['Coding', 'Gadgets', 'Sci-fi movies'],
    motives: ['To create innovative technology', 'To solve complex problems', 'To push the boundaries of what\'s possible'],
  },
  {
    id: '3',
    name: 'Agent Gamma',
    backstory: 'The communications specialist, a master of languages and psychology.',
    interests: ['Psychology', 'Languages', 'Travel'],
    motives: ['To understand others', 'To facilitate communication', 'To build bridges between different cultures'],
  },
  {
    id: '4',
    name: 'Agent Delta',
    backstory: 'The muscle of the team, a skilled fighter and survival expert.',
    interests: ['Martial arts', 'Survival skills', 'Fitness'],
    motives: ['To protect the innocent', 'To overcome physical challenges', 'To be a reliable teammate'],
  },
  {
    id: '5',
    name: 'Agent Epsilon',
    backstory: 'The wildcard, a creative and unpredictable artist.',
    interests: ['Art', 'Music', 'Poetry'],
    motives: ['To express themselves', 'To inspire others', 'To see the world in a different way'],
  },
];

class AgentManager {
  constructor() {
    this.agents = new Map();
    agentsData.forEach((agentData) => {
      const agent = new Agent(
        agentData.id,
        agentData.name,
        agentData.backstory,
        agentData.interests,
        agentData.motives
      );
      this.agents.set(agent.id, agent);
    });
  }

  getAgent(id) {
    return this.agents.get(id);
  }

  getAgentResponse(id, message) {
    const agent = this.getAgent(id);
    if (agent) {
      return agent.generateResponse(message);
    }
    return 'Agent not found.';
  }
}

const agentManager = new AgentManager();
export default agentManager;
