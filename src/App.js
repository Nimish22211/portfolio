import React from 'react'
import About from './Components/About'
import Main from './Components/Main'
import Header from './Components/Header'
import Youtube from './Components/Youtube'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Certificates from './Components/Certificates'
function App() {
    return (
        <div>
            <Header />
            <Main />
            <Youtube />
            <Projects />
            <About />
            <Certificates />
            <Footer />
        </div>
    )
}

export default App
