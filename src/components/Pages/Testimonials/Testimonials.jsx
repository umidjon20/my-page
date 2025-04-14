import React from 'react'

import './Testimonials.scss'
import { testimonials } from '../../Data/mydata'
export const Testimonials = () => {
  return (
    <>
    <div className="testimonials hero">
        <div className="container">
            {testimonials.map((item,i)=>(
                <div className="box">
                    <i>
                        {/* <FormatQuote /> */}
                        <p>{item.text}</p>
                        <div className="img">
                            <img src={item.image} alt="" />
                        </div>
                        <h3>{item.name}</h3>
                        <label>
                            {item.post}
                        </label>
                    </i>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}
