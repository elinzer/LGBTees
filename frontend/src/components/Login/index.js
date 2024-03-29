// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <Form onSubmit={handleSubmit} className='login-form'>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <h3>Welcome Back!</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email/Username</Form.Label>
        <Form.Control
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          type="text"
          placeholder="Enter email or username"
          required
          />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
          />
      </Form.Group>
      <div className='d-grid gap-2'>
      <Button variant="outline-primary" type="submit" className='login-button'>
        Log in
      </Button>
      </div>
      <div style={{marginTop: '10px'}}>
        Need to make an account? <a href='/signup'>Sign Up</a>
      </div>
    </Form>

  );
}

export default LoginFormPage;
