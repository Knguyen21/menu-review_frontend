'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const myApp = {
  baseURL: 'http://localhost:3000'
};

let getMeals= function(){
  $.ajax({
    // ToDo: need to make a function to update ID
    url: "http://localhost:3000/restaurants/1/meals",
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get request');
    displayMeals(response);
  });
};

let displayMeals = function(response){
  let meals = response.meals;
     console.log("yes");
    let mealListingTemplate = require('./meal-listing.handlebars');
        $('.meals').append(mealListingTemplate({
            meals
          }));

  console.log(response.meals);
};

$(".navbar-brand").on('click',function(){
  getMeals();
    $('.homepage').show();
    $('.meals').hide();
});


//Allow users to sign up
let signUp = function(e) {
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
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  };

  let signIn = function(e){
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
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

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
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let changePassword = function(e) {
  e.preventDefault();
  if (!myApp.user) {
    alert('Wrong password!');
    return;
  }
  var formData = new FormData(e.target);
  $.ajax({
    url: myApp.baseURL + '/change-password/' + myApp.user.id,
    // url: 'http://httpbin.org/post',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    console.log(data);
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


$(document).ready(function(){
  init();
  $("#rest1").on('click',function(){
    getMeals();
      $('.homepage').hide();
      $('.meals').show();
  });

  $(".navbar-brand").on('click',function(){
    getMeals();
      $('.homepage').show();
      $('.meals').hide();
  });


});
