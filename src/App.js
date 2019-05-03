import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
//import './App.css';
import './assets/css/custom.css';

import Navigation from './components/Navigation'
import Footer from './components/Footer';
import frontPage from './components/frontpage/HomePageWrapper';
import OtherPageWrapper from './components/pages/OtherPageWrapper';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="*" component={Navigation} />

        <Route exact path="/" component={frontPage} />
        <Route path="/:path" component={OtherPageWrapper} />

        <Route path="*" component={Footer} />
      </div>
    </Router>
  );
}

export default App;
