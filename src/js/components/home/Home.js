import React from 'react';

// Others
import { Col, Row, Carousel, Radio } from 'antd'

//Componentes
import GrowImg from './GrowImg.jsx'
import TechIcon from './TechIcon.jsx'

//imagenes
import Background from '../../../../imagenes/home/bannerh.jpg'
import idea from '../../../../imagenes/home/idea.png'
import boceto from '../../../../imagenes/home/prototipo-web.png'
import presencia from '../../../../imagenes/home/presentacion-web.png'
import negocio from '../../../../imagenes/home/negocio-web.png'
import empresa from '../../../../imagenes/home/empresa-web.png'
import mas from '../../../../imagenes/home/evoluciona.png'

// Logos
import android from '../../../../imagenes/home/tech/small/android.png'
import apache from '../../../../imagenes/home/tech/small/apache.png'
import aws from '../../../../imagenes/home/tech/small/aws.png'
import azure from '../../../../imagenes/home/tech/small/azure.png'
import bitbucket from '../../../../imagenes/home/tech/small/bitbucket.png'
import bluemix from '../../../../imagenes/home/tech/small/bluemix.png'
import bootstrap from '../../../../imagenes/home/tech/small/bootstrap.png'
import centos from '../../../../imagenes/home/tech/small/centos.png'
import cssLogo from '../../../../imagenes/home/tech/small/css.png'
import debian from '../../../../imagenes/home/tech/small/debian.png'
import django from '../../../../imagenes/home/tech/small/django.png'
import docker from '../../../../imagenes/home/tech/small/docker.png'
import fedora from '../../../../imagenes/home/tech/small/fedora.png'
import flask from '../../../../imagenes/home/tech/small/flask.png'
import git from '../../../../imagenes/home/tech/small/git.png'
import github from '../../../../imagenes/home/tech/small/github.png'
import gitlab from '../../../../imagenes/home/tech/small/gitlab.png'
import heroku from '../../../../imagenes/home/tech/small/heroku.png'
import html5 from '../../../../imagenes/home/tech/small/html5.png'
import ibmCloud from '../../../../imagenes/home/tech/small/ibmCloud.png'
import ibm from '../../../../imagenes/home/tech/small/ibm.png'
import java from '../../../../imagenes/home/tech/small/java.png'
import jenkins from '../../../../imagenes/home/tech/small/jenkins.png'
import jquery from '../../../../imagenes/home/tech/small/jquery.png'
import js from '../../../../imagenes/home/tech/small/js.png'
import kubernetes from '../../../../imagenes/home/tech/small/kubernetes.png'
import mocha from '../../../../imagenes/home/tech/small/mocha.png'
import mongo from '../../../../imagenes/home/tech/small/mongo.png'
import mysql from '../../../../imagenes/home/tech/small/mysql.png'
import native from '../../../../imagenes/home/tech/small/native.png'
import node from '../../../../imagenes/home/tech/small/node.png'
import openshift from '../../../../imagenes/home/tech/small/openshift.png'
import postgres from '../../../../imagenes/home/tech/small/postgres.png'
import python from '../../../../imagenes/home/tech/small/python.png'
import rails from '../../../../imagenes/home/tech/small/rails.png'
import reactLogo from '../../../../imagenes/home/tech/small/reactLogo.png'
import redHat from '../../../../imagenes/home/tech/small/redHat.png'
import reduxLogo from '../../../../imagenes/home/tech/small/reduxLogo.png'
import spring from '../../../../imagenes/home/tech/small/spring.png'
import ubuntu from '../../../../imagenes/home/tech/small/ubuntu.png'
import webpack from '../../../../imagenes/home/tech/small/webpack.png'



function Home(){
    return(
        <React.Fragment>
        <div className="home-title">
            <h1><div>GE<span>CK</span>O</div> se especializa en el <span>crecimiento</span> de tu negocio en <div>internet.</div></h1>
            <h2>Utilizamos marketing para que llegues a <div>millones</div> de personas y las tecnologías más avanzadas en el desarrollo de software para que <div>trabaje por ti</div></h2>
        </div>
        <div className="homeBanner"><img src={Background} alt="Gecko Logo" width="100%"/></div>
        <div className="home-body">
            <Row>
              <Col sm={24}>
                  <h2 style={{textAlign: 'center'}} >Tú vas a <span>dominar</span> el mercado, te ayudamos...</h2>
              </Col>
            </Row>
            <Row>
            <Carousel autoplay dotPosition="bottom" >
                <div>
                    <GrowImg 
                    src={idea} 
                    title="Paso 1" 
                    label="Idea" />
                </div>
                <div>
                    <GrowImg 
                    src={boceto} 
                    title="Paso 2"  
                    label="Boceto" />  
                </div>
                <div>
                    <GrowImg 
                    src={presencia} 
                    title="Paso 3" 
                    label="Presencia ONLINE" />
                </div>
                <div>
                    <GrowImg 
                    src={negocio} 
                    title="Paso 4" 
                    label="Negocio Online" /> 
                </div>
                <div>
                    <GrowImg 
                    src={empresa} 
                    title="Paso 5" 
                    label="Empresa, E-Comerce o Proveedor profesional de servicios" />
                </div>
                <div>
                    <GrowImg 
                    src={mas} 
                    title="Paso 6"
                    label="Automatización, Nuevas Características, Optimización y más" /> 
                </div>
                </Carousel>                  
            </Row>
        </div>
        <Row>
        <Col sm={24}>
                <Row className="tech-titles" >
                    <h3>Tecnologías y técnicas de marketing</h3>
                </Row>
                <Row className="ml-3">
                    <Col sm={4}>
                        <TechIcon src={reactLogo} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={reactLogo} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={reactLogo} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={reactLogo} label="React" />
                    </Col> 
                </Row>
            </Col>
            <Col sm={24}>
                <Row className="tech-titles" >
                    <h3>Tecnologías de desarrollo</h3>
                </Row>
                <Row className="ml-3" >
                    <Col sm={4}>
                        <TechIcon src={bluemix} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={apache} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={aws} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={azure} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={android} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={bitbucket} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={bootstrap} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={centos} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={cssLogo} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={debian} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={django} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={flask} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={fedora} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={docker} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={aws} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={azure} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={git} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={github} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={gitlab} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={heroku} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={html5} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={ibmCloud} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={ibm} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={java} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={jenkins} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={jquery} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={js} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={kubernetes} label="React" />
                    </Col>
                    <Col sm={4}>
                        <TechIcon src={mocha} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={mongo} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={mysql} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={node} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={openshift} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={postgres} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={python} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={rails} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={native} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={reactLogo} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={redHat} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={reduxLogo} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={spring} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={ubuntu} label="React" />
                    </Col> 
                    <Col sm={4}>
                        <TechIcon src={webpack} label="React" />
                    </Col> 
                </Row>
            </Col>            
        </Row>
      </React.Fragment>   
    )
}

export default Home