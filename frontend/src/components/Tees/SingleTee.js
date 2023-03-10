import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Reviews from "../Reviews";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import * as faveActions from "../../store/faves";
import './SingleTee.css'


const SingleTee = () => {

    const { id } = useParams();
    const tees = useSelector(state => state.tees);
    const currentFaves = useSelector(state => state.faves.currentFaves);
    const currentFavesList = Object.values(currentFaves);
    const sessionUser = useSelector(state => state.session.user);
    const teeList = Object.values(tees);
    const tee = teeList.find(tee => tee.id == id);
    const dispatch = useDispatch();


    const addOrRemoveFave = (tee) => {
        if (currentFavesList.some(currFave => currFave.id === tee.id)) {
            dispatch(faveActions.removeFave(tee.id, sessionUser.id));
        } else {
            dispatch(faveActions.addFave(tee.id, sessionUser.id));
        }
    }

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
                    {sessionUser && (
                        <OverlayTrigger
                            key='right'
                            placement='right'
                            overlay={
                                <Tooltip id={`tooltip-right`}>
                                    {currentFavesList.some(currFave => currFave.id === tee.id) ? "Remove from your faves" : "Add to your faves"}
                                </Tooltip>
                            }
                        >
                            <div className="fave-icon-single"><i className={currentFavesList.some(currFave => currFave.id === tee.id) ? "fa-solid fa-heart filled" : "fa-regular fa-heart notfilled"}
                                onClick={(e) => { addOrRemoveFave(tee) }}></i>
                            </div>
                        </OverlayTrigger>
                    )}
                    <Image className="tee-pic" src={tee.imageUrl} alt={tee.name} fluid />
                </div>
                <div className="tee-info">
                    <div>Price: ${tee.price}</div>
                    <div>Brand: <a href={tee.brandUrl} target='_blank' rel="noreferrer">{tee.brand}</a></div>
                    <div><a href={tee.url} target='_blank' rel="noreferrer">Buy from {tee.brand} here!</a></div>
                </div>
            </div>
                <div className="reviews">
                    <Reviews teeId={tee.id} />
                </div>
        </div>
    )
}

export default SingleTee;
