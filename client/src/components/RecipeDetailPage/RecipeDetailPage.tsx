import React, { useEffect, useState } from "react";
import { Recipe } from "../../interfaces/Recipe";
import './RecipeDetailPage.css'
import { useParams } from 'react-router-dom'
import { fetchRecipe } from "../../services/ApiClient";
import { LayoutNav } from "../LayoutNav/LayoutNav";

interface Props {}

const RecipeDetailPage: React.FC<Props> = () => {
  const { recipeId } = useParams()
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    fetchRecipe(recipeId)
      .then(result => setRecipe(result))
  }, [recipeId])

  if (!recipe) return null
  return (
    <LayoutNav>
      <div className="recipe-details-card">
        <h2>{recipe.name}</h2>

        <div className="ingredients-image-container">
          <div className="image-container">
            <img src={String(recipe.pictures[0].url)} alt='plate'/>
          </div>
        </div>

        <div className="recipe-detail-page-text-container">

          <div className="ingredients-container">
            <h3 className="titles">Ingredients:</h3>
            <ul className="ingredients"> {
              recipe.ingredients.map((i) => (
                <li key={i._id}>
                  <p>{i.quantity} {i.name}</p>
                </li>
              ))
            }
            </ul>
          </div>

          <div className="preparation-container">
            <h3 className="titles">Preparation:</h3>
            <ul className="steps"> {
              recipe.steps.map((s) => (
                <li key={s._id}>
                  <h4 className="step">{s.name}</h4>
                  <p>{s.content}</p>
                </li>
              ))
            }
            </ul>
          </div>

        </div>

        <div className="serving-container">
          <h3 className="titles">Serving:</h3>
        </div>
        
      </div>
    </LayoutNav>
  )
}

export { RecipeDetailPage }
