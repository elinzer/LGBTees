import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import LoginFormPage from './components/Login';
import SignupFormPage from './components/Signup';
import Tees from './components/Tees';
import MyTees from './components/UserPages/UserTees';
import Navigation from './components/Nav';
import Splash from './components/Splash';
import * as sessionActions from './store/session';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as teeActions from './store/tee';
import About from './components/About';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(teeActions.getAllTees());
  }, [dispatch]);


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
      <Route path="/my-tees">
        <MyTees />
      </Route>
      <Route>
        <About />
      </Route>
    </Switch>
      )}
    </>
  );
}

export default App;
