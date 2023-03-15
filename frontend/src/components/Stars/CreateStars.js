import { Rating } from "react-simple-star-rating";
import { useState } from "react";

const WriteStars = ({handleStars}) => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
        handleStars(rate);
    };


    return (
        <div>
        <Rating
            size="28px"
            ratingValue={rating}
            onPointerLeave={() => setRating(0)}
            onClick={handleRating}
            transition="true"
        />
        </div>
    );
    };

    export default WriteStars;
