import React from "react";
import { Form } from 'antd';
const { parsePhoneNumber } = require('libphonenumber-js');
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import es from 'react-phone-input-2/lang/es.json';
import '../styles/phone.less';

const countryPrefix = {
  PE: '+51',
  CL: '+56'
}

const ReactPhone = ({
  countryCode,
  onChangePhone,
  optional,
  labelText,
  formName
}) => {

  const mostChosenCountries = [
    "cl",
    "ve",
    "pe",
    "co",
    "bo",
    "ec",
    "ht",
    "es",
    "ar",
    "br",
    "mx",
    "us",
    "cz",
    "fr",
    "cu",
    "cn",
    "do",
    "ca",
    "de",
    "pt",
    "at",
    "au",
    "ro",
    "py",
    "it",
    "nl",
    "pl",
    "gb",
    "uy",
  ];

  const onChangeInsidePhone = (value) => {
    if (onChangePhone) {
      return onChangePhone(value);
    }
    if (!value) {
      return countryPrefix[countryCode];
    }
  }

  return (
    <Form.Item
      name={formName ? formName : 'phone'}
      label={labelText}
      rules={[
        {
          required: !optional,
          message: 'Teléfono es requerido'
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || value === '' || value.length <= 4) {
              return Promise.resolve();
            } else {
              let fieldValue = value;
              if (!fieldValue.includes('+')) {
                fieldValue = `+${fieldValue}`;;
              }
              let parsedValue = parsePhoneNumber(fieldValue);
              if (parsedValue && parsedValue.isPossible()) {
                return Promise.resolve();
              }
            }
            if (optional) {
              return Promise.resolve();
            } else {
              return Promise.reject(new Error('Teléfono incorrecto. Revisa el prefijo y/o dígitos.'));
            }
          }
        })
      ]}
    >
      <PhoneInput
        country={countryCode && countryCode.toLowerCase()}
        id={formName ? formName : 'phone'}
        localization={es}
        preferredCountries={mostChosenCountries}
        preserveOrder={['preferredCountries']}
        placeholder="Ingrese número de teléfono"
        enableSearch
        searchPlaceholder='Buscar'
        disableSearchIcon
        searchNotFound='No hay resultados'
        masks={{ 'ar': '(...) ....-....' }}
        prefix="+"
        inputClass="search-phone-class"
        onChange={onChangeInsidePhone}
      />
    </Form.Item>
  )
};

const formatPhone = (phone, countryCode) => {
  let fieldValue = phone;
  if (!fieldValue) {
    fieldValue = `${countryPrefix[countryCode]}`;
  } else if (!phone.includes('+')) {
    fieldValue = `${countryPrefix[countryCode]}${phone}`;
  }
  return fieldValue;
};

export default {
  ReactPhone,
  formatPhone,
};
