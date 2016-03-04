'use strict';


const myApp = {
  baseURL: 'http://localhost:3000'
};

var getMealsApi= require('./getMeals');


var getRestaurants= function(){
  $.ajax({
    url: myApp.baseURL + '/restaurants',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get Restaurant request');
    displayRestaurants(response);
    getMealsMenu(response);
  });
};

var displayRestaurants = function(response){
  var restaurants = response.restaurants;
  console.log("restaurant listings");
  var restaurantListingTemplate = require('./restaurant-listing.handlebars');
  $('.restaurant-listing').html(restaurantListingTemplate({restaurants}));
};

var displayRestaurantMeals = function(restaurantID) {
  getMealsApi.getLunch(restaurantID);
  getMealsApi.getBreakfast(restaurantID);
  getMealsApi.getDinner(restaurantID);
};

var getMealsMenu = function(){
  $('.restaurant-link').on('click',function(e){
    e.preventDefault();
    var restaurantID = $(this).attr('data-restaurant-id');
    // console.log(restaurantID);
    // console.log("the link button works");
    displayRestaurantMeals(restaurantID);
    $('.homepage').hide();
    $('.menu').show();
  });
};


module.exports = {
                displayRestaurants,
                getRestaurants
              };
