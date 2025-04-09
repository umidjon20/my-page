import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navlink } from '../Data/mydata.jsx'
import { Menu } from '@mui/icons-material'
import logo from '../Data/images/hacker-logo.png'
import './Header.scss'
export const Header = () => {
    const [responsive, setResponsive] = useState(false)
  return (
    <>
        <header>
            <div className="container flexsb">
                <div className="logo">
                    <img src={logo} alt="LOGO" />
                </div>
                <div className={responsive ? 'hideMenu' :'nav'}>
                    {navlink.map((links, i)=>(
                        <Link to={links.url}
                         key={i}>
                            {links.text}
                        </Link>
                    ))}
                </div>
                <button className='toggle'
                   onClick={()=>setResponsive(!responsive)}>
                    <Menu className='icon'>

                    </Menu>
                </button>
            </div>
        </header>
    </>
  )
}
