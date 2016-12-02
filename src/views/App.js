import React, { Component } from 'react';
import '../styles/App.css';
import {Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/" className="btn btn-default" activeClassName="btn btn-default active" onlyActiveOnIndex={true}>Home</Link>
        <Link to="/reviews" className="btn btn-default" activeClassName="btn btn-default active">Reviews</Link>
        <Link to="/about" className="btn btn-default" activeClassName="btn btn-default active">About</Link>
        <Link to="/booking" className="btn btn-default" activeClassName="btn btn-default active">Bookings</Link>
        <Link to="/contacts" className="btn btn-default" activeClassName="btn btn-default active">Contacts</Link>
        <Link to="/login" className="btn btn-default" activeClassName="btn btn-default active">Login</Link>
        <Link to="/register" className="btn btn-default" activeClassName="btn btn-default active">Register</Link>
        <Link to="/logout" className="btn btn-default" activeClassName="btn btn-default active">Logout</Link>

        {this.props.children}
      </div>
    );
  }
}

export default App;
