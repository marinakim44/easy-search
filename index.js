"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Search;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
  // const [filteredByFields, setFilteredByFields] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  var _React$useState = _react["default"].useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    searchField = _React$useState2[0],
    setSearchField = _React$useState2[1];

  // useEffect(() => {
  //   filterDataByFields();
  // }, []);

  var handleChange = function handleChange(e) {
    setSearchField(e.target.value);
    console.log(e.target.value);
  };

  // useEffect(() => {
  //   filterDataBySearchField(filteredByFields, searchField);
  // }, [filteredByFields, searchField]);

  var handleKeyUp = function handleKeyUp(e) {
    if (e.key === "Escape") {
      // setSearchField("");
      console.log("Escape");
    } else if (e.key === "Enter") {
      console.log("Enter");
    }
  };

  // const filterDataByFields = () => {
  //   let res = data.map((item) => {
  //     return fields.reduce((acc, field) => {
  //       acc[field] = item[field];
  //       return acc;
  //     }, {});
  //   });

  //   setFilteredByFields(res);
  // };

  // const filterDataBySearchField = (data, field) => {
  //   let res = data.filter((item) => {
  //     return Object.values(item).some((value) => {
  //       if (typeof value === "string") {
  //         return value.toLowerCase().includes(field.toLowerCase());
  //       }
  //       return false;
  //     });
  //   });

  //   setFiltered(res);
  // };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    placeholder: "Search...",
    style: {
      width: "100vw",
      padding: "10px"
    },
    onChange: handleChange,
    value: searchField,
    onKeyUp: handleKeyUp
  }));
}
