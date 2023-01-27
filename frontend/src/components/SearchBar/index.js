import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const SearchBar = () => {
    return (
        <Container style={{marginTop: '20px', marginBottom: '20px'}}>
            <Form className='d-flex' style={{justifyContent: 'center'}}>
                <Form.Control
                    type='search'
                    style={{width: '50%'}}
                    placeholder='Search feature coming soon!'
                    aria-label='Search'
                    disabled={true}
                />
                <Button variant='outline-success' disabled={true}>Search</Button>
            </Form>

        </Container>
    )
}

export default SearchBar;
