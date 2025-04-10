import React from 'react'

import { Heading } from '../../Common/Heading/Heading'
import './Services.scss'
import { services } from '../../Data/mydata'
export const Services = () => {
  return (
    <>
        <section className='services'>
            <div className="container">
                <Heading title='Services' />
                <div className="content grid3">
                    {services.map((item, i)=>(
                        <div className="box" key={i}>
                            <i>{item.icon}</i>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}
