import React from 'react'
import './Footer.css'
import { Instagram, Twitter, YouTube } from '@material-ui/icons/';
function Footer() {
    const open = (link) => {
        window.open(link, '_blank');
    }
    return (
        <footer id="contact">
            <Instagram className="icon insta" onClick={() => open('https://instagram.com/programmer_nimish')} />
            <Twitter className="icon twitter" onClick={() => open('https://twitter.com/BandhaNimish')} />
            <YouTube className="icon yt" onClick={() => open('https://youtube.com/c/nimishbandha')} />
            <p className="copyright">© 2021 Nimish Bandha</p>
        </footer>
    )
}

export default Footer
