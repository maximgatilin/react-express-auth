import React from 'react';
import { Link, IndexLink} from 'react-router';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.object.isRequired
};

export default function Base({children}) {
  return <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">React App</IndexLink>
      </div>
      <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
    {children}
  </div>
};

Base.propTypes = propTypes;