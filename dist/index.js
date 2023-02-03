'use strict';



function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var antd = require('antd');
var PhoneInput = require('react-phone-input-2');
require('react-phone-input-2/lib/style.css');
var es = require('react-phone-input-2/lang/es.json');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PhoneInput__default = /*#__PURE__*/_interopDefaultLegacy(PhoneInput);
var es__default = /*#__PURE__*/_interopDefaultLegacy(es);

__$styleInject("/* Colors */\n@font-face {\n  font-family: \"MarkPro\";\n  src: url(\"~cmt-ui-kit/src/fonts/MarkPro/MarkPro.woff\") format(\"woff\"), url(\"~cmt-ui-kit/src/fonts/MarkPro/MarkPro.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-size: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"MarkProBold\";\n  src: url(\"~cmt-ui-kit/src/fonts/MarkProBold/MarkPro-Bold.woff\") format(\"woff\"), url(\"~cmt-ui-kit/src/fonts/MarkProBold/MarkPro-Bold.woff2\") format(\"woff2\");\n  font-weight: bold;\n  font-size: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"fontello\";\n  src: url(\"~cmt-ui-kit/src/fonts/icons/Fontello/font/fontello.eot?12700268\");\n  src: url(\"~cmt-ui-kit/src/fonts/icons/Fontello/font/fontello.eot?12700268#iefix\") format(\"embedded-opentype\"), url(\"~cmt-ui-kit/src/fonts/icons/Fontello/font/fontello.woff2?12700268\") format(\"woff2\"), url(\"~cmt-ui-kit/src/fonts/icons/Fontello/font/fontello.woff?12700268\") format(\"woff\"), url(\"~cmt-ui-kit/src/fonts/icons/Fontello/font/fontello.ttf?12700268\") format(\"truetype\"), url(\"~cmt-ui-kit/src/fonts/icons/Fontello/font/fontello.svg?12700268#fontello\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-size: 20px;\n}\n[class^=\"icon-\"]:before,\n[class*=\" icon-\"]:before {\n  font-family: \"fontello\" !important;\n  font-style: normal;\n  font-weight: normal;\n  speak: never;\n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: 0.2em;\n  text-align: center;\n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* System Icons */\n.icon-system-edit:before {\n  content: \"\\e80f\";\n}\n.icon-system-calendar:before {\n  content: \"\\e803\";\n}\n.icon-system-clock:before {\n  content: \"\\e80a\";\n}\n.icon-system-close:before {\n  content: \"\\e80b\";\n}\n.icon-system-chevron-up:before {\n  content: \"\\e809\";\n}\n.icon-system-chevron-right:before {\n  content: \"\\e808\";\n}\n.icon-system-chevron-left:before {\n  content: \"\\e807\";\n}\n.icon-system-chevron-down:before {\n  content: \"\\e806\";\n}\n.icon-system-delete:before {\n  content: \"\\e80c\";\n}\n.icon-system-placeholder:before {\n  content: \"\\e817\";\n}\n.icon-system-search:before {\n  content: \"\\e81a\";\n}\n.icon-system-mail:before {\n  content: \"\\e814\";\n}\n.icon-system-phone:before {\n  content: \"\\e816\";\n}\n.icon-system-plus:before {\n  content: \"\\e818\";\n}\n.icon-system-user:before {\n  content: \"\\e81c\";\n}\n.icon-system-check:before {\n  content: \"\\e805\";\n}\n.icon-system-calendar-2:before {\n  content: \"\\e802\";\n}\n.icon-system-download:before {\n  content: \"\\e80e\";\n}\n.icon-system-menu:before {\n  content: '\\e815';\n}\n.icon-system-share:before {\n  content: '\\e81b';\n}\n/* Brand Icons */\n.icon-brand-facebook:before {\n  content: \"\\e810\";\n}\n.icon-brand-laboratory:before {\n  content: \"\\e812\";\n}\n.icon-brand-linkedin:before {\n  content: \"\\e813\";\n}\n.icon-brand-billing:before {\n  content: \"\\e80d\";\n}\n.icon-brand-feedback:before {\n  content: '\\e811';\n}\n.icon-brand-question-square:before {\n  content: '\\e819';\n}\n.icon-brand-chart:before {\n  content: '\\e804';\n}\n.icon-alert-square:before {\n  content: '\\e801';\n}\n.icon-alert-rounded:before {\n  content: '\\e800';\n}\n.icon-brand-money:before {\n  content: '\\e81d';\n}\n");

