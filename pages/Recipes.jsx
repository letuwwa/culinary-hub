import { useEffect, useState } from "react";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch("https://dummyjson.com/recipes");

      const data = await response.json();
      setRecipes(data.recipes);
    }

    getRecipes();
  }, []);

  return (
    <>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          {recipe.name}, {recipe.ingredients}
        </div>
      ))}
    </>
  );
}
