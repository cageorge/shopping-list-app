$(document).ready(function() {

  $("#formSubmit").click(function() {
    var newItem = $("#itemInput").val();
    $("#itemInput").val("");
    $("#list").append("<li><input type='checkbox' class='checkbox'/><span>" + newItem + 
      "</span><button class='remove'>x</button></li>");
    return false;
  })
});

$(document).on('click', '.remove', function() {
  $(this).parent().remove();
});

// $(document).on('click', '.checkbox', function(){
//   console.log($(this));
//   $(this).next().css('text-decoration', "line-through");
// });

$(document).on('click', "input[type='checkbox']", function() {
  if (this.checked) {
    $(this).next().addClass("strikethrough");
  } else if (!this.checked) {
    $(this).next().removeClass("strikethrough");
  }
});


