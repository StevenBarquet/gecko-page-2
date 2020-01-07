import React, { useEffect, useState } from 'react';
import { Row, Col, Input } from 'antd';

import { randomString, drawCaptcha } from './functions';

const idCaptcha = 'myCanvas';

const SimpleCaptcha = props => {
  const [captcha] = useState(randomString());
  useEffect(() => {
    drawCaptcha(idCaptcha, captcha);
  });

  // Se necesita recibir un método que permita cambiar el valor de la bandera para determinar cuando el input sea correcto
  const handleChange = input => {
    const { handleCaptha } = props;
    if (input.target.value === captcha) {
      handleCaptha(true);
    } else {
      handleCaptha(false);
    }
  };

  const styleBackground = {
    background: ' #ffffff',
    width: '150px',
    borderRadius: '3px'
  };
  return (
    <Row gutter={8}>
      <Col span={12}>
        <Input onChange={handleChange} />
      </Col>
      <Col span={12}>
        <div style={styleBackground}>
          <canvas id={idCaptcha} width="86" height="35" />
        </div>
      </Col>
    </Row>
  );
};

export default SimpleCaptcha;
