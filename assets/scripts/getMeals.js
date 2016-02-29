'use strict';

let getReviewsApi= require('./getReviews');

const myApp = {
  baseURL: 'http://localhost:3000'
};

//
// let getBreakfast= function(restaurant_id){
let getBreakfast= function(){
  $.ajax({
    // ToDo: need to make a function to update ID
        // url: myApp.baseURL + '/restaurants/' + restaurant_id + '/meals?meal_type=breakfast',
    url: myApp.baseURL + '/restaurants/1/meals?meal_type=breakfast',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get request');
    displayMeals(response,'#breakfast');
  });
};


let getLunch= function(){
  $.ajax({
    // ToDo: need to make a function to update ID
    url: myApp.baseURL + "/restaurants/1/meals?meal_type=lunch",
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get request');
    displayMeals(response,'#lunch');
  });
};

let displayMeals = function(response, meal_type){
  let meals = response.meals;
  console.log("yes");
  let mealListingTemplate = require('./meal-listing.handlebars');
  $(meal_type).html(mealListingTemplate({meals}));

  console.log(response.meals);
  $(".reviews-button").on('click', getReviewsApi.getReviews);
};

module.exports = {
                displayMeals,
                getLunch,
                getBreakfast
              };