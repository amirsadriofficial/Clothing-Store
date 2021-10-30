import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Layout from './container/Layout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Home />
            </Route>
            <Route path="/about">
              <Home />
            </Route>
            <Route path="/contact">
              <Home />
            </Route>
            <Route path="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
