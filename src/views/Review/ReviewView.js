import React from 'react';
import {loadReviews} from '../../models/ReviewModel';
import Reviews from './Reviews';

import '../../styles/Reviews.css'

export default class ReviewView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        };

        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
         this.setState({reviews: response})
    }

    componentDidMount() {
        loadReviews(this.onLoadSuccess);
    }

    render() {
        return (
            <div className="reviews-wrapper">
               <Reviews reviews={this.state.reviews} />
            </div>
        )
    }
}