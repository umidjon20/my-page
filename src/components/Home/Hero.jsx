import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './Hero.scss'
import { home } from '../Data/mydata'
export const Hero = () => {
  return (
    <>
        <section className='hero'>
            
            {home.map((val, i)=>(
                <div className="heroContainer" key={i}>
                    <h3 data-aos = 'fade-right'>{val.text}</h3>
                    <h1>
                        <Typewriter 
                            words={[`${val.name}`, `${val.post}`, `${val.design}`]}
                            loop={'true'}
                        />
                    </h1>
                    <p data-aos = 'fade-left'>{val.desc}</p>
                    <button className='primaryBtn' data-aos = 'fade-up-right'>Download DV</button>
                </div>
            ))}
        </section>
    </>
  )
}
