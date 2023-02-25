import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Reviews from "../Reviews";
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
                <div>
                <Button className="back-btn" variant="outline-secondary" size='sm' href="/tees"><i className="fa-solid fa-arrow-left"></i></Button>
                </div>
                <div className="tee-n-title">
                    <h3>{tee.name}</h3>
                    <Image className="tee-pic" src={tee.imageUrl} alt={tee.name} fluid />
                </div>
                <div className="tee-info">
                    <div>Price: ${tee.price}</div>
                    <div>Brand: <a href={tee.brandUrl} target='_blank' rel="noreferrer">{tee.brand}</a></div>
                    <div><a href={tee.url} target='_blank' rel="noreferrer">Buy from {tee.brand} here!</a></div>
                </div>
                <div className="reviews">
                    <Reviews teeId={tee.id} />
                </div>
            </div>
        </div>
    )
}

export default SingleTee;
