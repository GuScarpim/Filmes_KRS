import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Home from '../view/home';
import Filmes from '../view/filmes';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/filmes' component={Filmes} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}