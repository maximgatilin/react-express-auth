import React from 'react';
import {Link} from 'react-router';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default function LoginForm({onSubmit, onChange, errors, user, successMessage}) {
  return <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          type="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.name}/>
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          errorText={errors.password}
          onChange={onChange}
          value={user.name}/>
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Log in" primary/>
      </div>

      <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link></CardText>
    </form>
  </Card>
};

LoginForm.propTypes = propTypes;