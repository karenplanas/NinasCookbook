import React from 'react'
import { ReviewInterface } from '../../interfaces/ReviewInterface'
import { StarRate } from '../StarRate/StarRate'
import './ReviewsList.css'
import moment from 'moment'

interface Props {
  reviews: ReviewInterface[]
}

const ReviewsList: React.FC<Props> = ({reviews}) => {
  return(
    <div className='ReviewsList'>
      <h3>Recipe Reviews</h3>
      {
        reviews.length === 0 ? <h4>There is not reviews for this recipe yet. Be the first 🥇 </h4> :
        reviews.map((review) => (
        <div key={review.recipeId} className='comment-rating-content'>
          <StarRate value={review.rating} disabled size={20}/>
          <p>{review.comment}</p>
          <p className='ReviewsList-author-date'> {review.reviewer.firstName} {review.reviewer.lastName} • {moment(review.createdAt).format('MMM Do, YYYY')} </p>
        </div>
        ))
      }
    </div>
  )
}

export {ReviewsList}