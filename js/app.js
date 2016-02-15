$(document).ready(function() {

  $("#formSubmit").click(function() {
    var newItem = $("#itemInput").val();
    $("#itemInput").val("");
    $("#list").append("<li><input type='checkbox'/>" + newItem + 
      "<button class='remove'>x</button></li>");
    return false;
  })

})

$(document).on('click', '.remove', function() {
  $(this).parent().remove();
})