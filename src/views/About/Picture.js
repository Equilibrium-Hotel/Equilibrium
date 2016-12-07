import React from 'react';

export default class Picture extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-3" style={{display : 'inline-block'}}>
                <img  className="img-responsive picture img-circle"
                      src={this.props.src} alt=""/>
            </div>
        );
    }
}