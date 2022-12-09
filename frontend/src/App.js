import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import LoginFormPage from './components/Login';
import SignupFormPage from './components/Signup';
import Tees from './components/Tees';
import Navigation from './components/Nav';
import * as sessionActions from './store/session';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
      <Route path="/tees">
        <Tees />
      </Route>
    </Switch>
      )}
    </>
  );
}

export default App;
