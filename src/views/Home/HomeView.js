import React from 'react'
import '../../styles/Home.css'

export default class HomeView extends React.Component {
  render() {
    return <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src={require("../../images/pool.jpeg")} alt="Pool" className="img-responsive"/>
          </div>

          <div className="item">
            <img src={require("../../images/room.jpeg")} alt="Hallway" className="img-responsive"/>
          </div>

          <div className="item">
            <img src={require("../../images/hallway.jpeg")} alt="Room" className="img-responsive"/>
          </div>
        </div>

      </div>

      <h1 id="welcome-heading">Welcome to <br></br><span>Equilibrium Hotel</span></h1>

      <p id="welcome-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."</p>

      <h2 id="services-heading">Make reservations easily with our online services</h2>
      <div className="row" id="services">
        <div className="service col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <img className="img-responsive" src={require("../../images/profile.png")} alt=""/>
            <p className="service-text"><a href="/register">CREATE YOUR PROFILE</a></p>
        </div>
        <div className="service col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <img className="img-responsive" src={require("../../images/booking.png")} alt=""/>
            <p className="service-text"><a href="/booking">BOOK A ROOM</a></p>
        </div>
        <div className="service col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <img className="img-responsive" src={require("../../images/manage.png")} alt=""/>
            <p className="service-text"><a href="/booking">MANAGE AND REVIEW YOUR BOOKINGS</a></p>
        </div>
      </div>

    </div>
  }
}