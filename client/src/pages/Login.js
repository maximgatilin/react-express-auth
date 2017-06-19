import React, { Component } from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle/PageTitle';
import LoginContainer from '../containers/forms/LoginContainer';


export default function LoginPage() {
  return (
    <div>
      <PageTitle>Login</PageTitle>
      <LoginContainer />
      <p>Don't have an account? <Link to={'/signup'}>Create one</Link></p>
    </div>

  );
}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};