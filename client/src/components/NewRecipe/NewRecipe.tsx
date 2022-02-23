import React from 'react'
import { Button } from '../Button/Button'
import { InputField } from '../InputField/InputField'
import './NewRecipe.css'

const NewRecipe: React.FC = () => {
  return(
    <div className='new-recipe'>
      <h3>Create new recipe</h3>
      <form>

        <div className='info'>
          <h4>Informations</h4>
          <div className='inputs'>
            <InputField className="input-field" type="text"label="Recipe Name" name="name" />
            <InputField className="input-field text-area" type="text" label="Description / Notes" name="name" />
          </div>
        </div>

        <div className='info'>
          <h4>Ingredients</h4>
          <div className='inputs'>
            <InputField className="input-field" type="text" label="Name" name="name" />
            <InputField className="input-field" type="number"label="Quantity" name="name" />
            <InputField className="input-field" type="number"label="Unit" name="name" />
          </div>
        </div>
       
        <div className='info'>
          <h4>Preparation</h4>
          <div className='inputs'>
            <InputField className="input-field" type="text"label="Step Name / Number" name="name" />
            <InputField className="input-field text-area" type="text" label="Description" name="name" />
          </div>
        </div>

       <div className='buttons'>
          <Button className="outlined"name="Cancel"/>
          <Button className="contained" name="Save"/>
       </div>

      </form>
    </div>
  )
}

export {NewRecipe}