// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  //dummy commit
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
    <Form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
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
      <Button variant="outline-primary" type="submit">
        Login
      </Button>
    </Form>
    // <form onSubmit={handleSubmit}>
    //
    //   <label>
    //     Username or Email
    //     <input
    //       type="text"
    //       value={credential}
    //       onChange={(e) => setCredential(e.target.value)}
    //       required
    //     />
    //   </label>
    //   <label>
    //     Password
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //   </label>
    //   <Button type="submit">Log In</Button>
    // </form>
  );
}

export default LoginFormPage;
