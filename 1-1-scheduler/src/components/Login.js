// React
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';
// Styling
import { Button, Form, FormGroup, Input } from 'reactstrap';


const Login = () => {
  // Set initial state for credentials, fetch check and error
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');

  // Set credentials to it's state
  const handleChanges = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log("NEW credentials from Login", credentials);
  };

  // POST credentials to local storage
  let history = useHistory();
  const login = e => {
    e.preventDefault();
    setIsFetching(true);

    axiosWithAuth()
      .post('/users/login', credentials)
      .then(res => {
        console.log(res);
        if (res.data.token) {
          // Set items to local storage
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('email', res.data.user.email);
          localStorage.setItem('password', credentials.password);
          localStorage.setItem('id', res.data.user.user_id);
          localStorage.setItem('firstName', res.data.user.first_name);
          localStorage.setItem('lastName', res.data.user.last_name);
          localStorage.setItem('message', res.data.message);
          history.push('/home');
        } else {
          // setError(res.data.msg);    CHECK THIS
          setError('Your login was unsuccessful!');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>
      <Form inline onSubmit={login}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChanges} required />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChanges} required />
        </FormGroup>
        <Button>Log in</Button>
      </Form>
    </div>
  )
}

export default Login;