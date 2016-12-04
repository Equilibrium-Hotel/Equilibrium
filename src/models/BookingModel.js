import {post, getWithQuery} from '../utils/Requester';

function loadBookings(successCallback, errorCallback, date) {
  let query = `?query={"endDate": {"$gt": "${date.getFullYear()}-${date.getMonth()}-${date.getDate()}"}}`
  getWithQuery('appdata', 'Reservations', 'kinvey', query)
    .then(successCallback)
    .catch(errorCallback)
}

function loadMyReservations(successCallback, errorCallback) {
  let query = `?query={"_acl.creator": "${sessionStorage.getItem('userId')}"}`
  getWithQuery('appdata', 'Reservations', 'kinvey', query)
    .then(successCallback)
    .catch(errorCallback)
}

function reserve(successCallback, errorCallback, data) {
  post('appdata', 'Reservations', data , 'kinvey')
    .then(successCallback)
    .catch(errorCallback)
}

export {loadBookings, reserve, loadMyReservations}