import React from 'react';
import LeaveReviewForm from './LeaveReviewForm';
import {postReview} from '../../models/ReviewModel';

export default class LeaveReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rating: '', content: ''};
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        let date = this.getDate();
        let author = sessionStorage.getItem('username');
        postReview(this.onSubmitResponse, this.state.rating, this.state.content, date, author);
    }

    onSubmitResponse(response) {
        if (response === true) {
            this.context.router.push('/reviews');
        } else {
            // TODO : some error msg or catch global ajax error
        }
    }

    getDate(){
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        return `${day}-${month}-${year}`;
    }

    render() {
        return (
            <div>
                <h1>Leave a review</h1>
                <LeaveReviewForm
                    rating={this.state.name}
                    content={this.state.content}
                    date={this.state.date}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

LeaveReview.contextTypes = {
    router: React.PropTypes.object
};