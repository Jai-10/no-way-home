import React, { Component } from 'react'
import './ReviewContainer.css'
import Review from '../Review/Review'
import review_api from '../../review_api'

class ReviewContainer extends Component {
    render() {
        return (
            <div className='review-container'>
                {
                    review_api.map(review => {
                        return <Review
                            review={review.review}
                            rating={review.rating}
                            src={review.source}
                            theme={this.props.theme}
                        />
                    })
                }
            </div>
        )
    }
}
    
export default ReviewContainer