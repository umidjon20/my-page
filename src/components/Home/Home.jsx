import React from 'react'
import { Hero } from './Hero'
import { About } from '../Pages/About/About'
import { Services } from '../Pages/Services/Services'
import { Counter } from '../Pages/Counter/Counter'
import { Portfolio } from '../Pages/Portfolio/Portfolio'
export const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Counter />
    <Portfolio />
    </>
  )
}
