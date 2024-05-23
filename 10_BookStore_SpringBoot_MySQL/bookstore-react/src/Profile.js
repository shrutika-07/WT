// Profile.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch('http://localhost:8080/user/getUsername', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // You may include additional headers as needed
          },
          // You may include credentials: 'include' if you are using cookies for authentication
        });

        if (response.ok) {
          const data = await response.json();
          setUsername(data.username);
        } else {
          // If the server responds with an error, navigate back to login page
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching username:', error);
        // Handle error, e.g., navigate back to login page
        navigate('/login');
      }
    };

    fetchUsername();
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to your Profile, {username}!</h1>

      <div>
        <button onClick={() => navigate('/')} style={{ marginRight: '10px' }}>Home</button>
        <button onClick={() => navigate('/catalog')} style={{ marginRight: '10px' }}>Catalog</button>
        <button onClick={() => navigate('/profile')}>Profile</button>
      </div>
    </div>
  );
}

export default Profile;
