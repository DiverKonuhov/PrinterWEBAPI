import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5253/api/hello')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => setMessage('Error connecting to backend'));
  }, []);

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>React Frontend</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;