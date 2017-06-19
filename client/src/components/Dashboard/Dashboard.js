import React, { PropTypes } from 'react';

const Dashboard = ({ secretData, isUserAuthenticated, user }) => (
  <div>
    <div>Dashboard</div>

    {secretData && <p style={{ fontSize: '16px', color: 'green' }}>{secretData}</p>}
    {isUserAuthenticated && <p>Hello, {user.name}</p>}
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object
};

export default Dashboard;