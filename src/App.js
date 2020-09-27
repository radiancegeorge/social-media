import React from 'react';
import Splash from './pages/Splash';
import './App.css';
import './styles/Splash.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import NewUser from './pages/NewUser';
import SetProfile from './pages/SetProfile';
import Feed from './pages/Feed';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/sf-ui-text-regular-" type="text/css" />
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Splash />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/reset-password'>
            <ResetPassword />
          </Route>
          <Route path='/new-password'>
            <NewPassword />
          </Route>
          <Route path='/new-user'>
            <NewUser/>
          </Route>
          <Route path='/set-profile'>
            <SetProfile />
          </Route>
          <Route path='/feeds'>
            <Feed />
          </Route>
        </Switch>
      </Router>
      <p className = 'copyright'>&copy; {new Date().getFullYear()} momeno Inc.</p>
    </div>
  );
}

export default App;
