import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.scss';
import TextInput from '../../TextInput/TextInput';
import Button from '../../Button/Button';
import FormLine from '../../FormLine/FormLine';
import Message from '../../Message/Message';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
  successMessage: PropTypes.string
};

export default function Login({handleSubmit, errors = {}, successMessage}) {
  return <form action="/" onSubmit={handleSubmit} className={styles.form}>
    {errors && errors.summary &&
    <FormLine>
      <Message type='error' level="primary">{errors.summary}</Message>
    </FormLine>
    }

    {successMessage &&
    <FormLine>
      <Message type='success' level="primary">{successMessage}</Message>
    </FormLine>
    }

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