var _require$1 = require('rut.js'),
  validate = _require$1.validate,
  format = _require$1.format,
  clean = _require$1.clean;
var Option = antd.Select.Option;
var documentCard = (function (_ref) {
  var countryCode = _ref.countryCode,
    setDocumentType = _ref.setDocumentType,
    handleOnDocumentNumberBlur = _ref.handleOnDocumentNumberBlur,
    form = _ref.form,
    classNameStyle = _ref.classNameStyle,
    _ref$optional = _ref.optional,
    optional = _ref$optional === void 0 ? false : _ref$optional,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'all' : _ref$type;
  var documentType = {
    person: {
      PE: [{
        text: 'Carnet de extranjeria',
        value: 'ce'
      }, {
        text: 'DNI',
        value: 'dni'
      }, {
        text: 'Pasaporte',
        value: 'passport'
      }],
      CL: [{
        text: 'Rut',
        value: 'rut'
      }, {
        text: 'Pasaporte',
        value: 'passport'
      }]
    },
    company: {
      PE: [{
        text: 'RUC',
        value: 'ruc'
      }],
      CL: [{
        text: 'Rut',
        value: 'rut'
      }, {
        text: 'Pasaporte',
        value: 'passport'
      }]
    },
    all: {
      CL: [{
        text: 'Rut',
        value: 'rut'
      }, {
        text: 'Pasaporte',
        value: 'passport'
      }],
      PE: [{
        text: 'Carnet de extranjeria',
        value: 'ce'
      }, {
        text: 'DNI',
        value: 'dni'
      }, {
        text: 'RUC',
        value: 'ruc'
      }, {
        text: 'Pasaporte',
        value: 'passport'
      }]
    }
  };
  var placeholderInput = function placeholderInput() {
    var result = '';
    if (countryCode === 'PE') {
      result = form.getFieldValue('documentType') ? form.getFieldValue('documentType').toLowerCase() === 'dni' ? 'Número de dni' : form.getFieldValue('documentType').toLowerCase() === 'ruc' ? 'Número de RUC' : form.getFieldValue('documentType').toLowerCase() === 'ruc' ? 'Número de carnet de extranjería' : 'Número de pasaporte' : form.getFieldValue('documentType');
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
        if (value && value.length > 6 && !optional) {
          if (getFieldValue('documentType') && getFieldValue('documentType').toLowerCase() === 'rut') {
            var cleanRut = clean(value);
            if (validate(cleanRut)) {
              return Promise.resolve();
            } else {
              return Promise.reject(new Error('Rut inválido'));
            }
          } else if (getFieldValue('documentType') && getFieldValue('documentType').toLowerCase() === 'ruc' && value.length < 11) {
            return Promise.reject(new Error('Ruc inválido'));
            // let ruc = value;
            // if (!(ruc >= 1e10 && ruc < 11e9
            //   || ruc >= 15e9 && ruc < 18e9
            //   || ruc >= 2e10 && ruc < 21e9))
            //   return Promise.reject(new Error('Ruc inválido'));
            // for (var suma = -(ruc % 10 < 2), i = 0; i < 11; i++, ruc = ruc / 10 | 0)
            //   suma += (ruc % 10) * (i % 7 + (i / 7 | 0) + 1);
            // if (suma % 11 === 0) {
            //   return Promise.resolve();
            // } else {
            //   return Promise.reject(new Error('Ruc inválido'));
            // }
          } else if (getFieldValue('documentType') && getFieldValue('documentType').toLowerCase() === 'dni' && value.length < 8) {
            return Promise.reject(new Error('DNI inválido'));
            // const dni = value.slice(0, -1);
            // const cchar = value.slice(-1);
            // const numberKeys = [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5];
            // const charKeys = ['K', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

            // const factors = [3, 2, 7, 6, 5, 4, 3, 2];
            // const dniDigits = dni.trim().split('').map(digit => parseInt(digit, 10));
            // const sum = dniDigits.reduce((sum, current, index) => {
            //   sum += factors[index] * current;
            //   return sum;
            // }, 0);
            // let keyIndex = 11 - (sum % 11);
            // keyIndex = keyIndex === 11 ? 0 : keyIndex;
            // const control = parseInt(cchar, 10) || cchar.toUpperCase();
            // if ((isNaN(control) && control == charKeys[keyIndex]) || control == numberKeys[keyIndex]) {
            //   return Promise.resolve();
            // } else {
            //   return Promise.reject(new Error('DNI inválido'));
            // }
          } else if (getFieldValue('documentType') && getFieldValue('documentType').toLowerCase() === 'ce' && value.length < 8) {
            return Promise.reject(new Error('DNI inválido'));
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
    className: "mb-0",
    rules: [{
      required: !optional,
      message: 'Tipo de documento es requerido'
    }, validateNumber]
  }, /*#__PURE__*/React__default["default"].createElement(antd.Select, {
    className: 'cmt-select ' + classNameStyle,
    placeholder: "Seleccione tipo de documento",
    onChange: handleDocumentType
  }, documentType[type][countryCode].map(function (method, index) {
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
      required: !optional,
      message: 'Número de documento es requerido'
    }, {
      min: 6,
      message: ''
    }, validateNumber],
    className: "mb-0"
  }, /*#__PURE__*/React__default["default"].createElement(antd.Input, {
    className: 'cmt-input ' + classNameStyle,
    placeholder: placeholderInput(),
    onChange: handleDocumentNumber,
    onBlur: handleOnDocumentNumberBlur
  }))));
});

