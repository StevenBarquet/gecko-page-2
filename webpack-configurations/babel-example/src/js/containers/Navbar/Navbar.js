import React from 'react'
import { Menu, Icon } from 'antd'
import logow from '../../../../imagenes/logow.png'
import NavButton from '../../utilComponents/NavButton'

const Navbar = (props) => (
    <div id='menu'>
        <div className="logo_container">
                <img src={logow} alt='ssaas' width="180px"/>
            </div>
        <div className="menu_container">
            <NavButton 
                styles="nav-buttons" 
                label='Inicio'
                url="/"/>
            <NavButton 
                styles="nav-buttons" 
                label='Servicios'
                url="/tareas"/>
            <NavButton 
                styles="nav-buttons" 
                label='¿Sabias que...?'
                url="/sabias"/>
        </div>
    </div>
);

export default Navbar;