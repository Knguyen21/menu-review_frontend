'use strict';

let userApi= require('./user-api');


//
let createReview = function(e) {
  // debugger;
  console.log("button works");
  let mealId = $('.write-review-button').attr('data-id');
  // $('.write-review-button').attr('data-id', mealId);
  // $('.write-review-button').attr('data-id', mealId);
  console.log('meal id: ' + mealId);

  let formData = new FormData(e.target);
  console.log(formData);
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
      console.log("writing review");
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  };

    // console.log(response.meals);


module.exports = {
  createReview
};
