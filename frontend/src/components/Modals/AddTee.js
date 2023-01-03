import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import * as teeActions from '../../store/tee.js';
import { useState } from 'react';


const AddTee = (props) => {
    const userId = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [url, setUrl] = useState('');
    const [brand, setBrand] = useState('');


    const handleSubmit = () => {
        dispatch(teeActions.createTee({ name, price, imageUrl, url, brand, userId }))
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
                    Add A Tee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Form>
                        <Form.Group controlId='teeName' className=''>
                            <Form.Label>Tee Name</Form.Label>
                            <Form.Control
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />
                        </Form.Group>
                        <Form.Group controlId='teePrice'>
                            <Form.Label>Tee Price</Form.Label>
                            <Form.Control
                                type='text'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}

                            />
                        </Form.Group>
                        <Form.Group controlId='teeImageUrl'>
                            <Form.Label>Tee Image Url</Form.Label>
                            <Form.Control
                                type='text'
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}

                            />
                        </Form.Group>
                        <Form.Group controlId='teeUrl'>
                            <Form.Label>Tee Link</Form.Label>
                            <Form.Control
                                type='text'
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}

                            />
                        </Form.Group>
                        <Form.Group controlId='teeBrand'>
                            <Form.Label>Tee Brand</Form.Label>
                            <Form.Control
                                type='text'
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}

                            />
                        </Form.Group>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onclick={() => props.onHide()}>Exit</Button>
                <Button
                    onClick={() => {
                        props.onHide();
                        handleSubmit()
                    }}
                >Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddTee;
