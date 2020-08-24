import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Homepage from './Homepage';
import AboutPage from './AboutPage';
import StaffPage from './StaffPage';

function App(props) {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path='/about' render={() => <AboutPage company={props.data.company} />} />
        <Route path='/staff' render={() => <StaffPage staff={props.data.company.staff} />} />
        <Route path='/' render={() => <Homepage company={props.data.company} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
