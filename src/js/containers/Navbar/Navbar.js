import React from 'react'
import { Menu, Icon } from 'antd'
import logow from '../../../../imagenes/logow.png'
import NavButton from '../../utilComponents/NavButton'
import {Link} from 'react-router-dom'

const Navbar = (props) => (
    <div id='menu'>
        <div className="logo_container">
            <Link to="/">
                <img src={logow} alt='ssaas' width="100%"/>
            </Link>                
        </div>
            <div className="button-block">
                <NavButton 
                    styles="nav-buttons" 
                    label='Inicio '
                    iconType='home'
                    url="/"/>
                <NavButton 
                    styles="nav-buttons" 
                    label='Servicios  '
                    iconType='database'
                    url="/tareas"/>
                <NavButton 
                    styles="nav-buttons" 
                    label='¿Sabias que...?  '
                    iconType='rise'
                    url="/sabias"/>
            </div>
    </div>
);

export default Navbar;