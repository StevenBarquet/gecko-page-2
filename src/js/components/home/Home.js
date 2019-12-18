import React from 'react';

// Others
import { Col, Row, Button } from 'antd'

//Componentes


//imagenes
import Background from '../../../../imagenes/home/bannerh.jpg'

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
                  <h1>Tú vas a <span>dominar</span> el mercado, te ayudamos...</h1>
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