
import './App.css';
import NavbarComponent from './NavbarComponent';
import Home from './Home';
import CustomHouses from './CustomHouses';
import BathroomRenovationPage from "./BathroomRenovationPage";
import BedroomRenovationPage from "./BedroomRenovationPage";
import KitchenRenovationPage from "./KitchenRenovationPage";
import LivingRoomRenovationPage from "./LivingRoomRenovationPage";
import BasementRenovationPage from "./BasementRenovationPage";
import RenovationBooking from "./RenovationBooking";
import CustomHouseView from "./CustomHouseView";
import ExCustomerPage from "./ExCustomerPage";
import HouseTourAppointment from "./HouseTourAppointment";
import AboutUsPage from "./AboutUsPage";
import TeamTalkPage from "./TeamTalkPage";
import HomeFrench from "./HomeFrench";
import HomeItalian from "./HomeItalian";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
  const House = useState({title:'The King', size:'1500sqf', price:'1.5M', location:"5980 5th Side Rd, Egbert, ON L0L 1N0"});
  return (
    <Router>
    <div className="App">
      <NavbarComponent className="nav"></NavbarComponent>
      <div className="content">
       <Switch>
        <Route exact path="/Home">
          <Home></Home>
        </Route>
         
        <Route exact path="/CustomHouses">
         <CustomHouses></CustomHouses>
        </Route>

        <Route exact path="/BathroomRenovationPage">
         <BathroomRenovationPage></BathroomRenovationPage>
        </Route>

        <Route exact path="/BedroomRenovationPage">
         <BedroomRenovationPage></BedroomRenovationPage>
        </Route>

        <Route exact path="/KitchenRenovationPage">
         <KitchenRenovationPage></KitchenRenovationPage>
        </Route>

        <Route exact path="/LivingRoomRenovationPage">
         <LivingRoomRenovationPage></LivingRoomRenovationPage>
        </Route>

        <Route exact path="/BasementRenovationPage">
         <BasementRenovationPage></BasementRenovationPage>
        </Route>

        <Route exact path="/CustomHouseView">
         <CustomHouseView></CustomHouseView>
        </Route>

        <Route exact path="/AboutUsPage">
         <AboutUsPage></AboutUsPage>
        </Route>

        <Route exact path="/RenovationBooking">
         <RenovationBooking></RenovationBooking>
        </Route>

        <Route exact path="/HouseTourAppointment">
         <HouseTourAppointment></HouseTourAppointment>
        </Route>

        <Route exact path="/TeamTalkPage">
         <TeamTalkPage></TeamTalkPage>
        </Route>

        <Route exact path="/ExCustomerPage">
         <ExCustomerPage></ExCustomerPage>
        </Route>

        <Route exact path="/HomeFrench">
         <HomeFrench></HomeFrench>
        </Route>
        <Route exact path="/HomeItalian">
         <HomeItalian></HomeItalian>
        </Route>
      </Switch>
      </div>
     
    </div>
    </Router>
  );
}

export default App;
