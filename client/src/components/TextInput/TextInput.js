import React from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';
import styles from './TextInput.scss';
import Error from "../Error/Error";
import FormLine from "../FormLine/FormLine";

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool
};

export default function TextInput({
                                    type = 'text',
                                    placeholder = '',
                                    labelText,
                                    id,
                                    name,
                                    required = false,
                                    error
                                  }) {
  return (
    <div>
      {labelText && <label htmlFor={id} className={styles.label}>{labelText}</label>}
      {error &&
      <FormLine>
        <Error type='secondary'>{error}</Error>
      </FormLine>}
      <Field
        id={id}
        type={type}
        component='input'
        placeholder={placeholder}
        name={name}
        className={styles.input}
        required={required}
      />

    </div>
  );
}

TextInput.propTypes = propTypes;