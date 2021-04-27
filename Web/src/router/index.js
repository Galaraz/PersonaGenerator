import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreatePersona from '../pages/CreatePersona';
import NotFound from '../pages/NotFound';

const Routes = () => (
  
  <Switch>
    <Route path="/" component={CreatePersona} />
    <Route component={NotFound} />
  </Switch>
  
);

export default Routes;