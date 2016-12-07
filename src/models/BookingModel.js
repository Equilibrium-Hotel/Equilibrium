import {post, getWithQuery, del, put} from '../utils/Requester';

function loadBookings(successCallback, errorCallback, date) {
  let month = date.getMonth()+1<10 ? '0'+date.getMonth()+1 : date.getMonth()+1
  let day = date.getDate()<10 ? '0'+(date.getDate()) : date.getDate()
  let query = `?query={"endDate": {"$gte": "${date.getFullYear()}-${month}-${day}"}}`
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

function cancelReservation(successCallback, errorCallback, id) {
  del('appdata', 'Reservations', id, 'kinvey')
    .then(successCallback)
    .catch(errorCallback)
}

function editReservation(successCallback, errorCallback, id, data) {
  put('appdata', 'Reservations', id, data, 'kinvey')
    .then(successCallback)
    .catch(errorCallback)
}

export {loadBookings, reserve, loadMyReservations, cancelReservation, editReservation}