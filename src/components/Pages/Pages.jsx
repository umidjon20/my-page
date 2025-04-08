import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Header } from '../Common/Header';
  import './Pages.scss'
export const Pages = () => {
  return (
    <>
        <Router>
            <Header />
            <Switch>
            {/* <Route path="/about">
                <About />
            </Route>
             */}
            </Switch>
        </Router>
    </>
  )
}

