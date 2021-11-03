import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import './App.css'
import Layout from './container/Layout'
// import 'bootstrap/dist/css/bootstrap.css'
import 'materialize-css/dist/css/materialize.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            {/* <Route exact path="/">
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
            </Route> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
