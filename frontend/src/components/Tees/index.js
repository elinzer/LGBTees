import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useSelector, useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';
import SearchBar from '../SearchBar';
import SingleTee from './SingleTee';
import * as faveActions from '../../store/faves';
import './tees.css'

const Tees = () => {

    const tees = useSelector(state => state.tees);
    const teeList = Object.values(tees);
    const sessionUser = useSelector(state => state.session.user);
    const currentFaves = useSelector(state => state.faves.currentFaves);
    const currentFavesList = Object.values(currentFaves);

    const dispatch = useDispatch();


    const addOrRemoveFave = (tee) => {
        if (currentFavesList.some(currFave => currFave.id === tee.id)) {
            dispatch(faveActions.removeFave(tee.id, sessionUser.id));
        } else {
            dispatch(faveActions.addFave(tee.id, sessionUser.id));
        }
    }


    return (
        <div>
            <SearchBar />
            <div className='tee-display'>
                {teeList.map((tee) => (
                    <div key={tee.id} className='tee-card'>
                        {sessionUser && (
                            <div className='fave-heart'><i className={currentFavesList.some(currFave => currFave.id === tee.id) ? "fa-solid fa-heart filled" : "fa-regular fa-heart notfilled"}
                            onClick={(e) => {addOrRemoveFave(tee)}}></i></div>
                            )}
                        {/* <NavLink to={`/single-tee/${tee.id}`}> */}
                            <Image src={tee.imageUrl} alt={tee.name} className='tee-img' fluid />
                            {/* </NavLink> */}
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
                                <a href={tee.brandUrl} target='_blank'>{tee.brand}</a>
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
