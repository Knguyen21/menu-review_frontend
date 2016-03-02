'use strict';

let userApi= require('./user-api');


//
let updateReview = function(e) {
  // debugger;
  e.preventDefault();
  console.log("update button works");
  let reviewID = $('.update-review-button').attr('data-review-id');
  console.log('update review id: ' + reviewID);

  let formData = new FormData(e.target);
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
      console.log("update review");
      $('#update-review').modal('hide');
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  };


module.exports = {
  updateReview
};
