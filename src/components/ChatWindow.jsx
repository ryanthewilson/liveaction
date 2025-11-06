import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import agentManager from '../ai/agentManager';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'agent' },
  ]);

  const [currentAgentId, setCurrentAgentId] = useState('1');

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

  return (
    <div className="flex flex-col h-screen bg-primary">
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
