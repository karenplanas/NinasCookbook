import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigateIfNotAuthenticated } from '../../contexts/UserContext'
import { Recipe } from '../../interfaces/Recipe'
import { useRecipeApiClient } from '../../services/ApiClient'
import { LayoutNav } from '../LayoutNav/LayoutNav'
import { UserRecipeCard } from '../UserRecipeCard/UserRecipeCard'
import './CurrentUserRecipes.css'


const CurrentUserRecipes : React.FC = () => {

  useNavigateIfNotAuthenticated();
  // const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);

  // const fetchRecipes = () => {
  //   .then((userRecipes) => setUserRecipes(userRecipes));
  // }

  const { deleteRecipe, fetchUserRecipes } = useRecipeApiClient();
  const { data: userRecipes, refetch } = useQuery('fetchUserRecipes', fetchUserRecipes)

  // useEffect(()=>{
  //   fetchRecipes()
  // }, [])

  const onDelete = async (recipeId: string) => {
    await deleteRecipe(recipeId);
    refetch()
  }

  return (
    <LayoutNav>
      <div className='CurrentUserRecipes'>
        <h3>My Recipes</h3>
        {
          userRecipes?.map((r)=>(
            <UserRecipeCard recipe={r} key={r._id} handleDelete={onDelete}/>
          ))
        }
      </div>
    </LayoutNav>
  )
}

export {CurrentUserRecipes}
