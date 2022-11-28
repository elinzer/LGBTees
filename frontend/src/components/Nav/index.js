import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <li>
        <ProfileButton user={sessionUser} />
        <button onClick={logout}>Log Out</button>
      </li>
    );
  } else {
    sessionLinks = (
      <li>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    );
  }

  return (
    <Navbar variant='light' bg="light" expand="lg">
      <Navbar.Brand href="/">LGBTees</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        {/* <Nav.Link href="#link">Link</Nav.Link> */}
        <NavDropdown title="Profile" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          {isLoaded && sessionUser && (
            <>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>
                Log Out
              </NavDropdown.Item>
            </>
          )}
        </NavDropdown>
      </Nav>
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
