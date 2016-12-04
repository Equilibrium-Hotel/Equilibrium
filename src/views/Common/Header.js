import React from 'react';
import Greeting from './Greeting';

export default class Header extends React.Component {
  render() {
      return (
          <div>
            <Greeting user={this.props.username}/>
              {this.props.children}
          </div>
      );
  }
}