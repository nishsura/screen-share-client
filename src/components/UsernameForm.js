// src/components/UsernameForm.js

import React, { useState } from 'react';

const UsernameForm = ({ onUsernameSet }) => {
  const [username, setUsername] = useState('');

  const handleSetUsername = () => {
    if (username.trim() !== '') {
      onUsernameSet(username);
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleSetUsername}>Set Name</button>
    </div>
  );
};

export default UsernameForm;
