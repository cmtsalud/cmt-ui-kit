import React from "react";
import { Row, Col, Input, Form, Select } from 'antd';
const { validate, format, clean } = require('rut.js');
import '../styles/document.less';

const { Option } = Select;

export default Document = ({
  countryCode,
  documentType,
  setDocumentType,
  form,
  handleOnDocumentNumberBlur
}) => {
  const documentTypeChile = [
    { text: 'Rut', value: 'rut' },
    { text: 'Pasaporte', value: 'passport' }
  ]
  const documentTypePeru = [
    { text: 'DNI', value: 'dni' },
    { text: 'RUC', value: 'ruc' },
    { text: 'Pasaporte', value: 'passport' }
  ]

  const placeholderInput = () => {
    let result = '';
    if (countryCode === 'PE') {
      result = documentType === 'dni' ? 'Número de dni' : 'Número de pasaporte';
    } else {
      result = documentType === 'rut' ? 'Número de Rut + DV' : 'Número de pasaporte';
    }
    return result;
  }

  const handleDocumentType = (value) => {
    setDocumentType(value);
    form.setFieldsValue({ documentNumber: null });
  };

  const handleDocumentNumber = async (event) => {
    let inputValue = event.target.value;
    if (documentType === 'rut') {
      form.setFieldsValue({ documentNumber: format(inputValue) });
    } else {
      form.setFieldsValue({ documentNumber: inputValue });
    }
    form.validateFields(['documentNumber']);
  }

  const validateNumber = ({ getFieldValue }) => ({
    validator(_, value) {
      if (value && value.length > 6) {
        if (getFieldValue('documentType') === 'rut') {
          const cleanRut = clean(value)
          if (validate(cleanRut)) {
            return Promise.resolve();
          } else {
            return Promise.reject(new Error('Rut inválido'));
          }
        } else if (getFieldValue('documentType') === 'ruc') {
          let ruc = value;
          if (!(ruc >= 1e10 && ruc < 11e9
            || ruc >= 15e9 && ruc < 18e9
            || ruc >= 2e10 && ruc < 21e9))
            return false;
          for (var suma = -(ruc % 10 < 2), i = 0; i < 11; i++, ruc = ruc / 10 | 0)
            suma += (ruc % 10) * (i % 7 + (i / 7 | 0) + 1);
          if (suma % 11 === 0) {
            return Promise.resolve();
          } else {
            return Promise.reject(new Error('Ruc inválido'));
          }
        } else if (getFieldValue('documentType') === 'dni' && value.includes('-')) {
          const dni = value.split('-')[0];
          const cchar = value.split('-')[1];
          const numberKeys = [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5];
          const charKeys = ['K', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

          const factors = [3, 2, 7, 6, 5, 4, 3, 2];
          const dniDigits = dni.trim().split('').map(x => parseInt(x, 10));
          const sum = dniDigits.reduce((sum, x, i) => {
            sum += factors[i] * x;
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
          initialValue={documentType}
        >
          <Select
            className='cmt-select'
            placeholder='Seleccione tipo de documento'
            id='documentType'
            onChange={handleDocumentType}
          >
            {countryCode === 'PE' ?
              documentTypePeru.map((method, index) => {
                return (
                  <Option key={index} value={method.value}>
                    {method.text}
                  </Option>
                )
              })
              :
              documentTypeChile.map((method, index) => {
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
          onChange={handleDocumentNumber}
          rules={[
            {
              required: true,
              message: 'Número de documento es requerido'
            },
            validateNumber
          ]}
          className="mb-0"
        >
          <Input
            className='cmt-input'
            onBlur={handleOnDocumentNumberBlur}
            placeholder={placeholderInput()}
            id='documentNumber'
          />
        </Form.Item>
      </Col>
    </Row >
  );

};