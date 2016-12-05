import React from 'react'
import {Link} from 'react-router'
import {loadMyReservations} from '../../models/BookingModel'
import ReservationsList from './ReservationsList'
import {Notifier} from '../../utils/Notifier';

export default class MyReservations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {reservations: [],done:false}

    this.onLoadSuccess = this.onLoadSuccess.bind(this)
    this.onLoadError = this.onLoadError.bind(this)
  }

  componentDidMount() {
    if(sessionStorage.getItem('authToken')) {
      loadMyReservations(this.onLoadSuccess, this.onLoadError)
    }
    else {
      Notifier.warning('Please login first.', 'Not authorized')
      this.context.router.push('/login');
    }
  }

  onLoadSuccess(data) {
    this.setState({reservations: data, done: true})
  }

  onLoadError(error) {
    Notifier.error('Please check your internet connection.','We could not load your reservations.')
  }

  render() {
    if(this.state.done) {
      return <div>
        <Link to="booking/reservation" className="btn btn-default" activeClassName="btn btn-default active">Make a new reservation</Link>
        <h1>My Reservations</h1>
        <ReservationsList
          reservations={this.state.reservations.sort((x,y) => x.endDate < y.endDate)}
        />
      </div>
    }
    else {
      return <div>
        <h1>Loading...</h1>
      </div>
    }

  }
}

MyReservations.contextTypes = {
  router: React.PropTypes.object
};