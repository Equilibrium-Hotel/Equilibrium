import React from 'react'

export default class ReservationForm extends React.Component {
  render() {
    return <form onSubmit={this.props.onSubmit}>
      <div className="form-group">
        <label>Start Date</label>
        <input className="form-control"
               onChange={this.props.onChange}
               name="startDate" type="date"
               value={this.props.startDate}
               disabled={this.props.submitDisabled}
        />
      </div>
      <div className="form-group">
        <label>End Date</label>
        <input className="form-control"
               onChange={this.props.onChange}
               name="endDate" type="date"
               value={this.props.endDate}
               disabled={this.props.submitDisabled}
        />
      </div>
      <input className="btn btn-default" type="submit" value="Submit" disabled={this.props.submitDisabled}/>
    </form>
  }
}