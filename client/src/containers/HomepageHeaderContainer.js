import { connect } from 'react-redux';
import HomepageHeader from '../components/HomepageHeader/HomepageHeader';

const mapStateToProps = state => {
  const { successMessage } = state.auth;
  return {
    successMessage
  };
};

export default connect(mapStateToProps)(HomepageHeader);