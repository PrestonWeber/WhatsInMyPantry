$(document).ready(function() {
  $.get("/api/recipes", function(recipesData) {
    if (recipesData.length !== 0) {
      for (i = 0; i < recipesData.length; i++) {
        var recipes = recipesData[i].title;

        var recipeColumn = $("<div>");
        recipeColumn.addClass("col-md-3");

        var card = $("<div>");
        card.addClass("card");

        var button = $("<button>");
        button.addClass("savedRecipes");

        var delBtn = $("<button>");
        delBtn.attr("class", "delRecipe");

        var link = $("<a>");
        link.attr("href", recipes);
        var name = recipes.split("/")[4];
        if (name === "recipe") {
          name = recipes.split("/")[5];
        }
        link.text(name);

        button.append(link);
        card.append(button);
        card.append(delBtn);
        $(recipeColumn).append(card);
        var recipeDiv = $(".row");
        $(recipeDiv).append(recipeColumn);
      }
      $(document).on("click", ".delRecipe", function(e) {
        var target = e.target.parentNode.children[0].children[0].text;
        console.log(target);
        for (j = 0; j < recipesData.length; j++) {
          var recipeData = recipesData[j].title.split("/")[4];
          var recipeId = recipesData[j].id;

          if (target === recipeData) {
            deleteRecipe(recipeId);
          }
        }
      });
    }
  });

  function deleteRecipe(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/recipes/" + id
    }).then(function(err) {
      console.log(err);
      console.log("done");
      window.location.reload();
    });
  }
});
