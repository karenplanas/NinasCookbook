import React from 'react'

import './UserRecipeCard.css'
import { Recipe } from '../../interfaces/Recipe'

interface Props {
  recipe: Recipe
}

const UserRecipeCard: React.FC<Props> = ({recipe}) => {
  return (
    <div className='UserRecipeCard'>
      <div className='UserRecipeCard-image-container'>Image</div>
      <div className='user-recipe-details'>
        <p><span>Name: </span>{recipe.name}</p>
        <p><span>Description: </span>{recipe.description}</p>
        <p><span>Servings: </span>{recipe.serving}</p>
        <div className='userRecipeCard-options'>
          <div><p>More...</p></div>
          <div><p>Edit</p></div>
          <div><p>Remove</p></div>
        </div>
      </div>
    </div>
  )
}

export {UserRecipeCard}