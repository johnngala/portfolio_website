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
       <div className = 'project'>
            {/*Insted of CustomHeader*/ }
            <div className = 'custom-header'>
                <button><Link to = '/'><img src = 'images/backArrow.png' alt = "back"/></Link></button>
                <h1>Freelance Work</h1>
            </div>

            <div className = 'project__heading'>
             <hr />
             <h1 className = 'project__heading__h1'>Here are some things i've worked on!</h1>
             <hr/>
            </div>
           
            
            {/* <div>
                 {freelanceProjects.map(freelanceProject => (
                     <FreelanceItem
                     key = {freelanceProject.id}
                     businessName = {freelanceProject.businessName} 
                     siteUrl = {freelanceProject.siteUrl} 
                     thumbnail = {freelanceProject.thumbnail}  
                      />
                 ))}
            </div> */}

            <section className = 'freelance_project'>
                <h1 className = 'freelance_project_name'>Home Afrika</h1>
                <img className = 'freelance_project_image' src =  'images/project_image1.png' alt = 'project1' />
                <p className = 'freelance_project_description'>A Website for a real estate company.</p>
                
                <button className = 'freelance_project_button'>
                    <a href = 'https://github.com/johnngala/home_afrika' className = 'freelance_project_link'>
                        <img src = 'images/github.png' alt = 'github'  className = 'freelance_project_img'/>
                        Visit project
                    </a>
                </button>
                

                <div className = 'spacer'>hello</div>
            </section>

            <section className = 'freelance_project'>
                <h1 className = 'freelance_project_name'>Phil's Kitchen</h1>
                <img className = 'freelance_project_image' src =  'images/project_image2.png' alt = 'project2' />
                <p className = 'freelance_project_description'>A Website for a restaurant.</p>
                <button className = 'freelance_project_button'>
                    <a href = 'https://github.com/johnngala/phils_kitchen' className = 'freelance_project_link'>
                        <img src = 'images/github.png' alt = 'github'  className = 'freelance_project_img'/>
                        Visit project
                    </a>
                </button>
                <div className = 'spacer'>hello</div>
            </section>

            <section className = 'freelance_project'>
                <h1 className = 'freelance_project_name'>Bold Collections</h1>
                <img className = 'freelance_project_image' src =  'images/project_image3.png' alt = 'project3' />
                <p className = 'freelance_project_description'>An Online shop for a clothing brand.</p>
               <button className = 'freelance_project_button'>
                    <a href = 'https://github.com/johnngala/bold_collections' className = 'freelance_project_link'>
                        <img src = 'images/github.png' alt = 'github'  className = 'freelance_project_img'/>
                        Visit project
                    </a>
                </button>
                <div className = 'spacer'>hello</div>
            </section>

            <section className = 'freelance_project'>
                <h1 className = 'freelance_project_name'>Oxymusic Website</h1>
                <img className = 'freelance_project_image' src =  'images/project_image4.png' alt = 'project4' />
                <p className = 'freelance_project_description'>A website for the Android app Oxymusic.</p>
                <button className = 'freelance_project_button'>
                    <a href = 'https://github.com/johnngala/oxymusic_website' className = 'freelance_project_link'>
                        <img src = 'images/github.png' alt = 'github'  className = 'freelance_project_img'/>
                        Visit project
                    </a>
                </button>
                <div className = 'spacer'>hello</div>
            </section>

       </div>
   )

}
export default Freelance


