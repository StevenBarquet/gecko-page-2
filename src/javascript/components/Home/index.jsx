import React from 'react';

// Others
import { Col, Row } from 'antd';

// imagenes
import Background from 'Images/home/bannerh.jpg';

// Logos tech
import android from 'Images/home/tech/small/android.png';
import apache from 'Images/home/tech/small/apache.png';
import aws from 'Images/home/tech/small/aws.png';
import azure from 'Images/home/tech/small/azure.png';
import bitbucket from 'Images/home/tech/small/bitbucket.png';
import bluemix from 'Images/home/tech/small/bluemix.png';
import bootstrap from 'Images/home/tech/small/bootstrap.png';
import centos from 'Images/home/tech/small/centos.png';
import cssLogo from 'Images/home/tech/small/css.png';
import debian from 'Images/home/tech/small/debian.png';
import django from 'Images/home/tech/small/django.png';
import docker from 'Images/home/tech/small/docker.png';
import fedora from 'Images/home/tech/small/fedora.png';
import flask from 'Images/home/tech/small/flask.png';
import git from 'Images/home/tech/small/git.png';
import github from 'Images/home/tech/small/github.png';
import gitlab from 'Images/home/tech/small/gitlab.png';
import heroku from 'Images/home/tech/small/heroku.png';
import html5 from 'Images/home/tech/small/html5.png';
import ibmCloud from 'Images/home/tech/small/ibmCloud.png';
import ibm from 'Images/home/tech/small/ibm.png';
import java from 'Images/home/tech/small/java.png';
import jenkins from 'Images/home/tech/small/jenkins.png';
import jquery from 'Images/home/tech/small/jquery.png';
import js from 'Images/home/tech/small/js.png';
import kubernetes from 'Images/home/tech/small/kubernetes.png';
import mongo from 'Images/home/tech/small/mongo.png';
import mysql from 'Images/home/tech/small/mysql.png';
import native from 'Images/home/tech/small/native.png';
import node from 'Images/home/tech/small/node.png';
import openshift from 'Images/home/tech/small/openshift.png';
import postgres from 'Images/home/tech/small/postgres.png';
import python from 'Images/home/tech/small/python.png';
import rails from 'Images/home/tech/small/rails.png';
import reactLogo from 'Images/home/tech/small/reactLogo.png';
import redHat from 'Images/home/tech/small/redHat.png';
import reduxLogo from 'Images/home/tech/small/reduxLogo.png';
import spring from 'Images/home/tech/small/spring.png';
import ubuntu from 'Images/home/tech/small/ubuntu.png';
import webpack from 'Images/home/tech/small/webpack.png';
import digitalOcean from 'Images/home/tech/small/digitalOcean.png';
import npmLogo from 'Images/home/tech/small/npmLogo.png';

// Logos marrketing
import cm from 'Images/home/mkt/small/cm.png';
import digitalM from 'Images/home/mkt/small/digitalM.png';
import dmp from 'Images/home/mkt/small/dmp.png';
import fbads from 'Images/home/mkt/small/fbads.png';
import fbAn from 'Images/home/mkt/small/fbAn.png';
import gads from 'Images/home/mkt/small/gads.png';
import googlead from 'Images/home/mkt/small/googlead.png';
import linkedin from 'Images/home/mkt/small/linkedin.png';
import sem from 'Images/home/mkt/small/sem.png';
import seo from 'Images/home/mkt/small/seo.png';
import twitter from 'Images/home/mkt/small/twitter.png';
import estrategia from 'Images/home/mkt/small/estrategia.png';

// Componentes
import HomeCarousel from 'Comp/Home/HomeCarousel';
import TechIcon from 'Comp/Home/TechIcon';

function Home() {
  return (
    <React.Fragment>
      <div className="home-title">
        <h1>
          <div>
            SHE<span>LL</span>Y
          </div>{' '}
          se especializa en el <span>crecimiento</span> de tu negocio en{' '}
          <div>internet.</div>
        </h1>
        <h2>
          Utilizamos marketing para que llegues a <div>millones</div> de
          personas y las tecnologías más avanzadas en el desarrollo de software
          para que <div>trabaje por ti</div>
        </h2>
      </div>
      <div className="homeBanner">
        <img src={Background} alt="Gecko Logo" width="100%" />
      </div>
      <div className="home-body">
        <Row>
          <Col sm={24}>
            <h2 style={{ textAlign: 'center' }}>
              Tú vas a <span>dominar</span> el mercado, te ayudamos...
            </h2>
          </Col>
        </Row>
        <Row>
          <HomeCarousel />
        </Row>
      </div>
      <Row>
        <Col sm={24}>
          <Row className="tech-titles">
            <h3>Tecnologías y técnicas de marketing</h3>
          </Row>
          <Row>
            <Col align="middle" sm={4}>
              <TechIcon src={seo} label="seo" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={fbads} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={fbAn} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={gads} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={googlead} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={estrategia} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={dmp} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={sem} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={twitter} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={linkedin} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={digitalM} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={cm} label="React" />
            </Col>
          </Row>
        </Col>
        <Col sm={24}>
          <Row className="tech-titles">
            <h3>Tecnologías de desarrollo</h3>
          </Row>
          <Row>
            <Col align="middle" sm={4}>
              <TechIcon src={html5} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={cssLogo} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={npmLogo} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={reactLogo} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={native} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={android} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={node} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={js} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={aws} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={azure} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={java} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={bootstrap} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={bluemix} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={apache} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={bitbucket} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={centos} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={debian} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={django} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={flask} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={fedora} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={docker} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={git} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={github} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={gitlab} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={heroku} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={ibmCloud} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={ibm} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={jenkins} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={jquery} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={kubernetes} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={digitalOcean} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={mongo} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={mysql} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={openshift} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={postgres} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={python} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={rails} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={redHat} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={reduxLogo} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={spring} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={ubuntu} label="React" />
            </Col>
            <Col align="middle" sm={4}>
              <TechIcon src={webpack} label="React" />
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Home;
