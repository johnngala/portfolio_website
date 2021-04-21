import React from 'react'
import {Link} from 'react-router-dom'


function FreelanceItem({businessName , siteUrl , thumbnail}) {
    return (
        <div className = "project_card">
            <h1 className = "projectname">{businessName}</h1>
            <img  className = "project_thumbnail" src={thumbnail}  alt = "Not displaying"/>
            <h1 className = "visit_site">Visit Site</h1>
           <a href = {siteUrl}><button className = "project_link">{siteUrl} </button></a>
        </div>
    )
}

export default FreelanceItem
