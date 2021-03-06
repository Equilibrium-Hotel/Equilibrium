import React from 'react';
import RegisterForm from './RegisterForm';
import {register} from '../../models/UserModel';
import {Notifier} from '../../utils/Notifier';

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', repeat: '', email: '', telephone: '',submitDisabled: false };
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    // Make sure event handlers have the correct context
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onSubmitResponse = this.onSubmitResponse.bind(this);
  }

  onChangeHandler(event) {
    switch (event.target.name) {
      case 'username':
        this.setState({ username: event.target.value });
        break;
      case 'password':
        this.setState({ password: event.target.value });
        break;
      case 'repeat':
        this.setState({ repeat: event.target.value });
        break;
      case 'email':
        this.setState({ email: event.target.value });
        break;
      case 'telephone':
        this.setState({ telephone: event.target.value });
        break;
      default:
        break;
    }
  }

  onSubmitHandler(event) {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '' || this.state.email === '') {
      Notifier.error('', "Please fill all required fields.");
      return;
    }
    if (this.state.password !== this.state.repeat) {
      Notifier.error('', "Passwords don't match");
      return;
    }
    if (this.state.password.length < 3) {
      Notifier.error("", "Passwords cannot be shorter than 3 symbols");
      return;
    }
    function isMailValid(email) {
      var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regEx.test(email);
    }
    if (!isMailValid(this.state.email)) {
      Notifier.error('', 'Please enter valid email.');
      return;
    }
    this.setState({ submitDisabled: false });
    register(this.state.username, this.state.password, this.state.email, this.state.telephone, this.onSubmitResponse);
  }

  onSubmitResponse(response) {
    if (response === true) {
      // Navigate away from register page
      this.context.router.push('/');
    } else {
      // Something went wrong, let the user try again
      this.setState({ submitDisabled: true });
    }
  }

  render() {
    if (sessionStorage.getItem('username')) this.context.router.push('/');
    return (
        <div className="row">
          <h1 className="title-page col-xs-12">Register</h1>
          <RegisterForm
              username={this.state.username}
              password={this.state.password}
              repeat={this.state.repeat}
              email={this.state.email}
              telephone={this.state.telephone}
              submitDisabled={this.state.submitDisabled}
              onChangeHandler={this.onChangeHandler}
              onSubmitHandler={this.onSubmitHandler}
          />
        </div>
    );
  }
}

RegisterPage.contextTypes = {
  router: React.PropTypes.object
};
