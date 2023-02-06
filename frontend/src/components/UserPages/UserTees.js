import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Image from "react-bootstrap/esm/Image";
import Overlay from "react-bootstrap/esm/Overlay";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import Button from "react-bootstrap/esm/Button";
import '../Tees/tees.css'
import EditTee from "../Modals/EditTee";
import AddTee from "../Modals/AddTee";
import * as teeActions from "../../store/tee.js"
import * as faveActions from "../../store/faves.js"

const MyTees = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const tees = useSelector(state => state.tees);
    const teeList = Object.values(tees);
    const myTees = teeList.filter(tee => tee.userId === sessionUser.id);
    const [editModalShow, setEditModalShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const isAdmin = sessionUser.id === 1;
    const myFaves = useSelector(state => state.faves.currentFaves);
    const faveList = Object.values(myFaves);


    useEffect(() => {
        dispatch(teeActions.getAllTees());
    }, [dispatch]);

    if (faveList.length === 0) {
        return (
            <>
                <h3>You don't have any tees favorited. Why not fave one?</h3>
            </>
        )
    } else return (
        <div>
            {sessionUser && !isAdmin && (
                <>
                    <h3>My Faves</h3>
                    <div className='tee-display'>
                        {faveList?.map(fave => (
                            <div key={fave.id} className='tee-card'>
                                <Image src={fave.imageUrl} alt={fave.name} className='tee-img' fluid />
                                <div>
                                    <OverlayTrigger
                                        key='top'
                                        placement='top'
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                Click to buy from {fave.brand}!
                                            </Tooltip>
                                        }>
                                        <a href={fave.url} target='_blank' className='tee-link'>{fave.name}</a>
                                    </OverlayTrigger>
                                </div>
                                <div className='tee-brand'>
                                    <OverlayTrigger
                                        key='bottom'
                                        placement='bottom'
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                Click to visit {fave.brand}!
                                            </Tooltip>
                                        }>
                                        <a href={fave.brandUrl}>{fave.brand}</a>
                                    </OverlayTrigger>
                                </div>
                                <div>${fave.price}</div>
                            </div>
                        ))}
                    </div>
                </>
            )}
            {isAdmin && (
                <>
                    <Button onClick={() => setModalShow(true)}>Add A Tee</Button>
                    <AddTee show={modalShow} onHide={() => setModalShow(false)} />
                    <div className='tee-display'>
                        {myTees.map(tee => (
                            <div key={tee.id}>
                                <Image src={tee.imageUrl} alt={tee.name} className='tee-img' />
                                <div>{tee.name}</div>
                                <div>{tee.brand}</div>
                                <div>{tee.price}</div>
                                <Button onClick={() => setEditModalShow(true)}>Edit Tee</Button>
                                <EditTee show={editModalShow} tee={tee} onHide={() => setEditModalShow(false)} />
                            </div>
                        ))}
                    </div>
                </>)}
        </div>
    )
}

export default MyTees;
