import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './hero.scss'
import { home } from '../Data/mydata'
export const Hero = () => {
  return (
    <>
        <section className='hero'>
            
            {home.map((val, i)=>(
                <div className="heroContainer">
                    <h3>{val.text}</h3>
                    <h1>
                        <Typewriter 
                            words={[`${val.name}`, `${val.post}`, `${val.design}`]}
                            loop={'true'}
                        />
                    </h1>
                    <p>{val.desc}</p>
                    <button className='primaryBtn'>Download DV</button>
                </div>
            ))}
        </section>
    </>
  )
}
