import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import agentManager from '../ai/agentManager';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I am ready to chat.', sender: 'agent' },
  ]);
  const [agents, setAgents] = useState([]);
  const [currentAgentId, setCurrentAgentId] = useState('1');

  useEffect(() => {
    setAgents(agentManager.getAllAgents());
  }, []);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: 'user',
    };
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.sender === 'user') {
      const agentResponse = agentManager.getAgentResponse(currentAgentId, lastMessage.text);
      const agentMessage = {
        id: messages.length + 1,
        text: agentResponse,
        sender: 'agent',
      };
      setTimeout(() => {
        setMessages([...messages, agentMessage]);
      }, 1000);
    }
  }, [messages, currentAgentId]);

  const currentAgent = agentManager.getAgent(currentAgentId);

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <Card className="w-[800px] h-[90vh] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Chat with {currentAgent ? currentAgent.name : 'Agent'}</CardTitle>
          <Select onValueChange={setCurrentAgentId} defaultValue={currentAgentId}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Agent" />
            </SelectTrigger>
            <SelectContent>
              {agents.map((agent) => (
                <SelectItem key={agent.id} value={agent.id}>{agent.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto">
          <MessageList messages={messages} />
        </CardContent>
        <CardFooter>
          <MessageInput onSendMessage={handleSendMessage} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChatWindow;
