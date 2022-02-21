import React from "react";
import { Recipe } from "../../interfaces/Recipe";
import './RecipeDetailPage.css'
import { useParams } from 'react-router-dom'

interface Props {}

const RecipeDetailPage: React.FC<Props> = () => {
  const recipe = {} as any as Recipe
  const { recipeId, userId } = useParams()
  // get recipe
  return (
    <div className="recipe-card">
      <div className="text">
        <h3>{recipe.name} {recipeId} {userId}</h3>
        <p className="titles">Ingredients:</p>
        {/* <ul className="ingredients"> {
          recipe.ingredients.map((i) => (
            <li key={i._id}>
              <p>{i.quantity} {i.name}</p>
            </li>
          ))
        }
        </ul> */}
        <p className="titles">Steps:</p>
        {/* <ul className="steps"> {
          recipe.steps.map((s) => (
            <li key={s._id}>
              <p><span className="step">{s.name}:</span> {s.content}</p>
            </li>
          ))
        }
        </ul> */}
        <p className="titles">Serving: {recipe.serving}</p>
      </div>
      <div className="imag">
        
      </div>

    </div>
  )
}

export { RecipeDetailPage }
