import React from 'react'
import  {BrowserRouter, Route} from 'react-router-dom'

// Components
import Home from './home/Home';
import Navbar from '../containers/Navbar/Navbar'

const Tareas = () => <div>Tareas</div>

const App = () => (
  <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/tareas' component={Tareas}/>    
  </BrowserRouter>
);

export default App;
