

import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    // State variables for managing login form fields and state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [createProfile, setCreateProfile] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

    // Function to validate email format
  const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

   // Function to validate password length
  const isPasswordValid = (password) => {
    return password.length >= 6;
  };

 // Function to handle login
  const handleLogin = () => {
   const hardcodedEmail = 'user@example.com';
    const hardcodedPassword = 'password';

    if (
      (email === hardcodedEmail && password === hardcodedPassword) ||
      (newEmail === email && newPassword === password)
    ) {
      setLoggedIn(true);
      setCreateProfile(true);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };


   // Function to handle profile creation
  const handleCreateProfile = () => {
    if (!newEmail || !newPassword || !confirmPassword || !name) {
      alert('Please fill in all the required fields.');
    } else if (!isEmailValid(newEmail)) {
      alert('Invalid email. Please enter a valid email address.');
    } else if (!isPasswordValid(newPassword)) {
      alert('Password must be at least 6 characters long.');
    } else if (newPassword !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
    } else {
     
      alert('Profile created successfully! You can now log in.');
      setCreateProfile(false);
      setEmail(newEmail);
      setPassword(newPassword);
      setNewEmail('');
      setNewPassword('');
      setConfirmPassword('');
      setName('');
      setLoggedIn(true);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login Page</h2>
      {loggedIn ? (
        <div>
          <h3>Welcome</h3>
        </div>
      ) : (
        <div>
          {createProfile ? (
            <div>
              <h3>Create Profile</h3>
                  {/* Input fields for creating a new profile */}
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="login-input"
              />
              <input
                type="text"
                placeholder="Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="login-input"
              />
              <input
                type="password"
                placeholder="Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="login-input"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="login-input"
              />
              <button className="create-profile-btn" onClick={handleCreateProfile}>
                Save and Login
              </button>
            </div>
          ) : (
            <div>
              <h3>Login</h3>
               {/* Input fields for logging in */}
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
              <button className="login-btn" onClick={handleLogin}>
                Login
              </button>
              <p className="create-account">
                Don't have an account?{' '}
                <span className="create-account-link" onClick={() => setCreateProfile(true)}>
                  Create Profile
                </span>
                .
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;






