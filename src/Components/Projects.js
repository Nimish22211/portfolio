import React from 'react'
import './Projects.css'
import Project from './Project'
function Projects() {
    return (
        <div className="projects" id='projects'>
            <h1>Projects</h1>
            <section className="projects-section">
                <Project host="codepen" title='Calculator' photoURL="/Images/calculator.png" source="https://codepen.io/Nimish_A380/pen/MWmYgjO" />
                <Project live="https://cryptopricelist.netlify.app" host="github" title='Crypto Price Tracker' photoURL="/Images/cryptopricelist.png" source="https://github.com/Nimish22211/CryptoPrice" />
                <Project live="https://yourtodolist.netlify.app" host="github" title='TodoList' photoURL="/Images/todolist.png" source="https://github.com/Nimish22211/Todolist" />
                <Project live="http://medidata.netlify.app" host="github" title='Medidata' photoURL="/Images/medidata.png" source="https://github.com/Nimish22211/MediData" />
                <Project host="codepen" title='Pomodoro clock' photoURL="/Images/pomodoro-clock.png" source="https://codepen.io/Nimish_A380/pen/qBmYwrX" />
                <Project live="https://lessontracker.netlify.app" host="github" title='Lesson Tracker' photoURL="/Images/lesson-tracker.png" source="https://github.com/Nimish22211/LessonTrackerApp" />
                <Project live="https://yourrubikstimer.netlify.app" host="github" title='Rubiks Timer' photoURL="/Images/rubiks timer.png" source="https://github.com/Nimish22211/Rubiks-Timer" />
                <Project live="https://myjavascriptquiz.netlify.app" host="github" title='JS Quiz' photoURL="/Images/js quiz.png" source="https://github.com/Nimish22211/Quiz-with-React" />
            </section>
        </div>
    )
}

export default Projects
