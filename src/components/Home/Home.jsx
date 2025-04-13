import React from 'react'
import { Hero } from './Hero'
import { About } from '../Pages/About/About'
import { Services } from '../Pages/Services/Services'
import { Counter } from '../Pages/Counter/Counter'
export const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Counter />
    </>
  )
}
