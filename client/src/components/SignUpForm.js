import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default function SignUpForm({onSubmit, onChange, errors, user}) {
  return <div className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <input
          name="name"
          onChange={onChange}
          value={user.name}/>
      </div>

      <div className="field-line">
        <input
          name="email"
          type="email"
          onChange={onChange}
          value={user.email}/>
      </div>

      <div className="field-line">
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={user.password}/>
      </div>

      <div className="button-line">
        <button type="submit">Create New Account</button>
      </div>

      <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
    </form>
  </div>
};

SignUpForm.propTypes = propTypes;