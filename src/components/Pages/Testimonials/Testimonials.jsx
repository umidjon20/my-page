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
                        <i className='quote' data-aos = 'zoom-out-up'>
                            <FormatQuote />
                        </i>
                        <p  data-aos = 'zoom-out-down'>{item.text}</p>
                        <div className="img">
                            <img src={item.image} alt=""  data-aos = 'zoom-out-right'/>
                        </div>
                        <h3  data-aos = 'zoom-out-left'>{item.name}</h3>
                        <label  data-aos = 'zoom-out'>
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
