import React from 'react'
import { Hero } from './Hero'
import { About } from '../Pages/About/About'
import { Services } from '../Pages/Services/Services'
import { Counter } from '../Pages/Counter/Counter'
import { Portfolio } from '../Pages/Portfolio/Portfolio'
import { Testimonials } from '../Pages/Testimonials/Testimonials'
import { Blog } from '../Pages/Blog/Blog'
import { Contact } from '../Pages/Contact/Contact'
import { Footer } from '../Common/Footer/Footer'
export const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Counter />
    <Portfolio />
    <Testimonials />
    <Blog />
    <Contact />
    </>
  )
}
