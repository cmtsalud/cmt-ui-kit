import React from "react";
import { Form } from 'antd';
import parsePhoneNumber from 'libphonenumber-js';
import PhoneInput from 'react-phone-input-2';
import es from 'react-phone-input-2/lang/es.json';
import '../styles/phone.less';

export default ({
  countryCode,
  form,
  classNameStyle,
  optional
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

  return (
    <Form.Item
      name="phone"
      label={optional ? 'Teléfono (opcional)' : 'Teléfono (opcional)'}
      rules={[
        {
          required: true,
          message: 'Teléfono es requerido'
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || value === '' || value.length <= 4) {
              return Promise.resolve();
            }
            if (value && value.length > 4) {
              let fieldValue = value;
              if (!fieldValue.includes('+')) {
                fieldValue = countryCode === 'PE' ? `+51${fieldValue}` : `+56${fieldValue}`;
              }
              let parsedValue = parsePhoneNumber(fieldValue);
              if (parsedValue && parsedValue.isPossible()) {
                return Promise.resolve();
              }
            }
            if (!optional) {
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
        id='phone'
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
      />
    </Form.Item>
  )
}