import { Link } from "react-router-dom";

export function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <div>
        <Link to={`/recipes/${recipe.id}`}>
          <h3>{recipe.name}</h3>
        </Link>
        <p>{recipe.ingredients.slice(0, 4).join(", ")}</p>
      </div>
    </article>
  );
}
