import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";


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
            <h1>{tee.name}</h1>
            <Image src={tee.imageUrl} alt={tee.name} fluid />
        </div>
    )
}

export default SingleTee;
