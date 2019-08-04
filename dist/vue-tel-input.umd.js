(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global['vue-tel-input'] = {}));
}(this, function (exports) { 'use strict';

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var dP$1 = _objectDp.f;
  var FProto = Function.prototype;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name';

  // 19.2.4.2 name
  NAME in FProto || _descriptors && dP$1(FProto, NAME, {
    configurable: true,
    get: function () {
      try {
        return ('' + this).match(nameRE)[1];
      } catch (e) {
        return '';
      }
    }
  });

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.9' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode:  'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var _functionToString = _shared('native-function-to-string', Function.toString);

  var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');

  var TO_STRING = 'toString';
  var TPL = ('' + _functionToString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return _functionToString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || _functionToString.call(this);
  });
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // extend global
      if (target) _redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

  var f$1 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

  var _objectGopn = {
  	f: f$1
  };

  var f$2 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$2
  };

  // all object keys, includes non-enumerable and symbols



  var Reflect = _global.Reflect;
  var _ownKeys = Reflect && Reflect.ownKeys || function ownKeys(it) {
    var keys = _objectGopn.f(_anObject(it));
    var getSymbols = _objectGops.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };

  var f$3 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$3
  };

  var gOPD = Object.getOwnPropertyDescriptor;

  var f$4 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine) try {
      return gOPD(O, P);
    } catch (e) { /* empty */ }
    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
  };

  var _objectGopd = {
  	f: f$4
  };

  var _createProperty = function (object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
    else object[index] = value;
  };

  // https://github.com/tc39/proposal-object-getownpropertydescriptors






  _export(_export.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = _toIobject(object);
      var getDesc = _objectGopd.f;
      var keys = _ownKeys(O);
      var result = {};
      var i = 0;
      var key, desc;
      while (keys.length > i) {
        desc = getDesc(O, key = keys[i++]);
        if (desc !== undefined) _createProperty(result, key, desc);
      }
      return result;
    }
  });

  var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
  var _addToUnscopables = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };

  var _iterStep = function (done, value) {
    return { value: value, done: !!done };
  };

  var _iterators = {};

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$1 = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var def = _objectDp.f;

  var TAG = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if ( typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if ( (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      _hide(proto, ITERATOR, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }
    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  _iterators.Arguments = _iterators.Array;

  _addToUnscopables('keys');
  _addToUnscopables('values');
  _addToUnscopables('entries');

  var ITERATOR$1 = _wks('iterator');
  var TO_STRING_TAG = _wks('toStringTag');
  var ArrayValues = _iterators.Array;

  var DOMIterables = {
    CSSRuleList: true, // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true, // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true, // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
    var NAME$1 = collections[i];
    var explicit = DOMIterables[NAME$1];
    var Collection = _global[NAME$1];
    var proto = Collection && Collection.prototype;
    var key;
    if (proto) {
      if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
      if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME$1);
      _iterators[NAME$1] = ArrayValues;
      if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
    }
  }

  // most Object methods by ES6 should accept primitives



  var _objectSap = function (KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
  };

  // 19.1.2.14 Object.keys(O)



  _objectSap('keys', function () {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  });

  // 7.2.8 IsRegExp(argument)


  var MATCH = _wks('match');
  var _isRegexp = function (it) {
    var isRegExp;
    return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
  };

  // helper for String#{startsWith, endsWith, includes}



  var _stringContext = function (that, searchString, NAME) {
    if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(_defined(that));
  };

  var MATCH$1 = _wks('match');
  var _failsIsRegexp = function (KEY) {
    var re = /./;
    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH$1] = false;
        return !'/./'[KEY](re);
      } catch (f) { /* empty */ }
    } return true;
  };

  var STARTS_WITH = 'startsWith';
  var $startsWith = ''[STARTS_WITH];

  _export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = _stringContext(this, searchString, STARTS_WITH);
      var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = String(searchString);
      return $startsWith
        ? $startsWith.call(that, search, index)
        : that.slice(index, index + search.length) === search;
    }
  });

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  var SPECIES = _wks('species');

  var _arraySpeciesConstructor = function (original) {
    var C;
    if (_isArray(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
      if (_isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array : C;
  };

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


  var _arraySpeciesCreate = function (original, length) {
    return new (_arraySpeciesConstructor(original))(length);
  };

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex





  var _arrayMethods = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = _toObject($this);
      var self = _iobject(O);
      var f = _ctx(callbackfn, that, 3);
      var length = _toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;   // map
          else if (res) switch (TYPE) {
            case 3: return true;             // some
            case 5: return val;              // find
            case 6: return index;            // findIndex
            case 2: result.push(val);        // filter
          } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

  var $find = _arrayMethods(6);
  var KEY = 'findIndex';
  var forced = true;
  // Shouldn't skip holes
  if (KEY in []) Array(1)[KEY](function () { forced = false; });
  _export(_export.P + _export.F * forced, 'Array', {
    findIndex: function findIndex(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables(KEY);

  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

  var $find$1 = _arrayMethods(5);
  var KEY$1 = 'find';
  var forced$1 = true;
  // Shouldn't skip holes
  if (KEY$1 in []) Array(1)[KEY$1](function () { forced$1 = false; });
  _export(_export.P + _export.F * forced$1, 'Array', {
    find: function find(callbackfn /* , that = undefined */) {
      return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables(KEY$1);

  var _global$1 = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core$1 = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.9' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1$1 = _core$1.version;

  var _aFunction$1 = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding

  var _ctx$1 = function (fn, that, length) {
    _aFunction$1(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var _isObject$1 = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject$1 = function (it) {
    if (!_isObject$1(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails$1 = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors$1 = !_fails$1(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$3 = _global$1.document;
  // typeof document.createElement is 'object' in old IE
  var is$1 = _isObject$1(document$3) && _isObject$1(document$3.createElement);
  var _domCreate$1 = function (it) {
    return is$1 ? document$3.createElement(it) : {};
  };

  var _ie8DomDefine$1 = !_descriptors$1 && !_fails$1(function () {
    return Object.defineProperty(_domCreate$1('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive$1 = function (it, S) {
    if (!_isObject$1(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject$1(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP$2 = Object.defineProperty;

  var f$5 = _descriptors$1 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject$1(O);
    P = _toPrimitive$1(P, true);
    _anObject$1(Attributes);
    if (_ie8DomDefine$1) try {
      return dP$2(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp$1 = {
  	f: f$5
  };

  var _propertyDesc$1 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide$1 = _descriptors$1 ? function (object, key, value) {
    return _objectDp$1.f(object, key, _propertyDesc$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty$1 = {}.hasOwnProperty;
  var _has$1 = function (it, key) {
    return hasOwnProperty$1.call(it, key);
  };

  var PROTOTYPE$2 = 'prototype';

  var $export$1 = function (type, name, source) {
    var IS_FORCED = type & $export$1.F;
    var IS_GLOBAL = type & $export$1.G;
    var IS_STATIC = type & $export$1.S;
    var IS_PROTO = type & $export$1.P;
    var IS_BIND = type & $export$1.B;
    var IS_WRAP = type & $export$1.W;
    var exports = IS_GLOBAL ? _core$1 : _core$1[name] || (_core$1[name] = {});
    var expProto = exports[PROTOTYPE$2];
    var target = IS_GLOBAL ? _global$1 : IS_STATIC ? _global$1[name] : (_global$1[name] || {})[PROTOTYPE$2];
    var key, own, out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && _has$1(exports, key)) continue;
      // export native or passed
      out = own ? target[key] : source[key];
      // prevent global pollution for namespaces
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
      // bind timers to global for call from export context
      : IS_BIND && own ? _ctx$1(out, _global$1)
      // wrap global constructors for prevent change them in library
      : IS_WRAP && target[key] == out ? (function (C) {
        var F = function (a, b, c) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0: return new C();
              case 1: return new C(a);
              case 2: return new C(a, b);
            } return new C(a, b, c);
          } return C.apply(this, arguments);
        };
        F[PROTOTYPE$2] = C[PROTOTYPE$2];
        return F;
      // make static versions for prototype methods
      })(out) : IS_PROTO && typeof out == 'function' ? _ctx$1(Function.call, out) : out;
      // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out;
        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
        if (type & $export$1.R && expProto && !expProto[key]) _hide$1(expProto, key, out);
      }
    }
  };
  // type bitmap
  $export$1.F = 1;   // forced
  $export$1.G = 2;   // global
  $export$1.S = 4;   // static
  $export$1.P = 8;   // proto
  $export$1.B = 16;  // bind
  $export$1.W = 32;  // wrap
  $export$1.U = 64;  // safe
  $export$1.R = 128; // real proto method for `library`
  var _export$1 = $export$1;

  var toString$1 = {}.toString;

  var _cof$1 = function (it) {
    return toString$1.call(it).slice(8, -1);
  };

  // 7.2.2 IsArray(argument)

  var _isArray$1 = Array.isArray || function isArray(arg) {
    return _cof$1(arg) == 'Array';
  };

  // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


  _export$1(_export$1.S, 'Array', { isArray: _isArray$1 });

  var isArray = _core$1.Array.isArray;

  var isArray$1 = isArray;

  function _arrayWithoutHoles(arr) {
    if (isArray$1(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  // 7.1.4 ToInteger
  var ceil$1 = Math.ceil;
  var floor$1 = Math.floor;
  var _toInteger$1 = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor$1 : ceil$1)(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined$1 = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(_defined$1(that));
      var i = _toInteger$1(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _redefine$1 = _hide$1;

  var _iterators$1 = {};

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject$1 = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof$1(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject$1 = function (it) {
    return _iobject$1(_defined$1(it));
  };

  // 7.1.15 ToLength

  var min$2 = Math.min;
  var _toLength$1 = function (it) {
    return it > 0 ? min$2(_toInteger$1(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max$1 = Math.max;
  var min$3 = Math.min;
  var _toAbsoluteIndex$1 = function (index, length) {
    index = _toInteger$1(index);
    return index < 0 ? max$1(index + length, 0) : min$3(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes$1 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject$1($this);
      var length = _toLength$1(O.length);
      var index = _toAbsoluteIndex$1(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var _shared$1 = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global$1[SHARED] || (_global$1[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core$1.version,
    mode:  'pure' ,
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id$1 = 0;
  var px$1 = Math.random();
  var _uid$1 = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px$1).toString(36));
  };

  var shared$1 = _shared$1('keys');

  var _sharedKey$1 = function (key) {
    return shared$1[key] || (shared$1[key] = _uid$1(key));
  };

  var arrayIndexOf$1 = _arrayIncludes$1(false);
  var IE_PROTO$3 = _sharedKey$1('IE_PROTO');

  var _objectKeysInternal$1 = function (object, names) {
    var O = _toIobject$1(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO$3) _has$1(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has$1(O, key = names[i++])) {
      ~arrayIndexOf$1(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys$1 = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys$1 = Object.keys || function keys(O) {
    return _objectKeysInternal$1(O, _enumBugKeys$1);
  };

  var _objectDps$1 = _descriptors$1 ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject$1(O);
    var keys = _objectKeys$1(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) _objectDp$1.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document$4 = _global$1.document;
  var _html$1 = document$4 && document$4.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$4 = _sharedKey$1('IE_PROTO');
  var Empty$1 = function () { /* empty */ };
  var PROTOTYPE$3 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict$1 = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate$1('iframe');
    var i = _enumBugKeys$1.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html$1.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict$1 = iframeDocument.F;
    while (i--) delete createDict$1[PROTOTYPE$3][_enumBugKeys$1[i]];
    return createDict$1();
  };

  var _objectCreate$1 = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty$1[PROTOTYPE$3] = _anObject$1(O);
      result = new Empty$1();
      Empty$1[PROTOTYPE$3] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$4] = O;
    } else result = createDict$1();
    return Properties === undefined ? result : _objectDps$1(result, Properties);
  };

  var _wks$1 = createCommonjsModule(function (module) {
  var store = _shared$1('wks');

  var Symbol = _global$1.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid$1)('Symbol.' + name));
  };

  $exports.store = store;
  });

  var def$1 = _objectDp$1.f;

  var TAG$1 = _wks$1('toStringTag');

  var _setToStringTag$1 = function (it, tag, stat) {
    if (it && !_has$1(it = stat ? it : it.prototype, TAG$1)) def$1(it, TAG$1, { configurable: true, value: tag });
  };

  var IteratorPrototype$1 = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide$1(IteratorPrototype$1, _wks$1('iterator'), function () { return this; });

  var _iterCreate$1 = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate$1(IteratorPrototype$1, { next: _propertyDesc$1(1, next) });
    _setToStringTag$1(Constructor, NAME + ' Iterator');
  };

  // 7.1.13 ToObject(argument)

  var _toObject$1 = function (it) {
    return Object(_defined$1(it));
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$5 = _sharedKey$1('IE_PROTO');
  var ObjectProto$1 = Object.prototype;

  var _objectGpo$1 = Object.getPrototypeOf || function (O) {
    O = _toObject$1(O);
    if (_has$1(O, IE_PROTO$5)) return O[IE_PROTO$5];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto$1 : null;
  };

  var ITERATOR$2 = _wks$1('iterator');
  var BUGGY$1 = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR$1 = '@@iterator';
  var KEYS$1 = 'keys';
  var VALUES$1 = 'values';

  var returnThis$1 = function () { return this; };

  var _iterDefine$1 = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate$1(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY$1 && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS$1: return function keys() { return new Constructor(this, kind); };
        case VALUES$1: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES$1;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR$2] || proto[FF_ITERATOR$1] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo$1($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag$1(IteratorPrototype, TAG, true);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES$1) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if (( FORCED) && (BUGGY$1 || VALUES_BUG || !proto[ITERATOR$2])) {
      _hide$1(proto, ITERATOR$2, $default);
    }
    // Plug for library
    _iterators$1[NAME] = $default;
    _iterators$1[TAG] = returnThis$1;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES$1),
        keys: IS_SET ? $default : getMethod(KEYS$1),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine$1(proto, key, methods[key]);
      } else _export$1(_export$1.P + _export$1.F * (BUGGY$1 || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine$1(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject$1(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject$1(ret.call(iterator));
      throw e;
    }
  };

  // check on default Array iterator

  var ITERATOR$3 = _wks$1('iterator');
  var ArrayProto$1 = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (_iterators$1.Array === it || ArrayProto$1[ITERATOR$3] === it);
  };

  var _createProperty$1 = function (object, index, value) {
    if (index in object) _objectDp$1.f(object, index, _propertyDesc$1(0, value));
    else object[index] = value;
  };

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG$2 = _wks$1('toStringTag');
  // ES3 wrong here
  var ARG = _cof$1(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG$2)) == 'string' ? T
      // builtinTag case
      : ARG ? _cof$1(O)
      // ES3 arguments fallback
      : (B = _cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var ITERATOR$4 = _wks$1('iterator');

  var core_getIteratorMethod = _core$1.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$4]
      || it['@@iterator']
      || _iterators$1[_classof(it)];
  };

  var ITERATOR$5 = _wks$1('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$5]();
    riter['return'] = function () { SAFE_CLOSING = true; };
    // eslint-disable-next-line no-throw-literal
    Array.from(riter, function () { throw 2; });
  } catch (e) { /* empty */ }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$5]();
      iter.next = function () { return { done: safe = true }; };
      arr[ITERATOR$5] = function () { return iter; };
      exec(arr);
    } catch (e) { /* empty */ }
    return safe;
  };

  _export$1(_export$1.S + _export$1.F * !_iterDetect(function (iter) { Array.from(iter); }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = _toObject$1(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx$1(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty$1(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength$1(O.length);
        for (result = new C(length); length > index; index++) {
          _createProperty$1(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });

  var from_1 = _core$1.Array.from;

  var from_1$1 = from_1;

  var _iterStep$1 = function (done, value) {
    return { value: value, done: !!done };
  };

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator$1 = _iterDefine$1(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject$1(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep$1(1);
    }
    if (kind == 'keys') return _iterStep$1(0, index);
    if (kind == 'values') return _iterStep$1(0, O[index]);
    return _iterStep$1(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  _iterators$1.Arguments = _iterators$1.Array;

  var TO_STRING_TAG$1 = _wks$1('toStringTag');

  var DOMIterables$1 = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
    'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
    'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
    'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
    'TextTrackList,TouchList').split(',');

  for (var i$1 = 0; i$1 < DOMIterables$1.length; i$1++) {
    var NAME$2 = DOMIterables$1[i$1];
    var Collection$1 = _global$1[NAME$2];
    var proto$1 = Collection$1 && Collection$1.prototype;
    if (proto$1 && !proto$1[TO_STRING_TAG$1]) _hide$1(proto$1, TO_STRING_TAG$1, NAME$2);
    _iterators$1[NAME$2] = _iterators$1.Array;
  }

  var ITERATOR$6 = _wks$1('iterator');

  var core_isIterable = _core$1.isIterable = function (it) {
    var O = Object(it);
    return O[ITERATOR$6] !== undefined
      || '@@iterator' in O
      // eslint-disable-next-line no-prototype-builtins
      || _iterators$1.hasOwnProperty(_classof(O));
  };

  var isIterable = core_isIterable;

  var isIterable$1 = isIterable;

  function _iterableToArray(iter) {
    if (isIterable$1(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_1$1(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  _export$1(_export$1.S + _export$1.F * !_descriptors$1, 'Object', { defineProperty: _objectDp$1.f });

  var $Object = _core$1.Object;
  var defineProperty = function defineProperty(it, key, desc) {
    return $Object.defineProperty(it, key, desc);
  };

  var defineProperty$1 = defineProperty;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      defineProperty$1(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  // https://github.com/tc39/Array.prototype.includes

  var $includes = _arrayIncludes(true);

  _export(_export.P, 'Array', {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  _addToUnscopables('includes');

  var INCLUDES = 'includes';

  _export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~_stringContext(this, searchString, INCLUDES)
        .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */


  var check = function (O, proto) {
    _anObject(O);
    if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function (test, buggy, set) {
        try {
          set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch (e) { buggy = true; }
        return function setPrototypeOf(O, proto) {
          check(O, proto);
          if (buggy) O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
    check: check
  };

  var setPrototypeOf = _setProto.set;
  var _inheritIfRequired = function (that, target, C) {
    var S = target.constructor;
    var P;
    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
      setPrototypeOf(that, P);
    } return that;
  };

  var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var space = '[' + _stringWs + ']';
  var non = '\u200b\u0085';
  var ltrim = RegExp('^' + space + space + '*');
  var rtrim = RegExp(space + space + '*$');

  var exporter = function (KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = _fails(function () {
      return !!_stringWs[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    _export(_export.P + _export.F * FORCE, 'String', exp);
  };

  // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim
  var trim = exporter.trim = function (string, TYPE) {
    string = String(_defined(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  var _stringTrim = exporter;

  var gOPN = _objectGopn.f;
  var gOPD$1 = _objectGopd.f;
  var dP$3 = _objectDp.f;
  var $trim = _stringTrim.trim;
  var NUMBER = 'Number';
  var $Number = _global[NUMBER];
  var Base = $Number;
  var proto$2 = $Number.prototype;
  // Opera ~12 has broken Object#toString
  var BROKEN_COF = _cof(_objectCreate(proto$2)) == NUMBER;
  var TRIM = 'trim' in String.prototype;

  // 7.1.3 ToNumber(argument)
  var toNumber = function (argument) {
    var it = _toPrimitive(argument, false);
    if (typeof it == 'string' && it.length > 2) {
      it = TRIM ? it.trim() : $trim(it, 3);
      var first = it.charCodeAt(0);
      var third, radix, maxCode;
      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
          case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
          default: return +it;
        }
        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
          code = digits.charCodeAt(i);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        } return parseInt(digits, radix);
      }
    } return +it;
  };

  if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
    $Number = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var that = this;
      return that instanceof $Number
        // check on 1..constructor(foo) case
        && (BROKEN_COF ? _fails(function () { proto$2.valueOf.call(that); }) : _cof(that) != NUMBER)
          ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };
    for (var keys = _descriptors ? gOPN(Base) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES6 (in case, if modules with ES6 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
    ).split(','), j = 0, key$1; keys.length > j; j++) {
      if (_has(Base, key$1 = keys[j]) && !_has($Number, key$1)) {
        dP$3($Number, key$1, gOPD$1(Base, key$1));
      }
    }
    $Number.prototype = proto$2;
    proto$2.constructor = $Number;
    _redefine(_global, NUMBER, $Number);
  }

  // This file is a workaround for a bug in web browsers' "native"
  // ES6 importing system which is uncapable of importing "*.json" files.
  // https://github.com/catamphetamine/libphonenumber-js/issues/239
  var metadata = {"version":"1.7.22","country_calling_codes":{"1":["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],"7":["RU","KZ"],"20":["EG"],"27":["ZA"],"30":["GR"],"31":["NL"],"32":["BE"],"33":["FR"],"34":["ES"],"36":["HU"],"39":["IT","VA"],"40":["RO"],"41":["CH"],"43":["AT"],"44":["GB","GG","IM","JE"],"45":["DK"],"46":["SE"],"47":["NO","SJ"],"48":["PL"],"49":["DE"],"51":["PE"],"52":["MX"],"53":["CU"],"54":["AR"],"55":["BR"],"56":["CL"],"57":["CO"],"58":["VE"],"60":["MY"],"61":["AU","CC","CX"],"62":["ID"],"63":["PH"],"64":["NZ"],"65":["SG"],"66":["TH"],"81":["JP"],"82":["KR"],"84":["VN"],"86":["CN"],"90":["TR"],"91":["IN"],"92":["PK"],"93":["AF"],"94":["LK"],"95":["MM"],"98":["IR"],"211":["SS"],"212":["MA","EH"],"213":["DZ"],"216":["TN"],"218":["LY"],"220":["GM"],"221":["SN"],"222":["MR"],"223":["ML"],"224":["GN"],"225":["CI"],"226":["BF"],"227":["NE"],"228":["TG"],"229":["BJ"],"230":["MU"],"231":["LR"],"232":["SL"],"233":["GH"],"234":["NG"],"235":["TD"],"236":["CF"],"237":["CM"],"238":["CV"],"239":["ST"],"240":["GQ"],"241":["GA"],"242":["CG"],"243":["CD"],"244":["AO"],"245":["GW"],"246":["IO"],"247":["AC"],"248":["SC"],"249":["SD"],"250":["RW"],"251":["ET"],"252":["SO"],"253":["DJ"],"254":["KE"],"255":["TZ"],"256":["UG"],"257":["BI"],"258":["MZ"],"260":["ZM"],"261":["MG"],"262":["RE","YT"],"263":["ZW"],"264":["NA"],"265":["MW"],"266":["LS"],"267":["BW"],"268":["SZ"],"269":["KM"],"290":["SH","TA"],"291":["ER"],"297":["AW"],"298":["FO"],"299":["GL"],"350":["GI"],"351":["PT"],"352":["LU"],"353":["IE"],"354":["IS"],"355":["AL"],"356":["MT"],"357":["CY"],"358":["FI","AX"],"359":["BG"],"370":["LT"],"371":["LV"],"372":["EE"],"373":["MD"],"374":["AM"],"375":["BY"],"376":["AD"],"377":["MC"],"378":["SM"],"380":["UA"],"381":["RS"],"382":["ME"],"383":["XK"],"385":["HR"],"386":["SI"],"387":["BA"],"389":["MK"],"420":["CZ"],"421":["SK"],"423":["LI"],"500":["FK"],"501":["BZ"],"502":["GT"],"503":["SV"],"504":["HN"],"505":["NI"],"506":["CR"],"507":["PA"],"508":["PM"],"509":["HT"],"590":["GP","BL","MF"],"591":["BO"],"592":["GY"],"593":["EC"],"594":["GF"],"595":["PY"],"596":["MQ"],"597":["SR"],"598":["UY"],"599":["CW","BQ"],"670":["TL"],"672":["NF"],"673":["BN"],"674":["NR"],"675":["PG"],"676":["TO"],"677":["SB"],"678":["VU"],"679":["FJ"],"680":["PW"],"681":["WF"],"682":["CK"],"683":["NU"],"685":["WS"],"686":["KI"],"687":["NC"],"688":["TV"],"689":["PF"],"690":["TK"],"691":["FM"],"692":["MH"],"800":["001"],"808":["001"],"850":["KP"],"852":["HK"],"853":["MO"],"855":["KH"],"856":["LA"],"870":["001"],"878":["001"],"880":["BD"],"881":["001"],"882":["001"],"883":["001"],"886":["TW"],"888":["001"],"960":["MV"],"961":["LB"],"962":["JO"],"963":["SY"],"964":["IQ"],"965":["KW"],"966":["SA"],"967":["YE"],"968":["OM"],"970":["PS"],"971":["AE"],"972":["IL"],"973":["BH"],"974":["QA"],"975":["BT"],"976":["MN"],"977":["NP"],"979":["001"],"992":["TJ"],"993":["TM"],"994":["AZ"],"995":["GE"],"996":["KG"],"998":["UZ"]},"countries":{"AC":["247","00","(?:[01589]\\d|[46])\\d{4}",[5,6]],"AD":["376","00","(?:1|6\\d)\\d{7}|[136-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[136-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],"AE":["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],"AF":["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],"AG":["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([457]\\d{6})$","268$1",0,"268"],"AI":["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2457]\\d{6})$","264$1",0,"264"],"AL":["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],"AM":["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["[23]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-9]"],"0$1"]],"0"],"AO":["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],"AR":["54","00","11\\d{8}|(?:[2368]|9\\d)\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],"AS":["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"1|([267]\\d{6})$","684$1",0,"684"],"AT":["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],"AU":["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|(?:[2-478]\\d\\d|550)\\d{6}|1\\d{4,7}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"0|(183[12])",0,0,0,[["(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}",[9]],["483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["16\\d{3,7}",[5,6,7,8,9]],["(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}",[9]],["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",[6,8,10]]],"0011"],"AW":["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],"AX":["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|(?:[147]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10],0,"0",0,0,0,0,"18",0,"00"],"AZ":["994","00","(?:365\\d{3}|900200)\\d{3}|(?:[12457]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[12]|365","[12]|365","[12]|365(?:[0-46-9]|5[0-35-9])"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[3-8]"],"0$1"]],"0"],"BA":["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-356]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],"BB":["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","246$1",0,"246"],"BD":["880","00","[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-7]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],"BE":["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],"BF":["226","00","[025-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]]],"BG":["359","00","[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],"BH":["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[047]"]]]],"BI":["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],"BJ":["229","00","[2689]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"]]]],"BL":["590","00","(?:590|69\\d)\\d{6}",[9],0,"0",0,0,0,0,0,[["590(?:2[7-9]|5[12]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]]],"BM":["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-8]\\d{6})$","441$1",0,"441"],"BN":["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],"BO":["591","00(?:1\\d)?","(?:[2-467]\\d{3}|80017)\\d{4}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[23]|4[46]"]],["(\\d{8})","$1",["[67]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],"BQ":["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],"BR":["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],"BS":["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([3-8]\\d{6})$","242$1",0,"242"],"BT":["975","00","[17]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]]],"BW":["267","00","90\\d{5}|(?:[2-6]|7\\d)\\d{6}",[7,8],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[2-6]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["7"]]]],"BY":["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],"BZ":["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],"CA":["1","011","(?:[2-8]\\d|90)\\d{8}",[10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"],0,0,0,["600[2-9]\\d{6}"]]],"CC":["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}",[6,7,8,9,10],0,"0",0,"0|([59]\\d{7})$","8$1",0,0,[["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}",[9]],["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",[6,8,10]]],"0011"],"CD":["243","00","[189]\\d{8}|[1-68]\\d{6}",[7,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"]],"0"],"CF":["236","00","(?:[27]\\d{3}|8776)\\d{4}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]]],"CG":["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["801"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],"CH":["41","00","8\\d{11}|[2-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],"CI":["225","00","[02-8]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[02-8]"]]]],"CK":["682","00","[2-8]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-8]"]]]],"CL":["56","(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["21"],"($1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[23]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],"CM":["237","00","(?:[26]\\d\\d|88)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]"]]]],"CN":["86","00|1(?:[12]\\d|79|9[0235-7])\\d\\d00","1[1279]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-68]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","(?:10|2[0-57-9])(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"0|(1(?:[12]\\d|79|9[0235-7])\\d\\d)",0,0,0,0,"00"],"CO":["57","00(?:4(?:[14]4|56)|[579])","(?:1\\d|3)\\d{9}|[124-8]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1 $2",["1[2-79]|[25-8]|(?:18|4)[2-9]"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1(?:80|9)","1(?:800|9)"],"0$1",0,"$1 $2 $3"]],"0",0,"0([3579]|4(?:[14]4|56))?"],"CR":["506","00","(?:8\\d|90)\\d{8}|[24-8]\\d{7}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[24-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],"CU":["53","119","[27]\\d{6,7}|[34]\\d{5,7}|5\\d{7}",[6,7,8],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["5"],"0$1"]],"0"],"CV":["238","0","[2-59]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-59]"]]]],"CW":["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],"CX":["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}",[6,7,8,9,10],0,"0",0,"0|([59]\\d{7})$","8$1",0,0,[["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}",[9]],["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",[6,8,10]]],"0011"],"CY":["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],"CZ":["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],"DE":["49","00","[2579]\\d{5,14}|49(?:[05]\\d{10}|[46][1-8]\\d{4,9})|49(?:[0-25]\\d|3[1-689]|7[1-7])\\d{4,8}|49(?:[0-2579]\\d|[34][1-9]|6[0-8])\\d{3}|49\\d{3,4}|(?:1|[368]\\d|4[0-8])\\d{3,13}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[0568]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],"DJ":["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],"DK":["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],"DM":["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"1|([2-7]\\d{6})$","767$1",0,"767"],"DO":["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8[024]9"],"DZ":["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],"EC":["593","00","1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],"EE":["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-4])","[45]|8(?:00[1-9]|[1-4])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["80"]]]],"EG":["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[189]"],"0$1"]],"0"],"EH":["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,"528[89]"],"ER":["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],"ES":["34","00","(?:51|[6-9]\\d)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]]],"ET":["251","00","(?:11|[2-59]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-59]"],"0$1"]],"0"],"FI":["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}|[1-35689]\\d{4}",[5,6,7,8,9,10],[["(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["(?:[12]0|7)0|[368]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[12457]"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],"FJ":["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],"FK":["500","00","[2-7]\\d{4}",[5]],"FM":["691","00","[39]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[39]"]]]],"FO":["298","00","(?:[2-8]\\d|90)\\d{4}",[6],[["(\\d{6})","$1",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],"FR":["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],"GA":["241","00","(?:0\\d|[2-7])\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]]]],"GB":["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[024-9])","[25]|7(?:0|6(?:[04-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,0,0,0,0,[["(?:1(?:(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|80[04589])))|2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d|7(?:(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))\\d|6888[2-46-8]))\\d\\d",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],"GD":["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","473$1",0,"473"],"GE":["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],"GF":["594","00","[56]94\\d{6}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]"],"0$1"]],"0"],"GG":["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"0|([25-9]\\d{5})$","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",[10]],["56\\d{8}",[10]]]],"GH":["233","00","(?:[235]\\d{3}|800)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],"0"],"GI":["350","00","(?:[25]\\d\\d|629)\\d{5}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],"GL":["299","00","(?:19|[2-689]\\d)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-689]"]]]],"GM":["220","00","[2-9]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],"GN":["224","00","(?:30|6\\d\\d|722)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],"GP":["590","00","(?:590|69\\d)\\d{6}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]"],"0$1"]],"0",0,0,0,0,0,[["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"],["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]]],"GQ":["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],"GR":["30","00","(?:[268]\\d|[79]0)\\d{8}",[10],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]]]],"GT":["502","00","(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],"GU":["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"1|([3-9]\\d{6})$","671$1",0,"671"],"GW":["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],"GY":["592","001","(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-46-9]"]]]],"HK":["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],"HN":["504","00","[237-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],"HR":["385","00","(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",[6,7,8,9],[["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],"HT":["509","00","[2-489]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-489]"]]]],"HU":["36","00","[2357]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"($1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"($1)"]],"06"],"ID":["62","00[189]","(?:(?:007803|8\\d{4})\\d|[1-36])\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],"IE":["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"]],"0"],"IL":["972","0(?:0|1[2-9])","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],"IM":["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"0|([5-8]\\d{5})$","1624$1",0,"74576|(?:16|7[56])24"],"IN":["91","00","(?:00800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|(?:55|61)2|7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:1(?:29|60|8[06])|261|552|788[01])[2-7]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|3179)|807(?:1|9[1-3])|(?:1552|7(?:28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],"IO":["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],"IQ":["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],"IR":["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],"IS":["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],"IT":["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1[4679]|[38]"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],0,0,0,0,0,0,[["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],["3[1-9]\\d{8}|3[2-9]\\d{7}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],0,0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],"JE":["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"0|([0-24-8]\\d{5})$","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}"],["56\\d{8}"]]],"JM":["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],"JO":["962","00","900\\d{5}|(?:(?:[268]|7\\d)\\d|32|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],"JP":["81","010","00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6[0-24-689]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|5[0-3589]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])","[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]|80"],"0$1"]],"0"],"KE":["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],"KG":["996","00","(?:[235-7]\\d|99)\\d{7}|800\\d{6,7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],"KH":["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],"KI":["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],"KM":["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],"KN":["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-7]\\d{6})$","869$1",0,"869"],"KP":["850","00|99","85\\d{6}|(?:19\\d|2)\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],"KR":["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],"KW":["965","00","(?:18|[2569]\\d\\d)\\d{5}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[25]"]]]],"KY":["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","345$1",0,"345"],"KZ":["7","810","33622\\d{5}|(?:7\\d|80)\\d{8}",[10],0,"8",0,0,0,0,"33|7",0,"8~10"],"LA":["856","00","(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["3"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2"],"0$1"]],"0"],"LB":["961","00","[7-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"]]],"0"],"LC":["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"1|([2-7]\\d{6})$","758$1",0,"758"],"LI":["423","00","90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[237-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"0|(10(?:01|20|66))"],"LK":["94","00","(?:[1-7]\\d|[89]1)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],"LR":["231","00","(?:2|33|5\\d|77|88)\\d{7}|[45]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[45]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3578]"],"0$1"]],"0"],"LS":["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],"LT":["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-79]"],"(8-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(8-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(8-$1)",1]],"8",0,"[08]"],"LU":["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],"LV":["371","00","(?:[268]\\d|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]]],"LY":["218","00","(?:[2569]\\d|71)\\d{7}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[25-79]"],"0$1"]],"0"],"MA":["212","00","[5-8]\\d{8}",[9],[["(\\d{5})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],["(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|9)|892"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"],["(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],"0",0,0,0,0,0,[["5(?:29|38)[89]0\\d{4}|5(?:2(?:[015-7]\\d|2[2-9]|3[2-57]|4[2-46-8]|8[235-7]|90)|3(?:[0-4]\\d|[57][2-9]|6[2-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],["692[12]\\d{5}|(?:6(?:[0-7]\\d|8[0-247-9]|9[013-9])|7(?:0[06-8]|6[1267]|7[0-27]))\\d{6}"],["80\\d{7}"],["89\\d{7}"],0,0,0,0,["5924[01]\\d{4}"]]],"MC":["377","00","870\\d{5}|(?:[349]|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[39]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],"0"],"MD":["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],"ME":["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],"MF":["590","00","(?:590|69\\d)\\d{6}",[9],0,"0",0,0,0,0,0,[["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]]],"MG":["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"0|([24-9]\\d{6})$","20$1"],"MH":["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],"MK":["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],"ML":["223","00","(?:[246-9]\\d|50)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],"MM":["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],"MN":["976","001","[12]\\d{7,9}|[57-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[57-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],"MO":["853","00","(?:28|[68]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],"MP":["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","670$1",0,"670"],"MQ":["596","00","(?:596|69\\d)\\d{6}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]"],"0$1"]],"0"],"MR":["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],"MS":["1","011","66449\\d{5}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|(4\\d{6})$","664$1",0,"664"],"MT":["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],"MU":["230","0(?:0|[24-7]0|3[03])","(?:[2-468]|5\\d)\\d{6}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["5"]]],0,0,0,0,0,0,0,"020"],"MV":["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[3467]|9[14-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],"MW":["265","00","1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[17-9]"],"0$1"]],"0"],"MX":["52","0[09]","(?:1\\d|[2-9])\\d{9}",[10,11],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],"01 $1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],"01 $1",1],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],"044 $1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 $3 $4",["1"],"044 $1",0,"$1 $2 $3 $4"]],"01",0,"0[12]|04[45]([2-9]\\d{9})$","1$1",0,0,0,"00"],"MY":["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[0249]|[367][2-9]|8[1-9])|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1[36-8]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],"MZ":["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-7]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],"NA":["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],"NC":["687","00","[2-57-9]\\d{5}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-57-9]"]]]],"NE":["227","00","[0289]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[01]"]]]],"NF":["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1"]],["(\\d)(\\d{5})","$1 $2",["3"]]],0,0,"([0-258]\\d{4})$","3$1"],"NG":["234","009","(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",[7,8,10,11,12,13,14],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-7]|8[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],"NI":["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],"NL":["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}",[5,6,7,8,9,10],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-57-9]"],"0$1"]],"0"],"NO":["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[489]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],"NP":["977","00","9\\d{9}|[1-9]\\d{7}",[8,10],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["[1-8]|9(?:[1-579]|6[2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],"NR":["674","00","(?:444|55\\d|888)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[458]"]]]],"NU":["683","00","(?:[47]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],"NZ":["64","0(?:0|161)","[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}",[8,9,10],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[59]|80"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7|86"],"0$1"]],"0",0,0,0,0,0,0,"00"],"OM":["968","00","(?:[279]\\d{3}|500)\\d{4}|8007\\d{4,5}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[79]"]]]],"PA":["507","00","(?:[1-57-9]|6\\d)\\d{6}",[7,8],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["6"]]]],"PE":["51","19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,0," Anexo "],"PF":["689","00","[48]\\d{7}|4\\d{5}",[6,8],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[48]"]]]],"PG":["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],"PH":["63","00","(?:1800|8)\\d{7,9}|2\\d{5}(?:\\d{2})?|(?:[3-7]|9\\d)\\d{8}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],"PK":["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],"PL":["48","00","[1-57-9]\\d{6}(?:\\d{2})?|6\\d{5,8}",[6,7,8,9],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["39|45|5[0137]|6[0469]|7[02389]|8[08]"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-8]|9[145]"]]]],"PM":["508","00","[45]\\d{5}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"]],"0"],"PR":["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],"PS":["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],"PT":["351","00","(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[236-9]"]]]],"PW":["680","01[12]","(?:[25-8]\\d\\d|345|488|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],"PY":["595","00","59\\d{4,6}|(?:[2-46-9]\\d|5[0-8])\\d{4,7}",[6,7,8,9],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6[347]|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"]],"0"],"QA":["974","00","800\\d{4}|(?:2|[3-7]\\d)\\d{6}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["2[126]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]]],"RE":["262","00","(?:26|[68]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[268]"],"0$1"]],"0",0,0,0,0,"262|69|8"],"RO":["40","00","(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[237-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],"RS":["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],"RU":["7","810","[347-9]\\d{9}",[10],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"],"8 ($1)",1]],"8",0,0,0,0,"3[04-689]|[489]",0,"8~10"],"RW":["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"]],"0"],"SA":["966","00","92\\d{7}|(?:[15]|8\\d)\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],"SB":["677","0[01]","(?:[1-6]|[7-9]\\d\\d)\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],"SC":["248","010|0[0-2]","8000\\d{3}|(?:[249]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]"]]],0,0,0,0,0,0,0,"00"],"SD":["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],"SE":["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],"SG":["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8[1-8]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],"SH":["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],"SI":["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],"SJ":["47","00","0\\d{4}|(?:[4589]\\d|79)\\d{6}",[5,8],0,0,0,0,0,0,"79"],"SK":["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],"0"],"SL":["232","00","(?:[2378]\\d|99)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[237-9]"],"(0$1)"]],"0"],"SM":["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],"SN":["221","00","(?:[378]\\d{4}|93330)\\d{4}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],"SO":["252","00","[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["1|2[0-79]|3[0-46-8]|4[0-7]|59"]],["(\\d)(\\d{7})","$1 $2",["24|[67]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[348]|64|79[0-8]|90"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|6[1-35-9]|799|9[2-9]"]]],"0"],"SR":["597","00","(?:[2-5]|68|[78]\\d)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]]],"SS":["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],"ST":["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],"SV":["503","00","[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[267]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],"SX":["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|(5\\d{6})$","721$1",0,"721"],"SY":["963","00","[1-39]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",1]],"0"],"SZ":["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],"TA":["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],"TC":["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"1|([2-479]\\d{6})$","649$1",0,"649"],"TD":["235","00|16","(?:22|[69]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2679]"]]],0,0,0,0,0,0,0,"00"],"TG":["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],"TH":["66","00[1-9]","1\\d{8,9}|(?:[2-57]|[689]\\d)\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["14|[3-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],"TJ":["992","810","(?:[3-59]\\d|77|88)\\d{7}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"],0,1],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"],0,1],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3"],0,1],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[457-9]"],0,1]],"8",0,0,0,0,0,0,"8~10"],"TK":["690","00","[2-47]\\d{3,6}",[4,5,6,7]],"TL":["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],"TM":["993","810","[1-6]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],"TN":["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],"TO":["676","00","(?:0800|[5-8]\\d{3})\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-8]"]]]],"TR":["90","00","(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}",[7,10],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[0589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|616)","5(?:[0-59]|6161)"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1]],"0"],"TT":["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-46-8]\\d{6})$","868$1",0,"868"],"TV":["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7]],"TW":["886","0(?:0[25-79]|19)","(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[25][2-8]|[346]|7[1-9]|8[237-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[258]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],"TZ":["255","00[056]","(?:[26-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],"UA":["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]","4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["[3-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],"UG":["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],"0"],"US":["1","011","[2-9]\\d{9}",[10],[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"],0,["710[2-9]\\d{6}"]]],"UY":["598","0(?:0|1[3-9]\\d)","(?:[249]\\d\\d|80)\\d{5}|9\\d{6}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["8|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[24]"]]],"0",0,0,0,0,0,0,"00"," int. "],"UZ":["998","810","[679]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[679]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],"VA":["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11],0,0,0,0,0,0,"06698"],"VC":["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"1|([2-7]\\d{6})$","784$1",0,"784"],"VE":["58","00","[89]00\\d{7}|(?:[24]\\d|50)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24589]"],"0$1"]],"0"],"VG":["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-578]\\d{6})$","284$1",0,"284"],"VI":["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","340$1",0,"340"],"VN":["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",1],["(\\d{4})(\\d{4,6})","$1 $2",["1"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],"VU":["678","00","(?:[23]\\d|[48]8)\\d{3}|(?:[57]\\d|90)\\d{5}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[579]"]]]],"WF":["681","00","(?:[45]0|68|72|8\\d)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[4-8]"]]]],"WS":["685","0","[2-6]\\d{4}|8\\d{5}(?:\\d{4})?|[78]\\d{6}",[5,6,7,10],[["(\\d{5})","$1",["[2-6]"]],["(\\d{3})(\\d{3,7})","$1 $2",["8"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],"XK":["383","00","[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23]"],"0$1"]],"0"],"YE":["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7[24-68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],"YT":["262","00","80\\d{7}|(?:26|63)9\\d{6}",[9],0,"0",0,0,0,0,"269|63"],"ZA":["27","00","[1-9]\\d{8}|8\\d{4,7}",[5,6,7,8,9],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"]],"0"],"ZM":["260","00","800\\d{6}|(?:21|76|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],"0"],"ZW":["263","00","2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",[5,6,7,8,9,10],[["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],"0"],"001":["979",0,"\\d{9}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3"]]]}};

  // The minimum length of the national significant number.
  var MIN_LENGTH_FOR_NSN = 2;

  // The ITU says the maximum length should be 15,
  // but one can find longer numbers in Germany.
  var MAX_LENGTH_FOR_NSN = 17;

  // The maximum length of the country calling code.
  var MAX_LENGTH_COUNTRY_CODE = 3;

  // Digits accepted in phone numbers
  // (ascii, fullwidth, arabic-indic, and eastern arabic digits).
  var VALID_DIGITS = '0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9';

  // `DASHES` will be right after the opening square bracket of the "character class"
  var DASHES = '-\u2010-\u2015\u2212\u30FC\uFF0D';
  var SLASHES = '\uFF0F/';
  var DOTS = '\uFF0E.';
  var WHITESPACE = ' \xA0\xAD\u200B\u2060\u3000';
  var BRACKETS = '()\uFF08\uFF09\uFF3B\uFF3D\\[\\]';
  // export const OPENING_BRACKETS = '(\uFF08\uFF3B\\\['
  var TILDES = '~\u2053\u223C\uFF5E';

  // Regular expression of acceptable punctuation found in phone numbers. This
  // excludes punctuation found as a leading character only. This consists of dash
  // characters, white space characters, full stops, slashes, square brackets,
  // parentheses and tildes. Full-width variants are also present.
  var VALID_PUNCTUATION = '' + DASHES + SLASHES + DOTS + WHITESPACE + BRACKETS + TILDES;

  var PLUS_CHARS = '+\uFF0B';
  // const LEADING_PLUS_CHARS_PATTERN = new RegExp('^[' + PLUS_CHARS + ']+')

  // Checks whether the entire input sequence can be matched
  // against the regular expression.
  function matchesEntirely() {
  	var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  	var regular_expression = arguments[1];

  	return new RegExp('^(?:' + regular_expression + ')$').test(text);
  }

  /**
   * Merges two arrays.
   * @param  {*} a
   * @param  {*} b
   * @return {*}
   */
  function mergeArrays(a, b) {
  	var merged = a.slice();

  	for (var _iterator = b, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  		var _ref;

  		if (_isArray) {
  			if (_i >= _iterator.length) break;
  			_ref = _iterator[_i++];
  		} else {
  			_i = _iterator.next();
  			if (_i.done) break;
  			_ref = _i.value;
  		}

  		var element = _ref;

  		if (a.indexOf(element) < 0) {
  			merged.push(element);
  		}
  	}

  	return merged.sort(function (a, b) {
  		return a - b;
  	});

  	// ES6 version, requires Set polyfill.
  	// let merged = new Set(a)
  	// for (const element of b)
  	// {
  	// 	merged.add(i)
  	// }
  	// return Array.from(merged).sort((a, b) => a - b)
  }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  // https://stackoverflow.com/a/46971044/970769
  var ParseError = function ParseError(code) {
    _classCallCheck(this, ParseError);

    this.name = this.constructor.name;
    this.message = code;
    this.stack = new Error(code).stack;
  };


  ParseError.prototype = Object.create(Error.prototype);
  ParseError.prototype.constructor = ParseError;

  // Copy-pasted from:
  // https://github.com/substack/semver-compare/blob/master/index.js
  //
  // Inlining this function because some users reported issues with
  // importing from `semver-compare` in a browser with ES6 "native" modules.
  function cmp(a, b) {
      var pa = a.split('.');
      var pb = b.split('.');
      for (var i = 0; i < 3; i++) {
          var na = Number(pa[i]);
          var nb = Number(pb[i]);
          if (na > nb) return 1;
          if (nb > na) return -1;
          if (!isNaN(na) && isNaN(nb)) return 1;
          if (isNaN(na) && !isNaN(nb)) return -1;
      }
      return 0;
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  // Added "idd_prefix" and "default_idd_prefix".
  var V3 = '1.2.0';

  var DEFAULT_EXT_PREFIX = ' ext. ';

  var Metadata = function () {
  	function Metadata(metadata) {
  		_classCallCheck$1(this, Metadata);

  		validateMetadata(metadata);

  		this.metadata = metadata;

  		this.v1 = !metadata.version;
  		this.v2 = metadata.version !== undefined && cmp(metadata.version, V3) === -1;
  		this.v3 = metadata.version !== undefined; // && compare(metadata.version, V4) === -1
  	}

  	_createClass(Metadata, [{
  		key: 'hasCountry',
  		value: function hasCountry(country) {
  			return this.metadata.countries[country] !== undefined;
  		}
  	}, {
  		key: 'country',
  		value: function country(_country) {
  			if (!_country) {
  				this._country = undefined;
  				this.country_metadata = undefined;
  				return this;
  			}

  			if (!this.hasCountry(_country)) {
  				throw new Error('Unknown country: ' + _country);
  			}

  			this._country = _country;
  			this.country_metadata = this.metadata.countries[_country];
  			return this;
  		}
  	}, {
  		key: 'getDefaultCountryMetadataForRegion',
  		value: function getDefaultCountryMetadataForRegion() {
  			return this.metadata.countries[this.countryCallingCodes()[this.countryCallingCode()][0]];
  		}
  	}, {
  		key: 'countryCallingCode',
  		value: function countryCallingCode() {
  			return this.country_metadata[0];
  		}
  	}, {
  		key: 'IDDPrefix',
  		value: function IDDPrefix() {
  			if (this.v1 || this.v2) return;
  			return this.country_metadata[1];
  		}
  	}, {
  		key: 'defaultIDDPrefix',
  		value: function defaultIDDPrefix() {
  			if (this.v1 || this.v2) return;
  			return this.country_metadata[12];
  		}
  	}, {
  		key: 'nationalNumberPattern',
  		value: function nationalNumberPattern() {
  			if (this.v1 || this.v2) return this.country_metadata[1];
  			return this.country_metadata[2];
  		}
  	}, {
  		key: 'possibleLengths',
  		value: function possibleLengths() {
  			if (this.v1) return;
  			return this.country_metadata[this.v2 ? 2 : 3];
  		}
  	}, {
  		key: '_getFormats',
  		value: function _getFormats(country_metadata) {
  			return country_metadata[this.v1 ? 2 : this.v2 ? 3 : 4];
  		}

  		// For countries of the same region (e.g. NANPA)
  		// formats are all stored in the "main" country for that region.
  		// E.g. "RU" and "KZ", "US" and "CA".

  	}, {
  		key: 'formats',
  		value: function formats() {
  			var _this = this;

  			var formats = this._getFormats(this.country_metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
  			return formats.map(function (_) {
  				return new Format(_, _this);
  			});
  		}
  	}, {
  		key: 'nationalPrefix',
  		value: function nationalPrefix() {
  			return this.country_metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
  		}
  	}, {
  		key: '_getNationalPrefixFormattingRule',
  		value: function _getNationalPrefixFormattingRule(country_metadata) {
  			return country_metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
  		}

  		// For countries of the same region (e.g. NANPA)
  		// national prefix formatting rule is stored in the "main" country for that region.
  		// E.g. "RU" and "KZ", "US" and "CA".

  	}, {
  		key: 'nationalPrefixFormattingRule',
  		value: function nationalPrefixFormattingRule() {
  			return this._getNationalPrefixFormattingRule(this.country_metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
  		}
  	}, {
  		key: 'nationalPrefixForParsing',
  		value: function nationalPrefixForParsing() {
  			// If `national_prefix_for_parsing` is not set explicitly,
  			// then infer it from `national_prefix` (if any)
  			return this.country_metadata[this.v1 ? 5 : this.v2 ? 6 : 7] || this.nationalPrefix();
  		}
  	}, {
  		key: 'nationalPrefixTransformRule',
  		value: function nationalPrefixTransformRule() {
  			return this.country_metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
  		}
  	}, {
  		key: '_getNationalPrefixIsOptionalWhenFormatting',
  		value: function _getNationalPrefixIsOptionalWhenFormatting() {
  			return !!this.country_metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
  		}

  		// For countries of the same region (e.g. NANPA)
  		// "national prefix is optional when parsing" flag is
  		// stored in the "main" country for that region.
  		// E.g. "RU" and "KZ", "US" and "CA".

  	}, {
  		key: 'nationalPrefixIsOptionalWhenFormatting',
  		value: function nationalPrefixIsOptionalWhenFormatting() {
  			return this._getNationalPrefixIsOptionalWhenFormatting(this.country_metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
  		}
  	}, {
  		key: 'leadingDigits',
  		value: function leadingDigits() {
  			return this.country_metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
  		}
  	}, {
  		key: 'types',
  		value: function types() {
  			return this.country_metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
  		}
  	}, {
  		key: 'hasTypes',
  		value: function hasTypes() {
  			// Versions 1.2.0 - 1.2.4: can be `[]`.
  			/* istanbul ignore next */
  			if (this.types() && this.types().length === 0) {
  				return false;
  			}
  			// Versions <= 1.2.4: can be `undefined`.
  			// Version >= 1.2.5: can be `0`.
  			return !!this.types();
  		}
  	}, {
  		key: 'type',
  		value: function type(_type) {
  			if (this.hasTypes() && getType(this.types(), _type)) {
  				return new Type(getType(this.types(), _type), this);
  			}
  		}
  	}, {
  		key: 'ext',
  		value: function ext() {
  			if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
  			return this.country_metadata[13] || DEFAULT_EXT_PREFIX;
  		}
  	}, {
  		key: 'countryCallingCodes',
  		value: function countryCallingCodes() {
  			if (this.v1) return this.metadata.country_phone_code_to_countries;
  			return this.metadata.country_calling_codes;
  		}

  		// Formatting information for regions which share
  		// a country calling code is contained by only one region
  		// for performance reasons. For example, for NANPA region
  		// ("North American Numbering Plan Administration",
  		//  which includes USA, Canada, Cayman Islands, Bahamas, etc)
  		// it will be contained in the metadata for `US`.
  		//
  		// `country_calling_code` is always valid.
  		// But the actual country may not necessarily be part of the metadata.
  		//

  	}, {
  		key: 'chooseCountryByCountryCallingCode',
  		value: function chooseCountryByCountryCallingCode(country_calling_code) {
  			var country = this.countryCallingCodes()[country_calling_code][0];

  			// Do not want to test this case.
  			// (custom metadata, not all countries).
  			/* istanbul ignore else */
  			if (this.hasCountry(country)) {
  				this.country(country);
  			}
  		}
  	}, {
  		key: 'selectedCountry',
  		value: function selectedCountry() {
  			return this._country;
  		}
  	}]);

  	return Metadata;
  }();

  var Format = function () {
  	function Format(format, metadata) {
  		_classCallCheck$1(this, Format);

  		this._format = format;
  		this.metadata = metadata;
  	}

  	_createClass(Format, [{
  		key: 'pattern',
  		value: function pattern() {
  			return this._format[0];
  		}
  	}, {
  		key: 'format',
  		value: function format() {
  			return this._format[1];
  		}
  	}, {
  		key: 'leadingDigitsPatterns',
  		value: function leadingDigitsPatterns() {
  			return this._format[2] || [];
  		}
  	}, {
  		key: 'nationalPrefixFormattingRule',
  		value: function nationalPrefixFormattingRule() {
  			return this._format[3] || this.metadata.nationalPrefixFormattingRule();
  		}
  	}, {
  		key: 'nationalPrefixIsOptionalWhenFormatting',
  		value: function nationalPrefixIsOptionalWhenFormatting() {
  			return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormatting();
  		}
  	}, {
  		key: 'nationalPrefixIsMandatoryWhenFormatting',
  		value: function nationalPrefixIsMandatoryWhenFormatting() {
  			// National prefix is omitted if there's no national prefix formatting rule
  			// set for this country, or when the national prefix formatting rule
  			// contains no national prefix itself, or when this rule is set but
  			// national prefix is optional for this phone number format
  			// (and it is not enforced explicitly)
  			return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormatting();
  		}

  		// Checks whether national prefix formatting rule contains national prefix.

  	}, {
  		key: 'usesNationalPrefix',
  		value: function usesNationalPrefix() {
  			return this.nationalPrefixFormattingRule() &&
  			// Check that national prefix formatting rule is not a dummy one.
  			this.nationalPrefixFormattingRule() !== '$1' &&
  			// Check that national prefix formatting rule actually has national prefix digit(s).
  			/\d/.test(this.nationalPrefixFormattingRule().replace('$1', ''));
  		}
  	}, {
  		key: 'internationalFormat',
  		value: function internationalFormat() {
  			return this._format[5] || this.format();
  		}
  	}]);

  	return Format;
  }();

  var Type = function () {
  	function Type(type, metadata) {
  		_classCallCheck$1(this, Type);

  		this.type = type;
  		this.metadata = metadata;
  	}

  	_createClass(Type, [{
  		key: 'pattern',
  		value: function pattern() {
  			if (this.metadata.v1) return this.type;
  			return this.type[0];
  		}
  	}, {
  		key: 'possibleLengths',
  		value: function possibleLengths() {
  			if (this.metadata.v1) return;
  			return this.type[1] || this.metadata.possibleLengths();
  		}
  	}]);

  	return Type;
  }();

  function getType(types, type) {
  	switch (type) {
  		case 'FIXED_LINE':
  			return types[0];
  		case 'MOBILE':
  			return types[1];
  		case 'TOLL_FREE':
  			return types[2];
  		case 'PREMIUM_RATE':
  			return types[3];
  		case 'PERSONAL_NUMBER':
  			return types[4];
  		case 'VOICEMAIL':
  			return types[5];
  		case 'UAN':
  			return types[6];
  		case 'PAGER':
  			return types[7];
  		case 'VOIP':
  			return types[8];
  		case 'SHARED_COST':
  			return types[9];
  	}
  }

  function validateMetadata(metadata) {
  	if (!metadata) {
  		throw new Error('[libphonenumber-js] `metadata` argument not passed. Check your arguments.');
  	}

  	// `country_phone_code_to_countries` was renamed to
  	// `country_calling_codes` in `1.0.18`.
  	if (!is_object(metadata) || !is_object(metadata.countries) || !is_object(metadata.country_calling_codes) && !is_object(metadata.country_phone_code_to_countries)) {
  		throw new Error('[libphonenumber-js] `metadata` argument was passed but it\'s not a valid metadata. Must be an object having `.countries` and `.country_calling_codes` child object properties. Got ' + (is_object(metadata) ? 'an object of shape: { ' + Object.keys(metadata).join(', ') + ' }' : 'a ' + type_of(metadata) + ': ' + metadata) + '.');
  	}
  }

  // Babel transforms `typeof` into some "branches"
  // so istanbul will show this as "branch not covered".
  /* istanbul ignore next */
  var is_object = function is_object(_) {
  	return (typeof _ === 'undefined' ? 'undefined' : _typeof(_)) === 'object';
  };

  // Babel transforms `typeof` into some "branches"
  // so istanbul will show this as "branch not covered".
  /* istanbul ignore next */
  var type_of = function type_of(_) {
  	return typeof _ === 'undefined' ? 'undefined' : _typeof(_);
  };

  /**
   * Returns "country calling code" for a country.
   * Throws an error if the country doesn't exist or isn't supported by this library.
   * @param  {string} country
   * @param  {object} metadata
   * @return {string}
   * @example
   * // Returns "44"
   * getCountryCallingCode("GB")
   */
  function getCountryCallingCode(country, metadata) {
  	metadata = new Metadata(metadata);
  	if (metadata.hasCountry(country)) {
  		return metadata.country(country).countryCallingCode();
  	}
  	throw new Error('Unknown country: ' + country);
  }

  function isSupportedCountry(country, metadata) {
  	// metadata = new Metadata(metadata)
  	// return metadata.hasCountry(country)
  	return metadata.countries[country] !== undefined;
  }

  // The RFC 3966 format for extensions.
  var RFC3966_EXTN_PREFIX = ';ext=';

  // Pattern to capture digits used in an extension.
  // Places a maximum length of '7' for an extension.
  var CAPTURING_EXTN_DIGITS = '([' + VALID_DIGITS + ']{1,7})';

  /**
   * Regexp of all possible ways to write extensions, for use when parsing. This
   * will be run as a case-insensitive regexp match. Wide character versions are
   * also provided after each ASCII version. There are three regular expressions
   * here. The first covers RFC 3966 format, where the extension is added using
   * ';ext='. The second more generic one starts with optional white space and
   * ends with an optional full stop (.), followed by zero or more spaces/tabs
   * /commas and then the numbers themselves. The other one covers the special
   * case of American numbers where the extension is written with a hash at the
   * end, such as '- 503#'. Note that the only capturing groups should be around
   * the digits that you want to capture as part of the extension, or else parsing
   * will fail! We allow two options for representing the accented o - the
   * character itself, and one in the unicode decomposed form with the combining
   * acute accent.
   */
  function create_extension_pattern(purpose) {
  	// One-character symbols that can be used to indicate an extension.
  	var single_extension_characters = 'x\uFF58#\uFF03~\uFF5E';

  	switch (purpose) {
  		// For parsing, we are slightly more lenient in our interpretation than for matching. Here we
  		// allow "comma" and "semicolon" as possible extension indicators. When matching, these are
  		case 'parsing':
  			single_extension_characters = ',;' + single_extension_characters;
  	}

  	return RFC3966_EXTN_PREFIX + CAPTURING_EXTN_DIGITS + '|' + '[ \xA0\\t,]*' + '(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|' +
  	// "доб."
  	'\u0434\u043E\u0431|' + '[' + single_extension_characters + ']|int|anexo|\uFF49\uFF4E\uFF54)' + '[:\\.\uFF0E]?[ \xA0\\t,-]*' + CAPTURING_EXTN_DIGITS + '#?|' + '[- ]+([' + VALID_DIGITS + ']{1,5})#';
  }

  /**
   * Regexp of all possible ways to write extensions, for use when parsing. This
   * will be run as a case-insensitive regexp match. Wide character versions are
   * also provided after each ASCII version. There are three regular expressions
   * here. The first covers RFC 3966 format, where the extension is added using
   * ';ext='. The second more generic one starts with optional white space and
   * ends with an optional full stop (.), followed by zero or more spaces/tabs
   * /commas and then the numbers themselves. The other one covers the special
   * case of American numbers where the extension is written with a hash at the
   * end, such as '- 503#'. Note that the only capturing groups should be around
   * the digits that you want to capture as part of the extension, or else parsing
   * will fail! We allow two options for representing the accented o - the
   * character itself, and one in the unicode decomposed form with the combining
   * acute accent.
   */
  var EXTN_PATTERNS_FOR_PARSING = create_extension_pattern('parsing');

  var EXTN_PATTERNS_FOR_MATCHING = create_extension_pattern('matching');

  // Regexp of all known extension prefixes used by different regions followed by
  // 1 or more valid digits, for use when parsing.
  var EXTN_PATTERN = new RegExp('(?:' + EXTN_PATTERNS_FOR_PARSING + ')$', 'i');

  // Strips any extension (as in, the part of the number dialled after the call is
  // connected, usually indicated with extn, ext, x or similar) from the end of
  // the number, and returns it.
  function extractExtension(number) {
  	var start = number.search(EXTN_PATTERN);
  	if (start < 0) {
  		return {};
  	}

  	// If we find a potential extension, and the number preceding this is a viable
  	// number, we assume it is an extension.
  	var number_without_extension = number.slice(0, start);

  	var matches = number.match(EXTN_PATTERN);
  	var i = 1;
  	while (i < matches.length) {
  		if (matches[i] != null && matches[i].length > 0) {
  			return {
  				number: number_without_extension,
  				ext: matches[i]
  			};
  		}
  		i++;
  	}
  }

  //  Regular expression of viable phone numbers. This is location independent.
  //  Checks we have at least three leading digits, and only valid punctuation,
  //  alpha characters and digits in the phone number. Does not include extension
  //  data. The symbol 'x' is allowed here as valid punctuation since it is often
  //  used as a placeholder for carrier codes, for example in Brazilian phone
  //  numbers. We also allow multiple '+' characters at the start.
  //
  //  Corresponds to the following:
  //  [digits]{minLengthNsn}|
  //  plus_sign*
  //  (([punctuation]|[star])*[digits]){3,}([punctuation]|[star]|[digits]|[alpha])*
  //
  //  The first reg-ex is to allow short numbers (two digits long) to be parsed if
  //  they are entered as "15" etc, but only if there is no punctuation in them.
  //  The second expression restricts the number of digits to three or more, but
  //  then allows them to be in international form, and to have alpha-characters
  //  and punctuation. We split up the two reg-exes here and combine them when
  //  creating the reg-ex VALID_PHONE_NUMBER_PATTERN itself so we can prefix it
  //  with ^ and append $ to each branch.
  //
  //  "Note VALID_PUNCTUATION starts with a -,
  //   so must be the first in the range" (c) Google devs.
  //  (wtf did they mean by saying that; probably nothing)
  //
  var MIN_LENGTH_PHONE_NUMBER_PATTERN = '[' + VALID_DIGITS + ']{' + MIN_LENGTH_FOR_NSN + '}';
  //
  // And this is the second reg-exp:
  // (see MIN_LENGTH_PHONE_NUMBER_PATTERN for a full description of this reg-exp)
  //
  var VALID_PHONE_NUMBER = '[' + PLUS_CHARS + ']{0,1}' + '(?:' + '[' + VALID_PUNCTUATION + ']*' + '[' + VALID_DIGITS + ']' + '){3,}' + '[' + VALID_PUNCTUATION + VALID_DIGITS + ']*';

  // The combined regular expression for valid phone numbers:
  //
  var VALID_PHONE_NUMBER_PATTERN = new RegExp(
  // Either a short two-digit-only phone number
  '^' + MIN_LENGTH_PHONE_NUMBER_PATTERN + '$' + '|' +
  // Or a longer fully parsed phone number (min 3 characters)
  '^' + VALID_PHONE_NUMBER +
  // Phone number extensions
  '(?:' + EXTN_PATTERNS_FOR_PARSING + ')?' + '$', 'i');

  // Checks to see if the string of characters could possibly be a phone number at
  // all. At the moment, checks to see that the string begins with at least 2
  // digits, ignoring any punctuation commonly found in phone numbers. This method
  // does not require the number to be normalized in advance - but does assume
  // that leading non-number symbols have been removed, such as by the method
  // `extract_possible_number`.
  //
  function isViablePhoneNumber(number) {
  	return number.length >= MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number);
  }

  // These mappings map a character (key) to a specific digit that should
  // replace it for normalization purposes. Non-European digits that
  // may be used in phone numbers are mapped to a European equivalent.
  //
  // E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
  //
  var DIGITS = {
  	'0': '0',
  	'1': '1',
  	'2': '2',
  	'3': '3',
  	'4': '4',
  	'5': '5',
  	'6': '6',
  	'7': '7',
  	'8': '8',
  	'9': '9',
  	'\uFF10': '0', // Fullwidth digit 0
  	'\uFF11': '1', // Fullwidth digit 1
  	'\uFF12': '2', // Fullwidth digit 2
  	'\uFF13': '3', // Fullwidth digit 3
  	'\uFF14': '4', // Fullwidth digit 4
  	'\uFF15': '5', // Fullwidth digit 5
  	'\uFF16': '6', // Fullwidth digit 6
  	'\uFF17': '7', // Fullwidth digit 7
  	'\uFF18': '8', // Fullwidth digit 8
  	'\uFF19': '9', // Fullwidth digit 9
  	'\u0660': '0', // Arabic-indic digit 0
  	'\u0661': '1', // Arabic-indic digit 1
  	'\u0662': '2', // Arabic-indic digit 2
  	'\u0663': '3', // Arabic-indic digit 3
  	'\u0664': '4', // Arabic-indic digit 4
  	'\u0665': '5', // Arabic-indic digit 5
  	'\u0666': '6', // Arabic-indic digit 6
  	'\u0667': '7', // Arabic-indic digit 7
  	'\u0668': '8', // Arabic-indic digit 8
  	'\u0669': '9', // Arabic-indic digit 9
  	'\u06F0': '0', // Eastern-Arabic digit 0
  	'\u06F1': '1', // Eastern-Arabic digit 1
  	'\u06F2': '2', // Eastern-Arabic digit 2
  	'\u06F3': '3', // Eastern-Arabic digit 3
  	'\u06F4': '4', // Eastern-Arabic digit 4
  	'\u06F5': '5', // Eastern-Arabic digit 5
  	'\u06F6': '6', // Eastern-Arabic digit 6
  	'\u06F7': '7', // Eastern-Arabic digit 7
  	'\u06F8': '8', // Eastern-Arabic digit 8
  	'\u06F9': '9' // Eastern-Arabic digit 9
  };

  function parseDigit(character) {
  	return DIGITS[character];
  }

  /**
   * Parses phone number digits from a string.
   * Drops all punctuation leaving only digits.
   * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
   * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
   * @param  {string} string
   * @return {string}
   * @example
   * ```js
   * parseDigits('8 (800) 555')
   * // Outputs '8800555'.
   * ```
   */
  function parseDigits(string) {
  	var result = '';

  	// Using `.split('')` here instead of normal `for ... of`
  	// because the importing application doesn't neccessarily include an ES6 polyfill.
  	// The `.split('')` approach discards "exotic" UTF-8 characters
  	// (the ones consisting of four bytes) but digits
  	// (including non-European ones) don't fall into that range
  	// so such "exotic" characters would be discarded anyway.
  	for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  		var _ref;

  		if (_isArray) {
  			if (_i >= _iterator.length) break;
  			_ref = _iterator[_i++];
  		} else {
  			_i = _iterator.next();
  			if (_i.done) break;
  			_ref = _i.value;
  		}

  		var character = _ref;

  		var digit = parseDigit(character);
  		if (digit) {
  			result += digit;
  		}
  	}

  	return result;
  }

  /**
   * Parses phone number characters from a string.
   * Drops all punctuation leaving only digits and the leading `+` sign (if any).
   * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
   * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
   * @param  {string} string
   * @return {string}
   * @example
   * ```js
   * parseIncompletePhoneNumber('8 (800) 555')
   * // Outputs '8800555'.
   * parseIncompletePhoneNumber('+7 800 555')
   * // Outputs '+7800555'.
   * ```
   */
  function parseIncompletePhoneNumber(string) {
  	var result = '';

  	// Using `.split('')` here instead of normal `for ... of`
  	// because the importing application doesn't neccessarily include an ES6 polyfill.
  	// The `.split('')` approach discards "exotic" UTF-8 characters
  	// (the ones consisting of four bytes) but digits
  	// (including non-European ones) don't fall into that range
  	// so such "exotic" characters would be discarded anyway.
  	for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  		var _ref;

  		if (_isArray) {
  			if (_i >= _iterator.length) break;
  			_ref = _iterator[_i++];
  		} else {
  			_i = _iterator.next();
  			if (_i.done) break;
  			_ref = _i.value;
  		}

  		var character = _ref;

  		result += parsePhoneNumberCharacter(character, result) || '';
  	}

  	return result;
  }

  /**
   * `input-format` `parse()` function.
   * https://github.com/catamphetamine/input-format
   * @param  {string} character - Yet another character from raw input string.
   * @param  {string} value - The value parsed so far.
   * @param  {object} meta - Optional custom use-case-specific metadata.
   * @return {string?} The parsed character.
   */
  function parsePhoneNumberCharacter(character, value) {
  	// Only allow a leading `+`.
  	if (character === '+') {
  		// If this `+` is not the first parsed character
  		// then discard it.
  		if (value) {
  			return;
  		}

  		return '+';
  	}

  	// Allow digits.
  	return parseDigit(character);
  }

  var NON_FIXED_LINE_PHONE_TYPES = ['MOBILE', 'PREMIUM_RATE', 'TOLL_FREE', 'SHARED_COST', 'VOIP', 'PERSONAL_NUMBER', 'PAGER', 'UAN', 'VOICEMAIL'];

  // Finds out national phone number type (fixed line, mobile, etc)
  function getNumberType(input) {
  	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  	var metadata = arguments[2];

  	// When `parse()` returned `{}`
  	// meaning that the phone number is not a valid one.
  	if (!input.country) {
  		return;
  	}

  	metadata = new Metadata(metadata);

  	if (!metadata.hasCountry(input.country)) {
  		throw new Error('Unknown country: ' + input.country);
  	}

  	var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  	metadata.country(input.country);

  	// The following is copy-pasted from the original function:
  	// https://github.com/googlei18n/libphonenumber/blob/3ea547d4fbaa2d0b67588904dfa5d3f2557c27ff/javascript/i18n/phonenumbers/phonenumberutil.js#L2835

  	// Is this national number even valid for this country
  	if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern())) {
  		return;
  	}

  	// Is it fixed line number
  	if (is_of_type(nationalNumber, 'FIXED_LINE', metadata)) {
  		// Because duplicate regular expressions are removed
  		// to reduce metadata size, if "mobile" pattern is ""
  		// then it means it was removed due to being a duplicate of the fixed-line pattern.
  		//
  		if (metadata.type('MOBILE') && metadata.type('MOBILE').pattern() === '') {
  			return 'FIXED_LINE_OR_MOBILE';
  		}

  		// v1 metadata.
  		// Legacy.
  		// Deprecated.
  		if (!metadata.type('MOBILE')) {
  			return 'FIXED_LINE_OR_MOBILE';
  		}

  		// Check if the number happens to qualify as both fixed line and mobile.
  		// (no such country in the minimal metadata set)
  		/* istanbul ignore if */
  		if (is_of_type(nationalNumber, 'MOBILE', metadata)) {
  			return 'FIXED_LINE_OR_MOBILE';
  		}

  		return 'FIXED_LINE';
  	}

  	for (var _iterator = NON_FIXED_LINE_PHONE_TYPES, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  		var _ref;

  		if (_isArray) {
  			if (_i >= _iterator.length) break;
  			_ref = _iterator[_i++];
  		} else {
  			_i = _iterator.next();
  			if (_i.done) break;
  			_ref = _i.value;
  		}

  		var _type = _ref;

  		if (is_of_type(nationalNumber, _type, metadata)) {
  			return _type;
  		}
  	}
  }

  function is_of_type(nationalNumber, type, metadata) {
  	type = metadata.type(type);

  	if (!type || !type.pattern()) {
  		return false;
  	}

  	// Check if any possible number lengths are present;
  	// if so, we use them to avoid checking
  	// the validation pattern if they don't match.
  	// If they are absent, this means they match
  	// the general description, which we have
  	// already checked before a specific number type.
  	if (type.possibleLengths() && type.possibleLengths().indexOf(nationalNumber.length) < 0) {
  		return false;
  	}

  	return matchesEntirely(nationalNumber, type.pattern());
  }

  // Should only be called for the "new" metadata which has "possible lengths".
  function checkNumberLengthForType(nationalNumber, type, metadata) {
  	var type_info = metadata.type(type);

  	// There should always be "<possiblePengths/>" set for every type element.
  	// This is declared in the XML schema.
  	// For size efficiency, where a sub-description (e.g. fixed-line)
  	// has the same "<possiblePengths/>" as the "general description", this is missing,
  	// so we fall back to the "general description". Where no numbers of the type
  	// exist at all, there is one possible length (-1) which is guaranteed
  	// not to match the length of any real phone number.
  	var possible_lengths = type_info && type_info.possibleLengths() || metadata.possibleLengths();
  	// let local_lengths    = type_info && type.possibleLengthsLocal() || metadata.possibleLengthsLocal()

  	if (type === 'FIXED_LINE_OR_MOBILE') {
  		// No such country in metadata.
  		/* istanbul ignore next */
  		if (!metadata.type('FIXED_LINE')) {
  			// The rare case has been encountered where no fixedLine data is available
  			// (true for some non-geographical entities), so we just check mobile.
  			return checkNumberLengthForType(nationalNumber, 'MOBILE', metadata);
  		}

  		var mobile_type = metadata.type('MOBILE');

  		if (mobile_type) {
  			// Merge the mobile data in if there was any. "Concat" creates a new
  			// array, it doesn't edit possible_lengths in place, so we don't need a copy.
  			// Note that when adding the possible lengths from mobile, we have
  			// to again check they aren't empty since if they are this indicates
  			// they are the same as the general desc and should be obtained from there.
  			possible_lengths = mergeArrays(possible_lengths, mobile_type.possibleLengths());
  			// The current list is sorted; we need to merge in the new list and
  			// re-sort (duplicates are okay). Sorting isn't so expensive because
  			// the lists are very small.

  			// if (local_lengths)
  			// {
  			// 	local_lengths = mergeArrays(local_lengths, mobile_type.possibleLengthsLocal())
  			// }
  			// else
  			// {
  			// 	local_lengths = mobile_type.possibleLengthsLocal()
  			// }
  		}
  	}
  	// If the type doesn't exist then return 'INVALID_LENGTH'.
  	else if (type && !type_info) {
  			return 'INVALID_LENGTH';
  		}

  	var actual_length = nationalNumber.length;

  	// In `libphonenumber-js` all "local-only" formats are dropped for simplicity.
  	// // This is safe because there is never an overlap beween the possible lengths
  	// // and the local-only lengths; this is checked at build time.
  	// if (local_lengths && local_lengths.indexOf(nationalNumber.length) >= 0)
  	// {
  	// 	return 'IS_POSSIBLE_LOCAL_ONLY'
  	// }

  	var minimum_length = possible_lengths[0];

  	if (minimum_length === actual_length) {
  		return 'IS_POSSIBLE';
  	}

  	if (minimum_length > actual_length) {
  		return 'TOO_SHORT';
  	}

  	if (possible_lengths[possible_lengths.length - 1] < actual_length) {
  		return 'TOO_LONG';
  	}

  	// We skip the first element since we've already checked it.
  	return possible_lengths.indexOf(actual_length, 1) >= 0 ? 'IS_POSSIBLE' : 'INVALID_LENGTH';
  }

  function isPossibleNumber(input, options, metadata) {
  	/* istanbul ignore if */
  	if (options === undefined) {
  		options = {};
  	}

  	metadata = new Metadata(metadata);

  	if (options.v2) {
  		if (!input.countryCallingCode) {
  			throw new Error('Invalid phone number object passed');
  		}
  		metadata.chooseCountryByCountryCallingCode(input.countryCallingCode);
  	} else {
  		if (!input.phone) {
  			return false;
  		}
  		if (input.country) {
  			if (!metadata.hasCountry(input.country)) {
  				throw new Error('Unknown country: ' + input.country);
  			}
  			metadata.country(input.country);
  		} else {
  			if (!input.countryCallingCode) {
  				throw new Error('Invalid phone number object passed');
  			}
  			metadata.chooseCountryByCountryCallingCode(input.countryCallingCode);
  		}
  	}

  	if (!metadata.possibleLengths()) {
  		throw new Error('Metadata too old');
  	}

  	return is_possible_number(input.phone || input.nationalNumber, undefined, metadata);
  }

  function is_possible_number(national_number, is_international, metadata) {
  	switch (checkNumberLengthForType(national_number, undefined, metadata)) {
  		case 'IS_POSSIBLE':
  			return true;
  		// case 'IS_POSSIBLE_LOCAL_ONLY':
  		// 	return !is_international
  		default:
  			return false;
  	}
  }

  var CAPTURING_DIGIT_PATTERN = new RegExp('([' + VALID_DIGITS + '])');

  /**
   * Pattern that makes it easy to distinguish whether a region has a single
   * international dialing prefix or not. If a region has a single international
   * prefix (e.g. 011 in USA), it will be represented as a string that contains
   * a sequence of ASCII digits, and possibly a tilde, which signals waiting for
   * the tone. If there are multiple available international prefixes in a
   * region, they will be represented as a regex string that always contains one
   * or more characters that are not ASCII digits or a tilde.
   */
  var SINGLE_IDD_PREFIX = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;

  // For regions that have multiple IDD prefixes
  // a preferred IDD prefix is returned.
  function getIDDPrefix(country, metadata) {
  	var countryMetadata = new Metadata(metadata);
  	countryMetadata.country(country);

  	if (SINGLE_IDD_PREFIX.test(countryMetadata.IDDPrefix())) {
  		return countryMetadata.IDDPrefix();
  	}

  	return countryMetadata.defaultIDDPrefix();
  }

  function stripIDDPrefix(number, country, metadata) {
  	if (!country) {
  		return;
  	}

  	// Check if the number is IDD-prefixed.

  	var countryMetadata = new Metadata(metadata);
  	countryMetadata.country(country);

  	var IDDPrefixPattern = new RegExp(countryMetadata.IDDPrefix());

  	if (number.search(IDDPrefixPattern) !== 0) {
  		return;
  	}

  	// Strip IDD prefix.
  	number = number.slice(number.match(IDDPrefixPattern)[0].length);

  	// Some kind of a weird edge case.
  	// No explanation from Google given.
  	var matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);
  	/* istanbul ignore next */
  	if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
  		if (matchedGroups[1] === '0') {
  			return;
  		}
  	}

  	return number;
  }

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  // https://www.ietf.org/rfc/rfc3966.txt

  /**
   * @param  {string} text - Phone URI (RFC 3966).
   * @return {object} `{ ?number, ?ext }`.
   */
  function parseRFC3966(text) {
  	var number = void 0;
  	var ext = void 0;

  	// Replace "tel:" with "tel=" for parsing convenience.
  	text = text.replace(/^tel:/, 'tel=');

  	for (var _iterator = text.split(';'), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  		var _ref;

  		if (_isArray) {
  			if (_i >= _iterator.length) break;
  			_ref = _iterator[_i++];
  		} else {
  			_i = _iterator.next();
  			if (_i.done) break;
  			_ref = _i.value;
  		}

  		var part = _ref;

  		var _part$split = part.split('='),
  		    _part$split2 = _slicedToArray(_part$split, 2),
  		    name = _part$split2[0],
  		    value = _part$split2[1];

  		switch (name) {
  			case 'tel':
  				number = value;
  				break;
  			case 'ext':
  				ext = value;
  				break;
  			case 'phone-context':
  				// Only "country contexts" are supported.
  				// "Domain contexts" are ignored.
  				if (value[0] === '+') {
  					number = value + number;
  				}
  				break;
  		}
  	}

  	// If the phone number is not viable, then abort.
  	if (!isViablePhoneNumber(number)) {
  		return {};
  	}

  	var result = { number: number };
  	if (ext) {
  		result.ext = ext;
  	}
  	return result;
  }

  /**
   * @param  {object} - `{ ?number, ?extension }`.
   * @return {string} Phone URI (RFC 3966).
   */
  function formatRFC3966(_ref2) {
  	var number = _ref2.number,
  	    ext = _ref2.ext;

  	if (!number) {
  		return '';
  	}

  	if (number[0] !== '+') {
  		throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  	}

  	return 'tel:' + number + (ext ? ';ext=' + ext : '');
  }

  /**
   * Checks if a given phone number is valid.
   *
   * If the `number` is a string, it will be parsed to an object,
   * but only if it contains only valid phone number characters (including punctuation).
   * If the `number` is an object, it is used as is.
   *
   * The optional `defaultCountry` argument is the default country.
   * I.e. it does not restrict to just that country,
   * e.g. in those cases where several countries share
   * the same phone numbering rules (NANPA, Britain, etc).
   * For example, even though the number `07624 369230`
   * belongs to the Isle of Man ("IM" country code)
   * calling `isValidNumber('07624369230', 'GB', metadata)`
   * still returns `true` because the country is not restricted to `GB`,
   * it's just that `GB` is the default one for the phone numbering rules.
   * For restricting the country see `isValidNumberForRegion()`
   * though restricting a country might not be a good idea.
   * https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
   *
   * Examples:
   *
   * ```js
   * isValidNumber('+78005553535', metadata)
   * isValidNumber('8005553535', 'RU', metadata)
   * isValidNumber('88005553535', 'RU', metadata)
   * isValidNumber({ phone: '8005553535', country: 'RU' }, metadata)
   * ```
   */
  function isValidNumber(input) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var metadata = arguments[2];

    metadata = new Metadata(metadata);

    // This is just to support `isValidNumber({})`
    // for cases when `parseNumber()` returns `{}`.
    if (!input.country) {
      return false;
    }

    if (!metadata.hasCountry(input.country)) {
      throw new Error('Unknown country: ' + input.country);
    }

    metadata.country(input.country);

    // By default, countries only have type regexps when it's required for
    // distinguishing different countries having the same `countryCallingCode`.
    if (metadata.hasTypes()) {
      return getNumberType(input, options, metadata.metadata) !== undefined;
    }

    // If there are no type regexps for this country in metadata then use
    // `nationalNumberPattern` as a "better than nothing" replacement.
    var national_number = options.v2 ? input.nationalNumber : input.phone;
    return matchesEntirely(national_number, metadata.nationalNumberPattern());
  }

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var defaultOptions = {
  	formatExtension: function formatExtension(formattedNumber, extension, metadata) {
  		return '' + formattedNumber + metadata.ext() + extension;
  	}

  	// Formats a phone number
  	//
  	// Example use cases:
  	//
  	// ```js
  	// formatNumber('8005553535', 'RU', 'INTERNATIONAL')
  	// formatNumber('8005553535', 'RU', 'INTERNATIONAL', metadata)
  	// formatNumber({ phone: '8005553535', country: 'RU' }, 'INTERNATIONAL')
  	// formatNumber({ phone: '8005553535', country: 'RU' }, 'INTERNATIONAL', metadata)
  	// formatNumber('+78005553535', 'NATIONAL')
  	// formatNumber('+78005553535', 'NATIONAL', metadata)
  	// ```
  	//
  };function formatNumber$1(input, format, options, metadata) {
  	// Apply default options.
  	if (options) {
  		options = _extends({}, defaultOptions, options);
  	} else {
  		options = defaultOptions;
  	}

  	metadata = new Metadata(metadata);

  	if (input.country) {
  		// Validate `input.country`.
  		if (!metadata.hasCountry(input.country)) {
  			throw new Error('Unknown country: ' + input.country);
  		}
  		metadata.country(input.country);
  	} else if (input.countryCallingCode) {
  		metadata.chooseCountryByCountryCallingCode(input.countryCallingCode);
  	} else return input.phone || '';

  	var countryCallingCode = metadata.countryCallingCode();

  	var nationalNumber = options.v2 ? input.nationalNumber : input.phone;

  	// This variable should have been declared inside `case`s
  	// but Babel has a bug and it says "duplicate variable declaration".
  	var number = void 0;

  	switch (format) {
  		case 'NATIONAL':
  			// Legacy argument support.
  			// (`{ country: ..., phone: '' }`)
  			if (!nationalNumber) {
  				return '';
  			}
  			number = format_national_number(nationalNumber, 'NATIONAL', metadata);
  			return addExtension(number, input.ext, metadata, options.formatExtension);

  		case 'INTERNATIONAL':
  			// Legacy argument support.
  			// (`{ country: ..., phone: '' }`)
  			if (!nationalNumber) {
  				return '+' + countryCallingCode;
  			}
  			number = format_national_number(nationalNumber, 'INTERNATIONAL', metadata);
  			number = '+' + countryCallingCode + ' ' + number;
  			return addExtension(number, input.ext, metadata, options.formatExtension);

  		case 'E.164':
  			// `E.164` doesn't define "phone number extensions".
  			return '+' + countryCallingCode + nationalNumber;

  		case 'RFC3966':
  			return formatRFC3966({
  				number: '+' + countryCallingCode + nationalNumber,
  				ext: input.ext
  			});

  		case 'IDD':
  			if (!options.fromCountry) {
  				return;
  				// throw new Error('`fromCountry` option not passed for IDD-prefixed formatting.')
  			}
  			var IDDPrefix = getIDDPrefix(options.fromCountry, metadata.metadata);
  			if (!IDDPrefix) {
  				return;
  			}
  			if (options.humanReadable) {
  				var formattedForSameCountryCallingCode = countryCallingCode && formatIDDSameCountryCallingCodeNumber(nationalNumber, metadata.countryCallingCode(), options.fromCountry, metadata);
  				if (formattedForSameCountryCallingCode) {
  					number = formattedForSameCountryCallingCode;
  				} else {
  					number = IDDPrefix + ' ' + countryCallingCode + ' ' + format_national_number(nationalNumber, 'INTERNATIONAL', metadata);
  				}
  				return addExtension(number, input.ext, metadata, options.formatExtension);
  			}
  			return '' + IDDPrefix + countryCallingCode + nationalNumber;

  		default:
  			throw new Error('Unknown "format" argument passed to "formatNumber()": "' + format + '"');
  	}
  }

  // This was originally set to $1 but there are some countries for which the
  // first group is not used in the national pattern (e.g. Argentina) so the $1
  // group does not match correctly.  Therefore, we use \d, so that the first
  // group actually used in the pattern will be matched.
  var FIRST_GROUP_PATTERN = /(\$\d)/;

  function format_national_number_using_format(number, format, useInternationalFormat, includeNationalPrefixForNationalFormat, metadata) {
  	var formattedNumber = number.replace(new RegExp(format.pattern()), useInternationalFormat ? format.internationalFormat() : format.nationalPrefixFormattingRule() && (!format.nationalPrefixIsOptionalWhenFormatting() || includeNationalPrefixForNationalFormat) ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format());

  	if (useInternationalFormat) {
  		return changeInternationalFormatStyle(formattedNumber);
  	}

  	return formattedNumber;
  }

  function format_national_number(number, format_as, metadata) {
  	var format = choose_format_for_number(metadata.formats(), number);
  	if (!format) {
  		return number;
  	}
  	return format_national_number_using_format(number, format, format_as === 'INTERNATIONAL', true);
  }

  function choose_format_for_number(available_formats, national_number) {
  	for (var _iterator = available_formats, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  		var _ref;

  		if (_isArray) {
  			if (_i >= _iterator.length) break;
  			_ref = _iterator[_i++];
  		} else {
  			_i = _iterator.next();
  			if (_i.done) break;
  			_ref = _i.value;
  		}

  		var format = _ref;

  		// Validate leading digits
  		if (format.leadingDigitsPatterns().length > 0) {
  			// The last leading_digits_pattern is used here, as it is the most detailed
  			var last_leading_digits_pattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1];

  			// If leading digits don't match then move on to the next phone number format
  			if (national_number.search(last_leading_digits_pattern) !== 0) {
  				continue;
  			}
  		}

  		// Check that the national number matches the phone number format regular expression
  		if (matchesEntirely(national_number, format.pattern())) {
  			return format;
  		}
  	}
  }

  // Removes brackets and replaces dashes with spaces.
  //
  // E.g. "(999) 111-22-33" -> "999 111 22 33"
  //
  // For some reason Google's metadata contains `<intlFormat/>`s with brackets and dashes.
  // Meanwhile, there's no single opinion about using punctuation in international phone numbers.
  //
  // For example, Google's `<intlFormat/>` for USA is `+1 213-373-4253`.
  // And here's a quote from WikiPedia's "North American Numbering Plan" page:
  // https://en.wikipedia.org/wiki/North_American_Numbering_Plan
  //
  // "The country calling code for all countries participating in the NANP is 1.
  // In international format, an NANP number should be listed as +1 301 555 01 00,
  // where 301 is an area code (Maryland)."
  //
  // I personally prefer the international format without any punctuation.
  // For example, brackets are remnants of the old age, meaning that the
  // phone number part in brackets (so called "area code") can be omitted
  // if dialing within the same "area".
  // And hyphens were clearly introduced for splitting local numbers into memorizable groups.
  // For example, remembering "5553535" is difficult but "555-35-35" is much simpler.
  // Imagine a man taking a bus from home to work and seeing an ad with a phone number.
  // He has a couple of seconds to memorize that number until it passes by.
  // If it were spaces instead of hyphens the man wouldn't necessarily get it,
  // but with hyphens instead of spaces the grouping is more explicit.
  // I personally think that hyphens introduce visual clutter,
  // so I prefer replacing them with spaces in international numbers.
  // In the modern age all output is done on displays where spaces are clearly distinguishable
  // so hyphens can be safely replaced with spaces without losing any legibility.
  //
  function changeInternationalFormatStyle(local) {
  	return local.replace(new RegExp('[' + VALID_PUNCTUATION + ']+', 'g'), ' ').trim();
  }

  function addExtension(formattedNumber, ext, metadata, formatExtension) {
  	return ext ? formatExtension(formattedNumber, ext, metadata) : formattedNumber;
  }

  function formatIDDSameCountryCallingCodeNumber(number, toCountryCallingCode, fromCountry, toCountryMetadata) {
  	var fromCountryMetadata = new Metadata(toCountryMetadata.metadata);
  	fromCountryMetadata.country(fromCountry);

  	// If calling within the same country calling code.
  	if (toCountryCallingCode === fromCountryMetadata.countryCallingCode()) {
  		// For NANPA regions, return the national format for these regions
  		// but prefix it with the country calling code.
  		if (toCountryCallingCode === '1') {
  			return toCountryCallingCode + ' ' + format_national_number(number, 'NATIONAL', toCountryMetadata);
  		}

  		// If regions share a country calling code, the country calling code need
  		// not be dialled. This also applies when dialling within a region, so this
  		// if clause covers both these cases. Technically this is the case for
  		// dialling from La Reunion to other overseas departments of France (French
  		// Guiana, Martinique, Guadeloupe), but not vice versa - so we don't cover
  		// this edge case for now and for those cases return the version including
  		// country calling code. Details here:
  		// http://www.petitfute.com/voyage/225-info-pratiques-reunion
  		//
  		return format_national_number(number, 'NATIONAL', toCountryMetadata);
  	}
  }

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var PhoneNumber = function () {
  	function PhoneNumber(countryCallingCode, nationalNumber, metadata) {
  		_classCallCheck$2(this, PhoneNumber);

  		if (!countryCallingCode) {
  			throw new TypeError('`countryCallingCode` not passed');
  		}
  		if (!nationalNumber) {
  			throw new TypeError('`nationalNumber` not passed');
  		}
  		// If country code is passed then derive `countryCallingCode` from it.
  		// Also store the country code as `.country`.
  		if (isCountryCode(countryCallingCode)) {
  			this.country = countryCallingCode;
  			var _metadata = new Metadata(metadata);
  			_metadata.country(countryCallingCode);
  			countryCallingCode = _metadata.countryCallingCode();
  		}
  		this.countryCallingCode = countryCallingCode;
  		this.nationalNumber = nationalNumber;
  		this.number = '+' + this.countryCallingCode + this.nationalNumber;
  		this.metadata = metadata;
  	}

  	_createClass$1(PhoneNumber, [{
  		key: 'isPossible',
  		value: function isPossible() {
  			return isPossibleNumber(this, { v2: true }, this.metadata);
  		}
  	}, {
  		key: 'isValid',
  		value: function isValid() {
  			return isValidNumber(this, { v2: true }, this.metadata);
  		}

  		// // Is just an alias for `this.isValid() && this.country === country`.
  		// // https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
  		// isValidForRegion(country) {
  		// 	return isValidNumberForRegion(this, country, { v2: true }, this.metadata)
  		// }

  	}, {
  		key: 'getType',
  		value: function getType() {
  			return getNumberType(this, { v2: true }, this.metadata);
  		}
  	}, {
  		key: 'format',
  		value: function format(_format, options) {
  			return formatNumber$1(this, _format, options ? _extends$1({}, options, { v2: true }) : { v2: true }, this.metadata);
  		}
  	}, {
  		key: 'formatNational',
  		value: function formatNational(options) {
  			return this.format('NATIONAL', options);
  		}
  	}, {
  		key: 'formatInternational',
  		value: function formatInternational(options) {
  			return this.format('INTERNATIONAL', options);
  		}
  	}, {
  		key: 'getURI',
  		value: function getURI(options) {
  			return this.format('RFC3966', options);
  		}
  	}]);

  	return PhoneNumber;
  }();


  var isCountryCode = function isCountryCode(value) {
  	return (/^[A-Z]{2}$/.test(value)
  	);
  };

  // This is a port of Google Android `libphonenumber`'s

  // We don't allow input strings for parsing to be longer than 250 chars.
  // This prevents malicious input from consuming CPU.
  var MAX_INPUT_STRING_LENGTH = 250;

  // This consists of the plus symbol, digits, and arabic-indic digits.
  var PHONE_NUMBER_START_PATTERN = new RegExp('[' + PLUS_CHARS + VALID_DIGITS + ']');

  // Regular expression of trailing characters that we want to remove.
  var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp('[^' + VALID_DIGITS + ']+$');

  // `options`:
  //  {
  //    country:
  //    {
  //      restrict - (a two-letter country code)
  //                 the phone number must be in this country
  //
  //      default - (a two-letter country code)
  //                default country to use for phone number parsing and validation
  //                (if no country code could be derived from the phone number)
  //    }
  //  }
  //
  // Returns `{ country, number }`
  //
  // Example use cases:
  //
  // ```js
  // parse('8 (800) 555-35-35', 'RU')
  // parse('8 (800) 555-35-35', 'RU', metadata)
  // parse('8 (800) 555-35-35', { country: { default: 'RU' } })
  // parse('8 (800) 555-35-35', { country: { default: 'RU' } }, metadata)
  // parse('+7 800 555 35 35')
  // parse('+7 800 555 35 35', metadata)
  // ```
  //
  function parse(text) {
  	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  	var metadata = arguments[2];

  	metadata = new Metadata(metadata);

  	// Validate `defaultCountry`.
  	if (options.defaultCountry && !metadata.hasCountry(options.defaultCountry)) {
  		if (options.v2) {
  			throw new ParseError('INVALID_COUNTRY');
  		}
  		throw new Error('Unknown country: ' + options.defaultCountry);
  	}

  	// Parse the phone number.

  	var _parse_input = parse_input(text, options.v2),
  	    formatted_phone_number = _parse_input.number,
  	    ext = _parse_input.ext;

  	// If the phone number is not viable then return nothing.


  	if (!formatted_phone_number) {
  		if (options.v2) {
  			throw new ParseError('NOT_A_NUMBER');
  		}
  		return {};
  	}

  	var _parse_phone_number = parse_phone_number(formatted_phone_number, options.defaultCountry, metadata),
  	    country = _parse_phone_number.country,
  	    nationalNumber = _parse_phone_number.national_number,
  	    countryCallingCode = _parse_phone_number.countryCallingCode,
  	    carrierCode = _parse_phone_number.carrierCode;

  	if (!metadata.selectedCountry()) {
  		if (options.v2) {
  			throw new ParseError('INVALID_COUNTRY');
  		}
  		return {};
  	}

  	// Validate national (significant) number length.
  	if (nationalNumber.length < MIN_LENGTH_FOR_NSN) {
  		// Won't throw here because the regexp already demands length > 1.
  		/* istanbul ignore if */
  		if (options.v2) {
  			throw new ParseError('TOO_SHORT');
  		}
  		// Google's demo just throws an error in this case.
  		return {};
  	}

  	// Validate national (significant) number length.
  	//
  	// A sidenote:
  	//
  	// They say that sometimes national (significant) numbers
  	// can be longer than `MAX_LENGTH_FOR_NSN` (e.g. in Germany).
  	// https://github.com/googlei18n/libphonenumber/blob/7e1748645552da39c4e1ba731e47969d97bdb539/resources/phonenumber.proto#L36
  	// Such numbers will just be discarded.
  	//
  	if (nationalNumber.length > MAX_LENGTH_FOR_NSN) {
  		if (options.v2) {
  			throw new ParseError('TOO_LONG');
  		}
  		// Google's demo just throws an error in this case.
  		return {};
  	}

  	if (options.v2) {
  		var phoneNumber = new PhoneNumber(countryCallingCode, nationalNumber, metadata.metadata);

  		if (country) {
  			phoneNumber.country = country;
  		}
  		if (carrierCode) {
  			phoneNumber.carrierCode = carrierCode;
  		}
  		if (ext) {
  			phoneNumber.ext = ext;
  		}

  		return phoneNumber;
  	}

  	// Check if national phone number pattern matches the number.
  	// National number pattern is different for each country,
  	// even for those ones which are part of the "NANPA" group.
  	var valid = country && matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) ? true : false;

  	if (!options.extended) {
  		return valid ? result(country, nationalNumber, ext) : {};
  	}

  	return {
  		country: country,
  		countryCallingCode: countryCallingCode,
  		carrierCode: carrierCode,
  		valid: valid,
  		possible: valid ? true : options.extended === true && metadata.possibleLengths() && is_possible_number(nationalNumber, countryCallingCode !== undefined, metadata),
  		phone: nationalNumber,
  		ext: ext
  	};
  }

  /**
   * Extracts a parseable phone number.
   * @param  {string} text - Input.
   * @return {string}.
   */
  function extract_formatted_phone_number(text, v2) {
  	if (!text) {
  		return;
  	}

  	if (text.length > MAX_INPUT_STRING_LENGTH) {
  		if (v2) {
  			throw new ParseError('TOO_LONG');
  		}
  		return;
  	}

  	// Attempt to extract a possible number from the string passed in

  	var starts_at = text.search(PHONE_NUMBER_START_PATTERN);

  	if (starts_at < 0) {
  		return;
  	}

  	return text
  	// Trim everything to the left of the phone number
  	.slice(starts_at)
  	// Remove trailing non-numerical characters
  	.replace(AFTER_PHONE_NUMBER_END_PATTERN, '');
  }

  // Strips any national prefix (such as 0, 1) present in the number provided.
  // "Carrier codes" are only used  in Colombia and Brazil,
  // and only when dialing within those countries from a mobile phone to a fixed line number.
  function strip_national_prefix_and_carrier_code(number, metadata) {
  	if (!number || !metadata.nationalPrefixForParsing()) {
  		return { number: number };
  	}

  	// In many countries the national prefix
  	// is not just a constant digit (like `0` in UK)
  	// but can be different depending on the phone number
  	// (and can be also absent for some phone numbers).
  	//
  	// So `national_prefix_for_parsing` is used when parsing
  	// a national-prefixed (local) phone number
  	// into a national significant phone number
  	// extracting that possible national prefix out of it.
  	//
  	// Example `national_prefix_for_parsing` for Australia (AU) is `0|(183[12])`.
  	// Which means that in Australia the national prefix can be: `0`, `1831`, `1832`.

  	// Attempt to parse the first digits as a national prefix
  	var national_prefix_pattern = new RegExp('^(?:' + metadata.nationalPrefixForParsing() + ')');
  	var national_prefix_matcher = national_prefix_pattern.exec(number);

  	// If no national prefix is present in the phone number,
  	// but the national prefix is optional for this country,
  	// then consider this phone number valid.
  	//
  	// Google's reference `libphonenumber` implementation
  	// wouldn't recognize such phone numbers as valid,
  	// but I think it would perfectly make sense
  	// to consider such phone numbers as valid
  	// because if a national phone number was originally
  	// formatted without the national prefix
  	// then it must be parseable back into the original national number.
  	// In other words, `parse(format(number))`
  	// must always be equal to `number`.
  	//
  	if (!national_prefix_matcher) {
  		return { number: number };
  	}

  	var national_significant_number = void 0;

  	// In more complex cases just `national_prefix_for_parsing` regexp
  	// is not enough to extract the national number and then strip it
  	// like `number.slice(national_prefix.length)` because when parsing
  	// national numbers it's not always clear whether the first digits
  	// are a national prefix or part of the national significant number.
  	// For such cases `national_prefix_transform_rule` regexp is present
  	// which contains "capturing groups" that are later used in such
  	// `national_prefix_transform_rule` to transform the national number
  	// being parsed into the national significant number.
  	//
  	// Example.
  	// Country: U.S. Virgin Islands (VI).
  	// Country calling code: +1.
  	// Leading digits: 340.
  	// Phone number format: +1 (340) xxx-xxxx.
  	// National prefix: 1.
  	// National prefix for parsing: 1|([2-9]\d{6})$.
  	// National prefix transform rule: 340$1.
  	//
  	// So for input "13401234567" "national prefix for parsing" regexp
  	// will return "1" and the national significant number will be
  	// "13401234567".slice("1".length) === "(340) 123-4567".
  	//
  	// And for input "3401234567" "national prefix for parsing" regexp
  	// the "captured group" will be "3401234567" and the national significant
  	// number will be "3401234567".replace("340123", "340340123") === "(340) 3401234567".
  	//
  	// `national_prefix_matcher[captured_groups_count]` means that
  	// the corresponding "captured group" is not empty.
  	// It can be empty if the regexp either doesn't have any "capturing groups"
  	// or if the "capturing groups" are defined as optional.
  	// Example: "0?(?:...)?" for Argentina.
  	//
  	var captured_groups_count = national_prefix_matcher.length - 1;
  	if (metadata.nationalPrefixTransformRule() && national_prefix_matcher[captured_groups_count]) {
  		national_significant_number = number.replace(national_prefix_pattern, metadata.nationalPrefixTransformRule());
  	}
  	// If it's a simple-enough case then just strip the national prefix from the number.
  	else {
  			// National prefix is the whole substring matched by
  			// the `national_prefix_for_parsing` regexp.
  			var national_prefix = national_prefix_matcher[0];
  			national_significant_number = number.slice(national_prefix.length);
  		}

  	var carrierCode = void 0;
  	if (captured_groups_count > 0) {
  		carrierCode = national_prefix_matcher[1];
  	}

  	// The following is done in `get_country_and_national_number_for_local_number()` instead.
  	//
  	// // Verify the parsed national (significant) number for this country
  	// const national_number_rule = new RegExp(metadata.nationalNumberPattern())
  	// //
  	// // If the original number (before stripping national prefix) was viable,
  	// // and the resultant number is not, then prefer the original phone number.
  	// // This is because for some countries (e.g. Russia) the same digit could be both
  	// // a national prefix and a leading digit of a valid national phone number,
  	// // like `8` is the national prefix for Russia and both
  	// // `8 800 555 35 35` and `800 555 35 35` are valid numbers.
  	// if (matchesEntirely(number, national_number_rule) &&
  	// 		!matchesEntirely(national_significant_number, national_number_rule))
  	// {
  	// 	return number
  	// }

  	// Return the parsed national (significant) number
  	return {
  		number: national_significant_number,
  		carrierCode: carrierCode
  	};
  }

  function find_country_code(country_calling_code, national_phone_number, metadata) {
  	// Is always non-empty, because `country_calling_code` is always valid
  	var possible_countries = metadata.countryCallingCodes()[country_calling_code];

  	// If there's just one country corresponding to the country code,
  	// then just return it, without further phone number digits validation.
  	if (possible_countries.length === 1) {
  		return possible_countries[0];
  	}

  	return _find_country_code(possible_countries, national_phone_number, metadata.metadata);
  }

  // Changes `metadata` `country`.
  function _find_country_code(possible_countries, national_phone_number, metadata) {
  	metadata = new Metadata(metadata);

  	for (var _iterator = possible_countries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  		var _ref;

  		if (_isArray) {
  			if (_i >= _iterator.length) break;
  			_ref = _iterator[_i++];
  		} else {
  			_i = _iterator.next();
  			if (_i.done) break;
  			_ref = _i.value;
  		}

  		var country = _ref;

  		metadata.country(country);

  		// Leading digits check would be the simplest one
  		if (metadata.leadingDigits()) {
  			if (national_phone_number && national_phone_number.search(metadata.leadingDigits()) === 0) {
  				return country;
  			}
  		}
  		// Else perform full validation with all of those
  		// fixed-line/mobile/etc regular expressions.
  		else if (getNumberType({ phone: national_phone_number, country: country }, undefined, metadata.metadata)) {
  				return country;
  			}
  	}
  }

  /**
   * @param  {string} text - Input.
   * @return {object} `{ ?number, ?ext }`.
   */
  function parse_input(text, v2) {
  	// Parse RFC 3966 phone number URI.
  	if (text && text.indexOf('tel:') === 0) {
  		return parseRFC3966(text);
  	}

  	var number = extract_formatted_phone_number(text, v2);

  	// If the phone number is not viable, then abort.
  	if (!number || !isViablePhoneNumber(number)) {
  		return {};
  	}

  	// Attempt to parse extension first, since it doesn't require region-specific
  	// data and we want to have the non-normalised number here.
  	var with_extension_stripped = extractExtension(number);
  	if (with_extension_stripped.ext) {
  		return with_extension_stripped;
  	}

  	return { number: number };
  }

  /**
   * Creates `parse()` result object.
   */
  function result(country, national_number, ext) {
  	var result = {
  		country: country,
  		phone: national_number
  	};

  	if (ext) {
  		result.ext = ext;
  	}

  	return result;
  }

  /**
   * Parses a viable phone number.
   * Returns `{ country, countryCallingCode, national_number }`.
   */
  function parse_phone_number(formatted_phone_number, default_country, metadata) {
  	var _extractCountryCallin = extractCountryCallingCode(formatted_phone_number, default_country, metadata.metadata),
  	    countryCallingCode = _extractCountryCallin.countryCallingCode,
  	    number = _extractCountryCallin.number;

  	if (!number) {
  		return { countryCallingCode: countryCallingCode };
  	}

  	var country = void 0;

  	if (countryCallingCode) {
  		metadata.chooseCountryByCountryCallingCode(countryCallingCode);
  	} else if (default_country) {
  		metadata.country(default_country);
  		country = default_country;
  		countryCallingCode = getCountryCallingCode(default_country, metadata.metadata);
  	} else return {};

  	var _parse_national_numbe = parse_national_number(number, metadata),
  	    national_number = _parse_national_numbe.national_number,
  	    carrier_code = _parse_national_numbe.carrier_code;

  	// Sometimes there are several countries
  	// corresponding to the same country phone code
  	// (e.g. NANPA countries all having `1` country phone code).
  	// Therefore, to reliably determine the exact country,
  	// national (significant) number should have been parsed first.
  	//
  	// When `metadata.json` is generated, all "ambiguous" country phone codes
  	// get their countries populated with the full set of
  	// "phone number type" regular expressions.
  	//


  	var exactCountry = find_country_code(countryCallingCode, national_number, metadata);
  	if (exactCountry) {
  		country = exactCountry;
  		metadata.country(country);
  	}

  	return {
  		country: country,
  		countryCallingCode: countryCallingCode,
  		national_number: national_number,
  		carrierCode: carrier_code
  	};
  }

  function parse_national_number(number, metadata) {
  	var national_number = parseIncompletePhoneNumber(number);
  	var carrier_code = void 0;

  	// Parsing national prefixes and carrier codes
  	// is only required for local phone numbers
  	// but some people don't understand that
  	// and sometimes write international phone numbers
  	// with national prefixes (or maybe even carrier codes).
  	// http://ucken.blogspot.ru/2016/03/trunk-prefixes-in-skype4b.html
  	// Google's original library forgives such mistakes
  	// and so does this library, because it has been requested:
  	// https://github.com/catamphetamine/libphonenumber-js/issues/127

  	var _strip_national_prefi = strip_national_prefix_and_carrier_code(national_number, metadata),
  	    potential_national_number = _strip_national_prefi.number,
  	    carrierCode = _strip_national_prefi.carrierCode;

  	// If metadata has "possible lengths" then employ the new algorythm.


  	if (metadata.possibleLengths()) {
  		// We require that the NSN remaining after stripping the national prefix and
  		// carrier code be long enough to be a possible length for the region.
  		// Otherwise, we don't do the stripping, since the original number could be
  		// a valid short number.
  		switch (checkNumberLengthForType(potential_national_number, undefined, metadata)) {
  			case 'TOO_SHORT':
  			// case 'IS_POSSIBLE_LOCAL_ONLY':
  			case 'INVALID_LENGTH':
  				break;
  			default:
  				national_number = potential_national_number;
  				carrier_code = carrierCode;
  		}
  	} else {
  		// If the original number (before stripping national prefix) was viable,
  		// and the resultant number is not, then prefer the original phone number.
  		// This is because for some countries (e.g. Russia) the same digit could be both
  		// a national prefix and a leading digit of a valid national phone number,
  		// like `8` is the national prefix for Russia and both
  		// `8 800 555 35 35` and `800 555 35 35` are valid numbers.
  		if (matchesEntirely(national_number, metadata.nationalNumberPattern()) && !matchesEntirely(potential_national_number, metadata.nationalNumberPattern())) ; else {
  			national_number = potential_national_number;
  			carrier_code = carrierCode;
  		}
  	}

  	return {
  		national_number: national_number,
  		carrier_code: carrier_code
  	};
  }

  // Determines the country for a given (possibly incomplete) phone number.
  // export function get_country_from_phone_number(number, metadata)
  // {
  // 	return parse_phone_number(number, null, metadata).country
  // }

  // Parses a formatted phone number
  // and returns `{ countryCallingCode, number }`
  // where `number` is just the "number" part
  // which is left after extracting `countryCallingCode`
  // and is not necessarily a "national (significant) number"
  // and might as well contain national prefix.
  //
  function extractCountryCallingCode(number, country, metadata) {
  	number = parseIncompletePhoneNumber(number);

  	if (!number) {
  		return {};
  	}

  	// If this is not an international phone number,
  	// then don't extract country phone code.
  	if (number[0] !== '+') {
  		// Convert an "out-of-country" dialing phone number
  		// to a proper international phone number.
  		var numberWithoutIDD = stripIDDPrefix(number, country, metadata);

  		// If an IDD prefix was stripped then
  		// convert the number to international one
  		// for subsequent parsing.
  		if (numberWithoutIDD && numberWithoutIDD !== number) {
  			number = '+' + numberWithoutIDD;
  		} else {
  			return { number: number };
  		}
  	}

  	// Fast abortion: country codes do not begin with a '0'
  	if (number[1] === '0') {
  		return {};
  	}

  	metadata = new Metadata(metadata);

  	// The thing with country phone codes
  	// is that they are orthogonal to each other
  	// i.e. there's no such country phone code A
  	// for which country phone code B exists
  	// where B starts with A.
  	// Therefore, while scanning digits,
  	// if a valid country code is found,
  	// that means that it is the country code.
  	//
  	var i = 2;
  	while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
  		var countryCallingCode = number.slice(1, i);

  		if (metadata.countryCallingCodes()[countryCallingCode]) {
  			return {
  				countryCallingCode: countryCallingCode,
  				number: number.slice(i)
  			};
  		}

  		i++;
  	}

  	return {};
  }

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function parsePhoneNumber(text, options, metadata) {
  	return parse(text, _extends$2({}, options, { v2: true }), metadata);
  }

  var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _slicedToArray$1 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  function normalizeArguments(args) {
  	var _Array$prototype$slic = Array.prototype.slice.call(args),
  	    _Array$prototype$slic2 = _slicedToArray$1(_Array$prototype$slic, 4),
  	    arg_1 = _Array$prototype$slic2[0],
  	    arg_2 = _Array$prototype$slic2[1],
  	    arg_3 = _Array$prototype$slic2[2],
  	    arg_4 = _Array$prototype$slic2[3];

  	var text = void 0;
  	var options = void 0;
  	var metadata = void 0;

  	// If the phone number is passed as a string.
  	// `parsePhoneNumber('88005553535', ...)`.
  	if (typeof arg_1 === 'string') {
  		text = arg_1;
  	} else throw new TypeError('A text for parsing must be a string.');

  	// If "default country" argument is being passed then move it to `options`.
  	// `parsePhoneNumber('88005553535', 'RU', [options], metadata)`.
  	if (!arg_2 || typeof arg_2 === 'string') {
  		if (arg_4) {
  			options = arg_3;
  			metadata = arg_4;
  		} else {
  			options = undefined;
  			metadata = arg_3;
  		}

  		if (arg_2) {
  			options = _extends$3({ defaultCountry: arg_2 }, options);
  		}
  	}
  	// `defaultCountry` is not passed.
  	// Example: `parsePhoneNumber('+78005553535', [options], metadata)`.
  	else if (isObject(arg_2)) {
  			if (arg_3) {
  				options = arg_2;
  				metadata = arg_3;
  			} else {
  				metadata = arg_2;
  			}
  		} else throw new Error('Invalid second argument: ' + arg_2);

  	return {
  		text: text,
  		options: options,
  		metadata: metadata
  	};
  }

  // Otherwise istanbul would show this as "branch not covered".
  /* istanbul ignore next */
  var isObject = function isObject(_) {
  	return (typeof _ === 'undefined' ? 'undefined' : _typeof$1(_)) === 'object';
  };

  var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function parsePhoneNumberFromString(text, options, metadata) {
  	// Validate `defaultCountry`.
  	if (options && options.defaultCountry && !isSupportedCountry(options.defaultCountry, metadata)) {
  		options = _extends$4({}, options, {
  			defaultCountry: undefined
  		});
  	}
  	// Parse phone number.
  	try {
  		return parsePhoneNumber(text, options, metadata);
  	} catch (error) {
  		/* istanbul ignore else */
  		if (error instanceof ParseError) ; else {
  			throw error;
  		}
  	}
  }

  function parsePhoneNumberFromString$1() {
  	var _normalizeArguments = normalizeArguments(arguments),
  	    text = _normalizeArguments.text,
  	    options = _normalizeArguments.options,
  	    metadata = _normalizeArguments.metadata;

  	return parsePhoneNumberFromString(text, options, metadata);
  }

  var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _slicedToArray$2 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  function formatNumber$2() {
  	var _normalizeArguments = normalizeArguments$1(arguments),
  	    input = _normalizeArguments.input,
  	    format = _normalizeArguments.format,
  	    options = _normalizeArguments.options,
  	    metadata = _normalizeArguments.metadata;

  	return formatNumber$1(input, format, options, metadata);
  }

  // Sort out arguments
  function normalizeArguments$1(args) {
  	var _Array$prototype$slic = Array.prototype.slice.call(args),
  	    _Array$prototype$slic2 = _slicedToArray$2(_Array$prototype$slic, 5),
  	    arg_1 = _Array$prototype$slic2[0],
  	    arg_2 = _Array$prototype$slic2[1],
  	    arg_3 = _Array$prototype$slic2[2],
  	    arg_4 = _Array$prototype$slic2[3],
  	    arg_5 = _Array$prototype$slic2[4];

  	var input = void 0;
  	var format = void 0;
  	var options = void 0;
  	var metadata = void 0;

  	// Sort out arguments.

  	// If the phone number is passed as a string.
  	// `format('8005553535', ...)`.
  	if (typeof arg_1 === 'string') {
  		// If country code is supplied.
  		// `format('8005553535', 'RU', 'NATIONAL', [options], metadata)`.
  		if (typeof arg_3 === 'string') {
  			format = arg_3;

  			if (arg_5) {
  				options = arg_4;
  				metadata = arg_5;
  			} else {
  				metadata = arg_4;
  			}

  			input = parse(arg_1, { defaultCountry: arg_2, extended: true }, metadata);
  		}
  		// Just an international phone number is supplied
  		// `format('+78005553535', 'NATIONAL', [options], metadata)`.
  		else {
  				if (typeof arg_2 !== 'string') {
  					throw new Error('`format` argument not passed to `formatNumber(number, format)`');
  				}

  				format = arg_2;

  				if (arg_4) {
  					options = arg_3;
  					metadata = arg_4;
  				} else {
  					metadata = arg_3;
  				}

  				input = parse(arg_1, { extended: true }, metadata);
  			}
  	}
  	// If the phone number is passed as a parsed number object.
  	// `format({ phone: '8005553535', country: 'RU' }, 'NATIONAL', [options], metadata)`.
  	else if (is_object$1(arg_1)) {
  			input = arg_1;
  			format = arg_2;

  			if (arg_4) {
  				options = arg_3;
  				metadata = arg_4;
  			} else {
  				metadata = arg_3;
  			}
  		} else throw new TypeError('A phone number must either be a string or an object of shape { phone, [country] }.');

  	// Legacy lowercase formats.
  	if (format === 'International') {
  		format = 'INTERNATIONAL';
  	} else if (format === 'National') {
  		format = 'NATIONAL';
  	}

  	return {
  		input: input,
  		format: format,
  		options: options,
  		metadata: metadata
  	};
  }

  // Babel transforms `typeof` into some "branches"
  // so istanbul will show this as "branch not covered".
  /* istanbul ignore next */
  var is_object$1 = function is_object(_) {
  	return (typeof _ === 'undefined' ? 'undefined' : _typeof$2(_)) === 'object';
  };

  var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _slicedToArray$3 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  // Sort out arguments
  function normalizeArguments$2(args) {
  	var _Array$prototype$slic = Array.prototype.slice.call(args),
  	    _Array$prototype$slic2 = _slicedToArray$3(_Array$prototype$slic, 4),
  	    arg_1 = _Array$prototype$slic2[0],
  	    arg_2 = _Array$prototype$slic2[1],
  	    arg_3 = _Array$prototype$slic2[2],
  	    arg_4 = _Array$prototype$slic2[3];

  	var input = void 0;
  	var options = {};
  	var metadata = void 0;

  	// If the phone number is passed as a string.
  	// `getNumberType('88005553535', ...)`.
  	if (typeof arg_1 === 'string') {
  		// If "default country" argument is being passed
  		// then convert it to an `options` object.
  		// `getNumberType('88005553535', 'RU', metadata)`.
  		if ((typeof arg_2 === 'undefined' ? 'undefined' : _typeof$3(arg_2)) !== 'object') {
  			if (arg_4) {
  				options = arg_3;
  				metadata = arg_4;
  			} else {
  				metadata = arg_3;
  			}

  			// `parse` extracts phone numbers from raw text,
  			// therefore it will cut off all "garbage" characters,
  			// while this `validate` function needs to verify
  			// that the phone number contains no "garbage"
  			// therefore the explicit `isViablePhoneNumber` check.
  			if (isViablePhoneNumber(arg_1)) {
  				input = parse(arg_1, { defaultCountry: arg_2 }, metadata);
  			} else {
  				input = {};
  			}
  		}
  		// No "resrict country" argument is being passed.
  		// International phone number is passed.
  		// `getNumberType('+78005553535', metadata)`.
  		else {
  				if (arg_3) {
  					options = arg_2;
  					metadata = arg_3;
  				} else {
  					metadata = arg_2;
  				}

  				// `parse` extracts phone numbers from raw text,
  				// therefore it will cut off all "garbage" characters,
  				// while this `validate` function needs to verify
  				// that the phone number contains no "garbage"
  				// therefore the explicit `isViablePhoneNumber` check.
  				if (isViablePhoneNumber(arg_1)) {
  					input = parse(arg_1, undefined, metadata);
  				} else {
  					input = {};
  				}
  			}
  	}
  	// If the phone number is passed as a parsed phone number.
  	// `getNumberType({ phone: '88005553535', country: 'RU' }, ...)`.
  	else if (is_object$2(arg_1)) {
  			input = arg_1;

  			if (arg_3) {
  				options = arg_2;
  				metadata = arg_3;
  			} else {
  				metadata = arg_2;
  			}
  		} else throw new TypeError('A phone number must either be a string or an object of shape { phone, [country] }.');

  	return {
  		input: input,
  		options: options,
  		metadata: metadata
  	};
  }

  // Babel transforms `typeof` into some "branches"
  // so istanbul will show this as "branch not covered".
  /* istanbul ignore next */
  var is_object$2 = function is_object(_) {
  	return (typeof _ === 'undefined' ? 'undefined' : _typeof$3(_)) === 'object';
  };

  // Finds out national phone number type (fixed line, mobile, etc)
  function isValidNumber$1() {
  	var _normalizeArguments = normalizeArguments$2(arguments),
  	    input = _normalizeArguments.input,
  	    options = _normalizeArguments.options,
  	    metadata = _normalizeArguments.metadata;

  	return isValidNumber(input, options, metadata);
  }

  /** Returns a regular expression quantifier with an upper and lower limit. */
  function limit(lower, upper) {
  	if (lower < 0 || upper <= 0 || upper < lower) {
  		throw new TypeError();
  	}
  	return "{" + lower + "," + upper + "}";
  }

  /**
   * Trims away any characters after the first match of {@code pattern} in {@code candidate},
   * returning the trimmed version.
   */
  function trimAfterFirstMatch(regexp, string) {
  	var index = string.search(regexp);

  	if (index >= 0) {
  		return string.slice(0, index);
  	}

  	return string;
  }

  function startsWith(string, substring) {
  	return string.indexOf(substring) === 0;
  }

  function endsWith(string, substring) {
  	return string.indexOf(substring, string.length - substring.length) === string.length - substring.length;
  }

  // Regular expression of characters typically used to start a second phone number for the purposes
  // of parsing. This allows us to strip off parts of the number that are actually the start of
  // another number, such as for: (530) 583-6985 x302/x2303 -> the second extension here makes this
  // actually two phone numbers, (530) 583-6985 x302 and (530) 583-6985 x2303. We remove the second
  // extension so that the first number is parsed correctly.
  //
  // Matches a slash (\ or /) followed by a space followed by an `x`.
  //
  var SECOND_NUMBER_START_PATTERN = /[\\/] *x/;

  function parsePreCandidate(candidate) {
  	// Check for extra numbers at the end.
  	// TODO: This is the place to start when trying to support extraction of multiple phone number
  	// from split notations (+41 79 123 45 67 / 68).
  	return trimAfterFirstMatch(SECOND_NUMBER_START_PATTERN, candidate);
  }

  // Matches strings that look like dates using "/" as a separator.
  // Examples: 3/10/2011, 31/10/96 or 08/31/95.
  var SLASH_SEPARATED_DATES = /(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/;

  // Matches timestamps.
  // Examples: "2012-01-02 08:00".
  // Note that the reg-ex does not include the
  // trailing ":\d\d" -- that is covered by TIME_STAMPS_SUFFIX.
  var TIME_STAMPS = /[12]\d{3}[-/]?[01]\d[-/]?[0-3]\d +[0-2]\d$/;
  var TIME_STAMPS_SUFFIX_LEADING = /^:[0-5]\d/;

  function isValidPreCandidate(candidate, offset, text) {
  	// Skip a match that is more likely to be a date.
  	if (SLASH_SEPARATED_DATES.test(candidate)) {
  		return false;
  	}

  	// Skip potential time-stamps.
  	if (TIME_STAMPS.test(candidate)) {
  		var followingText = text.slice(offset + candidate.length);
  		if (TIME_STAMPS_SUFFIX_LEADING.test(followingText)) {
  			return false;
  		}
  	}

  	return true;
  }

  // Javascript doesn't support UTF-8 regular expressions.
  // So mimicking them here.

  // Copy-pasted from `PhoneNumberMatcher.js`.

  /**
   * "\p{Z}" is any kind of whitespace or invisible separator ("Separator").
   * http://www.regular-expressions.info/unicode.html
   * "\P{Z}" is the reverse of "\p{Z}".
   * "\p{N}" is any kind of numeric character in any script ("Number").
   * "\p{Nd}" is a digit zero through nine in any script except "ideographic scripts" ("Decimal_Digit_Number").
   * "\p{Sc}" is a currency symbol ("Currency_Symbol").
   * "\p{L}" is any kind of letter from any language ("Letter").
   * "\p{Mn}" is "non-spacing mark".
   *
   * Javascript doesn't support Unicode Regular Expressions
   * so substituting it with this explicit set of characters.
   *
   * https://stackoverflow.com/questions/13210194/javascript-regex-equivalent-of-a-za-z-using-pl
   * https://github.com/danielberndt/babel-plugin-utf-8-regex/blob/master/src/transformer.js
   */

  var _pZ = ' \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000';
  var pZ = '[' + _pZ + ']';
  var PZ = '[^' + _pZ + ']';

  var _pN = '0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19';
  // const pN = `[${_pN}]`

  var _pNd = '0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19';
  var pNd = '[' + _pNd + ']';

  var _pL = 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC';
  var pL = '[' + _pL + ']';
  var pL_regexp = new RegExp(pL);

  var _pSc = '$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20B9\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6';
  var pSc = '[' + _pSc + ']';
  var pSc_regexp = new RegExp(pSc);

  var _pMn = '\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u08FE\u0900-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1DC0-\u1DE6\u1DFC-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE26';
  var pMn = '[' + _pMn + ']';
  var pMn_regexp = new RegExp(pMn);

  var _InBasic_Latin = '\0-\x7F';
  var _InLatin_1_Supplement = '\x80-\xFF';
  var _InLatin_Extended_A = '\u0100-\u017F';
  var _InLatin_Extended_Additional = '\u1E00-\u1EFF';
  var _InLatin_Extended_B = '\u0180-\u024F';
  var _InCombining_Diacritical_Marks = '\u0300-\u036F';

  var latinLetterRegexp = new RegExp('[' + _InBasic_Latin + _InLatin_1_Supplement + _InLatin_Extended_A + _InLatin_Extended_Additional + _InLatin_Extended_B + _InCombining_Diacritical_Marks + ']');

  /**
   * Helper method to determine if a character is a Latin-script letter or not.
   * For our purposes, combining marks should also return true since we assume
   * they have been added to a preceding Latin character.
   */
  function isLatinLetter(letter) {
    // Combining marks are a subset of non-spacing-mark.
    if (!pL_regexp.test(letter) && !pMn_regexp.test(letter)) {
      return false;
    }

    return latinLetterRegexp.test(letter);
  }

  function isInvalidPunctuationSymbol(character) {
    return character === '%' || pSc_regexp.test(character);
  }

  // Copy-pasted from `PhoneNumberMatcher.js`.

  var OPENING_PARENS = '(\\[\uFF08\uFF3B';
  var CLOSING_PARENS = ')\\]\uFF09\uFF3D';
  var NON_PARENS = '[^' + OPENING_PARENS + CLOSING_PARENS + ']';

  var LEAD_CLASS = '[' + OPENING_PARENS + PLUS_CHARS + ']';

  // Punctuation that may be at the start of a phone number - brackets and plus signs.
  var LEAD_CLASS_LEADING = new RegExp('^' + LEAD_CLASS);

  // Limit on the number of pairs of brackets in a phone number.
  var BRACKET_PAIR_LIMIT = limit(0, 3);

  /**
   * Pattern to check that brackets match. Opening brackets should be closed within a phone number.
   * This also checks that there is something inside the brackets. Having no brackets at all is also
   * fine.
   *
   * An opening bracket at the beginning may not be closed, but subsequent ones should be.  It's
   * also possible that the leading bracket was dropped, so we shouldn't be surprised if we see a
   * closing bracket first. We limit the sets of brackets in a phone number to four.
   */
  var MATCHING_BRACKETS_ENTIRE = new RegExp('^' + "(?:[" + OPENING_PARENS + "])?" + "(?:" + NON_PARENS + "+" + "[" + CLOSING_PARENS + "])?" + NON_PARENS + "+" + "(?:[" + OPENING_PARENS + "]" + NON_PARENS + "+[" + CLOSING_PARENS + "])" + BRACKET_PAIR_LIMIT + NON_PARENS + "*" + '$');

  /**
   * Matches strings that look like publication pages. Example:
   * <pre>Computing Complete Answers to Queries in the Presence of Limited Access Patterns.
   * Chen Li. VLDB J. 12(3): 211-227 (2003).</pre>
   *
   * The string "211-227 (2003)" is not a telephone number.
   */
  var PUB_PAGES = /\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/;

  function isValidCandidate(candidate, offset, text, leniency) {
  	// Check the candidate doesn't contain any formatting
  	// which would indicate that it really isn't a phone number.
  	if (!MATCHING_BRACKETS_ENTIRE.test(candidate) || PUB_PAGES.test(candidate)) {
  		return;
  	}

  	// If leniency is set to VALID or stricter, we also want to skip numbers that are surrounded
  	// by Latin alphabetic characters, to skip cases like abc8005001234 or 8005001234def.
  	if (leniency !== 'POSSIBLE') {
  		// If the candidate is not at the start of the text,
  		// and does not start with phone-number punctuation,
  		// check the previous character.
  		if (offset > 0 && !LEAD_CLASS_LEADING.test(candidate)) {
  			var previousChar = text[offset - 1];
  			// We return null if it is a latin letter or an invalid punctuation symbol.
  			if (isInvalidPunctuationSymbol(previousChar) || isLatinLetter(previousChar)) {
  				return false;
  			}
  		}

  		var lastCharIndex = offset + candidate.length;
  		if (lastCharIndex < text.length) {
  			var nextChar = text[lastCharIndex];
  			if (isInvalidPunctuationSymbol(nextChar) || isLatinLetter(nextChar)) {
  				return false;
  			}
  		}
  	}

  	return true;
  }

  var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  // Copy-pasted from `./parse.js`.
  var VALID_PHONE_NUMBER$1 = '[' + PLUS_CHARS + ']{0,1}' + '(?:' + '[' + VALID_PUNCTUATION + ']*' + '[' + VALID_DIGITS + ']' + '){3,}' + '[' + VALID_PUNCTUATION + VALID_DIGITS + ']*';

  var WHITESPACE_IN_THE_BEGINNING_PATTERN = new RegExp('^[' + WHITESPACE + ']+');
  var PUNCTUATION_IN_THE_END_PATTERN = new RegExp('[' + VALID_PUNCTUATION + ']+$');

  /**
   * Extracts a parseable phone number including any opening brackets, etc.
   * @param  {string} text - Input.
   * @return {object} `{ ?number, ?startsAt, ?endsAt }`.
   */
  var PhoneNumberSearch = function () {
  	function PhoneNumberSearch(text) {
  		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  		var metadata = arguments[2];

  		_classCallCheck$3(this, PhoneNumberSearch);

  		this.state = 'NOT_READY';

  		this.text = text;
  		this.options = options;
  		this.metadata = metadata;

  		this.regexp = new RegExp(VALID_PHONE_NUMBER$1 +
  		// Phone number extensions
  		'(?:' + EXTN_PATTERNS_FOR_PARSING + ')?', 'ig');

  		// this.searching_from = 0
  	}
  	// Iteration tristate.


  	_createClass$2(PhoneNumberSearch, [{
  		key: 'find',
  		value: function find() {
  			var matches = this.regexp.exec(this.text);

  			if (!matches) {
  				return;
  			}

  			var number = matches[0];
  			var startsAt = matches.index;

  			number = number.replace(WHITESPACE_IN_THE_BEGINNING_PATTERN, '');
  			startsAt += matches[0].length - number.length;
  			// Fixes not parsing numbers with whitespace in the end.
  			// Also fixes not parsing numbers with opening parentheses in the end.
  			// https://github.com/catamphetamine/libphonenumber-js/issues/252
  			number = number.replace(PUNCTUATION_IN_THE_END_PATTERN, '');

  			number = parsePreCandidate(number);

  			var result = this.parseCandidate(number, startsAt);

  			if (result) {
  				return result;
  			}

  			// Tail recursion.
  			// Try the next one if this one is not a valid phone number.
  			return this.find();
  		}
  	}, {
  		key: 'parseCandidate',
  		value: function parseCandidate(number, startsAt) {
  			if (!isValidPreCandidate(number, startsAt, this.text)) {
  				return;
  			}

  			// Don't parse phone numbers which are non-phone numbers
  			// due to being part of something else (e.g. a UUID).
  			// https://github.com/catamphetamine/libphonenumber-js/issues/213
  			// Copy-pasted from Google's `PhoneNumberMatcher.js` (`.parseAndValidate()`).
  			if (!isValidCandidate(number, startsAt, this.text, this.options.extended ? 'POSSIBLE' : 'VALID')) {
  				return;
  			}

  			// // Prepend any opening brackets left behind by the
  			// // `PHONE_NUMBER_START_PATTERN` regexp.
  			// const text_before_number = text.slice(this.searching_from, startsAt)
  			// const full_number_starts_at = text_before_number.search(BEFORE_NUMBER_DIGITS_PUNCTUATION)
  			// if (full_number_starts_at >= 0)
  			// {
  			// 	number   = text_before_number.slice(full_number_starts_at) + number
  			// 	startsAt = full_number_starts_at
  			// }
  			//
  			// this.searching_from = matches.lastIndex

  			var result = parse(number, this.options, this.metadata);

  			if (!result.phone) {
  				return;
  			}

  			result.startsAt = startsAt;
  			result.endsAt = startsAt + number.length;

  			return result;
  		}
  	}, {
  		key: 'hasNext',
  		value: function hasNext() {
  			if (this.state === 'NOT_READY') {
  				this.last_match = this.find();

  				if (this.last_match) {
  					this.state = 'READY';
  				} else {
  					this.state = 'DONE';
  				}
  			}

  			return this.state === 'READY';
  		}
  	}, {
  		key: 'next',
  		value: function next() {
  			// Check the state and find the next match as a side-effect if necessary.
  			if (!this.hasNext()) {
  				throw new Error('No next element');
  			}

  			// Don't retain that memory any longer than necessary.
  			var result = this.last_match;
  			this.last_match = null;
  			this.state = 'NOT_READY';
  			return result;
  		}
  	}]);

  	return PhoneNumberSearch;
  }();

  var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  // https://medium.com/dsinjs/implementing-lru-cache-in-javascript-94ba6755cda9

  var Node = function Node(key, value) {
    var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var prev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck$4(this, Node);

    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  };

  var LRUCache = function () {
    //set default limit of 10 if limit is not passed.
    function LRUCache() {
      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

      _classCallCheck$4(this, LRUCache);

      this.size = 0;
      this.limit = limit;
      this.head = null;
      this.tail = null;
      this.cache = {};
    }

    // Write Node to head of LinkedList
    // update cache with Node key and Node reference


    _createClass$3(LRUCache, [{
      key: "put",
      value: function put(key, value) {
        this.ensureLimit();

        if (!this.head) {
          this.head = this.tail = new Node(key, value);
        } else {
          var node = new Node(key, value, this.head);
          this.head.prev = node;
          this.head = node;
        }

        //Update the cache map
        this.cache[key] = this.head;
        this.size++;
      }

      // Read from cache map and make that node as new Head of LinkedList

    }, {
      key: "get",
      value: function get(key) {
        if (this.cache[key]) {
          var value = this.cache[key].value;

          // node removed from it's position and cache
          this.remove(key);
          // write node again to the head of LinkedList to make it most recently used
          this.put(key, value);

          return value;
        }

        console.log("Item not available in cache for key " + key);
      }
    }, {
      key: "ensureLimit",
      value: function ensureLimit() {
        if (this.size === this.limit) {
          this.remove(this.tail.key);
        }
      }
    }, {
      key: "remove",
      value: function remove(key) {
        var node = this.cache[key];

        if (node.prev !== null) {
          node.prev.next = node.next;
        } else {
          this.head = node.next;
        }

        if (node.next !== null) {
          node.next.prev = node.prev;
        } else {
          this.tail = node.prev;
        }

        delete this.cache[key];
        this.size--;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.cache = {};
      }

      // // Invokes the callback function with every node of the chain and the index of the node.
      // forEach(fn) {
      //   let node = this.head;
      //   let counter = 0;
      //   while (node) {
      //     fn(node, counter);
      //     node = node.next;
      //     counter++;
      //   }
      // }

      // // To iterate over LRU with a 'for...of' loop
      // *[Symbol.iterator]() {
      //   let node = this.head;
      //   while (node) {
      //     yield node;
      //     node = node.next;
      //   }
      // }

    }]);

    return LRUCache;
  }();

  var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  // A cache for frequently used country-specific regular expressions. Set to 32 to cover ~2-3
  // countries being used for the same doc with ~10 patterns for each country. Some pages will have
  // a lot more countries in use, but typically fewer numbers for each so expanding the cache for
  // that use-case won't have a lot of benefit.

  var RegExpCache = function () {
  	function RegExpCache(size) {
  		_classCallCheck$5(this, RegExpCache);

  		this.cache = new LRUCache(size);
  	}

  	_createClass$4(RegExpCache, [{
  		key: 'getPatternForRegExp',
  		value: function getPatternForRegExp(pattern) {
  			var regExp = this.cache.get(pattern);
  			if (!regExp) {
  				regExp = new RegExp('^' + pattern);
  				this.cache.put(pattern, regExp);
  			}
  			return regExp;
  		}
  	}]);

  	return RegExpCache;
  }();

  /**
   * Leniency when finding potential phone numbers in text segments
   * The levels here are ordered in increasing strictness.
   */
  var Leniency = {
    /**
     * Phone numbers accepted are "possible", but not necessarily "valid".
     */
    POSSIBLE: function POSSIBLE(number, candidate, metadata) {
      return true;
    },


    /**
     * Phone numbers accepted are "possible" and "valid".
     * Numbers written in national format must have their national-prefix
     * present if it is usually written for a number of this type.
     */
    VALID: function VALID(number, candidate, metadata) {
      if (!isValidNumber(number, undefined, metadata) || !containsOnlyValidXChars(number, candidate.toString())) {
        return false;
      }

      // Skipped for simplicity.
      // return isNationalPrefixPresentIfRequired(number, metadata)
      return true;
    },


    /**
     * Phone numbers accepted are "valid" and
     * are grouped in a possible way for this locale. For example, a US number written as
     * "65 02 53 00 00" and "650253 0000" are not accepted at this leniency level, whereas
     * "650 253 0000", "650 2530000" or "6502530000" are.
     * Numbers with more than one '/' symbol in the national significant number
     * are also dropped at this level.
     *
     * Warning: This level might result in lower coverage especially for regions outside of
     * country code "+1". If you are not sure about which level to use,
     * email the discussion group libphonenumber-discuss@googlegroups.com.
     */
    STRICT_GROUPING: function STRICT_GROUPING(number, candidate, metadata, regExpCache) {
      var candidateString = candidate.toString();

      if (!isValidNumber(number, undefined, metadata) || !containsOnlyValidXChars(number, candidateString) || containsMoreThanOneSlashInNationalNumber(number, candidateString) || !isNationalPrefixPresentIfRequired(number)) {
        return false;
      }

      return checkNumberGroupingIsValid(number, candidate, metadata, allNumberGroupsRemainGrouped, regExpCache);
    },


    /**
     * Phone numbers accepted are {@linkplain PhoneNumberUtil#isValidNumber(PhoneNumber) valid} and
     * are grouped in the same way that we would have formatted it, or as a single block. For
     * example, a US number written as "650 2530000" is not accepted at this leniency level, whereas
     * "650 253 0000" or "6502530000" are.
     * Numbers with more than one '/' symbol are also dropped at this level.
     * <p>
     * Warning: This level might result in lower coverage especially for regions outside of country
     * code "+1". If you are not sure about which level to use, email the discussion group
     * libphonenumber-discuss@googlegroups.com.
     */
    EXACT_GROUPING: function EXACT_GROUPING(number, candidate, metadata, regExpCache) {
      var candidateString = candidate.toString();

      if (!isValidNumber(number, undefined, metadata) || !containsOnlyValidXChars(number, candidateString) || containsMoreThanOneSlashInNationalNumber(number, candidateString) || !isNationalPrefixPresentIfRequired(number)) {
        return false;
      }

      return checkNumberGroupingIsValid(number, candidate, metadata, allNumberGroupsAreExactlyPresent, regExpCache);
    }
  };

  function containsOnlyValidXChars(number, candidate, metadata) {
    // The characters 'x' and 'X' can be (1) a carrier code, in which case they always precede the
    // national significant number or (2) an extension sign, in which case they always precede the
    // extension number. We assume a carrier code is more than 1 digit, so the first case has to
    // have more than 1 consecutive 'x' or 'X', whereas the second case can only have exactly 1 'x'
    // or 'X'. We ignore the character if it appears as the last character of the string.
    for (var index = 0; index < candidate.length - 1; index++) {
      var charAtIndex = candidate.charAt(index);

      if (charAtIndex === 'x' || charAtIndex === 'X') {
        var charAtNextIndex = candidate.charAt(index + 1);

        if (charAtNextIndex === 'x' || charAtNextIndex === 'X') {
          // This is the carrier code case, in which the 'X's always precede the national
          // significant number.
          index++;
          if (util.isNumberMatch(number, candidate.substring(index)) != MatchType.NSN_MATCH) {
            return false;
          }
          // This is the extension sign case, in which the 'x' or 'X' should always precede the
          // extension number.
        } else if (parseDigits(candidate.substring(index)) !== number.ext) {
          return false;
        }
      }
    }

    return true;
  }

  function isNationalPrefixPresentIfRequired(number, _metadata) {
    // First, check how we deduced the country code. If it was written in international format, then
    // the national prefix is not required.
    if (number.getCountryCodeSource() != 'FROM_DEFAULT_COUNTRY') {
      return true;
    }

    var phoneNumberRegion = util.getRegionCodeForCountryCode(number.getCountryCode());

    var metadata = util.getMetadataForRegion(phoneNumberRegion);
    if (metadata == null) {
      return true;
    }

    // Check if a national prefix should be present when formatting this number.
    var nationalNumber = util.getNationalSignificantNumber(number);
    var formatRule = util.chooseFormattingPatternForNumber(metadata.numberFormats(), nationalNumber);

    // To do this, we check that a national prefix formatting rule was present
    // and that it wasn't just the first-group symbol ($1) with punctuation.
    if (formatRule && formatRule.getNationalPrefixFormattingRule().length > 0) {
      if (formatRule.getNationalPrefixOptionalWhenFormatting()) {
        // The national-prefix is optional in these cases, so we don't need to check if it was
        // present.
        return true;
      }

      if (PhoneNumberUtil.formattingRuleHasFirstGroupOnly(formatRule.getNationalPrefixFormattingRule())) {
        // National Prefix not needed for this number.
        return true;
      }

      // Normalize the remainder.
      var rawInputCopy = PhoneNumberUtil.normalizeDigitsOnly(number.getRawInput());

      // Check if we found a national prefix and/or carrier code at the start of the raw input, and
      // return the result.
      return util.maybeStripNationalPrefixAndCarrierCode(rawInputCopy, metadata, null);
    }

    return true;
  }

  function containsMoreThanOneSlashInNationalNumber(number, candidate) {
    var firstSlashInBodyIndex = candidate.indexOf('/');
    if (firstSlashInBodyIndex < 0) {
      // No slashes, this is okay.
      return false;
    }

    // Now look for a second one.
    var secondSlashInBodyIndex = candidate.indexOf('/', firstSlashInBodyIndex + 1);
    if (secondSlashInBodyIndex < 0) {
      // Only one slash, this is okay.
      return false;
    }

    // If the first slash is after the country calling code, this is permitted.
    var candidateHasCountryCode = number.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN || number.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN;

    if (candidateHasCountryCode && PhoneNumberUtil.normalizeDigitsOnly(candidate.substring(0, firstSlashInBodyIndex)) === String(number.getCountryCode())) {
      // Any more slashes and this is illegal.
      return candidate.slice(secondSlashInBodyIndex + 1).indexOf('/') >= 0;
    }

    return true;
  }

  function checkNumberGroupingIsValid(number, candidate, metadata, checkGroups, regExpCache) {
    var normalizedCandidate = normalizeDigits(candidate, true /* keep non-digits */);
    var formattedNumberGroups = getNationalNumberGroups(metadata, number, null);
    if (checkGroups(metadata, number, normalizedCandidate, formattedNumberGroups)) {
      return true;
    }

    // If this didn't pass, see if there are any alternate formats that match, and try them instead.
    var alternateFormats = MetadataManager.getAlternateFormatsForCountry(number.getCountryCode());
    var nationalSignificantNumber = util.getNationalSignificantNumber(number);

    if (alternateFormats) {
      for (var _iterator = alternateFormats.numberFormats(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var alternateFormat = _ref;

        if (alternateFormat.leadingDigitsPatterns().length > 0) {
          // There is only one leading digits pattern for alternate formats.
          var leadingDigitsRegExp = regExpCache.getPatternForRegExp('^' + alternateFormat.leadingDigitsPatterns()[0]);
          if (!leadingDigitsRegExp.test(nationalSignificantNumber)) {
            // Leading digits don't match; try another one.
            continue;
          }
        }
        formattedNumberGroups = getNationalNumberGroups(metadata, number, alternateFormat);
        if (checkGroups(metadata, number, normalizedCandidate, formattedNumberGroups)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Helper method to get the national-number part of a number, formatted without any national
   * prefix, and return it as a set of digit blocks that would be formatted together following
   * standard formatting rules.
   */
  function getNationalNumberGroups(metadata, number, formattingPattern) {
    if (formattingPattern) {
      // We format the NSN only, and split that according to the separator.
      var nationalSignificantNumber = util.getNationalSignificantNumber(number);
      return util.formatNsnUsingPattern(nationalSignificantNumber, formattingPattern, 'RFC3966', metadata).split('-');
    }

    // This will be in the format +CC-DG1-DG2-DGX;ext=EXT where DG1..DGX represents groups of digits.
    var rfc3966Format = formatNumber(number, 'RFC3966', metadata);

    // We remove the extension part from the formatted string before splitting it into different
    // groups.
    var endIndex = rfc3966Format.indexOf(';');
    if (endIndex < 0) {
      endIndex = rfc3966Format.length;
    }

    // The country-code will have a '-' following it.
    var startIndex = rfc3966Format.indexOf('-') + 1;
    return rfc3966Format.slice(startIndex, endIndex).split('-');
  }

  function allNumberGroupsAreExactlyPresent(metadata, number, normalizedCandidate, formattedNumberGroups) {
    var candidateGroups = normalizedCandidate.split(NON_DIGITS_PATTERN);

    // Set this to the last group, skipping it if the number has an extension.
    var candidateNumberGroupIndex = number.hasExtension() ? candidateGroups.length - 2 : candidateGroups.length - 1;

    // First we check if the national significant number is formatted as a block.
    // We use contains and not equals, since the national significant number may be present with
    // a prefix such as a national number prefix, or the country code itself.
    if (candidateGroups.length == 1 || candidateGroups[candidateNumberGroupIndex].contains(util.getNationalSignificantNumber(number))) {
      return true;
    }

    // Starting from the end, go through in reverse, excluding the first group, and check the
    // candidate and number groups are the same.
    var formattedNumberGroupIndex = formattedNumberGroups.length - 1;
    while (formattedNumberGroupIndex > 0 && candidateNumberGroupIndex >= 0) {
      if (candidateGroups[candidateNumberGroupIndex] !== formattedNumberGroups[formattedNumberGroupIndex]) {
        return false;
      }
      formattedNumberGroupIndex--;
      candidateNumberGroupIndex--;
    }

    // Now check the first group. There may be a national prefix at the start, so we only check
    // that the candidate group ends with the formatted number group.
    return candidateNumberGroupIndex >= 0 && endsWith(candidateGroups[candidateNumberGroupIndex], formattedNumberGroups[0]);
  }

  function allNumberGroupsRemainGrouped(metadata, number, normalizedCandidate, formattedNumberGroups) {
    var fromIndex = 0;
    if (number.getCountryCodeSource() !== CountryCodeSource.FROM_DEFAULT_COUNTRY) {
      // First skip the country code if the normalized candidate contained it.
      var countryCode = String(number.getCountryCode());
      fromIndex = normalizedCandidate.indexOf(countryCode) + countryCode.length();
    }

    // Check each group of consecutive digits are not broken into separate groupings in the
    // {@code normalizedCandidate} string.
    for (var i = 0; i < formattedNumberGroups.length; i++) {
      // Fails if the substring of {@code normalizedCandidate} starting from {@code fromIndex}
      // doesn't contain the consecutive digits in formattedNumberGroups[i].
      fromIndex = normalizedCandidate.indexOf(formattedNumberGroups[i], fromIndex);
      if (fromIndex < 0) {
        return false;
      }
      // Moves {@code fromIndex} forward.
      fromIndex += formattedNumberGroups[i].length();
      if (i == 0 && fromIndex < normalizedCandidate.length()) {
        // We are at the position right after the NDC. We get the region used for formatting
        // information based on the country code in the phone number, rather than the number itself,
        // as we do not need to distinguish between different countries with the same country
        // calling code and this is faster.
        var region = util.getRegionCodeForCountryCode(number.getCountryCode());
        if (util.getNddPrefixForRegion(region, true) != null && Character.isDigit(normalizedCandidate.charAt(fromIndex))) {
          // This means there is no formatting symbol after the NDC. In this case, we only
          // accept the number if there is no formatting symbol at all in the number, except
          // for extensions. This is only important for countries with national prefixes.
          var nationalSignificantNumber = util.getNationalSignificantNumber(number);
          return startsWith(normalizedCandidate.slice(fromIndex - formattedNumberGroups[i].length), nationalSignificantNumber);
        }
      }
    }

    // The check here makes sure that we haven't mistakenly already used the extension to
    // match the last group of the subscriber number. Note the extension cannot have
    // formatting in-between digits.
    return normalizedCandidate.slice(fromIndex).contains(number.getExtension());
  }

  var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass$5 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * Patterns used to extract phone numbers from a larger phone-number-like pattern. These are
   * ordered according to specificity. For example, white-space is last since that is frequently
   * used in numbers, not just to separate two numbers. We have separate patterns since we don't
   * want to break up the phone-number-like text on more than one different kind of symbol at one
   * time, although symbols of the same type (e.g. space) can be safely grouped together.
   *
   * Note that if there is a match, we will always check any text found up to the first match as
   * well.
   */
  var INNER_MATCHES = [
  // Breaks on the slash - e.g. "651-234-2345/332-445-1234"
  '\\/+(.*)/',

  // Note that the bracket here is inside the capturing group, since we consider it part of the
  // phone number. Will match a pattern like "(650) 223 3345 (754) 223 3321".
  '(\\([^(]*)',

  // Breaks on a hyphen - e.g. "12345 - 332-445-1234 is my number."
  // We require a space on either side of the hyphen for it to be considered a separator.
  '(?:' + pZ + '-|-' + pZ + ')' + pZ + '*(.+)',

  // Various types of wide hyphens. Note we have decided not to enforce a space here, since it's
  // possible that it's supposed to be used to break two numbers without spaces, and we haven't
  // seen many instances of it used within a number.
  '[\u2012-\u2015\uFF0D]' + pZ + '*(.+)',

  // Breaks on a full stop - e.g. "12345. 332-445-1234 is my number."
  '\\.+' + pZ + '*([^.]+)',

  // Breaks on space - e.g. "3324451234 8002341234"
  pZ + '+(' + PZ + '+)'];

  // Limit on the number of leading (plus) characters.
  var leadLimit = limit(0, 2);

  // Limit on the number of consecutive punctuation characters.
  var punctuationLimit = limit(0, 4);

  /* The maximum number of digits allowed in a digit-separated block. As we allow all digits in a
   * single block, set high enough to accommodate the entire national number and the international
   * country code. */
  var digitBlockLimit = MAX_LENGTH_FOR_NSN + MAX_LENGTH_COUNTRY_CODE;

  // Limit on the number of blocks separated by punctuation.
  // Uses digitBlockLimit since some formats use spaces to separate each digit.
  var blockLimit = limit(0, digitBlockLimit);

  /* A punctuation sequence allowing white space. */
  var punctuation = '[' + VALID_PUNCTUATION + ']' + punctuationLimit;

  // A digits block without punctuation.
  var digitSequence = pNd + limit(1, digitBlockLimit);

  /**
   * Phone number pattern allowing optional punctuation.
   * The phone number pattern used by `find()`, similar to
   * VALID_PHONE_NUMBER, but with the following differences:
   * <ul>
   *   <li>All captures are limited in order to place an upper bound to the text matched by the
   *       pattern.
   * <ul>
   *   <li>Leading punctuation / plus signs are limited.
   *   <li>Consecutive occurrences of punctuation are limited.
   *   <li>Number of digits is limited.
   * </ul>
   *   <li>No whitespace is allowed at the start or end.
   *   <li>No alpha digits (vanity numbers such as 1-800-SIX-FLAGS) are currently supported.
   * </ul>
   */
  var PATTERN = '(?:' + LEAD_CLASS + punctuation + ')' + leadLimit + digitSequence + '(?:' + punctuation + digitSequence + ')' + blockLimit + '(?:' + EXTN_PATTERNS_FOR_MATCHING + ')?';

  // Regular expression of trailing characters that we want to remove.
  // We remove all characters that are not alpha or numerical characters.
  // The hash character is retained here, as it may signify
  // the previous block was an extension.
  //
  // // Don't know what does '&&' mean here.
  // const UNWANTED_END_CHAR_PATTERN = new RegExp(`[[\\P{N}&&\\P{L}]&&[^#]]+$`)
  //
  var UNWANTED_END_CHAR_PATTERN = new RegExp('[^' + _pN + _pL + '#]+$');

  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

  /**
   * A stateful class that finds and extracts telephone numbers from {@linkplain CharSequence text}.
   * Instances can be created using the {@linkplain PhoneNumberUtil#findNumbers factory methods} in
   * {@link PhoneNumberUtil}.
   *
   * <p>Vanity numbers (phone numbers using alphabetic digits such as <tt>1-800-SIX-FLAGS</tt> are
   * not found.
   *
   * <p>This class is not thread-safe.
   */

  var PhoneNumberMatcher = function () {

    /**
     * Creates a new instance. See the factory methods in {@link PhoneNumberUtil} on how to obtain a
     * new instance.
     *
     * @param util  the phone number util to use
     * @param text  the character sequence that we will search, null for no text
     * @param country  the country to assume for phone numbers not written in international format
     *     (with a leading plus, or with the international dialing prefix of the specified region).
     *     May be null or "ZZ" if only numbers with a leading plus should be
     *     considered.
     * @param leniency  the leniency to use when evaluating candidate phone numbers
     * @param maxTries  the maximum number of invalid numbers to try before giving up on the text.
     *     This is to cover degenerate cases where the text has a lot of false positives in it. Must
     *     be {@code >= 0}.
     */


    /** The next index to start searching at. Undefined in {@link State#DONE}. */
    function PhoneNumberMatcher() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var metadata = arguments[2];

      _classCallCheck$6(this, PhoneNumberMatcher);

      this.state = 'NOT_READY';
      this.searchIndex = 0;
      this.regExpCache = new RegExpCache(32);

      options = _extends$5({}, options, {
        defaultCountry: options.defaultCountry && isSupportedCountry(options.defaultCountry, metadata) ? options.defaultCountry : undefined,
        leniency: options.leniency || options.extended ? 'POSSIBLE' : 'VALID',
        maxTries: options.maxTries || MAX_SAFE_INTEGER
      });

      if (!options.leniency) {
        throw new TypeError('`Leniency` not supplied');
      }

      if (options.maxTries < 0) {
        throw new TypeError('`maxTries` not supplied');
      }

      this.text = text;
      this.options = options;
      this.metadata = metadata;

      /** The degree of validation requested. */
      this.leniency = Leniency[options.leniency];

      if (!this.leniency) {
        throw new TypeError('Unknown leniency: ' + options.leniency + '.');
      }

      /** The maximum number of retries after matching an invalid number. */
      this.maxTries = options.maxTries;

      this.PATTERN = new RegExp(PATTERN, 'ig');
    }

    /**
     * Attempts to find the next subsequence in the searched sequence on or after {@code searchIndex}
     * that represents a phone number. Returns the next match, null if none was found.
     *
     * @param index  the search index to start searching at
     * @return  the phone number match found, null if none can be found
     */


    // A cache for frequently used country-specific regular expressions. Set to 32 to cover ~2-3
    // countries being used for the same doc with ~10 patterns for each country. Some pages will have
    // a lot more countries in use, but typically fewer numbers for each so expanding the cache for
    // that use-case won't have a lot of benefit.

    /** The iteration tristate. */


    _createClass$5(PhoneNumberMatcher, [{
      key: 'find',
      value: function find() // (index)
      {
        // // Reset the regular expression.
        // this.PATTERN.lastIndex = index

        var matches = void 0;
        while (this.maxTries > 0 && (matches = this.PATTERN.exec(this.text)) !== null) {
          var candidate = matches[0];
          var offset = matches.index;

          candidate = parsePreCandidate(candidate);

          if (isValidPreCandidate(candidate, offset, this.text)) {
            var match =
            // Try to come up with a valid match given the entire candidate.
            this.parseAndVerify(candidate, offset, this.text)
            // If that failed, try to find an "inner match" -
            // there might be a phone number within this candidate.
            || this.extractInnerMatch(candidate, offset, this.text);

            if (match) {
              if (this.options.v2) {
                var phoneNumber = new PhoneNumber(match.country, match.phone, this.metadata);
                if (match.ext) {
                  phoneNumber.ext = match.ext;
                }
                return {
                  startsAt: match.startsAt,
                  endsAt: match.endsAt,
                  number: phoneNumber
                };
              }
              return match;
            }
          }

          this.maxTries--;
        }
      }

      /**
       * Attempts to extract a match from `candidate`
       * if the whole candidate does not qualify as a match.
       */

    }, {
      key: 'extractInnerMatch',
      value: function extractInnerMatch(candidate, offset, text) {
        for (var _iterator = INNER_MATCHES, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var innerMatchPattern = _ref;

          var isFirstMatch = true;
          var matches = void 0;
          var possibleInnerMatch = new RegExp(innerMatchPattern, 'g');
          while ((matches = possibleInnerMatch.exec(candidate)) !== null && this.maxTries > 0) {
            if (isFirstMatch) {
              // We should handle any group before this one too.
              var _group = trimAfterFirstMatch(UNWANTED_END_CHAR_PATTERN, candidate.slice(0, matches.index));

              var _match = this.parseAndVerify(_group, offset, text);
              if (_match) {
                return _match;
              }

              this.maxTries--;
              isFirstMatch = false;
            }

            var group = trimAfterFirstMatch(UNWANTED_END_CHAR_PATTERN, matches[1]);

            // Java code does `groupMatcher.start(1)` here,
            // but there's no way in javascript to get a group match start index,
            // therefore using the overall match start index `matches.index`.
            var match = this.parseAndVerify(group, offset + matches.index, text);
            if (match) {
              return match;
            }

            this.maxTries--;
          }
        }
      }

      /**
       * Parses a phone number from the `candidate` using `parseNumber` and
       * verifies it matches the requested `leniency`. If parsing and verification succeed,
       * a corresponding `PhoneNumberMatch` is returned, otherwise this method returns `null`.
       *
       * @param candidate  the candidate match
       * @param offset  the offset of {@code candidate} within {@link #text}
       * @return  the parsed and validated phone number match, or null
       */

    }, {
      key: 'parseAndVerify',
      value: function parseAndVerify(candidate, offset, text) {
        if (!isValidCandidate(candidate, offset, text, this.options.leniency)) {
          return;
        }

        var number = parse(candidate, {
          extended: true,
          defaultCountry: this.options.defaultCountry
        }, this.metadata);

        if (!number.possible) {
          return;
        }

        if (this.leniency(number, candidate, this.metadata, this.regExpCache)) {
          // // We used parseAndKeepRawInput to create this number,
          // // but for now we don't return the extra values parsed.
          // // TODO: stop clearing all values here and switch all users over
          // // to using rawInput() rather than the rawString() of PhoneNumberMatch.
          // number.clearCountryCodeSource()
          // number.clearRawInput()
          // number.clearPreferredDomesticCarrierCode()

          var result = {
            startsAt: offset,
            endsAt: offset + candidate.length,
            country: number.country,
            phone: number.phone
          };

          if (number.ext) {
            result.ext = number.ext;
          }

          return result;
        }
      }
    }, {
      key: 'hasNext',
      value: function hasNext() {
        if (this.state === 'NOT_READY') {
          this.lastMatch = this.find(); // (this.searchIndex)

          if (this.lastMatch) {
            // this.searchIndex = this.lastMatch.endsAt
            this.state = 'READY';
          } else {
            this.state = 'DONE';
          }
        }

        return this.state === 'READY';
      }
    }, {
      key: 'next',
      value: function next() {
        // Check the state and find the next match as a side-effect if necessary.
        if (!this.hasNext()) {
          throw new Error('No next element');
        }

        // Don't retain that memory any longer than necessary.
        var result = this.lastMatch;
        this.lastMatch = null;
        this.state = 'NOT_READY';
        return result;
      }
    }]);

    return PhoneNumberMatcher;
  }();

  var _createClass$6 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  // Used in phone number format template creation.
  // Could be any digit, I guess.
  var DUMMY_DIGIT = '9';
  // I don't know why is it exactly `15`
  var LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15;
  // Create a phone number consisting only of the digit 9 that matches the
  // `number_pattern` by applying the pattern to the "longest phone number" string.
  var LONGEST_DUMMY_PHONE_NUMBER = repeat(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH);

  // The digits that have not been entered yet will be represented by a \u2008,
  // the punctuation space.
  var DIGIT_PLACEHOLDER = 'x'; // '\u2008' (punctuation space)
  var DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER);

  // A pattern that is used to match character classes in regular expressions.
  // An example of a character class is "[1-4]".
  var CREATE_CHARACTER_CLASS_PATTERN =  function () {
  	return (/\[([^\[\]])*\]/g
  	);
  };

  // Any digit in a regular expression that actually denotes a digit. For
  // example, in the regular expression "80[0-2]\d{6,10}", the first 2 digits
  // (8 and 0) are standalone digits, but the rest are not.
  // Two look-aheads are needed because the number following \\d could be a
  // two-digit number, since the phone number can be as long as 15 digits.
  var CREATE_STANDALONE_DIGIT_PATTERN =  function () {
  	return (/\d(?=[^,}][^,}])/g
  	);
  };

  // A pattern that is used to determine if a `format` is eligible
  // to be used by the "as you type formatter".
  // It is eligible when the `format` contains groups of the dollar sign
  // followed by a single digit, separated by valid phone number punctuation.
  // This prevents invalid punctuation (such as the star sign in Israeli star numbers)
  // getting into the output of the "as you type formatter".
  var ELIGIBLE_FORMAT_PATTERN = new RegExp('^' + '[' + VALID_PUNCTUATION + ']*' + '(\\$\\d[' + VALID_PUNCTUATION + ']*)+' + '$');

  // This is the minimum length of the leading digits of a phone number
  // to guarantee the first "leading digits pattern" for a phone number format
  // to be preemptive.
  var MIN_LEADING_DIGITS_LENGTH = 3;

  var VALID_INCOMPLETE_PHONE_NUMBER = '[' + PLUS_CHARS + ']{0,1}' + '[' + VALID_PUNCTUATION + VALID_DIGITS + ']*';

  var VALID_INCOMPLETE_PHONE_NUMBER_PATTERN = new RegExp('^' + VALID_INCOMPLETE_PHONE_NUMBER + '$', 'i');

  var AsYouType = function () {

  	/**
    * @param {string?} [defaultCountry] - The default country used for parsing non-international phone numbers.
    * @param {Object} metadata
    */
  	function AsYouType(defaultCountry, metadata) {
  		_classCallCheck$7(this, AsYouType);

  		this.options = {};

  		this.metadata = new Metadata(metadata);

  		if (defaultCountry && this.metadata.hasCountry(defaultCountry)) {
  			this.defaultCountry = defaultCountry;
  		}

  		this.reset();
  	}
  	// Not setting `options` to a constructor argument
  	// not to break backwards compatibility
  	// for older versions of the library.


  	_createClass$6(AsYouType, [{
  		key: 'input',
  		value: function input(text) {
  			// Parse input

  			var extracted_number = extract_formatted_phone_number(text) || '';

  			// Special case for a lone '+' sign
  			// since it's not considered a possible phone number.
  			if (!extracted_number) {
  				if (text && text.indexOf('+') >= 0) {
  					extracted_number = '+';
  				}
  			}

  			// Validate possible first part of a phone number
  			if (!VALID_INCOMPLETE_PHONE_NUMBER_PATTERN.test(extracted_number)) {
  				return this.currentOutput;
  			}

  			return this.processInput(parseIncompletePhoneNumber(extracted_number));
  		}
  	}, {
  		key: 'processInput',
  		value: function processInput(input) {
  			// If an out of position '+' sign detected
  			// (or a second '+' sign),
  			// then just drop it from the input.
  			if (input[0] === '+') {
  				if (!this.parsedInput) {
  					this.parsedInput += '+';

  					// If a default country was set
  					// then reset it because an explicitly international
  					// phone number is being entered
  					this.resetCountriness();
  				}

  				input = input.slice(1);
  			}

  			// Raw phone number
  			this.parsedInput += input;

  			// // Reset phone number validation state
  			// this.valid = false

  			// Add digits to the national number
  			this.nationalNumber += input;

  			// TODO: Deprecated: rename `this.nationalNumber`
  			// to `this.nationalNumber` and remove `.getNationalNumber()`.

  			// Try to format the parsed input

  			if (this.isInternational()) {
  				if (!this.countryCallingCode) {
  					// Extract country calling code from the digits entered so far.

  					// There must be some digits in order to extract anything from them.
  					if (!this.nationalNumber) {
  						// Return raw phone number
  						return this.parsedInput;
  					}

  					// If one looks at country phone codes
  					// then he can notice that no one country phone code
  					// is ever a (leftmost) substring of another country phone code.
  					// So if a valid country code is extracted so far
  					// then it means that this is the country code.

  					// If no country phone code could be extracted so far,
  					// then just return the raw phone number,
  					// because it has no way of knowing
  					// how to format the phone number so far.
  					if (!this.extractCountryCallingCode()) {
  						// Return raw phone number
  						return this.parsedInput;
  					}

  					// Initialize country-specific data
  					this.initialize_phone_number_formats_for_this_country_calling_code();
  					this.resetFormat();
  					this.determineTheCountry();
  				}
  				// `this.country` could be `undefined`,
  				// for instance, when there is ambiguity
  				// in a form of several different countries
  				// each corresponding to the same country phone code
  				// (e.g. NANPA: USA, Canada, etc),
  				// and there's not enough digits entered
  				// to reliably determine the country
  				// the phone number belongs to.
  				// Therefore, in cases of such ambiguity,
  				// each time something is input,
  				// try to determine the country
  				// (if it's not determined yet).
  				else if (!this.country) {
  						this.determineTheCountry();
  					}
  			} else {
  				// Some national prefixes are substrings of other national prefixes
  				// (for the same country), therefore try to extract national prefix each time
  				// because a longer national prefix might be available at some point in time.

  				var previous_national_prefix = this.nationalPrefix;
  				this.nationalNumber = this.nationalPrefix + this.nationalNumber;

  				// Possibly extract a national prefix
  				this.extractNationalPrefix();

  				if (this.nationalPrefix !== previous_national_prefix) {
  					// National number has changed
  					// (due to another national prefix been extracted)
  					// therefore national number has changed
  					// therefore reset all previous formatting data.
  					// (and leading digits matching state)
  					this.matching_formats = undefined;
  					this.resetFormat();
  				}
  			}

  			// if (!this.shouldFormat())
  			// {
  			// 	return this.format_as_non_formatted_number()
  			// }

  			if (!this.nationalNumber) {
  				return this.format_as_non_formatted_number();
  			}

  			// Check the available phone number formats
  			// based on the currently available leading digits.
  			this.match_formats_by_leading_digits();

  			// Format the phone number (given the next digits)
  			var formatted_national_phone_number = this.formatNationalNumber(input);

  			// If the phone number could be formatted,
  			// then return it, possibly prepending with country phone code
  			// (for international phone numbers only)
  			if (formatted_national_phone_number) {
  				return this.formatFullNumber(formatted_national_phone_number);
  			}

  			// If the phone number couldn't be formatted,
  			// then just fall back to the raw phone number.
  			return this.format_as_non_formatted_number();
  		}
  	}, {
  		key: 'format_as_non_formatted_number',
  		value: function format_as_non_formatted_number() {
  			// Strip national prefix for incorrectly inputted international phones.
  			if (this.isInternational() && this.countryCallingCode) {
  				return '+' + this.countryCallingCode + this.nationalNumber;
  			}

  			return this.parsedInput;
  		}
  	}, {
  		key: 'formatNationalNumber',
  		value: function formatNationalNumber(next_digits) {
  			// Format the next phone number digits
  			// using the previously chosen phone number format.
  			//
  			// This is done here because if `attempt_to_format_complete_phone_number`
  			// was placed before this call then the `template`
  			// wouldn't reflect the situation correctly (and would therefore be inconsistent)
  			//
  			var national_number_formatted_with_previous_format = void 0;
  			if (this.chosenFormat) {
  				national_number_formatted_with_previous_format = this.formatNextNationalNumberDigits(next_digits);
  			}

  			// See if the input digits can be formatted properly already. If not,
  			// use the results from formatNextNationalNumberDigits(), which does formatting
  			// based on the formatting pattern chosen.

  			var formatted_number = this.attempt_to_format_complete_phone_number();

  			// Just because a phone number doesn't have a suitable format
  			// that doesn't mean that the phone is invalid
  			// because phone number formats only format phone numbers,
  			// they don't validate them and some (rare) phone numbers
  			// are meant to stay non-formatted.
  			if (formatted_number) {
  				return formatted_number;
  			}

  			// For some phone number formats national prefix

  			// If the previously chosen phone number format
  			// didn't match the next (current) digit being input
  			// (leading digits pattern didn't match).
  			if (this.chooseAnotherFormat()) {
  				// And a more appropriate phone number format
  				// has been chosen for these `leading digits`,
  				// then format the national phone number (so far)
  				// using the newly selected phone number pattern.

  				// Will return `undefined` if it couldn't format
  				// the supplied national number
  				// using the selected phone number pattern.

  				return this.reformatNationalNumber();
  			}

  			// If could format the next (current) digit
  			// using the previously chosen phone number format
  			// then return the formatted number so far.

  			// If no new phone number format could be chosen,
  			// and couldn't format the supplied national number
  			// using the selected phone number pattern,
  			// then it will return `undefined`.

  			return national_number_formatted_with_previous_format;
  		}
  	}, {
  		key: 'reset',
  		value: function reset() {
  			// Input stripped of non-phone-number characters.
  			// Can only contain a possible leading '+' sign and digits.
  			this.parsedInput = '';

  			this.currentOutput = '';

  			// This contains the national prefix that has been extracted. It contains only
  			// digits without formatting.
  			this.nationalPrefix = '';

  			this.nationalNumber = '';
  			this.carrierCode = '';

  			this.resetCountriness();

  			this.resetFormat();

  			return this;
  		}
  	}, {
  		key: 'resetCountry',
  		value: function resetCountry() {
  			if (this.isInternational()) {
  				this.country = undefined;
  			} else {
  				this.country = this.defaultCountry;
  			}
  		}
  	}, {
  		key: 'resetCountriness',
  		value: function resetCountriness() {
  			this.resetCountry();

  			if (this.defaultCountry && !this.isInternational()) {
  				this.metadata.country(this.defaultCountry);
  				this.countryCallingCode = this.metadata.countryCallingCode();

  				this.initialize_phone_number_formats_for_this_country_calling_code();
  			} else {
  				this.metadata.country(undefined);
  				this.countryCallingCode = undefined;

  				// "Available formats" are all formats available for the country.
  				// "Matching formats" are only formats eligible for the national number being entered.
  				this.available_formats = [];
  				this.matching_formats = undefined;
  			}
  		}
  	}, {
  		key: 'resetFormat',
  		value: function resetFormat() {
  			this.chosenFormat = undefined;
  			this.template = undefined;
  			this.partially_populated_template = undefined;
  			this.last_match_position = -1;
  		}

  		// Format each digit of national phone number (so far)
  		// using the newly selected phone number pattern.

  	}, {
  		key: 'reformatNationalNumber',
  		value: function reformatNationalNumber() {
  			// Format each digit of national phone number (so far)
  			// using the selected phone number pattern.
  			return this.formatNextNationalNumberDigits(this.nationalNumber);
  		}
  	}, {
  		key: 'initialize_phone_number_formats_for_this_country_calling_code',
  		value: function initialize_phone_number_formats_for_this_country_calling_code() {
  			// Get all "eligible" phone number formats for this country
  			this.available_formats = this.metadata.formats().filter(function (format) {
  				return ELIGIBLE_FORMAT_PATTERN.test(format.internationalFormat());
  			});

  			this.matching_formats = undefined;
  		}
  	}, {
  		key: 'match_formats_by_leading_digits',
  		value: function match_formats_by_leading_digits() {
  			var leading_digits = this.nationalNumber;

  			// "leading digits" pattern list starts with a
  			// "leading digits" pattern fitting a maximum of 3 leading digits.
  			// So, after a user inputs 3 digits of a national (significant) phone number
  			// this national (significant) number can already be formatted.
  			// The next "leading digits" pattern is for 4 leading digits max,
  			// and the "leading digits" pattern after it is for 5 leading digits max, etc.

  			// This implementation is different from Google's
  			// in that it searches for a fitting format
  			// even if the user has entered less than
  			// `MIN_LEADING_DIGITS_LENGTH` digits of a national number.
  			// Because some leading digits patterns already match for a single first digit.
  			var index_of_leading_digits_pattern = leading_digits.length - MIN_LEADING_DIGITS_LENGTH;
  			if (index_of_leading_digits_pattern < 0) {
  				index_of_leading_digits_pattern = 0;
  			}

  			// "Available formats" are all formats available for the country.
  			// "Matching formats" are only formats eligible for the national number being entered.

  			// If at least `MIN_LEADING_DIGITS_LENGTH` digits of a national number are available
  			// then format matching starts narrowing down the list of possible formats
  			// (only previously matched formats are considered for next digits).
  			var available_formats = this.had_enough_leading_digits && this.matching_formats || this.available_formats;
  			this.had_enough_leading_digits = this.shouldFormat();

  			this.matching_formats = available_formats.filter(function (format) {
  				var leading_digits_patterns_count = format.leadingDigitsPatterns().length;

  				// If this format is not restricted to a certain
  				// leading digits pattern then it fits.
  				if (leading_digits_patterns_count === 0) {
  					return true;
  				}

  				var leading_digits_pattern_index = Math.min(index_of_leading_digits_pattern, leading_digits_patterns_count - 1);
  				var leading_digits_pattern = format.leadingDigitsPatterns()[leading_digits_pattern_index];

  				// Brackets are required for `^` to be applied to
  				// all or-ed (`|`) parts, not just the first one.
  				return new RegExp('^(' + leading_digits_pattern + ')').test(leading_digits);
  			});

  			// If there was a phone number format chosen
  			// and it no longer holds given the new leading digits then reset it.
  			// The test for this `if` condition is marked as:
  			// "Reset a chosen format when it no longer holds given the new leading digits".
  			// To construct a valid test case for this one can find a country
  			// in `PhoneNumberMetadata.xml` yielding one format for 3 `<leadingDigits>`
  			// and yielding another format for 4 `<leadingDigits>` (Australia in this case).
  			if (this.chosenFormat && this.matching_formats.indexOf(this.chosenFormat) === -1) {
  				this.resetFormat();
  			}
  		}
  	}, {
  		key: 'shouldFormat',
  		value: function shouldFormat() {
  			// Start matching any formats at all when the national number
  			// entered so far is at least 3 digits long,
  			// otherwise format matching would give false negatives
  			// like when the digits entered so far are `2`
  			// and the leading digits pattern is `21` –
  			// it's quite obvious in this case that the format could be the one
  			// but due to the absence of further digits it would give false negative.
  			//
  			// Presumably the limitation of "3 digits min"
  			// is imposed to exclude false matches,
  			// e.g. when there are two different formats
  			// each one fitting one or two leading digits being input.
  			// But for this case I would propose a specific `if/else` condition.
  			//
  			return this.nationalNumber.length >= MIN_LEADING_DIGITS_LENGTH;
  		}

  		// Check to see if there is an exact pattern match for these digits. If so, we
  		// should use this instead of any other formatting template whose
  		// `leadingDigitsPattern` also matches the input.

  	}, {
  		key: 'attempt_to_format_complete_phone_number',
  		value: function attempt_to_format_complete_phone_number() {
  			for (var _iterator = this.matching_formats, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  				var _ref;

  				if (_isArray) {
  					if (_i >= _iterator.length) break;
  					_ref = _iterator[_i++];
  				} else {
  					_i = _iterator.next();
  					if (_i.done) break;
  					_ref = _i.value;
  				}

  				var format = _ref;

  				var matcher = new RegExp('^(?:' + format.pattern() + ')$');

  				if (!matcher.test(this.nationalNumber)) {
  					continue;
  				}

  				if (!this.isFormatApplicable(format)) {
  					continue;
  				}

  				// To leave the formatter in a consistent state
  				this.resetFormat();
  				this.chosenFormat = format;

  				var formatted_number = format_national_number_using_format(this.nationalNumber, format, this.isInternational(), this.nationalPrefix !== '', this.metadata);

  				// Special handling for NANPA countries for AsYouType formatter.
  				// Copied from Google's `libphonenumber`:
  				// https://github.com/googlei18n/libphonenumber/blob/66986dbbe443ee8450e2b54dcd44ac384b3bbee8/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L535-L573
  				if (this.nationalPrefix && this.countryCallingCode === '1') {
  					formatted_number = '1 ' + formatted_number;
  				}

  				// Set `this.template` and `this.partially_populated_template`.
  				//
  				// `else` case doesn't ever happen
  				// with the current metadata,
  				// but just in case.
  				//
  				/* istanbul ignore else */
  				if (this.createFormattingTemplate(format)) {
  					// Populate `this.partially_populated_template`
  					this.reformatNationalNumber();
  				} else {
  					// Prepend `+CountryCode` in case of an international phone number
  					var full_number = this.formatFullNumber(formatted_number);
  					this.template = full_number.replace(/[\d\+]/g, DIGIT_PLACEHOLDER);
  					this.partially_populated_template = full_number;
  				}

  				return formatted_number;
  			}
  		}

  		// Prepends `+CountryCode` in case of an international phone number

  	}, {
  		key: 'formatFullNumber',
  		value: function formatFullNumber(formattedNationalNumber) {
  			if (this.isInternational()) {
  				return '+' + this.countryCallingCode + ' ' + formattedNationalNumber;
  			}
  			return formattedNationalNumber;
  		}

  		// Extracts the country calling code from the beginning
  		// of the entered `national_number` (so far),
  		// and places the remaining input into the `national_number`.

  	}, {
  		key: 'extractCountryCallingCode',
  		value: function extractCountryCallingCode$1() {
  			var _extractCountryCallin = extractCountryCallingCode(this.parsedInput, this.defaultCountry, this.metadata.metadata),
  			    countryCallingCode = _extractCountryCallin.countryCallingCode,
  			    number = _extractCountryCallin.number;

  			if (!countryCallingCode) {
  				return;
  			}

  			this.countryCallingCode = countryCallingCode;

  			// Sometimes people erroneously write national prefix
  			// as part of an international number, e.g. +44 (0) ....
  			// This violates the standards for international phone numbers,
  			// so "As You Type" formatter assumes no national prefix
  			// when parsing a phone number starting from `+`.
  			// Even if it did attempt to filter-out that national prefix
  			// it would look weird for a user trying to enter a digit
  			// because from user's perspective the keyboard "wouldn't be working".
  			this.nationalNumber = number;

  			this.metadata.chooseCountryByCountryCallingCode(countryCallingCode);
  			return this.metadata.selectedCountry() !== undefined;
  		}
  	}, {
  		key: 'extractNationalPrefix',
  		value: function extractNationalPrefix() {
  			this.nationalPrefix = '';

  			if (!this.metadata.selectedCountry()) {
  				return;
  			}

  			// Only strip national prefixes for non-international phone numbers
  			// because national prefixes can't be present in international phone numbers.
  			// While `parseNumber()` is forgiving is such cases, `AsYouType` is not.

  			var _strip_national_prefi = strip_national_prefix_and_carrier_code(this.nationalNumber, this.metadata),
  			    potential_national_number = _strip_national_prefi.number,
  			    carrierCode = _strip_national_prefi.carrierCode;

  			if (carrierCode) {
  				this.carrierCode = carrierCode;
  			}

  			// We require that the NSN remaining after stripping the national prefix and
  			// carrier code be long enough to be a possible length for the region.
  			// Otherwise, we don't do the stripping, since the original number could be
  			// a valid short number.
  			if (!this.metadata.possibleLengths() || this.isPossibleNumber(this.nationalNumber) && !this.isPossibleNumber(potential_national_number)) {
  				// Verify the parsed national (significant) number for this country
  				//
  				// If the original number (before stripping national prefix) was viable,
  				// and the resultant number is not, then prefer the original phone number.
  				// This is because for some countries (e.g. Russia) the same digit could be both
  				// a national prefix and a leading digit of a valid national phone number,
  				// like `8` is the national prefix for Russia and both
  				// `8 800 555 35 35` and `800 555 35 35` are valid numbers.
  				if (matchesEntirely(this.nationalNumber, this.metadata.nationalNumberPattern()) && !matchesEntirely(potential_national_number, this.metadata.nationalNumberPattern())) {
  					return;
  				}
  			}

  			this.nationalPrefix = this.nationalNumber.slice(0, this.nationalNumber.length - potential_national_number.length);
  			this.nationalNumber = potential_national_number;

  			return this.nationalPrefix;
  		}
  	}, {
  		key: 'isPossibleNumber',
  		value: function isPossibleNumber(number) {
  			var validation_result = checkNumberLengthForType(number, undefined, this.metadata);
  			switch (validation_result) {
  				case 'IS_POSSIBLE':
  					return true;
  				// case 'IS_POSSIBLE_LOCAL_ONLY':
  				// 	return !this.isInternational()
  				default:
  					return false;
  			}
  		}
  	}, {
  		key: 'chooseAnotherFormat',
  		value: function chooseAnotherFormat() {
  			// When there are multiple available formats, the formatter uses the first
  			// format where a formatting template could be created.
  			for (var _iterator2 = this.matching_formats, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
  				var _ref2;

  				if (_isArray2) {
  					if (_i2 >= _iterator2.length) break;
  					_ref2 = _iterator2[_i2++];
  				} else {
  					_i2 = _iterator2.next();
  					if (_i2.done) break;
  					_ref2 = _i2.value;
  				}

  				var format = _ref2;

  				// If this format is currently being used
  				// and is still possible, then stick to it.
  				if (this.chosenFormat === format) {
  					return;
  				}

  				// If this `format` is suitable for "as you type",
  				// then extract the template from this format
  				// and use it to format the phone number being input.

  				if (!this.isFormatApplicable(format)) {
  					continue;
  				}

  				if (!this.createFormattingTemplate(format)) {
  					continue;
  				}

  				this.chosenFormat = format;

  				// With a new formatting template, the matched position
  				// using the old template needs to be reset.
  				this.last_match_position = -1;

  				return true;
  			}

  			// No format matches the phone number,
  			// therefore set `country` to `undefined`
  			// (or to the default country).
  			this.resetCountry();

  			// No format matches the national phone number entered
  			this.resetFormat();
  		}
  	}, {
  		key: 'isFormatApplicable',
  		value: function isFormatApplicable(format) {
  			// If national prefix is mandatory for this phone number format
  			// and the user didn't input the national prefix
  			// then this phone number format isn't suitable.
  			if (!this.isInternational() && !this.nationalPrefix && format.nationalPrefixIsMandatoryWhenFormatting()) {
  				return false;
  			}
  			// If this format doesn't use national prefix
  			// but the user did input national prefix
  			// then this phone number format isn't suitable.
  			if (this.nationalPrefix && !format.usesNationalPrefix() && !format.nationalPrefixIsOptionalWhenFormatting()) {
  				return false;
  			}
  			return true;
  		}
  	}, {
  		key: 'createFormattingTemplate',
  		value: function createFormattingTemplate(format) {
  			// The formatter doesn't format numbers when numberPattern contains '|', e.g.
  			// (20|3)\d{4}. In those cases we quickly return.
  			// (Though there's no such format in current metadata)
  			/* istanbul ignore if */
  			if ( format.pattern().indexOf('|') >= 0) {
  				return;
  			}

  			// Get formatting template for this phone number format
  			var template = this.getTemplateForNumberFormatPattern(format);

  			// If the national number entered is too long
  			// for any phone number format, then abort.
  			if (!template) {
  				return;
  			}

  			// This one is for national number only
  			this.partially_populated_template = template;

  			// For convenience, the public `.template` property
  			// contains the whole international number
  			// if the phone number being input is international:
  			// 'x' for the '+' sign, 'x'es for the country phone code,
  			// a spacebar and then the template for the formatted national number.
  			if (this.isInternational()) {
  				this.template = DIGIT_PLACEHOLDER + repeat(DIGIT_PLACEHOLDER, this.countryCallingCode.length) + ' ' + template;
  			}
  			// For local numbers, replace national prefix
  			// with a digit placeholder.
  			else {
  					this.template = template.replace(/\d/g, DIGIT_PLACEHOLDER);
  				}

  			// This one is for the full phone number
  			return this.template;
  		}

  		// Generates formatting template for a phone number format

  	}, {
  		key: 'getTemplateForNumberFormatPattern',
  		value: function getTemplateForNumberFormatPattern(format) {
  			// A very smart trick by the guys at Google
  			var number_pattern = format.pattern();

  			/* istanbul ignore else */
  			{
  				number_pattern = number_pattern
  				// Replace anything in the form of [..] with \d
  				.replace(CREATE_CHARACTER_CLASS_PATTERN(), '\\d')
  				// Replace any standalone digit (not the one in `{}`) with \d
  				.replace(CREATE_STANDALONE_DIGIT_PATTERN(), '\\d');
  			}

  			// This match will always succeed,
  			// because the "longest dummy phone number"
  			// has enough length to accomodate any possible
  			// national phone number format pattern.
  			var dummy_phone_number_matching_format_pattern = LONGEST_DUMMY_PHONE_NUMBER.match(number_pattern)[0];

  			// If the national number entered is too long
  			// for any phone number format, then abort.
  			if (this.nationalNumber.length > dummy_phone_number_matching_format_pattern.length) {
  				return;
  			}

  			// Prepare the phone number format
  			var number_format = this.getFormatFormat(format);

  			// Get a formatting template which can be used to efficiently format
  			// a partial number where digits are added one by one.

  			// Below `strict_pattern` is used for the
  			// regular expression (with `^` and `$`).
  			// This wasn't originally in Google's `libphonenumber`
  			// and I guess they don't really need it
  			// because they're not using "templates" to format phone numbers
  			// but I added `strict_pattern` after encountering
  			// South Korean phone number formatting bug.
  			//
  			// Non-strict regular expression bug demonstration:
  			//
  			// this.nationalNumber : `111111111` (9 digits)
  			//
  			// number_pattern : (\d{2})(\d{3,4})(\d{4})
  			// number_format : `$1 $2 $3`
  			// dummy_phone_number_matching_format_pattern : `9999999999` (10 digits)
  			//
  			// '9999999999'.replace(new RegExp(/(\d{2})(\d{3,4})(\d{4})/g), '$1 $2 $3') = "99 9999 9999"
  			//
  			// template : xx xxxx xxxx
  			//
  			// But the correct template in this case is `xx xxx xxxx`.
  			// The template was generated incorrectly because of the
  			// `{3,4}` variability in the `number_pattern`.
  			//
  			// The fix is, if `this.nationalNumber` has already sufficient length
  			// to satisfy the `number_pattern` completely then `this.nationalNumber` is used
  			// instead of `dummy_phone_number_matching_format_pattern`.

  			var strict_pattern = new RegExp('^' + number_pattern + '$');
  			var national_number_dummy_digits = this.nationalNumber.replace(/\d/g, DUMMY_DIGIT);

  			// If `this.nationalNumber` has already sufficient length
  			// to satisfy the `number_pattern` completely then use it
  			// instead of `dummy_phone_number_matching_format_pattern`.
  			if (strict_pattern.test(national_number_dummy_digits)) {
  				dummy_phone_number_matching_format_pattern = national_number_dummy_digits;
  			}

  			// Generate formatting template for this phone number format
  			return dummy_phone_number_matching_format_pattern
  			// Format the dummy phone number according to the format
  			.replace(new RegExp(number_pattern), number_format)
  			// Replace each dummy digit with a DIGIT_PLACEHOLDER
  			.replace(new RegExp(DUMMY_DIGIT, 'g'), DIGIT_PLACEHOLDER);
  		}
  	}, {
  		key: 'formatNextNationalNumberDigits',
  		value: function formatNextNationalNumberDigits(digits) {
  			// Using `.split('')` to iterate through a string here
  			// to avoid requiring `Symbol.iterator` polyfill.
  			// `.split('')` is generally not safe for Unicode,
  			// but in this particular case for `digits` it is safe.
  			// for (const digit of digits)
  			for (var _iterator3 = digits.split(''), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
  				var _ref3;

  				if (_isArray3) {
  					if (_i3 >= _iterator3.length) break;
  					_ref3 = _iterator3[_i3++];
  				} else {
  					_i3 = _iterator3.next();
  					if (_i3.done) break;
  					_ref3 = _i3.value;
  				}

  				var digit = _ref3;

  				// If there is room for more digits in current `template`,
  				// then set the next digit in the `template`,
  				// and return the formatted digits so far.

  				// If more digits are entered than the current format could handle
  				if (this.partially_populated_template.slice(this.last_match_position + 1).search(DIGIT_PLACEHOLDER_MATCHER) === -1) {
  					// Reset the current format,
  					// so that the new format will be chosen
  					// in a subsequent `this.chooseAnotherFormat()` call
  					// later in code.
  					this.chosenFormat = undefined;
  					this.template = undefined;
  					this.partially_populated_template = undefined;
  					return;
  				}

  				this.last_match_position = this.partially_populated_template.search(DIGIT_PLACEHOLDER_MATCHER);
  				this.partially_populated_template = this.partially_populated_template.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
  			}

  			// Return the formatted phone number so far.
  			return cut_stripping_dangling_braces(this.partially_populated_template, this.last_match_position + 1);

  			// The old way which was good for `input-format` but is not so good
  			// for `react-phone-number-input`'s default input (`InputBasic`).
  			// return close_dangling_braces(this.partially_populated_template, this.last_match_position + 1)
  			// 	.replace(DIGIT_PLACEHOLDER_MATCHER_GLOBAL, ' ')
  		}
  	}, {
  		key: 'isInternational',
  		value: function isInternational() {
  			return this.parsedInput && this.parsedInput[0] === '+';
  		}
  	}, {
  		key: 'getFormatFormat',
  		value: function getFormatFormat(format) {
  			if (this.isInternational()) {
  				return changeInternationalFormatStyle(format.internationalFormat());
  			}

  			// If national prefix formatting rule is set
  			// for this phone number format
  			if (format.nationalPrefixFormattingRule()) {
  				// If the user did input the national prefix
  				// (or if the national prefix formatting rule does not require national prefix)
  				// then maybe make it part of the phone number template
  				if (this.nationalPrefix || !format.usesNationalPrefix()) {
  					// Make the national prefix part of the phone number template
  					return format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule());
  				}
  			}
  			// Special handling for NANPA countries for AsYouType formatter.
  			// Copied from Google's `libphonenumber`:
  			// https://github.com/googlei18n/libphonenumber/blob/66986dbbe443ee8450e2b54dcd44ac384b3bbee8/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L535-L573
  			else if (this.countryCallingCode === '1' && this.nationalPrefix === '1') {
  					return '1 ' + format.format();
  				}

  			return format.format();
  		}

  		// Determines the country of the phone number
  		// entered so far based on the country phone code
  		// and the national phone number.

  	}, {
  		key: 'determineTheCountry',
  		value: function determineTheCountry() {
  			this.country = find_country_code(this.countryCallingCode, this.nationalNumber, this.metadata);
  		}

  		/**
     * Returns an instance of `PhoneNumber` class.
     * Will return `undefined` if no national (significant) number
     * digits have been entered so far, or if no `defaultCountry` has been
     * set and the user enters a phone number not in international format.
     */

  	}, {
  		key: 'getNumber',
  		value: function getNumber() {
  			if (!this.countryCallingCode || !this.nationalNumber) {
  				return undefined;
  			}
  			var phoneNumber = new PhoneNumber(this.country || this.countryCallingCode, this.nationalNumber, this.metadata.metadata);
  			if (this.carrierCode) {
  				phoneNumber.carrierCode = this.carrierCode;
  			}
  			// Phone number extensions are not supported by "As You Type" formatter.
  			return phoneNumber;
  		}
  	}, {
  		key: 'getNationalNumber',
  		value: function getNationalNumber() {
  			return this.nationalNumber;
  		}
  	}, {
  		key: 'getTemplate',
  		value: function getTemplate() {
  			if (!this.template) {
  				return;
  			}

  			var index = -1;

  			var i = 0;
  			while (i < this.parsedInput.length) {
  				index = this.template.indexOf(DIGIT_PLACEHOLDER, index + 1);
  				i++;
  			}

  			return cut_stripping_dangling_braces(this.template, index + 1);
  		}
  	}]);

  	return AsYouType;
  }();


  function strip_dangling_braces(string) {
  	var dangling_braces = [];
  	var i = 0;
  	while (i < string.length) {
  		if (string[i] === '(') {
  			dangling_braces.push(i);
  		} else if (string[i] === ')') {
  			dangling_braces.pop();
  		}
  		i++;
  	}

  	var start = 0;
  	var cleared_string = '';
  	dangling_braces.push(string.length);
  	for (var _iterator4 = dangling_braces, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
  		var _ref4;

  		if (_isArray4) {
  			if (_i4 >= _iterator4.length) break;
  			_ref4 = _iterator4[_i4++];
  		} else {
  			_i4 = _iterator4.next();
  			if (_i4.done) break;
  			_ref4 = _i4.value;
  		}

  		var index = _ref4;

  		cleared_string += string.slice(start, index);
  		start = index + 1;
  	}

  	return cleared_string;
  }

  function cut_stripping_dangling_braces(string, cut_before_index) {
  	if (string[cut_before_index] === ')') {
  		cut_before_index++;
  	}
  	return strip_dangling_braces(string.slice(0, cut_before_index));
  }

  // Repeats a string (or a symbol) N times.
  // http://stackoverflow.com/questions/202605/repeat-string-javascript
  function repeat(string, times) {
  	if (times < 1) {
  		return '';
  	}

  	var result = '';

  	while (times > 1) {
  		if (times & 1) {
  			result += string;
  		}

  		times >>= 1;
  		string += string;
  	}

  	return result + string;
  }

  // Deprecated.

  function parsePhoneNumberFromString$2()
  {
  	var parameters = Array.prototype.slice.call(arguments);
  	parameters.push(metadata);
  	return parsePhoneNumberFromString$1.apply(this, parameters)
  }

  function formatNumber$3()
  {
  	var parameters = Array.prototype.slice.call(arguments);
  	parameters.push(metadata);
  	return formatNumber$2.apply(this, parameters)
  }

  function isValidNumber$2()
  {
  	var parameters = Array.prototype.slice.call(arguments);
  	parameters.push(metadata);
  	return isValidNumber$1.apply(this, parameters)
  }

  // Deprecated.
  function PhoneNumberSearch$1(text, options)
  {
  	PhoneNumberSearch.call(this, text, options, metadata);
  }

  // Deprecated.
  PhoneNumberSearch$1.prototype = Object.create(PhoneNumberSearch.prototype, {});
  PhoneNumberSearch$1.prototype.constructor = PhoneNumberSearch$1;

  function PhoneNumberMatcher$1(text, options)
  {
  	PhoneNumberMatcher.call(this, text, options, metadata);
  }

  PhoneNumberMatcher$1.prototype = Object.create(PhoneNumberMatcher.prototype, {});
  PhoneNumberMatcher$1.prototype.constructor = PhoneNumberMatcher$1;

  function AsYouType$1(country)
  {
  	AsYouType.call(this, country, metadata);
  }

  AsYouType$1.prototype = Object.create(AsYouType.prototype, {});
  AsYouType$1.prototype.constructor = AsYouType$1;

  // Array of country objects for the flag dropdown.
  // Here is the criteria for the plugin to support a given country/territory
  // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
  // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
  // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
  // Each country array has the following information:
  // [
  //    Country name,
  //    iso2 code,
  //    International dial code,
  //    Order (if >1 country with same dial code),
  //    Area codes
  // ]
  var allCountries = [['Afghanistan (‫افغانستان‬‎)', 'af', '93'], ['Albania (Shqipëri)', 'al', '355'], ['Algeria (‫الجزائر‬‎)', 'dz', '213'], ['American Samoa', 'as', '1684'], ['Andorra', 'ad', '376'], ['Angola', 'ao', '244'], ['Anguilla', 'ai', '1264'], ['Antigua and Barbuda', 'ag', '1268'], ['Argentina', 'ar', '54'], ['Armenia (Հայաստան)', 'am', '374'], ['Aruba', 'aw', '297'], ['Australia', 'au', '61', 0], ['Austria (Österreich)', 'at', '43'], ['Azerbaijan (Azərbaycan)', 'az', '994'], ['Bahamas', 'bs', '1242'], ['Bahrain (‫البحرين‬‎)', 'bh', '973'], ['Bangladesh (বাংলাদেশ)', 'bd', '880'], ['Barbados', 'bb', '1246'], ['Belarus (Беларусь)', 'by', '375'], ['Belgium (België)', 'be', '32'], ['Belize', 'bz', '501'], ['Benin (Bénin)', 'bj', '229'], ['Bermuda', 'bm', '1441'], ['Bhutan (འབྲུག)', 'bt', '975'], ['Bolivia', 'bo', '591'], ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'], ['Botswana', 'bw', '267'], ['Brazil (Brasil)', 'br', '55'], ['British Indian Ocean Territory', 'io', '246'], ['British Virgin Islands', 'vg', '1284'], ['Brunei', 'bn', '673'], ['Bulgaria (България)', 'bg', '359'], ['Burkina Faso', 'bf', '226'], ['Burundi (Uburundi)', 'bi', '257'], ['Cambodia (កម្ពុជា)', 'kh', '855'], ['Cameroon (Cameroun)', 'cm', '237'], ['Canada', 'ca', '1', 1, ['204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']], ['Cape Verde (Kabu Verdi)', 'cv', '238'], ['Caribbean Netherlands', 'bq', '599', 1], ['Cayman Islands', 'ky', '1345'], ['Central African Republic (République centrafricaine)', 'cf', '236'], ['Chad (Tchad)', 'td', '235'], ['Chile', 'cl', '56'], ['China (中国)', 'cn', '86'], ['Christmas Island', 'cx', '61', 2], ['Cocos (Keeling) Islands', 'cc', '61', 1], ['Colombia', 'co', '57'], ['Comoros (‫جزر القمر‬‎)', 'km', '269'], ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'], ['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'], ['Cook Islands', 'ck', '682'], ['Costa Rica', 'cr', '506'], ['Côte d’Ivoire', 'ci', '225'], ['Croatia (Hrvatska)', 'hr', '385'], ['Cuba', 'cu', '53'], ['Curaçao', 'cw', '599', 0], ['Cyprus (Κύπρος)', 'cy', '357'], ['Czech Republic (Česká republika)', 'cz', '420'], ['Denmark (Danmark)', 'dk', '45'], ['Djibouti', 'dj', '253'], ['Dominica', 'dm', '1767'], ['Dominican Republic (República Dominicana)', 'do', '1', 2, ['809', '829', '849']], ['Ecuador', 'ec', '593'], ['Egypt (‫مصر‬‎)', 'eg', '20'], ['El Salvador', 'sv', '503'], ['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'], ['Eritrea', 'er', '291'], ['Estonia (Eesti)', 'ee', '372'], ['Ethiopia', 'et', '251'], ['Falkland Islands (Islas Malvinas)', 'fk', '500'], ['Faroe Islands (Føroyar)', 'fo', '298'], ['Fiji', 'fj', '679'], ['Finland (Suomi)', 'fi', '358', 0], ['France', 'fr', '33'], ['French Guiana (Guyane française)', 'gf', '594'], ['French Polynesia (Polynésie française)', 'pf', '689'], ['Gabon', 'ga', '241'], ['Gambia', 'gm', '220'], ['Georgia (საქართველო)', 'ge', '995'], ['Germany (Deutschland)', 'de', '49'], ['Ghana (Gaana)', 'gh', '233'], ['Gibraltar', 'gi', '350'], ['Greece (Ελλάδα)', 'gr', '30'], ['Greenland (Kalaallit Nunaat)', 'gl', '299'], ['Grenada', 'gd', '1473'], ['Guadeloupe', 'gp', '590', 0], ['Guam', 'gu', '1671'], ['Guatemala', 'gt', '502'], ['Guernsey', 'gg', '44', 1], ['Guinea (Guinée)', 'gn', '224'], ['Guinea-Bissau (Guiné Bissau)', 'gw', '245'], ['Guyana', 'gy', '592'], ['Haiti', 'ht', '509'], ['Honduras', 'hn', '504'], ['Hong Kong (香港)', 'hk', '852'], ['Hungary (Magyarország)', 'hu', '36'], ['Iceland (Ísland)', 'is', '354'], ['India (भारत)', 'in', '91'], ['Indonesia', 'id', '62'], ['Iran (‫ایران‬‎)', 'ir', '98'], ['Iraq (‫العراق‬‎)', 'iq', '964'], ['Ireland', 'ie', '353'], ['Isle of Man', 'im', '44', 2], ['Israel (‫ישראל‬‎)', 'il', '972'], ['Italy (Italia)', 'it', '39', 0], ['Jamaica', 'jm', '1876'], ['Japan (日本)', 'jp', '81'], ['Jersey', 'je', '44', 3], ['Jordan (‫الأردن‬‎)', 'jo', '962'], ['Kazakhstan (Казахстан)', 'kz', '7', 1], ['Kenya', 'ke', '254'], ['Kiribati', 'ki', '686'], ['Kosovo', 'xk', '383'], ['Kuwait (‫الكويت‬‎)', 'kw', '965'], ['Kyrgyzstan (Кыргызстан)', 'kg', '996'], ['Laos (ລາວ)', 'la', '856'], ['Latvia (Latvija)', 'lv', '371'], ['Lebanon (‫لبنان‬‎)', 'lb', '961'], ['Lesotho', 'ls', '266'], ['Liberia', 'lr', '231'], ['Libya (‫ليبيا‬‎)', 'ly', '218'], ['Liechtenstein', 'li', '423'], ['Lithuania (Lietuva)', 'lt', '370'], ['Luxembourg', 'lu', '352'], ['Macau (澳門)', 'mo', '853'], ['Macedonia (FYROM) (Македонија)', 'mk', '389'], ['Madagascar (Madagasikara)', 'mg', '261'], ['Malawi', 'mw', '265'], ['Malaysia', 'my', '60'], ['Maldives', 'mv', '960'], ['Mali', 'ml', '223'], ['Malta', 'mt', '356'], ['Marshall Islands', 'mh', '692'], ['Martinique', 'mq', '596'], ['Mauritania (‫موريتانيا‬‎)', 'mr', '222'], ['Mauritius (Moris)', 'mu', '230'], ['Mayotte', 'yt', '262', 1], ['Mexico (México)', 'mx', '52'], ['Micronesia', 'fm', '691'], ['Moldova (Republica Moldova)', 'md', '373'], ['Monaco', 'mc', '377'], ['Mongolia (Монгол)', 'mn', '976'], ['Montenegro (Crna Gora)', 'me', '382'], ['Montserrat', 'ms', '1664'], ['Morocco (‫المغرب‬‎)', 'ma', '212', 0], ['Mozambique (Moçambique)', 'mz', '258'], ['Myanmar (Burma) (မြန်မာ)', 'mm', '95'], ['Namibia (Namibië)', 'na', '264'], ['Nauru', 'nr', '674'], ['Nepal (नेपाल)', 'np', '977'], ['Netherlands (Nederland)', 'nl', '31'], ['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'], ['New Zealand', 'nz', '64'], ['Nicaragua', 'ni', '505'], ['Niger (Nijar)', 'ne', '227'], ['Nigeria', 'ng', '234'], ['Niue', 'nu', '683'], ['Norfolk Island', 'nf', '672'], ['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'], ['Northern Mariana Islands', 'mp', '1670'], ['Norway (Norge)', 'no', '47', 0], ['Oman (‫عُمان‬‎)', 'om', '968'], ['Pakistan (‫پاکستان‬‎)', 'pk', '92'], ['Palau', 'pw', '680'], ['Palestine (‫فلسطين‬‎)', 'ps', '970'], ['Panama (Panamá)', 'pa', '507'], ['Papua New Guinea', 'pg', '675'], ['Paraguay', 'py', '595'], ['Peru (Perú)', 'pe', '51'], ['Philippines', 'ph', '63'], ['Poland (Polska)', 'pl', '48'], ['Portugal', 'pt', '351'], ['Puerto Rico', 'pr', '1', 3, ['787', '939']], ['Qatar (‫قطر‬‎)', 'qa', '974'], ['Réunion (La Réunion)', 're', '262', 0], ['Romania (România)', 'ro', '40'], ['Russia (Россия)', 'ru', '7', 0], ['Rwanda', 'rw', '250'], ['Saint Barthélemy', 'bl', '590', 1], ['Saint Helena', 'sh', '290'], ['Saint Kitts and Nevis', 'kn', '1869'], ['Saint Lucia', 'lc', '1758'], ['Saint Martin (Saint-Martin (partie française))', 'mf', '590', 2], ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'], ['Saint Vincent and the Grenadines', 'vc', '1784'], ['Samoa', 'ws', '685'], ['San Marino', 'sm', '378'], ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'], ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'], ['Senegal (Sénégal)', 'sn', '221'], ['Serbia (Србија)', 'rs', '381'], ['Seychelles', 'sc', '248'], ['Sierra Leone', 'sl', '232'], ['Singapore', 'sg', '65'], ['Sint Maarten', 'sx', '1721'], ['Slovakia (Slovensko)', 'sk', '421'], ['Slovenia (Slovenija)', 'si', '386'], ['Solomon Islands', 'sb', '677'], ['Somalia (Soomaaliya)', 'so', '252'], ['South Africa', 'za', '27'], ['South Korea (대한민국)', 'kr', '82'], ['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'], ['Spain (España)', 'es', '34'], ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'], ['Sudan (‫السودان‬‎)', 'sd', '249'], ['Suriname', 'sr', '597'], ['Svalbard and Jan Mayen', 'sj', '47', 1], ['Swaziland', 'sz', '268'], ['Sweden (Sverige)', 'se', '46'], ['Switzerland (Schweiz)', 'ch', '41'], ['Syria (‫سوريا‬‎)', 'sy', '963'], ['Taiwan (台灣)', 'tw', '886'], ['Tajikistan', 'tj', '992'], ['Tanzania', 'tz', '255'], ['Thailand (ไทย)', 'th', '66'], ['Timor-Leste', 'tl', '670'], ['Togo', 'tg', '228'], ['Tokelau', 'tk', '690'], ['Tonga', 'to', '676'], ['Trinidad and Tobago', 'tt', '1868'], ['Tunisia (‫تونس‬‎)', 'tn', '216'], ['Turkey (Türkiye)', 'tr', '90'], ['Turkmenistan', 'tm', '993'], ['Turks and Caicos Islands', 'tc', '1649'], ['Tuvalu', 'tv', '688'], ['U.S. Virgin Islands', 'vi', '1340'], ['Uganda', 'ug', '256'], ['Ukraine (Україна)', 'ua', '380'], ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'], ['United Kingdom', 'gb', '44', 0], ['United States', 'us', '1', 0], ['Uruguay', 'uy', '598'], ['Uzbekistan (Oʻzbekiston)', 'uz', '998'], ['Vanuatu', 'vu', '678'], ['Vatican City (Città del Vaticano)', 'va', '39', 1], ['Venezuela', 've', '58'], ['Vietnam (Việt Nam)', 'vn', '84'], ['Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681'], ['Western Sahara (‫الصحراء الغربية‬‎)', 'eh', '212', 1], ['Yemen (‫اليمن‬‎)', 'ye', '967'], ['Zambia', 'zm', '260'], ['Zimbabwe', 'zw', '263'], ['Åland Islands', 'ax', '358', 1]];
  var allCountries$1 = allCountries.map(function (country) {
    return {
      name: country[0],
      iso2: country[1].toUpperCase(),
      dialCode: country[2],
      priority: country[3] || 0,
      areaCodes: country[4] || null
    };
  });

  // 21.2.5.3 get RegExp.prototype.flags

  var _flags = function () {
    var that = _anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  // 21.2.5.3 get RegExp.prototype.flags()
  if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: _flags
  });

  var TO_STRING = 'toString';
  var $toString = /./[TO_STRING];

  var define = function (fn) {
    _redefine(RegExp.prototype, TO_STRING, fn, true);
  };

  // 21.2.5.14 RegExp.prototype.toString()
  if (_fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
    define(function toString() {
      var R = _anObject(this);
      return '/'.concat(R.source, '/',
        'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
    });
  // FF44- RegExp#toString has a wrong name
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }

  function getCountry() {
    return fetch('https://ip2c.org/s').then(function (response) {
      return response.text();
    }).then(function (response) {
      var result = (response || '').toString();

      if (!result || result[0] !== '1') {
        throw new Error('unable to fetch the country');
      }

      return result.substr(2, 2);
    });
  }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var script = {
    name: 'VueTelInput',
    directives: {
      // Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside
      'click-outside': {
        bind: function bind(el, binding, vNode) {
          // Provided expression must evaluate to a function.
          if (typeof binding.value !== 'function') {
            var compName = vNode.context.name;
            var warn = "[Vue-click-outside:] provided expression ".concat(binding.expression, " is not a function, but has to be");

            if (compName) {
              warn += "Found in component ".concat(compName);
            }

            console.warn(warn);
          } // Define Handler and cache it on the element


          var bubble = binding.modifiers.bubble;

          var handler = function handler(e) {
            // Fall back to composedPath if e.path is undefined
            var path = e.path || e.composedPath && e.composedPath();

            if (bubble || path.length && !el.contains(path[0]) && el !== path[0]) {
              binding.value(e);
            }
          };

          el.__vueClickOutside__ = handler; // add Event Listeners

          document.addEventListener('click', handler);
        },
        unbind: function unbind(el) {
          // Remove Event Listeners
          document.removeEventListener('click', el.__vueClickOutside__);
          el.__vueClickOutside__ = null;
        }
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: 'Enter a phone number'
      },
      disabledFetchingCountry: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disabledFormatting: {
        type: Boolean,
        default: false
      },
      invalidMsg: {
        default: '',
        type: String
      },
      required: {
        type: Boolean,
        default: false
      },
      allCountries: {
        type: Array,
        default: function _default() {
          return allCountries$1;
        }
      },
      defaultCountry: {
        // Default country code, ie: 'AU'
        // Will override the current country of user
        type: String,
        default: ''
      },
      enabledCountryCode: {
        type: Boolean,
        default: false
      },
      enabledFlags: {
        type: Boolean,
        default: true
      },
      preferredCountries: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      onlyCountries: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      ignoredCountries: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      autocomplete: {
        type: String,
        default: 'on'
      },
      name: {
        type: String,
        default: 'telephone'
      },
      wrapperClasses: {
        type: [String, Array, Object],
        default: ''
      },
      inputClasses: {
        type: [String, Array, Object],
        default: ''
      },
      inputId: {
        type: String,
        default: ''
      },
      dropdownOptions: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      inputOptions: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      maxLen: {
        type: Number,
        default: 25
      },
      validCharactersOnly: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        phone: '',
        activeCountry: {
          iso2: ''
        },
        open: false,
        selectedIndex: null,
        typeToFindInput: '',
        typeToFindTimer: null
      };
    },
    computed: {
      mode: function mode() {
        if (!this.phone) {
          return '';
        }

        if (this.phone[0] === '+') {
          return 'code';
        }

        if (this.phone[0] === '0') {
          return 'prefix';
        }

        return 'normal';
      },
      filteredCountries: function filteredCountries() {
        var _this = this;

        // List countries after filtered
        if (this.onlyCountries.length) {
          return this.getCountries(this.onlyCountries);
        }

        if (this.ignoredCountries.length) {
          return this.allCountries.filter(function (_ref) {
            var iso2 = _ref.iso2;
            return !_this.ignoredCountries.includes(iso2.toUpperCase()) && !_this.ignoredCountries.includes(iso2.toLowerCase());
          });
        }

        return this.allCountries;
      },
      sortedCountries: function sortedCountries() {
        // Sort the list countries: from preferred countries to all countries
        var preferredCountries = this.getCountries(this.preferredCountries).map(function (country) {
          return _objectSpread({}, country, {
            preferred: true
          });
        });
        return [].concat(_toConsumableArray(preferredCountries), _toConsumableArray(this.filteredCountries));
      },
      formattedResult: function formattedResult() {
        // Calculate phone number based on mode
        if (!this.mode || !this.filteredCountries) {
          return '';
        }

        var phone = this.phone;

        if (this.mode === 'code') {
          // If user manually type the country code
          var formatter = new AsYouType$1(); // eslint-disable-line

          formatter.input(this.phone); // Find inputted country in the countries list

          this.activeCountry = this.findCountry(formatter.country) || this.activeCountry;
        } else if (this.mode === 'prefix') {
          // Remove the first '0' if this is a '0' prefix number
          // Ex: 0432421999
          phone = this.phone.slice(1);
        }

        if (this.disabledFormatting) {
          return this.phone;
        }

        return formatNumber$3(phone, this.activeCountry && this.activeCountry.iso2, 'International');
      },
      state: function state() {
        return isValidNumber$2(this.formattedResult, this.activeCountry && this.activeCountry.iso2);
      },
      response: function response() {
        // If it is a valid number, returns the formatted value
        // Otherwise returns what it is
        var response = {
          number: this.state ? this.formattedResult : this.phone,
          isValid: this.state,
          country: this.activeCountry
        }; // If formatting to the input is disabled, try to return the formatted value to its parent

        if (this.disabledFormatting) {
          Object.assign(response, {
            formattedNumber: formatNumber$3(this.phone, this.activeCountry && this.activeCountry.iso2, 'International')
          });
        }

        return response;
      }
    },
    watch: {
      state: function state(value) {
        if (value && this.mode !== 'prefix') {
          // If mode is 'prefix', keep the number as user typed,
          // Otherwise format it
          this.phone = this.formattedResult;
        }

        this.$emit('onValidate', this.response); // Deprecated

        this.$emit('validate', this.response);
      },
      value: function value() {
        this.phone = this.value;
      },
      open: function open(isDropdownOpened) {
        // Emit open and close events
        if (isDropdownOpened) {
          this.$emit('open');
        } else {
          this.$emit('close');
        }
      },
      phone: function phone(newValue, oldValue) {
        var _this2 = this;

        if (this.validCharactersOnly && !this.testCharacters()) {
          this.$nextTick(function () {
            _this2.phone = oldValue;
          });
        }
      },
      activeCountry: function activeCountry(value) {
        if (value && value.iso2) {
          this.$emit('country-changed', value);
        }
      }
    },
    mounted: function mounted() {
      var _this3 = this;

      this.initializeCountry().then(function () {
        if (!_this3.phone && _this3.inputOptions && _this3.inputOptions.showDialCode && _this3.activeCountry) {
          _this3.phone = "+".concat(_this3.activeCountry.dialCode);
        }

        _this3.$emit('validate', _this3.response);

        _this3.$emit('onValidate', _this3.response); // Deprecated

      }).catch(console.error); // eslint-disable-line
    },
    created: function created() {
      if (this.value) {
        this.phone = this.value.trim();
      }
    },
    methods: {
      initializeCountry: function initializeCountry() {
        var _this4 = this;

        return new Promise(function (resolve) {
          /**
           * 1. If the phone included prefix (+12), try to get the country and set it
           */
          if (_this4.phone && _this4.phone[0] === '+') {
            var parsedPhone = parsePhoneNumberFromString$2(_this4.phone);

            if (parsedPhone && parsedPhone.country) {
              _this4.activeCountry = parsedPhone.country;
              resolve();
              return;
            }
          }
          /**
           * 2. Use default country if passed from parent
           */


          if (_this4.defaultCountry) {
            var defaultCountry = _this4.findCountry(_this4.defaultCountry);

            if (defaultCountry) {
              _this4.activeCountry = defaultCountry;
              resolve();
              return;
            }
          }
          /**
           * 3. Use the first country from preferred list (if available) or all countries list
           */


          _this4.activeCountry = _this4.findCountry(_this4.preferredCountries[0]) || _this4.filteredCountries[0];
          /**
           * 4. Check if fetching country based on user's IP is allowed, set it as the default country
           */

          if (!_this4.disabledFetchingCountry) {
            getCountry().then(function (res) {
              _this4.activeCountry = _this4.findCountry(res) || _this4.activeCountry;
            }).finally(resolve).catch(function (error) {
              console.warn(error);
            });
          } else {
            resolve();
          }
        });
      },

      /**
       * Get the list of countries from the list of iso2 code
       */
      getCountries: function getCountries() {
        var _this5 = this;

        var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return list.map(function (countryCode) {
          return _this5.findCountry(countryCode);
        }).filter(Boolean);
      },
      findCountry: function findCountry() {
        var iso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return this.allCountries.find(function (country) {
          return country.iso2 === iso.toUpperCase();
        });
      },
      getItemClass: function getItemClass(index, iso2) {
        var highlighted = this.selectedIndex === index;
        var lastPreferred = index === this.preferredCountries.length - 1;
        var preferred = this.preferredCountries.some(function (c) {
          return c.toUpperCase() === iso2;
        });
        return {
          highlighted: highlighted,
          'last-preferred': lastPreferred,
          preferred: preferred
        };
      },
      choose: function choose(country) {
        this.activeCountry = country;

        if (this.inputOptions && this.inputOptions.showDialCode && country) {
          this.phone = "+".concat(country.dialCode);
        }

        this.$emit('input', this.response.number, this.response);
        this.$emit('onInput', this.response); // Deprecated
      },
      testCharacters: function testCharacters() {
        var re = /^[()-+0-9\s]*$/;
        return re.test(this.phone);
      },
      onInput: function onInput() {
        if (this.validCharactersOnly && !this.testCharacters()) {
          return;
        }

        this.$refs.input.setCustomValidity(this.response.isValid ? '' : this.invalidMsg); // Returns response.number to assign it to v-model (if being used)
        // Returns full response for cases @input is used
        // and parent wants to return the whole response.

        this.$emit('input', this.response.number, this.response);
        this.$emit('onInput', this.response); // Deprecated
      },
      onBlur: function onBlur() {
        this.$emit('blur');
        this.$emit('onBlur'); // Deprecated
      },
      onEnter: function onEnter() {
        this.$emit('enter');
        this.$emit('onEnter'); // Deprecated
      },
      onSpace: function onSpace() {
        this.$emit('space');
        this.$emit('onSpace'); // Deprecated
      },
      focus: function focus() {
        this.$refs.input.focus();
      },
      toggleDropdown: function toggleDropdown() {
        if (this.disabled) {
          return;
        }

        this.open = !this.open;
      },
      clickedOutside: function clickedOutside() {
        this.open = false;
      },
      keyboardNav: function keyboardNav(e) {
        var _this6 = this;

        if (e.keyCode === 40) {
          // down arrow
          e.preventDefault();
          this.open = true;

          if (this.selectedIndex === null) {
            this.selectedIndex = 0;
          } else {
            this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);
          }

          var selEle = this.$refs.list.children[this.selectedIndex];

          if (selEle.offsetTop + selEle.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight) {
            this.$refs.list.scrollTop = selEle.offsetTop - this.$refs.list.clientHeight + selEle.clientHeight;
          }
        } else if (e.keyCode === 38) {
          // up arrow
          e.preventDefault();
          this.open = true;

          if (this.selectedIndex === null) {
            this.selectedIndex = this.sortedCountries.length - 1;
          } else {
            this.selectedIndex = Math.max(0, this.selectedIndex - 1);
          }

          var _selEle = this.$refs.list.children[this.selectedIndex];

          if (_selEle.offsetTop < this.$refs.list.scrollTop) {
            this.$refs.list.scrollTop = _selEle.offsetTop;
          }
        } else if (e.keyCode === 13) {
          // enter key
          if (this.selectedIndex !== null) {
            this.choose(this.sortedCountries[this.selectedIndex]);
          }

          this.open = !this.open;
        } else {
          // typing a country's name
          this.typeToFindInput += e.key;
          clearTimeout(this.typeToFindTimer);
          this.typeToFindTimer = setTimeout(function () {
            _this6.typeToFindInput = '';
          }, 700); // don't include preferred countries so we jump to the right place in the alphabet

          var typedCountryI = this.sortedCountries.slice(this.preferredCountries.length).findIndex(function (c) {
            return c.name.toLowerCase().startsWith(_this6.typeToFindInput);
          });

          if (typedCountryI >= 0) {
            this.selectedIndex = this.preferredCountries.length + typedCountryI;
            var _selEle2 = this.$refs.list.children[this.selectedIndex];
            var needToScrollTop = _selEle2.offsetTop < this.$refs.list.scrollTop;
            var needToScrollBottom = _selEle2.offsetTop + _selEle2.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight;

            if (needToScrollTop || needToScrollBottom) {
              this.$refs.list.scrollTop = _selEle2.offsetTop - this.$refs.list.clientHeight / 2;
            }
          }
        }
      },
      reset: function reset() {
        this.selectedIndex = this.sortedCountries.map(function (c) {
          return c.iso2;
        }).indexOf(this.activeCountry.iso2);
        this.open = false;
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }
  var HEAD;
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);

        if (HEAD === undefined) {
          HEAD = document.head || document.getElementsByTagName('head')[0];
        }

        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      class: ["vue-tel-input", _vm.wrapperClasses, {
        disabled: _vm.disabled
      }]
    }, [_c("div", {
      directives: [{
        name: "click-outside",
        rawName: "v-click-outside",
        value: _vm.clickedOutside,
        expression: "clickedOutside"
      }],
      staticClass: "dropdown",
      class: {
        open: _vm.open
      },
      attrs: {
        tabindex: _vm.dropdownOptions && _vm.dropdownOptions.tabindex ? _vm.dropdownOptions.tabindex : 0
      },
      on: {
        keydown: [_vm.keyboardNav, function ($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
            return null;
          }

          return _vm.reset($event);
        }],
        click: _vm.toggleDropdown
      }
    }, [_c("span", {
      staticClass: "selection"
    }, [_vm.enabledFlags ? _c("div", {
      staticClass: "iti-flag",
      class: _vm.activeCountry.iso2.toLowerCase()
    }) : _vm._e(), _vm._v(" "), _vm.enabledCountryCode ? _c("span", {
      staticClass: "country-code"
    }, [_vm._v("+" + _vm._s(_vm.activeCountry.dialCode))]) : _vm._e(), _vm._v(" "), _vm._t("arrow-icon", [_c("span", {
      staticClass: "dropdown-arrow"
    }, [_vm._v(_vm._s(_vm.open ? "▲" : "▼"))])], {
      open: _vm.open
    })], 2), _vm._v(" "), _c("ul", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.open,
        expression: "open"
      }],
      ref: "list"
    }, _vm._l(_vm.sortedCountries, function (pb, index) {
      return _c("li", {
        key: pb.iso2 + (pb.preferred ? "-preferred" : ""),
        staticClass: "dropdown-item",
        class: _vm.getItemClass(index, pb.iso2),
        on: {
          click: function click($event) {
            return _vm.choose(pb);
          },
          mousemove: function mousemove($event) {
            _vm.selectedIndex = index;
          }
        }
      }, [_vm.enabledFlags ? _c("div", {
        staticClass: "iti-flag",
        class: pb.iso2.toLowerCase()
      }) : _vm._e(), _vm._v(" "), _c("strong", [_vm._v(_vm._s(pb.name))]), _vm._v(" "), _vm.dropdownOptions && !_vm.dropdownOptions.disabledDialCode ? _c("span", [_vm._v("+" + _vm._s(pb.dialCode))]) : _vm._e()]);
    }), 0)]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.phone,
        expression: "phone"
      }],
      ref: "input",
      class: _vm.inputClasses,
      attrs: {
        placeholder: _vm.placeholder,
        disabled: _vm.disabled,
        required: _vm.required,
        autocomplete: _vm.autocomplete,
        name: _vm.name,
        id: _vm.inputId,
        maxlength: _vm.maxLen,
        tabindex: _vm.inputOptions && _vm.inputOptions.tabindex ? _vm.inputOptions.tabindex : 0,
        type: "tel"
      },
      domProps: {
        value: _vm.phone
      },
      on: {
        blur: _vm.onBlur,
        input: [function ($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.phone = $event.target.value;
        }, _vm.onInput],
        keyup: [function ($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }

          return _vm.onEnter($event);
        }, function ($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
            return null;
          }

          return _vm.onSpace($event);
        }]
      }
    })]);
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-48307be2_0", {
      source: ".iti-flag {\n  width: 20px;\n}\n.iti-flag.be {\n  width: 18px;\n}\n.iti-flag.ch {\n  width: 15px;\n}\n.iti-flag.mc {\n  width: 19px;\n}\n.iti-flag.ne {\n  width: 18px;\n}\n.iti-flag.np {\n  width: 13px;\n}\n.iti-flag.va {\n  width: 15px;\n}\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n.iti-flag {\n    background-size: 5630px 15px;\n}\n}\n.iti-flag.ac {\n  height: 10px;\n  background-position: 0px 0px;\n}\n.iti-flag.ad {\n  height: 14px;\n  background-position: -22px 0px;\n}\n.iti-flag.ae {\n  height: 10px;\n  background-position: -44px 0px;\n}\n.iti-flag.af {\n  height: 14px;\n  background-position: -66px 0px;\n}\n.iti-flag.ag {\n  height: 14px;\n  background-position: -88px 0px;\n}\n.iti-flag.ai {\n  height: 10px;\n  background-position: -110px 0px;\n}\n.iti-flag.al {\n  height: 15px;\n  background-position: -132px 0px;\n}\n.iti-flag.am {\n  height: 10px;\n  background-position: -154px 0px;\n}\n.iti-flag.ao {\n  height: 14px;\n  background-position: -176px 0px;\n}\n.iti-flag.aq {\n  height: 14px;\n  background-position: -198px 0px;\n}\n.iti-flag.ar {\n  height: 13px;\n  background-position: -220px 0px;\n}\n.iti-flag.as {\n  height: 10px;\n  background-position: -242px 0px;\n}\n.iti-flag.at {\n  height: 14px;\n  background-position: -264px 0px;\n}\n.iti-flag.au {\n  height: 10px;\n  background-position: -286px 0px;\n}\n.iti-flag.aw {\n  height: 14px;\n  background-position: -308px 0px;\n}\n.iti-flag.ax {\n  height: 13px;\n  background-position: -330px 0px;\n}\n.iti-flag.az {\n  height: 10px;\n  background-position: -352px 0px;\n}\n.iti-flag.ba {\n  height: 10px;\n  background-position: -374px 0px;\n}\n.iti-flag.bb {\n  height: 14px;\n  background-position: -396px 0px;\n}\n.iti-flag.bd {\n  height: 12px;\n  background-position: -418px 0px;\n}\n.iti-flag.be {\n  height: 15px;\n  background-position: -440px 0px;\n}\n.iti-flag.bf {\n  height: 14px;\n  background-position: -460px 0px;\n}\n.iti-flag.bg {\n  height: 12px;\n  background-position: -482px 0px;\n}\n.iti-flag.bh {\n  height: 12px;\n  background-position: -504px 0px;\n}\n.iti-flag.bi {\n  height: 12px;\n  background-position: -526px 0px;\n}\n.iti-flag.bj {\n  height: 14px;\n  background-position: -548px 0px;\n}\n.iti-flag.bl {\n  height: 14px;\n  background-position: -570px 0px;\n}\n.iti-flag.bm {\n  height: 10px;\n  background-position: -592px 0px;\n}\n.iti-flag.bn {\n  height: 10px;\n  background-position: -614px 0px;\n}\n.iti-flag.bo {\n  height: 14px;\n  background-position: -636px 0px;\n}\n.iti-flag.bq {\n  height: 14px;\n  background-position: -658px 0px;\n}\n.iti-flag.br {\n  height: 14px;\n  background-position: -680px 0px;\n}\n.iti-flag.bs {\n  height: 10px;\n  background-position: -702px 0px;\n}\n.iti-flag.bt {\n  height: 14px;\n  background-position: -724px 0px;\n}\n.iti-flag.bv {\n  height: 15px;\n  background-position: -746px 0px;\n}\n.iti-flag.bw {\n  height: 14px;\n  background-position: -768px 0px;\n}\n.iti-flag.by {\n  height: 10px;\n  background-position: -790px 0px;\n}\n.iti-flag.bz {\n  height: 14px;\n  background-position: -812px 0px;\n}\n.iti-flag.ca {\n  height: 10px;\n  background-position: -834px 0px;\n}\n.iti-flag.cc {\n  height: 10px;\n  background-position: -856px 0px;\n}\n.iti-flag.cd {\n  height: 15px;\n  background-position: -878px 0px;\n}\n.iti-flag.cf {\n  height: 14px;\n  background-position: -900px 0px;\n}\n.iti-flag.cg {\n  height: 14px;\n  background-position: -922px 0px;\n}\n.iti-flag.ch {\n  height: 15px;\n  background-position: -944px 0px;\n}\n.iti-flag.ci {\n  height: 14px;\n  background-position: -961px 0px;\n}\n.iti-flag.ck {\n  height: 10px;\n  background-position: -983px 0px;\n}\n.iti-flag.cl {\n  height: 14px;\n  background-position: -1005px 0px;\n}\n.iti-flag.cm {\n  height: 14px;\n  background-position: -1027px 0px;\n}\n.iti-flag.cn {\n  height: 14px;\n  background-position: -1049px 0px;\n}\n.iti-flag.co {\n  height: 14px;\n  background-position: -1071px 0px;\n}\n.iti-flag.cp {\n  height: 14px;\n  background-position: -1093px 0px;\n}\n.iti-flag.cr {\n  height: 12px;\n  background-position: -1115px 0px;\n}\n.iti-flag.cu {\n  height: 10px;\n  background-position: -1137px 0px;\n}\n.iti-flag.cv {\n  height: 12px;\n  background-position: -1159px 0px;\n}\n.iti-flag.cw {\n  height: 14px;\n  background-position: -1181px 0px;\n}\n.iti-flag.cx {\n  height: 10px;\n  background-position: -1203px 0px;\n}\n.iti-flag.cy {\n  height: 14px;\n  background-position: -1225px 0px;\n}\n.iti-flag.cz {\n  height: 14px;\n  background-position: -1247px 0px;\n}\n.iti-flag.de {\n  height: 12px;\n  background-position: -1269px 0px;\n}\n.iti-flag.dg {\n  height: 10px;\n  background-position: -1291px 0px;\n}\n.iti-flag.dj {\n  height: 14px;\n  background-position: -1313px 0px;\n}\n.iti-flag.dk {\n  height: 15px;\n  background-position: -1335px 0px;\n}\n.iti-flag.dm {\n  height: 10px;\n  background-position: -1357px 0px;\n}\n.iti-flag.do {\n  height: 13px;\n  background-position: -1379px 0px;\n}\n.iti-flag.dz {\n  height: 14px;\n  background-position: -1401px 0px;\n}\n.iti-flag.ea {\n  height: 14px;\n  background-position: -1423px 0px;\n}\n.iti-flag.ec {\n  height: 14px;\n  background-position: -1445px 0px;\n}\n.iti-flag.ee {\n  height: 13px;\n  background-position: -1467px 0px;\n}\n.iti-flag.eg {\n  height: 14px;\n  background-position: -1489px 0px;\n}\n.iti-flag.eh {\n  height: 10px;\n  background-position: -1511px 0px;\n}\n.iti-flag.er {\n  height: 10px;\n  background-position: -1533px 0px;\n}\n.iti-flag.es {\n  height: 14px;\n  background-position: -1555px 0px;\n}\n.iti-flag.et {\n  height: 10px;\n  background-position: -1577px 0px;\n}\n.iti-flag.eu {\n  height: 14px;\n  background-position: -1599px 0px;\n}\n.iti-flag.fi {\n  height: 12px;\n  background-position: -1621px 0px;\n}\n.iti-flag.fj {\n  height: 10px;\n  background-position: -1643px 0px;\n}\n.iti-flag.fk {\n  height: 10px;\n  background-position: -1665px 0px;\n}\n.iti-flag.fm {\n  height: 11px;\n  background-position: -1687px 0px;\n}\n.iti-flag.fo {\n  height: 15px;\n  background-position: -1709px 0px;\n}\n.iti-flag.fr {\n  height: 14px;\n  background-position: -1731px 0px;\n}\n.iti-flag.ga {\n  height: 15px;\n  background-position: -1753px 0px;\n}\n.iti-flag.gb {\n  height: 10px;\n  background-position: -1775px 0px;\n}\n.iti-flag.gd {\n  height: 12px;\n  background-position: -1797px 0px;\n}\n.iti-flag.ge {\n  height: 14px;\n  background-position: -1819px 0px;\n}\n.iti-flag.gf {\n  height: 14px;\n  background-position: -1841px 0px;\n}\n.iti-flag.gg {\n  height: 14px;\n  background-position: -1863px 0px;\n}\n.iti-flag.gh {\n  height: 14px;\n  background-position: -1885px 0px;\n}\n.iti-flag.gi {\n  height: 10px;\n  background-position: -1907px 0px;\n}\n.iti-flag.gl {\n  height: 14px;\n  background-position: -1929px 0px;\n}\n.iti-flag.gm {\n  height: 14px;\n  background-position: -1951px 0px;\n}\n.iti-flag.gn {\n  height: 14px;\n  background-position: -1973px 0px;\n}\n.iti-flag.gp {\n  height: 14px;\n  background-position: -1995px 0px;\n}\n.iti-flag.gq {\n  height: 14px;\n  background-position: -2017px 0px;\n}\n.iti-flag.gr {\n  height: 14px;\n  background-position: -2039px 0px;\n}\n.iti-flag.gs {\n  height: 10px;\n  background-position: -2061px 0px;\n}\n.iti-flag.gt {\n  height: 13px;\n  background-position: -2083px 0px;\n}\n.iti-flag.gu {\n  height: 11px;\n  background-position: -2105px 0px;\n}\n.iti-flag.gw {\n  height: 10px;\n  background-position: -2127px 0px;\n}\n.iti-flag.gy {\n  height: 12px;\n  background-position: -2149px 0px;\n}\n.iti-flag.hk {\n  height: 14px;\n  background-position: -2171px 0px;\n}\n.iti-flag.hm {\n  height: 10px;\n  background-position: -2193px 0px;\n}\n.iti-flag.hn {\n  height: 10px;\n  background-position: -2215px 0px;\n}\n.iti-flag.hr {\n  height: 10px;\n  background-position: -2237px 0px;\n}\n.iti-flag.ht {\n  height: 12px;\n  background-position: -2259px 0px;\n}\n.iti-flag.hu {\n  height: 10px;\n  background-position: -2281px 0px;\n}\n.iti-flag.ic {\n  height: 14px;\n  background-position: -2303px 0px;\n}\n.iti-flag.id {\n  height: 14px;\n  background-position: -2325px 0px;\n}\n.iti-flag.ie {\n  height: 10px;\n  background-position: -2347px 0px;\n}\n.iti-flag.il {\n  height: 15px;\n  background-position: -2369px 0px;\n}\n.iti-flag.im {\n  height: 10px;\n  background-position: -2391px 0px;\n}\n.iti-flag.in {\n  height: 14px;\n  background-position: -2413px 0px;\n}\n.iti-flag.io {\n  height: 10px;\n  background-position: -2435px 0px;\n}\n.iti-flag.iq {\n  height: 14px;\n  background-position: -2457px 0px;\n}\n.iti-flag.ir {\n  height: 12px;\n  background-position: -2479px 0px;\n}\n.iti-flag.is {\n  height: 15px;\n  background-position: -2501px 0px;\n}\n.iti-flag.it {\n  height: 14px;\n  background-position: -2523px 0px;\n}\n.iti-flag.je {\n  height: 12px;\n  background-position: -2545px 0px;\n}\n.iti-flag.jm {\n  height: 10px;\n  background-position: -2567px 0px;\n}\n.iti-flag.jo {\n  height: 10px;\n  background-position: -2589px 0px;\n}\n.iti-flag.jp {\n  height: 14px;\n  background-position: -2611px 0px;\n}\n.iti-flag.ke {\n  height: 14px;\n  background-position: -2633px 0px;\n}\n.iti-flag.kg {\n  height: 12px;\n  background-position: -2655px 0px;\n}\n.iti-flag.kh {\n  height: 13px;\n  background-position: -2677px 0px;\n}\n.iti-flag.ki {\n  height: 10px;\n  background-position: -2699px 0px;\n}\n.iti-flag.km {\n  height: 12px;\n  background-position: -2721px 0px;\n}\n.iti-flag.kn {\n  height: 14px;\n  background-position: -2743px 0px;\n}\n.iti-flag.kp {\n  height: 10px;\n  background-position: -2765px 0px;\n}\n.iti-flag.kr {\n  height: 14px;\n  background-position: -2787px 0px;\n}\n.iti-flag.kw {\n  height: 10px;\n  background-position: -2809px 0px;\n}\n.iti-flag.ky {\n  height: 10px;\n  background-position: -2831px 0px;\n}\n.iti-flag.kz {\n  height: 10px;\n  background-position: -2853px 0px;\n}\n.iti-flag.la {\n  height: 14px;\n  background-position: -2875px 0px;\n}\n.iti-flag.lb {\n  height: 14px;\n  background-position: -2897px 0px;\n}\n.iti-flag.lc {\n  height: 10px;\n  background-position: -2919px 0px;\n}\n.iti-flag.li {\n  height: 12px;\n  background-position: -2941px 0px;\n}\n.iti-flag.lk {\n  height: 10px;\n  background-position: -2963px 0px;\n}\n.iti-flag.lr {\n  height: 11px;\n  background-position: -2985px 0px;\n}\n.iti-flag.ls {\n  height: 14px;\n  background-position: -3007px 0px;\n}\n.iti-flag.lt {\n  height: 12px;\n  background-position: -3029px 0px;\n}\n.iti-flag.lu {\n  height: 12px;\n  background-position: -3051px 0px;\n}\n.iti-flag.lv {\n  height: 10px;\n  background-position: -3073px 0px;\n}\n.iti-flag.ly {\n  height: 10px;\n  background-position: -3095px 0px;\n}\n.iti-flag.ma {\n  height: 14px;\n  background-position: -3117px 0px;\n}\n.iti-flag.mc {\n  height: 15px;\n  background-position: -3139px 0px;\n}\n.iti-flag.md {\n  height: 10px;\n  background-position: -3160px 0px;\n}\n.iti-flag.me {\n  height: 10px;\n  background-position: -3182px 0px;\n}\n.iti-flag.mf {\n  height: 14px;\n  background-position: -3204px 0px;\n}\n.iti-flag.mg {\n  height: 14px;\n  background-position: -3226px 0px;\n}\n.iti-flag.mh {\n  height: 11px;\n  background-position: -3248px 0px;\n}\n.iti-flag.mk {\n  height: 10px;\n  background-position: -3270px 0px;\n}\n.iti-flag.ml {\n  height: 14px;\n  background-position: -3292px 0px;\n}\n.iti-flag.mm {\n  height: 14px;\n  background-position: -3314px 0px;\n}\n.iti-flag.mn {\n  height: 10px;\n  background-position: -3336px 0px;\n}\n.iti-flag.mo {\n  height: 14px;\n  background-position: -3358px 0px;\n}\n.iti-flag.mp {\n  height: 10px;\n  background-position: -3380px 0px;\n}\n.iti-flag.mq {\n  height: 14px;\n  background-position: -3402px 0px;\n}\n.iti-flag.mr {\n  height: 14px;\n  background-position: -3424px 0px;\n}\n.iti-flag.ms {\n  height: 10px;\n  background-position: -3446px 0px;\n}\n.iti-flag.mt {\n  height: 14px;\n  background-position: -3468px 0px;\n}\n.iti-flag.mu {\n  height: 14px;\n  background-position: -3490px 0px;\n}\n.iti-flag.mv {\n  height: 14px;\n  background-position: -3512px 0px;\n}\n.iti-flag.mw {\n  height: 14px;\n  background-position: -3534px 0px;\n}\n.iti-flag.mx {\n  height: 12px;\n  background-position: -3556px 0px;\n}\n.iti-flag.my {\n  height: 10px;\n  background-position: -3578px 0px;\n}\n.iti-flag.mz {\n  height: 14px;\n  background-position: -3600px 0px;\n}\n.iti-flag.na {\n  height: 14px;\n  background-position: -3622px 0px;\n}\n.iti-flag.nc {\n  height: 10px;\n  background-position: -3644px 0px;\n}\n.iti-flag.ne {\n  height: 15px;\n  background-position: -3666px 0px;\n}\n.iti-flag.nf {\n  height: 10px;\n  background-position: -3686px 0px;\n}\n.iti-flag.ng {\n  height: 10px;\n  background-position: -3708px 0px;\n}\n.iti-flag.ni {\n  height: 12px;\n  background-position: -3730px 0px;\n}\n.iti-flag.nl {\n  height: 14px;\n  background-position: -3752px 0px;\n}\n.iti-flag.no {\n  height: 15px;\n  background-position: -3774px 0px;\n}\n.iti-flag.np {\n  height: 15px;\n  background-position: -3796px 0px;\n}\n.iti-flag.nr {\n  height: 10px;\n  background-position: -3811px 0px;\n}\n.iti-flag.nu {\n  height: 10px;\n  background-position: -3833px 0px;\n}\n.iti-flag.nz {\n  height: 10px;\n  background-position: -3855px 0px;\n}\n.iti-flag.om {\n  height: 10px;\n  background-position: -3877px 0px;\n}\n.iti-flag.pa {\n  height: 14px;\n  background-position: -3899px 0px;\n}\n.iti-flag.pe {\n  height: 14px;\n  background-position: -3921px 0px;\n}\n.iti-flag.pf {\n  height: 14px;\n  background-position: -3943px 0px;\n}\n.iti-flag.pg {\n  height: 15px;\n  background-position: -3965px 0px;\n}\n.iti-flag.ph {\n  height: 10px;\n  background-position: -3987px 0px;\n}\n.iti-flag.pk {\n  height: 14px;\n  background-position: -4009px 0px;\n}\n.iti-flag.pl {\n  height: 13px;\n  background-position: -4031px 0px;\n}\n.iti-flag.pm {\n  height: 14px;\n  background-position: -4053px 0px;\n}\n.iti-flag.pn {\n  height: 10px;\n  background-position: -4075px 0px;\n}\n.iti-flag.pr {\n  height: 14px;\n  background-position: -4097px 0px;\n}\n.iti-flag.ps {\n  height: 10px;\n  background-position: -4119px 0px;\n}\n.iti-flag.pt {\n  height: 14px;\n  background-position: -4141px 0px;\n}\n.iti-flag.pw {\n  height: 13px;\n  background-position: -4163px 0px;\n}\n.iti-flag.py {\n  height: 11px;\n  background-position: -4185px 0px;\n}\n.iti-flag.qa {\n  height: 8px;\n  background-position: -4207px 0px;\n}\n.iti-flag.re {\n  height: 14px;\n  background-position: -4229px 0px;\n}\n.iti-flag.ro {\n  height: 14px;\n  background-position: -4251px 0px;\n}\n.iti-flag.rs {\n  height: 14px;\n  background-position: -4273px 0px;\n}\n.iti-flag.ru {\n  height: 14px;\n  background-position: -4295px 0px;\n}\n.iti-flag.rw {\n  height: 14px;\n  background-position: -4317px 0px;\n}\n.iti-flag.sa {\n  height: 14px;\n  background-position: -4339px 0px;\n}\n.iti-flag.sb {\n  height: 10px;\n  background-position: -4361px 0px;\n}\n.iti-flag.sc {\n  height: 10px;\n  background-position: -4383px 0px;\n}\n.iti-flag.sd {\n  height: 10px;\n  background-position: -4405px 0px;\n}\n.iti-flag.se {\n  height: 13px;\n  background-position: -4427px 0px;\n}\n.iti-flag.sg {\n  height: 14px;\n  background-position: -4449px 0px;\n}\n.iti-flag.sh {\n  height: 10px;\n  background-position: -4471px 0px;\n}\n.iti-flag.si {\n  height: 10px;\n  background-position: -4493px 0px;\n}\n.iti-flag.sj {\n  height: 15px;\n  background-position: -4515px 0px;\n}\n.iti-flag.sk {\n  height: 14px;\n  background-position: -4537px 0px;\n}\n.iti-flag.sl {\n  height: 14px;\n  background-position: -4559px 0px;\n}\n.iti-flag.sm {\n  height: 15px;\n  background-position: -4581px 0px;\n}\n.iti-flag.sn {\n  height: 14px;\n  background-position: -4603px 0px;\n}\n.iti-flag.so {\n  height: 14px;\n  background-position: -4625px 0px;\n}\n.iti-flag.sr {\n  height: 14px;\n  background-position: -4647px 0px;\n}\n.iti-flag.ss {\n  height: 10px;\n  background-position: -4669px 0px;\n}\n.iti-flag.st {\n  height: 10px;\n  background-position: -4691px 0px;\n}\n.iti-flag.sv {\n  height: 12px;\n  background-position: -4713px 0px;\n}\n.iti-flag.sx {\n  height: 14px;\n  background-position: -4735px 0px;\n}\n.iti-flag.sy {\n  height: 14px;\n  background-position: -4757px 0px;\n}\n.iti-flag.sz {\n  height: 14px;\n  background-position: -4779px 0px;\n}\n.iti-flag.ta {\n  height: 10px;\n  background-position: -4801px 0px;\n}\n.iti-flag.tc {\n  height: 10px;\n  background-position: -4823px 0px;\n}\n.iti-flag.td {\n  height: 14px;\n  background-position: -4845px 0px;\n}\n.iti-flag.tf {\n  height: 14px;\n  background-position: -4867px 0px;\n}\n.iti-flag.tg {\n  height: 13px;\n  background-position: -4889px 0px;\n}\n.iti-flag.th {\n  height: 14px;\n  background-position: -4911px 0px;\n}\n.iti-flag.tj {\n  height: 10px;\n  background-position: -4933px 0px;\n}\n.iti-flag.tk {\n  height: 10px;\n  background-position: -4955px 0px;\n}\n.iti-flag.tl {\n  height: 10px;\n  background-position: -4977px 0px;\n}\n.iti-flag.tm {\n  height: 14px;\n  background-position: -4999px 0px;\n}\n.iti-flag.tn {\n  height: 14px;\n  background-position: -5021px 0px;\n}\n.iti-flag.to {\n  height: 10px;\n  background-position: -5043px 0px;\n}\n.iti-flag.tr {\n  height: 14px;\n  background-position: -5065px 0px;\n}\n.iti-flag.tt {\n  height: 12px;\n  background-position: -5087px 0px;\n}\n.iti-flag.tv {\n  height: 10px;\n  background-position: -5109px 0px;\n}\n.iti-flag.tw {\n  height: 14px;\n  background-position: -5131px 0px;\n}\n.iti-flag.tz {\n  height: 14px;\n  background-position: -5153px 0px;\n}\n.iti-flag.ua {\n  height: 14px;\n  background-position: -5175px 0px;\n}\n.iti-flag.ug {\n  height: 14px;\n  background-position: -5197px 0px;\n}\n.iti-flag.um {\n  height: 11px;\n  background-position: -5219px 0px;\n}\n.iti-flag.us {\n  height: 11px;\n  background-position: -5241px 0px;\n}\n.iti-flag.uy {\n  height: 14px;\n  background-position: -5263px 0px;\n}\n.iti-flag.uz {\n  height: 10px;\n  background-position: -5285px 0px;\n}\n.iti-flag.va {\n  height: 15px;\n  background-position: -5307px 0px;\n}\n.iti-flag.vc {\n  height: 14px;\n  background-position: -5324px 0px;\n}\n.iti-flag.ve {\n  height: 14px;\n  background-position: -5346px 0px;\n}\n.iti-flag.vg {\n  height: 10px;\n  background-position: -5368px 0px;\n}\n.iti-flag.vi {\n  height: 14px;\n  background-position: -5390px 0px;\n}\n.iti-flag.vn {\n  height: 14px;\n  background-position: -5412px 0px;\n}\n.iti-flag.vu {\n  height: 12px;\n  background-position: -5434px 0px;\n}\n.iti-flag.wf {\n  height: 14px;\n  background-position: -5456px 0px;\n}\n.iti-flag.ws {\n  height: 10px;\n  background-position: -5478px 0px;\n}\n.iti-flag.xk {\n  height: 15px;\n  background-position: -5500px 0px;\n}\n.iti-flag.ye {\n  height: 14px;\n  background-position: -5522px 0px;\n}\n.iti-flag.yt {\n  height: 14px;\n  background-position: -5544px 0px;\n}\n.iti-flag.za {\n  height: 14px;\n  background-position: -5566px 0px;\n}\n.iti-flag.zm {\n  height: 14px;\n  background-position: -5588px 0px;\n}\n.iti-flag.zw {\n  height: 10px;\n  background-position: -5610px 0px;\n}\n.iti-flag {\n  width: 20px;\n  height: 15px;\n  box-shadow: 0px 0px 1px 0px #888;\n  background-image: url('data:image/png;base64,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');\n  background-repeat: no-repeat;\n  background-color: #dbdbdb;\n  background-position: 20px 0;\n}\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n.iti-flag {\n    background-image: url('data:image/png;base64,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');\n}\n}\n.iti-flag.np {\n  background-color: transparent;\n}\n",
      map: undefined,
      media: undefined
    }), inject("data-v-48307be2_1", {
      source: "\nli.last-preferred[data-v-48307be2] {\n  border-bottom: 1px solid #cacaca;\n}\n.iti-flag[data-v-48307be2] {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.dropdown-item .iti-flag[data-v-48307be2] {\n  display: inline-block;\n  margin-right: 5px;\n}\n.selection[data-v-48307be2] {\n  font-size: 0.8em;\n  display: flex;\n  align-items: center;\n}\n.vue-tel-input[data-v-48307be2] {\n  border-radius: 3px;\n  display: flex;\n  border: 1px solid #bbb;\n  text-align: left;\n}\n.vue-tel-input[data-v-48307be2]:focus-within {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  border-color: #66afe9;\n}\ninput[data-v-48307be2] {\n  border: none;\n  border-radius: 0 2px 2px 0;\n  width: 100%;\n  outline: none;\n  padding-left: 7px;\n}\nul[data-v-48307be2] {\n  z-index: 1;\n  padding: 0;\n  margin: 0;\n  text-align: left;\n  list-style: none;\n  max-height: 200px;\n  overflow-y: scroll;\n  position: absolute;\n  top: 33px;\n  left: -1px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  width: 390px;\n}\n.dropdown[data-v-48307be2] {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n  padding: 7px;\n  cursor: pointer;\n}\n.dropdown.open[data-v-48307be2] {\n  background-color: #f3f3f3;\n}\n.dropdown[data-v-48307be2]:hover {\n  background-color: #f3f3f3;\n}\n.country-code[data-v-48307be2] {\n  color: #666;\n}\n.dropdown-arrow[data-v-48307be2] {\n  transform: scaleY(0.5);\n  display: inline-block;\n  color: #666;\n}\n.dropdown-item[data-v-48307be2] {\n  cursor: pointer;\n  padding: 4px 15px;\n}\n.dropdown-item.highlighted[data-v-48307be2] {\n  background-color: #f3f3f3;\n}\n.dropdown-menu.show[data-v-48307be2] {\n  max-height: 300px;\n  overflow: scroll;\n}\n.vue-tel-input.disabled .selection[data-v-48307be2],\n.vue-tel-input.disabled .dropdown[data-v-48307be2],\n.vue-tel-input.disabled input[data-v-48307be2] {\n  cursor: no-drop;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/stevend/coding/vue/vue-tel-input/src/components/vue-tel-input.vue"],
        "names": [],
        "mappings": ";AA0DA;EACA,gCAAA;AACA;AACA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;EACA,qBAAA;EACA,iBAAA;AACA;AACA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;AACA;AACA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;EACA,kFAAA;EACA,qBAAA;AACA;AACA;EACA,YAAA;EACA,0BAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;AACA;AACA;EACA,UAAA;EACA,UAAA;EACA,SAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,sBAAA;EACA,sBAAA;EACA,YAAA;AACA;AACA;EACA,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,uBAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,WAAA;AACA;AACA;EACA,sBAAA;EACA,qBAAA;EACA,WAAA;AACA;AACA;EACA,eAAA;EACA,iBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;;;EAGA,eAAA;AACA",
        "file": "vue-tel-input.vue",
        "sourcesContent": ["<template>\n  <div :class=\"['vue-tel-input', wrapperClasses, { disabled: disabled }]\">\n    <div\n      v-click-outside=\"clickedOutside\"\n      :tabindex=\"dropdownOptions && dropdownOptions.tabindex ? dropdownOptions.tabindex : 0\"\n      :class=\"{ open: open }\"\n      class=\"dropdown\"\n      @keydown=\"keyboardNav\"\n      @click=\"toggleDropdown\"\n      @keydown.esc=\"reset\"\n    >\n      <span class=\"selection\">\n        <div v-if=\"enabledFlags\" :class=\"activeCountry.iso2.toLowerCase()\" class=\"iti-flag\" />\n        <span v-if=\"enabledCountryCode\" class=\"country-code\">+{{ activeCountry.dialCode }}</span>\n        <slot :open=\"open\" name=\"arrow-icon\">\n          <span class=\"dropdown-arrow\">{{ open ? \"▲\" : \"▼\" }}</span>\n        </slot>\n      </span>\n      <ul v-show=\"open\" ref=\"list\">\n        <li\n          v-for=\"(pb, index) in sortedCountries\"\n          :key=\"pb.iso2 + (pb.preferred ? '-preferred' : '')\"\n          :class=\"getItemClass(index, pb.iso2)\"\n          class=\"dropdown-item\"\n          @click=\"choose(pb)\"\n          @mousemove=\"selectedIndex = index\"\n        >\n          <div v-if=\"enabledFlags\" :class=\"pb.iso2.toLowerCase()\" class=\"iti-flag\" />\n          <strong>{{ pb.name }}</strong>\n          <span v-if=\"dropdownOptions && !dropdownOptions.disabledDialCode\"\n            >+{{ pb.dialCode }}</span\n          >\n        </li>\n      </ul>\n    </div>\n    <input\n      ref=\"input\"\n      v-model=\"phone\"\n      :placeholder=\"placeholder\"\n      :disabled=\"disabled\"\n      :required=\"required\"\n      :autocomplete=\"autocomplete\"\n      :name=\"name\"\n      :class=\"inputClasses\"\n      :id=\"inputId\"\n      :maxlength=\"maxLen\"\n      :tabindex=\"inputOptions && inputOptions.tabindex ? inputOptions.tabindex : 0\"\n      type=\"tel\"\n      @blur=\"onBlur\"\n      @input=\"onInput\"\n      @keyup.enter=\"onEnter\"\n      @keyup.space=\"onSpace\"\n    />\n  </div>\n</template>\n\n<style src=\"../assets/sprite.css\"></style>\n<style scoped>\nli.last-preferred {\n  border-bottom: 1px solid #cacaca;\n}\n.iti-flag {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.dropdown-item .iti-flag {\n  display: inline-block;\n  margin-right: 5px;\n}\n.selection {\n  font-size: 0.8em;\n  display: flex;\n  align-items: center;\n}\n.vue-tel-input {\n  border-radius: 3px;\n  display: flex;\n  border: 1px solid #bbb;\n  text-align: left;\n}\n.vue-tel-input:focus-within {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  border-color: #66afe9;\n}\ninput {\n  border: none;\n  border-radius: 0 2px 2px 0;\n  width: 100%;\n  outline: none;\n  padding-left: 7px;\n}\nul {\n  z-index: 1;\n  padding: 0;\n  margin: 0;\n  text-align: left;\n  list-style: none;\n  max-height: 200px;\n  overflow-y: scroll;\n  position: absolute;\n  top: 33px;\n  left: -1px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  width: 390px;\n}\n.dropdown {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n  padding: 7px;\n  cursor: pointer;\n}\n.dropdown.open {\n  background-color: #f3f3f3;\n}\n.dropdown:hover {\n  background-color: #f3f3f3;\n}\n.country-code {\n  color: #666;\n}\n.dropdown-arrow {\n  transform: scaleY(0.5);\n  display: inline-block;\n  color: #666;\n}\n.dropdown-item {\n  cursor: pointer;\n  padding: 4px 15px;\n}\n.dropdown-item.highlighted {\n  background-color: #f3f3f3;\n}\n.dropdown-menu.show {\n  max-height: 300px;\n  overflow: scroll;\n}\n.vue-tel-input.disabled .selection,\n.vue-tel-input.disabled .dropdown,\n.vue-tel-input.disabled input {\n  cursor: no-drop;\n}\n</style>\n\n<script>\nimport {\n  formatNumber, AsYouType, isValidNumber, parsePhoneNumberFromString,\n} from 'libphonenumber-js';\nimport allCountries from '../assets/all-countries';\nimport getCountry from '../assets/default-country';\n\nexport default {\n  name: 'VueTelInput',\n  directives: {\n    // Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside\n    'click-outside': {\n      bind(el, binding, vNode) {\n        // Provided expression must evaluate to a function.\n        if (typeof binding.value !== 'function') {\n          const compName = vNode.context.name;\n          let warn = `[Vue-click-outside:] provided expression ${binding.expression} is not a function, but has to be`;\n          if (compName) {\n            warn += `Found in component ${compName}`;\n          }\n          console.warn(warn);\n        }\n        // Define Handler and cache it on the element\n        const { bubble } = binding.modifiers;\n        const handler = (e) => {\n          // Fall back to composedPath if e.path is undefined\n          const path = e.path || (e.composedPath && e.composedPath());\n          if (bubble || (path.length && !el.contains(path[0]) && el !== path[0])) {\n            binding.value(e);\n          }\n        };\n        el.__vueClickOutside__ = handler;\n        // add Event Listeners\n        document.addEventListener('click', handler);\n      },\n      unbind(el) {\n        // Remove Event Listeners\n        document.removeEventListener('click', el.__vueClickOutside__);\n        el.__vueClickOutside__ = null;\n      },\n    },\n  },\n  props: {\n    value: {\n      type: String,\n      default: '',\n    },\n    placeholder: {\n      type: String,\n      default: 'Enter a phone number',\n    },\n    disabledFetchingCountry: {\n      type: Boolean,\n      default: false,\n    },\n    disabled: {\n      type: Boolean,\n      default: false,\n    },\n    disabledFormatting: {\n      type: Boolean,\n      default: false,\n    },\n    invalidMsg: {\n      default: '',\n      type: String,\n    },\n    required: {\n      type: Boolean,\n      default: false,\n    },\n    allCountries: {\n      type: Array,\n      default: () => allCountries,\n    },\n    defaultCountry: {\n      // Default country code, ie: 'AU'\n      // Will override the current country of user\n      type: String,\n      default: '',\n    },\n    enabledCountryCode: {\n      type: Boolean,\n      default: false,\n    },\n    enabledFlags: {\n      type: Boolean,\n      default: true,\n    },\n    preferredCountries: {\n      type: Array,\n      default: () => [],\n    },\n    onlyCountries: {\n      type: Array,\n      default: () => [],\n    },\n    ignoredCountries: {\n      type: Array,\n      default: () => [],\n    },\n    autocomplete: {\n      type: String,\n      default: 'on',\n    },\n    name: {\n      type: String,\n      default: 'telephone',\n    },\n    wrapperClasses: {\n      type: [String, Array, Object],\n      default: '',\n    },\n    inputClasses: {\n      type: [String, Array, Object],\n      default: '',\n    },\n    inputId: {\n      type: String,\n      default: '',\n    },\n    dropdownOptions: {\n      type: Object,\n      default: () => ({}),\n    },\n    inputOptions: {\n      type: Object,\n      default: () => ({}),\n    },\n    maxLen: {\n      type: Number,\n      default: 25,\n    },\n    validCharactersOnly: {\n      type: Boolean,\n      default: false,\n    },\n  },\n  data() {\n    return {\n      phone: '',\n      activeCountry: { iso2: '' },\n      open: false,\n      selectedIndex: null,\n      typeToFindInput: '',\n      typeToFindTimer: null,\n    };\n  },\n  computed: {\n    mode() {\n      if (!this.phone) {\n        return '';\n      }\n      if (this.phone[0] === '+') {\n        return 'code';\n      }\n      if (this.phone[0] === '0') {\n        return 'prefix';\n      }\n      return 'normal';\n    },\n    filteredCountries() {\n      // List countries after filtered\n      if (this.onlyCountries.length) {\n        return this.getCountries(this.onlyCountries);\n      }\n\n      if (this.ignoredCountries.length) {\n        return this.allCountries.filter(\n          ({ iso2 }) => !this.ignoredCountries.includes(iso2.toUpperCase())\n            && !this.ignoredCountries.includes(iso2.toLowerCase()),\n        );\n      }\n\n      return this.allCountries;\n    },\n    sortedCountries() {\n      // Sort the list countries: from preferred countries to all countries\n      const preferredCountries = this.getCountries(this.preferredCountries)\n        .map(country => ({ ...country, preferred: true }));\n\n      return [...preferredCountries, ...this.filteredCountries];\n    },\n    formattedResult() {\n      // Calculate phone number based on mode\n      if (!this.mode || !this.filteredCountries) {\n        return '';\n      }\n      let { phone } = this;\n      if (this.mode === 'code') {\n        // If user manually type the country code\n        const formatter = new AsYouType();// eslint-disable-line\n        formatter.input(this.phone);\n\n        // Find inputted country in the countries list\n        this.activeCountry = this.findCountry(formatter.country) || this.activeCountry;\n      } else if (this.mode === 'prefix') {\n        // Remove the first '0' if this is a '0' prefix number\n        // Ex: 0432421999\n        phone = this.phone.slice(1);\n      }\n      if (this.disabledFormatting) {\n        return this.phone;\n      }\n\n      return formatNumber(phone, this.activeCountry && this.activeCountry.iso2, 'International');\n    },\n    state() {\n      return isValidNumber(this.formattedResult, this.activeCountry && this.activeCountry.iso2);\n    },\n    response() {\n      // If it is a valid number, returns the formatted value\n      // Otherwise returns what it is\n      const response = {\n        number: this.state ? this.formattedResult : this.phone,\n        isValid: this.state,\n        country: this.activeCountry,\n      };\n      // If formatting to the input is disabled, try to return the formatted value to its parent\n      if (this.disabledFormatting) {\n        Object.assign(response, {\n          formattedNumber: formatNumber(this.phone, this.activeCountry && this.activeCountry.iso2, 'International'),\n        });\n      }\n      return response;\n    },\n  },\n  watch: {\n    state(value) {\n      if (value && this.mode !== 'prefix') {\n        // If mode is 'prefix', keep the number as user typed,\n        // Otherwise format it\n        this.phone = this.formattedResult;\n      }\n      this.$emit('onValidate', this.response); // Deprecated\n      this.$emit('validate', this.response);\n    },\n    value() {\n      this.phone = this.value;\n    },\n    open(isDropdownOpened) {\n      // Emit open and close events\n      if (isDropdownOpened) {\n        this.$emit('open');\n      } else {\n        this.$emit('close');\n      }\n    },\n    phone(newValue, oldValue) {\n      if (this.validCharactersOnly && !this.testCharacters()) {\n        this.$nextTick(() => { this.phone = oldValue; });\n      }\n    },\n    activeCountry(value) {\n      if (value && value.iso2) {\n        this.$emit('country-changed', value);\n      }\n    },\n  },\n  mounted() {\n    this.initializeCountry().then(() => {\n      if (!this.phone\n        && this.inputOptions\n        && this.inputOptions.showDialCode\n        && this.activeCountry) {\n        this.phone = `+${this.activeCountry.dialCode}`;\n      }\n      this.$emit('validate', this.response);\n      this.$emit('onValidate', this.response); // Deprecated\n    }).catch(console.error); // eslint-disable-line\n  },\n  created() {\n    if (this.value) {\n      this.phone = this.value.trim();\n    }\n  },\n  methods: {\n    initializeCountry() {\n      return new Promise((resolve) => {\n        /**\n         * 1. If the phone included prefix (+12), try to get the country and set it\n         */\n        if (this.phone && this.phone[0] === '+') {\n          const parsedPhone = parsePhoneNumberFromString(this.phone);\n          if (parsedPhone && parsedPhone.country) {\n            this.activeCountry = parsedPhone.country;\n            resolve();\n            return;\n          }\n        }\n        /**\n         * 2. Use default country if passed from parent\n         */\n        if (this.defaultCountry) {\n          const defaultCountry = this.findCountry(this.defaultCountry);\n          if (defaultCountry) {\n            this.activeCountry = defaultCountry;\n            resolve();\n            return;\n          }\n        }\n        /**\n         * 3. Use the first country from preferred list (if available) or all countries list\n         */\n        this.activeCountry = this.findCountry(this.preferredCountries[0])\n          || this.filteredCountries[0];\n        /**\n         * 4. Check if fetching country based on user's IP is allowed, set it as the default country\n         */\n        if (!this.disabledFetchingCountry) {\n          getCountry().then((res) => {\n            this.activeCountry = this.findCountry(res) || this.activeCountry;\n          }).finally(resolve)\n            .catch((error) => {\n              console.warn(error);\n            });\n        } else {\n          resolve();\n        }\n      });\n    },\n    /**\n     * Get the list of countries from the list of iso2 code\n     */\n    getCountries(list = []) {\n      return list\n        .map(countryCode => this.findCountry(countryCode))\n        .filter(Boolean);\n    },\n    findCountry(iso = '') {\n      return this.allCountries.find(country => country.iso2 === iso.toUpperCase());\n    },\n    getItemClass(index, iso2) {\n      const highlighted = this.selectedIndex === index;\n      const lastPreferred = index === this.preferredCountries.length - 1;\n      const preferred = this.preferredCountries.some(c => c.toUpperCase() === iso2);\n      return {\n        highlighted,\n        'last-preferred': lastPreferred,\n        preferred,\n      };\n    },\n    choose(country) {\n      this.activeCountry = country;\n      if (this.inputOptions && this.inputOptions.showDialCode && country) {\n        this.phone = `+${country.dialCode}`;\n      }\n      this.$emit('input', this.response.number, this.response);\n      this.$emit('onInput', this.response); // Deprecated\n    },\n    testCharacters() {\n      const re = /^[()-+0-9\\s]*$/;\n      return re.test(this.phone);\n    },\n    onInput() {\n      if (this.validCharactersOnly && !this.testCharacters()) {\n        return;\n      }\n      this.$refs.input.setCustomValidity(this.response.isValid ? '' : this.invalidMsg);\n      // Returns response.number to assign it to v-model (if being used)\n      // Returns full response for cases @input is used\n      // and parent wants to return the whole response.\n      this.$emit('input', this.response.number, this.response);\n      this.$emit('onInput', this.response); // Deprecated\n    },\n    onBlur() {\n      this.$emit('blur');\n      this.$emit('onBlur'); // Deprecated\n    },\n    onEnter() {\n      this.$emit('enter');\n      this.$emit('onEnter'); // Deprecated\n    },\n    onSpace() {\n      this.$emit('space');\n      this.$emit('onSpace'); // Deprecated\n    },\n    focus() {\n      this.$refs.input.focus();\n    },\n    toggleDropdown() {\n      if (this.disabled) {\n        return;\n      }\n      this.open = !this.open;\n    },\n    clickedOutside() {\n      this.open = false;\n    },\n    keyboardNav(e) {\n      if (e.keyCode === 40) {\n        // down arrow\n        e.preventDefault();\n        this.open = true;\n        if (this.selectedIndex === null) {\n          this.selectedIndex = 0;\n        } else {\n          this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);\n        }\n        const selEle = this.$refs.list.children[this.selectedIndex];\n        if (selEle.offsetTop + selEle.clientHeight\n          > this.$refs.list.scrollTop + this.$refs.list.clientHeight) {\n          this.$refs.list.scrollTop = selEle.offsetTop\n            - this.$refs.list.clientHeight\n            + selEle.clientHeight;\n        }\n      } else if (e.keyCode === 38) {\n        // up arrow\n        e.preventDefault();\n        this.open = true;\n        if (this.selectedIndex === null) {\n          this.selectedIndex = this.sortedCountries.length - 1;\n        } else {\n          this.selectedIndex = Math.max(0, this.selectedIndex - 1);\n        }\n        const selEle = this.$refs.list.children[this.selectedIndex];\n        if (selEle.offsetTop < this.$refs.list.scrollTop) {\n          this.$refs.list.scrollTop = selEle.offsetTop;\n        }\n      } else if (e.keyCode === 13) {\n        // enter key\n        if (this.selectedIndex !== null) {\n          this.choose(this.sortedCountries[this.selectedIndex]);\n        }\n        this.open = !this.open;\n      } else {\n        // typing a country's name\n        this.typeToFindInput += e.key;\n        clearTimeout(this.typeToFindTimer);\n        this.typeToFindTimer = setTimeout(() => {\n          this.typeToFindInput = '';\n        }, 700);\n        // don't include preferred countries so we jump to the right place in the alphabet\n        const typedCountryI = this.sortedCountries\n          .slice(this.preferredCountries.length)\n          .findIndex(c => c.name.toLowerCase().startsWith(this.typeToFindInput));\n        if (typedCountryI >= 0) {\n          this.selectedIndex = this.preferredCountries.length + typedCountryI;\n          const selEle = this.$refs.list.children[this.selectedIndex];\n          const needToScrollTop = selEle.offsetTop < this.$refs.list.scrollTop;\n          const needToScrollBottom = selEle.offsetTop + selEle.clientHeight\n            > this.$refs.list.scrollTop + this.$refs.list.clientHeight;\n          if (needToScrollTop || needToScrollBottom) {\n            this.$refs.list.scrollTop = selEle.offsetTop - this.$refs.list.clientHeight / 2;\n          }\n        }\n      }\n    },\n    reset() {\n      this.selectedIndex = this.sortedCountries.map(c => c.iso2).indexOf(this.activeCountry.iso2);\n      this.open = false;\n    },\n  },\n};\n</script>\n"]
      },
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__ = "data-v-48307be2";
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject SSR */

  var VueTelInput = normalizeComponent_1({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

  function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('vue-tel-input', VueTelInput);
  }
  var plugin = {
    install: install
  }; // Auto-install

  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  exports.default = plugin;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
