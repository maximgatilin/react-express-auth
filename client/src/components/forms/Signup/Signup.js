import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../TextInput/TextInput';
import Message from '../../Message/Message';
import Button from '../../Button/Button';
import FormLine from '../../FormLine/FormLine';
import styles from './Signup.scss';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default function SignUp({handleSubmit, errors ={}}) {
  return <form action="/" onSubmit={handleSubmit} className={styles.form}>
    {errors && errors.summary &&
    <FormLine>
      <Message type='primary'>{errors.summary}</Message>
    </FormLine>
    }

    <FormLine>
      <TextInput
        id="name"
        name="name"
        required
        error={errors.name}
        labelText="Name"
      />
    </FormLine>

    <FormLine>

      <TextInput
        id="email"
        type="email"
        name="email"
        required
        error={errors.email}
        labelText="Email"
      />
    </FormLine>
    <FormLine>
      <TextInput
        id="password"
        type="password"
        name="password"
        error={errors.password}
        required
        labelText="Password"
      />
    </FormLine>
    <FormLine>
      <Button>Create New Account</Button>
    </FormLine>
  </form>
};

SignUp.propTypes = propTypes;