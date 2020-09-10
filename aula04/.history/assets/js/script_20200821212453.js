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
  $('section').html('<h1>oi</h1>'
  // <table>
  //   <tr>
  //     <th>nome</th>
  //     <th>email</th>
  //     <th>assunto</th>
  //   </tr>
  //   <tr>
  //     <td>nome</td>
  //     <td>email</td>
  //     <td>assunto</td>
  //   </tr>
  // </table>
  );
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
  var nome = $("#nome").val();
  var email = $("#email").val();
  var assunto = $("#assunto").val();
})
;