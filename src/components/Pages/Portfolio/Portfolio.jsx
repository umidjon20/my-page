import React, { useState } from 'react'
import {Heading} from '../../Common/Heading/Heading'
import { portfolio } from '../../Data/mydata'


const allCategory = ['all', ...new Set(portfolio.map((item)=> item.category))]

import './Portfolio.scss'

export const Portfolio = () => {
    const [list, setList] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)
   
    const filterItems =(category)=>{
        const newItems = portfolio.filter((item)=>item.category===category)
        setList(newItems)

        if(category === 'all'){
            setList(portfolio)
        }
    }
  return (
    <>
    <article>
        <div className="container">
            <Heading title = 'Portfolio'/>
            <div className="catButton">
                {category.map((category)=>(
                    <button className='primaryBtn' onClick={()=> filterItems(category)}>
                        {category}
                    </button>
                ))}
            </div>
       
        <div className="content grid3">
            {list.map((items,i)=>(
                <div className="box" key={i}> 
                    <div className="img">
                        <img src={items.cover} alt="opo" />
                    </div>
                    <div className="overlay">
                        <h3>{items.title}</h3>
                        <span>{items.name}</span>
                        {/* <Visibility /> */}
                    </div>
                </div>
            ))}
        </div>
        </div>
    </article>
    </>
  )
}
