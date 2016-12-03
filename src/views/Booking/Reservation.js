import React from 'react'

export default class Reservation extends React.Component {
  render() {
    return <div>
      <div>start Date : {this.props.startDate}</div>
      <div>end Date : {this.props.endDate}</div>
      <div>price : {this.props.price}</div>
    </div>
  }
}