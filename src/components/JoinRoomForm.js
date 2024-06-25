import React, { useState } from 'react';
import axios from 'axios';

const JoinRoomForm = ({ onJoin }) => {
  const [roomName, setRoomName] = useState('default-room'); // Setting default roomName
  const [username, setUsername] = useState('User'); // Setting default username

  const handleJoin = async () => {
    try {
      await axios.post('/join-room', { roomName, username });
      onJoin(roomName, username); // Callback to handle state change in parent component
    } catch (error) {
      console.error('Error joining room:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleJoin}>Join Room</button>
    </div>
  );
};

export default JoinRoomForm;
