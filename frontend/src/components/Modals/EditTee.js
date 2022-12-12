import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch} from 'react-redux';
import * as teeActions from '../../store/tee';
import { useState } from 'react';


const EditTee = (props) => {

    const tee = props.tee;

    const dispatch = useDispatch();
    const [name, setName] = useState(tee.name);
    const [price, setPrice] = useState(tee.price);
    const [imageUrl, setImageUrl] = useState(tee.imageUrl);
    const [url, setUrl] = useState(tee.url);
    const [brand, setBrand] = useState(tee.brand);



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
                     />
                </Form.Group>
                </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close without Changing</Button>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTee;
