import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import styles from './Login.scss';
import PageTitle from '../../PageTitle/PageTitle';
import TextInput from '../../TextInput/TextInput';
import Button from '../../Button/Button';
import FormLine from '../../FormLine/FormLine'

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default function Login({onSubmit, onChange, errors, user, successMessage}) {
  return <div className="container">
    <form action="/" onSubmit={onSubmit} className={styles.form}>
      <PageTitle>Login</PageTitle>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

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
        <Button>Login</Button>
      </FormLine>
      <p>Don't have an account? <Link to={'/signup'}>Create one</Link></p>
    </form>
  </div>
};

Login.propTypes = propTypes;