webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/stevend/coding/vue/vue-tel-input/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./demo/App.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data: function data() {
    return {
      phone: {
        number: '',
        isValid: false,
        country: undefined
      }
    };
  },

  methods: {
    onInput: function onInput(_ref) {
      var number = _ref.number,
          isValid = _ref.isValid,
          country = _ref.country;

      this.phone.number = number;
      this.phone.isValid = isValid;
      this.phone.country = country && country.name;
    }
  }
});

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** multi ./demo/index.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stevend/coding/vue/vue-tel-input/demo/index.js */4);


/***/ }),
/* 4 */
/*!***********************!*\
  !*** ./demo/index.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_vue_tel_input__ = __webpack_require__(/*! ../dist/vue-tel-input */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_vue_tel_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dist_vue_tel_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dist_vue_tel_input_css__ = __webpack_require__(/*! ../dist/vue-tel-input.css */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dist_vue_tel_input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dist_vue_tel_input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue__ = __webpack_require__(/*! ./App.vue */ 11);







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1__dist_vue_tel_input___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */](Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__App_vue__["a" /* default */])).$mount('#app');

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/*!*******************************!*\
  !*** ./dist/vue-tel-input.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.VueTelInput = e() : t.VueTelInput = e();
})("undefined" != typeof self ? self : this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;var i = n[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
    }var n = {};return e.m = t, e.c = n, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "/", e(e.s = 45);
  }([function (t, e) {
    var n;n = function () {
      return this;
    }();try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }t.exports = n;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return p[t];
    }function i(t, e, n) {
      if (!(t = Object(s.a)(t))) return {};if ("+" !== t[0]) {
        var r = Object(d.b)(t, e, n.metadata);if (!r || r === t) return { number: t };t = "+" + r;
      }if ("0" === t[1]) return {};for (var i = 2; i - 1 <= $ && i <= t.length;) {
        var a = t.slice(1, i);if (n.countryCallingCodes()[a]) return { countryCallingCode: a, number: t.slice(i) };i++;
      }return {};
    }function a() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = arguments[1];return new RegExp("^(?:" + e + ")$").test(t);
    }function o(t) {
      var e = "xｘ#＃~～";switch (t) {case "parsing":
          e = ",;" + e;}return g + m + "|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|[" + e + "]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*" + m + "#?|[- ]+([" + l + "]{1,5})#";
    }n.d(e, "f", function () {
      return u;
    }), n.d(e, "d", function () {
      return l;
    }), n.d(e, "e", function () {
      return f;
    }), n.d(e, "c", function () {
      return h;
    }), n.d(e, "b", function () {
      return c;
    }), n.d(e, "a", function () {
      return $;
    }), e.j = r, e.h = i, e.i = a, e.g = o;var d = n(28),
        s = n(13),
        u = "  ­​⁠　",
        l = "0-9０-９٠-٩۰-۹",
        f = "-‐-―−ー－／/．." + u + "()（）［］\\[\\]~⁓∼～",
        h = "+＋",
        c = (new RegExp("^[" + h + "]+"), 17),
        $ = 3,
        p = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", "０": "0", "１": "1", "２": "2", "３": "3", "４": "4", "５": "5", "６": "6", "７": "7", "８": "8", "９": "9", "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9" },
        g = ";ext=",
        m = "([" + l + "]{1,7})";
  }, function (t, e) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }function r() {
      throw new Error("clearTimeout has not been defined");
    }function i(t) {
      if (l === setTimeout) return setTimeout(t, 0);if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);try {
        return l(t, 0);
      } catch (e) {
        try {
          return l.call(null, t, 0);
        } catch (e) {
          return l.call(this, t, 0);
        }
      }
    }function a(t) {
      if (f === clearTimeout) return clearTimeout(t);if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);try {
        return f(t);
      } catch (e) {
        try {
          return f.call(null, t);
        } catch (e) {
          return f.call(this, t);
        }
      }
    }function o() {
      p && c && (p = !1, c.length ? $ = c.concat($) : g = -1, $.length && d());
    }function d() {
      if (!p) {
        var t = i(o);p = !0;for (var e = $.length; e;) {
          for (c = $, $ = []; ++g < e;) {
            c && c[g].run();
          }g = -1, e = $.length;
        }c = null, p = !1, a(t);
      }
    }function s(t, e) {
      this.fun = t, this.array = e;
    }function u() {}var l,
        f,
        h = t.exports = {};(function () {
      try {
        l = "function" == typeof setTimeout ? setTimeout : n;
      } catch (t) {
        l = n;
      }try {
        f = "function" == typeof clearTimeout ? clearTimeout : r;
      } catch (t) {
        f = r;
      }
    })();var c,
        $ = [],
        p = !1,
        g = -1;h.nextTick = function (t) {
      var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }$.push(new s(t, e)), 1 !== $.length || p || i(d);
    }, s.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = u, h.addListener = u, h.once = u, h.off = u, h.removeListener = u, h.removeAllListeners = u, h.emit = u, h.prependListener = u, h.prependOnceListener = u, h.listeners = function (t) {
      return [];
    }, h.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, h.cwd = function () {
      return "/";
    }, h.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, h.umask = function () {
      return 0;
    };
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n, r) {
      var i = u(t, e, n, r),
          a = i.text,
          o = i.options,
          d = i.metadata;if (o.defaultCountry && !d.hasCountry(o.defaultCountry)) throw new Error("Unknown country: " + o.defaultCountry);var s = h(a),
          l = s.number,
          p = s.ext;if (!l) return {};var m = $(l, o.defaultCountry, d),
          _ = m.country,
          y = m.national_number,
          v = m.countryCallingCode,
          b = m.carrierCode;if (!d.selectedCountry()) return {};if (y.length < E || y.length > g.b) return {};var w = !(!_ || !Object(g.i)(y, d.nationalNumberPattern()));return o.extended ? { country: _, countryCallingCode: v, carrierCode: b, valid: w, possible: !!w || !0 === o.extended && d.possibleLengths() && f(y, void 0 !== v, d), phone: y, ext: p } : w ? c(_, y, p) : {};
    }function i(t) {
      return t.length >= E && R.test(t);
    }function a(t) {
      if (t && !(t.length > x)) {
        var e = t.search(T);if (!(e < 0)) return t.slice(e).replace(O, "");
      }
    }function o(t, e) {
      if (!t || !e.nationalPrefixForParsing()) return { number: t };var n = new RegExp("^(?:" + e.nationalPrefixForParsing() + ")"),
          r = n.exec(t);if (!r) return { number: t };var i = void 0,
          a = r.length - 1;i = e.nationalPrefixTransformRule() && r[a] ? t.replace(n, e.nationalPrefixTransformRule()) : t.slice(r[0].length);var o = void 0;return a > 0 && (o = r[1]), { number: i, carrierCode: o };
    }function d(t, e, n) {
      var r = n.countryCallingCodes()[t];return 1 === r.length ? r[0] : s(r, e, n.metadata);
    }function s(t, e, n) {
      n = new _.a(n);for (var r = t, i = Array.isArray(r), a = 0, r = i ? r : r[Symbol.iterator]();;) {
        var o;if (i) {
          if (a >= r.length) break;o = r[a++];
        } else {
          if (a = r.next(), a.done) break;o = a.value;
        }var d = o;if (n.country(d), n.leadingDigits()) {
          if (e && 0 === e.search(n.leadingDigits())) return d;
        } else if (Object(v.b)({ phone: e, country: d }, n.metadata)) return d;
      }
    }function u(t, e, n, r) {
      var i = void 0,
          a = void 0,
          o = void 0;if ("string" != typeof t) throw new TypeError("A phone number for parsing must be a string.");return i = t, "string" == typeof e ? r ? (a = w({ defaultCountry: e }, n), o = r) : (a = { defaultCountry: e }, o = n) : n ? (a = e, o = n) : o = e, a = a ? w({}, I, a) : I, { text: i, options: a, metadata: new _.a(o) };
    }function l(t) {
      var e = t.search(S);if (e < 0) return {};var n = t.slice(0, e);if (!i(n)) return {};for (var r = t.match(S), a = 1; a < r.length;) {
        if (null != r[a] && r[a].length > 0) return { number: n, ext: r[a] };a++;
      }
    }function f(t, e, n) {
      switch (Object(v.a)(t, void 0, n)) {case "IS_POSSIBLE":
          return !0;default:
          return !1;}
    }function h(t) {
      if (t && 0 === t.indexOf("tel:")) return Object(b.b)(t);var e = a(t);if (!e || !i(e)) return {};var n = l(e);return n.ext ? n : { number: e };
    }function c(t, e, n) {
      var r = { country: t, phone: e };return n && (r.ext = n), r;
    }function $(t, e, n) {
      var r = Object(g.h)(t, e, n),
          i = r.countryCallingCode,
          a = r.number;if (!a) return { countryCallingCode: i };var o = void 0;if (i) n.chooseCountryByCountryCallingCode(i);else {
        if (!e) return {};n.country(e), o = e, i = Object(y.a)(e, n.metadata);
      }var s = p(a, n),
          u = s.national_number,
          l = s.carrier_code,
          f = d(i, u, n);return f && (o = f, n.country(o)), { country: o, countryCallingCode: i, national_number: u, carrierCode: l };
    }function p(t, e) {
      var n = Object(m.a)(t),
          r = void 0,
          i = o(n, e),
          a = i.number,
          d = i.carrierCode;if (e.possibleLengths()) switch (Object(v.a)(a, void 0, e)) {case "TOO_SHORT":case "INVALID_LENGTH":
          break;default:
          n = a, r = d;} else Object(g.i)(n, e.nationalNumberPattern()) && !Object(g.i)(a, e.nationalNumberPattern()) || (n = a, r = d);return { national_number: n, carrier_code: r };
    }e.a = r, e.d = i, e.b = a, e.e = o, e.c = d;var g = n(1),
        m = n(13),
        _ = n(4),
        y = n(19),
        v = n(8),
        b = n(20),
        w = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }return t;
    },
        E = 2,
        x = 250,
        k = Object(g.g)("parsing"),
        S = new RegExp("(?:" + k + ")$", "i"),
        C = "[" + g.d + "]{" + E + "}",
        A = "[" + g.c + "]{0,1}(?:[" + g.e + "]*[" + g.d + "]){3,}[" + g.e + g.d + "]*",
        R = new RegExp("^" + C + "$|^" + A + "(?:" + k + ")?$", "i"),
        T = new RegExp("[" + g.c + g.d + "]"),
        O = new RegExp("[^" + g.d + "]+$"),
        I = { country: {} };
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      switch (e) {case "FIXED_LINE":
          return t[0];case "MOBILE":
          return t[1];case "TOLL_FREE":
          return t[2];case "PREMIUM_RATE":
          return t[3];case "PERSONAL_NUMBER":
          return t[4];case "VOICEMAIL":
          return t[5];case "UAN":
          return t[6];case "PAGER":
          return t[7];case "VOIP":
          return t[8];case "SHARED_COST":
          return t[9];}
    }function a(t) {
      if (!t) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if (!p(t) || !p(t.countries) || !p(t.country_calling_codes) && !p(t.country_phone_code_to_countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` and `.country_calling_codes` child object properties. Got " + (p(t) ? "an object of shape: { " + Object.keys(t).join(", ") + " }" : "a " + g(t) + ": " + t) + ".");
    }function o(t, e) {
      return new h(e).country(t).ext();
    }e.b = o;var d = n(53),
        s = n.n(d),
        u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        l = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        f = "1.2.0",
        h = function () {
      function t(e) {
        r(this, t), a(e), this.metadata = e, this.v1 = !e.version, this.v2 = void 0 !== e.version && -1 === s()(e.version, f), this.v3 = void 0 !== e.version;
      }return l(t, [{ key: "hasCountry", value: function value(t) {
          return void 0 !== this.metadata.countries[t];
        } }, { key: "country", value: function value(t) {
          if (!t) return this._country = void 0, this.country_metadata = void 0, this;if (!this.hasCountry(t)) throw new Error("Unknown country: " + t);return this._country = t, this.country_metadata = this.metadata.countries[t], this;
        } }, { key: "countryCallingCode", value: function value() {
          return this.country_metadata[0];
        } }, { key: "IDDPrefix", value: function value() {
          if (!this.v1 && !this.v2) return this.country_metadata[1];
        } }, { key: "defaultIDDPrefix", value: function value() {
          if (!this.v1 && !this.v2) return this.country_metadata[12];
        } }, { key: "nationalNumberPattern", value: function value() {
          return this.v1 || this.v2 ? this.country_metadata[1] : this.country_metadata[2];
        } }, { key: "possibleLengths", value: function value() {
          if (!this.v1) return this.country_metadata[this.v2 ? 2 : 3];
        } }, { key: "formats", value: function value() {
          var t = this;return (this.country_metadata[this.v1 ? 2 : this.v2 ? 3 : 4] || []).map(function (e) {
            return new c(e, t);
          });
        } }, { key: "nationalPrefix", value: function value() {
          return this.country_metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
        } }, { key: "nationalPrefixFormattingRule", value: function value() {
          return this.country_metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
        } }, { key: "nationalPrefixForParsing", value: function value() {
          return this.country_metadata[this.v1 ? 5 : this.v2 ? 6 : 7] || this.nationalPrefix();
        } }, { key: "nationalPrefixTransformRule", value: function value() {
          return this.country_metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
        } }, { key: "nationalPrefixIsOptionalWhenFormatting", value: function value() {
          return !!this.country_metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
        } }, { key: "leadingDigits", value: function value() {
          return this.country_metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
        } }, { key: "types", value: function value() {
          return this.country_metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
        } }, { key: "hasTypes", value: function value() {
          return (!this.types() || 0 !== this.types().length) && !!this.types();
        } }, { key: "type", value: function value(t) {
          if (this.hasTypes() && i(this.types(), t)) return new $(i(this.types(), t), this);
        } }, { key: "ext", value: function value() {
          return this.v1 || this.v2 ? " ext. " : this.country_metadata[13] || " ext. ";
        } }, { key: "countryCallingCodes", value: function value() {
          return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
        } }, { key: "chooseCountryByCountryCallingCode", value: function value(t) {
          var e = this.countryCallingCodes()[t][0];this.hasCountry(e) && this.country(e);
        } }, { key: "selectedCountry", value: function value() {
          return this._country;
        } }]), t;
    }();e.a = h;var c = function () {
      function t(e, n) {
        r(this, t), this._format = e, this.metadata = n;
      }return l(t, [{ key: "pattern", value: function value() {
          return this._format[0];
        } }, { key: "format", value: function value() {
          return this._format[1];
        } }, { key: "leadingDigitsPatterns", value: function value() {
          return this._format[2] || [];
        } }, { key: "nationalPrefixFormattingRule", value: function value() {
          return this._format[3] || this.metadata.nationalPrefixFormattingRule();
        } }, { key: "nationalPrefixIsOptionalWhenFormatting", value: function value() {
          return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormatting();
        } }, { key: "nationalPrefixIsMandatoryWhenFormatting", value: function value() {
          return this.nationalPrefixFormattingRule() && this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormatting();
        } }, { key: "usesNationalPrefix", value: function value() {
          return "$1" !== this.nationalPrefixFormattingRule() && /\d/.test(this.nationalPrefixFormattingRule().replace("$1", ""));
        } }, { key: "internationalFormat", value: function value() {
          return this._format[5] || this.format();
        } }]), t;
    }(),
        $ = function () {
      function t(e, n) {
        r(this, t), this.type = e, this.metadata = n;
      }return l(t, [{ key: "pattern", value: function value() {
          return this.metadata.v1 ? this.type : this.type[0];
        } }, { key: "possibleLengths", value: function value() {
          if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths();
        } }]), t;
    }(),
        p = function p(t) {
      return "object" === (void 0 === t ? "undefined" : u(t));
    },
        g = function g(t) {
      return void 0 === t ? "undefined" : u(t);
    };
  }, function (t, e, n) {
    "use strict";
    (function (t) {
      function r() {
        return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }function i(t, e) {
        if (r() < e) throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = a.prototype) : (null === t && (t = new a(e)), t.length = e), t;
      }function a(t, e, n) {
        if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(t, e, n);if ("number" == typeof t) {
          if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");return u(this, t);
        }return o(this, t, e, n);
      }function o(t, e, n, r) {
        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? h(t, e, n, r) : "string" == typeof e ? l(t, e, n) : c(t, e);
      }function d(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');if (t < 0) throw new RangeError('"size" argument must not be negative');
      }function s(t, e, n, r) {
        return d(e), e <= 0 ? i(t, e) : void 0 !== n ? "string" == typeof r ? i(t, e).fill(n, r) : i(t, e).fill(n) : i(t, e);
      }function u(t, e) {
        if (d(e), t = i(t, e < 0 ? 0 : 0 | $(e)), !a.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) {
          t[n] = 0;
        }return t;
      }function l(t, e, n) {
        if ("string" == typeof n && "" !== n || (n = "utf8"), !a.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');var r = 0 | g(e, n);t = i(t, r);var o = t.write(e, n);return o !== r && (t = t.slice(0, o)), t;
      }function f(t, e) {
        var n = e.length < 0 ? 0 : 0 | $(e.length);t = i(t, n);for (var r = 0; r < n; r += 1) {
          t[r] = 255 & e[r];
        }return t;
      }function h(t, e, n, r) {
        if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), a.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = a.prototype) : t = f(t, e), t;
      }function c(t, e) {
        if (a.isBuffer(e)) {
          var n = 0 | $(e.length);return t = i(t, n), 0 === t.length ? t : (e.copy(t, 0, 0, n), t);
        }if (e) {
          if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || K(e.length) ? i(t, 0) : f(t, e);if ("Buffer" === e.type && J(e.data)) return f(t, e.data);
        }throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }function $(t) {
        if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");return 0 | t;
      }function p(t) {
        return +t != t && (t = 0), a.alloc(+t);
      }function g(t, e) {
        if (a.isBuffer(t)) return t.length;if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;"string" != typeof t && (t = "" + t);var n = t.length;if (0 === n) return 0;for (var r = !1;;) {
          switch (e) {case "ascii":case "latin1":case "binary":
              return n;case "utf8":case "utf-8":case void 0:
              return G(t).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return 2 * n;case "hex":
              return n >>> 1;case "base64":
              return Y(t).length;default:
              if (r) return G(t).length;e = ("" + e).toLowerCase(), r = !0;}
        }
      }function m(t, e, n) {
        var r = !1;if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";if (n >>>= 0, e >>>= 0, n <= e) return "";for (t || (t = "utf8");;) {
          switch (t) {case "hex":
              return I(this, e, n);case "utf8":case "utf-8":
              return A(this, e, n);case "ascii":
              return T(this, e, n);case "latin1":case "binary":
              return O(this, e, n);case "base64":
              return C(this, e, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return N(this, e, n);default:
              if (r) throw new TypeError("Unknown encoding: " + t);t = (t + "").toLowerCase(), r = !0;}
        }
      }function _(t, e, n) {
        var r = t[e];t[e] = t[n], t[n] = r;
      }function y(t, e, n, r, i) {
        if (0 === t.length) return -1;if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
          if (i) return -1;n = t.length - 1;
        } else if (n < 0) {
          if (!i) return -1;n = 0;
        }if ("string" == typeof e && (e = a.from(e, r)), a.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, n, r, i);if ("number" == typeof e) return e &= 255, a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : v(t, [e], n, r, i);throw new TypeError("val must be string, number or Buffer");
      }function v(t, e, n, r, i) {
        function a(t, e) {
          return 1 === o ? t[e] : t.readUInt16BE(e * o);
        }var o = 1,
            d = t.length,
            s = e.length;if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
          if (t.length < 2 || e.length < 2) return -1;o = 2, d /= 2, s /= 2, n /= 2;
        }var u;if (i) {
          var l = -1;for (u = n; u < d; u++) {
            if (a(t, u) === a(e, -1 === l ? 0 : u - l)) {
              if (-1 === l && (l = u), u - l + 1 === s) return l * o;
            } else -1 !== l && (u -= u - l), l = -1;
          }
        } else for (n + s > d && (n = d - s), u = n; u >= 0; u--) {
          for (var f = !0, h = 0; h < s; h++) {
            if (a(t, u + h) !== a(e, h)) {
              f = !1;break;
            }
          }if (f) return u;
        }return -1;
      }function b(t, e, n, r) {
        n = Number(n) || 0;var i = t.length - n;r ? (r = Number(r)) > i && (r = i) : r = i;var a = e.length;if (a % 2 != 0) throw new TypeError("Invalid hex string");r > a / 2 && (r = a / 2);for (var o = 0; o < r; ++o) {
          var d = parseInt(e.substr(2 * o, 2), 16);if (isNaN(d)) return o;t[n + o] = d;
        }return o;
      }function w(t, e, n, r) {
        return W(G(e, t.length - n), t, n, r);
      }function E(t, e, n, r) {
        return W(H(e), t, n, r);
      }function x(t, e, n, r) {
        return E(t, e, n, r);
      }function k(t, e, n, r) {
        return W(Y(e), t, n, r);
      }function S(t, e, n, r) {
        return W(q(e, t.length - n), t, n, r);
      }function C(t, e, n) {
        return 0 === e && n === t.length ? V.fromByteArray(t) : V.fromByteArray(t.slice(e, n));
      }function A(t, e, n) {
        n = Math.min(t.length, n);for (var r = [], i = e; i < n;) {
          var a = t[i],
              o = null,
              d = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;if (i + d <= n) {
            var s, u, l, f;switch (d) {case 1:
                a < 128 && (o = a);break;case 2:
                s = t[i + 1], 128 == (192 & s) && (f = (31 & a) << 6 | 63 & s) > 127 && (o = f);break;case 3:
                s = t[i + 1], u = t[i + 2], 128 == (192 & s) && 128 == (192 & u) && (f = (15 & a) << 12 | (63 & s) << 6 | 63 & u) > 2047 && (f < 55296 || f > 57343) && (o = f);break;case 4:
                s = t[i + 1], u = t[i + 2], l = t[i + 3], 128 == (192 & s) && 128 == (192 & u) && 128 == (192 & l) && (f = (15 & a) << 18 | (63 & s) << 12 | (63 & u) << 6 | 63 & l) > 65535 && f < 1114112 && (o = f);}
          }null === o ? (o = 65533, d = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), r.push(o), i += d;
        }return R(r);
      }function R(t) {
        var e = t.length;if (e <= Q) return String.fromCharCode.apply(String, t);for (var n = "", r = 0; r < e;) {
          n += String.fromCharCode.apply(String, t.slice(r, r += Q));
        }return n;
      }function T(t, e, n) {
        var r = "";n = Math.min(t.length, n);for (var i = e; i < n; ++i) {
          r += String.fromCharCode(127 & t[i]);
        }return r;
      }function O(t, e, n) {
        var r = "";n = Math.min(t.length, n);for (var i = e; i < n; ++i) {
          r += String.fromCharCode(t[i]);
        }return r;
      }function I(t, e, n) {
        var r = t.length;(!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);for (var i = "", a = e; a < n; ++a) {
          i += Z(t[a]);
        }return i;
      }function N(t, e, n) {
        for (var r = t.slice(e, n), i = "", a = 0; a < r.length; a += 2) {
          i += String.fromCharCode(r[a] + 256 * r[a + 1]);
        }return i;
      }function L(t, e, n) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
      }function M(t, e, n, r, i, o) {
        if (!a.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');if (n + r > t.length) throw new RangeError("Index out of range");
      }function P(t, e, n, r) {
        e < 0 && (e = 65535 + e + 1);for (var i = 0, a = Math.min(t.length - n, 2); i < a; ++i) {
          t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
        }
      }function B(t, e, n, r) {
        e < 0 && (e = 4294967295 + e + 1);for (var i = 0, a = Math.min(t.length - n, 4); i < a; ++i) {
          t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255;
        }
      }function j(t, e, n, r, i, a) {
        if (n + r > t.length) throw new RangeError("Index out of range");if (n < 0) throw new RangeError("Index out of range");
      }function F(t, e, n, r, i) {
        return i || j(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(t, e, n, r, 23, 4), n + 4;
      }function D(t, e, n, r, i) {
        return i || j(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(t, e, n, r, 52, 8), n + 8;
      }function U(t) {
        if (t = z(t).replace(tt, ""), t.length < 2) return "";for (; t.length % 4 != 0;) {
          t += "=";
        }return t;
      }function z(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }function Z(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }function G(t, e) {
        e = e || 1 / 0;for (var n, r = t.length, i = null, a = [], o = 0; o < r; ++o) {
          if ((n = t.charCodeAt(o)) > 55295 && n < 57344) {
            if (!i) {
              if (n > 56319) {
                (e -= 3) > -1 && a.push(239, 191, 189);continue;
              }if (o + 1 === r) {
                (e -= 3) > -1 && a.push(239, 191, 189);continue;
              }i = n;continue;
            }if (n < 56320) {
              (e -= 3) > -1 && a.push(239, 191, 189), i = n;continue;
            }n = 65536 + (i - 55296 << 10 | n - 56320);
          } else i && (e -= 3) > -1 && a.push(239, 191, 189);if (i = null, n < 128) {
            if ((e -= 1) < 0) break;a.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;a.push(n >> 6 | 192, 63 & n | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");if ((e -= 4) < 0) break;a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
          }
        }return a;
      }function H(t) {
        for (var e = [], n = 0; n < t.length; ++n) {
          e.push(255 & t.charCodeAt(n));
        }return e;
      }function q(t, e) {
        for (var n, r, i, a = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) {
          n = t.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
        }return a;
      }function Y(t) {
        return V.toByteArray(U(t));
      }function W(t, e, n, r) {
        for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) {
          e[i + n] = t[i];
        }return i;
      }function K(t) {
        return t !== t;
      }var V = n(65),
          X = n(66),
          J = n(33);e.Buffer = a, e.SlowBuffer = p, e.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
        try {
          var t = new Uint8Array(1);return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
              return 42;
            } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
        } catch (t) {
          return !1;
        }
      }(), e.kMaxLength = r(), a.poolSize = 8192, a._augment = function (t) {
        return t.__proto__ = a.prototype, t;
      }, a.from = function (t, e, n) {
        return o(null, t, e, n);
      }, a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, { value: null, configurable: !0 })), a.alloc = function (t, e, n) {
        return s(null, t, e, n);
      }, a.allocUnsafe = function (t) {
        return u(null, t);
      }, a.allocUnsafeSlow = function (t) {
        return u(null, t);
      }, a.isBuffer = function (t) {
        return !(null == t || !t._isBuffer);
      }, a.compare = function (t, e) {
        if (!a.isBuffer(t) || !a.isBuffer(e)) throw new TypeError("Arguments must be Buffers");if (t === e) return 0;for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i) {
          if (t[i] !== e[i]) {
            n = t[i], r = e[i];break;
          }
        }return n < r ? -1 : r < n ? 1 : 0;
      }, a.isEncoding = function (t) {
        switch (String(t).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return !0;default:
            return !1;}
      }, a.concat = function (t, e) {
        if (!J(t)) throw new TypeError('"list" argument must be an Array of Buffers');if (0 === t.length) return a.alloc(0);var n;if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) {
          e += t[n].length;
        }var r = a.allocUnsafe(e),
            i = 0;for (n = 0; n < t.length; ++n) {
          var o = t[n];if (!a.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r, i), i += o.length;
        }return r;
      }, a.byteLength = g, a.prototype._isBuffer = !0, a.prototype.swap16 = function () {
        var t = this.length;if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");for (var e = 0; e < t; e += 2) {
          _(this, e, e + 1);
        }return this;
      }, a.prototype.swap32 = function () {
        var t = this.length;if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");for (var e = 0; e < t; e += 4) {
          _(this, e, e + 3), _(this, e + 1, e + 2);
        }return this;
      }, a.prototype.swap64 = function () {
        var t = this.length;if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");for (var e = 0; e < t; e += 8) {
          _(this, e, e + 7), _(this, e + 1, e + 6), _(this, e + 2, e + 5), _(this, e + 3, e + 4);
        }return this;
      }, a.prototype.toString = function () {
        var t = 0 | this.length;return 0 === t ? "" : 0 === arguments.length ? A(this, 0, t) : m.apply(this, arguments);
      }, a.prototype.equals = function (t) {
        if (!a.isBuffer(t)) throw new TypeError("Argument must be a Buffer");return this === t || 0 === a.compare(this, t);
      }, a.prototype.inspect = function () {
        var t = "",
            n = e.INSPECT_MAX_BYTES;return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">";
      }, a.prototype.compare = function (t, e, n, r, i) {
        if (!a.isBuffer(t)) throw new TypeError("Argument must be a Buffer");if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");if (r >= i && e >= n) return 0;if (r >= i) return -1;if (e >= n) return 1;if (e >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === t) return 0;for (var o = i - r, d = n - e, s = Math.min(o, d), u = this.slice(r, i), l = t.slice(e, n), f = 0; f < s; ++f) {
          if (u[f] !== l[f]) {
            o = u[f], d = l[f];break;
          }
        }return o < d ? -1 : d < o ? 1 : 0;
      }, a.prototype.includes = function (t, e, n) {
        return -1 !== this.indexOf(t, e, n);
      }, a.prototype.indexOf = function (t, e, n) {
        return y(this, t, e, n, !0);
      }, a.prototype.lastIndexOf = function (t, e, n) {
        return y(this, t, e, n, !1);
      }, a.prototype.write = function (t, e, n, r) {
        if (void 0 === e) r = "utf8", n = this.length, e = 0;else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;else {
          if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
        }var i = this.length - e;if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");r || (r = "utf8");for (var a = !1;;) {
          switch (r) {case "hex":
              return b(this, t, e, n);case "utf8":case "utf-8":
              return w(this, t, e, n);case "ascii":
              return E(this, t, e, n);case "latin1":case "binary":
              return x(this, t, e, n);case "base64":
              return k(this, t, e, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return S(this, t, e, n);default:
              if (a) throw new TypeError("Unknown encoding: " + r);r = ("" + r).toLowerCase(), a = !0;}
        }
      }, a.prototype.toJSON = function () {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };var Q = 4096;a.prototype.slice = function (t, e) {
        var n = this.length;t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);var r;if (a.TYPED_ARRAY_SUPPORT) r = this.subarray(t, e), r.__proto__ = a.prototype;else {
          var i = e - t;r = new a(i, void 0);for (var o = 0; o < i; ++o) {
            r[o] = this[o + t];
          }
        }return r;
      }, a.prototype.readUIntLE = function (t, e, n) {
        t |= 0, e |= 0, n || L(t, e, this.length);for (var r = this[t], i = 1, a = 0; ++a < e && (i *= 256);) {
          r += this[t + a] * i;
        }return r;
      }, a.prototype.readUIntBE = function (t, e, n) {
        t |= 0, e |= 0, n || L(t, e, this.length);for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) {
          r += this[t + --e] * i;
        }return r;
      }, a.prototype.readUInt8 = function (t, e) {
        return e || L(t, 1, this.length), this[t];
      }, a.prototype.readUInt16LE = function (t, e) {
        return e || L(t, 2, this.length), this[t] | this[t + 1] << 8;
      }, a.prototype.readUInt16BE = function (t, e) {
        return e || L(t, 2, this.length), this[t] << 8 | this[t + 1];
      }, a.prototype.readUInt32LE = function (t, e) {
        return e || L(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
      }, a.prototype.readUInt32BE = function (t, e) {
        return e || L(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
      }, a.prototype.readIntLE = function (t, e, n) {
        t |= 0, e |= 0, n || L(t, e, this.length);for (var r = this[t], i = 1, a = 0; ++a < e && (i *= 256);) {
          r += this[t + a] * i;
        }return i *= 128, r >= i && (r -= Math.pow(2, 8 * e)), r;
      }, a.prototype.readIntBE = function (t, e, n) {
        t |= 0, e |= 0, n || L(t, e, this.length);for (var r = e, i = 1, a = this[t + --r]; r > 0 && (i *= 256);) {
          a += this[t + --r] * i;
        }return i *= 128, a >= i && (a -= Math.pow(2, 8 * e)), a;
      }, a.prototype.readInt8 = function (t, e) {
        return e || L(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
      }, a.prototype.readInt16LE = function (t, e) {
        e || L(t, 2, this.length);var n = this[t] | this[t + 1] << 8;return 32768 & n ? 4294901760 | n : n;
      }, a.prototype.readInt16BE = function (t, e) {
        e || L(t, 2, this.length);var n = this[t + 1] | this[t] << 8;return 32768 & n ? 4294901760 | n : n;
      }, a.prototype.readInt32LE = function (t, e) {
        return e || L(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
      }, a.prototype.readInt32BE = function (t, e) {
        return e || L(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
      }, a.prototype.readFloatLE = function (t, e) {
        return e || L(t, 4, this.length), X.read(this, t, !0, 23, 4);
      }, a.prototype.readFloatBE = function (t, e) {
        return e || L(t, 4, this.length), X.read(this, t, !1, 23, 4);
      }, a.prototype.readDoubleLE = function (t, e) {
        return e || L(t, 8, this.length), X.read(this, t, !0, 52, 8);
      }, a.prototype.readDoubleBE = function (t, e) {
        return e || L(t, 8, this.length), X.read(this, t, !1, 52, 8);
      }, a.prototype.writeUIntLE = function (t, e, n, r) {
        if (t = +t, e |= 0, n |= 0, !r) {
          M(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
        }var i = 1,
            a = 0;for (this[e] = 255 & t; ++a < n && (i *= 256);) {
          this[e + a] = t / i & 255;
        }return e + n;
      }, a.prototype.writeUIntBE = function (t, e, n, r) {
        if (t = +t, e |= 0, n |= 0, !r) {
          M(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
        }var i = n - 1,
            a = 1;for (this[e + i] = 255 & t; --i >= 0 && (a *= 256);) {
          this[e + i] = t / a & 255;
        }return e + n;
      }, a.prototype.writeUInt8 = function (t, e, n) {
        return t = +t, e |= 0, n || M(this, t, e, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
      }, a.prototype.writeUInt16LE = function (t, e, n) {
        return t = +t, e |= 0, n || M(this, t, e, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : P(this, t, e, !0), e + 2;
      }, a.prototype.writeUInt16BE = function (t, e, n) {
        return t = +t, e |= 0, n || M(this, t, e, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : P(this, t, e, !1), e + 2;
      }, a.prototype.writeUInt32LE = function (t, e, n) {
        return t = +t, e |= 0, n || M(this, t, e, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : B(this, t, e, !0), e + 4;
      }, a.prototype.writeUInt32BE = function (t, e, n) {
        return t = +t, e |= 0, n || M(this, t, e, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4;
      }, a.prototype.writeIntLE = function (t, e, n, r) {
        if (t = +t, e |= 0, !r) {
          var i = Math.pow(2, 8 * n - 1);M(this, t, e, n, i - 1, -i);
        }var a = 0,
            o = 1,
            d = 0;for (this[e] = 255 & t; ++a < n && (o *= 256);) {
          t < 0 && 0 === d && 0 !== this[e + a - 1] && (d = 1), this[e + a] = (t / o >> 0) - d & 255;
        }return e + n;
      }, a.prototype.writeIntBE = function (t, e, n, r) {
        if (t = +t, e |= 0, !r) {
          var i = Math.pow(2, 8 * n - 1);M(this, t, e, n, i - 1, -i);
        }var a = n - 1,
            o = 1,
            d = 0;for (this[e + a] = 255 & t; --a >= 0 && (o *= 256);) {
          t < 0 && 0 === d && 0 !== this[e + a + 1] && (d = 1), this[e + a] = (t / o >> 0) - d & 255;
        }return e + n;
      }, a.prototype.writeInt8 = function (t, e, n) {
        return t = +t, e |= 0, n || M(this, t, e, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
      }, a.prototype.writeInt16LE = function (t, e, n) {
        return t = +t, e |= 0, n || M(this, t, e, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : P(this, t, e, !0), e + 2;
      }, a.prototype.writeInt16BE = function (t, e, n) {
        return t = +t, e |= 0, n || M(this, t, e, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : P(this, t, e, !1), e + 2;
      }, a.prototype.writeInt32LE = function (t, e, n) {
        return t = +t, e |= 0, n || M(this, t, e, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : B(this, t, e, !0), e + 4;
      }, a.prototype.writeInt32BE = function (t, e, n) {
        return t = +t, e |= 0, n || M(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4;
      }, a.prototype.writeFloatLE = function (t, e, n) {
        return F(this, t, e, !0, n);
      }, a.prototype.writeFloatBE = function (t, e, n) {
        return F(this, t, e, !1, n);
      }, a.prototype.writeDoubleLE = function (t, e, n) {
        return D(this, t, e, !0, n);
      }, a.prototype.writeDoubleBE = function (t, e, n) {
        return D(this, t, e, !1, n);
      }, a.prototype.copy = function (t, e, n, r) {
        if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;if (0 === t.length || 0 === this.length) return 0;if (e < 0) throw new RangeError("targetStart out of bounds");if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");if (r < 0) throw new RangeError("sourceEnd out of bounds");r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);var i,
            o = r - n;if (this === t && n < e && e < r) for (i = o - 1; i >= 0; --i) {
          t[i + e] = this[i + n];
        } else if (o < 1e3 || !a.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) {
          t[i + e] = this[i + n];
        } else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);return o;
      }, a.prototype.fill = function (t, e, n, r) {
        if ("string" == typeof t) {
          if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
            var i = t.charCodeAt(0);i < 256 && (t = i);
          }if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");if ("string" == typeof r && !a.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
        } else "number" == typeof t && (t &= 255);if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");if (n <= e) return this;e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0);var o;if ("number" == typeof t) for (o = e; o < n; ++o) {
          this[o] = t;
        } else {
          var d = a.isBuffer(t) ? t : G(new a(t, r).toString()),
              s = d.length;for (o = 0; o < n - e; ++o) {
            this[o + e] = d[o % s];
          }
        }return this;
      };var tt = /[^+\/0-9A-Za-z-_]/g;
    }).call(e, n(0));
  }, function (t, e) {
    "function" == typeof Object.create ? t.exports = function (t, e) {
      t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } });
    } : t.exports = function (t, e) {
      t.super_ = e;var n = function n() {};n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
    };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      if (!(this instanceof r)) return new r(t);u.call(this, t), l.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", i);
    }function i() {
      this.allowHalfOpen || this._writableState.ended || o(a, this);
    }function a(t) {
      t.end();
    }var o = n(16),
        d = Object.keys || function (t) {
      var e = [];for (var n in t) {
        e.push(n);
      }return e;
    };t.exports = r;var s = n(12);s.inherits = n(6);var u = n(36),
        l = n(24);s.inherits(r, u);for (var f = d(l.prototype), h = 0; h < f.length; h++) {
      var c = f[h];r.prototype[c] || (r.prototype[c] = l.prototype[c]);
    }Object.defineProperty(r.prototype, "destroyed", { get: function get() {
        return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
      }, set: function set(t) {
        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t);
      } }), r.prototype._destroy = function (t, e) {
      this.push(null), this.end(), o(e, t);
    };
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      var r = a(t, e, n),
          o = r.input,
          d = r.metadata;if (o && o.country) {
        if (!d.hasCountry(o.country)) throw new Error("Unknown country: " + o.country);var s = o.phone;if (d.country(o.country), Object(u.i)(s, d.nationalNumberPattern())) {
          if (i(s, "FIXED_LINE", d)) return d.type("MOBILE") && "" === d.type("MOBILE").pattern() ? "FIXED_LINE_OR_MOBILE" : d.type("MOBILE") ? i(s, "MOBILE", d) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE";for (var l = h, f = Array.isArray(l), c = 0, l = f ? l : l[Symbol.iterator]();;) {
            var $;if (f) {
              if (c >= l.length) break;$ = l[c++];
            } else {
              if (c = l.next(), c.done) break;$ = c.value;
            }var p = $;if (i(s, p, d)) return p;
          }
        }
      }
    }function i(t, e, n) {
      return !(!(e = n.type(e)) || !e.pattern()) && !(e.possibleLengths() && e.possibleLengths().indexOf(t.length) < 0) && Object(u.i)(t, e.pattern());
    }function a(t, e, n) {
      var r = void 0,
          i = void 0;if ("string" == typeof t) "string" == typeof e || void 0 === e ? (i = n, Object(s.d)(t) && (r = Object(s.a)(t, e, i))) : (i = e, Object(s.d)(t) && (r = Object(s.a)(t, i)));else {
        if (!c(t) || "string" != typeof t.phone) throw new TypeError("A phone number must either be a string or an object of shape { phone, [country] }.");Object(s.d)(t.phone) && (r = t), i = e;
      }return { input: r, metadata: new l.a(i) };
    }function o(t, e, n) {
      var r = n.type(e),
          i = r && r.possibleLengths() || n.possibleLengths();if ("FIXED_LINE_OR_MOBILE" === e) {
        if (!n.type("FIXED_LINE")) return test_number_length_for_type(t, "MOBILE", n);var a = n.type("MOBILE");a && (i = d(i, a.possibleLengths()));
      } else if (e && !r) return "INVALID_LENGTH";var o = t.length,
          s = i[0];return s === o ? "IS_POSSIBLE" : s > o ? "TOO_SHORT" : i[i.length - 1] < o ? "TOO_LONG" : i.indexOf(o, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
    }function d(t, e) {
      for (var n = t.slice(), r = e, i = Array.isArray(r), a = 0, r = i ? r : r[Symbol.iterator]();;) {
        var o;if (i) {
          if (a >= r.length) break;o = r[a++];
        } else {
          if (a = r.next(), a.done) break;o = a.value;
        }var d = o;t.indexOf(d) < 0 && n.push(d);
      }return n.sort(function (t, e) {
        return t - e;
      });
    }e.b = r, e.c = a, e.a = o;var s = n(3),
        u = n(1),
        l = n(4),
        f = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        h = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"],
        c = function c(t) {
      return "object" === (void 0 === t ? "undefined" : f(t));
    };
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    }function a(t, e, n, r) {
      for (var i = d(t, e, n, r), a = i.text, o = i.options, s = i.metadata, u = new v(a, o, s.metadata), l = []; u.hasNext();) {
        l.push(u.next());
      }return l;
    }function o(t, e, n, r) {
      var a = d(t, e, n, r),
          o = a.text,
          s = a.options,
          u = a.metadata,
          l = new v(o, s, u.metadata);return i({}, Symbol.iterator, function () {
        return { next: function next() {
            return l.hasNext() ? { done: !1, value: l.next() } : { done: !0 };
          } };
      });
    }function d(t, e, n, r) {
      var i = void 0,
          a = void 0,
          o = void 0;if ("string" != typeof t) throw new TypeError("A text for parsing must be a string.");return i = t, "string" == typeof e ? r ? (a = $({ defaultCountry: e }, n), o = r) : (a = { defaultCountry: e }, o = n) : n ? (a = e, o = n) : o = e, a || (a = {}), { text: i, options: a, metadata: new u.a(o) };
    }e.b = a, e.c = o, n.d(e, "a", function () {
      return v;
    }), e.d = d;var s = n(3),
        u = n(4),
        l = n(1),
        f = n(29),
        h = n(30),
        c = n(31),
        $ = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }return t;
    },
        p = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        g = "[" + l.c + "]{0,1}(?:[" + l.e + "]*[" + l.d + "]){3,}[" + l.e + l.d + "]*",
        m = Object(l.g)("parsing"),
        _ = new RegExp("^[" + l.f + "]+"),
        y = new RegExp("[" + l.e + "]+$"),
        v = function () {
      function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments[2];r(this, t), this.state = "NOT_READY", this.text = e, this.options = n, this.metadata = i, this.regexp = new RegExp(g + "(?:" + m + ")?", "ig");
      }return p(t, [{ key: "find", value: function value() {
          var t = this.regexp.exec(this.text);if (t) {
            var e = t[0],
                n = t.index;e = e.replace(_, ""), n += t[0].length - e.length, e = e.replace(y, ""), e = Object(f.a)(e);var r = this.parseCandidate(e, n);return r || this.find();
          }
        } }, { key: "parseCandidate", value: function value(t, e) {
          if (Object(h.a)(t, e, this.text) && Object(c.b)(t, e, this.text, this.options.extended ? "POSSIBLE" : "VALID")) {
            var n = Object(s.a)(t, this.options, this.metadata);if (n.phone) return n.startsAt = e, n.endsAt = e + t.length, n;
          }
        } }, { key: "hasNext", value: function value() {
          return "NOT_READY" === this.state && (this.last_match = this.find(), this.last_match ? this.state = "READY" : this.state = "DONE"), "READY" === this.state;
        } }, { key: "next", value: function value() {
          if (!this.hasNext()) throw new Error("No next element");var t = this.last_match;return this.last_match = null, this.state = "NOT_READY", t;
        } }]), t;
    }();
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      var r = Object(i.c)(t, e, n),
          a = r.input,
          o = r.metadata;if (!a) return !1;if (!a.country) return !1;if (!o.hasCountry(a.country)) throw new Error("Unknown country: " + a.country);return o.country(a.country), !o.hasTypes() || void 0 !== Object(i.b)(a, o.metadata);
    }e.a = r;var i = (n(3), n(8));
  }, function (t, e, n) {
    e = t.exports = n(36), e.Stream = e, e.Readable = e, e.Writable = n(24), e.Duplex = n(7), e.Transform = n(40), e.PassThrough = n(74);
  }, function (t, e, n) {
    (function (t) {
      function n(t) {
        return Array.isArray ? Array.isArray(t) : "[object Array]" === g(t);
      }function r(t) {
        return "boolean" == typeof t;
      }function i(t) {
        return null === t;
      }function a(t) {
        return null == t;
      }function o(t) {
        return "number" == typeof t;
      }function d(t) {
        return "string" == typeof t;
      }function s(t) {
        return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t));
      }function u(t) {
        return void 0 === t;
      }function l(t) {
        return "[object RegExp]" === g(t);
      }function f(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
      }function h(t) {
        return "[object Date]" === g(t);
      }function c(t) {
        return "[object Error]" === g(t) || t instanceof Error;
      }function $(t) {
        return "function" == typeof t;
      }function p(t) {
        return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || void 0 === t;
      }function g(t) {
        return Object.prototype.toString.call(t);
      }e.isArray = n, e.isBoolean = r, e.isNull = i, e.isNullOrUndefined = a, e.isNumber = o, e.isString = d, e.isSymbol = s, e.isUndefined = u, e.isRegExp = l, e.isObject = f, e.isDate = h, e.isError = c, e.isFunction = $, e.isPrimitive = p, e.isBuffer = t.isBuffer;
    }).call(e, n(5).Buffer);
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      for (var e = "", n = t.split(""), r = Array.isArray(n), a = 0, n = r ? n : n[Symbol.iterator]();;) {
        var o;if (r) {
          if (a >= n.length) break;o = n[a++];
        } else {
          if (a = n.next(), a.done) break;o = a.value;
        }e += i(o, e) || "";
      }return e;
    }function i(t, e) {
      if ("+" === t) {
        if (e) return;return "+";
      }return Object(a.j)(t);
    }e.a = r;var a = n(1);
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n, r, i) {
      var o = s(t, e, n, r, i),
          d = o.input,
          c = o.format_type,
          p = o.options,
          g = o.metadata;d.country && g.hasCountry(d.country) && g.country(d.country);var m = Object(f.h)(d.phone, null, g),
          _ = m.countryCallingCode,
          y = m.number;if (_ = _ || d.countryCallingCode) {
        if (d.country && g.selectedCountry() && _ !== g.countryCallingCode()) return d.phone;g.chooseCountryByCountryCallingCode(_);
      }if (!g.selectedCountry()) return d.phone;switch (c) {case "International":
          return y ? (y = a(y, "International", !1, g), y = "+" + g.countryCallingCode() + " " + y, u(y, d.ext, g, p.formatExtension)) : "+" + g.countryCallingCode();case "E.164":
          return "+" + g.countryCallingCode() + d.phone;case "RFC3966":
          return Object($.a)({ number: "+" + g.countryCallingCode() + d.phone, ext: d.ext });case "IDD":
          if (!p.fromCountry) return;var v = Object(h.a)(p.fromCountry, g.metadata);if (!v) return;if (p.humanReadable) {
            var b = _ && l(y, _, p.fromCountry, g);return y = b || v + " " + g.countryCallingCode() + " " + a(y, "International", !1, g), u(y, d.ext, g, p.formatExtension);
          }return "" + v + g.countryCallingCode() + y;case "National":
          return y ? (y = a(y, "National", !0, g), u(y, d.ext, g, p.formatExtension)) : "";}
    }function i(t, e, n, r, i) {
      var a = new RegExp(e.pattern()),
          o = !e.nationalPrefixFormattingRule() || e.nationalPrefixFormattingRule() && e.nationalPrefixIsOptionalWhenFormatting() && !r;if (!n && !o) return t.replace(a, e.format().replace(_, e.nationalPrefixFormattingRule()));var s = t.replace(a, n ? e.internationalFormat() : e.format());return n ? d(s) : s;
    }function a(t, e, n, r) {
      var a = o(r.formats(), t);return a ? i(t, a, "International" === e, n, r) : t;
    }function o(t, e) {
      for (var n = t, r = Array.isArray(n), i = 0, n = r ? n : n[Symbol.iterator]();;) {
        var a;if (r) {
          if (i >= n.length) break;a = n[i++];
        } else {
          if (i = n.next(), i.done) break;a = i.value;
        }var o = a;if (o.leadingDigitsPatterns().length > 0) {
          var d = o.leadingDigitsPatterns()[o.leadingDigitsPatterns().length - 1];if (0 !== e.search(d)) continue;
        }if (Object(f.i)(e, o.pattern())) return o;
      }
    }function d(t) {
      return t.replace(new RegExp("[" + f.e + "]+", "g"), " ").trim();
    }function s(t, e, n, r, i) {
      var a = void 0,
          o = void 0,
          d = void 0,
          s = void 0;if ("string" == typeof t) {
        if ("string" == typeof n) a = { phone: t, country: e }, o = n, i ? (d = r, s = i) : s = r;else {
          if (a = { phone: t }, "string" != typeof e) throw new Error("`format` argument not passed to `formatNumber(number, format)`");o = e, r ? (d = n, s = r) : s = n;
        }
      } else {
        if (!y(t) || "string" != typeof t.phone) throw new TypeError("A phone number must either be a string or an object of shape { phone, [country] }.");a = t, o = e, r ? (d = n, s = r) : s = n;
      }switch (o) {case "International":case "E.164":case "National":case "RFC3966":case "IDD":
          break;default:
          throw new Error('Unknown format type argument passed to "format()": "' + o + '"');}return d = d ? g({}, m, d) : m, { input: a, format_type: o, options: d, metadata: new c.a(s) };
    }function u(t, e, n, r) {
      return e ? r(t, e, n) : t;
    }function l(t, e, n, r) {
      var i = new c.a(r.metadata);if (i.country(n), e === i.countryCallingCode()) return "1" === e ? e + " " + a(t, "National", !1, r) : a(t, "National", !1, r);
    }e.b = r, n.d(e, "a", function () {
      return _;
    }), e.c = i, e.d = d;var f = n(1),
        h = n(28),
        c = n(4),
        $ = n(20),
        p = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        g = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }return t;
    },
        m = { formatExtension: function formatExtension(t, e, n) {
        return "" + t + n.ext() + e;
      } },
        _ = /(\$\d)/,
        y = function y(t) {
      return "object" === (void 0 === t ? "undefined" : p(t));
    };
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (t < 0 || e <= 0 || e < t) throw new TypeError();return "{" + t + "," + e + "}";
    }function i(t, e) {
      var n = e.search(t);return n >= 0 ? e.slice(0, n) : e;
    }function a(t, e) {
      return 0 === t.indexOf(e);
    }function o(t, e) {
      return t.indexOf(e, t.length - e.length) === t.length - e.length;
    }e.b = r, e.d = i, e.c = a, e.a = o;
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      function n(t, n, r, i) {
        if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');var a,
            o,
            d = arguments.length;switch (d) {case 0:case 1:
            return e.nextTick(t);case 2:
            return e.nextTick(function () {
              t.call(null, n);
            });case 3:
            return e.nextTick(function () {
              t.call(null, n, r);
            });case 4:
            return e.nextTick(function () {
              t.call(null, n, r, i);
            });default:
            for (a = new Array(d - 1), o = 0; o < a.length;) {
              a[o++] = arguments[o];
            }return e.nextTick(function () {
              t.apply(null, a);
            });}
      }!e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = n : t.exports = e.nextTick;
    }).call(e, n(2));
  }, function (t, e, n) {
    function r(t, e) {
      for (var n in t) {
        e[n] = t[n];
      }
    }function i(t, e, n) {
      return o(t, e, n);
    }var a = n(5),
        o = a.Buffer;o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? t.exports = a : (r(a, e), e.Buffer = i), r(o, i), i.from = function (t, e, n) {
      if ("number" == typeof t) throw new TypeError("Argument must not be a number");return o(t, e, n);
    }, i.alloc = function (t, e, n) {
      if ("number" != typeof t) throw new TypeError("Argument must be a number");var r = o(t);return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), r;
    }, i.allocUnsafe = function (t) {
      if ("number" != typeof t) throw new TypeError("Argument must be a number");return o(t);
    }, i.allocUnsafeSlow = function (t) {
      if ("number" != typeof t) throw new TypeError("Argument must be a number");return a.SlowBuffer(t);
    };
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;e.assign = function (t) {
      for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
        var n = e.shift();if (n) {
          if ("object" != (typeof n === "undefined" ? "undefined" : _typeof(n))) throw new TypeError(n + "must be non-object");for (var i in n) {
            r(n, i) && (t[i] = n[i]);
          }
        }
      }return t;
    }, e.shrinkBuf = function (t, e) {
      return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t);
    };var a = { arraySet: function arraySet(t, e, n, r, i) {
        if (e.subarray && t.subarray) return void t.set(e.subarray(n, n + r), i);for (var a = 0; a < r; a++) {
          t[i + a] = e[n + a];
        }
      }, flattenChunks: function flattenChunks(t) {
        var e, n, r, i, a, o;for (r = 0, e = 0, n = t.length; e < n; e++) {
          r += t[e].length;
        }for (o = new Uint8Array(r), i = 0, e = 0, n = t.length; e < n; e++) {
          a = t[e], o.set(a, i), i += a.length;
        }return o;
      } },
        o = { arraySet: function arraySet(t, e, n, r, i) {
        for (var a = 0; a < r; a++) {
          t[i + a] = e[n + a];
        }
      }, flattenChunks: function flattenChunks(t) {
        return [].concat.apply([], t);
      } };e.setTyped = function (t) {
      t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, a)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, o));
    }, e.setTyped(i);
  }, function (t, e, n) {
    "use strict";
    var r = n(4);e.a = function (t, e) {
      if (e = new r.a(e), !e.hasCountry(t)) throw new Error("Unknown country: " + t);return e.country(t).countryCallingCode();
    };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      var e = void 0,
          n = void 0;t = t.replace(/^tel:/, "tel=");for (var r = t.split(";"), i = Array.isArray(r), d = 0, r = i ? r : r[Symbol.iterator]();;) {
        var s;if (i) {
          if (d >= r.length) break;s = r[d++];
        } else {
          if (d = r.next(), d.done) break;s = d.value;
        }var u = s,
            l = u.split("="),
            f = o(l, 2),
            h = f[0],
            c = f[1];switch (h) {case "tel":
            e = c;break;case "ext":
            n = c;break;case "phone-context":
            "+" === c[0] && (e = c + e);}
      }if (!Object(a.d)(e)) return {};var $ = { number: e };return n && ($.ext = n), $;
    }function i(t) {
      var e = t.number,
          n = t.ext;if (!e) return "";if ("+" !== e[0]) throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');return "tel:" + e + (n ? ";ext=" + n : "");
    }e.b = r, e.a = i;var a = n(3),
        o = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            i = !1,
            a = void 0;try {
          for (var o, d = t[Symbol.iterator](); !(r = (o = d.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          i = !0, a = t;
        } finally {
          try {
            !r && d.return && d.return();
          } finally {
            if (i) throw a;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }();
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }var i = n(1),
        a = n(15),
        o = n(32),
        d = n(56),
        s = n(29),
        u = n(30),
        l = n(31),
        f = (n(14), n(3)),
        h = (n(10), Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }return t;
    }),
        c = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        $ = ["\\/+(.*)/", "(\\([^(]*)", "(?:" + o.g + "-|-" + o.g + ")" + o.g + "*(.+)", "[‒-―－]" + o.g + "*(.+)", "\\.+" + o.g + "*([^.]+)", o.g + "+(" + o.a + "+)"],
        p = Object(a.b)(0, 2),
        g = Object(a.b)(0, 4),
        m = i.b + i.a,
        _ = Object(a.b)(0, m),
        y = "[" + i.e + "]" + g,
        v = o.f + Object(a.b)(1, m),
        b = "(?:" + l.a + y + ")" + p + v + "(?:" + y + v + ")" + _ + "(?:" + Object(i.g)("matching") + ")?",
        w = new RegExp("[^" + o.c + o.b + "#]+$"),
        E = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
        x = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments[2];if (r(this, t), this.state = "NOT_READY", this.searchIndex = 0, n = h({}, n, { leniency: n.leniency || n.extended ? "POSSIBLE" : "VALID", maxTries: n.maxTries || E }), !n.leniency) throw new TypeError("`Leniency` not supplied");if (n.maxTries < 0) throw new TypeError("`maxTries` not supplied");if (this.text = e, this.options = n, this.metadata = i, this.leniency = d.a[n.leniency], !this.leniency) throw new TypeError("Unknown leniency: " + n.leniency + ".");this.maxTries = n.maxTries, this.PATTERN = new RegExp(b, "ig");
      }return c(t, [{ key: "find", value: function value() {
          for (var t = void 0; this.maxTries > 0 && null !== (t = this.PATTERN.exec(this.text));) {
            var e = t[0],
                n = t.index;if (e = Object(s.a)(e), Object(u.a)(e, n, this.text)) {
              var r = this.parseAndVerify(e, n, this.text) || this.extractInnerMatch(e, n, this.text);if (r) return r;
            }this.maxTries--;
          }
        } }, { key: "extractInnerMatch", value: function value(t, e, n) {
          for (var r = $, i = Array.isArray(r), o = 0, r = i ? r : r[Symbol.iterator]();;) {
            var d;if (i) {
              if (o >= r.length) break;d = r[o++];
            } else {
              if (o = r.next(), o.done) break;d = o.value;
            }for (var s = d, u = !0, l = void 0, f = new RegExp(s, "g"); null !== (l = f.exec(t)) && this.maxTries > 0;) {
              if (u) {
                var h = Object(a.d)(w, t.slice(0, l.index)),
                    c = this.parseAndVerify(h, e, n);if (c) return c;this.maxTries--, u = !1;
              }var p = Object(a.d)(w, l[1]),
                  g = this.parseAndVerify(p, e + l.index, n);if (g) return g;this.maxTries--;
            }
          }
        } }, { key: "parseAndVerify", value: function value(t, e, n) {
          if (Object(l.b)(t, e, n, this.options.leniency)) {
            var r = Object(f.a)(t, { extended: !0, defaultCountry: this.options.defaultCountry }, this.metadata.metadata);if (r.possible && ("IL" !== r.country || 4 !== r.phone.length || !(0 === e || e > 0 && "*" !== n[e - 1])) && this.leniency(r, t, this.metadata.metadata)) {
              var i = { startsAt: e, endsAt: e + t.length, country: r.country, phone: r.phone };return r.ext && (i.ext = r.ext), i;
            }
          }
        } }, { key: "hasNext", value: function value() {
          return "NOT_READY" === this.state && (this.lastMatch = this.find(), this.lastMatch ? this.state = "READY" : this.state = "DONE"), "READY" === this.state;
        } }, { key: "next", value: function value() {
          if (!this.hasNext()) throw new Error("No next element");var t = this.lastMatch;return this.lastMatch = null, this.state = "NOT_READY", t;
        } }]), t;
    }();e.a = x;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t) {
      for (var e = [], n = 0; n < t.length;) {
        "(" === t[n] ? e.push(n) : ")" === t[n] && e.pop(), n++;
      }var r = 0,
          i = "";e.push(t.length);for (var a = e, o = Array.isArray(a), d = 0, a = o ? a : a[Symbol.iterator]();;) {
        var s;if (o) {
          if (d >= a.length) break;s = a[d++];
        } else {
          if (d = a.next(), d.done) break;s = d.value;
        }var u = s;i += t.slice(r, u), r = u + 1;
      }return i;
    }function a(t, e) {
      return ")" === t[e] && e++, i(t.slice(0, e));
    }function o(t, e) {
      if (e < 1) return "";for (var n = ""; e > 1;) {
        1 & e && (n += t), e >>= 1, t += t;
      }return n + t;
    }var d = n(4),
        s = n(1),
        u = n(3),
        l = n(14),
        f = n(8),
        h = n(13),
        c = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        $ = o("9", 15),
        p = new RegExp("x"),
        g = function g() {
      return (/\[([^\[\]])*\]/g
      );
    },
        m = function m() {
      return (/\d(?=[^,}][^,}])/g
      );
    },
        _ = new RegExp("^[" + s.e + "]*(\\$\\d[" + s.e + "]*)+$"),
        y = "[" + s.c + "]{0,1}[" + s.e + s.d + "]*",
        v = new RegExp("^" + y + "$", "i"),
        b = function () {
      function t(e, n) {
        r(this, t), this.options = {}, this.metadata = new d.a(n), e && this.metadata.hasCountry(e) && (this.default_country = e), this.reset();
      }return c(t, [{ key: "input", value: function value(t) {
          var e = Object(u.b)(t) || "";return e || t && t.indexOf("+") >= 0 && (e = "+"), v.test(e) ? this.process_input(Object(h.a)(e)) : this.current_output;
        } }, { key: "process_input", value: function value(t) {
          if ("+" === t[0] && (this.parsed_input || (this.parsed_input += "+", this.reset_countriness()), t = t.slice(1)), this.parsed_input += t, this.national_number += t, this.is_international()) {
            if (this.countryCallingCode) this.country || this.determine_the_country();else {
              if (!this.national_number) return this.parsed_input;if (!this.extract_country_calling_code()) return this.parsed_input;this.initialize_phone_number_formats_for_this_country_calling_code(), this.reset_format(), this.determine_the_country();
            }
          } else {
            var e = this.national_prefix;this.national_number = this.national_prefix + this.national_number, this.extract_national_prefix(), this.national_prefix !== e && (this.matching_formats = void 0, this.reset_format());
          }if (!this.national_number) return this.format_as_non_formatted_number();this.match_formats_by_leading_digits();var n = this.format_national_phone_number(t);return n ? this.full_phone_number(n) : this.format_as_non_formatted_number();
        } }, { key: "format_as_non_formatted_number", value: function value() {
          return this.is_international() && this.countryCallingCode ? "+" + this.countryCallingCode + this.national_number : this.parsed_input;
        } }, { key: "format_national_phone_number", value: function value(t) {
          var e = void 0;this.chosen_format && (e = this.format_next_national_number_digits(t));var n = this.attempt_to_format_complete_phone_number();return n || (this.choose_another_format() ? this.reformat_national_number() : e);
        } }, { key: "reset", value: function value() {
          return this.parsed_input = "", this.current_output = "", this.national_prefix = "", this.national_number = "", this.reset_countriness(), this.reset_format(), this;
        } }, { key: "reset_country", value: function value() {
          this.is_international() ? this.country = void 0 : this.country = this.default_country;
        } }, { key: "reset_countriness", value: function value() {
          this.reset_country(), this.default_country && !this.is_international() ? (this.metadata.country(this.default_country), this.countryCallingCode = this.metadata.countryCallingCode(), this.initialize_phone_number_formats_for_this_country_calling_code()) : (this.metadata.country(void 0), this.countryCallingCode = void 0, this.available_formats = [], this.matching_formats = void 0);
        } }, { key: "reset_format", value: function value() {
          this.chosen_format = void 0, this.template = void 0, this.partially_populated_template = void 0, this.last_match_position = -1;
        } }, { key: "reformat_national_number", value: function value() {
          return this.format_next_national_number_digits(this.national_number);
        } }, { key: "initialize_phone_number_formats_for_this_country_calling_code", value: function value() {
          this.available_formats = this.metadata.formats().filter(function (t) {
            return _.test(t.internationalFormat());
          }), this.matching_formats = void 0;
        } }, { key: "match_formats_by_leading_digits", value: function value() {
          var t = this.national_number,
              e = t.length - 3;e < 0 && (e = 0);var n = this.had_enough_leading_digits && this.matching_formats || this.available_formats;this.had_enough_leading_digits = this.should_format(), this.matching_formats = n.filter(function (n) {
            var r = n.leadingDigitsPatterns().length;if (0 === r) return !0;var i = Math.min(e, r - 1),
                a = n.leadingDigitsPatterns()[i];return new RegExp("^(" + a + ")").test(t);
          }), this.chosen_format && -1 === this.matching_formats.indexOf(this.chosen_format) && this.reset_format();
        } }, { key: "should_format", value: function value() {
          return this.national_number.length >= 3;
        } }, { key: "attempt_to_format_complete_phone_number", value: function value() {
          for (var t = this.matching_formats, e = Array.isArray(t), n = 0, t = e ? t : t[Symbol.iterator]();;) {
            var r;if (e) {
              if (n >= t.length) break;r = t[n++];
            } else {
              if (n = t.next(), n.done) break;r = n.value;
            }var i = r;if (new RegExp("^(?:" + i.pattern() + ")$").test(this.national_number) && this.is_format_applicable(i)) {
              this.reset_format(), this.chosen_format = i;var a = Object(l.c)(this.national_number, i, this.is_international(), this.national_prefix.length > 0, this.metadata);if (this.create_formatting_template(i)) this.reformat_national_number();else {
                var o = this.full_phone_number(a);this.template = o.replace(/[\d\+]/g, "x"), this.partially_populated_template = o;
              }return a;
            }
          }
        } }, { key: "full_phone_number", value: function value(t) {
          return this.is_international() ? "+" + this.countryCallingCode + " " + t : t;
        } }, { key: "extract_country_calling_code", value: function value() {
          var t = Object(s.h)(this.parsed_input, this.default_country, this.metadata),
              e = t.countryCallingCode,
              n = t.number;if (e) return this.countryCallingCode = e, this.national_number = n, this.metadata.chooseCountryByCountryCallingCode(e), void 0 !== this.metadata.selectedCountry();
        } }, { key: "extract_national_prefix", value: function value() {
          if (this.national_prefix = "", this.metadata.selectedCountry()) {
            var t = Object(u.e)(this.national_number, this.metadata),
                e = t.number;if (this.metadata.possibleLengths() && (!this.is_possible_number(this.national_number) || this.is_possible_number(e)) || !Object(s.i)(this.national_number, this.metadata.nationalNumberPattern()) || Object(s.i)(e, this.metadata.nationalNumberPattern())) return this.national_prefix = this.national_number.slice(0, this.national_number.length - e.length), this.national_number = e, this.national_prefix;
          }
        } }, { key: "is_possible_number", value: function value(t) {
          switch (Object(f.a)(t, void 0, this.metadata)) {case "IS_POSSIBLE":
              return !0;default:
              return !1;}
        } }, { key: "choose_another_format", value: function value() {
          for (var t = this.matching_formats, e = Array.isArray(t), n = 0, t = e ? t : t[Symbol.iterator]();;) {
            var r;if (e) {
              if (n >= t.length) break;r = t[n++];
            } else {
              if (n = t.next(), n.done) break;r = n.value;
            }var i = r;if (this.chosen_format === i) return;if (this.is_format_applicable(i) && this.create_formatting_template(i)) return this.chosen_format = i, this.last_match_position = -1, !0;
          }this.reset_country(), this.reset_format();
        } }, { key: "is_format_applicable", value: function value(t) {
          return !(!this.is_international() && !this.national_prefix && t.nationalPrefixIsMandatoryWhenFormatting());
        } }, { key: "create_formatting_template", value: function value(t) {
          if (!(t.pattern().indexOf("|") >= 0)) {
            var e = this.get_template_for_phone_number_format_pattern(t);if (e) return this.partially_populated_template = e, this.is_international() ? this.template = "x" + o("x", this.countryCallingCode.length) + " " + e : this.template = e.replace(/\d/g, "x"), this.template;
          }
        } }, { key: "get_template_for_phone_number_format_pattern", value: function value(t) {
          var e = t.pattern().replace(g(), "\\d").replace(m(), "\\d"),
              n = $.match(e)[0];if (!(this.national_number.length > n.length)) {
            var r = this.get_format_format(t),
                i = new RegExp("^" + e + "$"),
                a = this.national_number.replace(/\d/g, "9");return i.test(a) && (n = a), n.replace(new RegExp(e), r).replace(new RegExp("9", "g"), "x");
          }
        } }, { key: "format_next_national_number_digits", value: function value(t) {
          for (var e = t.split(""), n = Array.isArray(e), r = 0, e = n ? e : e[Symbol.iterator]();;) {
            var i;if (n) {
              if (r >= e.length) break;i = e[r++];
            } else {
              if (r = e.next(), r.done) break;i = r.value;
            }var o = i;if (-1 === this.partially_populated_template.slice(this.last_match_position + 1).search(p)) return this.chosen_format = void 0, this.template = void 0, void (this.partially_populated_template = void 0);this.last_match_position = this.partially_populated_template.search(p), this.partially_populated_template = this.partially_populated_template.replace(p, o);
          }return a(this.partially_populated_template, this.last_match_position + 1);
        } }, { key: "is_international", value: function value() {
          return this.parsed_input && "+" === this.parsed_input[0];
        } }, { key: "get_format_format", value: function value(t) {
          return this.is_international() ? Object(l.d)(t.internationalFormat()) : !t.nationalPrefixFormattingRule() || !this.national_prefix && t.usesNationalPrefix() ? t.format() : t.format().replace(l.a, t.nationalPrefixFormattingRule());
        } }, { key: "determine_the_country", value: function value() {
          this.country = Object(u.c)(this.countryCallingCode, this.national_number, this.metadata);
        } }, { key: "getNationalNumber", value: function value() {
          return this.national_number;
        } }, { key: "getTemplate", value: function value() {
          if (this.template) {
            for (var t = -1, e = 0; e < this.parsed_input.length;) {
              t = this.template.indexOf("x", t + 1), e++;
            }return a(this.template, t + 1);
          }
        } }]), t;
    }();e.a = b;
  }, function (t, e) {
    function n() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }function r(t) {
      return "function" == typeof t;
    }function i(t) {
      return "number" == typeof t;
    }function a(t) {
      return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
    }function o(t) {
      return void 0 === t;
    }t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
      if (!i(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");return this._maxListeners = t, this;
    }, n.prototype.emit = function (t) {
      var e, n, i, d, s, u;if (this._events || (this._events = {}), "error" === t && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
        if ((e = arguments[1]) instanceof Error) throw e;var l = new Error('Uncaught, unspecified "error" event. (' + e + ")");throw l.context = e, l;
      }if (n = this._events[t], o(n)) return !1;if (r(n)) switch (arguments.length) {case 1:
          n.call(this);break;case 2:
          n.call(this, arguments[1]);break;case 3:
          n.call(this, arguments[1], arguments[2]);break;default:
          d = Array.prototype.slice.call(arguments, 1), n.apply(this, d);} else if (a(n)) for (d = Array.prototype.slice.call(arguments, 1), u = n.slice(), i = u.length, s = 0; s < i; s++) {
        u[s].apply(this, d);
      }return !0;
    }, n.prototype.addListener = function (t, e) {
      var i;if (!r(e)) throw TypeError("listener must be a function");return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? a(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, a(this._events[t]) && !this._events[t].warned && (i = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && i > 0 && this._events[t].length > i && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this;
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
      function n() {
        this.removeListener(t, n), i || (i = !0, e.apply(this, arguments));
      }if (!r(e)) throw TypeError("listener must be a function");var i = !1;return n.listener = e, this.on(t, n), this;
    }, n.prototype.removeListener = function (t, e) {
      var n, i, o, d;if (!r(e)) throw TypeError("listener must be a function");if (!this._events || !this._events[t]) return this;if (n = this._events[t], o = n.length, i = -1, n === e || r(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);else if (a(n)) {
        for (d = o; d-- > 0;) {
          if (n[d] === e || n[d].listener && n[d].listener === e) {
            i = d;break;
          }
        }if (i < 0) return this;1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", t, e);
      }return this;
    }, n.prototype.removeAllListeners = function (t) {
      var e, n;if (!this._events) return this;if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;if (0 === arguments.length) {
        for (e in this._events) {
          "removeListener" !== e && this.removeAllListeners(e);
        }return this.removeAllListeners("removeListener"), this._events = {}, this;
      }if (n = this._events[t], r(n)) this.removeListener(t, n);else if (n) for (; n.length;) {
        this.removeListener(t, n[n.length - 1]);
      }return delete this._events[t], this;
    }, n.prototype.listeners = function (t) {
      return this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : [];
    }, n.prototype.listenerCount = function (t) {
      if (this._events) {
        var e = this._events[t];if (r(e)) return 1;if (e) return e.length;
      }return 0;
    }, n.listenerCount = function (t, e) {
      return t.listenerCount(e);
    };
  }, function (t, e, n) {
    "use strict";
    (function (e, r, i) {
      function a(t) {
        var e = this;this.next = null, this.entry = null, this.finish = function () {
          C(e, t);
        };
      }function o(t) {
        return L.from(t);
      }function d(t) {
        return L.isBuffer(t) || t instanceof M;
      }function s() {}function u(t, e) {
        R = R || n(7), t = t || {}, this.objectMode = !!t.objectMode, e instanceof R && (this.objectMode = this.objectMode || !!t.writableObjectMode);var r = t.highWaterMark,
            i = this.objectMode ? 16 : 16384;this.highWaterMark = r || 0 === r ? r : i, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;var o = !1 === t.decodeStrings;this.decodeStrings = !o, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (t) {
          _(e, t);
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this);
      }function l(t) {
        if (R = R || n(7), !(B.call(l, this) || this instanceof R)) return new l(t);this._writableState = new u(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), N.call(this);
      }function f(t, e) {
        var n = new Error("write after end");t.emit("error", n), A(e, n);
      }function h(t, e, n, r) {
        var i = !0,
            a = !1;return null === n ? a = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || e.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (t.emit("error", a), A(r, a), i = !1), i;
      }function c(t, e, n) {
        return t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = L.from(e, n)), e;
      }function $(t, e, n, r, i, a) {
        if (!n) {
          var o = c(e, r, i);r !== o && (n = !0, i = "buffer", r = o);
        }var d = e.objectMode ? 1 : r.length;e.length += d;var s = e.length < e.highWaterMark;if (s || (e.needDrain = !0), e.writing || e.corked) {
          var u = e.lastBufferedRequest;e.lastBufferedRequest = { chunk: r, encoding: i, isBuf: n, callback: a, next: null }, u ? u.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
        } else p(t, e, !1, d, r, i, a);return s;
      }function p(t, e, n, r, i, a, o) {
        e.writelen = r, e.writecb = o, e.writing = !0, e.sync = !0, n ? t._writev(i, e.onwrite) : t._write(i, a, e.onwrite), e.sync = !1;
      }function g(t, e, n, r, i) {
        --e.pendingcb, n ? (A(i, r), A(k, t, e), t._writableState.errorEmitted = !0, t.emit("error", r)) : (i(r), t._writableState.errorEmitted = !0, t.emit("error", r), k(t, e));
      }function m(t) {
        t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
      }function _(t, e) {
        var n = t._writableState,
            r = n.sync,
            i = n.writecb;if (m(n), e) g(t, n, r, e, i);else {
          var a = w(n);a || n.corked || n.bufferProcessing || !n.bufferedRequest || b(t, n), r ? T(y, t, n, a, i) : y(t, n, a, i);
        }
      }function y(t, e, n, r) {
        n || v(t, e), e.pendingcb--, r(), k(t, e);
      }function v(t, e) {
        0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"));
      }function b(t, e) {
        e.bufferProcessing = !0;var n = e.bufferedRequest;if (t._writev && n && n.next) {
          var r = e.bufferedRequestCount,
              i = new Array(r),
              o = e.corkedRequestsFree;o.entry = n;for (var d = 0, s = !0; n;) {
            i[d] = n, n.isBuf || (s = !1), n = n.next, d += 1;
          }i.allBuffers = s, p(t, e, !0, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new a(e);
        } else {
          for (; n;) {
            var u = n.chunk,
                l = n.encoding,
                f = n.callback;if (p(t, e, !1, e.objectMode ? 1 : u.length, u, l, f), n = n.next, e.writing) break;
          }null === n && (e.lastBufferedRequest = null);
        }e.bufferedRequestCount = 0, e.bufferedRequest = n, e.bufferProcessing = !1;
      }function w(t) {
        return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing;
      }function E(t, e) {
        t._final(function (n) {
          e.pendingcb--, n && t.emit("error", n), e.prefinished = !0, t.emit("prefinish"), k(t, e);
        });
      }function x(t, e) {
        e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++, e.finalCalled = !0, A(E, t, e)) : (e.prefinished = !0, t.emit("prefinish")));
      }function k(t, e) {
        var n = w(e);return n && (x(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"))), n;
      }function S(t, e, n) {
        e.ending = !0, k(t, e), n && (e.finished ? A(n) : t.once("finish", n)), e.ended = !0, t.writable = !1;
      }function C(t, e, n) {
        var r = t.entry;for (t.entry = null; r;) {
          var i = r.callback;e.pendingcb--, i(n), r = r.next;
        }e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t;
      }var A = n(16);t.exports = l;var R,
          T = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : A;l.WritableState = u;var O = n(12);O.inherits = n(6);var I = { deprecate: n(73) },
          N = n(37),
          L = n(17).Buffer,
          M = i.Uint8Array || function () {},
          P = n(38);O.inherits(l, N), u.prototype.getBuffer = function () {
        for (var t = this.bufferedRequest, e = []; t;) {
          e.push(t), t = t.next;
        }return e;
      }, function () {
        try {
          Object.defineProperty(u.prototype, "buffer", { get: I.deprecate(function () {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
        } catch (t) {}
      }();var B;"function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (B = Function.prototype[Symbol.hasInstance], Object.defineProperty(l, Symbol.hasInstance, { value: function value(t) {
          return !!B.call(this, t) || t && t._writableState instanceof u;
        } })) : B = function B(t) {
        return t instanceof this;
      }, l.prototype.pipe = function () {
        this.emit("error", new Error("Cannot pipe, not readable"));
      }, l.prototype.write = function (t, e, n) {
        var r = this._writableState,
            i = !1,
            a = d(t) && !r.objectMode;return a && !L.isBuffer(t) && (t = o(t)), "function" == typeof e && (n = e, e = null), a ? e = "buffer" : e || (e = r.defaultEncoding), "function" != typeof n && (n = s), r.ended ? f(this, n) : (a || h(this, r, t, n)) && (r.pendingcb++, i = $(this, r, a, t, e, n)), i;
      }, l.prototype.cork = function () {
        this._writableState.corked++;
      }, l.prototype.uncork = function () {
        var t = this._writableState;t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || b(this, t));
      }, l.prototype.setDefaultEncoding = function (t) {
        if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);return this._writableState.defaultEncoding = t, this;
      }, l.prototype._write = function (t, e, n) {
        n(new Error("_write() is not implemented"));
      }, l.prototype._writev = null, l.prototype.end = function (t, e, n) {
        var r = this._writableState;"function" == typeof t ? (n = t, t = null, e = null) : "function" == typeof e && (n = e, e = null), null !== t && void 0 !== t && this.write(t, e), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || S(this, r, n);
      }, Object.defineProperty(l.prototype, "destroyed", { get: function get() {
          return void 0 !== this._writableState && this._writableState.destroyed;
        }, set: function set(t) {
          this._writableState && (this._writableState.destroyed = t);
        } }), l.prototype.destroy = P.destroy, l.prototype._undestroy = P.undestroy, l.prototype._destroy = function (t, e) {
        this.end(), e(t);
      };
    }).call(e, n(2), n(71).setImmediate, n(0));
  }, function (t, e, n) {
    "use strict";
    function r() {
      this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
    }function i(t, e, n) {
      if (t && u.isObject(t) && t instanceof r) return t;var i = new r();return i.parse(t, e, n), i;
    }function a(t) {
      return u.isString(t) && (t = i(t)), t instanceof r ? t.format() : r.prototype.format.call(t);
    }function o(t, e) {
      return i(t, !1, !0).resolve(e);
    }function d(t, e) {
      return t ? i(t, !1, !0).resolveObject(e) : e;
    }var s = n(78),
        u = n(80);e.parse = i, e.resolve = o, e.resolveObject = d, e.format = a, e.Url = r;var l = /^([a-z0-9.+-]+:)/i,
        f = /:[0-9]*$/,
        h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        c = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
        $ = ["{", "}", "|", "\\", "^", "`"].concat(c),
        p = ["'"].concat($),
        g = ["%", "/", "?", ";", "#"].concat(p),
        m = ["/", "?", "#"],
        _ = /^[+a-z0-9A-Z_-]{0,63}$/,
        y = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        v = { javascript: !0, "javascript:": !0 },
        b = { javascript: !0, "javascript:": !0 },
        w = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
        E = n(41);r.prototype.parse = function (t, e, n) {
      if (!u.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));var r = t.indexOf("?"),
          i = -1 !== r && r < t.indexOf("#") ? "?" : "#",
          a = t.split(i),
          o = /\\/g;a[0] = a[0].replace(o, "/"), t = a.join(i);var d = t;if (d = d.trim(), !n && 1 === t.split("#").length) {
        var f = h.exec(d);if (f) return this.path = d, this.href = d, this.pathname = f[1], f[2] ? (this.search = f[2], this.query = e ? E.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
      }var c = l.exec(d);if (c) {
        c = c[0];var $ = c.toLowerCase();this.protocol = $, d = d.substr(c.length);
      }if (n || c || d.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var x = "//" === d.substr(0, 2);!x || c && b[c] || (d = d.substr(2), this.slashes = !0);
      }if (!b[c] && (x || c && !w[c])) {
        for (var k = -1, S = 0; S < m.length; S++) {
          var C = d.indexOf(m[S]);-1 !== C && (-1 === k || C < k) && (k = C);
        }var A, R;R = -1 === k ? d.lastIndexOf("@") : d.lastIndexOf("@", k), -1 !== R && (A = d.slice(0, R), d = d.slice(R + 1), this.auth = decodeURIComponent(A)), k = -1;for (var S = 0; S < g.length; S++) {
          var C = d.indexOf(g[S]);-1 !== C && (-1 === k || C < k) && (k = C);
        }-1 === k && (k = d.length), this.host = d.slice(0, k), d = d.slice(k), this.parseHost(), this.hostname = this.hostname || "";var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];if (!T) for (var O = this.hostname.split(/\./), S = 0, I = O.length; S < I; S++) {
          var N = O[S];if (N && !N.match(_)) {
            for (var L = "", M = 0, P = N.length; M < P; M++) {
              N.charCodeAt(M) > 127 ? L += "x" : L += N[M];
            }if (!L.match(_)) {
              var B = O.slice(0, S),
                  j = O.slice(S + 1),
                  F = N.match(y);F && (B.push(F[1]), j.unshift(F[2])), j.length && (d = "/" + j.join(".") + d), this.hostname = B.join(".");break;
            }
          }
        }this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), T || (this.hostname = s.toASCII(this.hostname));var D = this.port ? ":" + this.port : "",
            U = this.hostname || "";this.host = U + D, this.href += this.host, T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== d[0] && (d = "/" + d));
      }if (!v[$]) for (var S = 0, I = p.length; S < I; S++) {
        var z = p[S];if (-1 !== d.indexOf(z)) {
          var Z = encodeURIComponent(z);Z === z && (Z = escape(z)), d = d.split(z).join(Z);
        }
      }var G = d.indexOf("#");-1 !== G && (this.hash = d.substr(G), d = d.slice(0, G));var H = d.indexOf("?");if (-1 !== H ? (this.search = d.substr(H), this.query = d.substr(H + 1), e && (this.query = E.parse(this.query)), d = d.slice(0, H)) : e && (this.search = "", this.query = {}), d && (this.pathname = d), w[$] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        var D = this.pathname || "",
            q = this.search || "";this.path = D + q;
      }return this.href = this.format(), this;
    }, r.prototype.format = function () {
      var t = this.auth || "";t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");var e = this.protocol || "",
          n = this.pathname || "",
          r = this.hash || "",
          i = !1,
          a = "";this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && u.isObject(this.query) && Object.keys(this.query).length && (a = E.stringify(this.query));var o = this.search || a && "?" + a || "";return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || w[e]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), o && "?" !== o.charAt(0) && (o = "?" + o), n = n.replace(/[?#]/g, function (t) {
        return encodeURIComponent(t);
      }), o = o.replace("#", "%23"), e + i + n + o + r;
    }, r.prototype.resolve = function (t) {
      return this.resolveObject(i(t, !1, !0)).format();
    }, r.prototype.resolveObject = function (t) {
      if (u.isString(t)) {
        var e = new r();e.parse(t, !1, !0), t = e;
      }for (var n = new r(), i = Object.keys(this), a = 0; a < i.length; a++) {
        var o = i[a];n[o] = this[o];
      }if (n.hash = t.hash, "" === t.href) return n.href = n.format(), n;if (t.slashes && !t.protocol) {
        for (var d = Object.keys(t), s = 0; s < d.length; s++) {
          var l = d[s];"protocol" !== l && (n[l] = t[l]);
        }return w[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
      }if (t.protocol && t.protocol !== n.protocol) {
        if (!w[t.protocol]) {
          for (var f = Object.keys(t), h = 0; h < f.length; h++) {
            var c = f[h];n[c] = t[c];
          }return n.href = n.format(), n;
        }if (n.protocol = t.protocol, t.host || b[t.protocol]) n.pathname = t.pathname;else {
          for (var $ = (t.pathname || "").split("/"); $.length && !(t.host = $.shift());) {}t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== $[0] && $.unshift(""), $.length < 2 && $.unshift(""), n.pathname = $.join("/");
        }if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
          var p = n.pathname || "",
              g = n.search || "";n.path = p + g;
        }return n.slashes = n.slashes || t.slashes, n.href = n.format(), n;
      }var m = n.pathname && "/" === n.pathname.charAt(0),
          _ = t.host || t.pathname && "/" === t.pathname.charAt(0),
          y = _ || m || n.host && t.pathname,
          v = y,
          E = n.pathname && n.pathname.split("/") || [],
          $ = t.pathname && t.pathname.split("/") || [],
          x = n.protocol && !w[n.protocol];if (x && (n.hostname = "", n.port = null, n.host && ("" === E[0] ? E[0] = n.host : E.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === $[0] ? $[0] = t.host : $.unshift(t.host)), t.host = null), y = y && ("" === $[0] || "" === E[0])), _) n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, E = $;else if ($.length) E || (E = []), E.pop(), E = E.concat($), n.search = t.search, n.query = t.query;else if (!u.isNullOrUndefined(t.search)) {
        if (x) {
          n.hostname = n.host = E.shift();var k = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");k && (n.auth = k.shift(), n.host = n.hostname = k.shift());
        }return n.search = t.search, n.query = t.query, u.isNull(n.pathname) && u.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
      }if (!E.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;for (var S = E.slice(-1)[0], C = (n.host || t.host || E.length > 1) && ("." === S || ".." === S) || "" === S, A = 0, R = E.length; R >= 0; R--) {
        S = E[R], "." === S ? E.splice(R, 1) : ".." === S ? (E.splice(R, 1), A++) : A && (E.splice(R, 1), A--);
      }if (!y && !v) for (; A--; A) {
        E.unshift("..");
      }!y || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""), C && "/" !== E.join("/").substr(-1) && E.push("");var T = "" === E[0] || E[0] && "/" === E[0].charAt(0);if (x) {
        n.hostname = n.host = T ? "" : E.length ? E.shift() : "";var k = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");k && (n.auth = k.shift(), n.host = n.hostname = k.shift());
      }return y = y || n.host && E.length, y && !T && E.unshift(""), E.length ? n.pathname = E.join("/") : (n.pathname = null, n.path = null), u.isNull(n.pathname) && u.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n;
    }, r.prototype.parseHost = function () {
      var t = this.host,
          e = f.exec(t);e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
    };
  }, function (t, e, n) {
    (function (t, r) {
      function i(t, n) {
        var r = { seen: [], stylize: o };return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), p(n) ? r.showHidden = n : n && e._extend(r, n), b(r.showHidden) && (r.showHidden = !1), b(r.depth) && (r.depth = 2), b(r.colors) && (r.colors = !1), b(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = a), s(r, t, r.depth);
      }function a(t, e) {
        var n = i.styles[e];return n ? "[" + i.colors[n][0] + "m" + t + "[" + i.colors[n][1] + "m" : t;
      }function o(t, e) {
        return t;
      }function d(t) {
        var e = {};return t.forEach(function (t, n) {
          e[t] = !0;
        }), e;
      }function s(t, n, r) {
        if (t.customInspect && n && S(n.inspect) && n.inspect !== e.inspect && (!n.constructor || n.constructor.prototype !== n)) {
          var i = n.inspect(r, t);return y(i) || (i = s(t, i, r)), i;
        }var a = u(t, n);if (a) return a;var o = Object.keys(n),
            p = d(o);if (t.showHidden && (o = Object.getOwnPropertyNames(n)), k(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return l(n);if (0 === o.length) {
          if (S(n)) {
            var g = n.name ? ": " + n.name : "";return t.stylize("[Function" + g + "]", "special");
          }if (w(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");if (x(n)) return t.stylize(Date.prototype.toString.call(n), "date");if (k(n)) return l(n);
        }var m = "",
            _ = !1,
            v = ["{", "}"];if ($(n) && (_ = !0, v = ["[", "]"]), S(n)) {
          m = " [Function" + (n.name ? ": " + n.name : "") + "]";
        }if (w(n) && (m = " " + RegExp.prototype.toString.call(n)), x(n) && (m = " " + Date.prototype.toUTCString.call(n)), k(n) && (m = " " + l(n)), 0 === o.length && (!_ || 0 == n.length)) return v[0] + m + v[1];if (r < 0) return w(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special");t.seen.push(n);var b;return b = _ ? f(t, n, r, p, o) : o.map(function (e) {
          return h(t, n, r, p, e, _);
        }), t.seen.pop(), c(b, m, v);
      }function u(t, e) {
        if (b(e)) return t.stylize("undefined", "undefined");if (y(e)) {
          var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";return t.stylize(n, "string");
        }return _(e) ? t.stylize("" + e, "number") : p(e) ? t.stylize("" + e, "boolean") : g(e) ? t.stylize("null", "null") : void 0;
      }function l(t) {
        return "[" + Error.prototype.toString.call(t) + "]";
      }function f(t, e, n, r, i) {
        for (var a = [], o = 0, d = e.length; o < d; ++o) {
          O(e, String(o)) ? a.push(h(t, e, n, r, String(o), !0)) : a.push("");
        }return i.forEach(function (i) {
          i.match(/^\d+$/) || a.push(h(t, e, n, r, i, !0));
        }), a;
      }function h(t, e, n, r, i, a) {
        var o, d, u;if (u = Object.getOwnPropertyDescriptor(e, i) || { value: e[i] }, u.get ? d = u.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : u.set && (d = t.stylize("[Setter]", "special")), O(r, i) || (o = "[" + i + "]"), d || (t.seen.indexOf(u.value) < 0 ? (d = g(n) ? s(t, u.value, null) : s(t, u.value, n - 1), d.indexOf("\n") > -1 && (d = a ? d.split("\n").map(function (t) {
          return "  " + t;
        }).join("\n").substr(2) : "\n" + d.split("\n").map(function (t) {
          return "   " + t;
        }).join("\n"))) : d = t.stylize("[Circular]", "special")), b(o)) {
          if (a && i.match(/^\d+$/)) return d;o = JSON.stringify("" + i), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = t.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = t.stylize(o, "string"));
        }return o + ": " + d;
      }function c(t, e, n) {
        var r = 0;return t.reduce(function (t, e) {
          return r++, e.indexOf("\n") >= 0 && r++, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0) > 60 ? n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1] : n[0] + e + " " + t.join(", ") + " " + n[1];
      }function $(t) {
        return Array.isArray(t);
      }function p(t) {
        return "boolean" == typeof t;
      }function g(t) {
        return null === t;
      }function m(t) {
        return null == t;
      }function _(t) {
        return "number" == typeof t;
      }function y(t) {
        return "string" == typeof t;
      }function v(t) {
        return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t));
      }function b(t) {
        return void 0 === t;
      }function w(t) {
        return E(t) && "[object RegExp]" === A(t);
      }function E(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
      }function x(t) {
        return E(t) && "[object Date]" === A(t);
      }function k(t) {
        return E(t) && ("[object Error]" === A(t) || t instanceof Error);
      }function S(t) {
        return "function" == typeof t;
      }function C(t) {
        return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || void 0 === t;
      }function A(t) {
        return Object.prototype.toString.call(t);
      }function R(t) {
        return t < 10 ? "0" + t.toString(10) : t.toString(10);
      }function T() {
        var t = new Date(),
            e = [R(t.getHours()), R(t.getMinutes()), R(t.getSeconds())].join(":");return [t.getDate(), M[t.getMonth()], e].join(" ");
      }function O(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }var I = /%[sdj%]/g;e.format = function (t) {
        if (!y(t)) {
          for (var e = [], n = 0; n < arguments.length; n++) {
            e.push(i(arguments[n]));
          }return e.join(" ");
        }for (var n = 1, r = arguments, a = r.length, o = String(t).replace(I, function (t) {
          if ("%%" === t) return "%";if (n >= a) return t;switch (t) {case "%s":
              return String(r[n++]);case "%d":
              return Number(r[n++]);case "%j":
              try {
                return JSON.stringify(r[n++]);
              } catch (t) {
                return "[Circular]";
              }default:
              return t;}
        }), d = r[n]; n < a; d = r[++n]) {
          g(d) || !E(d) ? o += " " + d : o += " " + i(d);
        }return o;
      }, e.deprecate = function (n, i) {
        function a() {
          if (!o) {
            if (r.throwDeprecation) throw new Error(i);r.traceDeprecation ? console.trace(i) : console.error(i), o = !0;
          }return n.apply(this, arguments);
        }if (b(t.process)) return function () {
          return e.deprecate(n, i).apply(this, arguments);
        };if (!0 === r.noDeprecation) return n;var o = !1;return a;
      };var N,
          L = {};e.debuglog = function (t) {
        if (b(N) && (N = r.env.NODE_DEBUG || ""), t = t.toUpperCase(), !L[t]) if (new RegExp("\\b" + t + "\\b", "i").test(N)) {
          var n = r.pid;L[t] = function () {
            var r = e.format.apply(e, arguments);console.error("%s %d: %s", t, n, r);
          };
        } else L[t] = function () {};return L[t];
      }, e.inspect = i, i.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, i.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, e.isArray = $, e.isBoolean = p, e.isNull = g, e.isNullOrUndefined = m, e.isNumber = _, e.isString = y, e.isSymbol = v, e.isUndefined = b, e.isRegExp = w, e.isObject = E, e.isDate = x, e.isError = k, e.isFunction = S, e.isPrimitive = C, e.isBuffer = n(91);var M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];e.log = function () {
        console.log("%s - %s", T(), e.format.apply(e, arguments));
      }, e.inherits = n(6), e._extend = function (t, e) {
        if (!e || !E(e)) return t;for (var n = Object.keys(e), r = n.length; r--;) {
          t[n[r]] = e[n[r]];
        }return t;
      };
    }).call(e, n(0), n(2));
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++) {
          n[e] = t[e];
        }return n;
      }return Array.from(t);
    }var i = n(51),
        a = n(59),
        o = n(60);e.a = { name: "vue-tel-input", props: { value: { type: String }, placeholder: { type: String, default: "Enter a phone number" }, wrapperClasses: { type: String, default: "" }, disabledFetchingCountry: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, disabledFormatting: { type: Boolean, default: !1 }, invalidMsg: { default: "", type: String }, required: { type: Boolean, default: !1 }, defaultCountry: { type: String, default: "" }, enabledCountryCode: { type: Boolean, default: !1 }, enabledFlags: { type: Boolean, default: !0 }, preferredCountries: { type: Array, default: function _default() {
            return [];
          } }, onlyCountries: { type: Array, default: function _default() {
            return [];
          } }, ignoredCountries: { type: Array, default: function _default() {
            return [];
          } }, autocomplete: { type: String, default: "on" }, name: { type: String, default: "telephone" }, inputClasses: { type: String, default: "" }, dropdownOptions: { type: Object, default: function _default() {
            return {};
          } }, inputOptions: { type: Object, default: function _default() {
            return {};
          } }, maxLen: { type: Number, default: 25 } }, mounted: function mounted() {
        this.initializeCountry(), this.inputOptions && this.inputOptions.showDialCode && this.activeCountry && (this.phone = "+" + this.activeCountry.dialCode), this.$emit("onValidate", this.response);
      }, created: function created() {
        this.value && (this.phone = this.value);
      }, data: function data() {
        return { phone: "", activeCountry: { iso2: "" }, open: !1, selectedIndex: null, typeToFindInput: "", typeToFindTimer: null };
      }, computed: { mode: function mode() {
          return this.phone ? "+" === this.phone[0] ? "code" : "0" === this.phone[0] ? "prefix" : "normal" : "";
        }, filteredCountries: function filteredCountries() {
          var t = this;return this.onlyCountries.length ? this.getCountries(this.onlyCountries) : this.ignoredCountries.length ? a.a.filter(function (e) {
            var n = e.iso2;return !t.ignoredCountries.includes(n.toUpperCase()) && !t.ignoredCountries.includes(n.toLowerCase());
          }) : a.a;
        }, sortedCountries: function sortedCountries() {
          return [].concat(r(this.getCountries(this.preferredCountries).map(function (t) {
            return Object.assign({}, t, { preferred: !0 });
          })), r(this.filteredCountries));
        }, formattedResult: function formattedResult() {
          if (!this.mode || !this.filteredCountries) return "";var t = this.phone;if ("code" === this.mode) {
            var e = new i.a();e.input(this.phone), this.activeCountry = this.findCountry(e.country) || this.activeCountry;
          } else "prefix" === this.mode && (t = this.phone.slice(1));return this.disabledFormatting ? this.phone : Object(i.b)(t, this.activeCountry && this.activeCountry.iso2, "International");
        }, state: function state() {
          return Object(i.c)(this.formattedResult, this.activeCountry && this.activeCountry.iso2);
        }, response: function response() {
          var t = { number: this.state ? this.formattedResult : this.phone, isValid: this.state, country: this.activeCountry };return this.disabledFormatting && Object.assign(t, { formattedNumber: Object(i.b)(this.phone, this.activeCountry && this.activeCountry.iso2, "International") }), t;
        } }, watch: { state: function state(t) {
          t && "prefix" !== this.mode && (this.phone = this.formattedResult), this.$emit("onValidate", this.response);
        }, value: function value() {
          this.phone = this.value;
        } }, methods: { initializeCountry: function initializeCountry() {
          var t = this;if (this.defaultCountry) {
            var e = this.findCountry(this.defaultCountry);if (e) return void (this.activeCountry = e);
          }this.activeCountry = this.findCountry(this.preferredCountries[0]) || this.filteredCountries[0], this.disabledFetchingCountry || Object(o.a)().then(function (e) {
            t.activeCountry = t.findCountry(e) || t.activeCountry;
          });
        }, getCountries: function getCountries() {
          var t = this;return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (e) {
            return t.findCountry(e);
          }).filter(Boolean);
        }, findCountry: function findCountry() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";return a.a.find(function (e) {
            return e.iso2 === t.toUpperCase();
          });
        }, getItemClass: function getItemClass(t, e) {
          return { highlighted: this.selectedIndex === t, "last-preferred": t === this.preferredCountries.length - 1, preferred: !!~this.preferredCountries.map(function (t) {
              return t.toUpperCase();
            }).indexOf(e) };
        }, choose: function choose(t) {
          this.activeCountry = t, this.inputOptions && this.inputOptions.showDialCode && t && (this.phone = "+" + t.dialCode), this.$emit("onInput", this.response);
        }, onInput: function onInput() {
          this.$refs.input.setCustomValidity(this.response.isValid ? "" : this.invalidMsg), this.$emit("input", this.response.number), this.$emit("onInput", this.response);
        }, onBlur: function onBlur() {
          this.$emit("onBlur");
        }, toggleDropdown: function toggleDropdown() {
          this.disabled || (this.open = !this.open);
        }, clickedOutside: function clickedOutside() {
          this.open = !1;
        }, keyboardNav: function keyboardNav(t) {
          var e = this;if (40 === t.keyCode) {
            this.open = !0, null === this.selectedIndex ? this.selectedIndex = 0 : this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);var n = this.$refs.list.children[this.selectedIndex];n.offsetTop + n.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight && (this.$refs.list.scrollTop = n.offsetTop - this.$refs.list.clientHeight + n.clientHeight);
          } else if (38 === t.keyCode) {
            this.open = !0, null === this.selectedIndex ? this.selectedIndex = this.sortedCountries.length - 1 : this.selectedIndex = Math.max(0, this.selectedIndex - 1);var r = this.$refs.list.children[this.selectedIndex];r.offsetTop < this.$refs.list.scrollTop && (this.$refs.list.scrollTop = r.offsetTop);
          } else if (13 === t.keyCode) null !== this.selectedIndex && this.choose(this.sortedCountries[this.selectedIndex]), this.open = !this.open;else {
            this.typeToFindInput += t.key, clearTimeout(this.typeToFindTimer), this.typeToFindTimer = setTimeout(function () {
              e.typeToFindInput = "";
            }, 700);var i = this.sortedCountries.slice(this.preferredCountries.length).findIndex(function (t) {
              return t.name.toLowerCase().startsWith(e.typeToFindInput);
            });if (~i) {
              this.selectedIndex = this.preferredCountries.length + i;var a = this.$refs.list.children[this.selectedIndex];(a.offsetTop < this.$refs.list.scrollTop || a.offsetTop + a.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight) && (this.$refs.list.scrollTop = a.offsetTop - this.$refs.list.clientHeight / 2);
            }
          }
        }, reset: function reset() {
          this.selectedIndex = this.sortedCountries.map(function (t) {
            return t.iso2;
          }).indexOf(this.activeCountry.iso2), this.open = !1;
        } }, directives: { "click-outside": { bind: function bind(t, e, n) {
            if ("function" != typeof e.value) {
              var r = n.context.name,
                  i = "[Vue-click-outside:] provided expression " + e.expression + " is not a function, but has to be";r && (i += "Found in component " + r), console.warn(i);
            }var a = e.modifiers.bubble,
                o = function o(n) {
              (a || !t.contains(n.target) && t !== n.target) && e.value(n);
            };t.__vueClickOutside__ = o, document.addEventListener("click", o);
          }, unbind: function unbind(t, e) {
            document.removeEventListener("click", t.__vueClickOutside__), t.__vueClickOutside__ = null;
          } } } };
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = new a.a(e);return n.country(t), s.test(n.IDDPrefix()) ? n.IDDPrefix() : n.defaultIDDPrefix();
    }function i(t, e, n) {
      if (e) {
        var r = new a.a(n);r.country(e);var i = new RegExp(r.IDDPrefix());if (0 === t.search(i)) {
          t = t.slice(t.match(i)[0].length);var o = t.match(d);if (!(o && null != o[1] && o[1].length > 0 && "0" === o[1])) return t;
        }
      }
    }e.a = r, e.b = i;var a = n(4),
        o = n(1),
        d = new RegExp("([" + o.d + "])"),
        s = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return Object(i.d)(a, t);
    }e.a = r;var i = n(15),
        a = /[\\\/] *x/;
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      if (i.test(t)) return !1;if (a.test(t)) {
        var r = n.slice(e + t.length);if (o.test(r)) return !1;
      }return !0;
    }e.a = r;var i = /(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/,
        a = /[12]\d{3}[-\/]?[01]\d[-\/]?[0-3]\d +[0-2]\d$/,
        o = /^:[0-5]\d/;
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n, r) {
      if (l.test(t) && !f.test(t)) {
        if ("POSSIBLE" !== r) {
          if (e > 0 && !s.test(t)) {
            var i = n[e - 1];if (Object(o.d)(i) || Object(o.e)(i)) return !1;
          }var a = e + t.length;if (a < n.length) {
            var d = n[a];if (Object(o.d)(d) || Object(o.e)(d)) return !1;
          }
        }return !0;
      }
    }n.d(e, "a", function () {
      return d;
    }), e.b = r;var i = n(1),
        a = n(15),
        o = n(32),
        d = "[(\\[（［" + i.c + "]",
        s = new RegExp("^" + d),
        u = Object(a.b)(0, 3),
        l = new RegExp("^(?:[(\\[（［])?(?:[^(\\[（［)\\]）］]+[)\\]）］])?[^(\\[（［)\\]）］]+(?:[(\\[（［][^(\\[（［)\\]）］]+[)\\]）］])" + u + "[^(\\[（［)\\]）］]*$"),
        f = /\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return !(!h.test(t) && !$.test(t)) && p.test(t);
    }function i(t) {
      return "%" === t || c.test(t);
    }n.d(e, "g", function () {
      return o;
    }), n.d(e, "a", function () {
      return d;
    }), n.d(e, "c", function () {
      return s;
    }), n.d(e, "f", function () {
      return u;
    }), n.d(e, "b", function () {
      return l;
    }), e.e = r, e.d = i;var a = " \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000",
        o = "[" + a + "]",
        d = "[^" + a + "]",
        s = "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９",
        u = "[0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９]",
        l = "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        f = "[" + l + "]",
        h = new RegExp(f),
        c = new RegExp("[$¢-¥֏؋৲৳৻૱௹฿៛₠-₹꠸﷼﹩＄￠￡￥￦]"),
        $ = new RegExp("[̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣤ-ࣾऀ-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ా-ీె-ైొ-్ౕౖౢౣ಼ಿೆೌ್ೢೣു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᯦᮫ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᷀-ᷦ᷼-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꨩ-ꨮꨱꨲꨵꨶꩃꩌꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︦]"),
        p = new RegExp("[\0--ÿĀ-ſḀ-ỿƀ-ɏ̀-ͯ]");
  }, function (t, e) {
    var n = {}.toString;t.exports = Array.isArray || function (t) {
      return "[object Array]" == n.call(t);
    };
  }, function (t, e, n) {
    (function (t) {
      var r = n(67),
          i = n(76),
          a = n(77),
          o = n(25),
          d = e;d.request = function (e, n) {
        e = "string" == typeof e ? o.parse(e) : i(e);var a = -1 === t.location.protocol.search(/^https?:$/) ? "http:" : "",
            d = e.protocol || a,
            s = e.hostname || e.host,
            u = e.port,
            l = e.path || "/";s && -1 !== s.indexOf(":") && (s = "[" + s + "]"), e.url = (s ? d + "//" + s : "") + (u ? ":" + u : "") + l, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};var f = new r(e);return n && f.on("response", n), f;
      }, d.get = function (t, e) {
        var n = d.request(t, e);return n.end(), n;
      }, d.Agent = function () {}, d.Agent.defaultMaxSockets = 4, d.STATUS_CODES = a, d.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"];
    }).call(e, n(0));
  }, function (t, e, n) {
    (function (t) {
      function n() {
        if (void 0 !== a) return a;if (t.XMLHttpRequest) {
          a = new t.XMLHttpRequest();try {
            a.open("GET", t.XDomainRequest ? "/" : "https://example.com");
          } catch (t) {
            a = null;
          }
        } else a = null;return a;
      }function r(t) {
        var e = n();if (!e) return !1;try {
          return e.responseType = t, e.responseType === t;
        } catch (t) {}return !1;
      }function i(t) {
        return "function" == typeof t;
      }e.fetch = i(t.fetch) && i(t.ReadableStream), e.blobConstructor = !1;try {
        new Blob([new ArrayBuffer(1)]), e.blobConstructor = !0;
      } catch (t) {}var a,
          o = void 0 !== t.ArrayBuffer,
          d = o && i(t.ArrayBuffer.prototype.slice);e.arraybuffer = e.fetch || o && r("arraybuffer"), e.msstream = !e.fetch && d && r("ms-stream"), e.mozchunkedarraybuffer = !e.fetch && o && r("moz-chunked-arraybuffer"), e.overrideMimeType = e.fetch || !!n() && i(n().overrideMimeType), e.vbArray = i(t.VBArray), a = null;
    }).call(e, n(0));
  }, function (t, e, n) {
    "use strict";
    (function (e, r) {
      function i(t) {
        return B.from(t);
      }function a(t) {
        return B.isBuffer(t) || t instanceof j;
      }function o(t, e, n) {
        if ("function" == typeof t.prependListener) return t.prependListener(e, n);t._events && t._events[e] ? L(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n);
      }function d(t, e) {
        N = N || n(7), t = t || {}, this.objectMode = !!t.objectMode, e instanceof N && (this.objectMode = this.objectMode || !!t.readableObjectMode);var r = t.highWaterMark,
            i = this.objectMode ? 16 : 16384;this.highWaterMark = r || 0 === r ? r : i, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new Z(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (z || (z = n(39).StringDecoder), this.decoder = new z(t.encoding), this.encoding = t.encoding);
      }function s(t) {
        if (N = N || n(7), !(this instanceof s)) return new s(t);this._readableState = new d(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), P.call(this);
      }function u(t, e, n, r, a) {
        var o = t._readableState;if (null === e) o.reading = !1, p(t, o);else {
          var d;a || (d = f(o, e)), d ? t.emit("error", d) : o.objectMode || e && e.length > 0 ? ("string" == typeof e || o.objectMode || Object.getPrototypeOf(e) === B.prototype || (e = i(e)), r ? o.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : l(t, o, e, !0) : o.ended ? t.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1, o.decoder && !n ? (e = o.decoder.write(e), o.objectMode || 0 !== e.length ? l(t, o, e, !1) : _(t, o)) : l(t, o, e, !1))) : r || (o.reading = !1);
        }return h(o);
      }function l(t, e, n, r) {
        e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && g(t)), _(t, e);
      }function f(t, e) {
        var n;return a(e) || "string" == typeof e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n;
      }function h(t) {
        return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length);
      }function c(t) {
        return t >= q ? t = q : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t;
      }function $(t, e) {
        return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = c(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0));
      }function p(t, e) {
        if (!e.ended) {
          if (e.decoder) {
            var n = e.decoder.end();n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length);
          }e.ended = !0, g(t);
        }
      }function g(t) {
        var e = t._readableState;e.needReadable = !1, e.emittedReadable || (U("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? I(m, t) : m(t));
      }function m(t) {
        U("emit readable"), t.emit("readable"), x(t);
      }function _(t, e) {
        e.readingMore || (e.readingMore = !0, I(y, t, e));
      }function y(t, e) {
        for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (U("maybeReadMore read 0"), t.read(0), n !== e.length);) {
          n = e.length;
        }e.readingMore = !1;
      }function v(t) {
        return function () {
          var e = t._readableState;U("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && M(t, "data") && (e.flowing = !0, x(t));
        };
      }function b(t) {
        U("readable nexttick read 0"), t.read(0);
      }function w(t, e) {
        e.resumeScheduled || (e.resumeScheduled = !0, I(E, t, e));
      }function E(t, e) {
        e.reading || (U("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), x(t), e.flowing && !e.reading && t.read(0);
      }function x(t) {
        var e = t._readableState;for (U("flow", e.flowing); e.flowing && null !== t.read();) {}
      }function k(t, e) {
        if (0 === e.length) return null;var n;return e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : n = S(t, e.buffer, e.decoder), n;
      }function S(t, e, n) {
        var r;return t < e.head.data.length ? (r = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? C(t, e) : A(t, e), r;
      }function C(t, e) {
        var n = e.head,
            r = 1,
            i = n.data;for (t -= i.length; n = n.next;) {
          var a = n.data,
              o = t > a.length ? a.length : t;if (o === a.length ? i += a : i += a.slice(0, t), 0 === (t -= o)) {
            o === a.length ? (++r, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = a.slice(o));break;
          }++r;
        }return e.length -= r, i;
      }function A(t, e) {
        var n = B.allocUnsafe(t),
            r = e.head,
            i = 1;for (r.data.copy(n), t -= r.data.length; r = r.next;) {
          var a = r.data,
              o = t > a.length ? a.length : t;if (a.copy(n, n.length - t, 0, o), 0 === (t -= o)) {
            o === a.length ? (++i, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = a.slice(o));break;
          }++i;
        }return e.length -= i, n;
      }function R(t) {
        var e = t._readableState;if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');e.endEmitted || (e.ended = !0, I(T, e, t));
      }function T(t, e) {
        t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"));
      }function O(t, e) {
        for (var n = 0, r = t.length; n < r; n++) {
          if (t[n] === e) return n;
        }return -1;
      }var I = n(16);t.exports = s;var N,
          L = n(33);s.ReadableState = d;var M = (n(23).EventEmitter, function (t, e) {
        return t.listeners(e).length;
      }),
          P = n(37),
          B = n(17).Buffer,
          j = e.Uint8Array || function () {},
          F = n(12);F.inherits = n(6);var D = n(69),
          U = void 0;U = D && D.debuglog ? D.debuglog("stream") : function () {};var z,
          Z = n(70),
          G = n(38);F.inherits(s, P);var H = ["error", "close", "destroy", "pause", "resume"];Object.defineProperty(s.prototype, "destroyed", { get: function get() {
          return void 0 !== this._readableState && this._readableState.destroyed;
        }, set: function set(t) {
          this._readableState && (this._readableState.destroyed = t);
        } }), s.prototype.destroy = G.destroy, s.prototype._undestroy = G.undestroy, s.prototype._destroy = function (t, e) {
        this.push(null), e(t);
      }, s.prototype.push = function (t, e) {
        var n,
            r = this._readableState;return r.objectMode ? n = !0 : "string" == typeof t && (e = e || r.defaultEncoding, e !== r.encoding && (t = B.from(t, e), e = ""), n = !0), u(this, t, e, !1, n);
      }, s.prototype.unshift = function (t) {
        return u(this, t, null, !0, !1);
      }, s.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
      }, s.prototype.setEncoding = function (t) {
        return z || (z = n(39).StringDecoder), this._readableState.decoder = new z(t), this._readableState.encoding = t, this;
      };var q = 8388608;s.prototype.read = function (t) {
        U("read", t), t = parseInt(t, 10);var e = this._readableState,
            n = t;if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return U("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? R(this) : g(this), null;if (0 === (t = $(t, e)) && e.ended) return 0 === e.length && R(this), null;var r = e.needReadable;U("need readable", r), (0 === e.length || e.length - t < e.highWaterMark) && (r = !0, U("length less than watermark", r)), e.ended || e.reading ? (r = !1, U("reading or ended", r)) : r && (U("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = $(n, e)));var i;return i = t > 0 ? k(t, e) : null, null === i ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && R(this)), null !== i && this.emit("data", i), i;
      }, s.prototype._read = function (t) {
        this.emit("error", new Error("_read() is not implemented"));
      }, s.prototype.pipe = function (t, e) {
        function n(t, e) {
          U("onunpipe"), t === h && e && !1 === e.hasUnpiped && (e.hasUnpiped = !0, a());
        }function i() {
          U("onend"), t.end();
        }function a() {
          U("cleanup"), t.removeListener("close", u), t.removeListener("finish", l), t.removeListener("drain", g), t.removeListener("error", s), t.removeListener("unpipe", n), h.removeListener("end", i), h.removeListener("end", f), h.removeListener("data", d), m = !0, !c.awaitDrain || t._writableState && !t._writableState.needDrain || g();
        }function d(e) {
          U("ondata"), _ = !1, !1 !== t.write(e) || _ || ((1 === c.pipesCount && c.pipes === t || c.pipesCount > 1 && -1 !== O(c.pipes, t)) && !m && (U("false write response, pause", h._readableState.awaitDrain), h._readableState.awaitDrain++, _ = !0), h.pause());
        }function s(e) {
          U("onerror", e), f(), t.removeListener("error", s), 0 === M(t, "error") && t.emit("error", e);
        }function u() {
          t.removeListener("finish", l), f();
        }function l() {
          U("onfinish"), t.removeListener("close", u), f();
        }function f() {
          U("unpipe"), h.unpipe(t);
        }var h = this,
            c = this._readableState;switch (c.pipesCount) {case 0:
            c.pipes = t;break;case 1:
            c.pipes = [c.pipes, t];break;default:
            c.pipes.push(t);}c.pipesCount += 1, U("pipe count=%d opts=%j", c.pipesCount, e);var $ = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr,
            p = $ ? i : f;c.endEmitted ? I(p) : h.once("end", p), t.on("unpipe", n);var g = v(h);t.on("drain", g);var m = !1,
            _ = !1;return h.on("data", d), o(t, "error", s), t.once("close", u), t.once("finish", l), t.emit("pipe", h), c.flowing || (U("pipe resume"), h.resume()), t;
      }, s.prototype.unpipe = function (t) {
        var e = this._readableState,
            n = { hasUnpiped: !1 };if (0 === e.pipesCount) return this;if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, n), this);if (!t) {
          var r = e.pipes,
              i = e.pipesCount;e.pipes = null, e.pipesCount = 0, e.flowing = !1;for (var a = 0; a < i; a++) {
            r[a].emit("unpipe", this, n);
          }return this;
        }var o = O(e.pipes, t);return -1 === o ? this : (e.pipes.splice(o, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, n), this);
      }, s.prototype.on = function (t, e) {
        var n = P.prototype.on.call(this, t, e);if ("data" === t) !1 !== this._readableState.flowing && this.resume();else if ("readable" === t) {
          var r = this._readableState;r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && g(this) : I(b, this));
        }return n;
      }, s.prototype.addListener = s.prototype.on, s.prototype.resume = function () {
        var t = this._readableState;return t.flowing || (U("resume"), t.flowing = !0, w(this, t)), this;
      }, s.prototype.pause = function () {
        return U("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (U("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
      }, s.prototype.wrap = function (t) {
        var e = this._readableState,
            n = !1,
            r = this;t.on("end", function () {
          if (U("wrapped end"), e.decoder && !e.ended) {
            var t = e.decoder.end();t && t.length && r.push(t);
          }r.push(null);
        }), t.on("data", function (i) {
          if (U("wrapped data"), e.decoder && (i = e.decoder.write(i)), (!e.objectMode || null !== i && void 0 !== i) && (e.objectMode || i && i.length)) {
            r.push(i) || (n = !0, t.pause());
          }
        });for (var i in t) {
          void 0 === this[i] && "function" == typeof t[i] && (this[i] = function (e) {
            return function () {
              return t[e].apply(t, arguments);
            };
          }(i));
        }for (var a = 0; a < H.length; a++) {
          t.on(H[a], r.emit.bind(r, H[a]));
        }return r._read = function (e) {
          U("wrapped _read", e), n && (n = !1, t.resume());
        }, r;
      }, s._fromList = k;
    }).call(e, n(0), n(2));
  }, function (t, e, n) {
    t.exports = n(23).EventEmitter;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = this,
          r = this._readableState && this._readableState.destroyed,
          i = this._writableState && this._writableState.destroyed;if (r || i) return void (e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || o(a, this, t));this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function (t) {
        !e && t ? (o(a, n, t), n._writableState && (n._writableState.errorEmitted = !0)) : e && e(t);
      });
    }function i() {
      this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
    }function a(t, e) {
      t.emit("error", e);
    }var o = n(16);t.exports = { destroy: r, undestroy: i };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      if (!t) return "utf8";for (var e;;) {
        switch (t) {case "utf8":case "utf-8":
            return "utf8";case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return "utf16le";case "latin1":case "binary":
            return "latin1";case "base64":case "ascii":case "hex":
            return t;default:
            if (e) return;t = ("" + t).toLowerCase(), e = !0;}
      }
    }function i(t) {
      var e = r(t);if ("string" != typeof e && (_.isEncoding === y || !y(t))) throw new Error("Unknown encoding: " + t);return e || t;
    }function a(t) {
      this.encoding = i(t);var e;switch (this.encoding) {case "utf16le":
          this.text = h, this.end = c, e = 4;break;case "utf8":
          this.fillLast = u, e = 4;break;case "base64":
          this.text = $, this.end = p, e = 3;break;default:
          return this.write = g, void (this.end = m);}this.lastNeed = 0, this.lastTotal = 0, this.lastChar = _.allocUnsafe(e);
    }function o(t) {
      return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : -1;
    }function d(t, e, n) {
      var r = e.length - 1;if (r < n) return 0;var i = o(e[r]);return i >= 0 ? (i > 0 && (t.lastNeed = i - 1), i) : --r < n ? 0 : (i = o(e[r])) >= 0 ? (i > 0 && (t.lastNeed = i - 2), i) : --r < n ? 0 : (i = o(e[r]), i >= 0 ? (i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i) : 0);
    }function s(t, e, n) {
      if (128 != (192 & e[0])) return t.lastNeed = 0, "�".repeat(n);if (t.lastNeed > 1 && e.length > 1) {
        if (128 != (192 & e[1])) return t.lastNeed = 1, "�".repeat(n + 1);if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "�".repeat(n + 2);
      }
    }function u(t) {
      var e = this.lastTotal - this.lastNeed,
          n = s(this, t, e);return void 0 !== n ? n : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void (this.lastNeed -= t.length));
    }function l(t, e) {
      var n = d(this, t, e);if (!this.lastNeed) return t.toString("utf8", e);this.lastTotal = n;var r = t.length - (n - this.lastNeed);return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r);
    }function f(t) {
      var e = t && t.length ? this.write(t) : "";return this.lastNeed ? e + "�".repeat(this.lastTotal - this.lastNeed) : e;
    }function h(t, e) {
      if ((t.length - e) % 2 == 0) {
        var n = t.toString("utf16le", e);if (n) {
          var r = n.charCodeAt(n.length - 1);if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], n.slice(0, -1);
        }return n;
      }return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1);
    }function c(t) {
      var e = t && t.length ? this.write(t) : "";if (this.lastNeed) {
        var n = this.lastTotal - this.lastNeed;return e + this.lastChar.toString("utf16le", 0, n);
      }return e;
    }function $(t, e) {
      var n = (t.length - e) % 3;return 0 === n ? t.toString("base64", e) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - n));
    }function p(t) {
      var e = t && t.length ? this.write(t) : "";return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
    }function g(t) {
      return t.toString(this.encoding);
    }function m(t) {
      return t && t.length ? this.write(t) : "";
    }var _ = n(17).Buffer,
        y = _.isEncoding || function (t) {
      switch ((t = "" + t) && t.toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":case "raw":
          return !0;default:
          return !1;}
    };e.StringDecoder = a, a.prototype.write = function (t) {
      if (0 === t.length) return "";var e, n;if (this.lastNeed) {
        if (void 0 === (e = this.fillLast(t))) return "";n = this.lastNeed, this.lastNeed = 0;
      } else n = 0;return n < t.length ? e ? e + this.text(t, n) : this.text(t, n) : e || "";
    }, a.prototype.end = f, a.prototype.text = l, a.prototype.fillLast = function (t) {
      if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
    };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      this.afterTransform = function (e, n) {
        return i(t, e, n);
      }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null;
    }function i(t, e, n) {
      var r = t._transformState;r.transforming = !1;var i = r.writecb;if (!i) return t.emit("error", new Error("write callback called multiple times"));r.writechunk = null, r.writecb = null, null !== n && void 0 !== n && t.push(n), i(e);var a = t._readableState;a.reading = !1, (a.needReadable || a.length < a.highWaterMark) && t._read(a.highWaterMark);
    }function a(t) {
      if (!(this instanceof a)) return new a(t);d.call(this, t), this._transformState = new r(this);var e = this;this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.once("prefinish", function () {
        "function" == typeof this._flush ? this._flush(function (t, n) {
          o(e, t, n);
        }) : o(e);
      });
    }function o(t, e, n) {
      if (e) return t.emit("error", e);null !== n && void 0 !== n && t.push(n);var r = t._writableState,
          i = t._transformState;if (r.length) throw new Error("Calling transform done when ws.length != 0");if (i.transforming) throw new Error("Calling transform done when still transforming");return t.push(null);
    }t.exports = a;var d = n(7),
        s = n(12);s.inherits = n(6), s.inherits(a, d), a.prototype.push = function (t, e) {
      return this._transformState.needTransform = !1, d.prototype.push.call(this, t, e);
    }, a.prototype._transform = function (t, e, n) {
      throw new Error("_transform() is not implemented");
    }, a.prototype._write = function (t, e, n) {
      var r = this._transformState;if (r.writecb = n, r.writechunk = t, r.writeencoding = e, !r.transforming) {
        var i = this._readableState;(r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
      }
    }, a.prototype._read = function (t) {
      var e = this._transformState;null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
    }, a.prototype._destroy = function (t, e) {
      var n = this;d.prototype._destroy.call(this, t, function (t) {
        e(t), n.emit("close");
      });
    };
  }, function (t, e, n) {
    "use strict";
    e.decode = e.parse = n(81), e.encode = e.stringify = n(82);
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      function r(t, e) {
        if (t === e) return 0;for (var n = t.length, r = e.length, i = 0, a = Math.min(n, r); i < a; ++i) {
          if (t[i] !== e[i]) {
            n = t[i], r = e[i];break;
          }
        }return n < r ? -1 : r < n ? 1 : 0;
      }function i(t) {
        return e.Buffer && "function" == typeof e.Buffer.isBuffer ? e.Buffer.isBuffer(t) : !(null == t || !t._isBuffer);
      }function a(t) {
        return Object.prototype.toString.call(t);
      }function o(t) {
        return !i(t) && "function" == typeof e.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer)));
      }function d(t) {
        if (v.isFunction(t)) {
          if (E) return t.name;var e = t.toString(),
              n = e.match(k);return n && n[1];
        }
      }function s(t, e) {
        return "string" == typeof t ? t.length < e ? t : t.slice(0, e) : t;
      }function u(t) {
        if (E || !v.isFunction(t)) return v.inspect(t);var e = d(t);return "[Function" + (e ? ": " + e : "") + "]";
      }function l(t) {
        return s(u(t.actual), 128) + " " + t.operator + " " + s(u(t.expected), 128);
      }function f(t, e, n, r, i) {
        throw new x.AssertionError({ message: n, actual: t, expected: e, operator: r, stackStartFunction: i });
      }function h(t, e) {
        t || f(t, !0, e, "==", x.ok);
      }function c(t, e, n, d) {
        if (t === e) return !0;if (i(t) && i(e)) return 0 === r(t, e);if (v.isDate(t) && v.isDate(e)) return t.getTime() === e.getTime();if (v.isRegExp(t) && v.isRegExp(e)) return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase;if (null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
          if (o(t) && o(e) && a(t) === a(e) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === r(new Uint8Array(t.buffer), new Uint8Array(e.buffer));if (i(t) !== i(e)) return !1;d = d || { actual: [], expected: [] };var s = d.actual.indexOf(t);return -1 !== s && s === d.expected.indexOf(e) || (d.actual.push(t), d.expected.push(e), p(t, e, n, d));
        }return n ? t === e : t == e;
      }function $(t) {
        return "[object Arguments]" == Object.prototype.toString.call(t);
      }function p(t, e, n, r) {
        if (null === t || void 0 === t || null === e || void 0 === e) return !1;if (v.isPrimitive(t) || v.isPrimitive(e)) return t === e;if (n && Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;var i = $(t),
            a = $(e);if (i && !a || !i && a) return !1;if (i) return t = w.call(t), e = w.call(e), c(t, e, n);var o,
            d,
            s = S(t),
            u = S(e);if (s.length !== u.length) return !1;for (s.sort(), u.sort(), d = s.length - 1; d >= 0; d--) {
          if (s[d] !== u[d]) return !1;
        }for (d = s.length - 1; d >= 0; d--) {
          if (o = s[d], !c(t[o], e[o], n, r)) return !1;
        }return !0;
      }function g(t, e, n) {
        c(t, e, !0) && f(t, e, n, "notDeepStrictEqual", g);
      }function m(t, e) {
        if (!t || !e) return !1;if ("[object RegExp]" == Object.prototype.toString.call(e)) return e.test(t);try {
          if (t instanceof e) return !0;
        } catch (t) {}return !Error.isPrototypeOf(e) && !0 === e.call({}, t);
      }function _(t) {
        var e;try {
          t();
        } catch (t) {
          e = t;
        }return e;
      }function y(t, e, n, r) {
        var i;if ("function" != typeof e) throw new TypeError('"block" argument must be a function');"string" == typeof n && (r = n, n = null), i = _(e), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), t && !i && f(i, n, "Missing expected exception" + r);var a = "string" == typeof r,
            o = !t && v.isError(i),
            d = !t && i && !n;if ((o && a && m(i, n) || d) && f(i, n, "Got unwanted exception" + r), t && i && n && !m(i, n) || !t && i) throw i;
      }var v = n(26),
          b = Object.prototype.hasOwnProperty,
          w = Array.prototype.slice,
          E = function () {
        return "foo" === function () {}.name;
      }(),
          x = t.exports = h,
          k = /\s*function\s+([^\(\s]*)\s*/;x.AssertionError = function (t) {
        this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = l(this), this.generatedMessage = !0);var e = t.stackStartFunction || f;if (Error.captureStackTrace) Error.captureStackTrace(this, e);else {
          var n = new Error();if (n.stack) {
            var r = n.stack,
                i = d(e),
                a = r.indexOf("\n" + i);if (a >= 0) {
              var o = r.indexOf("\n", a + 1);r = r.substring(o + 1);
            }this.stack = r;
          }
        }
      }, v.inherits(x.AssertionError, Error), x.fail = f, x.ok = h, x.equal = function (t, e, n) {
        t != e && f(t, e, n, "==", x.equal);
      }, x.notEqual = function (t, e, n) {
        t == e && f(t, e, n, "!=", x.notEqual);
      }, x.deepEqual = function (t, e, n) {
        c(t, e, !1) || f(t, e, n, "deepEqual", x.deepEqual);
      }, x.deepStrictEqual = function (t, e, n) {
        c(t, e, !0) || f(t, e, n, "deepStrictEqual", x.deepStrictEqual);
      }, x.notDeepEqual = function (t, e, n) {
        c(t, e, !1) && f(t, e, n, "notDeepEqual", x.notDeepEqual);
      }, x.notDeepStrictEqual = g, x.strictEqual = function (t, e, n) {
        t !== e && f(t, e, n, "===", x.strictEqual);
      }, x.notStrictEqual = function (t, e, n) {
        t === e && f(t, e, n, "!==", x.notStrictEqual);
      }, x.throws = function (t, e, n) {
        y(!0, t, e, n);
      }, x.doesNotThrow = function (t, e, n) {
        y(!1, t, e, n);
      }, x.ifError = function (t) {
        if (t) throw t;
      };var S = Object.keys || function (t) {
        var e = [];for (var n in t) {
          b.call(t, n) && e.push(n);
        }return e;
      };
    }).call(e, n(0));
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n, r) {
      for (var i = 65535 & t | 0, a = t >>> 16 & 65535 | 0, o = 0; 0 !== n;) {
        o = n > 2e3 ? 2e3 : n, n -= o;do {
          i = i + e[r++] | 0, a = a + i | 0;
        } while (--o);i %= 65521, a %= 65521;
      }return i | a << 16 | 0;
    }t.exports = r;
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n, r) {
      var a = i,
          o = r + n;t ^= -1;for (var d = r; d < o; d++) {
        t = t >>> 8 ^ a[255 & (t ^ e[d])];
      }return -1 ^ t;
    }var i = function () {
      for (var t, e = [], n = 0; n < 256; n++) {
        t = n;for (var r = 0; r < 8; r++) {
          t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
        }e[n] = t;
      }return e;
    }();t.exports = r;
  }, function (t, e, n) {
    t.exports = n(46);
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(47);e.default = Object.assign({}, r.a, { install: function install(t) {
        return t.component(r.a.name, r.a), t;
      } });
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      n(48), n(49);
    }var i = n(27),
        a = n(105),
        o = n(50),
        d = r,
        s = o(i.a, a.a, !1, d, "data-v-c03aeff4", null);e.a = s.exports;
  }, function (t, e) {}, function (t, e) {}, function (t, e) {
    t.exports = function (t, e, n, r, i, a) {
      var o,
          d = t = t || {},
          s = _typeof(t.default);"object" !== s && "function" !== s || (o = t, d = t.default);var u = "function" == typeof d ? d.options : d;e && (u.render = e.render, u.staticRenderFns = e.staticRenderFns, u._compiled = !0), n && (u.functional = !0), i && (u._scopeId = i);var l;if (a ? (l = function l(t) {
        t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a);
      }, u._ssrRegister = l) : r && (l = r), l) {
        var f = u.functional,
            h = f ? u.render : u.beforeCreate;f ? (u._injectStyles = l, u.render = function (t, e) {
          return l.call(e), h(t, e);
        }) : u.beforeCreate = h ? [].concat(h, l) : [l];
      }return { esModule: o, exports: d, options: u };
    };
  }, function (t, e, n) {
    "use strict";
    function r() {
      var t = Array.prototype.slice.call(arguments);return t.push(u.a), l.b.apply(this, t);
    }function i() {
      var t = Array.prototype.slice.call(arguments);return t.push(u.a), f.a.apply(this, t);
    }function a(t, e) {
      h.a.call(this, t, e, u.a);
    }function o(t, e) {
      c.a.call(this, t, e, u.a);
    }function d(t) {
      $.a.call(this, t, u.a);
    }e.b = r, e.c = i, e.a = d;var s = n(52),
        u = n.n(s),
        l = (n(3), n(14)),
        f = (n(8), n(10)),
        h = (n(54), n(9)),
        c = (n(55), n(57), n(21)),
        $ = n(22);n(19), n(4), n(20), n(58), n(13), n(1);a.prototype = Object.create(h.a.prototype, {}), a.prototype.constructor = a, o.prototype = Object.create(c.a.prototype, {}), o.prototype.constructor = o, d.prototype = Object.create($.a.prototype, {}), d.prototype.constructor = d;
  }, function (t, e) {
    t.exports = { version: "1.5.1", country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 800: ["001"], 808: ["001"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 870: ["001"], 878: ["001"], 880: ["BD"], 881: ["001"], 882: ["001"], 883: ["001"], 886: ["TW"], 888: ["001"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 979: ["001"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[136-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[136-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["([2-4679])(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-4679][2-8]"]], ["(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"]], ["([479]00)(\\d)(\\d{5})", "$1 $2 $3", ["[479]00"], "$1"], ["([68]00)(\\d{2,9})", "$1 $2", ["[68]00"], "$1"]], "0", "0$1"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["([2-7]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"]]], "0", "0$1"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "264"], AL: ["355", "00", "(?:(?:[2-58]|6\\d)\\d\\d|700)\\d{5}|(?:8\\d{2,3}|900)\\d{3}", [6, 7, 8, 9], [["(4)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[0-6]"]], ["(6\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4[7-9]"]], ["(\\d{3})(\\d{3,5})", "$1 $2", ["[235][16-9]|[79]|8[016-9]"]]], "0", "0$1"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["1|47"]], ["(\\d{2})(\\d{6})", "$1 $2", ["4[1349]|[5-7]|88|9[1-9]"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8|90"], "0 $1"]], "0", "(0$1)"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3"]]], AR: ["54", "00", "(?:11|(?:[2368]|9\\d)\\d)\\d{8}", [10, 11], [["([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"]], ["(9)(11)(\\d{4})(\\d{4})", "$2 15-$3-$4", ["911"], 0, 0, "$1 $2 $3-$4"], ["(9)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-4689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"], 0, 0, "$1 $2 $3-$4"], ["(9)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9[23]"], 0, 0, "$1 $2 $3-$4"], ["(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["11"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], 0, 1], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], 0, 1]], "0", "0$1", "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "684"], AT: ["43", "00", "[1-35-9]\\d{8,12}|4(?:[0-24-9]\\d{4,11}|3(?:[05]\\d{3,10}|[2-467]\\d{3,4}|8\\d{3,6}|9\\d{3,7}))|[1-35-8]\\d{7}|[1-35-7]\\d{5,6}|[15]\\d{4}|1\\d{3}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(116\\d{3})", "$1", ["116"], "$1"], ["(1)(\\d{3,12})", "$1 $2", ["1"]], ["(5\\d)(\\d{3,5})", "$1 $2", ["5[079]"]], ["(5\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5[079]"]], ["(5\\d)(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5[079]"]], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]"]], ["(\\d{3})(\\d{2})", "$1 $2", ["517"]], ["(\\d{4})(\\d{3,9})", "$1 $2", ["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])"]]], "0", "0$1"], AU: ["61", "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011)|001[14-689]", "1\\d{4,9}|(?:[2-478]\\d\\d|550)\\d{6}", [5, 6, 7, 8, 9, 10], [["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]], ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]], ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]], ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]], ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]], "0", 0, 0, 0, 0, 0, [["[237]\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|[6-8]\\d{4}|9(?:[02-9]\\d{3}|1(?:[0-57-9]\\d{2}|6[0135-9]\\d)))\\d{3}", [9]], ["4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["19(?:0[0126]\\d|[679])\\d{5}", [8, 10]], 0, 0, 0, ["16\\d{3,7}", [5, 6, 7, 8, 9]], ["(?:14(?:5\\d|71)|550\\d)\\d{5}", [9]], ["13(?:00\\d{3}|45[0-4]|\\d)\\d{3}", [6, 8, 10]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:11|3[23]|41|5[59]|77|88|9[09]))", "1\\d{5,11}|(?:[27]|4\\d)\\d{4,9}|[356]0\\d{6,8}|800\\d{4,7}|[35]0\\d{4,5}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[6-8])0"]], ["(75\\d{3})", "$1", ["75[12]"]], ["(116\\d{3})", "$1", ["116"], "$1"], ["(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"]], ["(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"]]], "0", 0, 0, 0, 0, 0, [["18[1-8]\\d{3,9}", [6, 7, 8, 9, 10, 11, 12]], ["4\\d{5,10}|50\\d{4,8}", [6, 7, 8, 9, 10, 11]], ["800\\d{4,7}", [7, 8, 9, 10]], ["[67]00\\d{5,6}", [8, 9]], 0, 0, ["[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", [5, 6, 7, 8, 9, 10]]], "00"], AZ: ["994", "00", "(?:(?:(?:[12457]\\d|60|88)\\d|365)\\d{3}|900200)\\d{3}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2(?:[0-36]|[45]2)|365"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]], "0", "(0$1)"], BA: ["387", "00", "(?:[3589]\\d|49|6\\d\\d?|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6[047]"]]], "0", "0$1"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "246"], BD: ["880", "00", "[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(2)(\\d{7,8})", "$1-$2", ["2"]], ["(\\d{2})(\\d{4,6})", "$1-$2", ["[3-79]1"]], ["(\\d{4})(\\d{3,6})", "$1-$2", ["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[01367])"]], ["(\\d{3})(\\d{3,7})", "$1-$2", ["[3-79][2-9]|8"]]], "0", "0$1"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4[23]|9[2-4]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-7]|8(?:0[2-8]|[1-79])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[25-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[25-7]"]]]], BG: ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9], [["(2)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"]], ["(2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{4})", "$1 $2", ["43[124-7]|70[1-9]"]], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[124-7]|70[1-9]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[78]00"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["99[69]"]], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["48|8[7-9]|9[08]"]]], "0", "0$1"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1367]|8[047]|9[014578]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|6[189]|7[125-9]"]]]], BJ: ["229", "00", "[2689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]]], BL: ["590", "00", "(?:590|69\\d)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(1\\d)?", "(?:[2-467]\\d{3}|80017)\\d{4}", [8, 9], [["([234])(\\d{7})", "$1 $2", ["[2-4]"]], ["([67]\\d{7})", "$1", ["[67]"]], ["(800)(\\d{2})(\\d{4})", "$1 $2 $3", ["800"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "300|4(?:0(?:0|20)|370)"]], ["([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]9"], "($1)"]], "0", 0, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "242"], BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1|77"]], ["([2-8])(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]]]], BW: ["267", "00", "(?:(?:[2-6]|7\\d)\\d|90)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["17[0-3589]|2[4-9]|[34]", "17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])", "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"], "8 0$1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["([89]\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[01]|9"], "8 $1"], ["(82\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["82"], "8 $1"], ["(800)(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(800)(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"]], "8", 0, "8?0?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"], 0, 0, 0, ["600[2-9]\\d{6}"]]], CC: ["61", "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}", [6, 7, 8, 9, 10], [["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]], ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]], ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]], ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]], ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]], "0", 0, 0, 0, 0, 0, [["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2547-9]|9[017-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["19(?:0[0126]\\d|[679])\\d{5}", [8, 10]], 0, 0, 0, 0, ["(?:14(?:5\\d|71)|550\\d)\\d{5}", [9]], ["13(?:00\\d{3}|45[0-4]|\\d)\\d{3}", [6, 8, 10]]], "0011"], CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["12"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "(?:(?:0\\d|80)\\d|222)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2[12467]|3[1-4]|4[134]|5[12568]|6[12]|7(?:[15-9]|4[0248])|[89]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8(?:00|4[0248]|78)|90[016]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["860"], "0$1"]], "0"], CI: ["225", "00", "[02-8]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[02-8]"]]]], CK: ["682", "00", "[2-8]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-8]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", "(?:1230|[2-57-9]\\d|6\\d{1,3})\\d{7}", [9, 10, 11], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(9)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"]], ["(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[68]00"]], ["(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["600"]], ["(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["123", "1230"]], ["(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)"]]], CM: ["237", "00", "(?:[26]\\d\\d|88)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]]], CN: ["86", "(?:1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))?00", "(?:(?:(?:1[03-68]|2\\d)\\d\\d|[3-79])\\d|8[0-57-9])\\d{7}|[1-579]\\d{10}|8[0-57-9]\\d{8,9}|[1-79]\\d{9}|[1-9]\\d{7}|[12]\\d{6}", [7, 8, 9, 10, 11, 12], [["([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]], ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d\\d[19]", "[3-9]\\d\\d(?:10|9[56])"], "0$1"], ["(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", 1], ["([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1(?:[3-57-9]|66)"]], ["(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]], ["(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]], "0", 0, "(1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:1\\d|3)\\d{9}|[124-8]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1 $2", ["1(?:[2-7]|8[2-9]|9[0-3])|[24-8]", "1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"]], ["(1)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:44|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|[24-8]\\d{7}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]0"]]], 0, 0, "(19(?:0[012468]|1[09]|20|66|77|99))"], CU: ["53", "119", "[2-57]\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8], [["(\\d)(\\d{6,7})", "$1 $2", ["7"]], ["(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"]], ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]], "0", "(0$1)"], CV: ["238", "0", "[2-59]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-59]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}", [6, 7, 8, 9, 10], [["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]], ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]], ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]], ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]], ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]], "0", 0, 0, 0, 0, 0, [["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2547-9]|9[017-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["19(?:0[0126]\\d|[679])\\d{5}", [8, 10]], 0, 0, 0, 0, ["(?:14(?:5\\d|71)|550\\d)\\d{5}", [9]], ["13(?:00\\d{3}|45[0-4]|\\d)\\d{3}", [6, 8, 10]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60|9\\d{1,4})\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9[36]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["96"]]]], DE: ["49", "00", "(?:1|[358]\\d{11})\\d{3}|[1-35689]\\d{13}|4(?:[0-8]\\d{5,12}|9(?:[05]\\d|44|6[1-8])\\d{9})|[1-35-9]\\d{6,12}|49(?:[0-357]\\d|[46][1-8])\\d{4,8}|49(?:[0-3579]\\d|4[1-9]|6[0-8])\\d{3}|[1-9]\\d{5}|[13-68]\\d{4}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(1\\d{2})(\\d{7,8})", "$1 $2", ["1[67]"]], ["(15\\d{3})(\\d{6})", "$1 $2", ["15[0568]"]], ["(1\\d{3})(\\d{7})", "$1 $2", ["15"]], ["(\\d{2})(\\d{3,11})", "$1 $2", ["3[02]|40|[68]9"]], ["(\\d{3})(\\d{3,11})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)", "2(?:0[1-389]|1(?:[14]|2[0-8])|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)"]], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[13468]|8[13568])|6(?:0[1356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])"]], ["(3\\d{4})(\\d{1,10})", "$1 $2", ["3"]], ["(800)(\\d{7,12})", "$1 $2", ["800"]], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:37|80)|900", "1(?:37|80)|900[1359]"]], ["(1\\d{2})(\\d{5,11})", "$1 $2", ["181"]], ["(18\\d{3})(\\d{6})", "$1 $2", ["185", "1850", "18500"]], ["(18\\d{2})(\\d{7})", "$1 $2", ["18[68]"]], ["(18\\d)(\\d{8})", "$1 $2", ["18[2-579]"]], ["(700)(\\d{4})(\\d{4})", "$1 $2 $3", ["700"]], ["(138)(\\d{4})", "$1 $2", ["138"]], ["(15[013-68])(\\d{2})(\\d{8})", "$1 $2 $3", ["15[013-68]"]], ["(15[279]\\d)(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"]], ["(1[67]\\d)(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"]]], "0", "0$1"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]], "0"], EC: ["593", "00", "1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[247]|[356][2-8]"], 0, 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["180", "1800"], "$1"]], "0", "(0$1)"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-4])", "[45]|8(?:00[1-9]|[1-4])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]]], EG: ["20", "00", "(?:[189]\\d?|[24-6])\\d{8}|[13]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"]], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1(?:3|5[239])|[4-6]|[89][2-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[0-25]|[89]00"]]], "0", "0$1"], EH: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|9)|892"], "0$1"], ["(\\d{5})(\\d{4})", "$1-$2", ["5[23]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["528[89]\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["5924[01]\\d{4}"]]], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3"]], "0", "0$1"], ES: ["34", "00", "(?:51|[6-9]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[568]|7[0-48]|9(?:0[12]|[1-8])"]]]], ET: ["251", "00", "(?:11|[2-59]\\d)\\d{7}", [9], [["([1-59]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"]]], "0", "0$1"], FI: ["358", "00|99(?:[01469]|5(?:11|3[23]|41|5[59]|77|88|9[09]))", "(?:1\\d|[2-689])\\d{4,10}|7\\d{4,9}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[6-8])0"]], ["(75\\d{3})", "$1", ["75[12]"]], ["(116\\d{3})", "$1", ["116"], "$1"], ["(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"]], ["(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"]]], "0", "0$1", 0, 0, 0, 0, [["1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}"], ["4(?:[0-8]\\d{4,9}|9\\d{3,8})|50\\d{4,8}", [6, 7, 8, 9, 10, 11]], ["800\\d{4,7}", [7, 8, 9, 10]], ["[67]00\\d{5,6}", [8, 9]], 0, 0, ["[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})", [5, 6, 7, 8, 9, 10]]], "00"], FJ: ["679", "0(?:0|52)", "(?:(?:0800\\d|[235-9])\\d|45)\\d{5}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "[39]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3(?:20|[357])|9", "3(?:20[1-9]|[357])|9"]]]], FO: ["298", "00", "(?:[2-8]\\d|90)\\d{4}", [6], [["(\\d{6})", "$1"]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"]], ["(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]], "0", "0$1"], GA: ["241", "00", "(?:0\\d|[2-7])\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]]], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", "0$1", 0, 0, 0, 0, [["2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{7}|1(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\d)\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[2-46-8]\\d{2}|16977[23]\\d{3}", [9, 10]], ["7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}", [10]], ["80(?:0(?:1111|\\d{6,7})|8\\d{7})"], ["(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}", [10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", [10]], ["56\\d{8}", [10]], ["8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})", [7, 10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5|790"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], GF: ["594", "00", "[56]94\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", 0, 0, 0, 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:781\\d|839\\d|911[17])\\d{5}", [10]], ["80(?:0(?:1111|\\d{6,7})|8\\d{7})"], ["(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}", [10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", [10]], ["56\\d{8}", [10]], ["8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})", [7, 10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["8"]]], "0", "0$1"], GI: ["350", "00", "(?:[25]\\d\\d|629)\\d{5}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "(?:30|6\\d\\d|722)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "(?:590|69\\d)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]]], GQ: ["240", "00", "(?:222|(?:3\\d|55|[89]0)\\d)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "(?:[268]\\d|[79]0)\\d{8}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[3-8]1|[689]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2"]]]], GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:(?:(?:[2-46]\\d|77)\\d|862)\\d|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "[237-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(1)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"]], ["([2-5]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"]], ["(9\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"]], ["(6[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"]], ["([67]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"]], ["(80[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["80[01]"]], ["(80[01])(\\d{3})(\\d{3})", "$1 $2 $3", ["80[01]"]]], "0", "0$1"], HT: ["509", "00", "[2-489]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]]], HU: ["36", "00", "[2357]\\d{8}|[1-9]\\d{7}", [8, 9], [["(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"]]], "06", "($1)"], ID: ["62", "0(?:0[1789]|10(?:00|1[67]))", "(?:[1-36]|8\\d{5})\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,8})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["2[035-9]|[36][02-9]|[4579]"], "(0$1)"], ["(8\\d{2})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"]], ["(8\\d{2})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8[1-35-9]"]], ["(1)(500)(\\d{3})", "$1 $2 $3", ["150", "1500"], "$1"], ["(177)(\\d{6,8})", "$1 $2", ["177"]], ["(800)(\\d{5,7})", "$1 $2", ["800"]], ["(804)(\\d{3})(\\d{4})", "$1 $2 $3", ["804"]], ["(80\\d)(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80[79]"]]], "0", "0$1"], IE: ["353", "00", "[148]\\d{9}|[124-9]\\d{8}|[124-69]\\d{7}|[24-69]\\d{6}", [7, 8, 9, 10], [["(1)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["40[24]|50[45]"]], ["(48)(\\d{4})(\\d{4})", "$1 $2 $3", ["48"]], ["(818)(\\d{3})(\\d{3})", "$1 $2 $3", ["818"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[24-69]|7[14]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["76|8[35-9]"], "0$1"], ["(8\\d)(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8[35-9]5"], "0$1"], ["(700)(\\d{3})(\\d{3})", "$1 $2 $3", ["700"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:5|8[059])", "1(?:5|8[059]0)"], "$1"]], "0", "(0$1)"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["([2-489])(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["([57]\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(153)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["153"]], ["(1)([7-9]\\d{2})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(1255)(\\d{3})", "$1-$2", ["125", "1255"]], ["(1200)(\\d{3})(\\d{3})", "$1-$2-$3", ["120", "1200"]], ["(1212)(\\d{2})(\\d{2})", "$1-$2-$3", ["121", "1212"]], ["(1599)(\\d{6})", "$1-$2", ["159", "1599"]], ["(151)(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["151"]]], "0"], IM: ["44", "00", "(?:1624|(?:[3578]\\d|90)\\d\\d)\\d{6}", [10], [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", 0, 0, 0, 0, 0, [["1624[5-8]\\d{5}"], ["7(?:4576|[59]24\\d|624[0-4689])\\d{5}"], ["808162\\d{4}"], ["(?:872299|90[0167]624)\\d{4}"], ["70\\d{8}"], 0, ["3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}"], 0, ["56\\d{8}"], ["8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}"]]], IN: ["91", "00", "(?:00800|1\\d{0,5}|[2-9]\\d\\d)\\d{7}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["561", "5616", "56161"], "$1"], ["(\\d{5})(\\d{5})", "$1 $2", ["6(?:0[023]|12|2[03689]|3[05-9]|9[019])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9", "6(?:0(?:0|26|33)|127|2(?:[06]|3[02589]|8[0-379]|9[0-4679])|3(?:0[0-79]|5[0-46-9]|6[0-4679]|7[0-24-9]|[89])|9[019])|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9", "6(?:0(?:0|26|33)|1279|2(?:[06]|3[02589]|8[0-379]|9[0-4679])|3(?:0[0-79]|5[0-46-9]|6[0-4679]|7[0-24-9]|[89])|9[019])|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[02-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[04-9]))|1(?:[0-57-9]|6(?:[089]|7[02-8]))|2(?:[014](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|[126](?:[089]|7[02-8]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-8]))|9(?:[02-9]|1(?:[0289]|7[02-8])))|9"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-9]|80[2-46]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[23579]|[468][1-9])|[2-8]"]], ["(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["008"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], "$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["160", "1600"], "$1"], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], "$1"], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["180", "1800"], "$1"], ["(\\d{4})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["186", "1860"], "$1"], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18[06]"], "$1"]], "0", "0$1", 0, 0, 1], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|[2-6]\\d?|7\\d\\d)\\d{7}", [8, 9, 10], [["(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["([2-6]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"]], ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "0", "0$1"], IR: ["98", "00", "[1-9]\\d{9}|[1-8]\\d{5,6}", [6, 7, 10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"]], ["(\\d{2})(\\d{4,5})", "$1 $2", ["[1-8]"]], ["(\\d{4,5})", "$1", ["96"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"]]], "0", "0$1"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[67]|99)|[38]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, [["0(?:(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d|6(?:[0-57-9]\\d\\d|6(?:[0-8]\\d|9[0-79])))\\d{1,6}"], ["33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10, 11]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:(?:0878|1(?:44|6[346])\\d)\\d\\d|89(?:2|(?:4[5-9]|(?:5[5-9]|9)\\d\\d)\\d))\\d{3}|89[45][0-4]\\d\\d", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "(?:1534|(?:[3578]\\d|90)\\d\\d)\\d{6}", [10], [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", 0, 0, 0, 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}"], ["76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}"], ["56\\d{8}"], ["8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}"]]], JM: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "876"], JO: ["962", "00", "(?:(?:(?:[268]|7\\d)\\d|32|53)\\d|900)\\d{5}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["8|900"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:[2-46]|5[2-8]|7[2-689]|8[2-7]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))", "1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1[235-8]|[57-9])|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)", "1(?:1[235-8]|[57-9])|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])", "1(?:1[235-8]|[57-9])|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82|993"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["2[2-9]|4|7[235-9]|9[49]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"]], "0"], KE: ["254", "000", "(?:(?:2|80)0\\d?|[4-7]\\d\\d|900)\\d{6}|[4-6]\\d{6,7}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["7"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"]]], "0", "0$1", "005|0"], KG: ["996", "00", "(?:[235-7]\\d|99)\\d{7}|800\\d{6,7}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[25-79]|31[25]"]], ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[36]|[2-9])"]], ["(\\d{3})(\\d{3})(\\d)(\\d{3})", "$1 $2 $3 $4", ["8"]]], "0", "0$1"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1\\d[1-9]|[2-9]"], "0$1"], ["(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0", "1[89]00"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, 0, 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "869"], KP: ["850", "00|99", "(?:(?:19\\d|2)\\d|85)\\d{6}", [8, 10], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]], "0", "0$1"], KR: ["82", "00(?:[1259]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "(?:00[1-9]\\d{2,4}|[12]|5\\d{3})\\d{7}|(?:(?:00|[13-6])\\d|70)\\d{8}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"]], ["(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[246-9]|6[046-8]|8[03579])", "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"], "$1"], ["(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60[2-9]|80"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]0"]], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["50"]]], "0", "0$1", "0(8[1-46-8]|85\\d{2})?"], KW: ["965", "00", "(?:18|[2569]\\d\\d)\\d{5}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "345"], KZ: ["7", "810", "(?:33622|(?:7\\d|80)\\d{3})\\d{5}", [10], [["([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"]], ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "8", 0, 0, 0, 0, 0, [["33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}"], ["7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}"], ["800\\d{7}"], ["809\\d{7}"], ["808\\d{7}"], 0, 0, 0, ["751\\d{7}"]], "8~10"], LA: ["856", "00", "(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(20)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["([2-8]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"]], ["(30)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30"]]], "0", "0$1"], LB: ["961", "00", "[7-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[78]|9[01]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "758"], LI: ["423", "00", "(?:(?:[2378]|6\\d\\d)\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[56]"]], ["(69)(7\\d{2})(\\d{4})", "$1 $2 $3", ["697"]]], "0", 0, "0|10(?:01|20|66)"], LK: ["94", "00", "(?:[1-7]\\d|[89]1)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "0", "0$1"], LR: ["231", "00", "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[45])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|5"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[257]|33|88"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["([34]\\d)(\\d{6})", "$1 $2", ["37|4(?:1|5[45]|6[2-4])"]], ["([3-6]\\d{2})(\\d{5})", "$1 $2", ["3[148]|4(?:[24]|6[09])|528|6"]], ["([7-9]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1"], ["(5)(2\\d{2})(\\d{4})", "$1 $2 $3", ["52[0-79]"]]], "8", "(8-$1)", "[08]", 0, 1], LU: ["352", "00", "[2457-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5(?:[013-9]\\d{1,8}|2\\d{1,3}))|6\\d{8}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})", "$1 $2 $3 $4", ["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["70|80[01]|90[015]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], 0, 0, "(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], LY: ["218", "00", "(?:[2569]\\d|71)\\d{7}", [9], [["([25-79]\\d)(\\d{7})", "$1-$2", ["[25-79]"]]], "0", "0$1"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|9)|892"], "0$1"], ["(\\d{5})(\\d{4})", "$1-$2", ["5[23]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["5924[01]\\d{4}"]]], MC: ["377", "00", "(?:(?:[349]|6\\d)\\d\\d|870)\\d{5}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d|80\\d?)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57-9]|6[036-9]"]]], "0", "0$1"], MF: ["590", "00", "(?:590|69\\d)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["([23]\\d)(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"]]], "0", "0$1"], MH: ["692", "011", "(?:(?:[256]\\d|45)\\d|329)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["([347]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"]], ["([58]\\d{2})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"]]], "0", "0$1"], ML: ["223", "00", "(?:[246-9]\\d|50)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "(?:1|[24-7]\\d)\\d{5,7}|8\\d{6,9}|9(?:[0-46-9]\\d{6,8}|5\\d{6})|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1|2[245]"]], ["(2)(\\d{4})(\\d{4})", "$1 $2 $3", ["251"]], ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[4-8]"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-8]"]], ["(9)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"]], ["(9)([34]\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:3[0-36]|4[0-57-9])"]], ["(9)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92[56]"]], ["(9)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["93"]]], "0", "0$1"], MN: ["976", "001", "[12]\\d{8,9}|[1257-9]\\d{7}", [8, 9, 10], [["([12]\\d)(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"]], ["([12]2\\d)(\\d{5,6})", "$1 $2", ["[12]2[1-3]"]], ["([12]\\d{3})(\\d{5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"], "$1"], ["([12]\\d{4})(\\d{4,5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)[4-9]"]]], "0", "0$1"], MO: ["853", "00", "(?:28|[68]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "(?:[58]\\d\\d|(?:67|90)0)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "670"], MQ: ["596", "00", "(?:596|69\\d)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:(?:[58]\\d\\d|900)\\d\\d|66449)\\d{5}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "664"], MT: ["356", "00", "(?:(?:[2579]\\d\\d|800)\\d|3550)\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[2-7]0|33)", "(?:[2-468]|5\\d)\\d{6}", [7, 8], [["([2-46-9]\\d{2})(\\d{4})", "$1 $2", ["[2-46-9]"]], ["(5\\d{3})(\\d{4})", "$1 $2", ["5"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[367]|4(?:00|[56])|9[14-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[179]|88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3"], "0$1"]], "0"], MX: ["52", "0[09]", "(?:1\\d|[2-9])\\d{9}", [10, 11], [["([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"]], ["(1)([358]\\d)(\\d{4})(\\d{4})", "044 $2 $3 $4", ["1(?:33|55|81)"], "$1", 0, "$1 $2 $3 $4"], ["(1)(\\d{3})(\\d{3})(\\d{4})", "044 $2 $3 $4", ["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"], "$1", 0, "$1 $2 $3 $4"]], "01", "01 $1", "0[12]|04[45](\\d{10})", "1$1", 1], MY: ["60", "00", "(?:1\\d\\d?|3\\d|[4-9])\\d{7}", [8, 9, 10], [["([4-79])(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(3)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["([18]\\d)(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1[02-46-9][1-9]|8"], "0$1"], ["(1)([36-8]00)(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]0", "1[36-8]00"]], ["(11)(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1"], ["(15[49])(\\d{3})(\\d{4})", "$1-$2 $3", ["15[49]"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[0-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "[2-57-9]\\d{5}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[247-9]|3[0-6]|5[0-4]"]]]], NE: ["227", "00", "[0289]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["09|[289]"]], ["(08)(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1"]], ["(\\d)(\\d{5})", "$1 $2", ["3"]]]], NG: ["234", "009", "[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}", [7, 8, 10, 11, 12, 13, 14], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"]], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:0[1-9]|[1-79])|8[2-9]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["70|8[01]|90[235-9]"]], ["([78]00)(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]00"]], ["([78]00)(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]00"]], ["(78)(\\d{2})(\\d{3})", "$1 $2 $3", ["78"]]], "0", "0$1"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8])|[89]\\d{0,3})\\d{6}|1\\d{4,5}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["140", "140[1-578]"]], ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|[78]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:1[13-578]|[67]|8[0-467])|[25]|3[124]|4[17-9]"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6[1-58]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["6"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]], ["([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [["(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", [8]], ["(?:4[015-8]|5[89]|9\\d)\\d{6}", [8]], ["80[01]\\d{5}", [8]], ["82[09]\\d{5}", [8]], ["880\\d{5}", [8]], 0, ["0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}"], 0, ["85[0-5]\\d{5}", [8]], ["810(?:0[0-6]|[2-8]\\d)\\d{3}", [8]]]], NP: ["977", "00", "9\\d{9}|[1-9]\\d{7}", [8, 10], [["(1)(\\d{7})", "$1-$2", ["1[2-6]"]], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-69]|7[15-9])"]], ["(9\\d{2})(\\d{7})", "$1-$2", ["9(?:6[013]|7[245]|8)"], "$1"]], "0", "0$1"], NR: ["674", "00", "(?:444|55\\d|888)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[458]"]]]], NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["240|[346]|7[2-57-9]|9[1-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["21"]], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:1[1-9]|[69]|7[0-35-9])|70|86"]], ["(2\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["90"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|5|[89]0"]]], "0", "0$1", 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:[279]\\d{3}|500|8007\\d?)\\d{4}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[79]"]]]], PA: ["507", "00", "(?:[1-57-9]|6\\d)\\d{6}", [7, 8], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["6"]]]], PE: ["51", "19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(1)(\\d{7})", "$1 $2", ["1"]], ["([4-8]\\d)(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["80"]], ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "$1"]], "0", "(0$1)", 0, 0, 0, 0, 0, 0, " Anexo "], PF: ["689", "00", "[48]\\d{7}|4\\d{5}", [6, 8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[09]|8[79]"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]]]], PG: ["675", "140[1-3]|00", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[13-689]|27"]], ["(\\d{4})(\\d{4})", "$1 $2", ["20|[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:1800\\d{2,4}|2|[89]\\d{4})\\d{5}|[3-8]\\d{8}|[28]\\d{7}", [6, 8, 9, 10, 11, 12, 13], [["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(2)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["([3-8]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["81|9"], "0$1"], ["(1800)(\\d{3})(\\d{4})", "$1 $2 $3", ["180", "1800"]], ["(1800)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["180", "1800"]]], "0"], PK: ["92", "00", "(?:122|[24-8]\\d{4,5}|9(?:[013-9]\\d{2,4}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d))\\d{6}|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["([89]00)(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]00"], "0$1"], ["(1\\d{3})(\\d{5})", "$1 $2", ["1"], "$1"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2[349]|45|54|60|72|8[2-5]|9[2-469]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\d[2-9]"]], ["(58\\d{3})(\\d{5})", "$1 $2", ["58[126]"]], ["(3\\d{2})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"]], ["(\\d{3})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"]]], "0", "(0$1)"], PL: ["48", "00", "[1-9]\\d{6}(?:\\d{2})?|6\\d{5}(?:\\d{2})?", [6, 7, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["11[68]|64"]], ["(\\d{5})", "$1", ["19"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["26|39|45|5[0137]|6[0469]|7[02389]|8[08]"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]]]], PM: ["508", "00", "[45]\\d{5}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "(?:(?:1\\d|5)\\d\\d|[2489]2)\\d{6}", [8, 9, 10], [["([2489])(2\\d{2})(\\d{4})", "$1 $2 $3", ["[2489]2"]], ["(5[69]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["5[69]"]], ["(1[78]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[78]0", "1[78]00"], "$1"]], "0", "0$1"], PT: ["351", "00", "(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"]]]], PW: ["680", "01[12]", "(?:[25-8]\\d\\d|345|488|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "(?:[2-46-9]\\d|5[0-8])\\d{7}|[2-9]\\d{5,7}", [6, 7, 8, 9], [["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["9[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["870", "8700"]], ["(\\d{3})(\\d{4,5})", "$1 $2", ["[2-8][1-9]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8][1-9]"], "0$1"]], "0"], QA: ["974", "00", "(?:(?:2|[3-7]\\d)\\d\\d|800)\\d{4}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "(?:26|[68]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["262\\d{6}"], ["69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-26]|7[0-27]|8[0-38]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, 0, ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2379]|80"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "[127]\\d{6,11}|3(?:[0-79]\\d{5,10}|8(?:[02-9]\\d{4,9}|1\\d{4,5}))|6\\d{7,9}|800\\d{3,9}|90\\d{4,8}|7\\d{5}", [6, 7, 8, 9, 10, 11, 12], [["([23]\\d{2})(\\d{4,9})", "$1 $2", ["(?:2[389]|39)0"]], ["([1-3]\\d)(\\d{5,10})", "$1 $2", ["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"]], ["(6\\d)(\\d{6,8})", "$1 $2", ["6"]], ["([89]\\d{2})(\\d{3,9})", "$1 $2", ["[89]"]], ["(7[26])(\\d{4,9})", "$1 $2", ["7[26]"]], ["(7[08]\\d)(\\d{4,9})", "$1 $2", ["7[08]"]]], "0", "0$1"], RU: ["7", "810", "[347-9]\\d{9}", [10], [["([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"]], ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "8", "8 ($1)", 0, 0, 1, 0, [["(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}"], ["9\\d{9}"], ["80[04]\\d{7}"], ["80[39]\\d{7}"], ["808\\d{7}"]], "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "(?:(?:[15]|8\\d)\\d|92)\\d{7}", [9, 10], [["(1\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[1-467]"]], ["(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"]], ["(92\\d{2})(\\d{5})", "$1 $2", ["92"], "$1"], ["(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["800"], "$1"], ["(811)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["811"]]], "0", "0$1"], SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7[1-9]|8[4-9]|9(?:1[2-9]|2[013-9]|3[0-2]|[46]|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])"]]]], SC: ["248", "0(?:[02]|10?)", "(?:(?:(?:[24]\\d|64)\\d|971)\\d|8000)\\d{3}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3"]], "0", "0$1"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|[27]\\d{5}", [6, 7, 8, 9, 10], [["([1-469]\\d)(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], 0, 0, "$1 $2 $3"], ["(9[034]\\d)(\\d{4})", "$1-$2", ["9(?:00|39|44)"], 0, 0, "$1 $2"], ["(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1-$2 $3 $4", ["8"], 0, 0, "$1 $2 $3 $4"], ["([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"], 0, 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], 0, 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], 0, 0, "$1 $2 $3"], ["(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], 0, 0, "$1 $2 $3 $4"], ["(77)(\\d{2})(\\d{2})", "$1-$2$3", ["77"], 0, 0, "$1 $2 $3"], ["(20)(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], 0, 0, "$1 $2 $3"], ["(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9[034]"], 0, 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["25[245]|67[3-6]"], 0, 0, "$1 $2 $3 $4 $5"]], "0", "0$1"], SG: ["65", "0[0-3]\\d", "(?:1\\d{3}|[369]|7000|8(?:\\d{2})?)\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-8]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["70"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00", "[1-8]\\d{7}|90\\d{4,6}|8\\d{4,6}", [5, 6, 7, 8], [["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|[34][24-8]|5[2-8]|7[3-8]"], "(0$1)"], ["([3-7]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"]], ["([89][09])(\\d{3,6})", "$1 $2", ["[89][09]"]], ["([58]\\d{2})(\\d{5})", "$1 $2", ["59|8[1-3]"]]], "0", "0$1"], SJ: ["47", "00", "(?:0|(?:[4589]\\d|79)\\d\\d)\\d{4}", [5, 8], [["([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]], ["([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [["79\\d{6}", [8]], ["(?:4[015-8]|5[89]|9\\d)\\d{6}", [8]], ["80[01]\\d{5}", [8]], ["82[09]\\d{5}", [8]], ["880\\d{5}", [8]], 0, ["0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}"], 0, ["85[0-5]\\d{5}", [8]], ["810(?:0[0-6]|[2-8]\\d)\\d{3}", [8]]]], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d{4})(\\d{3})", "$1 $2", ["909", "9090"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"]], "0"], SL: ["232", "00", "(?:[2-578]\\d|66|99)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2"]], "0", "(0$1)"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(0549)(\\d{6})", "$1 $2", ["054", "0549"], 0, 0, "($1) $2"], ["(\\d{6})", "0549 $1", ["[89]"], 0, 0, "(0549) $1"]], 0, 0, "([89]\\d{5})", "0549$1"], SN: ["221", "00", "(?:[378]\\d{4}|93330)\\d{4}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[13-5]|2[0-79]"]], ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["15|28|6[1-35-9]|799|9[2-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3[59]|4[89]|6[24-6]|79|8[08]|90"]]], "0"], SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["5"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "(?:(?:[58]\\d\\d|900)\\d|7215)\\d{6}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "721"], SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"]], ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", "0$1", 0, 0, 1], SZ: ["268", "00", "(?:0800|(?:[237]\\d|900)\\d\\d)\\d{4}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "649"], TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:1\\d\\d?|[2-57]|[689]\\d)\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "(?:[3-59]\\d|77|88)\\d{7}", [9], [["([349]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]], ["([457-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[148]|[578]|9(?:[0235-9]|1[59])"]], ["(331700)(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317", "33170", "331700"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]", "3(?:[1245]|3(?:[02-9]|1[0-589]))"]]], "8", 0, 0, 0, 1, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "(?:[2-4]\\d|7\\d\\d?|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"]], "8"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:(?:080|[56])0|[2-4]\\d|[78]\\d(?:\\d{2})?)\\d{3}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-6]|7[014]|8[05]"]], ["(\\d{3})(\\d{4})", "$1 $2", ["7[578]|8"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]]]], TR: ["90", "00", "(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}", [7, 10], [["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4(?:[0-35-9]|4[0-35-9])"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[02-69]|1[06])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["51|[89]"], "0$1"], ["(444)(\\d{1})(\\d{3})", "$1 $2 $3", ["444"]]], "0", 0, 0, 0, 1], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7]], TW: ["886", "0(?:0[25679]|19)", "(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10], [["(20)(\\d)(\\d{4})", "$1 $2 $3", ["202"]], ["([258]0)(\\d{3})(\\d{4})", "$1 $2 $3", ["20[013-9]|50[0-46-9]|80[0-79]"]], ["([2-8])(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|[78][1-9]"]], ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]], ["(70)(\\d{4})(\\d{4})", "$1 $2 $3", ["70"]]], "0", "0$1", 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[26-8]\\d|41|90)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2|41"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], UA: ["380", "00", "[3-9]\\d{8}", [9], [["([3-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]", "[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"]], ["([3-689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90", "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90"]], ["([3-6]\\d{3})(\\d{5})", "$1 $2", ["3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])", "3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])"]]], "0", "0$1", 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "(?:(?:[29]0|[347]\\d)\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{6})", "$1 $2", ["20[0-8]|4(?:6[45]|[7-9])|[7-9]", "20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"]], ["(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[1-5]|6[0-36-9])"]], ["(2024)(\\d{5})", "$1 $2", ["202", "2024"]]], "0", "0$1"], US: ["1", "011", "[2-9]\\d{9}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 1, 0, [["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["710[2-9]\\d{6}"]]], UY: ["598", "0(?:1[3-9]\\d|0)", "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}", [7, 8], [["(\\d{4})(\\d{4})", "$1 $2", ["[24]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9[1-9]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["[89]0"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "810", "[679]\\d{8}", [9], [["([679]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"]]], "8", "8 $1", 0, 0, 0, 0, 0, "8~10"], VA: ["39", "00", "0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[67]|99)|[38]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, [["06698\\d{1,6}"], ["33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10, 11]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:(?:0878|1(?:44|6[346])\\d)\\d\\d|89(?:2|(?:4[5-9]|(?:5[5-9]|9)\\d\\d)\\d))\\d{3}|89[45][0-4]\\d\\d", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "784"], VE: ["58", "00", "(?:(?:[24]\\d|50)\\d|[89]00)\\d{7}", [10], [["(\\d{3})(\\d{7})", "$1-$2"]], "0", "0$1"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "284"], VI: ["1", "011", "(?:(?:34|90)0|[58]\\d\\d)\\d{7}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", 0, 0, 0, "$1-$2-$3"]], "1", 0, 0, 0, 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|(?:[16]\\d?|[78])\\d{6}", [7, 8, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[17]99"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["69"], "0$1"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1[89]0"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0", 0, 0, 0, 1], VU: ["678", "00", "(?:(?:[23]|[57]\\d\\d|900)\\d|[48]8)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]]], WF: ["681", "00", "(?:[45]0|68|72|8\\d)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[4-8]"]]]], WS: ["685", "0", "(?:[2-6]|8\\d(?:\\d{4})?)\\d{4}|[78]\\d{6}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-6]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["8"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "(?:[23]\\d{2,3}|4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["([1-7])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"]], ["(7\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7[0137]"]]], "0", "0$1"], YT: ["262", "00", "(?:(?:26|63)9|80\\d)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["269(?:0[67]|5[01]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}"], ["80\\d{7}"]]], ZA: ["27", "00", "[1-9]\\d{8}|8\\d{4,7}", [5, 6, 7, 8, 9], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[0-8]|[24-9]|3[1-69]"], "0$1"]], "0"], ZM: ["260", "00", "(?:(?:21|9\\d)\\d|800)\\d{6}", [9], [["(\\d{2})(\\d{4})", "$1 $2", 0, "$1"], ["([1-8])(\\d{2})(\\d{4})", "$1 $2 $3", ["[1-8]"], "$1"], ["([29]\\d)(\\d{7})", "$1 $2", ["[29]"]], ["(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]]], "0", "0$1"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{7})|(?:[38]\\d|7)\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["([49])(\\d{3})(\\d{2,4})", "$1 $2 $3", ["4|9[2-9]"]], ["(7\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]], ["(86\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["86[24]"]], ["([2356]\\d{2})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329"]], ["([1-356]\\d)(\\d{3,5})", "$1 $2", ["1[3-9]|2[02569]|3[0-69]|5[05689]|6"]], ["([235]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[23]9|54"]], ["([25]\\d{3})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258[23]|5483"]], ["(8\\d{3})(\\d{6})", "$1 $2", ["86"]], ["(80\\d)(\\d{4})", "$1 $2", ["80"]]], "0", "0$1"], "001": ["979", 0, "\\d{9}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]]] } };
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var n = t.split("."), r = e.split("."), i = 0; i < 3; i++) {
        var a = Number(n[i]),
            o = Number(r[i]);if (a > o) return 1;if (o > a) return -1;if (!isNaN(a) && isNaN(o)) return 1;if (isNaN(a) && !isNaN(o)) return -1;
      }return 0;
    };
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      if ("string" != typeof t) throw new TypeError("number must be a string");if ("string" != typeof e) throw new TypeError("country must be a string");var r = Object(i.c)(t, e, n),
          o = r.input,
          d = r.metadata;return o.country === e && Object(a.a)(o, d.metadata);
    }e.a = r;var i = n(8),
        a = n(10);
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n, r) {
      for (var o = Object(i.d)(t, e, n, r), d = o.text, s = o.options, u = o.metadata, l = new a.a(d, s, u), f = []; l.hasNext();) {
        f.push(l.next());
      }return f;
    }e.a = r;var i = n(9),
        a = n(21);
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      for (var r = 0; r < e.length - 1; r++) {
        var i = e.charAt(r);if ("x" === i || "X" === i) {
          var a = e.charAt(r + 1);if ("x" === a || "X" === a) {
            if (r++, util.isNumberMatch(t, e.substring(r)) != MatchType.NSN_MATCH) return !1;
          } else if (l(e.substring(r)) !== t.ext) return !1;
        }
      }return !0;
    }function i(t, e) {
      if ("FROM_DEFAULT_COUNTRY" != t.getCountryCodeSource()) return !0;var n = util.getRegionCodeForCountryCode(t.getCountryCode()),
          r = util.getMetadataForRegion(n);if (null == r) return !0;var i = util.getNationalSignificantNumber(t),
          a = util.chooseFormattingPatternForNumber(r.numberFormats(), i);if (a && a.getNationalPrefixFormattingRule().length > 0) {
        if (a.getNationalPrefixOptionalWhenFormatting()) return !0;if (PhoneNumberUtil.formattingRuleHasFirstGroupOnly(a.getNationalPrefixFormattingRule())) return !0;var o = PhoneNumberUtil.normalizeDigitsOnly(t.getRawInput());return util.maybeStripNationalPrefixAndCarrierCode(o, r, null);
      }return !0;
    }function a(t, e) {
      var n = e.indexOf("/");if (n < 0) return !1;var r = e.indexOf("/", n + 1);return !(r < 0) && (!(t.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN || t.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN) || PhoneNumberUtil.normalizeDigitsOnly(e.substring(0, n)) !== String(t.getCountryCode()) || e.slice(r + 1).indexOf("/") >= 0);
    }function o(t, e, n, r) {
      var i = normalizeDigits(e, !0),
          a = d(n, t, null);if (r(n, t, i, a)) return !0;var o = MetadataManager.getAlternateFormatsForCountry(t.getCountryCode());if (o) for (var s = o.numberFormats(), u = Array.isArray(s), l = 0, s = u ? s : s[Symbol.iterator]();;) {
        var f;if (u) {
          if (l >= s.length) break;f = s[l++];
        } else {
          if (l = s.next(), l.done) break;f = l.value;
        }var h = f;if (a = d(n, t, h), r(n, t, i, a)) return !0;
      }return !1;
    }function d(t, e, n) {
      if (n) {
        var r = util.getNationalSignificantNumber(e);return util.formatNsnUsingPattern(r, n, "RFC3966", t).split("-");
      }var i = formatNumber(e, "RFC3966", t),
          a = i.indexOf(";");a < 0 && (a = i.length);var o = i.indexOf("-") + 1;return i.slice(o, a).split("-");
    }function s(t, e, n, r) {
      var i = n.split(NON_DIGITS_PATTERN),
          a = e.hasExtension() ? i.length - 2 : i.length - 1;if (1 == i.length || i[a].contains(util.getNationalSignificantNumber(e))) return !0;for (var o = r.length - 1; o > 0 && a >= 0;) {
        if (i[a] !== r[o]) return !1;o--, a--;
      }return a >= 0 && Object(c.a)(i[a], r[0]);
    }function u(t, e, n, r) {
      var i = 0;if (e.getCountryCodeSource() !== CountryCodeSource.FROM_DEFAULT_COUNTRY) {
        var a = String(e.getCountryCode());i = n.indexOf(a) + a.length();
      }for (var o = 0; o < r.length; o++) {
        if ((i = n.indexOf(r[o], i)) < 0) return !1;if (i += r[o].length(), 0 == o && i < n.length()) {
          var d = util.getRegionCodeForCountryCode(e.getCountryCode());if (null != util.getNddPrefixForRegion(d, !0) && Character.isDigit(n.charAt(i))) {
            var s = util.getNationalSignificantNumber(e);return Object(c.c)(n.slice(i - r[o].length), s);
          }
        }
      }return n.slice(i).contains(e.getExtension());
    }function l(t) {
      for (var e = "", n = t.split(""), r = Array.isArray(n), i = 0, n = r ? n : n[Symbol.iterator]();;) {
        var a;if (r) {
          if (i >= n.length) break;a = n[i++];
        } else {
          if (i = n.next(), i.done) break;a = i.value;
        }var o = a,
            d = Object(h.j)(o);d && (e += d);
      }return e;
    }var f = (n(3), n(10)),
        h = n(1),
        c = n(15);e.a = { POSSIBLE: function POSSIBLE(t, e, n) {
        return !0;
      }, VALID: function VALID(t, e, n) {
        return !(!Object(f.a)(t, n) || !r(t, e.toString(), n));
      }, STRICT_GROUPING: function STRICT_GROUPING(t, e, n) {
        var d = e.toString();return !(!Object(f.a)(t, n) || !r(t, d, n) || a(t, d) || !i(t, n)) && o(t, e, n, u);
      }, EXACT_GROUPING: function EXACT_GROUPING(t, e, n) {
        var d = e.toString();return !(!Object(f.a)(t, n) || !r(t, d, n) || a(t, d) || !i(t, n)) && o(t, e, n, s);
      } };
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    }function i(t, e, n, i) {
      var d = Object(a.d)(t, e, n, i),
          s = d.text,
          u = d.options,
          l = d.metadata,
          f = new o.a(s, u, l);return r({}, Symbol.iterator, function () {
        return { next: function next() {
            return f.hasNext() ? { done: !1, value: f.next() } : { done: !0 };
          } };
      });
    }e.a = i;var a = n(9),
        o = n(21);
  }, function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      return n || (n = e, e = void 0), new i.a(e, n).input(t);
    }e.a = r;var i = n(22);
  }, function (t, e, n) {
    "use strict";
    var r = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1]];e.a = r.map(function (t) {
      return { name: t[0], iso2: t[1].toUpperCase(), dialCode: t[2], priority: t[3] || 0, areaCodes: t[4] || null };
    });
  }, function (t, e, n) {
    "use strict";
    var r = n(61),
        i = n.n(r),
        a = function a() {
      return new Promise(function (t, e) {
        i()("https://ipinfo.io/json", function (n, r) {
          n && e(n), t(r && r.country);
        });
      });
    };e.a = a;
  }, function (t, e, n) {
    var r = n(62);t.exports = n(r ? 63 : 100);
  }, function (t, e, n) {
    (function (e) {
      t.exports = !(void 0 === e || !e.versions || !e.versions.node);
    }).call(e, n(2));
  }, function (t, e, n) {
    function r(t, e) {
      i({ url: t }, function (t, n) {
        if (t) return void e(t);try {
          var r = JSON.parse(n.body);
        } catch (t) {
          return void e("Parse error: " + t);
        }if (200 != n.statusCode) return void e("Unexpected response code.");e(null, r);
      });
    }var i = n(64);t.exports = r;
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          i = n(34),
          a = n(83),
          o = n(25),
          d = n(41),
          s = n(84),
          u = n(26),
          l = function l(t, n) {
        if ("string" != typeof t && !t.hasOwnProperty("url")) throw new Error("Missing url option from options for request method.");var u = "object" === (void 0 === t ? "undefined" : r(t)) ? o.parse(t.url) : o.parse(t),
            l = { hostname: u.hostname, port: u.port || ("http:" === u.protocol.toLowerCase() ? 80 : 443), path: u.path, method: "GET", headers: {}, auth: u.auth || null, timeout: null, parse: "none", stream: !1 };if ("object" === (void 0 === t ? "undefined" : r(t)) && (l = Object.assign(l, t)), l.port = Number(l.port), !0 === l.compressed && (l.headers["accept-encoding"] = "gzip, deflate"), t.hasOwnProperty("form")) {
          if ("object" !== r(t.form)) throw new Error("phin 'form' option must be of type Object if present.");var f = d.stringify(t.form);l.headers["Content-Type"] = "application/x-www-form-urlencoded", l.headers["Content-Length"] = e.byteLength(f), t.data = f;
        }var h = void 0,
            c = function c(t) {
          var r = t;!0 === l.compressed && ("gzip" === t.headers["content-encoding"] ? r = t.pipe(s.createGunzip()) : "deflate" === t.headers["content-encoding"] && (r = t.pipe(s.createInflate()))), !0 === l.stream ? (t.stream = r, n(null, t)) : (t.body = new e([]), r.on("data", function (n) {
            t.body = e.concat([t.body, n]);
          }), r.on("end", function () {
            if (n) {
              if ("json" === l.parse) try {
                t.body = JSON.parse(t.body.toString());
              } catch (e) {
                return void n("Invalid JSON received.", t);
              }n(null, t);
            }
          }));
        };switch (u.protocol.toLowerCase()) {case "http:":
            h = i.request(l, c);break;case "https:":
            h = a.request(l, c);break;default:
            return void (n && n(new Error("Invalid / unknown URL protocol. Expected HTTP or HTTPS."), null));}if ("number" == typeof l.timeout && h.setTimeout(l.timeout, function () {
          h.abort(), n(new Error("Timeout has been reached."), null), n = null;
        }), h.on("error", function (t) {
          n && n(t, null);
        }), t.hasOwnProperty("data")) {
          var $ = t.data;if (!(t.data instanceof e) && "object" === r(t.data)) {
            if ("application/x-www-form-urlencoded" === (l.headers["content-type"] || l.headers["Content-Type"])) $ = d.stringify(t.data);else try {
              $ = JSON.stringify(t.data);
            } catch (t) {
              n(new Error("Couldn't stringify object. (Likely due to a circular reference.)"), null);
            }
          }h.write($);
        }h.end();
      };l.promisified = function (t, e) {
        return new Promise(function (e, n) {
          l(t, function (t, r) {
            t ? n(t) : e(r);
          });
        });
      }, u.promisify && (l[u.promisify.custom] = l.promisified), t.exports = l;
    }).call(e, n(5).Buffer);
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      var e = t.length;if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0;
    }function i(t) {
      return 3 * t.length / 4 - r(t);
    }function a(t) {
      var e,
          n,
          i,
          a,
          o,
          d = t.length;a = r(t), o = new f(3 * d / 4 - a), n = a > 0 ? d - 4 : d;var s = 0;for (e = 0; e < n; e += 4) {
        i = l[t.charCodeAt(e)] << 18 | l[t.charCodeAt(e + 1)] << 12 | l[t.charCodeAt(e + 2)] << 6 | l[t.charCodeAt(e + 3)], o[s++] = i >> 16 & 255, o[s++] = i >> 8 & 255, o[s++] = 255 & i;
      }return 2 === a ? (i = l[t.charCodeAt(e)] << 2 | l[t.charCodeAt(e + 1)] >> 4, o[s++] = 255 & i) : 1 === a && (i = l[t.charCodeAt(e)] << 10 | l[t.charCodeAt(e + 1)] << 4 | l[t.charCodeAt(e + 2)] >> 2, o[s++] = i >> 8 & 255, o[s++] = 255 & i), o;
    }function o(t) {
      return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t];
    }function d(t, e, n) {
      for (var r, i = [], a = e; a < n; a += 3) {
        r = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2], i.push(o(r));
      }return i.join("");
    }function s(t) {
      for (var e, n = t.length, r = n % 3, i = "", a = [], o = 0, s = n - r; o < s; o += 16383) {
        a.push(d(t, o, o + 16383 > s ? s : o + 16383));
      }return 1 === r ? (e = t[n - 1], i += u[e >> 2], i += u[e << 4 & 63], i += "==") : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], i += u[e >> 10], i += u[e >> 4 & 63], i += u[e << 2 & 63], i += "="), a.push(i), a.join("");
    }e.byteLength = i, e.toByteArray = a, e.fromByteArray = s;for (var u = [], l = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, $ = h.length; c < $; ++c) {
      u[c] = h[c], l[h.charCodeAt(c)] = c;
    }l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63;
  }, function (t, e) {
    e.read = function (t, e, n, r, i) {
      var a,
          o,
          d = 8 * i - r - 1,
          s = (1 << d) - 1,
          u = s >> 1,
          l = -7,
          f = n ? i - 1 : 0,
          h = n ? -1 : 1,
          c = t[e + f];for (f += h, a = c & (1 << -l) - 1, c >>= -l, l += d; l > 0; a = 256 * a + t[e + f], f += h, l -= 8) {}for (o = a & (1 << -l) - 1, a >>= -l, l += r; l > 0; o = 256 * o + t[e + f], f += h, l -= 8) {}if (0 === a) a = 1 - u;else {
        if (a === s) return o ? NaN : 1 / 0 * (c ? -1 : 1);o += Math.pow(2, r), a -= u;
      }return (c ? -1 : 1) * o * Math.pow(2, a - r);
    }, e.write = function (t, e, n, r, i, a) {
      var o,
          d,
          s,
          u = 8 * a - i - 1,
          l = (1 << u) - 1,
          f = l >> 1,
          h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          c = r ? 0 : a - 1,
          $ = r ? 1 : -1,
          p = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (d = isNaN(e) ? 1 : 0, o = l) : (o = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -o)) < 1 && (o--, s *= 2), e += o + f >= 1 ? h / s : h * Math.pow(2, 1 - f), e * s >= 2 && (o++, s /= 2), o + f >= l ? (d = 0, o = l) : o + f >= 1 ? (d = (e * s - 1) * Math.pow(2, i), o += f) : (d = e * Math.pow(2, f - 1) * Math.pow(2, i), o = 0)); i >= 8; t[n + c] = 255 & d, c += $, d /= 256, i -= 8) {}for (o = o << i | d, u += i; u > 0; t[n + c] = 255 & o, c += $, o /= 256, u -= 8) {}t[n + c - $] |= 128 * p;
    };
  }, function (t, e, n) {
    (function (e, r, i) {
      function a(t, e) {
        return d.fetch && e ? "fetch" : d.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : d.msstream ? "ms-stream" : d.arraybuffer && t ? "arraybuffer" : d.vbArray && t ? "text:vbarray" : "text";
      }function o(t) {
        try {
          var e = t.status;return null !== e && 0 !== e;
        } catch (t) {
          return !1;
        }
      }var d = n(35),
          s = n(6),
          u = n(68),
          l = n(11),
          f = n(75),
          h = u.IncomingMessage,
          c = u.readyStates,
          $ = t.exports = function (t) {
        var n = this;l.Writable.call(n), n._opts = t, n._body = [], n._headers = {}, t.auth && n.setHeader("Authorization", "Basic " + new e(t.auth).toString("base64")), Object.keys(t.headers).forEach(function (e) {
          n.setHeader(e, t.headers[e]);
        });var r,
            i = !0;if ("disable-fetch" === t.mode || "timeout" in t) i = !1, r = !0;else if ("prefer-streaming" === t.mode) r = !1;else if ("allow-wrong-content-type" === t.mode) r = !d.overrideMimeType;else {
          if (t.mode && "default" !== t.mode && "prefer-fast" !== t.mode) throw new Error("Invalid value for opts.mode");r = !0;
        }n._mode = a(r, i), n.on("finish", function () {
          n._onFinish();
        });
      };s($, l.Writable), $.prototype.setHeader = function (t, e) {
        var n = this,
            r = t.toLowerCase();-1 === p.indexOf(r) && (n._headers[r] = { name: t, value: e });
      }, $.prototype.getHeader = function (t) {
        var e = this._headers[t.toLowerCase()];return e ? e.value : null;
      }, $.prototype.removeHeader = function (t) {
        delete this._headers[t.toLowerCase()];
      }, $.prototype._onFinish = function () {
        var t = this;if (!t._destroyed) {
          var n = t._opts,
              a = t._headers,
              o = null;"GET" !== n.method && "HEAD" !== n.method && (o = d.blobConstructor ? new r.Blob(t._body.map(function (t) {
            return f(t);
          }), { type: (a["content-type"] || {}).value || "" }) : e.concat(t._body).toString());var s = [];if (Object.keys(a).forEach(function (t) {
            var e = a[t].name,
                n = a[t].value;Array.isArray(n) ? n.forEach(function (t) {
              s.push([e, t]);
            }) : s.push([e, n]);
          }), "fetch" === t._mode) r.fetch(t._opts.url, { method: t._opts.method, headers: s, body: o || void 0, mode: "cors", credentials: n.withCredentials ? "include" : "same-origin" }).then(function (e) {
            t._fetchResponse = e, t._connect();
          }, function (e) {
            t.emit("error", e);
          });else {
            var u = t._xhr = new r.XMLHttpRequest();try {
              u.open(t._opts.method, t._opts.url, !0);
            } catch (e) {
              return void i.nextTick(function () {
                t.emit("error", e);
              });
            }"responseType" in u && (u.responseType = t._mode.split(":")[0]), "withCredentials" in u && (u.withCredentials = !!n.withCredentials), "text" === t._mode && "overrideMimeType" in u && u.overrideMimeType("text/plain; charset=x-user-defined"), "timeout" in n && (u.timeout = n.timeout, u.ontimeout = function () {
              t.emit("timeout");
            }), s.forEach(function (t) {
              u.setRequestHeader(t[0], t[1]);
            }), t._response = null, u.onreadystatechange = function () {
              switch (u.readyState) {case c.LOADING:case c.DONE:
                  t._onXHRProgress();}
            }, "moz-chunked-arraybuffer" === t._mode && (u.onprogress = function () {
              t._onXHRProgress();
            }), u.onerror = function () {
              t._destroyed || t.emit("error", new Error("XHR error"));
            };try {
              u.send(o);
            } catch (e) {
              return void i.nextTick(function () {
                t.emit("error", e);
              });
            }
          }
        }
      }, $.prototype._onXHRProgress = function () {
        var t = this;o(t._xhr) && !t._destroyed && (t._response || t._connect(), t._response._onXHRProgress());
      }, $.prototype._connect = function () {
        var t = this;t._destroyed || (t._response = new h(t._xhr, t._fetchResponse, t._mode), t._response.on("error", function (e) {
          t.emit("error", e);
        }), t.emit("response", t._response));
      }, $.prototype._write = function (t, e, n) {
        this._body.push(t), n();
      }, $.prototype.abort = $.prototype.destroy = function () {
        var t = this;t._destroyed = !0, t._response && (t._response._destroyed = !0), t._xhr && t._xhr.abort();
      }, $.prototype.end = function (t, e, n) {
        var r = this;"function" == typeof t && (n = t, t = void 0), l.Writable.prototype.end.call(r, t, e, n);
      }, $.prototype.flushHeaders = function () {}, $.prototype.setTimeout = function () {}, $.prototype.setNoDelay = function () {}, $.prototype.setSocketKeepAlive = function () {};var p = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
    }).call(e, n(5).Buffer, n(0), n(2));
  }, function (t, e, n) {
    (function (t, r, i) {
      var a = n(35),
          o = n(6),
          d = n(11),
          s = e.readyStates = { UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4 },
          u = e.IncomingMessage = function (e, n, i) {
        function o() {
          u.read().then(function (t) {
            if (!s._destroyed) {
              if (t.done) return void s.push(null);s.push(new r(t.value)), o();
            }
          }).catch(function (t) {
            s.emit("error", t);
          });
        }var s = this;if (d.Readable.call(s), s._mode = i, s.headers = {}, s.rawHeaders = [], s.trailers = {}, s.rawTrailers = [], s.on("end", function () {
          t.nextTick(function () {
            s.emit("close");
          });
        }), "fetch" === i) {
          s._fetchResponse = n, s.url = n.url, s.statusCode = n.status, s.statusMessage = n.statusText, n.headers.forEach(function (t, e) {
            s.headers[e.toLowerCase()] = t, s.rawHeaders.push(e, t);
          });var u = n.body.getReader();o();
        } else {
          s._xhr = e, s._pos = 0, s.url = e.responseURL, s.statusCode = e.status, s.statusMessage = e.statusText;if (e.getAllResponseHeaders().split(/\r?\n/).forEach(function (t) {
            var e = t.match(/^([^:]+):\s*(.*)/);if (e) {
              var n = e[1].toLowerCase();"set-cookie" === n ? (void 0 === s.headers[n] && (s.headers[n] = []), s.headers[n].push(e[2])) : void 0 !== s.headers[n] ? s.headers[n] += ", " + e[2] : s.headers[n] = e[2], s.rawHeaders.push(e[1], e[2]);
            }
          }), s._charset = "x-user-defined", !a.overrideMimeType) {
            var l = s.rawHeaders["mime-type"];if (l) {
              var f = l.match(/;\s*charset=([^;])(;|$)/);f && (s._charset = f[1].toLowerCase());
            }s._charset || (s._charset = "utf-8");
          }
        }
      };o(u, d.Readable), u.prototype._read = function () {}, u.prototype._onXHRProgress = function () {
        var t = this,
            e = t._xhr,
            n = null;switch (t._mode) {case "text:vbarray":
            if (e.readyState !== s.DONE) break;try {
              n = new i.VBArray(e.responseBody).toArray();
            } catch (t) {}if (null !== n) {
              t.push(new r(n));break;
            }case "text":
            try {
              n = e.responseText;
            } catch (e) {
              t._mode = "text:vbarray";break;
            }if (n.length > t._pos) {
              var a = n.substr(t._pos);if ("x-user-defined" === t._charset) {
                for (var o = new r(a.length), d = 0; d < a.length; d++) {
                  o[d] = 255 & a.charCodeAt(d);
                }t.push(o);
              } else t.push(a, t._charset);t._pos = n.length;
            }break;case "arraybuffer":
            if (e.readyState !== s.DONE || !e.response) break;n = e.response, t.push(new r(new Uint8Array(n)));break;case "moz-chunked-arraybuffer":
            if (n = e.response, e.readyState !== s.LOADING || !n) break;t.push(new r(new Uint8Array(n)));break;case "ms-stream":
            if (n = e.response, e.readyState !== s.LOADING) break;var u = new i.MSStreamReader();u.onprogress = function () {
              u.result.byteLength > t._pos && (t.push(new r(new Uint8Array(u.result.slice(t._pos)))), t._pos = u.result.byteLength);
            }, u.onload = function () {
              t.push(null);
            }, u.readAsArrayBuffer(n);}t._xhr.readyState === s.DONE && "ms-stream" !== t._mode && t.push(null);
      };
    }).call(e, n(2), n(5).Buffer, n(0));
  }, function (t, e) {}, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e, n) {
      t.copy(e, n);
    }var a = n(17).Buffer;t.exports = function () {
      function t() {
        r(this, t), this.head = null, this.tail = null, this.length = 0;
      }return t.prototype.push = function (t) {
        var e = { data: t, next: null };this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length;
      }, t.prototype.unshift = function (t) {
        var e = { data: t, next: this.head };0 === this.length && (this.tail = e), this.head = e, ++this.length;
      }, t.prototype.shift = function () {
        if (0 !== this.length) {
          var t = this.head.data;return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
        }
      }, t.prototype.clear = function () {
        this.head = this.tail = null, this.length = 0;
      }, t.prototype.join = function (t) {
        if (0 === this.length) return "";for (var e = this.head, n = "" + e.data; e = e.next;) {
          n += t + e.data;
        }return n;
      }, t.prototype.concat = function (t) {
        if (0 === this.length) return a.alloc(0);if (1 === this.length) return this.head.data;for (var e = a.allocUnsafe(t >>> 0), n = this.head, r = 0; n;) {
          i(n.data, e, r), r += n.data.length, n = n.next;
        }return e;
      }, t;
    }();
  }, function (t, e, n) {
    function r(t, e) {
      this._id = t, this._clearFn = e;
    }var i = Function.prototype.apply;e.setTimeout = function () {
      return new r(i.call(setTimeout, window, arguments), clearTimeout);
    }, e.setInterval = function () {
      return new r(i.call(setInterval, window, arguments), clearInterval);
    }, e.clearTimeout = e.clearInterval = function (t) {
      t && t.close();
    }, r.prototype.unref = r.prototype.ref = function () {}, r.prototype.close = function () {
      this._clearFn.call(window, this._id);
    }, e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
    }, e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
    }, e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);var e = t._idleTimeout;e >= 0 && (t._idleTimeoutId = setTimeout(function () {
        t._onTimeout && t._onTimeout();
      }, e));
    }, n(72), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate;
  }, function (t, e, n) {
    (function (t, e) {
      (function (t, n) {
        "use strict";
        function r(t) {
          "function" != typeof t && (t = new Function("" + t));for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
            e[n] = arguments[n + 1];
          }var r = { callback: t, args: e };return u[s] = r, d(s), s++;
        }function i(t) {
          delete u[t];
        }function a(t) {
          var e = t.callback,
              r = t.args;switch (r.length) {case 0:
              e();break;case 1:
              e(r[0]);break;case 2:
              e(r[0], r[1]);break;case 3:
              e(r[0], r[1], r[2]);break;default:
              e.apply(n, r);}
        }function o(t) {
          if (l) setTimeout(o, 0, t);else {
            var e = u[t];if (e) {
              l = !0;try {
                a(e);
              } finally {
                i(t), l = !1;
              }
            }
          }
        }if (!t.setImmediate) {
          var d,
              s = 1,
              u = {},
              l = !1,
              f = t.document,
              h = Object.getPrototypeOf && Object.getPrototypeOf(t);h = h && h.setTimeout ? h : t, "[object process]" === {}.toString.call(t.process) ? function () {
            d = function d(t) {
              e.nextTick(function () {
                o(t);
              });
            };
          }() : !function () {
            if (t.postMessage && !t.importScripts) {
              var e = !0,
                  n = t.onmessage;return t.onmessage = function () {
                e = !1;
              }, t.postMessage("", "*"), t.onmessage = n, e;
            }
          }() ? t.MessageChannel ? function () {
            var t = new MessageChannel();t.port1.onmessage = function (t) {
              o(t.data);
            }, d = function d(e) {
              t.port2.postMessage(e);
            };
          }() : f && "onreadystatechange" in f.createElement("script") ? function () {
            var t = f.documentElement;d = function d(e) {
              var n = f.createElement("script");n.onreadystatechange = function () {
                o(e), n.onreadystatechange = null, t.removeChild(n), n = null;
              }, t.appendChild(n);
            };
          }() : function () {
            d = function d(t) {
              setTimeout(o, 0, t);
            };
          }() : function () {
            var e = "setImmediate$" + Math.random() + "$",
                n = function n(_n) {
              _n.source === t && "string" == typeof _n.data && 0 === _n.data.indexOf(e) && o(+_n.data.slice(e.length));
            };t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), d = function d(n) {
              t.postMessage(e + n, "*");
            };
          }(), h.setImmediate = r, h.clearImmediate = i;
        }
      })("undefined" == typeof self ? void 0 === t ? this : t : self);
    }).call(e, n(0), n(2));
  }, function (t, e, n) {
    (function (e) {
      function n(t, e) {
        function n() {
          if (!i) {
            if (r("throwDeprecation")) throw new Error(e);r("traceDeprecation") ? console.trace(e) : console.warn(e), i = !0;
          }return t.apply(this, arguments);
        }if (r("noDeprecation")) return t;var i = !1;return n;
      }function r(t) {
        try {
          if (!e.localStorage) return !1;
        } catch (t) {
          return !1;
        }var n = e.localStorage[t];return null != n && "true" === String(n).toLowerCase();
      }t.exports = n;
    }).call(e, n(0));
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      if (!(this instanceof r)) return new r(t);i.call(this, t);
    }t.exports = r;var i = n(40),
        a = n(12);a.inherits = n(6), a.inherits(r, i), r.prototype._transform = function (t, e, n) {
      n(null, t);
    };
  }, function (t, e, n) {
    var r = n(5).Buffer;t.exports = function (t) {
      if (t instanceof Uint8Array) {
        if (0 === t.byteOffset && t.byteLength === t.buffer.byteLength) return t.buffer;if ("function" == typeof t.buffer.slice) return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
      }if (r.isBuffer(t)) {
        for (var e = new Uint8Array(t.length), n = t.length, i = 0; i < n; i++) {
          e[i] = t[i];
        }return e.buffer;
      }throw new Error("Argument must be a Buffer");
    };
  }, function (t, e) {
    function n() {
      for (var t = {}, e = 0; e < arguments.length; e++) {
        var n = arguments[e];for (var i in n) {
          r.call(n, i) && (t[i] = n[i]);
        }
      }return t;
    }t.exports = n;var r = Object.prototype.hasOwnProperty;
  }, function (t, e) {
    t.exports = { 100: "Continue", 101: "Switching Protocols", 102: "Processing", 200: "OK", 201: "Created", 202: "Accepted", 203: "Non-Authoritative Information", 204: "No Content", 205: "Reset Content", 206: "Partial Content", 207: "Multi-Status", 208: "Already Reported", 226: "IM Used", 300: "Multiple Choices", 301: "Moved Permanently", 302: "Found", 303: "See Other", 304: "Not Modified", 305: "Use Proxy", 307: "Temporary Redirect", 308: "Permanent Redirect", 400: "Bad Request", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "Request Timeout", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Payload Too Large", 414: "URI Too Long", 415: "Unsupported Media Type", 416: "Range Not Satisfiable", 417: "Expectation Failed", 418: "I'm a teapot", 421: "Misdirected Request", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 425: "Unordered Collection", 426: "Upgrade Required", 428: "Precondition Required", 429: "Too Many Requests", 431: "Request Header Fields Too Large", 451: "Unavailable For Legal Reasons", 500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout", 505: "HTTP Version Not Supported", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 508: "Loop Detected", 509: "Bandwidth Limit Exceeded", 510: "Not Extended", 511: "Network Authentication Required" };
  }, function (t, e, n) {
    (function (t, r) {
      var i;(function (a) {
        function o(t) {
          throw new RangeError(I[t]);
        }function d(t, e) {
          for (var n = t.length, r = []; n--;) {
            r[n] = e(t[n]);
          }return r;
        }function s(t, e) {
          var n = t.split("@"),
              r = "";return n.length > 1 && (r = n[0] + "@", t = n[1]), t = t.replace(O, "."), r + d(t.split("."), e).join(".");
        }function u(t) {
          for (var e, n, r = [], i = 0, a = t.length; i < a;) {
            e = t.charCodeAt(i++), e >= 55296 && e <= 56319 && i < a ? (n = t.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--)) : r.push(e);
          }return r;
        }function l(t) {
          return d(t, function (t) {
            var e = "";return t > 65535 && (t -= 65536, e += M(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += M(t);
          }).join("");
        }function f(t) {
          return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : b;
        }function h(t, e) {
          return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
        }function c(t, e, n) {
          var r = 0;for (t = n ? L(t / k) : t >> 1, t += L(t / e); t > N * E >> 1; r += b) {
            t = L(t / N);
          }return L(r + (N + 1) * t / (t + x));
        }function $(t) {
          var e,
              n,
              r,
              i,
              a,
              d,
              s,
              u,
              h,
              $,
              p = [],
              g = t.length,
              m = 0,
              _ = C,
              y = S;for (n = t.lastIndexOf(A), n < 0 && (n = 0), r = 0; r < n; ++r) {
            t.charCodeAt(r) >= 128 && o("not-basic"), p.push(t.charCodeAt(r));
          }for (i = n > 0 ? n + 1 : 0; i < g;) {
            for (a = m, d = 1, s = b; i >= g && o("invalid-input"), u = f(t.charCodeAt(i++)), (u >= b || u > L((v - m) / d)) && o("overflow"), m += u * d, h = s <= y ? w : s >= y + E ? E : s - y, !(u < h); s += b) {
              $ = b - h, d > L(v / $) && o("overflow"), d *= $;
            }e = p.length + 1, y = c(m - a, e, 0 == a), L(m / e) > v - _ && o("overflow"), _ += L(m / e), m %= e, p.splice(m++, 0, _);
          }return l(p);
        }function p(t) {
          var e,
              n,
              r,
              i,
              a,
              d,
              s,
              l,
              f,
              $,
              p,
              g,
              m,
              _,
              y,
              x = [];for (t = u(t), g = t.length, e = C, n = 0, a = S, d = 0; d < g; ++d) {
            (p = t[d]) < 128 && x.push(M(p));
          }for (r = i = x.length, i && x.push(A); r < g;) {
            for (s = v, d = 0; d < g; ++d) {
              (p = t[d]) >= e && p < s && (s = p);
            }for (m = r + 1, s - e > L((v - n) / m) && o("overflow"), n += (s - e) * m, e = s, d = 0; d < g; ++d) {
              if (p = t[d], p < e && ++n > v && o("overflow"), p == e) {
                for (l = n, f = b; $ = f <= a ? w : f >= a + E ? E : f - a, !(l < $); f += b) {
                  y = l - $, _ = b - $, x.push(M(h($ + y % _, 0))), l = L(y / _);
                }x.push(M(h(l, 0))), a = c(n, m, r == i), n = 0, ++r;
              }
            }++n, ++e;
          }return x.join("");
        }function g(t) {
          return s(t, function (t) {
            return R.test(t) ? $(t.slice(4).toLowerCase()) : t;
          });
        }function m(t) {
          return s(t, function (t) {
            return T.test(t) ? "xn--" + p(t) : t;
          });
        }var _ = ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.nodeType, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.nodeType, "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && r);var y,
            v = 2147483647,
            b = 36,
            w = 1,
            E = 26,
            x = 38,
            k = 700,
            S = 72,
            C = 128,
            A = "-",
            R = /^xn--/,
            T = /[^\x20-\x7E]/,
            O = /[\x2E\u3002\uFF0E\uFF61]/g,
            I = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
            N = b - w,
            L = Math.floor,
            M = String.fromCharCode;y = { version: "1.4.1", ucs2: { decode: u, encode: l }, decode: $, encode: p, toASCII: m, toUnicode: g }, void 0 !== (i = function () {
          return y;
        }.call(e, n, e, t)) && (t.exports = i);
      })();
    }).call(e, n(79)(t), n(0));
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function get() {
          return t.l;
        } }), Object.defineProperty(t, "id", { enumerable: !0, get: function get() {
          return t.i;
        } }), t.webpackPolyfill = 1), t;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = { isString: function isString(t) {
        return "string" == typeof t;
      }, isObject: function isObject(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
      }, isNull: function isNull(t) {
        return null === t;
      }, isNullOrUndefined: function isNullOrUndefined(t) {
        return null == t;
      } };
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }t.exports = function (t, e, n, a) {
      e = e || "&", n = n || "=";var o = {};if ("string" != typeof t || 0 === t.length) return o;var d = /\+/g;t = t.split(e);var s = 1e3;a && "number" == typeof a.maxKeys && (s = a.maxKeys);var u = t.length;s > 0 && u > s && (u = s);for (var l = 0; l < u; ++l) {
        var f,
            h,
            c,
            $,
            p = t[l].replace(d, "%20"),
            g = p.indexOf(n);g >= 0 ? (f = p.substr(0, g), h = p.substr(g + 1)) : (f = p, h = ""), c = decodeURIComponent(f), $ = decodeURIComponent(h), r(o, c) ? i(o[c]) ? o[c].push($) : o[c] = [o[c], $] : o[c] = $;
      }return o;
    };var i = Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (t.map) return t.map(e);for (var n = [], r = 0; r < t.length; r++) {
        n.push(e(t[r], r));
      }return n;
    }var i = function i(t) {
      switch (typeof t === "undefined" ? "undefined" : _typeof(t)) {case "string":
          return t;case "boolean":
          return t ? "true" : "false";case "number":
          return isFinite(t) ? t : "";default:
          return "";}
    };t.exports = function (t, e, n, d) {
      return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? r(o(t), function (o) {
        var d = encodeURIComponent(i(o)) + n;return a(t[o]) ? r(t[o], function (t) {
          return d + encodeURIComponent(i(t));
        }).join(e) : d + encodeURIComponent(i(t[o]));
      }).join(e) : d ? encodeURIComponent(i(d)) + n + encodeURIComponent(i(t)) : "";
    };var a = Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    },
        o = Object.keys || function (t) {
      var e = [];for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
      }return e;
    };
  }, function (t, e, n) {
    function r(t) {
      if ("string" == typeof t && (t = a.parse(t)), t.protocol || (t.protocol = "https:"), "https:" !== t.protocol) throw new Error('Protocol "' + t.protocol + '" not supported. Expected "https:"');return t;
    }var i = n(34),
        a = n(25),
        o = t.exports;for (var d in i) {
      i.hasOwnProperty(d) && (o[d] = i[d]);
    }o.request = function (t, e) {
      return t = r(t), i.request.call(this, t, e);
    }, o.get = function (t, e) {
      return t = r(t), i.get.call(this, t, e);
    };
  }, function (t, e, n) {
    "use strict";
    (function (t) {
      function r(t, e, n) {
        function r() {
          for (var e; null !== (e = t.read());) {
            o.push(e), d += e.length;
          }t.once("readable", r);
        }function i(e) {
          t.removeListener("end", a), t.removeListener("readable", r), n(e);
        }function a() {
          var e,
              r = null;d >= b ? r = new RangeError(w) : e = g.concat(o, d), o = [], t.close(), n(r, e);
        }var o = [],
            d = 0;t.on("error", i), t.on("end", a), t.end(e), r();
      }function i(t, e) {
        if ("string" == typeof e && (e = g.from(e)), !g.isBuffer(e)) throw new TypeError("Not a string or buffer");var n = t._finishFlushFlag;return t._processChunk(e, n);
      }function a(t) {
        if (!(this instanceof a)) return new a(t);c.call(this, t, _.DEFLATE);
      }function o(t) {
        if (!(this instanceof o)) return new o(t);c.call(this, t, _.INFLATE);
      }function d(t) {
        if (!(this instanceof d)) return new d(t);c.call(this, t, _.GZIP);
      }function s(t) {
        if (!(this instanceof s)) return new s(t);c.call(this, t, _.GUNZIP);
      }function u(t) {
        if (!(this instanceof u)) return new u(t);c.call(this, t, _.DEFLATERAW);
      }function l(t) {
        if (!(this instanceof l)) return new l(t);c.call(this, t, _.INFLATERAW);
      }function f(t) {
        if (!(this instanceof f)) return new f(t);c.call(this, t, _.UNZIP);
      }function h(t) {
        return t === _.Z_NO_FLUSH || t === _.Z_PARTIAL_FLUSH || t === _.Z_SYNC_FLUSH || t === _.Z_FULL_FLUSH || t === _.Z_FINISH || t === _.Z_BLOCK;
      }function c(t, n) {
        var r = this;if (this._opts = t = t || {}, this._chunkSize = t.chunkSize || e.Z_DEFAULT_CHUNK, m.call(this, t), t.flush && !h(t.flush)) throw new Error("Invalid flush flag: " + t.flush);if (t.finishFlush && !h(t.finishFlush)) throw new Error("Invalid flush flag: " + t.finishFlush);if (this._flushFlag = t.flush || _.Z_NO_FLUSH, this._finishFlushFlag = void 0 !== t.finishFlush ? t.finishFlush : _.Z_FINISH, t.chunkSize && (t.chunkSize < e.Z_MIN_CHUNK || t.chunkSize > e.Z_MAX_CHUNK)) throw new Error("Invalid chunk size: " + t.chunkSize);if (t.windowBits && (t.windowBits < e.Z_MIN_WINDOWBITS || t.windowBits > e.Z_MAX_WINDOWBITS)) throw new Error("Invalid windowBits: " + t.windowBits);if (t.level && (t.level < e.Z_MIN_LEVEL || t.level > e.Z_MAX_LEVEL)) throw new Error("Invalid compression level: " + t.level);if (t.memLevel && (t.memLevel < e.Z_MIN_MEMLEVEL || t.memLevel > e.Z_MAX_MEMLEVEL)) throw new Error("Invalid memLevel: " + t.memLevel);if (t.strategy && t.strategy != e.Z_FILTERED && t.strategy != e.Z_HUFFMAN_ONLY && t.strategy != e.Z_RLE && t.strategy != e.Z_FIXED && t.strategy != e.Z_DEFAULT_STRATEGY) throw new Error("Invalid strategy: " + t.strategy);if (t.dictionary && !g.isBuffer(t.dictionary)) throw new Error("Invalid dictionary: it should be a Buffer instance");this._handle = new _.Zlib(n);var i = this;this._hadError = !1, this._handle.onerror = function (t, n) {
          $(i), i._hadError = !0;var r = new Error(t);r.errno = n, r.code = e.codes[n], i.emit("error", r);
        };var a = e.Z_DEFAULT_COMPRESSION;"number" == typeof t.level && (a = t.level);var o = e.Z_DEFAULT_STRATEGY;"number" == typeof t.strategy && (o = t.strategy), this._handle.init(t.windowBits || e.Z_DEFAULT_WINDOWBITS, a, t.memLevel || e.Z_DEFAULT_MEMLEVEL, o, t.dictionary), this._buffer = g.allocUnsafe(this._chunkSize), this._offset = 0, this._level = a, this._strategy = o, this.once("end", this.close), Object.defineProperty(this, "_closed", { get: function get() {
            return !r._handle;
          }, configurable: !0, enumerable: !0 });
      }function $(e, n) {
        n && t.nextTick(n), e._handle && (e._handle.close(), e._handle = null);
      }function p(t) {
        t.emit("close");
      }var g = n(5).Buffer,
          m = n(85).Transform,
          _ = n(90),
          y = n(26),
          v = n(42).ok,
          b = n(5).kMaxLength,
          w = "Cannot create final Buffer. It would be larger than 0x" + b.toString(16) + " bytes";_.Z_MIN_WINDOWBITS = 8, _.Z_MAX_WINDOWBITS = 15, _.Z_DEFAULT_WINDOWBITS = 15, _.Z_MIN_CHUNK = 64, _.Z_MAX_CHUNK = 1 / 0, _.Z_DEFAULT_CHUNK = 16384, _.Z_MIN_MEMLEVEL = 1, _.Z_MAX_MEMLEVEL = 9, _.Z_DEFAULT_MEMLEVEL = 8, _.Z_MIN_LEVEL = -1, _.Z_MAX_LEVEL = 9, _.Z_DEFAULT_LEVEL = _.Z_DEFAULT_COMPRESSION;for (var E = Object.keys(_), x = 0; x < E.length; x++) {
        var k = E[x];k.match(/^Z/) && Object.defineProperty(e, k, { enumerable: !0, value: _[k], writable: !1 });
      }for (var S = { Z_OK: _.Z_OK, Z_STREAM_END: _.Z_STREAM_END, Z_NEED_DICT: _.Z_NEED_DICT, Z_ERRNO: _.Z_ERRNO, Z_STREAM_ERROR: _.Z_STREAM_ERROR, Z_DATA_ERROR: _.Z_DATA_ERROR, Z_MEM_ERROR: _.Z_MEM_ERROR, Z_BUF_ERROR: _.Z_BUF_ERROR, Z_VERSION_ERROR: _.Z_VERSION_ERROR }, C = Object.keys(S), A = 0; A < C.length; A++) {
        var R = C[A];S[S[R]] = R;
      }Object.defineProperty(e, "codes", { enumerable: !0, value: Object.freeze(S), writable: !1 }), e.Deflate = a, e.Inflate = o, e.Gzip = d, e.Gunzip = s, e.DeflateRaw = u, e.InflateRaw = l, e.Unzip = f, e.createDeflate = function (t) {
        return new a(t);
      }, e.createInflate = function (t) {
        return new o(t);
      }, e.createDeflateRaw = function (t) {
        return new u(t);
      }, e.createInflateRaw = function (t) {
        return new l(t);
      }, e.createGzip = function (t) {
        return new d(t);
      }, e.createGunzip = function (t) {
        return new s(t);
      }, e.createUnzip = function (t) {
        return new f(t);
      }, e.deflate = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new a(e), t, n);
      }, e.deflateSync = function (t, e) {
        return i(new a(e), t);
      }, e.gzip = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new d(e), t, n);
      }, e.gzipSync = function (t, e) {
        return i(new d(e), t);
      }, e.deflateRaw = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new u(e), t, n);
      }, e.deflateRawSync = function (t, e) {
        return i(new u(e), t);
      }, e.unzip = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new f(e), t, n);
      }, e.unzipSync = function (t, e) {
        return i(new f(e), t);
      }, e.inflate = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new o(e), t, n);
      }, e.inflateSync = function (t, e) {
        return i(new o(e), t);
      }, e.gunzip = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new s(e), t, n);
      }, e.gunzipSync = function (t, e) {
        return i(new s(e), t);
      }, e.inflateRaw = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), r(new l(e), t, n);
      }, e.inflateRawSync = function (t, e) {
        return i(new l(e), t);
      }, y.inherits(c, m), c.prototype.params = function (n, r, i) {
        if (n < e.Z_MIN_LEVEL || n > e.Z_MAX_LEVEL) throw new RangeError("Invalid compression level: " + n);if (r != e.Z_FILTERED && r != e.Z_HUFFMAN_ONLY && r != e.Z_RLE && r != e.Z_FIXED && r != e.Z_DEFAULT_STRATEGY) throw new TypeError("Invalid strategy: " + r);if (this._level !== n || this._strategy !== r) {
          var a = this;this.flush(_.Z_SYNC_FLUSH, function () {
            v(a._handle, "zlib binding closed"), a._handle.params(n, r), a._hadError || (a._level = n, a._strategy = r, i && i());
          });
        } else t.nextTick(i);
      }, c.prototype.reset = function () {
        return v(this._handle, "zlib binding closed"), this._handle.reset();
      }, c.prototype._flush = function (t) {
        this._transform(g.alloc(0), "", t);
      }, c.prototype.flush = function (e, n) {
        var r = this,
            i = this._writableState;("function" == typeof e || void 0 === e && !n) && (n = e, e = _.Z_FULL_FLUSH), i.ended ? n && t.nextTick(n) : i.ending ? n && this.once("end", n) : i.needDrain ? n && this.once("drain", function () {
          return r.flush(e, n);
        }) : (this._flushFlag = e, this.write(g.alloc(0), "", n));
      }, c.prototype.close = function (e) {
        $(this, e), t.nextTick(p, this);
      }, c.prototype._transform = function (t, e, n) {
        var r,
            i = this._writableState,
            a = i.ending || i.ended,
            o = a && (!t || i.length === t.length);return null === t || g.isBuffer(t) ? this._handle ? (o ? r = this._finishFlushFlag : (r = this._flushFlag, t.length >= i.length && (this._flushFlag = this._opts.flush || _.Z_NO_FLUSH)), void this._processChunk(t, r, n)) : n(new Error("zlib binding closed")) : n(new Error("invalid input"));
      }, c.prototype._processChunk = function (t, e, n) {
        function r(u, h) {
          if (this && (this.buffer = null, this.callback = null), !d._hadError) {
            var c = a - h;if (v(c >= 0, "have should not go down"), c > 0) {
              var $ = d._buffer.slice(d._offset, d._offset + c);d._offset += c, s ? d.push($) : (l.push($), f += $.length);
            }if ((0 === h || d._offset >= d._chunkSize) && (a = d._chunkSize, d._offset = 0, d._buffer = g.allocUnsafe(d._chunkSize)), 0 === h) {
              if (o += i - u, i = u, !s) return !0;var p = d._handle.write(e, t, o, i, d._buffer, d._offset, d._chunkSize);return p.callback = r, void (p.buffer = t);
            }if (!s) return !1;n();
          }
        }var i = t && t.length,
            a = this._chunkSize - this._offset,
            o = 0,
            d = this,
            s = "function" == typeof n;if (!s) {
          var u,
              l = [],
              f = 0;this.on("error", function (t) {
            u = t;
          }), v(this._handle, "zlib binding closed");do {
            var h = this._handle.writeSync(e, t, o, i, this._buffer, this._offset, a);
          } while (!this._hadError && r(h[0], h[1]));if (this._hadError) throw u;if (f >= b) throw $(this), new RangeError(w);var c = g.concat(l, f);return $(this), c;
        }v(this._handle, "zlib binding closed");var p = this._handle.write(e, t, o, i, this._buffer, this._offset, a);p.buffer = t, p.callback = r;
      }, y.inherits(a, c), y.inherits(o, c), y.inherits(d, c), y.inherits(s, c), y.inherits(u, c), y.inherits(l, c), y.inherits(f, c);
    }).call(e, n(2));
  }, function (t, e, n) {
    function r() {
      i.call(this);
    }t.exports = r;var i = n(23).EventEmitter;n(6)(r, i), r.Readable = n(11), r.Writable = n(86), r.Duplex = n(87), r.Transform = n(88), r.PassThrough = n(89), r.Stream = r, r.prototype.pipe = function (t, e) {
      function n(e) {
        t.writable && !1 === t.write(e) && u.pause && u.pause();
      }function r() {
        u.readable && u.resume && u.resume();
      }function a() {
        l || (l = !0, t.end());
      }function o() {
        l || (l = !0, "function" == typeof t.destroy && t.destroy());
      }function d(t) {
        if (s(), 0 === i.listenerCount(this, "error")) throw t;
      }function s() {
        u.removeListener("data", n), t.removeListener("drain", r), u.removeListener("end", a), u.removeListener("close", o), u.removeListener("error", d), t.removeListener("error", d), u.removeListener("end", s), u.removeListener("close", s), t.removeListener("close", s);
      }var u = this;u.on("data", n), t.on("drain", r), t._isStdio || e && !1 === e.end || (u.on("end", a), u.on("close", o));var l = !1;return u.on("error", d), t.on("error", d), u.on("end", s), u.on("close", s), t.on("close", s), t.emit("pipe", u), t;
    };
  }, function (t, e, n) {
    t.exports = n(24);
  }, function (t, e, n) {
    t.exports = n(7);
  }, function (t, e, n) {
    t.exports = n(11).Transform;
  }, function (t, e, n) {
    t.exports = n(11).PassThrough;
  }, function (t, e, n) {
    "use strict";
    (function (t, r) {
      function i(t) {
        if ("number" != typeof t || t < e.DEFLATE || t > e.UNZIP) throw new TypeError("Bad argument");this.dictionary = null, this.err = 0, this.flush = 0, this.init_done = !1, this.level = 0, this.memLevel = 0, this.mode = t, this.strategy = 0, this.windowBits = 0, this.write_in_progress = !1, this.pending_close = !1, this.gzip_id_bytes_read = 0;
      }var a = n(42),
          o = n(92),
          d = n(93),
          s = n(96),
          u = n(99);for (var l in u) {
        e[l] = u[l];
      }e.NONE = 0, e.DEFLATE = 1, e.INFLATE = 2, e.GZIP = 3, e.GUNZIP = 4, e.DEFLATERAW = 5, e.INFLATERAW = 6, e.UNZIP = 7;i.prototype.close = function () {
        if (this.write_in_progress) return void (this.pending_close = !0);this.pending_close = !1, a(this.init_done, "close before init"), a(this.mode <= e.UNZIP), this.mode === e.DEFLATE || this.mode === e.GZIP || this.mode === e.DEFLATERAW ? d.deflateEnd(this.strm) : this.mode !== e.INFLATE && this.mode !== e.GUNZIP && this.mode !== e.INFLATERAW && this.mode !== e.UNZIP || s.inflateEnd(this.strm), this.mode = e.NONE, this.dictionary = null;
      }, i.prototype.write = function (t, e, n, r, i, a, o) {
        return this._write(!0, t, e, n, r, i, a, o);
      }, i.prototype.writeSync = function (t, e, n, r, i, a, o) {
        return this._write(!1, t, e, n, r, i, a, o);
      }, i.prototype._write = function (n, i, o, d, s, u, l, f) {
        if (a.equal(arguments.length, 8), a(this.init_done, "write before init"), a(this.mode !== e.NONE, "already finalized"), a.equal(!1, this.write_in_progress, "write already in progress"), a.equal(!1, this.pending_close, "close is pending"), this.write_in_progress = !0, a.equal(!1, void 0 === i, "must provide flush value"), this.write_in_progress = !0, i !== e.Z_NO_FLUSH && i !== e.Z_PARTIAL_FLUSH && i !== e.Z_SYNC_FLUSH && i !== e.Z_FULL_FLUSH && i !== e.Z_FINISH && i !== e.Z_BLOCK) throw new Error("Invalid flush value");if (null == o && (o = t.alloc(0), s = 0, d = 0), this.strm.avail_in = s, this.strm.input = o, this.strm.next_in = d, this.strm.avail_out = f, this.strm.output = u, this.strm.next_out = l, this.flush = i, n) {
          var h = this;return r.nextTick(function () {
            h._process(), h._after();
          }), this;
        }if (this._process(), this._checkError()) return this._afterSync();
      }, i.prototype._afterSync = function () {
        var t = this.strm.avail_out,
            e = this.strm.avail_in;return this.write_in_progress = !1, [e, t];
      }, i.prototype._process = function () {
        var t = null;switch (this.mode) {case e.DEFLATE:case e.GZIP:case e.DEFLATERAW:
            this.err = d.deflate(this.strm, this.flush);break;case e.UNZIP:
            switch (this.strm.avail_in > 0 && (t = this.strm.next_in), this.gzip_id_bytes_read) {case 0:
                if (null === t) break;if (31 !== this.strm.input[t]) {
                  this.mode = e.INFLATE;break;
                }if (this.gzip_id_bytes_read = 1, t++, 1 === this.strm.avail_in) break;case 1:
                if (null === t) break;139 === this.strm.input[t] ? (this.gzip_id_bytes_read = 2, this.mode = e.GUNZIP) : this.mode = e.INFLATE;break;default:
                throw new Error("invalid number of gzip magic number bytes read");}case e.INFLATE:case e.GUNZIP:case e.INFLATERAW:
            for (this.err = s.inflate(this.strm, this.flush), this.err === e.Z_NEED_DICT && this.dictionary && (this.err = s.inflateSetDictionary(this.strm, this.dictionary), this.err === e.Z_OK ? this.err = s.inflate(this.strm, this.flush) : this.err === e.Z_DATA_ERROR && (this.err = e.Z_NEED_DICT)); this.strm.avail_in > 0 && this.mode === e.GUNZIP && this.err === e.Z_STREAM_END && 0 !== this.strm.next_in[0];) {
              this.reset(), this.err = s.inflate(this.strm, this.flush);
            }break;default:
            throw new Error("Unknown mode " + this.mode);}
      }, i.prototype._checkError = function () {
        switch (this.err) {case e.Z_OK:case e.Z_BUF_ERROR:
            if (0 !== this.strm.avail_out && this.flush === e.Z_FINISH) return this._error("unexpected end of file"), !1;break;case e.Z_STREAM_END:
            break;case e.Z_NEED_DICT:
            return null == this.dictionary ? this._error("Missing dictionary") : this._error("Bad dictionary"), !1;default:
            return this._error("Zlib error"), !1;}return !0;
      }, i.prototype._after = function () {
        if (this._checkError()) {
          var t = this.strm.avail_out,
              e = this.strm.avail_in;this.write_in_progress = !1, this.callback(e, t), this.pending_close && this.close();
        }
      }, i.prototype._error = function (t) {
        this.strm.msg && (t = this.strm.msg), this.onerror(t, this.err), this.write_in_progress = !1, this.pending_close && this.close();
      }, i.prototype.init = function (t, n, r, i, o) {
        a(4 === arguments.length || 5 === arguments.length, "init(windowBits, level, memLevel, strategy, [dictionary])"), a(t >= 8 && t <= 15, "invalid windowBits"), a(n >= -1 && n <= 9, "invalid compression level"), a(r >= 1 && r <= 9, "invalid memlevel"), a(i === e.Z_FILTERED || i === e.Z_HUFFMAN_ONLY || i === e.Z_RLE || i === e.Z_FIXED || i === e.Z_DEFAULT_STRATEGY, "invalid strategy"), this._init(n, t, r, i, o), this._setDictionary();
      }, i.prototype.params = function () {
        throw new Error("deflateParams Not supported");
      }, i.prototype.reset = function () {
        this._reset(), this._setDictionary();
      }, i.prototype._init = function (t, n, r, i, a) {
        switch (this.level = t, this.windowBits = n, this.memLevel = r, this.strategy = i, this.flush = e.Z_NO_FLUSH, this.err = e.Z_OK, this.mode !== e.GZIP && this.mode !== e.GUNZIP || (this.windowBits += 16), this.mode === e.UNZIP && (this.windowBits += 32), this.mode !== e.DEFLATERAW && this.mode !== e.INFLATERAW || (this.windowBits = -1 * this.windowBits), this.strm = new o(), this.mode) {case e.DEFLATE:case e.GZIP:case e.DEFLATERAW:
            this.err = d.deflateInit2(this.strm, this.level, e.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);break;case e.INFLATE:case e.GUNZIP:case e.INFLATERAW:case e.UNZIP:
            this.err = s.inflateInit2(this.strm, this.windowBits);break;default:
            throw new Error("Unknown mode " + this.mode);}this.err !== e.Z_OK && this._error("Init error"), this.dictionary = a, this.write_in_progress = !1, this.init_done = !0;
      }, i.prototype._setDictionary = function () {
        if (null != this.dictionary) {
          switch (this.err = e.Z_OK, this.mode) {case e.DEFLATE:case e.DEFLATERAW:
              this.err = d.deflateSetDictionary(this.strm, this.dictionary);}this.err !== e.Z_OK && this._error("Failed to set dictionary");
        }
      }, i.prototype._reset = function () {
        switch (this.err = e.Z_OK, this.mode) {case e.DEFLATE:case e.DEFLATERAW:case e.GZIP:
            this.err = d.deflateReset(this.strm);break;case e.INFLATE:case e.INFLATERAW:case e.GUNZIP:
            this.err = s.inflateReset(this.strm);}this.err !== e.Z_OK && this._error("Failed to reset stream");
      }, e.Zlib = i;
    }).call(e, n(5).Buffer, n(2));
  }, function (t, e) {
    t.exports = function (t) {
      return t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8;
    };
  }, function (t, e, n) {
    "use strict";
    function r() {
      this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
    }t.exports = r;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      return t.msg = L[e], e;
    }function i(t) {
      return (t << 1) - (t > 4 ? 9 : 0);
    }function a(t) {
      for (var e = t.length; --e >= 0;) {
        t[e] = 0;
      }
    }function o(t) {
      var e = t.state,
          n = e.pending;n > t.avail_out && (n = t.avail_out), 0 !== n && (T.arraySet(t.output, e.pending_buf, e.pending_out, n, t.next_out), t.next_out += n, e.pending_out += n, t.total_out += n, t.avail_out -= n, e.pending -= n, 0 === e.pending && (e.pending_out = 0));
    }function d(t, e) {
      O._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, o(t.strm);
    }function s(t, e) {
      t.pending_buf[t.pending++] = e;
    }function u(t, e) {
      t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
    }function l(t, e, n, r) {
      var i = t.avail_in;return i > r && (i = r), 0 === i ? 0 : (t.avail_in -= i, T.arraySet(e, t.input, t.next_in, i, n), 1 === t.state.wrap ? t.adler = I(t.adler, e, i, n) : 2 === t.state.wrap && (t.adler = N(t.adler, e, i, n)), t.next_in += i, t.total_in += i, i);
    }function f(t, e) {
      var n,
          r,
          i = t.max_chain_length,
          a = t.strstart,
          o = t.prev_length,
          d = t.nice_match,
          s = t.strstart > t.w_size - ut ? t.strstart - (t.w_size - ut) : 0,
          u = t.window,
          l = t.w_mask,
          f = t.prev,
          h = t.strstart + st,
          c = u[a + o - 1],
          $ = u[a + o];t.prev_length >= t.good_match && (i >>= 2), d > t.lookahead && (d = t.lookahead);do {
        if (n = e, u[n + o] === $ && u[n + o - 1] === c && u[n] === u[a] && u[++n] === u[a + 1]) {
          a += 2, n++;do {} while (u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && a < h);if (r = st - (h - a), a = h - st, r > o) {
            if (t.match_start = e, o = r, r >= d) break;c = u[a + o - 1], $ = u[a + o];
          }
        }
      } while ((e = f[e & l]) > s && 0 != --i);return o <= t.lookahead ? o : t.lookahead;
    }function h(t) {
      var e,
          n,
          r,
          i,
          a,
          o = t.w_size;do {
        if (i = t.window_size - t.lookahead - t.strstart, t.strstart >= o + (o - ut)) {
          T.arraySet(t.window, t.window, o, o, 0), t.match_start -= o, t.strstart -= o, t.block_start -= o, n = t.hash_size, e = n;do {
            r = t.head[--e], t.head[e] = r >= o ? r - o : 0;
          } while (--n);n = o, e = n;do {
            r = t.prev[--e], t.prev[e] = r >= o ? r - o : 0;
          } while (--n);i += o;
        }if (0 === t.strm.avail_in) break;if (n = l(t.strm, t.window, t.strstart + t.lookahead, i), t.lookahead += n, t.lookahead + t.insert >= dt) for (a = t.strstart - t.insert, t.ins_h = t.window[a], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[a + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[a + dt - 1]) & t.hash_mask, t.prev[a & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = a, a++, t.insert--, !(t.lookahead + t.insert < dt));) {}
      } while (t.lookahead < ut && 0 !== t.strm.avail_in);
    }function c(t, e) {
      var n = 65535;for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5);;) {
        if (t.lookahead <= 1) {
          if (h(t), 0 === t.lookahead && e === M) return _t;if (0 === t.lookahead) break;
        }t.strstart += t.lookahead, t.lookahead = 0;var r = t.block_start + n;if ((0 === t.strstart || t.strstart >= r) && (t.lookahead = t.strstart - r, t.strstart = r, d(t, !1), 0 === t.strm.avail_out)) return _t;if (t.strstart - t.block_start >= t.w_size - ut && (d(t, !1), 0 === t.strm.avail_out)) return _t;
      }return t.insert = 0, e === j ? (d(t, !0), 0 === t.strm.avail_out ? vt : bt) : (t.strstart > t.block_start && (d(t, !1), t.strm.avail_out), _t);
    }function $(t, e) {
      for (var n, r;;) {
        if (t.lookahead < ut) {
          if (h(t), t.lookahead < ut && e === M) return _t;if (0 === t.lookahead) break;
        }if (n = 0, t.lookahead >= dt && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + dt - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== n && t.strstart - n <= t.w_size - ut && (t.match_length = f(t, n)), t.match_length >= dt) {
          if (r = O._tr_tally(t, t.strstart - t.match_start, t.match_length - dt), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= dt) {
            t.match_length--;do {
              t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + dt - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart;
            } while (0 != --t.match_length);t.strstart++;
          } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
        } else r = O._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;if (r && (d(t, !1), 0 === t.strm.avail_out)) return _t;
      }return t.insert = t.strstart < dt - 1 ? t.strstart : dt - 1, e === j ? (d(t, !0), 0 === t.strm.avail_out ? vt : bt) : t.last_lit && (d(t, !1), 0 === t.strm.avail_out) ? _t : yt;
    }function p(t, e) {
      for (var n, r, i;;) {
        if (t.lookahead < ut) {
          if (h(t), t.lookahead < ut && e === M) return _t;if (0 === t.lookahead) break;
        }if (n = 0, t.lookahead >= dt && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + dt - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = dt - 1, 0 !== n && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - ut && (t.match_length = f(t, n), t.match_length <= 5 && (t.strategy === q || t.match_length === dt && t.strstart - t.match_start > 4096) && (t.match_length = dt - 1)), t.prev_length >= dt && t.match_length <= t.prev_length) {
          i = t.strstart + t.lookahead - dt, r = O._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - dt), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;do {
            ++t.strstart <= i && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + dt - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart);
          } while (0 != --t.prev_length);if (t.match_available = 0, t.match_length = dt - 1, t.strstart++, r && (d(t, !1), 0 === t.strm.avail_out)) return _t;
        } else if (t.match_available) {
          if (r = O._tr_tally(t, 0, t.window[t.strstart - 1]), r && d(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return _t;
        } else t.match_available = 1, t.strstart++, t.lookahead--;
      }return t.match_available && (r = O._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < dt - 1 ? t.strstart : dt - 1, e === j ? (d(t, !0), 0 === t.strm.avail_out ? vt : bt) : t.last_lit && (d(t, !1), 0 === t.strm.avail_out) ? _t : yt;
    }function g(t, e) {
      for (var n, r, i, a, o = t.window;;) {
        if (t.lookahead <= st) {
          if (h(t), t.lookahead <= st && e === M) return _t;if (0 === t.lookahead) break;
        }if (t.match_length = 0, t.lookahead >= dt && t.strstart > 0 && (i = t.strstart - 1, (r = o[i]) === o[++i] && r === o[++i] && r === o[++i])) {
          a = t.strstart + st;do {} while (r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && i < a);t.match_length = st - (a - i), t.match_length > t.lookahead && (t.match_length = t.lookahead);
        }if (t.match_length >= dt ? (n = O._tr_tally(t, 1, t.match_length - dt), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (n = O._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), n && (d(t, !1), 0 === t.strm.avail_out)) return _t;
      }return t.insert = 0, e === j ? (d(t, !0), 0 === t.strm.avail_out ? vt : bt) : t.last_lit && (d(t, !1), 0 === t.strm.avail_out) ? _t : yt;
    }function m(t, e) {
      for (var n;;) {
        if (0 === t.lookahead && (h(t), 0 === t.lookahead)) {
          if (e === M) return _t;break;
        }if (t.match_length = 0, n = O._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, n && (d(t, !1), 0 === t.strm.avail_out)) return _t;
      }return t.insert = 0, e === j ? (d(t, !0), 0 === t.strm.avail_out ? vt : bt) : t.last_lit && (d(t, !1), 0 === t.strm.avail_out) ? _t : yt;
    }function _(t, e, n, r, i) {
      this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = r, this.func = i;
    }function y(t) {
      t.window_size = 2 * t.w_size, a(t.head), t.max_lazy_match = R[t.level].max_lazy, t.good_match = R[t.level].good_length, t.nice_match = R[t.level].nice_length, t.max_chain_length = R[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = dt - 1, t.match_available = 0, t.ins_h = 0;
    }function v() {
      this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = J, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new T.Buf16(2 * at), this.dyn_dtree = new T.Buf16(2 * (2 * rt + 1)), this.bl_tree = new T.Buf16(2 * (2 * it + 1)), a(this.dyn_ltree), a(this.dyn_dtree), a(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new T.Buf16(ot + 1), this.heap = new T.Buf16(2 * nt + 1), a(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new T.Buf16(2 * nt + 1), a(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
    }function b(t) {
      var e;return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = X, e = t.state, e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? ft : gt, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = M, O._tr_init(e), D) : r(t, z);
    }function w(t) {
      var e = b(t);return e === D && y(t.state), e;
    }function E(t, e) {
      return t && t.state ? 2 !== t.state.wrap ? z : (t.state.gzhead = e, D) : z;
    }function x(t, e, n, i, a, o) {
      if (!t) return z;var d = 1;if (e === H && (e = 6), i < 0 ? (d = 0, i = -i) : i > 15 && (d = 2, i -= 16), a < 1 || a > Q || n !== J || i < 8 || i > 15 || e < 0 || e > 9 || o < 0 || o > K) return r(t, z);8 === i && (i = 9);var s = new v();return t.state = s, s.strm = t, s.wrap = d, s.gzhead = null, s.w_bits = i, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = a + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + dt - 1) / dt), s.window = new T.Buf8(2 * s.w_size), s.head = new T.Buf16(s.hash_size), s.prev = new T.Buf16(s.w_size), s.lit_bufsize = 1 << a + 6, s.pending_buf_size = 4 * s.lit_bufsize, s.pending_buf = new T.Buf8(s.pending_buf_size), s.d_buf = 1 * s.lit_bufsize, s.l_buf = 3 * s.lit_bufsize, s.level = e, s.strategy = o, s.method = n, w(t);
    }function k(t, e) {
      return x(t, e, J, tt, et, V);
    }function S(t, e) {
      var n, d, l, f;if (!t || !t.state || e > F || e < 0) return t ? r(t, z) : z;if (d = t.state, !t.output || !t.input && 0 !== t.avail_in || d.status === mt && e !== j) return r(t, 0 === t.avail_out ? G : z);if (d.strm = t, n = d.last_flush, d.last_flush = e, d.status === ft) if (2 === d.wrap) t.adler = 0, s(d, 31), s(d, 139), s(d, 8), d.gzhead ? (s(d, (d.gzhead.text ? 1 : 0) + (d.gzhead.hcrc ? 2 : 0) + (d.gzhead.extra ? 4 : 0) + (d.gzhead.name ? 8 : 0) + (d.gzhead.comment ? 16 : 0)), s(d, 255 & d.gzhead.time), s(d, d.gzhead.time >> 8 & 255), s(d, d.gzhead.time >> 16 & 255), s(d, d.gzhead.time >> 24 & 255), s(d, 9 === d.level ? 2 : d.strategy >= Y || d.level < 2 ? 4 : 0), s(d, 255 & d.gzhead.os), d.gzhead.extra && d.gzhead.extra.length && (s(d, 255 & d.gzhead.extra.length), s(d, d.gzhead.extra.length >> 8 & 255)), d.gzhead.hcrc && (t.adler = N(t.adler, d.pending_buf, d.pending, 0)), d.gzindex = 0, d.status = ht) : (s(d, 0), s(d, 0), s(d, 0), s(d, 0), s(d, 0), s(d, 9 === d.level ? 2 : d.strategy >= Y || d.level < 2 ? 4 : 0), s(d, wt), d.status = gt);else {
        var h = J + (d.w_bits - 8 << 4) << 8,
            c = -1;c = d.strategy >= Y || d.level < 2 ? 0 : d.level < 6 ? 1 : 6 === d.level ? 2 : 3, h |= c << 6, 0 !== d.strstart && (h |= lt), h += 31 - h % 31, d.status = gt, u(d, h), 0 !== d.strstart && (u(d, t.adler >>> 16), u(d, 65535 & t.adler)), t.adler = 1;
      }if (d.status === ht) if (d.gzhead.extra) {
        for (l = d.pending; d.gzindex < (65535 & d.gzhead.extra.length) && (d.pending !== d.pending_buf_size || (d.gzhead.hcrc && d.pending > l && (t.adler = N(t.adler, d.pending_buf, d.pending - l, l)), o(t), l = d.pending, d.pending !== d.pending_buf_size));) {
          s(d, 255 & d.gzhead.extra[d.gzindex]), d.gzindex++;
        }d.gzhead.hcrc && d.pending > l && (t.adler = N(t.adler, d.pending_buf, d.pending - l, l)), d.gzindex === d.gzhead.extra.length && (d.gzindex = 0, d.status = ct);
      } else d.status = ct;if (d.status === ct) if (d.gzhead.name) {
        l = d.pending;do {
          if (d.pending === d.pending_buf_size && (d.gzhead.hcrc && d.pending > l && (t.adler = N(t.adler, d.pending_buf, d.pending - l, l)), o(t), l = d.pending, d.pending === d.pending_buf_size)) {
            f = 1;break;
          }f = d.gzindex < d.gzhead.name.length ? 255 & d.gzhead.name.charCodeAt(d.gzindex++) : 0, s(d, f);
        } while (0 !== f);d.gzhead.hcrc && d.pending > l && (t.adler = N(t.adler, d.pending_buf, d.pending - l, l)), 0 === f && (d.gzindex = 0, d.status = $t);
      } else d.status = $t;if (d.status === $t) if (d.gzhead.comment) {
        l = d.pending;do {
          if (d.pending === d.pending_buf_size && (d.gzhead.hcrc && d.pending > l && (t.adler = N(t.adler, d.pending_buf, d.pending - l, l)), o(t), l = d.pending, d.pending === d.pending_buf_size)) {
            f = 1;break;
          }f = d.gzindex < d.gzhead.comment.length ? 255 & d.gzhead.comment.charCodeAt(d.gzindex++) : 0, s(d, f);
        } while (0 !== f);d.gzhead.hcrc && d.pending > l && (t.adler = N(t.adler, d.pending_buf, d.pending - l, l)), 0 === f && (d.status = pt);
      } else d.status = pt;if (d.status === pt && (d.gzhead.hcrc ? (d.pending + 2 > d.pending_buf_size && o(t), d.pending + 2 <= d.pending_buf_size && (s(d, 255 & t.adler), s(d, t.adler >> 8 & 255), t.adler = 0, d.status = gt)) : d.status = gt), 0 !== d.pending) {
        if (o(t), 0 === t.avail_out) return d.last_flush = -1, D;
      } else if (0 === t.avail_in && i(e) <= i(n) && e !== j) return r(t, G);if (d.status === mt && 0 !== t.avail_in) return r(t, G);if (0 !== t.avail_in || 0 !== d.lookahead || e !== M && d.status !== mt) {
        var $ = d.strategy === Y ? m(d, e) : d.strategy === W ? g(d, e) : R[d.level].func(d, e);if ($ !== vt && $ !== bt || (d.status = mt), $ === _t || $ === vt) return 0 === t.avail_out && (d.last_flush = -1), D;if ($ === yt && (e === P ? O._tr_align(d) : e !== F && (O._tr_stored_block(d, 0, 0, !1), e === B && (a(d.head), 0 === d.lookahead && (d.strstart = 0, d.block_start = 0, d.insert = 0))), o(t), 0 === t.avail_out)) return d.last_flush = -1, D;
      }return e !== j ? D : d.wrap <= 0 ? U : (2 === d.wrap ? (s(d, 255 & t.adler), s(d, t.adler >> 8 & 255), s(d, t.adler >> 16 & 255), s(d, t.adler >> 24 & 255), s(d, 255 & t.total_in), s(d, t.total_in >> 8 & 255), s(d, t.total_in >> 16 & 255), s(d, t.total_in >> 24 & 255)) : (u(d, t.adler >>> 16), u(d, 65535 & t.adler)), o(t), d.wrap > 0 && (d.wrap = -d.wrap), 0 !== d.pending ? D : U);
    }function C(t) {
      var e;return t && t.state ? (e = t.state.status) !== ft && e !== ht && e !== ct && e !== $t && e !== pt && e !== gt && e !== mt ? r(t, z) : (t.state = null, e === gt ? r(t, Z) : D) : z;
    }function A(t, e) {
      var n,
          r,
          i,
          o,
          d,
          s,
          u,
          l,
          f = e.length;if (!t || !t.state) return z;if (n = t.state, 2 === (o = n.wrap) || 1 === o && n.status !== ft || n.lookahead) return z;for (1 === o && (t.adler = I(t.adler, e, f, 0)), n.wrap = 0, f >= n.w_size && (0 === o && (a(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), l = new T.Buf8(n.w_size), T.arraySet(l, e, f - n.w_size, n.w_size, 0), e = l, f = n.w_size), d = t.avail_in, s = t.next_in, u = t.input, t.avail_in = f, t.next_in = 0, t.input = e, h(n); n.lookahead >= dt;) {
        r = n.strstart, i = n.lookahead - (dt - 1);do {
          n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + dt - 1]) & n.hash_mask, n.prev[r & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = r, r++;
        } while (--i);n.strstart = r, n.lookahead = dt - 1, h(n);
      }return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = dt - 1, n.match_available = 0, t.next_in = s, t.input = u, t.avail_in = d, n.wrap = o, D;
    }var R,
        T = n(18),
        O = n(94),
        I = n(43),
        N = n(44),
        L = n(95),
        M = 0,
        P = 1,
        B = 3,
        j = 4,
        F = 5,
        D = 0,
        U = 1,
        z = -2,
        Z = -3,
        G = -5,
        H = -1,
        q = 1,
        Y = 2,
        W = 3,
        K = 4,
        V = 0,
        X = 2,
        J = 8,
        Q = 9,
        tt = 15,
        et = 8,
        nt = 286,
        rt = 30,
        it = 19,
        at = 2 * nt + 1,
        ot = 15,
        dt = 3,
        st = 258,
        ut = st + dt + 1,
        lt = 32,
        ft = 42,
        ht = 69,
        ct = 73,
        $t = 91,
        pt = 103,
        gt = 113,
        mt = 666,
        _t = 1,
        yt = 2,
        vt = 3,
        bt = 4,
        wt = 3;R = [new _(0, 0, 0, 0, c), new _(4, 4, 8, 4, $), new _(4, 5, 16, 8, $), new _(4, 6, 32, 32, $), new _(4, 4, 16, 16, p), new _(8, 16, 32, 32, p), new _(8, 16, 128, 128, p), new _(8, 32, 128, 256, p), new _(32, 128, 258, 1024, p), new _(32, 258, 258, 4096, p)], e.deflateInit = k, e.deflateInit2 = x, e.deflateReset = w, e.deflateResetKeep = b, e.deflateSetHeader = E, e.deflate = S, e.deflateEnd = C, e.deflateSetDictionary = A, e.deflateInfo = "pako deflate (from Nodeca project)";
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      for (var e = t.length; --e >= 0;) {
        t[e] = 0;
      }
    }function i(t, e, n, r, i) {
      this.static_tree = t, this.extra_bits = e, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = t && t.length;
    }function a(t, e) {
      this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
    }function o(t) {
      return t < 256 ? at[t] : at[256 + (t >>> 7)];
    }function d(t, e) {
      t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
    }function s(t, e, n) {
      t.bi_valid > Y - n ? (t.bi_buf |= e << t.bi_valid & 65535, d(t, t.bi_buf), t.bi_buf = e >> Y - t.bi_valid, t.bi_valid += n - Y) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += n);
    }function u(t, e, n) {
      s(t, n[2 * e], n[2 * e + 1]);
    }function l(t, e) {
      var n = 0;do {
        n |= 1 & t, t >>>= 1, n <<= 1;
      } while (--e > 0);return n >>> 1;
    }function f(t) {
      16 === t.bi_valid ? (d(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
    }function h(t, e) {
      var n,
          r,
          i,
          a,
          o,
          d,
          s = e.dyn_tree,
          u = e.max_code,
          l = e.stat_desc.static_tree,
          f = e.stat_desc.has_stree,
          h = e.stat_desc.extra_bits,
          c = e.stat_desc.extra_base,
          $ = e.stat_desc.max_length,
          p = 0;for (a = 0; a <= q; a++) {
        t.bl_count[a] = 0;
      }for (s[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1; n < H; n++) {
        r = t.heap[n], a = s[2 * s[2 * r + 1] + 1] + 1, a > $ && (a = $, p++), s[2 * r + 1] = a, r > u || (t.bl_count[a]++, o = 0, r >= c && (o = h[r - c]), d = s[2 * r], t.opt_len += d * (a + o), f && (t.static_len += d * (l[2 * r + 1] + o)));
      }if (0 !== p) {
        do {
          for (a = $ - 1; 0 === t.bl_count[a];) {
            a--;
          }t.bl_count[a]--, t.bl_count[a + 1] += 2, t.bl_count[$]--, p -= 2;
        } while (p > 0);for (a = $; 0 !== a; a--) {
          for (r = t.bl_count[a]; 0 !== r;) {
            (i = t.heap[--n]) > u || (s[2 * i + 1] !== a && (t.opt_len += (a - s[2 * i + 1]) * s[2 * i], s[2 * i + 1] = a), r--);
          }
        }
      }
    }function c(t, e, n) {
      var r,
          i,
          a = new Array(q + 1),
          o = 0;for (r = 1; r <= q; r++) {
        a[r] = o = o + n[r - 1] << 1;
      }for (i = 0; i <= e; i++) {
        var d = t[2 * i + 1];0 !== d && (t[2 * i] = l(a[d]++, d));
      }
    }function $() {
      var t,
          e,
          n,
          r,
          a,
          o = new Array(q + 1);for (n = 0, r = 0; r < D - 1; r++) {
        for (dt[r] = n, t = 0; t < 1 << Q[r]; t++) {
          ot[n++] = r;
        }
      }for (ot[n - 1] = r, a = 0, r = 0; r < 16; r++) {
        for (st[r] = a, t = 0; t < 1 << tt[r]; t++) {
          at[a++] = r;
        }
      }for (a >>= 7; r < Z; r++) {
        for (st[r] = a << 7, t = 0; t < 1 << tt[r] - 7; t++) {
          at[256 + a++] = r;
        }
      }for (e = 0; e <= q; e++) {
        o[e] = 0;
      }for (t = 0; t <= 143;) {
        rt[2 * t + 1] = 8, t++, o[8]++;
      }for (; t <= 255;) {
        rt[2 * t + 1] = 9, t++, o[9]++;
      }for (; t <= 279;) {
        rt[2 * t + 1] = 7, t++, o[7]++;
      }for (; t <= 287;) {
        rt[2 * t + 1] = 8, t++, o[8]++;
      }for (c(rt, z + 1, o), t = 0; t < Z; t++) {
        it[2 * t + 1] = 5, it[2 * t] = l(t, 5);
      }ut = new i(rt, Q, U + 1, z, q), lt = new i(it, tt, 0, Z, q), ft = new i(new Array(0), et, 0, G, W);
    }function p(t) {
      var e;for (e = 0; e < z; e++) {
        t.dyn_ltree[2 * e] = 0;
      }for (e = 0; e < Z; e++) {
        t.dyn_dtree[2 * e] = 0;
      }for (e = 0; e < G; e++) {
        t.bl_tree[2 * e] = 0;
      }t.dyn_ltree[2 * K] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0;
    }function g(t) {
      t.bi_valid > 8 ? d(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
    }function m(t, e, n, r) {
      g(t), r && (d(t, n), d(t, ~n)), I.arraySet(t.pending_buf, t.window, e, n, t.pending), t.pending += n;
    }function _(t, e, n, r) {
      var i = 2 * e,
          a = 2 * n;return t[i] < t[a] || t[i] === t[a] && r[e] <= r[n];
    }function y(t, e, n) {
      for (var r = t.heap[n], i = n << 1; i <= t.heap_len && (i < t.heap_len && _(e, t.heap[i + 1], t.heap[i], t.depth) && i++, !_(e, r, t.heap[i], t.depth));) {
        t.heap[n] = t.heap[i], n = i, i <<= 1;
      }t.heap[n] = r;
    }function v(t, e, n) {
      var r,
          i,
          a,
          d,
          l = 0;if (0 !== t.last_lit) do {
        r = t.pending_buf[t.d_buf + 2 * l] << 8 | t.pending_buf[t.d_buf + 2 * l + 1], i = t.pending_buf[t.l_buf + l], l++, 0 === r ? u(t, i, e) : (a = ot[i], u(t, a + U + 1, e), d = Q[a], 0 !== d && (i -= dt[a], s(t, i, d)), r--, a = o(r), u(t, a, n), 0 !== (d = tt[a]) && (r -= st[a], s(t, r, d)));
      } while (l < t.last_lit);u(t, K, e);
    }function b(t, e) {
      var n,
          r,
          i,
          a = e.dyn_tree,
          o = e.stat_desc.static_tree,
          d = e.stat_desc.has_stree,
          s = e.stat_desc.elems,
          u = -1;for (t.heap_len = 0, t.heap_max = H, n = 0; n < s; n++) {
        0 !== a[2 * n] ? (t.heap[++t.heap_len] = u = n, t.depth[n] = 0) : a[2 * n + 1] = 0;
      }for (; t.heap_len < 2;) {
        i = t.heap[++t.heap_len] = u < 2 ? ++u : 0, a[2 * i] = 1, t.depth[i] = 0, t.opt_len--, d && (t.static_len -= o[2 * i + 1]);
      }for (e.max_code = u, n = t.heap_len >> 1; n >= 1; n--) {
        y(t, a, n);
      }i = s;do {
        n = t.heap[1], t.heap[1] = t.heap[t.heap_len--], y(t, a, 1), r = t.heap[1], t.heap[--t.heap_max] = n, t.heap[--t.heap_max] = r, a[2 * i] = a[2 * n] + a[2 * r], t.depth[i] = (t.depth[n] >= t.depth[r] ? t.depth[n] : t.depth[r]) + 1, a[2 * n + 1] = a[2 * r + 1] = i, t.heap[1] = i++, y(t, a, 1);
      } while (t.heap_len >= 2);t.heap[--t.heap_max] = t.heap[1], h(t, e), c(a, u, t.bl_count);
    }function w(t, e, n) {
      var r,
          i,
          a = -1,
          o = e[1],
          d = 0,
          s = 7,
          u = 4;for (0 === o && (s = 138, u = 3), e[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) {
        i = o, o = e[2 * (r + 1) + 1], ++d < s && i === o || (d < u ? t.bl_tree[2 * i] += d : 0 !== i ? (i !== a && t.bl_tree[2 * i]++, t.bl_tree[2 * V]++) : d <= 10 ? t.bl_tree[2 * X]++ : t.bl_tree[2 * J]++, d = 0, a = i, 0 === o ? (s = 138, u = 3) : i === o ? (s = 6, u = 3) : (s = 7, u = 4));
      }
    }function E(t, e, n) {
      var r,
          i,
          a = -1,
          o = e[1],
          d = 0,
          l = 7,
          f = 4;for (0 === o && (l = 138, f = 3), r = 0; r <= n; r++) {
        if (i = o, o = e[2 * (r + 1) + 1], !(++d < l && i === o)) {
          if (d < f) do {
            u(t, i, t.bl_tree);
          } while (0 != --d);else 0 !== i ? (i !== a && (u(t, i, t.bl_tree), d--), u(t, V, t.bl_tree), s(t, d - 3, 2)) : d <= 10 ? (u(t, X, t.bl_tree), s(t, d - 3, 3)) : (u(t, J, t.bl_tree), s(t, d - 11, 7));d = 0, a = i, 0 === o ? (l = 138, f = 3) : i === o ? (l = 6, f = 3) : (l = 7, f = 4);
        }
      }
    }function x(t) {
      var e;for (w(t, t.dyn_ltree, t.l_desc.max_code), w(t, t.dyn_dtree, t.d_desc.max_code), b(t, t.bl_desc), e = G - 1; e >= 3 && 0 === t.bl_tree[2 * nt[e] + 1]; e--) {}return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
    }function k(t, e, n, r) {
      var i;for (s(t, e - 257, 5), s(t, n - 1, 5), s(t, r - 4, 4), i = 0; i < r; i++) {
        s(t, t.bl_tree[2 * nt[i] + 1], 3);
      }E(t, t.dyn_ltree, e - 1), E(t, t.dyn_dtree, n - 1);
    }function S(t) {
      var e,
          n = 4093624447;for (e = 0; e <= 31; e++, n >>>= 1) {
        if (1 & n && 0 !== t.dyn_ltree[2 * e]) return L;
      }if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return M;for (e = 32; e < U; e++) {
        if (0 !== t.dyn_ltree[2 * e]) return M;
      }return L;
    }function C(t) {
      ht || ($(), ht = !0), t.l_desc = new a(t.dyn_ltree, ut), t.d_desc = new a(t.dyn_dtree, lt), t.bl_desc = new a(t.bl_tree, ft), t.bi_buf = 0, t.bi_valid = 0, p(t);
    }function A(t, e, n, r) {
      s(t, (B << 1) + (r ? 1 : 0), 3), m(t, e, n, !0);
    }function R(t) {
      s(t, j << 1, 3), u(t, K, rt), f(t);
    }function T(t, e, n, r) {
      var i,
          a,
          o = 0;t.level > 0 ? (t.strm.data_type === P && (t.strm.data_type = S(t)), b(t, t.l_desc), b(t, t.d_desc), o = x(t), i = t.opt_len + 3 + 7 >>> 3, (a = t.static_len + 3 + 7 >>> 3) <= i && (i = a)) : i = a = n + 5, n + 4 <= i && -1 !== e ? A(t, e, n, r) : t.strategy === N || a === i ? (s(t, (j << 1) + (r ? 1 : 0), 3), v(t, rt, it)) : (s(t, (F << 1) + (r ? 1 : 0), 3), k(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1), v(t, t.dyn_ltree, t.dyn_dtree)), p(t), r && g(t);
    }function O(t, e, n) {
      return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & n, t.last_lit++, 0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++, e--, t.dyn_ltree[2 * (ot[n] + U + 1)]++, t.dyn_dtree[2 * o(e)]++), t.last_lit === t.lit_bufsize - 1;
    }var I = n(18),
        N = 4,
        L = 0,
        M = 1,
        P = 2,
        B = 0,
        j = 1,
        F = 2,
        D = 29,
        U = 256,
        z = U + 1 + D,
        Z = 30,
        G = 19,
        H = 2 * z + 1,
        q = 15,
        Y = 16,
        W = 7,
        K = 256,
        V = 16,
        X = 17,
        J = 18,
        Q = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        tt = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        et = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        nt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        rt = new Array(2 * (z + 2));r(rt);var it = new Array(2 * Z);r(it);var at = new Array(512);r(at);var ot = new Array(256);r(ot);var dt = new Array(D);r(dt);var st = new Array(Z);r(st);var ut,
        lt,
        ft,
        ht = !1;e._tr_init = C, e._tr_stored_block = A, e._tr_flush_block = T, e._tr_tally = O, e._tr_align = R;
  }, function (t, e, n) {
    "use strict";
    t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
    }function i() {
      this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new _.Buf16(320), this.work = new _.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
    }function a(t) {
      var e;return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = B, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new _.Buf32(pt), e.distcode = e.distdyn = new _.Buf32(gt), e.sane = 1, e.back = -1, R) : I;
    }function o(t) {
      var e;return t && t.state ? (e = t.state, e.wsize = 0, e.whave = 0, e.wnext = 0, a(t)) : I;
    }function d(t, e) {
      var n, r;return t && t.state ? (r = t.state, e < 0 ? (n = 0, e = -e) : (n = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? I : (null !== r.window && r.wbits !== e && (r.window = null), r.wrap = n, r.wbits = e, o(t))) : I;
    }function s(t, e) {
      var n, r;return t ? (r = new i(), t.state = r, r.window = null, n = d(t, e), n !== R && (t.state = null), n) : I;
    }function u(t) {
      return s(t, mt);
    }function l(t) {
      if (_t) {
        var e;for (g = new _.Buf32(512), m = new _.Buf32(32), e = 0; e < 144;) {
          t.lens[e++] = 8;
        }for (; e < 256;) {
          t.lens[e++] = 9;
        }for (; e < 280;) {
          t.lens[e++] = 7;
        }for (; e < 288;) {
          t.lens[e++] = 8;
        }for (w(x, t.lens, 0, 288, g, 0, t.work, { bits: 9 }), e = 0; e < 32;) {
          t.lens[e++] = 5;
        }w(k, t.lens, 0, 32, m, 0, t.work, { bits: 5 }), _t = !1;
      }t.lencode = g, t.lenbits = 9, t.distcode = m, t.distbits = 5;
    }function f(t, e, n, r) {
      var i,
          a = t.state;return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new _.Buf8(a.wsize)), r >= a.wsize ? (_.arraySet(a.window, e, n - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : (i = a.wsize - a.wnext, i > r && (i = r), _.arraySet(a.window, e, n - r, i, a.wnext), r -= i, r ? (_.arraySet(a.window, e, n - r, r, 0), a.wnext = r, a.whave = a.wsize) : (a.wnext += i, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += i))), 0;
    }function h(t, e) {
      var n,
          i,
          a,
          o,
          d,
          s,
          u,
          h,
          c,
          $,
          p,
          g,
          m,
          pt,
          gt,
          mt,
          _t,
          yt,
          vt,
          bt,
          wt,
          Et,
          xt,
          kt,
          St = 0,
          Ct = new _.Buf8(4),
          At = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return I;n = t.state, n.mode === W && (n.mode = K), d = t.next_out, a = t.output, u = t.avail_out, o = t.next_in, i = t.input, s = t.avail_in, h = n.hold, c = n.bits, $ = s, p = u, Et = R;t: for (;;) {
        switch (n.mode) {case B:
            if (0 === n.wrap) {
              n.mode = K;break;
            }for (; c < 16;) {
              if (0 === s) break t;s--, h += i[o++] << c, c += 8;
            }if (2 & n.wrap && 35615 === h) {
              n.check = 0, Ct[0] = 255 & h, Ct[1] = h >>> 8 & 255, n.check = v(n.check, Ct, 2, 0), h = 0, c = 0, n.mode = j;break;
            }if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) {
              t.msg = "incorrect header check", n.mode = ht;break;
            }if ((15 & h) !== P) {
              t.msg = "unknown compression method", n.mode = ht;break;
            }if (h >>>= 4, c -= 4, wt = 8 + (15 & h), 0 === n.wbits) n.wbits = wt;else if (wt > n.wbits) {
              t.msg = "invalid window size", n.mode = ht;break;
            }n.dmax = 1 << wt, t.adler = n.check = 1, n.mode = 512 & h ? q : W, h = 0, c = 0;break;case j:
            for (; c < 16;) {
              if (0 === s) break t;s--, h += i[o++] << c, c += 8;
            }if (n.flags = h, (255 & n.flags) !== P) {
              t.msg = "unknown compression method", n.mode = ht;break;
            }if (57344 & n.flags) {
              t.msg = "unknown header flags set", n.mode = ht;break;
            }n.head && (n.head.text = h >> 8 & 1), 512 & n.flags && (Ct[0] = 255 & h, Ct[1] = h >>> 8 & 255, n.check = v(n.check, Ct, 2, 0)), h = 0, c = 0, n.mode = F;case F:
            for (; c < 32;) {
              if (0 === s) break t;s--, h += i[o++] << c, c += 8;
            }n.head && (n.head.time = h), 512 & n.flags && (Ct[0] = 255 & h, Ct[1] = h >>> 8 & 255, Ct[2] = h >>> 16 & 255, Ct[3] = h >>> 24 & 255, n.check = v(n.check, Ct, 4, 0)), h = 0, c = 0, n.mode = D;case D:
            for (; c < 16;) {
              if (0 === s) break t;s--, h += i[o++] << c, c += 8;
            }n.head && (n.head.xflags = 255 & h, n.head.os = h >> 8), 512 & n.flags && (Ct[0] = 255 & h, Ct[1] = h >>> 8 & 255, n.check = v(n.check, Ct, 2, 0)), h = 0, c = 0, n.mode = U;case U:
            if (1024 & n.flags) {
              for (; c < 16;) {
                if (0 === s) break t;s--, h += i[o++] << c, c += 8;
              }n.length = h, n.head && (n.head.extra_len = h), 512 & n.flags && (Ct[0] = 255 & h, Ct[1] = h >>> 8 & 255, n.check = v(n.check, Ct, 2, 0)), h = 0, c = 0;
            } else n.head && (n.head.extra = null);n.mode = z;case z:
            if (1024 & n.flags && (g = n.length, g > s && (g = s), g && (n.head && (wt = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), _.arraySet(n.head.extra, i, o, g, wt)), 512 & n.flags && (n.check = v(n.check, i, g, o)), s -= g, o += g, n.length -= g), n.length)) break t;n.length = 0, n.mode = Z;case Z:
            if (2048 & n.flags) {
              if (0 === s) break t;g = 0;do {
                wt = i[o + g++], n.head && wt && n.length < 65536 && (n.head.name += String.fromCharCode(wt));
              } while (wt && g < s);if (512 & n.flags && (n.check = v(n.check, i, g, o)), s -= g, o += g, wt) break t;
            } else n.head && (n.head.name = null);n.length = 0, n.mode = G;case G:
            if (4096 & n.flags) {
              if (0 === s) break t;g = 0;do {
                wt = i[o + g++], n.head && wt && n.length < 65536 && (n.head.comment += String.fromCharCode(wt));
              } while (wt && g < s);if (512 & n.flags && (n.check = v(n.check, i, g, o)), s -= g, o += g, wt) break t;
            } else n.head && (n.head.comment = null);n.mode = H;case H:
            if (512 & n.flags) {
              for (; c < 16;) {
                if (0 === s) break t;s--, h += i[o++] << c, c += 8;
              }if (h !== (65535 & n.check)) {
                t.msg = "header crc mismatch", n.mode = ht;break;
              }h = 0, c = 0;
            }n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), t.adler = n.check = 0, n.mode = W;break;case q:
            for (; c < 32;) {
              if (0 === s) break t;s--, h += i[o++] << c, c += 8;
            }t.adler = n.check = r(h), h = 0, c = 0, n.mode = Y;case Y:
            if (0 === n.havedict) return t.next_out = d, t.avail_out = u, t.next_in = o, t.avail_in = s, n.hold = h, n.bits = c, O;t.adler = n.check = 1, n.mode = W;case W:
            if (e === C || e === A) break t;case K:
            if (n.last) {
              h >>>= 7 & c, c -= 7 & c, n.mode = ut;break;
            }for (; c < 3;) {
              if (0 === s) break t;s--, h += i[o++] << c, c += 8;
            }switch (n.last = 1 & h, h >>>= 1, c -= 1, 3 & h) {case 0:
                n.mode = V;break;case 1:
                if (l(n), n.mode = nt, e === A) {
                  h >>>= 2, c -= 2;break t;
                }break;case 2:
                n.mode = Q;break;case 3:
                t.msg = "invalid block type", n.mode = ht;}h >>>= 2, c -= 2;break;case V:
            for (h >>>= 7 & c, c -= 7 & c; c < 32;) {
              if (0 === s) break t;s--, h += i[o++] << c, c += 8;
            }if ((65535 & h) != (h >>> 16 ^ 65535)) {
              t.msg = "invalid stored block lengths", n.mode = ht;break;
            }if (n.length = 65535 & h, h = 0, c = 0, n.mode = X, e === A) break t;case X:
            n.mode = J;case J:
            if (g = n.length) {
              if (g > s && (g = s), g > u && (g = u), 0 === g) break t;_.arraySet(a, i, o, g, d), s -= g, o += g, u -= g, d += g, n.length -= g;break;
            }n.mode = W;break;case Q:
            for (; c < 14;) {
              if (0 === s) break t;s--, h += i[o++] << c, c += 8;
            }if (n.nlen = 257 + (31 & h), h >>>= 5, c -= 5, n.ndist = 1 + (31 & h), h >>>= 5, c -= 5, n.ncode = 4 + (15 & h), h >>>= 4, c -= 4, n.nlen > 286 || n.ndist > 30) {
              t.msg = "too many length or distance symbols", n.mode = ht;break;
            }n.have = 0, n.mode = tt;case tt:
            for (; n.have < n.ncode;) {
              for (; c < 3;) {
                if (0 === s) break t;s--, h += i[o++] << c, c += 8;
              }n.lens[At[n.have++]] = 7 & h, h >>>= 3, c -= 3;
            }for (; n.have < 19;) {
              n.lens[At[n.have++]] = 0;
            }if (n.lencode = n.lendyn, n.lenbits = 7, xt = { bits: n.lenbits }, Et = w(E, n.lens, 0, 19, n.lencode, 0, n.work, xt), n.lenbits = xt.bits, Et) {
              t.msg = "invalid code lengths set", n.mode = ht;break;
            }n.have = 0, n.mode = et;case et:
            for (; n.have < n.nlen + n.ndist;) {
              for (; St = n.lencode[h & (1 << n.lenbits) - 1], gt = St >>> 24, mt = St >>> 16 & 255, _t = 65535 & St, !(gt <= c);) {
                if (0 === s) break t;s--, h += i[o++] << c, c += 8;
              }if (_t < 16) h >>>= gt, c -= gt, n.lens[n.have++] = _t;else {
                if (16 === _t) {
                  for (kt = gt + 2; c < kt;) {
                    if (0 === s) break t;s--, h += i[o++] << c, c += 8;
                  }if (h >>>= gt, c -= gt, 0 === n.have) {
                    t.msg = "invalid bit length repeat", n.mode = ht;break;
                  }wt = n.lens[n.have - 1], g = 3 + (3 & h), h >>>= 2, c -= 2;
                } else if (17 === _t) {
                  for (kt = gt + 3; c < kt;) {
                    if (0 === s) break t;s--, h += i[o++] << c, c += 8;
                  }h >>>= gt, c -= gt, wt = 0, g = 3 + (7 & h), h >>>= 3, c -= 3;
                } else {
                  for (kt = gt + 7; c < kt;) {
                    if (0 === s) break t;s--, h += i[o++] << c, c += 8;
                  }h >>>= gt, c -= gt, wt = 0, g = 11 + (127 & h), h >>>= 7, c -= 7;
                }if (n.have + g > n.nlen + n.ndist) {
                  t.msg = "invalid bit length repeat", n.mode = ht;break;
                }for (; g--;) {
                  n.lens[n.have++] = wt;
                }
              }
            }if (n.mode === ht) break;if (0 === n.lens[256]) {
              t.msg = "invalid code -- missing end-of-block", n.mode = ht;break;
            }if (n.lenbits = 9, xt = { bits: n.lenbits }, Et = w(x, n.lens, 0, n.nlen, n.lencode, 0, n.work, xt), n.lenbits = xt.bits, Et) {
              t.msg = "invalid literal/lengths set", n.mode = ht;break;
            }if (n.distbits = 6, n.distcode = n.distdyn, xt = { bits: n.distbits }, Et = w(k, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, xt), n.distbits = xt.bits, Et) {
              t.msg = "invalid distances set", n.mode = ht;break;
            }if (n.mode = nt, e === A) break t;case nt:
            n.mode = rt;case rt:
            if (s >= 6 && u >= 258) {
              t.next_out = d, t.avail_out = u, t.next_in = o, t.avail_in = s, n.hold = h, n.bits = c, b(t, p), d = t.next_out, a = t.output, u = t.avail_out, o = t.next_in, i = t.input, s = t.avail_in, h = n.hold, c = n.bits, n.mode === W && (n.back = -1);break;
            }for (n.back = 0; St = n.lencode[h & (1 << n.lenbits) - 1], gt = St >>> 24, mt = St >>> 16 & 255, _t = 65535 & St, !(gt <= c);) {
              if (0 === s) break t;s--, h += i[o++] << c, c += 8;
            }if (mt && 0 == (240 & mt)) {
              for (yt = gt, vt = mt, bt = _t; St = n.lencode[bt + ((h & (1 << yt + vt) - 1) >> yt)], gt = St >>> 24, mt = St >>> 16 & 255, _t = 65535 & St, !(yt + gt <= c);) {
                if (0 === s) break t;s--, h += i[o++] << c, c += 8;
              }h >>>= yt, c -= yt, n.back += yt;
            }if (h >>>= gt, c -= gt, n.back += gt, n.length = _t, 0 === mt) {
              n.mode = st;break;
            }if (32 & mt) {
              n.back = -1, n.mode = W;break;
            }if (64 & mt) {
              t.msg = "invalid literal/length code", n.mode = ht;break;
            }n.extra = 15 & mt, n.mode = it;case it:
            if (n.extra) {
              for (kt = n.extra; c < kt;) {
                if (0 === s) break t;s--, h += i[o++] << c, c += 8;
              }n.length += h & (1 << n.extra) - 1, h >>>= n.extra, c -= n.extra, n.back += n.extra;
            }n.was = n.length, n.mode = at;case at:
            for (; St = n.distcode[h & (1 << n.distbits) - 1], gt = St >>> 24, mt = St >>> 16 & 255, _t = 65535 & St, !(gt <= c);) {
              if (0 === s) break t;s--, h += i[o++] << c, c += 8;
            }if (0 == (240 & mt)) {
              for (yt = gt, vt = mt, bt = _t; St = n.distcode[bt + ((h & (1 << yt + vt) - 1) >> yt)], gt = St >>> 24, mt = St >>> 16 & 255, _t = 65535 & St, !(yt + gt <= c);) {
                if (0 === s) break t;s--, h += i[o++] << c, c += 8;
              }h >>>= yt, c -= yt, n.back += yt;
            }if (h >>>= gt, c -= gt, n.back += gt, 64 & mt) {
              t.msg = "invalid distance code", n.mode = ht;break;
            }n.offset = _t, n.extra = 15 & mt, n.mode = ot;case ot:
            if (n.extra) {
              for (kt = n.extra; c < kt;) {
                if (0 === s) break t;s--, h += i[o++] << c, c += 8;
              }n.offset += h & (1 << n.extra) - 1, h >>>= n.extra, c -= n.extra, n.back += n.extra;
            }if (n.offset > n.dmax) {
              t.msg = "invalid distance too far back", n.mode = ht;break;
            }n.mode = dt;case dt:
            if (0 === u) break t;if (g = p - u, n.offset > g) {
              if ((g = n.offset - g) > n.whave && n.sane) {
                t.msg = "invalid distance too far back", n.mode = ht;break;
              }g > n.wnext ? (g -= n.wnext, m = n.wsize - g) : m = n.wnext - g, g > n.length && (g = n.length), pt = n.window;
            } else pt = a, m = d - n.offset, g = n.length;g > u && (g = u), u -= g, n.length -= g;do {
              a[d++] = pt[m++];
            } while (--g);0 === n.length && (n.mode = rt);break;case st:
            if (0 === u) break t;a[d++] = n.length, u--, n.mode = rt;break;case ut:
            if (n.wrap) {
              for (; c < 32;) {
                if (0 === s) break t;s--, h |= i[o++] << c, c += 8;
              }if (p -= u, t.total_out += p, n.total += p, p && (t.adler = n.check = n.flags ? v(n.check, a, p, d - p) : y(n.check, a, p, d - p)), p = u, (n.flags ? h : r(h)) !== n.check) {
                t.msg = "incorrect data check", n.mode = ht;break;
              }h = 0, c = 0;
            }n.mode = lt;case lt:
            if (n.wrap && n.flags) {
              for (; c < 32;) {
                if (0 === s) break t;s--, h += i[o++] << c, c += 8;
              }if (h !== (4294967295 & n.total)) {
                t.msg = "incorrect length check", n.mode = ht;break;
              }h = 0, c = 0;
            }n.mode = ft;case ft:
            Et = T;break t;case ht:
            Et = N;break t;case ct:
            return L;case $t:default:
            return I;}
      }return t.next_out = d, t.avail_out = u, t.next_in = o, t.avail_in = s, n.hold = h, n.bits = c, (n.wsize || p !== t.avail_out && n.mode < ht && (n.mode < ut || e !== S)) && f(t, t.output, t.next_out, p - t.avail_out) ? (n.mode = ct, L) : ($ -= t.avail_in, p -= t.avail_out, t.total_in += $, t.total_out += p, n.total += p, n.wrap && p && (t.adler = n.check = n.flags ? v(n.check, a, p, t.next_out - p) : y(n.check, a, p, t.next_out - p)), t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === W ? 128 : 0) + (n.mode === nt || n.mode === X ? 256 : 0), (0 === $ && 0 === p || e === S) && Et === R && (Et = M), Et);
    }function c(t) {
      if (!t || !t.state) return I;var e = t.state;return e.window && (e.window = null), t.state = null, R;
    }function $(t, e) {
      var n;return t && t.state ? (n = t.state, 0 == (2 & n.wrap) ? I : (n.head = e, e.done = !1, R)) : I;
    }function p(t, e) {
      var n,
          r,
          i = e.length;return t && t.state ? (n = t.state, 0 !== n.wrap && n.mode !== Y ? I : n.mode === Y && (r = 1, (r = y(r, e, i, 0)) !== n.check) ? N : f(t, e, i, i) ? (n.mode = ct, L) : (n.havedict = 1, R)) : I;
    }var g,
        m,
        _ = n(18),
        y = n(43),
        v = n(44),
        b = n(97),
        w = n(98),
        E = 0,
        x = 1,
        k = 2,
        S = 4,
        C = 5,
        A = 6,
        R = 0,
        T = 1,
        O = 2,
        I = -2,
        N = -3,
        L = -4,
        M = -5,
        P = 8,
        B = 1,
        j = 2,
        F = 3,
        D = 4,
        U = 5,
        z = 6,
        Z = 7,
        G = 8,
        H = 9,
        q = 10,
        Y = 11,
        W = 12,
        K = 13,
        V = 14,
        X = 15,
        J = 16,
        Q = 17,
        tt = 18,
        et = 19,
        nt = 20,
        rt = 21,
        it = 22,
        at = 23,
        ot = 24,
        dt = 25,
        st = 26,
        ut = 27,
        lt = 28,
        ft = 29,
        ht = 30,
        ct = 31,
        $t = 32,
        pt = 852,
        gt = 592,
        mt = 15,
        _t = !0;e.inflateReset = o, e.inflateReset2 = d, e.inflateResetKeep = a, e.inflateInit = u, e.inflateInit2 = s, e.inflate = h, e.inflateEnd = c, e.inflateGetHeader = $, e.inflateSetDictionary = p, e.inflateInfo = "pako inflate (from Nodeca project)";
  }, function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
      var n, r, i, a, o, d, s, u, l, f, h, c, $, p, g, m, _, y, v, b, w, E, x, k, S;n = t.state, r = t.next_in, k = t.input, i = r + (t.avail_in - 5), a = t.next_out, S = t.output, o = a - (e - t.avail_out), d = a + (t.avail_out - 257), s = n.dmax, u = n.wsize, l = n.whave, f = n.wnext, h = n.window, c = n.hold, $ = n.bits, p = n.lencode, g = n.distcode, m = (1 << n.lenbits) - 1, _ = (1 << n.distbits) - 1;t: do {
        $ < 15 && (c += k[r++] << $, $ += 8, c += k[r++] << $, $ += 8), y = p[c & m];e: for (;;) {
          if (v = y >>> 24, c >>>= v, $ -= v, 0 === (v = y >>> 16 & 255)) S[a++] = 65535 & y;else {
            if (!(16 & v)) {
              if (0 == (64 & v)) {
                y = p[(65535 & y) + (c & (1 << v) - 1)];continue e;
              }if (32 & v) {
                n.mode = 12;break t;
              }t.msg = "invalid literal/length code", n.mode = 30;break t;
            }b = 65535 & y, v &= 15, v && ($ < v && (c += k[r++] << $, $ += 8), b += c & (1 << v) - 1, c >>>= v, $ -= v), $ < 15 && (c += k[r++] << $, $ += 8, c += k[r++] << $, $ += 8), y = g[c & _];n: for (;;) {
              if (v = y >>> 24, c >>>= v, $ -= v, !(16 & (v = y >>> 16 & 255))) {
                if (0 == (64 & v)) {
                  y = g[(65535 & y) + (c & (1 << v) - 1)];continue n;
                }t.msg = "invalid distance code", n.mode = 30;break t;
              }if (w = 65535 & y, v &= 15, $ < v && (c += k[r++] << $, ($ += 8) < v && (c += k[r++] << $, $ += 8)), (w += c & (1 << v) - 1) > s) {
                t.msg = "invalid distance too far back", n.mode = 30;break t;
              }if (c >>>= v, $ -= v, v = a - o, w > v) {
                if ((v = w - v) > l && n.sane) {
                  t.msg = "invalid distance too far back", n.mode = 30;break t;
                }if (E = 0, x = h, 0 === f) {
                  if (E += u - v, v < b) {
                    b -= v;do {
                      S[a++] = h[E++];
                    } while (--v);E = a - w, x = S;
                  }
                } else if (f < v) {
                  if (E += u + f - v, (v -= f) < b) {
                    b -= v;do {
                      S[a++] = h[E++];
                    } while (--v);if (E = 0, f < b) {
                      v = f, b -= v;do {
                        S[a++] = h[E++];
                      } while (--v);E = a - w, x = S;
                    }
                  }
                } else if (E += f - v, v < b) {
                  b -= v;do {
                    S[a++] = h[E++];
                  } while (--v);E = a - w, x = S;
                }for (; b > 2;) {
                  S[a++] = x[E++], S[a++] = x[E++], S[a++] = x[E++], b -= 3;
                }b && (S[a++] = x[E++], b > 1 && (S[a++] = x[E++]));
              } else {
                E = a - w;do {
                  S[a++] = S[E++], S[a++] = S[E++], S[a++] = S[E++], b -= 3;
                } while (b > 2);b && (S[a++] = S[E++], b > 1 && (S[a++] = S[E++]));
              }break;
            }
          }break;
        }
      } while (r < i && a < d);b = $ >> 3, r -= b, $ -= b << 3, c &= (1 << $) - 1, t.next_in = r, t.next_out = a, t.avail_in = r < i ? i - r + 5 : 5 - (r - i), t.avail_out = a < d ? d - a + 257 : 257 - (a - d), n.hold = c, n.bits = $;
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(18),
        i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
        o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
        d = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];t.exports = function (t, e, n, s, u, l, f, h) {
      var c,
          $,
          p,
          g,
          m,
          _,
          y,
          v,
          b,
          w = h.bits,
          E = 0,
          x = 0,
          k = 0,
          S = 0,
          C = 0,
          A = 0,
          R = 0,
          T = 0,
          O = 0,
          I = 0,
          N = null,
          L = 0,
          M = new r.Buf16(16),
          P = new r.Buf16(16),
          B = null,
          j = 0;for (E = 0; E <= 15; E++) {
        M[E] = 0;
      }for (x = 0; x < s; x++) {
        M[e[n + x]]++;
      }for (C = w, S = 15; S >= 1 && 0 === M[S]; S--) {}if (C > S && (C = S), 0 === S) return u[l++] = 20971520, u[l++] = 20971520, h.bits = 1, 0;for (k = 1; k < S && 0 === M[k]; k++) {}for (C < k && (C = k), T = 1, E = 1; E <= 15; E++) {
        if (T <<= 1, (T -= M[E]) < 0) return -1;
      }if (T > 0 && (0 === t || 1 !== S)) return -1;for (P[1] = 0, E = 1; E < 15; E++) {
        P[E + 1] = P[E] + M[E];
      }for (x = 0; x < s; x++) {
        0 !== e[n + x] && (f[P[e[n + x]]++] = x);
      }if (0 === t ? (N = B = f, _ = 19) : 1 === t ? (N = i, L -= 257, B = a, j -= 257, _ = 256) : (N = o, B = d, _ = -1), I = 0, x = 0, E = k, m = l, A = C, R = 0, p = -1, O = 1 << C, g = O - 1, 1 === t && O > 852 || 2 === t && O > 592) return 1;for (;;) {
        y = E - R, f[x] < _ ? (v = 0, b = f[x]) : f[x] > _ ? (v = B[j + f[x]], b = N[L + f[x]]) : (v = 96, b = 0), c = 1 << E - R, $ = 1 << A, k = $;do {
          $ -= c, u[m + (I >> R) + $] = y << 24 | v << 16 | b | 0;
        } while (0 !== $);for (c = 1 << E - 1; I & c;) {
          c >>= 1;
        }if (0 !== c ? (I &= c - 1, I += c) : I = 0, x++, 0 == --M[E]) {
          if (E === S) break;E = e[n + f[x]];
        }if (E > C && (I & g) !== p) {
          for (0 === R && (R = C), m += k, A = E - R, T = 1 << A; A + R < S && !((T -= M[A + R]) <= 0);) {
            A++, T <<= 1;
          }if (O += 1 << A, 1 === t && O > 852 || 2 === t && O > 592) return 1;p = I & g, u[p] = C << 24 | A << 16 | m - l | 0;
        }
      }return 0 !== I && (u[m + I] = E - R << 24 | 64 << 16 | 0), h.bits = C, 0;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
  }, function (t, e, n) {
    t.exports = n(101);
  }, function (t, e, n) {
    function r() {}function i(t, e, n) {
      function i() {
        d.parentNode.removeChild(d), window[$] = r;
      }"function" == typeof e && (n = e, e = {}), e || (e = {});var d,
          s,
          u = e.prefix || "__jp",
          l = e.param || "callback",
          f = null != e.timeout ? e.timeout : 6e4,
          h = encodeURIComponent,
          c = document.getElementsByTagName("script")[0] || document.head,
          $ = u + o++;f && (s = setTimeout(function () {
        i(), n && n(new Error("Timeout"));
      }, f)), window[$] = function (t) {
        a("jsonp got", t), s && clearTimeout(s), i(), n && n(null, t);
      }, t += (~t.indexOf("?") ? "&" : "?") + l + "=" + h($), t = t.replace("?&", "?"), a('jsonp req "%s"', t), d = document.createElement("script"), d.src = t, c.parentNode.insertBefore(d, c);
    }var a = n(102)("jsonp");t.exports = i;var o = 0;
  }, function (t, e, n) {
    (function (r) {
      function i() {
        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }function a(t) {
        var n = this.useColors;if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
          var r = "color: " + this.color;t.splice(1, 0, r, "color: inherit");var i = 0,
              a = 0;t[0].replace(/%[a-zA-Z%]/g, function (t) {
            "%%" !== t && (i++, "%c" === t && (a = i));
          }), t.splice(a, 0, r);
        }
      }function o() {
        return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }function d(t) {
        try {
          null == t ? e.storage.removeItem("debug") : e.storage.debug = t;
        } catch (t) {}
      }function s() {
        var t;try {
          t = e.storage.debug;
        } catch (t) {}return !t && void 0 !== r && "env" in r && (t = r.env.DEBUG), t;
      }e = t.exports = n(103), e.log = o, e.formatArgs = a, e.save = d, e.load = s, e.useColors = i, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage;
        } catch (t) {}
      }(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function (t) {
        try {
          return JSON.stringify(t);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      }, e.enable(s());
    }).call(e, n(2));
  }, function (t, e, n) {
    function r(t) {
      var n,
          r = 0;for (n in t) {
        r = (r << 5) - r + t.charCodeAt(n), r |= 0;
      }return e.colors[Math.abs(r) % e.colors.length];
    }function i(t) {
      function n() {
        if (n.enabled) {
          var t = n,
              r = +new Date(),
              i = r - (u || r);t.diff = i, t.prev = u, t.curr = r, u = r;for (var a = new Array(arguments.length), o = 0; o < a.length; o++) {
            a[o] = arguments[o];
          }a[0] = e.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");var d = 0;a[0] = a[0].replace(/%([a-zA-Z%])/g, function (n, r) {
            if ("%%" === n) return n;d++;var i = e.formatters[r];if ("function" == typeof i) {
              var o = a[d];n = i.call(t, o), a.splice(d, 1), d--;
            }return n;
          }), e.formatArgs.call(t, a);(n.log || e.log || console.log.bind(console)).apply(t, a);
        }
      }return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = r(t), "function" == typeof e.init && e.init(n), n;
    }function a(t) {
      e.save(t), e.names = [], e.skips = [];for (var n = ("string" == typeof t ? t : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) {
        n[i] && (t = n[i].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
      }
    }function o() {
      e.enable("");
    }function d(t) {
      var n, r;for (n = 0, r = e.skips.length; n < r; n++) {
        if (e.skips[n].test(t)) return !1;
      }for (n = 0, r = e.names.length; n < r; n++) {
        if (e.names[n].test(t)) return !0;
      }return !1;
    }function s(t) {
      return t instanceof Error ? t.stack || t.message : t;
    }e = t.exports = i.debug = i.default = i, e.coerce = s, e.disable = o, e.enable = a, e.enabled = d, e.humanize = n(104), e.names = [], e.skips = [], e.formatters = {};var u;
  }, function (t, e) {
    function n(t) {
      if (t = String(t), !(t.length > 100)) {
        var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if (e) {
          var n = parseFloat(e[1]);switch ((e[2] || "ms").toLowerCase()) {case "years":case "year":case "yrs":case "yr":case "y":
              return n * l;case "days":case "day":case "d":
              return n * u;case "hours":case "hour":case "hrs":case "hr":case "h":
              return n * s;case "minutes":case "minute":case "mins":case "min":case "m":
              return n * d;case "seconds":case "second":case "secs":case "sec":case "s":
              return n * o;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":
              return n;default:
              return;}
        }
      }
    }function r(t) {
      return t >= u ? Math.round(t / u) + "d" : t >= s ? Math.round(t / s) + "h" : t >= d ? Math.round(t / d) + "m" : t >= o ? Math.round(t / o) + "s" : t + "ms";
    }function i(t) {
      return a(t, u, "day") || a(t, s, "hour") || a(t, d, "minute") || a(t, o, "second") || t + " ms";
    }function a(t, e, n) {
      if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s";
    }var o = 1e3,
        d = 60 * o,
        s = 60 * d,
        u = 24 * s,
        l = 365.25 * u;t.exports = function (t, e) {
      e = e || {};var a = typeof t === "undefined" ? "undefined" : _typeof(t);if ("string" === a && t.length > 0) return n(t);if ("number" === a && !1 === isNaN(t)) return e.long ? i(t) : r(t);throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
  }, function (t, e, n) {
    "use strict";
    var r = function r() {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("div", { class: ["vue-tel-input", t.wrapperClasses, { disabled: t.disabled }] }, [n("div", { directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.clickedOutside, expression: "clickedOutside" }], staticClass: "dropdown", class: { open: t.open }, attrs: { tabindex: "0" }, on: { click: t.toggleDropdown, keydown: [t.keyboardNav, function (e) {
            if (!("button" in e) && t._k(e.keyCode, "esc", 27, e.key)) return null;t.reset(e);
          }] } }, [n("span", { staticClass: "selection" }, [t.enabledFlags ? n("div", { staticClass: "iti-flag", class: t.activeCountry.iso2.toLowerCase() }) : t._e(), t._v(" "), t.enabledCountryCode ? n("span", { staticClass: "country-code" }, [t._v("+" + t._s(t.activeCountry.dialCode))]) : t._e(), t._v(" "), n("span", { staticClass: "dropdown-arrow" }, [t._v(t._s(t.open ? "▲" : "▼"))])]), t._v(" "), n("ul", { directives: [{ name: "show", rawName: "v-show", value: t.open, expression: "open" }], ref: "list" }, t._l(t.sortedCountries, function (e, r) {
        return n("li", { key: e.iso2 + (e.preferred ? "-preferred" : ""), staticClass: "dropdown-item", class: t.getItemClass(r, e.iso2), on: { click: function click(n) {
              t.choose(e);
            }, mousemove: function mousemove(e) {
              t.selectedIndex = r;
            } } }, [t.enabledFlags ? n("div", { staticClass: "iti-flag", class: e.iso2.toLowerCase() }) : t._e(), t._v(" "), n("strong", [t._v(t._s(e.name))]), t._v(" "), t.dropdownOptions && !t.dropdownOptions.disabledDialCode ? n("span", [t._v("+" + t._s(e.dialCode))]) : t._e()]);
      }))]), t._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.phone, expression: "phone" }], ref: "input", class: t.inputClasses, attrs: { type: "tel", placeholder: t.placeholder, state: t.state, formatter: t.format, disabled: t.disabled, required: t.required, autocomplete: t.autocomplete, name: t.name, maxlength: t.maxLen }, domProps: { value: t.phone }, on: { blur: t.onBlur, input: [function (e) {
            e.target.composing || (t.phone = e.target.value);
          }, t.onInput] } })]);
    },
        i = [],
        a = { render: r, staticRenderFns: i };e.a = a;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../node_modules/timers-browserify/main.js */ 0).setImmediate, __webpack_require__(/*! ./../node_modules/timers-browserify/main.js */ 0).clearImmediate, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ 9)(module)))

