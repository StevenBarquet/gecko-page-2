import React from 'react';

// Others
import { Col, Row, Steps, Collapse } from 'antd';

// Componentes

const GrowStep = props => {
  const { src, step, changeStepSlide } = props;

  const { Step } = Steps;
  const { Panel } = Collapse;

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  console.log(props);

  return (
    <React.Fragment>
      <Row>
        <Col sm={6}>
          <Steps
            className="ml-3 mt-3"
            direction="vertical"
            onChange={changeStepSlide}
            current={step}
          >
            <Step title="Paso 1" description="Idea" />
            <Step title="Paso 2" description="Boceto" />
            <Step title="Paso 3" description="Presencia online" />
            <Step title="Paso 4" description="Negocio Online" />
            <Step
              title="Paso 5"
              description="Empresa, E-Comerce o Proveedor profesional de servicios"
            />
            <Step
              title="Paso 6"
              description="Automatización, Nuevas Características, Optimización y más"
            />
          </Steps>
        </Col>
        <Col align="middle" sm={10}>
          <div className="grow-img-container">
            <img src={src} alt="idea" width="100%" />
          </div>
        </Col>
        <Col className="pxy-3" align="middle" sm={8}>
          <Collapse bordered={false} accordion>
            <Panel header="Detalles" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
      <div className="grow-bottom-bar" />
    </React.Fragment>
  );
};

export default GrowStep;
