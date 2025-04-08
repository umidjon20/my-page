import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
export const Header = () => {
  return (
    <>
        <header>
            <div className="container flexsb">
                <div className="logo">
                    <img src="" alt="LOGO" />
                </div>
                <div className="nav">
                    <Link to=''></Link>
                </div>
            </div>
        </header>
    </>
  )
}
