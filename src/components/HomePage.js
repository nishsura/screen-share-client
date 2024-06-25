import React from 'react';
import './HomePage.css'; // Import your CSS file for HomePage styles

const HomePage = ({ onStart }) => {
  return (
    <div className="homepage-container">
      <h1>Screenster</h1>
      <p className="homepage-description">
        Welcome to Screenster, Screen Sharing App where you can share your screen in high resolution at 60 FPS and chat with your friends in real-time. 
        Whether you're collaborating on a project, watching videos together, or conducting a remote meeting, our app provides a seamless experience 
        to keep you connected.
      </p>
      <p className="homepage-description">
        Features include:
      </p>
      <ul className="homepage-description">
        <li>High-resolution screen sharing at 60 frames per second</li>
        <li>Real-time text chat to communicate with your friends</li>
        <li>Simple and intuitive user interface</li>
        <li>Room-based system to create and join specific sessions</li>
        <li>Cross-platform support, so you can connect from any device</li>
      </ul>
      <p className="homepage-description">
        Developed by Nish Sura. This app aims to bring people closer by providing a reliable and high-quality screen sharing experience. 
        Join a room, share your screen, and start chatting today!
      </p>
      <button className="start-button" onClick={onStart}>Get Started</button>
    </div>
  );
};

export default HomePage;
