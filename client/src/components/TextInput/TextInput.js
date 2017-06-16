import React from 'react';
import styles from './TextInput.scss';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  labelText: PropTypes.string
};

export default function TextInput({
                                    type = 'text',
                                    placeholder = '',
                                    value = '',
                                    labelText,
                                    id,
                                    name,
                                    onChange,
                                    required = false
                                  }) {
  return (
    <div>
      {labelText && <label htmlFor={id} className={styles.label}>{labelText}</label>}
      <input type={type} placeholder={placeholder} id={id} value={value} onChange={onChange} name={name}
             className={styles.input} required={required}/>
    </div>
  );
}

TextInput.propTypes = propTypes;