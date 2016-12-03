import React from 'react';

export default class SingleReview extends React.Component {
    render() {
        return (
            <div className="single-review row">
                <div className="col-sm-2 col-sm-offset-2 review-info">
                    <div className="review-rating">Rating {this.props.rating}</div>
                    <div className="review-author"><b>from {this.props.author}</b></div>
                    <div className="review-date"><i>on {this.props.date}</i></div>
                </div>
                <div className="col-sm-4 review-content">
                    {this.props.content}
                </div>
            </div>
        )
    }
}