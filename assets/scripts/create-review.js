'use strict';

var userApi= require('./user-api');

var createReview = function(e) {
  var mealId = $('.write-review-button').attr('data-id');
  var formData = new FormData(e.target);
  $.ajax({
    url: userApi.myApp.baseURL + "/meals/" + mealId+ "/reviews",
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + userApi.myApp.user.token,
      },
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      $('#write-review').modal('hide');
      console.log("writing review");
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  };


module.exports = {
  createReview
};
