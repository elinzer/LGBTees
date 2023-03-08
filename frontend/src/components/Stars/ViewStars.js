import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';


const Stars = ({ review }) => {

    const [rating, setRating] = useState(review.stars);

    return (
        <div>
            <Rating initialValue={rating} ratingValue={rating} readonly="true" />
        </div>
    )
}

export default Stars;