__$styleInject("/* Colors */\n@font-face {\n  font-family: \"MarkPro\";\n  src: url(\"~cmt-ui-kit/src/fonts/MarkPro/MarkPro.woff\") format(\"woff\"), url(\"~cmt-ui-kit/src/fonts/MarkPro/MarkPro.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-size: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"MarkProBold\";\n  src: url(\"~cmt-ui-kit/src/fonts/MarkProBold/MarkPro-Bold.woff\") format(\"woff\"), url(\"~cmt-ui-kit/src/fonts/MarkProBold/MarkPro-Bold.woff2\") format(\"woff2\");\n  font-weight: bold;\n  font-size: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"fontello\";\n  src: url(\"~cmt-ui-kit/src/fonts/icons/Fontello/font/fontello.eot?12700268\");\n  src: url(\"~cmt-ui-kit/src/fonts/icons/Fontello/font/fontello.eot?12700268#iefix\") format(\"embedded-opentype\"), url(\"~cmt-ui-kit/src/fonts/icons/Fontello/font/fontello.woff2?12700268\") format(\"woff2\"), url(\"~cmt-ui-kit/src/fonts/icons/Fontello/font/fontello.woff?12700268\") format(\"woff\"), url(\"~cmt-ui-kit/src/fonts/icons/Fontello/font/fontello.ttf?12700268\") format(\"truetype\"), url(\"~cmt-ui-kit/src/fonts/icons/Fontello/font/fontello.svg?12700268#fontello\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-size: 20px;\n}\n[class^=\"icon-\"]:before,\n[class*=\" icon-\"]:before {\n  font-family: \"fontello\" !important;\n  font-style: normal;\n  font-weight: normal;\n  speak: never;\n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: 0.2em;\n  text-align: center;\n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* System Icons */\n.icon-system-edit:before {\n  content: \"\\e80f\";\n}\n.icon-system-calendar:before {\n  content: \"\\e803\";\n}\n.icon-system-clock:before {\n  content: \"\\e80a\";\n}\n.icon-system-close:before {\n  content: \"\\e80b\";\n}\n.icon-system-chevron-up:before {\n  content: \"\\e809\";\n}\n.icon-system-chevron-right:before {\n  content: \"\\e808\";\n}\n.icon-system-chevron-left:before {\n  content: \"\\e807\";\n}\n.icon-system-chevron-down:before {\n  content: \"\\e806\";\n}\n.icon-system-delete:before {\n  content: \"\\e80c\";\n}\n.icon-system-placeholder:before {\n  content: \"\\e817\";\n}\n.icon-system-search:before {\n  content: \"\\e81a\";\n}\n.icon-system-mail:before {\n  content: \"\\e814\";\n}\n.icon-system-phone:before {\n  content: \"\\e816\";\n}\n.icon-system-plus:before {\n  content: \"\\e818\";\n}\n.icon-system-user:before {\n  content: \"\\e81c\";\n}\n.icon-system-check:before {\n  content: \"\\e805\";\n}\n.icon-system-calendar-2:before {\n  content: \"\\e802\";\n}\n.icon-system-download:before {\n  content: \"\\e80e\";\n}\n.icon-system-menu:before {\n  content: '\\e815';\n}\n.icon-system-share:before {\n  content: '\\e81b';\n}\n/* Brand Icons */\n.icon-brand-facebook:before {\n  content: \"\\e810\";\n}\n.icon-brand-laboratory:before {\n  content: \"\\e812\";\n}\n.icon-brand-linkedin:before {\n  content: \"\\e813\";\n}\n.icon-brand-billing:before {\n  content: \"\\e80d\";\n}\n.icon-brand-feedback:before {\n  content: '\\e811';\n}\n.icon-brand-question-square:before {\n  content: '\\e819';\n}\n.icon-brand-chart:before {\n  content: '\\e804';\n}\n.icon-alert-square:before {\n  content: '\\e801';\n}\n.icon-alert-rounded:before {\n  content: '\\e800';\n}\n.icon-brand-money:before {\n  content: '\\e81d';\n}\n.search-phone-class {\n  font-family: 'MarkPro';\n  font-size: 16px;\n  width: 100% !important;\n  border: 1px solid #E4E4E4 !important;\n}\n.search-phone-class::placeholder {\n  color: #BEBEBE;\n}\n");

