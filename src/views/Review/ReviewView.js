import React from 'react';
import {loadReviews} from '../../models/ReviewModel';
import Reviews from './Reviews';

import Pagination from "../../utils/Pagination";

import '../../styles/Reviews.css'

export default class ReviewView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            currentPageReviews: [],
            reviewsPerPage : 5,
            activePage: 1
        };

        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.setCurrentPageReviews = this.setCurrentPageReviews.bind(this);
    }

    onLoadSuccess(response) {
        this.setState({reviews: response.reverse()});
        this.setCurrentPageReviews();
    }

    componentDidMount() {
        loadReviews(this.onLoadSuccess);
    }

    setCurrentPageReviews() {
        let currentPage = this.state.activePage - 1;
        let countPerPage = this.state.reviewsPerPage;
        let start = currentPage * countPerPage;

        let reviews = this.state.reviews.slice(start, start + countPerPage);

        this.setState({currentPageReviews: reviews});
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber}, this.setCurrentPageReviews);
    }

    render() {
        return (
            <div className="reviews-wrapper">
                <Reviews reviews={this.state.currentPageReviews}/>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.reviewsPerPage}
                    totalItemsCount={this.state.reviews.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
            </div>
        )
    }
}