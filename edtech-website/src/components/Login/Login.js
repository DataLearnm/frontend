
import React, { useState,useEffect } from 'react';
import './Login.css';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Scroll to top when the component is mounted
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send login data to the backend
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Login successful') {
          setSuccess('Login successful!');
          setError('');
        } else {
          setError('Invalid email or password');
          setSuccess('');
        }
      })
      .catch((err) => {
        console.error('Error:', err);
        setError('Something went wrong');
        setSuccess('');
      });
  };

  return (
    <span className="login-container">
      <h1 className="login-title">Login</h1>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <a href="/register" className="link">Register</a>
      </p>
    </span>
  );
}

export default Login;
