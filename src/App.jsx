import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Layout from './container/Layout/Layout'
import Home from './component/Home/Home'
import Shop from './component/Shop/Shop'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Cart from './component/Cart/Cart'

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
