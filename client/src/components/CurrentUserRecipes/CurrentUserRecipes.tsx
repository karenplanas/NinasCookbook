import React, { useEffect, useState } from 'react'
import { useUserContext } from '../../contexts/UserContext'
import { Recipe } from '../../interfaces/Recipe'
import { fetchUserRecipes } from '../../services/ApiClient'
import { LayoutNav } from '../LayoutNav/LayoutNav'
import { UserRecipeCard } from '../UserRecipeCard/UserRecipeCard'
import './CurrentUserRecipes.css'


const CurrentUserRecipes : React.FC = () => {

  const { user } = useUserContext();
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);

  useEffect(()=>{
    fetchUserRecipes(user)
      .then((userRecipes) => setUserRecipes(userRecipes));
  }, [])

  console.log('userRecipes', userRecipes);

  return (
    <LayoutNav>
      <div className='CurrentUserRecipes'>
        <h3>My Recipes</h3>
        {
          userRecipes.map((r)=>(
            <UserRecipeCard recipe={r} />
          ))
        }
      </div>
    </LayoutNav>
  )
}

export {CurrentUserRecipes}
