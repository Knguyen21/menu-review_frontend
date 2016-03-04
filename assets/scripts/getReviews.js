'use strict';

const myApp = {
  baseURL: 'http://localhost:3000'
};

var updateMealReview= function(){
  $('.update-review').on('click', function(e){
    e.preventDefault();
    var reviewId = $(this).attr('data-review-id');
    $('.update-review-button').attr('data-review-id', reviewId);
    $('#update-review').modal('show');
  });
};

var deleteMealReview = function() {
  $('.delete-review').on('click', function(e){
    e.preventDefault();
    var reviewId = $(this).attr('data-review-id');
    $('.delete-review-button').attr('data-review-id', reviewId);
    $('#delete-review').modal('show');
  });
};

var displayReviews= function(response, review){
  var reviews = response.reviews;
  var reviewListingTemplate = require('./review-listing.handlebars');
  $(review).html(reviewListingTemplate({reviews}));
  deleteMealReview();
  updateMealReview();
};

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
