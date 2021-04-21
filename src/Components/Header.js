import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className = 'header'>
            <h1>John Ngala</h1>
            <Link to = '/dashboard'><button className ='header-dashboard-button'>Dashboard</button> </Link>
        </div>
    )
}

export default Header
