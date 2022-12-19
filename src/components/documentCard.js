import React from "react";
import { Row, Col, Input, Form, Select } from 'antd';
const { validate, format, clean } = require('rut.js');
import '../styles/document.less';

const { Option } = Select;

export default ({
  countryCode,
  setDocumentType,
  handleOnDocumentNumberBlur,
  form,
  classNameStyle,
  optional = false,
  type = 'all'
}) => {
  const documentType = {
    person: {
      PE: [
        { text: 'DNI', value: 'dni' },
        { text: 'Pasaporte', value: 'passport' },
      ],
      CL: [
        { text: 'Rut', value: 'rut' },
        { text: 'Pasaporte', value: 'passport' },
      ],
    },
    company: {
      PE: [
        { text: 'RUC', value: 'ruc' },
        { text: 'Pasaporte', value: 'passport' },
      ],
      CL: [
        { text: 'Rut', value: 'rut' },
        { text: 'Pasaporte', value: 'passport' },
      ],
    },
    all: {
      CL: [
        { text: 'Rut', value: 'rut' },
        { text: 'Pasaporte', value: 'passport' },
      ],
      PE: [
        { text: 'DNI', value: 'dni' },
        { text: 'RUC', value: 'ruc' },
        { text: 'Pasaporte', value: 'passport' },
      ],
    },
  };

  const placeholderInput = () => {
    let result = '';
    if (countryCode === 'PE') {
      result = form.getFieldValue('documentType') ?
        form.getFieldValue('documentType').toLowerCase() === 'dni'
          ? 'Número de dni'
          : form.getFieldValue('documentType').toLowerCase() === 'ruc'
            ? 'Número de RUC' : 'Número de pasaporte'
        : form.getFieldValue('documentType');
    } else {
      result = form.getFieldValue('documentType')
        && form.getFieldValue('documentType').toLowerCase() === 'rut'
        ? 'Número de Rut + DV' : 'Número de pasaporte';
    }
    return result;
  };

  const handleDocumentType = (value) => {
    setDocumentType(value);
    form.setFieldsValue({ documentNumber: null });
  };

  const handleDocumentNumber = (event) => {
    let inputValue = event.target.value;
    if (form.getFieldValue('documentType') && form.getFieldValue('documentType').toLowerCase() === 'rut') {
      form.setFieldsValue({ documentNumber: format(inputValue) });
    } else {
      form.setFieldsValue({ documentNumber: inputValue });
    }
    form.validateFields(['documentNumber']);
  };

  const validateNumber = ({ getFieldValue }) => ({
    validator(_, value) {
      if (value && value.length > 6 && !optional) {
        if (getFieldValue('documentType') && getFieldValue('documentType').toLowerCase() === 'rut') {
          const cleanRut = clean(value)
          if (validate(cleanRut)) {
            return Promise.resolve();
          } else {
            return Promise.reject(new Error('Rut inválido'));
          }
        } else if (getFieldValue('documentType') && getFieldValue('documentType').toLowerCase() === 'ruc') {
          let ruc = value;
          if (!(ruc >= 1e10 && ruc < 11e9
            || ruc >= 15e9 && ruc < 18e9
            || ruc >= 2e10 && ruc < 21e9))
            return Promise.reject(new Error('Ruc inválido'));
          for (var suma = -(ruc % 10 < 2), i = 0; i < 11; i++, ruc = ruc / 10 | 0)
            suma += (ruc % 10) * (i % 7 + (i / 7 | 0) + 1);
          if (suma % 11 === 0) {
            return Promise.resolve();
          } else {
            return Promise.reject(new Error('Ruc inválido'));
          }
        } else if (getFieldValue('documentType') && getFieldValue('documentType').toLowerCase() === 'dni') {
          if (value.length < 8) {
            return Promise.reject(new Error('DNI inválido'));
          }
          const dni = value.slice(0, -1);
          const cchar = value.slice(-1);
          const numberKeys = [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5];
          const charKeys = ['K', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

          const factors = [3, 2, 7, 6, 5, 4, 3, 2];
          const dniDigits = dni.trim().split('').map(digit => parseInt(digit, 10));
          const sum = dniDigits.reduce((sum, current, index) => {
            sum += factors[index] * current;
            return sum;
          }, 0);
          let keyIndex = 11 - (sum % 11);
          keyIndex = keyIndex === 11 ? 0 : keyIndex;
          const control = parseInt(cchar, 10) || cchar.toUpperCase();
          if ((isNaN(control) && control == charKeys[keyIndex]) || control == numberKeys[keyIndex]) {
            return Promise.resolve();
          } else {
            return Promise.reject(new Error('DNI inválido'));
          }
        }
      }
      return Promise.resolve();
    }
  });

  return (
    <Row>
      <Col xs={24} sm={10}>
        <Form.Item
          name="documentType"
          className="mb-0"
          rules={[
            {
              required: !optional,
              message: 'Tipo de documento es requerido'
            },
            validateNumber
          ]}
        >
          <Select
            className={'cmt-select ' + classNameStyle}
            placeholder='Seleccione tipo de documento'
            onChange={handleDocumentType}
          >
            {
              documentType[type][countryCode].map((method, index) => {
                return (
                  <Option key={index} value={method.value}>
                    {method.text}
                  </Option>
                )
              })
            }
          </Select>
        </Form.Item>
      </Col>
      <Col xs={24} sm={14}>
        <Form.Item
          name="documentNumber"
          rules={[
            {
              required: !optional,
              message: 'Número de documento es requerido'
            },
            {
              min: 6,
              message: ''
            },
            validateNumber
          ]}
          className="mb-0"
        >
          <Input
            className={'cmt-input ' + classNameStyle}
            placeholder={placeholderInput()}
            onChange={handleDocumentNumber}
            onBlur={handleOnDocumentNumberBlur}
          />
        </Form.Item>
      </Col>
    </Row >
  );

};