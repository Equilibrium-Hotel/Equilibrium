import React from 'react'

export default class ReservationForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit()
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label>Start Date</label>
        <input className="form-control"
               onChange={this.props.onChange}
               name="startDate" type="date"
               value={this.props.startDate}
        />
      </div>
      <div className="form-group">
        <label>End Date</label>
        <input className="form-control"
               onChange={this.props.onChange}
               name="endDate" type="date"
               value={this.props.endDate}
        />
      </div>
      <input className="btn btn-default" type="submit" value="Submit"/>
    </form>
  }
}