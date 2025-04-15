import React from 'react'

import './Footer.scss'
import { social } from '../../Data/mydata'
export const Footer = () => {
  return (
    <>
    <footer>
        {social.map((item)=>(
            <i>{item.icon}</i>
        )
        )}
        <p>All rights Rescved 2025</p>
    </footer>
    </>
  )
}
