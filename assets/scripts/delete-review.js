'use strict';

var userApi= require('./user-api');

var deleteReview = function(e) {
  e.preventDefault();
  var reviewID = $('.delete-review-button').attr('data-review-id')
  var formData = new FormData(e.target);
  $.ajax({
    url: userApi.myApp.baseURL + "/reviews/" +reviewID,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + userApi.myApp.user.token,
      },
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      $('#delete-review').modal('hide');
    }).fail(function(jqxhr) {
    });
  };


module.exports = {
  deleteReview
};
