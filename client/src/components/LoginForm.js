import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default function LoginForm({onSubmit, onChange, errors, user, successMessage}) {
  return <div className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <input
          name="email"
          type="email"
          onChange={onChange}
          value={user.name}/>
      </div>

      <div className="field-line">
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={user.name}/>
      </div>

      <div className="button-line">
        <button type="submit">Login</button>
      </div>

      <p>Don't have an account? <Link to={'/signup'}>Create one</Link></p>
    </form>
  </div>
};

LoginForm.propTypes = propTypes;