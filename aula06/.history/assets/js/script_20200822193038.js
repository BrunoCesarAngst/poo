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
  $('section').html(`
  <table>
    <tr>
      <th>nome</th>
      <th>email</th>
      <th>assunto</th>
    </tr>
    <tr>
      <td>${nome}</td>
      <td>${email}</td>
      <td>${assunto}</td>
    </tr>
  </table>
  `)
}

function sobre() {
  $('section').html('<h1>Sobre</h1>');
}

function form() {
  $('section').load('views/form.html', onSubmit);
  
}

function onSubmit() {
  $('form').submit(function(){
    home();
    alert("Submitted");
    let nome = $("#nome").val();
    let email = $("#email").val();
    let assunto = $("#assunto").val();
  })
}

class DataRsp {
  constructor(nome, email, text) {
    this.nome = nome
    this.email = email
    this.
  }
}