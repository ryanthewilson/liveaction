import React from 'react';

const Message = ({ message }) => {
  const isUser = message.sender === 'user';
  return (
    <div className={`flex items-end mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`rounded-lg p-3 max-w-lg ${isUser ? 'bg-accent text-secondary' : 'bg-secondary text-primary'}`}>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
