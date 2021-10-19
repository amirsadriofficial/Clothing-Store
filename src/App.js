import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './../src/container/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