/***/ }),
/* 9 */,
/* 10 */
/*!********************************!*\
  !*** ./dist/vue-tel-input.css ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/*!**********************!*\
  !*** ./demo/App.vue ***!
  \**********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_stevend_coding_vue_vue_tel_input_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/stevend/coding/vue/vue-tel-input/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue */ 2);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f4df324_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-4f4df324","hasScoped":false,"buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./App.vue */ 13);
var normalizeComponent = __webpack_require__(/*! ../node_modules/vue-loader/lib/component-normalizer */ 12)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_stevend_coding_vue_vue_tel_input_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f4df324_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 12 */,
/* 13 */
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4f4df324","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./demo/App.vue ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('h1',[_vm._v("Telephone Input Vue")]),_vm._v(" "),_c('h2',{staticStyle:{"color":"#999"}},[_vm._v("made with ❤ by Steven.")]),_vm._v(" "),_c('div',{staticStyle:{"width":"500px","margin":"20px auto"}},[_c('vue-tel-input',{attrs:{"wrapperClasses":"hello1 hello2","preferredCountries":['us', 'gb', 'ua']},on:{"onInput":_vm.onInput}})],1),_vm._v(" "),(_vm.phone.number)?_c('div',{staticStyle:{"color":"#e83e8c"}},[_c('span',[_vm._v("\n      Number:\n      "),_c('strong',[_vm._v(_vm._s(_vm.phone.number))]),_vm._v(", \n    ")]),_vm._v(" "),_c('span',[_vm._v("\n      Is valid:\n      "),_c('strong',[_vm._v(_vm._s(_vm.phone.isValid))]),_vm._v(", \n    ")]),_vm._v(" "),_c('span',[_vm._v("\n      Country:\n      "),_c('strong',[_vm._v(_vm._s(_vm.phone.country))])])]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
],[3]);