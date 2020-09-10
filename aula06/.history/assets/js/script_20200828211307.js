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
  $('section').load('views/form.html', function() {
    $('#sendFormButton').click(function() {
      let name = $("#name").val();
      let email = $("#email").val();
      let subject = $("#subject").val();
      let phone = $("#phone").val();
      let cep = $("#cep").val();

      getLocal(cep, function(local) {
        let dataRsp = new DataRsp(name, email, subject, phone, local);
      
        $('section').load('views/formRsp.html', function() {
          $('#name').html(dataRsp.name);
          $('#email').html(dataRsp.email);
          $('#subject').html(dataRsp.subject);
          $('#phone').html(dataRsp.phone);
          $('#local').html(dataRsp.local);
        });
      });      
    });
  });
}

function getLocal(cep, callBack) {
  $.getJSON('http://viacep.com.br/ws/'+ cep +'/json', function(data) {
    console.log(data.localidade);
    return callBack(data.localidade);
  })
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