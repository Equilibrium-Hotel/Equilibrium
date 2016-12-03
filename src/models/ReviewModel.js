import {getReviews} from '../utils/Requester';

function loadReviews(callback) {
    getReviews('appdata', 'Reviews', 'basic')
        .then(callback);
}

export {loadReviews}