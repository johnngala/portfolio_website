import React, {useState , useEffect} from 'react';
import axios from 'axios'
import FreelanceItem from './FreelanceItem'
import {Link} from 'react-router-dom'


const Freelance = () => {
   const  [freelanceProjects , setFreelanceProjects] = useState([])

   useEffect(() =>{
        const fetchData = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/website/`);
                setFreelanceProjects(res.data)
                console.log(res.data)
                
            }
            catch(err){

            }
        }
        fetchData();
   } , [])

   return(
       <div>
            {/*Insted of CustomHeader*/ }
                <div className = 'custom-header'>
                    <button><Link to = '/'><img src = 'images/backArrow.png' alt = "back"/></Link></button>
                    <h1>Freelance Work</h1>
                </div>
            <div>
                 {freelanceProjects.map(freelanceProject => (
                     <FreelanceItem
                     key = {freelanceProject.id}
                     businessName = {freelanceProject.businessName} 
                     siteUrl = {freelanceProject.siteUrl} 
                     thumbnail = {freelanceProject.thumbnail}  
                      />
                 ))}
            </div>
       </div>
   )

}

export default Freelance


