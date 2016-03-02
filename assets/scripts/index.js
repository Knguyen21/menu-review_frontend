'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

// const myApp = {
//   baseURL: 'http://localhost:3000'
// };
let getRestaurantsApi= require('./getRestaurants');
let getMealsApi= require('./getMeals');
let userApi = require('./user-api');
require('./example');
let createReview = require('./create-review');
let deleteReview = require('./delete-review');
let updateReview = require('./update-review');


$(document).ready(function(){
  userApi.init();
  $('.menu').hide();

   $(".restaurant-button").on('click',function(e){
     getRestaurantsApi.getRestaurants();
   });

   

  $(".navbar-brand").on('click',function(e){
    e.preventDefault();
    $('.homepage').show();
    $('.menu').hide();
  });



});

$("#review-form").on('submit', function(e){
  e.preventDefault();
  createReview.createReview(e);
});


$("#delete-review-form").on('submit', function(e){
  e.preventDefault();
  deleteReview.deleteReview(e);
});

$("#update-review-form").on('submit', function(e){
  e.preventDefault();
  updateReview.updateReview(e);
});
