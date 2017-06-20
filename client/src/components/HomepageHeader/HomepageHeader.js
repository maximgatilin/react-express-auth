import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../components/PageTitle/PageTitle';
import Message from '../../components/Message/Message';

const propTypes = {
  successMessage: PropTypes.string
};

export default function HomepageHeader({successMessage}) {
  return (
    <div>
      <PageTitle>Home page</PageTitle>
      {successMessage &&
      <Message type='success' level="primary">{successMessage}</Message>
      }
      <p>You should login to see dashboard</p>
    </div>
  );
}

HomepageHeader.propTypes = propTypes;