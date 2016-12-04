import React from 'react';
import ListItem from './ListItem';

export default class ReservationsList extends React.Component {
  render() {
    if(this.props.reservations.length>0) {
      return (
        <div>
          {this.props.reservations.map(r => {
            return <ListItem key={r._id} startDate={r.startDate} endDate={r.endDate}/>
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