import React, { useCallback } from 'react';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { AdvancedImage } from '@cloudinary/react';

import './NewRecipe.css';
import { Button } from '../Button/Button';
import { IngredientRow } from './IngredientRow/IngredientRow';
import { InputTextArea, InputTextField } from '../InputTextField/InputTextField';
import { LayoutNav } from '../LayoutNav/LayoutNav';
import { Recipe } from '../../interfaces/Recipe';
import { useRecipeApiClient } from '../../services/ApiClient';
import { useNavigate } from 'react-router-dom';
import { useNavigateIfNotAuthenticated } from '../../contexts/UserContext';
import { CloudinaryUploadWidget } from '../CloudinaryUploadWidget/CloudinaryUploadWidget';
import { CloudinaryResult } from '../../interfaces/CloudinaryResult';
import { CloudinaryService, fill } from '../../services/CloudinaryService';

const NewRecipe: React.FC = () => {
  useNavigateIfNotAuthenticated();

  const methods = useForm<Recipe>({
    defaultValues: {
      name: '',
      description: '',
      ingredients: [
        {
          name: '',
          quantity: 1
        }
      ],
      steps: [
        {
          name: 'Step 1',
          content: ''
        }
      ],
      image: {
        url: '',
        publicId: '',
      }
    }
  });

  const { control, handleSubmit, register, setValue, watch } = methods;

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

  const onSubmit = handleSubmit(async (data) => {
    await createRecipe(data);
    navigate('/user/recipes');
  });

  const onSuccess = useCallback((result: CloudinaryResult['info']) => {
    setValue('image', {
      url: result.url,
      publicId: result.public_id,
    })
  }, [setValue])

  const recipeImage = CloudinaryService().image(watch('image')?.publicId);
  recipeImage.resize(fill().width(250).height(130))

  return (
    <LayoutNav>
      <div className="new-recipe-card">
        <h3>Create new recipe</h3>
        
        {/* Everything under FormProvider can use/access React hook forms methods/functions through useFormContext */}
        {/* https://react-hook-form.com/api/useformcontext */}
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <div className="info-section">
              <h4>Informations</h4>
              <div className="inputs-section informations">
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
                <div className='NewRecipe-image-upload'>
                  <AdvancedImage cldImg={recipeImage} />
                  <p>Picture</p><CloudinaryUploadWidget onSuccess={onSuccess} />
                </div>
              </div>
            </div>

            <div className="info-section">
              <h4>Ingredients</h4>
              <div className="inputs-section ingredients">
                <div className="ingredients-inputs">
                  {ingredientFields.map((item, index) => (
                    <IngredientRow
                      key={item.id}
                      name={`ingredients.${index}`}
                      showLabel={index === 0}
                      onDeleteClick={() => remove(index)}
                    />
                  ))}
                </div>
                <div>
                  <p className="add-more" onClick={() => append({})}>
                    Add ingredient
                  </p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h4>Preparation</h4>
              <div className="inputs-section preparation">
                <div className="steps-input">
                  {stepFields.map((item, index) => (
                    <div className="step-input" key={item.id}>
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
                  ))}
                </div>
                <div className="steps-management">
                  <div>
                    <p className="add-more" onClick={() => appendStep({name:`Step ${stepFields.length +1}`})}>
                      Add step
                    </p>
                  </div>
                  <div>
                    <p className="add-more" onClick={() => removeStep(stepFields.length - 1)} >
                      Remove last step
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="buttons">
              <Button className="outlined" text="Cancel" />
              <Button className="contained" text="Save" />
            </div>
          </form>
        </FormProvider>
      </div>
    </LayoutNav>
  );
};

export { NewRecipe };
