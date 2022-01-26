import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Layout from './container/layout/Layout'
import Home from './component/home/Home'
import Shop from './component/shop/Shop'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Cart from './component/cart/Cart'
import Help from './component/help/Help'
import Profile from './component/account/profile/Profile'
import SignIn from './component/account/SignIn'
import SignUp from './component/account/SignUp'

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
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
