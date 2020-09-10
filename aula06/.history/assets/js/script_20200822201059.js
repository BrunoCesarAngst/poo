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
    let subj = $("#subj").val();

    let dataRsp = new DataRsp(nome, email, subj);

    $('section').load('views/formRsp.html', function() {
      $('#nome').html(dataRsp.nome);
      $('#email').html(dataRsp.email);
      $('#subj').html(dataRsp.subj);
    });
  });
}

class DataRsp {
  constructor(nome, email, subj) {
    this.nome = nome
    this.email = email
    this.subj = subj
  }
}