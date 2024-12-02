import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
  const account = {
    username: 'admin',
    password: 'admin'
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUserNameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    if (username === account.username && password === account.password) {
      setError('');
      onLoginSuccess();
    } else {
      setError("Invalid, try again");
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to DeGoat's Reviews!</h1> <br />
      <h4>Login to Continue:</h4> <br />
      <div className="login-form">
        <div>
          Username:
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUserNameChange}
          />
        </div>
        <div>
          Password:
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
