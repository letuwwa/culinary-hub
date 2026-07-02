import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RecipeCard } from "../components/RecipeCard.jsx";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getRecipe() {
      setError("");

      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();

        setRecipe(data);
      } catch {
        setError("Could not load this recipe.");
      }
    }

    getRecipe();
  }, [id]);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!recipe) {
    return <p className="panel">Loading recipe...</p>;
  }

  return (
    <section className="recipe-detail">
      <aside className="recipe-detail-card">
        <RecipeCard recipe={recipe} />
      </aside>

      <div className="recipe-detail-info">
        <div className="page-title">
          <div>
            <h2>{recipe.name}</h2>
            <p>
              {recipe.cuisine} cuisine · {recipe.difficulty} · {recipe.servings} servings
            </p>
          </div>
        </div>

        <div className="recipe-stats">
          <span>{recipe.prepTimeMinutes} min prep</span>
          <span>{recipe.cookTimeMinutes} min cook</span>
          <span>{recipe.caloriesPerServing} calories</span>
          <span>
            {recipe.rating} rating ({recipe.reviewCount} reviews)
          </span>
        </div>

        <div className="recipe-detail-section">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="recipe-detail-section">
          <h3>Instructions</h3>
          <ol>
            {recipe.instructions.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
