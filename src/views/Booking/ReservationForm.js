import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import '../../../node_modules/react-datepicker/dist/react-datepicker.min.css'
import {validateReservationForm} from '../../utils/Validator'

export default class ReservationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {startDate: moment(), endDate: moment(), selected: props.freeRooms[0].toString(),
      startInputFeedback: {className: '', message:''},
      roomInputFeedback: {className: '', message:''}
    }

    this.onStartDateChange = this.onStartDateChange.bind(this)
    this.onEndDateChange = this.onEndDateChange.bind(this)
    this.onRoomChange = this.onRoomChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onStartDateChange(date) {
    this.setState({startDate: date})
  }

  onEndDateChange(date) {
    this.setState({endDate: date})
  }

  onRoomChange(event) {
    this.setState({selected: event.target.value})
  }

  onSubmit(event) {
    event.preventDefault()

    let response = validateReservationForm(this.state.startDate, this.state.endDate, this.state.selected)

    if(typeof response === 'object') {
      this.props.onSubmit(response)
    }
    else{
      if(this.state.startDate>this.state.endDate) {
        this.setState({startInputFeedback: {className: 'has-error', message:'Start date later than end.'}})
      }
      if(this.state.selected==='') {
        this.setState({roomInputFeedback: {className: 'has-error', message:'Please select a room.'}})
      }
    }
  }


  render() {
    return <form onSubmit={this.onSubmit}>
      <div className={"form-group " + this.state.startInputFeedback.className}>
        <label>Start Date</label>
        <DatePicker className='form-control' onChange={this.onStartDateChange} selected={this.state.startDate}/>
        <span className="help-block">{this.state.startInputFeedback.message}</span>
      </div>

      <div className="form-group">
        <label>End Date</label>
        <DatePicker className='form-control' onChange={this.onEndDateChange} selected={this.state.endDate}/>
      </div>

      <div className={"form-group " + this.state.roomInputFeedback.className}>
        <label>Select a room: </label>
        <select
          className="form-control"
          name="room"
          value={this.state.selected}
          onChange={this.onRoomChange}
          disabled={this.props.submitDisabled}
        >
          {this.props.freeRooms.map((x,i) => <option key={i} value={x}>{x}</option> )}
        </select>
        <span className="help-block">{this.state.roomInputFeedback.message}</span>
      </div>
      <input className="btn btn-default" type="submit" value="Submit" disabled={this.props.submitDisabled}/>
    </form>
  }
}