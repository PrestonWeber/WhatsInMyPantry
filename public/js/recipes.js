$(document).ready(function() {
  var recipeColumn = $(".col-md-3");

  $.get("/api/recipes", function(recipesData) {
    if (recipesData.length !== 0) {
      for (i = 0; i < recipesData.length; i++) {
        var recipe = recipesData[i].title;

        var card = $("<div>");
        card.addClass("card");

        var button = $("<button>");
        button.addClass("savedRecipes");

        var link = $("<a>");
        link.attr("href", recipe);
        var name = recipe.split("/")[4];
        link.text(name);
        console.log(name);

        button.append(link);
        card.append(button);
        $(recipeColumn).append(card);
        console.log(card);
      }
    }
  })
});
