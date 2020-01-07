import React, { useState } from 'react';

import { connect } from 'react-redux';

import {
  Form,
  Input,
  Tooltip,
  Icon,
  AutoComplete,
  Checkbox,
  Button
} from 'antd';

// Componentes
import SimpleCaptcha from 'Comp/Captcha/SimpleCaptcha';

// Actions
import { addInput } from 'Actions/FormDate';

const ContactForm = Form.create({
  onValuesChange(props, values) {
    props.addI(values);
  }
})(props => {
  const [mails, setMails] = useState([]); // array de autocompletado de correos
  // eslint-disable-next-line no-unused-vars
  const [okCaptcha, setOkCaptcha] = useState(false); // valida si el captcha es correcto
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Received values of form: ');
  };

  const onCaptha = value => {
    setOkCaptcha(value);
  };

  // sirve para autocompletado en el input de correo
  const handleSearch = value => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com.mx'].map(
        domain => `${value}@${domain}`
      );
    }
    setMails(result);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };

  const children = mails.map(email => (
    <AutoComplete.Option key={email}>{email}</AutoComplete.Option>
  ));

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item label="E-mail">
        {getFieldDecorator('correo', {
          rules: [
            {
              type: 'email',
              message: 'No es un E-mail válido!'
            },
            {
              required: true,
              message: 'Por favor ingresa tu E-mail'
            }
          ]
        })(
          <AutoComplete onSearch={handleSearch} placeholder="input here">
            {children}
          </AutoComplete>
        )}
      </Form.Item>
      <Form.Item label="Empresa o negocio">
        {getFieldDecorator('enombre', {
          rules: [
            {
              required: false,
              whitespace: true
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Nombre">
        {getFieldDecorator('pnombre', {
          rules: [
            {
              required: true,
              message: 'Por favor ingresa tu nombre',
              whitespace: true
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item
        label={
          <span>
            Motivo de la cita&nbsp;
            <Tooltip title="Ingresa para que requieres asesoría, dependiendo de los detalles será el la especialización del asesor que te atenderá">
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        }
      >
        {getFieldDecorator('motivo', {
          rules: [
            {
              required: true,
              message: 'Por favor ingresa un motivo',
              whitespace: true
            }
          ]
        })(<Input.TextArea />)}
      </Form.Item>
      <Form.Item label="Captcha">
        <SimpleCaptcha handleCaptha={onCaptha} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        {getFieldDecorator('agreement', {
          valuePropName: 'checked'
        })(
          <Checkbox>
            He leído el <a href="#holo">acuerdo</a>
          </Checkbox>
        )}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="danger" block htmlType="submit">
          Registrar
        </Button>
      </Form.Item>
    </Form>
  );
});

const mapStateToProps = reducers => {
  return {
    formDate: reducers.formDateReducer
  };
};

const mapDispatchToProps = dispatch => ({
  addI: value => dispatch(addInput(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);

// fecha
// hora
// enombre
// pnombre
// motivo
// cargo
// tipoa
// correo
