function Ed(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i)
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const l of o.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
function Cd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Pd = { exports: {} },
  nl = {},
  jd = { exports: {} },
  K = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mi = Symbol.for('react.element'),
  Bh = Symbol.for('react.portal'),
  Hh = Symbol.for('react.fragment'),
  Vh = Symbol.for('react.strict_mode'),
  Wh = Symbol.for('react.profiler'),
  bh = Symbol.for('react.provider'),
  Qh = Symbol.for('react.context'),
  Kh = Symbol.for('react.forward_ref'),
  Zh = Symbol.for('react.suspense'),
  Yh = Symbol.for('react.memo'),
  qh = Symbol.for('react.lazy'),
  Iu = Symbol.iterator
function Gh(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Iu && e[Iu]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Rd = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _d = Object.assign,
  Td = {}
function Tr(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Td),
    (this.updater = n || Rd)
}
Tr.prototype.isReactComponent = {}
Tr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Ld() {}
Ld.prototype = Tr.prototype
function ws(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Td),
    (this.updater = n || Rd)
}
var xs = (ws.prototype = new Ld())
xs.constructor = ws
_d(xs, Tr.prototype)
xs.isPureReactComponent = !0
var Ou = Array.isArray,
  Nd = Object.prototype.hasOwnProperty,
  Ss = { current: null },
  Md = { key: !0, ref: !0, __self: !0, __source: !0 }
function Dd(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Nd.call(t, r) && !Md.hasOwnProperty(r) && (i[r] = t[r])
  var a = arguments.length - 2
  if (a === 1) i.children = n
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2]
    i.children = s
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r])
  return { $$typeof: Mi, type: e, key: o, ref: l, props: i, _owner: Ss.current }
}
function Xh(e, t) {
  return {
    $$typeof: Mi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function ks(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Mi
}
function Jh(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Fu = /\/+/g
function Nl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Jh('' + e.key)
    : t.toString(36)
}
function uo(e, t, n, r, i) {
  var o = typeof e
  ;(o === 'undefined' || o === 'boolean') && (e = null)
  var l = !1
  if (e === null) l = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        l = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Mi:
          case Bh:
            l = !0
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === '' ? '.' + Nl(l, 0) : r),
      Ou(i)
        ? ((n = ''),
          e != null && (n = e.replace(Fu, '$&/') + '/'),
          uo(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (ks(i) &&
            (i = Xh(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Fu, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    )
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Ou(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a]
      var s = r + Nl(o, a)
      l += uo(o, t, n, s, i)
    }
  else if (((s = Gh(e)), typeof s == 'function'))
    for (e = s.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Nl(o, a++)), (l += uo(o, t, n, s, i))
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return l
}
function Wi(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    uo(e, r, '', '', function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function em(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var We = { current: null },
  co = { transition: null },
  tm = {
    ReactCurrentDispatcher: We,
    ReactCurrentBatchConfig: co,
    ReactCurrentOwner: Ss,
  }
K.Children = {
  map: Wi,
  forEach: function (e, t, n) {
    Wi(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      Wi(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Wi(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!ks(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
K.Component = Tr
K.Fragment = Hh
K.Profiler = Wh
K.PureComponent = ws
K.StrictMode = Vh
K.Suspense = Zh
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tm
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = _d({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Ss.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps
    for (s in t)
      Nd.call(t, s) &&
        !Md.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) r.children = n
  else if (1 < s) {
    a = Array(s)
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2]
    r.children = a
  }
  return { $$typeof: Mi, type: e.type, key: i, ref: o, props: r, _owner: l }
}
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: Qh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bh, _context: e }),
    (e.Consumer = e)
  )
}
K.createElement = Dd
K.createFactory = function (e) {
  var t = Dd.bind(null, e)
  return (t.type = e), t
}
K.createRef = function () {
  return { current: null }
}
K.forwardRef = function (e) {
  return { $$typeof: Kh, render: e }
}
K.isValidElement = ks
K.lazy = function (e) {
  return { $$typeof: qh, _payload: { _status: -1, _result: e }, _init: em }
}
K.memo = function (e, t) {
  return { $$typeof: Yh, type: e, compare: t === void 0 ? null : t }
}
K.startTransition = function (e) {
  var t = co.transition
  co.transition = {}
  try {
    e()
  } finally {
    co.transition = t
  }
}
K.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
K.useCallback = function (e, t) {
  return We.current.useCallback(e, t)
}
K.useContext = function (e) {
  return We.current.useContext(e)
}
K.useDebugValue = function () {}
K.useDeferredValue = function (e) {
  return We.current.useDeferredValue(e)
}
K.useEffect = function (e, t) {
  return We.current.useEffect(e, t)
}
K.useId = function () {
  return We.current.useId()
}
K.useImperativeHandle = function (e, t, n) {
  return We.current.useImperativeHandle(e, t, n)
}
K.useInsertionEffect = function (e, t) {
  return We.current.useInsertionEffect(e, t)
}
K.useLayoutEffect = function (e, t) {
  return We.current.useLayoutEffect(e, t)
}
K.useMemo = function (e, t) {
  return We.current.useMemo(e, t)
}
K.useReducer = function (e, t, n) {
  return We.current.useReducer(e, t, n)
}
K.useRef = function (e) {
  return We.current.useRef(e)
}
K.useState = function (e) {
  return We.current.useState(e)
}
K.useSyncExternalStore = function (e, t, n) {
  return We.current.useSyncExternalStore(e, t, n)
}
K.useTransition = function () {
  return We.current.useTransition()
}
K.version = '18.2.0'
jd.exports = K
var N = jd.exports
const dt = Cd(N),
  nm = Ed({ __proto__: null, default: dt }, [N])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rm = N,
  im = Symbol.for('react.element'),
  om = Symbol.for('react.fragment'),
  lm = Object.prototype.hasOwnProperty,
  am = rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  sm = { key: !0, ref: !0, __self: !0, __source: !0 }
function $d(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (l = t.ref)
  for (r in t) lm.call(t, r) && !sm.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: im, type: e, key: o, ref: l, props: i, _owner: am.current }
}
nl.Fragment = om
nl.jsx = $d
nl.jsxs = $d
Pd.exports = nl
var k = Pd.exports,
  fa = {},
  Id = { exports: {} },
  ot = {},
  Od = { exports: {} },
  Fd = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(L, I) {
    var A = L.length
    L.push(I)
    e: for (; 0 < A; ) {
      var Q = (A - 1) >>> 1,
        q = L[Q]
      if (0 < i(q, I)) (L[Q] = I), (L[A] = q), (A = Q)
      else break e
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0]
  }
  function r(L) {
    if (L.length === 0) return null
    var I = L[0],
      A = L.pop()
    if (A !== I) {
      L[0] = A
      e: for (var Q = 0, q = L.length, Je = q >>> 1; Q < Je; ) {
        var ve = 2 * (Q + 1) - 1,
          Oe = L[ve],
          we = ve + 1,
          et = L[we]
        if (0 > i(Oe, A))
          we < q && 0 > i(et, Oe)
            ? ((L[Q] = et), (L[we] = A), (Q = we))
            : ((L[Q] = Oe), (L[ve] = A), (Q = ve))
        else if (we < q && 0 > i(et, A)) (L[Q] = et), (L[we] = A), (Q = we)
        else break e
      }
    }
    return I
  }
  function i(L, I) {
    var A = L.sortIndex - I.sortIndex
    return A !== 0 ? A : L.id - I.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var l = Date,
      a = l.now()
    e.unstable_now = function () {
      return l.now() - a
    }
  }
  var s = [],
    u = [],
    c = 1,
    p = null,
    h = 3,
    v = !1,
    S = !1,
    w = !1,
    P = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function m(L) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u)
      else if (I.startTime <= L) r(u), (I.sortIndex = I.expirationTime), t(s, I)
      else break
      I = n(u)
    }
  }
  function E(L) {
    if (((w = !1), m(L), !S))
      if (n(s) !== null) (S = !0), Pt(j)
      else {
        var I = n(u)
        I !== null && te(E, I.startTime - L)
      }
  }
  function j(L, I) {
    ;(S = !1), w && ((w = !1), f(_), (_ = -1)), (v = !0)
    var A = h
    try {
      for (
        m(I), p = n(s);
        p !== null && (!(p.expirationTime > I) || (L && !Y()));

      ) {
        var Q = p.callback
        if (typeof Q == 'function') {
          ;(p.callback = null), (h = p.priorityLevel)
          var q = Q(p.expirationTime <= I)
          ;(I = e.unstable_now()),
            typeof q == 'function' ? (p.callback = q) : p === n(s) && r(s),
            m(I)
        } else r(s)
        p = n(s)
      }
      if (p !== null) var Je = !0
      else {
        var ve = n(u)
        ve !== null && te(E, ve.startTime - I), (Je = !1)
      }
      return Je
    } finally {
      ;(p = null), (h = A), (v = !1)
    }
  }
  var g = !1,
    z = null,
    _ = -1,
    D = 5,
    F = -1
  function Y() {
    return !(e.unstable_now() - F < D)
  }
  function ye() {
    if (z !== null) {
      var L = e.unstable_now()
      F = L
      var I = !0
      try {
        I = z(!0, L)
      } finally {
        I ? pe() : ((g = !1), (z = null))
      }
    } else g = !1
  }
  var pe
  if (typeof d == 'function')
    pe = function () {
      d(ye)
    }
  else if (typeof MessageChannel < 'u') {
    var Qe = new MessageChannel(),
      Kt = Qe.port2
    ;(Qe.port1.onmessage = ye),
      (pe = function () {
        Kt.postMessage(null)
      })
  } else
    pe = function () {
      P(ye, 0)
    }
  function Pt(L) {
    ;(z = L), g || ((g = !0), pe())
  }
  function te(L, I) {
    _ = P(function () {
      L(e.unstable_now())
    }, I)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null
    }),
    (e.unstable_continueExecution = function () {
      S || v || ((S = !0), Pt(j))
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (D = 0 < L ? Math.floor(1e3 / L) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s)
    }),
    (e.unstable_next = function (L) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var I = 3
          break
        default:
          I = h
      }
      var A = h
      h = I
      try {
        return L()
      } finally {
        h = A
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, I) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          L = 3
      }
      var A = h
      h = L
      try {
        return I()
      } finally {
        h = A
      }
    }),
    (e.unstable_scheduleCallback = function (L, I, A) {
      var Q = e.unstable_now()
      switch (
        (typeof A == 'object' && A !== null
          ? ((A = A.delay), (A = typeof A == 'number' && 0 < A ? Q + A : Q))
          : (A = Q),
        L)
      ) {
        case 1:
          var q = -1
          break
        case 2:
          q = 250
          break
        case 5:
          q = 1073741823
          break
        case 4:
          q = 1e4
          break
        default:
          q = 5e3
      }
      return (
        (q = A + q),
        (L = {
          id: c++,
          callback: I,
          priorityLevel: L,
          startTime: A,
          expirationTime: q,
          sortIndex: -1,
        }),
        A > Q
          ? ((L.sortIndex = A),
            t(u, L),
            n(s) === null &&
              L === n(u) &&
              (w ? (f(_), (_ = -1)) : (w = !0), te(E, A - Q)))
          : ((L.sortIndex = q), t(s, L), S || v || ((S = !0), Pt(j))),
        L
      )
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (L) {
      var I = h
      return function () {
        var A = h
        h = I
        try {
          return L.apply(this, arguments)
        } finally {
          h = A
        }
      }
    })
})(Fd)
Od.exports = Fd
var um = Od.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad = N,
  it = um
