import React from 'react';

// Others
import { Col, Row, Button, List, Typography, Icon } from 'antd';

// imagenes
import Background from 'Images/home/bannerh.jpg';
import logow from 'Images/logow.png';

// Componentes
import HomeCarousel from 'Comp/Home/HomeCarousel';
import TechLogos from 'Comp/Home/TechLogos';
import ContactForm from 'Comp/Contacto/ContactForm';
import ContactData from 'Comp/Contacto/ContactData';

function Home() {
  const lista = ['Servicios', 'Politica de privacidad', 'Terminos de uso'];
  return (
    <React.Fragment>
      <div className="homeBanner">
        <img src={Background} alt="Gecko Logo" width="100%" />
      </div>
      <div className="home-title">
        <h1>Haz crecer tu negocio con internet</h1>
        <div className="home-button">
          <Button type="primary" block>
            ¿Porque SHELLY?
          </Button>
        </div>
      </div>
      {/* {---------------------------------Presentacion Inicial------------------------} */}
      <div className="home-body">
        <Row>
          <Col align="middle" sm={24}>
            <img src={logow} alt="ssaas" width="380px" />
          </Col>
          <Col align="middle" sm={24}>
            <h2 style={{ textAlign: 'center' }}>
              Nos especializamos en el <span>crecimiento</span> de tu negocio en
              internet.
            </h2>
          </Col>
        </Row>
        <Row>
          <h2 style={{ textAlign: 'center' }}>
            <br />
            Utilizamos marketing para que llegues a <span>millones</span> de
            personas y las tecnologías más avanzadas en el desarrollo de
            software para que <span>trabaje por ti</span>
          </h2>
          <br />
        </Row>
        {/* {---------------------------------Carrusel------------------------} */}
        <Row>
          <HomeCarousel />
        </Row>
        {/* {-----Fin carrusel-----} */}
        <Row>
          <Col sm={24}>
            <h1 style={{ textAlign: 'center' }}>
              Tú vas a <span>dominar</span> el mercado, te ayudamos...
            </h1>
          </Col>
        </Row>
      </div>
      {/* {---------------------------------Porcentajes------------------------} */}
      <Row className="tech-titles">
        <h3>Porque los resultados hablan más que las palabras...</h3>
      </Row>
      <Row>
        <Row className="percentage-box">
          <Col align="middle" sm={8}>
            <Row className="percentage">77%</Row>
            <Row className="px-2">
              <h4>
                De nuestros clientes aumenta sus ventas en un 250% en los
                primeros 3 meses
              </h4>
            </Row>
          </Col>
          <Col align="middle" sm={8}>
            <Row className="percentage">92%</Row>
            <Row className="px-2">
              <h4>
                Recupera su inversion antes de los primeros 6 meses de operación
              </h4>
            </Row>
          </Col>
          <Col align="middle" sm={8}>
            <Row className="percentage">54%</Row>
            <Row className="px-2">
              <h4>
                Es la reducción promedio en costos de produccion de los clientes
                que automatizaron sus productos/servicios
              </h4>
            </Row>
          </Col>
        </Row>
      </Row>
      {/* {---------------------------------Contact or services------------------------} */}
      <Row className="pxy-3">
        <Col className="mt-5" align="middle" sm={24}>
          <h1>
            Estás a <span>1 clic</span> de acercarte a tus metas{' '}
          </h1>
        </Col>
        <Col align="middle" sm={12}>
          <Row>
            <Col align="middle" sm={24}>
              <h2>
                Emprende, crece o fortalece tu negocio. En SHE<span>LL</span>Y
                nos encargamos de llevarte a lograr tu <span>objetivo</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="py-3" align="middle" sm={24}>
              <Button type="primary" block>
                <h5>Servicios de desarrollo</h5>
              </Button>
            </Col>
            <Col className="py-2" align="middle" sm={24}>
              <Button type="default" block>
                <h5>
                  <span>Servicios de marketing</span>
                </h5>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col align="middle" sm={24}>
              <ContactData />
            </Col>
          </Row>
        </Col>
        <Col align="middle" sm={12}>
          <Row>
            <Col align="middle" sm={24}>
              <ContactForm />
            </Col>
          </Row>
        </Col>
      </Row>
      {/* {---------------------------------Tech Logos------------------------} */}
      <TechLogos />
      {/* {---------------------------------Footer------------------------} */}
      <div className="footer-box">
        <Row>
          <Col sm={4}>
            <Row>
              <List
                header={<span>Otros</span>}
                size="small"
                dataSource={lista}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text mark />
                    <Icon type="right-circle" /> {item}
                  </List.Item>
                )}
              />
            </Row>
          </Col>
          <Col offset={8} sm={10}>
            <ContactData />
          </Col>
        </Row>
        <Row>
          <Col className="top40" align="middle" sm={24}>
            <img src={logow} alt="ssaas" width="160px" />
          </Col>
        </Row>
        <div className="rigths">
          © 2019 Shelly Boost, Inc. All Rights Reserved.
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
