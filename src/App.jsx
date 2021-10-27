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
            <Route exact path="/" />
            <Route path="/shop" />
            <Route path="/about" />
            <Route path="/" />
            <Route path="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
