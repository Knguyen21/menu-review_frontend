'use strict';

const myApp = {
  baseURL: 'http://localhost:3000'
};

// send an ajax post request when you click on the sign up button
var signUp = function(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  $.ajax({
    url: myApp.baseURL + '/sign-up',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    myApp.user = data.user;
    $('#signup').modal('hide');
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

// send an ajax post request when you click on the log in button
var signIn = function(e){
  e.preventDefault();
  var formData = new FormData(e.target);
  $.ajax({
    url: myApp.baseURL + '/sign-in',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  })
  .done(function(data) {
    myApp.user = data.user;
    console.log(data);
    $('#login').modal('hide');
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

// send an ajax delete request when you click on the sign out button
let signOut = function(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  $.ajax({
    url: myApp.baseURL + '/sign-out/' + myApp.user.id,
    method: 'DELETE',
    headers: {
    Authorization: 'Token token=' + myApp.user.token,
    },
    contentType: false,
    processData: false,
    data: formData,
  })
  .done(function(data) {
    console.log(data);
    $('#signout').modal('hide');
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

// send an ajax patch request when you click on the change button
let changePassword = function(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  $.ajax({
    url: myApp.baseURL + '/change-password/' + myApp.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    console.log(data);
    $('#changepassword').modal('hide');
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let init = function() {
  $('#sign-up').on('submit', signUp);
  $('#sign-in').on('submit', signIn);
  $('#sign-out').on('submit', signOut);
  $('#change-password').on('submit', changePassword);
};

module.exports = {
  init,
  changePassword,
  signUp,
  signIn,
  signOut,
  myApp,
};
