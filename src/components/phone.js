import React from "react";
import { Form } from 'antd';
import parsePhoneNumber from 'libphonenumber-js';
import PhoneInput from 'react-phone-input-2';
import es from 'react-phone-input-2/lang/es.json';
import '../styles/phone.less';

export default ({
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
            }
            if (value && value.length > 4) {
              console.log(value)
              let fieldValue = value;
              if (!fieldValue.includes('+')) {
                fieldValue = countryCode === 'PE' ? `+${fieldValue}` : `+${fieldValue}`;
              } else if (!fieldValue.includes(countryCode === 'PE' ? 51 : 56)) {
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
        onChange={onChangePhone && onChangePhone}
      />
    </Form.Item>
  )
}