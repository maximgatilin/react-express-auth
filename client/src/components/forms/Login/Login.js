import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.scss';
import TextInput from '../../TextInput/TextInput';
import Button from '../../Button/Button';
import FormLine from '../../FormLine/FormLine';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default function Login({handleSubmit, errors = {}}) {
  return <form action="/" onSubmit={handleSubmit} className={styles.form}>
    {errors && errors.summary && <p className="error-message">{errors.summary}</p>}

    <FormLine>
      <TextInput
        id="email"
        type="email"
        name="email"
        required
        labelText="Email"
        error={errors.email}
      />
    </FormLine>

    <FormLine>
      <TextInput
        id="password"
        type="password"
        name="password"
        required
        labelText="Password"
        error={errors.password}
      />
    </FormLine>

    <FormLine>
      <Button>Login</Button>
    </FormLine>
  </form>
};

Login.propTypes = propTypes;