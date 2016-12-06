import React, { Component } from 'react';
import '../styles/App.css';
import {Link} from 'react-router'
import Header from '../views/Common/Header'
import Footer from '../views/Common/Footer'
import observer from '../models/ObserverModel';
import Infobox from  '../views/Common/Infobox';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { loggedIn: false, username: '' };
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    componentDidMount() {
        this.onSessionUpdate();
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
        } else {
            this.setState({ loggedIn: false, username: '' });
        }
    }

    render() {
        let navbar = {};
        if (!this.state.loggedIn) {
            navbar = (
                <Header>
                  <Link to="/" className="btn btn-default" activeClassName="btn btn-default active" onlyActiveOnIndex={true}>Home</Link>
                  <Link to="/reviews" className="btn btn-default" activeClassName="btn btn-default active">Reviews</Link>
                  <Link to="/about" className="btn btn-default" activeClassName="btn btn-default active">About</Link>
                  <Link to="/contacts" className="btn btn-default" activeClassName="btn btn-default active">Contacts</Link>
                  <Link to="/login" className="btn btn-default" activeClassName="btn btn-default active">Login</Link>
                  <Link to="/register" className="btn btn-default" activeClassName="btn btn-default active">Register</Link>
                </Header>
            );
        } else {
            navbar = (
                <Header>
                  <Link to="/" className="btn btn-default" activeClassName="btn btn-default active" onlyActiveOnIndex={true}>Home</Link>
                  <Link to="/reviews" className="btn btn-default" activeClassName="btn btn-default active">Reviews</Link>
                  <Link to="/about" className="btn btn-default" activeClassName="btn btn-default active">About</Link>
                  <Link to="/booking" className="btn btn-default" activeClassName="btn btn-default active">Bookings</Link>
                  <Link to="/contacts" className="btn btn-default" activeClassName="btn btn-default active">Contacts</Link>
                  <Link to="/logout" className="btn btn-default" activeClassName="btn btn-default active">Logout</Link>
                </Header>
            );
        }

        return (
            <div className="App container">
              <Header loggedIn={this.state.loggedIn} user={this.state.username}>
                  {navbar}
              </Header>
                {this.props.children}
              <Infobox/>
            </div>
        )
    }

}

export default App;
