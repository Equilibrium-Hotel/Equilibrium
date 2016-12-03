import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import './styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import HomeView from './views/Home/HomeView';
import ReviewView from './views/Review/ReviewView';
import LeaveReview from './views/LeaveReview/LeaveReview';
import AboutView from './views/About/AboutView';
import LoginView from './views/Login/LoginView';
import RegisterView from './views/Register/RegisterView';
import BookingView from './views/Booking/BookingView';
import ContactsView from './views/Contacts/ContactsView';
import MyReservations from './views/Booking/MyReservations';
import Logout from './views/Logout/Logout'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomeView}/>
            <Route path="reviews" component={ReviewView}/>
            <Route path="leave-review" component={LeaveReview}/>
            <Route path="about" component={AboutView}/>
            <Route path="login" component={LoginView}/>
            <Route path="register" component={RegisterView}/>
            <Route path="booking">
                <IndexRoute component={MyReservations}/>
                <Route path="reservation" component={BookingView}/>
            </Route>
            <Route path="contacts" component={ContactsView}/>
            <Route path="logout" component={Logout}/>
        </Route>
    </Router>
    ,
    document.getElementById('root')
);
