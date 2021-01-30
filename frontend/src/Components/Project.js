import React from 'react'
import {Link} from 'react-router-dom'

function Project() {
    return (
        <div>
            {/*Insted of CustomHeader*/ }
                <div className = 'custom-header'>
                    <button><Link to = '/'><img src = 'images/backArrow.png' alt = "back"/></Link></button>
                    <h1>Personal Project</h1>
                </div>

            <h1 className = 'project-title'>Oxymusic</h1>
            <img className= 'project_img' src = 'images/oxymusic.png' alt = "projct image"/>
            <p className= 'project_description' >
                Oxymusic is a fun project that i build in my spare time.
                I've always frowned upon  how music apps come with  a lot 
                of  unnecessary features,so i decided to build one that i would
                love to use.The project is still a work in progress but 
                coming along very well nonetheless.Find out more from the 
               <a href = "http://www.oxy-music.com"> official website </a> or download the app from <a href = "https://play.google.com/store/apps/details?id=com.oxymusic.myaudioplayer">playstore </a>. 
            </p>
        </div>
    )
}

export default Project
