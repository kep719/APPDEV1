import React, { useState } from 'react';
import Login from './Login';
import Reviews from './Reviews';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Reviews />
      )}
    </>
  );
}

export default App;
