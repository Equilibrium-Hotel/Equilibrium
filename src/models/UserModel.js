import * as requester from '../utils/Requester.js';
import observer from './ObserverModel';
import {Notifier} from '../utils/Notifier';

function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);
    let userEmail = userInfo.email;
    sessionStorage.setItem('email', userEmail);
    let userTelephone = userInfo.telephone;
    sessionStorage.setItem('telephone', userTelephone);

    observer.onSessionUpdate();
}

// user/login
function login(username, password, callback) {
    let userData = {
        username,
        password
    };

    requester.post('user', 'login', userData, 'basic')
        .then(loginSuccess)
        .catch(displayError);

    function loginSuccess(userInfo) {
        saveSession(userInfo);
        Notifier.success('', 'Successfully logged in!');
        callback(true);
    }
}

// user/register
function register(username, password, email, telephone, callback) {
    let userData = {
        username,
        password,
        email,
        telephone
    };

    requester.post('user', '', userData, 'basic')
        .then(registerSuccess)
        .catch(displayError);

    function registerSuccess(userInfo) {
        Notifier.success('Your registration was successful!', 'Congrats!');
        saveSession(userInfo);
        callback(true);
    }

}

function displayError(response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error."
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    Notifier.error(errorMsg);
}

// user/logout
function logout(callback) {
    requester.post('user', '_logout', null, 'kinvey')
        .then(logoutSuccess);


    function logoutSuccess(response) {
        sessionStorage.clear();
        observer.onSessionUpdate();
        Notifier.success('Successfully logged out!', '');
        callback(true);
    }
}

export {login, register, logout};