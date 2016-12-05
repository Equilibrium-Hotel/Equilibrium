import React from 'react'
import {Link} from 'react-router'
import {loadMyReservations} from '../../models/BookingModel'
import ReservationsList from './ReservationsList'

export default class MyReservations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {reservations: []}

    this.onLoadSuccess = this.onLoadSuccess.bind(this)
    this.onLoadError = this.onLoadError.bind(this)
  }

  componentDidMount() {
    if(sessionStorage.getItem('authToken')) {
      loadMyReservations(this.onLoadSuccess, this.onLoadError)
    }
    else {//TODO: Make alert
      this.context.router.push('/login');
    }
  }

  onLoadSuccess(data) {
    this.setState({reservations: data})
  }

  onLoadError(error) {
    console.dir(error)
  }

  render() {
    return <div>
      <h1>My Reservations</h1>
      <ReservationsList
        reservations={this.state.reservations.sort((x,y) => x.startDate < y.startDate)}
      />
      <Link to="booking/reservation" className="btn btn-default" activeClassName="btn btn-default active">Make a new reservation</Link>
    </div>
  }
}

MyReservations.contextTypes = {
  router: React.PropTypes.object
};