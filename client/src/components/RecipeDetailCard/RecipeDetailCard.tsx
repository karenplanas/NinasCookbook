import React from "react";
import { Recipe } from "../../interfaces/Recipe";
import './RecipeDetailCard.css'

interface Props {
  recipe: Recipe
}

const RecipeDetailCard: React.FC<Props> = ({recipe}) => {
  return (
    <div className="recipe-card">
      <div className="text">
        <h3>{recipe.name}</h3>
        <p className="titles">Ingredients:</p>
        <ul className="ingredients"> {
          recipe.ingredients.map((i) => (
            <li key={i._id}>
              <p>{i.quantity} {i.name}</p>
            </li>
          ))
        }
        </ul>
        <p className="titles">Steps:</p>
        <ul className="steps"> {
          recipe.steps.map((s) => (
            <li key={s._id}>
              <p><span className="step">{s.name}:</span> {s.content}</p>
            </li>
          ))
        }
        </ul>
        <p className="titles">Serving: {recipe.serving}</p>
      </div>
      <div className="imag">
        
      </div>

    </div>
  )
}

export {RecipeDetailCard}