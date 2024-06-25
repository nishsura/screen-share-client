// src/App.js

import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import ScreenSharePage from './components/ScreenSharePage';
import Settings from './components/Settings';
import socket from './socket';

const App = () => {
  const [username, setUsername] = useState('User');
  const [room, setRoom] = useState('default-room');
  const [started, setStarted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get('room');
    if (roomParam) {
      setRoom(roomParam);
    }
  }, []);

  useEffect(() => {
    if (started) {
      socket.emit('joinRoom', room);
    }
  }, [started, room]);

  const handleStart = () => {
    setStarted(true);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {!started && <HomePage onStart={handleStart} />}
      {started && !showSettings && (
        <ScreenSharePage 
          room={room} 
          username={username} 
          toggleSettings={toggleSettings} 
        />
      )}
      {showSettings && (
        <Settings 
          currentUsername={username} 
          onUsernameChange={handleUsernameChange} 
          room={room} 
          toggleSettings={toggleSettings} 
        />
      )}
    </div>
  );
};

export default App;