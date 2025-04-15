import React from 'react'
import { Heading } from '../../Common/Heading/Heading'
import { blog } from '../../Data/mydata'
import './Blog.scss'
export const Blog = () => {
  return (
    <>
    <section className='blog'>
      <div className="container">
        <Heading title={'Blog'} />
        <div className="content grid3">
          {blog.map((item)=>(
            <div className="box">
              <div className="img">
                <img src={item.cover} alt="bbb" />
              </div>
              <div className="text">
                <h3>{item.title}</h3>
                <label >
                  By {item.author} {item.date}
                </label>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
