import React from 'react'

import { Heading } from '../../Common/Heading/Heading'
import { contact } from '../../Data/mydata'
import './Contact.scss'
export const Contact = () => {
  return (
    <>
    <div className="contact">
        <div className="container">
            <Heading title={'Keep In Touch'}/>
            <div className="content flexsb">
                <div className="right">
                    <form >
                        <div className="flex">
                            <input type="text" placeholder='Name'  data-aos = 'zoon-in-down'/>
                            <input type="email" placeholder='Email'  data-aos = 'zoon-in-up' />
                        </div>
                        <input type="text" placeholder='Subject'  data-aos = 'zoon-in-up' />
                        <textarea name="" id="" cols="30" rows="10"  data-aos = 'zoon-in-down'></textarea>
                        <button  data-aos = 'zoon-in-down'>Submit</button>
                    </form>
                </div>
                <div className="left">
                    {contact.map((item)=>(
                        <div className="box"  data-aos = 'zoon-in-down'>
                            <i>{item.icon}</i>
                            <p>{item.text1}</p>
                            <p>{item.text2}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
