import React from 'react'
import './Project.css'
import { GitHub } from '@material-ui/icons/';

function Project({ title, photoURL, host, source, live }) {
    const open = (link) => {
        window.open(link, '_blank');
    }
    return (
        <div className="card" onClick={live ? () => open(live) : () => open(source)}>
            <h3 className="card-title">{title}</h3>
            <img src={photoURL} alt={title} className="project_img" />
            <div className="card-footer">
                <div className="source">
                    {source && <button onClick={() => open(source)}>Source Code </button>}
                    {host === 'github' ? <GitHub /> : host === 'codepen' ? <svg className="codepen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 26" fill="none" stroke="#000" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" >
                        <path d="M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z" />
                    </svg> : <img src="/Images/fcc logo.svg" className="fcclogo" />}
                </div>
                {live && source ? <button onClick={() => open(live)}>Live Demo</button> : live && !source ? <button onClick={() => open(live)}>Live Certificate</button> : <p>live in codepen</p>}
            </div>
        </div>
    )
}

export default Project
