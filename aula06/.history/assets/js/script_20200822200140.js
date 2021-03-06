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
  $('section').load('views/form.html', onSubmit);
  
}

function onSubmit() {
  $('form').submit(function(){
    // alert("Submitted");
    let nome = $("#nome").val();
    let email = $("#email").val();
    let assunto = $("#assunto").val();

    let dataRsp = new DataRsp(nome, email, assunto);

    $('section').load('views/formRsp.html', function() {
      $('#nome').html(dataRsp.nome);
      $('#email').html(dataRsp.email);
      $('#assunto').html(dataRsp.assunto);
    });
  });
}

class DataRsp {
  constructor(nome, email, assunto) {
    this.nome = nome
    this.email = email
    this.assunto = assunto
  }
}