import React from 'react'
import {Link} from 'react-router'

export default class MyReservations extends React.Component {

  //TODO: Make request for reservations by user

  render() {//TODO: Show all reservations that the current user has made ordered by date
    return <div>
      <div>My Reservations</div>
      <Link to="booking/reservation" className="btn btn-default" activeClassName="btn btn-default active">Make a new reservation</Link>
    </div>
  }
}