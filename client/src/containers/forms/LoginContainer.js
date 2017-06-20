import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import * as actionCreators from '../../actions/actionCreators';
import LoginForm from '../../components/forms/Login/Login';

const mapStateToProps = state => {
  const { errors, successMessage } = state.auth;
  return {
    errors,
    successMessage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: function(...args) {
      // login action
      bindActionCreators(actionCreators, dispatch).loginUser(...args)
    }
  }
};

const LoginFormContainer = reduxForm({
  form: 'login'
})(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
