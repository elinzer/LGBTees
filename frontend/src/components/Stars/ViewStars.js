import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';


const Stars = ({ stars }) => {

    const [rating, setRating] = useState(stars);

    console.log(stars)

    return (
        <div>
            <Rating initialValue={rating}
            readonly="true" size="28px" />
        </div>
    )
}

export default Stars;
