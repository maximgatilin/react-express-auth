import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import * as actionCreators from '../../actions/actionCreators';
import SignupForm from '../../components/forms/Signup/Signup';

const mapStateToProps = state => {
  const { errors } = state.auth;
  return {
    errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: function(...args) {
      console.log('success');
      // login action
      bindActionCreators(actionCreators, dispatch).signupUser(...args)
    }
  }
};

const SignupFormContainer = reduxForm({
  form: 'signup'
})(SignupForm);

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer);
