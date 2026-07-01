import { useEffect, useState } from "react";
import { RecipeCard } from "../components/RecipeCard.jsx";

const LIMIT = 8;

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const currentPage = skip / LIMIT + 1;
  const totalPages = Math.ceil(total / LIMIT);
  const canGoBack = skip > 0;
  const canGoForward = skip + LIMIT < total;

  useEffect(() => {
    async function getRecipes() {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://dummyjson.com/recipes?limit=${LIMIT}&skip=${skip}`,
        );

        const data = await response.json();
        setRecipes(data.recipes);
        setTotal(data.total);
      } catch {
        setError("Could not load recipes. Try again in a moment.");
      } finally {
        setIsLoading(false);
      }
    }

    getRecipes();
  }, [skip]);

  function goToPreviousPage() {
    setSkip((currentSkip) => Math.max(currentSkip - LIMIT, 0));
  }

  function goToNextPage() {
    setSkip((currentSkip) => currentSkip + LIMIT);
  }

  return (
    <section>
      <div className="page-title">
        <div>
          <h2>Recipes</h2>
          <p>
            Page {currentPage} of {totalPages || 1}
          </p>
        </div>

        <div className="pagination">
          <button disabled={!canGoBack || isLoading} onClick={goToPreviousPage}>
            Previous
          </button>
          <button disabled={!canGoForward || isLoading} onClick={goToNextPage}>
            Next
          </button>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
