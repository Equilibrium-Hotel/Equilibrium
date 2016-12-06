import React from 'react'
import {Link} from 'react-router'
import {loadMyReservations, cancelReservation} from '../../models/BookingModel'
import ReservationsList from './ReservationsList'
import {Notifier} from '../../utils/Notifier';

export default class MyReservations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {reservations: [],done:false}

    this.onLoadSuccess = this.onLoadSuccess.bind(this)
    this.onLoadError = this.onLoadError.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.onDeleteSuccess = this.onDeleteSuccess.bind(this)
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

  handleCancel(id) {
    cancelReservation(this.onDeleteSuccess, this.onDeleteError, id)
  }

  onDeleteSuccess(data) {
    Notifier.success('', 'Reservation cancelled')
    this.setState({done: false})
    loadMyReservations(this.onLoadSuccess, this.onLoadError)
  }

  onDeleteError(err) {
    Notifier.error('Please check your internet connection.','We could not cancel your reservation.')
  }

  render() {
    if(this.state.done) {
      return <div>
        <Link to="booking/reservation" className="btn btn-default" activeClassName="btn btn-default active">Make a new reservation</Link>
        <h1>My Reservations</h1>
        <ReservationsList
          reservations={this.state.reservations.sort((x,y) => x.endDate < y.endDate)}
          handleCancel={this.handleCancel}
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