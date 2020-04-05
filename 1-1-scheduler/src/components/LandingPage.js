// React
import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';


const LandingPage = () => {
  let history = useHistory();

  // Button path
  const toLogin = () => {
    history.push('/login');
  };

  const toRegister = () => {
    history.push('/register');
  };


  return (
    <div>
      Landing Page Placeholder Text!
      <Button color="secondary" onClick={toLogin}>Login</Button>
      <Button color="secondary" onClick={toRegister}>Register</Button>
    </div>
  );
};


export default LandingPage;