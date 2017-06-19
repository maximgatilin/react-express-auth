import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header/Header';
import * as actionCreators from '../actions/actionCreators';

const mapStateToProps = state => {
  const { isAuthenticated } = state.auth;
  return {
    isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: (e) => {
      e.preventDefault();
      // logout action
      bindActionCreators(actionCreators, dispatch).logoutUser()
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
