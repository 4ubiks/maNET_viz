import React, { useState, useEffect } from 'react';

function Name() {
  const [computerName, setComputerName] = useState('');

  useEffect(() => {
    // Fetch the computer name from the backend
    fetch('http://localhost:4000/computer-name')
      .then(response => response.json())
      .then(data => {
        console.log('Computer name: ', data.name);
        setComputerName(data.name);
        })
      .catch(error => console.error('Error fetching computer name:', error));
      console.log(computerName)
  }, []);

  return (
    <div>
      <h1>Computer Name: {computerName}</h1>
    </div>
  );
}

export default Name;
