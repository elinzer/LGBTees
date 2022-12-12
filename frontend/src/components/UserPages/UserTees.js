import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/esm/Button";
import '../Tees/tees.css'
import EditTee from "../Modals/EditTee";

const MyTees = () => {

    const sessionUser = useSelector(state => state.session.user);
    const tees = useSelector(state => state.tees);
    const teeList = Object.values(tees);
    const myTees = teeList.filter(tee => tee.userId === sessionUser.id);
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className='tee-display'>
            {myTees.map(tee => (
                <div key={tee.id}>
                    <Image src={tee.imageUrl} alt={tee.name} className='tee-img' />
                    <div>{tee.name}</div>
                    <Button onClick={() => setModalShow(true)}>Edit Tee</Button>
                    <EditTee  show={modalShow} onHide={() => setModalShow(false)} />
                    </div>
            ))}
        </div>
    )
}

export default MyTees;
