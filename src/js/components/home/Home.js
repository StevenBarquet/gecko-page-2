import React from 'react';

// Others
import { Col, Row, Button } from 'antd'

//Componentes


//imagenes
import Background from '../../../../imagenes/home/bannerh.jpg'

function Home(){
    return(
        <React.Fragment>
        <div className={'home-title '}>
            <div>Ge<span>ck</span>o</div> se especializa en el crecimiento de tu negocio en <div>internet</div>
            <p>Utilizamos marketing para que llegues a <div>millones</div> de personas y las tecnologías más avanzadas en el desarrollo de software para que <div>trabaje por ti</div></p>
        </div>
        <div className="homeBanner"><img src={Background} alt="Gecko Logo" width="100%"/> </div>
        <div className="cuadros-container">
        <Row>
              <Col sm={12}>
                  Te llevamos 
              </Col>
          </Row>
          <Row>
              <Col sm={12}>
                  probando grid 1-12
              </Col>
              <Col sm={12}>
                  probando grid 13-24
              </Col>                  
          </Row>
        </div>
      </React.Fragment>   
    )
}

export default Home