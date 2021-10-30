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
              <shop />
            </Route>
            <Route path="/about">
              <about />
            </Route>
            <Route path="/contact">
              <contact />
            </Route>
            <Route path="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