var _require = require('libphonenumber-js'),
  parsePhoneNumber = _require.parsePhoneNumber;
var phone = (function (_ref) {
  var countryCode = _ref.countryCode,
    onChangePhone = _ref.onChangePhone,
    optional = _ref.optional,
    labelText = _ref.labelText,
    formName = _ref.formName;
  var mostChosenCountries = ["cl", "ve", "pe", "co", "bo", "ec", "ht", "es", "ar", "br", "mx", "us", "cz", "fr", "cu", "cn", "do", "ca", "de", "pt", "at", "au", "ro", "py", "it", "nl", "pl", "gb", "uy"];
  var countryPrefix = {
    PE: '+51',
    CL: '+56'
  };
  var onChangeInsidePhone = function onChangeInsidePhone(value) {
    if (onChangePhone) {
      return onChangePhone(value);
    }
    if (!value) {
      return countryPrefix[countryCode];
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(antd.Form.Item, {
    name: formName ? formName : 'phone',
    label: labelText,
    rules: [{
      required: !optional,
      message: 'Teléfono es requerido'
    }, function (_ref2) {
      _ref2.getFieldValue;
      return {
        validator: function validator(_, value) {
          if (!value || value === '' || value.length <= 4) {
            return Promise.resolve();
          }
          if (value && value.length > 4) {
            var fieldValue = value;
            if (!fieldValue.includes('+')) {
              fieldValue = countryCode === 'PE' ? "+".concat(fieldValue) : "+".concat(fieldValue);
            } else if (!fieldValue.includes(countryCode === 'PE' ? 51 : 56)) {
              fieldValue = countryCode === 'PE' ? "+51".concat(fieldValue) : "+56".concat(fieldValue);
            }
            var parsedValue = parsePhoneNumber(fieldValue);
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
      };
    }]
  }, /*#__PURE__*/React__default["default"].createElement(PhoneInput__default["default"], {
    country: countryCode && countryCode.toLowerCase(),
    id: formName ? formName : 'phone',
    localization: es__default["default"],
    preferredCountries: mostChosenCountries,
    preserveOrder: ['preferredCountries'],
    placeholder: "Ingrese n\xFAmero de tel\xE9fono",
    enableSearch: true,
    searchPlaceholder: "Buscar",
    disableSearchIcon: true,
    searchNotFound: "No hay resultados",
    masks: {
      'ar': '(...) ....-....'
    },
    prefix: "+",
    inputClass: "search-phone-class",
    onChange: onChangeInsidePhone
  }));
});

exports.DocumentCard = documentCard;
exports.PhoneInput = phone;
