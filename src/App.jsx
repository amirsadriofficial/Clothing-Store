import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Layout from './container/layout/Layout'
import Routes from './core/Routes'
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
            <Layout>
              {Routes.map((route) => (
                <Route exact path={route.path} component={route.component} />
              ))}
            </Layout>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Provider>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
