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
    let sub = $("#sub").val();

    let dataRsp = new DataRsp(nome, email, sub);

    $('section').load('views/formRsp.html', function() {
      $('#nome').html(dataRsp.nome);
      $('#email').html(dataRsp.email);
      $('#sub').html(dataRsp.sub);
    });
  });
}

class DataRsp {
  constructor(nome, email, sub) {
    this.nome = nome
    this.email = email
    this.sub = sub
  }
}