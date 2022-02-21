import React from "react";
import { Recipe } from "../../interfaces/Recipe";
import { RecipeBoardCard } from "../RecipeBoardCard/RecipeBoardCard";

interface Props {
  listTitle: string;
  recipesList: Recipe[];
}

const RecipesList: React.FC<Props> = ({listTitle, recipesList}) => { 
  const recipes = recipesList;
  return (
    <div>
      <h2>{listTitle}</h2>
      <ul className="list"> {
        recipes.map((r) => (
          <li key={r.id}>
            <RecipeBoardCard recipe={r}/>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export {RecipesList}