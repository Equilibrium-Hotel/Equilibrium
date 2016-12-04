import React from 'react';

export default class ListItem extends React.Component {
  render() {
    return (
      <div className="single-review row">
        <div className="col-sm-3 col-xs-5 review-info">
          <div className="review-date"><i>From: {this.props.startDate}</i></div>
        </div>
        <div className="col-sm-5 col-xs-6 review-content">
          To: {this.props.endDate}
        </div>
      </div>
    )
  }
}