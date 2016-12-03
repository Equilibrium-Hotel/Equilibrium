import $ from 'jquery';

const appId = 'kid_ByoF18kmx';
const appSecret = 'b8f142e0941a4cc58a9e0cbeb95e50e1';
const baseUrl = 'https://baas.kinvey.com/';

function makeAuth(type) {
    switch (type) {
        case 'basic':
            return {'Authorization': "Basic " + btoa(appId + ":" + appSecret)};
        case 'kinvey':
            return {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')};
        default:
            break;
    }
}

//reviews requests
function getReviews(module, uri, auth) {
    const url = baseUrl + module + "/" + appId + "/" + uri;
    const headers = makeAuth(auth);

    return $.ajax({
        method: "GET",
        url: url,
        headers: {Authorization: 'Basic Z3Vlc3Q6Z3Vlc3Q='},
        contentType: 'application/json'
    });
}

function leaveReview(module, uri, auth, data) {
    const url = baseUrl + module + "/" + appId + "/" + uri;
    const headers = makeAuth(auth);

    return $.ajax({
        method: "POST",
        url: url,
        headers: {Authorization: 'Basic Z3Vlc3Q6Z3Vlc3Q='},
        contentType: 'application/json',
        data : data
    });
}


//TODO: EDIT
function post() {
    $.ajax({
        method: 'POST',
        url: 'https://baas.kinvey.com/appdata/kid_ByoF18kmx/Reservations',
        contentType: 'application/json',
        data: JSON.stringify({
            startDate: new Date(2015, 11, 1),
            endDate: new Date(2015, 11, 2),
            price: 99
        }),
        headers: {Authorization: 'Basic Z3Vlc3Q6Z3Vlc3Q='}
    })
        .then(function (data) {
            console.dir(data)
        })
        .catch(function (err) {
            console.dir(err)
        })
}

function getInfo() {
    $.get({
        url: 'https://baas.kinvey.com/appdata/kid_ByoF18kmx/Reservations/?query={"startDate":{"$gt" : "2015-11-01", "$lt" : "2016-0-01"}}',
        headers: {Authorization: 'Basic Z3Vlc3Q6Z3Vlc3Q='}
    })
        .then(function (data) {
            console.dir(data)
        })
        .catch(function (err) {
            console.dir(err)
        })
}


export {getReviews, leaveReview};