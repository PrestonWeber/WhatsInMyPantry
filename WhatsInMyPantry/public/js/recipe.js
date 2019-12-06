$(document).ready(function() {
  console.log("bitchass");
  var recipes = [];

  function favoriteFunction() {
    var element = $(".card");
    element.classList.toggle("favorite");
  }
  $(".recipe").on("click", function() {
    favoriteFunction();
  });
});
