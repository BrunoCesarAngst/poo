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
    $('#sendFormButton').click();
  });
}

function onSubmit() {
  $('form').submit(function(){
    // alert("Submitted");
    let name = $("#name").val();
    let email = $("#email").val();
    let subject = $("#subject").val();

    let dataRsp = new DataRsp(name, email, subject);

    $('section').load('views/formRsp.html', function() {
      $('#name').html(dataRsp.name);
      $('#email').html(dataRsp.email);
      $('#subject').html(dataRsp.subject);
    });
  });
}

class DataRsp {
  constructor(name, email, subject) {
    this.name = name
    this.email = email
    this.subject = subject
  }
}