import React from 'react'
import './Projects.css'
import Project from './Project'
function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <section className="projects-section">
                <Project title='Calculator' photoURL="/calculator.png" />
                <Project title='Pomodoro clock' photoURL="/pomodoro-clock.png" />
                <Project title='Calculator' photoURL="/calculator.png" />
                <Project title='Pomodoro clock' photoURL="/pomodoro-clock.png" />
                <Project title='Calculator' photoURL="/calculator.png" />
                <Project title='Pomodoro clock' photoURL="/pomodoro-clock.png" />
                <Project title='Calculator' photoURL="/calculator.png" />
                <Project title='Pomodoro clock' photoURL="/pomodoro-clock.png" />
            </section>
        </div>
    )
}

export default Projects
