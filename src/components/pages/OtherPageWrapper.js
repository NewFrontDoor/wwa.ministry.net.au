import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Retreat2018 from './Retreats/Retreat2018';
import RegistrationClosed from '../registration/RegistrationClosed'
import Retreat2019 from './Retreats/Retreat2019';
import MeetTheCommittee from './AboutUs/MeetTheCommittee';
import Retreat2020 from './Retreats/Retreat2020';
import Worship from './Resources/Worship';
import Missions from './Resources/Missions';
import WhatWeBelieve from './AboutUs/WhatWeBelieve';
import OurMission from './AboutUs/OurMission';
import PaypalReturn from '../registration/confirmations/PaypalReturn';



export default () => (
    <Router>
        <div id="other-page-wrapper">
            <Route exact path="/2018Weekend" component={Retreat2018} />
            <Route exact path="/2019Weekend" component={Retreat2019} />
            <Route exact path="/2020Weekend" component={Retreat2020} />
            <Route exact path="/Worship" component={Worship} />
            <Route exact path="/Missions" component={Missions} />

            <Route exact path="/Register" component={RegistrationClosed} />

            <Route exact path="/OurMission" component={OurMission} />
            <Route exact path="/WhatWeBelieve" component={WhatWeBelieve} />
            <Route exact path="/Committee" component={MeetTheCommittee} />

            <Route exact path="/paypal_confirmation/" component={PaypalReturn} />
        </div>
    </Router>
)