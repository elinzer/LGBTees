import { Rating } from "react-simple-star-rating";
import { useState } from "react";

const EditStars = ({ reviewStars, handleStars }) => {

    const [stars, setStars] = useState(reviewStars)

    const handleRating = (rate) => {
        setStars(rate);
        handleStars(rate);
    }

    return (
        <div>
            <Rating
                initialValue={stars}
                size="28px"
                onClick={handleRating}
            />
        </div>
    )
}

export default EditStars;
