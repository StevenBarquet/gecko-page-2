import React from 'react';
import { Row, Col, Icon } from 'antd';

// Logos footer
import whats from 'Images/home/footer-logos/whats_logo.png';
import fb from 'Images/home/footer-logos/fb_logo.png';
import insta from 'Images/home/footer-logos/insta_logo.png';
import gmail from 'Images/home/footer-logos/gmail_logo.png';

const ContactData = () => {
  return (
    <React.Fragment>
      <Row className="mt-3">
        <Col align="middle" sm={24}>
          <h6>
            <span>Contacto</span>
          </h6>
        </Col>
      </Row>
      <Row>
        <Col className="py-1" align="middle" sm={24}>
          <p>
            ¿Tienes alguna duda? Comunicate en cualquiera de los siguientes
            medios
          </p>
        </Col>
      </Row>
      <Row>
        <Col align="middle" sm={6}>
          <img
            className="dataLogo"
            src={whats}
            alt="whats app logo"
            width="60px"
          />
        </Col>
        <Col align="middle" sm={6}>
          <img
            className="dataLogo"
            src={fb}
            alt="whats app logo"
            width="60px"
          />
        </Col>
        <Col align="middle" sm={6}>
          <img
            className="dataLogo"
            src={insta}
            alt="whats app logo"
            width="60px"
          />
        </Col>
        <Col align="middle" sm={6}>
          <img
            className="dataLogo"
            src={gmail}
            alt="whats app logo"
            width="60px"
          />
        </Col>
      </Row>
      <Row className="footer-phone">
        <Col sm={12}>
          <span>
            <Icon type="phone" />
          </span>
          5533700670 <span>|</span> 5588834593
        </Col>
        <Col sm={12}>
          <span>
            <Icon type="mail" />
          </span>
          teamSheally@shellyboost.com
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ContactData;
