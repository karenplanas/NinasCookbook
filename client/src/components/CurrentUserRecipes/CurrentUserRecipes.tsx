import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext'
import { Recipe } from '../../interfaces/Recipe'
import { fetchUserRecipes, useRecipeApiClient } from '../../services/ApiClient'
import { DeleteIcon } from '../icons/DeleteIcon'
import { LayoutNav } from '../LayoutNav/LayoutNav'
import { UserRecipeCard } from '../UserRecipeCard/UserRecipeCard'
import './CurrentUserRecipes.css'


const CurrentUserRecipes : React.FC = () => {

  const { user } = useUserContext();
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = () => {
    fetchUserRecipes(user)
    .then((userRecipes) => setUserRecipes(userRecipes));
  }

  useEffect(()=>{
    fetchRecipes()
  }, [])

  const { deleteRecipe } = useRecipeApiClient();
  

  const onDelete = async (recipeId: string) => {
    await deleteRecipe(recipeId);
    fetchRecipes()
  }

  return (
    <LayoutNav>
      <div className='CurrentUserRecipes'>
        <h3>My Recipes</h3>
        {
          userRecipes.map((r)=>(
            <UserRecipeCard recipe={r} key={r._id} handleDelete={onDelete}/>
          ))
        }
      </div>
    </LayoutNav>
  )
}

export {CurrentUserRecipes}
