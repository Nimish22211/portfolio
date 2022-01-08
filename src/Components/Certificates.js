import React from 'react'
import Project from './Project'
import './Certificates.css'
function Certificates() {
    return (
        <div className="projects">
            <h1>Certificates</h1>
            <section className="projects-section">

                <Project live="https://www.freecodecamp.org/certification/nimish_bandha/responsive-web-design" title="Responsive Web Design" photoURL="/Images/responsive web design.png" />
                <Project live="https://www.freecodecamp.org/certification/nimish_bandha/javascript-algorithms-and-data-structures" title="Javascript" photoURL="/Images/javascript.png" />
                <Project live="https://www.freecodecamp.org/certification/nimish_bandha/front-end-development-libraries" title="Front End Liberaries" photoURL="/Images/frontend.png" />
            </section>
            <h2 className="certificates-footer">
                Will keep on adding more certificates...
            </h2>
        </div>
    )
}

export default Certificates
