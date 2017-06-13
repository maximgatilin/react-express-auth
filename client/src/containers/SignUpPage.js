import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm';

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[name] = event.target.value;

    this.setState({
      user
    });
  }

  processForm(event) {
    event.preventDefault();

    console.log('name:', this.state.user.name);
    console.log('email:', this.state.user.email);
    console.log('password:', this.stat.user.password);
  }

  render() {
    return (
      <SignUpForm
      onSubmit={this.processForm}
      onChange={this.changeUser}
      errors={this.state.errors}
      user={this.state.user}/>
    )
  }
}