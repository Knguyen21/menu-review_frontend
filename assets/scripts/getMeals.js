'use strict';

var getReviewsApi= require('./getReviews');

const myApp = {
  baseURL: 'http://localhost:3000'
};

// allow a user who sign in to create a new review when he/she clicks on the write review button for a specific meal
var writeReview = function(){
  $('.write-review').on('click', function(e){
    e.preventDefault();
    let mealId = $(this).attr('data-id');
    $('.write-review-button').attr('data-id', mealId);
    $('#write-review').modal('show');
  });
};

// display all the meals after you click on the specific restaurant name from the drop-down restaurant listing
var displayMeals = function(response, meal_type){
  let meals = response.meals;
  let mealListingTemplate = require('./meal-listing.handlebars');
  $(meal_type).html(mealListingTemplate({meals}));
  writeReview();
  $(".reviews-button").on('click', getReviewsApi.getReviews);
};

// send an ajax get request for the data of all the meals from a certain meal_type from a specific restaurant
var getMeals =  function(restaurantID, urlMealType, mealType){
  $.ajax({
    url: myApp.baseURL + '/restaurants/' + restaurantID + '/meals?meal_type=' + urlMealType,
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    displayMeals(response, mealType);
  });
};


module.exports = {
  displayMeals,
  getMeals,
  writeReview
};
