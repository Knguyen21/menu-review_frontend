'use strict';

var userApi= require('./user-api');

// send a delete ajax request to delete a review that the user who signed in created
//when he/she click on the delete button in the reviews form
var deleteReview = function(e) {
  e.preventDefault();
  var reviewID = $('.delete-review-button').attr('data-review-id');
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
      console.log(data);
    }).fail(function(jqxhr) {
      console.log(jqxhr);
    });
  };


module.exports = {
  deleteReview
};
