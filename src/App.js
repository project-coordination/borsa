import React, { Component } from "react";
import Navbar from './components/Navbar';
import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Registration from './components/pages/Registration';
import SignUp from './components/pages/SignUp';
import UserHome from "./components/pages/UserHome";
import VehicleHome from './components/pages/VehicleHome';
import OfferHome from './components/pages/OffersHome';
import VehicleRegistration from "./components/pages/VehicleRegistration";




import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

import AddVehicle from "./components/Vehicle/AddVehicle";
import EditVehicle from "./components/Vehicle/EditVehicle";
import Vehicle from "./components/Vehicle/Vehicle";
import Offer from "./components/offers/Offer";
import EditOffer from "./components/offers/EditOffer";
import AddOffer from "./components/offers/AddOffer";

class App extends Component {
render() {
  return (
    <>
     
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path="/OfferHome" component={OfferHome} />
          <Route path="/offer/add" exact component={AddOffer} />
          <Route path="/offer/edit/:id" component={EditOffer} />
          <Route path="/offer/display/:id" component={Offer} />
          <Route path="/UserHome" component={UserHome} />      
          <Route path="/users/add" exact component={AddUser} />
          <Route path="/users/edit/:id" component={EditUser} />
          <Route path="/users/display/:id" component={User} />
          <Route path="/VehicleHome" component={VehicleHome} />
          <Route path="/vehicle/add" exact component={AddVehicle} />
          <Route path="/vehicle/edit/:id" component={EditVehicle} />
          <Route path="/vehicle/display/:id" component={Vehicle} />
          <Route path='/vehicle' component={VehicleRegistration} />
          <Route path='/registration' component={Registration} />
          <Route path='/sign-up' component={SignUp} />
          
        </Switch>
      </Router>
    </>
  );
}
}
export default App;