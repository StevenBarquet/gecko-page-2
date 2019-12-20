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
        <a className="whats-icon" target="_blank" href="https://web.whatsapp.com/send?phone=5215533700670&amp;text=howard.servehttp.com:3000/%0A%0AHola,%20me%20gustaría%20obtener%20más%20información.">
          <img src="https://cdn.shopify.com/s/files/1/0070/3666/5911/files/icon_only_new_inverted.png?469" alt="whatsapp" width="54px" />
        </a>   
  </BrowserRouter>
);

export default App;
