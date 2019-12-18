import React from 'react';

// Others
import { Col, Row, Button } from 'antd'

//Componentes
import GrowImg from './GrowImg.jsx'

//imagenes
import Background from '../../../../imagenes/home/bannerh.jpg'
import idea from '../../../../imagenes/home/idea-web.png'
import boceto from '../../../../imagenes/home/prototipo-web.png'
import presencia from '../../../../imagenes/home/presentacion-web.png'
import negocio from '../../../../imagenes/home/negocio-web.png'
import empresa from '../../../../imagenes/home/empresa-web.png'
import mas from '../../../../imagenes/home/evoluciona-web.png'

function Home(){
    return(
        <React.Fragment>
        <div className="home-title">
            <h1><div>GE<span>CK</span>O</div> se especializa en el <span>crecimiento</span> de tu negocio en <div>internet.</div></h1>
            <h2>Utilizamos marketing para que llegues a <div>millones</div> de personas y las tecnologías más avanzadas en el desarrollo de software para que <div>trabaje por ti</div></h2>
        </div>
        <div className="homeBanner"><img src={Background} alt="Gecko Logo" width="100%"/> </div>
        <div className="home-body">
            <Row>
              <Col sm={24}>
                  <h1 style={{textAlign: 'center'}} >Tú vas a <span>dominar</span> el mercado, te ayudamos...</h1>
              </Col>
            </Row>
            <Row>
                <GrowImg 
                src={idea} 
                margin="2%" 
                label="Idea" />
                <GrowImg 
                src={boceto} 
                margin="12%" 
                label="Boceto" />       
                <GrowImg 
                src={presencia} 
                margin="22%" 
                label="Presencia ONLINE" />
                <GrowImg 
                src={negocio} 
                margin="32%" 
                label="Negocio Online" /> 
                <GrowImg 
                src={empresa} 
                margin="42%" 
                label="Empresa, E-Comerce o Proveedor profesional de servicios" />
                <GrowImg 
                src={mas} 
                margin="52%" 
                label="Automatización, Nuevas Características, Optimización y más" />     
            </Row>
        </div>
        <Row>
                <Col sm={12}>
                    <h3 style={{textAlign: 'center'}} >Tecnologías de desarrollo</h3>
                </Col>
                <Col sm={12}>
                    <h3 style={{textAlign: 'center'}} >Tecnologías y técnicas de marketing</h3>
                </Col>
            </Row>
      </React.Fragment>   
    )
}

export default Home