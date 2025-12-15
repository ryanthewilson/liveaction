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
    this.memory.push({ user: message });

    const responseTemplates = [
      `As ${this.name}, I think that's a very interesting point about "${message}".`,
      `"${message}" makes me think about my interest in ${this.interests.length > 0 ? this.interests[0] : 'many things'}.`,
      `Considering my motives, your message "${message}" is something I'll need to think about.`,
      `I hear you saying "${message}". From my perspective, as ${this.name}, I see it like this...`,
      `That's a fascinating thing to say. I wonder how it relates to my backstory.`
    ];

    const response = responseTemplates[Math.floor(Math.random() * responseTemplates.length)];
    this.memory.push({ agent: response });
    return response;
  }
}

export default Agent;
