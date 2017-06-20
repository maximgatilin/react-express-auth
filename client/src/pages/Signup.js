import React, { Component } from 'react';
import {Link} from 'react-router';
import PageTitle from '../components/PageTitle/PageTitle';
import SignupContainer from '../containers/forms/SignupContainer';


export default function SignupPage() {
  return (
    <div>
      <PageTitle>Sign up</PageTitle>
      <SignupContainer />
      <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
    </div>
  );
}