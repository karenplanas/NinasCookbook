import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { ReviewInterface } from '../../interfaces/ReviewInterface'
import { useRecipeApiClient } from '../../services/ApiClient'
import { Button } from '../Button/Button'
import { InputTextArea } from '../InputTextField/InputTextField'
import { StarRate } from '../StarRate/StarRate'
import './ReviewAdd.css'

const ReviewAdd : React.FC = () => {

  const { register, handleSubmit, setValue } = useForm<ReviewInterface>({
    defaultValues: {
      rating: 0,
      comment: '',
    }
  });

  const setRating = (value: number) => {
    setValue('rating', value);
  }

  const { recipeId } = useParams();
  const { createReview } = useRecipeApiClient();
  const onSubmit = (data: ReviewInterface) => {
    createReview({...data, recipeId: recipeId! });
  }

  return (
    <div className='Review'>
      <h3>Review this recipe</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextArea rows={2} {...register('comment')} />
        <div className='rate-send-button'>
          <StarRate onChange={setRating}/>
          <Button className="contained" name="Send" />
        </div>
      </form>
    </div>
  )
}

export { ReviewAdd }