import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Image from "react-bootstrap/esm/Image";
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
    const faves = useSelector(state => state.faves);
    const myFaves = Object.values(faves).filter(fave => fave.userId === sessionUser.id);
    console.log("myFaves", myFaves);

    useEffect(() => {
        dispatch(teeActions.getAllTees());
        dispatch(faveActions.getFaves(sessionUser.id));
    }, [dispatch]);

    if (myTees.length === 0) {
        return (
            <>
                <h3>You don't have any tees favorited. Why not fave one?</h3>
            </>
        )
    } else return (
        <div>
            {sessionUser && !isAdmin && (
                <>
                </>
                   ) }
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
