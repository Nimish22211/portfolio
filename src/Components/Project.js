import React from 'react'
import './Project.css'
function Project({ title, photoURL }) {
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <img src={photoURL} alt={title} className="project_img" />

        </div>
    )
}

export default Project
