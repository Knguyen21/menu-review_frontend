'use strict';

var getReviewsApi= require('./getReviews');

const myApp = {
  baseURL: 'http://localhost:3000'
};

var getBreakfast= function(restaurantID){
  $.ajax({
    url: myApp.baseURL + '/restaurants/' + restaurantID + '/meals?meal_type=breakfast',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get request');
    displayMeals(response,'#breakfast');
  });
};

var getLunch= function(restaurantID){
  $.ajax({
    url: myApp.baseURL + '/restaurants/'+ restaurantID +'/meals?meal_type=lunch',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get request');
    displayMeals(response,'#lunch');
  });
};

var getDinner= function(restaurantID){
  $.ajax({
    url: myApp.baseURL + '/restaurants/'+ restaurantID +'/meals?meal_type=dinner',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get request');
    displayMeals(response,'#dinner');
  });
};

var writeReview = function(){
$('.write-review').on('click', function(e){
  e.preventDefault();
  let mealId = $(this).attr('data-id');
  $('.write-review-button').attr('data-id', mealId);
  $('#write-review').modal('show');
});
};

var displayMeals = function(response, meal_type){
  let meals = response.meals;
  let mealListingTemplate = require('./meal-listing.handlebars');
  $(meal_type).html(mealListingTemplate({meals}));
  writeReview();
  $(".reviews-button").on('click', getReviewsApi.getReviews);
};

module.exports = {
                displayMeals,
                getLunch,
                getBreakfast,
                getDinner
              };
