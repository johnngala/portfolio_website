import './App.css';
import Header from './Components/Header'
import Footer  from './Components/Footer'
import Home from './Components/Home';
import CustomHeader from './Components/CustomHeader'
import Dashboard from './Components/Dashboard';
import Project from './Components/Project';
import Freelance from './Components/Freelance';
import About from './Components/About';

import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
       <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/dashboard'  component = {Dashboard} />
        <Route path = '/project'  component = {Project} />
        <Route path = '/freelance'  component = {Freelance} />
        <Route path = '/about'  component = {About} />
      </Switch>
      <Footer/>
    </div>
   
    </Router>
  );
}

export default App;
