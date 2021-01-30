import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Typical from 'react-typical'

function Home() {
    return (
        <div>
            <Header />
            <img src='images/hero-image.jpg' className= 'hero-image'alt = "hero image" />

            <h1 className = "typewritter-effect">Hey,My name is John Ngala.</h1> 
            <h1 className = "typewritter-effect"> 
                <Typical
                loop = {Infinity}
                wrapper = "b"
                steps = {
                    [
                     "I'm a software developer 💻 ,"  , 1000 ,
                     'magician,' , 1000 , 
                     'and boyfriend of 4. ( absolutely kidding 😉 )' , 1000
                    ]
                }
                />
            </h1>

            <div className="home-buttons">
                 <button className="individual-button"><Link to = '/project'>Project</Link></button>
                 <button className="individual-button"><Link to = '/freelance'>Freelance</Link></button>
                 <button className="individual-button"><Link to = '/about'>About</Link></button>
            </div>
            
        </div>
    )
}

export default Home
