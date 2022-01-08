import React, { useEffect, useState } from 'react'
import './Header.css'
import { Menu, Close } from '@material-ui/icons/';
function Header() {
    const [width, setWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    })
    const openSideBar = () => {
        if (open === false) {
            setOpen(true);
            document.querySelector('.sidebar').classList.add('open');
            document.querySelector('.sidebar').classList.remove('close');
        } else {
            setOpen(false);
            document.querySelector('.sidebar').classList.remove('open');
            document.querySelector('.sidebar').classList.add('close');
        }
    }
    return (
        <header >
            <h1>Portfolio</h1>
            <div className='header_right'>
                <h1><a href="#certificates">Certificates</a></h1>
                <h1><a href="#youtube">YouTube</a></h1>
                <h1><a href="#projects">Projects</a></h1>
                <h1><a href="#about">About Me</a></h1>
                <h1><a href="#contact">Contact</a></h1>
            </div>
            <div className="sidebar">
                <a href="#certificates">Certificates</a>
                <a href="#youtube">YouTube</a>
                <a href="#projects">Projects</a>
                <a href="#about">About Me</a>
                <a href="#contact">Contact</a>
            </div>
            {width < 768 && open === false ? < Menu className="menu" onClick={() => openSideBar()} /> : null}
            {open !== false && <Close className="menu" onClick={() => openSideBar()} />}
        </header>
    )
}

export default Header
