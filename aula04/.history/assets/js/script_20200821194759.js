$(document).ready(function() {
  home();
  $('#home').click(function() {
    home();
  });
  $('#sobre').click(function() {
    sobre();
  });
  $('#contato').click(function() {
    contato();
  });
});

function home() {
  $('section').html('<h1>Home</h1>');
}
function sobre() {
  $('section').html('<h1>sobre</h1>');
}
function contato() {
  $('section').html('<h1>contato</h1>');
}