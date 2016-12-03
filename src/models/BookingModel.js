import {getBookings, reservationRequest} from '../utils/Requester';

function loadBookings(successCallback, errorCallback, date) {
  getBookings('appdata', 'Reservations', 'basic', date)
    .then(successCallback)
    .catch(errorCallback)
}

function reserve(successCallback, errorCallback, data) {
  reservationRequest(JSON.stringify(data))
    .then(successCallback)
    .catch(errorCallback)
}

export {loadBookings, reserve}