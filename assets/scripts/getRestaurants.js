'use strict';


const myApp = {
  baseURL: 'http://localhost:3000'
};

var getMealsApi= require('./getMeals');


var displayRestaurants = function(response){
  var restaurants = response.restaurants;
  var restaurantListingTemplate = require('./restaurant-listing.handlebars');
  $('.restaurant-listing').html(restaurantListingTemplate({restaurants}));
};

var displayRestaurantMeals = function(restaurantID) {
  getMealsApi.getMeals(restaurantID, 'breakfast', '#breakfast');
  getMealsApi.getMeals(restaurantID, 'lunch', '#lunch');
  getMealsApi.getMeals(restaurantID, 'dinner', '#dinner');
};

var getMealsMenu = function(){
  $('.restaurant-link').on('click',function(e){
    e.preventDefault();
    var restaurantID = $(this).attr('data-restaurant-id');
    displayRestaurantMeals(restaurantID);
    $('.homepage').hide();
    $('.menu').show();
  });
};


var getRestaurants= function(){
  $.ajax({
    url: myApp.baseURL + '/restaurants',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    displayRestaurants(response);
    getMealsMenu(response);
  });
};


module.exports = {
  displayRestaurants,
  displayRestaurantMeals,
  getMealsMenu,
  getRestaurants
};
