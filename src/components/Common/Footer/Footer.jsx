import React from 'react'

import './Footer.scss'
import { social } from '../../Data/mydata'
export const Footer = () => {
  return (
    <>
    <footer>
        {social.map((item)=>(
            <i  data-aos = 'zoon-in-left'>{item.icon}</i>
        )
        )}
        <p  data-aos = 'zoon-in-right'>All rights Rescved 2025</p>
    </footer>
    </>
  )
}
