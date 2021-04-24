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
                <p className = 'freelance_project_description'>
                    Need to rent or buy a property or apartment? Home Afrika is an real estate company
                    that showcases hundreds of property listings for your selection.
                </p>
                
                <div className = 'freelance_view_project'>
                    <button className = 'freelance_project_button'>
                        <a href = 'https://homeafrika.herokuapp.com/' className = 'freelance_project_link'>
                            <img src = 'images/internet.png' alt = 'github'  className = 'freelance_project_img'/>
                            View Live
                        </a>
                    </button>
                    <button className = 'freelance_project_button'>
                        <a href = 'https://github.com/johnngala/home_afrika' className = 'freelance_project_link'>
                            <img src = 'images/github.png' alt = 'github'  className = 'freelance_project_img'/>
                            View project
                        </a>
                    </button>
                </div>

                <div className = 'spacer'>hello</div>
            </section>

            <section className = 'freelance_project'>
                <h1 className = 'freelance_project_name'>Phil's Kitchen</h1>
                <img className = 'freelance_project_image' src =  'images/project_image2.png' alt = 'project2' />
                <p className = 'freelance_project_description'>
                    Are you hungry?Phil's Kitchen has got your stomach.Check out their menus
                     and even order for home deliveries.
                </p>
               <div className = 'freelance_view_project'>
                    <button className = 'freelance_project_button'>
                        <a href = 'https://philskitchen.herokuapp.com/' className = 'freelance_project_link'>
                            <img src = 'images/internet.png' alt = 'github'  className = 'freelance_project_img'/>
                            View Live
                        </a>
                    </button>
                    <button className = 'freelance_project_button'>
                        <a href = 'https://github.com/johnngala/home_afrika' className = 'freelance_project_link'>
                            <img src = 'images/github.png' alt = 'github'  className = 'freelance_project_img'/>
                            View project
                        </a>
                    </button>
                </div>
                <div className = 'spacer'>hello</div>
            </section>

            <section className = 'freelance_project'>
                <h1 className = 'freelance_project_name'>Bold Collections</h1>
                <img className = 'freelance_project_image' src =  'images/project_image3.png' alt = 'project3' />
                <p className = 'freelance_project_description'>
                    The latest fashion and brands in town.We're a clothing brand that sells the trendiest
                    clothes in town.
                </p>
               <div className = 'freelance_view_project'>
                    <button className = 'freelance_project_button'>
                        <a href = 'https://boldcollections.herokuapp.com/' className = 'freelance_project_link'>
                            <img src = 'images/internet.png' alt = 'github'  className = 'freelance_project_img'/>
                            View Live
                        </a>
                    </button>
                    <button className = 'freelance_project_button'>
                        <a href = 'https://github.com/johnngala/home_afrika' className = 'freelance_project_link'>
                            <img src = 'images/github.png' alt = 'github'  className = 'freelance_project_img'/>
                            View project
                        </a>
                    </button>
                </div>
                <div className = 'spacer'>hello</div>
            </section>

            {/* <section className = 'freelance_project'>
                <h1 className = 'freelance_project_name'>Oxymusic Website</h1>
                <img className = 'freelance_project_image' src =  'images/project_image4.png' alt = 'project4' />
                <p className = 'freelance_project_description'>
                    Play your music seamlessly.Download the Android music player app  Oxymusic
                    and experience the magic.
                </p>
                <div className = 'freelance_view_project'>
                    <button className = 'freelance_project_button'>
                        <a href = 'https://oxymusicwebsite.herokuapp.com/' className = 'freelance_project_link'>
                            <img src = 'images/internet.png' alt = 'github'  className = 'freelance_project_img'/>
                            View Live
                        </a>
                    </button>
                    <button className = 'freelance_project_button'>
                        <a href = 'https://github.com/johnngala/home_afrika' className = 'freelance_project_link'>
                            <img src = 'images/github.png' alt = 'github'  className = 'freelance_project_img'/>
                            View project
                        </a>
                    </button>
                </div>
                <div className = 'spacer'>hello</div>
            </section> */}

       </div>
   )

}
export default Freelance


