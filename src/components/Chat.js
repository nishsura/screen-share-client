// src/components/Chat.js

import React, { useState, useEffect } from 'react';
import socket from '../socket';

const Chat = ({ room, username }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const message = { username, text: inputMessage };
      socket.emit('message', { room, message });
      setMessages(prevMessages => [...prevMessages, message]);
      setInputMessage('');
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div style={{ height: '500px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index}><strong>{msg.username}:</strong> {msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ marginTop: '10px', width: '70%' }}
      />
      <button onClick={sendMessage} style={{ marginLeft: '10px' }}>Send</button>
    </div>
  );
};

export default Chat;
