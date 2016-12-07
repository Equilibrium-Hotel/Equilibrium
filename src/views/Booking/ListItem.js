import React from 'react';
import {Link} from 'react-router'

export default class ListItem extends React.Component {
  constructor(props) {
    super(props)

    this.onCancelButtonClicked = this.onCancelButtonClicked.bind(this)
  }

  onCancelButtonClicked() {
    let sure = confirm("Are you sure you want to delete your reservation?")

    if(sure) {
      this.props.cancel(this.props.id)
    }
  }

  render() {
    let linkHref = 'booking/reservation/'+this.props.id
    return (
      <div className="single-reservation row">
        <div className="row">
          <div className="col-md-2 col-md-offset-3 reservation-info">From: <br/><b>{this.props.startDate}</b></div>
          <div className="col-md-2 reservation-info">To: <br/> <b>{this.props.endDate}</b></div>
          <div className="col-md-2 reservation-info">Room Number: <br/> <b>{this.props.room}</b></div>
        </div>
        <div className="row review-content">
          <Link to={linkHref} className="btn btn-default col-md-3 col-md-offset-3 edit-delete-btn"><span className="glyphicon glyphicon-pencil"/> Edit</Link>
          <button className="btn btn-default col-md-3 edit-delete-btn" onClick={this.onCancelButtonClicked}><span className="glyphicon glyphicon-remove"/> Cancel Reservation</button>
        </div>
      </div>
    )
  }
}