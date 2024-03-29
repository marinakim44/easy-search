"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Search;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Search(_ref) {
  var _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    _ref$fields = _ref.fields,
    fields = _ref$fields === void 0 ? [] : _ref$fields,
    _ref$bg = _ref.bg,
    bg = _ref$bg === void 0 ? "#dedede" : _ref$bg,
    _ref$text = _ref.text,
    text = _ref$text === void 0 ? "black" : _ref$text;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    filteredByFields = _useState2[0],
    setFilteredByFields = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filtered = _useState4[0],
    setFiltered = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    searchField = _useState6[0],
    setSearchField = _useState6[1];
  (0, _react.useEffect)(function () {
    filterDataByFields();
  }, []);
  var handleChange = function handleChange(e) {
    setSearchField(e.target.value);
  };
  (0, _react.useEffect)(function () {
    filterDataBySearchField(filteredByFields, searchField);
  }, [filteredByFields, searchField]);
  var handleKeyUp = function handleKeyUp(e) {
    if (e.key === "Escape") {
      setSearchField("");
    } else if (e.key === "Enter") {}
  };
  var filterDataByFields = function filterDataByFields() {
    var res = data.map(function (item) {
      return fields.reduce(function (acc, field) {
        acc[field] = item[field];
        return acc;
      }, {});
    });
    setFilteredByFields(res);
  };
  var filterDataBySearchField = function filterDataBySearchField(data, field) {
    var res = data.filter(function (item) {
      return Object.values(item).some(function (value) {
        if (typeof value === "string") {
          return value.toLowerCase().includes(field.toLowerCase());
        }
        return false;
      });
    });
    setFiltered(res);
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    placeholder: "Search...",
    style: {
      width: "100vw",
      padding: "10px"
    },
    onChange: handleChange,
    value: searchField,
    onKeyUp: handleKeyUp
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("table", {
    style: {
      width: "100vw"
    }
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    style: {
      background: bg,
      color: text
    }
  }, fields.length && fields.map(function (f, i) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: i
    }, f);
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, filtered.length && filtered.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: i
    }, fields.length && fields.map(function (f, i) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: i
      }, d[f]);
    }));
  })))));
}
