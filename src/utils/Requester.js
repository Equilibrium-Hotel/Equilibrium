const appId = 'kid_ByoF18kmx'
const appSecret = 'b8f142e0941a4cc58a9e0cbeb95e50e1'
const baseUrl = 'https://baas.kinvey.com/'


//TODO: EDIT
function post() {
  $.ajax({
    method:'POST',
    url: 'https://baas.kinvey.com/appdata/kid_ByoF18kmx/Reservations',
    contentType: 'application/json',
    data: JSON.stringify({
      startDate: new Date(2015,11,1),
      endDate: new Date(2015,11,2),
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