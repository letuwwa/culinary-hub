export function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <div>
        <h3>{recipe.name}</h3>
        <p>{recipe.ingredients.slice(0, 4).join(", ")}</p>
      </div>
    </article>
  );
}
