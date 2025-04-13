import React, { useState } from 'react'
import { portfolio } from '../../Data/mydata'

export const Portfolio = () => {
    const [list, setList] = useState(portfolio)
    console.log(list)
  return (
    <>
    <article>
        <div className="container">
            <div className="catButton">
            </div>
       
        <div className="content grid3">
            {list.map((items,i)=>(
                <div className="box" key={i}> 
                    <div className="img">
                        <img src={items.cover} alt="opo" />
                    </div>
                </div>
            ))}
        </div>
        </div>
    </article>
    </>
  )
}
