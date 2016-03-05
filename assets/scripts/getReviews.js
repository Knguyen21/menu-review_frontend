'use strict';

const myApp = {
  baseURL: 'http://localhost:3000'
};

// display the update review form when you click on the update button for a specific review
var updateMealReview= function(){
  $('.update-review').on('click', function(e){
    e.preventDefault();
    var reviewId = $(this).attr('data-review-id');
    $('.update-review-button').attr('data-review-id', reviewId);
    $('#update-review').modal('show');
  });
};

// display the delete review modal when you click on the delete button for a specific review
var deleteMealReview = function() {
  $('.delete-review').on('click', function(e){
    e.preventDefault();
    var reviewId = $(this).attr('data-review-id');
    $('.delete-review-button').attr('data-review-id', reviewId);
    $('#delete-review').modal('show');
  });
};

// display the reviews when you click on the review button for a certain restaurant's meal
var displayReviews= function(response, review){
  var reviews = response.reviews;
  var reviewListingTemplate = require('./review-listing.handlebars');
  $(review).html(reviewListingTemplate({reviews}));
  deleteMealReview();
  updateMealReview();
};

// send an ajax get request to get all the reviews data from the backend
var getReviews= function(){
  var mealId = $(this).parent().data('meal-id');
  $.ajax({
    url: myApp.baseURL + "/meals/" + mealId+ "/reviews",
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    displayReviews(response,'#userReviews');
  });
};


module.exports = {
  displayReviews,
  getReviews,
};
