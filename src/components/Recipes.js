import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = props => {
  const { recipes } = props;
  let keyVal=1;
  let idVal=1;
  return (
    <div className="card-columns">
      {recipes.map(recipe => (
        <RecipeItem
          key={keyVal++}
          ids={idVal++}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default Recipes;
