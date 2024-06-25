import React, { useState, useEffect, useRef } from 'react';

const ScreenShare = () => {
  const [screenStream, setScreenStream] = useState(null);
  const videoRef = useRef(null);

  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: 60 },
        audio: true
      });
      setScreenStream(stream);
    } catch (err) {
      console.error("Error: " + err);
    }
  };

  useEffect(() => {
    if (screenStream && videoRef.current) {
      videoRef.current.srcObject = screenStream;
    }
  }, [screenStream]);

  return (
    <div>
      <button onClick={startScreenShare}>Start Screen Share</button>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%' }} />
    </div>
  );
};

export default ScreenShare;
