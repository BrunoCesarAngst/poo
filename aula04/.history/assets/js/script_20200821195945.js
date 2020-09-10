$(document).ready(function() {
  home();
  $('#home').click(function() {
    home();
  });
  $('#sobre').click(function() {
    sobre();
  });
  $('#form').click(function() {
    form();
  });
});

function home() {
  $('section').html('<h1>Home</h1>');
}

function sobre() {
  $('section').html('<h1>Sobre</h1>');
}

function form() {
  $('section').load('views/form.html');
}