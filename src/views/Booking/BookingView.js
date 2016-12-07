import React from 'react'
import {loadBookings, reserve} from '../../models/BookingModel'
import ReservationForm from './ReservationForm'
import {Notifier} from '../../utils/Notifier';

export default class BookingView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitDisabled: false,
      count: -1,
      freeRooms: []
    }
    this.onLoadSuccess = this.onLoadSuccess.bind(this)
    this.onRequestError = this.onRequestError.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.onPostSuccess = this.onPostSuccess.bind(this)
  }

  onRequestError() {
    Notifier.error('Please check your internet connection.','We could not load your reservations.')
    this.setState({submitDisabled: false})
  }

  onLoadSuccess(response) {
    let freeRooms = new Set([1,2,3,4,5,6,7,8,9,10])
    for(let reservation of response) {
      if(freeRooms.has(Number(reservation.room))) {
        freeRooms.delete(Number(reservation.room))
      }
    }
    this.setState({freeRooms: Array.from(freeRooms), count: freeRooms.size})
  }

  onPostSuccess() {
    this.setState({submitDisabled: false})
    this.context.router.push('/booking');
  }

  componentDidMount() {
    if(sessionStorage.getItem('authToken')) {
      loadBookings(this.onLoadSuccess, this.onRequestError, new Date());
    }
    else {
      Notifier.warning('Please login first.', 'Not authorized')
      this.context.router.push('/login');
    }
  }

  handleFormSubmit(data) {
    this.setState({ submitDisabled: true });

    reserve(this.onPostSuccess, this.onRequestError, data)
  }

  render() {
    if(this.state.count > 0) { //There are free rooms
      return <div className="row">
        <div className="col-md-12">Free rooms: {this.state.count}</div>
        <ReservationForm
          onSubmit={this.handleFormSubmit}
          submitDisabled={this.state.submitDisabled}
          freeRooms={this.state.freeRooms}
        />
      </div>
    }
    else if(this.state.count === 0) { //No free rooms
      return <div>
        <h1>No free rooms right now! Check later..</h1>
      </div>
    }
    else { //Loading
      return <div>
        <h1>Loading...</h1>
      </div>
    }
  }
}

BookingView.contextTypes = {
  router: React.PropTypes.object
};