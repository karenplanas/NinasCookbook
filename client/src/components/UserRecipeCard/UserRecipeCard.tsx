import React from 'react'

import './UserRecipeCard.css'
import { Recipe } from '../../interfaces/Recipe'
import { Link } from 'react-router-dom'
import { useRecipeApiClient } from '../../services/ApiClient'

interface Props {
  recipe: Recipe, 
  handleDelete: (id: string) => void
}

const UserRecipeCard: React.FC<Props> = ({recipe, handleDelete}) => {

  return (
    <div className='UserRecipeCard'>
      <div className='UserRecipeCard-image-container'>Image</div>
      <div className='user-recipe-details'>
        <p><span>Name: </span>{recipe.name}</p>
        <p><span>Description: </span>{recipe.description}</p>
        <p><span>Servings: </span>{recipe.serving}</p>
        <div className='userRecipeCard-options'>
          <Link to={`/recipes/${recipe._id}`}><div><p>More...</p></div></Link>
          <div><p>Edit</p></div>
          <div onClick={() => handleDelete(recipe._id)}><p>Remove</p></div>
        </div>
      </div>
    </div>
  )
}

export {UserRecipeCard}