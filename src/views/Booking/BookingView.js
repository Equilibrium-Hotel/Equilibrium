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
      }
    }
    this.onLoadSuccess = this.onLoadSuccess.bind(this)
    this.onLoadError = this.onLoadError.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  onLoadError(error) {
    console.dir(error)
  }

  onLoadSuccess(response) {
    let freeRooms = 10 - response.length
    this.setState({freeRooms: freeRooms})
  }

  componentDidMount() {
    loadBookings(this.onLoadSuccess, this.onLoadError, new Date());
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

  handleFormSubmit() {
    let data = { //TODO: get the dates from the state( after validation )
      startDate: new Date(),
      endDate: new Date(2016,11,4)
    }
    reserve(success,error,data)

    function success(data) {
      console.dir(data)
    }

    function error(err) {
      console.dir(err)
    }
  }

  render() {
    if(this.state.freeRooms > 0) { //There are free rooms
      return <div>
        <div className="col-md-12">Free rooms: {this.state.freeRooms}</div>
        <ReservationForm
          startDate={this.state.formData.startDate}
          endDate={this.state.formData.endDate}
          onChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
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