$(document).ready(function() {
  home();
  $('#home').click(function() {
    home();
  });
  $('#sobre').click(function() {
    sobre();
  });
  $('#conta').click(function() {
    conta();
  });
});

function home() {
  $('section').html('<h1>Home</h1>');
}