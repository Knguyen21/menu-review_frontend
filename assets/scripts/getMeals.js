'use strict';

let getReviewsApi= require('./getReviews');


const myApp = {
  baseURL: 'http://localhost:3000'
};
//
// console.log('Restaurant ID: ' + restaurantID);
// //
// let getBreakfast= function(restaurant_id){
let getBreakfast= function(restaurantID){
  $.ajax({
    // ToDo: need to make a function to update ID
        // url: myApp.baseURL + '/restaurants/' + restaurant_id + '/meals?meal_type=breakfast',
    url: myApp.baseURL + '/restaurants/' + restaurantID + '/meals?meal_type=breakfast',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get request');
    displayMeals(response,'#breakfast');
  });
};

let getLunch= function(restaurantID){
  $.ajax({
    // ToDo: need to make a function to update ID
    url: myApp.baseURL + '/restaurants/'+ restaurantID +'/meals?meal_type=lunch',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get request');
    displayMeals(response,'#lunch');
  });
};

let getDinner= function(restaurantID){

  $.ajax({
    // ToDo: need to make a function to update ID
        // url: myApp.baseURL + '/restaurants/' + restaurant_id + '/meals?meal_type=breakfast',
    url: myApp.baseURL + '/restaurants/'+ restaurantID +'/meals?meal_type=dinner',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get request');
    displayMeals(response,'#dinner');
  });
};

let displayMeals = function(response, meal_type){
  let meals = response.meals;

  console.log("yes");
  let mealListingTemplate = require('./meal-listing.handlebars');
  $(meal_type).html(mealListingTemplate({meals}));
    //get meal id from write review button
  $('.write-review').on('click', function(e){
    e.preventDefault();
    // debugger;
    let mealId = $(this).attr('data-id');
    $('.write-review-button').attr('data-id', mealId);
    $('#write-review').modal('show');

  });


  console.log(response.meals);
  $(".reviews-button").on('click', getReviewsApi.getReviews);
};

module.exports = {
                displayMeals,
                getLunch,
                getBreakfast,
                getDinner
              };
