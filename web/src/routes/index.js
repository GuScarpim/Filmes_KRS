import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Home from '../view/home';
import Filmes from '../view/filmes';
import AlterarFilmes from '../view/filmes/alterar';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/filmes' component={Filmes} />
        {/* <Route path='/filmes/:id' exact component={Filmes} /> */}
        <Route path='/filmes/:id' exact component={AlterarFilmes} />
      </Switch>
    </BrowserRouter>
  )
}
