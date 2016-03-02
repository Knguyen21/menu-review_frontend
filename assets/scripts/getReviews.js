'use strict';

const myApp = {
  baseURL: 'http://localhost:3000'
};

let getReviews= function(e){
  // let meal_id = require('./meal-listing.handlebars');
  let mealId = $(this).parent().data('meal-id');
  console.log('meal id: ' + mealId);
  $.ajax({
    url: myApp.baseURL + "/meals/" + mealId+ "/reviews",
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
    //  debugger;
    let reviewListingTemplate = require('./review-listing.handlebars');
        $(review).html(reviewListingTemplate({reviews}));
          //get review id from delete button
        $('.delete-review').on('click', function(e){
          e.preventDefault();
          // debugger;
          let reviewId = $(this).attr('data-review-id');
          $('.delete-review-button').attr('data-review-id', reviewId);
          $('#delete-review').modal('show');
        });
        // get review id from update button
        $('.update-review').on('click', function(e){
          e.preventDefault();
          // debugger;
          // let mealId = $(this).attr('data-meal-id');
          // $('.update-review-button').attr('data-meal-id', mealId);
          let reviewId = $(this).attr('data-review-id');
          $('.update-review-button').attr('data-review-id', reviewId);
          $('#update-review').modal('show');
        });

  console.log(response.meals);
};


module.exports = {
                displayReviews,
                getReviews,
              };
