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
  $('section').load('views/form.html', onSubmit, function() {
    $('#sendFormButton').click(function() {
      let name = $("#name").val();
      let email = $("#email").val();
      let subject = $("#subject").val();
      let phone = $("#phone").val();
      let cep = $("#cep").val();
    });
  });
}

function onSubmit() {
  $('form').submit(function(){
    // alert("Submitted");
    let name = $("#name").val();
    let email = $("#email").val();
    let subject = $("#subject").val();
    let phone = $("#phone").val();
    let cep = $("#cep").val();

    

    let dataRsp = new DataRsp(name, email, subject, load, phone);

    $('section').load('views/formRsp.html', function() {
      $('#name').html(dataRsp.name);
      $('#email').html(dataRsp.email);
      $('#subject').html(dataRsp.subject);
    });
  });
}

class DataRsp {
  constructor(name, email, subject, local, phone) {
    this.name = name
    this.email = email
    this.subject = subject
    this.local = local
    this.phone = phone
  }
}