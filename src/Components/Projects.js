import React from 'react'
import './Projects.css'
import Project from './Project'
function Projects() {
    return (
        <div className="projects" id='projects'>
            <h1>Projects</h1>
            <section className="projects-section">
                <Project host="codepen" title='Calculator' photoURL="/Images/calculator.png" source="https://codepen.io/Nimish_A380/pen/MWmYgjO" />
                <Project host="github" title='Crypto Price Tracker' photoURL="/Images/cryptopricelist.png" source="https://github.com/Nimish22211/CryptoPrice" />
                <Project host="github" title='TodoList' photoURL="/Images/todolist.png" source="https://github.com/Nimish22211/Todolist" />
                <Project host="github" title='Medidata' photoURL="/Images/medidata.png" source="https://github.com/Nimish22211/MediData" />
                <Project host="codepen" title='Pomodoro clock' photoURL="/Images/pomodoro-clock.png" source="https://codepen.io/Nimish_A380/pen/qBmYwrX" />
                <Project host="github" title='Lesson Tracker' photoURL="/Images/lesson-tracker.png" source="https://github.com/Nimish22211/LessonTrackerApp" />
                <Project host="github" title='Rubiks Timer' photoURL="/Images/rubiks timer.png" source="https://github.com/Nimish22211/Rubiks-Timer" />
                <Project host="github" title='JS Quiz' photoURL="/Images/js quiz.png" source="https://github.com/Nimish22211/Quiz-with-React" />
            </section>
        </div>
    )
}

export default Projects
