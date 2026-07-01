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
    <section>
      <h2>Recipes</h2>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <article className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <div>
              <h3>{recipe.name}</h3>
              <p>{recipe.ingredients.slice(0, 4).join(", ")}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
