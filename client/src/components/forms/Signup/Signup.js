import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import styles from './Signup.scss';
import PageTitle from './../../PageTitle/PageTitle';
import TextInput from '../../TextInput/TextInput';
import Button from '../../Button/Button';
import FormLine from '../../FormLine/FormLine';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default function SignUp({onSubmit, onChange, errors, user}) {
  return <form action="/" onSubmit={onSubmit} className={styles.form}>
    <PageTitle>Sign Up</PageTitle>

    {errors.summary && <p className="error-message">{errors.summary}</p>}

    <FormLine>
      <TextInput
        id="name"
        type="name"
        name="name"
        onChange={onChange}
        required
        value={user.name}
        labelText="Name"
      />
    </FormLine>

    <FormLine>

      <TextInput
        id="email"
        type="email"
        name="email"
        onChange={onChange}
        required
        value={user.email}
        labelText="Email"
      />
    </FormLine>
    <FormLine>
      <TextInput
        id="password"
        type="password"
        name="password"
        onChange={onChange}
        required
        value={user.password}
        labelText="Password"
      />
    </FormLine>
    <FormLine>
      <Button>Create New Account</Button>
    </FormLine>

    <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
  </form>
};

SignUp.propTypes = propTypes;