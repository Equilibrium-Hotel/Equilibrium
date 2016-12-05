import React from 'react';

export default class Picture extends React.Component {
    render() {
        return (
            <div style={{display : 'inline-block'}}>
                <img  className="img-responsive img-circle"
                      src={this.props.src} style={{width:'265px', height:'265px', margin:"10px"}} alt=""/>
            </div>
        );
    }
}