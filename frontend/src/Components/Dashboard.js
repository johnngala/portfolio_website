import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useAlert } from 'react-alert'
 
function Dashboard() {
        const [state , setState] = useState({ username : '' , pasword : ''})

        const handleSubmit = (e) => {
            e.preventDefault()
             alert.show('Invalid Credentials')

             setState({ username : '' , password : ''})
        }

    //react alerts
    const alert = useAlert() 

    return (
        <div className>
            <div className = 'dashboard'>
                {/*Instead of CustomHeader*/ }
                <div className = 'custom-header'>
                    <button><Link to = '/'><img src = 'images/backArrow.png' alt = "back"/></Link></button>
                    <h1>Dashboard</h1>
                </div>
                <h1 className = "dashboard_text">Login into the Dashboard</h1>

                <form>
                        <label htmlFor = "username" className = "">Username</label>
                        <input placeholder = 'username' />
                        <label htmlFor = "username" className = "">Password</label>
                        <input placeholder = 'password'  />
                        <button className = "submit-button"
                        onClick={handleSubmit}
                            >
                            Login
                        </button>
                </form>
            </div>
               
        </div>
    )
}

export default Dashboard
