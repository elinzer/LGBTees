import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch} from 'react-redux';
import * as teeActions from '../../store/tee';
import { useState } from 'react';


const EditTee = (props) => {
    const userId = useSelector(state => state.session.user.id);
    const tee = props.tee;

    const dispatch = useDispatch();
    const [name, setName] = useState(tee.name);
    const [price, setPrice] = useState(tee.price);
    const [imageUrl, setImageUrl] = useState(tee.imageUrl);
    const [url, setUrl] = useState(tee.url);
    const [brand, setBrand] = useState(tee.brand);

    const handleChange = () => {
        dispatch(teeActions.editTee(tee.id, name, price, imageUrl, url, brand, userId))
    }



    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit This Tee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
            <Form>
                <Form.Group controlId='teeName'>
                    <Form.Label>Tee Name</Form.Label>
                    <Form.Control
                    type='text'
                    value={tee.name}
                    onChange={(e) => setName(e.target.value)}
                     />
                </Form.Group>
                <Form.Group controlId='teePrice'>
                    <Form.Label>Tee Price</Form.Label>
                    <Form.Control
                    type='text'
                    value={tee.price}
                    onChange={(e) => setPrice(e.target.value)}
                      />
                </Form.Group>
                </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close without Changing</Button>
        <Button onClick={() => {props.onHide(); handleChange()}}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTee;
