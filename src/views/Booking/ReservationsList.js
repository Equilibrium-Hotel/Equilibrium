import React from 'react';
import ListItem from './ListItem';

export default class ReservationsList extends React.Component {
  render() {
    if(this.props.reservations.length>0) {
      return (
        <div className="col-md-8 col-md-offset-2">
          {this.props.reservations.map(r => {
            return <ListItem
              key={r._id}
              id={r._id}
              startDate={r.startDate}
              endDate={r.endDate}
              room={r.room}
              cancel={this.props.handleCancel}
            />
          })}
        </div>
      )
    }
    else {
      return (
        <div>
          <h3>You have not made any reservations.</h3>
        </div>
      )
    }

  }
}