import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Retreat2018 from './Retreats/Retreat2018';
import RegistrationForm from '../registration/RegistrationForm'
import Retreat2019 from './Retreats/Retreat2019';
import MeetTheCommittee from './AboutUs/MeetTheCommittee';



export default () => (
    <Router>
        <div id="other-page-wrapper">
            <Route exact path="/2018Retreat" component={Retreat2018} />
            <Route exact path="/2019Retreat" component={Retreat2019} />
            <Route exact path="/Register" component={RegistrationForm} />

            <Route exact path="/Committee" component={MeetTheCommittee} />
        </div>
    </Router>
)