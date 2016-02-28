'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

let getMeals= function(){
  $.ajax({
    url: "http://localhost:3000/meals",
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log('Get request');
    displayMeals(response);
  });
};

let displayMeals = function(response){
  let meals = response.meals;
  let mealListingTemplate = require('./meal-listing.handlebars');
      $('.meals').append(mealListingTemplate({
          meals
        }));

  console.log(response.meals);
};

$(document).ready(function(){
  $("#rest1").on('click',function(){
    getMeals();
      $('.meals').show();
  });
});
