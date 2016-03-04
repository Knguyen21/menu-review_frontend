'use strict';

var userApi= require('./user-api');


var updateReview = function(e) {
  e.preventDefault();
  var reviewID = $('.update-review-button').attr('data-review-id');
  var formData = new FormData(e.target);
  $.ajax({
    url: userApi.myApp.baseURL + "/reviews/" +reviewID,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + userApi.myApp.user.token,
    },
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    $('#update-review').modal('hide');
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};


module.exports = {
  updateReview
};
