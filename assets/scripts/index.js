'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled


var getRestaurantsApi= require('./getRestaurants');
var userApi = require('./user-api');
require('./example');
var createReview = require('./create-review');
var deleteReview = require('./delete-review');
var updateReview = require('./update-review');

var homepageDisplay = function() {
  $(".navbar-brand").on('click',function(){
    $('.homepage').show();
    $('.menu').hide();
  });
};

var reviewForm = function() {
  $("#review-form").on('submit', function(e){
    e.preventDefault();
    createReview.createReview(e);
  });
};

var deleteReviewForm = function() {
  $("#delete-review-form").on('submit', function(e){
    e.preventDefault();
    deleteReview.deleteReview(e);
  });
};

var updateReviewForm = function() {
  $("#update-review-form").on('submit', function(e){
    e.preventDefault();
    updateReview.updateReview(e);
  });
};

$(document).ready(function(){
  userApi.init();
  $('.menu').hide();
  $(".restaurant-button").on('click',function(e){
    getRestaurantsApi.getRestaurants();
  });
  homepageDisplay();
  reviewForm();
  deleteReviewForm();
  updateReviewForm();
});
