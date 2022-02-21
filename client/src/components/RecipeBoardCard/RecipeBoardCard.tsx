import React from "react";
import { Recipe } from "../../interfaces/Recipe";
import './RecipeBoardCard.css'

interface Props {
  recipe: Recipe
}

const RecipeBoardCard: React.FC<Props> = ({recipe}) => {
  return (
    <div className="recipe-board-card">
        <h3>{recipe.name}</h3>
        <img src={String(recipe.pictures[0].url)} alt='plate'/>
    </div>
  )
}

export {RecipeBoardCard}