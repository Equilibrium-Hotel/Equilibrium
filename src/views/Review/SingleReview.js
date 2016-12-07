import React from 'react';

export default class SingleReview extends React.Component {
    render() {
        return (
            <div className="single-review row">
                <div className="col-sm-3 col-xs-5 review-info">
                    <div className="review-rating">Rating <b>{this.props.rating}</b></div>
                    <div className="review-author">from <b>{this.props.author}</b></div>
                    <div className="review-date"><i>on {this.props.date}</i></div>
                </div>
                <div className="col-sm-5 col-xs-6 review-content">
                    {this.props.content}
                </div>
            </div>
        )
    }
}