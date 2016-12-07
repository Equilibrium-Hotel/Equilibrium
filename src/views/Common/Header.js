import React from 'react';
import Greeting from './Greeting';
import '../../styles/index.css'

export default class Header extends React.Component {
  render() {
      return (
          <div className="row">
              <div id="logo-text" className="col-xs-12 col-sm-12 col-md-3 col-lg-4">Equilibrium Hotel</div>
              <div className="controls col-xs-12 col-sm-12 col-md-9 col-lg-8">
                    <Greeting user={this.props.username}/>
                    {this.props.children}
              </div>
          </div>
      );
  }
}