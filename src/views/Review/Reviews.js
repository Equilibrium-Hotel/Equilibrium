import React from 'react';
import Review from './SingleReview';
import {Link} from 'react-router';

export default class Reviews extends React.Component {
    render() {
        let leaveReview = null;
        if (!sessionStorage.getItem('userId')) {
            leaveReview = <Link to="/leave-review" className="btn btn-primary">Leave a review</Link>
        }

        return (
            <div>
                <h2>Reviews</h2>
                <div className="btn-leave-review">{leaveReview}</div>
                {this.props.reviews.map(r => {
                    return <Review key={r._id} rating={r.rating} content={r.content} author={r.author} date={r.date}/>
                })}
            </div>
        )
    }
}