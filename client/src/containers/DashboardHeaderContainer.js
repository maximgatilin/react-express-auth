import { connect } from 'react-redux';
import DashboardHeader from '../components/DashboardHeader/DashboardHeader';

const mapStateToProps = state => {
  const { successMessage } = state.auth;
  return {
    successMessage
  };
};

export default connect(mapStateToProps)(DashboardHeader);