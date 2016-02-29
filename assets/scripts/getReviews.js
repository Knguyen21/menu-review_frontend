'use strict';

const myApp = {
  baseURL: 'http://localhost:3000'
};

let getReviews= function(e){
  // let meal_id = require('./meal-listing.handlebars');
  let mealId = $(this).parent().data('meal-id');
  console.log('meal id: ' + mealId);
  $.ajax({
    url: myApp.baseURL + "/meals/" + mealId + "/reviews",
    method: 'GET',

    dataType: 'json'
  }).done(function(response){
    console.log('Get request');
    displayReviews(response,'#userReviews');
  });
};


let displayReviews= function(response, review){
  let reviews = response.reviews;
     console.log("yes reviews");
    let reviewListingTemplate = require('./review-listing.handlebars');
        $(review).html(reviewListingTemplate({
            reviews
          }));

  console.log(response.meals);
};


module.exports = {
                displayReviews,
                getReviews,
              };
