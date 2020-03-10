import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ItemList />
          </Route>
          <Route exact path="/products/:name">
            <ItemDetails />
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
