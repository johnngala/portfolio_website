import React from 'react'
import CustomHeader from './CustomHeader'
import {Link} from 'react-router-dom'

function About(props) {
    return (
        <div className = 'about'>
            {/*Insted of CustomHeader*/ }
                <div className = 'custom-header'>
                    <button><Link to = '/'><img src = 'images/backArrow.png' alt = "back"/></Link></button>
                    <h1>About Me</h1>
                </div>
                <img src = "images/about_me1.jpg" alt = "about_me"  className ="about_me_img"/>
                <h1 className = "about_me_h1">The Story of my life</h1>
                <p className = "about_me_txt">
                    As I said,I'm John Ngala.I am a fullstack web developer and Android developer.
                    I design,build and provide solutions to customer needs for their websites,
                    web applications and android apps.
                    At the moment I am mainly focused on freelancing. Creating websites for
                    small locally owned businesses trying to increase their web presence.
                    I am always surprised at how many small business owners want a website but 
                    are intimidated by reaching out to someone to create one for them.
                    My goal is to make that process as easy as possible for them.
                    Yeah.That's about it.If you like to talk visit the Contact section and
                    hit me up.
                </p>
        </div>
    )
}

export default About
