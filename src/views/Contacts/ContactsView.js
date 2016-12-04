import React from 'react'
import {Link} from 'react-router';
import '../../styles/Contact.css';

export default class ContactsView extends React.Component {
    render() {
        return (
            <div>
                <h2>Contacts:</h2>
                <div className="row contacts-wrapper">
                    <div className="contactus-element col-sm-3">
                        <Link to="contacts/email" className="create-email">
                            <div className="icon-wrapper">
                                <div className="aboutus-background envelope-background"></div>
                            </div>
                            <div className="text-center">Email</div>
                            <div className="text-center">equilibrium@gmail.com</div>
                        </Link>
                    </div>

                    <div className="contactus-element col-sm-3">
                        <a href="tel:0666666666">
                            <div className="icon-wrapper">
                                <div className="aboutus-background phone-background"></div>
                            </div>
                            <div className="text-center">Phone</div>
                            <div className="text-center">0666 666 666</div>
                        </a>
                    </div>

                    <div className="contactus-element col-sm-3">
                        <a href="skype:pavel_ilchev?call">
                            <div className="icon-wrapper">
                                <div className="aboutus-background skype-background"></div>
                            </div>
                            <div className="text-center">Skype</div>
                            <div className="text-center">Call us</div>
                        </a>
                    </div>

                    <div className="contactus-element col-sm-3">
                        <a href="https://www.facebook.com/" target="_blank">
                            <div className="icon-wrapper">
                                <div className="aboutus-background facebook-background"></div>
                            </div>
                            <div className="text-center">Facebook</div>
                            <div className="text-center">Like us</div>
                        </a>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}