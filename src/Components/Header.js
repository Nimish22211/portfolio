import React from 'react'
import './Header.css'
function Header() {
    return (
        <header >
            <h1>Portfolio</h1>
            <div className='header_right'>
                <h1><a href="#youtube">YouTube</a></h1>
                <h1><a href="#projects">Projects</a></h1>
                <h1><a href="#about">About Me</a></h1>
                <h1><a href="#contact">Contact</a></h1>
            </div>
        </header>
    )
}

export default Header
