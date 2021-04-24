import React from 'react'
import {Link} from 'react-router-dom'

function CustomHeader(props) {
    return (
        <div>
            <div className = 'component-header'>
                    <button><Link to = '/'><img src = 'images/backArrow.png'/></Link></button>
                </div>
        </div>
    )
}

export default CustomHeader
