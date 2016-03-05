'use strict';


const myApp = {
  baseURL: 'http://localhost:3000'
};

var getMealsApi= require('./getMeals');

// display the restaurants' names when you click on the restaruant toggle-down button
var displayRestaurants = function(response){
  var restaurants = response.restaurants;
  var restaurantListingTemplate = require('./restaurant-listing.handlebars');
  $('.restaurant-listing').html(restaurantListingTemplate({restaurants}));
};

// get all the meals data from a certain restaurant that you clicked
var displayRestaurantMeals = function(restaurantID) {
  getMealsApi.getMeals(restaurantID, 'breakfast', '#breakfast');
  getMealsApi.getMeals(restaurantID, 'lunch', '#lunch');
  getMealsApi.getMeals(restaurantID, 'dinner', '#dinner');
};

//hide the homepage image and display the restuarnt menu from a certain restaurant
var getMealsMenu = function(){
  $('.restaurant-link').on('click',function(e){
    e.preventDefault();
    var restaurantID = $(this).attr('data-restaurant-id');
    displayRestaurantMeals(restaurantID);
    $('.homepage').hide();
    $('.menu').show();
  });
};

// send an ajax get request for the restaurant data
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
