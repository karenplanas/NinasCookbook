import React from 'react'
import { ReviewInterface } from '../../interfaces/ReviewInterface'
import './ReviewsList.css'

interface Props {
  reviews: ReviewInterface[]
}

const ReviewsList: React.FC<Props> = ({reviews}) => {
  return(
    <div className='ReviewsList'>
      <h3>Recipe Reviews</h3>
      {
        reviews.length === 0 ? <h4>There is not reviews for this recipe yet. Be the first 🙂 </h4> :
        reviews.map((r) => (
        <div key={r.recipeId} className='comment-rating'>
          <li>{r.comment}</li>
          <li>Rating: {r.rating}</li>
        </div>
        ))
      }
    </div>
  )
}

export {ReviewsList}