function R(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Ud = new Set(),
  fi = {}
function bn(e, t) {
  wr(e, t), wr(e + 'Capture', t)
}
function wr(e, t) {
  for (fi[e] = t, e = 0; e < t.length; e++) Ud.add(t[e])
}
var Bt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  pa = Object.prototype.hasOwnProperty,
  cm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Au = {},
  Uu = {}
function dm(e) {
  return pa.call(Uu, e)
    ? !0
    : pa.call(Au, e)
    ? !1
    : cm.test(e)
    ? (Uu[e] = !0)
    : ((Au[e] = !0), !1)
}
function fm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function pm(e, t, n, r) {
  if (t === null || typeof t > 'u' || fm(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function be(e, t, n, r, i, o, l) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l)
}
var Ie = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new be(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Ie[t] = new be(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ie[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ie[e] = new be(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ie[e] = new be(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Ie[e] = new be(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ie[e] = new be(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Ie[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var zs = /[\-:]([a-z])/g
function Es(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(zs, Es)
    Ie[t] = new be(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(zs, Es)
    Ie[t] = new be(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(zs, Es)
  Ie[t] = new be(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ie[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Ie.xlinkHref = new be(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ie[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Cs(e, t, n, r) {
  var i = Ie.hasOwnProperty(t) ? Ie[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (pm(t, n, i, r) && (n = null),
    r || i === null
      ? dm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var bt = Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  bi = Symbol.for('react.element'),
  Xn = Symbol.for('react.portal'),
  Jn = Symbol.for('react.fragment'),
  Ps = Symbol.for('react.strict_mode'),
  ha = Symbol.for('react.profiler'),
  Bd = Symbol.for('react.provider'),
  Hd = Symbol.for('react.context'),
  js = Symbol.for('react.forward_ref'),
  ma = Symbol.for('react.suspense'),
  ga = Symbol.for('react.suspense_list'),
  Rs = Symbol.for('react.memo'),
  en = Symbol.for('react.lazy'),
  Vd = Symbol.for('react.offscreen'),
  Bu = Symbol.iterator
function Or(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Bu && e[Bu]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var fe = Object.assign,
  Ml
function qr(e) {
  if (Ml === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Ml = (t && t[1]) || ''
    }
  return (
    `
` +
    Ml +
    e
  )
}
var Dl = !1
function $l(e, t) {
  if (!e || Dl) return ''
  Dl = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && i[l] !== o[a];

      )
        a--
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== o[a])) {
                var s =
                  `
` + i[l].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                )
              }
            while (1 <= l && 0 <= a)
          break
        }
    }
  } finally {
    ;(Dl = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? qr(e) : ''
}
function hm(e) {
  switch (e.tag) {
    case 5:
      return qr(e.type)
    case 16:
      return qr('Lazy')
    case 13:
      return qr('Suspense')
    case 19:
      return qr('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = $l(e.type, !1)), e
    case 11:
      return (e = $l(e.type.render, !1)), e
    case 1:
      return (e = $l(e.type, !0)), e
    default:
      return ''
  }
}
function ya(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Jn:
      return 'Fragment'
    case Xn:
      return 'Portal'
    case ha:
      return 'Profiler'
    case Ps:
      return 'StrictMode'
    case ma:
      return 'Suspense'
    case ga:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Hd:
        return (e.displayName || 'Context') + '.Consumer'
      case Bd:
        return (e._context.displayName || 'Context') + '.Provider'
      case js:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Rs:
        return (
          (t = e.displayName || null), t !== null ? t : ya(e.type) || 'Memo'
        )
      case en:
        ;(t = e._payload), (e = e._init)
        try {
          return ya(e(t))
        } catch {}
    }
  return null
}
function mm(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return ya(t)
    case 8:
      return t === Ps ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function gn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Wd(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function gm(e) {
  var t = Wd(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (l) {
          ;(r = '' + l), o.call(this, l)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (l) {
          r = '' + l
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Qi(e) {
  e._valueTracker || (e._valueTracker = gm(e))
}
function bd(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Wd(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function jo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function va(e, t) {
  var n = t.checked
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Hu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = gn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function Qd(e, t) {
  ;(t = t.checked), t != null && Cs(e, 'checked', t, !1)
}
function wa(e, t) {
  Qd(e, t)
  var n = gn(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? xa(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && xa(e, t.type, gn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Vu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function xa(e, t, n) {
  ;(t !== 'number' || jo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Gr = Array.isArray
function pr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + gn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function Sa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91))
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function Wu(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92))
      if (Gr(n)) {
        if (1 < n.length) throw Error(R(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: gn(n) }
}
function Kd(e, t) {
  var n = gn(t.value),
    r = gn(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function bu(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Zd(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function ka(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Zd(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var Ki,
  Yd = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        Ki = Ki || document.createElement('div'),
          Ki.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ki.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function pi(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var ti = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ym = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(ti).forEach(function (e) {
  ym.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ti[t] = ti[e])
  })
})
function qd(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ti.hasOwnProperty(e) && ti[e])
    ? ('' + t).trim()
    : t + 'px'
}
function Gd(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = qd(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var vm = fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function za(e, t) {
  if (t) {
    if (vm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(R(62))
  }
}
function Ea(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Ca = null
function _s(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Pa = null,
  hr = null,
  mr = null
function Qu(e) {
  if ((e = Ii(e))) {
    if (typeof Pa != 'function') throw Error(R(280))
    var t = e.stateNode
    t && ((t = al(t)), Pa(e.stateNode, e.type, t))
  }
}
function Xd(e) {
  hr ? (mr ? mr.push(e) : (mr = [e])) : (hr = e)
}
function Jd() {
  if (hr) {
    var e = hr,
      t = mr
    if (((mr = hr = null), Qu(e), t)) for (e = 0; e < t.length; e++) Qu(t[e])
  }
}
function ef(e, t) {
  return e(t)
}
function tf() {}
var Il = !1
function nf(e, t, n) {
  if (Il) return e(t, n)
  Il = !0
  try {
    return ef(e, t, n)
  } finally {
    ;(Il = !1), (hr !== null || mr !== null) && (tf(), Jd())
  }
}
function hi(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = al(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(R(231, t, typeof n))
  return n
}
var ja = !1
if (Bt)
  try {
    var Fr = {}
    Object.defineProperty(Fr, 'passive', {
      get: function () {
        ja = !0
      },
    }),
      window.addEventListener('test', Fr, Fr),
      window.removeEventListener('test', Fr, Fr)
  } catch {
    ja = !1
  }
function wm(e, t, n, r, i, o, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var ni = !1,
  Ro = null,
  _o = !1,
  Ra = null,
  xm = {
    onError: function (e) {
      ;(ni = !0), (Ro = e)
    },
  }
function Sm(e, t, n, r, i, o, l, a, s) {
  ;(ni = !1), (Ro = null), wm.apply(xm, arguments)
}
function km(e, t, n, r, i, o, l, a, s) {
  if ((Sm.apply(this, arguments), ni)) {
    if (ni) {
      var u = Ro
      ;(ni = !1), (Ro = null)
    } else throw Error(R(198))
    _o || ((_o = !0), (Ra = u))
  }
}
function Qn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function rf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Ku(e) {
  if (Qn(e) !== e) throw Error(R(188))
}
function zm(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Qn(e)), t === null)) throw Error(R(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var i = n.return
    if (i === null) break
    var o = i.alternate
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Ku(i), e
        if (o === r) return Ku(i), t
        o = o.sibling
      }
      throw Error(R(188))
    }
    if (n.return !== r.return) (n = i), (r = o)
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          ;(l = !0), (n = i), (r = o)
          break
        }
        if (a === r) {
          ;(l = !0), (r = i), (n = o)
          break
        }
        a = a.sibling
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            ;(l = !0), (n = o), (r = i)
            break
          }
          if (a === r) {
            ;(l = !0), (r = o), (n = i)
            break
          }
          a = a.sibling
        }
        if (!l) throw Error(R(189))
      }
    }
    if (n.alternate !== r) throw Error(R(190))
  }
  if (n.tag !== 3) throw Error(R(188))
  return n.stateNode.current === n ? e : t
}
function of(e) {
  return (e = zm(e)), e !== null ? lf(e) : null
}
function lf(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = lf(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var af = it.unstable_scheduleCallback,
  Zu = it.unstable_cancelCallback,
  Em = it.unstable_shouldYield,
  Cm = it.unstable_requestPaint,
  Se = it.unstable_now,
  Pm = it.unstable_getCurrentPriorityLevel,
  Ts = it.unstable_ImmediatePriority,
  sf = it.unstable_UserBlockingPriority,
  To = it.unstable_NormalPriority,
  jm = it.unstable_LowPriority,
  uf = it.unstable_IdlePriority,
  rl = null,
  Nt = null
function Rm(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == 'function')
    try {
      Nt.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var kt = Math.clz32 ? Math.clz32 : Lm,
  _m = Math.log,
  Tm = Math.LN2
function Lm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_m(e) / Tm) | 0)) | 0
}
var Zi = 64,
  Yi = 4194304
function Xr(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Lo(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455
  if (l !== 0) {
    var a = l & ~i
    a !== 0 ? (r = Xr(a)) : ((o &= l), o !== 0 && (r = Xr(o)))
  } else (l = n & ~i), l !== 0 ? (r = Xr(l)) : o !== 0 && (r = Xr(o))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - kt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function Nm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Mm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - kt(o),
      a = 1 << l,
      s = i[l]
    s === -1
      ? (!(a & n) || a & r) && (i[l] = Nm(a, t))
      : s <= t && (e.expiredLanes |= a),
      (o &= ~a)
  }
}
function _a(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function cf() {
  var e = Zi
  return (Zi <<= 1), !(Zi & 4194240) && (Zi = 64), e
}
function Ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Di(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = n)
}
function Dm(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - kt(n),
      o = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
  }
}
function Ls(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var ee = 0
function df(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var ff,
  Ns,
  pf,
  hf,
  mf,
  Ta = !1,
  qi = [],
  an = null,
  sn = null,
  un = null,
  mi = new Map(),
  gi = new Map(),
  nn = [],
  $m =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Yu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      an = null
      break
    case 'dragenter':
    case 'dragleave':
      sn = null
      break
    case 'mouseover':
    case 'mouseout':
      un = null
      break
    case 'pointerover':
    case 'pointerout':
      mi.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      gi.delete(t.pointerId)
  }
}
function Ar(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Ii(t)), t !== null && Ns(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function Im(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (an = Ar(an, e, t, n, r, i)), !0
    case 'dragenter':
      return (sn = Ar(sn, e, t, n, r, i)), !0
    case 'mouseover':
      return (un = Ar(un, e, t, n, r, i)), !0
    case 'pointerover':
      var o = i.pointerId
      return mi.set(o, Ar(mi.get(o) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (o = i.pointerId), gi.set(o, Ar(gi.get(o) || null, e, t, n, r, i)), !0
      )
  }
  return !1
}
function gf(e) {
  var t = Pn(e.target)
  if (t !== null) {
    var n = Qn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rf(n)), t !== null)) {
          ;(e.blockedOn = t),
            mf(e.priority, function () {
              pf(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function fo(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = La(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Ca = r), n.target.dispatchEvent(r), (Ca = null)
    } else return (t = Ii(n)), t !== null && Ns(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function qu(e, t, n) {
  fo(e) && n.delete(t)
}
function Om() {
  ;(Ta = !1),
    an !== null && fo(an) && (an = null),
    sn !== null && fo(sn) && (sn = null),
    un !== null && fo(un) && (un = null),
    mi.forEach(qu),
    gi.forEach(qu)
}
function Ur(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ta ||
      ((Ta = !0), it.unstable_scheduleCallback(it.unstable_NormalPriority, Om)))
}
function yi(e) {
  function t(i) {
    return Ur(i, e)
  }
  if (0 < qi.length) {
    Ur(qi[0], e)
    for (var n = 1; n < qi.length; n++) {
      var r = qi[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    an !== null && Ur(an, e),
      sn !== null && Ur(sn, e),
      un !== null && Ur(un, e),
      mi.forEach(t),
      gi.forEach(t),
      n = 0;
    n < nn.length;
    n++
  )
    (r = nn[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < nn.length && ((n = nn[0]), n.blockedOn === null); )
    gf(n), n.blockedOn === null && nn.shift()
}
var gr = bt.ReactCurrentBatchConfig,
  No = !0
function Fm(e, t, n, r) {
  var i = ee,
    o = gr.transition
  gr.transition = null
  try {
    ;(ee = 1), Ms(e, t, n, r)
  } finally {
    ;(ee = i), (gr.transition = o)
  }
}
function Am(e, t, n, r) {
  var i = ee,
    o = gr.transition
  gr.transition = null
  try {
    ;(ee = 4), Ms(e, t, n, r)
  } finally {
    ;(ee = i), (gr.transition = o)
  }
}
function Ms(e, t, n, r) {
  if (No) {
    var i = La(e, t, n, r)
    if (i === null) Kl(e, t, r, Mo, n), Yu(e, r)
    else if (Im(i, e, t, n, r)) r.stopPropagation()
    else if ((Yu(e, r), t & 4 && -1 < $m.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ii(i)
        if (
          (o !== null && ff(o),
          (o = La(e, t, n, r)),
          o === null && Kl(e, t, r, Mo, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else Kl(e, t, r, null, n)
  }
}
var Mo = null
function La(e, t, n, r) {
  if (((Mo = null), (e = _s(r)), (e = Pn(e)), e !== null))
    if (((t = Qn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = rf(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Mo = e), null
}
function yf(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (Pm()) {
        case Ts:
          return 1
        case sf:
          return 4
        case To:
        case jm:
          return 16
        case uf:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var on = null,
  Ds = null,
  po = null
function vf() {
  if (po) return po
  var e,
    t = Ds,
    n = t.length,
    r,
    i = 'value' in on ? on.value : on.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (po = i.slice(e, 1 < r ? 1 - r : void 0))
}
function ho(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Gi() {
  return !0
}
function Gu() {
  return !1
}
function lt(e) {
  function t(n, r, i, o, l) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null)
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Gi
        : Gu),
      (this.isPropagationStopped = Gu),
      this
    )
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Gi))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Gi))
      },
      persist: function () {},
      isPersistent: Gi,
    }),
    t
  )
}
var Lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  $s = lt(Lr),
  $i = fe({}, Lr, { view: 0, detail: 0 }),
  Um = lt($i),
  Fl,
  Al,
  Br,
  il = fe({}, $i, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Is,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Br &&
            (Br && e.type === 'mousemove'
              ? ((Fl = e.screenX - Br.screenX), (Al = e.screenY - Br.screenY))
              : (Al = Fl = 0),
            (Br = e)),
          Fl)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Al
    },
  }),
  Xu = lt(il),
  Bm = fe({}, il, { dataTransfer: 0 }),
  Hm = lt(Bm),
  Vm = fe({}, $i, { relatedTarget: 0 }),
  Ul = lt(Vm),
  Wm = fe({}, Lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bm = lt(Wm),
  Qm = fe({}, Lr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Km = lt(Qm),
  Zm = fe({}, Lr, { data: 0 }),
  Ju = lt(Zm),
  Ym = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  qm = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Gm = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Xm(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Gm[e]) ? !!t[e] : !1
}
function Is() {
  return Xm
}
var Jm = fe({}, $i, {
    key: function (e) {
      if (e.key) {
        var t = Ym[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ho(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? qm[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Is,
    charCode: function (e) {
      return e.type === 'keypress' ? ho(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ho(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  e0 = lt(Jm),
  t0 = fe({}, il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ec = lt(t0),
  n0 = fe({}, $i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Is,
  }),
  r0 = lt(n0),
  i0 = fe({}, Lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  o0 = lt(i0),
  l0 = fe({}, il, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  a0 = lt(l0),
  s0 = [9, 13, 27, 32],
  Os = Bt && 'CompositionEvent' in window,
  ri = null
Bt && 'documentMode' in document && (ri = document.documentMode)
var u0 = Bt && 'TextEvent' in window && !ri,
  wf = Bt && (!Os || (ri && 8 < ri && 11 >= ri)),
  tc = String.fromCharCode(32),
  nc = !1
function xf(e, t) {
  switch (e) {
    case 'keyup':
      return s0.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Sf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var er = !1
function c0(e, t) {
  switch (e) {
    case 'compositionend':
      return Sf(t)
    case 'keypress':
      return t.which !== 32 ? null : ((nc = !0), tc)
    case 'textInput':
      return (e = t.data), e === tc && nc ? null : e
    default:
      return null
  }
}
function d0(e, t) {
  if (er)
    return e === 'compositionend' || (!Os && xf(e, t))
      ? ((e = vf()), (po = Ds = on = null), (er = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return wf && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var f0 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function rc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!f0[e.type] : t === 'textarea'
}
function kf(e, t, n, r) {
  Xd(r),
    (t = Do(t, 'onChange')),
    0 < t.length &&
      ((n = new $s('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var ii = null,
  vi = null
function p0(e) {
  Mf(e, 0)
}
function ol(e) {
  var t = rr(e)
  if (bd(t)) return e
}
function h0(e, t) {
  if (e === 'change') return t
}
var zf = !1
if (Bt) {
  var Bl
  if (Bt) {
    var Hl = 'oninput' in document
    if (!Hl) {
      var ic = document.createElement('div')
      ic.setAttribute('oninput', 'return;'),
        (Hl = typeof ic.oninput == 'function')
    }
    Bl = Hl
  } else Bl = !1
  zf = Bl && (!document.documentMode || 9 < document.documentMode)
}
function oc() {
  ii && (ii.detachEvent('onpropertychange', Ef), (vi = ii = null))
}
function Ef(e) {
  if (e.propertyName === 'value' && ol(vi)) {
    var t = []
    kf(t, vi, e, _s(e)), nf(p0, t)
  }
}
function m0(e, t, n) {
  e === 'focusin'
    ? (oc(), (ii = t), (vi = n), ii.attachEvent('onpropertychange', Ef))
    : e === 'focusout' && oc()
}
function g0(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ol(vi)
}
function y0(e, t) {
  if (e === 'click') return ol(t)
}
function v0(e, t) {
  if (e === 'input' || e === 'change') return ol(t)
}
function w0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Ct = typeof Object.is == 'function' ? Object.is : w0
function wi(e, t) {
  if (Ct(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!pa.call(t, i) || !Ct(e[i], t[i])) return !1
  }
  return !0
}
function lc(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function ac(e, t) {
  var n = lc(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = lc(n)
  }
}
function Cf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cf(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Pf() {
  for (var e = window, t = jo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = jo(e.document)
  }
  return t
}
function Fs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function x0(e) {
  var t = Pf(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Cf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Fs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var i = n.textContent.length,
          o = Math.min(r.start, i)
        ;(r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = ac(n, o))
        var l = ac(n, r)
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var S0 = Bt && 'documentMode' in document && 11 >= document.documentMode,
  tr = null,
  Na = null,
  oi = null,
  Ma = !1
function sc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Ma ||
    tr == null ||
    tr !== jo(r) ||
    ((r = tr),
    'selectionStart' in r && Fs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (oi && wi(oi, r)) ||
      ((oi = r),
      (r = Do(Na, 'onSelect')),
      0 < r.length &&
        ((t = new $s('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tr))))
}
function Xi(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var nr = {
    animationend: Xi('Animation', 'AnimationEnd'),
    animationiteration: Xi('Animation', 'AnimationIteration'),
    animationstart: Xi('Animation', 'AnimationStart'),
    transitionend: Xi('Transition', 'TransitionEnd'),
  },
  Vl = {},
  jf = {}
Bt &&
  ((jf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete nr.animationend.animation,
    delete nr.animationiteration.animation,
    delete nr.animationstart.animation),
  'TransitionEvent' in window || delete nr.transitionend.transition)
function ll(e) {
  if (Vl[e]) return Vl[e]
  if (!nr[e]) return e
  var t = nr[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in jf) return (Vl[e] = t[n])
  return e
}
var Rf = ll('animationend'),
  _f = ll('animationiteration'),
  Tf = ll('animationstart'),
  Lf = ll('transitionend'),
  Nf = new Map(),
  uc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function vn(e, t) {
  Nf.set(e, t), bn(t, [e])
}
for (var Wl = 0; Wl < uc.length; Wl++) {
  var bl = uc[Wl],
    k0 = bl.toLowerCase(),
    z0 = bl[0].toUpperCase() + bl.slice(1)
  vn(k0, 'on' + z0)
}
vn(Rf, 'onAnimationEnd')
vn(_f, 'onAnimationIteration')
vn(Tf, 'onAnimationStart')
vn('dblclick', 'onDoubleClick')
vn('focusin', 'onFocus')
vn('focusout', 'onBlur')
vn(Lf, 'onTransitionEnd')
wr('onMouseEnter', ['mouseout', 'mouseover'])
wr('onMouseLeave', ['mouseout', 'mouseover'])
wr('onPointerEnter', ['pointerout', 'pointerover'])
wr('onPointerLeave', ['pointerout', 'pointerover'])
bn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
bn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
bn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
bn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
bn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
bn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Jr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  E0 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Jr))
function cc(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), km(r, t, void 0, e), (e.currentTarget = null)
}
function Mf(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget
          if (((a = a.listener), s !== o && i.isPropagationStopped())) break e
          cc(i, a, u), (o = s)
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== o && i.isPropagationStopped())
          )
            break e
          cc(i, a, u), (o = s)
        }
    }
  }
  if (_o) throw ((e = Ra), (_o = !1), (Ra = null), e)
}
function oe(e, t) {
  var n = t[Fa]
  n === void 0 && (n = t[Fa] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Df(t, e, 2, !1), n.add(r))
}
function Ql(e, t, n) {
  var r = 0
  t && (r |= 4), Df(n, e, r, t)
}
var Ji = '_reactListening' + Math.random().toString(36).slice(2)
function xi(e) {
  if (!e[Ji]) {
    ;(e[Ji] = !0),
      Ud.forEach(function (n) {
        n !== 'selectionchange' && (E0.has(n) || Ql(n, !1, e), Ql(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Ji] || ((t[Ji] = !0), Ql('selectionchange', !1, t))
  }
}
function Df(e, t, n, r) {
  switch (yf(t)) {
    case 1:
      var i = Fm
      break
    case 4:
      i = Am
      break
    default:
      i = Ms
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !ja ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1)
}
function Kl(e, t, n, r, i) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var l = r.tag
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return
            l = l.return
          }
        for (; a !== null; ) {
          if (((l = Pn(a)), l === null)) return
          if (((s = l.tag), s === 5 || s === 6)) {
            r = o = l
            continue e
          }
          a = a.parentNode
        }
      }
      r = r.return
    }
  nf(function () {
    var u = o,
      c = _s(n),
      p = []
    e: {
      var h = Nf.get(e)
      if (h !== void 0) {
        var v = $s,
          S = e
        switch (e) {
          case 'keypress':
            if (ho(n) === 0) break e
          case 'keydown':
          case 'keyup':
            v = e0
            break
          case 'focusin':
            ;(S = 'focus'), (v = Ul)
            break
          case 'focusout':
            ;(S = 'blur'), (v = Ul)
            break
          case 'beforeblur':
          case 'afterblur':
            v = Ul
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = Xu
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = Hm
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = r0
            break
          case Rf:
          case _f:
          case Tf:
            v = bm
            break
          case Lf:
            v = o0
            break
          case 'scroll':
            v = Um
            break
          case 'wheel':
            v = a0
            break
          case 'copy':
          case 'cut':
          case 'paste':
            v = Km
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = ec
        }
        var w = (t & 4) !== 0,
          P = !w && e === 'scroll',
          f = w ? (h !== null ? h + 'Capture' : null) : h
        w = []
        for (var d = u, m; d !== null; ) {
          m = d
          var E = m.stateNode
          if (
            (m.tag === 5 &&
              E !== null &&
              ((m = E),
              f !== null && ((E = hi(d, f)), E != null && w.push(Si(d, E, m)))),
            P)
          )
            break
          d = d.return
        }
        0 < w.length &&
          ((h = new v(h, S, null, n, c)), p.push({ event: h, listeners: w }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          h &&
            n !== Ca &&
            (S = n.relatedTarget || n.fromElement) &&
            (Pn(S) || S[Ht]))
        )
          break e
        if (
          (v || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((S = n.relatedTarget || n.toElement),
              (v = u),
              (S = S ? Pn(S) : null),
              S !== null &&
                ((P = Qn(S)), S !== P || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((v = null), (S = u)),
          v !== S)
        ) {
          if (
            ((w = Xu),
            (E = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = ec),
              (E = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (d = 'pointer')),
            (P = v == null ? h : rr(v)),
            (m = S == null ? h : rr(S)),
            (h = new w(E, d + 'leave', v, n, c)),
            (h.target = P),
            (h.relatedTarget = m),
            (E = null),
            Pn(c) === u &&
              ((w = new w(f, d + 'enter', S, n, c)),
              (w.target = m),
              (w.relatedTarget = P),
              (E = w)),
            (P = E),
            v && S)
          )
            t: {
              for (w = v, f = S, d = 0, m = w; m; m = qn(m)) d++
              for (m = 0, E = f; E; E = qn(E)) m++
              for (; 0 < d - m; ) (w = qn(w)), d--
              for (; 0 < m - d; ) (f = qn(f)), m--
              for (; d--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t
                ;(w = qn(w)), (f = qn(f))
              }
              w = null
            }
          else w = null
          v !== null && dc(p, h, v, w, !1),
            S !== null && P !== null && dc(p, P, S, w, !0)
        }
      }
      e: {
        if (
          ((h = u ? rr(u) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && h.type === 'file'))
        )
          var j = h0
        else if (rc(h))
          if (zf) j = v0
          else {
            j = g0
            var g = m0
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (j = y0)
        if (j && (j = j(e, u))) {
          kf(p, j, n, c)
          break e
        }
        g && g(e, h, u),
          e === 'focusout' &&
            (g = h._wrapperState) &&
            g.controlled &&
            h.type === 'number' &&
            xa(h, 'number', h.value)
      }
      switch (((g = u ? rr(u) : window), e)) {
        case 'focusin':
          ;(rc(g) || g.contentEditable === 'true') &&
            ((tr = g), (Na = u), (oi = null))
          break
        case 'focusout':
          oi = Na = tr = null
          break
        case 'mousedown':
          Ma = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Ma = !1), sc(p, n, c)
          break
        case 'selectionchange':
          if (S0) break
        case 'keydown':
        case 'keyup':
          sc(p, n, c)
      }
      var z
      if (Os)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart'
              break e
            case 'compositionend':
              _ = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              _ = 'onCompositionUpdate'
              break e
          }
          _ = void 0
        }
      else
        er
          ? xf(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart')
      _ &&
        (wf &&
          n.locale !== 'ko' &&
          (er || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && er && (z = vf())
            : ((on = c),
              (Ds = 'value' in on ? on.value : on.textContent),
              (er = !0))),
        (g = Do(u, _)),
        0 < g.length &&
          ((_ = new Ju(_, e, null, n, c)),
          p.push({ event: _, listeners: g }),
          z ? (_.data = z) : ((z = Sf(n)), z !== null && (_.data = z)))),
        (z = u0 ? c0(e, n) : d0(e, n)) &&
          ((u = Do(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Ju('onBeforeInput', 'beforeinput', null, n, c)),
            p.push({ event: c, listeners: u }),
            (c.data = z)))
    }
    Mf(p, t)
  })
}
function Si(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Do(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = hi(e, n)),
      o != null && r.unshift(Si(e, o, i)),
      (o = hi(e, t)),
      o != null && r.push(Si(e, o, i))),
      (e = e.return)
  }
  return r
}
function qn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function dc(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode
    if (s !== null && s === r) break
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((s = hi(n, o)), s != null && l.unshift(Si(n, s, a)))
        : i || ((s = hi(n, o)), s != null && l.push(Si(n, s, a)))),
      (n = n.return)
  }
  l.length !== 0 && e.push({ event: t, listeners: l })
}
var C0 = /\r\n?/g,
  P0 = /\u0000|\uFFFD/g
function fc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      C0,
      `
`
    )
    .replace(P0, '')
}
function eo(e, t, n) {
  if (((t = fc(t)), fc(e) !== t && n)) throw Error(R(425))
}
function $o() {}
var Da = null,
  $a = null
function Ia(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Oa = typeof setTimeout == 'function' ? setTimeout : void 0,
  j0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  pc = typeof Promise == 'function' ? Promise : void 0,
  R0 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof pc < 'u'
      ? function (e) {
          return pc.resolve(null).then(e).catch(_0)
        }
      : Oa
function _0(e) {
  setTimeout(function () {
    throw e
  })
}
function Zl(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), yi(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  yi(t)
}
function cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function hc(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Nr = Math.random().toString(36).slice(2),
  Lt = '__reactFiber$' + Nr,
  ki = '__reactProps$' + Nr,
  Ht = '__reactContainer$' + Nr,
  Fa = '__reactEvents$' + Nr,
  T0 = '__reactListeners$' + Nr,
  L0 = '__reactHandles$' + Nr
function Pn(e) {
  var t = e[Lt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[Lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = hc(e); e !== null; ) {
          if ((n = e[Lt])) return n
          e = hc(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Ii(e) {
  return (
    (e = e[Lt] || e[Ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function rr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(R(33))
}
function al(e) {
  return e[ki] || null
}
var Aa = [],
  ir = -1
function wn(e) {
  return { current: e }
}
function ae(e) {
  0 > ir || ((e.current = Aa[ir]), (Aa[ir] = null), ir--)
}
function ie(e, t) {
  ir++, (Aa[ir] = e.current), (e.current = t)
}
var yn = {},
  Be = wn(yn),
  qe = wn(!1),
  On = yn
function xr(e, t) {
  var n = e.type.contextTypes
  if (!n) return yn
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    o
  for (o in n) i[o] = t[o]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function Ge(e) {
  return (e = e.childContextTypes), e != null
}
function Io() {
  ae(qe), ae(Be)
}
function mc(e, t, n) {
  if (Be.current !== yn) throw Error(R(168))
  ie(Be, t), ie(qe, n)
}
function $f(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(R(108, mm(e) || 'Unknown', i))
  return fe({}, n, r)
}
function Oo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yn),
    (On = Be.current),
    ie(Be, e),
    ie(qe, qe.current),
    !0
  )
}
function gc(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(R(169))
  n
    ? ((e = $f(e, t, On)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(qe),
      ae(Be),
      ie(Be, e))
    : ae(qe),
    ie(qe, n)
}
var Ot = null,
  sl = !1,
  Yl = !1
function If(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e)
}
function N0(e) {
  ;(sl = !0), If(e)
}
function xn() {
  if (!Yl && Ot !== null) {
    Yl = !0
    var e = 0,
      t = ee
    try {
      var n = Ot
      for (ee = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Ot = null), (sl = !1)
    } catch (i) {
      throw (Ot !== null && (Ot = Ot.slice(e + 1)), af(Ts, xn), i)
    } finally {
      ;(ee = t), (Yl = !1)
    }
  }
  return null
}
var or = [],
  lr = 0,
  Fo = null,
  Ao = 0,
  ut = [],
  ct = 0,
  Fn = null,
  Ft = 1,
  At = ''
function En(e, t) {
  ;(or[lr++] = Ao), (or[lr++] = Fo), (Fo = e), (Ao = t)
}
function Of(e, t, n) {
  ;(ut[ct++] = Ft), (ut[ct++] = At), (ut[ct++] = Fn), (Fn = e)
  var r = Ft
  e = At
  var i = 32 - kt(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - kt(t) + i
  if (30 < o) {
    var l = i - (i % 5)
    ;(o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (Ft = (1 << (32 - kt(t) + i)) | (n << i) | r),
      (At = o + e)
  } else (Ft = (1 << o) | (n << i) | r), (At = e)
}
function As(e) {
  e.return !== null && (En(e, 1), Of(e, 1, 0))
}
function Us(e) {
  for (; e === Fo; )
    (Fo = or[--lr]), (or[lr] = null), (Ao = or[--lr]), (or[lr] = null)
  for (; e === Fn; )
    (Fn = ut[--ct]),
      (ut[ct] = null),
      (At = ut[--ct]),
      (ut[ct] = null),
      (Ft = ut[--ct]),
      (ut[ct] = null)
}
var rt = null,
  nt = null,
  ue = !1,
  St = null
function Ff(e, t) {
  var n = ft(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function yc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rt = e), (nt = cn(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rt = e), (nt = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fn !== null ? { id: Ft, overflow: At } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ft(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rt = e),
            (nt = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Ua(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ba(e) {
  if (ue) {
    var t = nt
    if (t) {
      var n = t
      if (!yc(e, t)) {
        if (Ua(e)) throw Error(R(418))
        t = cn(n.nextSibling)
        var r = rt
        t && yc(e, t)
          ? Ff(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (rt = e))
      }
    } else {
      if (Ua(e)) throw Error(R(418))
      ;(e.flags = (e.flags & -4097) | 2), (ue = !1), (rt = e)
    }
  }
}
function vc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  rt = e
}
function to(e) {
  if (e !== rt) return !1
  if (!ue) return vc(e), (ue = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Ia(e.type, e.memoizedProps))),
    t && (t = nt))
  ) {
    if (Ua(e)) throw (Af(), Error(R(418)))
    for (; t; ) Ff(e, t), (t = cn(t.nextSibling))
  }
  if ((vc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              nt = cn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      nt = null
    }
  } else nt = rt ? cn(e.stateNode.nextSibling) : null
  return !0
}
function Af() {
  for (var e = nt; e; ) e = cn(e.nextSibling)
}
function Sr() {
  ;(nt = rt = null), (ue = !1)
}
function Bs(e) {
  St === null ? (St = [e]) : St.push(e)
}
var M0 = bt.ReactCurrentBatchConfig
function vt(e, t) {
  if (e && e.defaultProps) {
    ;(t = fe({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var Uo = wn(null),
  Bo = null,
  ar = null,
  Hs = null
function Vs() {
  Hs = ar = Bo = null
}
function Ws(e) {
  var t = Uo.current
  ae(Uo), (e._currentValue = t)
}
function Ha(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function yr(e, t) {
  ;(Bo = e),
    (Hs = ar = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ye = !0), (e.firstContext = null))
}
function ht(e) {
  var t = e._currentValue
  if (Hs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ar === null)) {
      if (Bo === null) throw Error(R(308))
      ;(ar = e), (Bo.dependencies = { lanes: 0, firstContext: e })
    } else ar = ar.next = e
  return t
}
var jn = null
function bs(e) {
  jn === null ? (jn = [e]) : jn.push(e)
}
function Uf(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), bs(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Vt(e, r)
  )
}
function Vt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var tn = !1
function Qs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Bf(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function Ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function dn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), X & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Vt(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), bs(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Vt(e, n)
  )
}
function mo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ls(e, n)
  }
}
function wc(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next)
      } while (n !== null)
      o === null ? (i = o = t) : (o = o.next = t)
    } else i = o = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Ho(e, t, n, r) {
  var i = e.updateQueue
  tn = !1
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending
  if (a !== null) {
    i.shared.pending = null
    var s = a,
      u = s.next
    ;(s.next = null), l === null ? (o = u) : (l.next = u), (l = s)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== l &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = s)))
  }
  if (o !== null) {
    var p = i.baseState
    ;(l = 0), (c = u = s = null), (a = o)
    do {
      var h = a.lane,
        v = a.eventTime
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            })
        e: {
          var S = e,
            w = a
          switch (((h = t), (v = n), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == 'function')) {
                p = S.call(v, p, h)
                break e
              }
              p = S
              break e
            case 3:
              S.flags = (S.flags & -65537) | 128
            case 0:
              if (
                ((S = w.payload),
                (h = typeof S == 'function' ? S.call(v, p, h) : S),
                h == null)
              )
                break e
              p = fe({}, p, h)
              break e
            case 2:
              tn = !0
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a))
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (s = p)) : (c = c.next = v),
          (l |= h)
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break
        ;(h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null)
      }
    } while (1)
    if (
      (c === null && (s = p),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t
      do (l |= i.lane), (i = i.next)
      while (i !== t)
    } else o === null && (i.shared.lanes = 0)
    ;(Un |= l), (e.lanes = l), (e.memoizedState = p)
  }
}
function xc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(R(191, i))
        i.call(r)
      }
    }
}
var Hf = new Ad.Component().refs
function Va(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Ve(),
      i = pn(e),
      o = Ut(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = dn(e, o, i)),
      t !== null && (zt(t, e, i, r), mo(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Ve(),
      i = pn(e),
      o = Ut(r, i)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = dn(e, o, i)),
      t !== null && (zt(t, e, i, r), mo(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Ve(),
      r = pn(e),
      i = Ut(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = dn(e, i, r)),
      t !== null && (zt(t, e, r, n), mo(t, e, r))
  },
}
function Sc(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !wi(n, r) || !wi(i, o)
      : !0
  )
}
function Vf(e, t, n) {
  var r = !1,
    i = yn,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = ht(o))
      : ((i = Ge(t) ? On : Be.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? xr(e, i) : yn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ul),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function kc(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ul.enqueueReplaceState(t, t.state, null)
}
function Wa(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = Hf), Qs(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = ht(o))
    : ((o = Ge(t) ? On : Be.current), (i.context = xr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Va(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ul.enqueueReplaceState(i, i.state, null),
      Ho(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Hr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309))
        var r = n.stateNode
      }
      if (!r) throw Error(R(147, e))
      var i = r,
        o = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = i.refs
            a === Hf && (a = i.refs = {}), l === null ? delete a[o] : (a[o] = l)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(R(284))
    if (!n._owner) throw Error(R(290, e))
  }
  return e
}
function no(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function zc(e) {
  var t = e._init
  return t(e._payload)
}
function Wf(e) {
  function t(f, d) {
    if (e) {
      var m = f.deletions
      m === null ? ((f.deletions = [d]), (f.flags |= 16)) : m.push(d)
    }
  }
  function n(f, d) {
    if (!e) return null
    for (; d !== null; ) t(f, d), (d = d.sibling)
    return null
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling)
    return f
  }
  function i(f, d) {
    return (f = hn(f, d)), (f.index = 0), (f.sibling = null), f
  }
  function o(f, d, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((f.flags |= 2), d) : m)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    )
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f
  }
  function a(f, d, m, E) {
    return d === null || d.tag !== 6
      ? ((d = na(m, f.mode, E)), (d.return = f), d)
      : ((d = i(d, m)), (d.return = f), d)
  }
  function s(f, d, m, E) {
    var j = m.type
    return j === Jn
      ? c(f, d, m.props.children, E, m.key)
      : d !== null &&
        (d.elementType === j ||
          (typeof j == 'object' &&
            j !== null &&
            j.$$typeof === en &&
            zc(j) === d.type))
      ? ((E = i(d, m.props)), (E.ref = Hr(f, d, m)), (E.return = f), E)
      : ((E = So(m.type, m.key, m.props, null, f.mode, E)),
        (E.ref = Hr(f, d, m)),
        (E.return = f),
        E)
  }
  function u(f, d, m, E) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = ra(m, f.mode, E)), (d.return = f), d)
      : ((d = i(d, m.children || [])), (d.return = f), d)
  }
  function c(f, d, m, E, j) {
    return d === null || d.tag !== 7
      ? ((d = Mn(m, f.mode, E, j)), (d.return = f), d)
      : ((d = i(d, m)), (d.return = f), d)
  }
  function p(f, d, m) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = na('' + d, f.mode, m)), (d.return = f), d
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case bi:
          return (
            (m = So(d.type, d.key, d.props, null, f.mode, m)),
            (m.ref = Hr(f, null, d)),
            (m.return = f),
            m
          )
        case Xn:
          return (d = ra(d, f.mode, m)), (d.return = f), d
        case en:
          var E = d._init
          return p(f, E(d._payload), m)
      }
      if (Gr(d) || Or(d)) return (d = Mn(d, f.mode, m, null)), (d.return = f), d
      no(f, d)
    }
    return null
  }
  function h(f, d, m, E) {
    var j = d !== null ? d.key : null
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return j !== null ? null : a(f, d, '' + m, E)
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case bi:
          return m.key === j ? s(f, d, m, E) : null
        case Xn:
          return m.key === j ? u(f, d, m, E) : null
        case en:
          return (j = m._init), h(f, d, j(m._payload), E)
      }
      if (Gr(m) || Or(m)) return j !== null ? null : c(f, d, m, E, null)
      no(f, m)
    }
    return null
  }
  function v(f, d, m, E, j) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (f = f.get(m) || null), a(d, f, '' + E, j)
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case bi:
          return (f = f.get(E.key === null ? m : E.key) || null), s(d, f, E, j)
        case Xn:
          return (f = f.get(E.key === null ? m : E.key) || null), u(d, f, E, j)
        case en:
          var g = E._init
          return v(f, d, m, g(E._payload), j)
      }
      if (Gr(E) || Or(E)) return (f = f.get(m) || null), c(d, f, E, j, null)
      no(d, E)
    }
    return null
  }
  function S(f, d, m, E) {
    for (
      var j = null, g = null, z = d, _ = (d = 0), D = null;
      z !== null && _ < m.length;
      _++
    ) {
      z.index > _ ? ((D = z), (z = null)) : (D = z.sibling)
      var F = h(f, z, m[_], E)
      if (F === null) {
        z === null && (z = D)
        break
      }
      e && z && F.alternate === null && t(f, z),
        (d = o(F, d, _)),
        g === null ? (j = F) : (g.sibling = F),
        (g = F),
        (z = D)
    }
    if (_ === m.length) return n(f, z), ue && En(f, _), j
    if (z === null) {
      for (; _ < m.length; _++)
        (z = p(f, m[_], E)),
          z !== null &&
            ((d = o(z, d, _)), g === null ? (j = z) : (g.sibling = z), (g = z))
      return ue && En(f, _), j
    }
    for (z = r(f, z); _ < m.length; _++)
      (D = v(z, f, _, m[_], E)),
        D !== null &&
          (e && D.alternate !== null && z.delete(D.key === null ? _ : D.key),
          (d = o(D, d, _)),
          g === null ? (j = D) : (g.sibling = D),
          (g = D))
    return (
      e &&
        z.forEach(function (Y) {
          return t(f, Y)
        }),
      ue && En(f, _),
      j
    )
  }
  function w(f, d, m, E) {
    var j = Or(m)
    if (typeof j != 'function') throw Error(R(150))
    if (((m = j.call(m)), m == null)) throw Error(R(151))
    for (
      var g = (j = null), z = d, _ = (d = 0), D = null, F = m.next();
      z !== null && !F.done;
      _++, F = m.next()
    ) {
      z.index > _ ? ((D = z), (z = null)) : (D = z.sibling)
      var Y = h(f, z, F.value, E)
      if (Y === null) {
        z === null && (z = D)
        break
      }
      e && z && Y.alternate === null && t(f, z),
        (d = o(Y, d, _)),
        g === null ? (j = Y) : (g.sibling = Y),
        (g = Y),
        (z = D)
    }
    if (F.done) return n(f, z), ue && En(f, _), j
    if (z === null) {
      for (; !F.done; _++, F = m.next())
        (F = p(f, F.value, E)),
          F !== null &&
            ((d = o(F, d, _)), g === null ? (j = F) : (g.sibling = F), (g = F))
      return ue && En(f, _), j
    }
    for (z = r(f, z); !F.done; _++, F = m.next())
      (F = v(z, f, _, F.value, E)),
        F !== null &&
          (e && F.alternate !== null && z.delete(F.key === null ? _ : F.key),
          (d = o(F, d, _)),
          g === null ? (j = F) : (g.sibling = F),
          (g = F))
    return (
      e &&
        z.forEach(function (ye) {
          return t(f, ye)
        }),
      ue && En(f, _),
      j
    )
  }
  function P(f, d, m, E) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Jn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case bi:
          e: {
            for (var j = m.key, g = d; g !== null; ) {
              if (g.key === j) {
                if (((j = m.type), j === Jn)) {
                  if (g.tag === 7) {
                    n(f, g.sibling),
                      (d = i(g, m.props.children)),
                      (d.return = f),
                      (f = d)
                    break e
                  }
                } else if (
                  g.elementType === j ||
                  (typeof j == 'object' &&
                    j !== null &&
                    j.$$typeof === en &&
                    zc(j) === g.type)
                ) {
                  n(f, g.sibling),
                    (d = i(g, m.props)),
                    (d.ref = Hr(f, g, m)),
                    (d.return = f),
                    (f = d)
                  break e
                }
                n(f, g)
                break
              } else t(f, g)
              g = g.sibling
            }
            m.type === Jn
              ? ((d = Mn(m.props.children, f.mode, E, m.key)),
                (d.return = f),
                (f = d))
              : ((E = So(m.type, m.key, m.props, null, f.mode, E)),
                (E.ref = Hr(f, d, m)),
                (E.return = f),
                (f = E))
          }
          return l(f)
        case Xn:
          e: {
            for (g = m.key; d !== null; ) {
              if (d.key === g)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(f, d.sibling),
                    (d = i(d, m.children || [])),
                    (d.return = f),
                    (f = d)
                  break e
                } else {
                  n(f, d)
                  break
                }
              else t(f, d)
              d = d.sibling
            }
            ;(d = ra(m, f.mode, E)), (d.return = f), (f = d)
          }
          return l(f)
        case en:
          return (g = m._init), P(f, d, g(m._payload), E)
      }
      if (Gr(m)) return S(f, d, m, E)
      if (Or(m)) return w(f, d, m, E)
      no(f, m)
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = i(d, m)), (d.return = f), (f = d))
          : (n(f, d), (d = na(m, f.mode, E)), (d.return = f), (f = d)),
        l(f))
      : n(f, d)
  }
  return P
}
var kr = Wf(!0),
  bf = Wf(!1),
  Oi = {},
  Mt = wn(Oi),
  zi = wn(Oi),
  Ei = wn(Oi)
function Rn(e) {
  if (e === Oi) throw Error(R(174))
  return e
}
function Ks(e, t) {
  switch ((ie(Ei, t), ie(zi, e), ie(Mt, Oi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ka(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ka(t, e))
  }
  ae(Mt), ie(Mt, t)
}
function zr() {
  ae(Mt), ae(zi), ae(Ei)
}
function Qf(e) {
  Rn(Ei.current)
  var t = Rn(Mt.current),
    n = ka(t, e.type)
  t !== n && (ie(zi, e), ie(Mt, n))
}
function Zs(e) {
  zi.current === e && (ae(Mt), ae(zi))
}
var ce = wn(0)
function Vo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var ql = []
function Ys() {
  for (var e = 0; e < ql.length; e++) ql[e]._workInProgressVersionPrimary = null
  ql.length = 0
}
var go = bt.ReactCurrentDispatcher,
  Gl = bt.ReactCurrentBatchConfig,
  An = 0,
  de = null,
  Ee = null,
  _e = null,
  Wo = !1,
  li = !1,
  Ci = 0,
  D0 = 0
function Fe() {
  throw Error(R(321))
}
function qs(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ct(e[n], t[n])) return !1
  return !0
}
function Gs(e, t, n, r, i, o) {
  if (
    ((An = o),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (go.current = e === null || e.memoizedState === null ? F0 : A0),
    (e = n(r, i)),
    li)
  ) {
    o = 0
    do {
      if (((li = !1), (Ci = 0), 25 <= o)) throw Error(R(301))
      ;(o += 1),
        (_e = Ee = null),
        (t.updateQueue = null),
        (go.current = U0),
        (e = n(r, i))
    } while (li)
  }
  if (
    ((go.current = bo),
    (t = Ee !== null && Ee.next !== null),
    (An = 0),
    (_e = Ee = de = null),
    (Wo = !1),
    t)
  )
    throw Error(R(300))
  return e
}
function Xs() {
  var e = Ci !== 0
  return (Ci = 0), e
}
function _t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return _e === null ? (de.memoizedState = _e = e) : (_e = _e.next = e), _e
}
function mt() {
  if (Ee === null) {
    var e = de.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Ee.next
  var t = _e === null ? de.memoizedState : _e.next
  if (t !== null) (_e = t), (Ee = e)
  else {
    if (e === null) throw Error(R(310))
    ;(Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      _e === null ? (de.memoizedState = _e = e) : (_e = _e.next = e)
  }
  return _e
}
function Pi(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Xl(e) {
  var t = mt(),
    n = t.queue
  if (n === null) throw Error(R(311))
  n.lastRenderedReducer = e
  var r = Ee,
    i = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (i !== null) {
      var l = i.next
      ;(i.next = o.next), (o.next = l)
    }
    ;(r.baseQueue = i = o), (n.pending = null)
  }
  if (i !== null) {
    ;(o = i.next), (r = r.baseState)
    var a = (l = null),
      s = null,
      u = o
    do {
      var c = u.lane
      if ((An & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        s === null ? ((a = s = p), (l = r)) : (s = s.next = p),
          (de.lanes |= c),
          (Un |= c)
      }
      u = u.next
    } while (u !== null && u !== o)
    s === null ? (l = r) : (s.next = a),
      Ct(r, t.memoizedState) || (Ye = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (o = i.lane), (de.lanes |= o), (Un |= o), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Jl(e) {
  var t = mt(),
    n = t.queue
  if (n === null) throw Error(R(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState
  if (i !== null) {
    n.pending = null
    var l = (i = i.next)
    do (o = e(o, l.action)), (l = l.next)
    while (l !== i)
    Ct(o, t.memoizedState) || (Ye = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function Kf() {}
function Zf(e, t) {
  var n = de,
    r = mt(),
    i = t(),
    o = !Ct(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (Ye = !0)),
    (r = r.queue),
    Js(Gf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (_e !== null && _e.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ji(9, qf.bind(null, n, r, i, t), void 0, null),
      Ne === null)
    )
      throw Error(R(349))
    An & 30 || Yf(n, t, i)
  }
  return i
}
function Yf(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function qf(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Xf(t) && Jf(e)
}
function Gf(e, t, n) {
  return n(function () {
    Xf(t) && Jf(e)
  })
}
function Xf(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Ct(e, n)
  } catch {
    return !0
  }
}
function Jf(e) {
  var t = Vt(e, 1)
  t !== null && zt(t, e, 1, -1)
}
function Ec(e) {
  var t = _t()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = O0.bind(null, de, e)),
    [t.memoizedState, e]
  )
}
function ji(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function ep() {
  return mt().memoizedState
}
function yo(e, t, n, r) {
  var i = _t()
  ;(de.flags |= e),
    (i.memoizedState = ji(1 | t, n, void 0, r === void 0 ? null : r))
}
function cl(e, t, n, r) {
  var i = mt()
  r = r === void 0 ? null : r
  var o = void 0
  if (Ee !== null) {
    var l = Ee.memoizedState
    if (((o = l.destroy), r !== null && qs(r, l.deps))) {
      i.memoizedState = ji(t, n, o, r)
      return
    }
  }
  ;(de.flags |= e), (i.memoizedState = ji(1 | t, n, o, r))
}
function Cc(e, t) {
  return yo(8390656, 8, e, t)
}
function Js(e, t) {
  return cl(2048, 8, e, t)
}
function tp(e, t) {
  return cl(4, 2, e, t)
}
function np(e, t) {
  return cl(4, 4, e, t)
}
function rp(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function ip(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), cl(4, 4, rp.bind(null, t, e), n)
  )
}
function eu() {}
function op(e, t) {
  var n = mt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && qs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function lp(e, t) {
  var n = mt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && qs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function ap(e, t, n) {
  return An & 21
    ? (Ct(n, t) || ((n = cf()), (de.lanes |= n), (Un |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ye = !0)), (e.memoizedState = n))
}
function $0(e, t) {
  var n = ee
  ;(ee = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Gl.transition
  Gl.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ee = n), (Gl.transition = r)
  }
}
function sp() {
  return mt().memoizedState
}
function I0(e, t, n) {
  var r = pn(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    up(e))
  )
    cp(t, n)
  else if (((n = Uf(e, t, n, r)), n !== null)) {
    var i = Ve()
    zt(n, e, r, i), dp(n, t, r)
  }
}
function O0(e, t, n) {
  var r = pn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (up(e)) cp(t, i)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = o(l, n)
        if (((i.hasEagerState = !0), (i.eagerState = a), Ct(a, l))) {
          var s = t.interleaved
          s === null
            ? ((i.next = i), bs(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Uf(e, t, i, r)),
      n !== null && ((i = Ve()), zt(n, e, r, i), dp(n, t, r))
  }
}
function up(e) {
  var t = e.alternate
  return e === de || (t !== null && t === de)
}
function cp(e, t) {
  li = Wo = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function dp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ls(e, n)
  }
}
var bo = {
    readContext: ht,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1,
  },
  F0 = {
    readContext: ht,
    useCallback: function (e, t) {
      return (_t().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: ht,
    useEffect: Cc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        yo(4194308, 4, rp.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return yo(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return yo(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = _t()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = _t()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = I0.bind(null, de, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = _t()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Ec,
    useDebugValue: eu,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e)
    },
    useTransition: function () {
      var e = Ec(!1),
        t = e[0]
      return (e = $0.bind(null, e[1])), (_t().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        i = _t()
      if (ue) {
        if (n === void 0) throw Error(R(407))
        n = n()
      } else {
        if (((n = t()), Ne === null)) throw Error(R(349))
        An & 30 || Yf(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (i.queue = o),
        Cc(Gf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ji(9, qf.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = _t(),
        t = Ne.identifierPrefix
      if (ue) {
        var n = At,
          r = Ft
        ;(n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Ci++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = D0++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  A0 = {
    readContext: ht,
    useCallback: op,
    useContext: ht,
    useEffect: Js,
    useImperativeHandle: ip,
    useInsertionEffect: tp,
    useLayoutEffect: np,
    useMemo: lp,
    useReducer: Xl,
    useRef: ep,
    useState: function () {
      return Xl(Pi)
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      var t = mt()
      return ap(t, Ee.memoizedState, e)
    },
    useTransition: function () {
      var e = Xl(Pi)[0],
        t = mt().memoizedState
      return [e, t]
    },
    useMutableSource: Kf,
    useSyncExternalStore: Zf,
    useId: sp,
    unstable_isNewReconciler: !1,
  },
  U0 = {
    readContext: ht,
    useCallback: op,
    useContext: ht,
    useEffect: Js,
    useImperativeHandle: ip,
    useInsertionEffect: tp,
    useLayoutEffect: np,
    useMemo: lp,
    useReducer: Jl,
    useRef: ep,
    useState: function () {
      return Jl(Pi)
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      var t = mt()
      return Ee === null ? (t.memoizedState = e) : ap(t, Ee.memoizedState, e)
    },
    useTransition: function () {
      var e = Jl(Pi)[0],
        t = mt().memoizedState
      return [e, t]
    },
    useMutableSource: Kf,
    useSyncExternalStore: Zf,
    useId: sp,
    unstable_isNewReconciler: !1,
  }
function Er(e, t) {
  try {
    var n = '',
      r = t
    do (n += hm(r)), (r = r.return)
    while (r)
    var i = n
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function ea(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function ba(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var B0 = typeof WeakMap == 'function' ? WeakMap : Map
function fp(e, t, n) {
  ;(n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Ko || ((Ko = !0), (ts = r)), ba(e, t)
    }),
    n
  )
}
function pp(e, t, n) {
  ;(n = Ut(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        ba(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        ba(e, t),
          typeof r != 'function' &&
            (fn === null ? (fn = new Set([this])) : fn.add(this))
        var l = t.stack
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' })
      }),
    n
  )
}
function Pc(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new B0()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = tg.bind(null, e, t, n)), t.then(e, e))
}
function jc(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Rc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ut(-1, 1)), (t.tag = 2), dn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var H0 = bt.ReactCurrentOwner,
  Ye = !1
function He(e, t, n, r) {
  t.child = e === null ? bf(t, null, n, r) : kr(t, e.child, n, r)
}
function _c(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    yr(t, i),
    (r = Gs(e, t, n, r, o, i)),
    (n = Xs()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Wt(e, t, i))
      : (ue && n && As(t), (t.flags |= 1), He(e, t, r, i), t.child)
  )
}
function Tc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !su(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), hp(e, t, o, r, i))
      : ((e = So(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : wi), n(l, r) && e.ref === t.ref)
    )
      return Wt(e, t, i)
  }
  return (
    (t.flags |= 1),
    (e = hn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function hp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if (wi(o, r) && e.ref === t.ref)
      if (((Ye = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ye = !0)
      else return (t.lanes = e.lanes), Wt(e, t, i)
  }
  return Qa(e, t, n, r, i)
}
function mp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(ur, tt),
        (tt |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ie(ur, tt),
          (tt |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ie(ur, tt),
        (tt |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ie(ur, tt),
      (tt |= r)
  return He(e, t, i, n), t.child
}
function gp(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Qa(e, t, n, r, i) {
  var o = Ge(n) ? On : Be.current
  return (
    (o = xr(t, o)),
    yr(t, i),
    (n = Gs(e, t, n, r, o, i)),
    (r = Xs()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Wt(e, t, i))
      : (ue && r && As(t), (t.flags |= 1), He(e, t, n, i), t.child)
  )
}
function Lc(e, t, n, r, i) {
  if (Ge(n)) {
    var o = !0
    Oo(t)
  } else o = !1
  if ((yr(t, i), t.stateNode === null))
    vo(e, t), Vf(t, n, r), Wa(t, n, r, i), (r = !0)
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps
    l.props = a
    var s = l.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = ht(u))
      : ((u = Ge(n) ? On : Be.current), (u = xr(t, u)))
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == 'function' || typeof l.getSnapshotBeforeUpdate == 'function'
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((a !== r || s !== u) && kc(t, l, r, u)),
      (tn = !1)
    var h = t.memoizedState
    ;(l.state = h),
      Ho(t, r, l, i),
      (s = t.memoizedState),
      a !== r || h !== s || qe.current || tn
        ? (typeof c == 'function' && (Va(t, n, c, r), (s = t.memoizedState)),
          (a = tn || Sc(t, n, a, r, h, s, u))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(l = t.stateNode),
      Bf(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : vt(t.type, a)),
      (l.props = u),
      (p = t.pendingProps),
      (h = l.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = ht(s))
        : ((s = Ge(n) ? On : Be.current), (s = xr(t, s)))
    var v = n.getDerivedStateFromProps
    ;(c =
      typeof v == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((a !== p || h !== s) && kc(t, l, r, s)),
      (tn = !1),
      (h = t.memoizedState),
      (l.state = h),
      Ho(t, r, l, i)
    var S = t.memoizedState
    a !== p || h !== S || qe.current || tn
      ? (typeof v == 'function' && (Va(t, n, v, r), (S = t.memoizedState)),
        (u = tn || Sc(t, n, u, r, h, S, s) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, S, s),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, S, s)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (l.props = r),
        (l.state = S),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Ka(e, t, n, r, o, i)
}
function Ka(e, t, n, r, i, o) {
  gp(e, t)
  var l = (t.flags & 128) !== 0
  if (!r && !l) return i && gc(t, n, !1), Wt(e, t, o)
  ;(r = t.stateNode), (H0.current = t)
  var a =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = kr(t, e.child, null, o)), (t.child = kr(t, null, a, o)))
      : He(e, t, a, o),
    (t.memoizedState = r.state),
    i && gc(t, n, !0),
    t.child
  )
}
function yp(e) {
  var t = e.stateNode
  t.pendingContext
    ? mc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && mc(e, t.context, !1),
    Ks(e, t.containerInfo)
}
function Nc(e, t, n, r, i) {
  return Sr(), Bs(i), (t.flags |= 256), He(e, t, n, r), t.child
}
var Za = { dehydrated: null, treeContext: null, retryLane: 0 }
function Ya(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function vp(e, t, n) {
  var r = t.pendingProps,
    i = ce.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    a
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ie(ce, i & 1),
    e === null)
  )
    return (
      Ba(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = pl(l, r, 0, null)),
              (e = Mn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ya(n)),
              (t.memoizedState = Za),
              e)
            : tu(t, l))
    )
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return V0(e, t, l, r, a, i, n)
  if (o) {
    ;(o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling)
    var s = { mode: 'hidden', children: r.children }
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = hn(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = hn(a, o)) : ((o = Mn(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ya(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Za),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = hn(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function tu(e, t) {
  return (
    (t = pl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function ro(e, t, n, r) {
  return (
    r !== null && Bs(r),
    kr(t, e.child, null, n),
    (e = tu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function V0(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ea(Error(R(422)))), ro(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = pl({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = Mn(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && kr(t, e.child, null, l),
        (t.child.memoizedState = Ya(l)),
        (t.memoizedState = Za),
        o)
  if (!(t.mode & 1)) return ro(e, t, l, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst
    return (r = a), (o = Error(R(419))), (r = ea(o, r, void 0)), ro(e, t, l, r)
  }
  if (((a = (l & e.childLanes) !== 0), Ye || a)) {
    if (((r = Ne), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Vt(e, i), zt(r, e, i, -1))
    }
    return au(), (r = ea(Error(R(421)))), ro(e, t, l, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ng.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (nt = cn(i.nextSibling)),
      (rt = t),
      (ue = !0),
      (St = null),
      e !== null &&
        ((ut[ct++] = Ft),
        (ut[ct++] = At),
        (ut[ct++] = Fn),
        (Ft = e.id),
        (At = e.overflow),
        (Fn = t)),
      (t = tu(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Mc(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Ha(e.return, t, n)
}
function ta(e, t, n, r, i) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i))
}
function wp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((He(e, t, r.children, n), (r = ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mc(e, n, t)
        else if (e.tag === 19) Mc(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((ie(ce, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Vo(e) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ta(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Vo(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        ta(t, !0, n, null, o)
        break
      case 'together':
        ta(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function vo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Wt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Un |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(R(153))
  if (t.child !== null) {
    for (
      e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = hn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function W0(e, t, n) {
  switch (t.tag) {
    case 3:
      yp(t), Sr()
      break
    case 5:
      Qf(t)
      break
    case 1:
      Ge(t.type) && Oo(t)
      break
    case 4:
      Ks(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      ie(Uo, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? vp(e, t, n)
          : (ie(ce, ce.current & 1),
            (e = Wt(e, t, n)),
            e !== null ? e.sibling : null)
      ie(ce, ce.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return wp(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ie(ce, ce.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), mp(e, t, n)
  }
  return Wt(e, t, n)
}
var xp, qa, Sp, kp
xp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
qa = function () {}
Sp = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), Rn(Mt.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = va(e, i)), (r = va(e, r)), (o = [])
        break
      case 'select':
        ;(i = fe({}, i, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(i = Sa(e, i)), (r = Sa(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = $o)
    }
    za(n, r)
    var l
    n = null
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var a = i[u]
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (fi.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
    for (u in r) {
      var s = r[u]
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''))
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]))
          } else n || (o || (o = []), o.push(u, n)), (n = s)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(u, s))
            : u === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (o = o || []).push(u, '' + s)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (fi.hasOwnProperty(u)
                ? (s != null && u === 'onScroll' && oe('scroll', e),
                  o || a === s || (o = []))
                : (o = o || []).push(u, s))
    }
    n && (o = o || []).push('style', n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
kp = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Vr(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function Ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling)
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function b0(e, t, n) {
  var r = t.pendingProps
  switch ((Us(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ae(t), null
    case 1:
      return Ge(t.type) && Io(), Ae(t), null
    case 3:
      return (
        (r = t.stateNode),
        zr(),
        ae(qe),
        ae(Be),
        Ys(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (to(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), St !== null && (is(St), (St = null)))),
        qa(e, t),
        Ae(t),
        null
      )
    case 5:
      Zs(t)
      var i = Rn(Ei.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Sp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166))
          return Ae(t), null
        }
        if (((e = Rn(Mt.current)), to(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[Lt] = t), (r[ki] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              oe('cancel', r), oe('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              oe('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < Jr.length; i++) oe(Jr[i], r)
              break
            case 'source':
              oe('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              oe('error', r), oe('load', r)
              break
            case 'details':
              oe('toggle', r)
              break
            case 'input':
              Hu(r, o), oe('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                oe('invalid', r)
              break
            case 'textarea':
              Wu(r, o), oe('invalid', r)
          }
          za(n, o), (i = null)
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l]
              l === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      eo(r.textContent, a, e),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      eo(r.textContent, a, e),
                    (i = ['children', '' + a]))
                : fi.hasOwnProperty(l) &&
                  a != null &&
                  l === 'onScroll' &&
                  oe('scroll', r)
            }
          switch (n) {
            case 'input':
              Qi(r), Vu(r, o, !0)
              break
            case 'textarea':
              Qi(r), bu(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = $o)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(l = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Zd(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Lt] = t),
            (e[ki] = r),
            xp(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((l = Ea(n, r)), n)) {
              case 'dialog':
                oe('cancel', e), oe('close', e), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                oe('load', e), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < Jr.length; i++) oe(Jr[i], e)
                i = r
                break
              case 'source':
                oe('error', e), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                oe('error', e), oe('load', e), (i = r)
                break
              case 'details':
                oe('toggle', e), (i = r)
                break
              case 'input':
                Hu(e, r), (i = va(e, r)), oe('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = fe({}, r, { value: void 0 })),
                  oe('invalid', e)
                break
              case 'textarea':
                Wu(e, r), (i = Sa(e, r)), oe('invalid', e)
                break
              default:
                i = r
            }
            za(n, i), (a = i)
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o]
                o === 'style'
                  ? Gd(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Yd(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && pi(e, s)
                    : typeof s == 'number' && pi(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (fi.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && oe('scroll', e)
                      : s != null && Cs(e, o, s, l))
              }
            switch (n) {
              case 'input':
                Qi(e), Vu(e, r, !1)
                break
              case 'textarea':
                Qi(e), bu(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + gn(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? pr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      pr(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = $o)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return Ae(t), null
    case 6:
      if (e && t.stateNode != null) kp(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(R(166))
        if (((n = Rn(Ei.current)), Rn(Mt.current), to(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Lt] = t),
            (o = r.nodeValue !== n) && ((e = rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                eo(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  eo(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Lt] = t),
            (t.stateNode = r)
      }
      return Ae(t), null
    case 13:
      if (
        (ae(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && nt !== null && t.mode & 1 && !(t.flags & 128))
          Af(), Sr(), (t.flags |= 98560), (o = !1)
        else if (((o = to(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317))
            o[Lt] = t
          } else
            Sr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Ae(t), (o = !1)
        } else St !== null && (is(St), (St = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? Ce === 0 && (Ce = 3) : au())),
          t.updateQueue !== null && (t.flags |= 4),
          Ae(t),
          null)
    case 4:
      return (
        zr(), qa(e, t), e === null && xi(t.stateNode.containerInfo), Ae(t), null
      )
    case 10:
      return Ws(t.type._context), Ae(t), null
    case 17:
      return Ge(t.type) && Io(), Ae(t), null
    case 19:
      if ((ae(ce), (o = t.memoizedState), o === null)) return Ae(t), null
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Vr(o, !1)
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Vo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Vr(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return ie(ce, (ce.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            Se() > Cr &&
            ((t.flags |= 128), (r = !0), Vr(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Vo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Vr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !l.alternate && !ue)
            )
              return Ae(t), null
          } else
            2 * Se() - o.renderingStartTime > Cr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Vr(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Se()),
          (t.sibling = null),
          (n = ce.current),
          ie(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ae(t), null)
    case 22:
    case 23:
      return (
        lu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? tt & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ae(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(R(156, t.tag))
}
function Q0(e, t) {
  switch ((Us(t), t.tag)) {
    case 1:
      return (
        Ge(t.type) && Io(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        zr(),
        ae(qe),
        ae(Be),
        Ys(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Zs(t), null
    case 13:
      if (
        (ae(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340))
        Sr()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return ae(ce), null
    case 4:
      return zr(), null
    case 10:
      return Ws(t.type._context), null
    case 22:
    case 23:
      return lu(), null
    case 24:
      return null
    default:
      return null
  }
}
var io = !1,
  Ue = !1,
  K0 = typeof WeakSet == 'function' ? WeakSet : Set,
  M = null
function sr(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        me(e, t, r)
      }
    else n.current = null
}
function Ga(e, t, n) {
  try {
    n()
  } catch (r) {
    me(e, t, r)
  }
}
var Dc = !1
function Z0(e, t) {
  if (((Da = No), (e = Pf()), Fs(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            c = 0,
            p = e,
            h = null
          t: for (;;) {
            for (
              var v;
              p !== n || (i !== 0 && p.nodeType !== 3) || (a = l + i),
                p !== o || (r !== 0 && p.nodeType !== 3) || (s = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (h = p), (p = v)
            for (;;) {
              if (p === e) break t
              if (
                (h === n && ++u === i && (a = l),
                h === o && ++c === r && (s = l),
                (v = p.nextSibling) !== null)
              )
                break
              ;(p = h), (h = p.parentNode)
            }
            p = v
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for ($a = { focusedElem: e, selectionRange: n }, No = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e)
    else
      for (; M !== null; ) {
        t = M
        try {
          var S = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    P = S.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : vt(t.type, w),
                      P
                    )
                  f.__reactInternalSnapshotBeforeUpdate = d
                }
                break
              case 3:
                var m = t.stateNode.containerInfo
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(R(163))
            }
        } catch (E) {
          me(t, t.return, E)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (M = e)
          break
        }
        M = t.return
      }
  return (S = Dc), (Dc = !1), S
}
function ai(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && Ga(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function dl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function Xa(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function zp(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), zp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Lt], delete t[ki], delete t[Fa], delete t[T0], delete t[L0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Ep(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function $c(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ep(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Ja(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $o))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ja(e, t, n), e = e.sibling; e !== null; ) Ja(e, t, n), (e = e.sibling)
}
function es(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (es(e, t, n), e = e.sibling; e !== null; ) es(e, t, n), (e = e.sibling)
}
var De = null,
  wt = !1
function Gt(e, t, n) {
  for (n = n.child; n !== null; ) Cp(e, t, n), (n = n.sibling)
}
function Cp(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == 'function')
    try {
      Nt.onCommitFiberUnmount(rl, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Ue || sr(n, t)
    case 6:
      var r = De,
        i = wt
      ;(De = null),
        Gt(e, t, n),
        (De = r),
        (wt = i),
        De !== null &&
          (wt
            ? ((e = De),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : De.removeChild(n.stateNode))
      break
    case 18:
      De !== null &&
        (wt
          ? ((e = De),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zl(e.parentNode, n)
              : e.nodeType === 1 && Zl(e, n),
            yi(e))
          : Zl(De, n.stateNode))
      break
    case 4:
      ;(r = De),
        (i = wt),
        (De = n.stateNode.containerInfo),
        (wt = !0),
        Gt(e, t, n),
        (De = r),
        (wt = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var o = i,
            l = o.destroy
          ;(o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Ga(n, t, l),
            (i = i.next)
        } while (i !== r)
      }
      Gt(e, t, n)
      break
    case 1:
      if (
        !Ue &&
        (sr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (a) {
          me(n, t, a)
        }
      Gt(e, t, n)
      break
    case 21:
      Gt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Ue = (r = Ue) || n.memoizedState !== null), Gt(e, t, n), (Ue = r))
        : Gt(e, t, n)
      break
    default:
      Gt(e, t, n)
  }
}
function Ic(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new K0()),
      t.forEach(function (r) {
        var i = rg.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function yt(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var o = e,
          l = t,
          a = l
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ;(De = a.stateNode), (wt = !1)
              break e
            case 3:
              ;(De = a.stateNode.containerInfo), (wt = !0)
              break e
            case 4:
              ;(De = a.stateNode.containerInfo), (wt = !0)
              break e
          }
          a = a.return
        }
        if (De === null) throw Error(R(160))
        Cp(o, l, i), (De = null), (wt = !1)
        var s = i.alternate
        s !== null && (s.return = null), (i.return = null)
      } catch (u) {
        me(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pp(t, e), (t = t.sibling)
}
function Pp(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Rt(e), r & 4)) {
        try {
          ai(3, e, e.return), dl(3, e)
        } catch (w) {
          me(e, e.return, w)
        }
        try {
          ai(5, e, e.return)
        } catch (w) {
          me(e, e.return, w)
        }
      }
      break
    case 1:
      yt(t, e), Rt(e), r & 512 && n !== null && sr(n, n.return)
      break
    case 5:
      if (
        (yt(t, e),
        Rt(e),
        r & 512 && n !== null && sr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode
        try {
          pi(i, '')
        } catch (w) {
          me(e, e.return, w)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue
        if (((e.updateQueue = null), s !== null))
          try {
            a === 'input' && o.type === 'radio' && o.name != null && Qd(i, o),
              Ea(a, l)
            var u = Ea(a, o)
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                p = s[l + 1]
              c === 'style'
                ? Gd(i, p)
                : c === 'dangerouslySetInnerHTML'
                ? Yd(i, p)
                : c === 'children'
                ? pi(i, p)
                : Cs(i, c, p, u)
            }
            switch (a) {
              case 'input':
                wa(i, o)
                break
              case 'textarea':
                Kd(i, o)
                break
              case 'select':
                var h = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var v = o.value
                v != null
                  ? pr(i, !!o.multiple, v, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? pr(i, !!o.multiple, o.defaultValue, !0)
                      : pr(i, !!o.multiple, o.multiple ? [] : '', !1))
            }
            i[ki] = o
          } catch (w) {
            me(e, e.return, w)
          }
      }
      break
    case 6:
      if ((yt(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162))
        ;(i = e.stateNode), (o = e.memoizedProps)
        try {
          i.nodeValue = o
        } catch (w) {
          me(e, e.return, w)
        }
      }
      break
    case 3:
      if (
        (yt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          yi(t.containerInfo)
        } catch (w) {
          me(e, e.return, w)
        }
      break
    case 4:
      yt(t, e), Rt(e)
      break
    case 13:
      yt(t, e),
        Rt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (iu = Se())),
        r & 4 && Ic(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ue = (u = Ue) || c), yt(t, e), (Ue = u)) : yt(t, e),
        Rt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (p = M = c; M !== null; ) {
              switch (((h = M), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ai(4, h, h.return)
                  break
                case 1:
                  sr(h, h.return)
                  var S = h.stateNode
                  if (typeof S.componentWillUnmount == 'function') {
                    ;(r = h), (n = h.return)
                    try {
                      ;(t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount()
                    } catch (w) {
                      me(r, n, w)
                    }
                  }
                  break
                case 5:
                  sr(h, h.return)
                  break
                case 22:
                  if (h.memoizedState !== null) {
                    Fc(p)
                    continue
                  }
              }
              v !== null ? ((v.return = h), (M = v)) : Fc(p)
            }
            c = c.sibling
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p
              try {
                ;(i = p.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((a = p.stateNode),
                      (s = p.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (a.style.display = qd('display', l)))
              } catch (w) {
                me(e, e.return, w)
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = u ? '' : p.memoizedProps
              } catch (w) {
                me(e, e.return, w)
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            ;(p.child.return = p), (p = p.child)
            continue
          }
          if (p === e) break e
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e
            c === p && (c = null), (p = p.return)
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling)
        }
      }
      break
    case 19:
      yt(t, e), Rt(e), r & 4 && Ic(e)
      break
    case 21:
      break
    default:
      yt(t, e), Rt(e)
  }
}
function Rt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ep(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(R(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (pi(i, ''), (r.flags &= -33))
          var o = $c(e)
          es(e, o, i)
          break
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = $c(e)
          Ja(e, a, l)
          break
        default:
          throw Error(R(161))
      }
    } catch (s) {
      me(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Y0(e, t, n) {
  ;(M = e), jp(e)
}
function jp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      o = i.child
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || io
      if (!l) {
        var a = i.alternate,
          s = (a !== null && a.memoizedState !== null) || Ue
        a = io
        var u = Ue
        if (((io = l), (Ue = s) && !u))
          for (M = i; M !== null; )
            (l = M),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Ac(i)
                : s !== null
                ? ((s.return = l), (M = s))
                : Ac(i)
        for (; o !== null; ) (M = o), jp(o), (o = o.sibling)
        ;(M = i), (io = a), (Ue = u)
      }
      Oc(e)
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (M = o)) : Oc(e)
  }
}
function Oc(e) {
  for (; M !== null; ) {
    var t = M
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || dl(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Ue)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : vt(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var o = t.updateQueue
              o !== null && xc(t, o, r)
              break
            case 3:
              var l = t.updateQueue
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                xc(t, l, n)
              }
              break
            case 5:
              var a = t.stateNode
              if (n === null && t.flags & 4) {
                n = a
                var s = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus()
                    break
                  case 'img':
                    s.src && (n.src = s.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var p = c.dehydrated
                    p !== null && yi(p)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(R(163))
          }
        Ue || (t.flags & 512 && Xa(t))
      } catch (h) {
        me(t, t.return, h)
      }
    }
    if (t === e) {
      M = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (M = n)
      break
    }
    M = t.return
  }
}
function Fc(e) {
  for (; M !== null; ) {
    var t = M
    if (t === e) {
      M = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (M = n)
      break
    }
    M = t.return
  }
}
function Ac(e) {
  for (; M !== null; ) {
    var t = M
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            dl(4, t)
          } catch (s) {
            me(t, n, s)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (s) {
              me(t, i, s)
            }
          }
          var o = t.return
          try {
            Xa(t)
          } catch (s) {
            me(t, o, s)
          }
          break
        case 5:
          var l = t.return
          try {
            Xa(t)
          } catch (s) {
            me(t, l, s)
          }
      }
    } catch (s) {
      me(t, t.return, s)
    }
    if (t === e) {
      M = null
      break
    }
    var a = t.sibling
    if (a !== null) {
      ;(a.return = t.return), (M = a)
      break
    }
    M = t.return
  }
}
var q0 = Math.ceil,
  Qo = bt.ReactCurrentDispatcher,
  nu = bt.ReactCurrentOwner,
  pt = bt.ReactCurrentBatchConfig,
  X = 0,
  Ne = null,
  ze = null,
  $e = 0,
  tt = 0,
  ur = wn(0),
  Ce = 0,
  Ri = null,
  Un = 0,
  fl = 0,
  ru = 0,
  si = null,
  Ze = null,
  iu = 0,
  Cr = 1 / 0,
  $t = null,
  Ko = !1,
  ts = null,
  fn = null,
  oo = !1,
  ln = null,
  Zo = 0,
  ui = 0,
  ns = null,
  wo = -1,
  xo = 0
function Ve() {
  return X & 6 ? Se() : wo !== -1 ? wo : (wo = Se())
}
function pn(e) {
  return e.mode & 1
    ? X & 2 && $e !== 0
      ? $e & -$e
      : M0.transition !== null
      ? (xo === 0 && (xo = cf()), xo)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yf(e.type))),
        e)
    : 1
}
function zt(e, t, n, r) {
  if (50 < ui) throw ((ui = 0), (ns = null), Error(R(185)))
  Di(e, n, r),
    (!(X & 2) || e !== Ne) &&
      (e === Ne && (!(X & 2) && (fl |= n), Ce === 4 && rn(e, $e)),
      Xe(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((Cr = Se() + 500), sl && xn()))
}
function Xe(e, t) {
  var n = e.callbackNode
  Mm(e, t)
  var r = Lo(e, e === Ne ? $e : 0)
  if (r === 0)
    n !== null && Zu(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Zu(n), t === 1))
      e.tag === 0 ? N0(Uc.bind(null, e)) : If(Uc.bind(null, e)),
        R0(function () {
          !(X & 6) && xn()
        }),
        (n = null)
    else {
      switch (df(r)) {
        case 1:
          n = Ts
          break
        case 4:
          n = sf
          break
        case 16:
          n = To
          break
        case 536870912:
          n = uf
          break
        default:
          n = To
      }
      n = $p(n, Rp.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Rp(e, t) {
  if (((wo = -1), (xo = 0), X & 6)) throw Error(R(327))
  var n = e.callbackNode
  if (vr() && e.callbackNode !== n) return null
  var r = Lo(e, e === Ne ? $e : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Yo(e, r)
  else {
    t = r
    var i = X
    X |= 2
    var o = Tp()
    ;(Ne !== e || $e !== t) && (($t = null), (Cr = Se() + 500), Nn(e, t))
    do
      try {
        J0()
        break
      } catch (a) {
        _p(e, a)
      }
    while (1)
    Vs(),
      (Qo.current = o),
      (X = i),
      ze !== null ? (t = 0) : ((Ne = null), ($e = 0), (t = Ce))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = _a(e)), i !== 0 && ((r = i), (t = rs(e, i)))), t === 1)
    )
      throw ((n = Ri), Nn(e, 0), rn(e, r), Xe(e, Se()), n)
    if (t === 6) rn(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !G0(i) &&
          ((t = Yo(e, r)),
          t === 2 && ((o = _a(e)), o !== 0 && ((r = o), (t = rs(e, o)))),
          t === 1))
      )
        throw ((n = Ri), Nn(e, 0), rn(e, r), Xe(e, Se()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345))
        case 2:
          Cn(e, Ze, $t)
          break
        case 3:
          if (
            (rn(e, r), (r & 130023424) === r && ((t = iu + 500 - Se()), 10 < t))
          ) {
            if (Lo(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = Oa(Cn.bind(null, e, Ze, $t), t)
            break
          }
          Cn(e, Ze, $t)
          break
        case 4:
          if ((rn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - kt(r)
            ;(o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o)
          }
          if (
            ((r = i),
            (r = Se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * q0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Oa(Cn.bind(null, e, Ze, $t), r)
            break
          }
          Cn(e, Ze, $t)
          break
        case 5:
          Cn(e, Ze, $t)
          break
        default:
          throw Error(R(329))
      }
    }
  }
  return Xe(e, Se()), e.callbackNode === n ? Rp.bind(null, e) : null
}
function rs(e, t) {
  var n = si
  return (
    e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
    (e = Yo(e, t)),
    e !== 2 && ((t = Ze), (Ze = n), t !== null && is(t)),
    e
  )
}
function is(e) {
  Ze === null ? (Ze = e) : Ze.push.apply(Ze, e)
}
function G0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot
          i = i.value
          try {
            if (!Ct(o(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function rn(e, t) {
  for (
    t &= ~ru,
      t &= ~fl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - kt(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Uc(e) {
  if (X & 6) throw Error(R(327))
  vr()
  var t = Lo(e, 0)
  if (!(t & 1)) return Xe(e, Se()), null
  var n = Yo(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = _a(e)
    r !== 0 && ((t = r), (n = rs(e, r)))
  }
  if (n === 1) throw ((n = Ri), Nn(e, 0), rn(e, t), Xe(e, Se()), n)
  if (n === 6) throw Error(R(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Cn(e, Ze, $t),
    Xe(e, Se()),
    null
  )
}
function ou(e, t) {
  var n = X
  X |= 1
  try {
    return e(t)
  } finally {
    ;(X = n), X === 0 && ((Cr = Se() + 500), sl && xn())
  }
}
function Bn(e) {
  ln !== null && ln.tag === 0 && !(X & 6) && vr()
  var t = X
  X |= 1
  var n = pt.transition,
    r = ee
  try {
    if (((pt.transition = null), (ee = 1), e)) return e()
  } finally {
    ;(ee = r), (pt.transition = n), (X = t), !(X & 6) && xn()
  }
}
function lu() {
  ;(tt = ur.current), ae(ur)
}
function Nn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), j0(n)), ze !== null))
    for (n = ze.return; n !== null; ) {
      var r = n
      switch ((Us(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Io()
          break
        case 3:
          zr(), ae(qe), ae(Be), Ys()
          break
        case 5:
          Zs(r)
          break
        case 4:
          zr()
          break
        case 13:
          ae(ce)
          break
        case 19:
          ae(ce)
          break
        case 10:
          Ws(r.type._context)
          break
        case 22:
        case 23:
          lu()
      }
      n = n.return
    }
  if (
    ((Ne = e),
    (ze = e = hn(e.current, null)),
    ($e = tt = t),
    (Ce = 0),
    (Ri = null),
    (ru = fl = Un = 0),
    (Ze = si = null),
    jn !== null)
  ) {
    for (t = 0; t < jn.length; t++)
      if (((n = jn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var l = o.next
          ;(o.next = i), (r.next = l)
        }
        n.pending = r
      }
    jn = null
  }
  return e
}
function _p(e, t) {
  do {
    var n = ze
    try {
      if ((Vs(), (go.current = bo), Wo)) {
        for (var r = de.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        Wo = !1
      }
      if (
        ((An = 0),
        (_e = Ee = de = null),
        (li = !1),
        (Ci = 0),
        (nu.current = null),
        n === null || n.return === null)
      ) {
        ;(Ce = 1), (Ri = t), (ze = null)
        break
      }
      e: {
        var o = e,
          l = n.return,
          a = n,
          s = t
        if (
          ((t = $e),
          (a.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var u = s,
            c = a,
            p = c.tag
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = c.alternate
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var v = jc(l)
          if (v !== null) {
            ;(v.flags &= -257),
              Rc(v, l, a, o, t),
              v.mode & 1 && Pc(o, u, t),
              (t = v),
              (s = u)
            var S = t.updateQueue
            if (S === null) {
              var w = new Set()
              w.add(s), (t.updateQueue = w)
            } else S.add(s)
            break e
          } else {
            if (!(t & 1)) {
              Pc(o, u, t), au()
              break e
            }
            s = Error(R(426))
          }
        } else if (ue && a.mode & 1) {
          var P = jc(l)
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Rc(P, l, a, o, t),
              Bs(Er(s, a))
            break e
          }
        }
        ;(o = s = Er(s, a)),
          Ce !== 4 && (Ce = 2),
          si === null ? (si = [o]) : si.push(o),
          (o = l)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var f = fp(o, s, t)
              wc(o, f)
              break e
            case 1:
              a = s
              var d = o.type,
                m = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (fn === null || !fn.has(m))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var E = pp(o, a, t)
                wc(o, E)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      Np(n)
    } catch (j) {
      ;(t = j), ze === n && n !== null && (ze = n = n.return)
      continue
    }
    break
  } while (1)
}
function Tp() {
  var e = Qo.current
  return (Qo.current = bo), e === null ? bo : e
}
function au() {
  ;(Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    Ne === null || (!(Un & 268435455) && !(fl & 268435455)) || rn(Ne, $e)
}
function Yo(e, t) {
  var n = X
  X |= 2
  var r = Tp()
  ;(Ne !== e || $e !== t) && (($t = null), Nn(e, t))
  do
    try {
      X0()
      break
    } catch (i) {
      _p(e, i)
    }
  while (1)
  if ((Vs(), (X = n), (Qo.current = r), ze !== null)) throw Error(R(261))
  return (Ne = null), ($e = 0), Ce
}
function X0() {
  for (; ze !== null; ) Lp(ze)
}
function J0() {
  for (; ze !== null && !Em(); ) Lp(ze)
}
function Lp(e) {
  var t = Dp(e.alternate, e, tt)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Np(e) : (ze = t),
    (nu.current = null)
}
function Np(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Q0(n, t)), n !== null)) {
        ;(n.flags &= 32767), (ze = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Ce = 6), (ze = null)
        return
      }
    } else if (((n = b0(n, t, tt)), n !== null)) {
      ze = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      ze = t
      return
    }
    ze = t = e
  } while (t !== null)
  Ce === 0 && (Ce = 5)
}
function Cn(e, t, n) {
  var r = ee,
    i = pt.transition
  try {
    ;(pt.transition = null), (ee = 1), eg(e, t, n, r)
  } finally {
    ;(pt.transition = i), (ee = r)
  }
  return null
}
function eg(e, t, n, r) {
  do vr()
  while (ln !== null)
  if (X & 6) throw Error(R(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (Dm(e, o),
    e === Ne && ((ze = Ne = null), ($e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      oo ||
      ((oo = !0),
      $p(To, function () {
        return vr(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = pt.transition), (pt.transition = null)
    var l = ee
    ee = 1
    var a = X
    ;(X |= 4),
      (nu.current = null),
      Z0(e, n),
      Pp(n, e),
      x0($a),
      (No = !!Da),
      ($a = Da = null),
      (e.current = n),
      Y0(n),
      Cm(),
      (X = a),
      (ee = l),
      (pt.transition = o)
  } else e.current = n
  if (
    (oo && ((oo = !1), (ln = e), (Zo = i)),
    (o = e.pendingLanes),
    o === 0 && (fn = null),
    Rm(n.stateNode),
    Xe(e, Se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (Ko) throw ((Ko = !1), (e = ts), (ts = null), e)
  return (
    Zo & 1 && e.tag !== 0 && vr(),
    (o = e.pendingLanes),
    o & 1 ? (e === ns ? ui++ : ((ui = 0), (ns = e))) : (ui = 0),
    xn(),
    null
  )
}
function vr() {
  if (ln !== null) {
    var e = df(Zo),
      t = pt.transition,
      n = ee
    try {
      if (((pt.transition = null), (ee = 16 > e ? 16 : e), ln === null))
        var r = !1
      else {
        if (((e = ln), (ln = null), (Zo = 0), X & 6)) throw Error(R(331))
        var i = X
        for (X |= 4, M = e.current; M !== null; ) {
          var o = M,
            l = o.child
          if (M.flags & 16) {
            var a = o.deletions
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s]
                for (M = u; M !== null; ) {
                  var c = M
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ai(8, c, o)
                  }
                  var p = c.child
                  if (p !== null) (p.return = c), (M = p)
                  else
                    for (; M !== null; ) {
                      c = M
                      var h = c.sibling,
                        v = c.return
                      if ((zp(c), c === u)) {
                        M = null
                        break
                      }
                      if (h !== null) {
                        ;(h.return = v), (M = h)
                        break
                      }
                      M = v
                    }
                }
              }
              var S = o.alternate
              if (S !== null) {
                var w = S.child
                if (w !== null) {
                  S.child = null
                  do {
                    var P = w.sibling
                    ;(w.sibling = null), (w = P)
                  } while (w !== null)
                }
              }
              M = o
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (M = l)
          else
            e: for (; M !== null; ) {
              if (((o = M), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ai(9, o, o.return)
                }
              var f = o.sibling
              if (f !== null) {
                ;(f.return = o.return), (M = f)
                break e
              }
              M = o.return
            }
        }
        var d = e.current
        for (M = d; M !== null; ) {
          l = M
          var m = l.child
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (M = m)
          else
            e: for (l = d; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dl(9, a)
                  }
                } catch (j) {
                  me(a, a.return, j)
                }
              if (a === l) {
                M = null
                break e
              }
              var E = a.sibling
              if (E !== null) {
                ;(E.return = a.return), (M = E)
                break e
              }
              M = a.return
            }
        }
        if (
          ((X = i), xn(), Nt && typeof Nt.onPostCommitFiberRoot == 'function')
        )
          try {
            Nt.onPostCommitFiberRoot(rl, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(ee = n), (pt.transition = t)
    }
  }
  return !1
}
function Bc(e, t, n) {
  ;(t = Er(n, t)),
    (t = fp(e, t, 1)),
    (e = dn(e, t, 1)),
    (t = Ve()),
    e !== null && (Di(e, 1, t), Xe(e, t))
}
function me(e, t, n) {
  if (e.tag === 3) Bc(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bc(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (fn === null || !fn.has(r)))
        ) {
          ;(e = Er(n, e)),
            (e = pp(t, e, 1)),
            (t = dn(t, e, 1)),
            (e = Ve()),
            t !== null && (Di(t, 1, e), Xe(t, e))
          break
        }
      }
      t = t.return
    }
}
function tg(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ne === e &&
      ($e & n) === n &&
      (Ce === 4 || (Ce === 3 && ($e & 130023424) === $e && 500 > Se() - iu)
        ? Nn(e, 0)
        : (ru |= n)),
    Xe(e, t)
}
function Mp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Yi), (Yi <<= 1), !(Yi & 130023424) && (Yi = 4194304))
      : (t = 1))
  var n = Ve()
  ;(e = Vt(e, t)), e !== null && (Di(e, t, n), Xe(e, n))
}
function ng(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Mp(e, n)
}
function rg(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(R(314))
  }
  r !== null && r.delete(t), Mp(e, n)
}
var Dp
Dp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || qe.current) Ye = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ye = !1), W0(e, t, n)
      Ye = !!(e.flags & 131072)
    }
  else (Ye = !1), ue && t.flags & 1048576 && Of(t, Ao, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      vo(e, t), (e = t.pendingProps)
      var i = xr(t, Be.current)
      yr(t, n), (i = Gs(null, t, r, e, i, n))
      var o = Xs()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ge(r) ? ((o = !0), Oo(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Qs(t),
            (i.updater = ul),
            (t.stateNode = i),
            (i._reactInternals = t),
            Wa(t, r, e, n),
            (t = Ka(null, t, r, !0, o, n)))
          : ((t.tag = 0), ue && o && As(t), He(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (vo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = og(r)),
          (e = vt(r, e)),
          i)
        ) {
          case 0:
            t = Qa(null, t, r, e, n)
            break e
          case 1:
            t = Lc(null, t, r, e, n)
            break e
          case 11:
            t = _c(null, t, r, e, n)
            break e
          case 14:
            t = Tc(null, t, r, vt(r.type, e), n)
            break e
        }
        throw Error(R(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        Qa(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        Lc(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((yp(t), e === null)) throw Error(R(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Bf(e, t),
          Ho(t, r, null, n)
        var l = t.memoizedState
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(i = Er(Error(R(423)), t)), (t = Nc(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Er(Error(R(424)), t)), (t = Nc(e, t, r, n, i))
            break e
          } else
            for (
              nt = cn(t.stateNode.containerInfo.firstChild),
                rt = t,
                ue = !0,
                St = null,
                n = bf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Sr(), r === i)) {
            t = Wt(e, t, n)
            break e
          }
          He(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Qf(t),
        e === null && Ba(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Ia(r, i) ? (l = null) : o !== null && Ia(r, o) && (t.flags |= 32),
        gp(e, t),
        He(e, t, l, n),
        t.child
      )
    case 6:
      return e === null && Ba(t), null
    case 13:
      return vp(e, t, n)
    case 4:
      return (
        Ks(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = kr(t, null, r, n)) : He(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        _c(e, t, r, i, n)
      )
    case 7:
      return He(e, t, t.pendingProps, n), t.child
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          ie(Uo, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Ct(o.value, l)) {
            if (o.children === i.children && !qe.current) {
              t = Wt(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies
              if (a !== null) {
                l = o.child
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      ;(s = Ut(-1, n & -n)), (s.tag = 2)
                      var u = o.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s)
                      }
                    }
                    ;(o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Ha(o.return, n, t),
                      (a.lanes |= n)
                    break
                  }
                  s = s.next
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(R(341))
                ;(l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Ha(l, n, t),
                  (l = o.sibling)
              } else l = o.child
              if (l !== null) l.return = o
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null
                    break
                  }
                  if (((o = l.sibling), o !== null)) {
                    ;(o.return = l.return), (l = o)
                    break
                  }
                  l = l.return
                }
              o = l
            }
        He(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        yr(t, n),
        (i = ht(i)),
        (r = r(i)),
        (t.flags |= 1),
        He(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (i = vt(r, t.pendingProps)),
        (i = vt(r.type, i)),
        Tc(e, t, r, i, n)
      )
    case 15:
      return hp(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        vo(e, t),
        (t.tag = 1),
        Ge(r) ? ((e = !0), Oo(t)) : (e = !1),
        yr(t, n),
        Vf(t, r, i),
        Wa(t, r, i, n),
        Ka(null, t, r, !0, e, n)
      )
    case 19:
      return wp(e, t, n)
    case 22:
      return mp(e, t, n)
  }
  throw Error(R(156, t.tag))
}
function $p(e, t) {
  return af(e, t)
}
function ig(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function ft(e, t, n, r) {
  return new ig(e, t, n, r)
}
function su(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function og(e) {
  if (typeof e == 'function') return su(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === js)) return 11
    if (e === Rs) return 14
  }
  return 2
}
function hn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = ft(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function So(e, t, n, r, i, o) {
  var l = 2
  if (((r = e), typeof e == 'function')) su(e) && (l = 1)
  else if (typeof e == 'string') l = 5
  else
    e: switch (e) {
      case Jn:
        return Mn(n.children, i, o, t)
      case Ps:
        ;(l = 8), (i |= 8)
        break
      case ha:
        return (e = ft(12, n, t, i | 2)), (e.elementType = ha), (e.lanes = o), e
      case ma:
        return (e = ft(13, n, t, i)), (e.elementType = ma), (e.lanes = o), e
      case ga:
        return (e = ft(19, n, t, i)), (e.elementType = ga), (e.lanes = o), e
      case Vd:
        return pl(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Bd:
              l = 10
              break e
            case Hd:
              l = 9
              break e
            case js:
              l = 11
              break e
            case Rs:
              l = 14
              break e
            case en:
              ;(l = 16), (r = null)
              break e
          }
        throw Error(R(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = ft(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function Mn(e, t, n, r) {
  return (e = ft(7, e, r, t)), (e.lanes = n), e
}
function pl(e, t, n, r) {
  return (
    (e = ft(22, e, r, t)),
    (e.elementType = Vd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function na(e, t, n) {
  return (e = ft(6, e, null, t)), (e.lanes = n), e
}
function ra(e, t, n) {
  return (
    (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function lg(e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ol(0)),
    (this.expirationTimes = Ol(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ol(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function uu(e, t, n, r, i, o, l, a, s) {
  return (
    (e = new lg(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ft(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qs(o),
    e
  )
}
function ag(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Xn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function Ip(e) {
  if (!e) return yn
  e = e._reactInternals
  e: {
    if (Qn(e) !== e || e.tag !== 1) throw Error(R(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(R(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ge(n)) return $f(e, n, t)
  }
  return t
}
function Op(e, t, n, r, i, o, l, a, s) {
  return (
    (e = uu(n, r, !0, e, i, o, l, a, s)),
    (e.context = Ip(null)),
    (n = e.current),
    (r = Ve()),
    (i = pn(n)),
    (o = Ut(r, i)),
    (o.callback = t ?? null),
    dn(n, o, i),
    (e.current.lanes = i),
    Di(e, i, r),
    Xe(e, r),
    e
  )
}
function hl(e, t, n, r) {
  var i = t.current,
    o = Ve(),
    l = pn(i)
  return (
    (n = Ip(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ut(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dn(i, t, l)),
    e !== null && (zt(e, i, l, o), mo(e, i, l)),
    l
  )
}
function qo(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Hc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function cu(e, t) {
  Hc(e, t), (e = e.alternate) && Hc(e, t)
}
function sg() {
  return null
}
var Fp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function du(e) {
  this._internalRoot = e
}
ml.prototype.render = du.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(R(409))
  hl(e, t, null, null)
}
ml.prototype.unmount = du.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Bn(function () {
      hl(null, e, null, null)
    }),
      (t[Ht] = null)
  }
}
function ml(e) {
  this._internalRoot = e
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hf()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++);
    nn.splice(n, 0, e), n === 0 && gf(e)
  }
}
function fu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Vc() {}
function ug(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = qo(l)
        o.call(u)
      }
    }
    var l = Op(t, r, e, 0, null, !1, !1, '', Vc)
    return (
      (e._reactRootContainer = l),
      (e[Ht] = l.current),
      xi(e.nodeType === 8 ? e.parentNode : e),
      Bn(),
      l
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var a = r
    r = function () {
      var u = qo(s)
      a.call(u)
    }
  }
  var s = uu(e, 0, !1, null, null, !1, !1, '', Vc)
  return (
    (e._reactRootContainer = s),
    (e[Ht] = s.current),
    xi(e.nodeType === 8 ? e.parentNode : e),
    Bn(function () {
      hl(t, s, n, r)
    }),
    s
  )
}
function yl(e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var l = o
    if (typeof i == 'function') {
      var a = i
      i = function () {
        var s = qo(l)
        a.call(s)
      }
    }
    hl(t, l, e, i)
  } else l = ug(n, t, e, i, r)
  return qo(l)
}
ff = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Xr(t.pendingLanes)
        n !== 0 &&
          (Ls(t, n | 1), Xe(t, Se()), !(X & 6) && ((Cr = Se() + 500), xn()))
      }
      break
    case 13:
      Bn(function () {
        var r = Vt(e, 1)
        if (r !== null) {
          var i = Ve()
          zt(r, e, 1, i)
        }
      }),
        cu(e, 1)
  }
}
Ns = function (e) {
  if (e.tag === 13) {
    var t = Vt(e, 134217728)
    if (t !== null) {
      var n = Ve()
      zt(t, e, 134217728, n)
    }
    cu(e, 134217728)
  }
}
pf = function (e) {
  if (e.tag === 13) {
    var t = pn(e),
      n = Vt(e, t)
    if (n !== null) {
      var r = Ve()
      zt(n, e, t, r)
    }
    cu(e, t)
  }
}
hf = function () {
  return ee
}
mf = function (e, t) {
  var n = ee
  try {
    return (ee = e), t()
  } finally {
    ee = n
  }
}
Pa = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((wa(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var i = al(r)
            if (!i) throw Error(R(90))
            bd(r), wa(r, i)
          }
        }
      }
      break
    case 'textarea':
      Kd(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && pr(e, !!n.multiple, t, !1)
  }
}
ef = ou
tf = Bn
var cg = { usingClientEntryPoint: !1, Events: [Ii, rr, al, Xd, Jd, ou] },
  Wr = {
    findFiberByHostInstance: Pn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  dg = {
    bundleType: Wr.bundleType,
    version: Wr.version,
    rendererPackageName: Wr.rendererPackageName,
    rendererConfig: Wr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = of(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Wr.findFiberByHostInstance || sg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var lo = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!lo.isDisabled && lo.supportsFiber)
    try {
      ;(rl = lo.inject(dg)), (Nt = lo)
    } catch {}
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cg
ot.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!fu(t)) throw Error(R(200))
  return ag(e, t, null, n)
}
ot.createRoot = function (e, t) {
  if (!fu(e)) throw Error(R(299))
  var n = !1,
    r = '',
    i = Fp
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = uu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ht] = t.current),
    xi(e.nodeType === 8 ? e.parentNode : e),
    new du(t)
  )
}
ot.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(R(188))
      : ((e = Object.keys(e).join(',')), Error(R(268, e)))
  return (e = of(t)), (e = e === null ? null : e.stateNode), e
}
ot.flushSync = function (e) {
  return Bn(e)
}
ot.hydrate = function (e, t, n) {
  if (!gl(t)) throw Error(R(200))
  return yl(null, e, t, !0, n)
}
ot.hydrateRoot = function (e, t, n) {
  if (!fu(e)) throw Error(R(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    l = Fp
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Op(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Ht] = t.current),
    xi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new ml(t)
}
ot.render = function (e, t, n) {
  if (!gl(t)) throw Error(R(200))
  return yl(null, e, t, !1, n)
}
ot.unmountComponentAtNode = function (e) {
  if (!gl(e)) throw Error(R(40))
  return e._reactRootContainer
    ? (Bn(function () {
        yl(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Ht] = null)
        })
      }),
      !0)
    : !1
}
ot.unstable_batchedUpdates = ou
ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!gl(n)) throw Error(R(200))
  if (e == null || e._reactInternals === void 0) throw Error(R(38))
  return yl(e, t, n, !1, r)
}
ot.version = '18.2.0-next-9e3b772b8-20220608'
function Ap() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ap)
    } catch (e) {
      console.error(e)
    }
}
Ap(), (Id.exports = ot)
var pu = Id.exports
const fg = Cd(pu),
  pg = Ed({ __proto__: null, default: fg }, [pu])
var Wc = pu
;(fa.createRoot = Wc.createRoot), (fa.hydrateRoot = Wc.hydrateRoot)
/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ge() {
  return (
    (ge = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    ge.apply(this, arguments)
  )
}
var xe
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(xe || (xe = {}))
const bc = 'popstate'
function hg(e) {
  e === void 0 && (e = {})
  function t(r, i) {
    let { pathname: o, search: l, hash: a } = r.location
    return _i(
      '',
      { pathname: o, search: l, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    )
  }
  function n(r, i) {
    return typeof i == 'string' ? i : Fi(i)
  }
  return gg(t, n, null, e)
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Hn(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function mg() {
  return Math.random().toString(36).substr(2, 8)
}
function Qc(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function _i(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ge(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Qt(t) : t,
      { state: n, key: (t && t.key) || r || mg() }
    )
  )
}
function Fi(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function Qt(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e)
  }
  return t
}
function gg(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    a = xe.Pop,
    s = null,
    u = c()
  u == null && ((u = 0), l.replaceState(ge({}, l.state, { idx: u }), ''))
  function c() {
    return (l.state || { idx: null }).idx
  }
  function p() {
    a = xe.Pop
    let P = c(),
      f = P == null ? null : P - u
    ;(u = P), s && s({ action: a, location: w.location, delta: f })
  }
  function h(P, f) {
    a = xe.Push
    let d = _i(w.location, P, f)
    n && n(d, P), (u = c() + 1)
    let m = Qc(d, u),
      E = w.createHref(d)
    try {
      l.pushState(m, '', E)
    } catch (j) {
      if (j instanceof DOMException && j.name === 'DataCloneError') throw j
      i.location.assign(E)
    }
    o && s && s({ action: a, location: w.location, delta: 1 })
  }
  function v(P, f) {
    a = xe.Replace
    let d = _i(w.location, P, f)
    n && n(d, P), (u = c())
    let m = Qc(d, u),
      E = w.createHref(d)
    l.replaceState(m, '', E),
      o && s && s({ action: a, location: w.location, delta: 0 })
  }
  function S(P) {
    let f = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      d = typeof P == 'string' ? P : Fi(P)
    return (
      G(
        f,
        'No window.location.(origin|href) available to create URL for href: ' +
          d
      ),
      new URL(d, f)
    )
  }
  let w = {
    get action() {
      return a
    },
    get location() {
      return e(i, l)
    },
    listen(P) {
      if (s) throw new Error('A history only accepts one active listener')
      return (
        i.addEventListener(bc, p),
        (s = P),
        () => {
          i.removeEventListener(bc, p), (s = null)
        }
      )
    },
    createHref(P) {
      return t(i, P)
    },
    createURL: S,
    encodeLocation(P) {
      let f = S(P)
      return { pathname: f.pathname, search: f.search, hash: f.hash }
    },
    push: h,
    replace: v,
    go(P) {
      return l.go(P)
    },
  }
  return w
}
var he
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(he || (he = {}))
const yg = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function vg(e) {
  return e.index === !0
}
function os(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let l = [...n, o],
        a = typeof i.id == 'string' ? i.id : l.join('-')
      if (
        (G(
          i.index !== !0 || !i.children,
          'Cannot specify children on an index route'
        ),
        G(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        vg(i))
      ) {
        let s = ge({}, i, t(i), { id: a })
        return (r[a] = s), s
      } else {
        let s = ge({}, i, t(i), { id: a, children: void 0 })
        return (
          (r[a] = s), i.children && (s.children = os(i.children, t, l, r)), s
        )
      }
    })
  )
}
function cr(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? Qt(t) : t,
    i = Ai(r.pathname || '/', n)
  if (i == null) return null
  let o = Up(e)
  xg(o)
  let l = null
  for (let a = 0; l == null && a < o.length; ++a) l = _g(o[a], Ng(i))
  return l
}
function wg(e, t) {
  let { route: n, pathname: r, params: i } = e
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle }
}
function Up(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let i = (o, l, a) => {
    let s = {
      relativePath: a === void 0 ? o.path || '' : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    }
    s.relativePath.startsWith('/') &&
      (G(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)))
    let u = Dn([r, s.relativePath]),
      c = n.concat(s)
    o.children &&
      o.children.length > 0 &&
      (G(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      Up(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: jg(u, o.index), routesMeta: c })
  }
  return (
    e.forEach((o, l) => {
      var a
      if (o.path === '' || !((a = o.path) != null && a.includes('?'))) i(o, l)
      else for (let s of Bp(o.path)) i(o, l, s)
    }),
    t
  )
}
function Bp(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '')
  if (r.length === 0) return i ? [o, ''] : [o]
  let l = Bp(r.join('/')),
    a = []
  return (
    a.push(...l.map((s) => (s === '' ? o : [o, s].join('/')))),
    i && a.push(...l),
    a.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  )
}
function xg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Rg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  )
}
const Sg = /^:[\w-]+$/,
  kg = 3,
  zg = 2,
  Eg = 1,
  Cg = 10,
  Pg = -2,
  Kc = (e) => e === '*'
function jg(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(Kc) && (r += Pg),
    t && (r += zg),
    n
      .filter((i) => !Kc(i))
      .reduce((i, o) => i + (Sg.test(o) ? kg : o === '' ? Eg : Cg), r)
  )
}
function Rg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function _g(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    o = []
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      s = l === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      c = Tg(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u
      )
    if (!c) return null
    Object.assign(r, c.params)
    let p = a.route
    o.push({
      params: r,
      pathname: Dn([i, c.pathname]),
      pathnameBase: Fg(Dn([i, c.pathnameBase])),
      route: p,
    }),
      c.pathnameBase !== '/' && (i = Dn([i, c.pathnameBase]))
  }
  return o
}
function Tg(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = Lg(e.path, e.caseSensitive, e.end),
    i = t.match(n)
  if (!i) return null
  let o = i[0],
    l = o.replace(/(.)\/+$/, '$1'),
    a = i.slice(1)
  return {
    params: r.reduce((u, c, p) => {
      let { paramName: h, isOptional: v } = c
      if (h === '*') {
        let w = a[p] || ''
        l = o.slice(0, o.length - w.length).replace(/(.)\/+$/, '$1')
      }
      const S = a[p]
      return v && !S ? (u[h] = void 0) : (u[h] = Mg(S || '', h)), u
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  }
}
function Lg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Hn(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  )
}
function Ng(e) {
  try {
    return decodeURI(e)
  } catch (t) {
    return (
      Hn(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function Mg(e, t) {
  try {
    return decodeURIComponent(e)
  } catch (n) {
    return (
      Hn(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    )
  }
}
function Ai(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
function Dg(e, t) {
  t === void 0 && (t = '/')
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof e == 'string' ? Qt(e) : e
  return {
    pathname: n ? (n.startsWith('/') ? n : $g(n, t)) : t,
    search: Ag(r),
    hash: Ug(i),
  }
}
function $g(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function ia(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function Hp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  )
}
function Ig(e, t) {
  let n = Hp(e)
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase)
}
function Og(e, t, n, r) {
  r === void 0 && (r = !1)
  let i
  typeof e == 'string'
    ? (i = Qt(e))
    : ((i = ge({}, e)),
      G(
        !i.pathname || !i.pathname.includes('?'),
        ia('?', 'pathname', 'search', i)
      ),
      G(
        !i.pathname || !i.pathname.includes('#'),
        ia('#', 'pathname', 'hash', i)
      ),
      G(!i.search || !i.search.includes('#'), ia('#', 'search', 'hash', i)))
  let o = e === '' || i.pathname === '',
    l = o ? '/' : i.pathname,
    a
  if (l == null) a = n
  else {
    let p = t.length - 1
    if (!r && l.startsWith('..')) {
      let h = l.split('/')
      for (; h[0] === '..'; ) h.shift(), (p -= 1)
      i.pathname = h.join('/')
    }
    a = p >= 0 ? t[p] : '/'
  }
  let s = Dg(i, a),
    u = l && l !== '/' && l.endsWith('/'),
    c = (o || l === '.') && n.endsWith('/')
  return !s.pathname.endsWith('/') && (u || c) && (s.pathname += '/'), s
}
const Dn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Fg = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Ag = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Ug = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
class hu {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r)
  }
}
function Vp(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const Wp = ['post', 'put', 'patch', 'delete'],
  Bg = new Set(Wp),
  Hg = ['get', ...Wp],
  Vg = new Set(Hg),
  Wg = new Set([301, 302, 303, 307, 308]),
  bg = new Set([307, 308]),
  oa = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Qg = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  br = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  bp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Kg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Qp = 'remix-router-transitions'
function Zg(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n
  G(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  )
  let i
  if (e.mapRouteProperties) i = e.mapRouteProperties
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary
    i = (x) => ({ hasErrorBoundary: y(x) })
  } else i = Kg
  let o = {},
    l = os(e.routes, i, void 0, o),
    a,
    s = e.basename || '/',
    u = ge(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    c = null,
    p = new Set(),
    h = null,
    v = null,
    S = null,
    w = e.hydrationData != null,
    P = cr(l, e.history.location, s),
    f = null
  if (P == null) {
    let y = st(404, { pathname: e.history.location.pathname }),
      { matches: x, route: C } = td(l)
    ;(P = x), (f = { [C.id]: y })
  }
  let d,
    m = P.some((y) => y.route.lazy),
    E = P.some((y) => y.route.loader)
  if (m) d = !1
  else if (!E) d = !0
  else if (u.v7_partialHydration) {
    let y = e.hydrationData ? e.hydrationData.loaderData : null,
      x = e.hydrationData ? e.hydrationData.errors : null
    d = P.every(
      (C) =>
        C.route.loader &&
        C.route.loader.hydrate !== !0 &&
        ((y && y[C.route.id] !== void 0) || (x && x[C.route.id] !== void 0))
    )
  } else d = e.hydrationData != null
  let j,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: P,
      initialized: d,
      navigation: oa,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || f,
      fetchers: new Map(),
      blockers: new Map(),
    },
    z = xe.Pop,
    _ = !1,
    D,
    F = !1,
    Y = new Map(),
    ye = null,
    pe = !1,
    Qe = !1,
    Kt = [],
    Pt = [],
    te = new Map(),
    L = 0,
    I = -1,
    A = new Map(),
    Q = new Set(),
    q = new Map(),
    Je = new Map(),
    ve = new Set(),
    Oe = new Map(),
    we = new Map(),
    et = !1
  function Sn() {
    if (
      ((c = e.history.listen((y) => {
        let { action: x, location: C, delta: T } = y
        if (et) {
          et = !1
          return
        }
        Hn(
          we.size === 0 || T != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        )
        let $ = Mu({
          currentLocation: g.location,
          nextLocation: C,
          historyAction: x,
        })
        if ($ && T != null) {
          ;(et = !0),
            e.history.go(T * -1),
            Bi($, {
              state: 'blocked',
              location: C,
              proceed() {
                Bi($, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: C,
                }),
                  e.history.go(T)
              },
              reset() {
                let b = new Map(g.blockers)
                b.set($, br), Pe({ blockers: b })
              },
            })
          return
        }
        return kn(x, C)
      })),
      n)
    ) {
      o1(t, Y)
      let y = () => l1(t, Y)
      t.addEventListener('pagehide', y),
        (ye = () => t.removeEventListener('pagehide', y))
    }
    return g.initialized || kn(xe.Pop, g.location, { initialHydration: !0 }), j
  }
  function Dt() {
    c && c(),
      ye && ye(),
      p.clear(),
      D && D.abort(),
      g.fetchers.forEach((y, x) => Ui(x)),
      g.blockers.forEach((y, x) => Nu(x))
  }
  function Dr(y) {
    return p.add(y), () => p.delete(y)
  }
  function Pe(y, x) {
    x === void 0 && (x = {}), (g = ge({}, g, y))
    let C = [],
      T = []
    u.v7_fetcherPersist &&
      g.fetchers.forEach(($, b) => {
        $.state === 'idle' && (ve.has(b) ? T.push(b) : C.push(b))
      }),
      [...p].forEach(($) =>
        $(g, {
          deletedFetchers: T,
          unstable_viewTransitionOpts: x.viewTransitionOpts,
          unstable_flushSync: x.flushSync === !0,
        })
      ),
      u.v7_fetcherPersist &&
        (C.forEach(($) => g.fetchers.delete($)), T.forEach(($) => Ui($)))
  }
  function Ke(y, x, C) {
    var T, $
    let { flushSync: b } = C === void 0 ? {} : C,
      B =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        xt(g.navigation.formMethod) &&
        g.navigation.state === 'loading' &&
        ((T = y.state) == null ? void 0 : T._isRedirect) !== !0,
      U
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (U = x.actionData)
        : (U = null)
      : B
      ? (U = g.actionData)
      : (U = null)
    let O = x.loaderData
        ? ed(g.loaderData, x.loaderData, x.matches || [], x.errors)
        : g.loaderData,
      Z = g.blockers
    Z.size > 0 && ((Z = new Map(Z)), Z.forEach((re, Me) => Z.set(Me, br)))
    let je =
      _ === !0 ||
      (g.navigation.formMethod != null &&
        xt(g.navigation.formMethod) &&
        (($ = y.state) == null ? void 0 : $._isRedirect) !== !0)
    a && ((l = a), (a = void 0)),
      pe ||
        z === xe.Pop ||
        (z === xe.Push
          ? e.history.push(y, y.state)
          : z === xe.Replace && e.history.replace(y, y.state))
    let V
    if (z === xe.Pop) {
      let re = Y.get(g.location.pathname)
      re && re.has(y.pathname)
        ? (V = { currentLocation: g.location, nextLocation: y })
        : Y.has(y.pathname) &&
          (V = { currentLocation: y, nextLocation: g.location })
    } else if (F) {
      let re = Y.get(g.location.pathname)
      re
        ? re.add(y.pathname)
        : ((re = new Set([y.pathname])), Y.set(g.location.pathname, re)),
        (V = { currentLocation: g.location, nextLocation: y })
    }
    Pe(
      ge({}, x, {
        actionData: U,
        loaderData: O,
        historyAction: z,
        location: y,
        initialized: !0,
        navigation: oa,
        revalidation: 'idle',
        restoreScrollPosition: $u(y, x.matches || g.matches),
        preventScrollReset: je,
        blockers: Z,
      }),
      { viewTransitionOpts: V, flushSync: b === !0 }
    ),
      (z = xe.Pop),
      (_ = !1),
      (F = !1),
      (pe = !1),
      (Qe = !1),
      (Kt = []),
      (Pt = [])
  }
  async function Pu(y, x) {
    if (typeof y == 'number') {
      e.history.go(y)
      return
    }
    let C = ls(
        g.location,
        g.matches,
        s,
        u.v7_prependBasename,
        y,
        u.v7_relativeSplatPath,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative
      ),
      {
        path: T,
        submission: $,
        error: b,
      } = Zc(u.v7_normalizeFormMethod, !1, C, x),
      B = g.location,
      U = _i(g.location, T, x && x.state)
    U = ge({}, U, e.history.encodeLocation(U))
    let O = x && x.replace != null ? x.replace : void 0,
      Z = xe.Push
    O === !0
      ? (Z = xe.Replace)
      : O === !1 ||
        ($ != null &&
          xt($.formMethod) &&
          $.formAction === g.location.pathname + g.location.search &&
          (Z = xe.Replace))
    let je =
        x && 'preventScrollReset' in x ? x.preventScrollReset === !0 : void 0,
      V = (x && x.unstable_flushSync) === !0,
      re = Mu({ currentLocation: B, nextLocation: U, historyAction: Z })
    if (re) {
      Bi(re, {
        state: 'blocked',
        location: U,
        proceed() {
          Bi(re, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: U,
          }),
            Pu(y, x)
        },
        reset() {
          let Me = new Map(g.blockers)
          Me.set(re, br), Pe({ blockers: Me })
        },
      })
      return
    }
    return await kn(Z, U, {
      submission: $,
      pendingError: b,
      preventScrollReset: je,
      replace: x && x.replace,
      enableViewTransition: x && x.unstable_viewTransition,
      flushSync: V,
    })
  }
  function _h() {
    if (
      (Pl(),
      Pe({ revalidation: 'loading' }),
      g.navigation.state !== 'submitting')
    ) {
      if (g.navigation.state === 'idle') {
        kn(g.historyAction, g.location, { startUninterruptedRevalidation: !0 })
        return
      }
      kn(z || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
      })
    }
  }
  async function kn(y, x, C) {
    D && D.abort(),
      (D = null),
      (z = y),
      (pe = (C && C.startUninterruptedRevalidation) === !0),
      Fh(g.location, g.matches),
      (_ = (C && C.preventScrollReset) === !0),
      (F = (C && C.enableViewTransition) === !0)
    let T = a || l,
      $ = C && C.overrideNavigation,
      b = cr(T, x, s),
      B = (C && C.flushSync) === !0
    if (!b) {
      let Me = st(404, { pathname: x.pathname }),
        { matches: at, route: Re } = td(T)
      jl(),
        Ke(
          x,
          { matches: at, loaderData: {}, errors: { [Re.id]: Me } },
          { flushSync: B }
        )
      return
    }
    if (
      g.initialized &&
      !Qe &&
      Jg(g.location, x) &&
      !(C && C.submission && xt(C.submission.formMethod))
    ) {
      Ke(x, { matches: b }, { flushSync: B })
      return
    }
    D = new AbortController()
    let U = Kr(e.history, x, D.signal, C && C.submission),
      O,
      Z
    if (C && C.pendingError) Z = { [ci(b).route.id]: C.pendingError }
    else if (C && C.submission && xt(C.submission.formMethod)) {
      let Me = await Th(U, x, C.submission, b, {
        replace: C.replace,
        flushSync: B,
      })
      if (Me.shortCircuited) return
      ;(O = Me.pendingActionData),
        (Z = Me.pendingActionError),
        ($ = la(x, C.submission)),
        (B = !1),
        (U = new Request(U.url, { signal: U.signal }))
    }
    let {
      shortCircuited: je,
      loaderData: V,
      errors: re,
    } = await Lh(
      U,
      x,
      b,
      $,
      C && C.submission,
      C && C.fetcherSubmission,
      C && C.replace,
      C && C.initialHydration === !0,
      B,
      O,
      Z
    )
    je ||
      ((D = null),
      Ke(
        x,
        ge({ matches: b }, O ? { actionData: O } : {}, {
          loaderData: V,
          errors: re,
        })
      ))
  }
  async function Th(y, x, C, T, $) {
    $ === void 0 && ($ = {}), Pl()
    let b = r1(x, C)
    Pe({ navigation: b }, { flushSync: $.flushSync === !0 })
    let B,
      U = ss(T, x)
    if (!U.route.action && !U.route.lazy)
      B = {
        type: he.error,
        error: st(405, {
          method: y.method,
          pathname: x.pathname,
          routeId: U.route.id,
        }),
      }
    else if (
      ((B = await Qr('action', y, U, T, o, i, s, u.v7_relativeSplatPath)),
      y.signal.aborted)
    )
      return { shortCircuited: !0 }
    if (Tn(B)) {
      let O
      return (
        $ && $.replace != null
          ? (O = $.replace)
          : (O = B.location === g.location.pathname + g.location.search),
        await $r(g, B, { submission: C, replace: O }),
        { shortCircuited: !0 }
      )
    }
    if (dr(B)) {
      let O = ci(T, U.route.id)
      return (
        ($ && $.replace) !== !0 && (z = xe.Push),
        { pendingActionData: {}, pendingActionError: { [O.route.id]: B.error } }
      )
    }
    if (_n(B)) throw st(400, { type: 'defer-action' })
    return { pendingActionData: { [U.route.id]: B.data } }
  }
  async function Lh(y, x, C, T, $, b, B, U, O, Z, je) {
    let V = T || la(x, $),
      re = $ || b || id(V),
      Me = a || l,
      [at, Re] = Yc(
        e.history,
        g,
        C,
        re,
        x,
        u.v7_partialHydration && U === !0,
        Qe,
        Kt,
        Pt,
        ve,
        q,
        Q,
        Me,
        s,
        Z,
        je
      )
    if (
      (jl(
        (ne) =>
          !(C && C.some((se) => se.route.id === ne)) ||
          (at && at.some((se) => se.route.id === ne))
      ),
      (I = ++L),
      at.length === 0 && Re.length === 0)
    ) {
      let ne = Tu()
      return (
        Ke(
          x,
          ge(
            { matches: C, loaderData: {}, errors: je || null },
            Z ? { actionData: Z } : {},
            ne ? { fetchers: new Map(g.fetchers) } : {}
          ),
          { flushSync: O }
        ),
        { shortCircuited: !0 }
      )
    }
    if (!pe && (!u.v7_partialHydration || !U)) {
      Re.forEach((se) => {
        let jt = g.fetchers.get(se.key),
          Vi = Zr(void 0, jt ? jt.data : void 0)
        g.fetchers.set(se.key, Vi)
      })
      let ne = Z || g.actionData
      Pe(
        ge(
          { navigation: V },
          ne
            ? Object.keys(ne).length === 0
              ? { actionData: null }
              : { actionData: ne }
            : {},
          Re.length > 0 ? { fetchers: new Map(g.fetchers) } : {}
        ),
        { flushSync: O }
      )
    }
    Re.forEach((ne) => {
      te.has(ne.key) && Yt(ne.key),
        ne.controller && te.set(ne.key, ne.controller)
    })
    let Kn = () => Re.forEach((ne) => Yt(ne.key))
    D && D.signal.addEventListener('abort', Kn)
    let {
      results: Rl,
      loaderResults: Zn,
      fetcherResults: qt,
    } = await ju(g.matches, C, at, Re, y)
    if (y.signal.aborted) return { shortCircuited: !0 }
    D && D.signal.removeEventListener('abort', Kn),
      Re.forEach((ne) => te.delete(ne.key))
    let zn = nd(Rl)
    if (zn) {
      if (zn.idx >= at.length) {
        let ne = Re[zn.idx - at.length].key
        Q.add(ne)
      }
      return await $r(g, zn.result, { replace: B }), { shortCircuited: !0 }
    }
    let { loaderData: _l, errors: Tl } = Jc(g, C, at, Zn, je, Re, qt, Oe)
    Oe.forEach((ne, se) => {
      ne.subscribe((jt) => {
        ;(jt || ne.done) && Oe.delete(se)
      })
    })
    let Ll = Tu(),
      Yn = Lu(I),
      Hi = Ll || Yn || Re.length > 0
    return ge(
      { loaderData: _l, errors: Tl },
      Hi ? { fetchers: new Map(g.fetchers) } : {}
    )
  }
  function Nh(y, x, C, T) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      )
    te.has(y) && Yt(y)
    let $ = (T && T.unstable_flushSync) === !0,
      b = a || l,
      B = ls(
        g.location,
        g.matches,
        s,
        u.v7_prependBasename,
        C,
        u.v7_relativeSplatPath,
        x,
        T == null ? void 0 : T.relative
      ),
      U = cr(b, B, s)
    if (!U) {
      Ir(y, x, st(404, { pathname: B }), { flushSync: $ })
      return
    }
    let {
      path: O,
      submission: Z,
      error: je,
    } = Zc(u.v7_normalizeFormMethod, !0, B, T)
    if (je) {
      Ir(y, x, je, { flushSync: $ })
      return
    }
    let V = ss(U, O)
    if (((_ = (T && T.preventScrollReset) === !0), Z && xt(Z.formMethod))) {
      Mh(y, x, O, V, U, $, Z)
      return
    }
    q.set(y, { routeId: x, path: O }), Dh(y, x, O, V, U, $, Z)
  }
  async function Mh(y, x, C, T, $, b, B) {
    if ((Pl(), q.delete(y), !T.route.action && !T.route.lazy)) {
      let se = st(405, { method: B.formMethod, pathname: C, routeId: x })
      Ir(y, x, se, { flushSync: b })
      return
    }
    let U = g.fetchers.get(y)
    Zt(y, i1(B, U), { flushSync: b })
    let O = new AbortController(),
      Z = Kr(e.history, C, O.signal, B)
    te.set(y, O)
    let je = L,
      V = await Qr('action', Z, T, $, o, i, s, u.v7_relativeSplatPath)
    if (Z.signal.aborted) {
      te.get(y) === O && te.delete(y)
      return
    }
    if (u.v7_fetcherPersist && ve.has(y)) {
      if (Tn(V) || dr(V)) {
        Zt(y, Xt(void 0))
        return
      }
    } else {
      if (Tn(V))
        if ((te.delete(y), I > je)) {
          Zt(y, Xt(void 0))
          return
        } else return Q.add(y), Zt(y, Zr(B)), $r(g, V, { fetcherSubmission: B })
      if (dr(V)) {
        Ir(y, x, V.error)
        return
      }
    }
    if (_n(V)) throw st(400, { type: 'defer-action' })
    let re = g.navigation.location || g.location,
      Me = Kr(e.history, re, O.signal),
      at = a || l,
      Re =
        g.navigation.state !== 'idle'
          ? cr(at, g.navigation.location, s)
          : g.matches
    G(Re, "Didn't find any matches after fetcher action")
    let Kn = ++L
    A.set(y, Kn)
    let Rl = Zr(B, V.data)
    g.fetchers.set(y, Rl)
    let [Zn, qt] = Yc(
      e.history,
      g,
      Re,
      B,
      re,
      !1,
      Qe,
      Kt,
      Pt,
      ve,
      q,
      Q,
      at,
      s,
      { [T.route.id]: V.data },
      void 0
    )
    qt
      .filter((se) => se.key !== y)
      .forEach((se) => {
        let jt = se.key,
          Vi = g.fetchers.get(jt),
          Uh = Zr(void 0, Vi ? Vi.data : void 0)
        g.fetchers.set(jt, Uh),
          te.has(jt) && Yt(jt),
          se.controller && te.set(jt, se.controller)
      }),
      Pe({ fetchers: new Map(g.fetchers) })
    let zn = () => qt.forEach((se) => Yt(se.key))
    O.signal.addEventListener('abort', zn)
    let {
      results: _l,
      loaderResults: Tl,
      fetcherResults: Ll,
    } = await ju(g.matches, Re, Zn, qt, Me)
    if (O.signal.aborted) return
    O.signal.removeEventListener('abort', zn),
      A.delete(y),
      te.delete(y),
      qt.forEach((se) => te.delete(se.key))
    let Yn = nd(_l)
    if (Yn) {
      if (Yn.idx >= Zn.length) {
        let se = qt[Yn.idx - Zn.length].key
        Q.add(se)
      }
      return $r(g, Yn.result)
    }
    let { loaderData: Hi, errors: ne } = Jc(
      g,
      g.matches,
      Zn,
      Tl,
      void 0,
      qt,
      Ll,
      Oe
    )
    if (g.fetchers.has(y)) {
      let se = Xt(V.data)
      g.fetchers.set(y, se)
    }
    Lu(Kn),
      g.navigation.state === 'loading' && Kn > I
        ? (G(z, 'Expected pending action'),
          D && D.abort(),
          Ke(g.navigation.location, {
            matches: Re,
            loaderData: Hi,
            errors: ne,
            fetchers: new Map(g.fetchers),
          }))
        : (Pe({
            errors: ne,
            loaderData: ed(g.loaderData, Hi, Re, ne),
            fetchers: new Map(g.fetchers),
          }),
          (Qe = !1))
  }
  async function Dh(y, x, C, T, $, b, B) {
    let U = g.fetchers.get(y)
    Zt(y, Zr(B, U ? U.data : void 0), { flushSync: b })
    let O = new AbortController(),
      Z = Kr(e.history, C, O.signal)
    te.set(y, O)
    let je = L,
      V = await Qr('loader', Z, T, $, o, i, s, u.v7_relativeSplatPath)
    if (
      (_n(V) && (V = (await Yp(V, Z.signal, !0)) || V),
      te.get(y) === O && te.delete(y),
      !Z.signal.aborted)
    ) {
      if (ve.has(y)) {
        Zt(y, Xt(void 0))
        return
      }
      if (Tn(V))
        if (I > je) {
          Zt(y, Xt(void 0))
          return
        } else {
          Q.add(y), await $r(g, V)
          return
        }
      if (dr(V)) {
        Ir(y, x, V.error)
        return
      }
      G(!_n(V), 'Unhandled fetcher deferred data'), Zt(y, Xt(V.data))
    }
  }
  async function $r(y, x, C) {
    let {
      submission: T,
      fetcherSubmission: $,
      replace: b,
    } = C === void 0 ? {} : C
    x.revalidate && (Qe = !0)
    let B = _i(y.location, x.location, { _isRedirect: !0 })
    if ((G(B, 'Expected a location on the redirect navigation'), n)) {
      let re = !1
      if (x.reloadDocument) re = !0
      else if (bp.test(x.location)) {
        const Me = e.history.createURL(x.location)
        re = Me.origin !== t.location.origin || Ai(Me.pathname, s) == null
      }
      if (re) {
        b ? t.location.replace(x.location) : t.location.assign(x.location)
        return
      }
    }
    D = null
    let U = b === !0 ? xe.Replace : xe.Push,
      { formMethod: O, formAction: Z, formEncType: je } = y.navigation
    !T && !$ && O && Z && je && (T = id(y.navigation))
    let V = T || $
    if (bg.has(x.status) && V && xt(V.formMethod))
      await kn(U, B, {
        submission: ge({}, V, { formAction: x.location }),
        preventScrollReset: _,
      })
    else {
      let re = la(B, T)
      await kn(U, B, {
        overrideNavigation: re,
        fetcherSubmission: $,
        preventScrollReset: _,
      })
    }
  }
  async function ju(y, x, C, T, $) {
    let b = await Promise.all([
        ...C.map((O) => Qr('loader', $, O, x, o, i, s, u.v7_relativeSplatPath)),
        ...T.map((O) =>
          O.matches && O.match && O.controller
            ? Qr(
                'loader',
                Kr(e.history, O.path, O.controller.signal),
                O.match,
                O.matches,
                o,
                i,
                s,
                u.v7_relativeSplatPath
              )
            : { type: he.error, error: st(404, { pathname: O.path }) }
        ),
      ]),
      B = b.slice(0, C.length),
      U = b.slice(C.length)
    return (
      await Promise.all([
        rd(
          y,
          C,
          B,
          B.map(() => $.signal),
          !1,
          g.loaderData
        ),
        rd(
          y,
          T.map((O) => O.match),
          U,
          T.map((O) => (O.controller ? O.controller.signal : null)),
          !0
        ),
      ]),
      { results: b, loaderResults: B, fetcherResults: U }
    )
  }
  function Pl() {
    ;(Qe = !0),
      Kt.push(...jl()),
      q.forEach((y, x) => {
        te.has(x) && (Pt.push(x), Yt(x))
      })
  }
  function Zt(y, x, C) {
    C === void 0 && (C = {}),
      g.fetchers.set(y, x),
      Pe(
        { fetchers: new Map(g.fetchers) },
        { flushSync: (C && C.flushSync) === !0 }
      )
  }
  function Ir(y, x, C, T) {
    T === void 0 && (T = {})
    let $ = ci(g.matches, x)
    Ui(y),
      Pe(
        { errors: { [$.route.id]: C }, fetchers: new Map(g.fetchers) },
        { flushSync: (T && T.flushSync) === !0 }
      )
  }
  function Ru(y) {
    return (
      u.v7_fetcherPersist &&
        (Je.set(y, (Je.get(y) || 0) + 1), ve.has(y) && ve.delete(y)),
      g.fetchers.get(y) || Qg
    )
  }
  function Ui(y) {
    let x = g.fetchers.get(y)
    te.has(y) && !(x && x.state === 'loading' && A.has(y)) && Yt(y),
      q.delete(y),
      A.delete(y),
      Q.delete(y),
      ve.delete(y),
      g.fetchers.delete(y)
  }
  function $h(y) {
    if (u.v7_fetcherPersist) {
      let x = (Je.get(y) || 0) - 1
      x <= 0 ? (Je.delete(y), ve.add(y)) : Je.set(y, x)
    } else Ui(y)
    Pe({ fetchers: new Map(g.fetchers) })
  }
  function Yt(y) {
    let x = te.get(y)
    G(x, 'Expected fetch controller: ' + y), x.abort(), te.delete(y)
  }
  function _u(y) {
    for (let x of y) {
      let C = Ru(x),
        T = Xt(C.data)
      g.fetchers.set(x, T)
    }
  }
  function Tu() {
    let y = [],
      x = !1
    for (let C of Q) {
      let T = g.fetchers.get(C)
      G(T, 'Expected fetcher: ' + C),
        T.state === 'loading' && (Q.delete(C), y.push(C), (x = !0))
    }
    return _u(y), x
  }
  function Lu(y) {
    let x = []
    for (let [C, T] of A)
      if (T < y) {
        let $ = g.fetchers.get(C)
        G($, 'Expected fetcher: ' + C),
          $.state === 'loading' && (Yt(C), A.delete(C), x.push(C))
      }
    return _u(x), x.length > 0
  }
  function Ih(y, x) {
    let C = g.blockers.get(y) || br
    return we.get(y) !== x && we.set(y, x), C
  }
  function Nu(y) {
    g.blockers.delete(y), we.delete(y)
  }
  function Bi(y, x) {
    let C = g.blockers.get(y) || br
    G(
      (C.state === 'unblocked' && x.state === 'blocked') ||
        (C.state === 'blocked' && x.state === 'blocked') ||
        (C.state === 'blocked' && x.state === 'proceeding') ||
        (C.state === 'blocked' && x.state === 'unblocked') ||
        (C.state === 'proceeding' && x.state === 'unblocked'),
      'Invalid blocker state transition: ' + C.state + ' -> ' + x.state
    )
    let T = new Map(g.blockers)
    T.set(y, x), Pe({ blockers: T })
  }
  function Mu(y) {
    let { currentLocation: x, nextLocation: C, historyAction: T } = y
    if (we.size === 0) return
    we.size > 1 && Hn(!1, 'A router only supports one blocker at a time')
    let $ = Array.from(we.entries()),
      [b, B] = $[$.length - 1],
      U = g.blockers.get(b)
    if (
      !(U && U.state === 'proceeding') &&
      B({ currentLocation: x, nextLocation: C, historyAction: T })
    )
      return b
  }
  function jl(y) {
    let x = []
    return (
      Oe.forEach((C, T) => {
        ;(!y || y(T)) && (C.cancel(), x.push(T), Oe.delete(T))
      }),
      x
    )
  }
  function Oh(y, x, C) {
    if (((h = y), (S = x), (v = C || null), !w && g.navigation === oa)) {
      w = !0
      let T = $u(g.location, g.matches)
      T != null && Pe({ restoreScrollPosition: T })
    }
    return () => {
      ;(h = null), (S = null), (v = null)
    }
  }
  function Du(y, x) {
    return (
      (v &&
        v(
          y,
          x.map((T) => wg(T, g.loaderData))
        )) ||
      y.key
    )
  }
  function Fh(y, x) {
    if (h && S) {
      let C = Du(y, x)
      h[C] = S()
    }
  }
  function $u(y, x) {
    if (h) {
      let C = Du(y, x),
        T = h[C]
      if (typeof T == 'number') return T
    }
    return null
  }
  function Ah(y) {
    ;(o = {}), (a = os(y, i, void 0, o))
  }
  return (
    (j = {
      get basename() {
        return s
      },
      get future() {
        return u
      },
      get state() {
        return g
      },
      get routes() {
        return l
      },
      get window() {
        return t
      },
      initialize: Sn,
      subscribe: Dr,
      enableScrollRestoration: Oh,
      navigate: Pu,
      fetch: Nh,
      revalidate: _h,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: Ru,
      deleteFetcher: $h,
      dispose: Dt,
      getBlocker: Ih,
      deleteBlocker: Nu,
      _internalFetchControllers: te,
      _internalActiveDeferreds: Oe,
      _internalSetRoutes: Ah,
    }),
    j
  )
}
function Yg(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  )
}
function ls(e, t, n, r, i, o, l, a) {
  let s, u
  if (l) {
    s = []
    for (let p of t)
      if ((s.push(p), p.route.id === l)) {
        u = p
        break
      }
  } else (s = t), (u = t[t.length - 1])
  let c = Og(i || '.', Ig(s, o), Ai(e.pathname, n) || e.pathname, a === 'path')
  return (
    i == null && ((c.search = e.search), (c.hash = e.hash)),
    (i == null || i === '' || i === '.') &&
      u &&
      u.route.index &&
      !mu(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (c.pathname = c.pathname === '/' ? n : Dn([n, c.pathname])),
    Fi(c)
  )
}
function Zc(e, t, n, r) {
  if (!r || !Yg(r)) return { path: n }
  if (r.formMethod && !n1(r.formMethod))
    return { path: n, error: st(405, { method: r.formMethod }) }
  let i = () => ({ path: n, error: st(400, { type: 'invalid-body' }) }),
    o = r.formMethod || 'get',
    l = e ? o.toUpperCase() : o.toLowerCase(),
    a = Zp(n)
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!xt(l)) return i()
      let h =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((v, S) => {
              let [w, P] = S
              return (
                '' +
                v +
                w +
                '=' +
                P +
                `
`
              )
            }, '')
          : String(r.body)
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      }
    } else if (r.formEncType === 'application/json') {
      if (!xt(l)) return i()
      try {
        let h = typeof r.body == 'string' ? JSON.parse(r.body) : r.body
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        }
      } catch {
        return i()
      }
    }
  }
  G(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  )
  let s, u
  if (r.formData) (s = as(r.formData)), (u = r.formData)
  else if (r.body instanceof FormData) (s = as(r.body)), (u = r.body)
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = Xc(s))
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData())
  else
    try {
      ;(s = new URLSearchParams(r.body)), (u = Xc(s))
    } catch {
      return i()
    }
  let c = {
    formMethod: l,
    formAction: a,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: u,
    json: void 0,
    text: void 0,
  }
  if (xt(c.formMethod)) return { path: n, submission: c }
  let p = Qt(n)
  return (
    t && p.search && mu(p.search) && s.append('index', ''),
    (p.search = '?' + s),
    { path: Fi(p), submission: c }
  )
}
function qg(e, t) {
  let n = e
  if (t) {
    let r = e.findIndex((i) => i.route.id === t)
    r >= 0 && (n = e.slice(0, r))
  }
  return n
}
function Yc(e, t, n, r, i, o, l, a, s, u, c, p, h, v, S, w) {
  let P = w ? Object.values(w)[0] : S ? Object.values(S)[0] : void 0,
    f = e.createURL(t.location),
    d = e.createURL(i),
    m = w ? Object.keys(w)[0] : void 0,
    j = qg(n, m).filter((z, _) => {
      let { route: D } = z
      if (D.lazy) return !0
      if (D.loader == null) return !1
      if (o)
        return D.loader.hydrate
          ? !0
          : t.loaderData[D.id] === void 0 &&
              (!t.errors || t.errors[D.id] === void 0)
      if (
        Gg(t.loaderData, t.matches[_], z) ||
        a.some((ye) => ye === z.route.id)
      )
        return !0
      let F = t.matches[_],
        Y = z
      return qc(
        z,
        ge(
          {
            currentUrl: f,
            currentParams: F.params,
            nextUrl: d,
            nextParams: Y.params,
          },
          r,
          {
            actionResult: P,
            defaultShouldRevalidate:
              l ||
              f.pathname + f.search === d.pathname + d.search ||
              f.search !== d.search ||
              Kp(F, Y),
          }
        )
      )
    }),
    g = []
  return (
    c.forEach((z, _) => {
      if (o || !n.some((pe) => pe.route.id === z.routeId) || u.has(_)) return
      let D = cr(h, z.path, v)
      if (!D) {
        g.push({
          key: _,
          routeId: z.routeId,
          path: z.path,
          matches: null,
          match: null,
          controller: null,
        })
        return
      }
      let F = t.fetchers.get(_),
        Y = ss(D, z.path),
        ye = !1
      p.has(_)
        ? (ye = !1)
        : s.includes(_)
        ? (ye = !0)
        : F && F.state !== 'idle' && F.data === void 0
        ? (ye = l)
        : (ye = qc(
            Y,
            ge(
              {
                currentUrl: f,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: d,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: P, defaultShouldRevalidate: l }
            )
          )),
        ye &&
          g.push({
            key: _,
            routeId: z.routeId,
            path: z.path,
            matches: D,
            match: Y,
            controller: new AbortController(),
          })
    }),
    [j, g]
  )
}
function Gg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0
  return r || i
}
function Kp(e, t) {
  let n = e.route.path
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  )
}
function qc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t)
    if (typeof n == 'boolean') return n
  }
  return t.defaultShouldRevalidate
}
async function Gc(e, t, n) {
  if (!e.lazy) return
  let r = await e.lazy()
  if (!e.lazy) return
  let i = n[e.id]
  G(i, 'No route found in manifest')
  let o = {}
  for (let l in r) {
    let s = i[l] !== void 0 && l !== 'hasErrorBoundary'
    Hn(
      !s,
      'Route "' +
        i.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !s && !yg.has(l) && (o[l] = r[l])
  }
  Object.assign(i, o), Object.assign(i, ge({}, t(i), { lazy: void 0 }))
}
async function Qr(e, t, n, r, i, o, l, a, s) {
  s === void 0 && (s = {})
  let u,
    c,
    p,
    h = (w) => {
      let P,
        f = new Promise((d, m) => (P = m))
      return (
        (p = () => P()),
        t.signal.addEventListener('abort', p),
        Promise.race([
          w({ request: t, params: n.params, context: s.requestContext }),
          f,
        ])
      )
    }
  try {
    let w = n.route[e]
    if (n.route.lazy)
      if (w) {
        let P,
          f = await Promise.all([
            h(w).catch((d) => {
              P = d
            }),
            Gc(n.route, o, i),
          ])
        if (P) throw P
        c = f[0]
      } else if ((await Gc(n.route, o, i), (w = n.route[e]), w)) c = await h(w)
      else if (e === 'action') {
        let P = new URL(t.url),
          f = P.pathname + P.search
        throw st(405, { method: t.method, pathname: f, routeId: n.route.id })
      } else return { type: he.data, data: void 0 }
    else if (w) c = await h(w)
    else {
      let P = new URL(t.url),
        f = P.pathname + P.search
      throw st(404, { pathname: f })
    }
    G(
      c !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    )
  } catch (w) {
    ;(u = he.error), (c = w)
  } finally {
    p && t.signal.removeEventListener('abort', p)
  }
  if (t1(c)) {
    let w = c.status
    if (Wg.has(w)) {
      let f = c.headers.get('Location')
      if (
        (G(
          f,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !bp.test(f))
      )
        f = ls(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, f, a)
      else if (!s.isStaticRequest) {
        let d = new URL(t.url),
          m = f.startsWith('//') ? new URL(d.protocol + f) : new URL(f),
          E = Ai(m.pathname, l) != null
        m.origin === d.origin && E && (f = m.pathname + m.search + m.hash)
      }
      if (s.isStaticRequest) throw (c.headers.set('Location', f), c)
      return {
        type: he.redirect,
        status: w,
        location: f,
        revalidate: c.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: c.headers.get('X-Remix-Reload-Document') !== null,
      }
    }
    if (s.isRouteRequest)
      throw { type: u === he.error ? he.error : he.data, response: c }
    let P
    try {
      let f = c.headers.get('Content-Type')
      f && /\bapplication\/json\b/.test(f)
        ? c.body == null
          ? (P = null)
          : (P = await c.json())
        : (P = await c.text())
    } catch (f) {
      return { type: he.error, error: f }
    }
    return u === he.error
      ? { type: u, error: new hu(w, c.statusText, P), headers: c.headers }
      : { type: he.data, data: P, statusCode: c.status, headers: c.headers }
  }
  if (u === he.error) return { type: u, error: c }
  if (e1(c)) {
    var v, S
    return {
      type: he.deferred,
      deferredData: c,
      statusCode: (v = c.init) == null ? void 0 : v.status,
      headers:
        ((S = c.init) == null ? void 0 : S.headers) &&
        new Headers(c.init.headers),
    }
  }
  return { type: he.data, data: c }
}
function Kr(e, t, n, r) {
  let i = e.createURL(Zp(t)).toString(),
    o = { signal: n }
  if (r && xt(r.formMethod)) {
    let { formMethod: l, formEncType: a } = r
    ;(o.method = l.toUpperCase()),
      a === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': a })),
          (o.body = JSON.stringify(r.json)))
        : a === 'text/plain'
        ? (o.body = r.text)
        : a === 'application/x-www-form-urlencoded' && r.formData
        ? (o.body = as(r.formData))
        : (o.body = r.formData)
  }
  return new Request(i, o)
}
function as(e) {
  let t = new URLSearchParams()
  for (let [n, r] of e.entries()) t.append(n, typeof r == 'string' ? r : r.name)
  return t
}
function Xc(e) {
  let t = new FormData()
  for (let [n, r] of e.entries()) t.append(n, r)
  return t
}
function Xg(e, t, n, r, i) {
  let o = {},
    l = null,
    a,
    s = !1,
    u = {}
  return (
    n.forEach((c, p) => {
      let h = t[p].route.id
      if (
        (G(!Tn(c), 'Cannot handle redirect results in processLoaderData'),
        dr(c))
      ) {
        let v = ci(e, h),
          S = c.error
        r && ((S = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[v.route.id] == null && (l[v.route.id] = S),
          (o[h] = void 0),
          s || ((s = !0), (a = Vp(c.error) ? c.error.status : 500)),
          c.headers && (u[h] = c.headers)
      } else
        _n(c)
          ? (i.set(h, c.deferredData), (o[h] = c.deferredData.data))
          : (o[h] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !s &&
            (a = c.statusCode),
          c.headers && (u[h] = c.headers)
    }),
    r && ((l = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: l, statusCode: a || 200, loaderHeaders: u }
  )
}
function Jc(e, t, n, r, i, o, l, a) {
  let { loaderData: s, errors: u } = Xg(t, n, r, i, a)
  for (let c = 0; c < o.length; c++) {
    let { key: p, match: h, controller: v } = o[c]
    G(
      l !== void 0 && l[c] !== void 0,
      'Did not find corresponding fetcher result'
    )
    let S = l[c]
    if (!(v && v.signal.aborted))
      if (dr(S)) {
        let w = ci(e.matches, h == null ? void 0 : h.route.id)
        ;(u && u[w.route.id]) || (u = ge({}, u, { [w.route.id]: S.error })),
          e.fetchers.delete(p)
      } else if (Tn(S)) G(!1, 'Unhandled fetcher revalidation redirect')
      else if (_n(S)) G(!1, 'Unhandled fetcher deferred data')
      else {
        let w = Xt(S.data)
        e.fetchers.set(p, w)
      }
  }
  return { loaderData: s, errors: u }
}
function ed(e, t, n, r) {
  let i = ge({}, t)
  for (let o of n) {
    let l = o.route.id
    if (
      (t.hasOwnProperty(l)
        ? t[l] !== void 0 && (i[l] = t[l])
        : e[l] !== void 0 && o.route.loader && (i[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break
  }
  return i
}
function ci(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  )
}
function td(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        }
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  }
}
function st(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    l = 'Unknown Server Error',
    a = 'Unknown @remix-run/router error'
  return (
    e === 400
      ? ((l = 'Bad Request'),
        i && n && r
          ? (a =
              'You made a ' +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o === 'defer-action'
          ? (a = 'defer() is not supported in actions')
          : o === 'invalid-body' && (a = 'Unable to encode submission body'))
      : e === 403
      ? ((l = 'Forbidden'),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((l = 'Not Found'), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((l = 'Method Not Allowed'),
        i && n && r
          ? (a =
              'You made a ' +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new hu(e || 500, l, new Error(a), !0)
  )
}
function nd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t]
    if (Tn(n)) return { result: n, idx: t }
  }
}
function Zp(e) {
  let t = typeof e == 'string' ? Qt(e) : e
  return Fi(ge({}, t, { hash: '' }))
}
function Jg(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== ''
}
function _n(e) {
  return e.type === he.deferred
}
function dr(e) {
  return e.type === he.error
}
function Tn(e) {
  return (e && e.type) === he.redirect
}
function e1(e) {
  let t = e
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  )
}
function t1(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  )
}
function n1(e) {
  return Vg.has(e.toLowerCase())
}
function xt(e) {
  return Bg.has(e.toLowerCase())
}
async function rd(e, t, n, r, i, o) {
  for (let l = 0; l < n.length; l++) {
    let a = n[l],
      s = t[l]
    if (!s) continue
    let u = e.find((p) => p.route.id === s.route.id),
      c = u != null && !Kp(u, s) && (o && o[s.route.id]) !== void 0
    if (_n(a) && (i || c)) {
      let p = r[l]
      G(p, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Yp(a, p, i).then((h) => {
          h && (n[l] = h || n[l])
        })
    }
  }
}
async function Yp(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: he.data, data: e.deferredData.unwrappedData }
      } catch (i) {
        return { type: he.error, error: i }
      }
    return { type: he.data, data: e.deferredData.data }
  }
}
function mu(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '')
}
function ss(e, t) {
  let n = typeof t == 'string' ? Qt(t).search : t.search
  if (e[e.length - 1].route.index && mu(n || '')) return e[e.length - 1]
  let r = Hp(e)
  return r[r.length - 1]
}
function id(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: l,
  } = e
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      }
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      }
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      }
  }
}
function la(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      }
}
function r1(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  }
}
function Zr(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      }
}
function i1(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  }
}
function Xt(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  }
}
function o1(e, t) {
  try {
    let n = e.sessionStorage.getItem(Qp)
    if (n) {
      let r = JSON.parse(n)
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []))
    }
  } catch {}
}
function l1(e, t) {
  if (t.size > 0) {
    let n = {}
    for (let [r, i] of t) n[r] = [...i]
    try {
      e.sessionStorage.setItem(Qp, JSON.stringify(n))
    } catch (r) {
      Hn(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      )
    }
  }
}
/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Go() {
  return (
    (Go = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Go.apply(this, arguments)
  )
}
const qp = N.createContext(null),
  Gp = N.createContext(null),
  Xp = N.createContext(null),
  vl = N.createContext(null),
  wl = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Jp = N.createContext(null)
function gu() {
  return N.useContext(vl) != null
}
function a1() {
  return gu() || G(!1), N.useContext(vl).location
}
function s1(e, t, n, r) {
  gu() || G(!1)
  let { navigator: i } = N.useContext(Xp),
    { matches: o } = N.useContext(wl),
    l = o[o.length - 1],
    a = l ? l.params : {}
  l && l.pathname
  let s = l ? l.pathnameBase : '/'
  l && l.route
  let u = a1(),
    c
  if (t) {
    var p
    let P = typeof t == 'string' ? Qt(t) : t
    s === '/' || ((p = P.pathname) != null && p.startsWith(s)) || G(!1), (c = P)
  } else c = u
  let h = c.pathname || '/',
    v = s === '/' ? h : h.slice(s.length) || '/',
    S = cr(e, { pathname: v }),
    w = p1(
      S &&
        S.map((P) =>
          Object.assign({}, P, {
            params: Object.assign({}, a, P.params),
            pathname: Dn([
              s,
              i.encodeLocation
                ? i.encodeLocation(P.pathname).pathname
                : P.pathname,
            ]),
            pathnameBase:
              P.pathnameBase === '/'
                ? s
                : Dn([
                    s,
                    i.encodeLocation
                      ? i.encodeLocation(P.pathnameBase).pathname
                      : P.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    )
  return t && w
    ? N.createElement(
        vl.Provider,
        {
          value: {
            location: Go(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              c
            ),
            navigationType: xe.Pop,
          },
        },
        w
      )
    : w
}
function u1() {
  let e = y1(),
    t = Vp(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null
  return N.createElement(
    N.Fragment,
    null,
    N.createElement('h2', null, 'Unexpected Application Error!'),
    N.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? N.createElement('pre', { style: i }, n) : null,
    o
  )
}
const c1 = N.createElement(u1, null)
class d1 extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          wl.Provider,
          { value: this.props.routeContext },
          N.createElement(Jp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children
  }
}
function f1(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = N.useContext(qp)
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(wl.Provider, { value: t }, r)
  )
}
function p1(e, t, n, r) {
  var i
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o
    if ((o = n) != null && o.errors) e = n.matches
    else return null
  }
  let l = e,
    a = (i = n) == null ? void 0 : i.errors
  if (a != null) {
    let c = l.findIndex(
      (p) => p.route.id && (a == null ? void 0 : a[p.route.id])
    )
    c >= 0 || G(!1), (l = l.slice(0, Math.min(l.length, c + 1)))
  }
  let s = !1,
    u = -1
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let p = l[c]
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = c),
        p.route.id)
      ) {
        let { loaderData: h, errors: v } = n,
          S =
            p.route.loader &&
            h[p.route.id] === void 0 &&
            (!v || v[p.route.id] === void 0)
        if (p.route.lazy || S) {
          ;(s = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]])
          break
        }
      }
    }
  return l.reduceRight((c, p, h) => {
    let v,
      S = !1,
      w = null,
      P = null
    n &&
      ((v = a && p.route.id ? a[p.route.id] : void 0),
      (w = p.route.errorElement || c1),
      s &&
        (u < 0 && h === 0
          ? (v1('route-fallback', !1), (S = !0), (P = null))
          : u === h &&
            ((S = !0), (P = p.route.hydrateFallbackElement || null))))
    let f = t.concat(l.slice(0, h + 1)),
      d = () => {
        let m
        return (
          v
            ? (m = w)
            : S
            ? (m = P)
            : p.route.Component
            ? (m = N.createElement(p.route.Component, null))
            : p.route.element
            ? (m = p.route.element)
            : (m = c),
          N.createElement(f1, {
            match: p,
            routeContext: { outlet: c, matches: f, isDataRoute: n != null },
            children: m,
          })
        )
      }
    return n && (p.route.ErrorBoundary || p.route.errorElement || h === 0)
      ? N.createElement(d1, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: v,
          children: d(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : d()
  }, null)
}
var us = (function (e) {
  return (
    (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId'),
    e
  )
})(us || {})
function h1(e) {
  let t = N.useContext(Gp)
  return t || G(!1), t
}
function m1(e) {
  let t = N.useContext(wl)
  return t || G(!1), t
}
function g1(e) {
  let t = m1(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || G(!1), n.route.id
}
function y1() {
  var e
  let t = N.useContext(Jp),
    n = h1(us.UseRouteError),
    r = g1(us.UseRouteError)
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
const od = {}
function v1(e, t, n) {
  !t && !od[e] && (od[e] = !0)
}
function w1(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = xe.Pop,
    navigator: o,
    static: l = !1,
    future: a,
  } = e
  gu() && G(!1)
  let s = t.replace(/^\/*/, '/'),
    u = N.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: l,
        future: Go({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, o, l]
    )
  typeof r == 'string' && (r = Qt(r))
  let {
      pathname: c = '/',
      search: p = '',
      hash: h = '',
      state: v = null,
      key: S = 'default',
    } = r,
    w = N.useMemo(() => {
      let P = Ai(c, s)
      return P == null
        ? null
        : {
            location: { pathname: P, search: p, hash: h, state: v, key: S },
            navigationType: i,
          }
    }, [s, c, p, h, v, S, i])
  return w == null
    ? null
    : N.createElement(
        Xp.Provider,
        { value: u },
        N.createElement(vl.Provider, { children: n, value: w })
      )
}
new Promise(() => {})
function x1(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  }
  return (
    e.Component &&
      Object.assign(t, {
        element: N.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: N.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: N.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  )
}
/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xo() {
  return (
    (Xo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Xo.apply(this, arguments)
  )
}
const S1 = '6'
try {
  window.__reactRouterVersion = S1
} catch {}
function k1(e, t) {
  return Zg({
    basename: t == null ? void 0 : t.basename,
    future: Xo({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: hg({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || z1(),
    routes: e,
    mapRouteProperties: x1,
    window: t == null ? void 0 : t.window,
  }).initialize()
}
function z1() {
  var e
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData
  return t && t.errors && (t = Xo({}, t, { errors: E1(t.errors) })), t
}
function E1(e) {
  if (!e) return null
  let t = Object.entries(e),
    n = {}
  for (let [r, i] of t)
    if (i && i.__type === 'RouteErrorResponse')
      n[r] = new hu(i.status, i.statusText, i.data, i.internal === !0)
    else if (i && i.__type === 'Error') {
      if (i.__subType) {
        let o = window[i.__subType]
        if (typeof o == 'function')
          try {
            let l = new o(i.message)
            ;(l.stack = ''), (n[r] = l)
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message)
        ;(o.stack = ''), (n[r] = o)
      }
    } else n[r] = i
  return n
}
const C1 = N.createContext({ isTransitioning: !1 }),
  P1 = N.createContext(new Map()),
  j1 = 'startTransition',
  ld = nm[j1],
  R1 = 'flushSync',
  ad = pg[R1]
function _1(e) {
  ld ? ld(e) : e()
}
function Yr(e) {
  ad ? ad(e) : e()
}
class T1 {
  constructor() {
    ;(this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        ;(this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r))
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r))
          })
      }))
  }
}
function L1(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = N.useState(n.state),
    [l, a] = N.useState(),
    [s, u] = N.useState({ isTransitioning: !1 }),
    [c, p] = N.useState(),
    [h, v] = N.useState(),
    [S, w] = N.useState(),
    P = N.useRef(new Map()),
    { v7_startTransition: f } = r || {},
    d = N.useCallback(
      (z) => {
        f ? _1(z) : z()
      },
      [f]
    ),
    m = N.useCallback(
      (z, _) => {
        let {
          deletedFetchers: D,
          unstable_flushSync: F,
          unstable_viewTransitionOpts: Y,
        } = _
        D.forEach((pe) => P.current.delete(pe)),
          z.fetchers.forEach((pe, Qe) => {
            pe.data !== void 0 && P.current.set(Qe, pe.data)
          })
        let ye =
          n.window == null ||
          typeof n.window.document.startViewTransition != 'function'
        if (!Y || ye) {
          F ? Yr(() => o(z)) : d(() => o(z))
          return
        }
        if (F) {
          Yr(() => {
            h && (c && c.resolve(), h.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Y.currentLocation,
                nextLocation: Y.nextLocation,
              })
          })
          let pe = n.window.document.startViewTransition(() => {
            Yr(() => o(z))
          })
          pe.finished.finally(() => {
            Yr(() => {
              p(void 0), v(void 0), a(void 0), u({ isTransitioning: !1 })
            })
          }),
            Yr(() => v(pe))
          return
        }
        h
          ? (c && c.resolve(),
            h.skipTransition(),
            w({
              state: z,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
          : (a(z),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
      },
      [n.window, h, c, P, d]
    )
  N.useLayoutEffect(() => n.subscribe(m), [n, m]),
    N.useEffect(() => {
      s.isTransitioning && !s.flushSync && p(new T1())
    }, [s]),
    N.useEffect(() => {
      if (c && l && n.window) {
        let z = l,
          _ = c.promise,
          D = n.window.document.startViewTransition(async () => {
            d(() => o(z)), await _
          })
        D.finished.finally(() => {
          p(void 0), v(void 0), a(void 0), u({ isTransitioning: !1 })
        }),
          v(D)
      }
    }, [d, l, c, n.window]),
    N.useEffect(() => {
      c && l && i.location.key === l.location.key && c.resolve()
    }, [c, h, i.location, l]),
    N.useEffect(() => {
      !s.isTransitioning &&
        S &&
        (a(S.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: S.currentLocation,
          nextLocation: S.nextLocation,
        }),
        w(void 0))
    }, [s.isTransitioning, S]),
    N.useEffect(() => {}, [])
  let E = N.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (z) => n.navigate(z),
        push: (z, _, D) =>
          n.navigate(z, {
            state: _,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset,
          }),
        replace: (z, _, D) =>
          n.navigate(z, {
            replace: !0,
            state: _,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset,
          }),
      }),
      [n]
    ),
    j = n.basename || '/',
    g = N.useMemo(
      () => ({ router: n, navigator: E, static: !1, basename: j }),
      [n, E, j]
    )
  return N.createElement(
    N.Fragment,
    null,
    N.createElement(
      qp.Provider,
      { value: g },
      N.createElement(
        Gp.Provider,
        { value: i },
        N.createElement(
          P1.Provider,
          { value: P.current },
          N.createElement(
            C1.Provider,
            { value: s },
            N.createElement(
              w1,
              {
                basename: j,
                location: i.location,
                navigationType: i.historyAction,
                navigator: E,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? N.createElement(N1, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  )
}
function N1(e) {
  let { routes: t, future: n, state: r } = e
  return s1(t, void 0, r, n)
}
var sd
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(sd || (sd = {}))
var ud
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(ud || (ud = {}))
var Le = function () {
  return (
    (Le =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r]
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
      }),
    Le.apply(this, arguments)
  )
}
function Ti(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]))
  return e.concat(o || Array.prototype.slice.call(t))
}
var le = '-ms-',
  di = '-moz-',
  J = '-webkit-',
  eh = 'comm',
  xl = 'rule',
  yu = 'decl',
  M1 = '@import',
  th = '@keyframes',
  D1 = '@layer',
  nh = Math.abs,
  vu = String.fromCharCode,
  cs = Object.assign
function $1(e, t) {
  return Te(e, 0) ^ 45
    ? (((((((t << 2) ^ Te(e, 0)) << 2) ^ Te(e, 1)) << 2) ^ Te(e, 2)) << 2) ^
        Te(e, 3)
    : 0
}
function rh(e) {
  return e.trim()
}
function It(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function W(e, t, n) {
  return e.replace(t, n)
}
function ko(e, t, n) {
  return e.indexOf(t, n)
}
function Te(e, t) {
  return e.charCodeAt(t) | 0
}
function Pr(e, t, n) {
  return e.slice(t, n)
}
function Tt(e) {
  return e.length
}
function ih(e) {
  return e.length
}
function ei(e, t) {
  return t.push(e), e
}
function I1(e, t) {
  return e.map(t).join('')
}
function cd(e, t) {
  return e.filter(function (n) {
    return !It(n, t)
  })
}
var Sl = 1,
  jr = 1,
  oh = 0,
  gt = 0,
  ke = 0,
  Mr = ''
function kl(e, t, n, r, i, o, l, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Sl,
    column: jr,
    length: l,
    return: '',
    siblings: a,
  }
}
function Jt(e, t) {
  return cs(
    kl('', null, null, '', null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  )
}
function Gn(e) {
  for (; e.root; ) e = Jt(e.root, { children: [e] })
  ei(e, e.siblings)
}
function O1() {
  return ke
}
function F1() {
  return (
    (ke = gt > 0 ? Te(Mr, --gt) : 0), jr--, ke === 10 && ((jr = 1), Sl--), ke
  )
}
function Et() {
  return (
    (ke = gt < oh ? Te(Mr, gt++) : 0), jr++, ke === 10 && ((jr = 1), Sl++), ke
  )
}
function $n() {
  return Te(Mr, gt)
}
function zo() {
  return gt
}
function zl(e, t) {
  return Pr(Mr, e, t)
}
function ds(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function A1(e) {
  return (Sl = jr = 1), (oh = Tt((Mr = e))), (gt = 0), []
}
function U1(e) {
  return (Mr = ''), e
}
function aa(e) {
  return rh(zl(gt - 1, fs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function B1(e) {
  for (; (ke = $n()) && ke < 33; ) Et()
  return ds(e) > 2 || ds(ke) > 3 ? '' : ' '
}
function H1(e, t) {
  for (
    ;
    --t &&
    Et() &&
    !(ke < 48 || ke > 102 || (ke > 57 && ke < 65) || (ke > 70 && ke < 97));

  );
  return zl(e, zo() + (t < 6 && $n() == 32 && Et() == 32))
}
function fs(e) {
  for (; Et(); )
    switch (ke) {
      case e:
        return gt
      case 34:
      case 39:
        e !== 34 && e !== 39 && fs(ke)
        break
      case 40:
        e === 41 && fs(e)
        break
      case 92:
        Et()
        break
    }
  return gt
}
function V1(e, t) {
  for (; Et() && e + ke !== 47 + 10; )
    if (e + ke === 42 + 42 && $n() === 47) break
  return '/*' + zl(t, gt - 1) + '*' + vu(e === 47 ? e : Et())
}
function W1(e) {
  for (; !ds($n()); ) Et()
  return zl(e, gt)
}
function b1(e) {
  return U1(Eo('', null, null, null, [''], (e = A1(e)), 0, [0], e))
}
function Eo(e, t, n, r, i, o, l, a, s) {
  for (
    var u = 0,
      c = 0,
      p = l,
      h = 0,
      v = 0,
      S = 0,
      w = 1,
      P = 1,
      f = 1,
      d = 0,
      m = '',
      E = i,
      j = o,
      g = r,
      z = m;
    P;

  )
    switch (((S = d), (d = Et()))) {
      case 40:
        if (S != 108 && Te(z, p - 1) == 58) {
          ko((z += W(aa(d), '&', '&\f')), '&\f', nh(u ? a[u - 1] : 0)) != -1 &&
            (f = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        z += aa(d)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        z += B1(S)
        break
      case 92:
        z += H1(zo() - 1, 7)
        continue
      case 47:
        switch ($n()) {
          case 42:
          case 47:
            ei(Q1(V1(Et(), zo()), t, n, s), s)
            break
          default:
            z += '/'
        }
        break
      case 123 * w:
        a[u++] = Tt(z) * f
      case 125 * w:
      case 59:
      case 0:
        switch (d) {
          case 0:
          case 125:
            P = 0
          case 59 + c:
            f == -1 && (z = W(z, /\f/g, '')),
              v > 0 &&
                Tt(z) - p &&
                ei(
                  v > 32
                    ? fd(z + ';', r, n, p - 1, s)
                    : fd(W(z, ' ', '') + ';', r, n, p - 2, s),
                  s
                )
            break
          case 59:
            z += ';'
          default:
            if (
              (ei(
                (g = dd(z, t, n, u, c, i, a, m, (E = []), (j = []), p, o)),
                o
              ),
              d === 123)
            )
              if (c === 0) Eo(z, t, g, g, E, o, p, a, j)
              else
                switch (h === 99 && Te(z, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Eo(
                      e,
                      g,
                      g,
                      r && ei(dd(e, g, g, 0, 0, i, a, m, i, (E = []), p, j), j),
                      i,
                      j,
                      p,
                      a,
                      r ? E : j
                    )
                    break
                  default:
                    Eo(z, g, g, g, [''], j, 0, a, j)
                }
        }
        ;(u = c = v = 0), (w = f = 1), (m = z = ''), (p = l)
        break
      case 58:
        ;(p = 1 + Tt(z)), (v = S)
      default:
        if (w < 1) {
          if (d == 123) --w
          else if (d == 125 && w++ == 0 && F1() == 125) continue
        }
        switch (((z += vu(d)), d * w)) {
          case 38:
            f = c > 0 ? 1 : ((z += '\f'), -1)
            break
          case 44:
            ;(a[u++] = (Tt(z) - 1) * f), (f = 1)
            break
          case 64:
            $n() === 45 && (z += aa(Et())),
              (h = $n()),
              (c = p = Tt((m = z += W1(zo())))),
              d++
            break
          case 45:
            S === 45 && Tt(z) == 2 && (w = 0)
        }
    }
  return o
}
function dd(e, t, n, r, i, o, l, a, s, u, c, p) {
  for (
    var h = i - 1, v = i === 0 ? o : [''], S = ih(v), w = 0, P = 0, f = 0;
    w < r;
    ++w
  )
    for (var d = 0, m = Pr(e, h + 1, (h = nh((P = l[w])))), E = e; d < S; ++d)
      (E = rh(P > 0 ? v[d] + ' ' + m : W(m, /&\f/g, v[d]))) && (s[f++] = E)
  return kl(e, t, n, i === 0 ? xl : a, s, u, c, p)
}
function Q1(e, t, n, r) {
  return kl(e, t, n, eh, vu(O1()), Pr(e, 2, -2), 0, r)
}
function fd(e, t, n, r, i) {
  return kl(e, t, n, yu, Pr(e, 0, r), Pr(e, r + 1, -1), r, i)
}
function lh(e, t, n) {
  switch ($1(e, t)) {
    case 5103:
      return J + 'print-' + e + e
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return J + e + e
    case 4789:
      return di + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return J + e + di + e + le + e + e
    case 5936:
      switch (Te(e, t + 11)) {
        case 114:
          return J + e + le + W(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return J + e + le + W(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return J + e + le + W(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
    case 6828:
    case 4268:
    case 2903:
      return J + e + le + e + e
    case 6165:
      return J + e + le + 'flex-' + e + e
    case 5187:
      return (
        J + e + W(e, /(\w+).+(:[^]+)/, J + 'box-$1$2' + le + 'flex-$1$2') + e
      )
    case 5443:
      return (
        J +
        e +
        le +
        'flex-item-' +
        W(e, /flex-|-self/g, '') +
        (It(e, /flex-|baseline/)
          ? ''
          : le + 'grid-row-' + W(e, /flex-|-self/g, '')) +
        e
      )
    case 4675:
      return (
        J +
        e +
        le +
        'flex-line-pack' +
        W(e, /align-content|flex-|-self/g, '') +
        e
      )
    case 5548:
      return J + e + le + W(e, 'shrink', 'negative') + e
    case 5292:
      return J + e + le + W(e, 'basis', 'preferred-size') + e
    case 6060:
      return (
        J +
        'box-' +
        W(e, '-grow', '') +
        J +
        e +
        le +
        W(e, 'grow', 'positive') +
        e
      )
    case 4554:
      return J + W(e, /([^-])(transform)/g, '$1' + J + '$2') + e
    case 6187:
      return (
        W(W(W(e, /(zoom-|grab)/, J + '$1'), /(image-set)/, J + '$1'), e, '') + e
      )
    case 5495:
    case 3959:
      return W(e, /(image-set\([^]*)/, J + '$1$`$1')
    case 4968:
      return (
        W(
          W(e, /(.+:)(flex-)?(.*)/, J + 'box-pack:$3' + le + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        J +
        e +
        e
      )
    case 4200:
      if (!It(e, /flex-|baseline/))
        return le + 'grid-column-align' + Pr(e, t) + e
      break
    case 2592:
    case 3360:
      return le + W(e, 'template-', '') + e
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), It(r.props, /grid-\w+-end/)
        })
        ? ~ko(e + (n = n[t].value), 'span', 0)
          ? e
          : le +
            W(e, '-start', '') +
            e +
            le +
            'grid-row-span:' +
            (~ko(n, 'span', 0) ? It(n, /\d+/) : +It(n, /\d+/) - +It(e, /\d+/)) +
            ';'
        : le + W(e, '-start', '') + e
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return It(r.props, /grid-\w+-start/)
        })
        ? e
        : le + W(W(e, '-end', '-span'), 'span ', '') + e
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(e, /(.+)-inline(.+)/, J + '$1$2') + e
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Tt(e) - 1 - t > 6)
        switch (Te(e, t + 1)) {
          case 109:
            if (Te(e, t + 4) !== 45) break
          case 102:
            return (
              W(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  J +
                  '$2-$3$1' +
                  di +
                  (Te(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            )
          case 115:
            return ~ko(e, 'stretch', 0)
              ? lh(W(e, 'stretch', 'fill-available'), t, n) + e
              : e
        }
      break
    case 5152:
    case 5920:
      return W(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, o, l, a, s, u) {
          return (
            le +
            i +
            ':' +
            o +
            u +
            (l ? le + i + '-span:' + (a ? s : +s - +o) + u : '') +
            e
          )
        }
      )
    case 4949:
      if (Te(e, t + 6) === 121) return W(e, ':', ':' + J) + e
      break
    case 6444:
      switch (Te(e, Te(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            W(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              '$1' +
                J +
                (Te(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                J +
                '$2$3$1' +
                le +
                '$2box$3'
            ) + e
          )
        case 100:
          return W(e, ':', ':' + le) + e
      }
      break
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return W(e, 'scroll-', 'scroll-snap-') + e
  }
  return e
}
function Jo(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || ''
  return n
}
function K1(e, t, n, r) {
  switch (e.type) {
    case D1:
      if (e.children.length) break
    case M1:
    case yu:
      return (e.return = e.return || e.value)
    case eh:
      return ''
    case th:
      return (e.return = e.value + '{' + Jo(e.children, r) + '}')
    case xl:
      if (!Tt((e.value = e.props.join(',')))) return ''
  }
  return Tt((n = Jo(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
function Z1(e) {
  var t = ih(e)
  return function (n, r, i, o) {
    for (var l = '', a = 0; a < t; a++) l += e[a](n, r, i, o) || ''
    return l
  }
}
function Y1(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
function q1(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case yu:
        e.return = lh(e.value, e.length, n)
        return
      case th:
        return Jo([Jt(e, { value: W(e.value, '@', '@' + J) })], r)
      case xl:
        if (e.length)
          return I1((n = e.props), function (i) {
            switch (It(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ':read-only':
              case ':read-write':
                Gn(Jt(e, { props: [W(i, /:(read-\w+)/, ':' + di + '$1')] })),
                  Gn(Jt(e, { props: [i] })),
                  cs(e, { props: cd(n, r) })
                break
              case '::placeholder':
                Gn(
                  Jt(e, { props: [W(i, /:(plac\w+)/, ':' + J + 'input-$1')] })
                ),
                  Gn(Jt(e, { props: [W(i, /:(plac\w+)/, ':' + di + '$1')] })),
                  Gn(Jt(e, { props: [W(i, /:(plac\w+)/, le + 'input-$1')] })),
                  Gn(Jt(e, { props: [i] })),
                  cs(e, { props: cd(n, r) })
                break
            }
            return ''
          })
    }
}
var G1 = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Rr =
    (typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    'data-styled',
  ah = 'active',
  sh = 'data-styled-version',
  El = '6.1.8',
  wu = `/*!sc*/
`,
  xu = typeof window < 'u' && 'HTMLElement' in window,
  X1 = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      process.env !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ''
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      process.env !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== '' &&
      {}.SC_DISABLE_SPEEDY !== 'false' &&
      {}.SC_DISABLE_SPEEDY),
  J1 = {},
  Cl = Object.freeze([]),
  _r = Object.freeze({})
function uh(e, t, n) {
  return (
    n === void 0 && (n = _r), (e.theme !== n.theme && e.theme) || t || n.theme
  )
}
var ch = new Set([
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'u',
    'ul',
    'use',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ]),
  ey = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  ty = /(^-|-$)/g
function pd(e) {
  return e.replace(ey, '-').replace(ty, '')
}
var ny = /(a)(d)/gi,
  ao = 52,
  hd = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97))
  }
function ps(e) {
  var t,
    n = ''
  for (t = Math.abs(e); t > ao; t = (t / ao) | 0) n = hd(t % ao) + n
  return (hd(t % ao) + n).replace(ny, '$1-$2')
}
var sa,
  dh = 5381,
  fr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n)
    return e
  },
  fh = function (e) {
    return fr(dh, e)
  }
function ph(e) {
  return ps(fh(e) >>> 0)
}
function ry(e) {
  return e.displayName || e.name || 'Component'
}
function ua(e) {
  return typeof e == 'string' && !0
}
var hh = typeof Symbol == 'function' && Symbol.for,
  mh = hh ? Symbol.for('react.memo') : 60115,
  iy = hh ? Symbol.for('react.forward_ref') : 60112,
  oy = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  ly = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  gh = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ay =
    (((sa = {})[iy] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (sa[mh] = gh),
    sa)
function md(e) {
  return ('type' in (t = e) && t.type.$$typeof) === mh
    ? gh
    : '$$typeof' in e
    ? ay[e.$$typeof]
    : oy
  var t
}
var sy = Object.defineProperty,
  uy = Object.getOwnPropertyNames,
  gd = Object.getOwnPropertySymbols,
  cy = Object.getOwnPropertyDescriptor,
  dy = Object.getPrototypeOf,
  yd = Object.prototype
function yh(e, t, n) {
  if (typeof t != 'string') {
    if (yd) {
      var r = dy(t)
      r && r !== yd && yh(e, r, n)
    }
    var i = uy(t)
    gd && (i = i.concat(gd(t)))
    for (var o = md(e), l = md(t), a = 0; a < i.length; ++a) {
      var s = i[a]
      if (!(s in ly || (n && n[s]) || (l && s in l) || (o && s in o))) {
        var u = cy(t, s)
        try {
          sy(e, s, u)
        } catch {}
      }
    }
  }
  return e
}
function Vn(e) {
  return typeof e == 'function'
}
function Su(e) {
  return typeof e == 'object' && 'styledComponentId' in e
}
function Ln(e, t) {
  return e && t ? ''.concat(e, ' ').concat(t) : e || t || ''
}
function hs(e, t) {
  if (e.length === 0) return ''
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r]
  return n
}
function Li(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    e.constructor.name === Object.name &&
    !('props' in e && e.$$typeof)
  )
}
function ms(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Li(e) && !Array.isArray(e))) return t
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = ms(e[r], t[r])
  else if (Li(t)) for (var r in t) e[r] = ms(e[r], t[r])
  return e
}
function ku(e, t) {
  Object.defineProperty(e, 'toString', { value: t })
}
function Wn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
  return new Error(
    'An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#'
      .concat(e, ' for more information.')
      .concat(t.length > 0 ? ' Args: '.concat(t.join(', ')) : '')
  )
}
var fy = (function () {
    function e(t) {
      ;(this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t)
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r]
        return n
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, o = i; t >= o; )
            if ((o <<= 1) < 0) throw Wn(16, ''.concat(t))
          ;(this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(r),
            (this.length = o)
          for (var l = i; l < o; l++) this.groupSizes[l] = 0
        }
        for (
          var a = this.indexOfGroup(t + 1), s = ((l = 0), n.length);
          l < s;
          l++
        )
          this.tag.insertRule(a, n[l]) && (this.groupSizes[t]++, a++)
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n
          this.groupSizes[t] = 0
          for (var o = r; o < i; o++) this.tag.deleteRule(r)
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = ''
        if (t >= this.length || this.groupSizes[t] === 0) return n
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            o = i + r,
            l = i;
          l < o;
          l++
        )
          n += ''.concat(this.tag.getRule(l)).concat(wu)
        return n
      }),
      e
    )
  })(),
  Co = new Map(),
  el = new Map(),
  Po = 1,
  so = function (e) {
    if (Co.has(e)) return Co.get(e)
    for (; el.has(Po); ) Po++
    var t = Po++
    return Co.set(e, t), el.set(t, e), t
  },
  py = function (e, t) {
    ;(Po = t + 1), Co.set(e, t), el.set(t, e)
  },
  hy = 'style['.concat(Rr, '][').concat(sh, '="').concat(El, '"]'),
  my = new RegExp(
    '^'.concat(Rr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  gy = function (e, t, n) {
    for (var r, i = n.split(','), o = 0, l = i.length; o < l; o++)
      (r = i[o]) && e.registerName(t, r)
  },
  yy = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : '').split(wu),
        i = [],
        o = 0,
        l = r.length;
      o < l;
      o++
    ) {
      var a = r[o].trim()
      if (a) {
        var s = a.match(my)
        if (s) {
          var u = 0 | parseInt(s[1], 10),
            c = s[2]
          u !== 0 && (py(c, u), gy(e, c, s[3]), e.getTag().insertRules(u, i)),
            (i.length = 0)
        } else i.push(a)
      }
    }
  }
function vy() {
  return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null
}
var vh = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement('style'),
      i = (function (a) {
        var s = Array.from(a.querySelectorAll('style['.concat(Rr, ']')))
        return s[s.length - 1]
      })(n),
      o = i !== void 0 ? i.nextSibling : null
    r.setAttribute(Rr, ah), r.setAttribute(sh, El)
    var l = vy()
    return l && r.setAttribute('nonce', l), n.insertBefore(r, o), r
  },
  wy = (function () {
    function e(t) {
      ;(this.element = vh(t)),
        this.element.appendChild(document.createTextNode('')),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet
          for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
            var l = r[i]
            if (l.ownerNode === n) return l
          }
          throw Wn(17)
        })(this.element)),
        (this.length = 0)
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0
        } catch {
          return !1
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t]
        return n && n.cssText ? n.cssText : ''
      }),
      e
    )
  })(),
  xy = (function () {
    function e(t) {
      ;(this.element = vh(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0)
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n)
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          )
        }
        return !1
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : ''
      }),
      e
    )
  })(),
  Sy = (function () {
    function e(t) {
      ;(this.rules = []), (this.length = 0)
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        )
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : ''
      }),
      e
    )
  })(),
  vd = xu,
  ky = { isServer: !xu, useCSSOMInjection: !X1 },
  tl = (function () {
    function e(t, n, r) {
      t === void 0 && (t = _r), n === void 0 && (n = {})
      var i = this
      ;(this.options = Le(Le({}, ky), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          xu &&
          vd &&
          ((vd = !1),
          (function (o) {
            for (
              var l = document.querySelectorAll(hy), a = 0, s = l.length;
              a < s;
              a++
            ) {
              var u = l[a]
              u &&
                u.getAttribute(Rr) !== ah &&
                (yy(o, u), u.parentNode && u.parentNode.removeChild(u))
            }
          })(this)),
        ku(this, function () {
          return (function (o) {
            for (
              var l = o.getTag(),
                a = l.length,
                s = '',
                u = function (p) {
                  var h = (function (f) {
                    return el.get(f)
                  })(p)
                  if (h === void 0) return 'continue'
                  var v = o.names.get(h),
                    S = l.getGroup(p)
                  if (v === void 0 || S.length === 0) return 'continue'
                  var w = ''
                      .concat(Rr, '.g')
                      .concat(p, '[id="')
                      .concat(h, '"]'),
                    P = ''
                  v !== void 0 &&
                    v.forEach(function (f) {
                      f.length > 0 && (P += ''.concat(f, ','))
                    }),
                    (s += ''
                      .concat(S)
                      .concat(w, '{content:"')
                      .concat(P, '"}')
                      .concat(wu))
                },
                c = 0;
              c < a;
              c++
            )
              u(c)
            return s
          })(i)
        })
    }
    return (
      (e.registerId = function (t) {
        return so(t)
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Le(Le({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        )
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1)
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target
              return n.isServer ? new Sy(i) : r ? new wy(i) : new xy(i)
            })(this.options)),
            new fy(t)))
        )
        var t
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n)
      }),
      (e.prototype.registerName = function (t, n) {
        if ((so(t), this.names.has(t))) this.names.get(t).add(n)
        else {
          var r = new Set()
          r.add(n), this.names.set(t, r)
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(so(t), r)
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear()
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(so(t)), this.clearNames(t)
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0
      }),
      e
    )
  })(),
  zy = /&/g,
  Ey = /^\s*\/\/.*$/gm
function wh(e, t) {
  return e.map(function (n) {
    return (
      n.type === 'rule' &&
        ((n.value = ''.concat(t, ' ').concat(n.value)),
        (n.value = n.value.replaceAll(',', ','.concat(t, ' '))),
        (n.props = n.props.map(function (r) {
          return ''.concat(t, ' ').concat(r)
        }))),
      Array.isArray(n.children) &&
        n.type !== '@keyframes' &&
        (n.children = wh(n.children, t)),
      n
    )
  })
}
function Cy(e) {
  var t,
    n,
    r,
    i = e === void 0 ? _r : e,
    o = i.options,
    l = o === void 0 ? _r : o,
    a = i.plugins,
    s = a === void 0 ? Cl : a,
    u = function (h, v, S) {
      return S.startsWith(n) && S.endsWith(n) && S.replaceAll(n, '').length > 0
        ? '.'.concat(t)
        : h
    },
    c = s.slice()
  c.push(function (h) {
    h.type === xl &&
      h.value.includes('&') &&
      (h.props[0] = h.props[0].replace(zy, n).replace(r, u))
  }),
    l.prefix && c.push(q1),
    c.push(K1)
  var p = function (h, v, S, w) {
    v === void 0 && (v = ''),
      S === void 0 && (S = ''),
      w === void 0 && (w = '&'),
      (t = w),
      (n = v),
      (r = new RegExp('\\'.concat(n, '\\b'), 'g'))
    var P = h.replace(Ey, ''),
      f = b1(S || v ? ''.concat(S, ' ').concat(v, ' { ').concat(P, ' }') : P)
    l.namespace && (f = wh(f, l.namespace))
    var d = []
    return (
      Jo(
        f,
        Z1(
          c.concat(
            Y1(function (m) {
              return d.push(m)
            })
          )
        )
      ),
      d
    )
  }
  return (
    (p.hash = s.length
      ? s
          .reduce(function (h, v) {
            return v.name || Wn(15), fr(h, v.name)
          }, dh)
          .toString()
      : ''),
    p
  )
}
var Py = new tl(),
  gs = Cy(),
  xh = dt.createContext({
    shouldForwardProp: void 0,
    styleSheet: Py,
    stylis: gs,
  })
xh.Consumer
dt.createContext(void 0)
function ys() {
  return N.useContext(xh)
}
var jy = (function () {
    function e(t, n) {
      var r = this
      ;(this.inject = function (i, o) {
        o === void 0 && (o = gs)
        var l = r.name + o.hash
        i.hasNameForId(r.id, l) ||
          i.insertRules(r.id, l, o(r.rules, l, '@keyframes'))
      }),
        (this.name = t),
        (this.id = 'sc-keyframes-'.concat(t)),
        (this.rules = n),
        ku(this, function () {
          throw Wn(12, String(r.name))
        })
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = gs), this.name + t.hash
      }),
      e
    )
  })(),
  Ry = function (e) {
    return e >= 'A' && e <= 'Z'
  }
function wd(e) {
  for (var t = '', n = 0; n < e.length; n++) {
    var r = e[n]
    if (n === 1 && r === '-' && e[0] === '-') return e
    Ry(r) ? (t += '-' + r.toLowerCase()) : (t += r)
  }
  return t.startsWith('ms-') ? '-' + t : t
}
var Sh = function (e) {
    return e == null || e === !1 || e === ''
  },
  kh = function (e) {
    var t,
      n,
      r = []
    for (var i in e) {
      var o = e[i]
      e.hasOwnProperty(i) &&
        !Sh(o) &&
        ((Array.isArray(o) && o.isCss) || Vn(o)
          ? r.push(''.concat(wd(i), ':'), o, ';')
          : Li(o)
          ? r.push.apply(r, Ti(Ti([''.concat(i, ' {')], kh(o), !1), ['}'], !1))
          : r.push(
              ''
                .concat(wd(i), ': ')
                .concat(
                  ((t = i),
                  (n = o) == null || typeof n == 'boolean' || n === ''
                    ? ''
                    : typeof n != 'number' ||
                      n === 0 ||
                      t in G1 ||
                      t.startsWith('--')
                    ? String(n).trim()
                    : ''.concat(n, 'px')),
                  ';'
                )
            ))
    }
    return r
  }
function mn(e, t, n, r) {
  if (Sh(e)) return []
  if (Su(e)) return ['.'.concat(e.styledComponentId)]
  if (Vn(e)) {
    if (!Vn((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e]
    var i = e(t)
    return mn(i, t, n, r)
  }
  var o
  return e instanceof jy
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Li(e)
    ? kh(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Cl,
        e.map(function (l) {
          return mn(l, t, n, r)
        })
      )
    : [e.toString()]
}
function zh(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t]
    if (Vn(n) && !Su(n)) return !1
  }
  return !0
}
var _y = fh(El),
  Ty = (function () {
    function e(t, n, r) {
      ;(this.rules = t),
        (this.staticRulesId = ''),
        (this.isStatic = (r === void 0 || r.isStatic) && zh(t)),
        (this.componentId = n),
        (this.baseHash = fr(_y, n)),
        (this.baseStyle = r),
        tl.registerId(n)
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : ''
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = Ln(i, this.staticRulesId)
          else {
            var o = hs(mn(this.rules, t, n, r)),
              l = ps(fr(this.baseHash, o) >>> 0)
            if (!n.hasNameForId(this.componentId, l)) {
              var a = r(o, '.'.concat(l), void 0, this.componentId)
              n.insertRules(this.componentId, l, a)
            }
            ;(i = Ln(i, l)), (this.staticRulesId = l)
          }
        else {
          for (
            var s = fr(this.baseHash, r.hash), u = '', c = 0;
            c < this.rules.length;
            c++
          ) {
            var p = this.rules[c]
            if (typeof p == 'string') u += p
            else if (p) {
              var h = hs(mn(p, t, n, r))
              ;(s = fr(s, h + c)), (u += h)
            }
          }
          if (u) {
            var v = ps(s >>> 0)
            n.hasNameForId(this.componentId, v) ||
              n.insertRules(
                this.componentId,
                v,
                r(u, '.'.concat(v), void 0, this.componentId)
              ),
              (i = Ln(i, v))
          }
        }
        return i
      }),
      e
    )
  })(),
  Ni = dt.createContext(void 0)
Ni.Consumer
function Ly(e) {
  var t = dt.useContext(Ni),
    n = N.useMemo(
      function () {
        return (function (r, i) {
          if (!r) throw Wn(14)
          if (Vn(r)) {
            var o = r(i)
            return o
          }
          if (Array.isArray(r) || typeof r != 'object') throw Wn(8)
          return i ? Le(Le({}, i), r) : r
        })(e.theme, t)
      },
      [e.theme, t]
    )
  return e.children
    ? dt.createElement(Ni.Provider, { value: n }, e.children)
    : null
}
var ca = {}
function Ny(e, t, n) {
  var r = Su(e),
    i = e,
    o = !ua(e),
    l = t.attrs,
    a = l === void 0 ? Cl : l,
    s = t.componentId,
    u =
      s === void 0
        ? (function (E, j) {
            var g = typeof E != 'string' ? 'sc' : pd(E)
            ca[g] = (ca[g] || 0) + 1
            var z = ''.concat(g, '-').concat(ph(El + g + ca[g]))
            return j ? ''.concat(j, '-').concat(z) : z
          })(t.displayName, t.parentComponentId)
        : s,
    c = t.displayName,
    p =
      c === void 0
        ? (function (E) {
            return ua(E) ? 'styled.'.concat(E) : 'Styled('.concat(ry(E), ')')
          })(e)
        : c,
    h =
      t.displayName && t.componentId
        ? ''.concat(pd(t.displayName), '-').concat(t.componentId)
        : t.componentId || u,
    v = r && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
    S = t.shouldForwardProp
  if (r && i.shouldForwardProp) {
    var w = i.shouldForwardProp
    if (t.shouldForwardProp) {
      var P = t.shouldForwardProp
      S = function (E, j) {
        return w(E, j) && P(E, j)
      }
    } else S = w
  }
  var f = new Ty(n, h, r ? i.componentStyle : void 0)
  function d(E, j) {
    return (function (g, z, _) {
      var D = g.attrs,
        F = g.componentStyle,
        Y = g.defaultProps,
        ye = g.foldedComponentIds,
        pe = g.styledComponentId,
        Qe = g.target,
        Kt = dt.useContext(Ni),
        Pt = ys(),
        te = g.shouldForwardProp || Pt.shouldForwardProp,
        L = uh(z, Kt, Y) || _r,
        I = (function (Oe, we, et) {
          for (
            var Sn,
              Dt = Le(Le({}, we), { className: void 0, theme: et }),
              Dr = 0;
            Dr < Oe.length;
            Dr += 1
          ) {
            var Pe = Vn((Sn = Oe[Dr])) ? Sn(Dt) : Sn
            for (var Ke in Pe)
              Dt[Ke] =
                Ke === 'className'
                  ? Ln(Dt[Ke], Pe[Ke])
                  : Ke === 'style'
                  ? Le(Le({}, Dt[Ke]), Pe[Ke])
                  : Pe[Ke]
          }
          return (
            we.className && (Dt.className = Ln(Dt.className, we.className)), Dt
          )
        })(D, z, L),
        A = I.as || Qe,
        Q = {}
      for (var q in I)
        I[q] === void 0 ||
          q[0] === '$' ||
          q === 'as' ||
          (q === 'theme' && I.theme === L) ||
          (q === 'forwardedAs'
            ? (Q.as = I.forwardedAs)
            : (te && !te(q, A)) || (Q[q] = I[q]))
      var Je = (function (Oe, we) {
          var et = ys(),
            Sn = Oe.generateAndInjectStyles(we, et.styleSheet, et.stylis)
          return Sn
        })(F, I),
        ve = Ln(ye, pe)
      return (
        Je && (ve += ' ' + Je),
        I.className && (ve += ' ' + I.className),
        (Q[ua(A) && !ch.has(A) ? 'class' : 'className'] = ve),
        (Q.ref = _),
        N.createElement(A, Q)
      )
    })(m, E, j)
  }
  d.displayName = p
  var m = dt.forwardRef(d)
  return (
    (m.attrs = v),
    (m.componentStyle = f),
    (m.displayName = p),
    (m.shouldForwardProp = S),
    (m.foldedComponentIds = r
      ? Ln(i.foldedComponentIds, i.styledComponentId)
      : ''),
    (m.styledComponentId = h),
    (m.target = r ? i.target : e),
    Object.defineProperty(m, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps
      },
      set: function (E) {
        this._foldedDefaultProps = r
          ? (function (j) {
              for (var g = [], z = 1; z < arguments.length; z++)
                g[z - 1] = arguments[z]
              for (var _ = 0, D = g; _ < D.length; _++) ms(j, D[_], !0)
              return j
            })({}, i.defaultProps, E)
          : E
      },
    }),
    ku(m, function () {
      return '.'.concat(m.styledComponentId)
    }),
    o &&
      yh(m, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    m
  )
}
function xd(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1])
  return n
}
var Sd = function (e) {
  return Object.assign(e, { isCss: !0 })
}
function Eh(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
  if (Vn(e) || Li(e)) return Sd(mn(xd(Cl, Ti([e], t, !0))))
  var r = e
  return t.length === 0 && r.length === 1 && typeof r[0] == 'string'
    ? mn(r)
    : Sd(mn(xd(r, t)))
}
function vs(e, t, n) {
  if ((n === void 0 && (n = _r), !t)) throw Wn(1, t)
  var r = function (i) {
    for (var o = [], l = 1; l < arguments.length; l++) o[l - 1] = arguments[l]
    return e(t, n, Eh.apply(void 0, Ti([i], o, !1)))
  }
  return (
    (r.attrs = function (i) {
      return vs(
        e,
        t,
        Le(Le({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        })
      )
    }),
    (r.withConfig = function (i) {
      return vs(e, t, Le(Le({}, n), i))
    }),
    r
  )
}
var Ch = function (e) {
    return vs(Ny, e)
  },
  H = Ch
ch.forEach(function (e) {
  H[e] = Ch(e)
})
var My = (function () {
  function e(t, n) {
    ;(this.rules = t),
      (this.componentId = n),
      (this.isStatic = zh(t)),
      tl.registerId(this.componentId + 1)
  }
  return (
    (e.prototype.createStyles = function (t, n, r, i) {
      var o = i(hs(mn(this.rules, n, r, i)), ''),
        l = this.componentId + t
      r.insertRules(l, l, o)
    }),
    (e.prototype.removeStyles = function (t, n) {
      n.clearRules(this.componentId + t)
    }),
    (e.prototype.renderStyles = function (t, n, r, i) {
      t > 2 && tl.registerId(this.componentId + t),
        this.removeStyles(t, r),
        this.createStyles(t, n, r, i)
    }),
    e
  )
})()
function Dy(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
  var r = Eh.apply(void 0, Ti([e], t, !1)),
    i = 'sc-global-'.concat(ph(JSON.stringify(r))),
    o = new My(r, i),
    l = function (s) {
      var u = ys(),
        c = dt.useContext(Ni),
        p = dt.useRef(u.styleSheet.allocateGSInstance(i)).current
      return (
        u.styleSheet.server && a(p, s, u.styleSheet, c, u.stylis),
        dt.useLayoutEffect(
          function () {
            if (!u.styleSheet.server)
              return (
                a(p, s, u.styleSheet, c, u.stylis),
                function () {
                  return o.removeStyles(p, u.styleSheet)
                }
              )
          },
          [p, s, u.styleSheet, c, u.stylis]
        ),
        null
      )
    }
  function a(s, u, c, p, h) {
    if (o.isStatic) o.renderStyles(s, J1, c, h)
    else {
      var v = Le(Le({}, u), { theme: uh(u, p, l.defaultProps) })
      o.renderStyles(s, v, c, h)
    }
  }
  return dt.memo(l)
}
var Ph = ((e) => ((e.Home = '/'), (e.Contact = '/contact'), e))(Ph || {})
const $y = H.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;

  ${({ theme: e }) => `
    background-color: ${e.colors.white};
  `}
`,
  Iy = H.div`
  width: ${({ theme: e }) => e.sectionWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;

  ${({ theme: e }) => `
    @media (${e.breakpoints.laptopSmall}) {
      width: 100%;
      padding: 8px 24px;
    }
  `}
`,
  Oy = H.a`
  background-image: url('app/statics/images/logo4.svg');
  width: 300px;
  height: 64px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.3s ease;

  ${({ theme: e }) => `
    @media (${e.breakpoints.tablet}) {
      width: 190px;
      height: 60px;
    }
  `}

  &:hover {
    transform: scale(1.1);
  }
`,
  Fy = H.nav`
  display: flex;

  ${({ theme: e, open: t }) => `
    @media (${e.breakpoints.tablet}) {
      display: ${t ? 'flex' : 'none'};
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 60px;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: ${e.colors.white};
      padding-top: 64px;
    }
  `}
`,
  Ay = H.a`
  display: inline-block;
  padding: 12px 22px;
  margin-left: 8px;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 40px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(74, 58, 255, 0);
  color: ${({ theme: e }) => e.colors.blueFont};
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    box-shadow: 0 2px 4px rgba(74, 58, 255, 0.11);
    border: 1px solid rgba(1, 76, 173, 0.5);
    background-color: rgba(1, 76, 173, 0.1);
  }

  @media (${({ theme: e }) => e.breakpoints.tablet}) {
    font-size: 32px;
    margin: 24px 10px 0 10px;
  }
`,
  Uy = H.div`
  display: none;

  @media (${({ theme: e }) => e.breakpoints.tablet}) {
    display: flex;

    svg {
      width: 54px;
      height: 54px;
    }
  }
`
H.div`
  display: none;

  @media (${({ theme: e }) => e.breakpoints.tablet}) {
    display: flex;
  }
`
const By = [
    { id: '#whyUs', name: 'Dlaczego my' },
    { id: '#company', name: 'Nasza misja' },
    { id: '#offer', name: 'Oferta' },
    { id: '#contact', name: 'Kontakt' },
  ],
  Hy = () =>
    k.jsx('svg', {
      width: '24px',
      height: '24px',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: k.jsx('path', {
        d: 'M4 6H20M4 12H20M4 18H20',
        stroke: '#000000',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    }),
  Vy = () => {
    const [e, t] = N.useState(!1),
      n = () => {
        t(!e)
      }
    return k.jsx($y, {
      children: k.jsxs(Iy, {
        children: [
          k.jsx(Oy, { href: '#home' }),
          k.jsx(Uy, { onClick: n, children: k.jsx(Hy, {}) }),
          k.jsx(Fy, {
            open: e,
            children: By.map(({ id: r, name: i }) =>
              k.jsx(Ay, { href: r, children: i }, i)
            ),
          }),
        ],
      }),
    })
  },
  Wy = ({ children: e }) =>
    k.jsxs('div', {
      id: 'homePage',
      children: [k.jsx(Vy, {}), k.jsx('main', { children: e })],
    }),
  by = H.div`
  align-self: center;
  text-align: center;
  width: 100%;
`,
  Qy = H.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 450px);
  grid-template-rows: repeat(auto-fill, 300px);
  gap: 24px;
  justify-content: center;
  padding: 0 20px;

  ${({ theme: e }) => `
    @media (${e.breakpoints.mobile}) {
      grid-template-columns: repeat(auto-fill, 390px);
      grid-template-rows: repeat(auto-fill, 350px);
    }
  `}

  & > div {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    box-shadow: 12px 19px 24px -22px rgba(0, 0, 0, 1);

    svg {
      width: 64px;
      height: 64px;
      fill: #226fb0;
    }

    a {
      text-decoration: none;
      color: white;
      font-weight: 600;
    }

    li {
      text-align: left;
      padding-top: 4px;
    }

    p {
      margin: 24px 0;
      font-size: 18px;

      font-weight: bold;
    }

    span {
      margin: 24px 0;
    }

    & > div {
      padding-top: 24px;
      border-top: 1px solid #226fb0;

      font-size: 14px;
      text-align: center;
      line-height: 1.4;
    }
  }

  & > :nth-child(2),
  & > :nth-child(4),
  & > :nth-child(6) {
    background-color: #226fb0;
    color: ${({ theme: e }) => e.colors.white};
    fill: ${({ theme: e }) => e.colors.white};

    & > div {
      border-top: 1px solid ${({ theme: e }) => e.colors.white};
    }

    svg {
      fill: ${({ theme: e }) => e.colors.white};
    }
  }

  & > :hover {
    svg {
      transition: transform 0.5s ease;
      transform: scale(1.5);
    }
  }
`,
  Ky = () =>
    k.jsx('svg', {
      height: '40',
      viewBox: '0 -960 960 960',
      width: '40',
      children: k.jsx('path', {
        d: 'M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l54 213.667q4.333 15.666-5.667 28.5-10 12.833-26.666 12.833H760v133.334q0 27.5-19.583 47.083T693.334-160H600v80h-66.666v-146.666h160v-200h112l-42.667-171.667Q739-693.334 660-753.334t-180-60q-122 0-207.667 84.667t-85.667 206.36q0 62.945 25.717 119.596 25.716 56.65 72.95 100.711l21.333 20v202H240Zm256-366.667Zm-50 77.333h66.666l4-45.999q10.667-2.334 19.815-7.975 9.149-5.641 16.186-12.692L596-420l32-54.667-33.333-26q4-12 4-24.666 0-12.667-4-24.667L628-576l-32-54.667-43.333 16q-7.223-6.795-16.612-12.231-9.389-5.435-19.389-8.435l-4-46H446l-4 46q-10 3-19.389 8.435-9.389 5.436-16.611 12.231l-43.333-16-32 54.667L364-550q-4 12-4 24.667 0 12.666 4 24.666l-33.333 26 32 54.667L406-436q7.037 7.051 16.185 12.692T442-415.333l4 45.999Zm33.412-89.333q-27.745 0-47.245-19.421-19.501-19.422-19.501-47.167t19.422-47.245Q451.51-592 479.255-592t47.245 19.421q19.5 19.422 19.5 47.167t-19.421 47.245q-19.422 19.5-47.167 19.5Z',
      }),
    }),
  Zy = () =>
    k.jsx('svg', {
      height: '40',
      viewBox: '0 -960 960 960',
      width: '40',
      children: k.jsx('path', {
        d: 'm345.333-60-76-129.333-148.666-31.334 16-147.333L40-480l96.667-111.333-16-147.334L269.333-770l76-130L480-839.333 614.667-900l76.666 130 148 31.333-16 147.334L920-480l-96.667 112 16 147.333-148 31.334L614.667-60 480-120.667 345.333-60Zm29.334-86.666L480-191.333l108 44.667 63.334-98.667L766-274l-11.333-116.667L833.334-480l-78.667-91.333L766-688l-114.666-26.667L586-813.334l-106 44.667-108-44.667-63.334 98.667L194-688l11.333 116.667L126.666-480l78.667 89.333L194-272l114.666 26.667 66.001 98.667ZM480-480Zm-42.667 136L664-569.333 615.334-616 437.333-439.333l-92-94L296-484.667 437.333-344Z',
      }),
    }),
  Yy = () =>
    k.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      height: '40',
      viewBox: '0 -960 960 960',
      width: '40',
      children: k.jsx('path', {
        d: 'M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-93.334h200V-680H320v66.666ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm50-66.666h103.334v-80h213.332v80H650l62.667-208.667 100.667-34.333v-163.668h-48.001L633.334-725.333Q634-748.667 638.5-770.5q4.501-21.834 10.167-44.167-35 9.333-65 28.833t-45.334 52.5H300q-63.524 0-108.429 44.905T146.666-580q0 101.439 28.334 198.219Q203.333-285 230-186.666Zm250-314.001Z',
      }),
    }),
  qy = () =>
    k.jsx('svg', {
      height: '40',
      viewBox: '0 -960 960 960',
      width: '40',
      children: k.jsx('path', {
        xmlns: 'http://www.w3.org/2000/svg',
        d: 'M40-120v-66.666h880V-120H40Zm106.666-120q-27 0-46.833-19.833T80-306.666v-466.668q0-27 19.833-46.833T146.666-840h666.668q27 0 46.833 19.833T880-773.334v466.668q0 27-19.833 46.833T813.334-240H146.666Zm0-66.666h666.668v-466.668H146.666v466.668Zm0 0v-466.668 466.668Z',
      }),
    }),
  Gy = () =>
    k.jsx('svg', {
      height: '40',
      viewBox: '0 -960 960 960',
      width: '40',
      children: k.jsx('path', {
        d: 'M148.666-160Q121-160 100.5-180.167 80-200.333 80-226.666v-506.668q0-26.333 19.833-46.499Q119.666-800 146.666-800h666.668q26.333 0 46.499 20.167Q880-759.667 880-733.334v193.001h-66.666v-126.334L480-455.334 146.666-666.667v440.001h513.335V-160H148.666ZM480-524.667l333.334-208.667H146.666L480-524.667ZM146.666-226.666v-506.668 506.668ZM763.333-160q-15 0-25.833-10.833-10.833-10.834-10.833-25.834v-120q0-15 11.5-25.833 11.5-10.833 28.5-10.833v-43.334q0-31.625 22.529-54.145 22.53-22.521 54.167-22.521t54.137 22.521q22.5 22.52 22.5 54.145v43.334q17 0 28.5 10.833t11.5 25.833v120q0 15-10.833 25.834Q938.333-160 923.333-160h-160ZM800-353.333h86.667v-43.275q0-18.392-12.442-30.892-12.441-12.5-30.833-12.5Q825-440 812.5-427.542 800-415.083 800-396.667v43.334Z',
      }),
    }),
  Xy = () =>
    k.jsxs('svg', {
      height: '40',
      viewBox: '0 -960 960 960',
      width: '40',
      children: [
        k.jsx('path', {
          d: 'M146.666-120q-27 0-46.833-19.833T80-186.666v-466.668q0-27 19.833-46.833T146.666-720H320v-93.334q0-27 19.833-46.833T386.666-880h186.668q27 0 46.833 19.833T640-813.334V-720h173.334q27 0 46.833 19.833T880-653.334v466.668q0 27-19.833 46.833T813.334-120H146.666Zm0-66.666h666.668v-466.668H146.666v466.668Zm240-533.334h186.668v-93.334H386.666V-720Zm-240 533.334v-466.668 466.668Z',
        }),
        ' ',
      ],
    }),
  Jy = [
    {
      title: 'Obniżenie kosztów',
      description:
        'Przeniesienie usług kadrowo-płacowych może być bardziej ekonomiczne niż utrzymanie działu wewnętrznego, eliminujesz koszty związane z zakupem oprogramowania, wynagrodzeniem, szkoleniem i utrzymaniem pracowników.',
      Icon: Yy,
    },
    {
      title: 'Doświadczenie i wiedza',
      description:
        'korzystasz ze specjalistycznej wiedzy i  20- letniego doświadczenia naszych ekspertów i specjalistów, nie ponosząc  ryzyka błędów, zyskując profesjonalną obsługę.',
      Icon: Ky,
    },
    {
      title: 'Technologia',
      description:
        'Korzystamy z nowoczesnych systemów ERP. Pracujemy głownie online, a klienci przekazują dokumenty przez dedykowane dostępy.',
      Icon: qy,
    },
    {
      title: 'Indywidualne podejście',
      description:
        'Każda Firma jest inna, dlatego dostosowujemy nasze usługi do unikalnych potrzeb klienta.',
      Icon: Zy,
    },
    {
      title: 'Bezpieczeństwo',
      description: k.jsxs(k.Fragment, {
        children: [
          'Dbamy o poufność i bezpieczeństwo danych Twojej firmy, stosując najwyższe standardy ochrony informacji. Posiadamy również',
          ' ',
          k.jsx('b', { children: 'polisę ubezpieczeniową OC' }),
          ', zapewniając bezpieczeństwo i gwarancję jakości świadczonych usług.',
        ],
      }),
      Icon: Gy,
    },
    {
      title: 'Rzetelnosć',
      description: k.jsxs(k.Fragment, {
        children: [
          'Nasza firma współpracuje z:',
          k.jsxs('li', {
            children: [
              'kancelarią prawną specjalizującą się w prawie pracy. Ewa Rakiel dowiedz się więcej ',
              k.jsx('a', {
                href: 'https://rakiel.com.pl/',
                children: 'klikając tutaj',
              }),
            ],
          }),
          k.jsx('li', {
            children:
              'firmą zajmującą się obsługą księgowości - Partner Biznesu Iwona Krzyżanowska.',
          }),
        ],
      }),
      Icon: Xy,
    },
  ],
  ev = H.header`
  padding-bottom: 16px;
  font-size: 42px;
  font-weight: 600;

  & > span {
    color: #226fb0;
  }

  ${({ theme: e }) => `
    @media (${e.breakpoints.tabletVertical}) {
      font-size: 38px;
    }
  `}
`,
  tv = H.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 32px;
`,
  zu = ({ startText: e, endText: t, subtitle: n }) =>
    k.jsxs(k.Fragment, {
      children: [
        k.jsxs(ev, { children: [e, ' ', k.jsx('span', { children: t })] }),
        n && k.jsx(tv, { children: n }),
      ],
    }),
  nv = H.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: e, $backgroundColor: t }) =>
    t || e.colors.white};
`,
  rv = H.div`
  width: ${({ theme: e }) => e.sectionWidth};
  height: 100vh;
  margin: 0 auto;
  padding: 92px 0 24px 0;

  ${({ theme: e }) => `
    @media (${e.breakpoints.laptopSmall}) {
     width: 100%;
      padding: 92px 12px 24px 12px;

    }

    @media (${e.breakpoints.tabletVertical}) {
      height: unset;
      padding: 60px 12px 32px 12px;
    }

    @media (${e.breakpoints.tabletVertical}) {
      padding: 24px 12px;
    }
  `}
`,
  Eu = ({ link: e, backgroundColor: t, children: n }) =>
    k.jsx(nv, {
      id: e,
      $backgroundColor: t,
      children: k.jsx(rv, { children: n }),
    }),
  Cu = {
    colors: {
      white: '#FFFFFF',
      black: 'c',
      lightGrey: '#EDF2F4',
      darkGrey: '#8D99AE',
      lightBlue: '#4BC4FB',
      blue: '#0B55B5',
      darkBlue: '#0B60A8',
      blueFont: '#014CAD',
      grayBackground: '#F9F9F9',
    },
    breakpoints: {
      mobile: 'max-width: 640px',
      tablet: 'max-width: 950px',
      tabletVertical: 'max-width: 1180px',
      laptopSmall: 'max-width: 1668px',
    },
    sizes: { header: '56px', topbarHeight: '80px' },
    sidePadding: '64px',
    sidePaddingMobile: '32px',
    topbarHeight: '80px',
    sectionHeight: 'calc(100vh - 80px)',
    sectionWidth: '1620px',
  },
  iv = () =>
    k.jsxs(Eu, {
      link: 'whyUs',
      backgroundColor: Cu.colors.grayBackground,
      children: [
        k.jsx(by, {
          children: k.jsx(zu, {
            startText: 'Dlaczego',
            endText: 'my?',
            subtitle: `Przenieś naliczanie wynagrodzeń oraz administrowanie kadrami na\r
          zewnątrz swojej firmy. Postaw na wysoką jakość opartą na doświadczeniu\r
          i wiedzy naszych specjalistów.`,
          }),
        }),
        k.jsx(Qy, {
          children: Jy.map(({ title: e, description: t, Icon: n }) =>
            k.jsxs(
              'div',
              {
                children: [
                  k.jsx(n, {}),
                  k.jsx('p', { children: e }),
                  k.jsx('div', { children: t }),
                ],
              },
              e
            )
          ),
        }),
      ],
    }),
  ov = H.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,
  lv = H.header`
  text-align: center;

  p {
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 32px;
  }
`,
  av = H.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  jh = () =>
    k.jsx('svg', {
      height: '24',
      viewBox: '0 -960 960 960',
      width: '24',
      children: k.jsx('path', {
        d: 'M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z',
      }),
    }),
  sv = H.div`
  padding: 28px;
  box-shadow: 0px 0px 14px 2px rgba(191, 191, 191, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 550px;
  max-width: 450px;
  background-image: url(${({ $bgImageUrl: e }) => e});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;

  svg {
    fill: ${({ $fill: e }) => e};
  }

  ${({ $scaleUp: e }) =>
    e
      ? `
      transform: scale(1.08);
      z-index: 1;
    background-color: white;
  `
      : ''}
`,
  uv = H.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > :first-child {
    width: 50%;
    font-size: 32px;
    font-weight: 600;
    margin: 0;
    padding-bottom: 42px;
    color: white;
  }

  & > :last-child {
    width: 50%;
    width: 80px;
    height: 80px;
  }
`,
  cv = H.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 16px;
  padding: 28px 0 14px;
  overflow: hidden;

  svg {
    min-width: 18px;
    min-height: 28px;
    max-width: 18px;
    max-height: 28px;
    margin-right: 8px;
  }
`,
  dv = H.div`
  display: flex;
  padding-bottom: 8px;
`,
  fv = H.button`
  margin-top: 14px;
  text-decoration: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 24px;
  border: 1px solid transparent;

  border-radius: 80px;
  transition: all 300ms ease;

  ${({ theme: e, $rgbColorValues: t, $secondaryColor: n }) => `
    color: ${e.colors.white};
    background-color: rgb(${t});
    box-shadow: 0 3px 12px 0 rgba(${t}, 0.3);

    &:hover {
      background-color: rgba(${t}, 0.6);
      border: 1px solid ${n};
    }
  `}
`,
  pv = () =>
    k.jsxs('svg', {
      height: '24px',
      viewBox: '0 0 24 24',
      width: '24px',
      fill: '#000000',
      children: [
        k.jsx('rect', { fill: 'none', height: '24', width: '24' }),
        k.jsx('g', {
          children: k.jsx('path', {
            d: 'M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,18H6l0-1.61c0-1.18,0.68-2.26,1.76-2.73 C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1 C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85 C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M12,6c1.66,0,3,1.34,3,3 c0,1.66-1.34,3-3,3s-3-1.34-3-3C9,7.34,10.34,6,12,6z',
          }),
        }),
      ],
    }),
  hv = [
    'prowadzenie akt osobowych pracowników w formie papierowej lub elektronicznej (E-Teczka)',
    'rejestracja danych w systemie kadrowo - płacowym',
    'sporządzanie dokumentacji pracowniczej związanej z zatrudnieniem (umowy o pracę, umowy zlecenia), w tym zaświadczenia o zatrudnieniu, zarobkach, świadectwa pracy',
    'monitorowanie terminów związanych z zatrudnieniem (umowy o pracę, badania lekarskie, szkolenia BHP) ',
    'ustalanie uprawnień pracowniczych (m. in. urlopy, okresy wypowiedzenia)',
    'rejestracja i wyrejestrowywanie pracowników i zleceniobiorców w ZUS',
    'obsługa PPK',
    'obsługa ZfŚS',
    'przygotowywanie danych kadrowych do sprawozdań GUS',
    'przygotowywanie miesięcznych raportów kadrowych',
    'wsparcie klienta podczas bieżącej obsługi (bezpośredni kontakt)',
    'wsparcie w kontaktach z instytucjami zewnętrznymi',
    'konsultacje w zakresie prawa pracy oraz ubezpieczeń społecznych',
    'Obsługa zajęć administracyjnych i komorniczych',
    'monitorowanie zmian w prawie pracy.',
  ],
  mv = [
    'prawidłowe i terminowe naliczanie wynagrodzeń dla pracowników, zleceniobiorców oraz współpracowników z zachowaniem pełnej poufności przetwarzanych danych,przygotowanie przelewów do realizacji płatności wynagrodzeń pracowników oraz pochodnych zobowiązań (m.in. ZUS, US, PFRON)',
    'sporządzanie wymaganych prawem deklaracji z tytułu zobowiązań ustawowych wobec US, ZUS, PFRON',
    'Rozliczenia roczne pracowników i współpracowników – PIT-11, PIT-4R, PIT-8AR, IMIR ',
    'obsługa raportów finansowych w zakresie PPK',
    'przygotowanie pliku do modułu księgowego',
    'rozliczanie świadczeń pieniężnych z tytułu ubezpieczenia społecznego w razie choroby lub macierzyństwa',
    'przygotowanie płatności wynagrodzeń netto dla pracowników klienta',
    'przygotowanie raportów płacowych na potrzeby wewnętrzne  klienta',
  ],
  gv = [
    'rejestracja pracodawcy (płatnika składek) w ZUS',
    'Obsługa ZUS, zwolnień lekarskich Przedsiębiorcy',
    'przegląd kadrowy akt osobowych i przygotowanie raportu po przeglądzie',
    'wsparcie przy audytach klienta (przygotowanie danych do audytu)',
    'obsługa benefitów',
    'pomoc w przygotowywaniu formularzy A1',
    'bsługa kontroli ZUS, PIP',
    'Przygotowanie zaświadczeń  ERP-7',
    'Sporządzanie rozliczeń dofinansowań za zatrudnianie niepełnosprawnych SODiR',
    'Przygotowanie w ustalonych terminach raportu rezerw urlopowych',
    'Przygotowanie korekt raportów rozliczeniowych ZUS za okresy przed obsługą',
    'Opracowanie innych zestawień i raportów wymaganych w danej organizacji',
    'Migracja danych kadrowo-płacowych przy zmianie oprogramowania',
    'Pomoc w opracowaniu dokumentacji wewnętrznej w zakresie kadr i płac (regulaminy, zarządzenia, wzory oświadczeń, umów o pracę)',
  ]
var In = ((e) => (
  (e.HR = 'hr'), (e.PAYROLL = 'payroll'), (e.ADDITIONAL = 'additional'), e
))(In || {})
const yv = () =>
    k.jsxs('svg', {
      height: '24px',
      viewBox: '0 0 24 24',
      width: '24px',
      fill: '#000000',
      children: [
        k.jsx('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        k.jsx('path', {
          d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
        }),
      ],
    }),
  vv = () =>
    k.jsxs('svg', {
      height: '24px',
      viewBox: '0 0 24 24',
      width: '24px',
      fill: '#000000',
      children: [
        k.jsx('rect', { fill: 'none', height: '24', width: '24' }),
        k.jsx('path', {
          d: 'M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8 c1.57,0,3.04,0.46,4.28,1.25l1.45-1.45C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c1.73,0,3.36-0.44,4.78-1.22 l-1.5-1.5C14.28,19.74,13.17,20,12,20z M19,15h-3v2h3v3h2v-3h3v-2h-3v-3h-2V15z',
        }),
      ],
    }),
  wv = new Map([
    [
      In.HR,
      {
        title: 'Usługi kadrowe',
        Icon: pv,
        list: hv,
        bgImageUrl: 'app/statics/images/wave-bg-hr.svg',
        modalBgImageUrl: 'app/statics/images/wave-modal-hr.svg',
        mainColorRgbValues: '61, 136, 202',
        secondaryColor: '#00528E',
      },
    ],
    [
      In.PAYROLL,
      {
        title: 'Usługi płacowe',
        Icon: yv,
        list: mv,
        bgImageUrl: 'app/statics/images/wave-bg-payroll.svg',
        modalBgImageUrl: 'app/statics/images/wave-modal-payroll.svg',
        mainColorRgbValues: '0, 108, 171',
        secondaryColor: '#003972',
      },
    ],
    [
      In.ADDITIONAL,
      {
        title: 'Usługi dodatkowe',
        Icon: vv,
        list: gv,
        bgImageUrl: 'app/statics/images/wave-bg-additional.svg',
        modalBgImageUrl: 'app/statics/images/wave-modal-additional.svg',
        mainColorRgbValues: '55, 143, 173',
        secondaryColor: '#005773',
      },
    ],
  ]),
  xv = H.dialog`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2000;

  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`,
  Sv = H.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 95%;
  width: 80%;
  display: flex;
  flex-direction: column;
  z-index: 2100;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
    rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
    rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;

  padding: 32px;
  border-radius: 24px;

  background-image: url(${({ $bgImageUrl: e }) => e});
  background-size: cover;
  background-repeat: no-repeat;
`,
  kv = H.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 55px;
  P {
    font-size: 32px;
    font-weight: 600;
    margin: 0;
    color: white;
  }

  button {
    background-color: unset;
    border: unset;
    padding: 8px;
  }

  svg {
    width: 40px;
    height: 40px;
    fill: white;
  }
`,
  zv = H.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  font-size: 18px;
`,
  Ev = H.div`
  display: flex;
  padding-bottom: 18px;

  svg {
    min-width: 20px;
    min-height: 20px;
    width: 20px;
    height: 20px;
    margin: 4px 8px 0 0;
    fill: ${({ $secondaryColor: e }) => e};
  }
`,
  Cv = () =>
    k.jsx('svg', {
      height: '40',
      viewBox: '0 -960 960 960',
      width: '40',
      children: k.jsx('path', {
        d: 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z',
      }),
    }),
  Pv = ({
    handleOpen: e,
    bgImageUrl: t,
    list: n,
    title: r,
    secondaryColor: i,
  }) =>
    k.jsx(xv, {
      open: !0,
      children: k.jsxs(Sv, {
        $bgImageUrl: t,
        children: [
          k.jsxs(kv, {
            children: [
              k.jsx('p', { children: r }),
              k.jsx('button', { onClick: () => e(), children: k.jsx(Cv, {}) }),
            ],
          }),
          k.jsx(zv, {
            children: n.map((o) =>
              k.jsxs(
                Ev,
                { $secondaryColor: i, children: [k.jsx(jh, {}), o] },
                o
              )
            ),
          }),
        ],
      }),
    }),
  jv = () => {
    const [e, t] = N.useState(!1)
    return {
      open: e,
      handleOpen: () => {
        t(!e), (document.body.style.overflowY = e ? 'auto' : 'hidden')
      },
    }
  },
  da = ({ offer: e, scaleUp: t }) => {
    const { open: n, handleOpen: r } = jv(),
      {
        title: i,
        list: o,
        Icon: l,
        bgImageUrl: a,
        modalBgImageUrl: s,
        secondaryColor: u,
        mainColorRgbValues: c,
      } = wv.get(e)
    return k.jsxs(k.Fragment, {
      children: [
        k.jsxs(sv, {
          $bgImageUrl: a,
          $fill: u,
          $scaleUp: t,
          children: [
            k.jsxs(uv, {
              children: [k.jsx('p', { children: i }), k.jsx(l, {})],
            }),
            k.jsx(cv, {
              children: o.map((p) =>
                k.jsxs(dv, { children: [k.jsx(jh, {}), p] }, p)
              ),
            }),
            k.jsx(fv, {
              onClick: r,
              $rgbColorValues: c,
              $secondaryColor: u,
              children: 'Pokaż więcej',
            }),
          ],
        }),
        n &&
          k.jsx(Pv, {
            handleOpen: r,
            bgImageUrl: s,
            title: i,
            list: o,
            secondaryColor: u,
          }),
      ],
    })
  },
  Rv = () =>
    k.jsx(Eu, {
      link: 'offer',
      backgroundColor: Cu.colors.grayBackground,
      children: k.jsxs(ov, {
        children: [
          k.jsxs(lv, {
            children: [
              k.jsx('p', {
                children:
                  'Każdego klienta traktujemy indywidualnie, dlatego ceny naszych usług ustalane są w drodze indywidualnych ustaleń z klientem. Oferta cena uzależniona jestod liczby zatrudnionych pracowników, wykonywanych procesów i indywidualnych potrzeb Klienta.',
              }),
              k.jsx('p', {
                children:
                  'W ramach świadczonych usług oferujemy usługi płacowe, kompleksoweusługi kadrowo-płacowe oraz skorzystanie z naszych dodatkowych usług:',
              }),
            ],
          }),
          k.jsxs(av, {
            children: [
              k.jsx(da, { offer: In.HR }),
              k.jsx(da, { offer: In.PAYROLL, scaleUp: !0 }),
              k.jsx(da, { offer: In.ADDITIONAL }),
            ],
          }),
        ],
      }),
    }),
  _v = H.section`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${({ $imageLink: e }) => e});
  position: relative;

  ${({ theme: e }) => `
    @media (${e.breakpoints.mobile}) {
      height: unset;

    }
  `}
`,
  Tv = H.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    8,
    85,
    150,
    0.5
  ); /* Kolor #085596 z zachowaniem opacity */
`,
  Lv = H.div`
  position: relative;
  z-index: 1;
  width: ${({ theme: e }) => e.sectionWidth};
  height: 100%;
  margin: 0 auto;

  ${({ theme: e }) => `
    @media (${e.breakpoints.laptopSmall}) {
      width: 100%;
      padding: 0 24px;
    }
  `}

  ${({ theme: e }) => `
    @media (${e.breakpoints.mobile}) {
      padding: 0 12px;
    }
  `}
`,
  Rh = ({ link: e, imageLink: t, children: n }) =>
    k.jsxs(_v, {
      id: e,
      $imageLink: t,
      children: [k.jsx(Tv, {}), k.jsx(Lv, { children: n })],
    }),
  Nv = H.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  color: white;
  font-weight: 500;
  font-size: 21px;

  ${({ theme: e }) => `
    @media (${e.breakpoints.tabletVertical}) {
      font-size: 18px;
    }

    @media (${e.breakpoints.tablet}) {
      font-size: 16px;
    }

    @media (${e.breakpoints.mobile}) {
      font-size: 15px;
    }
  `}
`,
  Mv = H.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & > :first-child {
    margin-top: 10%;
    font-weight: 600;
    font-size: 72px;

    ${({ theme: e }) => `
      @media (${e.breakpoints.laptopSmall}) {
        font-size: 62px;
      }

      @media (${e.breakpoints.tabletVertical}) {
        font-size: 52px;
        margin-top: 150px;
      }

      @media (${e.breakpoints.tablet}) {
        font-size: 42px;
      }

     @media (${e.breakpoints.mobile}) {
        text-align: center;
        font-size: 42px;
        margin-top: 100px;
      }
    `}
  }

  & > :nth-child(2) {
    margin-top: 4%;
    max-width: 800px;
    ${({ theme: e }) => `
        @media (${e.breakpoints.tabletVertical}) {
          max-width: 700px;
          margin-top: 8%;
        }
        @media (${e.breakpoints.tablet}) {
          margin-top: 12%;
        }
        @media (${e.breakpoints.mobile}) {
          max-width: 100%;
          margin: 24px 0;
        }
      `}

    p {
      margin: 0;
      padding-bottom: 8px;
      font-size: 24px;
      font-weight: 600;

      ${({ theme: e }) => `
        @media (${e.breakpoints.tabletVertical}) {
          font-size: 22px;
        }

        @media (${e.breakpoints.tablet}) {
          font-size: 18px;
        }

        @media (${e.breakpoints.mobile}) {
          font-size: 16px;
          padding-bottom: 18px;
        }
      `}
    }
  }

  & > :nth-child(3) {
    margin-top: 48px;
    max-width: 800px;
    ${({ theme: e }) => `
      @media (${e.breakpoints.tabletVertical}) {
        max-width: 700px;
      }

      @media (${e.breakpoints.tablet}) {
       
      }

      @media (${e.breakpoints.mobile}) {
        max-width: 100%;
        margin-top: unset;
      }
    `}
  }
`,
  Dv = H.div`
  margin-bottom: 92px;
  /* align-self: center; */
  text-align: center;
  ${({ theme: e }) => `
      @media (${e.breakpoints.mobile}) {
        margin: 24px 0;
      }
    `}
`,
  $v = 'app/statics/images/xyz.png',
  Iv = () =>
    k.jsx(Rh, {
      link: 'home',
      imageLink: $v,
      children: k.jsxs(Nv, {
        children: [
          k.jsxs(Mv, {
            children: [
              k.jsx('span', { children: 'OUTSOURCING KADR I PŁAC' }),
              k.jsxs('span', {
                children: [
                  k.jsx('p', {
                    children: 'Twoje kadry i płace w bezpiecznych rękach',
                  }),
                  'Postaw na rzetelną i profesjonalną obsługę kadrowo-płacową. Zadbamy o poprawne naliczanie wynagrodzeń Twoich pracowników oraz zgodne z przepisami administrowanie dokumentacją kadrową w Twojej organizacji.',
                ],
              }),
              k.jsx('span', {
                children:
                  'Nasza oferta skierowana jest do przedsiębiorstw oczekujących stabilności, pragnących zwiększyć efektywność, zminimalizować koszty oraz ryzyka związane z utrzymaniem działów wewnętrznych. Jesteśmy z Gdańska ale współpracujemy również online. Skontaktuj się z nami już teraz, byśmy mogli zadbać o Twój biznes tak, jakby był naszym własnym.',
              }),
            ],
          }),
          k.jsx(Dv, {
            children:
              'KADRY – PŁACE – KONSULTING – ZUS – PIT – PFRON – CUDZOZIEMCY – KSIĘGOWOŚĆ – PRAWO PRACY',
          }),
        ],
      }),
    }),
  Ov = 'app/statics/images/contact.png',
  Fv = H.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: end;
`,
  Av = H.div`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 24px;
  padding: 56px 24px;
  text-align: center;
`,
  kd = H.a`
  text-decoration: none;
  margin: 4px;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: black;
  font-weight: 600;

  svg {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    fill: #226fb0;
  }
`,
  Uv = () =>
    k.jsxs('svg', {
      height: '40',
      viewBox: '0 -960 960 960',
      width: '40',
      children: [
        k.jsx('path', {
          d: 'M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z',
        }),
        ' ',
      ],
    }),
  Bv = () =>
    k.jsxs('svg', {
      height: '40',
      viewBox: '0 -960 960 960',
      width: '40',
      children: [
        k.jsx('path', {
          d: 'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z',
        }),
        ' ',
      ],
    }),
  Hv = () =>
    k.jsx(Rh, {
      link: 'contact',
      imageLink: Ov,
      children: k.jsx(Fv, {
        children: k.jsxs(Av, {
          children: [
            k.jsx(zu, {
              startText: 'Skontaktuj się',
              endText: 'z nami',
              subtitle:
                'Odpowiemy na Twoje pytania podczas bezpłatnej konsultacji.',
            }),
            k.jsxs(kd, {
              href: 'tel:+48333222555',
              target: 'blank',
              children: [
                k.jsx(Uv, {}),
                k.jsx('span', { children: '+48 888 797 051' }),
              ],
            }),
            k.jsxs(kd, {
              href: 'mailto:twojemail@example.com',
              target: 'blank',
              children: [
                k.jsx(Bv, {}),
                k.jsx('span', { children: 'agnieszka.swierczek@biuro-kip.pl' }),
              ],
            }),
          ],
        }),
      }),
    }),
  Vv = H.div`
  margin: 0 auto;
  display: flex;
  height: 100%;

  & > :first-child,
  & > :last-child {
    width: 600px;
  }

  & > div {
    margin: 0 8px;
  }
`,
  zd = H.div`
  background-image: url(${({ $imageLink: e }) => e});
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;

  /* width: 355px;
  height: 480px;
  background-image: url(${({ $imageLink: e }) => e});
  background-size: cover;
  background-position: center;
  position: absolute;
  transition: transform 0.3s ease;
  border-radius: 24px; */

  /* &:hover {
    transform: scale(1.1);
    z-index: 10;
  }

  &:nth-child(1) {
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 0.7; 
  }

  &:nth-child(2) {
    left: 150px; 
    top: 20px;
    z-index: 3;
    width: 500px;
    height: 600px;
  }

  &:nth-child(3) {
    left: 300px; 
    top: 40px;
    z-index: 2;
    opacity: 0.7; 
  } */
`,
  Wv = H.div`
  text-align: center;
  width: 60%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 600;
  }

  p {
    /* font-size: 16px; */
  }

  header {
    text-align: center;
  }
`
H.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin-top: 0;
  color: ${({ theme: e }) => e.colors.darkGrey};
`
H.p`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.darkBlue};
`
const bv = () =>
    k.jsx(Eu, {
      link: 'company',
      children: k.jsxs(Vv, {
        children: [
          k.jsx(zd, { $imageLink: 'app/statics/images/aboutMe.jpg' }),
          k.jsxs(Wv, {
            children: [
              k.jsx(zu, {
                startText: 'Nasza',
                endText: 'misja',
                subtitle: 'Jesteśmy partnerem godnym zaufania',
              }),
              k.jsxs('p', {
                children: [
                  'Nasze biuro specjalizuje się w',
                  ' ',
                  k.jsx('span', {
                    children:
                      'outsourcingu kadrowo-płacowym czyli kompleksowej obsłudze administracji kadrowej, zarządzania wynagrodzeniamioraz doradztwie',
                  }),
                  ' ',
                  'z szeroko pojętego obszarukadr, płac, zatrudniania cudzoziemców czy ubezpieczeń społecznych.',
                ],
              }),
              k.jsxs('p', {
                children: [
                  'Mieścimy się w ',
                  k.jsx('span', { children: 'Gdańsku' }),
                  ' ale współpracujemy z firmami z',
                  ' ',
                  k.jsx('span', { children: 'całej Polski.' }),
                ],
              }),
              k.jsx('p', {
                children:
                  'Na bazie wieloletniego i cennego doświadczenia w obsłudze kadrowo-płacowejnabytego w małych i dużych przedsiębiorstwach oraz firmach outsourcingowych powstała decyzja o założeniu naszejfirmy.Wyróżniamy się wysokim standardem świadczonych usług, polegającym na bezwzględnej terminowości oraz współpracy i partnerstwie jakie niesie za sobą prowadzenie działu kadrowo-płacowego wewnątrz firmy z profesjonalizmem obsługi świadczonej w formie outsourcingu kadrowo-płacowego.',
              }),
              k.jsx('p', {
                children:
                  'Potrzeby Twojej firmy i Twoich pracowników są najważniejsze.',
              }),
            ],
          }),
          k.jsx(zd, { $imageLink: 'app/statics/images/company2.png' }),
        ],
      }),
    }),
  Qv = () =>
    k.jsxs(Wy, {
      children: [
        k.jsx(Iv, {}),
        k.jsx(iv, {}),
        k.jsx(bv, {}),
        k.jsx(Rv, {}),
        k.jsx(Hv, {}),
      ],
    }),
  Kv = k1([{ path: Ph.Home, element: k.jsx(Qv, {}) }]),
  Zv = Dy`
  html {
    box-sizing: border-box;
     scroll-behavior: smooth;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    background-color: ${({ theme: e }) => e.colors.white};
    overflow-x: hidden;
  }
`,
  Yv = () =>
    k.jsxs(Ly, {
      theme: Cu,
      children: [k.jsx(Zv, {}), k.jsx(L1, { router: Kv })],
    })
fa.createRoot(document.getElementById('root')).render(k.jsx(Yv, {}))
