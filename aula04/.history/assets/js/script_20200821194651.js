$(document).ready(function() {
  home();
  $('#home').click(function() {
    home();
  });
  $('#sobre').click(function() {
    sobre();
  });
  $('#home').click(function() {
    home();
  });
});

function home() {
  $('section').html('<h1>Home</h1>');
}