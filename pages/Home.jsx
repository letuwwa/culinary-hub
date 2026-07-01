import { useEffect, useState } from "react";
import { RecipeCard } from "../components/RecipeCard.jsx";

export default function Home() {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getRandomRecipe() {
      try {
        const randomRecipeId = Math.floor(Math.random() * 10) + 1;
        const response = await fetch(
          `https://dummyjson.com/recipes/${randomRecipeId}`,
        );
        const data = await response.json();

        setRecipe(data);
      } catch {
        setError("Could not load a random recipe.");
      }
    }

    getRandomRecipe();
  }, []);

  return (
    <section className="hero">
      <h2>Cook something good today</h2>
      <p>Browse simple recipes, collect ideas, and keep dinner moving.</p>

      {error && <p className="error">{error}</p>}

      {recipe && (
        <div className="featured-recipe">
          <RecipeCard recipe={recipe} />
        </div>
      )}
    </section>
  );
}
