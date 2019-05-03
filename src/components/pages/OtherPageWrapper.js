import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Retreat2018 from './Retreat2018';
import RegistrationForm from '../registration/RegistrationForm'



export default () => (
    <Router>
        <div id="other-page-wrapper">
            <Route exact path="/2018Retreat" component={Retreat2018} />
            <Route exact path="/Register" component={RegistrationForm} />
        </div>
    </Router>
)