import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Event from './Component/Event/Event';
import Login from './Component/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Component/Navigation/Navigation';
import NotFound from './Component/NotFound/NotFound';
import PrivateRoute from './Component/Login/PrivateRoute';
import CheckOut from './Component/CheckOUt/CheckOut';
export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value  = {[loggedInUser, setLoggedInUser]} className="App" >
     <Router>
       <Navigation></Navigation>
      <Switch>
        <Route exact path = "/"> 
          <Home></Home>
        </Route>
        <PrivateRoute path = "/event">
          <Event></Event>
        </PrivateRoute>
        <Route path = "/login">
          <Login></Login>
        </Route>
        <PrivateRoute path = "/CheckOut/:id">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <PrivateRoute path = "/CheckOut">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path = "*">
          <NotFound></NotFound>
        </Route>
      </Switch>

     </Router>
    </userContext.Provider>
  );
}

export default App;
