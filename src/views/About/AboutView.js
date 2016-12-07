import React from 'react';
import Picture from './Picture';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../styles/About.css'

export default class AboutView extends React.Component{
  render() {
    return (
        <div>
          <h1 className="title-page col-xs-12">About us</h1>
            <div id="wrapper-about">
              <p>Hotel Equilibrium was elected Spa Hotel of the Year 2015 by the Bulgarian Association of Hoteliers and Restaurateurs. This high recognition was the greatest award for the efforts of all employees working in the complex!
              Stylish atmosphere, smiling and helpful staff – a really good reason to visit us, to feel comfortable and to come back again!
              The hotel offers excellent facilities for a family holiday, seminar tours and company events.
              Accommodation conditions: 18 single rooms, 13 double rooms, 31 studios, 8 studios deluxe with a bath, 1 family suite, 1 family suite deluxe with a Jacuzzi, 1 one-bedroom apartment and 1 presidential maisonette with a Jacuzzi.</p>
              <div className="row image-row">
              <Picture src={require('../../images/about1.jpg')} />
              <Picture src={require('../../images/about2.jpg')} />
              <Picture src={require('../../images/about3.jpg')} />
              <Picture src={require('../../images/about4.jpg')} />
              </div>
              <p>In our boutique SPA&WELLNESS Center you will have a good reception by our highly qualified therapists who will offer you more than 50 different procedure types according to the latest global trends. We have a unique SPA capsule, hydrotherapy procedures, a swimming pool with Jacuzzi, a Roman bath and a Finnish sauna.
              We will take care of your good mood in: Equilibrium Restaurant – 120 seats, Equilibrium Tavern – 100 seats, Lobby bar – 60 seats, Night bar – 80 seats, and for the kids – outdoor and indoor playgrounds with an animator.</p>
        </div>
        </div>
    );
  }
        }