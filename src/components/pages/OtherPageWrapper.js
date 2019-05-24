import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Retreat2018 from './Retreats/Retreat2018';
import RegistrationForm from '../registration/RegistrationForm'
import Retreat2019 from './Retreats/Retreat2019';
import MeetTheCommittee from './AboutUs/MeetTheCommittee';
import Retreat2020 from './Retreats/Retreat2020';
import Worship from './Resources/Worship';
import WhatWeBelieve from './AboutUs/WhatWeBelieve';



export default () => (
    <Router>
        <div id="other-page-wrapper">
            <Route exact path="/2018Retreat" component={Retreat2018} />
            <Route exact path="/2019Retreat" component={Retreat2019} />
            <Route exact path="/2020Retreat" component={Retreat2020} />
            <Route exact path="/Worship" component={Worship} />
            <Route exact path="/WhatWeBelieve" component={WhatWeBelieve} />
            <Route exact path="/Register" component={RegistrationForm} />

            <Route exact path="/Committee" component={MeetTheCommittee} />
        </div>
    </Router>
)