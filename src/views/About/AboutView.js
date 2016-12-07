import React from 'react';
import Picture from './Picture';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

export default class AboutView extends React.Component{
  render() {
    return (
        <div>
          <h1>About us</h1>
          <hr/>
            <div>
            Hotel Equilibrium was elected Spa Hotel of the Year 2015 by the Bulgarian Association of Hoteliers and Restaurateurs. This high recognition was the greatest award for the efforts of all employees working in the complex!
            Stylish atmosphere, smiling and helpful staff – a really good reason to visit us, to feel comfortable and to come back again!
            The hotel offers excellent facilities for a family holiday, seminar tours and company events.
            Accommodation conditions: 18 single rooms, 13 double rooms, 31 studios, 8 studios deluxe with a bath, 1 family suite, 1 family suite deluxe with a Jacuzzi, 1 one-bedroom apartment and 1 presidential maisonette with a Jacuzzi.
              <div>
              <Picture src={'http://publocation.com.au/sites/publocation.com.au/files/styles/large/public/pub-images/equilibrium-hotel-1611-1.jpg?itok=b5aukPIC&slideshow=true&slideshowAuto=false&slideshowSpeed=4000&speed=350&transition=elastic'} />
              <Picture src={'http://www.gtaust.com/news/archive/equilibrium/equilibrium1.jpg'} />
              <Picture src={'http://www.clubsalsa.com.au/email/070103/equilibrium-hotel.jpg'} />
              <Picture src={'https://i0.bookcdn.com/data/Photos/OriginalPhoto/1813/181342/181342059/Equilibrium-Rawai-Villa-photos-Exterior-Hotel-information.JPEG'} />
              </div>
            In our boutique SPA&WELLNESS Center you will have a good reception by our highly qualified therapists who will offer you more than 50 different procedure types according to the latest global trends. We have a unique SPA capsule, hydrotherapy procedures, a swimming pool with Jacuzzi, a Roman bath and a Finnish sauna.
            We will take care of your good mood in: Equilibrium Restaurant – 120 seats, Equilibrium Tavern – 100 seats, Lobby bar – 60 seats, Night bar – 80 seats, and for the kids – outdoor and indoor playgrounds with an animator.
        </div>
        </div>
    );
  }
        }