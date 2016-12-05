import React from 'react';

export default class ListItem extends React.Component {
  render() {//TODO: Make buttons work..?
    return (
      <div className="single-review row">
        <div className="col-sm-5 col-xs-5 review-info">
          <div className="review-rating">From {this.props.startDate}</div>
          <div className="review-author"><b>To: {this.props.endDate}</b></div>
          <div className="review-date"><i>RoomNumber {this.props.room}</i></div>
        </div>
        <div className="col-sm-5 col-xs-6 review-content">
          <button className="btn btn-default">Edit</button>
          <button className="btn btn-default">Cancel Reservation</button>
        </div>
      </div>
    )
  }
}