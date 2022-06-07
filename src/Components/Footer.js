import React from 'react'
import './Footer.css'
import { Instagram, Twitter, YouTube, GitHub } from '@material-ui/icons/';
function Footer() {
    const year = new Date().getFullYear();
    const open = (link) => {
        window.open(link, '_blank');
    }
    return (
        <footer id="contact">
            <div className="icons">
                <Instagram className="icon insta" onClick={() => open('https://instagram.com/programmer_nimish')} />
                <Twitter className="icon twitter" onClick={() => open('https://twitter.com/BandhaNimish')} />
                <YouTube className="icon yt" onClick={() => open('https://youtube.com/c/nimishbandha')} />
                <GitHub className="icon github" onClick={() => open('https://github.com/nimish22211')} />
            </div>
            <p className="copyright">© {year} Nimish Bandha</p>
        </footer>
    )
}

export default Footer
