$(function(){ 
  var $newButton = $('#newButton');
  var $newForm = $('#newForm');
  var $textInput = $('input:text');

  $newButton.show();
  $newForm.hide();


$('#showForm'.on('click', function(){
  $newButton.hide();
  $newForm.show();
});

$newForm.on('submit', function(e){
  e.preventDefault();
  var newText = $('input:text').val();
  $('li:last').after('<li>' + newText '</li>');
  $newForm.hide();
  $newButton.show();
  $textInput.val('');
});

});


