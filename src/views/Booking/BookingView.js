import React from 'react'
import {loadBookings, reserve} from '../../models/BookingModel'
import ReservationForm from './ReservationForm'

export default class BookingView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        startDate:'',
        endDate:''
      },
      submitDisabled: false
    }
    this.onLoadSuccess = this.onLoadSuccess.bind(this)
    this.onRequestErrorError = this.onRequestErrorError.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onPostSuccess = this.onPostSuccess.bind(this)
  }

  onRequestErrorError(error) { //TODO: Show error
    console.dir(error)
    this.setState({submitDisabled: false})
  }

  onLoadSuccess(response) {
    let freeRooms = 20 - response.length
    this.setState({freeRooms: freeRooms})
  }

  onPostSuccess(response) {
    console.dir(response)
    this.setState({submitDisabled: false})
    this.context.router.push('/booking');
  }

  componentDidMount() {
    if(sessionStorage.getItem('authToken')) {
      loadBookings(this.onLoadSuccess, this.onLoadError, new Date());
    }
    else {//TODO: Make alert
      this.context.router.push('/login');
    }
  }

  handleInputChange(event) {
    if(event.target.name === 'startDate') {
      this.setState({formData: {
        startDate: event.target.value,
        endDate: this.state.formData.endDate
      }})
    }
    else if(event.target.name === 'endDate') {
      this.setState({formData: {
        startDate: this.state.formData.startDate,
        endDate: event.target.value
      }})
    }
  }

  handleFormSubmit(event) {
    event.preventDefault()

    let data = { //TODO: get the dates from the state( after validation )
      startDate: new Date(),
      endDate: new Date()
    }

    this.setState({ submitDisabled: true });

    reserve(this.onPostSuccess, this.onRequestErrorError, data)
  }

  render() {
    if(this.state.freeRooms > 0) { //There are free rooms
      //TODO: Make room numbers picker (exclude ones that are reserved)
      //TODO: Make date picker for dates
      return <div>
        <div className="col-md-12">Free rooms: {this.state.freeRooms}</div>
        <ReservationForm
          startDate={this.state.formData.startDate}
          endDate={this.state.formData.endDate}
          onChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
          submitDisabled={this.state.submitDisabled}
        />
      </div>
    }
    else if(this.state.freeRooms <= 0) { //No free rooms
      //TODO: make a form for checking when there will be free rooms
      return <div>
        <h1>No free rooms right now! Check later..</h1>
      </div>
    }
    else { //Loading
      //TODO: make better loading screen used by all views?
      return <div>
        <h1>Loading...</h1>
      </div>
    }
  }
}

BookingView.contextTypes = {
  router: React.PropTypes.object
};