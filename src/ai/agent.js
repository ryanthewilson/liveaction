class Agent {
  constructor(id, name, backstory, interests, motives) {
    this.id = id;
    this.name = name;
    this.backstory = backstory;
    this.interests = interests;
    this.motives = motives;
    this.memory = [];
  }

  generateResponse(message) {
    // For now, just a simple echo response
    return `You said: "${message}"`;
  }
}

export default Agent;
