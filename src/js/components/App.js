import React from 'react'
import  {BrowserRouter, Route} from 'react-router-dom'

// Components
import Home from './home/Home';
import Navbar from '../containers/Navbar/Navbar'
import Carrusel from './examples/Carrusel'

const Tareas = () => <div>Tareas</div>

const App = () => (
  <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/tareas' component={Carrusel}/>    
  </BrowserRouter>
);

export default App;
