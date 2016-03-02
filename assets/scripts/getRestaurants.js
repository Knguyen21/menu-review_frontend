'use strict';


const myApp = {
  baseURL: 'http://localhost:3000'
};

let getMealsApi= require('./getMeals');

// let getBreakfast= function(restaurant_id){
let getRestaurants= function(){
  $.ajax({
    // ToDo: need to make a function to update ID
        // url: myApp.baseURL + '/restaurants/' + restaurant_id + '/meals?meal_type=breakfast',
    url: myApp.baseURL + '/restaurants',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get Restaurant request');
    displayRestaurants(response);
    getMealsMenu(response);

  });
};

let displayRestaurants = function(response){
  let restaurants = response.restaurants;
  console.log("restaurant listings");
  let restaurantListingTemplate = require('./restaurant-listing.handlebars');
  $('.restaurant-listing').html(restaurantListingTemplate({restaurants}));

  // $('.restaurant-link').on('click', function(e){
  //   e.preventDefault();
  //   // debugger;
  //   let restaurantID = $(this).attr('data-restaurant-id');
  //   $('.restaurant-link').attr('data-restaurant-id', restaurantID);
  //   console.log(restaurantID);
  // });
};

let getMealsMenu = function(){
$('.restaurant-link').on('click',function(e){
  e.preventDefault();
  let restaurantID = $(this).attr('data-restaurant-id');
  console.log("the link button works");
  getMealsApi.getLunch(restaurantID);
  getMealsApi.getBreakfast(restaurantID);
  getMealsApi.getDinner(restaurantID);
    $('.homepage').hide();
    $('.menu').show();
});
};

module.exports = {
                displayRestaurants,
                getRestaurants
              };
