import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../components/Message/Message';

const propTypes = {
  successMessage: PropTypes.string
};

export default function DashboardHeader({successMessage}) {
  return (
    <div>
      {successMessage &&
        <Message type='success' level="primary">{successMessage}</Message>
      }
    </div>
  );
}

DashboardHeader.propTypes = propTypes;