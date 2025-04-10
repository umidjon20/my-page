import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Home } from '../Home/Home';
  import { Header } from '../Common/Header/Header';
  import { About } from './About/About';
  import './Pages.scss'
export const Pages = () => {
  return (
    <>
        <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
         
            </Switch>
        </Router>
    </>
  )
}

