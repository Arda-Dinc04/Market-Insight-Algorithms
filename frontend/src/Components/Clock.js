import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false  // Set to false to use 24-hour format
  }).format(time);

  return (
    <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
      {formattedTime}
    </div>
  );
}

export default Clock;
