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
  $('section').html('<h1>Sobre</h1>');
}
function form() {
  $('section').html('<h1>Contato</h1>');
}