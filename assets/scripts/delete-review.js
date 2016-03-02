'use strict';

let userApi= require('./user-api');


//
let deleteReview = function(e) {
  // debugger;
  e.preventDefault();
  console.log("delete button works");
  let reviewID = $('.delete-review-button').attr('data-review-id')
  console.log('delete review id: ' + reviewID);

  let formData = new FormData(e.target);
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
      console.log("writing review");
      $('#delete-review').modal('hide');
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  };


module.exports = {
  deleteReview
};
