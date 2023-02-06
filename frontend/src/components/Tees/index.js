import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../SearchBar';
import * as faveActions from '../../store/faves';
import './tees.css'

const Tees = () => {

    const tees = useSelector(state => state.tees);
    const teeList = Object.values(tees);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const [isClicked, setIsClicked] = useState(false);

    const filledClass = isClicked ? "fa-solid fa-heart filled" : "fa-regular fa-heart notfilled";

    const addOrRemoveFave = (id) => {
        setIsClicked(!isClicked);

        if (isClicked) {
            dispatch(faveActions.addFave(id, sessionUser.id))
        } else {
            dispatch(faveActions.removeFave(id, sessionUser.id));
        }
    }


    return (
        <div>
            <SearchBar />
            <div className='tee-display'>
                {teeList.map((tee) => (
                    <div key={tee.id} className='tee-card'>
                        {sessionUser && (
                            <div className='fave-heart'><i className="fa-regular fa-heart notfilled"

                            onClick={(e) => {e.target.className = filledClass; addOrRemoveFave(tee.id)}}></i></div>
                            )}
                        <Image src={tee.imageUrl} alt={tee.name} className='tee-img' fluid />
                        <div>
                            <OverlayTrigger
                                key='top'
                                placement='top'
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        Click to buy from {tee.brand}!
                                    </Tooltip>
                                }>
                                <a href={tee.url} target='_blank' className='tee-link'>{tee.name}</a>
                            </OverlayTrigger>
                        </div>
                        <div className='tee-brand'>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                        Click to visit {tee.brand}!
                                    </Tooltip>
                                }>
                                <a href={tee.brandUrl}>{tee.brand}</a>
                            </OverlayTrigger>
                        </div>
                        <div>${tee.price}</div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Tees;
