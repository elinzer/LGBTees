import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Image from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/esm/Button";
import '../Tees/tees.css'
import EditTee from "../Modals/EditTee";
import AddTee from "../Modals/AddTee";

const MyTees = () => {

    const sessionUser = useSelector(state => state.session.user);
    const tees = useSelector(state => state.tees);
    const teeList = Object.values(tees);
    const myTees = teeList.filter(tee => tee.userId === sessionUser.id);
    const [modalShow, setModalShow] = useState(false);



    if (myTees.length === 0) {
        return (
            <>
            <h3>You don't have any tees to share. Why not add one?</h3>
            <Button onClick={() => setModalShow(true)}>Add A Tee</Button>
            <AddTee show={modalShow} onHide={() => setModalShow(false)} />
            </>
        )
    } else return (
        <div className='tee-display'>
            {myTees.map(tee => (
                <div key={tee.id}>
                    <Image src={tee.imageUrl} alt={tee.name} className='tee-img' />
                    <div>{tee.name}</div>
                    <div>{tee.brand}</div>
                    <div>{tee.price}</div>
                    <Button onClick={() => setModalShow(true)}>Edit Tee</Button>
                    <EditTee  show={modalShow} tee={tee} onHide={() => setModalShow(false)} />
                    </div>
            ))}
        </div>
    )
}

export default MyTees;
