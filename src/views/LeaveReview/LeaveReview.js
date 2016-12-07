import React from 'react';
import LeaveReviewForm from './LeaveReviewForm';
import {postReview} from '../../models/ReviewModel';
import { Notifier } from '../../utils/Notifier';

export default class LeaveReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rating: 5, content: '',visibleName:true};
        this.bindEventHandlers();
    }

    componentDidMount() {
        if(!sessionStorage.getItem('username')){
            this.context.router.push('/');
        }
    }

    bindEventHandlers() {
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onCheckBoxChecked = this.onCheckBoxChecked.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onCheckBoxChecked(event){
        let state = this.state.visibleName;
        this.setState({visibleName : !state});
    }

    onSubmitHandler(event) {
        event.preventDefault();
        let date = this.getDate();
        let author = sessionStorage.getItem('username');
        if(!(this.state.content) || this.state.content.length < 10){
            this.setState({
                errorMessage:"Review content should be at least 10 character"
            });
            return;
        } else {
            this.setState({
                errorMessage:""
            });
        }

        postReview(this.onSubmitResponse, this.state.rating, this.state.content, date, author, this.state.visibleName);
    }

    onSubmitResponse(response) {
        if (response === true) {
            this.context.router.push('/reviews');
            Notifier.success('Review is posted', 'Success')
        } else {
            Notifier.success('Something goes wrong try again later', 'Error')
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
                    visibleName={this.state.visibleName}
                    errorMessage={this.state.errorMessage}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                    onCheckBoxChecked={this.onCheckBoxChecked}
                />
            </div>
        );
    }
}

LeaveReview.contextTypes = {
    router: React.PropTypes.object
};