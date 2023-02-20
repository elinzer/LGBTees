import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import './SingleTee.css'


const SingleTee = () => {

    const { id } = useParams();
    const tees = useSelector(state => state.tees);
    const teeList = Object.values(tees);
    const tee = teeList.find(tee => tee.id == id);

    if (!tee) {
        return (
            <>
                <h1>Sorry, this tee does not exist!</h1>
            </>
        )
    }

    return (
        <div>
            <div className="indv-tee">
            <h1>{tee.name}</h1>
            <Image className="tee-pic" src={tee.imageUrl} alt={tee.name} fluid />
            <div className="tee-info">
                <h3>Price: ${tee.price}</h3>
                <h3>Brand: {tee.brand}</h3>
            </div>
            <div className="reviews">
                <h3>Reviews coming soon!</h3>
            </div>
            </div>
        </div>
    )
}

export default SingleTee;
