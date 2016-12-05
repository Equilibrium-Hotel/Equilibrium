import React from 'react'
import {Link} from 'react-router';
import '../../styles/Contact.css';
import Helmet from "react-helmet";
import {    withGoogleMap,    GoogleMap,    Marker,} from "../../../node_modules/react-google-maps/lib";

export default class ContactsView extends React.Component {
    //https://www.npmjs.com/package/kinvey-backend-sdk#email - sending meil

    constructor(props){
        super(props);

        this.state = {
            markers: [{
                position: {
                    lat: 43.284526,
                    lng: 28.042122,
                },
                key: `Golden Sands`,
                defaultAnimation: 2,
            }],
        };

        this.handleMapLoad = this.handleMapLoad.bind(this);
        this.handleMapClick = this.handleMapClick.bind(this);
        this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
    }

    handleMapLoad(map) {
        this._mapComponent = map;
    }

    handleMapClick(event) {
        const nextMarkers = [
            ...this.state.markers,
            {
                position: event.latLng,
                defaultAnimation: 2,
                key: Date.now(),
            },
        ];
        this.setState({
            markers: nextMarkers,
        });

        if (nextMarkers.length === 3) {
            this.props.toast(
                `Right click on the marker to remove it`,
                `Also check the code!`
            );
        }
    }

    handleMarkerRightClick(targetMarker) {
        const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
        this.setState({
            markers: nextMarkers,
        });
    }


    render() {
        const GettingStartedGoogleMap = withGoogleMap(props => (
            <GoogleMap
                ref={props.onMapLoad}
                defaultZoom={10}
                defaultCenter={{ lat: 43.284526, lng: 28.042122 }}
                onClick={props.onMapClick}
            >
                {props.markers.map(marker => (
                    <Marker
                        {...marker}
                        onRightClick={() => props.onMarkerRightClick(marker)}
                    />
                ))}
            </GoogleMap>
        ));

        return (
            <div>
                <h2>Contacts:</h2>
                <div className="row contacts-wrapper">
                    <div className="contactus-element col-sm-3">
                        <Link to="/contacts/email" className="create-email">
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
                <div style={{height: `400px`}}>
                    <Helmet
                        title="Getting Started"
                    />
                    <GettingStartedGoogleMap
                        containerElement={
                            <div style={{ height: `100%` }} />
                        }
                        mapElement={
                            <div style={{ height: `100%` }} />
                        }
                        onMapLoad={this.handleMapLoad}
                        onMapClick={this.handleMapClick}
                        markers={this.state.markers}
                        onMarkerRightClick={this.handleMarkerRightClick}
                    />
                </div>
            </div>
        )
    }
}
