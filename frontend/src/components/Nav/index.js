import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as sessionActions from '../../store/session';
import lgbtLogo from '../../imgs/lgbteeLogo.png';
import './nav.css'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <Navbar variant='light' bg="light" expand="sm">
      <Navbar.Brand href="/">
        <img src={lgbtLogo} className='nav-logo'>
        </img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/tees">Tees</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        {isLoaded && !sessionUser && (
          <Nav.Link href="/login">Log In</Nav.Link>
        )}
        {isLoaded && sessionUser && (
          <NavDropdown title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item href="/my-tees">My Tees</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}>
              Log Out
            </NavDropdown.Item>
          </NavDropdown>
        )}
      </Nav>
      </Navbar.Collapse>
    </Navbar>


    // <ul>
    //   <li>
    //     <NavLink exact to="/">Home</NavLink>
    //   </li>
    //   {isLoaded && sessionLinks}
    // </ul>
  );
}

export default Navigation;
