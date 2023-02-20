import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import LoginFormPage from './components/Login';
import SignupFormPage from './components/Signup';
import Tees from './components/Tees';
import MyTees from './components/UserPages/UserTees';
import Navigation from './components/Nav';
import Footer from './components/Footer';
import Splash from './components/Splash';
import * as sessionActions from './store/session';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as teeActions from './store/tee';
import * as faveActions from './store/faves';
import About from './components/About';
import SingleTee from './components/Tees/SingleTee';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(teeActions.getAllTees());
  }, [dispatch]);

  useEffect(() => {
    if (sessionUser) {
      dispatch(faveActions.getFaves(sessionUser.id));
    }
  }, [dispatch, sessionUser]);


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
      <Route exact path="/">
        <Splash />
      </Route>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
      <Route path="/tees">
        <Tees />
      </Route>
      {/* <Route path="/single-tee/:id">
        <SingleTee />
      </Route> */}
      <Route path="/my-faves">
          <MyTees />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
