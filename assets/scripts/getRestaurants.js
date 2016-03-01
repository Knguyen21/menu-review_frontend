'use strict';


const myApp = {
  baseURL: 'http://localhost:3000'
};


// let getBreakfast= function(restaurant_id){
let getRestaurants= function(){
  $.ajax({
    // ToDo: need to make a function to update ID
        // url: myApp.baseURL + '/restaurants/' + restaurant_id + '/meals?meal_type=breakfast',
    url: myApp.baseURL + '/restaurants',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get request');
    displayRestaurants(response);
  });
};

let displayRestaurants = function(response){
  let restaurants = response.restaurants;
  console.log("restaurant listings");
  let restaurantListingTemplate = require('./restaurant-listing.handlebars');
  $('#restaurants').html(restaurantListingTemplate({restaurants}));

};

module.exports = {
                displayRestaurants,
                getRestaurants,
              };
