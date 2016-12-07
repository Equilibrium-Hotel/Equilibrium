import React from 'react';
import Review from './SingleReview';
import {Link} from 'react-router';

export default class Reviews extends React.Component {
    render() {
        let leaveReview = null;
        if (sessionStorage.getItem('username')) {
            leaveReview = <Link to="/leave-review" className="btn btn-primary">Leave a review</Link>
        }

        return (
            <div>
                <h1 className="title-page col-xs-12">Reviews</h1>
               {leaveReview}
                {this.props.reviews.map(r => {
                    return <Review key={r._id} rating={r.rating} content={r.content} author={r.showName ? r.author : 'anonymous'} date={r.date}/>
                })}
            </div>
        )
    }
}