import React, { PropTypes } from 'react';
import Auth from './../modules/Auth';


const Dashboard = ({ secretData }) => (
  <div>
    <div>Title</div>

    {secretData && <p style={{ fontSize: '16px', color: 'green' }}>{secretData}</p>}
    {Auth.isUserAuthenticated() && <p>Hello, {Auth.getUser()}</p>}
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;