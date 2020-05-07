import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //eslint-disable-line

import Retreat2018 from './Retreats/Retreat2018';
import RegistrationClosed from '../registration/RegistrationClosed'
import Retreat2019 from './Retreats/Retreat2019.js';
import MeetTheCommittee from './AboutUs/MeetTheCommittee';
import Retreat2021 from './Retreats/Retreat2021';
import Worship from './Resources/Worship';
import Missions from './Resources/Missions';
import WhatWeBelieve from './AboutUs/WhatWeBelieve';
import OurMission from './AboutUs/OurMission';
import PaypalReturn from '../registration/confirmations/PaypalReturn';
import NotFound from './NotFound';
import PastRetreats from './Retreats/PastRetreats';



export default () => (

    <div id="other-page-wrapper">
        <Switch>
            <Route exact path="/2018Weekend" component={Retreat2018} />
            <Route exact path="/2019Weekend" component={Retreat2019} />
            <Route exact path="/2021Weekend" component={Retreat2021} />
            <Route exact path="/Worship" component={Worship} />
            <Route exact path="/Missions" component={Missions} />

            <Route exact path="/Register" component={RegistrationClosed} />

            <Route exact path="/OurMission" component={OurMission} />
            <Route exact path="/WhatWeBelieve" component={WhatWeBelieve} />
            <Route exact path="/Committee" component={MeetTheCommittee} />

            <Route exact path="/paypal_confirmation/" component={PaypalReturn} />
            <Route exact path="/PastWeekends" component={PastRetreats} />
            <Route path="/*" component={NotFound} />
        </Switch>
    </div>
)
