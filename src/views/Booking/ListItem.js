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
      <div className="single-review row">
        <div className="col-sm-5 col-xs-5 review-info">
          <div className="review-rating">From {this.props.startDate}</div>
          <div className="review-author"><b>To: {this.props.endDate}</b></div>
          <div className="review-date"><i>RoomNumber {this.props.room}</i></div>
        </div>
        <div className="col-sm-5 col-xs-6 review-content">
          <Link to={linkHref} className="btn btn-default">Edit</Link>
          <button className="btn btn-default" onClick={this.onCancelButtonClicked}>Cancel Reservation</button>
        </div>
      </div>
    )
  }
}