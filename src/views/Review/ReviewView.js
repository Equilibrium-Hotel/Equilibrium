import React from 'react';
import {loadReviews} from '../../models/ReviewModel';
import Reviews from './Reviews';

import '../../styles/Reviews.css'

export default class ReviewView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [{
                '_id': 'fake',
                'rating': 5,
                'content': 'hallo',
                'date': '2016-12-03',
                'author': 'paco'
            }, {
                '_id': 'take',
                'rating': 4,
                'content': 'mnouu qkata rabota be6e tam',
                'date': '2016-12-05',
                'author': 'iveto'
            }]
        };

        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // this.setState({reviews: response})
    }

    componentDidMount() {
        loadReviews(this.onLoadSuccess);
    }

    render() {
        return (
            <div className="reviews-wrapper">
                <Reviews reviews={this.state.reviews}/>
            </div>
        )
    }
}