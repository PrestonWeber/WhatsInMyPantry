$(document).ready(function() {
  $.get("/api/recipes", function(recipesData) {
    if (recipesData.length !== 0) {
      for (i = 0; i < recipesData.length; i++) {
        var recipes = recipesData[i].title;
        console.log(recipes);

        var recipeColumn = $("<div>");
        recipeColumn.addClass("col-md-3");

        var card = $("<div>");
        card.addClass("card");

        var button = $("<button>");
        button.addClass("savedRecipes");

        var link = $("<a>");
        link.attr("href", recipes);
        var name = recipes.split("/")[4];
        if (name === "recipe") {
          name = recipes.split("/")[5];
        }
        link.text(name);

        button.append(link);
        card.append(button);
        $(recipeColumn).append(card);
        var recipeDiv = $(".row");
        $(recipeDiv).append(recipeColumn);
      }
    }
  })
});
