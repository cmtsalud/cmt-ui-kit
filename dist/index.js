'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var antd = require('antd');

function _interopDefaultLegacy(e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _require = require('rut.js'),
  validate = _require.validate,
  format = _require.format,
  clean = _require.clean;
var Option = antd.Select.Option;
var documentCard = (function (_ref) {
  var countryCode = _ref.countryCode,
    setDocumentType = _ref.setDocumentType,
    handleOnDocumentNumberBlur = _ref.handleOnDocumentNumberBlur,
    form = _ref.form,
    classNameStyle = _ref.classNameStyle;
  var documentTypeChile = [{
    text: 'Rut',
    value: 'rut'
  }, {
    text: 'Pasaporte',
    value: 'passport'
  }];
  var documentTypePeru = [{
    text: 'DNI',
    value: 'dni'
  }, {
    text: 'RUC',
    value: 'ruc'
  }, {
    text: 'Pasaporte',
    value: 'passport'
  }];

  var placeholderInput = function placeholderInput() {
    var result = '';

    if (countryCode === 'PE') {
      result = form.getFieldValue('documentType') && form.getFieldValue('documentType').toLowerCase() === 'dni' ? 'Número de dni' : 'Número de pasaporte';
    } else {
      result = form.getFieldValue('documentType') && form.getFieldValue('documentType').toLowerCase() === 'rut' ? 'Número de Rut + DV' : 'Número de pasaporte';
    }
    return result;
  };

  var handleDocumentType = function handleDocumentType(value) {
    setDocumentType(value);
    form.setFieldsValue({
      documentNumber: null
    });
  };

  var handleDocumentNumber = function handleDocumentNumber(event) {
    var inputValue = event.target.value;

    if (form.getFieldValue('documentType') && form.getFieldValue('documentType').toLowerCase() === 'rut') {
      form.setFieldsValue({
        documentNumber: format(inputValue)
      });
    } else {
      form.setFieldsValue({
        documentNumber: inputValue
      });
    }

    form.validateFields(['documentNumber']);
  };

  var validateNumber = function validateNumber(_ref2) {
    var getFieldValue = _ref2.getFieldValue;
    return {
      validator: function validator(_, value) {
        if (value && value.length > 6) {
          if (getFieldValue('documentType') && getFieldValue('documentType').toLowerCase() === 'rut') {
            var cleanRut = clean(value);

            if (validate(cleanRut)) {
              return Promise.resolve();
            } else {
              return Promise.reject(new Error('Rut inválido'));
            }
          } else if (getFieldValue('documentType') && getFieldValue('documentType').toLowerCase() === 'ruc') {
            var ruc = value;
            if (!(ruc >= 1e10 && ruc < 11e9 || ruc >= 15e9 && ruc < 18e9 || ruc >= 2e10 && ruc < 21e9)) return Promise.reject(new Error('Ruc inválido'));

            for (var suma = -(ruc % 10 < 2), i = 0; i < 11; i++, ruc = ruc / 10 | 0) {
              suma += ruc % 10 * (i % 7 + (i / 7 | 0) + 1);
            }

            if (suma % 11 === 0) {
              return Promise.resolve();
            } else {
              return Promise.reject(new Error('Ruc inválido'));
            }
          } else if (getFieldValue('documentType') && getFieldValue('documentType').toLowerCase() === 'dni' && value.includes('-')) {
            var dni = value.split('-')[0];
            var cchar = value.split('-')[1];
            var numberKeys = [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5];
            var charKeys = ['K', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
            var factors = [3, 2, 7, 6, 5, 4, 3, 2];
            var dniDigits = dni.trim().split('').map(function (x) {
              return parseInt(x, 10);
            });
            var sum = dniDigits.reduce(function (sum, x, i) {
              sum += factors[i] * x;
              return sum;
            }, 0);
            var keyIndex = 11 - sum % 11;
            keyIndex = keyIndex === 11 ? 0 : keyIndex;
            var control = parseInt(cchar, 10) || cchar.toUpperCase();

            if (isNaN(control) && control == charKeys[keyIndex] || control == numberKeys[keyIndex]) {
              return Promise.resolve();
            } else {
              return Promise.reject(new Error('DNI inválido'));
            }
          }
        }

        return Promise.resolve();
      }
    };
  };

  return /*#__PURE__*/React__default["default"].createElement(antd.Row, null, /*#__PURE__*/React__default["default"].createElement(antd.Col, {
    xs: 24,
    sm: 10
  }, /*#__PURE__*/React__default["default"].createElement(antd.Form.Item, {
    name: "documentType",
    className: "mb-0"
  }, /*#__PURE__*/React__default["default"].createElement(antd.Select, {
    className: 'cmt-select ' + classNameStyle,
    placeholder: "Seleccione tipo de documento",
    onChange: handleDocumentType
  }, countryCode === 'PE' ? documentTypePeru.map(function (method, index) {
    return /*#__PURE__*/React__default["default"].createElement(Option, {
      key: index,
      value: method.value
    }, method.text);
  }) : documentTypeChile.map(function (method, index) {
    return /*#__PURE__*/React__default["default"].createElement(Option, {
      key: index,
      value: method.value
    }, method.text);
  })))), /*#__PURE__*/React__default["default"].createElement(antd.Col, {
    xs: 24,
    sm: 14
  }, /*#__PURE__*/React__default["default"].createElement(antd.Form.Item, {
    name: "documentNumber",
    rules: [{
      required: true,
      message: 'Número de documento es requerido'
    }, validateNumber],
    className: "mb-0"
  }, /*#__PURE__*/React__default["default"].createElement(antd.Input, {
    className: 'cmt-input ' + classNameStyle,
    placeholder: placeholderInput(),
    onChange: handleDocumentNumber,
    onBlur: handleOnDocumentNumberBlur
  }))));
});

exports.DocumentCard = documentCard;
