import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import WbnPlayer from './WbnPlayer';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path ="/" component = {WbnPlayer}/>
      <Route exact path = "/activeVider" component = {WbnPlayer}/>
    </Switch>
  </BrowserRouter>
)

export default App;