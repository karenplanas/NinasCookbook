import React from 'react'
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';

import './NewRecipe.css'
import { Button } from '../Button/Button'
import { IngredientRow } from './IngredientRow/IngredientRow'
import { InputTextArea, InputTextField } from '../InputTextField/InputTextField'
import { LayoutNav } from '../LayoutNav/LayoutNav'
import { Recipe } from '../../interfaces/Recipe';
import { useRecipeApiClient } from '../../services/ApiClient'
import { useNavigate } from 'react-router-dom';
import { useNavigateIfNotAuthenticated } from '../../contexts/UserContext';

const NewRecipe: React.FC = () => {

  useNavigateIfNotAuthenticated();

  const methods = useForm<Recipe>({
    defaultValues: {
      name: 'Croissansito',
      description: 'Un croissansito rico',
      ingredients: [{
        name: 'Eggs',
        quantity: 2,
      }],
      steps: [{
        name: 'Step 1',
        content: 'Some things to do'
      }]
    }
  });
  const { control, handleSubmit, register } = methods

  //React Hook Form - useFieldArray - https://react-hook-form.com/api/usefieldarray/
  //CodeSandbox https://codesandbox.io/s/vy8fv
  const { fields: ingredientFields, append, remove } = useFieldArray({
    control,
    name: 'ingredients'
  });

  const { fields: stepFields, append: appendStep, remove: removeStep } = useFieldArray({
    control,
    name: 'steps'
  });

  const navigate = useNavigate();
  const { createRecipe } = useRecipeApiClient();
  const onSubmit = handleSubmit((data) => {
    createRecipe(data);
    navigate('/user/recipes')
  });

  return (
    <LayoutNav>
      <div className='new-recipe-card'>
        <h3>Create new recipe</h3>

        {/* Everything under FormProvider can use/access React hook forms methods/functions through useFormContext */}
        {/* https://react-hook-form.com/api/useformcontext */}
        <FormProvider {...methods}> 

          <form onSubmit={onSubmit}>
            <div className='info-section'>
              <h4>Informations</h4>
              <div className='inputs-section informations'>
                <InputTextField 
                  type="text"
                  label="Recipe Name" 
                  {...register('name')}  
                />
                  <InputTextField 
                  type="text"
                  label="Serving" 
                  {...register('serving')}  
                />
                <InputTextArea 
                  rows={3} 
                  label="Description / Notes" 
                  {...register('description')}  
                />
              </div>
            </div>

            <div className='info-section'>
              <h4>Ingredients</h4>
              <div className='inputs-section ingredients'>
                <div className='ingredients-inputs'>
                  {
                    ingredientFields.map((item, index) => (
                      <IngredientRow 
                      key={item.id} 
                      name={`ingredients.${index}`} 
                      showLabel={index === 0}
                      onDeleteClick={() => remove(index)}
                      />
                    ))
                  }
                </div>
                <div>
                  <p className='add-more' onClick={()=> append({}) }>Add ingredient</p>
                </div>
              </div>
            </div>
          
            <div className='info-section'>
              <h4>Preparation</h4>
              <div className='inputs-section preparation'>
                <div className='steps-input'>
                {
                  stepFields.map((item, index) => (
                    <div className='step-input' key={item.id}>
                      <InputTextField
                        {...register(`steps.${index}.name`)} 
                        type="text"
                        label="Step Name / Number"
                      />
                      <InputTextArea 
                        type="text" 
                        {...register(`steps.${index}.content`)} 
                        rows={3} 
                        label="Description" 
                      />
                    </div>
                  ))
                }
                </div>
                <div className='steps-management'>
                  <div><p className='add-more' onClick={()=>appendStep({})} >Add step</p></div>
                  <div><p className='add-more' onClick={()=>removeStep(stepFields.length-1)}>Remove last step</p></div>
                </div>
              </div>
            </div>

          <div className='buttons'>
            <Button className="outlined" name="Cancel"/>
            <Button className="contained" name="Save"/>
          </div>

          </form>
        </FormProvider>
      </div>
    </LayoutNav>
  )
}

export {NewRecipe}