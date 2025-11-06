import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-primary border-t border-accent">
      <div className="flex">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-4 py-2 bg-secondary border border-accent rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="ml-4 px-6 py-2 text-primary bg-accent rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
