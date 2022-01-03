import React from 'react'
import './Project.css'
import { GitHub } from '@material-ui/icons/';

function Project({ title, photoURL, host, source }) {
    const open = (link) => {
        window.open(link, '_blank');
    }
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <img src={photoURL} alt={title} className="project_img" />
            <div className="card-footer">
                <div className="source">
                    <button className="" onClick={() => open(source)}>Source Code </button>
                    {host === 'github' && <GitHub />}
                </div>
            </div>
        </div>
    )
}

export default Project
