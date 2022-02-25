import React from 'react'
import { Button } from '../Button/Button'
import { InputTextField } from '../InputTextField/InputTextField'
import { LayoutNav } from '../LayoutNav/LayoutNav'
import './NewRecipe.css'

const NewRecipe: React.FC = () => {
  return (
    <LayoutNav>
      <div className='new-recipe'>
        <h3>Create new recipe</h3>
        <form>

          <div className='info'>
            <h4>Informations</h4>
            <div className='inputs'>
              <InputTextField type="text"label="Recipe Name" name="name" />
              <InputTextField rows={3} label="Description / Notes" name="name" />
            </div>
          </div>

          <div className='info'>
            <h4>Ingredients</h4>
            <div className='inputs'>
              <InputTextField type="text" label="Name" name="name" />
              <InputTextField type="number" label="Quantity" name="quantity" />
              <InputTextField type="number" label="Unit" name="unit" />
            </div>
          </div>
        
          <div className='info'>
            <h4>Preparation</h4>
            <div className='inputs'>
              <InputTextField type="text"label="Step Name / Number" name="step" />
              <InputTextField type="text" label="Description" name="description" />
            </div>
          </div>

        <div className='buttons'>
          <Button className="outlined" name="Cancel"/>
          <Button className="contained" name="Save"/>
        </div>

        </form>
      </div>
    </LayoutNav>
  )
}

export {NewRecipe}