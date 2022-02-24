import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Layout from './container/layout/Layout'
import Home from './component/home/home/Home'
import Shop from './component/shop/shop/Shop'
import SingleProduct from './component/single-product/SingleProduct'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Cart from './component/cart/Cart'
import Favorites from './component/favorites/Favorites'
import Help from './component/help/Help'
import Profile from './component/account/profile/Profile'
import SignIn from './component/account/sign-in/SignIn'
import SignUp from './component/account/sign-up/SignUp'
import NotFound from './component/not-found/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Provider store={store}>
            <Route exact path="/">
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route path="/shop">
              <Layout>
                <Shop />
              </Layout>
            </Route>
            <Route path="/product/:id">
              <Layout>
                <SingleProduct />
              </Layout>
            </Route>
            <Route path="/about">
              <Layout>
                <About />
              </Layout>
            </Route>
            <Route path="/contact">
              <Layout>
                <Contact />
              </Layout>
            </Route>
            <Route path="/cart">
              <Layout>
                <Cart />
              </Layout>
            </Route>
            <Route path="/favorites">
              <Layout>
                <Favorites />
              </Layout>
            </Route>
            <Route path="/help">
              <Layout>
                <Help />
              </Layout>
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
            <Route path="/404">
              <NotFound />
            </Route>
          </Provider>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
