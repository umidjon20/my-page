import React from 'react'
import { FormatQuote } from '@mui/icons-material'
import { testimonials } from '../../Data/mydata'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import  Slider  from 'react-slick'

import './Testimonials.scss'
export const Testimonials = () => {
    const settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
    }
  return (
    <>
    <div className="testimonials hero">
        <div className="container">
            <Slider {...settings}>
            {testimonials.map((item)=>(
                <div className="box">
                        <i className='quote'>
                            <FormatQuote />
                        </i>
                        <p>{item.text}</p>
                        <div className="img">
                            <img src={item.image} alt="" />
                        </div>
                        <h3>{item.name}</h3>
                        <label>
                            {item.post}
                        </label>
                 
                </div>
            ))}
            </Slider>
        </div>
    </div>
    </>
  )
}
