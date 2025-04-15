import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
  import { Home } from '../Home/Home';
  import { Header } from '../Common/Header/Header';
  import { About } from './About/About';
  import { Services } from './Services/Services';
  import { Portfolio } from './Portfolio/Portfolio';
  import { Testimonials } from './Testimonials/Testimonials';
  import { Blog } from './Blog/Blog';

  import './Pages.scss'
export const Pages = () => {
  return (
    <>
        <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/services' component={Services} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/testimonials' component={Testimonials} />
              <Route exact path='/blog' component={Blog} />

            </Switch>
        </Router>
    </>
  )
}

