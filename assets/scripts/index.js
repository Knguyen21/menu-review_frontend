'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
let getMealsApi= require('./getMeals');
let userApi= require('./user-api');





$(document).ready(function(){
  userApi.init();
  $('.menu').hide();

   $("#rest1").on('click',function(){
     getMealsApi.getLunch();
     getMealsApi.getBreakfast();
       $('.homepage').hide();
       $('.menu').show();
   });

  $(".navbar-brand").on('click',function(){
      $('.homepage').show();
      $('.menu').hide();
  });

});
