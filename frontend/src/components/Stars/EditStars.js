import { Rating } from "react-simple-star-rating";
import { useState } from "react";

const EditStars = ({ reviewStars }) => {

    const [stars, setStars] = useState(reviewStars)

    return (
        <div>
            <Rating
                initialValue={reviewStars}
                size="28px"
            />
        </div>
    )
}

export default EditStars;
