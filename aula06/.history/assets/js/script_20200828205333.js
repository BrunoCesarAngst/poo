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

      getLocal(cep, function(local) {
        let dataRsp = new DataRsp(name, email, subject, local, phone);
      
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

// function onSubmit() {
//   $('form').submit(function(){
//     // alert("Submitted");
//     let name = $("#name").val();
//     let email = $("#email").val();
//     let subject = $("#subject").val();
//     let phone = $("#phone").val();
//     let cep = $("#cep").val();

//     let local = getLocal(cep);

//     let dataRsp = new DataRsp(name, email, subject, load, phone);

//     $('section').load('views/formRsp.html', function() {
//       $('#name').html(dataRsp.name);
//       $('#email').html(dataRsp.email);
//       $('#subject').html(dataRsp.subject);
//     });
//   });
// }

function getLocal(cep, callBack) {
  $.getJSON('http://viacep.com.br/ws/'+ localidade +'/json', function(data) {
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