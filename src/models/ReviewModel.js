import {getReviews, leaveReview} from '../utils/Requester';

function loadReviews(callback) {
    getReviews('appdata', 'Reviews', 'basic')
        .then(callback);
}

function postReview(callback, rating, content, date, author,showName) {
    let reviewData = JSON.stringify({
        "rating": rating,
        "content": content,
        "date": date,
        "author": author,
        "showName" : showName
    });

    leaveReview('appdata', 'Reviews', 'kinvey', reviewData)
        .then(() => callback(true));
}

export {loadReviews, postReview}