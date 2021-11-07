import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from './container/Layout'
import Home from './component/Home'
import Shop from './component/Shop'
import About from './component/About'
import Contact from './component/Contact'
import Cart from './component/Cart'

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
              <Shop />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
