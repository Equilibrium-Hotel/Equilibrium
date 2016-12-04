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

function get(module, uri, auth) {
    const kinveyLoginUrl = baseUrl + module + "/" + appId + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    return $.ajax({
        method: "GET",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    });
}

function post(module, uri, data, auth) {
    const kinveyLoginUrl = baseUrl + module + "/" + appId + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "POST",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    };

    if (data !== null) {
        request.data = data;
    }
    return $.ajax(request);
}

function getWithQuery(module, uri, auth, query) {
  const kinveyUrl = baseUrl + module + "/" + appId + "/" + uri +'/' + query;
  const kinveyAuthHeaders = makeAuth(auth);

  return $.ajax({
    method: "GET",
    url: kinveyUrl,
    headers: kinveyAuthHeaders
  });
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

export {get, post, getReviews, leaveReview, getWithQuery};
