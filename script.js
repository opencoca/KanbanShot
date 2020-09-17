! function(e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var i in e) n.d(r, i, function(t) {
        return e[t]
      }.bind(null, i));
    return r
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 50)
}([function(e, t, n) {
  "use strict";
  e.exports = n(53)
}, function(e, t, n) {
  "use strict";
  var r = this && this.__assign || function() {
      return (r = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
      }).apply(this, arguments)
    },
    i = this && this.__awaiter || function(e, t, n, r) {
      return new(n || (n = Promise))((function(i, o) {
        function a(e) {
          try {
            l(r.next(e))
          } catch (e) {
            o(e)
          }
        }

        function u(e) {
          try {
            l(r.throw(e))
          } catch (e) {
            o(e)
          }
        }

        function l(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
            e(t)
          }))).then(a, u)
        }
        l((r = r.apply(e, t || [])).next())
      }))
    },
    o = this && this.__generator || function(e, t) {
      var n, r, i, o, a = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1]
        },
        trys: [],
        ops: []
      };
      return o = {
        next: u(0),
        throw: u(1),
        return: u(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
      }), o;

      function u(o) {
        return function(u) {
          return function(o) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; a;) try {
              if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
              switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return a.label++, {
                    value: o[1],
                    done: !1
                  };
                case 5:
                  a.label++, r = o[1], o = [0];
                  continue;
                case 7:
                  o = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                    a = 0;
                    continue
                  }
                  if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                    a.label = o[1];
                    break
                  }
                  if (6 === o[0] && a.label < i[1]) {
                    a.label = i[1], i = o;
                    break
                  }
                  if (i && a.label < i[2]) {
                    a.label = i[2], a.ops.push(o);
                    break
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue
              }
              o = t.call(e, a)
            } catch (e) {
              o = [6, e], r = 0
            } finally {
              n = i = 0
            }
            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            }
          }([o, u])
        }
      }
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getUUID = function(e) {
    return e.opt()._.opt.uuid()
  }, t.getId = function(e) {
    return e && e._ && e._["#"]
  }, t.getPub = function(e) {
    var t;
    if (t = /~([^@][^\.]+\.[^\.]+)/.exec(e)) return t[1]
  }, t.getSubUUID = function(e, n) {
    return n ? t.getUUID(e) + "~" + n + "." : t.getUUID(e)
  };
  var a = {};
  t.decrypt = function(e, t, n) {
    return i(void 0, void 0, void 0, (function() {
      var i, u, l, c, s;
      return o(this, (function(o) {
        switch (o.label) {
          case 0:
            t = r({}, t), i = 0, u = Object.keys(t), o.label = 1;
          case 1:
            return i < u.length ? (l = u[i], "string" == typeof(c = t[l]) && c.startsWith("SEA{") ? c in a ? (t[l] = a[c], [3, 5]) : [3, 2] : [3, 5]) : [3, 6];
          case 2:
            return o.trys.push([2, 4, , 5]), [4, e.SEA.decrypt(c, n)];
          case 3:
            return s = o.sent(), t[l] = s, a[c] = s, [3, 5];
          case 4:
            return o.sent(), delete t[l], [3, 5];
          case 5:
            return i++, [3, 1];
          case 6:
            return [2, t]
        }
      }))
    }))
  }, t.getSet = function(e, t) {
    var n = e[t];
    return n ? Object.keys(n).filter((function(e) {
      return "_" !== e
    })).map((function(e) {
      return n[e]
    })).filter(u).map((function(t) {
      return e[t["#"]]
    })).filter(Boolean) : []
  };
  var u = function(e) {
    return !!e && "object" == typeof e
  };
  t.put = function(e, t, n, r, u, l) {
    return i(void 0, void 0, void 0, (function() {
      var i;
      return o(this, (function(o) {
        switch (o.label) {
          case 0:
            return l && l.epriv && u && "object" != typeof u ? [4, e.SEA.encrypt(u, l)] : [3, 2];
          case 1:
            i = o.sent(), a[i] = u, u = i, o.label = 2;
          case 2:
            return l && l.priv ? [4, e.SEA.sign({
              "#": n,
              ".": r,
              ":": u,
              ">": e.state()
            }, l)] : [3, 4];
          case 3:
            u = o.sent(), o.label = 4;
          case 4:
            return t.get(n).get(r).put(u), [2]
        }
      }))
    }))
  }, t.useGun = function(e, n, a, u) {
    var c = a({}),
      s = c[0],
      f = c[1],
      d = a(new l(f))[0];
    return [s, function(n, a) {
      return i(void 0, void 0, void 0, (function() {
        var i, l;
        return o(this, (function(o) {
          switch (o.label) {
            case 0:
              return i = t.getId(n) || a, [4, t.decrypt(e, n, u)];
            case 1:
              return l = o.sent(), d.setData((function(e) {
                var t;
                return r(r({}, e), ((t = {})[i] = r(r({}, e[i]), l), t))
              })), [2]
          }
        }))
      }))
    }, function() {
      for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
      f((function(e) {
        return i.reduce((function(e, t) {
          var n, i, o = t[0],
            a = t[1],
            u = t[2];
          return r(r({}, e), ((n = {})[o] = r(r({
            _: {
              "#": o
            }
          }, e[o]), ((i = {})[a] = u, i)), n))
        }), e)
      }));
      for (var a = 0, l = i; a < l.length; a++) {
        var c = l[a],
          s = c[0],
          d = c[1],
          p = c[2];
        t.put(e, n, s, d, p, u)
      }
    }]
  };
  var l = function() {
    function e(e) {
      this.cb = e, this.updates = []
    }
    return e.prototype.setData = function(e) {
      var t = this;
      this.updates.push(e), this.handler || (this.handler = setTimeout((function() {
        var e = t.updates;
        t.cb((function(t) {
          return e.reduce((function(e, t) {
            return t(e)
          }), t)
        })), t.updates = [], t.handler = null
      }), 15))
    }, e
  }()
}, function(e, t) {
  var n = e.exports = {
    version: "2.6.10"
  };
  "number" == typeof __e && (__e = n)
}, function(e, t, n) {
  "use strict";
  e.exports = function(e, t, n, r, i, o, a, u) {
    if (!e) {
      var l;
      if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var c = [n, r, i, o, a, u],
          s = 0;
        (l = new Error(t.replace(/%s/g, (function() {
          return c[s++]
        })))).name = "Invariant Violation"
      }
      throw l.framesToPop = 1, l
    }
  }
}, function(e, t, n) {
  e.exports = n(81)()
}, function(e, t, n) {
  var r = n(14),
    i = n(2),
    o = n(60),
    a = n(62),
    u = n(27),
    l = function(e, t, n) {
      var c, s, f, d = e & l.F,
        p = e & l.G,
        h = e & l.S,
        g = e & l.P,
        m = e & l.B,
        v = e & l.W,
        b = p ? i : i[t] || (i[t] = {}),
        y = b.prototype,
        w = p ? r : h ? r[t] : (r[t] || {}).prototype;
      for (c in p && (n = t), n)(s = !d && w && void 0 !== w[c]) && u(b, c) || (f = s ? w[c] : n[c], b[c] = p && "function" != typeof w[c] ? n[c] : m && s ? o(f, r) : v && w[c] == f ? function(e) {
        var t = function(t, n, r) {
          if (this instanceof e) {
            switch (arguments.length) {
              case 0:
                return new e;
              case 1:
                return new e(t);
              case 2:
                return new e(t, n)
            }
            return new e(t, n, r)
          }
          return e.apply(this, arguments)
        };
        return t.prototype = e.prototype, t
      }(f) : g && "function" == typeof f ? o(Function.call, f) : f, g && ((b.virtual || (b.virtual = {}))[c] = f, e & l.R && y && !y[c] && a(y, c, f)))
    };
  l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function(e, t, n) {
  e.exports = !n(16)((function() {
    return 7 != Object.defineProperty({}, "a", {
      get: function() {
        return 7
      }
    }).a
  }))
}, function(e, t) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || new Function("return this")()
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function(e, t, n) {
  (function(e, t, r) {
    ! function() {
      var i;
      "undefined" != typeof window && (i = window), void 0 !== e && (i = e);
      var o = (i = i || {}).console || {
        log: function() {}
      };

      function a(e, t) {
        return t ? n(37)(e) : e.slice ? a[r(e)] : function(t, n) {
          e(t = {
            exports: {}
          }), a[r(n)] = t.exports
        };

        function r(e) {
          return e.split("/").slice(-1).toString().replace(".js", "")
        }
      }
      var u = t;
      a((function(e) {
        var t = {
          fn: {
            is: function(e) {
              return !!e && "function" == typeof e
            }
          }
        };
        t.bi = {
            is: function(e) {
              return e instanceof Boolean || "boolean" == typeof e
            }
          }, t.num = {
            is: function(e) {
              return !r(e) && (e - parseFloat(e) + 1 >= 0 || 1 / 0 === e || -1 / 0 === e)
            }
          }, t.text = {
            is: function(e) {
              return "string" == typeof e
            }
          }, t.text.ify = function(e) {
            return t.text.is(e) ? e : "undefined" != typeof JSON ? JSON.stringify(e) : e && e.toString ? e.toString() : e
          }, t.text.random = function(e, t) {
            var n = "";
            for (e = e || 24, t = t || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz"; e > 0;) n += t.charAt(Math.floor(Math.random() * t.length)), e--;
            return n
          }, t.text.match = function(e, t) {
            var n, r;
            return "string" == typeof e && ("string" == typeof t && (t = {
              "=": t
            }), e === (n = (t = t || {})["="] || t["*"] || t[">"] || t["<"]) || r === t["="] && (n = t["*"] || t[">"] || t["<"], e.slice(0, (n || "").length) === n || r === t["*"] && (r !== t[">"] && r !== t["<"] ? e >= t[">"] && e <= t["<"] : r !== t[">"] && e >= t[">"] || r !== t["<"] && e <= t["<"])))
          }, t.list = {
            is: function(e) {
              return e instanceof Array
            }
          }, t.list.slit = Array.prototype.slice, t.list.sort = function(e) {
            return function(t, n) {
              return t && n ? (t = t[e]) < (n = n[e]) ? -1 : t > n ? 1 : 0 : 0
            }
          }, t.list.map = function(e, t, n) {
            return u(e, t, n)
          }, t.list.index = 1, t.obj = {
            is: function(e) {
              return !!e && (e instanceof Object && e.constructor === Object || "Object" === Object.prototype.toString.call(e).match(/^\[object (\w+)\]$/)[1])
            }
          }, t.obj.put = function(e, t, n) {
            return (e || {})[t] = n, e
          }, t.obj.has = function(e, t) {
            return e && Object.prototype.hasOwnProperty.call(e, t)
          }, t.obj.del = function(e, t) {
            if (e) return e[t] = null, delete e[t], e
          }, t.obj.as = function(e, t, n, r) {
            return e[t] = e[t] || (r === n ? {} : n)
          }, t.obj.ify = function(e) {
            if (o(e)) return e;
            try {
              e = JSON.parse(e)
            } catch (t) {
              e = {}
            }
            return e
          },
          function() {
            var e;

            function n(t, n) {
              a(this, n) && e !== this[n] || (this[n] = t)
            }
            t.obj.to = function(e, t) {
              return u(e, n, t = t || {}), t
            }
          }(), t.obj.copy = function(e) {
            return e ? JSON.parse(JSON.stringify(e)) : e
          },
          function() {
            function e(e, t) {
              var n = this.n;
              if (!n || !(t === n || o(n) && a(n, t))) return !!t || void 0
            }
            t.obj.empty = function(t, n) {
              return !t || !u(t, e, {
                n: n
              })
            }
          }(),
          function() {
            function e(t, n) {
              if (2 === arguments.length) return e.r = e.r || {}, void(e.r[t] = n);
              e.r = e.r || [], e.r.push(t)
            }
            var i, u = Object.keys;
            Object.keys = Object.keys || function(e) {
              return i(e, (function(e, t, n) {
                n(t)
              }))
            }, t.obj.map = i = function(i, l, c) {
              var s, f, d, p, h, g = 0,
                m = n(l);
              if (e.r = null, u && o(i) && (p = u(i), h = !0), r(i) || p)
                for (f = (p || i).length; g < f; g++) {
                  var v = g + t.list.index;
                  if (m) {
                    if ((d = h ? l.call(c || this, i[p[g]], p[g], e) : l.call(c || this, i[g], v, e)) !== s) return d
                  } else if (l === i[h ? p[g] : g]) return p ? p[g] : v
                } else
                  for (g in i)
                    if (m) {
                      if (a(i, g) && (d = c ? l.call(c, i[g], g, e) : l(i[g], g, e)) !== s) return d
                    } else if (l === i[g]) return g;
              return m ? e.r : t.list.index ? 0 : -1
            }
          }(), t.time = {}, t.time.is = function(e) {
            return e ? e instanceof Date : +(new Date).getTime()
          };
        var n = t.fn.is,
          r = t.list.is,
          i = t.obj,
          o = i.is,
          a = i.has,
          u = i.map;
        e.exports = t
      }))(a, "./type"), a((function(e) {
        e.exports = function e(t, n, r) {
          if (!t) return {
            to: e
          };
          t = (this.tag || (this.tag = {}))[t] || (this.tag[t] = {
            tag: t,
            to: e._ = {
              next: function(e) {
                var t;
                (t = this.to) && t.next(e)
              }
            }
          });
          if (n instanceof Function) {
            var i = {
              off: e.off || (e.off = function() {
                if (this.next === e._.next) return !0;
                this === this.the.last && (this.the.last = this.back), this.to.back = this.back, this.next = e._.next, this.back.to = this.to, this.the.last === this.the && delete this.on.tag[this.the.tag]
              }),
              to: e._,
              next: n,
              the: t,
              on: this,
              as: r
            };
            return (i.back = t.last || t).to = i, t.last = i
          }
          return (t = t.to) && void 0 !== n && t.next(n), t
        }
      }))(a, "./onto"), a((function(e) {
        if ("undefined" == typeof JSON) throw new Error("JSON is not included in this browser. Please load it first: ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js");
        var t = JSON.stringify;
        e.exports = function(e, n, r, i, o) {
          if (e < n) return {
            defer: !0
          };
          if (n < r) return {
            historical: !0
          };
          if (r < n) return {
            converge: !0,
            incoming: !0
          };
          if (n === r) {
            if ((i = t(i) || "") === (o = t(o) || "")) return {
              state: !0
            };
            if (i < o) return {
              converge: !0,
              current: !0
            };
            if (o < i) return {
              converge: !0,
              incoming: !0
            }
          }
          return {
            err: "Invalid CRDT Data: " + i + " to " + o + " at " + n + " to " + r + "!"
          }
        }
      }))(a, "./HAM"), a((function(e) {
        var t = a("./type"),
          n = {
            is: function(e) {
              return void 0 !== e && (null === e || e !== 1 / 0 && (!!(u(e) || i(e) || o(e)) || (n.link.is(e) || !1)))
            }
          };
        n.link = n.rel = {
            _: "#"
          },
          function() {
            function e(e, t) {
              var n = this;
              return n.id ? n.id = !1 : t == r && u(e) ? void(n.id = e) : n.id = !1
            }
            n.link.is = function(t) {
              if (t && t[r] && !t._ && c(t)) {
                var n = {};
                if (f(t, e, n), n.id) return n.id
              }
              return !1
            }
          }(), n.link.ify = function(e) {
            return s({}, r, e)
          }, t.obj.has._ = ".";
        var r = n.link._,
          i = t.bi.is,
          o = t.num.is,
          u = t.text.is,
          l = t.obj,
          c = l.is,
          s = l.put,
          f = l.map;
        e.exports = n
      }))(a, "./val"), a((function(e) {
        var t = a("./type"),
          n = a("./val"),
          r = {
            _: "_",
            soul: function(e, t) {
              return e && e._ && e._[t || s]
            }
          };
        r.soul.ify = function(e, t) {
            return t = "string" == typeof t ? {
              soul: t
            } : t || {}, (e = e || {})._ = e._ || {}, e._[s] = t.soul || e._[s] || c(), e
          }, r.soul._ = n.link._,
          function() {
            function e(e, t) {
              if (t !== r._) return !n.is(e) || void(this.cb && this.cb.call(this.as, e, t, this.n, this.s))
            }
            r.is = function(t, n, i) {
              var a;
              return !!o(t) && (!!(a = r.soul(t)) && !l(t, e, {
                as: i,
                cb: n,
                s: a,
                n: t
              }))
            }
          }(),
          function() {
            function e(e, t) {
              var r, i = this.o;
              i.map ? void 0 === (r = i.map.call(this.as, e, "" + t, i.node)) ? u(i.node, t) : i.node && (i.node[t] = r) : n.is(e) && (i.node[t] = e)
            }
            r.ify = function(t, n, i) {
              return n ? "string" == typeof n ? n = {
                soul: n
              } : n instanceof Function && (n = {
                map: n
              }) : n = {}, n.map && (n.node = n.map.call(i, t, void 0, n.node || {})), (n.node = r.soul.ify(n.node || {}, n)) && l(t, e, {
                o: n,
                as: i
              }), n.node
            }
          }();
        var i = t.obj,
          o = i.is,
          u = i.del,
          l = i.map,
          c = t.text.random,
          s = r.soul._;
        e.exports = r
      }))(a, "./node"), a((function(e) {
        var t = a("./type"),
          n = a("./node");

        function r() {
          var e;
          return e = i(), o < e ? (u = 0, o = e + r.drift) : o = e + (u += 1) / l + r.drift
        }
        var i = t.time.is,
          o = -1 / 0,
          u = 0,
          l = 1e3,
          c = "undefined" != typeof performance && (performance.timing && performance);
        c && c.timing && c.timing.navigationStart || (c = !1);
        r._ = ">", r.drift = 0, r.is = function(e, t, n) {
            var i = t && e && e[y] && e[y][r._] || n;
            if (i) return v(i = i[t]) ? i : -1 / 0
          }, r.lex = function() {
            return r().toString(36).replace(".", "")
          }, r.ify = function(e, t, i, o, a) {
            if (!e || !e[y]) {
              if (!a) return;
              e = n.soul.ify(e, a)
            }
            var u = d(e[y], r._);
            return s !== t && t !== y && (v(i) && (u[t] = i), s !== o && (e[t] = o)), e
          }, r.to = function(e, t, i) {
            var o = (e || {})[t];
            return h(o) && (o = m(o)), r.ify(i, t, r.is(e, t), o, n.soul(e))
          },
          function() {
            function e(e, t) {
              y !== t && r.ify(this.o, t, this.s)
            }
            r.map = function(t, n, i) {
              var o, a = h(a = t || n) ? a : null;
              return t = b(t = t || n) ? t : null, a && !t ? (n = v(n) ? n : r(), a[y] = a[y] || {}, g(a, e, {
                o: a,
                s: n
              }), a) : (i = i || h(n) ? n : o, n = v(n) ? n : r(), function(r, a, u, l) {
                if (!t) return e.call({
                  o: u,
                  s: n
                }, r, a), r;
                t.call(i || this || {}, r, a, u, l), p(u, a) && o === u[a] || e.call({
                  o: u,
                  s: n
                }, r, a)
              })
            }
          }();
        var s, f = t.obj,
          d = f.as,
          p = f.has,
          h = f.is,
          g = f.map,
          m = f.copy,
          v = t.num.is,
          b = t.fn.is,
          y = n._;
        e.exports = r
      }))(a, "./state"), a((function(e) {
        var t = a("./type"),
          n = a("./val"),
          r = a("./node"),
          i = {};
        ! function() {
          function e(e, n) {
            if (!e || n !== r.soul(e) || !r.is(e, this.fn, this.as)) return !0;
            this.cb && (t.n = e, t.as = this.as, this.cb.call(t.as, e, n, t))
          }

          function t(e) {
            e && r.is(t.n, e, t.as)
          }
          i.is = function(t, n, r, i) {
            return !(!t || !l(t) || f(t)) && !p(t, e, {
              cb: n,
              fn: r,
              as: i
            })
          }
        }(),
        function() {
          function e(e, t) {
            var i;
            return (i = function(e, t) {
              var n, r = e.seen,
                i = r.length;
              for (; i--;)
                if (n = r[i], t.obj === n.obj) return n;
              r.push(t)
            }(e, t)) ? i : (t.env = e, t.soul = u, r.ify(t.obj, a, t) && (t.link = t.link || n.link.ify(r.soul(t.node)), t.obj !== e.shell && (e.graph[n.link.is(t.link)] = t.node)), t)
          }

          function a(t, i, a) {
            var u, l, d = this,
              p = d.env;
            if (r._ === i && s(t, n.link._)) return a._;
            if (u = f(t, i, a, d, p)) {
              if (i || (d.node = d.node || a || {}, s(t, r._) && r.soul(t) && (d.node._ = h(t._)), d.node = r.soul.ify(d.node, n.link.is(d.link)), d.link = d.link || n.link.ify(r.soul(d.node))), (l = p.map) && (l.call(p.as || {}, t, i, a, d), s(a, i))) {
                if (t = a[i], o === t) return void c(a, i);
                if (!(u = f(t, i, a, d, p))) return
              }
              if (!i) return d.node;
              if (!0 === u) return t;
              if ((l = e(p, {
                  obj: t,
                  path: d.path.concat(i)
                })).node) return l.link
            }
          }

          function u(e) {
            var t = this,
              i = n.link.is(t.link),
              o = t.env.graph;
            t.link = t.link || n.link.ify(e), t.link[n.link._] = e, t.node && t.node[r._] && (t.node[r._][n.link._] = e), s(o, i) && (o[e] = o[i], c(o, i))
          }

          function f(e, r, i, o, a) {
            var u;
            return !!n.is(e) || (l(e) ? 1 : (u = a.invalid) ? f(e = u.call(a.as || {}, e, r, i), r, i, o, a) : (a.err = "Invalid value at '" + o.path.concat(r).join(".") + "'!", void(t.list.is(e) && (a.err += " Use `.set(item)` instead of an Array."))))
          }
          i.ify = function(t, r, i) {
            var o = {
              path: [],
              obj: t
            };
            return r ? "string" == typeof r ? r = {
              soul: r
            } : r instanceof Function && (r.map = r) : r = {}, r.soul && (o.link = n.link.ify(r.soul)), r.shell = (i || {}).shell, r.graph = r.graph || {}, r.seen = r.seen || [], r.as = r.as || i, e(r, o), r.root = o.node, r.graph
          }
        }(), i.node = function(e) {
            var t = r.soul(e);
            if (t) return d({}, t, e)
          },
          function() {
            function e(e, t) {
              var o, a;
              if (r._ !== t)(o = n.link.is(e)) ? (a = this.opt.seen[o]) ? this.obj[t] = a : this.obj[t] = this.opt.seen[o] = i.to(this.graph, o, this.opt) : this.obj[t] = e;
              else {
                if (f(e, n.link._)) return;
                this.obj[t] = h(e)
              }
            }
            i.to = function(t, n, r) {
              if (t) {
                var i = {};
                return r = r || {
                  seen: {}
                }, p(t[n], e, {
                  obj: i,
                  graph: t,
                  opt: r
                }), i
              }
            }
          }();
        t.fn.is;
        var o, u = t.obj,
          l = u.is,
          c = u.del,
          s = u.has,
          f = u.empty,
          d = u.put,
          p = u.map,
          h = u.copy;
        e.exports = i
      }))(a, "./graph"), a((function(e) {
        a("./onto"), e.exports = function(e, t) {
          if (this.on) {
            if (!(e instanceof Function)) {
              if (!e || !t) return;
              var n = e["#"] || e,
                r = (this.tag || empty)[n];
              if (!r) return;
              return r = this.on(n, t), clearTimeout(r.err), !0
            }
            n = t && t["#"] || Math.random().toString(36).slice(2);
            if (!e) return n;
            var i = this.on(n, e, t);
            return i.err = i.err || setTimeout((function() {
              i.next({
                err: "Error: No ACK received yet.",
                lack: !0
              }), i.off()
            }), (this.opt || {}).lack || 9e3), n
          }
        }
      }))(a, "./ask"), a((function(e) {
        var t = a("./type");
        var n = t.time.is;
        e.exports = function(e) {
          var r = {
            s: {}
          };
          return e = e || {
            max: 1e3,
            age: 9e3
          }, r.check = function(e) {
            var t;
            return !!(t = r.s[e]) && (t.pass ? t.pass = !1 : r.track(e))
          }, r.track = function(i, o) {
            var a = r.s[i] || (r.s[i] = {});
            return a.was = n(), o && (a.pass = !0), r.to || (r.to = setTimeout((function() {
              var i = n();
              t.obj.map(r.s, (function(n, o) {
                n && e.age > i - n.was || t.obj.del(r.s, o)
              })), r.to = null
            }), e.age + 9)), a
          }, r
        }
      }))(a, "./dup"), a((function(e) {
        function t(e) {
          return e instanceof t ? (this._ = {
            gun: this,
            $: this
          }).$ : this instanceof t ? t.create(this._ = {
            gun: this,
            $: this,
            opt: e
          }) : new t(e)
        }
        t.is = function(e) {
          return e instanceof t || e && e._ && e === e._.$ || !1
        }, t.version = .9, t.chain = t.prototype, t.chain.toJSON = function() {};
        var n = a("./type");
        n.obj.to(n, t), t.HAM = a("./HAM"), t.val = a("./val"), t.node = a("./node"), t.state = a("./state"), t.graph = a("./graph"), t.on = a("./onto"), t.ask = a("./ask"), t.dup = a("./dup"),
          function() {
            function e(n) {
              var i, o, a = this.as,
                u = a.at || a,
                l = u.$;
              (o = n["#"]) || (o = n["#"] = s(9)), (i = u.dup).check(o) ? a.out === n.out && (n.out = r, this.to.next(n)) : (i.track(o), u.ask(n["@"], n) || (n.get && t.on.get(n, l), n.put && t.on.put(n, l)), this.to.next(n), a.out || (n.out = e, u.on("out", n)))
            }
            t.create = function(n) {
              n.root = n.root || n, n.graph = n.graph || {}, n.on = n.on || t.on, n.ask = n.ask || t.ask, n.dup = n.dup || t.dup();
              var r = n.$.opt(n.opt);
              return n.once || (n.on("in", e, n), n.on("out", e, {
                at: n,
                out: e
              }), t.on("create", n), n.on("create", n)), n.once = 1, r
            }
          }(),
          function() {
            function e(e, n, r, i) {
              var o = this,
                a = t.state.is(r, n);
              if (!a) return o.err = "Error: No state on '" + n + "' in node '" + i + "'!";
              var u = o.graph[i] || y,
                l = t.state.is(u, n, !0),
                c = u[n],
                s = t.HAM(o.machine, a, l, e, c);
              s.incoming ? (o.put[i] = t.state.to(r, n, o.put[i]), (o.diff || (o.diff = {}))[i] = t.state.to(r, n, o.diff[i]), o.souls[i] = !0) : s.defer && (o.defer = a < (o.defer || 1 / 0) ? a : o.defer)
            }

            function n(e, t) {
              var n = this,
                r = n.$._,
                u = (r.next || y)[t];
              if (!u) {
                if (!(r.opt || y).super) return void(n.souls[t] = !1);
                u = n.$.get(t)._
              }
              var l = n.map[t] = {
                  put: e,
                  get: t,
                  $: u.$
                },
                c = {
                  ctx: n,
                  msg: l
                };
              n.async = !!r.tag.node, n.ack && (l["@"] = n.ack), g(e, i, c), n.async && (n.and || r.on("node", (function(e) {
                this.to.next(e), e === n.map[e.get] && (n.souls[e.get] = !1, g(e.put, o, e), g(n.souls, (function(e) {
                  if (e) return e
                })) || n.c || (n.c = 1, this.off(), g(n.map, a, n)))
              })), n.and = !0, r.on("node", l))
            }

            function i(e, n) {
              var r = this.ctx,
                i = r.graph,
                o = this.msg,
                a = o.get,
                u = o.put,
                l = o.$._;
              i[a] = t.state.to(u, n, i[a]), r.async || (l.put = t.state.to(u, n, l.put))
            }

            function o(e, n) {
              var r = this.put,
                i = this.$._;
              i.put = t.state.to(r, n, i.put)
            }

            function a(e, t) {
              e.$ && (this.cat.stop = this.stop, e.$._.on("in", e), this.cat.stop = null)
            }
            t.on.put = function(i, o) {
              var u = o._,
                l = {
                  $: o,
                  graph: u.graph,
                  put: {},
                  map: {},
                  souls: {},
                  machine: t.state(),
                  ack: i["@"],
                  cat: u,
                  stop: {}
                };
              if (t.graph.is(i.put, null, e, l) || (l.err = "Error: Invalid graph!"), l.err) return u.on("in", {
                "@": i["#"],
                err: t.log(l.err)
              });
              g(l.put, n, l), l.async || g(l.map, a, l), r !== l.defer && setTimeout((function() {
                t.on.put(i, o)
              }), l.defer - l.machine), l.diff && u.on("put", h(i, {
                put: l.diff
              }))
            }, t.on.get = function(e, n) {
              var r = n._,
                i = e.get,
                o = i[v],
                a = r.graph[o],
                u = i[b],
                l = (r.next || (r.next = {}))[o];
              if (!a) return r.on("get", e);
              if (u) {
                if ("string" != typeof u || !p(a, u)) return r.on("get", e);
                a = t.state.to(a, u)
              } else a = t.obj.copy(a);
              a = t.graph.node(a), (l || y).ack, r.on("in", {
                "@": e["#"],
                how: "mem",
                put: a,
                $: n
              }), r.on("get", e)
            }
          }(), t.chain.opt = function(e) {
            e = e || {};
            var n = this._,
              r = e.peers || e;
            return d(e) || (e = {}), d(n.opt) || (n.opt = e), c(r) && (r = [r]), i(r) && (r = g(r, (function(e, t, n) {
              (t = {}).id = t.url = e, n(e, t)
            })), d(n.opt.peers) || (n.opt.peers = {}), n.opt.peers = h(r, n.opt.peers)), n.opt.peers = n.opt.peers || {}, g(e, (function e(t, n) {
              !p(this, n) || l.is(t) || f.empty(t) ? this[n] = t : t && t.constructor !== Object && !i(t) || g(t, e, this[n])
            }), n.opt), t.on("opt", n), n.opt.uuid = n.opt.uuid || function() {
              return m() + s(12)
            }, this
          };
        var r, i = t.list.is,
          l = t.text,
          c = l.is,
          s = l.random,
          f = t.obj,
          d = f.is,
          p = f.has,
          h = f.to,
          g = f.map,
          m = (f.copy, t.state.lex),
          v = t.val.link._,
          b = ".",
          y = (t.node._, t.val.link.is, {});
        o.only = function(e, t) {
          return o.only.i && e === o.only.i && o.only.i++ && (o.log.apply(o, arguments) || t)
        }, t.log = function() {
          return !t.log.off && o.log.apply(o, arguments), [].slice.call(arguments).join(" ")
        }, t.log.once = function(e, n, r) {
          return (r = t.log.once)[e] = r[e] || 0, r[e]++ || t.log(n)
        }, t.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, feel free to ask for help on https://gitter.im/amark/gun and ask StackOverflow questions tagged with 'gun'!"), "undefined" != typeof window && ((window.GUN = window.Gun = t).window = window);
        try {
          void 0 !== u && (u.exports = t)
        } catch (e) {}
        e.exports = t
      }))(a, "./root"), a((function(e) {
        var t = a("./root");
        t.chain.back = function(e, i) {
          if (-1 === (e = e || 1) || 1 / 0 === e) return this._.root.$;
          if (1 === e) return (this._.back || this._).$;
          var o = this._;
          if ("string" == typeof e && (e = e.split(".")), e instanceof Array) {
            for (var a = 0, u = e.length, l = o; a < u; a++) l = (l || r)[e[a]];
            return n !== l ? i ? this : l : (l = o.back) ? l.$.back(e, i) : void 0
          }
          if (e instanceof Function) {
            var c;
            for (l = {
                back: o
              };
              (l = l.back) && n === (c = e(l, i)););
            return c
          }
          return t.num.is(e) ? (o.back || o).$.back(e - 1) : this
        };
        var n, r = {}
      }))(a, "./back"), a((function(e) {
        var t = a("./root");

        function n(e) {
          var n, r, i = this.as,
            o = i.back,
            a = i.root;
          if (e.$ || (e.$ = i.$), this.to.next(e), n = e.get) {
            if (i.lex && (e.get = m(i.lex, e.get)), n["#"] || i.soul) {
              if (n["#"] = n["#"] || i.soul, e["#"] || (e["#"] = b(9)), o = a.$.get(n["#"])._, n = n["."]) {
                if (h(o.put, n)) {
                  if ((r = (u = o.$.get(n)._).ack) || (u.ack = -1), o.on("in", {
                      $: o.$,
                      put: t.state.to(o.put, n),
                      get: o.get
                    }), r) return
                } else if ("string" != typeof n) {
                  var u = {},
                    l = (o.put || {})._;
                  t.obj.map(o.put, (function(e, r) {
                    t.text.match(r, n) && (u[r] = e)
                  })), t.obj.empty(u) || (u._ = l, o.on("in", {
                    $: o.$,
                    put: u,
                    get: o.get
                  }))
                }
              } else {
                if ((r = o.ack) || (o.ack = -1), h(o, "put") && o.on("in", o), r) return;
                e.$ = o.$
              }
              return a.ask(s, e), a.on("in", e)
            }
            if (a.now && (a.now[i.id] = a.now[i.id] || !0, i.pass = {}), n["."]) return i.get ? (e = {
              get: {
                ".": i.get
              },
              $: i.$
            }, o.ask || (o.ask = {}), o.ask[i.get] = e.$._, o.on("out", e)) : (e = {
              get: {},
              $: i.$
            }, o.on("out", e));
            if (i.ack = i.ack || -1, i.get) return e.$ = i.$, n["."] = i.get, (o.ask || (o.ask = {}))[i.get] = e.$._, o.on("out", e)
          }
          return o.on("out", e)
        }

        function r(e) {
          var n, r, a = this,
            u = a.as,
            s = u.root,
            p = (e.$ || d)._ || d,
            b = e.put;
          if (u.get && e.get !== u.get && (e = m(e, {
              get: u.get
            })), u.has && p !== u && (e = m(e, {
              $: u.$
            }), p.ack && (u.ack = p.ack)), f === b) {
            if (r = p.put, a.to.next(e), u.soul) return;
            if (f === r && f !== p.put) return;
            return o(u, e, a), u.has && c(u, e), g(p.echo, u.id), void g(u.map, p.id)
          }
          if (u.soul) return a.to.next(e), o(u, e, a), void(u.next && v(b, l, {
            msg: e,
            cat: u
          }));
          if (!(n = t.val.link.is(b))) return t.val.is(b) ? (u.has || u.soul ? c(u, e) : (p.has || p.soul) && ((p.echo || (p.echo = {}))[u.id] = p.echo[p.id] || u, (u.map || (u.map = {}))[p.id] = u.map[p.id] || {
            at: p
          }), a.to.next(e), void o(u, e, a)) : (u.has && p !== u && h(p, "put") && (u.put = p.put), (n = t.node.soul(b)) && p.has && (p.put = u.root.$.get(n)._.put), r = (s.stop || {})[p.id], a.to.next(e), i(u, e, p, n), o(u, e, a), void(u.next && v(b, l, {
            msg: e,
            cat: u
          })));
          s.stop;
          (r = (r = s.stop || {})[p.id] || (r[p.id] = {})).is = r.is || p.put, r[u.id] = p.put || !0, a.to.next(e), i(u, e, p, n), o(u, e, a)
        }

        function i(e, n, r, o) {
          if (o && y !== e.get) {
            var a = e.root.$.get(o)._;
            e.has ? r = a : r.has && i(r, n, r, o), r !== e && (r.$ || (r = {}), (r.echo || (r.echo = {}))[e.id] = r.echo[e.id] || e, e.has && !(e.map || d)[r.id] && c(e, n), (o !== (a = r.id ? (e.map || (e.map = {}))[r.id] = e.map[r.id] || {
              at: r
            } : {}).link || a.pass || e.pass) && (e.pass && (t.obj.map(e.map, (function(e) {
              e.pass = !0
            })), g(e, "pass")), a.pass && g(a, "pass"), e.has && (e.link = o), function(e, n) {
              var r = e.root.$.get(n)._,
                i = e.lex;
              if ((e.ack || i) && ((i = i || {})["#"] = n, r.on("out", {
                  get: i
                }), !e.ask)) return;
              r = e.ask, t.obj.del(e, "ask"), v(r || e.next, (function(e, t) {
                var r = e.lex || {};
                r["#"] = n, r["."] = r["."] || t, e.on("out", {
                  get: r
                })
              })), t.obj.del(e, "ask")
            }(e, a.link = o)))
          }
        }

        function o(e, t, n) {
          e.echo && v(e.echo, u, t)
        }

        function u(e) {
          e && e.on && e.on("in", this)
        }

        function l(e, n) {
          var r, i, o, a = this.cat.next || d,
            u = this.msg;
          (y !== n || a[n]) && (i = a[n]) && (i.has ? (f !== i.put && t.val.link.is(e) || (i.put = e), r = i.$) : (o = u.$) && (o = (r = u.$.get(n))._, f !== o.put && t.val.link.is(e) || (o.put = e)), i.on("in", {
            put: e,
            get: n,
            $: r,
            via: u
          }))
        }

        function c(e, n) {
          if (e.has || e.soul) {
            var r = e.map;
            e.root;
            e.map = null, e.has && (e.dub && e.root.stop && (e.dub = null), e.link = null), (e.pass || n["@"] || null !== r) && (f === r && t.val.link.is(e.put) || (v(r, (function(t) {
              (t = t.at) && g(t.echo, e.id)
            })), r = e.put, v(e.next, (function(t, n) {
              if (f === r && f !== e.put) return !0;
              t.put = f, t.ack && (t.ack = -1), t.on("in", {
                get: n,
                $: t.$,
                put: f
              })
            }))))
          }
        }

        function s(e, n) {
          var r = this.as,
            i = r.get || d,
            o = r.$._,
            a = (e.put || d)[i["#"]];
          if (o.ack && (o.ack = o.ack + 1 || 1), e.put && ("string" != typeof i["."] || h(a, o.get))) y != i["."] ? t.on.put(e, o.root.$) : o.on("in", {
            get: o.get,
            put: t.val.link.ify(i["#"]),
            $: o.$,
            "@": e["@"]
          });
          else {
            if (o.put !== f) return;
            o.on("in", {
              get: o.get,
              put: o.put = f,
              $: o.$,
              "@": e["@"]
            })
          }
        }
        t.chain.chain = function(e) {
          var i, o = this._,
            a = new(e || this).constructor(this),
            u = a._;
          return u.root = i = o.root, u.id = ++i.once, u.back = this._, u.on = t.on, u.on("in", r, u), u.on("out", n, u), a
        };
        var f, d = {},
          p = t.obj,
          h = p.has,
          g = (p.put, p.del),
          m = p.to,
          v = p.map,
          b = t.text.random,
          y = (t.val.link._, t.node._)
      }))(a, "./chain"), a((function(e) {
        var t = a("./root");

        function n(e) {
          var n, r = this,
            o = r.as,
            a = o.at.root,
            l = (e.$ || {})._ || {},
            s = e.put || l.put;
          if ((n = a.now) && r !== n[o.now]) return r.to.next(e);
          if (r.seen && l.id && r.seen[l.id]) return r.to.next(e);
          if ((n = s) && n[c._] && (n = c.is(n)) && (n = (e.$$ = l.root.gun.get(n))._, i !== n.put && (e = u(e, {
              put: s = n.put
            }))), (n = a.mum) && l.id) {
            var f = l.id + (r.id || (r.id = t.text.random(9)));
            if (n[f]) return;
            i === s || c.is(s) || (n[f] = !0)
          }
          o.use(e, r), r.stun ? r.stun = null : r.to.next(e)
        }

        function r(e) {
          var t = this.on;
          if (!e || t.soul || t.has) return this.off();
          if (e = (e = (e = e.$ || e)._ || e).id) {
            var n;
            t.map;
            if ((n = this.seen || (this.seen = {}))[e]) return !0;
            n[e] = !0
          }
        }
        t.chain.get = function(e, a, u) {
          var d;
          if ("string" != typeof e) {
            if (e instanceof Function) {
              if (!0 === a) return function(e, t, n, r) {
                var o, a = e._,
                  u = 0;
                if (o = a.soul || a.link || a.dub) return t(o, r, a);
                if (a.jam) return a.jam.push([t, r]);
                a.jam = [
                  [t, r]
                ], e.get((function(e, t) {
                  if (!(i === e.put && (o = Object.keys(a.root.opt.peers).length) && ++u < o)) {
                    t.rid(e);
                    var n, r = (r = e.$) && r._ || {},
                      l = 0;
                    for (o = a.jam, delete a.jam; n = o[l++];) {
                      var f = n[0];
                      n = n[1], f && f(r.link || r.soul || c.is(e.put) || s(e.put) || r.dub, n, e, t)
                    }
                  }
                }), {
                  out: {
                    get: {
                      ".": !0
                    }
                  }
                })
              }(this, e, 0, u), this;
              var p, h = (d = this)._,
                g = h.root,
                m = g.now;
              (u = a || {}).at = h, u.use = e, u.out = u.out || {}, u.out.get = u.out.get || {}, (p = h.on("in", n, u)).rid = r, (g.now = {
                $: 1
              })[u.now = h.id] = p;
              var v = g.mum;
              return g.mum = {}, h.on("out", u.out), g.mum = v, g.now = m, d
            }
            return l(e) ? this.get("" + e, a, u) : (m = c.is(e)) ? this.get(m, a, u) : o.is(e) ? (d = this, (m = ((m = e["#"]) || f)["="] || m) && (d = d.get(m)), d._.lex = e, d) : ((u = this.chain())._.err = {
              err: t.log("Invalid get request!", e)
            }, a && a.call(u, u._.err), u)
          }
          return (d = (this._.next || f)[e]) || (d = function(e, t) {
            var n = t._,
              r = n.next,
              i = t.chain()._;
            r || (r = n.next = {});
            r[i.get = e] = i, t === n.root.$ ? i.soul = e : (n.soul || n.has) && (i.has = e);
            return i
          }(e, this)), d = d.$, (m = this._.stun) && (d._.stun = d._.stun || m), a && a instanceof Function && d.get(a, u), d
        };
        var i, o = t.obj,
          u = (o.map, o.has, t.obj.to),
          l = t.num.is,
          c = t.val.link,
          s = t.node.soul,
          f = (t.node._, {})
      }))(a, "./get"), a((function(e) {
        var t = a("./root");

        function n(e) {
          e && e()
        }

        function r() {
          var e = this;
          e.graph && !g(e.stun, i) && (e.res = e.res || function(e) {
            e && e()
          }, e.res((function() {
            var n = e.$.back(-1)._,
              r = n.ask((function(r) {
                n.root.on("ack", r), r.err && t.log(r), ++i > (e.acks || 0) && this.off(), e.ack && e.ack(r, this)
              }), e.opt),
              i = 0,
              o = n.root.now;
            d.del(n.root, "now");
            var a = n.root.mum;
            n.root.mum = {}, e.ref._.on("out", {
              $: e.ref,
              put: e.out = e.env.graph,
              opt: e.opt,
              "#": r
            }), n.root.mum = a ? d.to(a, n.root.mum) : a, n.root.now = o
          }), e), e.res && e.res())
        }

        function i(e, t) {
          if (e) return !0
        }

        function u(e, n, r, i) {
          var o = this,
            a = t.is(e);
          !n && i.path.length && (o.res || b)((function() {
            for (var n = i.path, r = o.ref, u = (o.opt, 0), c = n.length; u < c; u++) r = r.get(n[u]);
            a && (r = e);
            var s = r._.dub;
            if (s || (s = t.node.soul(i.obj))) return r.back(-1).get(s), void i.soul(s);
            (o.stun = o.stun || {})[n] = !0, r.get(l, !0, {
              as: {
                at: i,
                as: o,
                p: n
              }
            })
          }), {
            as: o,
            at: i
          })
        }

        function l(e, n, r, i) {
          var o = (n = n.as).at;
          n = n.as;
          var a = ((r || {}).$ || {})._ || {};
          e = a.dub = a.dub || e || t.node.soul(o.obj) || t.node.soul(r.put || a.put) || t.val.link.is(r.put || a.put) || (n.via.back("opt.uuid") || t.text.random)(), i && (i.stun = !0), e ? c(a, a.dub = e, o, n) : n.via.back("opt.uuid")((function(e, r) {
            if (e) return t.log(e);
            c(a, a.dub = a.dub || r, o, n)
          }))
        }

        function c(e, t, n, r) {
          e.$.back(-1).get(t), n.soul(t), r.stun[n.path] = !1, r.batch()
        }

        function s(e, n, r, i) {
          if (n = n.as, r.$ && r.$._)
            if (r.err) o.log("Please report this as an issue! Put.any.err");
            else {
              var a, u = r.$._,
                l = u.put,
                c = n.opt || {};
              if (!(a = n.ref) || !a._.now) {
                if (i && (i.stun = !0), n.ref !== n.$) {
                  if (!(a = n.$._.get || u.get)) return void o.log("Please report this as an issue! Put.no.get");
                  n.data = h({}, a, n.data), a = null
                }
                if (f === l) {
                  if (!u.get) return;
                  e || (a = u.$.back((function(e) {
                    if (e.link || e.soul) return e.link || e.soul;
                    n.data = h({}, e.get, n.data)
                  })), n.not = !0), u = (a = a || u.soul || u.link || u.dub) ? u.root.$.get(a)._ : u, n.soul = a, l = n.data
                }
                n.not || (n.soul = n.soul || e) || (n.path && p(n.data) ? n.soul = (c.uuid || n.via.back("opt.uuid") || t.text.random)() : (y == u.get && (n.soul = (u.put || m)["#"] || u.dub), n.soul = n.soul || u.soul || u.link || (c.uuid || n.via.back("opt.uuid") || t.text.random)()), n.soul) ? n.ref.put(n.data, n.soul, n) : n.via.back("opt.uuid")((function(e, r) {
                  if (e) return t.log(e);
                  n.ref.put(n.data, n.soul = r, n)
                }))
              }
            }
        }
        t.chain.put = function(e, i, o) {
          var a, l = this,
            c = l._,
            f = c.root.$;
          f._;
          return (o = o || {}).data = e, o.via = o.$ = o.via || o.$ || l, "string" == typeof i ? o.soul = i : o.ack = o.ack || i, c.soul && (o.soul = c.soul), o.soul || f === l ? p(o.data) ? (o.soul = o.soul || (o.not = t.node.soul(o.data) || (o.via.back("opt.uuid") || t.text.random)()), o.soul ? (o.$ = f.get(o.soul), o.ref = o.$, function(e) {
            e.batch = r;
            var n = e.opt || {},
              i = e.env = t.state.map(u, n.state);
            if (i.soul = e.soul, e.graph = t.graph.ify(e.data, i, e), i.err) return (e.ack || v).call(e, e.out = {
              err: t.log(i.err)
            }), void(e.res && e.res());
            e.batch()
          }(o), l) : (o.via.back("opt.uuid")((function(e, n) {
            if (e) return t.log(e);
            (o.ref || o.$).put(o.data, o.soul = n, o)
          })), l)) : ((o.ack || v).call(o, o.out = {
            err: t.log("Data saved to the root level of the graph must be a node (an object), not a", typeof o.data, 'of "' + o.data + '"!')
          }), o.res && o.res(), l) : t.is(e) ? (e.get((function(e, n, r) {
            if (!e) return t.log("The reference you are saving is a", typeof r.put, '"' + r.put + '", not a node (object)!');
            l.put(t.val.link.ify(e), i, o)
          }), !0), l) : (c.has && (a = t.val.link.is(e)) && (c.dub = a), o.ref = o.ref || f._ === (a = c.back) ? l : a.$, o.ref._.soul && t.val.is(o.data) && c.get ? (o.data = h({}, c.get, o.data), o.ref.put(o.data, o.soul, o), l) : (o.ref.get(s, !0, {
            as: o
          }), o.out || (o.res = o.res || n, o.$._.stun = o.ref._.stun), l))
        };
        var f, d = t.obj,
          p = d.is,
          h = d.put,
          g = d.map,
          m = {},
          v = function() {},
          b = function(e, t) {
            e.call(t || m)
          },
          y = t.node._
      }))(a, "./put"), a((function(e) {
        var t = a("./root");
        a("./chain"), a("./back"), a("./put"), a("./get"), e.exports = t
      }))(a, "./index"), a((function(e) {
        var t = a("./index");

        function n(e, t) {
          var n, r = e.$,
            o = ((r || {})._ || {}).put || e.put;
          this.at;
          if (i !== o) {
            if (n = e.$$) {
              if (n = e.$$._, i === n.put) return;
              o = n.put
            }
            this.change && (o = e.put), this.as ? this.ok.call(this.as, e, t) : this.ok.call(r, o, e.get, e, t)
          }
        }

        function r(e, n, o) {
          if (e.$) {
            var a, u, l = this.as,
              s = (l.at, e.$),
              f = s._,
              d = f.put || e.put;
            (u = e.$$) && (a = u = e.$$._, i !== a.put && (d = a.put)), (u = n.wait) && (u = u[f.id]) && clearTimeout(u), n.ack = (n.ack || 0) + 1, !o && i === d && n.ack <= (l.acks || Object.keys(f.root.opt.peers).length) || (!o && (i === d || f.soul || f.link || a && !(0 < a.ack)) || i === d && (u = Object.keys(f.root.opt.peers).length) && !o && (a || f).ack < u ? u = (n.wait = {})[f.id] = setTimeout((function() {
              r.call({
                as: l
              }, e, n, u || 1)
            }), l.wait || 99) : (a && i === a.put && (u = c.is(d)) && (d = t.node.ify({}, u)), n.rid ? n.rid(e) : n.off(), l.ok.call(s || l.$, d, e.get)))
          } else n.off()
        }
        t.chain.on = function(e, t, r, i) {
          var o, a = this._;
          if ("string" == typeof e) return t ? (o = a.on(e, t, r || a, i), r && r.$ && (r.subs || (r.subs = [])).push(o), this) : a.on(e);
          var u = t;
          return (u = !0 === u ? {
            change: !0
          } : u || {}).at = a, u.ok = e, this.get(n, u), this
        }, t.chain.val = function(e, n) {
          return t.log.once("onceval", "Future Breaking API Change: .val -> .once, apologies unexpected."), this.once(e, n)
        }, t.chain.once = function(e, n) {
          var o = this,
            a = o._,
            u = a.put;
          if (0 < a.ack && i !== u) return (e || s).call(o, u, a.get), o;
          if (!e) {
            t.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
            var l = o.chain();
            return l._.nix = o.once((function() {
              l._.on("in", o._)
            })), l
          }
          return (n = n || {}).ok = e, n.at = a, n.out = {
            "#": t.text.random(9)
          }, o.get(r, {
            as: n
          }), n.async = !0, o
        }, t.chain.off = function() {
          var e, t = this._,
            n = t.back;
          if (n) return t.ack = 0, (e = n.next) && e[t.get] && l(e, t.get), (e = n.ask) && l(e, t.get), (e = n.put) && l(e, t.get), (e = t.soul) && l(n.root.graph, e), (e = t.map) && u(e, (function(e) {
            e.link && n.root.$.get(e.link).off()
          })), (e = t.next) && u(e, (function(e) {
            e.$.off()
          })), t.on("off", {}), this
        };
        var i, o = t.obj,
          u = o.map,
          l = (o.has, o.del),
          c = (o.to, t.val.link),
          s = function() {}
      }))(a, "./on"), a((function(e) {
        var t = a("./index");

        function n(e) {
          if (!e.put || t.val.is(e.put)) return this.to.next(e);
          this.as.nix && this.off(), i(e.put, r, {
            at: this.as,
            msg: e
          }), this.to.next(e)
        }

        function r(e, n) {
          if (u !== n) {
            var r = this.msg.$,
              i = r._,
              o = this.at,
              a = i.lex;
            a && !t.text.match(n, a["."] || a["#"] || a) || (((a = r.get(n)._).echo || (a.echo = {}))[o.id] = a.echo[o.id] || o)
          }
        }
        t.chain.map = function(e, r, i) {
          var a, u = this._;
          return e ? (t.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."), a = this.chain(), this.map().on((function(n, r, i, u) {
            var l = (e || o).call(this, n, r, i, u);
            if (void 0 !== l) return n === l ? a._.on("in", i) : t.is(l) ? a._.on("in", l._) : void a._.on("in", {
              get: r,
              put: l
            })
          })), a) : (a = u.each) ? a : (u.each = a = this.chain(), a._.nix = this.back("nix"), this.on("in", n, a._), a)
        };
        var i = t.obj.map,
          o = function() {},
          u = t.node._
      }))(a, "./map"), a((function(e) {
        var t = a("./index");
        t.chain.set = function(e, n, r) {
          var i, o = this;
          return n = n || function() {}, (r = r || {}).item = r.item || e, (i = t.node.soul(e)) && (e = t.obj.put({}, i, t.val.link.ify(i))), t.is(e) ? (e.get((function(e, i, a) {
            if (!e) return n.call(o, {
              err: t.log('Only a node can be linked! Not "' + a.put + '"!')
            });
            o.put(t.obj.put({}, e, t.val.link.ify(e)), n, r)
          }), !0), e) : (t.obj.is(e) && (e = o.back(-1).get(i = i || t.node.soul(e) || o.back("opt.uuid")()).put(e)), o.get(i || t.state.lex() + t.text.random(7)).put(e, n, r))
        }
      }))(a, "./set"), a((function(e) {
        if ("undefined" != typeof Gun) {
          var t;
          try {
            t = (Gun.window || function() {}).localStorage
          } catch (e) {}
          t || (o.log("Warning: No localStorage exists to persist data to!"), t = {
            setItem: function(e, t) {
              this[e] = t
            },
            removeItem: function(e) {
              delete this[e]
            },
            getItem: function(e) {
              return this[e]
            }
          }), Gun.on("create", (function(e) {
            var n = this.to,
              r = e.opt;
            if (e.once) return n.next(e);
            if (!1 === r.localStorage) return n.next(e);
            r.prefix = r.file || "gun/";
            var i, o, a = Gun.obj.ify(t.getItem("gap/" + r.prefix)) || {},
              u = Gun.obj.empty;
            if (!u(a)) {
              var l = Gun.obj.ify(t.getItem(r.prefix)) || {},
                c = {};
              Gun.obj.map(a, (function(e, t) {
                Gun.obj.map(e, (function(e, n) {
                  c[t] = Gun.state.to(l[t], n, c[t])
                }))
              })), setTimeout((function() {
                e.on("out", {
                  put: c,
                  "#": e.ask(s)
                })
              }), 1)
            }

            function s(e) {
              if (!e.err && e.ok) {
                var t = e["@"];
                setTimeout((function() {
                  Gun.obj.map(a, (function(e, n) {
                    Gun.obj.map(e, (function(n, r) {
                      t === n && delete e[r]
                    })), u(e) && delete a[n]
                  })), d()
                }), r.wait || 1)
              }
            }
            e.on("out", (function(e) {
              e.lS || (Gun.is(e.$) && e.put && !e["@"] && (i = e["#"], Gun.graph.is(e.put, null, f), o || (o = setTimeout(d, r.wait || 1))), this.to.next(e))
            })), e.on("ack", s), n.next(e);
            var f = function(e, t, n, r) {
                (a[r] || (a[r] = {}))[t] = i
              },
              d = function() {
                clearTimeout(o), o = !1;
                try {
                  t.setItem("gap/" + r.prefix, JSON.stringify(a))
                } catch (e) {
                  Gun.log(err = e || "localStorage failure")
                }
              }
          })), Gun.on("create", (function(e) {
            this.to.next(e);
            var n = e.opt;
            if (!e.once && !1 !== n.localStorage) {
              n.prefix = n.file || "gun/";
              e.graph;
              var r, i = {},
                o = 0,
                a = Gun.obj.ify(t.getItem(n.prefix)) || {};
              e.on("localStorage", a), e.on("put", (function(e) {
                if (this.to.next(e), Gun.graph.is(e.put, null, u), e["@"] || (i[e["#"]] = !0), (o += 1) >= (n.batch || 1e3)) return l();
                r || (r = setTimeout(l, n.wait || 1))
              })), e.on("get", (function(t) {
                this.to.next(t);
                var n, r, i, o = t.get;

                function u() {
                  if (o && (n = o["#"])) {
                    var u = o["."];
                    (r = a[n] || i) && u && (r = Gun.state.to(r, u)), e.on("in", {
                      "@": t["#"],
                      put: Gun.graph.node(r),
                      how: "lS",
                      lS: t.$
                    })
                  }
                }
                Gun.debug ? setTimeout(u, 1) : u()
              }));
              var u = function(e, t, n, r) {
                  a[r] = Gun.state.to(n, t, a[r])
                },
                l = function(u) {
                  var c;
                  o = 0, clearTimeout(r), r = !1;
                  var s = i;
                  i = {}, u && (a = u);
                  try {
                    t.setItem(n.prefix, JSON.stringify(a))
                  } catch (t) {
                    Gun.log(c = (t || "localStorage failure") + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install"), e.on("localStorage:error", {
                      err: c,
                      file: n.prefix,
                      flush: a,
                      retry: l
                    })
                  }(c || Gun.obj.empty(n.peers)) && Gun.obj.map(s, (function(t, n) {
                    e.on("in", {
                      "@": n,
                      err: c,
                      ok: 0
                    })
                  }))
                }
            }
          }))
        }
      }))(a, "./adapters/localStorage"), a((function(e) {
        var t = a("../type"),
          n = void 0 !== r ? r : setTimeout;
        ! function() {
          t.text.hash = function(e) {
            if ("string" != typeof e) return {
              err: 1
            };
            var t = 0;
            if (!e.length) return t;
            for (var n = 0, r = e.length; n < r; ++n) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
            return t
          };
          var e = JSON.stringify;

          function n(e, n) {
            var i;
            return n instanceof Object ? (t.obj.map(Object.keys(n).sort(), r, {
              to: i = {},
              on: n
            }), i) : n
          }

          function r(e) {
            this.to[e] = this.on[e]
          }
          t.obj.hash = function(r, i) {
            if (i || void 0 !== (r = e(r, n))) return t.text.hash(i || r || "")
          }, t.obj.hash.sort = n
        }();
        var i, u = !0;
        try {
          e.exports = function(e) {
            var r = function() {},
              a = e.opt || {};
            a.log = a.log || o.log, a.gap = a.gap || a.wait || 1, a.pack = a.pack || .3 * (a.memory ? 1e3 * a.memory * 1e3 : 1399e6);
            var l = e.dup;
            r.hear = function(u, s) {
              if (u) {
                var f, d, p, h = u[0];
                if (a.pack <= u.length) return r.say({
                  dam: "!",
                  err: "Message too big!"
                }, s);
                if ("{" != u[2] && (r.hear.d += u.length || 0, ++r.hear.c), "[" !== h) {
                  if ("{" === h || t.obj.is(u) && (f = u)) {
                    try {
                      f = f || JSON.parse(u)
                    } catch (e) {
                      return a.log("DAM JSON parse error", e)
                    }
                    if (!f) return;
                    if ((d = f["#"]) || (d = f["#"] = t.text.random(9)), f.DBG_s && o.log(+new Date - f.DBG_s, "to hear", d), l.check(d)) return;
                    if (l.track(d, !0).it = f, (p = f["##"]) || i === f.put || (p = f["##"] = t.obj.hash(f.put)), p && (h = f["@"] || f.get && d)) {
                      if (l.check(h + p)) return;
                      l.track(h + p, !0).it = f
                    }
                    return (f._ = function() {}).via = s, (h = f["><"]) && (f._.to = t.obj.map(h.split(","), c)), f.dam ? void((h = r.hear[f.dam]) && h(f, s, e)) : void e.on("in", f)
                  }
                } else {
                  try {
                    f = JSON.parse(u)
                  } catch (e) {
                    a.log("DAM JSON parse error", e)
                  }
                  if (!f) return;
                  (function e() {
                    for (var t, i = +new Date, o = 100; o-- && (t = f.shift());) r.hear(t, s);
                    (r.hear.long || (r.hear.long = [])).push(+new Date - i), f.length && n(e, 0)
                  })()
                }
              }
            };
            var c = function(e, t, n) {
              n(e, !0)
            };

            function s(e, t) {
              try {
                var n = t.wire;
                t.say ? t.say(e) : n.send && n.send(e), r.say.d += e.length || 0, ++r.say.c
              } catch (n) {
                (t.queue = t.queue || []).push(e)
              }
            }
            r.hear.c = r.hear.d = 0,
              function() {
                var e;

                function n(t) {
                  r.say(e, t)
                }

                function o(e) {
                  var t = e.batch;
                  if (e.batch = e.tail = null, t && t.length) {
                    try {
                      t = 1 === t.length ? t[0] : JSON.stringify(t)
                    } catch (e) {
                      return a.log("DAM JSON stringify error", e)
                    }
                    t && s(t, e)
                  }
                }
                r.say = function(c, f) {
                  if (this.to && this.to.next(c), !c) return !1;
                  var d, p, h, g, m = c._ || (c._ = function() {});
                  if ((d = c["#"]) || (d = c["#"] = t.text.random(9)), (p = c["##"]) || i === c.put || (p = c["##"] = t.obj.hash(c.put)), !(g = m.raw) && (g = m.raw = r.raw(c), p && (h = c["@"]) && (l.track(h + p).it = c, h = (l.s[h] || u).it))) {
                    if (p === h["##"]) return !1;
                    h["##"] = p
                  }
                  if (l.track(d).it = c, f || (f = (h = l.s[c["@"]]) && (h = h.it) && (h = h._) && (h = h.via)), !f && r.way) return r.way(c);
                  if (!f || !f.id) return e = c, !!t.obj.is(f || a.peers) && void t.obj.map(f || a.peers, n);
                  if (!f.wire && r.wire && r.wire(f), d !== f.last) {
                    if (f.last = d, f === m.via) return !1;
                    if ((h = m.to) && (h[f.url] || h[f.pid] || h[f.id])) return !1;
                    if (f.batch) {
                      if (f.tail = (h = f.tail || 0) + g.length, f.tail <= a.pack) return void f.batch.push(g);
                      o(f)
                    }
                    f.batch = [], setTimeout((function() {
                      o(f)
                    }), a.gap), s(g, f)
                  }
                }, r.say.c = r.say.d = 0
              }(),
              function() {
                r.raw = function(n) {
                  if (!n) return "";
                  var r, i = n._ || {};
                  if (r = i.raw) return r;
                  if ("string" == typeof n) return n;
                  if (!n.dam) {
                    var o = 0,
                      u = [];
                    t.obj.map(a.peers, (function(e) {
                      if (u.push(e.url || e.pid || e.id), ++o > 9) return !0
                    })), o > 1 && (n["><"] = u.join())
                  }
                  var l = e(n);
                  return i && (i.raw = l), l
                };
                var e = JSON.stringify
              }(), r.hi = function(n) {
                var i = n.wire || {};
                n.id ? a.peers[n.url || n.id] = n : (i = n.id = n.id || t.text.random(9), r.say({
                  dam: "?"
                }, a.peers[i] = n)), n.met = n.met || +new Date, i.hied || e.on(i.hied = "hi", n), i = n.queue, n.queue = [], t.obj.map(i, (function(e) {
                  s(e, n)
                }))
              }, r.bye = function(t) {
                e.on("bye", t);
                var n = +new Date;
                n -= t.met || n, r.bye.time = ((r.bye.time || n) + n) / 2
              }, r.hear["!"] = function(e, t) {
                a.log("Error:", e.err)
              }, r.hear["?"] = function(e, t) {
                e.pid ? t.pid || (t.pid = e.pid) : r.say({
                  dam: "?",
                  pid: a.pid,
                  "@": e["#"]
                }, t)
              }, e.on("create", (function(e) {
                e.opt.pid = e.opt.pid || t.text.random(9), this.to.next(e), e.on("out", r.say)
              })), e.on("bye", (function(e, n) {
                e = a.peers[e.id || e] || e, this.to.next(e), e.bye ? e.bye() : (n = e.wire) && n.close && n.close(), t.obj.del(a.peers, e.id), e.wire = null
              }));
            var f = {};
            return e.on("bye", (function(e, t) {
              this.to.next(e), (t = e.url) && (f[t] = !0, setTimeout((function() {
                delete f[t]
              }), a.lack || 9e3))
            })), e.on("hi", (function(n, i) {
              this.to.next(n), (i = n.url) && f[i] && (delete f[i], t.obj.map(e.next, (function(o, a) {
                (i = {})[a] = e.graph[a], r.say({
                  "##": t.obj.hash(i),
                  get: {
                    "#": a
                  }
                }, n)
              })))
            })), r
          }
        } catch (e) {}
      }))(a, "./adapters/mesh"), a((function(t) {
        var n = a("../index");
        n.Mesh = a("./mesh"), n.on("opt", (function(t) {
          this.to.next(t);
          var r = t.opt;
          if (!t.once && !1 !== r.WebSocket) {
            var i;
            "undefined" != typeof window && (i = window), void 0 !== e && (i = e), i = i || {};
            var o = r.WebSocket || i.WebSocket || i.webkitWebSocket || i.mozWebSocket;
            if (o) {
              r.WebSocket = o;
              var a = r.mesh = r.mesh || n.Mesh(t);
              a.wire || r.wire;
              a.wire = r.wire = c, setTimeout((function() {
                t.on("out", {
                  dam: "hi"
                })
              }), 1);
              var u = 2e3,
                l = "undefined" != typeof document && document
            }
          }

          function c(e) {
            try {
              if (!e || !e.url) return n && n(e);
              var t = e.url.replace("http", "ws"),
                n = e.wire = new r.WebSocket(t);
              return n.onclose = function() {
                r.mesh.bye(e), s(e)
              }, n.onerror = function(t) {
                s(e)
              }, n.onopen = function() {
                r.mesh.hi(e)
              }, n.onmessage = function(t) {
                t && r.mesh.hear(t.data || t, e)
              }, n
            } catch (e) {}
          }

          function s(e) {
            clearTimeout(e.defer), l && e.retry <= 0 || (e.retry = (e.retry || r.retry || 60) - 1, e.defer = setTimeout((function t() {
              if (l && l.hidden) return setTimeout(t, u);
              c(e)
            }), u))
          }
        }))
      }))(a, "./adapters/websocket")
    }()
  }).call(this, n(7), n(36)(e), n(96).setImmediate)
}, function(e, t, n) {
  "use strict";
  ! function e() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
      0;
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
      } catch (e) {
        console.error(e)
      }
    }
  }(), e.exports = n(55)
}, function(e, t, n) {
  "use strict";
  var r = n(0),
    i = n.n(r);

  function o(e, t) {
    var n = Object(r.useState)((function() {
        return {
          inputs: t,
          result: e()
        }
      }))[0],
      i = Object(r.useRef)(n),
      o = Boolean(t && i.current.inputs && function(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
          if (e[n] !== t[n]) return !1;
        return !0
      }(t, i.current.inputs)) ? i.current : {
        inputs: t,
        result: e()
      };
    return Object(r.useEffect)((function() {
      i.current = o
    }), [o]), o.result
  }
  var a = o,
    u = function(e, t) {
      return o((function() {
        return e
      }), t)
    },
    l = n(44),
    c = n.n(l);

  function s(e, t) {
    e.prototype = c()(t.prototype), e.prototype.constructor = e, e.__proto__ = t
  }
  var f = n(12),
    d = n.n(f);

  function p() {
    return (p = d.a || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }
  var h = n(22),
    g = function() {
      return Math.random().toString(36).substring(7).split("").join(".")
    },
    m = {
      INIT: "@@redux/INIT" + g(),
      REPLACE: "@@redux/REPLACE" + g(),
      PROBE_UNKNOWN_ACTION: function() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + g()
      }
    };

  function v(e) {
    if ("object" != typeof e || null === e) return !1;
    for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
  }

  function b(e, t, n) {
    var r;
    if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
    if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
      if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
      return n(b)(e, t)
    }
    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
    var i = e,
      o = t,
      a = [],
      u = a,
      l = !1;

    function c() {
      u === a && (u = a.slice())
    }

    function s() {
      if (l) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
      return o
    }

    function f(e) {
      if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
      if (l) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
      var t = !0;
      return c(), u.push(e),
        function() {
          if (t) {
            if (l) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
            t = !1, c();
            var n = u.indexOf(e);
            u.splice(n, 1)
          }
        }
    }

    function d(e) {
      if (!v(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
      if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      if (l) throw new Error("Reducers may not dispatch actions.");
      try {
        l = !0, o = i(o, e)
      } finally {
        l = !1
      }
      for (var t = a = u, n = 0; n < t.length; n++) {
        (0, t[n])()
      }
      return e
    }
    return d({
      type: m.INIT
    }), (r = {
      dispatch: d,
      subscribe: f,
      getState: s,
      replaceReducer: function(e) {
        if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
        i = e, d({
          type: m.REPLACE
        })
      }
    })[h.a] = function() {
      var e, t = f;
      return (e = {
        subscribe: function(e) {
          if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

          function n() {
            e.next && e.next(s())
          }
          return n(), {
            unsubscribe: t(n)
          }
        }
      })[h.a] = function() {
        return this
      }, e
    }, r
  }

  function y(e, t) {
    return function() {
      return t(e.apply(this, arguments))
    }
  }

  function w(e, t) {
    if ("function" == typeof e) return y(e, t);
    if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    var n = {};
    for (var r in e) {
      var i = e[r];
      "function" == typeof i && (n[r] = y(i, t))
    }
    return n
  }

  function x(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function E(e, t) {
    var n = Object.keys(e);
    return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter((function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    }))), n
  }

  function k(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? E(n, !0).forEach((function(t) {
        x(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function S() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length ? function(e) {
      return e
    } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
      return function() {
        return e(t.apply(void 0, arguments))
      }
    }))
  }
  var T = n(4),
    C = n.n(T),
    _ = i.a.createContext(null);
  var I = function(e) {
      e()
    },
    O = function() {
      return I
    },
    P = null,
    D = {
      notify: function() {}
    };
  var A = function() {
    function e(e, t) {
      this.store = e, this.parentSub = t, this.unsubscribe = null, this.listeners = D, this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
    }
    var t = e.prototype;
    return t.addNestedSub = function(e) {
      return this.trySubscribe(), this.listeners.subscribe(e)
    }, t.notifyNestedSubs = function() {
      this.listeners.notify()
    }, t.handleChangeWrapper = function() {
      this.onStateChange && this.onStateChange()
    }, t.isSubscribed = function() {
      return Boolean(this.unsubscribe)
    }, t.trySubscribe = function() {
      var e, t, n;
      this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), this.listeners = (e = O(), t = [], n = [], {
        clear: function() {
          n = P, t = P
        },
        notify: function() {
          var r = t = n;
          e((function() {
            for (var e = 0; e < r.length; e++) r[e]()
          }))
        },
        get: function() {
          return n
        },
        subscribe: function(e) {
          var r = !0;
          return n === t && (n = t.slice()), n.push(e),
            function() {
              r && t !== P && (r = !1, n === t && (n = t.slice()), n.splice(n.indexOf(e), 1))
            }
        }
      }))
    }, t.tryUnsubscribe = function() {
      this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = D)
    }, e
  }();

  function N(e) {
    var t = e.store,
      n = e.context,
      o = e.children,
      a = Object(r.useMemo)((function() {
        var e = new A(t);
        return e.onStateChange = e.notifyNestedSubs, {
          store: t,
          subscription: e
        }
      }), [t]),
      u = Object(r.useMemo)((function() {
        return t.getState()
      }), [t]);
    Object(r.useEffect)((function() {
      var e = a.subscription;
      return e.trySubscribe(), u !== t.getState() && e.notifyNestedSubs(),
        function() {
          e.tryUnsubscribe(), e.onStateChange = null
        }
    }), [a, u]);
    var l = n || _;
    return i.a.createElement(l.Provider, {
      value: a
    }, o)
  }
  N.propTypes = {
    store: C.a.shape({
      subscribe: C.a.func.isRequired,
      dispatch: C.a.func.isRequired,
      getState: C.a.func.isRequired
    }),
    context: C.a.object,
    children: C.a.any
  };
  var R = N;

  function j() {
    return (j = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function B(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      o = Object.keys(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }
  var M = n(21),
    L = n.n(M),
    U = n(3),
    F = n.n(U),
    G = n(20),
    z = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? r.useLayoutEffect : r.useEffect,
    $ = [],
    W = [null, null];

  function H(e, t) {
    var n = e[1];
    return [t.payload, n + 1]
  }
  var V = function() {
    return [null, 0]
  };

  function Y(e, t) {
    void 0 === t && (t = {});
    var n = t,
      o = n.getDisplayName,
      a = void 0 === o ? function(e) {
        return "ConnectAdvanced(" + e + ")"
      } : o,
      u = n.methodName,
      l = void 0 === u ? "connectAdvanced" : u,
      c = n.renderCountProp,
      s = void 0 === c ? void 0 : c,
      f = n.shouldHandleStateChanges,
      d = void 0 === f || f,
      p = n.storeKey,
      h = void 0 === p ? "store" : p,
      g = n.withRef,
      m = void 0 !== g && g,
      v = n.forwardRef,
      b = void 0 !== v && v,
      y = n.context,
      w = void 0 === y ? _ : y,
      x = B(n, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);
    F()(void 0 === s, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"), F()(!m, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
    F()("store" === h, "storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");
    var E = w;
    return function(t) {
      var n = t.displayName || t.name || "Component",
        o = a(n),
        u = j({}, x, {
          getDisplayName: a,
          methodName: l,
          renderCountProp: s,
          shouldHandleStateChanges: d,
          storeKey: h,
          displayName: o,
          wrappedComponentName: n,
          WrappedComponent: t
        }),
        c = x.pure;
      var f = c ? r.useMemo : function(e) {
        return e()
      };

      function p(n) {
        var a = Object(r.useMemo)((function() {
            var e = n.forwardedRef,
              t = B(n, ["forwardedRef"]);
            return [n.context, e, t]
          }), [n]),
          l = a[0],
          c = a[1],
          s = a[2],
          p = Object(r.useMemo)((function() {
            return l && l.Consumer && Object(G.isContextConsumer)(i.a.createElement(l.Consumer, null)) ? l : E
          }), [l, E]),
          h = Object(r.useContext)(p),
          g = Boolean(n.store) && Boolean(n.store.getState) && Boolean(n.store.dispatch),
          m = Boolean(h) && Boolean(h.store);
        F()(g || m, 'Could not find "store" in the context of "' + o + '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ' + o + " in connect options.");
        var v = g ? n.store : h.store,
          b = Object(r.useMemo)((function() {
            return function(t) {
              return e(t.dispatch, u)
            }(v)
          }), [v]),
          y = Object(r.useMemo)((function() {
            if (!d) return W;
            var e = new A(v, g ? null : h.subscription),
              t = e.notifyNestedSubs.bind(e);
            return [e, t]
          }), [v, g, h]),
          w = y[0],
          x = y[1],
          k = Object(r.useMemo)((function() {
            return g ? h : j({}, h, {
              subscription: w
            })
          }), [g, h, w]),
          S = Object(r.useReducer)(H, $, V),
          T = S[0][0],
          C = S[1];
        if (T && T.error) throw T.error;
        var _ = Object(r.useRef)(),
          I = Object(r.useRef)(s),
          O = Object(r.useRef)(),
          P = Object(r.useRef)(!1),
          D = f((function() {
            return O.current && s === I.current ? O.current : b(v.getState(), s)
          }), [v, T, s]);
        z((function() {
          I.current = s, _.current = D, P.current = !1, O.current && (O.current = null, x())
        })), z((function() {
          if (d) {
            var e = !1,
              t = null,
              n = function() {
                if (!e) {
                  var n, r, i = v.getState();
                  try {
                    n = b(i, I.current)
                  } catch (e) {
                    r = e, t = e
                  }
                  r || (t = null), n === _.current ? P.current || x() : (_.current = n, O.current = n, P.current = !0, C({
                    type: "STORE_UPDATED",
                    payload: {
                      error: r
                    }
                  }))
                }
              };
            w.onStateChange = n, w.trySubscribe(), n();
            return function() {
              if (e = !0, w.tryUnsubscribe(), w.onStateChange = null, t) throw t
            }
          }
        }), [v, w, b]);
        var N = Object(r.useMemo)((function() {
          return i.a.createElement(t, j({}, D, {
            ref: c
          }))
        }), [c, t, D]);
        return Object(r.useMemo)((function() {
          return d ? i.a.createElement(p.Provider, {
            value: k
          }, N) : N
        }), [p, N, k])
      }
      var g = c ? i.a.memo(p) : p;
      if (g.WrappedComponent = t, g.displayName = o, b) {
        var m = i.a.forwardRef((function(e, t) {
          return i.a.createElement(g, j({}, e, {
            forwardedRef: t
          }))
        }));
        return m.displayName = o, m.WrappedComponent = t, L()(m, t)
      }
      return L()(g, t)
    }
  }
  var q = Object.prototype.hasOwnProperty;

  function K(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
  }

  function J(e, t) {
    if (K(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (var i = 0; i < n.length; i++)
      if (!q.call(t, n[i]) || !K(e[n[i]], t[n[i]])) return !1;
    return !0
  }

  function Q(e) {
    return function(t, n) {
      var r = e(t, n);

      function i() {
        return r
      }
      return i.dependsOnOwnProps = !1, i
    }
  }

  function X(e) {
    return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
  }

  function Z(e, t) {
    return function(t, n) {
      n.displayName;
      var r = function(e, t) {
        return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e)
      };
      return r.dependsOnOwnProps = !0, r.mapToProps = function(t, n) {
        r.mapToProps = e, r.dependsOnOwnProps = X(e);
        var i = r(t, n);
        return "function" == typeof i && (r.mapToProps = i, r.dependsOnOwnProps = X(i), i = r(t, n)), i
      }, r
    }
  }
  var ee = [function(e) {
    return "function" == typeof e ? Z(e) : void 0
  }, function(e) {
    return e ? void 0 : Q((function(e) {
      return {
        dispatch: e
      }
    }))
  }, function(e) {
    return e && "object" == typeof e ? Q((function(t) {
      return w(e, t)
    })) : void 0
  }];
  var te = [function(e) {
    return "function" == typeof e ? Z(e) : void 0
  }, function(e) {
    return e ? void 0 : Q((function() {
      return {}
    }))
  }];

  function ne(e, t, n) {
    return j({}, n, {}, e, {}, t)
  }
  var re = [function(e) {
    return "function" == typeof e ? function(e) {
      return function(t, n) {
        n.displayName;
        var r, i = n.pure,
          o = n.areMergedPropsEqual,
          a = !1;
        return function(t, n, u) {
          var l = e(t, n, u);
          return a ? i && o(l, r) || (r = l) : (a = !0, r = l), r
        }
      }
    }(e) : void 0
  }, function(e) {
    return e ? void 0 : function() {
      return ne
    }
  }];

  function ie(e, t, n, r) {
    return function(i, o) {
      return n(e(i, o), t(r, o), o)
    }
  }

  function oe(e, t, n, r, i) {
    var o, a, u, l, c, s = i.areStatesEqual,
      f = i.areOwnPropsEqual,
      d = i.areStatePropsEqual,
      p = !1;

    function h(i, p) {
      var h, g, m = !f(p, a),
        v = !s(i, o);
      return o = i, a = p, m && v ? (u = e(o, a), t.dependsOnOwnProps && (l = t(r, a)), c = n(u, l, a)) : m ? (e.dependsOnOwnProps && (u = e(o, a)), t.dependsOnOwnProps && (l = t(r, a)), c = n(u, l, a)) : v ? (h = e(o, a), g = !d(h, u), u = h, g && (c = n(u, l, a)), c) : c
    }
    return function(i, s) {
      return p ? h(i, s) : (u = e(o = i, a = s), l = t(r, a), c = n(u, l, a), p = !0, c)
    }
  }

  function ae(e, t) {
    var n = t.initMapStateToProps,
      r = t.initMapDispatchToProps,
      i = t.initMergeProps,
      o = B(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
      a = n(e, o),
      u = r(e, o),
      l = i(e, o);
    return (o.pure ? oe : ie)(a, u, l, e, o)
  }

  function ue(e, t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var i = t[r](e);
      if (i) return i
    }
    return function(t, r) {
      throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
    }
  }

  function le(e, t) {
    return e === t
  }
  var ce, se, fe, de, pe, he, ge, me, ve, be, ye, we, xe = (fe = (se = void 0 === ce ? {} : ce).connectHOC, de = void 0 === fe ? Y : fe, pe = se.mapStateToPropsFactories, he = void 0 === pe ? te : pe, ge = se.mapDispatchToPropsFactories, me = void 0 === ge ? ee : ge, ve = se.mergePropsFactories, be = void 0 === ve ? re : ve, ye = se.selectorFactory, we = void 0 === ye ? ae : ye, function(e, t, n, r) {
    void 0 === r && (r = {});
    var i = r,
      o = i.pure,
      a = void 0 === o || o,
      u = i.areStatesEqual,
      l = void 0 === u ? le : u,
      c = i.areOwnPropsEqual,
      s = void 0 === c ? J : c,
      f = i.areStatePropsEqual,
      d = void 0 === f ? J : f,
      p = i.areMergedPropsEqual,
      h = void 0 === p ? J : p,
      g = B(i, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
      m = ue(e, he, "mapStateToProps"),
      v = ue(t, me, "mapDispatchToProps"),
      b = ue(n, be, "mergeProps");
    return de(we, j({
      methodName: "connect",
      getDisplayName: function(e) {
        return "Connect(" + e + ")"
      },
      shouldHandleStateChanges: Boolean(e),
      initMapStateToProps: m,
      initMapDispatchToProps: v,
      initMergeProps: b,
      pure: a,
      areStatesEqual: l,
      areOwnPropsEqual: s,
      areStatePropsEqual: d,
      areMergedPropsEqual: h
    }, g))
  });

  function Ee() {
    var e = Object(r.useContext)(_);
    return F()(e, "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"), e
  }

  function ke(e) {
    void 0 === e && (e = _);
    var t = e === _ ? Ee : function() {
      return Object(r.useContext)(e)
    };
    return function() {
      return t().store
    }
  }
  var Se = ke();
  ! function(e) {
    void 0 === e && (e = _);
    var t = e === _ ? Se : ke(e)
  }();
  var Te = function(e, t) {
    return e === t
  };
  ! function(e) {
    void 0 === e && (e = _);
    var t = e === _ ? Ee : function() {
      return Object(r.useContext)(e)
    }
  }();
  var Ce, _e = n(9),
    Ie = n.n(_e);
  Ce = _e.unstable_batchedUpdates, I = Ce;
  var Oe = !0,
    Pe = "Invariant failed";
  var De = function(e, t) {
      if (!e) throw Oe ? new Error(Pe) : new Error(Pe + ": " + (t || ""))
    },
    Ae = function(e) {
      var t = e.top,
        n = e.right,
        r = e.bottom,
        i = e.left;
      return {
        top: t,
        right: n,
        bottom: r,
        left: i,
        width: n - i,
        height: r - t,
        x: i,
        y: t,
        center: {
          x: (n + i) / 2,
          y: (r + t) / 2
        }
      }
    },
    Ne = function(e, t) {
      return {
        top: e.top - t.top,
        left: e.left - t.left,
        bottom: e.bottom + t.bottom,
        right: e.right + t.right
      }
    },
    Re = function(e, t) {
      return {
        top: e.top + t.top,
        left: e.left + t.left,
        bottom: e.bottom - t.bottom,
        right: e.right - t.right
      }
    },
    je = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    Be = function(e) {
      var t = e.borderBox,
        n = e.margin,
        r = void 0 === n ? je : n,
        i = e.border,
        o = void 0 === i ? je : i,
        a = e.padding,
        u = void 0 === a ? je : a,
        l = Ae(Ne(t, r)),
        c = Ae(Re(t, o)),
        s = Ae(Re(c, u));
      return {
        marginBox: l,
        borderBox: Ae(t),
        paddingBox: c,
        contentBox: s,
        margin: r,
        border: o,
        padding: u
      }
    },
    Me = function(e) {
      var t = e.slice(0, -2);
      if ("px" !== e.slice(-2)) return 0;
      var n = Number(t);
      return isNaN(n) && De(!1), n
    },
    Le = function(e, t) {
      var n, r, i = e.borderBox,
        o = e.border,
        a = e.margin,
        u = e.padding,
        l = (r = t, {
          top: (n = i).top + r.y,
          left: n.left + r.x,
          bottom: n.bottom + r.y,
          right: n.right + r.x
        });
      return Be({
        borderBox: l,
        border: o,
        margin: a,
        padding: u
      })
    },
    Ue = function(e, t) {
      return void 0 === t && (t = {
        x: window.pageXOffset,
        y: window.pageYOffset
      }), Le(e, t)
    },
    Fe = function(e, t) {
      var n = {
          top: Me(t.marginTop),
          right: Me(t.marginRight),
          bottom: Me(t.marginBottom),
          left: Me(t.marginLeft)
        },
        r = {
          top: Me(t.paddingTop),
          right: Me(t.paddingRight),
          bottom: Me(t.paddingBottom),
          left: Me(t.paddingLeft)
        },
        i = {
          top: Me(t.borderTopWidth),
          right: Me(t.borderRightWidth),
          bottom: Me(t.borderBottomWidth),
          left: Me(t.borderLeftWidth)
        };
      return Be({
        borderBox: e,
        margin: n,
        padding: r,
        border: i
      })
    },
    Ge = function(e) {
      var t = e.getBoundingClientRect(),
        n = window.getComputedStyle(e);
      return Fe(t, n)
    };

  function ze(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++)
      if (e[n] !== t[n]) return !1;
    return !0
  }
  var $e = function(e, t) {
      var n;
      void 0 === t && (t = ze);
      var r, i = [],
        o = !1;
      return function() {
        for (var a = [], u = 0; u < arguments.length; u++) a[u] = arguments[u];
        return o && n === this && t(a, i) ? r : (r = e.apply(this, a), o = !0, n = this, i = a, r)
      }
    },
    We = n(46),
    He = n.n(We),
    Ve = n(13),
    Ye = n.n(Ve),
    qe = function(e) {
      var t = [],
        n = null,
        r = function() {
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
          t = i, n || (n = requestAnimationFrame((function() {
            n = null, e.apply(void 0, t)
          })))
        };
      return r.cancel = function() {
        n && (cancelAnimationFrame(n), n = null)
      }, r
    },
    Ke = n(23),
    Je = n.n(Ke);
  n(47);
  n.d(t, "a", (function() {
    return Io
  })), n.d(t, "b", (function() {
    return da
  })), n.d(t, "c", (function() {
    return ma
  }));
  var Qe = !0,
    Xe = /[ \t]{2,}/g,
    Ze = /^[ \t]*/gm,
    et = function(e) {
      return e.replace(Xe, " ").replace(Ze, "").trim()
    },
    tt = function(e) {
      return et("\n  %creact-beautiful-dnd\n\n  %c" + et(e) + "\n\n  %c👷‍ This is a development only message. It will be removed in production builds.\n")
    },
    nt = function(e) {
      return [tt(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"]
    },
    rt = "__react-beautiful-dnd-disable-dev-warnings";

  function it(e, t) {
    var n;
    Qe || "undefined" != typeof window && window[rt] || (n = console)[e].apply(n, nt(t))
  }
  it.bind(null, "warn"), it.bind(null, "error");

  function ot() {}

  function at(e, t, n) {
    var r = t.map((function(t) {
      var r, i, o = (r = n, i = t.options, p({}, r, {}, i));
      return e.addEventListener(t.eventName, t.fn, o),
        function() {
          e.removeEventListener(t.eventName, t.fn, o)
        }
    }));
    return function() {
      r.forEach((function(e) {
        e()
      }))
    }
  }
  var ut = !0,
    lt = "Invariant failed";

  function ct(e) {
    this.message = e
  }

  function st(e, t) {
    if (!e) throw new ct(ut ? lt : lt + ": " + (t || ""))
  }
  ct.prototype.toString = function() {
    return this.message
  };
  var ft = function(e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return (t = e.call.apply(e, [this].concat(r)) || this).callbacks = null, t.unbind = ot, t.onWindowError = function(e) {
          var n = t.getCallbacks();
          n.isDragging() && n.tryAbort(), e.error instanceof ct && e.preventDefault()
        }, t.getCallbacks = function() {
          if (!t.callbacks) throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
          return t.callbacks
        }, t.setCallbacks = function(e) {
          t.callbacks = e
        }, t
      }
      s(t, e);
      var n = t.prototype;
      return n.componentDidMount = function() {
        this.unbind = at(window, [{
          eventName: "error",
          fn: this.onWindowError
        }])
      }, n.componentWillUnmount = function() {
        this.unbind()
      }, n.componentDidCatch = function(e) {
        if (!(e instanceof ct)) throw e;
        this.setState({})
      }, n.render = function() {
        return this.props.children(this.setCallbacks)
      }, t
    }(i.a.Component),
    dt = function(e) {
      return e + 1
    },
    pt = function(e, t) {
      var n = e.droppableId === t.droppableId,
        r = dt(e.index),
        i = dt(t.index);
      return n ? "\n      You have moved the item from position " + r + "\n      to position " + i + "\n    " : "\n    You have moved the item from position " + r + "\n    in list " + e.droppableId + "\n    to list " + t.droppableId + "\n    in position " + i + "\n  "
    },
    ht = function(e, t, n) {
      return t.droppableId === n.droppableId ? "\n      The item " + e + "\n      has been combined with " + n.draggableId : "\n      The item " + e + "\n      in list " + t.droppableId + "\n      has been combined with " + n.draggableId + "\n      in list " + n.droppableId + "\n    "
    },
    gt = function(e) {
      return "\n  The item has returned to its starting position\n  of " + dt(e.index) + "\n"
    },
    mt = {
      liftInstruction: "Draggable item. Ensure your screen reader is not in browse mode and then press space bar to lift.",
      onDragStart: function(e) {
        return "\n  You have lifted an item in position " + dt(e.source.index) + ".\n  Use the arrow keys to move, space bar to drop, and escape to cancel.\n"
      },
      onDragUpdate: function(e) {
        var t = e.destination;
        if (t) return pt(e.source, t);
        var n = e.combine;
        return n ? ht(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on"
      },
      onDragEnd: function(e) {
        if ("CANCEL" === e.reason) return "\n      Movement cancelled.\n      " + gt(e.source) + "\n    ";
        var t = e.destination,
          n = e.combine;
        return t ? "\n      You have dropped the item.\n      " + pt(e.source, t) + "\n    " : n ? "\n      You have dropped the item.\n      " + ht(e.draggableId, e.source, n) + "\n    " : "\n    The item has been dropped while not over a drop area.\n    " + gt(e.source) + "\n  "
      }
    },
    vt = {
      x: 0,
      y: 0
    },
    bt = function(e, t) {
      return {
        x: e.x + t.x,
        y: e.y + t.y
      }
    },
    yt = function(e, t) {
      return {
        x: e.x - t.x,
        y: e.y - t.y
      }
    },
    wt = function(e, t) {
      return e.x === t.x && e.y === t.y
    },
    xt = function(e) {
      return {
        x: 0 !== e.x ? -e.x : 0,
        y: 0 !== e.y ? -e.y : 0
      }
    },
    Et = function(e, t, n) {
      var r;
      return void 0 === n && (n = 0), (r = {})[e] = t, r["x" === e ? "y" : "x"] = n, r
    },
    kt = function(e, t) {
      return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
    },
    St = function(e, t) {
      return Math.min.apply(Math, t.map((function(t) {
        return kt(e, t)
      })))
    },
    Tt = function(e) {
      return function(t) {
        return {
          x: e(t.x),
          y: e(t.y)
        }
      }
    },
    Ct = function(e, t) {
      return {
        top: e.top + t.y,
        left: e.left + t.x,
        bottom: e.bottom + t.y,
        right: e.right + t.x
      }
    },
    _t = function(e) {
      return [{
        x: e.left,
        y: e.top
      }, {
        x: e.right,
        y: e.top
      }, {
        x: e.left,
        y: e.bottom
      }, {
        x: e.right,
        y: e.bottom
      }]
    },
    It = function(e, t) {
      return t && t.shouldClipSubject ? function(e, t) {
        var n = Ae({
          top: Math.max(t.top, e.top),
          right: Math.min(t.right, e.right),
          bottom: Math.min(t.bottom, e.bottom),
          left: Math.max(t.left, e.left)
        });
        return n.width <= 0 || n.height <= 0 ? null : n
      }(t.pageMarginBox, e) : Ae(e)
    },
    Ot = function(e) {
      var t = e.page,
        n = e.withPlaceholder,
        r = e.axis,
        i = e.frame,
        o = function(e, t, n) {
          var r;
          return n && n.increasedBy ? p({}, e, ((r = {})[t.end] = e[t.end] + n.increasedBy[t.line], r)) : e
        }(function(e, t) {
          return t ? Ct(e, t.scroll.diff.displacement) : e
        }(t.marginBox, i), r, n);
      return {
        page: t,
        withPlaceholder: n,
        active: It(o, i)
      }
    },
    Pt = function(e, t) {
      e.frame || st(!1);
      var n = e.frame,
        r = yt(t, n.scroll.initial),
        i = xt(r),
        o = p({}, n, {
          scroll: {
            initial: n.scroll.initial,
            current: t,
            diff: {
              value: r,
              displacement: i
            },
            max: n.scroll.max
          }
        });
      return p({}, e, {
        frame: o,
        subject: Ot({
          page: e.subject.page,
          withPlaceholder: e.subject.withPlaceholder,
          axis: e.axis,
          frame: o
        })
      })
    };

  function Dt(e) {
    return He()(e)
  }

  function At(e, t) {
    if (e.findIndex) return e.findIndex(t);
    for (var n = 0; n < e.length; n++)
      if (t(e[n])) return n;
    return -1
  }

  function Nt(e, t) {
    if (e.find) return e.find(t);
    var n = At(e, t);
    return -1 !== n ? e[n] : void 0
  }

  function Rt(e) {
    return Array.prototype.slice.call(e)
  }
  var jt = $e((function(e) {
      return e.reduce((function(e, t) {
        return e[t.descriptor.id] = t, e
      }), {})
    })),
    Bt = $e((function(e) {
      return e.reduce((function(e, t) {
        return e[t.descriptor.id] = t, e
      }), {})
    })),
    Mt = $e((function(e) {
      return Dt(e)
    })),
    Lt = $e((function(e) {
      return Dt(e)
    })),
    Ut = $e((function(e, t) {
      return Lt(t).filter((function(t) {
        return e === t.descriptor.droppableId
      })).sort((function(e, t) {
        return e.descriptor.index - t.descriptor.index
      }))
    })),
    Ft = {
      vertical: "down",
      horizontal: "right"
    },
    Gt = {
      vertical: "up",
      horizontal: "left"
    };

  function zt(e) {
    return e.at && "REORDER" === e.at.type ? e.at.destination : null
  }

  function $t(e) {
    return e.at && "COMBINE" === e.at.type ? e.at.combine : null
  }
  var Wt = $e((function(e, t) {
      return t.filter((function(t) {
        return t.descriptor.id !== e.descriptor.id
      }))
    })),
    Ht = function(e, t) {
      return e.descriptor.droppableId === t.descriptor.id
    },
    Vt = {
      point: vt,
      value: 0
    },
    Yt = {
      invisible: {},
      visible: {},
      all: []
    },
    qt = {
      displaced: Yt,
      displacedBy: Vt,
      at: null
    },
    Kt = function(e, t) {
      return function(n) {
        return e <= n && n <= t
      }
    },
    Jt = function(e) {
      var t = Kt(e.top, e.bottom),
        n = Kt(e.left, e.right);
      return function(r) {
        if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right)) return !0;
        var i = t(r.top) || t(r.bottom),
          o = n(r.left) || n(r.right);
        if (i && o) return !0;
        var a = r.top < e.top && r.bottom > e.bottom,
          u = r.left < e.left && r.right > e.right;
        return !(!a || !u) || (a && o || u && i)
      }
    },
    Qt = function(e) {
      var t = Kt(e.top, e.bottom),
        n = Kt(e.left, e.right);
      return function(e) {
        return t(e.top) && t(e.bottom) && n(e.left) && n(e.right)
      }
    },
    Xt = {
      direction: "vertical",
      line: "y",
      crossAxisLine: "x",
      start: "top",
      end: "bottom",
      size: "height",
      crossAxisStart: "left",
      crossAxisEnd: "right",
      crossAxisSize: "width"
    },
    Zt = {
      direction: "horizontal",
      line: "x",
      crossAxisLine: "y",
      start: "left",
      end: "right",
      size: "width",
      crossAxisStart: "top",
      crossAxisEnd: "bottom",
      crossAxisSize: "height"
    },
    en = function(e) {
      var t = e.target,
        n = e.destination,
        r = e.viewport,
        i = e.withDroppableDisplacement,
        o = e.isVisibleThroughFrameFn,
        a = i ? function(e, t) {
          var n = t.frame ? t.frame.scroll.diff.displacement : vt;
          return Ct(e, n)
        }(t, n) : t;
      return function(e, t, n) {
        return !!t.subject.active && n(t.subject.active)(e)
      }(a, n, o) && function(e, t, n) {
        return n(t)(e)
      }(a, r, o)
    },
    tn = function(e) {
      return en(p({}, e, {
        isVisibleThroughFrameFn: Jt
      }))
    },
    nn = function(e) {
      return en(p({}, e, {
        isVisibleThroughFrameFn: Qt
      }))
    },
    rn = function(e, t, n) {
      if ("boolean" == typeof n) return n;
      if (!t) return !0;
      var r = t.invisible,
        i = t.visible;
      if (r[e]) return !1;
      var o = i[e];
      return !o || o.shouldAnimate
    };

  function on(e) {
    var t = e.afterDragging,
      n = e.destination,
      r = e.displacedBy,
      i = e.viewport,
      o = e.forceShouldAnimate,
      a = e.last;
    return t.reduce((function(e, t) {
      var u = function(e, t) {
          var n = e.page.marginBox,
            r = {
              top: t.point.y,
              right: 0,
              bottom: 0,
              left: t.point.x
            };
          return Ae(Ne(n, r))
        }(t, r),
        l = t.descriptor.id;
      if (e.all.push(l), !tn({
          target: u,
          destination: n,
          viewport: i,
          withDroppableDisplacement: !0
        })) return e.invisible[t.descriptor.id] = !0, e;
      var c = {
        draggableId: l,
        shouldAnimate: rn(l, a, o)
      };
      return e.visible[l] = c, e
    }), {
      all: [],
      visible: {},
      invisible: {}
    })
  }

  function an(e) {
    var t = e.insideDestination,
      n = e.inHomeList,
      r = e.displacedBy,
      i = e.destination,
      o = function(e, t) {
        if (!e.length) return 0;
        var n = e[e.length - 1].descriptor.index;
        return t.inHomeList ? n : n + 1
      }(t, {
        inHomeList: n
      });
    return {
      displaced: Yt,
      displacedBy: r,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: o
        }
      }
    }
  }

  function un(e) {
    var t = e.draggable,
      n = e.insideDestination,
      r = e.destination,
      i = e.viewport,
      o = e.displacedBy,
      a = e.last,
      u = e.index,
      l = e.forceShouldAnimate,
      c = Ht(t, r);
    if (null == u) return an({
      insideDestination: n,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
    var s = Nt(n, (function(e) {
      return e.descriptor.index === u
    }));
    if (!s) return an({
      insideDestination: n,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
    var f = Wt(t, n),
      d = n.indexOf(s);
    return {
      displaced: on({
        afterDragging: f.slice(d),
        destination: r,
        displacedBy: o,
        last: a,
        viewport: i.frame,
        forceShouldAnimate: l
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: {
          droppableId: r.descriptor.id,
          index: u
        }
      }
    }
  }

  function ln(e, t) {
    return Boolean(t.effected[e])
  }
  var cn = function(e) {
      var t = e.isMovingForward,
        n = e.isInHomeList,
        r = e.draggable,
        i = e.draggables,
        o = e.destination,
        a = e.insideDestination,
        u = e.previousImpact,
        l = e.viewport,
        c = e.afterCritical,
        s = u.at;
      if (s || st(!1), "REORDER" === s.type) {
        var f = function(e) {
          var t = e.isMovingForward,
            n = e.isInHomeList,
            r = e.insideDestination,
            i = e.location;
          if (!r.length) return null;
          var o = i.index,
            a = t ? o + 1 : o - 1,
            u = r[0].descriptor.index,
            l = r[r.length - 1].descriptor.index;
          return a < u ? null : a > (n ? l : l + 1) ? null : a
        }({
          isMovingForward: t,
          isInHomeList: n,
          location: s.destination,
          insideDestination: a
        });
        return null == f ? null : un({
          draggable: r,
          insideDestination: a,
          destination: o,
          viewport: l,
          last: u.displaced,
          displacedBy: u.displacedBy,
          index: f
        })
      }
      var d = function(e) {
        var t = e.isMovingForward,
          n = e.destination,
          r = e.draggables,
          i = e.combine,
          o = e.afterCritical;
        if (!n.isCombineEnabled) return null;
        var a = i.draggableId,
          u = r[a].descriptor.index;
        return ln(a, o) ? t ? u : u - 1 : t ? u + 1 : u
      }({
        isMovingForward: t,
        destination: o,
        displaced: u.displaced,
        draggables: i,
        combine: s.combine,
        afterCritical: c
      });
      return null == d ? null : un({
        draggable: r,
        insideDestination: a,
        destination: o,
        viewport: l,
        last: u.displaced,
        displacedBy: u.displacedBy,
        index: d
      })
    },
    sn = function(e) {
      var t = e.displaced,
        n = e.afterCritical,
        r = e.combineWith,
        i = e.displacedBy,
        o = Boolean(t.visible[r] || t.invisible[r]);
      return ln(r, n) ? o ? vt : xt(i.point) : o ? i.point : vt
    },
    fn = function(e, t) {
      return t.margin[e.start] + t.borderBox[e.size] / 2
    },
    dn = function(e, t, n) {
      return t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2
    },
    pn = function(e) {
      var t = e.axis,
        n = e.moveRelativeTo,
        r = e.isMoving;
      return Et(t.line, n.marginBox[t.end] + fn(t, r), dn(t, n.marginBox, r))
    },
    hn = function(e) {
      var t = e.axis,
        n = e.moveRelativeTo,
        r = e.isMoving;
      return Et(t.line, n.marginBox[t.start] - function(e, t) {
        return t.margin[e.end] + t.borderBox[e.size] / 2
      }(t, r), dn(t, n.marginBox, r))
    },
    gn = function(e) {
      var t = e.impact,
        n = e.draggable,
        r = e.draggables,
        i = e.droppable,
        o = e.afterCritical,
        a = Ut(i.descriptor.id, r),
        u = n.page,
        l = i.axis;
      if (!a.length) return function(e) {
        var t = e.axis,
          n = e.moveInto,
          r = e.isMoving;
        return Et(t.line, n.contentBox[t.start] + fn(t, r), dn(t, n.contentBox, r))
      }({
        axis: l,
        moveInto: i.page,
        isMoving: u
      });
      var c = t.displaced,
        s = t.displacedBy,
        f = c.all[0];
      if (f) {
        var d = r[f];
        if (ln(f, o)) return hn({
          axis: l,
          moveRelativeTo: d.page,
          isMoving: u
        });
        var p = Le(d.page, s.point);
        return hn({
          axis: l,
          moveRelativeTo: p,
          isMoving: u
        })
      }
      var h = a[a.length - 1];
      if (h.descriptor.id === n.descriptor.id) return u.borderBox.center;
      if (ln(h.descriptor.id, o)) {
        var g = Le(h.page, xt(o.displacedBy.point));
        return pn({
          axis: l,
          moveRelativeTo: g,
          isMoving: u
        })
      }
      return pn({
        axis: l,
        moveRelativeTo: h.page,
        isMoving: u
      })
    },
    mn = function(e, t) {
      var n = e.frame;
      return n ? bt(t, n.scroll.diff.displacement) : t
    },
    vn = function(e) {
      var t = e.impact,
        n = e.draggable,
        r = e.droppable,
        i = e.draggables,
        o = e.afterCritical,
        a = n.page.borderBox.center,
        u = t.at;
      return r && u ? "REORDER" === u.type ? gn({
        impact: t,
        draggable: n,
        draggables: i,
        droppable: r,
        afterCritical: o
      }) : function(e) {
        var t = e.afterCritical,
          n = e.impact,
          r = e.draggables,
          i = $t(n);
        i || st(!1);
        var o = i.draggableId,
          a = r[o].page.borderBox.center,
          u = sn({
            displaced: n.displaced,
            afterCritical: t,
            combineWith: o,
            displacedBy: n.displacedBy
          });
        return bt(a, u)
      }({
        impact: t,
        draggables: i,
        afterCritical: o
      }) : a
    },
    bn = function(e) {
      var t = vn(e),
        n = e.droppable;
      return n ? mn(n, t) : t
    },
    yn = function(e, t) {
      var n = yt(t, e.scroll.initial),
        r = xt(n);
      return {
        frame: Ae({
          top: t.y,
          bottom: t.y + e.frame.height,
          left: t.x,
          right: t.x + e.frame.width
        }),
        scroll: {
          initial: e.scroll.initial,
          max: e.scroll.max,
          current: t,
          diff: {
            value: n,
            displacement: r
          }
        }
      }
    };

  function wn(e, t) {
    return e.map((function(e) {
      return t[e]
    }))
  }
  var xn = function(e) {
      var t = e.pageBorderBoxCenter,
        n = e.draggable,
        r = function(e, t) {
          return bt(e.scroll.diff.displacement, t)
        }(e.viewport, t),
        i = yt(r, n.page.borderBox.center);
      return bt(n.client.borderBox.center, i)
    },
    En = function(e) {
      var t = e.draggable,
        n = e.destination,
        r = e.newPageBorderBoxCenter,
        i = e.viewport,
        o = e.withDroppableDisplacement,
        a = e.onlyOnMainAxis,
        u = void 0 !== a && a,
        l = yt(r, t.page.borderBox.center),
        c = {
          target: Ct(t.page.borderBox, l),
          destination: n,
          withDroppableDisplacement: o,
          viewport: i
        };
      return u ? function(e) {
        return en(p({}, e, {
          isVisibleThroughFrameFn: (t = e.destination.axis, function(e) {
            var n = Kt(e.top, e.bottom),
              r = Kt(e.left, e.right);
            return function(e) {
              return t === Xt ? n(e.top) && n(e.bottom) : r(e.left) && r(e.right)
            }
          })
        }));
        var t
      }(c) : nn(c)
    },
    kn = function(e) {
      var t = e.isMovingForward,
        n = e.draggable,
        r = e.destination,
        i = e.draggables,
        o = e.previousImpact,
        a = e.viewport,
        u = e.previousPageBorderBoxCenter,
        l = e.previousClientSelection,
        c = e.afterCritical;
      if (!r.isEnabled) return null;
      var s = Ut(r.descriptor.id, i),
        f = Ht(n, r),
        d = function(e) {
          var t = e.isMovingForward,
            n = e.draggable,
            r = e.destination,
            i = e.insideDestination,
            o = e.previousImpact;
          if (!r.isCombineEnabled) return null;
          if (!zt(o)) return null;

          function a(e) {
            var n = {
              type: "COMBINE",
              whenEntered: t ? Ft : Gt,
              combine: {
                draggableId: e,
                droppableId: r.descriptor.id
              }
            };
            return p({}, o, {
              at: n
            })
          }
          var u = o.displaced.all,
            l = u.length ? u[0] : null;
          if (t) return l ? a(l) : null;
          var c = Wt(n, i);
          if (!l) return c.length ? a(c[c.length - 1].descriptor.id) : null;
          var s = At(c, (function(e) {
            return e.descriptor.id === l
          })); - 1 === s && st(!1);
          var f = s - 1;
          return f < 0 ? null : a(c[f].descriptor.id)
        }({
          isMovingForward: t,
          draggable: n,
          destination: r,
          insideDestination: s,
          previousImpact: o
        }) || cn({
          isMovingForward: t,
          isInHomeList: f,
          draggable: n,
          draggables: i,
          destination: r,
          insideDestination: s,
          previousImpact: o,
          viewport: a,
          afterCritical: c
        });
      if (!d) return null;
      var h = bn({
        impact: d,
        draggable: n,
        droppable: r,
        draggables: i,
        afterCritical: c
      });
      if (En({
          draggable: n,
          destination: r,
          newPageBorderBoxCenter: h,
          viewport: a.frame,
          withDroppableDisplacement: !1,
          onlyOnMainAxis: !0
        })) return {
        clientSelection: xn({
          pageBorderBoxCenter: h,
          draggable: n,
          viewport: a
        }),
        impact: d,
        scrollJumpRequest: null
      };
      var g = yt(h, u);
      return {
        clientSelection: l,
        impact: function(e) {
          var t = e.impact,
            n = e.viewport,
            r = e.destination,
            i = e.draggables,
            o = e.maxScrollChange,
            a = yn(n, bt(n.scroll.current, o)),
            u = r.frame ? Pt(r, bt(r.frame.scroll.current, o)) : r,
            l = t.displaced,
            c = on({
              afterDragging: wn(l.all, i),
              destination: r,
              displacedBy: t.displacedBy,
              viewport: a.frame,
              last: l,
              forceShouldAnimate: !1
            }),
            s = on({
              afterDragging: wn(l.all, i),
              destination: u,
              displacedBy: t.displacedBy,
              viewport: n.frame,
              last: l,
              forceShouldAnimate: !1
            }),
            f = {},
            d = {},
            h = [l, c, s];
          return l.all.forEach((function(e) {
            var t = function(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n].visible[e];
                if (r) return r
              }
              return null
            }(e, h);
            t ? d[e] = t : f[e] = !0
          })), p({}, t, {
            displaced: {
              all: l.all,
              invisible: f,
              visible: d
            }
          })
        }({
          impact: d,
          viewport: a,
          destination: r,
          draggables: i,
          maxScrollChange: g
        }),
        scrollJumpRequest: g
      }
    },
    Sn = function(e) {
      var t = e.subject.active;
      return t || st(!1), t
    },
    Tn = function(e, t) {
      var n = e.page.borderBox.center;
      return ln(e.descriptor.id, t) ? yt(n, t.displacedBy.point) : n
    },
    Cn = function(e, t) {
      var n = e.page.borderBox;
      return ln(e.descriptor.id, t) ? Ct(n, xt(t.displacedBy.point)) : n
    },
    _n = $e((function(e, t) {
      var n = t[e.line];
      return {
        value: n,
        point: Et(e.line, n)
      }
    })),
    In = function(e, t) {
      return p({}, e, {
        scroll: p({}, e.scroll, {
          max: t
        })
      })
    },
    On = function(e, t, n) {
      var r = e.frame;
      Ht(t, e) && st(!1), e.subject.withPlaceholder && st(!1);
      var i = _n(e.axis, t.displaceBy).point,
        o = function(e, t, n) {
          var r = e.axis;
          if ("virtual" === e.descriptor.mode) return Et(r.line, t[r.line]);
          var i = e.subject.page.contentBox[r.size],
            o = Ut(e.descriptor.id, n).reduce((function(e, t) {
              return e + t.client.marginBox[r.size]
            }), 0) + t[r.line] - i;
          return o <= 0 ? null : Et(r.line, o)
        }(e, i, n),
        a = {
          placeholderSize: i,
          increasedBy: o,
          oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
        };
      if (!r) return p({}, e, {
        subject: Ot({
          page: e.subject.page,
          withPlaceholder: a,
          axis: e.axis,
          frame: e.frame
        })
      });
      var u = o ? bt(r.scroll.max, o) : r.scroll.max,
        l = In(r, u);
      return p({}, e, {
        subject: Ot({
          page: e.subject.page,
          withPlaceholder: a,
          axis: e.axis,
          frame: l
        }),
        frame: l
      })
    },
    Pn = function(e) {
      var t = e.isMovingForward,
        n = e.previousPageBorderBoxCenter,
        r = e.draggable,
        i = e.isOver,
        o = e.draggables,
        a = e.droppables,
        u = e.viewport,
        l = e.afterCritical,
        c = function(e) {
          var t = e.isMovingForward,
            n = e.pageBorderBoxCenter,
            r = e.source,
            i = e.droppables,
            o = e.viewport,
            a = r.subject.active;
          if (!a) return null;
          var u = r.axis,
            l = Kt(a[u.start], a[u.end]),
            c = Mt(i).filter((function(e) {
              return e !== r
            })).filter((function(e) {
              return e.isEnabled
            })).filter((function(e) {
              return Boolean(e.subject.active)
            })).filter((function(e) {
              return Jt(o.frame)(Sn(e))
            })).filter((function(e) {
              var n = Sn(e);
              return t ? a[u.crossAxisEnd] < n[u.crossAxisEnd] : n[u.crossAxisStart] < a[u.crossAxisStart]
            })).filter((function(e) {
              var t = Sn(e),
                n = Kt(t[u.start], t[u.end]);
              return l(t[u.start]) || l(t[u.end]) || n(a[u.start]) || n(a[u.end])
            })).sort((function(e, n) {
              var r = Sn(e)[u.crossAxisStart],
                i = Sn(n)[u.crossAxisStart];
              return t ? r - i : i - r
            })).filter((function(e, t, n) {
              return Sn(e)[u.crossAxisStart] === Sn(n[0])[u.crossAxisStart]
            }));
          if (!c.length) return null;
          if (1 === c.length) return c[0];
          var s = c.filter((function(e) {
            return Kt(Sn(e)[u.start], Sn(e)[u.end])(n[u.line])
          }));
          return 1 === s.length ? s[0] : s.length > 1 ? s.sort((function(e, t) {
            return Sn(e)[u.start] - Sn(t)[u.start]
          }))[0] : c.sort((function(e, t) {
            var r = St(n, _t(Sn(e))),
              i = St(n, _t(Sn(t)));
            return r !== i ? r - i : Sn(e)[u.start] - Sn(t)[u.start]
          }))[0]
        }({
          isMovingForward: t,
          pageBorderBoxCenter: n,
          source: i,
          droppables: a,
          viewport: u
        });
      if (!c) return null;
      var s = Ut(c.descriptor.id, o),
        f = function(e) {
          var t = e.previousPageBorderBoxCenter,
            n = e.moveRelativeTo,
            r = e.insideDestination,
            i = e.draggable,
            o = e.draggables,
            a = e.destination,
            u = e.viewport,
            l = e.afterCritical;
          if (!n) {
            if (r.length) return null;
            var c = {
                displaced: Yt,
                displacedBy: Vt,
                at: {
                  type: "REORDER",
                  destination: {
                    droppableId: a.descriptor.id,
                    index: 0
                  }
                }
              },
              s = bn({
                impact: c,
                draggable: i,
                droppable: a,
                draggables: o,
                afterCritical: l
              }),
              f = Ht(i, a) ? a : On(a, i, o);
            return En({
              draggable: i,
              destination: f,
              newPageBorderBoxCenter: s,
              viewport: u.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0
            }) ? c : null
          }
          var d, p = Boolean(t[a.axis.line] <= n.page.borderBox.center[a.axis.line]),
            h = (d = n.descriptor.index, n.descriptor.id === i.descriptor.id ? d : p ? d : d + 1),
            g = _n(a.axis, i.displaceBy);
          return un({
            draggable: i,
            insideDestination: r,
            destination: a,
            viewport: u,
            displacedBy: g,
            last: Yt,
            index: h
          })
        }({
          previousPageBorderBoxCenter: n,
          destination: c,
          draggable: r,
          draggables: o,
          moveRelativeTo: function(e) {
            var t = e.pageBorderBoxCenter,
              n = e.viewport,
              r = e.destination,
              i = e.insideDestination,
              o = e.afterCritical;
            return i.filter((function(e) {
              return nn({
                target: Cn(e, o),
                destination: r,
                viewport: n.frame,
                withDroppableDisplacement: !0
              })
            })).sort((function(e, n) {
              var i = kt(t, mn(r, Tn(e, o))),
                a = kt(t, mn(r, Tn(n, o)));
              return i < a ? -1 : a < i ? 1 : e.descriptor.index - n.descriptor.index
            }))[0] || null
          }({
            pageBorderBoxCenter: n,
            viewport: u,
            destination: c,
            insideDestination: s,
            afterCritical: l
          }),
          insideDestination: s,
          viewport: u,
          afterCritical: l
        });
      if (!f) return null;
      var d = bn({
        impact: f,
        draggable: r,
        droppable: c,
        draggables: o,
        afterCritical: l
      });
      return {
        clientSelection: xn({
          pageBorderBoxCenter: d,
          draggable: r,
          viewport: u
        }),
        impact: f,
        scrollJumpRequest: null
      }
    },
    Dn = function(e) {
      var t = e.at;
      return t ? "REORDER" === t.type ? t.destination.droppableId : t.combine.droppableId : null
    },
    An = function(e) {
      var t = e.state,
        n = e.type,
        r = function(e, t) {
          var n = Dn(e);
          return n ? t[n] : null
        }(t.impact, t.dimensions.droppables),
        i = Boolean(r),
        o = t.dimensions.droppables[t.critical.droppable.id],
        a = r || o,
        u = a.axis.direction,
        l = "vertical" === u && ("MOVE_UP" === n || "MOVE_DOWN" === n) || "horizontal" === u && ("MOVE_LEFT" === n || "MOVE_RIGHT" === n);
      if (l && !i) return null;
      var c = "MOVE_DOWN" === n || "MOVE_RIGHT" === n,
        s = t.dimensions.draggables[t.critical.draggable.id],
        f = t.current.page.borderBoxCenter,
        d = t.dimensions,
        p = d.draggables,
        h = d.droppables;
      return l ? kn({
        isMovingForward: c,
        previousPageBorderBoxCenter: f,
        draggable: s,
        destination: a,
        draggables: p,
        viewport: t.viewport,
        previousClientSelection: t.current.client.selection,
        previousImpact: t.impact,
        afterCritical: t.afterCritical
      }) : Pn({
        isMovingForward: c,
        previousPageBorderBoxCenter: f,
        draggable: s,
        isOver: a,
        draggables: p,
        droppables: h,
        viewport: t.viewport,
        afterCritical: t.afterCritical
      })
    };

  function Nn(e) {
    return "DRAGGING" === e.phase || "COLLECTING" === e.phase
  }
  var Rn = function(e) {
      var t = Kt(e.top, e.bottom),
        n = Kt(e.left, e.right);
      return function(e) {
        return t(e.y) && t(e.y) && n(e.x) && n(e.x)
      }
    },
    jn = function(e, t) {
      return e === Xt ? "down" === t.vertical : "right" === t.horizontal
    };
  var Bn = function(e) {
      var t = e.draggable,
        n = e.pageBorderBoxCenterWithDroppableScrollChange,
        r = e.previousImpact,
        i = e.destination,
        o = e.insideDestination,
        a = e.userDirection,
        u = e.afterCritical;
      if (!i.isCombineEnabled) return null;
      var l, c = i.axis,
        s = r.displaced,
        f = _n(i.axis, t.displaceBy),
        d = (l = r).at && "COMBINE" === l.at.type ? l.at : null,
        p = Nt(Wt(t, o), (function(e) {
          var t = e.descriptor.id,
            r = sn({
              displaced: s,
              afterCritical: u,
              combineWith: t,
              displacedBy: f
            });
          return function(e) {
            var t = e.id,
              n = e.currentCenter,
              r = e.axis,
              i = e.borderBox,
              o = e.displaceBy,
              a = e.currentUserDirection,
              u = e.lastCombineImpact,
              l = i[r.start] + o[r.line],
              c = i[r.end] + o[r.line],
              s = .666 * i[r.size],
              f = function(e, t, n) {
                return n ? e !== n.combine.draggableId ? t : n.whenEntered : t
              }(t, a, u),
              d = jn(r, f),
              p = n[r.line];
            return d ? Kt(l, l + s)(p) : Kt(c - s, c)(p)
          }({
            id: t,
            currentCenter: n,
            axis: c,
            borderBox: e.page.borderBox,
            displaceBy: r,
            currentUserDirection: a,
            lastCombineImpact: d
          })
        }));
      return p ? function(e) {
        var t = e.combineWithId,
          n = e.destinationId,
          r = e.userDirection,
          i = e.previousImpact,
          o = function(e, t, n) {
            return n ? e !== n.combine.draggableId ? t : n.whenEntered : t
          }(t, r, function(e) {
            return e.at && "COMBINE" === e.at.type ? e.at : null
          }(i));
        return {
          displacedBy: i.displacedBy,
          displaced: i.displaced,
          at: {
            type: "COMBINE",
            whenEntered: o,
            combine: {
              draggableId: t,
              droppableId: n
            }
          }
        }
      }({
        combineWithId: p.descriptor.id,
        destinationId: i.descriptor.id,
        previousImpact: r,
        userDirection: a
      }) : null
    },
    Mn = function(e) {
      var t = e.pageBorderBoxCenter,
        n = e.draggable,
        r = e.draggables,
        i = e.droppables,
        o = e.previousImpact,
        a = e.viewport,
        u = e.userDirection,
        l = e.afterCritical,
        c = function(e) {
          var t = e.target,
            n = e.droppables,
            r = Nt(Mt(n), (function(e) {
              if (!e.isEnabled) return !1;
              var n = e.subject.active;
              return !!n && Rn(n)(t)
            }));
          return r ? r.descriptor.id : null
        }({
          target: t,
          droppables: i
        });
      if (!c) return qt;
      var s, f, d = i[c],
        p = Ut(d.descriptor.id, r),
        h = (s = t, (f = d.frame) ? bt(s, f.scroll.diff.value) : s);
      return Bn({
        pageBorderBoxCenterWithDroppableScrollChange: h,
        draggable: n,
        previousImpact: o,
        destination: d,
        insideDestination: p,
        userDirection: u,
        afterCritical: l
      }) || function(e) {
        var t = e.pageBorderBoxCenterWithDroppableScrollChange,
          n = e.draggable,
          r = e.destination,
          i = e.insideDestination,
          o = e.last,
          a = e.viewport,
          u = e.userDirection,
          l = e.afterCritical,
          c = r.axis,
          s = jn(r.axis, u),
          f = _n(r.axis, n.displaceBy),
          d = t[c.line],
          p = f.value;
        return un({
          draggable: n,
          insideDestination: i,
          destination: r,
          viewport: a,
          last: o,
          displacedBy: f,
          index: function(e) {
            var t = e.draggable,
              n = e.closest,
              r = e.inHomeList;
            return n ? r && n.descriptor.index > t.descriptor.index ? n.descriptor.index - 1 : n.descriptor.index : null
          }({
            draggable: n,
            closest: Nt(Wt(n, i), (function(e) {
              var t = e.descriptor.id,
                n = e.page.borderBox,
                r = n[c.start],
                i = n[c.end],
                o = ln(t, l);
              return s ? o ? d < r : d < r + p : o ? d <= i - p : d <= i
            })),
            inHomeList: Ht(n, r)
          })
        })
      }({
        pageBorderBoxCenterWithDroppableScrollChange: h,
        draggable: n,
        destination: d,
        insideDestination: p,
        last: o.displaced,
        viewport: a,
        userDirection: u,
        afterCritical: l
      })
    },
    Ln = function(e, t) {
      return 0 === t ? e : t > 0 ? "down" : "up"
    },
    Un = function(e, t) {
      return 0 === t ? e : t > 0 ? "right" : "left"
    },
    Fn = function(e, t) {
      var n;
      return p({}, e, ((n = {})[t.descriptor.id] = t, n))
    },
    Gn = function(e) {
      var t = e.previousImpact,
        n = e.impact,
        r = e.droppables,
        i = Dn(t),
        o = Dn(n);
      if (!i) return r;
      if (i === o) return r;
      var a = r[i];
      if (!a.subject.withPlaceholder) return r;
      var u = function(e) {
        var t = e.subject.withPlaceholder;
        t || st(!1);
        var n = e.frame;
        if (!n) return p({}, e, {
          subject: Ot({
            page: e.subject.page,
            axis: e.axis,
            frame: null,
            withPlaceholder: null
          })
        });
        var r = t.oldFrameMaxScroll;
        r || st(!1);
        var i = In(n, r);
        return p({}, e, {
          subject: Ot({
            page: e.subject.page,
            axis: e.axis,
            frame: i,
            withPlaceholder: null
          }),
          frame: i
        })
      }(a);
      return Fn(r, u)
    },
    zn = function(e) {
      var t, n, r, i, o = e.state,
        a = e.clientSelection,
        u = e.dimensions,
        l = e.viewport,
        c = e.impact,
        s = e.scrollJumpRequest,
        f = l || o.viewport,
        d = f.scroll.current,
        h = u || o.dimensions,
        g = a || o.current.client.selection,
        m = yt(g, o.initial.client.selection),
        v = {
          offset: m,
          selection: g,
          borderBoxCenter: bt(o.initial.client.borderBoxCenter, m)
        },
        b = {
          selection: bt(v.selection, d),
          borderBoxCenter: bt(v.borderBoxCenter, d)
        },
        y = {
          client: v,
          page: b
        },
        w = (t = o.userDirection, n = o.current.page.borderBoxCenter, r = y.page.borderBoxCenter, i = yt(r, n), {
          horizontal: Un(t.horizontal, i.x),
          vertical: Ln(t.vertical, i.y)
        });
      if ("COLLECTING" === o.phase) return p({
        phase: "COLLECTING"
      }, o, {
        dimensions: h,
        viewport: f,
        current: y,
        userDirection: w
      });
      var x = h.draggables[o.critical.draggable.id],
        E = c || Mn({
          pageBorderBoxCenter: b.borderBoxCenter,
          draggable: x,
          draggables: h.draggables,
          droppables: h.droppables,
          previousImpact: o.impact,
          viewport: f,
          userDirection: w,
          afterCritical: o.afterCritical
        }),
        k = function(e) {
          var t = e.draggable,
            n = e.draggables,
            r = e.droppables,
            i = e.previousImpact,
            o = e.impact,
            a = Gn({
              previousImpact: i,
              impact: o,
              droppables: r
            }),
            u = Dn(o);
          if (!u) return a;
          var l = r[u];
          if (Ht(t, l)) return a;
          if (l.subject.withPlaceholder) return a;
          var c = On(l, t, n);
          return Fn(a, c)
        }({
          draggable: x,
          impact: E,
          previousImpact: o.impact,
          draggables: h.draggables,
          droppables: h.droppables
        });
      return p({}, o, {
        current: y,
        userDirection: w,
        dimensions: {
          draggables: h.draggables,
          droppables: k
        },
        impact: E,
        viewport: f,
        scrollJumpRequest: s || null,
        forceShouldAnimate: !s && null
      })
    };
  var $n = function(e) {
      var t = e.impact,
        n = e.viewport,
        r = e.draggables,
        i = e.destination,
        o = e.forceShouldAnimate,
        a = t.displaced;
      return p({}, t, {
        displaced: on({
          afterDragging: function(e, t) {
            return e.map((function(e) {
              return t[e]
            }))
          }(a.all, r),
          destination: i,
          displacedBy: t.displacedBy,
          viewport: n.frame,
          forceShouldAnimate: o,
          last: a
        })
      })
    },
    Wn = function(e) {
      var t = e.impact,
        n = e.draggable,
        r = e.droppable,
        i = e.draggables,
        o = e.viewport,
        a = e.afterCritical,
        u = bn({
          impact: t,
          draggable: n,
          draggables: i,
          droppable: r,
          afterCritical: a
        });
      return xn({
        pageBorderBoxCenter: u,
        draggable: n,
        viewport: o
      })
    },
    Hn = function(e) {
      var t = e.state,
        n = e.dimensions,
        r = e.viewport;
      "SNAP" !== t.movementMode && st(!1);
      var i = t.impact,
        o = r || t.viewport,
        a = n || t.dimensions,
        u = a.draggables,
        l = a.droppables,
        c = u[t.critical.draggable.id],
        s = Dn(i);
      s || st(!1);
      var f = l[s],
        d = $n({
          impact: i,
          viewport: o,
          destination: f,
          draggables: u
        }),
        p = Wn({
          impact: d,
          draggable: c,
          droppable: f,
          draggables: u,
          viewport: o,
          afterCritical: t.afterCritical
        });
      return zn({
        impact: d,
        clientSelection: p,
        state: t,
        dimensions: a,
        viewport: o
      })
    },
    Vn = function(e) {
      var t = e.draggable,
        n = e.home,
        r = e.draggables,
        i = e.viewport,
        o = _n(n.axis, t.displaceBy),
        a = Ut(n.descriptor.id, r),
        u = a.indexOf(t); - 1 === u && st(!1);
      var l, c = a.slice(u + 1),
        s = c.reduce((function(e, t) {
          return e[t.descriptor.id] = !0, e
        }), {}),
        f = {
          inVirtualList: "virtual" === n.descriptor.mode,
          displacedBy: o,
          effected: s
        };
      return {
        impact: {
          displaced: on({
            afterDragging: c,
            destination: n,
            displacedBy: o,
            last: null,
            viewport: i.frame,
            forceShouldAnimate: !1
          }),
          displacedBy: o,
          at: {
            type: "REORDER",
            destination: (l = t.descriptor, {
              index: l.index,
              droppableId: l.droppableId
            })
          }
        },
        afterCritical: f
      }
    },
    Yn = function(e) {},
    qn = function(e) {},
    Kn = function(e) {
      var t = e.additions,
        n = e.updatedDroppables,
        r = e.viewport,
        i = r.scroll.diff.value;
      return t.map((function(e) {
        var t = e.descriptor.droppableId,
          o = function(e) {
            var t = e.frame;
            return t || st(!1), t
          }(n[t]).scroll.diff.value;
        return function(e) {
          var t = e.draggable,
            n = e.offset,
            r = e.initialWindowScroll,
            i = Le(t.client, n),
            o = Ue(i, r);
          return p({}, t, {
            placeholder: p({}, t.placeholder, {
              client: i
            }),
            client: i,
            page: o
          })
        }({
          draggable: e,
          offset: bt(i, o),
          initialWindowScroll: r.scroll.initial
        })
      }))
    },
    Jn = function(e) {
      return "SNAP" === e.movementMode
    },
    Qn = function(e, t, n) {
      var r = function(e, t) {
        return {
          draggables: e.draggables,
          droppables: Fn(e.droppables, t)
        }
      }(e.dimensions, t);
      return !Jn(e) || n ? zn({
        state: e,
        dimensions: r
      }) : Hn({
        state: e,
        dimensions: r
      })
    };

  function Xn(e) {
    return e.isDragging && "SNAP" === e.movementMode ? p({
      phase: "DRAGGING"
    }, e, {
      scrollJumpRequest: null
    }) : e
  }
  var Zn = {
      phase: "IDLE",
      completed: null,
      shouldFlush: !1
    },
    er = function(e, t) {
      if (void 0 === e && (e = Zn), "FLUSH" === t.type) return p({}, Zn, {
        shouldFlush: !0
      });
      if ("INITIAL_PUBLISH" === t.type) {
        "IDLE" !== e.phase && st(!1);
        var n = t.payload,
          r = n.critical,
          i = n.clientSelection,
          o = n.viewport,
          a = n.dimensions,
          u = n.movementMode,
          l = a.draggables[r.draggable.id],
          c = a.droppables[r.droppable.id],
          s = {
            selection: i,
            borderBoxCenter: l.client.borderBox.center,
            offset: vt
          },
          f = {
            client: s,
            page: {
              selection: bt(s.selection, o.scroll.initial),
              borderBoxCenter: bt(s.selection, o.scroll.initial)
            }
          },
          d = Mt(a.droppables).every((function(e) {
            return !e.isFixedOnPage
          })),
          h = Vn({
            draggable: l,
            home: c,
            draggables: a.draggables,
            viewport: o
          }),
          g = h.impact;
        return {
          phase: "DRAGGING",
          isDragging: !0,
          critical: r,
          movementMode: u,
          dimensions: a,
          initial: f,
          current: f,
          isWindowScrollAllowed: d,
          impact: g,
          afterCritical: h.afterCritical,
          onLiftImpact: g,
          viewport: o,
          userDirection: Ft,
          scrollJumpRequest: null,
          forceShouldAnimate: null
        }
      }
      var m;
      if ("COLLECTION_STARTING" === t.type) return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase ? e : ("DRAGGING" !== e.phase && st(!1), p({
        phase: "COLLECTING"
      }, e, ((m = {}).phase = "COLLECTING", m)));
      if ("PUBLISH_WHILE_DRAGGING" === t.type) return "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && st(!1),
        function(e) {
          var t, n, r = e.state,
            i = e.published;
          Yn("Processing dynamic changes");
          var o = i.modified.map((function(e) {
              var t = r.dimensions.droppables[e.droppableId];
              return Pt(t, e.scroll)
            })),
            a = p({}, r.dimensions.droppables, {}, jt(o)),
            u = Bt(Kn({
              additions: i.additions,
              updatedDroppables: a,
              viewport: r.viewport
            })),
            l = p({}, r.dimensions.draggables, {}, u);
          i.removals.forEach((function(e) {
            delete l[e]
          }));
          var c = {
              droppables: a,
              draggables: l
            },
            s = Dn(r.impact),
            f = s ? c.droppables[s] : null,
            d = c.draggables[r.critical.draggable.id],
            h = c.droppables[r.critical.droppable.id],
            g = Vn({
              draggable: d,
              home: h,
              draggables: l,
              viewport: r.viewport
            }),
            m = g.impact,
            v = g.afterCritical,
            b = f && f.isCombineEnabled ? r.impact : m,
            y = Mn({
              pageBorderBoxCenter: r.current.page.borderBoxCenter,
              draggable: c.draggables[r.critical.draggable.id],
              draggables: c.draggables,
              droppables: c.droppables,
              previousImpact: b,
              viewport: r.viewport,
              userDirection: r.userDirection,
              afterCritical: v
            });
          qn("Processing dynamic changes");
          var w = p({
            phase: "DRAGGING"
          }, r, ((t = {}).phase = "DRAGGING", t.impact = y, t.onLiftImpact = m, t.dimensions = c, t.afterCritical = v, t.forceShouldAnimate = !1, t));
          return "COLLECTING" === r.phase ? w : p({
            phase: "DROP_PENDING"
          }, w, ((n = {}).phase = "DROP_PENDING", n.reason = r.reason, n.isWaiting = !1, n))
        }({
          state: e,
          published: t.payload
        });
      if ("MOVE" === t.type) {
        if ("DROP_PENDING" === e.phase) return e;
        Nn(e) || st(!1);
        var v = t.payload.client;
        return wt(v, e.current.client.selection) ? e : zn({
          state: e,
          clientSelection: v,
          impact: Jn(e) ? e.impact : null
        })
      }
      if ("UPDATE_DROPPABLE_SCROLL" === t.type) {
        if ("DROP_PENDING" === e.phase) return Xn(e);
        if ("COLLECTING" === e.phase) return Xn(e);
        Nn(e) || st(!1);
        var b = t.payload,
          y = b.id,
          w = b.newScroll,
          x = e.dimensions.droppables[y];
        if (!x) return e;
        var E = Pt(x, w);
        return Qn(e, E, !1)
      }
      if ("UPDATE_DROPPABLE_IS_ENABLED" === t.type) {
        if ("DROP_PENDING" === e.phase) return e;
        Nn(e) || st(!1);
        var k = t.payload,
          S = k.id,
          T = k.isEnabled,
          C = e.dimensions.droppables[S];
        C || st(!1), C.isEnabled === T && st(!1);
        var _ = p({}, C, {
          isEnabled: T
        });
        return Qn(e, _, !0)
      }
      if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === t.type) {
        if ("DROP_PENDING" === e.phase) return e;
        Nn(e) || st(!1);
        var I = t.payload,
          O = I.id,
          P = I.isCombineEnabled,
          D = e.dimensions.droppables[O];
        D || st(!1), D.isCombineEnabled === P && st(!1);
        var A = p({}, D, {
          isCombineEnabled: P
        });
        return Qn(e, A, !0)
      }
      if ("MOVE_BY_WINDOW_SCROLL" === t.type) {
        if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase) return e;
        Nn(e) || st(!1), e.isWindowScrollAllowed || st(!1);
        var N = t.payload.newScroll;
        if (wt(e.viewport.scroll.current, N)) return Xn(e);
        var R = yn(e.viewport, N);
        return Jn(e) ? Hn({
          state: e,
          viewport: R
        }) : zn({
          state: e,
          viewport: R
        })
      }
      if ("UPDATE_VIEWPORT_MAX_SCROLL" === t.type) {
        if (!Nn(e)) return e;
        var j = t.payload.maxScroll;
        if (wt(j, e.viewport.scroll.max)) return e;
        var B = p({}, e.viewport, {
          scroll: p({}, e.viewport.scroll, {
            max: j
          })
        });
        return p({
          phase: "DRAGGING"
        }, e, {
          viewport: B
        })
      }
      if ("MOVE_UP" === t.type || "MOVE_DOWN" === t.type || "MOVE_LEFT" === t.type || "MOVE_RIGHT" === t.type) {
        if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase) return e;
        "DRAGGING" !== e.phase && st(!1);
        var M = An({
          state: e,
          type: t.type
        });
        return M ? zn({
          state: e,
          impact: M.impact,
          clientSelection: M.clientSelection,
          scrollJumpRequest: M.scrollJumpRequest
        }) : e
      }
      if ("DROP_PENDING" === t.type) {
        var L, U = t.payload.reason;
        return "COLLECTING" !== e.phase && st(!1), p({
          phase: "DROP_PENDING"
        }, e, ((L = {}).phase = "DROP_PENDING", L.isWaiting = !0, L.reason = U, L))
      }
      if ("DROP_ANIMATE" === t.type) {
        var F = t.payload,
          G = F.completed,
          z = F.dropDuration,
          $ = F.newHomeClientOffset;
        return "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && st(!1), {
          phase: "DROP_ANIMATING",
          completed: G,
          dropDuration: z,
          newHomeClientOffset: $,
          dimensions: e.dimensions
        }
      }
      return "DROP_COMPLETE" === t.type ? {
        phase: "IDLE",
        completed: t.payload.completed,
        shouldFlush: !1
      } : e
    },
    tr = function(e) {
      return {
        type: "LIFT",
        payload: e
      }
    },
    nr = function(e) {
      return {
        type: "PUBLISH_WHILE_DRAGGING",
        payload: e
      }
    },
    rr = function() {
      return {
        type: "COLLECTION_STARTING",
        payload: null
      }
    },
    ir = function(e) {
      return {
        type: "UPDATE_DROPPABLE_SCROLL",
        payload: e
      }
    },
    or = function(e) {
      return {
        type: "UPDATE_DROPPABLE_IS_ENABLED",
        payload: e
      }
    },
    ar = function(e) {
      return {
        type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
        payload: e
      }
    },
    ur = function(e) {
      return {
        type: "MOVE",
        payload: e
      }
    },
    lr = function() {
      return {
        type: "MOVE_UP",
        payload: null
      }
    },
    cr = function() {
      return {
        type: "MOVE_DOWN",
        payload: null
      }
    },
    sr = function() {
      return {
        type: "MOVE_RIGHT",
        payload: null
      }
    },
    fr = function() {
      return {
        type: "MOVE_LEFT",
        payload: null
      }
    },
    dr = function() {
      return {
        type: "FLUSH",
        payload: null
      }
    },
    pr = function(e) {
      return {
        type: "DROP_COMPLETE",
        payload: e
      }
    },
    hr = function(e) {
      return {
        type: "DROP",
        payload: e
      }
    },
    gr = function() {
      return {
        type: "DROP_ANIMATION_FINISHED",
        payload: null
      }
    };
  var mr = {
      outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
      drop: "cubic-bezier(.2,1,.1,1)"
    },
    vr = {
      opacity: {
        drop: 0,
        combining: .7
      },
      scale: {
        drop: .75
      }
    },
    br = .33,
    yr = .55,
    wr = .2 + "s " + mr.outOfTheWay,
    xr = {
      fluid: "opacity " + wr,
      snap: "transform " + wr + ", opacity " + wr,
      drop: function(e) {
        var t = e + "s " + mr.drop;
        return "transform " + t + ", opacity " + t
      },
      outOfTheWay: "transform " + wr,
      placeholder: "height " + wr + ", width " + wr + ", margin " + wr
    },
    Er = function(e) {
      return wt(e, vt) ? null : "translate(" + e.x + "px, " + e.y + "px)"
    },
    kr = {
      moveTo: Er,
      drop: function(e, t) {
        var n = Er(e);
        return n ? t ? n + " scale(" + vr.scale.drop + ")" : n : null
      }
    },
    Sr = br,
    Tr = yr,
    Cr = Tr - Sr,
    _r = function(e) {
      var t = e.getState,
        n = e.dispatch;
      return function(e) {
        return function(r) {
          if ("DROP" === r.type) {
            var i = t(),
              o = r.payload.reason;
            if ("COLLECTING" !== i.phase) {
              if ("IDLE" !== i.phase) {
                "DROP_PENDING" === i.phase && i.isWaiting && st(!1), "DRAGGING" !== i.phase && "DROP_PENDING" !== i.phase && st(!1);
                var a = i.critical,
                  u = i.dimensions,
                  l = u.draggables[i.critical.draggable.id],
                  c = function(e) {
                    var t = e.draggables,
                      n = e.reason,
                      r = e.lastImpact,
                      i = e.home,
                      o = e.viewport,
                      a = e.onLiftImpact;
                    return r.at && "DROP" === n ? "REORDER" === r.at.type ? {
                      impact: r,
                      didDropInsideDroppable: !0
                    } : {
                      impact: p({}, r, {
                        displaced: Yt
                      }),
                      didDropInsideDroppable: !0
                    } : {
                      impact: $n({
                        draggables: t,
                        impact: a,
                        destination: i,
                        viewport: o,
                        forceShouldAnimate: !0
                      }),
                      didDropInsideDroppable: !1
                    }
                  }({
                    reason: o,
                    lastImpact: i.impact,
                    afterCritical: i.afterCritical,
                    onLiftImpact: i.onLiftImpact,
                    home: i.dimensions.droppables[i.critical.droppable.id],
                    viewport: i.viewport,
                    draggables: i.dimensions.draggables
                  }),
                  s = c.impact,
                  f = c.didDropInsideDroppable,
                  d = f ? zt(s) : null,
                  h = f ? $t(s) : null,
                  g = {
                    index: a.draggable.index,
                    droppableId: a.droppable.id
                  },
                  m = {
                    draggableId: l.descriptor.id,
                    type: l.descriptor.type,
                    source: g,
                    reason: o,
                    mode: i.movementMode,
                    destination: d,
                    combine: h
                  },
                  v = function(e) {
                    var t = e.impact,
                      n = e.draggable,
                      r = e.dimensions,
                      i = e.viewport,
                      o = e.afterCritical,
                      a = r.draggables,
                      u = r.droppables,
                      l = Dn(t),
                      c = l ? u[l] : null,
                      s = u[n.descriptor.droppableId],
                      f = Wn({
                        impact: t,
                        draggable: n,
                        draggables: a,
                        afterCritical: o,
                        droppable: c || s,
                        viewport: i
                      });
                    return yt(f, n.client.borderBox.center)
                  }({
                    impact: s,
                    draggable: l,
                    dimensions: u,
                    viewport: i.viewport,
                    afterCritical: i.afterCritical
                  }),
                  b = {
                    critical: i.critical,
                    afterCritical: i.afterCritical,
                    result: m,
                    impact: s
                  };
                if (!wt(i.current.client.offset, v) || Boolean(m.combine)) {
                  var y = function(e) {
                    var t = e.current,
                      n = e.destination,
                      r = e.reason,
                      i = kt(t, n);
                    if (i <= 0) return Sr;
                    if (i >= 1500) return Tr;
                    var o = Sr + Cr * (i / 1500);
                    return Number(("CANCEL" === r ? .6 * o : o).toFixed(2))
                  }({
                    current: i.current.client.offset,
                    destination: v,
                    reason: o
                  });
                  n(function(e) {
                    return {
                      type: "DROP_ANIMATE",
                      payload: e
                    }
                  }({
                    newHomeClientOffset: v,
                    dropDuration: y,
                    completed: b
                  }))
                } else n(pr({
                  completed: b
                }))
              }
            } else n(function(e) {
              return {
                type: "DROP_PENDING",
                payload: e
              }
            }({
              reason: o
            }))
          } else e(r)
        }
      }
    },
    Ir = function() {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      }
    };

  function Or(e) {
    var t = e.onWindowScroll;
    var n, r = qe((function() {
        t(Ir())
      })),
      i = (n = r, {
        eventName: "scroll",
        options: {
          passive: !0,
          capture: !1
        },
        fn: function(e) {
          e.target !== window && e.target !== window.document || n()
        }
      }),
      o = ot;

    function a() {
      return o !== ot
    }
    return {
      start: function() {
        a() && st(!1), o = at(window, [i])
      },
      stop: function() {
        a() || st(!1), r.cancel(), o(), o = ot
      },
      isActive: a
    }
  }
  var Pr = function(e) {
      var t = Or({
        onWindowScroll: function(t) {
          e.dispatch({
            type: "MOVE_BY_WINDOW_SCROLL",
            payload: {
              newScroll: t
            }
          })
        }
      });
      return function(e) {
        return function(n) {
          t.isActive() || "INITIAL_PUBLISH" !== n.type || t.start(), t.isActive() && function(e) {
            return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "FLUSH" === e.type
          }(n) && t.stop(), e(n)
        }
      }
    },
    Dr = function() {
      var e = [];
      return {
        add: function(t) {
          var n = setTimeout((function() {
              return function(t) {
                var n = At(e, (function(e) {
                  return e.timerId === t
                })); - 1 === n && st(!1), e.splice(n, 1)[0].callback()
              }(n)
            })),
            r = {
              timerId: n,
              callback: t
            };
          e.push(r)
        },
        flush: function() {
          if (e.length) {
            var t = [].concat(e);
            e.length = 0, t.forEach((function(e) {
              clearTimeout(e.timerId), e.callback()
            }))
          }
        }
      }
    },
    Ar = function(e, t) {
      Yn(e), t(), qn(e)
    },
    Nr = function(e, t) {
      return {
        draggableId: e.draggable.id,
        type: e.droppable.type,
        source: {
          droppableId: e.droppable.id,
          index: e.draggable.index
        },
        mode: t
      }
    },
    Rr = function(e, t, n, r) {
      if (e) {
        var i = function(e) {
          var t = !1,
            n = !1,
            r = setTimeout((function() {
              n = !0
            })),
            i = function(i) {
              t || n || (t = !0, e(i), clearTimeout(r))
            };
          return i.wasCalled = function() {
            return t
          }, i
        }(n);
        e(t, {
          announce: i
        }), i.wasCalled() || n(r(t))
      } else n(r(t))
    },
    jr = function(e, t) {
      var n = function(e, t) {
        var n = Dr(),
          r = null,
          i = function(n) {
            r || st(!1), r = null, Ar("onDragEnd", (function() {
              return Rr(e().onDragEnd, n, t, mt.onDragEnd)
            }))
          };
        return {
          beforeStart: function(t, n) {
            r && st(!1), Ar("onBeforeDragStart", (function() {
              var r = e().onBeforeDragStart;
              r && r(Nr(t, n))
            }))
          },
          start: function(i, o) {
            r && st(!1);
            var a = Nr(i, o);
            r = {
              mode: o,
              lastCritical: i,
              lastLocation: a.source,
              lastCombine: null
            }, n.add((function() {
              Ar("onDragStart", (function() {
                return Rr(e().onDragStart, a, t, mt.onDragStart)
              }))
            }))
          },
          update: function(i, o) {
            var a = zt(o),
              u = $t(o);
            r || st(!1);
            var l = ! function(e, t) {
              if (e === t) return !0;
              var n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index,
                r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
              return n && r
            }(i, r.lastCritical);
            l && (r.lastCritical = i);
            var c, s, f = (c = r.lastLocation, s = a, !(null == c && null == s || null != c && null != s && c.droppableId === s.droppableId && c.index === s.index));
            f && (r.lastLocation = a);
            var d = ! function(e, t) {
              return null == e && null == t || null != e && null != t && (e.draggableId === t.draggableId && e.droppableId === t.droppableId)
            }(r.lastCombine, u);
            if (d && (r.lastCombine = u), l || f || d) {
              var h = p({}, Nr(i, r.mode), {
                combine: u,
                destination: a
              });
              n.add((function() {
                Ar("onDragUpdate", (function() {
                  return Rr(e().onDragUpdate, h, t, mt.onDragUpdate)
                }))
              }))
            }
          },
          flush: function() {
            r || st(!1), n.flush()
          },
          drop: i,
          abort: function() {
            if (r) {
              var e = p({}, Nr(r.lastCritical, r.mode), {
                combine: null,
                destination: null,
                reason: "CANCEL"
              });
              i(e)
            }
          }
        }
      }(e, t);
      return function(e) {
        return function(t) {
          return function(r) {
            if ("INITIAL_PUBLISH" === r.type) {
              var i = r.payload.critical;
              return n.beforeStart(i, r.payload.movementMode), t(r), void n.start(i, r.payload.movementMode)
            }
            if ("DROP_COMPLETE" === r.type) {
              var o = r.payload.completed.result;
              return n.flush(), t(r), void n.drop(o)
            }
            if (t(r), "FLUSH" !== r.type) {
              var a = e.getState();
              "DRAGGING" === a.phase && n.update(a.critical, a.impact)
            } else n.abort()
          }
        }
      }
    },
    Br = function(e) {
      return function(t) {
        return function(n) {
          if ("DROP_ANIMATION_FINISHED" === n.type) {
            var r = e.getState();
            "DROP_ANIMATING" !== r.phase && st(!1), e.dispatch(pr({
              completed: r.completed
            }))
          } else t(n)
        }
      }
    },
    Mr = function(e) {
      var t = null,
        n = null;
      return function(r) {
        return function(i) {
          if ("FLUSH" !== i.type && "DROP_COMPLETE" !== i.type && "DROP_ANIMATION_FINISHED" !== i.type || (n && (cancelAnimationFrame(n), n = null), t && (t(), t = null)), r(i), "DROP_ANIMATE" === i.type) {
            var o = {
              eventName: "scroll",
              options: {
                capture: !0,
                passive: !1,
                once: !0
              },
              fn: function() {
                "DROP_ANIMATING" === e.getState().phase && e.dispatch({
                  type: "DROP_ANIMATION_FINISHED",
                  payload: null
                })
              }
            };
            n = requestAnimationFrame((function() {
              n = null, t = at(window, [o])
            }))
          }
        }
      }
    },
    Lr = function(e) {
      return function(t) {
        return function(n) {
          if (t(n), "PUBLISH_WHILE_DRAGGING" === n.type) {
            var r = e.getState();
            "DROP_PENDING" === r.phase && (r.isWaiting || e.dispatch(hr({
              reason: r.reason
            })))
          }
        }
      }
    },
    Ur = S,
    Fr = function(e) {
      var t, n = e.dimensionMarshal,
        r = e.focusMarshal,
        i = e.styleMarshal,
        o = e.getResponders,
        a = e.announce,
        u = e.autoScroller;
      return b(er, Ur(function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function(e) {
          return function() {
            var n = e.apply(void 0, arguments),
              r = function() {
                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
              },
              i = {
                getState: n.getState,
                dispatch: function() {
                  return r.apply(void 0, arguments)
                }
              },
              o = t.map((function(e) {
                return e(i)
              }));
            return k({}, n, {
              dispatch: r = S.apply(void 0, o)(n.dispatch)
            })
          }
        }
      }((t = i, function() {
        return function(e) {
          return function(n) {
            "INITIAL_PUBLISH" === n.type && t.dragging(), "DROP_ANIMATE" === n.type && t.dropping(n.payload.completed.result.reason), "FLUSH" !== n.type && "DROP_COMPLETE" !== n.type || t.resting(), e(n)
          }
        }
      }), function(e) {
        return function() {
          return function(t) {
            return function(n) {
              "DROP_COMPLETE" !== n.type && "FLUSH" !== n.type && "DROP_ANIMATE" !== n.type || e.stopPublishing(), t(n)
            }
          }
        }
      }(n), function(e) {
        return function(t) {
          var n = t.getState,
            r = t.dispatch;
          return function(t) {
            return function(i) {
              if ("LIFT" === i.type) {
                var o = i.payload,
                  a = o.id,
                  u = o.clientSelection,
                  l = o.movementMode,
                  c = n();
                "DROP_ANIMATING" === c.phase && r(pr({
                  completed: c.completed
                })), "IDLE" !== n().phase && st(!1), r(dr());
                var s = {
                    draggableId: a,
                    scrollOptions: {
                      shouldPublishImmediately: "SNAP" === l
                    }
                  },
                  f = e.startPublishing(s),
                  d = f.critical,
                  p = f.dimensions,
                  h = f.viewport;
                r({
                  type: "INITIAL_PUBLISH",
                  payload: {
                    critical: d,
                    dimensions: p,
                    clientSelection: u,
                    movementMode: l,
                    viewport: h
                  }
                })
              } else t(i)
            }
          }
        }
      }(n), _r, Br, Mr, Lr, function(e) {
        return function(t) {
          return function(n) {
            return function(r) {
              if (function(e) {
                  return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "FLUSH" === e.type
                }(r)) return e.stop(), void n(r);
              if ("INITIAL_PUBLISH" === r.type) {
                n(r);
                var i = t.getState();
                return "DRAGGING" !== i.phase && st(!1), void e.start(i)
              }
              n(r), e.scroll(t.getState())
            }
          }
        }
      }(u), Pr, function(e) {
        var t = !1;
        return function() {
          return function(n) {
            return function(r) {
              if ("INITIAL_PUBLISH" === r.type) return t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), void e.tryRestoreFocusRecorded();
              if (n(r), t) {
                if ("FLUSH" === r.type) return t = !1, void e.tryRestoreFocusRecorded();
                if ("DROP_COMPLETE" === r.type) {
                  t = !1;
                  var i = r.payload.completed.result;
                  i.combine && e.tryShiftRecord(i.draggableId, i.combine.draggableId), e.tryRestoreFocusRecorded()
                }
              }
            }
          }
        }
      }(r), jr(o, a))))
    },
    Gr = function() {
      return {
        additions: {},
        removals: {},
        modified: {}
      }
    },
    zr = "Publish collection from DOM";
  var $r = function(e) {
      var t = e.scrollHeight,
        n = e.scrollWidth,
        r = e.height,
        i = e.width,
        o = yt({
          x: n,
          y: t
        }, {
          x: i,
          y: r
        });
      return {
        x: Math.max(0, o.x),
        y: Math.max(0, o.y)
      }
    },
    Wr = function() {
      var e = document.documentElement;
      return e || st(!1), e
    },
    Hr = function() {
      var e = Wr();
      return $r({
        scrollHeight: e.scrollHeight,
        scrollWidth: e.scrollWidth,
        width: e.clientWidth,
        height: e.clientHeight
      })
    },
    Vr = function(e) {
      var t = e.critical,
        n = e.scrollOptions,
        r = e.registry;
      Yn("Initial collection from DOM");
      var i, o, a, u, l, c, s, f = (i = Ir(), o = Hr(), a = i.y, u = i.x, l = Wr(), c = l.clientWidth, s = l.clientHeight, {
          frame: Ae({
            top: a,
            left: u,
            right: u + c,
            bottom: a + s
          }),
          scroll: {
            initial: i,
            current: i,
            max: o,
            diff: {
              value: vt,
              displacement: vt
            }
          }
        }),
        d = f.scroll.current,
        p = t.droppable,
        h = r.droppable.getAllByType(p.type).map((function(e) {
          return e.callbacks.getDimensionAndWatchScroll(d, n)
        })),
        g = r.draggable.getAllByType(t.draggable.type).map((function(e) {
          return e.getDimension(d)
        })),
        m = {
          draggables: Bt(g),
          droppables: jt(h)
        };
      return qn("Initial collection from DOM"), {
        dimensions: m,
        critical: t,
        viewport: f
      }
    };

  function Yr(e, t, n) {
    return n.descriptor.id !== t.id && (n.descriptor.type === t.type && "virtual" === e.droppable.getById(n.descriptor.droppableId).descriptor.mode)
  }
  var qr, Kr, Jr = function(e, t) {
      var n = null,
        r = function(e) {
          var t = e.registry,
            n = e.callbacks,
            r = Gr(),
            i = null,
            o = function() {
              i || (n.collectionStarting(), i = requestAnimationFrame((function() {
                i = null, Yn(zr);
                var e = r,
                  o = e.additions,
                  a = e.removals,
                  u = e.modified,
                  l = Ye()(o).map((function(e) {
                    return t.draggable.getById(e).getDimension(vt)
                  })).sort((function(e, t) {
                    return e.descriptor.index - t.descriptor.index
                  })),
                  c = Ye()(u).map((function(e) {
                    return {
                      droppableId: e,
                      scroll: t.droppable.getById(e).callbacks.getScrollWhileDragging()
                    }
                  })),
                  s = {
                    additions: l,
                    removals: Ye()(a),
                    modified: c
                  };
                r = Gr(), qn(zr), n.publish(s)
              })))
            };
          return {
            add: function(e) {
              var t = e.descriptor.id;
              r.additions[t] = e, r.modified[e.descriptor.droppableId] = !0, r.removals[t] && delete r.removals[t], o()
            },
            remove: function(e) {
              var t = e.descriptor;
              r.removals[t.id] = !0, r.modified[t.droppableId] = !0, r.additions[t.id] && delete r.additions[t.id], o()
            },
            stop: function() {
              i && (cancelAnimationFrame(i), i = null, r = Gr())
            }
          }
        }({
          callbacks: {
            publish: t.publishWhileDragging,
            collectionStarting: t.collectionStarting
          },
          registry: e
        }),
        i = function(t) {
          n || st(!1);
          var i = n.critical.draggable;
          "ADDITION" === t.type && Yr(e, i, t.value) && r.add(t.value), "REMOVAL" === t.type && Yr(e, i, t.value) && r.remove(t.value)
        };
      return {
        updateDroppableIsEnabled: function(r, i) {
          e.droppable.exists(r) || st(!1), n && t.updateDroppableIsEnabled({
            id: r,
            isEnabled: i
          })
        },
        updateDroppableIsCombineEnabled: function(r, i) {
          n && (e.droppable.exists(r) || st(!1), t.updateDroppableIsCombineEnabled({
            id: r,
            isCombineEnabled: i
          }))
        },
        scrollDroppable: function(t, r) {
          n && e.droppable.getById(t).callbacks.scroll(r)
        },
        updateDroppableScroll: function(r, i) {
          n && (e.droppable.exists(r) || st(!1), t.updateDroppableScroll({
            id: r,
            newScroll: i
          }))
        },
        startPublishing: function(t) {
          n && st(!1);
          var r = e.draggable.getById(t.draggableId),
            o = e.droppable.getById(r.descriptor.droppableId),
            a = {
              draggable: r.descriptor,
              droppable: o.descriptor
            },
            u = e.subscribe(i);
          return n = {
            critical: a,
            unsubscribe: u
          }, Vr({
            critical: a,
            registry: e,
            scrollOptions: t.scrollOptions
          })
        },
        stopPublishing: function() {
          if (n) {
            r.stop();
            var t = n.critical.droppable;
            e.droppable.getAllByType(t.type).forEach((function(e) {
              return e.callbacks.dragStopped()
            })), n.unsubscribe(), n = null
          }
        }
      }
    },
    Qr = function(e, t) {
      return "IDLE" === e.phase || "DROP_ANIMATING" === e.phase && (e.completed.result.draggableId !== t && "DROP" === e.completed.result.reason)
    },
    Xr = function(e) {
      window.scrollBy(e.x, e.y)
    },
    Zr = $e((function(e) {
      return Mt(e).filter((function(e) {
        return !!e.isEnabled && !!e.frame
      }))
    })),
    ei = function(e) {
      var t = e.center,
        n = e.destination,
        r = e.droppables;
      if (n) {
        var i = r[n];
        return i.frame ? i : null
      }
      return function(e, t) {
        return Nt(Zr(t), (function(t) {
          return t.frame || st(!1), Rn(t.frame.pageMarginBox)(e)
        }))
      }(t, r)
    },
    ti = .25,
    ni = .05,
    ri = 28,
    ii = function(e) {
      return Math.pow(e, 2)
    },
    oi = {
      stopDampeningAt: 1200,
      accelerateAt: 360
    },
    ai = function(e) {
      var t = e.startOfRange,
        n = e.endOfRange,
        r = e.current,
        i = n - t;
      return 0 === i ? 0 : (r - t) / i
    },
    ui = oi.accelerateAt,
    li = oi.stopDampeningAt,
    ci = function(e) {
      var t = e.distanceToEdge,
        n = e.thresholds,
        r = e.dragStartTime,
        i = e.shouldUseTimeDampening,
        o = function(e, t) {
          if (e > t.startScrollingFrom) return 0;
          if (e <= t.maxScrollValueAt) return ri;
          if (e === t.startScrollingFrom) return 1;
          var n = ai({
              startOfRange: t.maxScrollValueAt,
              endOfRange: t.startScrollingFrom,
              current: e
            }),
            r = ri * ii(1 - n);
          return Math.ceil(r)
        }(t, n);
      return 0 === o ? 0 : i ? Math.max(function(e, t) {
        var n = t,
          r = li,
          i = Je()() - n;
        if (i >= li) return e;
        if (i < ui) return 1;
        var o = ai({
            startOfRange: ui,
            endOfRange: r,
            current: i
          }),
          a = e * ii(o);
        return Math.ceil(a)
      }(o, r), 1) : o
    },
    si = function(e) {
      var t = e.container,
        n = e.distanceToEdges,
        r = e.dragStartTime,
        i = e.axis,
        o = e.shouldUseTimeDampening,
        a = function(e, t) {
          return {
            startScrollingFrom: e[t.size] * ti,
            maxScrollValueAt: e[t.size] * ni
          }
        }(t, i);
      return n[i.end] < n[i.start] ? ci({
        distanceToEdge: n[i.end],
        thresholds: a,
        dragStartTime: r,
        shouldUseTimeDampening: o
      }) : -1 * ci({
        distanceToEdge: n[i.start],
        thresholds: a,
        dragStartTime: r,
        shouldUseTimeDampening: o
      })
    },
    fi = Tt((function(e) {
      return 0 === e ? 0 : e
    })),
    di = function(e) {
      var t = e.dragStartTime,
        n = e.container,
        r = e.subject,
        i = e.center,
        o = e.shouldUseTimeDampening,
        a = {
          top: i.y - n.top,
          right: n.right - i.x,
          bottom: n.bottom - i.y,
          left: i.x - n.left
        },
        u = si({
          container: n,
          distanceToEdges: a,
          dragStartTime: t,
          axis: Xt,
          shouldUseTimeDampening: o
        }),
        l = si({
          container: n,
          distanceToEdges: a,
          dragStartTime: t,
          axis: Zt,
          shouldUseTimeDampening: o
        }),
        c = fi({
          x: l,
          y: u
        });
      if (wt(c, vt)) return null;
      var s = function(e) {
        var t = e.container,
          n = e.subject,
          r = e.proposedScroll,
          i = n.height > t.height,
          o = n.width > t.width;
        return o || i ? o && i ? null : {
          x: o ? 0 : r.x,
          y: i ? 0 : r.y
        } : r
      }({
        container: n,
        subject: r,
        proposedScroll: c
      });
      return s ? wt(s, vt) ? null : s : null
    },
    pi = Tt((function(e) {
      return 0 === e ? 0 : e > 0 ? 1 : -1
    })),
    hi = (qr = function(e, t) {
      return e < 0 ? e : e > t ? e - t : 0
    }, function(e) {
      var t = e.current,
        n = e.max,
        r = e.change,
        i = bt(t, r),
        o = {
          x: qr(i.x, n.x),
          y: qr(i.y, n.y)
        };
      return wt(o, vt) ? null : o
    }),
    gi = function(e) {
      var t = e.max,
        n = e.current,
        r = e.change,
        i = {
          x: Math.max(n.x, t.x),
          y: Math.max(n.y, t.y)
        },
        o = pi(r),
        a = hi({
          max: i,
          current: n,
          change: o
        });
      return !a || (0 !== o.x && 0 === a.x || 0 !== o.y && 0 === a.y)
    },
    mi = function(e, t) {
      return gi({
        current: e.scroll.current,
        max: e.scroll.max,
        change: t
      })
    },
    vi = function(e, t) {
      var n = e.frame;
      return !!n && gi({
        current: n.scroll.current,
        max: n.scroll.max,
        change: t
      })
    },
    bi = function(e) {
      var t = e.state,
        n = e.dragStartTime,
        r = e.shouldUseTimeDampening,
        i = e.scrollWindow,
        o = e.scrollDroppable,
        a = t.current.page.borderBoxCenter,
        u = t.dimensions.draggables[t.critical.draggable.id].page.marginBox;
      if (t.isWindowScrollAllowed) {
        var l = function(e) {
          var t = e.viewport,
            n = e.subject,
            r = e.center,
            i = e.dragStartTime,
            o = e.shouldUseTimeDampening,
            a = di({
              dragStartTime: i,
              container: t.frame,
              subject: n,
              center: r,
              shouldUseTimeDampening: o
            });
          return a && mi(t, a) ? a : null
        }({
          dragStartTime: n,
          viewport: t.viewport,
          subject: u,
          center: a,
          shouldUseTimeDampening: r
        });
        if (l) return void i(l)
      }
      var c = ei({
        center: a,
        destination: Dn(t.impact),
        droppables: t.dimensions.droppables
      });
      if (c) {
        var s = function(e) {
          var t = e.droppable,
            n = e.subject,
            r = e.center,
            i = e.dragStartTime,
            o = e.shouldUseTimeDampening,
            a = t.frame;
          if (!a) return null;
          var u = di({
            dragStartTime: i,
            container: a.pageMarginBox,
            subject: n,
            center: r,
            shouldUseTimeDampening: o
          });
          return u && vi(t, u) ? u : null
        }({
          dragStartTime: n,
          droppable: c,
          subject: u,
          center: a,
          shouldUseTimeDampening: r
        });
        s && o(c.descriptor.id, s)
      }
    },
    yi = function(e) {
      var t = e.move,
        n = e.scrollDroppable,
        r = e.scrollWindow,
        i = function(e, t) {
          if (!vi(e, t)) return t;
          var r = function(e, t) {
            var n = e.frame;
            return n && vi(e, t) ? hi({
              current: n.scroll.current,
              max: n.scroll.max,
              change: t
            }) : null
          }(e, t);
          if (!r) return n(e.descriptor.id, t), null;
          var i = yt(t, r);
          return n(e.descriptor.id, i), yt(t, i)
        },
        o = function(e, t, n) {
          if (!e) return n;
          if (!mi(t, n)) return n;
          var i = function(e, t) {
            if (!mi(e, t)) return null;
            var n = e.scroll.max,
              r = e.scroll.current;
            return hi({
              current: r,
              max: n,
              change: t
            })
          }(t, n);
          if (!i) return r(n), null;
          var o = yt(n, i);
          return r(o), yt(n, o)
        };
      return function(e) {
        var n = e.scrollJumpRequest;
        if (n) {
          var r = Dn(e.impact);
          r || st(!1);
          var a = i(e.dimensions.droppables[r], n);
          if (a) {
            var u = e.viewport,
              l = o(e.isWindowScrollAllowed, u, a);
            l && function(e, n) {
              var r = bt(e.current.client.selection, n);
              t({
                client: r
              })
            }(e, l)
          }
        }
      }
    },
    wi = function(e) {
      var t = e.scrollDroppable,
        n = e.scrollWindow,
        r = e.move,
        i = function(e) {
          var t = e.scrollWindow,
            n = e.scrollDroppable,
            r = qe(t),
            i = qe(n),
            o = null,
            a = function(e) {
              o || st(!1);
              var t = o,
                n = t.shouldUseTimeDampening,
                a = t.dragStartTime;
              bi({
                state: e,
                scrollWindow: r,
                scrollDroppable: i,
                dragStartTime: a,
                shouldUseTimeDampening: n
              })
            };
          return {
            start: function(e) {
              Yn("starting fluid scroller"), o && st(!1);
              var t = Je()(),
                n = !1,
                r = function() {
                  n = !0
                };
              bi({
                state: e,
                dragStartTime: 0,
                shouldUseTimeDampening: !1,
                scrollWindow: r,
                scrollDroppable: r
              }), o = {
                dragStartTime: t,
                shouldUseTimeDampening: n
              }, qn("starting fluid scroller"), n && a(e)
            },
            stop: function() {
              o && (r.cancel(), i.cancel(), o = null)
            },
            scroll: a
          }
        }({
          scrollWindow: n,
          scrollDroppable: t
        }),
        o = yi({
          move: r,
          scrollWindow: n,
          scrollDroppable: t
        });
      return {
        scroll: function(e) {
          "DRAGGING" === e.phase && ("FLUID" !== e.movementMode ? e.scrollJumpRequest && o(e) : i.scroll(e))
        },
        start: i.start,
        stop: i.stop
      }
    },
    xi = "data-rbd",
    Ei = {
      base: Kr = xi + "-drag-handle",
      draggableId: Kr + "-draggable-id",
      contextId: Kr + "-context-id"
    },
    ki = function() {
      var e = xi + "-draggable";
      return {
        base: e,
        contextId: e + "-context-id",
        id: e + "-id"
      }
    }(),
    Si = function() {
      var e = xi + "-droppable";
      return {
        base: e,
        contextId: e + "-context-id",
        id: e + "-id"
      }
    }(),
    Ti = {
      contextId: xi + "-scroll-container-context-id"
    },
    Ci = function(e, t) {
      return e.map((function(e) {
        var n = e.styles[t];
        return n ? e.selector + " { " + n + " }" : ""
      })).join(" ")
    },
    _i = function(e) {
      var t, n, r, i = (t = e, function(e) {
          return "[" + e + '="' + t + '"]'
        }),
        o = (n = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ", {
          selector: i(Ei.contextId),
          styles: {
            always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
            resting: n,
            dragging: "pointer-events: none;",
            dropAnimating: n
          }
        }),
        a = [(r = "\n      transition: " + xr.outOfTheWay + ";\n    ", {
          selector: i(ki.contextId),
          styles: {
            dragging: r,
            dropAnimating: r,
            userCancel: r
          }
        }), o, {
          selector: i(Si.contextId),
          styles: {
            always: "overflow-anchor: none;"
          }
        }, {
          selector: "body",
          styles: {
            dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
          }
        }];
      return {
        always: Ci(a, "always"),
        resting: Ci(a, "resting"),
        dragging: Ci(a, "dragging"),
        dropAnimating: Ci(a, "dropAnimating"),
        userCancel: Ci(a, "userCancel")
      }
    },
    Ii = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
    Oi = function() {
      var e = document.querySelector("head");
      return e || st(!1), e
    },
    Pi = function(e) {
      var t = document.createElement("style");
      return e && t.setAttribute("nonce", e), t.type = "text/css", t
    };
  var Di = function(e) {
    return e && e.ownerDocument ? e.ownerDocument.defaultView : window
  };

  function Ai(e) {
    return e instanceof Di(e).HTMLElement
  }

  function Ni(e, t) {
    var n = "[" + Ei.contextId + '="' + e + '"]',
      r = Rt(document.querySelectorAll(n));
    if (!r.length) return null;
    var i = Nt(r, (function(e) {
      return e.getAttribute(Ei.draggableId) === t
    }));
    return i && Ai(i) ? i : null
  }

  function Ri() {
    var e = {
        draggables: {},
        droppables: {}
      },
      t = [];

    function n(e) {
      t.length && t.forEach((function(t) {
        return t(e)
      }))
    }

    function r(t) {
      return e.draggables[t] || null
    }

    function i(t) {
      return e.droppables[t] || null
    }
    return {
      draggable: {
        register: function(t) {
          e.draggables[t.descriptor.id] = t, n({
            type: "ADDITION",
            value: t
          })
        },
        update: function(t, n) {
          var r = e.draggables[n.descriptor.id];
          r && r.uniqueId === t.uniqueId && (delete e.draggables[n.descriptor.id], e.draggables[t.descriptor.id] = t)
        },
        unregister: function(t) {
          var i = t.descriptor.id,
            o = r(i);
          o && t.uniqueId === o.uniqueId && (delete e.draggables[i], n({
            type: "REMOVAL",
            value: t
          }))
        },
        getById: function(e) {
          var t = r(e);
          return t || st(!1), t
        },
        findById: r,
        exists: function(e) {
          return Boolean(r(e))
        },
        getAllByType: function(t) {
          return Dt(e.draggables).filter((function(e) {
            return e.descriptor.type === t
          }))
        }
      },
      droppable: {
        register: function(t) {
          e.droppables[t.descriptor.id] = t
        },
        unregister: function(t) {
          var n = i(t.descriptor.id);
          n && t.uniqueId === n.uniqueId && delete e.droppables[t.descriptor.id]
        },
        getById: function(e) {
          var t = i(e);
          return t || st(!1), t
        },
        findById: i,
        exists: function(e) {
          return Boolean(i(e))
        },
        getAllByType: function(t) {
          return Dt(e.droppables).filter((function(e) {
            return e.descriptor.type === t
          }))
        }
      },
      subscribe: function(e) {
        return t.push(e),
          function() {
            var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
          }
      },
      clean: function() {
        e.draggables = {}, e.droppables = {}, t.length = 0
      }
    }
  }
  var ji = i.a.createContext(null),
    Bi = function() {
      var e = document.body;
      return e || st(!1), e
    },
    Mi = {
      position: "absolute",
      width: "1px",
      height: "1px",
      margin: "-1px",
      border: "0",
      padding: "0",
      overflow: "hidden",
      clip: "rect(0 0 0 0)",
      "clip-path": "inset(100%)"
    },
    Li = function(e) {
      return "rbd-announcement-" + e
    };
  var Ui = function(e) {
    return "rbd-lift-instruction-" + e
  };
  var Fi = i.a.createContext(null);

  function Gi(e) {
    0
  }

  function zi(e, t) {
    Gi()
  }

  function $i(e) {
    var t = Object(r.useRef)(e);
    return Object(r.useEffect)((function() {
      t.current = e
    })), t
  }
  var Wi, Hi = 27,
    Vi = 32,
    Yi = 37,
    qi = 38,
    Ki = 39,
    Ji = 40,
    Qi = ((Wi = {})[13] = !0, Wi[9] = !0, Wi),
    Xi = function(e) {
      Qi[e.keyCode] && e.preventDefault()
    },
    Zi = function() {
      var e = "visibilitychange";
      return "undefined" == typeof document ? e : Nt([e, "ms" + e, "webkit" + e, "moz" + e, "o" + e], (function(e) {
        return "on" + e in document
      })) || e
    }(),
    eo = 0,
    to = 5;
  var no, ro = {
    type: "IDLE"
  };

  function io(e) {
    var t = e.cancel,
      n = e.completed,
      r = e.getPhase,
      i = e.setPhase;
    return [{
      eventName: "mousemove",
      fn: function(e) {
        var t = e.button,
          n = e.clientX,
          o = e.clientY;
        if (t === eo) {
          var a = {
              x: n,
              y: o
            },
            u = r();
          if ("DRAGGING" === u.type) return e.preventDefault(), void u.actions.move(a);
          "PENDING" !== u.type && st(!1);
          var l = u.point;
          if (c = l, s = a, Math.abs(s.x - c.x) >= to || Math.abs(s.y - c.y) >= to) {
            var c, s;
            e.preventDefault();
            var f = u.actions.fluidLift(a);
            i({
              type: "DRAGGING",
              actions: f
            })
          }
        }
      }
    }, {
      eventName: "mouseup",
      fn: function(e) {
        var i = r();
        "DRAGGING" === i.type ? (e.preventDefault(), i.actions.drop({
          shouldBlockNextClick: !0
        }), n()) : t()
      }
    }, {
      eventName: "mousedown",
      fn: function(e) {
        "DRAGGING" === r().type && e.preventDefault(), t()
      }
    }, {
      eventName: "keydown",
      fn: function(e) {
        if ("PENDING" !== r().type) return e.keyCode === Hi ? (e.preventDefault(), void t()) : void Xi(e);
        t()
      }
    }, {
      eventName: "resize",
      fn: t
    }, {
      eventName: "scroll",
      options: {
        passive: !0,
        capture: !1
      },
      fn: function() {
        "PENDING" === r().type && t()
      }
    }, {
      eventName: "webkitmouseforcedown",
      fn: function(e) {
        var n = r();
        "IDLE" === n.type && st(!1), n.actions.shouldRespectForcePress() ? t() : e.preventDefault()
      }
    }, {
      eventName: Zi,
      fn: t
    }]
  }

  function oo() {}
  var ao = ((no = {})[34] = !0, no[33] = !0, no[36] = !0, no[35] = !0, no);

  function uo(e, t) {
    function n() {
      t(), e.cancel()
    }
    return [{
      eventName: "keydown",
      fn: function(r) {
        return r.keyCode === Hi ? (r.preventDefault(), void n()) : r.keyCode === Vi ? (r.preventDefault(), t(), void e.drop()) : r.keyCode === Ji ? (r.preventDefault(), void e.moveDown()) : r.keyCode === qi ? (r.preventDefault(), void e.moveUp()) : r.keyCode === Ki ? (r.preventDefault(), void e.moveRight()) : r.keyCode === Yi ? (r.preventDefault(), void e.moveLeft()) : void(ao[r.keyCode] ? r.preventDefault() : Xi(r))
      }
    }, {
      eventName: "mousedown",
      fn: n
    }, {
      eventName: "mouseup",
      fn: n
    }, {
      eventName: "click",
      fn: n
    }, {
      eventName: "touchstart",
      fn: n
    }, {
      eventName: "resize",
      fn: n
    }, {
      eventName: "wheel",
      fn: n,
      options: {
        passive: !0
      }
    }, {
      eventName: Zi,
      fn: n
    }]
  }
  var lo = {
      type: "IDLE"
    },
    co = 120,
    so = .15;
  var fo = {
    input: !0,
    button: !0,
    textarea: !0,
    select: !0,
    option: !0,
    optgroup: !0,
    video: !0,
    audio: !0
  };

  function po(e, t) {
    var n = t.target;
    return !!Ai(n) && function e(t, n) {
      if (null == n) return !1;
      if (Boolean(fo[n.tagName.toLowerCase()])) return !0;
      var r = n.getAttribute("contenteditable");
      return "true" === r || "" === r || n !== t && e(t, n.parentElement)
    }(e, n)
  }
  var ho = function(e) {
    return Ae(e.getBoundingClientRect()).center
  };
  var go = "undefined" == typeof document ? "matches" : Nt(["matches", "msMatchesSelector", "webkitMatchesSelector"], (function(e) {
    return e in Element.prototype
  })) || "matches";

  function mo(e, t) {
    return e.closest ? e.closest(t) : function e(t, n) {
      return null == t ? null : t[go](n) ? t : e(t.parentElement, n)
    }(e, t)
  }

  function vo(e, t) {
    var n, r = t.target;
    if (!((n = r) instanceof Di(n).Element)) return null;
    var i = mo(r, function(e) {
      return "[" + Ei.contextId + '="' + e + '"]'
    }(e));
    return i && Ai(i) ? i : null
  }

  function bo(e) {
    e.preventDefault()
  }

  function yo(e) {
    var t = e.expected,
      n = e.phase,
      r = e.isLockActive;
    e.shouldWarn;
    return !!r() && t === n
  }

  function wo(e) {
    var t = e.lockAPI,
      n = e.store,
      r = e.registry,
      i = e.draggableId;
    if (t.isClaimed()) return !1;
    var o = r.draggable.findById(i);
    return !!o && (!!o.options.isEnabled && !!Qr(n.getState(), i))
  }

  function xo(e) {
    var t = e.lockAPI,
      n = e.contextId,
      r = e.store,
      i = e.registry,
      o = e.draggableId,
      a = e.forceSensorStop,
      u = e.sourceEvent;
    if (!wo({
        lockAPI: t,
        store: r,
        registry: i,
        draggableId: o
      })) return null;
    var l = i.draggable.getById(o),
      c = function(e, t) {
        var n = "[" + ki.contextId + '="' + e + '"]',
          r = Nt(Rt(document.querySelectorAll(n)), (function(e) {
            return e.getAttribute(ki.id) === t
          }));
        return r && Ai(r) ? r : null
      }(n, l.descriptor.id);
    if (!c) return null;
    if (u && !l.options.canDragInteractiveElements && po(c, u)) return null;
    var s = t.claim(a || ot),
      f = "PRE_DRAG";

    function d() {
      return l.options.shouldRespectForcePress
    }

    function h() {
      return t.isActive(s)
    }
    var g = function(e, t) {
      yo({
        expected: e,
        phase: f,
        isLockActive: h,
        shouldWarn: !0
      }) && r.dispatch(t())
    }.bind(this, "DRAGGING");

    function m(e) {
      function n() {
        t.release(), f = "COMPLETED"
      }

      function i(t, i) {
        if (void 0 === i && (i = {
            shouldBlockNextClick: !1
          }), e.cleanup(), i.shouldBlockNextClick) {
          var o = at(window, [{
            eventName: "click",
            fn: bo,
            options: {
              once: !0,
              passive: !1,
              capture: !0
            }
          }]);
          setTimeout(o)
        }
        n(), r.dispatch(hr({
          reason: t
        }))
      }
      return "PRE_DRAG" !== f && (n(), "PRE_DRAG" !== f && st(!1)), r.dispatch(tr(e.liftActionArgs)), f = "DRAGGING", p({
        isActive: function() {
          return yo({
            expected: "DRAGGING",
            phase: f,
            isLockActive: h,
            shouldWarn: !1
          })
        },
        shouldRespectForcePress: d,
        drop: function(e) {
          return i("DROP", e)
        },
        cancel: function(e) {
          return i("CANCEL", e)
        }
      }, e.actions)
    }
    return {
      isActive: function() {
        return yo({
          expected: "PRE_DRAG",
          phase: f,
          isLockActive: h,
          shouldWarn: !1
        })
      },
      shouldRespectForcePress: d,
      fluidLift: function(e) {
        var t = qe((function(e) {
          g((function() {
            return ur({
              client: e
            })
          }))
        }));
        return p({}, m({
          liftActionArgs: {
            id: o,
            clientSelection: e,
            movementMode: "FLUID"
          },
          cleanup: function() {
            return t.cancel()
          },
          actions: {
            move: t
          }
        }), {
          move: t
        })
      },
      snapLift: function() {
        var e = {
          moveUp: function() {
            return g(lr)
          },
          moveRight: function() {
            return g(sr)
          },
          moveDown: function() {
            return g(cr)
          },
          moveLeft: function() {
            return g(fr)
          }
        };
        return m({
          liftActionArgs: {
            id: o,
            clientSelection: ho(c),
            movementMode: "SNAP"
          },
          cleanup: ot,
          actions: e
        })
      },
      abort: function() {
        yo({
          expected: "PRE_DRAG",
          phase: f,
          isLockActive: h,
          shouldWarn: !0
        }) && t.release()
      }
    }
  }
  var Eo = [function(e) {
    var t = Object(r.useRef)(ro),
      n = Object(r.useRef)(ot),
      i = a((function() {
        return {
          eventName: "mousedown",
          fn: function(t) {
            if (!t.defaultPrevented && t.button === eo && !(t.ctrlKey || t.metaKey || t.shiftKey || t.altKey)) {
              var r = e.findClosestDraggableId(t);
              if (r) {
                var i = e.tryGetLock(r, c, {
                  sourceEvent: t
                });
                if (i) {
                  t.preventDefault();
                  var o = {
                    x: t.clientX,
                    y: t.clientY
                  };
                  n.current(), d(i, o)
                }
              }
            }
          }
        }
      }), [e]),
      o = a((function() {
        return {
          eventName: "webkitmouseforcewillbegin",
          fn: function(t) {
            if (!t.defaultPrevented) {
              var n = e.findClosestDraggableId(t);
              if (n) {
                var r = e.findOptionsForDraggable(n);
                r && (r.shouldRespectForcePress || e.canGetLock(n) && t.preventDefault())
              }
            }
          }
        }
      }), [e]),
      l = u((function() {
        n.current = at(window, [o, i], {
          passive: !1,
          capture: !0
        })
      }), [o, i]),
      c = u((function() {
        "IDLE" !== t.current.type && (t.current = ro, n.current(), l())
      }), [l]),
      s = u((function() {
        var e = t.current;
        c(), "DRAGGING" === e.type && e.actions.cancel({
          shouldBlockNextClick: !0
        }), "PENDING" === e.type && e.actions.abort()
      }), [c]),
      f = u((function() {
        var e = io({
          cancel: s,
          completed: c,
          getPhase: function() {
            return t.current
          },
          setPhase: function(e) {
            t.current = e
          }
        });
        n.current = at(window, e, {
          capture: !0,
          passive: !1
        })
      }), [s, c]),
      d = u((function(e, n) {
        "IDLE" !== t.current.type && st(!1), t.current = {
          type: "PENDING",
          point: n,
          actions: e
        }, f()
      }), [f]);
    Ii((function() {
      return l(),
        function() {
          n.current()
        }
    }), [l])
  }, function(e) {
    var t = Object(r.useRef)(oo),
      n = a((function() {
        return {
          eventName: "keydown",
          fn: function(n) {
            if (!n.defaultPrevented && n.keyCode === Vi) {
              var r = e.findClosestDraggableId(n);
              if (r) {
                var o = e.tryGetLock(r, l, {
                  sourceEvent: n
                });
                if (o) {
                  n.preventDefault();
                  var a = !0,
                    u = o.snapLift();
                  t.current(), t.current = at(window, uo(u, l), {
                    capture: !0,
                    passive: !1
                  })
                }
              }
            }

            function l() {
              a || st(!1), a = !1, t.current(), i()
            }
          }
        }
      }), [e]),
      i = u((function() {
        t.current = at(window, [n], {
          passive: !1,
          capture: !0
        })
      }), [n]);
    Ii((function() {
      return i(),
        function() {
          t.current()
        }
    }), [i])
  }, function(e) {
    var t = Object(r.useRef)(lo),
      n = Object(r.useRef)(ot),
      i = u((function() {
        return t.current
      }), []),
      o = u((function(e) {
        t.current = e
      }), []),
      l = a((function() {
        return {
          eventName: "touchstart",
          fn: function(t) {
            if (!t.defaultPrevented) {
              var r = e.findClosestDraggableId(t);
              if (r) {
                var i = e.tryGetLock(r, s, {
                  sourceEvent: t
                });
                if (i) {
                  var o = t.touches[0],
                    a = {
                      x: o.clientX,
                      y: o.clientY
                    };
                  n.current(), h(i, a)
                }
              }
            }
          }
        }
      }), [e]),
      c = u((function() {
        n.current = at(window, [l], {
          capture: !0,
          passive: !1
        })
      }), [l]),
      s = u((function() {
        var e = t.current;
        "IDLE" !== e.type && ("PENDING" === e.type && clearTimeout(e.longPressTimerId), o(lo), n.current(), c())
      }), [c, o]),
      f = u((function() {
        var e = t.current;
        s(), "DRAGGING" === e.type && e.actions.cancel({
          shouldBlockNextClick: !0
        }), "PENDING" === e.type && e.actions.abort()
      }), [s]),
      d = u((function() {
        var e = {
            capture: !0,
            passive: !1
          },
          t = {
            cancel: f,
            completed: s,
            getPhase: i
          },
          r = at(window, function(e) {
            var t = e.cancel,
              n = e.completed,
              r = e.getPhase;
            return [{
              eventName: "touchmove",
              options: {
                capture: !1
              },
              fn: function(e) {
                var n = r();
                if ("DRAGGING" === n.type) {
                  n.hasMoved = !0;
                  var i = e.touches[0],
                    o = {
                      x: i.clientX,
                      y: i.clientY
                    };
                  e.preventDefault(), n.actions.move(o)
                } else t()
              }
            }, {
              eventName: "touchend",
              fn: function(e) {
                var i = r();
                "DRAGGING" === i.type ? (e.preventDefault(), i.actions.drop({
                  shouldBlockNextClick: !0
                }), n()) : t()
              }
            }, {
              eventName: "touchcancel",
              fn: function(e) {
                "DRAGGING" === r().type ? (e.preventDefault(), t()) : t()
              }
            }, {
              eventName: "touchforcechange",
              fn: function(e) {
                var n = r();
                "IDLE" === n.type && st(!1);
                var i = e.touches[0];
                if (i && i.force >= so) {
                  var o = n.actions.shouldRespectForcePress();
                  if ("PENDING" !== n.type) return o ? n.hasMoved ? void e.preventDefault() : void t() : void e.preventDefault();
                  o && t()
                }
              }
            }, {
              eventName: Zi,
              fn: t
            }]
          }(t), e),
          o = at(window, function(e) {
            var t = e.cancel,
              n = e.getPhase;
            return [{
              eventName: "orientationchange",
              fn: t
            }, {
              eventName: "resize",
              fn: t
            }, {
              eventName: "contextmenu",
              fn: function(e) {
                e.preventDefault()
              }
            }, {
              eventName: "keydown",
              fn: function(e) {
                "DRAGGING" === n().type ? (e.keyCode === Hi && e.preventDefault(), t()) : t()
              }
            }, {
              eventName: Zi,
              fn: t
            }]
          }(t), e);
        n.current = function() {
          r(), o()
        }
      }), [f, i, s]),
      p = u((function() {
        var e = i();
        "PENDING" !== e.type && st(!1);
        var t = e.actions.fluidLift(e.point);
        o({
          type: "DRAGGING",
          actions: t,
          hasMoved: !1
        })
      }), [i, o]),
      h = u((function(e, t) {
        "IDLE" !== i().type && st(!1);
        var n = setTimeout(p, co);
        o({
          type: "PENDING",
          point: t,
          actions: e,
          longPressTimerId: n
        }), d()
      }), [d, i, o, p]);
    Ii((function() {
      return c(),
        function() {
          n.current();
          var e = i();
          "PENDING" === e.type && (clearTimeout(e.longPressTimerId), o(lo))
        }
    }), [i, c, o]), Ii((function() {
      return at(window, [{
        eventName: "touchmove",
        fn: function() {},
        options: {
          capture: !1,
          passive: !1
        }
      }])
    }), [])
  }];

  function ko(e) {
    var t = e.contextId,
      n = e.store,
      i = e.registry,
      o = e.customSensors,
      l = e.enableDefaultSensors,
      c = [].concat(l ? Eo : [], o || []),
      s = Object(r.useState)((function() {
        return function() {
          var e = null;

          function t() {
            e || st(!1), e = null
          }
          return {
            isClaimed: function() {
              return Boolean(e)
            },
            isActive: function(t) {
              return t === e
            },
            claim: function(t) {
              e && st(!1);
              var n = {
                abandon: t
              };
              return e = n, n
            },
            release: t,
            tryAbandon: function() {
              e && (e.abandon(), t())
            }
          }
        }()
      }))[0],
      f = u((function(e, t) {
        e.isDragging && !t.isDragging && s.tryAbandon()
      }), [s]);
    Ii((function() {
      var e = n.getState();
      return n.subscribe((function() {
        var t = n.getState();
        f(e, t), e = t
      }))
    }), [s, n, f]), Ii((function() {
      return s.tryAbandon
    }), [s.tryAbandon]);
    var d = u((function(e) {
        return wo({
          lockAPI: s,
          registry: i,
          store: n,
          draggableId: e
        })
      }), [s, i, n]),
      p = u((function(e, r, o) {
        return xo({
          lockAPI: s,
          registry: i,
          contextId: t,
          store: n,
          draggableId: e,
          forceSensorStop: r,
          sourceEvent: o && o.sourceEvent ? o.sourceEvent : null
        })
      }), [t, s, i, n]),
      h = u((function(e) {
        return function(e, t) {
          var n = vo(e, t);
          return n ? n.getAttribute(Ei.draggableId) : null
        }(t, e)
      }), [t]),
      g = u((function(e) {
        var t = i.draggable.findById(e);
        return t ? t.options : null
      }), [i.draggable]),
      m = u(s.tryAbandon, [s]),
      v = u(s.isClaimed, [s]),
      b = a((function() {
        return {
          canGetLock: d,
          tryGetLock: p,
          findClosestDraggableId: h,
          findOptionsForDraggable: g,
          tryReleaseLock: m,
          isLockClaimed: v
        }
      }), [d, p, h, g, m, v]);
    Gi();
    for (var y = 0; y < c.length; y++) c[y](b)
  }
  var So = function(e) {
    return {
      onBeforeDragStart: e.onBeforeDragStart,
      onDragStart: e.onDragStart,
      onDragEnd: e.onDragEnd,
      onDragUpdate: e.onDragUpdate
    }
  };

  function To(e) {
    return e.current || st(!1), e.current
  }

  function Co(e) {
    var t = e.contextId,
      n = e.setCallbacks,
      o = e.sensors,
      l = e.nonce,
      c = e.liftInstruction,
      s = Object(r.useRef)(null);
    zi();
    var f = $i(e),
      h = u((function() {
        return So(f.current)
      }), [f]),
      g = function(e) {
        var t = a((function() {
            return Li(e)
          }), [e]),
          n = Object(r.useRef)(null);
        return Object(r.useEffect)((function() {
          n.current && st(!1);
          var e = document.createElement("div");
          return n.current = e, e.id = t, e.setAttribute("aria-live", "assertive"), e.setAttribute("role", "log"), e.setAttribute("aria-atomic", "true"), d()(e.style, Mi), Bi().appendChild(e),
            function() {
              setTimeout((function() {
                var e = n.current;
                e || st(!1), Bi().removeChild(e), n.current = null
              }))
            }
        }), [t]), u((function(e) {
          var t = n.current;
          t && (t.textContent = e)
        }), [])
      }(t),
      m = function(e, t) {
        var n = a((function() {
          return Ui(e)
        }), [e]);
        return Object(r.useEffect)((function() {
          var e = document.createElement("div");
          return e.id = n, e.textContent = t, d()(e.style, Mi), Bi().appendChild(e),
            function() {
              Bi().removeChild(e)
            }
        }), [n, t]), n
      }(t, c),
      v = function(e, t) {
        var n = a((function() {
            return _i(e)
          }), [e]),
          i = Object(r.useRef)(null),
          o = Object(r.useRef)(null),
          l = u($e((function(e) {
            var t = o.current;
            t || st(!1), t.textContent = e
          })), []),
          c = u((function(e) {
            var t = i.current;
            t || st(!1), t.textContent = e
          }), []);
        Ii((function() {
          (i.current || o.current) && st(!1);
          var r = Pi(t),
            a = Pi(t);
          return i.current = r, o.current = a, r.setAttribute(xi + "-always", e), a.setAttribute(xi + "-dynamic", e), Oi().appendChild(r), Oi().appendChild(a), c(n.always), l(n.resting),
            function() {
              var e = function(e) {
                var t = e.current;
                t || st(!1), Oi().removeChild(t), e.current = null
              };
              e(i), e(o)
            }
        }), [t, c, l, n.always, n.resting, e]);
        var s = u((function() {
            return l(n.dragging)
          }), [l, n.dragging]),
          f = u((function(e) {
            l("DROP" !== e ? n.userCancel : n.dropAnimating)
          }), [l, n.dropAnimating, n.userCancel]),
          d = u((function() {
            o.current && l(n.resting)
          }), [l, n.resting]);
        return a((function() {
          return {
            dragging: s,
            dropping: f,
            resting: d
          }
        }), [s, f, d])
      }(t, l),
      b = u((function(e) {
        To(s).dispatch(e)
      }), []),
      y = a((function() {
        return w({
          publishWhileDragging: nr,
          updateDroppableScroll: ir,
          updateDroppableIsEnabled: or,
          updateDroppableIsCombineEnabled: ar,
          collectionStarting: rr
        }, b)
      }), [b]),
      x = function() {
        var e = a(Ri, []);
        return Object(r.useEffect)((function() {
          return function() {
            requestAnimationFrame(e.clean)
          }
        }), [e]), e
      }(),
      E = a((function() {
        return Jr(x, y)
      }), [x, y]),
      k = a((function() {
        return wi(p({
          scrollWindow: Xr,
          scrollDroppable: E.scrollDroppable
        }, w({
          move: ur
        }, b)))
      }), [E.scrollDroppable, b]),
      S = function(e) {
        var t = Object(r.useRef)({}),
          n = Object(r.useRef)(null),
          i = Object(r.useRef)(null),
          o = Object(r.useRef)(!1),
          l = u((function(e, n) {
            var r = {
              id: e,
              focus: n
            };
            return t.current[e] = r,
              function() {
                var n = t.current;
                n[e] !== r && delete n[e]
              }
          }), []),
          c = u((function(t) {
            var n = Ni(e, t);
            n && n !== document.activeElement && n.focus()
          }), [e]),
          s = u((function(e, t) {
            n.current === e && (n.current = t)
          }), []),
          f = u((function() {
            i.current || o.current && (i.current = requestAnimationFrame((function() {
              i.current = null;
              var e = n.current;
              e && c(e)
            })))
          }), [c]),
          d = u((function(e) {
            n.current = null;
            var t = document.activeElement;
            t && t.getAttribute(Ei.draggableId) === e && (n.current = e)
          }), []);
        return Ii((function() {
          return o.current = !0,
            function() {
              o.current = !1;
              var e = i.current;
              e && cancelAnimationFrame(e)
            }
        }), []), a((function() {
          return {
            register: l,
            tryRecordFocus: d,
            tryRestoreFocusRecorded: f,
            tryShiftRecord: s
          }
        }), [l, d, f, s])
      }(t),
      T = a((function() {
        return Fr({
          announce: g,
          autoScroller: k,
          dimensionMarshal: E,
          focusMarshal: S,
          getResponders: h,
          styleMarshal: v
        })
      }), [g, k, E, S, h, v]);
    s.current = T;
    var C = u((function() {
        var e = To(s);
        "IDLE" !== e.getState().phase && e.dispatch(dr())
      }), []),
      _ = u((function() {
        var e = To(s).getState();
        return e.isDragging || "DROP_ANIMATING" === e.phase
      }), []);
    n(a((function() {
      return {
        isDragging: _,
        tryAbort: C
      }
    }), [_, C]));
    var I = u((function(e) {
        return Qr(To(s).getState(), e)
      }), []),
      O = u((function() {
        return Nn(To(s).getState())
      }), []),
      P = a((function() {
        return {
          marshal: E,
          focus: S,
          contextId: t,
          canLift: I,
          isMovementAllowed: O,
          liftInstructionId: m,
          registry: x
        }
      }), [t, E, S, I, O, m, x]);
    return ko({
      contextId: t,
      store: T,
      registry: x,
      customSensors: o,
      enableDefaultSensors: !1 !== e.enableDefaultSensors
    }), Object(r.useEffect)((function() {
      return C
    }), [C]), i.a.createElement(Fi.Provider, {
      value: P
    }, i.a.createElement(R, {
      context: ji,
      store: T
    }, e.children))
  }
  var _o = 0;

  function Io(e) {
    var t = a((function() {
        return "" + _o++
      }), []),
      n = e.liftInstruction || mt.liftInstruction;
    return i.a.createElement(ft, null, (function(r) {
      return i.a.createElement(Co, {
        nonce: e.nonce,
        contextId: t,
        setCallbacks: r,
        liftInstruction: n,
        enableDefaultSensors: e.enableDefaultSensors,
        sensors: e.sensors,
        onBeforeDragStart: e.onBeforeDragStart,
        onDragStart: e.onDragStart,
        onDragUpdate: e.onDragUpdate,
        onDragEnd: e.onDragEnd
      }, e.children)
    }))
  }
  var Oo = function(e) {
      return function(t) {
        return e === t
      }
    },
    Po = Oo("scroll"),
    Do = Oo("auto"),
    Ao = (Oo("visible"), function(e, t) {
      return t(e.overflowX) || t(e.overflowY)
    }),
    No = function(e) {
      var t = window.getComputedStyle(e),
        n = {
          overflowX: t.overflowX,
          overflowY: t.overflowY
        };
      return Ao(n, Po) || Ao(n, Do)
    },
    Ro = function e(t) {
      return null == t ? null : t === document.body ? null : t === document.documentElement ? null : No(t) ? t : e(t.parentElement)
    },
    jo = function(e) {
      return {
        x: e.scrollLeft,
        y: e.scrollTop
      }
    },
    Bo = function(e) {
      return {
        closestScrollable: Ro(e),
        isFixedOnPage: function e(t) {
          return !!t && ("fixed" === window.getComputedStyle(t).position || e(t.parentElement))
        }(e)
      }
    },
    Mo = function(e) {
      var t = e.ref,
        n = e.descriptor,
        r = e.env,
        i = e.windowScroll,
        o = e.direction,
        a = e.isDropDisabled,
        u = e.isCombineEnabled,
        l = e.shouldClipSubject,
        c = r.closestScrollable,
        s = function(e, t) {
          var n = Ge(e);
          if (!t) return n;
          if (e !== t) return n;
          var r = n.paddingBox.top - t.scrollTop,
            i = n.paddingBox.left - t.scrollLeft,
            o = r + t.scrollHeight,
            a = i + t.scrollWidth,
            u = Ne({
              top: r,
              right: a,
              bottom: o,
              left: i
            }, n.border);
          return Be({
            borderBox: u,
            margin: n.margin,
            border: n.border,
            padding: n.padding
          })
        }(t, c),
        f = Ue(s, i),
        d = function() {
          if (!c) return null;
          var e = Ge(c),
            t = {
              scrollHeight: c.scrollHeight,
              scrollWidth: c.scrollWidth
            };
          return {
            client: e,
            page: Ue(e, i),
            scroll: jo(c),
            scrollSize: t,
            shouldClipSubject: l
          }
        }();
      return function(e) {
        var t = e.descriptor,
          n = e.isEnabled,
          r = e.isCombineEnabled,
          i = e.isFixedOnPage,
          o = e.direction,
          a = e.client,
          u = e.page,
          l = e.closest,
          c = function() {
            if (!l) return null;
            var e = l.scrollSize,
              t = l.client,
              n = $r({
                scrollHeight: e.scrollHeight,
                scrollWidth: e.scrollWidth,
                height: t.paddingBox.height,
                width: t.paddingBox.width
              });
            return {
              pageMarginBox: l.page.marginBox,
              frameClient: t,
              scrollSize: e,
              shouldClipSubject: l.shouldClipSubject,
              scroll: {
                initial: l.scroll,
                current: l.scroll,
                max: n,
                diff: {
                  value: vt,
                  displacement: vt
                }
              }
            }
          }(),
          s = "vertical" === o ? Xt : Zt;
        return {
          descriptor: t,
          isCombineEnabled: r,
          isFixedOnPage: i,
          axis: s,
          isEnabled: n,
          client: a,
          page: u,
          frame: c,
          subject: Ot({
            page: u,
            withPlaceholder: null,
            axis: s,
            frame: c
          })
        }
      }({
        descriptor: n,
        isEnabled: !a,
        isCombineEnabled: u,
        isFixedOnPage: r.isFixedOnPage,
        direction: o,
        client: s,
        page: f,
        closest: d
      })
    },
    Lo = {
      passive: !1
    },
    Uo = {
      passive: !0
    },
    Fo = function(e) {
      return e.shouldPublishImmediately ? Lo : Uo
    };

  function Go(e) {
    var t = Object(r.useContext)(e);
    return t || st(!1), t
  }
  var zo = 0;

  function $o(e) {
    return e + "::" + Object(r.useRef)(zo++).current
  }
  var Wo = function(e) {
    return e && e.env.closestScrollable || null
  };

  function Ho() {}
  var Vo = {
      width: 0,
      height: 0,
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    Yo = function(e) {
      var t = e.isAnimatingOpenOnMount,
        n = e.placeholder,
        r = e.animate,
        i = function(e) {
          var t = e.isAnimatingOpenOnMount,
            n = e.placeholder,
            r = e.animate;
          return t ? Vo : "close" === r ? Vo : {
            height: n.client.borderBox.height,
            width: n.client.borderBox.width,
            margin: n.client.margin
          }
        }({
          isAnimatingOpenOnMount: t,
          placeholder: n,
          animate: r
        });
      return {
        display: n.display,
        boxSizing: "border-box",
        width: i.width,
        height: i.height,
        marginTop: i.margin.top,
        marginRight: i.margin.right,
        marginBottom: i.margin.bottom,
        marginLeft: i.margin.left,
        flexShrink: "0",
        flexGrow: "0",
        pointerEvents: "none",
        transition: "none" !== r ? xr.placeholder : null
      }
    };
  var qo = i.a.memo((function(e) {
      var t = Object(r.useRef)(null),
        n = u((function() {
          t.current && (clearTimeout(t.current), t.current = null)
        }), []),
        o = e.animate,
        a = e.onTransitionEnd,
        l = e.onClose,
        c = e.contextId,
        s = Object(r.useState)("open" === e.animate),
        f = s[0],
        d = s[1];
      Object(r.useEffect)((function() {
        return f ? "open" !== o ? (n(), d(!1), Ho) : t.current ? Ho : (t.current = setTimeout((function() {
          t.current = null, d(!1)
        })), n) : Ho
      }), [o, f, n]);
      var p = u((function(e) {
          "height" === e.propertyName && (a(), "close" === o && l())
        }), [o, l, a]),
        h = Yo({
          isAnimatingOpenOnMount: f,
          animate: e.animate,
          placeholder: e.placeholder
        });
      return i.a.createElement(e.placeholder.tagName, {
        style: h,
        "data-rbd-placeholder-context-id": c,
        onTransitionEnd: p,
        ref: e.innerRef
      })
    })),
    Ko = i.a.createContext(null);
  var Jo = function(e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
          isVisible: Boolean(t.props.on),
          data: t.props.on,
          animate: t.props.shouldAnimate && t.props.on ? "open" : "none"
        }, t.onClose = function() {
          "close" === t.state.animate && t.setState({
            isVisible: !1
          })
        }, t
      }
      return s(t, e), t.getDerivedStateFromProps = function(e, t) {
        return e.shouldAnimate ? e.on ? {
          isVisible: !0,
          data: e.on,
          animate: "open"
        } : t.isVisible ? {
          isVisible: !0,
          data: t.data,
          animate: "close"
        } : {
          isVisible: !1,
          animate: "close",
          data: null
        } : {
          isVisible: Boolean(e.on),
          data: e.on,
          animate: "none"
        }
      }, t.prototype.render = function() {
        if (!this.state.isVisible) return null;
        var e = {
          onClose: this.onClose,
          data: this.state.data,
          animate: this.state.animate
        };
        return this.props.children(e)
      }, t
    }(i.a.PureComponent),
    Qo = {
      dragging: 5e3,
      dropAnimating: 4500
    },
    Xo = function(e, t) {
      return t ? xr.drop(t.duration) : e ? xr.snap : xr.fluid
    },
    Zo = function(e, t) {
      return e ? t ? vr.opacity.drop : vr.opacity.combining : null
    },
    ea = function(e) {
      return null != e.forceShouldAnimate ? e.forceShouldAnimate : "SNAP" === e.mode
    };

  function ta(e) {
    return "DRAGGING" === e.type ? (r = (n = e).dimension.client, i = n.offset, o = n.combineWith, a = n.dropping, u = Boolean(o), l = ea(n), c = Boolean(a), s = c ? kr.drop(i, u) : kr.moveTo(i), {
      position: "fixed",
      top: r.marginBox.top,
      left: r.marginBox.left,
      boxSizing: "border-box",
      width: r.borderBox.width,
      height: r.borderBox.height,
      transition: Xo(l, a),
      transform: s,
      opacity: Zo(u, c),
      zIndex: c ? Qo.dropAnimating : Qo.dragging,
      pointerEvents: "none"
    }) : (t = e, {
      transform: kr.moveTo(t.offset),
      transition: t.shouldAnimateDisplacement ? null : "none"
    });
    var t, n, r, i, o, a, u, l, c, s
  }

  function na(e) {
    var t = $o("draggable"),
      n = e.descriptor,
      i = e.registry,
      o = e.getDraggableRef,
      l = e.canDragInteractiveElements,
      c = e.shouldRespectForcePress,
      s = e.isEnabled,
      f = a((function() {
        return {
          canDragInteractiveElements: l,
          shouldRespectForcePress: c,
          isEnabled: s
        }
      }), [l, s, c]),
      d = u((function(e) {
        var t = o();
        return t || st(!1),
          function(e, t, n) {
            void 0 === n && (n = vt);
            var r = window.getComputedStyle(t),
              i = t.getBoundingClientRect(),
              o = Fe(i, r),
              a = Ue(o, n);
            return {
              descriptor: e,
              placeholder: {
                client: o,
                tagName: t.tagName.toLowerCase(),
                display: r.display
              },
              displaceBy: {
                x: o.marginBox.width,
                y: o.marginBox.height
              },
              client: o,
              page: a
            }
          }(n, t, e)
      }), [n, o]),
      p = a((function() {
        return {
          uniqueId: t,
          descriptor: n,
          options: f,
          getDimension: d
        }
      }), [n, d, f, t]),
      h = Object(r.useRef)(p),
      g = Object(r.useRef)(!0);
    Ii((function() {
      return i.draggable.register(h.current),
        function() {
          return i.draggable.unregister(h.current)
        }
    }), [i.draggable]), Ii((function() {
      if (g.current) g.current = !1;
      else {
        var e = h.current;
        h.current = p, i.draggable.update(p, e)
      }
    }), [p, i.draggable])
  }

  function ra(e) {
    e.preventDefault()
  }
  var ia = function(e, t) {
      return e === t
    },
    oa = function(e) {
      var t = e.combine,
        n = e.destination;
      return n ? n.droppableId : t ? t.droppableId : null
    },
    aa = function(e) {
      return e.combine ? e.combine.draggableId : null
    },
    ua = function(e) {
      return e.at && "COMBINE" === e.at.type ? e.at.combine.draggableId : null
    };

  function la(e) {
    return {
      isDragging: !1,
      isDropAnimating: !1,
      isClone: !1,
      dropAnimation: null,
      mode: null,
      draggingOver: null,
      combineTargetFor: e,
      combineWith: null
    }
  }
  var ca = {
    mapped: {
      type: "SECONDARY",
      offset: vt,
      combineTargetFor: null,
      shouldAnimateDisplacement: !0,
      snapshot: la(null)
    }
  };
  var sa = xe((function() {
    var e, t, n, r = (e = $e((function(e, t) {
        return {
          x: e,
          y: t
        }
      })), t = $e((function(e, t, n, r, i) {
        return {
          isDragging: !0,
          isClone: t,
          isDropAnimating: Boolean(i),
          dropAnimation: i,
          mode: e,
          draggingOver: n,
          combineWith: r,
          combineTargetFor: null
        }
      })), n = $e((function(e, n, r, i, o, a, u) {
        return {
          mapped: {
            type: "DRAGGING",
            dropping: null,
            draggingOver: o,
            combineWith: a,
            mode: n,
            offset: e,
            dimension: r,
            forceShouldAnimate: u,
            snapshot: t(n, i, o, a, null)
          }
        }
      })), function(r, i) {
        if (r.isDragging) {
          if (r.critical.draggable.id !== i.draggableId) return null;
          var o = r.current.client.offset,
            a = r.dimensions.draggables[i.draggableId],
            u = Dn(r.impact),
            l = ua(r.impact),
            c = r.forceShouldAnimate;
          return n(e(o.x, o.y), r.movementMode, a, i.isClone, u, l, c)
        }
        if ("DROP_ANIMATING" === r.phase) {
          var s = r.completed;
          if (s.result.draggableId !== i.draggableId) return null;
          var f = i.isClone,
            d = r.dimensions.draggables[i.draggableId],
            p = s.result,
            h = p.mode,
            g = oa(p),
            m = aa(p),
            v = {
              duration: r.dropDuration,
              curve: mr.drop,
              moveTo: r.newHomeClientOffset,
              opacity: m ? vr.opacity.drop : null,
              scale: m ? vr.scale.drop : null
            };
          return {
            mapped: {
              type: "DRAGGING",
              offset: r.newHomeClientOffset,
              dimension: d,
              dropping: v,
              draggingOver: g,
              combineWith: m,
              mode: h,
              forceShouldAnimate: null,
              snapshot: t(h, f, g, m, v)
            }
          }
        }
        return null
      }),
      i = function() {
        var e = $e((function(e, t) {
            return {
              x: e,
              y: t
            }
          })),
          t = $e(la),
          n = $e((function(e, n, r) {
            return void 0 === n && (n = null), {
              mapped: {
                type: "SECONDARY",
                offset: e,
                combineTargetFor: n,
                shouldAnimateDisplacement: r,
                snapshot: t(n)
              }
            }
          })),
          r = function(e) {
            return e ? n(vt, e, !0) : null
          },
          i = function(t, i, o, a) {
            var u = o.displaced.visible[t],
              l = Boolean(a.inVirtualList && a.effected[t]),
              c = $t(o),
              s = c && c.draggableId === t ? i : null;
            if (!u) {
              if (!l) return r(s);
              if (o.displaced.invisible[t]) return null;
              var f = xt(a.displacedBy.point),
                d = e(f.x, f.y);
              return n(d, s, !0)
            }
            if (l) return r(s);
            var p = o.displacedBy.point,
              h = e(p.x, p.y);
            return n(h, s, u.shouldAnimate)
          };
        return function(e, t) {
          if (e.isDragging) return e.critical.draggable.id === t.draggableId ? null : i(t.draggableId, e.critical.draggable.id, e.impact, e.afterCritical);
          if ("DROP_ANIMATING" === e.phase) {
            var n = e.completed;
            return n.result.draggableId === t.draggableId ? null : i(t.draggableId, n.result.draggableId, n.impact, n.afterCritical)
          }
          return null
        }
      }();
    return function(e, t) {
      return r(e, t) || i(e, t) || ca
    }
  }), {
    dropAnimationFinished: gr
  }, null, {
    context: ji,
    pure: !0,
    areStatePropsEqual: ia
  })((function(e) {
    var t = Object(r.useRef)(null),
      n = u((function(e) {
        t.current = e
      }), []),
      i = u((function() {
        return t.current
      }), []),
      o = Go(Fi),
      l = o.contextId,
      c = o.liftInstructionId,
      s = o.registry,
      f = Go(Ko),
      d = f.type,
      p = f.droppableId,
      h = a((function() {
        return {
          id: e.draggableId,
          index: e.index,
          type: d,
          droppableId: p
        }
      }), [e.draggableId, e.index, d, p]),
      g = e.children,
      m = e.draggableId,
      v = e.isEnabled,
      b = e.shouldRespectForcePress,
      y = e.canDragInteractiveElements,
      w = e.isClone,
      x = e.mapped,
      E = e.dropAnimationFinished;
    zi(), Gi(), w || na(a((function() {
      return {
        descriptor: h,
        registry: s,
        getDraggableRef: i,
        canDragInteractiveElements: y,
        shouldRespectForcePress: b,
        isEnabled: v
      }
    }), [h, s, i, y, b, v]));
    var k = a((function() {
        return v ? {
          tabIndex: 0,
          "data-rbd-drag-handle-draggable-id": m,
          "data-rbd-drag-handle-context-id": l,
          "aria-labelledby": c,
          draggable: !1,
          onDragStart: ra
        } : null
      }), [l, m, v, c]),
      S = u((function(e) {
        "DRAGGING" === x.type && x.dropping && "transform" === e.propertyName && E()
      }), [E, x]),
      T = a((function() {
        var e = ta(x),
          t = "DRAGGING" === x.type && x.dropping ? S : null;
        return {
          innerRef: n,
          draggableProps: {
            "data-rbd-draggable-context-id": l,
            "data-rbd-draggable-id": m,
            style: e,
            onTransitionEnd: t
          },
          dragHandleProps: k
        }
      }), [l, k, m, x, S, n]),
      C = a((function() {
        return {
          draggableId: h.id,
          type: h.type,
          source: {
            index: h.index,
            droppableId: h.droppableId
          }
        }
      }), [h.droppableId, h.id, h.index, h.type]);
    return g(T, x.snapshot, C)
  }));

  function fa(e) {
    return Go(Ko).isUsingCloneFor !== e.draggableId || e.isClone ? i.a.createElement(sa, e) : null
  }

  function da(e) {
    var t = "boolean" != typeof e.isDragDisabled || !e.isDragDisabled,
      n = Boolean(e.disableInteractiveElementBlocking),
      r = Boolean(e.shouldRespectForcePress);
    return i.a.createElement(fa, p({}, e, {
      isClone: !1,
      isEnabled: t,
      canDragInteractiveElements: n,
      shouldRespectForcePress: r
    }))
  }
  var pa = function(e, t) {
      return e === t.droppable.type
    },
    ha = function(e, t) {
      return t.draggables[e.draggable.id]
    };
  var ga = {
      mode: "standard",
      type: "DEFAULT",
      direction: "vertical",
      isDropDisabled: !1,
      isCombineEnabled: !1,
      ignoreContainerClipping: !1,
      renderClone: null,
      getContainerForClone: function() {
        return document.body || st(!1), document.body
      }
    },
    ma = xe((function() {
      var e = {
          placeholder: null,
          shouldAnimatePlaceholder: !0,
          snapshot: {
            isDraggingOver: !1,
            draggingOverWith: null,
            draggingFromThisWith: null,
            isUsingPlaceholder: !1
          },
          useClone: null
        },
        t = p({}, e, {
          shouldAnimatePlaceholder: !1
        }),
        n = $e((function(e) {
          return {
            draggableId: e.id,
            type: e.type,
            source: {
              index: e.index,
              droppableId: e.droppableId
            }
          }
        })),
        r = $e((function(r, i, o, a, u, l) {
          var c = u.descriptor.id;
          if (u.descriptor.droppableId === r) {
            var s = l ? {
                render: l,
                dragging: n(u.descriptor)
              } : null,
              f = {
                isDraggingOver: o,
                draggingOverWith: o ? c : null,
                draggingFromThisWith: c,
                isUsingPlaceholder: !0
              };
            return {
              placeholder: u.placeholder,
              shouldAnimatePlaceholder: !1,
              snapshot: f,
              useClone: s
            }
          }
          if (!i) return t;
          if (!a) return e;
          var d = {
            isDraggingOver: o,
            draggingOverWith: c,
            draggingFromThisWith: null,
            isUsingPlaceholder: !0
          };
          return {
            placeholder: u.placeholder,
            shouldAnimatePlaceholder: !0,
            snapshot: d,
            useClone: null
          }
        }));
      return function(n, i) {
        var o = i.droppableId,
          a = i.type,
          u = !i.isDropDisabled,
          l = i.renderClone;
        if (n.isDragging) {
          var c = n.critical;
          if (!pa(a, c)) return t;
          var s = ha(c, n.dimensions),
            f = Dn(n.impact) === o;
          return r(o, u, f, f, s, l)
        }
        if ("DROP_ANIMATING" === n.phase) {
          var d = n.completed;
          if (!pa(a, d.critical)) return t;
          var p = ha(d.critical, n.dimensions);
          return r(o, u, oa(d.result) === o, Dn(d.impact) === o, p, l)
        }
        if ("IDLE" === n.phase && n.completed && !n.shouldFlush) {
          var h = n.completed;
          if (!pa(a, h.critical)) return t;
          var g = Dn(h.impact) === o,
            m = Boolean(h.impact.at && "COMBINE" === h.impact.at.type),
            v = h.critical.droppable.id === o;
          return g ? m ? e : t : v ? e : t
        }
        return t
      }
    }), {
      updateViewportMaxScroll: function(e) {
        return {
          type: "UPDATE_VIEWPORT_MAX_SCROLL",
          payload: e
        }
      }
    }, null, {
      context: ji,
      pure: !0,
      areStatePropsEqual: ia
    })((function(e) {
      var t = Object(r.useContext)(Fi);
      t || st(!1);
      var n = t.contextId,
        o = t.isMovementAllowed,
        l = Object(r.useRef)(null),
        c = Object(r.useRef)(null),
        s = e.children,
        f = e.droppableId,
        d = e.type,
        p = e.mode,
        h = e.direction,
        g = e.ignoreContainerClipping,
        m = e.isDropDisabled,
        v = e.isCombineEnabled,
        b = e.snapshot,
        y = e.useClone,
        w = e.updateViewportMaxScroll,
        x = e.getContainerForClone,
        E = u((function() {
          return l.current
        }), []),
        k = u((function(e) {
          l.current = e
        }), []),
        S = (u((function() {
          return c.current
        }), []), u((function(e) {
          c.current = e
        }), []));
      zi();
      var T = u((function() {
        o() && w({
          maxScroll: Hr()
        })
      }), [o, w]);
      ! function(e) {
        var t = Object(r.useRef)(null),
          n = Go(Fi),
          i = $o("droppable"),
          o = n.registry,
          l = n.marshal,
          c = $i(e),
          s = a((function() {
            return {
              id: e.droppableId,
              type: e.type,
              mode: e.mode
            }
          }), [e.droppableId, e.mode, e.type]),
          f = Object(r.useRef)(s),
          d = a((function() {
            return $e((function(e, n) {
              t.current || st(!1);
              var r = {
                x: e,
                y: n
              };
              l.updateDroppableScroll(s.id, r)
            }))
          }), [s.id, l]),
          p = u((function() {
            var e = t.current;
            return e && e.env.closestScrollable ? jo(e.env.closestScrollable) : vt
          }), []),
          h = u((function() {
            var e = p();
            d(e.x, e.y)
          }), [p, d]),
          g = a((function() {
            return qe(h)
          }), [h]),
          m = u((function() {
            var e = t.current,
              n = Wo(e);
            e && n || st(!1), e.scrollOptions.shouldPublishImmediately ? h() : g()
          }), [g, h]),
          v = u((function(e, r) {
            t.current && st(!1);
            var i = c.current,
              o = i.getDroppableRef();
            o || st(!1);
            var a = Bo(o),
              u = {
                ref: o,
                descriptor: s,
                env: a,
                scrollOptions: r
              };
            t.current = u;
            var l = Mo({
                ref: o,
                descriptor: s,
                env: a,
                windowScroll: e,
                direction: i.direction,
                isDropDisabled: i.isDropDisabled,
                isCombineEnabled: i.isCombineEnabled,
                shouldClipSubject: !i.ignoreContainerClipping
              }),
              f = a.closestScrollable;
            return f && (f.setAttribute(Ti.contextId, n.contextId), f.addEventListener("scroll", m, Fo(u.scrollOptions))), l
          }), [n.contextId, s, m, c]),
          b = u((function() {
            var e = t.current,
              n = Wo(e);
            return e && n || st(!1), jo(n)
          }), []),
          y = u((function() {
            var e = t.current;
            e || st(!1);
            var n = Wo(e);
            t.current = null, n && (g.cancel(), n.removeAttribute(Ti.contextId), n.removeEventListener("scroll", m, Fo(e.scrollOptions)))
          }), [m, g]),
          w = u((function(e) {
            var n = t.current;
            n || st(!1);
            var r = Wo(n);
            r || st(!1), r.scrollTop += e.y, r.scrollLeft += e.x
          }), []),
          x = a((function() {
            return {
              getDimensionAndWatchScroll: v,
              getScrollWhileDragging: b,
              dragStopped: y,
              scroll: w
            }
          }), [y, v, b, w]),
          E = a((function() {
            return {
              uniqueId: i,
              descriptor: s,
              callbacks: x
            }
          }), [x, s, i]);
        Ii((function() {
          return f.current = E.descriptor, o.droppable.register(E),
            function() {
              t.current && y(), o.droppable.unregister(E)
            }
        }), [x, s, y, E, l, o.droppable]), Ii((function() {
          t.current && l.updateDroppableIsEnabled(f.current.id, !e.isDropDisabled)
        }), [e.isDropDisabled, l]), Ii((function() {
          t.current && l.updateDroppableIsCombineEnabled(f.current.id, e.isCombineEnabled)
        }), [e.isCombineEnabled, l])
      }({
        droppableId: f,
        type: d,
        mode: p,
        direction: h,
        isDropDisabled: m,
        isCombineEnabled: v,
        ignoreContainerClipping: g,
        getDroppableRef: E
      });
      var C = i.a.createElement(Jo, {
          on: e.placeholder,
          shouldAnimate: e.shouldAnimatePlaceholder
        }, (function(e) {
          var t = e.onClose,
            r = e.data,
            o = e.animate;
          return i.a.createElement(qo, {
            placeholder: r,
            onClose: t,
            innerRef: S,
            animate: o,
            contextId: n,
            onTransitionEnd: T
          })
        })),
        _ = a((function() {
          return {
            innerRef: k,
            placeholder: C,
            droppableProps: {
              "data-rbd-droppable-id": f,
              "data-rbd-droppable-context-id": n
            }
          }
        }), [n, f, C, k]),
        I = y ? y.dragging.draggableId : null,
        O = a((function() {
          return {
            droppableId: f,
            type: d,
            isUsingCloneFor: I
          }
        }), [f, I, d]);
      return i.a.createElement(Ko.Provider, {
        value: O
      }, s(_, b), function() {
        if (!y) return null;
        var e = y.dragging,
          t = y.render,
          n = i.a.createElement(fa, {
            draggableId: e.draggableId,
            index: e.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0
          }, (function(n, r) {
            return t(n, r, e)
          }));
        return Ie.a.createPortal(n, x())
      }())
    }));
  ma.defaultProps = ga
}, function(e, t) {
  e.exports = function(e) {
    if (!e.webpackPolyfill) {
      var t = Object.create(e);
      t.children || (t.children = []), Object.defineProperty(t, "loaded", {
        enumerable: !0,
        get: function() {
          return t.l
        }
      }), Object.defineProperty(t, "id", {
        enumerable: !0,
        get: function() {
          return t.i
        }
      }), Object.defineProperty(t, "exports", {
        enumerable: !0
      }), t.webpackPolyfill = 1
    }
    return t
  }
}, function(e, t, n) {
  e.exports = n(77)
}, function(e, t, n) {
  e.exports = n(87)
}, function(e, t) {
  var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}, function(e, t) {
  e.exports = function(e) {
    return "object" == typeof e ? null !== e : "function" == typeof e
  }
}, function(e, t) {
  e.exports = function(e) {
    try {
      return !!e()
    } catch (e) {
      return !0
    }
  }
}, function(e, t, n) {
  var r = n(68),
    i = n(32);
  e.exports = Object.keys || function(e) {
    return r(e, i)
  }
}, function(e, t, n) {
  var r = n(15);
  e.exports = function(e) {
    if (!r(e)) throw TypeError(e + " is not an object!");
    return e
  }
}, function(e, t, n) {
  var r = n(28),
    i = n(29);
  e.exports = function(e) {
    return r(i(e))
  }
}, function(e, t, n) {
  "use strict";
  e.exports = n(83)
}, function(e, t, n) {
  "use strict";
  var r = n(20),
    i = {
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
      type: !0
    },
    o = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0
    },
    a = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0
    },
    u = {};

  function l(e) {
    return r.isMemo(e) ? a : u[e.$$typeof] || i
  }
  u[r.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  };
  var c = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    f = Object.getOwnPropertySymbols,
    d = Object.getOwnPropertyDescriptor,
    p = Object.getPrototypeOf,
    h = Object.prototype;
  e.exports = function e(t, n, r) {
    if ("string" != typeof n) {
      if (h) {
        var i = p(n);
        i && i !== h && e(t, i, r)
      }
      var a = s(n);
      f && (a = a.concat(f(n)));
      for (var u = l(t), g = l(n), m = 0; m < a.length; ++m) {
        var v = a[m];
        if (!(o[v] || r && r[v] || g && g[v] || u && u[v])) {
          var b = d(n, v);
          try {
            c(t, v, b)
          } catch (e) {}
        }
      }
      return t
    }
    return t
  }
}, function(e, t, n) {
  "use strict";
  (function(e, r) {
    var i, o = n(45);
    i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
    var a = Object(o.a)(i);
    t.a = a
  }).call(this, n(7), n(11)(e))
}, function(e, t, n) {
  e.exports = n(90)
}, function(e, t, n) {
  "use strict";
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  var r = Object.getOwnPropertySymbols,
    i = Object.prototype.hasOwnProperty,
    o = Object.prototype.propertyIsEnumerable;

  function a(e) {
    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
  }
  e.exports = function() {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
      for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
      if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
          return t[e]
        })).join("")) return !1;
      var r = {};
      return "abcdefghijklmnopqrst".split("").forEach((function(e) {
        r[e] = e
      })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
    } catch (e) {
      return !1
    }
  }() ? Object.assign : function(e, t) {
    for (var n, u, l = a(e), c = 1; c < arguments.length; c++) {
      for (var s in n = Object(arguments[c])) i.call(n, s) && (l[s] = n[s]);
      if (r) {
        u = r(n);
        for (var f = 0; f < u.length; f++) o.call(n, u[f]) && (l[u[f]] = n[u[f]])
      }
    }
    return l
  }
}, function(e, t, n) {
  var r = n(18),
    i = n(63),
    o = n(64),
    a = Object.defineProperty;
  t.f = n(6) ? Object.defineProperty : function(e, t, n) {
    if (r(e), t = o(t, !0), r(n), i) try {
      return a(e, t, n)
    } catch (e) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
    return "value" in n && (e[t] = n.value), e
  }
}, function(e, t, n) {
  var r = n(15),
    i = n(14).document,
    o = r(i) && r(i.createElement);
  e.exports = function(e) {
    return o ? i.createElement(e) : {}
  }
}, function(e, t) {
  var n = {}.hasOwnProperty;
  e.exports = function(e, t) {
    return n.call(e, t)
  }
}, function(e, t, n) {
  var r = n(69);
  e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
    return "String" == r(e) ? e.split("") : Object(e)
  }
}, function(e, t) {
  e.exports = function(e) {
    if (null == e) throw TypeError("Can't call method on  " + e);
    return e
  }
}, function(e, t) {
  var n = Math.ceil,
    r = Math.floor;
  e.exports = function(e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
  }
}, function(e, t, n) {
  var r = n(73)("keys"),
    i = n(75);
  e.exports = function(e) {
    return r[e] || (r[e] = i(e))
  }
}, function(e, t) {
  e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t) {
  t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
  var r = n(29);
  e.exports = function(e) {
    return Object(r(e))
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
    var e = this;
    this.sort = function(t) {
      return t.sort(e.compare)
    }, this.move = function(t, n, r) {
      return e.setIndex(t, e.getIndexBetween(t, n, r))
    }, this.compare = function(t, n) {
      for (var r = e.getIndex(t), i = e.getIndex(n), o = 0; o < Math.max(r.length, i.length); o++) {
        var a = e.compareIndexPart(r[o], i[o]);
        if (0 !== a) return a
      }
      return 0
    }, this.getIndexBetween = function(t, n, r) {
      var i = e.getIndex(t),
        o = n ? e.getIndex(n) : [],
        a = r ? e.getIndex(r) : void 0,
        u = [];
      if (a) {
        for (; 0 === e.compareIndexPart(o[u.length], a[u.length]);) u.push(o[u.length]);
        e.compareIndexPart(a[u.length], i) <= 0 && u.push(o[u.length])
      }
      for (; e.compareIndexPart(i, o[u.length]) <= 0;) u.push(o[u.length]);
      return u.push(e.getId(t)), u
    }, this.compareIndexPart = function(e, t) {
      return e == t ? 0 : e ? t && e < t ? -1 : 1 : -1
    }, this.getId = function(e) {
      return "string" == typeof e ? e : e.id
    }, this.getIndex = function(t) {
      return "string" == typeof t ? t : t.index ? "string" == typeof t.index ? JSON.parse(t.index) : t.index : [e.getId(t)]
    }, this.setIndex = function(e, t) {
      return e.index = t
    }
  };
  t.ContinuousSequence = r
}, function(e, t) {
  e.exports = function(e) {
    return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
      enumerable: !0,
      get: function() {
        return e.l
      }
    }), Object.defineProperty(e, "id", {
      enumerable: !0,
      get: function() {
        return e.i
      }
    }), e.webpackPolyfill = 1), e
  }
}, function(e, t) {
  function n(e) {
    var t = new Error("Cannot find module '" + e + "'");
    throw t.code = "MODULE_NOT_FOUND", t
  }
  n.keys = function() {
    return []
  }, n.resolve = n, e.exports = n, n.id = 37
}, function(e, t, n) {
  (function(e, t, r) {
    ! function() {
      var i;
      "undefined" != typeof window && (i = window), void 0 !== e && (i = e);
      var o = (i = i || {}).console || {
        log: function() {}
      };

      function a(e, t) {
        return t ? n(37)(e) : e.slice ? a[r(e)] : function(t, n) {
          e(t = {
            exports: {}
          }), a[r(n)] = t.exports
        };

        function r(e) {
          return e.split("/").slice(-1).toString().replace(".js", "")
        }
      }
      var u = t;
      a((function(e) {
        "undefined" != typeof window && (e.window = window);
        var t = (e.window || e).SEA || {};
        (t.window = e.window) && (t.window.SEA = t);
        try {
          void 0 !== u && (u.exports = t)
        } catch (e) {}
        e.exports = t
      }))(a, "./root"), a((function(e) {
        var t = a("./root");
        try {
          t.window && location.protocol.indexOf("s") < 0 && location.host.indexOf("localhost") < 0 && location.protocol.indexOf("file:") < 0 && (location.protocol = "https:")
        } catch (e) {}
      }))(a, "./https"), a((function(t) {
        if (void 0 !== e) {
          var n = e;
          n.btoa = function(e) {
            return r.from(e, "binary").toString("base64")
          }, n.atob = function(e) {
            return r.from(e, "base64").toString("binary")
          }
        }
      }))(a, "./base64"), a((function(e) {
        function t() {}
        a("./base64"), Object.assign(t, {
          from: Array.from
        }), t.prototype = Object.create(Array.prototype), t.prototype.toString = function(e, t, n) {
          e = e || "utf8", t = t || 0;
          const r = this.length;
          if ("hex" === e) {
            const e = new Uint8Array(this);
            return [...Array((n && n + 1 || r) - t).keys()].map(n => e[n + t].toString(16).padStart(2, "0")).join("")
          }
          return "utf8" === e ? Array.from({
            length: (n || r) - t
          }, (e, n) => String.fromCharCode(this[n + t])).join("") : "base64" === e ? btoa(this) : void 0
        }, e.exports = t
      }))(a, "./array"), a((function(e) {
        a("./base64");
        var t = a("./array");

        function n(...e) {
          return o.warn("new SafeBuffer() is depreciated, please use SafeBuffer.from()"), n.from(...e)
        }
        n.prototype = Object.create(Array.prototype), Object.assign(n, {
          from() {
            if (!Object.keys(arguments).length) throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            const e = arguments[0];
            let n;
            if ("string" == typeof e) {
              const r = arguments[1] || "utf8";
              if ("hex" === r) {
                const r = e.match(/([\da-fA-F]{2})/g).map(e => parseInt(e, 16));
                if (!r || !r.length) throw new TypeError("Invalid first argument for type 'hex'.");
                n = t.from(r)
              } else if ("utf8" === r) {
                const r = e.length,
                  i = new Uint16Array(r);
                Array.from({
                  length: r
                }, (t, n) => i[n] = e.charCodeAt(n)), n = t.from(i)
              } else if ("base64" === r) {
                const r = atob(e),
                  i = r.length,
                  o = new Uint8Array(i);
                Array.from({
                  length: i
                }, (e, t) => o[t] = r.charCodeAt(t)), n = t.from(o)
              } else "binary" === r ? n = t.from(e) : o.info("SafeBuffer.from unknown encoding: " + r);
              return n
            }
            e.byteLength;
            if (e.byteLength ? e.byteLength : e.length) {
              let n;
              return e instanceof ArrayBuffer && (n = new Uint8Array(e)), t.from(n || e)
            }
          },
          alloc: (e, n = 0) => t.from(new Uint8Array(Array.from({
            length: e
          }, () => n))),
          allocUnsafe: e => t.from(new Uint8Array(Array.from({
            length: e
          }))),
          concat(e) {
            if (!Array.isArray(e)) throw new TypeError("First argument must be Array containing ArrayBuffer or Uint8Array instances.");
            return t.from(e.reduce((e, t) => e.concat(Array.from(t)), []))
          }
        }), n.prototype.from = n.from, n.prototype.toString = t.prototype.toString, e.exports = n
      }))(a, "./buffer"), a((function(e) {
        const t = a("./root"),
          n = a("./buffer"),
          r = {
            Buffer: n
          };
        var i = {};
        if (t.window && (r.crypto = window.crypto || window.msCrypto, r.subtle = (r.crypto || i).subtle || (r.crypto || i).webkitSubtle, r.TextEncoder = window.TextEncoder, r.TextDecoder = window.TextDecoder, r.random = e => n.from(r.crypto.getRandomValues(new Uint8Array(n.alloc(e))))), !r.crypto) try {
          var u = a("crypto", 1);
          const {
            TextEncoder: e,
            TextDecoder: t
          } = a("text-encoding", 1);
          Object.assign(r, {
            crypto: u,
            TextEncoder: e,
            TextDecoder: t,
            random: e => n.from(u.randomBytes(e))
          });
          const {
            Crypto: i
          } = a("@peculiar/webcrypto", 1);
          r.ossl = r.subtle = new i({
            directory: "ossl"
          }).subtle
        } catch (e) {
          o.log("node-webcrypto-ossl and text-encoding may not be included by default, please add it to your package.json!"), OSSL_WEBCRYPTO_OR_TEXT_ENCODING_NOT_INSTALLED
        }
        e.exports = r
      }))(a, "./shim"), a((function(e) {
        var t = a("./root"),
          n = (a("./buffer"), {
            pbkdf2: {
              hash: "SHA-256",
              iter: 1e5,
              ks: 64
            },
            ecdsa: {
              pair: {
                name: "ECDSA",
                namedCurve: "P-256"
              },
              sign: {
                name: "ECDSA",
                hash: {
                  name: "SHA-256"
                }
              }
            },
            ecdh: {
              name: "ECDH",
              namedCurve: "P-256"
            },
            jwk: function(e, t) {
              var n = {
                kty: "EC",
                crv: "P-256",
                x: (e = e.split("."))[0],
                y: e[1],
                ext: !0
              };
              return n.key_ops = t ? ["sign"] : ["verify"], t && (n.d = t), n
            },
            recall: {
              validity: 43200,
              hook: function(e) {
                return e
              }
            },
            check: function(e) {
              return "string" == typeof e && "SEA{" === e.slice(0, 4)
            },
            parse: function(e) {
              try {
                var t = "string" == typeof e;
                return t && "SEA{" === e.slice(0, 4) && (e = e.slice(3)), t ? JSON.parse(e) : e
              } catch (e) {}
              return e
            }
          });
        t.opt = n, e.exports = n
      }))(a, "./settings"), a((function(e) {
        var t = a("./shim");
        e.exports = async function(e, n) {
          var r = "string" == typeof e ? e : JSON.stringify(e),
            i = await t.subtle.digest({
              name: n || "SHA-256"
            }, (new t.TextEncoder).encode(r));
          return t.Buffer.from(i)
        }
      }))(a, "./sha256"), a((function(e) {
        const t = a("./shim"),
          n = t.subtle,
          r = t.ossl ? t.ossl : n;
        e.exports = e => r.digest({
          name: "SHA-1"
        }, new ArrayBuffer(e))
      }))(a, "./sha1"), a((function(e) {
        var t = a("./root"),
          n = a("./shim"),
          r = a("./settings"),
          i = a("./sha256");
        t.work = t.work || (async (e, a, u, l) => {
          try {
            var c = (a || {}).epub || a;
            l = l || {};
            if (c instanceof Function && (u = c, c = void 0), c = c || n.random(9), e = "string" == typeof e ? e : JSON.stringify(e), "sha" === (l.name || "").toLowerCase().slice(0, 3)) {
              var s = n.Buffer.from(await i(e, l.name), "binary").toString(l.encode || "base64");
              if (u) try {
                u(s)
              } catch (e) {
                o.log(e)
              }
              return s
            }
            var f = await (n.ossl || n.subtle).importKey("raw", (new n.TextEncoder).encode(e), {
                name: l.name || "PBKDF2"
              }, !1, ["deriveBits"]),
              d = await (n.ossl || n.subtle).deriveBits({
                name: l.name || "PBKDF2",
                iterations: l.iterations || r.pbkdf2.iter,
                salt: (new n.TextEncoder).encode(l.salt || c),
                hash: l.hash || r.pbkdf2.hash
              }, f, l.length || 8 * r.pbkdf2.ks);
            e = n.random(e.length);
            var p = n.Buffer.from(d, "binary").toString(l.encode || "base64");
            if (u) try {
              u(p)
            } catch (e) {
              o.log(e)
            }
            return p
          } catch (e) {
            if (o.log(e), t.err = e, t.throw) throw e;
            return void(u && u())
          }
        }), e.exports = t.work
      }))(a, "./work"), a((function(e) {
        var t = a("./root"),
          n = a("./shim"),
          r = a("./settings");
        t.name = t.name || (async (e, n) => {
          try {
            if (e) try {
              e()
            } catch (e) {
              o.log(e)
            }
            return
          } catch (n) {
            if (o.log(n), t.err = n, t.throw) throw n;
            return void(e && e())
          }
        }), t.pair = t.pair || (async (e, i) => {
          try {
            var a = n.ossl || n.subtle,
              u = await n.subtle.generateKey(r.ecdsa.pair, !0, ["sign", "verify"]).then(async e => {
                var t = {};
                t.priv = (await n.subtle.exportKey("jwk", e.privateKey)).d;
                var r = await n.subtle.exportKey("jwk", e.publicKey);
                return t.pub = r.x + "." + r.y, t
              });
            try {
              var l = await a.generateKey(r.ecdh, !0, ["deriveKey"]).then(async e => {
                var t = {};
                t.epriv = (await a.exportKey("jwk", e.privateKey)).d;
                var n = await a.exportKey("jwk", e.publicKey);
                return t.epub = n.x + "." + n.y, t
              })
            } catch (e) {
              if (t.window) throw e;
              if ("Error: ECDH is not a supported algorithm" != e) throw e;
              o.log("Ignoring ECDH...")
            }
            l = l || {};
            var c = {
              pub: u.pub,
              priv: u.priv,
              epub: l.epub,
              epriv: l.epriv
            };
            if (e) try {
              e(c)
            } catch (e) {
              o.log(e)
            }
            return c
          } catch (n) {
            if (o.log(n), t.err = n, t.throw) throw n;
            return void(e && e())
          }
        }), e.exports = t.pair
      }))(a, "./pair"), a((function(e) {
        var t, n = a("./root"),
          r = a("./shim"),
          i = a("./settings"),
          u = a("./sha256");
        n.sign = n.sign || (async (e, a, l, c) => {
          try {
            if (c = c || {}, (a || c).priv || (a = await n.I(null, {
                what: e,
                how: "sign",
                why: c.why
              })), t === e) throw "`undefined` not allowed.";
            var s = i.parse(e),
              f = c.check = c.check || s;
            if (n.verify && (n.opt.check(f) || f && f.s && f.m) && t !== await n.verify(f, a)) {
              var d = i.parse(f);
              if (c.raw || (d = "SEA" + JSON.stringify(d)), l) try {
                l(d)
              } catch (e) {
                o.log(e)
              }
              return d
            }
            var p = a.pub,
              h = a.priv,
              g = i.jwk(p, h),
              m = await u(s),
              v = await (r.ossl || r.subtle).importKey("jwk", g, i.ecdsa.pair, !1, ["sign"]).then(e => (r.ossl || r.subtle).sign(i.ecdsa.sign, e, new Uint8Array(m)));
            d = {
              m: s,
              s: r.Buffer.from(v, "binary").toString(c.encode || "base64")
            };
            if (c.raw || (d = "SEA" + JSON.stringify(d)), l) try {
              l(d)
            } catch (e) {
              o.log(e)
            }
            return d
          } catch (e) {
            if (o.log(e), n.err = e, n.throw) throw e;
            return void(l && l())
          }
        }), e.exports = n.sign
      }))(a, "./sign"), a((function(e) {
        var t, n = a("./root"),
          r = a("./shim"),
          i = a("./settings"),
          u = a("./sha256");
        n.verify = n.verify || (async (e, a, l, c) => {
          try {
            var s = i.parse(e);
            if (!1 === a) {
              var f = i.parse(s.m);
              if (l) try {
                l(f)
              } catch (e) {
                o.log(e)
              }
              return f
            }
            c = c || {};
            var d, p, h, g = a.pub || a,
              m = n.opt.slow_leak ? await n.opt.slow_leak(g) : await (r.ossl || r.subtle).importKey("jwk", jwk, i.ecdsa.pair, !1, ["verify"]),
              v = await u(s.m);
            try {
              if (d = r.Buffer.from(s.s, c.encode || "base64"), p = new Uint8Array(d), !(h = await (r.ossl || r.subtle).verify(i.ecdsa.sign, m, p, new Uint8Array(v)))) throw "Signature did not match."
            } catch (t) {
              if (n.opt.fallback) return await n.opt.fall_verify(e, a, l, c)
            }
            var b = h ? i.parse(s.m) : t;
            if (l) try {
              l(b)
            } catch (e) {
              o.log(e)
            }
            return b
          } catch (e) {
            if (o.log(e), n.err = e, n.throw) throw e;
            return void(l && l())
          }
        }), e.exports = n.verify;
        var l = {};
        n.opt.slow_leak = e => {
          if (l[e]) return l[e];
          var t = i.jwk(e);
          return l[e] = (r.ossl || r.subtle).importKey("jwk", t, i.ecdsa.pair, !1, ["verify"]), l[e]
        };
        n.opt.fall_verify = async function(e, a, l, c, s) {
          if (s === n.opt.fallback) throw "Signature did not match";
          s = s || 1;
          var f, d, p, h = i.parse(e),
            g = a.pub || a,
            m = await n.opt.slow_leak(g),
            v = s <= n.opt.fallback ? r.Buffer.from(await r.subtle.digest({
              name: "SHA-256"
            }, (new r.TextEncoder).encode(i.parse(h.m)))) : await u(h.m);
          try {
            if (f = r.Buffer.from(h.s, c.encode || "base64"), d = new Uint8Array(f), !(p = await (r.ossl || r.subtle).verify(i.ecdsa.sign, m, d, new Uint8Array(v)))) throw "Signature did not match."
          } catch (e) {
            if (f = r.Buffer.from(h.s, "utf8"), d = new Uint8Array(f), !(p = await (r.ossl || r.subtle).verify(i.ecdsa.sign, m, d, new Uint8Array(v)))) throw "Signature did not match."
          }
          var b = p ? i.parse(h.m) : t;
          if (l) try {
            l(b)
          } catch (e) {
            o.log(e)
          }
          return b
        }, n.opt.fallback = 2
      }))(a, "./verify"), a((function(e) {
        var t = a("./shim"),
          n = a("./sha256");
        e.exports = async (e, r, i) => {
          i = i || {};
          const o = e + (r || t.random(8)).toString("utf8"),
            a = t.Buffer.from(await n(o), "binary");
          return await t.subtle.importKey("raw", new Uint8Array(a), i.name || "AES-GCM", !1, ["encrypt", "decrypt"])
        }
      }))(a, "./aeskey"), a((function(e) {
        var t = a("./root"),
          n = a("./shim"),
          r = (a("./settings"), a("./aeskey"));
        t.encrypt = t.encrypt || (async (e, i, a, u) => {
          try {
            u = u || {};
            var l = (i || u).epriv || i;
            if (void 0 === e) throw "`undefined` not allowed.";
            l || (l = (i = await t.I(null, {
              what: e,
              how: "encrypt",
              why: u.why
            })).epriv || i);
            var c = "string" == typeof e ? e : JSON.stringify(e),
              s = {
                s: n.random(9),
                iv: n.random(15)
              },
              f = await r(l, s.s, u).then(e => n.subtle.encrypt({
                name: u.name || "AES-GCM",
                iv: new Uint8Array(s.iv)
              }, e, (new n.TextEncoder).encode(c))),
              d = {
                ct: n.Buffer.from(f, "binary").toString(u.encode || "base64"),
                iv: s.iv.toString(u.encode || "base64"),
                s: s.s.toString(u.encode || "base64")
              };
            if (u.raw || (d = "SEA" + JSON.stringify(d)), a) try {
              a(d)
            } catch (e) {
              o.log(e)
            }
            return d
          } catch (e) {
            if (o.log(e), t.err = e, t.throw) throw e;
            return void(a && a())
          }
        }), e.exports = t.encrypt
      }))(a, "./encrypt"), a((function(e) {
        var t = a("./root"),
          n = a("./shim"),
          r = a("./settings"),
          i = a("./aeskey");
        t.decrypt = t.decrypt || (async (e, a, u, l) => {
          try {
            l = l || {};
            var c = (a || l).epriv || a;
            c || (c = (a = await t.I(null, {
              what: e,
              how: "decrypt",
              why: l.why
            })).epriv || a);
            var s, f, d, p = r.parse(e);
            try {
              s = n.Buffer.from(p.s, l.encode || "base64"), f = n.Buffer.from(p.iv, l.encode || "base64"), d = n.Buffer.from(p.ct, l.encode || "base64");
              var h = await i(c, s, l).then(e => n.subtle.decrypt({
                name: l.name || "AES-GCM",
                iv: new Uint8Array(f)
              }, e, new Uint8Array(d)))
            } catch (n) {
              if ("utf8" === l.encode) throw "Could not decrypt";
              if (t.opt.fallback) return l.encode = "utf8", await t.decrypt(e, a, u, l)
            }
            var g = r.parse(new n.TextDecoder("utf8").decode(h));
            if (u) try {
              u(g)
            } catch (e) {
              o.log(e)
            }
            return g
          } catch (e) {
            if (o.log(e), t.err = e, t.throw) throw e;
            return void(u && u())
          }
        }), e.exports = t.decrypt
      }))(a, "./decrypt"), a((function(e) {
        var t = a("./root"),
          n = a("./shim"),
          r = a("./settings");
        t.secret = t.secret || (async (e, a, u, l) => {
          try {
            l = l || {}, a && a.epriv && a.epub || (a = await t.I(null, {
              what: e,
              how: "secret",
              why: l.why
            }));
            var c = e.epub || e,
              s = a.epub,
              f = a.epriv,
              d = n.ossl || n.subtle,
              p = i(c),
              h = Object.assign({
                public: await d.importKey(...p, !0, [])
              }, r.ecdh),
              g = i(s, f),
              m = await d.importKey(...g, !1, ["deriveKey"]).then(async e => {
                var t = await d.deriveKey(h, e, {
                  name: "AES-GCM",
                  length: 256
                }, !0, ["encrypt", "decrypt"]);
                return d.exportKey("jwk", t).then(({
                  k: e
                }) => e)
              });
            if (u) try {
              u(m)
            } catch (e) {
              o.log(e)
            }
            return m
          } catch (e) {
            if (o.log(e), t.err = e, t.throw) throw e;
            return void(u && u())
          }
        });
        var i = (e, t) => {
          var [n, i] = e.split("."), o = t ? {
            d: t
          } : {};
          return ["jwk", Object.assign(o, {
            x: n,
            y: i,
            kty: "EC",
            crv: "P-256",
            ext: !0
          }), r.ecdh]
        };
        e.exports = t.secret
      }))(a, "./secret"), a((function(e) {
        var t = a("./shim"),
          n = a("./root");
        n.work = a("./work"), n.sign = a("./sign"), n.verify = a("./verify"), n.encrypt = a("./encrypt"), n.decrypt = a("./decrypt"), n.random = n.random || t.random, n.Buffer = n.Buffer || a("./buffer"), n.keyid = n.keyid || (async e => {
          try {
            const t = r.concat(e.replace(/-/g, "+").replace(/_/g, "/").split(".").map(e => r.from(e, "base64"))),
              n = r.concat([r.from([153, t.length / 256, t.length % 256]), t]),
              i = await sha1hash(n),
              o = r.from(i, "binary");
            return o.toString("hex", o.length - 8)
          } catch (e) {
            throw o.log(e), e
          }
        });
        var i = (n.window || {}).Gun || a((void 0 === u ? "." : "") + "./gun", 1);
        i.SEA = n, n.GUN = n.Gun = i, e.exports = n
      }))(a, "./sea"), a((function(e) {
        a("./sea").Gun.chain.then = function(e) {
          var t = this,
            n = new Promise((function(e, n) {
              t.once(e)
            }));
          return e ? n.then(e) : n
        }
      }))(a, "./then"), a((function(e) {
        var t = a("./sea").Gun;
        a("./then");

        function n(e) {
          this._ = {
            $: this
          }
        }
        n.prototype = function() {
          function e() {}
          return e.prototype = t.chain, new e
        }(), n.prototype.constructor = n, t.chain.user = function(e) {
          var r, i = this.back(-1);
          if (e) return i.get("~" + e);
          if (r = i.back("user")) return r;
          var o = i = i._,
            a = o.opt.uuid || t.state.lex;
          return (o = (r = o.user = this.chain(new n))._).opt = {}, o.opt.uuid = function(e) {
            var t = a(),
              n = i.user;
            return n && (n = n.is) && (n = n.pub) ? (t = t + "~" + n + ".", e && e.call && e(null, t), t) : t
          }, r
        }, t.User = n, e.exports = n
      }))(a, "./user"), a((function(e) {
        var t = a("./sea"),
          n = a("./user"),
          r = (a("./settings"), t.Gun),
          i = function() {};
        n.prototype.create = function(e, n, o, a) {
          var u = this,
            l = u._,
            c = u.back(-1);
          if (o = o || i, l.ing) return o({
            err: r.log("User is already being created or authenticated!"),
            wait: !0
          }), u;
          l.ing = !0, a = a || {};
          var s = {};
          return s.a = function(e) {
            if (s.pubs = e, e && !a.already) {
              var i = {
                err: r.log("User already created!")
              };
              return l.ing = !1, o(i), void u.leave()
            }
            s.salt = r.text.random(64), t.work(n, s.salt, s.b)
          }, s.b = function(e) {
            s.proof = e, t.pair(s.c)
          }, s.c = function(t) {
            var n;
            s.pair = t || {}, (n = l.root.user) && (n._.sea = t, n.is = {
              pub: t.pub,
              epub: t.epub,
              alias: e
            }), s.data = {
              pub: t.pub
            }, s.d()
          }, s.d = function() {
            s.data.alias = e, s.e()
          }, s.e = function() {
            s.data.epub = s.pair.epub, t.encrypt({
              priv: s.pair.priv,
              epriv: s.pair.epriv
            }, s.proof, s.f, {
              raw: 1
            })
          }, s.f = function(e) {
            s.data.auth = JSON.stringify({
              ek: e,
              s: s.salt
            }), s.g(s.data.auth)
          }, s.g = function(t) {
            var a;
            s.data.auth = s.data.auth || t, c.get(a = "~" + s.pair.pub).put(s.data), c.get("~@" + e).put(r.obj.put({}, a, r.val.link.ify(a))), setTimeout((function() {
              l.ing = !1, o({
                ok: 0,
                pub: s.pair.pub
              }), i === o && u.auth(e, n)
            }), 10)
          }, c.get("~@" + e).once(s.a), u
        }, n.prototype.auth = function(e, n, i, a) {
          var u = this,
            l = u._,
            c = u.back(-1);
          if (i = i || function() {}, l.ing) return i({
            err: r.log("User is already being created or authenticated!"),
            wait: !0
          }), u;
          l.ing = !0, a = a || {};
          var s, f = e && (e.pub || e.epub) ? e : n && (n.pub || n.epub) ? n : null,
            d = {};
          return d.a = function(e) {
            if (!e) return d.b();
            if (!e.pub) {
              var t = [];
              return r.node.is(e, (function(e) {
                t.push(e)
              })), d.b(t)
            }
            if (d.name) return d.f(e);
            d.c((d.data = e).auth)
          }, d.b = function(e) {
            var t = (d.list = (d.list || []).concat(e || [])).shift();
            if (s === t) return d.name ? d.err("Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.") : d.err("Wrong user or password.");
            c.get(t).once(d.a)
          }, d.c = function(e) {
            return s === e ? d.b() : r.text.is(e) ? d.c(r.obj.ify(e)) : void t.work(n, (d.auth = e).s, d.d, d.enc)
          }, d.d = function(e) {
            t.decrypt(d.auth.ek, e, d.e, d.enc)
          }, d.e = function(e) {
            if (s === e) return d.enc ? (d.enc = null, d.b()) : (d.enc = {
              encode: "utf8"
            }, d.c(d.auth));
            d.half = e, d.f(d.data)
          }, d.f = function(e) {
            if (!e || !e.pub) return d.b();
            var t = d.half || {};
            d.g({
              pub: e.pub,
              epub: e.epub,
              priv: t.priv,
              epriv: t.epriv
            })
          }, d.g = function(o) {
            d.pair = o;
            var s = c._.user,
              f = s._,
              p = (f.tag, f.opt);
            (f = s._ = c.get("~" + o.pub)._).opt = p, s.is = {
              pub: o.pub,
              epub: o.epub,
              alias: e
            }, f.sea = d.pair, l.ing = !1;
            try {
              n && !r.obj.has(r.obj.ify(l.root.graph["~" + o.pub].auth), ":") && (a.shuffle = a.change = n)
            } catch (e) {}
            if (a.change ? d.z() : i(f), t.window && (u.back("user")._.opt || a).remember) try {
              var h = {};
              (h = window.sessionStorage).recall = !0, h.alias = e, h.tmp = n
            } catch (e) {}
            try {
              c._.on("auth", f)
            } catch (e) {
              r.log("Your 'auth' callback crashed with:", e)
            }
          }, d.z = function() {
            d.salt = r.text.random(64), t.work(a.change, d.salt, d.y)
          }, d.y = function(e) {
            t.encrypt({
              priv: d.pair.priv,
              epriv: d.pair.epriv
            }, e, d.x, {
              raw: 1
            })
          }, d.x = function(e) {
            d.w(JSON.stringify({
              ek: e,
              s: d.salt
            }))
          }, d.w = function(e) {
            if (a.shuffle) {
              o.log("migrate core account from UTF8 & shuffle");
              var t = r.obj.to(d.data);
              r.obj.del(t, "_"), t.auth = e, c.get("~" + d.pair.pub).put(t)
            }
            c.get("~" + d.pair.pub).get("auth").put(e, i)
          }, d.err = function(e) {
            var t = {
              err: r.log(e || "User cannot be found!")
            };
            l.ing = !1, i(t)
          }, d.plugin = function(e) {
            if (!(d.name = e)) return d.err();
            var t = [e];
            "~" !== e[0] && (t[1] = "~" + e, t[2] = "~@" + e), d.b(t)
          }, f ? d.g(f) : e ? c.get("~@" + e).once(d.a) : e || n || t.name(d.plugin), u
        }, n.prototype.pair = function() {
          o.log("user.pair() IS DEPRECATED AND WILL BE DELETED!!!");
          return !!this.is && this._.sea
        }, n.prototype.leave = function(e, n) {
          var r = this.back(-1)._.user;
          if (r && (delete r.is, delete r._.is, delete r._.sea), t.window) try {
            var i = {};
            delete(i = window.sessionStorage).alias, delete i.tmp, delete i.recall
          } catch (e) {}
          return this
        }, n.prototype.delete = async function(e, t, n) {
          this.back(-1);
          var o = this.back("user");
          try {
            o.auth(e, t, (function(e) {
              (o.is || {}).pub;
              o.map().once((function() {
                this.put(null)
              })), o.leave(), (n || i)({
                ok: 0
              })
            }))
          } catch (e) {
            r.log("User.delete failed! Error:", e)
          }
          return this
        }, n.prototype.recall = function(e, n) {
          var r = this.back(-1);
          if ((e = e || {}) && e.sessionStorage) {
            if (t.window) try {
              var i;
              (i = window.sessionStorage) && (r._.opt.remember = !0, (this.back("user")._.opt || e).remember = !0, (i.recall || i.alias && i.tmp) && r.user().auth(i.alias, i.tmp, n))
            } catch (e) {}
            return this
          }
          return this
        }, n.prototype.alive = async function() {
          const e = this.back(-1);
          try {
            return await authRecall(e), e._.user._
          } catch (e) {
            const t = "No session!";
            throw r.log(t), {
              err: t
            }
          }
        }, n.prototype.trust = async function(e) {
          r.is(e) && e.get("pub").get((e, t) => {
            o.log(e, t)
          })
        }, n.prototype.grant = function(e, n) {
          o.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
          var r = this.back(-1).user(),
            i = r.pair(),
            a = "";
          return this.back((function(e) {
            e.is || (a += e.get || "")
          })), async function() {
            var o, u = await r.get("trust").get(i.pub).get(a).then();
            (u = await t.decrypt(u, i)) || (u = t.random(16).toString(), o = await t.encrypt(u, i), r.get("trust").get(i.pub).get(a).put(o));
            var l = e.get("pub").then(),
              c = e.get("epub").then();
            l = await l, c = await c;
            var s = await t.secret(c, i);
            o = await t.encrypt(u, s), r.get("trust").get(l).get(a).put(o, n)
          }(), this
        }, n.prototype.secret = function(e, n) {
          o.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
          var r = this,
            i = r.back(-1).user(),
            a = i.pair(),
            u = "";
          return r.back((function(e) {
            e.is || (u += e.get || "")
          })), async function() {
            var o, l = await i.get("trust").get(a.pub).get(u).then();
            (l = await t.decrypt(l, a)) || (l = t.random(16).toString(), o = await t.encrypt(l, a), i.get("trust").get(a.pub).get(u).put(o)), o = await t.encrypt(e, l), r.put(o, n)
          }(), r
        }, e.exports = n
      }))(a, "./create"), a((function(e) {
        const t = a("./sea"),
          n = t.Gun;

        function r(e) {
          var r, i = this.to,
            o = (e.$._.put, 0);
          n.node.is(e.put, (function(a, u, s) {
            var f = n.obj.ify(a) || c;
            l === f[":"] ? t.opt.check(a) && (o++, t.verify(a, !1, (function(n) {
              o--, s[u] = t.opt.unpack(n, u, s), r && !o && (o = -1) && i.next(e)
            }))) : s[u] = t.opt.unpack(f)
          })), (r = !0) && !o && i.next(e)
        }

        function i(e) {
          if ((e._ || c).user) return this.to.next(e);
          var t = this.as;
          (e._ || (e._ = function() {})).user = t.user, u.call(this, e)
        }

        function u(e) {
          var r = this.as,
            i = (r.sea, this.to);
          if (r.opt.faith && (e._ || c).faith) this.to.next(e);
          else {
            if (e.get) {
              var a = e.get["#"];
              if (a) return "string" != typeof a ? i.next(e) : "alias" === a ? i.next(e) : (a.slice(0, 2), i.next(e))
            }
            if (e.put) {
              var l, s = {},
                f = {};
              return f.node = function(e, t) {
                if (n.obj.empty(e, "_")) return s["node" + t] = 0;
                n.obj.map(e, f.way, {
                  soul: t,
                  node: e
                })
              }, f.way = function(t, n) {
                var r, i = this.soul,
                  o = this.node;
                "_" !== n && ("~@" !== i ? "~@" !== i.slice(0, 2) ? "~" !== i.slice(0, 1) || 2 !== (r = i.slice(1)).split(".").length ? f.any(t, n, o, i, (e._ || c).user) : f.pub(t, n, o, i, r, (e._ || c).user) : f.pubs(t, n, o, i) : f.alias(t, n, o, i))
              }, f.alias = function(e, t, r, i) {
                return e ? "~@" + t === n.val.link.is(e) ? s["alias" + t] = 0 : void f.end({
                  err: "Mismatching alias."
                }) : f.end({
                  err: "Data must exist!"
                })
              }, f.pubs = function(e, t, r, i) {
                return e ? t === n.val.link.is(e) ? s["pubs" + i + t] = 0 : void f.end({
                  err: "Alias must match!"
                }) : f.end({
                  err: "Alias must exist!"
                })
              }, f.pub = function(i, o, a, u, c, d) {
                var p;
                if ("pub" === o) return i === c ? s["pub" + u + o] = 0 : f.end({
                  err: "Account must match!"
                });
                s["user" + u + o] = 1, n.is(e.$) && d && d.is && c === d.is.pub ? t.sign(t.opt.prep(p = t.opt.parse(i), o, a, u), d._.sea, (function(e) {
                  var d;
                  if (l === e) return f.end({
                    err: t.err || "Pub signature fail."
                  });
                  (d = n.val.link.is(i)) && ((r.sea.own[d] = r.sea.own[d] || {})[c] = !0), a[o] = JSON.stringify({
                    ":": t.opt.unpack(e.m),
                    "~": e.s
                  }), s["user" + u + o] = 0, f.end({
                    ok: 1
                  })
                }), {
                  check: t.opt.pack(p, o, a, u),
                  raw: 1
                }) : t.verify(t.opt.pack(i, o, a, u), c, (function(e) {
                  var i;
                  if (e = t.opt.unpack(e, o, a), l === e) return f.end({
                    err: "Unverified data."
                  });
                  (i = n.val.link.is(e)) && c === t.opt.pub(i) && ((r.sea.own[i] = r.sea.own[i] || {})[c] = !0), s["user" + u + o] = 0, f.end({
                    ok: 1
                  })
                }))
              }, f.any = function(i, o, a, u, c) {
                var d, p;
                return (p = t.opt.pub(u)) ? n.is(e.$) && c && c.is && p === c.is.pub ? (s["any" + u + o] = 1, void t.sign(t.opt.prep(d = t.opt.parse(i), o, a, u), c._.sea, (function(e) {
                  if (l === e) return f.end({
                    err: "My signature fail."
                  });
                  a[o] = JSON.stringify({
                    ":": t.opt.unpack(e.m),
                    "~": e.s
                  }), s["any" + u + o] = 0, f.end({
                    ok: 1
                  })
                }), {
                  check: t.opt.pack(d, o, a, u),
                  raw: 1
                })) : (s["any" + u + o] = 1, void t.verify(t.opt.pack(i, o, a, u), p, (function(e) {
                  var i;
                  if (e = t.opt.unpack(e, o, a), l === e) return f.end({
                    err: "Mismatched owner on '" + o + "'."
                  });
                  (i = n.val.link.is(e)) && p === t.opt.pub(i) && ((r.sea.own[i] = r.sea.own[i] || {})[p] = !0), s["any" + u + o] = 0, f.end({
                    ok: 1
                  })
                }))) : r.opt.secure ? void f.end({
                  err: "Soul is missing public key at '" + o + "'."
                }) : (s["any" + u + o] = 1, void r.on("secure", (function(e) {
                  this.off(), s["any" + u + o] = 0, r.opt.secure && (e = null), f.end(e || {
                    err: "Data cannot be modified."
                  })
                })).on.on("secure", e))
              }, f.end = function(t) {
                f.err || ((f.err = t.err) || t.no ? o.log("NO!", f.err, e.put) : f.end.ed && (n.obj.map(s, (function(e) {
                  if (e) return !0
                })) || ((e._ || {}).user = r.user || u, i.next(e))))
              }, n.obj.map(e.put, f.node), void f.end({
                end: f.end.ed = !0
              })
            }
            i.next(e)
          }
        }
        n.on("opt", (function(e) {
          e.sea || (e.sea = {
            own: {}
          }, e.on("in", u, e), e.on("out", i, e), e.on("node", r, e)), this.to.next(e)
        })), t.opt.pub = function(e) {
          if (e && (e = e.split("~")) && (e = e[1]) && (e = e.split(".")) && !(2 > e.length)) return e = e.slice(0, 2).join(".")
        }, t.opt.prep = function(e, r, i, o) {
          return {
            "#": o,
            ".": r,
            ":": t.opt.parse(e),
            ">": n.state.is(i, r)
          }
        }, t.opt.pack = function(e, r, i, o) {
          if (t.opt.check(e)) return e;
          var a = n.obj.ify(e) || c,
            u = a["~"];
          return u ? {
            m: {
              "#": o,
              ".": r,
              ":": a[":"],
              ">": n.state.is(i, r)
            },
            s: u
          } : e
        }, t.opt.unpack = function(e, r, i) {
          var o;
          if (l !== e) {
            if (e && l !== (o = e[":"])) return o;
            if (r && i) {
              if (e === i[r]) return e;
              if (!t.opt.check(i[r])) return e;
              var a = n.node.soul(i),
                u = n.state.is(i, r);
              return e && 4 === e.length && a === e[0] && r === e[1] && s(u) === s(e[3]) ? e[2] : u < t.opt.shuffle_attack ? e : void 0
            }
          }
        }, t.opt.shuffle_attack = 15463296e5;
        var l, c = function() {},
          s = Math.floor;
        n.val.rel.is
      }))(a, "./index")
    }()
  }).call(this, n(7), n(36)(e), n(99).Buffer)
}, function(e, t, n) {
  ! function() {
    function t() {
      var e = function(t, n, r) {
        if (t = "" + t, r || i === n || (e.last = t < e.last ? e.last : t, delete(e.$ || {})[u]), r = r || e.$ || (e.$ = {}), !t && Object.keys(r).length) return r;
        for (var a, l, c = 0, s = t.length - 1, f = t[c]; !(a = r[f]) && c < s;) f += t[++c];
        if (a) {
          if (c != s) return i !== n && delete a[u], e(t.slice(++c), n, a || (a = {}));
          if (i === n) return i === (l = a[""]) ? a : l;
          a[""] = n
        } else {
          if (!o(r, (function(e, o) {
              var a = 0,
                u = "";
              if ((o || "").length)
                for (; o[a] == t[a];) u += o[a++];
              if (u) {
                if (i === n) {
                  if (a <= s) return;
                  return (l || (l = {}))[o.slice(a)] = e
                }
                var c = {};
                return c[o.slice(a)] = e, "" === (a = t.slice(a)) ? c[""] = n : (c[a] = {})[""] = n, r[u] = c, delete r[o], !0
              }
            }))) {
            if (i === n) return;
            (r[f] || (r[f] = {}))[""] = n
          }
          if (i === n) return l
        }
      };
      return e
    }
    if (t.map = function e(t, n, r, o) {
        o = o || [];
        var l = "function" == typeof t ? t.$ || {} : t;
        if (l) {
          var c, s = (l[u] || a).sort || (l[u] = function e() {
            return e.sort = Object.keys(l).sort(), e
          }()).sort;
          (c = (r = !0 === r ? {
            branch: !0
          } : r || {}).reverse) && (s = s.slice().reverse());
          for (var f = r.start, d = r.end, p = 0, h = s.length; p < h; p++) {
            var g, m, v, b = s[p],
              y = l[b];
            if (y && "" !== b && u !== b && ((m = o.slice()).push(b), v = m.join(""), !(i !== f && v < (f || "").slice(0, v.length) || i !== d && (d || "￿") < v))) {
              if (c && (g = e(y, n, r, m), i !== g)) return g;
              if (i !== (g = y[""])) {
                if (g = n(g, v, b, o), i !== g) return g
              } else if (r.branch && (g = n(i, v, b, o), i !== g)) return g;
              if (o = m, !c && (g = e(y, n, r, o), i !== g)) return g;
              o.pop()
            }
          }
        }
      }, Object.keys = Object.keys || function(e) {
        return o(e, (function(e, t, n) {
          n(t)
        }))
      }, "undefined" != typeof window) {
      var r = window.Gun;
      window.Radix = t
    } else {
      r = n(8);
      try {
        e.exports = t
      } catch (e) {}
    }
    var i, o = r.obj.map,
      a = {},
      u = String.fromCharCode(24)
  }()
}, function(e, t, n) {
  ! function() {
    function t(e) {
      (e = e || {}).log = e.log || console.log, e.file = String(e.file || "radata");
      var n = (t.has || (t.has = {}))[e.file];
      if (n) return n;

      function r(e) {
        return encodeURIComponent(e).replace(/\*/g, "%2A")
      }

      function a(e) {
        return m !== e && (!e || "object" != typeof e)
      }
      e.pack = e.pack || .3 * (e.memory ? 1e3 * e.memory * 1e3 : 1399e6), e.until = e.until || e.wait || 250, e.batch = e.batch || 1e4, e.chunk = e.chunk || 1048576, e.code = e.code || {}, e.code.from = e.code.from || "!", e.jsonify = !0;
      var u = i.obj.map;
      if (!e.store) return e.log("ERROR: Radisk needs `opt.store` interface with `{get: fn, put: fn (, list: fn)}`!");
      if (!e.store.put) return e.log("ERROR: Radisk needs `store.put` interface with `(file, data, cb)`!");
      if (!e.store.get) return e.log("ERROR: Radisk needs `store.get` interface with `(file, cb)`!");
      e.store.list;
      var l, c, s, f, d, p, h = function(t, n, r) {
        if (t = "" + t, n instanceof Function) {
          var i = r || {};
          if (r = n, n = h.batch(t), m !== n && (r(m, h.range(n, i), i), a(n))) return;
          return h.thrash.at && (n = h.thrash.at(t), m !== n && (r(m, h.range(n, i), i), a(n))) ? void r(m, n, i) : h.read(t, r, i)
        }
        if (h.batch(t, n), r && h.batch.acks.push(r), ++h.batch.ed >= e.batch) return h.thrash();
        h.batch.to || (h.batch.to = setTimeout(h.thrash, e.until || 1))
      };
      h.batch = o(), h.batch.acks = [], h.batch.ed = 0, h.thrash = function() {
          var t = h.thrash;
          if (t.ing) return t.more = !0;
          t.more = !1, t.ing = !0;
          var n = t.at = h.batch,
            r = 0;
          clearTimeout(h.batch.to), h.batch = null, h.batch = o(), h.batch.acks = [], h.batch.ed = 0, h.save(n, (function(i, o) {
            ++r > 1 ? e.log("RAD ERR: Radisk has callbacked multiple times, please report this as a BUG at github.com/amark/gun/issues ! " + r) : (i && e.log("err", i), u(n.acks, (function(e) {
              e(i, o)
            })), t.at = null, t.ing = !1, t.more && t())
          }))
        }, h.save = function(t, n) {
          var r = function() {};
          r.find = function(e, t) {
            if (!(t < r.start)) return r.start = t, h.list(r.lex), !0
          }, r.lex = function(t) {
            if (!(t = m === t ? m : decodeURIComponent(t)) || t > r.start) return r.mix(r.file || e.code.from, r.start, r.end = t), !0;
            r.file = t
          }, r.mix = function(e, i, a) {
            r.start = r.end = r.file = m, h.parse(e, (function(u, l) {
              if (u) return n(u);
              l = l || o(), o.map(t, (function(e, t) {
                if (!(t < i)) return a && a < t ? r.start = t : void l(t, e)
              })), h.write(e, l, r.next)
            }))
          }, r.next = function(e, i) {
            return (r.err = e) ? n(e) : r.start ? o.map(t, r.find) : void n(e, i)
          }, o.map(t, r.find)
        }, h.write = function(n, i, a, u) {
          u = "object" == typeof u ? u : {
            force: u
          };
          var l = function() {};
          if (l.text = "", l.count = 0, l.file = n, l.each = function(n, r, c, s) {
              if (m !== n && l.count++, e.pack <= (n || "").length) return a("Record too big!"), !0;
              var f = t.encode(s.length) + "#" + t.encode(c) + (m === n ? "" : ":" + t.encode(n)) + "\n";
              if (e.chunk < l.text.length + f.length && 1 < l.count && !u.force) return l.text = "", l.limit = Math.ceil(l.count / 2), l.count = 0, l.sub = o(), o.map(i, l.slice), !0;
              l.text += f
            }, l.write = function() {
              var t = r(n);
              e.store.put(t, l.text, (function(e) {
                if (e) return a(e);
                h.list.add(t, a)
              }))
            }, l.slice = function(e, t) {
              if (!(t < l.file)) {
                if (l.limit < ++l.count) {
                  var n = l.file;
                  return l.file = t, l.count = 0, h.write(n, l.sub, l.next, u), !0
                }
                l.sub(t, e)
              }
            }, l.next = function(e) {
              if (e) return a(e);
              l.sub = o(), o.map(i, l.slice) || h.write(l.file, l.sub, a, u)
            }, e.jsonify) return h.write.jsonify(l, n, i, a, u);
          o.map(i, l.each, !0) || l.write()
        }, h.write.jsonify = function(t, n, r, i, a) {
          var u;
          try {
            u = JSON.stringify(r.$)
          } catch (e) {
            return i("Record too big!")
          }
          e.chunk < u.length && !a.force && o.map(r, t.each, !0) || (t.text = u, t.write())
        }, h.range = function(e, t) {
          if (e && t) {
            if (m === t.start && m === t.end) return e;
            if (a(e)) return e;
            var n = o();
            return o.map(e, (function(e, t) {
              n(t, e)
            }), t), n("")
          }
        },
        function() {
          var t = {};

          function n(e, t) {
            return t
          }
          h.read = function(i, l, c) {
            if (c = c || {}, g && !c.next) {
              var s = g(i);
              if (a(s)) return void l(m, s, c)
            }
            c.span = m !== c.start || m !== c.end;
            var f = function() {};
            f.lex = function(e) {
              var n;
              if (e = m === e ? m : decodeURIComponent(e), n = c.next || i || (c.reverse ? c.end || "￿" : c.start || ""), !e || (c.reverse ? e < n : e > n)) return +new Date, (c.next || c.reverse) && (f.file = e), (n = t[f.file]) ? (n.push({
                key: i,
                ack: l,
                file: f.file,
                opt: c
              }), !0) : (t[f.file] = [{
                key: i,
                ack: l,
                file: f.file,
                opt: c
              }], f.file ? (h.parse(f.file, f.it), !0) : (f.it(null, m, {}), !0));
              f.file = e
            }, f.it = function(n, r, i) {
              (f.err = n) && e.log("err", n), f.info = i, r && (g = f.disk = r), r = t[f.file], delete t[f.file], +new Date, u(r, f.ack)
            }, f.ack = function(e) {
              if (e.ack) {
                var t = e.key,
                  i = e.opt,
                  a = f.info,
                  u = f.disk || v,
                  l = h.range(u(t), i),
                  c = u.last || o.map(u, n, r);
                if (i.parsed = (i.parsed || 0) + (a.parsed || 0), i.chunks = (i.chunks || 0) + 1, i.more = !0, !e.file || !i.span && c === t || !i.span && c && c > t && 0 != c.indexOf(t)) return i.more = m, void e.ack(f.err, l, i);
                m !== l && (e.ack(f.err, l, i), i.parsed >= i.limit) || (i.next = e.file, h.read(t, e.ack, i))
              }
            }, c.reverse && (f.lex.reverse = !0), h.list(f.lex)
          };
          var r = {
            reverse: !0
          }
        }(), l = {}, c = String.fromCharCode(31), h.parse = function(n, i, a) {
          var s;
          if (s = l[n]) return s.push(i);
          s = l[n] = [i];
          var f = function() {},
            d = {};
          if (f.disk = o(), f.read = function(t, r) {
              if (delete l[n], (f.err = t) || (f.not = !r)) return u(s, f.ack);
              if ("string" != typeof r) {
                try {
                  e.pack <= r.length ? f.err = "Chunk too big!" : r = r.toString()
                } catch (e) {
                  f.err = e
                }
                if (f.err) return u(s, f.ack)
              }
              if (d.parsed = r.length, e.jsonify || "{" === r[0]) {
                try {
                  var i = JSON.parse(r);
                  return f.disk.$ = i, void u(s, f.ack)
                } catch (e) {
                  o = e
                }
                if ("{" === r[0]) return f.err = o || "JSON error!", u(s, f.ack)
              }
              var o, a, c, p, h = [];
              if (!(o = f.split(r)) || 0 !== o[1]) return f.err = "File '" + n + "' does not have root radix! ", u(s, f.ack);
              for (; o;) c = p = m, a = o[1], "#" == (o = f.split(o[2]) || "")[0] && (c = o[1], a <= (h = h.slice(0, a)).length && h.push(c)), "\n" != (o = f.split(o[2]) || "")[0] && ("=" != o[0] && ":" != o[0] || (p = o[1]), m !== c && m !== p && f.disk(h.join(""), p), o = f.split(o[2]));
              u(s, f.ack)
            }, f.split = function(e) {
              if (e) {
                var n, r, i = [],
                  o = {};
                if (n = e.indexOf(c), e[n]) return r = e.slice(0, n), i[0] = r, i[1] = t.decode(e.slice(n), o), i[2] = e.slice(n + o.i), i
              }
            }, f.ack = function(e) {
              if (e) return f.err || f.not ? e(f.err, m, d) : void e(m, f.disk, d)
            }, a) return f.read(null, a);
          e.store.get(r(n), f.read)
        }, d = String.fromCharCode(28), p = r(d), h.list = function(e) {
          if (s) {
            var t = {
              reverse: e.reverse ? 1 : 0
            };
            o.map(s, (function(t, n) {
              return e(n)
            }), t) || e()
          } else {
            if (f) return f.push(e);
            f = [e], h.parse(d, h.list.init)
          }
        }, h.list.add = function(e, t) {
          if (s(e) || e === p) return t(m, 1);
          s(e, !0), t.listed = (t.listed || 0) + 1, h.write(d, s, (function(e, n) {
            if (e) return t(e);
            t.listed = (t.listed || 0) - 1, 0 === t.listed && t(m, 1)
          }), !0)
        }, h.list.init = function(t, n) {
          if (t) return e.log("list", t), void setTimeout((function() {
            h.parse(d, h.list.init)
          }), 1e3);
          n ? h.list.drain(n) : e.store.list ? e.store.list((function(e) {
            if (s = s || o(), !e) return h.list.drain(s);
            h.list.add(e, v)
          })) : h.list.drain(o())
        }, h.list.drain = function(e, t) {
          h.list.dir = s = e, t = f, f = null, i.list.map(t, (function(e) {
            h.list(e)
          }))
        };
      var g, m, v = function() {};
      return t.has[e.file] = h, h
    }
    var r;
    if (r = String.fromCharCode(31), t.encode = function(e, t, n) {
        var o, a = n = n || r;
        if ("string" == typeof e) {
          for (var u = e.indexOf(n); - 1 != u;) a += n, u = e.indexOf(n, u + 1);
          return a + '"' + e + n
        }
        return e && e["#"] && (o = i.val.link.is(e)) ? a + "#" + o + a : i.num.is(e) ? a + "+" + (e || 0) + a : null === e ? a + " " + a : !0 === e ? a + "+" + a : !1 === e ? a + "-" + a : void 0
      }, t.decode = function(e, t, n) {
        var o, a, u, l = -1,
          c = 0;
        if ((n = n || r) === e[0]) {
          for (; n === e[++l];) ++c;
          for (u = e[a = c] || !0; --c >= 0;) l = e.indexOf(n, l + 1);
          return -1 == l && (l = e.length), o = e.slice(a + 1, l), t && (t.i = l + 1), '"' === u ? o : "#" === u ? i.val.link.ify(o) : "+" === u ? 0 === o.length || parseFloat(o) : " " === u ? null : "-" !== u && void 0
        }
      }, "undefined" != typeof window) {
      var i = window.Gun,
        o = window.Radix;
      window.Radisk = t
    } else {
      i = n(8), o = n(39);
      try {
        e.exports = t
      } catch (e) {}
    }
    t.Radix = o
  }()
}, function(e, t, n) {
  "use strict";
  (function(e) {
    var r, i = n(0),
      o = n.n(i),
      a = n(49),
      u = n(42);
    (r = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && r(e);
    var l = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
      return e
    };
    n(107);
    const c = () => {
      const e = new URLSearchParams(window.location.search).get("id"),
        t = new URLSearchParams(window.location.hash.substr(1)),
        n = t.get("priv"),
        r = t.get("epriv");
      return Object(i.useEffect)(() => {
        e || (window.location = `https://gun-create.nmaro.now.sh?next=${encodeURIComponent(window.location.origin)}`)
      }, []), e ? o.a.createElement(u.a, {
        id: e,
        priv: n,
        epriv: r
      }) : o.a.createElement("div", null, "Loading...")
    };
    l(c, "useEffect{}");
    const s = Object(a.hot)(c);
    var f, d;
    t.a = s, (f = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) && (f.register(c, "App", "/zeit/2cab3a7/src/app.js"), f.register(s, "default", "/zeit/2cab3a7/src/app.js")), (d = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && d(e)
  }).call(this, n(11)(e))
}, function(e, t, n) {
  "use strict";
  (function(e) {
    n.d(t, "a", (function() {
      return f
    }));
    var r, i = n(43),
      o = n(48),
      a = n(0),
      u = n.n(a),
      l = n(1);
    (r = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && r(e);
    var c = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
      return e
    };
    const s = n(8);
    n(38), n(38), n(39), n(40), n(103), n(106);
    const f = ({
      id: e,
      priv: t,
      epriv: n
    }) => {
      const [r, c] = Object(a.useState)(null), f = Object(l.getPub)(e), d = f && t && {
        pub: f,
        priv: t,
        epriv: n
      }, [p, h, g] = Object(l.useGun)(s, r, a.useState, d);
      Object(a.useEffect)(() => {
        const t = s({
          localStorage: !1,
          peers: ['http://localhost:8765/gun', 'https://mvp-gun.herokuapp.com/gun', 'https://e2eec.herokuapp.com/gun']
        });
        t.get(e).on(h), t.get(`${e}.lanes`).on(h).map().on(h).once(e => t.get(`${Object(l.getId)(e)}.cards`).on(h).map().on(h)), c(t)
      }, []);
      const m = new o.GunContinuousSequence(r);
      if (!r) return u.a.createElement("div", null, "Loading...");
      const v = { ...p[e],
        lanes: m.sort(Object(l.getSet)(p, `${e}.lanes`).map(e => ({ ...e,
          cards: m.sort(Object(l.getSet)(p, `${Object(l.getId)(e)}.cards`))
        })))
      };
      return u.a.createElement(i.a, {
        board: v,
        id: e,
        writable: !f || t,
        onCreateLane: t => {
          const n = Object(l.getUUID)(r),
            i = `${e}.lanes.${n}`;
          g([i, "title", t], [`${e}.lanes`, n, {
            "#": i
          }], [e, "updated", +new Date], [e, "lastUpdate", `New Lane: "${t}"`])
        },
        onCreateCard: (t, n) => {
          const i = Object(l.getUUID)(r),
            o = `${e}.cards.${i}`;
          g([o, "title", n], [`${t}.cards`, i, {
            "#": o
          }], [e, "updated", +new Date], [e, "lastUpdate", `New Card: "${n}"`])
        },
        onSetBoardTitle: t => g([e, "title", t]),
        onSetCardTitle: (e, t) => g([e, "title", t]),
        onSetLaneTitle: (e, t) => g([e, "title", t]),
        onMoveLane: (e, t, n) => g([e, "index", JSON.stringify(m.getIndexBetween(e, t, n))]),
        onMoveCard: (t, n, r, i, o) => {
          const a = [];
          if (a.push([t, "index", JSON.stringify(m.getIndexBetween(t, i, o))]), n !== r) {
            const i = /[\w\-]+$/.exec(t)[0];
            a.push([`${n}.cards`, i, null], [`${r}.cards`, i, {
              "#": t
            }], [e, "updated", +new Date], [e, "lastUpdate", `"${p[t]&&p[t].title}" moved to "${p[r]&&p[r].title}"`])
          }
          g(...a)
        }
      })
    };
    var d, p;
    c(f, "useState{[gun, setGun](null)}\nuseGun{[data, onData, put]}\nuseEffect{}", () => [l.useGun]), (d = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) && d.register(f, "GunBoard", "/zeit/2cab3a7/src/components/GunBoard.js"), (p = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && p(e)
  }).call(this, n(11)(e))
}, function(e, t, n) {
  "use strict";
  (function(e) {
    n.d(t, "a", (function() {
      return c
    }));
    var r, i = n(0),
      o = n.n(i),
      a = n(10),
      u = n(1);
    (r = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && r(e);
    var l = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
      return e
    };
    const c = ({
      id: e,
      board: t,
      writable: n,
      onSetBoardTitle: r,
      onSetCardTitle: l,
      onMoveLane: c,
      onMoveCard: f,
      onCreateLane: d,
      onSetLaneTitle: p,
      onCreateCard: h
    }) => {
      const [g, m] = Object(i.useState)(!1), [v, b] = Object(i.useState)(""), y = Object(i.useRef)(null);
      return Object(i.useEffect)(() => {
        document.title = t.title || "GUN Kanban"
      }, [t.title]), o.a.createElement(a.a, {
        onDragEnd: ({
          source: e,
          destination: n,
          type: r,
          draggableId: i
        }) => {
          if (n && (e.droppableId && e.index) !== (n.droppableId === n.index)) switch (r) {
            case "LANE":
              const r = t.lanes.filter(e => Object(u.getId)(e) !== i);
              c(i, r[n.index - 1], r[n.index]);
              break;
            case "CARD":
              const o = t.lanes.find(e => Object(u.getId)(e) === n.droppableId).cards.filter(e => Object(u.getId)(e) !== i);
              f(i, e.droppableId, n.droppableId, o[n.index - 1], o[n.index])
          }
        }
      }, o.a.createElement("div", {
        className: "board"
      }, g ? o.a.createElement("form", {
        onSubmit: e => {
          e.preventDefault(), r(v), m(!1)
        }
      }, o.a.createElement("input", {
        autoFocus: !0,
        value: v,
        onChange: e => b(e.target.value),
        placeholder: "board title"
      })) : o.a.createElement("h1", {
        onDoubleClick: n && (e => {
          b(t.title), m(!0)
        }),
        className: "board-title"
      }, t && t.title || e), o.a.createElement("div", {
        className: "board-content"
      }, o.a.createElement(a.c, {
        droppableId: "board",
        type: "LANE",
        direction: "horizontal",
        isDropDisabled: !n
      }, (e, r) => o.a.createElement("div", Object.assign({
        ref: e.innerRef,
        className: "lanes"
      }, e.droppableProps), t.lanes.map((e, t) => {
        const r = Object(u.getId)(e);
        return o.a.createElement(s, {
          key: r,
          index: t,
          writable: n,
          id: r,
          lane: e,
          onSetLaneTitle: p,
          onSetCardTitle: l,
          onCreateCard: h
        })
      }), e.placeholder)), n && o.a.createElement("div", {
        className: "new-lane"
      }, o.a.createElement("form", {
        onSubmit: e => {
          e.preventDefault(), d(y.current.value), y.current.value = ""
        }
      }, o.a.createElement("input", {
        ref: y,
        placeholder: "new lane"
      }))))))
    };
    l(c, 'useState{[editing, setEditing](false)}\nuseState{[newBoardTitle, setNewBoardTitle]("")}\nuseRef{newLaneTitle}\nuseEffect{}');
    const s = ({
      id: e,
      lane: t,
      writable: n,
      index: r,
      onSetCardTitle: l,
      onSetLaneTitle: c,
      onCreateCard: s
    }) => {
      const [d, p] = Object(i.useState)(), [h, g] = Object(i.useState)(t.title), m = Object(i.useRef)(null);
      return o.a.createElement(a.b, {
        draggableId: e,
        index: r,
        isDragDisabled: !n
      }, (r, i) => o.a.createElement("div", Object.assign({
        ref: r.innerRef,
        className: "lane"
      }, r.draggableProps, r.dragHandleProps), d ? o.a.createElement("form", {
        onSubmit: t => {
          t.preventDefault(), c(e, h), p(!1)
        }
      }, o.a.createElement("input", {
        autoFocus: !0,
        value: h,
        onChange: e => g(e.target.value),
        placeholder: "lane title"
      })) : o.a.createElement("div", {
        onDoubleClick: n && (e => {
          g(t.title), p(!0)
        }),
        className: "lane-title"
      }, t.title || "No title"), o.a.createElement(a.c, {
        droppableId: e,
        type: "CARD",
        isDropDisabled: !n
      }, (e, r) => o.a.createElement("div", Object.assign({
        ref: e.innerRef,
        className: "cards"
      }, e.droppableProps), t.cards.map((e, t) => {
        const r = Object(u.getId)(e);
        return o.a.createElement(f, {
          key: r,
          id: r,
          card: e,
          writable: n,
          index: t,
          onSetTitle: l
        })
      }), e.placeholder)), n && o.a.createElement("div", {
        className: "new-card"
      }, o.a.createElement("form", {
        onSubmit: t => {
          t.preventDefault(), s(e, m.current.value), m.current.value = ""
        }
      }, o.a.createElement("input", {
        ref: m,
        placeholder: "new card"
      })))))
    };
    l(s, "useState{[editing, setEditing]}\nuseState{[laneTitle, setLaneTitle](lane.title)}\nuseRef{newCardTitle}");
    const f = ({
      index: e,
      id: t,
      card: n,
      writable: r,
      onSetTitle: u
    }) => {
      const [l, c] = Object(i.useState)(), [s, f] = Object(i.useState)(n.title);
      return o.a.createElement(a.b, {
        draggableId: t,
        index: e,
        isDragDisabled: !r
      }, (e, i) => o.a.createElement("div", Object.assign({
        ref: e.innerRef,
        className: "card"
      }, e.draggableProps, e.dragHandleProps), l ? o.a.createElement("form", {
        onSubmit: e => {
          e.preventDefault(), u(t, s), c(!1)
        }
      }, o.a.createElement("input", {
        autoFocus: !0,
        value: s,
        onChange: e => f(e.target.value),
        placeholder: "card title"
      })) : o.a.createElement("div", {
        onDoubleClick: r && (e => {
          f(n.title), c(!0)
        }),
        className: "card-title"
      }, n.title || "No title", " ", o.a.createElement("a", {
        href: `/?board=${t}`,
        target: "_blank",
        className: "card-link"
      }, "#"))))
    };
    var d, p;
    l(f, "useState{[editing, setEditing]}\nuseState{[cardTitle, setCardTitle](card.title)}"), (d = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) && (d.register(c, "Board", "/zeit/2cab3a7/src/components/Board.js"), d.register(s, "Lane", "/zeit/2cab3a7/src/components/Board.js"), d.register(f, "Card", "/zeit/2cab3a7/src/components/Board.js")), (p = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && p(e)
  }).call(this, n(11)(e))
}, function(e, t, n) {
  e.exports = n(58)
}, function(e, t, n) {
  "use strict";

  function r(e) {
    var t, n = e.Symbol;
    return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t, n) {
  e.exports = n(84)
}, function(e, t, n) {
  e.exports = n(92)
}, function(e, t, n) {
  "use strict";

  function r(e) {
    for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), r(n(35)), r(n(95))
}, function(e, t, n) {
  t.hot = function(e) {
    return e
  }
}, function(e, t, n) {
  n(51), e.exports = n(54)
}, function(e, t, n) {
  "use strict";
  e.exports = n(52)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r, i = (r = n(0)) && "object" == typeof r && "default" in r ? r.default : r;

  function o(e) {
    return o.warnAboutHMRDisabled && (o.warnAboutHMRDisabled = !0, console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."), console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")), i.Children.only(e.children)
  }
  o.warnAboutHMRDisabled = !1;
  var a = function e() {
    return e.shouldWrapWithAppContainer ? function(e) {
      return function(t) {
        return i.createElement(o, null, i.createElement(e, t))
      }
    } : function(e) {
      return e
    }
  };
  a.shouldWrapWithAppContainer = !1;
  t.AppContainer = o, t.hot = a, t.areComponentsEqual = function(e, t) {
    return e === t
  }, t.setConfig = function() {}, t.cold = function(e) {
    return e
  }, t.configureComponent = function() {}
}, function(e, t, n) {
  "use strict";
  /** @license React v16.11.0
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var r = n(24),
    i = "function" == typeof Symbol && Symbol.for,
    o = i ? Symbol.for("react.element") : 60103,
    a = i ? Symbol.for("react.portal") : 60106,
    u = i ? Symbol.for("react.fragment") : 60107,
    l = i ? Symbol.for("react.strict_mode") : 60108,
    c = i ? Symbol.for("react.profiler") : 60114,
    s = i ? Symbol.for("react.provider") : 60109,
    f = i ? Symbol.for("react.context") : 60110,
    d = i ? Symbol.for("react.forward_ref") : 60112,
    p = i ? Symbol.for("react.suspense") : 60113;
  i && Symbol.for("react.suspense_list");
  var h = i ? Symbol.for("react.memo") : 60115,
    g = i ? Symbol.for("react.lazy") : 60116;
  i && Symbol.for("react.fundamental"), i && Symbol.for("react.responder"), i && Symbol.for("react.scope");
  var m = "function" == typeof Symbol && Symbol.iterator;

  function v(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  var b = {
      isMounted: function() {
        return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
    },
    y = {};

  function w(e, t, n) {
    this.props = e, this.context = t, this.refs = y, this.updater = n || b
  }

  function x() {}

  function E(e, t, n) {
    this.props = e, this.context = t, this.refs = y, this.updater = n || b
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(e, t) {
    if ("object" != typeof e && "function" != typeof e && null != e) throw Error(v(85));
    this.updater.enqueueSetState(this, e, t, "setState")
  }, w.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
  }, x.prototype = w.prototype;
  var k = E.prototype = new x;
  k.constructor = E, r(k, w.prototype), k.isPureReactComponent = !0;
  var S = {
      current: null
    },
    T = {
      current: null
    },
    C = Object.prototype.hasOwnProperty,
    _ = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

  function I(e, t, n) {
    var r, i = {},
      a = null,
      u = null;
    if (null != t)
      for (r in void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (a = "" + t.key), t) C.call(t, r) && !_.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (1 === l) i.children = n;
    else if (1 < l) {
      for (var c = Array(l), s = 0; s < l; s++) c[s] = arguments[s + 2];
      i.children = c
    }
    if (e && e.defaultProps)
      for (r in l = e.defaultProps) void 0 === i[r] && (i[r] = l[r]);
    return {
      $$typeof: o,
      type: e,
      key: a,
      ref: u,
      props: i,
      _owner: T.current
    }
  }

  function O(e) {
    return "object" == typeof e && null !== e && e.$$typeof === o
  }
  var P = /\/+/g,
    D = [];

  function A(e, t, n, r) {
    if (D.length) {
      var i = D.pop();
      return i.result = e, i.keyPrefix = t, i.func = n, i.context = r, i.count = 0, i
    }
    return {
      result: e,
      keyPrefix: t,
      func: n,
      context: r,
      count: 0
    }
  }

  function N(e) {
    e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > D.length && D.push(e)
  }

  function R(e, t, n) {
    return null == e ? 0 : function e(t, n, r, i) {
      var u = typeof t;
      "undefined" !== u && "boolean" !== u || (t = null);
      var l = !1;
      if (null === t) l = !0;
      else switch (u) {
        case "string":
        case "number":
          l = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case o:
            case a:
              l = !0
          }
      }
      if (l) return r(i, t, "" === n ? "." + j(t, 0) : n), 1;
      if (l = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
        for (var c = 0; c < t.length; c++) {
          var s = n + j(u = t[c], c);
          l += e(u, s, r, i)
        } else if (null === t || "object" != typeof t ? s = null : s = "function" == typeof(s = m && t[m] || t["@@iterator"]) ? s : null, "function" == typeof s)
          for (t = s.call(t), c = 0; !(u = t.next()).done;) l += e(u = u.value, s = n + j(u, c++), r, i);
        else if ("object" === u) throw r = "" + t, Error(v(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, ""));
      return l
    }(e, "", t, n)
  }

  function j(e, t) {
    return "object" == typeof e && null !== e && null != e.key ? function(e) {
      var t = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + ("" + e).replace(/[=:]/g, (function(e) {
        return t[e]
      }))
    }(e.key) : t.toString(36)
  }

  function B(e, t) {
    e.func.call(e.context, t, e.count++)
  }

  function M(e, t, n) {
    var r = e.result,
      i = e.keyPrefix;
    e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? L(e, r, n, (function(e) {
      return e
    })) : null != e && (O(e) && (e = function(e, t) {
      return {
        $$typeof: o,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
      }
    }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(P, "$&/") + "/") + n)), r.push(e))
  }

  function L(e, t, n, r, i) {
    var o = "";
    null != n && (o = ("" + n).replace(P, "$&/") + "/"), R(e, M, t = A(t, o, r, i)), N(t)
  }

  function U() {
    var e = S.current;
    if (null === e) throw Error(v(321));
    return e
  }
  var F = {
      Children: {
        map: function(e, t, n) {
          if (null == e) return e;
          var r = [];
          return L(e, r, null, t, n), r
        },
        forEach: function(e, t, n) {
          if (null == e) return e;
          R(e, B, t = A(null, null, t, n)), N(t)
        },
        count: function(e) {
          return R(e, (function() {
            return null
          }), null)
        },
        toArray: function(e) {
          var t = [];
          return L(e, t, null, (function(e) {
            return e
          })), t
        },
        only: function(e) {
          if (!O(e)) throw Error(v(143));
          return e
        }
      },
      createRef: function() {
        return {
          current: null
        }
      },
      Component: w,
      PureComponent: E,
      createContext: function(e, t) {
        return void 0 === t && (t = null), (e = {
          $$typeof: f,
          _calculateChangedBits: t,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }).Provider = {
          $$typeof: s,
          _context: e
        }, e.Consumer = e
      },
      forwardRef: function(e) {
        return {
          $$typeof: d,
          render: e
        }
      },
      lazy: function(e) {
        return {
          $$typeof: g,
          _ctor: e,
          _status: -1,
          _result: null
        }
      },
      memo: function(e, t) {
        return {
          $$typeof: h,
          type: e,
          compare: void 0 === t ? null : t
        }
      },
      useCallback: function(e, t) {
        return U().useCallback(e, t)
      },
      useContext: function(e, t) {
        return U().useContext(e, t)
      },
      useEffect: function(e, t) {
        return U().useEffect(e, t)
      },
      useImperativeHandle: function(e, t, n) {
        return U().useImperativeHandle(e, t, n)
      },
      useDebugValue: function() {},
      useLayoutEffect: function(e, t) {
        return U().useLayoutEffect(e, t)
      },
      useMemo: function(e, t) {
        return U().useMemo(e, t)
      },
      useReducer: function(e, t, n) {
        return U().useReducer(e, t, n)
      },
      useRef: function(e) {
        return U().useRef(e)
      },
      useState: function(e) {
        return U().useState(e)
      },
      Fragment: u,
      Profiler: c,
      StrictMode: l,
      Suspense: p,
      createElement: I,
      cloneElement: function(e, t, n) {
        if (null == e) throw Error(v(267, e));
        var i = r({}, e.props),
          a = e.key,
          u = e.ref,
          l = e._owner;
        if (null != t) {
          if (void 0 !== t.ref && (u = t.ref, l = T.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
          for (s in t) C.call(t, s) && !_.hasOwnProperty(s) && (i[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s])
        }
        var s = arguments.length - 2;
        if (1 === s) i.children = n;
        else if (1 < s) {
          c = Array(s);
          for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
          i.children = c
        }
        return {
          $$typeof: o,
          type: e.type,
          key: a,
          ref: u,
          props: i,
          _owner: l
        }
      },
      createFactory: function(e) {
        var t = I.bind(null, e);
        return t.type = e, t
      },
      isValidElement: O,
      version: "16.11.0",
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentDispatcher: S,
        ReactCurrentBatchConfig: {
          suspense: null
        },
        ReactCurrentOwner: T,
        IsSomeRendererActing: {
          current: !1
        },
        assign: r
      }
    },
    G = {
      default: F
    },
    z = G && F || G;
  e.exports = z.default || z
}, function(e, t, n) {
  "use strict";
  n.r(t),
    function(e) {
      var t, r = n(0),
        i = n.n(r),
        o = n(9),
        a = n.n(o),
        u = n(41);
      n(108);
      (t = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && t(e);
      "undefined" != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l, c, s = document.getElementById("app");
      a.a.render(i.a.createElement(u.a, {
        name: "GUN Kanban"
      }), s), (l = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) && l.register(s, "mountNode", "/zeit/2cab3a7/src/index.js"), (c = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && c(e)
    }.call(this, n(11)(e))
}, function(e, t, n) {
  "use strict";
  /** @license React v16.11.0
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var r = n(0),
    i = n(24),
    o = n(56);

  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  if (!r) throw Error(a(227));
  var u = null,
    l = {};

  function c() {
    if (u)
      for (var e in l) {
        var t = l[e],
          n = u.indexOf(e);
        if (!(-1 < n)) throw Error(a(96, e));
        if (!f[n]) {
          if (!t.extractEvents) throw Error(a(97, e));
          for (var r in f[n] = t, n = t.eventTypes) {
            var i = void 0,
              o = n[r],
              c = t,
              p = r;
            if (d.hasOwnProperty(p)) throw Error(a(99, p));
            d[p] = o;
            var h = o.phasedRegistrationNames;
            if (h) {
              for (i in h) h.hasOwnProperty(i) && s(h[i], c, p);
              i = !0
            } else o.registrationName ? (s(o.registrationName, c, p), i = !0) : i = !1;
            if (!i) throw Error(a(98, r, e))
          }
        }
      }
  }

  function s(e, t, n) {
    if (p[e]) throw Error(a(100, e));
    p[e] = t, h[e] = t.eventTypes[n].dependencies
  }
  var f = [],
    d = {},
    p = {},
    h = {};

  function g(e, t, n, r, i, o, a, u, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, c)
    } catch (e) {
      this.onError(e)
    }
  }
  var m = !1,
    v = null,
    b = !1,
    y = null,
    w = {
      onError: function(e) {
        m = !0, v = e
      }
    };

  function x(e, t, n, r, i, o, a, u, l) {
    m = !1, v = null, g.apply(w, arguments)
  }
  var E = null,
    k = null,
    S = null;

  function T(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = S(n),
      function(e, t, n, r, i, o, u, l, c) {
        if (x.apply(this, arguments), m) {
          if (!m) throw Error(a(198));
          var s = v;
          m = !1, v = null, b || (b = !0, y = s)
        }
      }(r, t, void 0, e), e.currentTarget = null
  }

  function C(e, t) {
    if (null == t) throw Error(a(30));
    return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
  }

  function _(e, t, n) {
    Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
  }
  var I = null;

  function O(e) {
    if (e) {
      var t = e._dispatchListeners,
        n = e._dispatchInstances;
      if (Array.isArray(t))
        for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) T(e, t[r], n[r]);
      else t && T(e, t, n);
      e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
    }
  }

  function P(e) {
    if (null !== e && (I = C(I, e)), e = I, I = null, e) {
      if (_(e, O), I) throw Error(a(95));
      if (b) throw e = y, b = !1, y = null, e
    }
  }
  var D = {
    injectEventPluginOrder: function(e) {
      if (u) throw Error(a(101));
      u = Array.prototype.slice.call(e), c()
    },
    injectEventPluginsByName: function(e) {
      var t, n = !1;
      for (t in e)
        if (e.hasOwnProperty(t)) {
          var r = e[t];
          if (!l.hasOwnProperty(t) || l[t] !== r) {
            if (l[t]) throw Error(a(102, t));
            l[t] = r, n = !0
          }
        }
      n && c()
    }
  };

  function A(e, t) {
    var n = e.stateNode;
    if (!n) return null;
    var r = E(n);
    if (!r) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
        break e;
      default:
        e = !1
    }
    if (e) return null;
    if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
    return n
  }
  var N = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  N.hasOwnProperty("ReactCurrentDispatcher") || (N.ReactCurrentDispatcher = {
    current: null
  }), N.hasOwnProperty("ReactCurrentBatchConfig") || (N.ReactCurrentBatchConfig = {
    suspense: null
  });
  var R = /^(.*)[\\\/]/,
    j = "function" == typeof Symbol && Symbol.for,
    B = j ? Symbol.for("react.element") : 60103,
    M = j ? Symbol.for("react.portal") : 60106,
    L = j ? Symbol.for("react.fragment") : 60107,
    U = j ? Symbol.for("react.strict_mode") : 60108,
    F = j ? Symbol.for("react.profiler") : 60114,
    G = j ? Symbol.for("react.provider") : 60109,
    z = j ? Symbol.for("react.context") : 60110,
    $ = j ? Symbol.for("react.concurrent_mode") : 60111,
    W = j ? Symbol.for("react.forward_ref") : 60112,
    H = j ? Symbol.for("react.suspense") : 60113,
    V = j ? Symbol.for("react.suspense_list") : 60120,
    Y = j ? Symbol.for("react.memo") : 60115,
    q = j ? Symbol.for("react.lazy") : 60116;
  j && Symbol.for("react.fundamental"), j && Symbol.for("react.responder"), j && Symbol.for("react.scope");
  var K = "function" == typeof Symbol && Symbol.iterator;

  function J(e) {
    return null === e || "object" != typeof e ? null : "function" == typeof(e = K && e[K] || e["@@iterator"]) ? e : null
  }

  function Q(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
      case L:
        return "Fragment";
      case M:
        return "Portal";
      case F:
        return "Profiler";
      case U:
        return "StrictMode";
      case H:
        return "Suspense";
      case V:
        return "SuspenseList"
    }
    if ("object" == typeof e) switch (e.$$typeof) {
      case z:
        return "Context.Consumer";
      case G:
        return "Context.Provider";
      case W:
        var t = e.render;
        return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
      case Y:
        return Q(e.type);
      case q:
        if (e = 1 === e._status ? e._result : null) return Q(e)
    }
    return null
  }

  function X(e) {
    var t = "";
    do {
      e: switch (e.tag) {
        case 3:
        case 4:
        case 6:
        case 7:
        case 10:
        case 9:
          var n = "";
          break e;
        default:
          var r = e._debugOwner,
            i = e._debugSource,
            o = Q(e.type);
          n = null, r && (n = Q(r.type)), r = o, o = "", i ? o = " (at " + i.fileName.replace(R, "") + ":" + i.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + o
      }
      t += n,
      e = e.return
    } while (e);
    return t
  }
  var Z = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    ee = null,
    te = null,
    ne = null;

  function re(e) {
    if (e = k(e)) {
      if ("function" != typeof ee) throw Error(a(280));
      var t = E(e.stateNode);
      ee(e.stateNode, e.type, t)
    }
  }

  function ie(e) {
    te ? ne ? ne.push(e) : ne = [e] : te = e
  }

  function oe() {
    if (te) {
      var e = te,
        t = ne;
      if (ne = te = null, re(e), t)
        for (e = 0; e < t.length; e++) re(t[e])
    }
  }

  function ae(e, t) {
    return e(t)
  }

  function ue(e, t, n, r) {
    return e(t, n, r)
  }

  function le() {}
  var ce = ae,
    se = !1,
    fe = !1;

  function de() {
    null === te && null === ne || (le(), oe())
  }
  new Map;
  var pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    he = Object.prototype.hasOwnProperty,
    ge = {},
    me = {};

  function ve(e, t, n, r, i, o) {
    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o
  }
  var be = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
    be[e] = new ve(e, 0, !1, e, null, !1)
  })), [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
  ].forEach((function(e) {
    var t = e[0];
    be[t] = new ve(t, 1, !1, e[1], null, !1)
  })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
    be[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1)
  })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
    be[e] = new ve(e, 2, !1, e, null, !1)
  })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
    be[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1)
  })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
    be[e] = new ve(e, 3, !0, e, null, !1)
  })), ["capture", "download"].forEach((function(e) {
    be[e] = new ve(e, 4, !1, e, null, !1)
  })), ["cols", "rows", "size", "span"].forEach((function(e) {
    be[e] = new ve(e, 6, !1, e, null, !1)
  })), ["rowSpan", "start"].forEach((function(e) {
    be[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1)
  }));
  var ye = /[\-:]([a-z])/g;

  function we(e) {
    return e[1].toUpperCase()
  }

  function xe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return e;
      default:
        return ""
    }
  }

  function Ee(e, t, n, r) {
    var i = be.hasOwnProperty(t) ? be[t] : null;
    (null !== i ? 0 === i.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
      if (null == t || function(e, t, n, r) {
          if (null !== n && 0 === n.type) return !1;
          switch (typeof t) {
            case "function":
            case "symbol":
              return !0;
            case "boolean":
              return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default:
              return !1
          }
        }(e, t, n, r)) return !0;
      if (r) return !1;
      if (null !== n) switch (n.type) {
        case 3:
          return !t;
        case 4:
          return !1 === t;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t
      }
      return !1
    }(t, n, i, r) && (n = null), r || null === i ? function(e) {
      return !!he.call(me, e) || !he.call(ge, e) && (pe.test(e) ? me[e] = !0 : (ge[e] = !0, !1))
    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
  }

  function ke(e) {
    var t = e.type;
    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
  }

  function Se(e) {
    e._valueTracker || (e._valueTracker = function(e) {
      var t = ke(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
      if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
        var i = n.get,
          o = n.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return i.call(this)
          },
          set: function(e) {
            r = "" + e, o.call(this, e)
          }
        }), Object.defineProperty(e, t, {
          enumerable: n.enumerable
        }), {
          getValue: function() {
            return r
          },
          setValue: function(e) {
            r = "" + e
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t]
          }
        }
      }
    }(e))
  }

  function Te(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return e && (r = ke(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
  }

  function Ce(e, t) {
    var n = t.checked;
    return i({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != n ? n : e._wrapperState.initialChecked
    })
  }

  function _e(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue,
      r = null != t.checked ? t.checked : t.defaultChecked;
    n = xe(null != t.value ? t.value : n), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
    }
  }

  function Ie(e, t) {
    null != (t = t.checked) && Ee(e, "checked", t, !1)
  }

  function Oe(e, t) {
    Ie(e, t);
    var n = xe(t.value),
      r = t.type;
    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
    t.hasOwnProperty("value") ? De(e, t.type, n) : t.hasOwnProperty("defaultValue") && De(e, t.type, xe(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
  }

  function Pe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
  }

  function De(e, t, n) {
    "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
  }

  function Ae(e, t) {
    return e = i({
      children: void 0
    }, t), (t = function(e) {
      var t = "";
      return r.Children.forEach(e, (function(e) {
        null != e && (t += e)
      })), t
    }(t.children)) && (e.children = t), e
  }

  function Ne(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
      for (n = "" + xe(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
        null !== t || e[i].disabled || (t = e[i])
      }
      null !== t && (t.selected = !0)
    }
  }

  function Re(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
    return i({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
    })
  }

  function je(e, t) {
    var n = t.value;
    if (null == n) {
      if (n = t.defaultValue, null != (t = t.children)) {
        if (null != n) throw Error(a(92));
        if (Array.isArray(t)) {
          if (!(1 >= t.length)) throw Error(a(93));
          t = t[0]
        }
        n = t
      }
      null == n && (n = "")
    }
    e._wrapperState = {
      initialValue: xe(n)
    }
  }

  function Be(e, t) {
    var n = xe(t.value),
      r = xe(t.defaultValue);
    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
  }

  function Me(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
    var t = e.replace(ye, we);
    be[t] = new ve(t, 1, !1, e, null, !1)
  })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
    var t = e.replace(ye, we);
    be[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
  })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
    var t = e.replace(ye, we);
    be[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
  })), ["tabIndex", "crossOrigin"].forEach((function(e) {
    be[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1)
  })), be.xlinkHref = new ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(e) {
    be[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0)
  }));
  var Le = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg"
  };

  function Ue(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml"
    }
  }

  function Fe(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e ? Ue(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
  }
  var Ge, ze = function(e) {
    return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction((function() {
        return e(t, n)
      }))
    } : e
  }((function(e, t) {
    if (e.namespaceURI !== Le.svg || "innerHTML" in e) e.innerHTML = t;
    else {
      for ((Ge = Ge || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ge.firstChild; e.firstChild;) e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild)
    }
  }));

  function $e(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
    }
    e.textContent = t
  }

  function We(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
  }
  var He = {
      animationend: We("Animation", "AnimationEnd"),
      animationiteration: We("Animation", "AnimationIteration"),
      animationstart: We("Animation", "AnimationStart"),
      transitionend: We("Transition", "TransitionEnd")
    },
    Ve = {},
    Ye = {};

  function qe(e) {
    if (Ve[e]) return Ve[e];
    if (!He[e]) return e;
    var t, n = He[e];
    for (t in n)
      if (n.hasOwnProperty(t) && t in Ye) return Ve[e] = n[t];
    return e
  }
  Z && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete He.animationend.animation, delete He.animationiteration.animation, delete He.animationstart.animation), "TransitionEvent" in window || delete He.transitionend.transition);
  var Ke = qe("animationend"),
    Je = qe("animationiteration"),
    Qe = qe("animationstart"),
    Xe = qe("transitionend"),
    Ze = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");

  function et(e) {
    var t = e,
      n = e;
    if (e.alternate)
      for (; t.return;) t = t.return;
    else {
      e = t;
      do {
        0 != (1026 & (t = e).effectTag) && (n = t.return), e = t.return
      } while (e)
    }
    return 3 === t.tag ? n : null
  }

  function tt(e) {
    if (13 === e.tag) {
      var t = e.memoizedState;
      if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
    }
    return null
  }

  function nt(e) {
    if (et(e) !== e) throw Error(a(188))
  }

  function rt(e) {
    if (!(e = function(e) {
        var t = e.alternate;
        if (!t) {
          if (null === (t = et(e))) throw Error(a(188));
          return t !== e ? null : e
        }
        for (var n = e, r = t;;) {
          var i = n.return;
          if (null === i) break;
          var o = i.alternate;
          if (null === o) {
            if (null !== (r = i.return)) {
              n = r;
              continue
            }
            break
          }
          if (i.child === o.child) {
            for (o = i.child; o;) {
              if (o === n) return nt(i), e;
              if (o === r) return nt(i), t;
              o = o.sibling
            }
            throw Error(a(188))
          }
          if (n.return !== r.return) n = i, r = o;
          else {
            for (var u = !1, l = i.child; l;) {
              if (l === n) {
                u = !0, n = i, r = o;
                break
              }
              if (l === r) {
                u = !0, r = i, n = o;
                break
              }
              l = l.sibling
            }
            if (!u) {
              for (l = o.child; l;) {
                if (l === n) {
                  u = !0, n = o, r = i;
                  break
                }
                if (l === r) {
                  u = !0, r = o, n = i;
                  break
                }
                l = l.sibling
              }
              if (!u) throw Error(a(189))
            }
          }
          if (n.alternate !== r) throw Error(a(190))
        }
        if (3 !== n.tag) throw Error(a(188));
        return n.stateNode.current === n ? e : t
      }(e))) return null;
    for (var t = e;;) {
      if (5 === t.tag || 6 === t.tag) return t;
      if (t.child) t.child.return = t, t = t.child;
      else {
        if (t === e) break;
        for (; !t.sibling;) {
          if (!t.return || t.return === e) return null;
          t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
      }
    }
    return null
  }
  var it, ot, at, ut = !1,
    lt = [],
    ct = null,
    st = null,
    ft = null,
    dt = new Map,
    pt = new Map,
    ht = [],
    gt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
    mt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

  function vt(e, t, n, r) {
    return {
      blockedOn: e,
      topLevelType: t,
      eventSystemFlags: 32 | n,
      nativeEvent: r
    }
  }

  function bt(e, t) {
    switch (e) {
      case "focus":
      case "blur":
        ct = null;
        break;
      case "dragenter":
      case "dragleave":
        st = null;
        break;
      case "mouseover":
      case "mouseout":
        ft = null;
        break;
      case "pointerover":
      case "pointerout":
        dt.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pt.delete(t.pointerId)
    }
  }

  function yt(e, t, n, r, i) {
    return null === e || e.nativeEvent !== i ? (e = vt(t, n, r, i), null !== t && (null !== (t = pr(t)) && ot(t)), e) : (e.eventSystemFlags |= r, e)
  }

  function wt(e) {
    var t = dr(e.target);
    if (null !== t) {
      var n = et(t);
      if (null !== n)
        if (13 === (t = n.tag)) {
          if (null !== (t = tt(n))) return e.blockedOn = t, void o.unstable_runWithPriority(e.priority, (function() {
            at(n)
          }))
        } else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
    }
    e.blockedOn = null
  }

  function xt(e) {
    if (null !== e.blockedOn) return !1;
    var t = Dn(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
    if (null !== t) {
      var n = pr(t);
      return null !== n && ot(n), e.blockedOn = t, !1
    }
    return !0
  }

  function Et(e, t, n) {
    xt(e) && n.delete(t)
  }

  function kt() {
    for (ut = !1; 0 < lt.length;) {
      var e = lt[0];
      if (null !== e.blockedOn) {
        null !== (e = pr(e.blockedOn)) && it(e);
        break
      }
      var t = Dn(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
      null !== t ? e.blockedOn = t : lt.shift()
    }
    null !== ct && xt(ct) && (ct = null), null !== st && xt(st) && (st = null), null !== ft && xt(ft) && (ft = null), dt.forEach(Et), pt.forEach(Et)
  }

  function St(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ut || (ut = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, kt)))
  }

  function Tt(e) {
    function t(t) {
      return St(t, e)
    }
    if (0 < lt.length) {
      St(lt[0], e);
      for (var n = 1; n < lt.length; n++) {
        var r = lt[n];
        r.blockedOn === e && (r.blockedOn = null)
      }
    }
    for (null !== ct && St(ct, e), null !== st && St(st, e), null !== ft && St(ft, e), dt.forEach(t), pt.forEach(t), n = 0; n < ht.length; n++)(r = ht[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < ht.length && null === (n = ht[0]).blockedOn;) wt(n), null === n.blockedOn && ht.shift()
  }

  function Ct(e) {
    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
  }

  function _t(e) {
    do {
      e = e.return
    } while (e && 5 !== e.tag);
    return e || null
  }

  function It(e, t, n) {
    (t = A(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = C(n._dispatchListeners, t), n._dispatchInstances = C(n._dispatchInstances, e))
  }

  function Ot(e) {
    if (e && e.dispatchConfig.phasedRegistrationNames) {
      for (var t = e._targetInst, n = []; t;) n.push(t), t = _t(t);
      for (t = n.length; 0 < t--;) It(n[t], "captured", e);
      for (t = 0; t < n.length; t++) It(n[t], "bubbled", e)
    }
  }

  function Pt(e, t, n) {
    e && n && n.dispatchConfig.registrationName && (t = A(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = C(n._dispatchListeners, t), n._dispatchInstances = C(n._dispatchInstances, e))
  }

  function Dt(e) {
    e && e.dispatchConfig.registrationName && Pt(e._targetInst, null, e)
  }

  function At(e) {
    _(e, Ot)
  }

  function Nt() {
    return !0
  }

  function Rt() {
    return !1
  }

  function jt(e, t, n, r) {
    for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(n) : "target" === i ? this.target = r : this[i] = n[i]);
    return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Nt : Rt, this.isPropagationStopped = Rt, this
  }

  function Bt(e, t, n, r) {
    if (this.eventPool.length) {
      var i = this.eventPool.pop();
      return this.call(i, e, t, n, r), i
    }
    return new this(e, t, n, r)
  }

  function Mt(e) {
    if (!(e instanceof this)) throw Error(a(279));
    e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
  }

  function Lt(e) {
    e.eventPool = [], e.getPooled = Bt, e.release = Mt
  }
  i(jt.prototype, {
    preventDefault: function() {
      this.defaultPrevented = !0;
      var e = this.nativeEvent;
      e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Nt)
    },
    stopPropagation: function() {
      var e = this.nativeEvent;
      e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Nt)
    },
    persist: function() {
      this.isPersistent = Nt
    },
    isPersistent: Rt,
    destructor: function() {
      var e, t = this.constructor.Interface;
      for (e in t) this[e] = null;
      this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Rt, this._dispatchInstances = this._dispatchListeners = null
    }
  }), jt.Interface = {
    type: null,
    target: null,
    currentTarget: function() {
      return null
    },
    eventPhase: null,
    bubbles: null,
    cancelable: null,
    timeStamp: function(e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: null,
    isTrusted: null
  }, jt.extend = function(e) {
    function t() {}

    function n() {
      return r.apply(this, arguments)
    }
    var r = this;
    t.prototype = r.prototype;
    var o = new t;
    return i(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = i({}, r.Interface, e), n.extend = r.extend, Lt(n), n
  }, Lt(jt);
  var Ut = jt.extend({
      animationName: null,
      elapsedTime: null,
      pseudoElement: null
    }),
    Ft = jt.extend({
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
      }
    }),
    Gt = jt.extend({
      view: null,
      detail: null
    }),
    zt = Gt.extend({
      relatedTarget: null
    });

  function $t(e) {
    var t = e.keyCode;
    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
  }
  var Wt = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    },
    Ht = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    },
    Vt = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };

  function Yt(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = Vt[e]) && !!t[e]
  }

  function qt() {
    return Yt
  }
  for (var Kt = Gt.extend({
      key: function(e) {
        if (e.key) {
          var t = Wt[e.key] || e.key;
          if ("Unidentified" !== t) return t
        }
        return "keypress" === e.type ? 13 === (e = $t(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Ht[e.keyCode] || "Unidentified" : ""
      },
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: qt,
      charCode: function(e) {
        return "keypress" === e.type ? $t(e) : 0
      },
      keyCode: function(e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
      },
      which: function(e) {
        return "keypress" === e.type ? $t(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
      }
    }), Jt = 0, Qt = 0, Xt = !1, Zt = !1, en = Gt.extend({
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      pageX: null,
      pageY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: qt,
      button: null,
      buttons: null,
      relatedTarget: function(e) {
        return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
      },
      movementX: function(e) {
        if ("movementX" in e) return e.movementX;
        var t = Jt;
        return Jt = e.screenX, Xt ? "mousemove" === e.type ? e.screenX - t : 0 : (Xt = !0, 0)
      },
      movementY: function(e) {
        if ("movementY" in e) return e.movementY;
        var t = Qt;
        return Qt = e.screenY, Zt ? "mousemove" === e.type ? e.screenY - t : 0 : (Zt = !0, 0)
      }
    }), tn = en.extend({
      pointerId: null,
      width: null,
      height: null,
      pressure: null,
      tangentialPressure: null,
      tiltX: null,
      tiltY: null,
      twist: null,
      pointerType: null,
      isPrimary: null
    }), nn = en.extend({
      dataTransfer: null
    }), rn = Gt.extend({
      touches: null,
      targetTouches: null,
      changedTouches: null,
      altKey: null,
      metaKey: null,
      ctrlKey: null,
      shiftKey: null,
      getModifierState: qt
    }), on = jt.extend({
      propertyName: null,
      elapsedTime: null,
      pseudoElement: null
    }), an = en.extend({
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
      },
      deltaZ: null,
      deltaMode: null
    }), un = [
      ["blur", "blur", 0],
      ["cancel", "cancel", 0],
      ["click", "click", 0],
      ["close", "close", 0],
      ["contextmenu", "contextMenu", 0],
      ["copy", "copy", 0],
      ["cut", "cut", 0],
      ["auxclick", "auxClick", 0],
      ["dblclick", "doubleClick", 0],
      ["dragend", "dragEnd", 0],
      ["dragstart", "dragStart", 0],
      ["drop", "drop", 0],
      ["focus", "focus", 0],
      ["input", "input", 0],
      ["invalid", "invalid", 0],
      ["keydown", "keyDown", 0],
      ["keypress", "keyPress", 0],
      ["keyup", "keyUp", 0],
      ["mousedown", "mouseDown", 0],
      ["mouseup", "mouseUp", 0],
      ["paste", "paste", 0],
      ["pause", "pause", 0],
      ["play", "play", 0],
      ["pointercancel", "pointerCancel", 0],
      ["pointerdown", "pointerDown", 0],
      ["pointerup", "pointerUp", 0],
      ["ratechange", "rateChange", 0],
      ["reset", "reset", 0],
      ["seeked", "seeked", 0],
      ["submit", "submit", 0],
      ["touchcancel", "touchCancel", 0],
      ["touchend", "touchEnd", 0],
      ["touchstart", "touchStart", 0],
      ["volumechange", "volumeChange", 0],
      ["drag", "drag", 1],
      ["dragenter", "dragEnter", 1],
      ["dragexit", "dragExit", 1],
      ["dragleave", "dragLeave", 1],
      ["dragover", "dragOver", 1],
      ["mousemove", "mouseMove", 1],
      ["mouseout", "mouseOut", 1],
      ["mouseover", "mouseOver", 1],
      ["pointermove", "pointerMove", 1],
      ["pointerout", "pointerOut", 1],
      ["pointerover", "pointerOver", 1],
      ["scroll", "scroll", 1],
      ["toggle", "toggle", 1],
      ["touchmove", "touchMove", 1],
      ["wheel", "wheel", 1],
      ["abort", "abort", 2],
      [Ke, "animationEnd", 2],
      [Je, "animationIteration", 2],
      [Qe, "animationStart", 2],
      ["canplay", "canPlay", 2],
      ["canplaythrough", "canPlayThrough", 2],
      ["durationchange", "durationChange", 2],
      ["emptied", "emptied", 2],
      ["encrypted", "encrypted", 2],
      ["ended", "ended", 2],
      ["error", "error", 2],
      ["gotpointercapture", "gotPointerCapture", 2],
      ["load", "load", 2],
      ["loadeddata", "loadedData", 2],
      ["loadedmetadata", "loadedMetadata", 2],
      ["loadstart", "loadStart", 2],
      ["lostpointercapture", "lostPointerCapture", 2],
      ["playing", "playing", 2],
      ["progress", "progress", 2],
      ["seeking", "seeking", 2],
      ["stalled", "stalled", 2],
      ["suspend", "suspend", 2],
      ["timeupdate", "timeUpdate", 2],
      [Xe, "transitionEnd", 2],
      ["waiting", "waiting", 2]
    ], ln = {}, cn = {}, sn = 0; sn < un.length; sn++) {
    var fn = un[sn],
      dn = fn[0],
      pn = fn[1],
      hn = fn[2],
      gn = "on" + (pn[0].toUpperCase() + pn.slice(1)),
      mn = {
        phasedRegistrationNames: {
          bubbled: gn,
          captured: gn + "Capture"
        },
        dependencies: [dn],
        eventPriority: hn
      };
    ln[pn] = mn, cn[dn] = mn
  }
  var vn = {
      eventTypes: ln,
      getEventPriority: function(e) {
        return void 0 !== (e = cn[e]) ? e.eventPriority : 2
      },
      extractEvents: function(e, t, n, r) {
        var i = cn[e];
        if (!i) return null;
        switch (e) {
          case "keypress":
            if (0 === $t(n)) return null;
          case "keydown":
          case "keyup":
            e = Kt;
            break;
          case "blur":
          case "focus":
            e = zt;
            break;
          case "click":
            if (2 === n.button) return null;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            e = en;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            e = nn;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            e = rn;
            break;
          case Ke:
          case Je:
          case Qe:
            e = Ut;
            break;
          case Xe:
            e = on;
            break;
          case "scroll":
            e = Gt;
            break;
          case "wheel":
            e = an;
            break;
          case "copy":
          case "cut":
          case "paste":
            e = Ft;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            e = tn;
            break;
          default:
            e = jt
        }
        return At(t = e.getPooled(i, t, n, r)), t
      }
    },
    bn = o.unstable_UserBlockingPriority,
    yn = o.unstable_runWithPriority,
    wn = vn.getEventPriority,
    xn = 10,
    En = [];

  function kn(e) {
    var t = e.targetInst,
      n = t;
    do {
      if (!n) {
        e.ancestors.push(n);
        break
      }
      var r = n;
      if (3 === r.tag) r = r.stateNode.containerInfo;
      else {
        for (; r.return;) r = r.return;
        r = 3 !== r.tag ? null : r.stateNode.containerInfo
      }
      if (!r) break;
      5 !== (t = n.tag) && 6 !== t || e.ancestors.push(n), n = dr(r)
    } while (n);
    for (n = 0; n < e.ancestors.length; n++) {
      t = e.ancestors[n];
      var i = Ct(e.nativeEvent);
      r = e.topLevelType;
      for (var o = e.nativeEvent, a = e.eventSystemFlags, u = null, l = 0; l < f.length; l++) {
        var c = f[l];
        c && (c = c.extractEvents(r, t, o, i, a)) && (u = C(u, c))
      }
      P(u)
    }
  }
  var Sn = !0;

  function Tn(e, t) {
    Cn(t, e, !1)
  }

  function Cn(e, t, n) {
    switch (wn(t)) {
      case 0:
        var r = _n.bind(null, t, 1);
        break;
      case 1:
        r = In.bind(null, t, 1);
        break;
      default:
        r = Pn.bind(null, t, 1)
    }
    n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1)
  }

  function _n(e, t, n) {
    se || le();
    var r = Pn,
      i = se;
    se = !0;
    try {
      ue(r, e, t, n)
    } finally {
      (se = i) || de()
    }
  }

  function In(e, t, n) {
    yn(bn, Pn.bind(null, e, t, n))
  }

  function On(e, t, n, r) {
    if (En.length) {
      var i = En.pop();
      i.topLevelType = e, i.eventSystemFlags = t, i.nativeEvent = n, i.targetInst = r, e = i
    } else e = {
      topLevelType: e,
      eventSystemFlags: t,
      nativeEvent: n,
      targetInst: r,
      ancestors: []
    };
    try {
      if (t = kn, n = e, fe) t(n, void 0);
      else {
        fe = !0;
        try {
          ce(t, n, void 0)
        } finally {
          fe = !1, de()
        }
      }
    } finally {
      e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, En.length < xn && En.push(e)
    }
  }

  function Pn(e, t, n) {
    if (Sn)
      if (0 < lt.length && -1 < gt.indexOf(e)) e = vt(null, e, t, n), lt.push(e);
      else {
        var r = Dn(e, t, n);
        null === r ? bt(e, n) : -1 < gt.indexOf(e) ? (e = vt(r, e, t, n), lt.push(e)) : function(e, t, n, r) {
          switch (t) {
            case "focus":
              return ct = yt(ct, e, t, n, r), !0;
            case "dragenter":
              return st = yt(st, e, t, n, r), !0;
            case "mouseover":
              return ft = yt(ft, e, t, n, r), !0;
            case "pointerover":
              var i = r.pointerId;
              return dt.set(i, yt(dt.get(i) || null, e, t, n, r)), !0;
            case "gotpointercapture":
              return i = r.pointerId, pt.set(i, yt(pt.get(i) || null, e, t, n, r)), !0
          }
          return !1
        }(r, e, t, n) || (bt(e, n), On(e, t, n, null))
      }
  }

  function Dn(e, t, n) {
    var r = Ct(n);
    if (null !== (r = dr(r))) {
      var i = et(r);
      if (null === i) r = null;
      else {
        var o = i.tag;
        if (13 === o) {
          if (null !== (r = tt(i))) return r;
          r = null
        } else if (3 === o) {
          if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
          r = null
        } else i !== r && (r = null)
      }
    }
    return On(e, t, n, r), null
  }

  function An(e) {
    if (!Z) return !1;
    var t = (e = "on" + e) in document;
    return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
  }
  var Nn = new("function" == typeof WeakMap ? WeakMap : Map);

  function Rn(e) {
    var t = Nn.get(e);
    return void 0 === t && (t = new Set, Nn.set(e, t)), t
  }

  function jn(e, t, n) {
    if (!n.has(e)) {
      switch (e) {
        case "scroll":
          Cn(t, "scroll", !0);
          break;
        case "focus":
        case "blur":
          Cn(t, "focus", !0), Cn(t, "blur", !0), n.add("blur"), n.add("focus");
          break;
        case "cancel":
        case "close":
          An(e) && Cn(t, e, !0);
          break;
        case "invalid":
        case "submit":
        case "reset":
          break;
        default:
          -1 === Ze.indexOf(e) && Tn(e, t)
      }
      n.add(e)
    }
  }
  var Bn = {
      animationIterationCount: !0,
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
      strokeWidth: !0
    },
    Mn = ["Webkit", "ms", "Moz", "O"];

  function Ln(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || Bn.hasOwnProperty(e) && Bn[e] ? ("" + t).trim() : t + "px"
  }

  function Un(e, t) {
    for (var n in e = e.style, t)
      if (t.hasOwnProperty(n)) {
        var r = 0 === n.indexOf("--"),
          i = Ln(n, t[n], r);
        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
      }
  }
  Object.keys(Bn).forEach((function(e) {
    Mn.forEach((function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Bn[t] = Bn[e]
    }))
  }));
  var Fn = i({
    menuitem: !0
  }, {
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
    wbr: !0
  });

  function Gn(e, t) {
    if (t) {
      if (Fn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e, ""));
      if (null != t.dangerouslySetInnerHTML) {
        if (null != t.children) throw Error(a(60));
        if (!("object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
      }
      if (null != t.style && "object" != typeof t.style) throw Error(a(62, ""))
    }
  }

  function zn(e, t) {
    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0
    }
  }

  function $n(e, t) {
    var n = Rn(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
    t = h[t];
    for (var r = 0; r < t.length; r++) jn(t[r], e, n)
  }

  function Wn() {}

  function Hn(e) {
    if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
    try {
      return e.activeElement || e.body
    } catch (t) {
      return e.body
    }
  }

  function Vn(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
  }

  function Yn(e, t) {
    var n, r = Vn(e);
    for (e = 0; r;) {
      if (3 === r.nodeType) {
        if (n = e + r.textContent.length, e <= t && n >= t) return {
          node: r,
          offset: t - e
        };
        e = n
      }
      e: {
        for (; r;) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e
          }
          r = r.parentNode
        }
        r = void 0
      }
      r = Vn(r)
    }
  }

  function qn() {
    for (var e = window, t = Hn(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = "string" == typeof t.contentWindow.location.href
      } catch (e) {
        n = !1
      }
      if (!n) break;
      t = Hn((e = t.contentWindow).document)
    }
    return t
  }

  function Kn(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
  }
  var Jn = "$",
    Qn = "/$",
    Xn = "$?",
    Zn = "$!",
    er = null,
    tr = null;

  function nr(e, t) {
    switch (e) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!t.autoFocus
    }
    return !1
  }

  function rr(e, t) {
    return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
  }
  var ir = "function" == typeof setTimeout ? setTimeout : void 0,
    or = "function" == typeof clearTimeout ? clearTimeout : void 0;

  function ar(e) {
    for (; null != e; e = e.nextSibling) {
      var t = e.nodeType;
      if (1 === t || 3 === t) break
    }
    return e
  }

  function ur(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (8 === e.nodeType) {
        var n = e.data;
        if (n === Jn || n === Zn || n === Xn) {
          if (0 === t) return e;
          t--
        } else n === Qn && t++
      }
      e = e.previousSibling
    }
    return null
  }
  var lr = Math.random().toString(36).slice(2),
    cr = "__reactInternalInstance$" + lr,
    sr = "__reactEventHandlers$" + lr,
    fr = "__reactContainere$" + lr;

  function dr(e) {
    var t = e[cr];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if (t = n[fr] || n[cr]) {
        if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
          for (e = ur(e); null !== e;) {
            if (n = e[cr]) return n;
            e = ur(e)
          }
        return t
      }
      n = (e = n).parentNode
    }
    return null
  }

  function pr(e) {
    return !(e = e[cr] || e[fr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
  }

  function hr(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(a(33))
  }

  function gr(e) {
    return e[sr] || null
  }
  var mr = null,
    vr = null,
    br = null;

  function yr() {
    if (br) return br;
    var e, t, n = vr,
      r = n.length,
      i = "value" in mr ? mr.value : mr.textContent,
      o = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var a = r - e;
    for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
    return br = i.slice(e, 1 < t ? 1 - t : void 0)
  }
  var wr = jt.extend({
      data: null
    }),
    xr = jt.extend({
      data: null
    }),
    Er = [9, 13, 27, 32],
    kr = Z && "CompositionEvent" in window,
    Sr = null;
  Z && "documentMode" in document && (Sr = document.documentMode);
  var Tr = Z && "TextEvent" in window && !Sr,
    Cr = Z && (!kr || Sr && 8 < Sr && 11 >= Sr),
    _r = String.fromCharCode(32),
    Ir = {
      beforeInput: {
        phasedRegistrationNames: {
          bubbled: "onBeforeInput",
          captured: "onBeforeInputCapture"
        },
        dependencies: ["compositionend", "keypress", "textInput", "paste"]
      },
      compositionEnd: {
        phasedRegistrationNames: {
          bubbled: "onCompositionEnd",
          captured: "onCompositionEndCapture"
        },
        dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
      },
      compositionStart: {
        phasedRegistrationNames: {
          bubbled: "onCompositionStart",
          captured: "onCompositionStartCapture"
        },
        dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
      },
      compositionUpdate: {
        phasedRegistrationNames: {
          bubbled: "onCompositionUpdate",
          captured: "onCompositionUpdateCapture"
        },
        dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
      }
    },
    Or = !1;

  function Pr(e, t) {
    switch (e) {
      case "keyup":
        return -1 !== Er.indexOf(t.keyCode);
      case "keydown":
        return 229 !== t.keyCode;
      case "keypress":
      case "mousedown":
      case "blur":
        return !0;
      default:
        return !1
    }
  }

  function Dr(e) {
    return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
  }
  var Ar = !1;
  var Nr = {
      eventTypes: Ir,
      extractEvents: function(e, t, n, r) {
        var i;
        if (kr) e: {
          switch (e) {
            case "compositionstart":
              var o = Ir.compositionStart;
              break e;
            case "compositionend":
              o = Ir.compositionEnd;
              break e;
            case "compositionupdate":
              o = Ir.compositionUpdate;
              break e
          }
          o = void 0
        }
        else Ar ? Pr(e, n) && (o = Ir.compositionEnd) : "keydown" === e && 229 === n.keyCode && (o = Ir.compositionStart);
        return o ? (Cr && "ko" !== n.locale && (Ar || o !== Ir.compositionStart ? o === Ir.compositionEnd && Ar && (i = yr()) : (vr = "value" in (mr = r) ? mr.value : mr.textContent, Ar = !0)), o = wr.getPooled(o, t, n, r), i ? o.data = i : null !== (i = Dr(n)) && (o.data = i), At(o), i = o) : i = null, (e = Tr ? function(e, t) {
          switch (e) {
            case "compositionend":
              return Dr(t);
            case "keypress":
              return 32 !== t.which ? null : (Or = !0, _r);
            case "textInput":
              return (e = t.data) === _r && Or ? null : e;
            default:
              return null
          }
        }(e, n) : function(e, t) {
          if (Ar) return "compositionend" === e || !kr && Pr(e, t) ? (e = yr(), br = vr = mr = null, Ar = !1, e) : null;
          switch (e) {
            case "paste":
              return null;
            case "keypress":
              if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
              }
              return null;
            case "compositionend":
              return Cr && "ko" !== t.locale ? null : t.data;
            default:
              return null
          }
        }(e, n)) ? ((t = xr.getPooled(Ir.beforeInput, t, n, r)).data = e, At(t)) : t = null, null === i ? t : null === t ? i : [i, t]
      }
    },
    Rr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
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
      week: !0
    };

  function jr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!Rr[e.type] : "textarea" === t
  }
  var Br = {
    change: {
      phasedRegistrationNames: {
        bubbled: "onChange",
        captured: "onChangeCapture"
      },
      dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
    }
  };

  function Mr(e, t, n) {
    return (e = jt.getPooled(Br.change, e, t, n)).type = "change", ie(n), At(e), e
  }
  var Lr = null,
    Ur = null;

  function Fr(e) {
    P(e)
  }

  function Gr(e) {
    if (Te(hr(e))) return e
  }

  function zr(e, t) {
    if ("change" === e) return t
  }
  var $r = !1;

  function Wr() {
    Lr && (Lr.detachEvent("onpropertychange", Hr), Ur = Lr = null)
  }

  function Hr(e) {
    if ("value" === e.propertyName && Gr(Ur))
      if (e = Mr(Ur, e, Ct(e)), se) P(e);
      else {
        se = !0;
        try {
          ae(Fr, e)
        } finally {
          se = !1, de()
        }
      }
  }

  function Vr(e, t, n) {
    "focus" === e ? (Wr(), Ur = n, (Lr = t).attachEvent("onpropertychange", Hr)) : "blur" === e && Wr()
  }

  function Yr(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Gr(Ur)
  }

  function qr(e, t) {
    if ("click" === e) return Gr(t)
  }

  function Kr(e, t) {
    if ("input" === e || "change" === e) return Gr(t)
  }
  Z && ($r = An("input") && (!document.documentMode || 9 < document.documentMode));
  var Jr, Qr = {
      eventTypes: Br,
      _isInputEventSupported: $r,
      extractEvents: function(e, t, n, r) {
        var i = t ? hr(t) : window,
          o = i.nodeName && i.nodeName.toLowerCase();
        if ("select" === o || "input" === o && "file" === i.type) var a = zr;
        else if (jr(i))
          if ($r) a = Kr;
          else {
            a = Yr;
            var u = Vr
          }
        else(o = i.nodeName) && "input" === o.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (a = qr);
        if (a && (a = a(e, t))) return Mr(a, n, r);
        u && u(e, i, t), "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && De(i, "number", i.value)
      }
    },
    Xr = {
      mouseEnter: {
        registrationName: "onMouseEnter",
        dependencies: ["mouseout", "mouseover"]
      },
      mouseLeave: {
        registrationName: "onMouseLeave",
        dependencies: ["mouseout", "mouseover"]
      },
      pointerEnter: {
        registrationName: "onPointerEnter",
        dependencies: ["pointerout", "pointerover"]
      },
      pointerLeave: {
        registrationName: "onPointerLeave",
        dependencies: ["pointerout", "pointerover"]
      }
    },
    Zr = {
      eventTypes: Xr,
      extractEvents: function(e, t, n, r, i) {
        var o = "mouseover" === e || "pointerover" === e,
          a = "mouseout" === e || "pointerout" === e;
        if (o && 0 == (32 & i) && (n.relatedTarget || n.fromElement) || !a && !o) return null;
        if (i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window, a ? (a = t, null !== (t = (t = n.relatedTarget || n.toElement) ? dr(t) : null) && (t !== (o = et(t)) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : a = null, a === t) return null;
        if ("mouseout" === e || "mouseover" === e) var u = en,
          l = Xr.mouseLeave,
          c = Xr.mouseEnter,
          s = "mouse";
        else "pointerout" !== e && "pointerover" !== e || (u = tn, l = Xr.pointerLeave, c = Xr.pointerEnter, s = "pointer");
        if (e = null == a ? i : hr(a), i = null == t ? i : hr(t), (l = u.getPooled(l, a, n, r)).type = s + "leave", l.target = e, l.relatedTarget = i, (r = u.getPooled(c, t, n, r)).type = s + "enter", r.target = i, r.relatedTarget = e, s = t, (u = a) && s) e: {
          for (e = s, a = 0, t = c = u; t; t = _t(t)) a++;
          for (t = 0, i = e; i; i = _t(i)) t++;
          for (; 0 < a - t;) c = _t(c),
          a--;
          for (; 0 < t - a;) e = _t(e),
          t--;
          for (; a--;) {
            if (c === e || c === e.alternate) break e;
            c = _t(c), e = _t(e)
          }
          c = null
        }
        else c = null;
        for (e = c, c = []; u && u !== e && (null === (a = u.alternate) || a !== e);) c.push(u), u = _t(u);
        for (u = []; s && s !== e && (null === (a = s.alternate) || a !== e);) u.push(s), s = _t(s);
        for (s = 0; s < c.length; s++) Pt(c[s], "bubbled", l);
        for (s = u.length; 0 < s--;) Pt(u[s], "captured", r);
        return n === Jr ? (Jr = null, [l]) : (Jr = n, [l, r])
      }
    };
  var ei = "function" == typeof Object.is ? Object.is : function(e, t) {
      return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    },
    ti = Object.prototype.hasOwnProperty;

  function ni(e, t) {
    if (ei(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++)
      if (!ti.call(t, n[r]) || !ei(e[n[r]], t[n[r]])) return !1;
    return !0
  }
  var ri = Z && "documentMode" in document && 11 >= document.documentMode,
    ii = {
      select: {
        phasedRegistrationNames: {
          bubbled: "onSelect",
          captured: "onSelectCapture"
        },
        dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
      }
    },
    oi = null,
    ai = null,
    ui = null,
    li = !1;

  function ci(e, t) {
    var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
    return li || null == oi || oi !== Hn(n) ? null : ("selectionStart" in (n = oi) && Kn(n) ? n = {
      start: n.selectionStart,
      end: n.selectionEnd
    } : n = {
      anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }, ui && ni(ui, n) ? null : (ui = n, (e = jt.getPooled(ii.select, ai, e, t)).type = "select", e.target = oi, At(e), e))
  }
  var si = {
    eventTypes: ii,
    extractEvents: function(e, t, n, r) {
      var i, o = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
      if (!(i = !o)) {
        e: {
          o = Rn(o),
          i = h.onSelect;
          for (var a = 0; a < i.length; a++)
            if (!o.has(i[a])) {
              o = !1;
              break e
            }
          o = !0
        }
        i = !o
      }
      if (i) return null;
      switch (o = t ? hr(t) : window, e) {
        case "focus":
          (jr(o) || "true" === o.contentEditable) && (oi = o, ai = t, ui = null);
          break;
        case "blur":
          ui = ai = oi = null;
          break;
        case "mousedown":
          li = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          return li = !1, ci(n, r);
        case "selectionchange":
          if (ri) break;
        case "keydown":
        case "keyup":
          return ci(n, r)
      }
      return null
    }
  };
  D.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), E = gr, k = pr, S = hr, D.injectEventPluginsByName({
    SimpleEventPlugin: vn,
    EnterLeaveEventPlugin: Zr,
    ChangeEventPlugin: Qr,
    SelectEventPlugin: si,
    BeforeInputEventPlugin: Nr
  }), new Set;
  var fi = [],
    di = -1;

  function pi(e) {
    0 > di || (e.current = fi[di], fi[di] = null, di--)
  }

  function hi(e, t) {
    fi[++di] = e.current, e.current = t
  }
  var gi = {},
    mi = {
      current: gi
    },
    vi = {
      current: !1
    },
    bi = gi;

  function yi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return gi;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i, o = {};
    for (i in n) o[i] = t[i];
    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
  }

  function wi(e) {
    return null != (e = e.childContextTypes)
  }

  function xi(e) {
    pi(vi), pi(mi)
  }

  function Ei(e) {
    pi(vi), pi(mi)
  }

  function ki(e, t, n) {
    if (mi.current !== gi) throw Error(a(168));
    hi(mi, t), hi(vi, n)
  }

  function Si(e, t, n) {
    var r = e.stateNode;
    if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
    for (var o in r = r.getChildContext())
      if (!(o in e)) throw Error(a(108, Q(t) || "Unknown", o));
    return i({}, n, {}, r)
  }

  function Ti(e) {
    var t = e.stateNode;
    return t = t && t.__reactInternalMemoizedMergedChildContext || gi, bi = mi.current, hi(mi, t), hi(vi, vi.current), !0
  }

  function Ci(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n ? (t = Si(e, t, bi), r.__reactInternalMemoizedMergedChildContext = t, pi(vi), pi(mi), hi(mi, t)) : pi(vi), hi(vi, n)
  }
  var _i = o.unstable_runWithPriority,
    Ii = o.unstable_scheduleCallback,
    Oi = o.unstable_cancelCallback,
    Pi = o.unstable_shouldYield,
    Di = o.unstable_requestPaint,
    Ai = o.unstable_now,
    Ni = o.unstable_getCurrentPriorityLevel,
    Ri = o.unstable_ImmediatePriority,
    ji = o.unstable_UserBlockingPriority,
    Bi = o.unstable_NormalPriority,
    Mi = o.unstable_LowPriority,
    Li = o.unstable_IdlePriority,
    Ui = {},
    Fi = void 0 !== Di ? Di : function() {},
    Gi = null,
    zi = null,
    $i = !1,
    Wi = Ai(),
    Hi = 1e4 > Wi ? Ai : function() {
      return Ai() - Wi
    };

  function Vi() {
    switch (Ni()) {
      case Ri:
        return 99;
      case ji:
        return 98;
      case Bi:
        return 97;
      case Mi:
        return 96;
      case Li:
        return 95;
      default:
        throw Error(a(332))
    }
  }

  function Yi(e) {
    switch (e) {
      case 99:
        return Ri;
      case 98:
        return ji;
      case 97:
        return Bi;
      case 96:
        return Mi;
      case 95:
        return Li;
      default:
        throw Error(a(332))
    }
  }

  function qi(e, t) {
    return e = Yi(e), _i(e, t)
  }

  function Ki(e, t, n) {
    return e = Yi(e), Ii(e, t, n)
  }

  function Ji(e) {
    return null === Gi ? (Gi = [e], zi = Ii(Ri, Xi)) : Gi.push(e), Ui
  }

  function Qi() {
    if (null !== zi) {
      var e = zi;
      zi = null, Oi(e)
    }
    Xi()
  }

  function Xi() {
    if (!$i && null !== Gi) {
      $i = !0;
      var e = 0;
      try {
        var t = Gi;
        qi(99, (function() {
          for (; e < t.length; e++) {
            var n = t[e];
            do {
              n = n(!0)
            } while (null !== n)
          }
        })), Gi = null
      } catch (t) {
        throw null !== Gi && (Gi = Gi.slice(e + 1)), Ii(Ri, Qi), t
      } finally {
        $i = !1
      }
    }
  }
  var Zi = 3;

  function eo(e, t, n) {
    return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n
  }

  function to(e, t) {
    if (e && e.defaultProps)
      for (var n in t = i({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
    return t
  }
  var no = {
      current: null
    },
    ro = null,
    io = null,
    oo = null;

  function ao() {
    oo = io = ro = null
  }

  function uo(e, t) {
    var n = e.type._context;
    hi(no, n._currentValue), n._currentValue = t
  }

  function lo(e) {
    var t = no.current;
    pi(no), e.type._context._currentValue = t
  }

  function co(e, t) {
    for (; null !== e;) {
      var n = e.alternate;
      if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
      else {
        if (!(null !== n && n.childExpirationTime < t)) break;
        n.childExpirationTime = t
      }
      e = e.return
    }
  }

  function so(e, t) {
    ro = e, oo = io = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Ha = !0), e.firstContext = null)
  }

  function fo(e, t) {
    if (oo !== e && !1 !== t && 0 !== t)
      if ("number" == typeof t && 1073741823 !== t || (oo = e, t = 1073741823), t = {
          context: e,
          observedBits: t,
          next: null
        }, null === io) {
        if (null === ro) throw Error(a(308));
        io = t, ro.dependencies = {
          expirationTime: 0,
          firstContext: t,
          responders: null
        }
      } else io = io.next = t;
    return e._currentValue
  }
  var po = !1;

  function ho(e) {
    return {
      baseState: e,
      firstUpdate: null,
      lastUpdate: null,
      firstCapturedUpdate: null,
      lastCapturedUpdate: null,
      firstEffect: null,
      lastEffect: null,
      firstCapturedEffect: null,
      lastCapturedEffect: null
    }
  }

  function go(e) {
    return {
      baseState: e.baseState,
      firstUpdate: e.firstUpdate,
      lastUpdate: e.lastUpdate,
      firstCapturedUpdate: null,
      lastCapturedUpdate: null,
      firstEffect: null,
      lastEffect: null,
      firstCapturedEffect: null,
      lastCapturedEffect: null
    }
  }

  function mo(e, t) {
    return {
      expirationTime: e,
      suspenseConfig: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
      nextEffect: null
    }
  }

  function vo(e, t) {
    null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
  }

  function bo(e, t) {
    var n = e.alternate;
    if (null === n) {
      var r = e.updateQueue,
        i = null;
      null === r && (r = e.updateQueue = ho(e.memoizedState))
    } else r = e.updateQueue, i = n.updateQueue, null === r ? null === i ? (r = e.updateQueue = ho(e.memoizedState), i = n.updateQueue = ho(n.memoizedState)) : r = e.updateQueue = go(i) : null === i && (i = n.updateQueue = go(r));
    null === i || r === i ? vo(r, t) : null === r.lastUpdate || null === i.lastUpdate ? (vo(r, t), vo(i, t)) : (vo(r, t), i.lastUpdate = t)
  }

  function yo(e, t) {
    var n = e.updateQueue;
    null === (n = null === n ? e.updateQueue = ho(e.memoizedState) : wo(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
  }

  function wo(e, t) {
    var n = e.alternate;
    return null !== n && t === n.updateQueue && (t = e.updateQueue = go(t)), t
  }

  function xo(e, t, n, r, o, a) {
    switch (n.tag) {
      case 1:
        return "function" == typeof(e = n.payload) ? e.call(a, r, o) : e;
      case 3:
        e.effectTag = -4097 & e.effectTag | 64;
      case 0:
        if (null == (o = "function" == typeof(e = n.payload) ? e.call(a, r, o) : e)) break;
        return i({}, r, o);
      case 2:
        po = !0
    }
    return r
  }

  function Eo(e, t, n, r, i) {
    po = !1;
    for (var o = (t = wo(e, t)).baseState, a = null, u = 0, l = t.firstUpdate, c = o; null !== l;) {
      var s = l.expirationTime;
      s < i ? (null === a && (a = l, o = c), u < s && (u = s)) : (_l(s, l.suspenseConfig), c = xo(e, 0, l, c, n, r), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = l : (t.lastEffect.nextEffect = l, t.lastEffect = l))), l = l.next
    }
    for (s = null, l = t.firstCapturedUpdate; null !== l;) {
      var f = l.expirationTime;
      f < i ? (null === s && (s = l, null === a && (o = c)), u < f && (u = f)) : (c = xo(e, 0, l, c, n, r), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = l : (t.lastCapturedEffect.nextEffect = l, t.lastCapturedEffect = l))), l = l.next
    }
    null === a && (t.lastUpdate = null), null === s ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === a && null === s && (o = c), t.baseState = o, t.firstUpdate = a, t.firstCapturedUpdate = s, Il(u), e.expirationTime = u, e.memoizedState = c
  }

  function ko(e, t, n) {
    null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), So(t.firstEffect, n), t.firstEffect = t.lastEffect = null, So(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null
  }

  function So(e, t) {
    for (; null !== e;) {
      var n = e.callback;
      if (null !== n) {
        e.callback = null;
        var r = t;
        if ("function" != typeof n) throw Error(a(191, n));
        n.call(r)
      }
      e = e.nextEffect
    }
  }
  var To = N.ReactCurrentBatchConfig,
    Co = (new r.Component).refs;

  function _o(e, t, n, r) {
    n = null == (n = n(r, t = e.memoizedState)) ? t : i({}, t, n), e.memoizedState = n, null !== (r = e.updateQueue) && 0 === e.expirationTime && (r.baseState = n)
  }
  var Io = {
    isMounted: function(e) {
      return !!(e = e._reactInternalFiber) && et(e) === e
    },
    enqueueSetState: function(e, t, n) {
      e = e._reactInternalFiber;
      var r = hl(),
        i = To.suspense;
      (i = mo(r = gl(r, e, i), i)).payload = t, null != n && (i.callback = n), bo(e, i), ml(e, r)
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternalFiber;
      var r = hl(),
        i = To.suspense;
      (i = mo(r = gl(r, e, i), i)).tag = 1, i.payload = t, null != n && (i.callback = n), bo(e, i), ml(e, r)
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternalFiber;
      var n = hl(),
        r = To.suspense;
      (r = mo(n = gl(n, e, r), r)).tag = 2, null != t && (r.callback = t), bo(e, r), ml(e, n)
    }
  };

  function Oo(e, t, n, r, i, o, a) {
    return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, a) : !t.prototype || !t.prototype.isPureReactComponent || (!ni(n, r) || !ni(i, o))
  }

  function Po(e, t, n) {
    var r = !1,
      i = gi,
      o = t.contextType;
    return "object" == typeof o && null !== o ? o = fo(o) : (i = wi(t) ? bi : mi.current, o = (r = null != (r = t.contextTypes)) ? yi(e, i) : gi), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Io, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
  }

  function Do(e, t, n, r) {
    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Io.enqueueReplaceState(t, t.state, null)
  }

  function Ao(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = Co;
    var o = t.contextType;
    "object" == typeof o && null !== o ? i.context = fo(o) : (o = wi(t) ? bi : mi.current, i.context = yi(e, o)), null !== (o = e.updateQueue) && (Eo(e, o, n, i, r), i.state = e.memoizedState), "function" == typeof(o = t.getDerivedStateFromProps) && (_o(e, t, o, n), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && Io.enqueueReplaceState(i, i.state, null), null !== (o = e.updateQueue) && (Eo(e, o, n, i, r), i.state = e.memoizedState)), "function" == typeof i.componentDidMount && (e.effectTag |= 4)
  }
  var No = Array.isArray;

  function Ro(e, t, n) {
    if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
      if (n._owner) {
        if (n = n._owner) {
          if (1 !== n.tag) throw Error(a(309));
          var r = n.stateNode
        }
        if (!r) throw Error(a(147, e));
        var i = "" + e;
        return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function(e) {
          var t = r.refs;
          t === Co && (t = r.refs = {}), null === e ? delete t[i] : t[i] = e
        })._stringRef = i, t)
      }
      if ("string" != typeof e) throw Error(a(284));
      if (!n._owner) throw Error(a(290, e))
    }
    return e
  }

  function jo(e, t) {
    if ("textarea" !== e.type) throw Error(a(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
  }

  function Bo(e) {
    function t(t, n) {
      if (e) {
        var r = t.lastEffect;
        null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
      }
    }

    function n(n, r) {
      if (!e) return null;
      for (; null !== r;) t(n, r), r = r.sibling;
      return null
    }

    function r(e, t) {
      for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
      return e
    }

    function i(e, t, n) {
      return (e = ql(e, t)).index = 0, e.sibling = null, e
    }

    function o(t, n, r) {
      return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n
    }

    function u(t) {
      return e && null === t.alternate && (t.effectTag = 2), t
    }

    function l(e, t, n, r) {
      return null === t || 6 !== t.tag ? ((t = Ql(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
    }

    function c(e, t, n, r) {
      return null !== t && t.elementType === n.type ? ((r = i(t, n.props)).ref = Ro(e, t, n), r.return = e, r) : ((r = Kl(n.type, n.key, n.props, null, e.mode, r)).ref = Ro(e, t, n), r.return = e, r)
    }

    function s(e, t, n, r) {
      return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Xl(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
    }

    function f(e, t, n, r, o) {
      return null === t || 7 !== t.tag ? ((t = Jl(n, e.mode, r, o)).return = e, t) : ((t = i(t, n)).return = e, t)
    }

    function d(e, t, n) {
      if ("string" == typeof t || "number" == typeof t) return (t = Ql("" + t, e.mode, n)).return = e, t;
      if ("object" == typeof t && null !== t) {
        switch (t.$$typeof) {
          case B:
            return (n = Kl(t.type, t.key, t.props, null, e.mode, n)).ref = Ro(e, null, t), n.return = e, n;
          case M:
            return (t = Xl(t, e.mode, n)).return = e, t
        }
        if (No(t) || J(t)) return (t = Jl(t, e.mode, n, null)).return = e, t;
        jo(e, t)
      }
      return null
    }

    function p(e, t, n, r) {
      var i = null !== t ? t.key : null;
      if ("string" == typeof n || "number" == typeof n) return null !== i ? null : l(e, t, "" + n, r);
      if ("object" == typeof n && null !== n) {
        switch (n.$$typeof) {
          case B:
            return n.key === i ? n.type === L ? f(e, t, n.props.children, r, i) : c(e, t, n, r) : null;
          case M:
            return n.key === i ? s(e, t, n, r) : null
        }
        if (No(n) || J(n)) return null !== i ? null : f(e, t, n, r, null);
        jo(e, n)
      }
      return null
    }

    function h(e, t, n, r, i) {
      if ("string" == typeof r || "number" == typeof r) return l(t, e = e.get(n) || null, "" + r, i);
      if ("object" == typeof r && null !== r) {
        switch (r.$$typeof) {
          case B:
            return e = e.get(null === r.key ? n : r.key) || null, r.type === L ? f(t, e, r.props.children, i, r.key) : c(t, e, r, i);
          case M:
            return s(t, e = e.get(null === r.key ? n : r.key) || null, r, i)
        }
        if (No(r) || J(r)) return f(t, e = e.get(n) || null, r, i, null);
        jo(t, r)
      }
      return null
    }

    function g(i, a, u, l) {
      for (var c = null, s = null, f = a, g = a = 0, m = null; null !== f && g < u.length; g++) {
        f.index > g ? (m = f, f = null) : m = f.sibling;
        var v = p(i, f, u[g], l);
        if (null === v) {
          null === f && (f = m);
          break
        }
        e && f && null === v.alternate && t(i, f), a = o(v, a, g), null === s ? c = v : s.sibling = v, s = v, f = m
      }
      if (g === u.length) return n(i, f), c;
      if (null === f) {
        for (; g < u.length; g++) null !== (f = d(i, u[g], l)) && (a = o(f, a, g), null === s ? c = f : s.sibling = f, s = f);
        return c
      }
      for (f = r(i, f); g < u.length; g++) null !== (m = h(f, i, g, u[g], l)) && (e && null !== m.alternate && f.delete(null === m.key ? g : m.key), a = o(m, a, g), null === s ? c = m : s.sibling = m, s = m);
      return e && f.forEach((function(e) {
        return t(i, e)
      })), c
    }

    function m(i, u, l, c) {
      var s = J(l);
      if ("function" != typeof s) throw Error(a(150));
      if (null == (l = s.call(l))) throw Error(a(151));
      for (var f = s = null, g = u, m = u = 0, v = null, b = l.next(); null !== g && !b.done; m++, b = l.next()) {
        g.index > m ? (v = g, g = null) : v = g.sibling;
        var y = p(i, g, b.value, c);
        if (null === y) {
          null === g && (g = v);
          break
        }
        e && g && null === y.alternate && t(i, g), u = o(y, u, m), null === f ? s = y : f.sibling = y, f = y, g = v
      }
      if (b.done) return n(i, g), s;
      if (null === g) {
        for (; !b.done; m++, b = l.next()) null !== (b = d(i, b.value, c)) && (u = o(b, u, m), null === f ? s = b : f.sibling = b, f = b);
        return s
      }
      for (g = r(i, g); !b.done; m++, b = l.next()) null !== (b = h(g, i, m, b.value, c)) && (e && null !== b.alternate && g.delete(null === b.key ? m : b.key), u = o(b, u, m), null === f ? s = b : f.sibling = b, f = b);
      return e && g.forEach((function(e) {
        return t(i, e)
      })), s
    }
    return function(e, r, o, l) {
      var c = "object" == typeof o && null !== o && o.type === L && null === o.key;
      c && (o = o.props.children);
      var s = "object" == typeof o && null !== o;
      if (s) switch (o.$$typeof) {
        case B:
          e: {
            for (s = o.key, c = r; null !== c;) {
              if (c.key === s) {
                if (7 === c.tag ? o.type === L : c.elementType === o.type) {
                  n(e, c.sibling), (r = i(c, o.type === L ? o.props.children : o.props)).ref = Ro(e, c, o), r.return = e, e = r;
                  break e
                }
                n(e, c);
                break
              }
              t(e, c), c = c.sibling
            }
            o.type === L ? ((r = Jl(o.props.children, e.mode, l, o.key)).return = e, e = r) : ((l = Kl(o.type, o.key, o.props, null, e.mode, l)).ref = Ro(e, r, o), l.return = e, e = l)
          }
          return u(e);
        case M:
          e: {
            for (c = o.key; null !== r;) {
              if (r.key === c) {
                if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                  n(e, r.sibling), (r = i(r, o.children || [])).return = e, e = r;
                  break e
                }
                n(e, r);
                break
              }
              t(e, r), r = r.sibling
            }(r = Xl(o, e.mode, l)).return = e,
            e = r
          }
          return u(e)
      }
      if ("string" == typeof o || "number" == typeof o) return o = "" + o, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = i(r, o)).return = e, e = r) : (n(e, r), (r = Ql(o, e.mode, l)).return = e, e = r), u(e);
      if (No(o)) return g(e, r, o, l);
      if (J(o)) return m(e, r, o, l);
      if (s && jo(e, o), void 0 === o && !c) switch (e.tag) {
        case 1:
        case 0:
          throw e = e.type, Error(a(152, e.displayName || e.name || "Component"))
      }
      return n(e, r)
    }
  }
  var Mo = Bo(!0),
    Lo = Bo(!1),
    Uo = {},
    Fo = {
      current: Uo
    },
    Go = {
      current: Uo
    },
    zo = {
      current: Uo
    };

  function $o(e) {
    if (e === Uo) throw Error(a(174));
    return e
  }

  function Wo(e, t) {
    hi(zo, t), hi(Go, e), hi(Fo, Uo);
    var n = t.nodeType;
    switch (n) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fe(null, "");
        break;
      default:
        t = Fe(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
    }
    pi(Fo), hi(Fo, t)
  }

  function Ho(e) {
    pi(Fo), pi(Go), pi(zo)
  }

  function Vo(e) {
    $o(zo.current);
    var t = $o(Fo.current),
      n = Fe(t, e.type);
    t !== n && (hi(Go, e), hi(Fo, n))
  }

  function Yo(e) {
    Go.current === e && (pi(Fo), pi(Go))
  }
  var qo = {
    current: 0
  };

  function Ko(e) {
    for (var t = e; null !== t;) {
      if (13 === t.tag) {
        var n = t.memoizedState;
        if (null !== n && (null === (n = n.dehydrated) || n.data === Xn || n.data === Zn)) return t
      } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
        if (0 != (64 & t.effectTag)) return t
      } else if (null !== t.child) {
        t.child.return = t, t = t.child;
        continue
      }
      if (t === e) break;
      for (; null === t.sibling;) {
        if (null === t.return || t.return === e) return null;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
    return null
  }

  function Jo(e, t) {
    return {
      responder: e,
      props: t
    }
  }
  var Qo = N.ReactCurrentDispatcher,
    Xo = N.ReactCurrentBatchConfig,
    Zo = 0,
    ea = null,
    ta = null,
    na = null,
    ra = null,
    ia = null,
    oa = null,
    aa = 0,
    ua = null,
    la = 0,
    ca = !1,
    sa = null,
    fa = 0;

  function da() {
    throw Error(a(321))
  }

  function pa(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ei(e[n], t[n])) return !1;
    return !0
  }

  function ha(e, t, n, r, i, o) {
    if (Zo = o, ea = t, na = null !== e ? e.memoizedState : null, Qo.current = null === na ? Na : Ra, t = n(r, i), ca) {
      do {
        ca = !1, fa += 1, na = null !== e ? e.memoizedState : null, oa = ra, ua = ia = ta = null, Qo.current = Ra, t = n(r, i)
      } while (ca);
      sa = null, fa = 0
    }
    if (Qo.current = Aa, (e = ea).memoizedState = ra, e.expirationTime = aa, e.updateQueue = ua, e.effectTag |= la, e = null !== ta && null !== ta.next, Zo = 0, oa = ia = ra = na = ta = ea = null, aa = 0, ua = null, la = 0, e) throw Error(a(300));
    return t
  }

  function ga() {
    Qo.current = Aa, Zo = 0, oa = ia = ra = na = ta = ea = null, aa = 0, ua = null, la = 0, ca = !1, sa = null, fa = 0
  }

  function ma() {
    var e = {
      memoizedState: null,
      baseState: null,
      queue: null,
      baseUpdate: null,
      next: null
    };
    return null === ia ? ra = ia = e : ia = ia.next = e, ia
  }

  function va() {
    if (null !== oa) oa = (ia = oa).next, na = null !== (ta = na) ? ta.next : null;
    else {
      if (null === na) throw Error(a(310));
      var e = {
        memoizedState: (ta = na).memoizedState,
        baseState: ta.baseState,
        queue: ta.queue,
        baseUpdate: ta.baseUpdate,
        next: null
      };
      ia = null === ia ? ra = e : ia.next = e, na = ta.next
    }
    return ia
  }

  function ba(e, t) {
    return "function" == typeof t ? t(e) : t
  }

  function ya(e) {
    var t = va(),
      n = t.queue;
    if (null === n) throw Error(a(311));
    if (n.lastRenderedReducer = e, 0 < fa) {
      var r = n.dispatch;
      if (null !== sa) {
        var i = sa.get(n);
        if (void 0 !== i) {
          sa.delete(n);
          var o = t.memoizedState;
          do {
            o = e(o, i.action), i = i.next
          } while (null !== i);
          return ei(o, t.memoizedState) || (Ha = !0), t.memoizedState = o, t.baseUpdate === n.last && (t.baseState = o), n.lastRenderedState = o, [o, r]
        }
      }
      return [t.memoizedState, r]
    }
    r = n.last;
    var u = t.baseUpdate;
    if (o = t.baseState, null !== u ? (null !== r && (r.next = null), r = u.next) : r = null !== r ? r.next : null, null !== r) {
      var l = i = null,
        c = r,
        s = !1;
      do {
        var f = c.expirationTime;
        f < Zo ? (s || (s = !0, l = u, i = o), f > aa && Il(aa = f)) : (_l(f, c.suspenseConfig), o = c.eagerReducer === e ? c.eagerState : e(o, c.action)), u = c, c = c.next
      } while (null !== c && c !== r);
      s || (l = u, i = o), ei(o, t.memoizedState) || (Ha = !0), t.memoizedState = o, t.baseUpdate = l, t.baseState = i, n.lastRenderedState = o
    }
    return [t.memoizedState, n.dispatch]
  }

  function wa(e) {
    var t = ma();
    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
      last: null,
      dispatch: null,
      lastRenderedReducer: ba,
      lastRenderedState: e
    }).dispatch = Da.bind(null, ea, e), [t.memoizedState, e]
  }

  function xa(e) {
    return ya(ba)
  }

  function Ea(e, t, n, r) {
    return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
    }, null === ua ? (ua = {
      lastEffect: null
    }).lastEffect = e.next = e : null === (t = ua.lastEffect) ? ua.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, ua.lastEffect = e), e
  }

  function ka(e, t, n, r) {
    var i = ma();
    la |= e, i.memoizedState = Ea(t, n, void 0, void 0 === r ? null : r)
  }

  function Sa(e, t, n, r) {
    var i = va();
    r = void 0 === r ? null : r;
    var o = void 0;
    if (null !== ta) {
      var a = ta.memoizedState;
      if (o = a.destroy, null !== r && pa(r, a.deps)) return void Ea(0, n, o, r)
    }
    la |= e, i.memoizedState = Ea(t, n, o, r)
  }

  function Ta(e, t) {
    return ka(516, 192, e, t)
  }

  function Ca(e, t) {
    return Sa(516, 192, e, t)
  }

  function _a(e, t) {
    return "function" == typeof t ? (e = e(), t(e), function() {
      t(null)
    }) : null != t ? (e = e(), t.current = e, function() {
      t.current = null
    }) : void 0
  }

  function Ia() {}

  function Oa(e, t) {
    return ma().memoizedState = [e, void 0 === t ? null : t], e
  }

  function Pa(e, t) {
    var n = va();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && pa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
  }

  function Da(e, t, n) {
    if (!(25 > fa)) throw Error(a(301));
    var r = e.alternate;
    if (e === ea || null !== r && r === ea)
      if (ca = !0, e = {
          expirationTime: Zo,
          suspenseConfig: null,
          action: n,
          eagerReducer: null,
          eagerState: null,
          next: null
        }, null === sa && (sa = new Map), void 0 === (n = sa.get(t))) sa.set(t, e);
      else {
        for (t = n; null !== t.next;) t = t.next;
        t.next = e
      }
    else {
      var i = hl(),
        o = To.suspense;
      o = {
        expirationTime: i = gl(i, e, o),
        suspenseConfig: o,
        action: n,
        eagerReducer: null,
        eagerState: null,
        next: null
      };
      var u = t.last;
      if (null === u) o.next = o;
      else {
        var l = u.next;
        null !== l && (o.next = l), u.next = o
      }
      if (t.last = o, 0 === e.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = t.lastRenderedReducer)) try {
        var c = t.lastRenderedState,
          s = r(c, n);
        if (o.eagerReducer = r, o.eagerState = s, ei(s, c)) return
      } catch (e) {}
      ml(e, i)
    }
  }
  var Aa = {
      readContext: fo,
      useCallback: da,
      useContext: da,
      useEffect: da,
      useImperativeHandle: da,
      useLayoutEffect: da,
      useMemo: da,
      useReducer: da,
      useRef: da,
      useState: da,
      useDebugValue: da,
      useResponder: da,
      useDeferredValue: da,
      useTransition: da
    },
    Na = {
      readContext: fo,
      useCallback: Oa,
      useContext: fo,
      useEffect: Ta,
      useImperativeHandle: function(e, t, n) {
        return n = null != n ? n.concat([e]) : null, ka(4, 36, _a.bind(null, t, e), n)
      },
      useLayoutEffect: function(e, t) {
        return ka(4, 36, e, t)
      },
      useMemo: function(e, t) {
        var n = ma();
        return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
      },
      useReducer: function(e, t, n) {
        var r = ma();
        return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
          last: null,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }).dispatch = Da.bind(null, ea, e), [r.memoizedState, e]
      },
      useRef: function(e) {
        return e = {
          current: e
        }, ma().memoizedState = e
      },
      useState: wa,
      useDebugValue: Ia,
      useResponder: Jo,
      useDeferredValue: function(e, t) {
        var n = wa(e),
          r = n[0],
          i = n[1];
        return Ta((function() {
          o.unstable_next((function() {
            var n = Xo.suspense;
            Xo.suspense = void 0 === t ? null : t;
            try {
              i(e)
            } finally {
              Xo.suspense = n
            }
          }))
        }), [e, t]), r
      },
      useTransition: function(e) {
        var t = wa(!1),
          n = t[0],
          r = t[1];
        return [Oa((function(t) {
          r(!0), o.unstable_next((function() {
            var n = Xo.suspense;
            Xo.suspense = void 0 === e ? null : e;
            try {
              r(!1), t()
            } finally {
              Xo.suspense = n
            }
          }))
        }), [e, n]), n]
      }
    },
    Ra = {
      readContext: fo,
      useCallback: Pa,
      useContext: fo,
      useEffect: Ca,
      useImperativeHandle: function(e, t, n) {
        return n = null != n ? n.concat([e]) : null, Sa(4, 36, _a.bind(null, t, e), n)
      },
      useLayoutEffect: function(e, t) {
        return Sa(4, 36, e, t)
      },
      useMemo: function(e, t) {
        var n = va();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && pa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
      },
      useReducer: ya,
      useRef: function() {
        return va().memoizedState
      },
      useState: xa,
      useDebugValue: Ia,
      useResponder: Jo,
      useDeferredValue: function(e, t) {
        var n = xa(),
          r = n[0],
          i = n[1];
        return Ca((function() {
          o.unstable_next((function() {
            var n = Xo.suspense;
            Xo.suspense = void 0 === t ? null : t;
            try {
              i(e)
            } finally {
              Xo.suspense = n
            }
          }))
        }), [e, t]), r
      },
      useTransition: function(e) {
        var t = xa(),
          n = t[0],
          r = t[1];
        return [Pa((function(t) {
          r(!0), o.unstable_next((function() {
            var n = Xo.suspense;
            Xo.suspense = void 0 === e ? null : e;
            try {
              r(!1), t()
            } finally {
              Xo.suspense = n
            }
          }))
        }), [e, n]), n]
      }
    },
    ja = null,
    Ba = null,
    Ma = !1;

  function La(e, t) {
    var n = Vl(5, null, null, 0);
    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
  }

  function Ua(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
      case 6:
        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
      case 13:
      default:
        return !1
    }
  }

  function Fa(e) {
    if (Ma) {
      var t = Ba;
      if (t) {
        var n = t;
        if (!Ua(e, t)) {
          if (!(t = ar(n.nextSibling)) || !Ua(e, t)) return e.effectTag = -1025 & e.effectTag | 2, Ma = !1, void(ja = e);
          La(ja, n)
        }
        ja = e, Ba = ar(t.firstChild)
      } else e.effectTag = -1025 & e.effectTag | 2, Ma = !1, ja = e
    }
  }

  function Ga(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
    ja = e
  }

  function za(e) {
    if (e !== ja) return !1;
    if (!Ma) return Ga(e), Ma = !0, !1;
    var t = e.type;
    if (5 !== e.tag || "head" !== t && "body" !== t && !rr(t, e.memoizedProps))
      for (t = Ba; t;) La(e, t), t = ar(t.nextSibling);
    if (Ga(e), 13 === e.tag) {
      if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (8 === e.nodeType) {
            var n = e.data;
            if (n === Qn) {
              if (0 === t) {
                Ba = ar(e.nextSibling);
                break e
              }
              t--
            } else n !== Jn && n !== Zn && n !== Xn || t++
          }
          e = e.nextSibling
        }
        Ba = null
      }
    } else Ba = ja ? ar(e.stateNode.nextSibling) : null;
    return !0
  }

  function $a() {
    Ba = ja = null, Ma = !1
  }
  var Wa = N.ReactCurrentOwner,
    Ha = !1;

  function Va(e, t, n, r) {
    t.child = null === e ? Lo(t, null, n, r) : Mo(t, e.child, n, r)
  }

  function Ya(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return so(t, i), r = ha(e, t, n, r, o, i), null === e || Ha ? (t.effectTag |= 1, Va(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), su(e, t, i))
  }

  function qa(e, t, n, r, i, o) {
    if (null === e) {
      var a = n.type;
      return "function" != typeof a || Yl(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Kl(n.type, null, r, null, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, Ka(e, t, a, r, i, o))
    }
    return a = e.child, i < o && (i = a.memoizedProps, (n = null !== (n = n.compare) ? n : ni)(i, r) && e.ref === t.ref) ? su(e, t, o) : (t.effectTag |= 1, (e = ql(a, r)).ref = t.ref, e.return = t, t.child = e)
  }

  function Ka(e, t, n, r, i, o) {
    return null !== e && ni(e.memoizedProps, r) && e.ref === t.ref && (Ha = !1, i < o) ? su(e, t, o) : Qa(e, t, n, r, o)
  }

  function Ja(e, t) {
    var n = t.ref;
    (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
  }

  function Qa(e, t, n, r, i) {
    var o = wi(n) ? bi : mi.current;
    return o = yi(t, o), so(t, i), n = ha(e, t, n, r, o, i), null === e || Ha ? (t.effectTag |= 1, Va(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), su(e, t, i))
  }

  function Xa(e, t, n, r, i) {
    if (wi(n)) {
      var o = !0;
      Ti(t)
    } else o = !1;
    if (so(t, i), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), Po(t, n, r), Ao(t, n, r, i), r = !0;
    else if (null === e) {
      var a = t.stateNode,
        u = t.memoizedProps;
      a.props = u;
      var l = a.context,
        c = n.contextType;
      "object" == typeof c && null !== c ? c = fo(c) : c = yi(t, c = wi(n) ? bi : mi.current);
      var s = n.getDerivedStateFromProps,
        f = "function" == typeof s || "function" == typeof a.getSnapshotBeforeUpdate;
      f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (u !== r || l !== c) && Do(t, a, r, c), po = !1;
      var d = t.memoizedState;
      l = a.state = d;
      var p = t.updateQueue;
      null !== p && (Eo(t, p, r, a, i), l = t.memoizedState), u !== r || d !== l || vi.current || po ? ("function" == typeof s && (_o(t, n, s, r), l = t.memoizedState), (u = po || Oo(t, n, u, r, d, l, c)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = c, r = u) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4), r = !1)
    } else a = t.stateNode, u = t.memoizedProps, a.props = t.type === t.elementType ? u : to(t.type, u), l = a.context, "object" == typeof(c = n.contextType) && null !== c ? c = fo(c) : c = yi(t, c = wi(n) ? bi : mi.current), (f = "function" == typeof(s = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (u !== r || l !== c) && Do(t, a, r, c), po = !1, l = t.memoizedState, d = a.state = l, null !== (p = t.updateQueue) && (Eo(t, p, r, a, i), d = t.memoizedState), u !== r || l !== d || vi.current || po ? ("function" == typeof s && (_o(t, n, s, r), d = t.memoizedState), (s = po || Oo(t, n, u, r, l, d, c)) ? (f || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, d, c), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, d, c)), "function" == typeof a.componentDidUpdate && (t.effectTag |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof a.componentDidUpdate || u === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || u === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = d), a.props = r, a.state = d, a.context = c, r = s) : ("function" != typeof a.componentDidUpdate || u === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || u === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), r = !1);
    return Za(e, t, n, r, o, i)
  }

  function Za(e, t, n, r, i, o) {
    Ja(e, t);
    var a = 0 != (64 & t.effectTag);
    if (!r && !a) return i && Ci(t, n, !1), su(e, t, o);
    r = t.stateNode, Wa.current = t;
    var u = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return t.effectTag |= 1, null !== e && a ? (t.child = Mo(t, e.child, null, o), t.child = Mo(t, null, u, o)) : Va(e, t, u, o), t.memoizedState = r.state, i && Ci(t, n, !0), t.child
  }

  function eu(e) {
    var t = e.stateNode;
    t.pendingContext ? ki(0, t.pendingContext, t.pendingContext !== t.context) : t.context && ki(0, t.context, !1), Wo(e, t.containerInfo)
  }
  var tu, nu, ru, iu, ou = {
    dehydrated: null,
    retryTime: 0
  };

  function au(e, t, n) {
    var r, i = t.mode,
      o = t.pendingProps,
      a = qo.current,
      u = !1;
    if ((r = 0 != (64 & t.effectTag)) || (r = 0 != (2 & a) && (null === e || null !== e.memoizedState)), r ? (u = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (a |= 1), hi(qo, 1 & a), null === e) {
      if (void 0 !== o.fallback && Fa(t), u) {
        if (u = o.fallback, (o = Jl(null, i, 0, null)).return = t, 0 == (2 & t.mode))
          for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e;) e.return = o, e = e.sibling;
        return (n = Jl(u, i, n, null)).return = t, o.sibling = n, t.memoizedState = ou, t.child = o, n
      }
      return i = o.children, t.memoizedState = null, t.child = Lo(t, null, i, n)
    }
    if (null !== e.memoizedState) {
      if (i = (e = e.child).sibling, u) {
        if (o = o.fallback, (n = ql(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (u = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
          for (n.child = u; null !== u;) u.return = n, u = u.sibling;
        return (i = ql(i, o, i.expirationTime)).return = t, n.sibling = i, n.childExpirationTime = 0, t.memoizedState = ou, t.child = n, i
      }
      return n = Mo(t, e.child, o.children, n), t.memoizedState = null, t.child = n
    }
    if (e = e.child, u) {
      if (u = o.fallback, (o = Jl(null, i, 0, null)).return = t, o.child = e, null !== e && (e.return = o), 0 == (2 & t.mode))
        for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e;) e.return = o, e = e.sibling;
      return (n = Jl(u, i, n, null)).return = t, o.sibling = n, n.effectTag |= 2, o.childExpirationTime = 0, t.memoizedState = ou, t.child = o, n
    }
    return t.memoizedState = null, t.child = Mo(t, e, o.children, n)
  }

  function uu(e, t) {
    e.expirationTime < t && (e.expirationTime = t);
    var n = e.alternate;
    null !== n && n.expirationTime < t && (n.expirationTime = t), co(e.return, t)
  }

  function lu(e, t, n, r, i, o) {
    var a = e.memoizedState;
    null === a ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      last: r,
      tail: n,
      tailExpiration: 0,
      tailMode: i,
      lastEffect: o
    } : (a.isBackwards = t, a.rendering = null, a.last = r, a.tail = n, a.tailExpiration = 0, a.tailMode = i, a.lastEffect = o)
  }

  function cu(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      o = r.tail;
    if (Va(e, t, r.children, n), 0 != (2 & (r = qo.current))) r = 1 & r | 2, t.effectTag |= 64;
    else {
      if (null !== e && 0 != (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
        if (13 === e.tag) null !== e.memoizedState && uu(e, n);
        else if (19 === e.tag) uu(e, n);
        else if (null !== e.child) {
          e.child.return = e, e = e.child;
          continue
        }
        if (e === t) break e;
        for (; null === e.sibling;) {
          if (null === e.return || e.return === t) break e;
          e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
      }
      r &= 1
    }
    if (hi(qo, r), 0 == (2 & t.mode)) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; null !== n;) null !== (e = n.alternate) && null === Ko(e) && (i = n), n = n.sibling;
        null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), lu(t, !1, i, n, o, t.lastEffect);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; null !== i;) {
          if (null !== (e = i.alternate) && null === Ko(e)) {
            t.child = i;
            break
          }
          e = i.sibling, i.sibling = n, n = i, i = e
        }
        lu(t, !0, n, null, o, t.lastEffect);
        break;
      case "together":
        lu(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null
    }
    return t.child
  }

  function su(e, t, n) {
    null !== e && (t.dependencies = e.dependencies);
    var r = t.expirationTime;
    if (0 !== r && Il(r), t.childExpirationTime < n) return null;
    if (null !== e && t.child !== e.child) throw Error(a(153));
    if (null !== t.child) {
      for (n = ql(e = t.child, e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = ql(e, e.pendingProps, e.expirationTime)).return = t;
      n.sibling = null
    }
    return t.child
  }

  function fu(e) {
    e.effectTag |= 4
  }

  function du(e, t) {
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
        null === n ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
  }

  function pu(e) {
    switch (e.tag) {
      case 1:
        wi(e.type) && xi();
        var t = e.effectTag;
        return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
      case 3:
        if (Ho(), Ei(), 0 != (64 & (t = e.effectTag))) throw Error(a(285));
        return e.effectTag = -4097 & t | 64, e;
      case 5:
        return Yo(e), null;
      case 13:
        return pi(qo), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
      case 19:
        return pi(qo), null;
      case 4:
        return Ho(), null;
      case 10:
        return lo(e), null;
      default:
        return null
    }
  }

  function hu(e, t) {
    return {
      value: e,
      source: t,
      stack: X(t)
    }
  }
  tu = function(e, t) {
    for (var n = t.child; null !== n;) {
      if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
      else if (4 !== n.tag && null !== n.child) {
        n.child.return = n, n = n.child;
        continue
      }
      if (n === t) break;
      for (; null === n.sibling;) {
        if (null === n.return || n.return === t) return;
        n = n.return
      }
      n.sibling.return = n.return, n = n.sibling
    }
  }, nu = function() {}, ru = function(e, t, n, r, o) {
    var a = e.memoizedProps;
    if (a !== r) {
      var u, l, c = t.stateNode;
      switch ($o(Fo.current), e = null, n) {
        case "input":
          a = Ce(c, a), r = Ce(c, r), e = [];
          break;
        case "option":
          a = Ae(c, a), r = Ae(c, r), e = [];
          break;
        case "select":
          a = i({}, a, {
            value: void 0
          }), r = i({}, r, {
            value: void 0
          }), e = [];
          break;
        case "textarea":
          a = Re(c, a), r = Re(c, r), e = [];
          break;
        default:
          "function" != typeof a.onClick && "function" == typeof r.onClick && (c.onclick = Wn)
      }
      for (u in Gn(n, r), n = null, a)
        if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
          if ("style" === u)
            for (l in c = a[u]) c.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
          else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (p.hasOwnProperty(u) ? e || (e = []) : (e = e || []).push(u, null));
      for (u in r) {
        var s = r[u];
        if (c = null != a ? a[u] : void 0, r.hasOwnProperty(u) && s !== c && (null != s || null != c))
          if ("style" === u)
            if (c) {
              for (l in c) !c.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
              for (l in s) s.hasOwnProperty(l) && c[l] !== s[l] && (n || (n = {}), n[l] = s[l])
            } else n || (e || (e = []), e.push(u, n)), n = s;
        else "dangerouslySetInnerHTML" === u ? (s = s ? s.__html : void 0, c = c ? c.__html : void 0, null != s && c !== s && (e = e || []).push(u, "" + s)) : "children" === u ? c === s || "string" != typeof s && "number" != typeof s || (e = e || []).push(u, "" + s) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (p.hasOwnProperty(u) ? (null != s && $n(o, u), e || c === s || (e = [])) : (e = e || []).push(u, s))
      }
      n && (e = e || []).push("style", n), o = e, (t.updateQueue = o) && fu(t)
    }
  }, iu = function(e, t, n, r) {
    n !== r && fu(t)
  };
  var gu = "function" == typeof WeakSet ? WeakSet : Set;

  function mu(e, t) {
    var n = t.source,
      r = t.stack;
    null === r && null !== n && (r = X(n)), null !== n && Q(n.type), t = t.value, null !== e && 1 === e.tag && Q(e.type);
    try {
      console.error(t)
    } catch (e) {
      setTimeout((function() {
        throw e
      }))
    }
  }

  function vu(e) {
    var t = e.ref;
    if (null !== t)
      if ("function" == typeof t) try {
        t(null)
      } catch (t) {
        Fl(e, t)
      } else t.current = null
  }

  function bu(e, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        yu(2, 0, t);
        break;
      case 1:
        if (256 & t.effectTag && null !== e) {
          var n = e.memoizedProps,
            r = e.memoizedState;
          t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : to(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
        }
        break;
      case 3:
      case 5:
      case 6:
      case 4:
      case 17:
        break;
      default:
        throw Error(a(163))
    }
  }

  function yu(e, t, n) {
    if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
      var r = n = n.next;
      do {
        if (0 != (r.tag & e)) {
          var i = r.destroy;
          r.destroy = void 0, void 0 !== i && i()
        }
        0 != (r.tag & t) && (i = r.create, r.destroy = i()), r = r.next
      } while (r !== n)
    }
  }

  function wu(e, t, n) {
    switch ("function" == typeof Wl && Wl(t), t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
          var r = e.next;
          qi(97 < n ? 97 : n, (function() {
            var e = r;
            do {
              var n = e.destroy;
              if (void 0 !== n) {
                var i = t;
                try {
                  n()
                } catch (e) {
                  Fl(i, e)
                }
              }
              e = e.next
            } while (e !== r)
          }))
        }
        break;
      case 1:
        vu(t), "function" == typeof(n = t.stateNode).componentWillUnmount && function(e, t) {
          try {
            t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
          } catch (t) {
            Fl(e, t)
          }
        }(t, n);
        break;
      case 5:
        vu(t);
        break;
      case 4:
        Su(e, t, n)
    }
  }

  function xu(e) {
    var t = e.alternate;
    e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, null !== t && xu(t)
  }

  function Eu(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag
  }

  function ku(e) {
    e: {
      for (var t = e.return; null !== t;) {
        if (Eu(t)) {
          var n = t;
          break e
        }
        t = t.return
      }
      throw Error(a(160))
    }
    switch (t = n.stateNode, n.tag) {
      case 5:
        var r = !1;
        break;
      case 3:
      case 4:
        t = t.containerInfo, r = !0;
        break;
      default:
        throw Error(a(161))
    }
    16 & n.effectTag && ($e(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
      for (; null === n.sibling;) {
        if (null === n.return || Eu(n.return)) {
          n = null;
          break e
        }
        n = n.return
      }
      for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
        if (2 & n.effectTag) continue t;
        if (null === n.child || 4 === n.tag) continue t;
        n.child.return = n, n = n.child
      }
      if (!(2 & n.effectTag)) {
        n = n.stateNode;
        break e
      }
    }
    for (var i = e;;) {
      var o = 5 === i.tag || 6 === i.tag;
      if (o) {
        var u = o ? i.stateNode : i.stateNode.instance;
        if (n)
          if (r) {
            var l = u;
            u = n, 8 === (o = t).nodeType ? o.parentNode.insertBefore(l, u) : o.insertBefore(l, u)
          } else t.insertBefore(u, n);
        else r ? (8 === (l = t).nodeType ? (o = l.parentNode).insertBefore(u, l) : (o = l).appendChild(u), null != (l = l._reactRootContainer) || null !== o.onclick || (o.onclick = Wn)) : t.appendChild(u)
      } else if (4 !== i.tag && null !== i.child) {
        i.child.return = i, i = i.child;
        continue
      }
      if (i === e) break;
      for (; null === i.sibling;) {
        if (null === i.return || i.return === e) return;
        i = i.return
      }
      i.sibling.return = i.return, i = i.sibling
    }
  }

  function Su(e, t, n) {
    for (var r, i, o = t, u = !1;;) {
      if (!u) {
        u = o.return;
        e: for (;;) {
          if (null === u) throw Error(a(160));
          switch (r = u.stateNode, u.tag) {
            case 5:
              i = !1;
              break e;
            case 3:
            case 4:
              r = r.containerInfo, i = !0;
              break e
          }
          u = u.return
        }
        u = !0
      }
      if (5 === o.tag || 6 === o.tag) {
        e: for (var l = e, c = o, s = n, f = c;;)
          if (wu(l, f, s), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child;
          else {
            if (f === c) break;
            for (; null === f.sibling;) {
              if (null === f.return || f.return === c) break e;
              f = f.return
            }
            f.sibling.return = f.return, f = f.sibling
          }i ? (l = r, c = o.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(c) : l.removeChild(c)) : r.removeChild(o.stateNode)
      }
      else if (4 === o.tag) {
        if (null !== o.child) {
          r = o.stateNode.containerInfo, i = !0, o.child.return = o, o = o.child;
          continue
        }
      } else if (wu(e, o, n), null !== o.child) {
        o.child.return = o, o = o.child;
        continue
      }
      if (o === t) break;
      for (; null === o.sibling;) {
        if (null === o.return || o.return === t) return;
        4 === (o = o.return).tag && (u = !1)
      }
      o.sibling.return = o.return, o = o.sibling
    }
  }

  function Tu(e, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        yu(4, 8, t);
        break;
      case 1:
        break;
      case 5:
        var n = t.stateNode;
        if (null != n) {
          var r = t.memoizedProps,
            i = null !== e ? e.memoizedProps : r;
          e = t.type;
          var o = t.updateQueue;
          if (t.updateQueue = null, null !== o) {
            for (n[sr] = r, "input" === e && "radio" === r.type && null != r.name && Ie(n, r), zn(e, i), t = zn(e, r), i = 0; i < o.length; i += 2) {
              var u = o[i],
                l = o[i + 1];
              "style" === u ? Un(n, l) : "dangerouslySetInnerHTML" === u ? ze(n, l) : "children" === u ? $e(n, l) : Ee(n, u, l, t)
            }
            switch (e) {
              case "input":
                Oe(n, r);
                break;
              case "textarea":
                Be(n, r);
                break;
              case "select":
                t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (e = r.value) ? Ne(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Ne(n, !!r.multiple, r.defaultValue, !0) : Ne(n, !!r.multiple, r.multiple ? [] : "", !1))
            }
          }
        }
        break;
      case 6:
        if (null === t.stateNode) throw Error(a(162));
        t.stateNode.nodeValue = t.memoizedProps;
        break;
      case 3:
        (t = t.stateNode).hydrate && (t.hydrate = !1, Tt(t.containerInfo));
        break;
      case 12:
        break;
      case 13:
        if (n = t, null === t.memoizedState ? r = !1 : (r = !0, n = t.child, tl = Hi()), null !== n) e: for (e = n;;) {
          if (5 === e.tag) o = e.stateNode, r ? "function" == typeof(o = o.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (o = e.stateNode, i = null != (i = e.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null, o.style.display = Ln("display", i));
          else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps;
          else {
            if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
              (o = e.child.sibling).return = e, e = o;
              continue
            }
            if (null !== e.child) {
              e.child.return = e, e = e.child;
              continue
            }
          }
          if (e === n) break e;
          for (; null === e.sibling;) {
            if (null === e.return || e.return === n) break e;
            e = e.return
          }
          e.sibling.return = e.return, e = e.sibling
        }
        Cu(t);
        break;
      case 19:
        Cu(t);
        break;
      case 17:
      case 20:
      case 21:
        break;
      default:
        throw Error(a(163))
    }
  }

  function Cu(e) {
    var t = e.updateQueue;
    if (null !== t) {
      e.updateQueue = null;
      var n = e.stateNode;
      null === n && (n = e.stateNode = new gu), t.forEach((function(t) {
        var r = zl.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r))
      }))
    }
  }
  var _u = "function" == typeof WeakMap ? WeakMap : Map;

  function Iu(e, t, n) {
    (n = mo(n, null)).tag = 3, n.payload = {
      element: null
    };
    var r = t.value;
    return n.callback = function() {
      il || (il = !0, ol = r), mu(e, t)
    }, n
  }

  function Ou(e, t, n) {
    (n = mo(n, null)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
      var i = t.value;
      n.payload = function() {
        return mu(e, t), r(i)
      }
    }
    var o = e.stateNode;
    return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
      "function" != typeof r && (null === al ? al = new Set([this]) : al.add(this), mu(e, t));
      var n = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: null !== n ? n : ""
      })
    }), n
  }
  var Pu, Du = Math.ceil,
    Au = N.ReactCurrentDispatcher,
    Nu = N.ReactCurrentOwner,
    Ru = 0,
    ju = 8,
    Bu = 16,
    Mu = 32,
    Lu = 0,
    Uu = 1,
    Fu = 2,
    Gu = 3,
    zu = 4,
    $u = 5,
    Wu = Ru,
    Hu = null,
    Vu = null,
    Yu = 0,
    qu = Lu,
    Ku = null,
    Ju = 1073741823,
    Qu = 1073741823,
    Xu = null,
    Zu = 0,
    el = !1,
    tl = 0,
    nl = 500,
    rl = null,
    il = !1,
    ol = null,
    al = null,
    ul = !1,
    ll = null,
    cl = 90,
    sl = null,
    fl = 0,
    dl = null,
    pl = 0;

  function hl() {
    return (Wu & (Bu | Mu)) !== Ru ? 1073741821 - (Hi() / 10 | 0) : 0 !== pl ? pl : pl = 1073741821 - (Hi() / 10 | 0)
  }

  function gl(e, t, n) {
    if (0 == (2 & (t = t.mode))) return 1073741823;
    var r = Vi();
    if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
    if ((Wu & Bu) !== Ru) return Yu;
    if (null !== n) e = eo(e, 0 | n.timeoutMs || 5e3, 250);
    else switch (r) {
      case 99:
        e = 1073741823;
        break;
      case 98:
        e = eo(e, 150, 100);
        break;
      case 97:
      case 96:
        e = eo(e, 5e3, 250);
        break;
      case 95:
        e = 2;
        break;
      default:
        throw Error(a(326))
    }
    return null !== Hu && e === Yu && --e, e
  }

  function ml(e, t) {
    if (50 < fl) throw fl = 0, dl = null, Error(a(185));
    if (null !== (e = vl(e, t))) {
      var n = Vi();
      1073741823 === t ? (Wu & ju) !== Ru && (Wu & (Bu | Mu)) === Ru ? xl(e) : (yl(e), Wu === Ru && Qi()) : yl(e), (4 & Wu) === Ru || 98 !== n && 99 !== n || (null === sl ? sl = new Map([
        [e, t]
      ]) : (void 0 === (n = sl.get(e)) || n > t) && sl.set(e, t))
    }
  }

  function vl(e, t) {
    e.expirationTime < t && (e.expirationTime = t);
    var n = e.alternate;
    null !== n && n.expirationTime < t && (n.expirationTime = t);
    var r = e.return,
      i = null;
    if (null === r && 3 === e.tag) i = e.stateNode;
    else
      for (; null !== r;) {
        if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
          i = r.stateNode;
          break
        }
        r = r.return
      }
    return null !== i && (Hu === i && (Il(t), qu === zu && tc(i, Yu)), nc(i, t)), i
  }

  function bl(e) {
    var t = e.lastExpiredTime;
    return 0 !== t ? t : ec(e, t = e.firstPendingTime) ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel) ? t : e : t
  }

  function yl(e) {
    if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Ji(xl.bind(null, e));
    else {
      var t = bl(e),
        n = e.callbackNode;
      if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
      else {
        var r = hl();
        if (1073741823 === t ? r = 99 : 1 === t || 2 === t ? r = 95 : r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
          var i = e.callbackPriority;
          if (e.callbackExpirationTime === t && i >= r) return;
          n !== Ui && Oi(n)
        }
        e.callbackExpirationTime = t, e.callbackPriority = r, t = 1073741823 === t ? Ji(xl.bind(null, e)) : Ki(r, wl.bind(null, e), {
          timeout: 10 * (1073741821 - t) - Hi()
        }), e.callbackNode = t
      }
    }
  }

  function wl(e, t) {
    if (pl = 0, t) return rc(e, t = hl()), yl(e), null;
    var n = bl(e);
    if (0 !== n) {
      if (t = e.callbackNode, (Wu & (Bu | Mu)) !== Ru) throw Error(a(327));
      if (Ml(), e === Hu && n === Yu || Sl(e, n), null !== Vu) {
        var r = Wu;
        Wu |= Bu;
        for (var i = Cl();;) try {
          Pl();
          break
        } catch (t) {
          Tl(e, t)
        }
        if (ao(), Wu = r, Au.current = i, qu === Uu) throw t = Ku, Sl(e, n), tc(e, n), yl(e), t;
        if (null === Vu) switch (i = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, r = qu, Hu = null, r) {
          case Lu:
          case Uu:
            throw Error(a(345));
          case Fu:
            rc(e, 2 < n ? 2 : n);
            break;
          case Gu:
            if (tc(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Nl(i)), 1073741823 === Ju && 10 < (i = tl + nl - Hi())) {
              if (el) {
                var o = e.lastPingedTime;
                if (0 === o || o >= n) {
                  e.lastPingedTime = n, Sl(e, n);
                  break
                }
              }
              if (0 !== (o = bl(e)) && o !== n) break;
              if (0 !== r && r !== n) {
                e.lastPingedTime = r;
                break
              }
              e.timeoutHandle = ir(Rl.bind(null, e), i);
              break
            }
            Rl(e);
            break;
          case zu:
            if (tc(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Nl(i)), el && (0 === (i = e.lastPingedTime) || i >= n)) {
              e.lastPingedTime = n, Sl(e, n);
              break
            }
            if (0 !== (i = bl(e)) && i !== n) break;
            if (0 !== r && r !== n) {
              e.lastPingedTime = r;
              break
            }
            if (1073741823 !== Qu ? r = 10 * (1073741821 - Qu) - Hi() : 1073741823 === Ju ? r = 0 : (r = 10 * (1073741821 - Ju) - 5e3, 0 > (r = (i = Hi()) - r) && (r = 0), (n = 10 * (1073741821 - n) - i) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Du(r / 1960)) - r) && (r = n)), 10 < r) {
              e.timeoutHandle = ir(Rl.bind(null, e), r);
              break
            }
            Rl(e);
            break;
          case $u:
            if (1073741823 !== Ju && null !== Xu) {
              o = Ju;
              var u = Xu;
              if (0 >= (r = 0 | u.busyMinDurationMs) ? r = 0 : (i = 0 | u.busyDelayMs, r = (o = Hi() - (10 * (1073741821 - o) - (0 | u.timeoutMs || 5e3))) <= i ? 0 : i + r - o), 10 < r) {
                tc(e, n), e.timeoutHandle = ir(Rl.bind(null, e), r);
                break
              }
            }
            Rl(e);
            break;
          default:
            throw Error(a(329))
        }
        if (yl(e), e.callbackNode === t) return wl.bind(null, e)
      }
    }
    return null
  }

  function xl(e) {
    var t = e.lastExpiredTime;
    if (t = 0 !== t ? t : 1073741823, e.finishedExpirationTime === t) Rl(e);
    else {
      if ((Wu & (Bu | Mu)) !== Ru) throw Error(a(327));
      if (Ml(), e === Hu && t === Yu || Sl(e, t), null !== Vu) {
        var n = Wu;
        Wu |= Bu;
        for (var r = Cl();;) try {
          Ol();
          break
        } catch (t) {
          Tl(e, t)
        }
        if (ao(), Wu = n, Au.current = r, qu === Uu) throw n = Ku, Sl(e, t), tc(e, t), yl(e), n;
        if (null !== Vu) throw Error(a(261));
        e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, Hu = null, Rl(e), yl(e)
      }
    }
    return null
  }

  function El(e, t) {
    var n = Wu;
    Wu |= 1;
    try {
      return e(t)
    } finally {
      (Wu = n) === Ru && Qi()
    }
  }

  function kl(e, t) {
    var n = Wu;
    Wu &= -2, Wu |= ju;
    try {
      return e(t)
    } finally {
      (Wu = n) === Ru && Qi()
    }
  }

  function Sl(e, t) {
    e.finishedWork = null, e.finishedExpirationTime = 0;
    var n = e.timeoutHandle;
    if (-1 !== n && (e.timeoutHandle = -1, or(n)), null !== Vu)
      for (n = Vu.return; null !== n;) {
        var r = n;
        switch (r.tag) {
          case 1:
            var i = r.type.childContextTypes;
            null != i && xi();
            break;
          case 3:
            Ho(), Ei();
            break;
          case 5:
            Yo(r);
            break;
          case 4:
            Ho();
            break;
          case 13:
          case 19:
            pi(qo);
            break;
          case 10:
            lo(r)
        }
        n = n.return
      }
    Hu = e, Vu = ql(e.current, null), Yu = t, qu = Lu, Ku = null, Qu = Ju = 1073741823, Xu = null, Zu = 0, el = !1
  }

  function Tl(e, t) {
    for (;;) {
      try {
        if (ao(), ga(), null === Vu || null === Vu.return) return qu = Uu, Ku = t, null;
        e: {
          var n = e,
            r = Vu.return,
            i = Vu,
            o = t;
          if (t = Yu, i.effectTag |= 2048, i.firstEffect = i.lastEffect = null, null !== o && "object" == typeof o && "function" == typeof o.then) {
            var a = o,
              u = 0 != (1 & qo.current),
              l = r;
            do {
              var c;
              if (c = 13 === l.tag) {
                var s = l.memoizedState;
                if (null !== s) c = null !== s.dehydrated;
                else {
                  var f = l.memoizedProps;
                  c = void 0 !== f.fallback && (!0 !== f.unstable_avoidThisFallback || !u)
                }
              }
              if (c) {
                var d = l.updateQueue;
                if (null === d) {
                  var p = new Set;
                  p.add(a), l.updateQueue = p
                } else d.add(a);
                if (0 == (2 & l.mode)) {
                  if (l.effectTag |= 64, i.effectTag &= -2981, 1 === i.tag)
                    if (null === i.alternate) i.tag = 17;
                    else {
                      var h = mo(1073741823, null);
                      h.tag = 2, bo(i, h)
                    }
                  i.expirationTime = 1073741823;
                  break e
                }
                o = void 0, i = t;
                var g = n.pingCache;
                if (null === g ? (g = n.pingCache = new _u, o = new Set, g.set(a, o)) : void 0 === (o = g.get(a)) && (o = new Set, g.set(a, o)), !o.has(i)) {
                  o.add(i);
                  var m = Gl.bind(null, n, a, i);
                  a.then(m, m)
                }
                l.effectTag |= 4096, l.expirationTime = t;
                break e
              }
              l = l.return
            } while (null !== l);
            o = Error((Q(i.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + X(i))
          }
          qu !== $u && (qu = Fu),
          o = hu(o, i),
          l = r;do {
            switch (l.tag) {
              case 3:
                a = o, l.effectTag |= 4096, l.expirationTime = t, yo(l, Iu(l, a, t));
                break e;
              case 1:
                a = o;
                var v = l.type,
                  b = l.stateNode;
                if (0 == (64 & l.effectTag) && ("function" == typeof v.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === al || !al.has(b)))) {
                  l.effectTag |= 4096, l.expirationTime = t, yo(l, Ou(l, a, t));
                  break e
                }
            }
            l = l.return
          } while (null !== l)
        }
        Vu = Al(Vu)
      } catch (e) {
        t = e;
        continue
      }
      break
    }
  }

  function Cl() {
    var e = Au.current;
    return Au.current = Aa, null === e ? Aa : e
  }

  function _l(e, t) {
    e < Ju && 2 < e && (Ju = e), null !== t && e < Qu && 2 < e && (Qu = e, Xu = t)
  }

  function Il(e) {
    e > Zu && (Zu = e)
  }

  function Ol() {
    for (; null !== Vu;) Vu = Dl(Vu)
  }

  function Pl() {
    for (; null !== Vu && !Pi();) Vu = Dl(Vu)
  }

  function Dl(e) {
    var t = Pu(e.alternate, e, Yu);
    return e.memoizedProps = e.pendingProps, null === t && (t = Al(e)), Nu.current = null, t
  }

  function Al(e) {
    Vu = e;
    do {
      var t = Vu.alternate;
      if (e = Vu.return, 0 == (2048 & Vu.effectTag)) {
        e: {
          var n = t,
            r = Yu,
            o = (t = Vu).pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
              break;
            case 15:
            case 0:
              break;
            case 1:
              wi(t.type) && xi();
              break;
            case 3:
              Ho(), Ei(), (o = t.stateNode).pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (null === n || null === n.child) && za(t) && fu(t), nu(t);
              break;
            case 5:
              Yo(t), r = $o(zo.current);
              var u = t.type;
              if (null !== n && null != t.stateNode) ru(n, t, u, o, r), n.ref !== t.ref && (t.effectTag |= 128);
              else if (o) {
                var l = $o(Fo.current);
                if (za(t)) {
                  var c = (o = t).stateNode;
                  n = o.type;
                  var s = o.memoizedProps,
                    f = r;
                  switch (c[cr] = o, c[sr] = s, u = void 0, r = c, n) {
                    case "iframe":
                    case "object":
                    case "embed":
                      Tn("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (c = 0; c < Ze.length; c++) Tn(Ze[c], r);
                      break;
                    case "source":
                      Tn("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tn("error", r), Tn("load", r);
                      break;
                    case "form":
                      Tn("reset", r), Tn("submit", r);
                      break;
                    case "details":
                      Tn("toggle", r);
                      break;
                    case "input":
                      _e(r, s), Tn("invalid", r), $n(f, "onChange");
                      break;
                    case "select":
                      r._wrapperState = {
                        wasMultiple: !!s.multiple
                      }, Tn("invalid", r), $n(f, "onChange");
                      break;
                    case "textarea":
                      je(r, s), Tn("invalid", r), $n(f, "onChange")
                  }
                  for (u in Gn(n, s), c = null, s) s.hasOwnProperty(u) && (l = s[u], "children" === u ? "string" == typeof l ? r.textContent !== l && (c = ["children", l]) : "number" == typeof l && r.textContent !== "" + l && (c = ["children", "" + l]) : p.hasOwnProperty(u) && null != l && $n(f, u));
                  switch (n) {
                    case "input":
                      Se(r), Pe(r, s, !0);
                      break;
                    case "textarea":
                      Se(r), Me(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof s.onClick && (r.onclick = Wn)
                  }
                  u = c, o.updateQueue = u, (o = null !== u) && fu(t)
                } else {
                  n = t, f = u, s = o, c = 9 === r.nodeType ? r : r.ownerDocument, l === Le.html && (l = Ue(f)), l === Le.html ? "script" === f ? ((s = c.createElement("div")).innerHTML = "<script><\/script>", c = s.removeChild(s.firstChild)) : "string" == typeof s.is ? c = c.createElement(f, {
                    is: s.is
                  }) : (c = c.createElement(f), "select" === f && (f = c, s.multiple ? f.multiple = !0 : s.size && (f.size = s.size))) : c = c.createElementNS(l, f), (s = c)[cr] = n, s[sr] = o, tu(s, t, !1, !1), t.stateNode = s;
                  var d = r,
                    h = zn(f = u, n = o);
                  switch (f) {
                    case "iframe":
                    case "object":
                    case "embed":
                      Tn("load", s), r = n;
                      break;
                    case "video":
                    case "audio":
                      for (r = 0; r < Ze.length; r++) Tn(Ze[r], s);
                      r = n;
                      break;
                    case "source":
                      Tn("error", s), r = n;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tn("error", s), Tn("load", s), r = n;
                      break;
                    case "form":
                      Tn("reset", s), Tn("submit", s), r = n;
                      break;
                    case "details":
                      Tn("toggle", s), r = n;
                      break;
                    case "input":
                      _e(s, n), r = Ce(s, n), Tn("invalid", s), $n(d, "onChange");
                      break;
                    case "option":
                      r = Ae(s, n);
                      break;
                    case "select":
                      s._wrapperState = {
                        wasMultiple: !!n.multiple
                      }, r = i({}, n, {
                        value: void 0
                      }), Tn("invalid", s), $n(d, "onChange");
                      break;
                    case "textarea":
                      je(s, n), r = Re(s, n), Tn("invalid", s), $n(d, "onChange");
                      break;
                    default:
                      r = n
                  }
                  Gn(f, r), c = void 0, l = f;
                  var g = s,
                    m = r;
                  for (c in m)
                    if (m.hasOwnProperty(c)) {
                      var v = m[c];
                      "style" === c ? Un(g, v) : "dangerouslySetInnerHTML" === c ? null != (v = v ? v.__html : void 0) && ze(g, v) : "children" === c ? "string" == typeof v ? ("textarea" !== l || "" !== v) && $e(g, v) : "number" == typeof v && $e(g, "" + v) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (p.hasOwnProperty(c) ? null != v && $n(d, c) : null != v && Ee(g, c, v, h))
                    }
                  switch (f) {
                    case "input":
                      Se(s), Pe(s, n, !1);
                      break;
                    case "textarea":
                      Se(s), Me(s);
                      break;
                    case "option":
                      null != n.value && s.setAttribute("value", "" + xe(n.value));
                      break;
                    case "select":
                      (r = s).multiple = !!n.multiple, null != (s = n.value) ? Ne(r, !!n.multiple, s, !1) : null != n.defaultValue && Ne(r, !!n.multiple, n.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof r.onClick && (s.onclick = Wn)
                  }(o = nr(u, o)) && fu(t)
                }
                null !== t.ref && (t.effectTag |= 128)
              } else if (null === t.stateNode) throw Error(a(166));
              break;
            case 6:
              if (n && null != t.stateNode) iu(n, t, n.memoizedProps, o);
              else {
                if ("string" != typeof o && null === t.stateNode) throw Error(a(166));
                r = $o(zo.current), $o(Fo.current), za(t) ? (u = (o = t).stateNode, r = o.memoizedProps, u[cr] = o, (o = u.nodeValue !== r) && fu(t)) : (u = t, (o = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(o))[cr] = u, t.stateNode = o)
              }
              break;
            case 11:
              break;
            case 13:
              if (pi(qo), o = t.memoizedState, 0 != (64 & t.effectTag)) {
                t.expirationTime = r;
                break e
              }
              o = null !== o, u = !1, null === n ? void 0 !== t.memoizedProps.fallback && za(t) : (u = null !== (r = n.memoizedState), o || null === r || null !== (r = n.child.sibling) && (null !== (s = t.firstEffect) ? (t.firstEffect = r, r.nextEffect = s) : (t.firstEffect = t.lastEffect = r, r.nextEffect = null), r.effectTag = 8)), o && !u && 0 != (2 & t.mode) && (null === n && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & qo.current) ? qu === Lu && (qu = Gu) : (qu !== Lu && qu !== Gu || (qu = zu), 0 !== Zu && null !== Hu && (tc(Hu, Yu), nc(Hu, Zu)))), (o || u) && (t.effectTag |= 4);
              break;
            case 7:
            case 8:
            case 12:
              break;
            case 4:
              Ho(), nu(t);
              break;
            case 10:
              lo(t);
              break;
            case 9:
            case 14:
              break;
            case 17:
              wi(t.type) && xi();
              break;
            case 19:
              if (pi(qo), null === (o = t.memoizedState)) break;
              if (u = 0 != (64 & t.effectTag), null === (s = o.rendering)) {
                if (u) du(o, !1);
                else if (qu !== Lu || null !== n && 0 != (64 & n.effectTag))
                  for (n = t.child; null !== n;) {
                    if (null !== (s = Ko(n))) {
                      for (t.effectTag |= 64, du(o, !1), null !== (u = s.updateQueue) && (t.updateQueue = u, t.effectTag |= 4), null === o.lastEffect && (t.firstEffect = null), t.lastEffect = o.lastEffect, o = r, u = t.child; null !== u;) n = o, (r = u).effectTag &= 2, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null, null === (s = r.alternate) ? (r.childExpirationTime = 0, r.expirationTime = n, r.child = null, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null) : (r.childExpirationTime = s.childExpirationTime, r.expirationTime = s.expirationTime, r.child = s.child, r.memoizedProps = s.memoizedProps, r.memoizedState = s.memoizedState, r.updateQueue = s.updateQueue, n = s.dependencies, r.dependencies = null === n ? null : {
                        expirationTime: n.expirationTime,
                        firstContext: n.firstContext,
                        responders: n.responders
                      }), u = u.sibling;
                      hi(qo, 1 & qo.current | 2), t = t.child;
                      break e
                    }
                    n = n.sibling
                  }
              } else {
                if (!u)
                  if (null !== (n = Ko(s))) {
                    if (t.effectTag |= 64, u = !0, null !== (r = n.updateQueue) && (t.updateQueue = r, t.effectTag |= 4), du(o, !0), null === o.tail && "hidden" === o.tailMode) {
                      null !== (t = t.lastEffect = o.lastEffect) && (t.nextEffect = null);
                      break
                    }
                  } else Hi() > o.tailExpiration && 1 < r && (t.effectTag |= 64, u = !0, du(o, !1), t.expirationTime = t.childExpirationTime = r - 1);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (r = o.last) ? r.sibling = s : t.child = s, o.last = s)
              }
              if (null !== o.tail) {
                0 === o.tailExpiration && (o.tailExpiration = Hi() + 500), r = o.tail, o.rendering = r, o.tail = r.sibling, o.lastEffect = t.lastEffect, r.sibling = null, o = qo.current, hi(qo, o = u ? 1 & o | 2 : 1 & o), t = r;
                break e
              }
              break;
            case 20:
            case 21:
              break;
            default:
              throw Error(a(156, t.tag))
          }
          t = null
        }
        if (o = Vu, 1 === Yu || 1 !== o.childExpirationTime) {
          for (u = 0, r = o.child; null !== r;)(n = r.expirationTime) > u && (u = n), (s = r.childExpirationTime) > u && (u = s), r = r.sibling;
          o.childExpirationTime = u
        }
        if (null !== t) return t;null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = Vu.firstEffect), null !== Vu.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Vu.firstEffect), e.lastEffect = Vu.lastEffect), 1 < Vu.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Vu : e.firstEffect = Vu, e.lastEffect = Vu))
      }
      else {
        if (null !== (t = pu(Vu))) return t.effectTag &= 2047, t;
        null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
      }
      if (null !== (t = Vu.sibling)) return t;
      Vu = e
    } while (null !== Vu);
    return qu === Lu && (qu = $u), null
  }

  function Nl(e) {
    var t = e.expirationTime;
    return t > (e = e.childExpirationTime) ? t : e
  }

  function Rl(e) {
    var t = Vi();
    return qi(99, jl.bind(null, e, t)), null
  }

  function jl(e, t) {
    if (Ml(), (Wu & (Bu | Mu)) !== Ru) throw Error(a(327));
    var n = e.finishedWork,
      r = e.finishedExpirationTime;
    if (null === n) return null;
    if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
    var i = Nl(n);
    if (e.firstPendingTime = i, r <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1), r <= e.lastPingedTime && (e.lastPingedTime = 0), r <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === Hu && (Vu = Hu = null, Yu = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, i = n.firstEffect) : i = n : i = n.firstEffect, null !== i) {
      var o = Wu;
      Wu |= Mu, Nu.current = null, er = Sn;
      var u = qn();
      if (Kn(u)) {
        if ("selectionStart" in u) var l = {
          start: u.selectionStart,
          end: u.selectionEnd
        };
        else e: {
          var c = (l = (l = u.ownerDocument) && l.defaultView || window).getSelection && l.getSelection();
          if (c && 0 !== c.rangeCount) {
            l = c.anchorNode;
            var s = c.anchorOffset,
              f = c.focusNode;
            c = c.focusOffset;
            try {
              l.nodeType, f.nodeType
            } catch (e) {
              l = null;
              break e
            }
            var d = 0,
              p = -1,
              h = -1,
              g = 0,
              m = 0,
              v = u,
              b = null;
            t: for (;;) {
              for (var y; v !== l || 0 !== s && 3 !== v.nodeType || (p = d + s), v !== f || 0 !== c && 3 !== v.nodeType || (h = d + c), 3 === v.nodeType && (d += v.nodeValue.length), null !== (y = v.firstChild);) b = v, v = y;
              for (;;) {
                if (v === u) break t;
                if (b === l && ++g === s && (p = d), b === f && ++m === c && (h = d), null !== (y = v.nextSibling)) break;
                b = (v = b).parentNode
              }
              v = y
            }
            l = -1 === p || -1 === h ? null : {
              start: p,
              end: h
            }
          } else l = null
        }
        l = l || {
          start: 0,
          end: 0
        }
      } else l = null;
      tr = {
        focusedElem: u,
        selectionRange: l
      }, Sn = !1, rl = i;
      do {
        try {
          Bl()
        } catch (e) {
          if (null === rl) throw Error(a(330));
          Fl(rl, e), rl = rl.nextEffect
        }
      } while (null !== rl);
      rl = i;
      do {
        try {
          for (u = e, l = t; null !== rl;) {
            var w = rl.effectTag;
            if (16 & w && $e(rl.stateNode, ""), 128 & w) {
              var x = rl.alternate;
              if (null !== x) {
                var E = x.ref;
                null !== E && ("function" == typeof E ? E(null) : E.current = null)
              }
            }
            switch (1038 & w) {
              case 2:
                ku(rl), rl.effectTag &= -3;
                break;
              case 6:
                ku(rl), rl.effectTag &= -3, Tu(rl.alternate, rl);
                break;
              case 1024:
                rl.effectTag &= -1025;
                break;
              case 1028:
                rl.effectTag &= -1025, Tu(rl.alternate, rl);
                break;
              case 4:
                Tu(rl.alternate, rl);
                break;
              case 8:
                Su(u, s = rl, l), xu(s)
            }
            rl = rl.nextEffect
          }
        } catch (e) {
          if (null === rl) throw Error(a(330));
          Fl(rl, e), rl = rl.nextEffect
        }
      } while (null !== rl);
      if (E = tr, x = qn(), w = E.focusedElem, l = E.selectionRange, x !== w && w && w.ownerDocument && function e(t, n) {
          return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
        }(w.ownerDocument.documentElement, w)) {
        null !== l && Kn(w) && (x = l.start, void 0 === (E = l.end) && (E = x), "selectionStart" in w ? (w.selectionStart = x, w.selectionEnd = Math.min(E, w.value.length)) : (E = (x = w.ownerDocument || document) && x.defaultView || window).getSelection && (E = E.getSelection(), s = w.textContent.length, u = Math.min(l.start, s), l = void 0 === l.end ? u : Math.min(l.end, s), !E.extend && u > l && (s = l, l = u, u = s), s = Yn(w, u), f = Yn(w, l), s && f && (1 !== E.rangeCount || E.anchorNode !== s.node || E.anchorOffset !== s.offset || E.focusNode !== f.node || E.focusOffset !== f.offset) && ((x = x.createRange()).setStart(s.node, s.offset), E.removeAllRanges(), u > l ? (E.addRange(x), E.extend(f.node, f.offset)) : (x.setEnd(f.node, f.offset), E.addRange(x))))), x = [];
        for (E = w; E = E.parentNode;) 1 === E.nodeType && x.push({
          element: E,
          left: E.scrollLeft,
          top: E.scrollTop
        });
        for ("function" == typeof w.focus && w.focus(), w = 0; w < x.length; w++)(E = x[w]).element.scrollLeft = E.left, E.element.scrollTop = E.top
      }
      tr = null, Sn = !!er, er = null, e.current = n, rl = i;
      do {
        try {
          for (w = r; null !== rl;) {
            var k = rl.effectTag;
            if (36 & k) {
              var S = rl.alternate;
              switch (E = w, (x = rl).tag) {
                case 0:
                case 11:
                case 15:
                  yu(16, 32, x);
                  break;
                case 1:
                  var T = x.stateNode;
                  if (4 & x.effectTag)
                    if (null === S) T.componentDidMount();
                    else {
                      var C = x.elementType === x.type ? S.memoizedProps : to(x.type, S.memoizedProps);
                      T.componentDidUpdate(C, S.memoizedState, T.__reactInternalSnapshotBeforeUpdate)
                    }
                  var _ = x.updateQueue;
                  null !== _ && ko(0, _, T);
                  break;
                case 3:
                  var I = x.updateQueue;
                  if (null !== I) {
                    if (u = null, null !== x.child) switch (x.child.tag) {
                      case 5:
                        u = x.child.stateNode;
                        break;
                      case 1:
                        u = x.child.stateNode
                    }
                    ko(0, I, u)
                  }
                  break;
                case 5:
                  var O = x.stateNode;
                  null === S && 4 & x.effectTag && nr(x.type, x.memoizedProps) && O.focus();
                  break;
                case 6:
                case 4:
                case 12:
                  break;
                case 13:
                  if (null === x.memoizedState) {
                    var P = x.alternate;
                    if (null !== P) {
                      var D = P.memoizedState;
                      if (null !== D) {
                        var A = D.dehydrated;
                        null !== A && Tt(A)
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 20:
                case 21:
                  break;
                default:
                  throw Error(a(163))
              }
            }
            if (128 & k) {
              x = void 0;
              var N = rl.ref;
              if (null !== N) {
                var R = rl.stateNode;
                switch (rl.tag) {
                  case 5:
                    x = R;
                    break;
                  default:
                    x = R
                }
                "function" == typeof N ? N(x) : N.current = x
              }
            }
            rl = rl.nextEffect
          }
        } catch (e) {
          if (null === rl) throw Error(a(330));
          Fl(rl, e), rl = rl.nextEffect
        }
      } while (null !== rl);
      rl = null, Fi(), Wu = o
    } else e.current = n;
    if (ul) ul = !1, ll = e, cl = t;
    else
      for (rl = i; null !== rl;) t = rl.nextEffect, rl.nextEffect = null, rl = t;
    if (0 === (t = e.firstPendingTime) && (al = null), 1073741823 === t ? e === dl ? fl++ : (fl = 0, dl = e) : fl = 0, "function" == typeof $l && $l(n.stateNode, r), yl(e), il) throw il = !1, e = ol, ol = null, e;
    return (Wu & ju) !== Ru ? null : (Qi(), null)
  }

  function Bl() {
    for (; null !== rl;) {
      var e = rl.effectTag;
      0 != (256 & e) && bu(rl.alternate, rl), 0 == (512 & e) || ul || (ul = !0, Ki(97, (function() {
        return Ml(), null
      }))), rl = rl.nextEffect
    }
  }

  function Ml() {
    if (90 !== cl) {
      var e = 97 < cl ? 97 : cl;
      return cl = 90, qi(e, Ll)
    }
  }

  function Ll() {
    if (null === ll) return !1;
    var e = ll;
    if (ll = null, (Wu & (Bu | Mu)) !== Ru) throw Error(a(331));
    var t = Wu;
    for (Wu |= Mu, e = e.current.firstEffect; null !== e;) {
      try {
        var n = e;
        if (0 != (512 & n.effectTag)) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            yu(128, 0, n), yu(0, 64, n)
        }
      } catch (t) {
        if (null === e) throw Error(a(330));
        Fl(e, t)
      }
      n = e.nextEffect, e.nextEffect = null, e = n
    }
    return Wu = t, Qi(), !0
  }

  function Ul(e, t, n) {
    bo(e, t = Iu(e, t = hu(n, t), 1073741823)), null !== (e = vl(e, 1073741823)) && yl(e)
  }

  function Fl(e, t) {
    if (3 === e.tag) Ul(e, e, t);
    else
      for (var n = e.return; null !== n;) {
        if (3 === n.tag) {
          Ul(n, e, t);
          break
        }
        if (1 === n.tag) {
          var r = n.stateNode;
          if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === al || !al.has(r))) {
            bo(n, e = Ou(n, e = hu(t, e), 1073741823)), null !== (n = vl(n, 1073741823)) && yl(n);
            break
          }
        }
        n = n.return
      }
  }

  function Gl(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t), Hu === e && Yu === n ? qu === zu || qu === Gu && 1073741823 === Ju && Hi() - tl < nl ? Sl(e, Yu) : el = !0 : ec(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, e.finishedExpirationTime === n && (e.finishedExpirationTime = 0, e.finishedWork = null), yl(e)))
  }

  function zl(e, t) {
    var n = e.stateNode;
    null !== n && n.delete(t), 0 === (t = 0) && (t = gl(t = hl(), e, null)), null !== (e = vl(e, t)) && yl(e)
  }
  Pu = function(e, t, n) {
    var r = t.expirationTime;
    if (null !== e) {
      var i = t.pendingProps;
      if (e.memoizedProps !== i || vi.current) Ha = !0;
      else {
        if (r < n) {
          switch (Ha = !1, t.tag) {
            case 3:
              eu(t), $a();
              break;
            case 5:
              if (Vo(t), 4 & t.mode && 1 !== n && i.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
              break;
            case 1:
              wi(t.type) && Ti(t);
              break;
            case 4:
              Wo(t, t.stateNode.containerInfo);
              break;
            case 10:
              uo(t, t.memoizedProps.value);
              break;
            case 13:
              if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? au(e, t, n) : (hi(qo, 1 & qo.current), null !== (t = su(e, t, n)) ? t.sibling : null);
              hi(qo, 1 & qo.current);
              break;
            case 19:
              if (r = t.childExpirationTime >= n, 0 != (64 & e.effectTag)) {
                if (r) return cu(e, t, n);
                t.effectTag |= 64
              }
              if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null), hi(qo, qo.current), !r) return null
          }
          return su(e, t, n)
        }
        Ha = !1
      }
    } else Ha = !1;
    switch (t.expirationTime = 0, t.tag) {
      case 2:
        if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, i = yi(t, mi.current), so(t, n), i = ha(null, t, r, e, i, n), t.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
          if (t.tag = 1, ga(), wi(r)) {
            var o = !0;
            Ti(t)
          } else o = !1;
          t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null;
          var u = r.getDerivedStateFromProps;
          "function" == typeof u && _o(t, r, u, e), i.updater = Io, t.stateNode = i, i._reactInternalFiber = t, Ao(t, r, e, n), t = Za(null, t, r, !0, o, n)
        } else t.tag = 0, Va(null, t, i, n), t = t.child;
        return t;
      case 16:
        if (i = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, function(e) {
            if (-1 === e._status) {
              e._status = 0;
              var t = e._ctor;
              t = t(), e._result = t, t.then((function(t) {
                0 === e._status && (t = t.default, e._status = 1, e._result = t)
              }), (function(t) {
                0 === e._status && (e._status = 2, e._result = t)
              }))
            }
          }(i), 1 !== i._status) throw i._result;
        switch (i = i._result, t.type = i, o = t.tag = function(e) {
          if ("function" == typeof e) return Yl(e) ? 1 : 0;
          if (null != e) {
            if ((e = e.$$typeof) === W) return 11;
            if (e === Y) return 14
          }
          return 2
        }(i), e = to(i, e), o) {
          case 0:
            t = Qa(null, t, i, e, n);
            break;
          case 1:
            t = Xa(null, t, i, e, n);
            break;
          case 11:
            t = Ya(null, t, i, e, n);
            break;
          case 14:
            t = qa(null, t, i, to(i.type, e), r, n);
            break;
          default:
            throw Error(a(306, i, ""))
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, Qa(e, t, r, i = t.elementType === r ? i : to(r, i), n);
      case 1:
        return r = t.type, i = t.pendingProps, Xa(e, t, r, i = t.elementType === r ? i : to(r, i), n);
      case 3:
        if (eu(t), null === (r = t.updateQueue)) throw Error(a(282));
        if (i = null !== (i = t.memoizedState) ? i.element : null, Eo(t, r, t.pendingProps, null, n), (r = t.memoizedState.element) === i) $a(), t = su(e, t, n);
        else {
          if ((i = t.stateNode.hydrate) && (Ba = ar(t.stateNode.containerInfo.firstChild), ja = t, i = Ma = !0), i)
            for (n = Lo(t, null, r, n), t.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
          else Va(e, t, r, n), $a();
          t = t.child
        }
        return t;
      case 5:
        return Vo(t), null === e && Fa(t), r = t.type, i = t.pendingProps, o = null !== e ? e.memoizedProps : null, u = i.children, rr(r, i) ? u = null : null !== o && rr(r, o) && (t.effectTag |= 16), Ja(e, t), 4 & t.mode && 1 !== n && i.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (Va(e, t, u, n), t = t.child), t;
      case 6:
        return null === e && Fa(t), null;
      case 13:
        return au(e, t, n);
      case 4:
        return Wo(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Mo(t, null, r, n) : Va(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, Ya(e, t, r, i = t.elementType === r ? i : to(r, i), n);
      case 7:
        return Va(e, t, t.pendingProps, n), t.child;
      case 8:
      case 12:
        return Va(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, u = t.memoizedProps, uo(t, o = i.value), null !== u) {
            var l = u.value;
            if (0 === (o = ei(l, o) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(l, o) : 1073741823))) {
              if (u.children === i.children && !vi.current) {
                t = su(e, t, n);
                break e
              }
            } else
              for (null !== (l = t.child) && (l.return = t); null !== l;) {
                var c = l.dependencies;
                if (null !== c) {
                  u = l.child;
                  for (var s = c.firstContext; null !== s;) {
                    if (s.context === r && 0 != (s.observedBits & o)) {
                      1 === l.tag && ((s = mo(n, null)).tag = 2, bo(l, s)), l.expirationTime < n && (l.expirationTime = n), null !== (s = l.alternate) && s.expirationTime < n && (s.expirationTime = n), co(l.return, n), c.expirationTime < n && (c.expirationTime = n);
                      break
                    }
                    s = s.next
                  }
                } else u = 10 === l.tag && l.type === t.type ? null : l.child;
                if (null !== u) u.return = l;
                else
                  for (u = l; null !== u;) {
                    if (u === t) {
                      u = null;
                      break
                    }
                    if (null !== (l = u.sibling)) {
                      l.return = u.return, u = l;
                      break
                    }
                    u = u.return
                  }
                l = u
              }
          }
          Va(e, t, i.children, n),
          t = t.child
        }
        return t;
      case 9:
        return i = t.type, r = (o = t.pendingProps).children, so(t, n), r = r(i = fo(i, o.unstable_observedBits)), t.effectTag |= 1, Va(e, t, r, n), t.child;
      case 14:
        return o = to(i = t.type, t.pendingProps), qa(e, t, i, o = to(i.type, o), r, n);
      case 15:
        return Ka(e, t, t.type, t.pendingProps, r, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : to(r, i), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, wi(r) ? (e = !0, Ti(t)) : e = !1, so(t, n), Po(t, r, i), Ao(t, r, i, n), Za(null, t, r, !0, e, n);
      case 19:
        return cu(e, t, n)
    }
    throw Error(a(156, t.tag))
  };
  var $l = null,
    Wl = null;

  function Hl(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
  }

  function Vl(e, t, n, r) {
    return new Hl(e, t, n, r)
  }

  function Yl(e) {
    return !(!(e = e.prototype) || !e.isReactComponent)
  }

  function ql(e, t) {
    var n = e.alternate;
    return null === n ? ((n = Vl(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
      expirationTime: t.expirationTime,
      firstContext: t.firstContext,
      responders: t.responders
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
  }

  function Kl(e, t, n, r, i, o) {
    var u = 2;
    if (r = e, "function" == typeof e) Yl(e) && (u = 1);
    else if ("string" == typeof e) u = 5;
    else e: switch (e) {
      case L:
        return Jl(n.children, i, o, t);
      case $:
        u = 8, i |= 7;
        break;
      case U:
        u = 8, i |= 1;
        break;
      case F:
        return (e = Vl(12, n, t, 8 | i)).elementType = F, e.type = F, e.expirationTime = o, e;
      case H:
        return (e = Vl(13, n, t, i)).type = H, e.elementType = H, e.expirationTime = o, e;
      case V:
        return (e = Vl(19, n, t, i)).elementType = V, e.expirationTime = o, e;
      default:
        if ("object" == typeof e && null !== e) switch (e.$$typeof) {
          case G:
            u = 10;
            break e;
          case z:
            u = 9;
            break e;
          case W:
            u = 11;
            break e;
          case Y:
            u = 14;
            break e;
          case q:
            u = 16, r = null;
            break e
        }
        throw Error(a(130, null == e ? e : typeof e, ""))
    }
    return (t = Vl(u, n, t, i)).elementType = e, t.type = r, t.expirationTime = o, t
  }

  function Jl(e, t, n, r) {
    return (e = Vl(7, e, r, t)).expirationTime = n, e
  }

  function Ql(e, t, n) {
    return (e = Vl(6, e, null, t)).expirationTime = n, e
  }

  function Xl(e, t, n) {
    return (t = Vl(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t
  }

  function Zl(e, t, n) {
    this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
  }

  function ec(e, t) {
    var n = e.firstSuspendedTime;
    return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t
  }

  function tc(e, t) {
    var n = e.firstSuspendedTime,
      r = e.lastSuspendedTime;
    n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
  }

  function nc(e, t) {
    t > e.firstPendingTime && (e.firstPendingTime = t);
    var n = e.firstSuspendedTime;
    0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
  }

  function rc(e, t) {
    var n = e.lastExpiredTime;
    (0 === n || n > t) && (e.lastExpiredTime = t)
  }

  function ic(e, t, n, r) {
    var i = t.current,
      o = hl(),
      u = To.suspense;
    o = gl(o, i, u);
    e: if (n) {
      t: {
        if (et(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(a(170));
        var l = n;do {
          switch (l.tag) {
            case 3:
              l = l.stateNode.context;
              break t;
            case 1:
              if (wi(l.type)) {
                l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                break t
              }
          }
          l = l.return
        } while (null !== l);
        throw Error(a(171))
      }
      if (1 === n.tag) {
        var c = n.type;
        if (wi(c)) {
          n = Si(n, c, l);
          break e
        }
      }
      n = l
    }
    else n = gi;
    return null === t.context ? t.context = n : t.pendingContext = n, (t = mo(o, u)).payload = {
      element: e
    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), bo(i, t), ml(i, o), o
  }

  function oc(e) {
    if (!(e = e.current).child) return null;
    switch (e.child.tag) {
      case 5:
      default:
        return e.child.stateNode
    }
  }

  function ac(e, t) {
    null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
  }

  function uc(e, t) {
    ac(e, t), (e = e.alternate) && ac(e, t)
  }

  function lc(e, t, n) {
    var r = new Zl(e, t, n = null != n && !0 === n.hydrate),
      i = Vl(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
    r.current = i, i.stateNode = r, e[fr] = r.current, n && 0 !== t && function(e) {
      var t = Rn(e);
      gt.forEach((function(n) {
        jn(n, e, t)
      })), mt.forEach((function(n) {
        jn(n, e, t)
      }))
    }(9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = r
  }

  function cc(e) {
    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
  }

  function sc(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var a = o._internalRoot;
      if ("function" == typeof i) {
        var u = i;
        i = function() {
          var e = oc(a);
          u.call(e)
        }
      }
      ic(t, a, e, i)
    } else {
      if (o = n._reactRootContainer = function(e, t) {
          if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
            for (var n; n = e.lastChild;) e.removeChild(n);
          return new lc(e, 0, t ? {
            hydrate: !0
          } : void 0)
        }(n, r), a = o._internalRoot, "function" == typeof i) {
        var l = i;
        i = function() {
          var e = oc(a);
          l.call(e)
        }
      }
      kl((function() {
        ic(t, a, e, i)
      }))
    }
    return oc(a)
  }

  function fc(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!cc(t)) throw Error(a(200));
    return function(e, t, n) {
      var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: M,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
      }
    }(e, t, null, n)
  }
  it = function(e) {
    if (13 === e.tag) {
      var t = eo(hl(), 150, 100);
      ml(e, t), uc(e, t)
    }
  }, ot = function(e) {
    if (13 === e.tag) {
      hl();
      var t = Zi++;
      ml(e, t), uc(e, t)
    }
  }, at = function(e) {
    if (13 === e.tag) {
      var t = hl();
      ml(e, t = gl(t, e, null)), uc(e, t)
    }
  }, ee = function(e, t, n) {
    switch (t) {
      case "input":
        if (Oe(e, n), t = n.name, "radio" === n.type && null != t) {
          for (n = e; n.parentNode;) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = gr(r);
              if (!i) throw Error(a(90));
              Te(r), Oe(r, i)
            }
          }
        }
        break;
      case "textarea":
        Be(e, n);
        break;
      case "select":
        null != (t = n.value) && Ne(e, !!n.multiple, t, !1)
    }
  }, lc.prototype.render = function(e, t) {
    ic(e, this._internalRoot, null, void 0 === t ? null : t)
  }, lc.prototype.unmount = function(e) {
    ic(null, this._internalRoot, null, void 0 === e ? null : e)
  }, ae = El, ue = function(e, t, n, r) {
    var i = Wu;
    Wu |= 4;
    try {
      return qi(98, e.bind(null, t, n, r))
    } finally {
      (Wu = i) === Ru && Qi()
    }
  }, le = function() {
    (Wu & (1 | Bu | Mu)) === Ru && (function() {
      if (null !== sl) {
        var e = sl;
        sl = null, e.forEach((function(e, t) {
          rc(t, e), yl(t)
        })), Qi()
      }
    }(), Ml())
  }, ce = function(e, t) {
    var n = Wu;
    Wu |= 2;
    try {
      return e(t)
    } finally {
      (Wu = n) === Ru && Qi()
    }
  };
  var dc, pc, hc = {
    createPortal: fc,
    findDOMNode: function(e) {
      if (null == e) return null;
      if (1 === e.nodeType) return e;
      var t = e._reactInternalFiber;
      if (void 0 === t) {
        if ("function" == typeof e.render) throw Error(a(188));
        throw Error(a(268, Object.keys(e)))
      }
      return e = null === (e = rt(t)) ? null : e.stateNode
    },
    hydrate: function(e, t, n) {
      if (!cc(t)) throw Error(a(200));
      return sc(null, e, t, !0, n)
    },
    render: function(e, t, n) {
      if (!cc(t)) throw Error(a(200));
      return sc(null, e, t, !1, n)
    },
    unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
      if (!cc(n)) throw Error(a(200));
      if (null == e || void 0 === e._reactInternalFiber) throw Error(a(38));
      return sc(e, t, n, !1, r)
    },
    unmountComponentAtNode: function(e) {
      if (!cc(e)) throw Error(a(40));
      return !!e._reactRootContainer && (kl((function() {
        sc(null, null, e, !1, (function() {
          e._reactRootContainer = null
        }))
      })), !0)
    },
    unstable_createPortal: function() {
      return fc.apply(void 0, arguments)
    },
    unstable_batchedUpdates: El,
    flushSync: function(e, t) {
      if ((Wu & (Bu | Mu)) !== Ru) throw Error(a(187));
      var n = Wu;
      Wu |= 1;
      try {
        return qi(99, e.bind(null, t))
      } finally {
        Wu = n, Qi()
      }
    },
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
      Events: [pr, hr, gr, D.injectEventPluginsByName, d, At, function(e) {
        _(e, Dt)
      }, ie, oe, Pn, P, Ml, {
        current: !1
      }]
    }
  };
  pc = (dc = {
      findFiberByHostInstance: dr,
      bundleType: 0,
      version: "16.11.0",
      rendererPackageName: "react-dom"
    }).findFiberByHostInstance,
    function(e) {
      if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled || !t.supportsFiber) return !0;
      try {
        var n = t.inject(e);
        $l = function(e) {
          try {
            t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
          } catch (e) {}
        }, Wl = function(e) {
          try {
            t.onCommitFiberUnmount(n, e)
          } catch (e) {}
        }
      } catch (e) {}
    }(i({}, dc, {
      overrideHookState: null,
      overrideProps: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: N.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(e) {
        return null === (e = rt(e)) ? null : e.stateNode
      },
      findFiberByHostInstance: function(e) {
        return pc ? pc(e) : null
      },
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null
    }));
  var gc = {
      default: hc
    },
    mc = gc && hc || gc;
  e.exports = mc.default || mc
}, function(e, t, n) {
  "use strict";
  e.exports = n(57)
}, function(e, t, n) {
  "use strict";
  /** @license React v0.17.0
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var r, i, o, a, u;
  if (Object.defineProperty(t, "__esModule", {
      value: !0
    }), "undefined" == typeof window || "function" != typeof MessageChannel) {
    var l = null,
      c = null,
      s = function() {
        if (null !== l) try {
          var e = t.unstable_now();
          l(!0, e), l = null
        } catch (e) {
          throw setTimeout(s, 0), e
        }
      },
      f = Date.now();
    t.unstable_now = function() {
      return Date.now() - f
    }, r = function(e) {
      null !== l ? setTimeout(r, 0, e) : (l = e, setTimeout(s, 0))
    }, i = function(e, t) {
      c = setTimeout(e, t)
    }, o = function() {
      clearTimeout(c)
    }, a = function() {
      return !1
    }, u = t.unstable_forceFrameRate = function() {}
  } else {
    var d = window.performance,
      p = window.Date,
      h = window.setTimeout,
      g = window.clearTimeout,
      m = window.requestAnimationFrame,
      v = window.cancelAnimationFrame;
    if ("undefined" != typeof console && ("function" != typeof m && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof v && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")), "object" == typeof d && "function" == typeof d.now) t.unstable_now = function() {
      return d.now()
    };
    else {
      var b = p.now();
      t.unstable_now = function() {
        return p.now() - b
      }
    }
    var y = !1,
      w = null,
      x = -1,
      E = 5,
      k = 0;
    a = function() {
      return t.unstable_now() >= k
    }, u = function() {}, t.unstable_forceFrameRate = function(e) {
      0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : E = 0 < e ? Math.floor(1e3 / e) : 33.33
    };
    var S = new MessageChannel,
      T = S.port2;
    S.port1.onmessage = function() {
      if (null !== w) {
        var e = t.unstable_now();
        k = e + E;
        try {
          w(!0, e) ? T.postMessage(null) : (y = !1, w = null)
        } catch (e) {
          throw T.postMessage(null), e
        }
      } else y = !1
    }, r = function(e) {
      w = e, y || (y = !0, T.postMessage(null))
    }, i = function(e, n) {
      x = h((function() {
        e(t.unstable_now())
      }), n)
    }, o = function() {
      g(x), x = -1
    }
  }

  function C(e, t) {
    var n = e.length;
    e.push(t);
    e: for (;;) {
      var r = Math.floor((n - 1) / 2),
        i = e[r];
      if (!(void 0 !== i && 0 < O(i, t))) break e;
      e[r] = t, e[n] = i, n = r
    }
  }

  function _(e) {
    return void 0 === (e = e[0]) ? null : e
  }

  function I(e) {
    var t = e[0];
    if (void 0 !== t) {
      var n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var r = 0, i = e.length; r < i;) {
          var o = 2 * (r + 1) - 1,
            a = e[o],
            u = o + 1,
            l = e[u];
          if (void 0 !== a && 0 > O(a, n)) void 0 !== l && 0 > O(l, a) ? (e[r] = l, e[u] = n, r = u) : (e[r] = a, e[o] = n, r = o);
          else {
            if (!(void 0 !== l && 0 > O(l, n))) break e;
            e[r] = l, e[u] = n, r = u
          }
        }
      }
      return t
    }
    return null
  }

  function O(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id
  }
  var P = [],
    D = [],
    A = 1,
    N = null,
    R = 3,
    j = !1,
    B = !1,
    M = !1;

  function L(e) {
    for (var t = _(D); null !== t;) {
      if (null === t.callback) I(D);
      else {
        if (!(t.startTime <= e)) break;
        I(D), t.sortIndex = t.expirationTime, C(P, t)
      }
      t = _(D)
    }
  }

  function U(e) {
    if (M = !1, L(e), !B)
      if (null !== _(P)) B = !0, r(F);
      else {
        var t = _(D);
        null !== t && i(U, t.startTime - e)
      }
  }

  function F(e, n) {
    B = !1, M && (M = !1, o()), j = !0;
    var r = R;
    try {
      for (L(n), N = _(P); null !== N && (!(N.expirationTime > n) || e && !a());) {
        var u = N.callback;
        if (null !== u) {
          N.callback = null, R = N.priorityLevel;
          var l = u(N.expirationTime <= n);
          n = t.unstable_now(), "function" == typeof l ? N.callback = l : N === _(P) && I(P), L(n)
        } else I(P);
        N = _(P)
      }
      if (null !== N) var c = !0;
      else {
        var s = _(D);
        null !== s && i(U, s.startTime - n), c = !1
      }
      return c
    } finally {
      N = null, R = r, j = !1
    }
  }

  function G(e) {
    switch (e) {
      case 1:
        return -1;
      case 2:
        return 250;
      case 5:
        return 1073741823;
      case 4:
        return 1e4;
      default:
        return 5e3
    }
  }
  var z = u;
  t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3
    }
    var n = R;
    R = e;
    try {
      return t()
    } finally {
      R = n
    }
  }, t.unstable_next = function(e) {
    switch (R) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = R
    }
    var n = R;
    R = t;
    try {
      return e()
    } finally {
      R = n
    }
  }, t.unstable_scheduleCallback = function(e, n, a) {
    var u = t.unstable_now();
    if ("object" == typeof a && null !== a) {
      var l = a.delay;
      l = "number" == typeof l && 0 < l ? u + l : u, a = "number" == typeof a.timeout ? a.timeout : G(e)
    } else a = G(e), l = u;
    return e = {
      id: A++,
      callback: n,
      priorityLevel: e,
      startTime: l,
      expirationTime: a = l + a,
      sortIndex: -1
    }, l > u ? (e.sortIndex = l, C(D, e), null === _(P) && e === _(D) && (M ? o() : M = !0, i(U, l - u))) : (e.sortIndex = a, C(P, e), B || j || (B = !0, r(F))), e
  }, t.unstable_cancelCallback = function(e) {
    e.callback = null
  }, t.unstable_wrapCallback = function(e) {
    var t = R;
    return function() {
      var n = R;
      R = t;
      try {
        return e.apply(this, arguments)
      } finally {
        R = n
      }
    }
  }, t.unstable_getCurrentPriorityLevel = function() {
    return R
  }, t.unstable_shouldYield = function() {
    var e = t.unstable_now();
    L(e);
    var n = _(P);
    return n !== N && null !== N && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < N.expirationTime || a()
  }, t.unstable_requestPaint = z, t.unstable_continueExecution = function() {
    B || j || (B = !0, r(F))
  }, t.unstable_pauseExecution = function() {}, t.unstable_getFirstCallbackNode = function() {
    return _(P)
  }, t.unstable_Profiling = null
}, function(e, t, n) {
  n(59);
  var r = n(2).Object;
  e.exports = function(e, t) {
    return r.create(e, t)
  }
}, function(e, t, n) {
  var r = n(5);
  r(r.S, "Object", {
    create: n(66)
  })
}, function(e, t, n) {
  var r = n(61);
  e.exports = function(e, t, n) {
    if (r(e), void 0 === t) return e;
    switch (n) {
      case 1:
        return function(n) {
          return e.call(t, n)
        };
      case 2:
        return function(n, r) {
          return e.call(t, n, r)
        };
      case 3:
        return function(n, r, i) {
          return e.call(t, n, r, i)
        }
    }
    return function() {
      return e.apply(t, arguments)
    }
  }
}, function(e, t) {
  e.exports = function(e) {
    if ("function" != typeof e) throw TypeError(e + " is not a function!");
    return e
  }
}, function(e, t, n) {
  var r = n(25),
    i = n(65);
  e.exports = n(6) ? function(e, t, n) {
    return r.f(e, t, i(1, n))
  } : function(e, t, n) {
    return e[t] = n, e
  }
}, function(e, t, n) {
  e.exports = !n(6) && !n(16)((function() {
    return 7 != Object.defineProperty(n(26)("div"), "a", {
      get: function() {
        return 7
      }
    }).a
  }))
}, function(e, t, n) {
  var r = n(15);
  e.exports = function(e, t) {
    if (!r(e)) return e;
    var n, i;
    if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
    if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
    if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
    throw TypeError("Can't convert object to primitive value")
  }
}, function(e, t) {
  e.exports = function(e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    }
  }
}, function(e, t, n) {
  var r = n(18),
    i = n(67),
    o = n(32),
    a = n(31)("IE_PROTO"),
    u = function() {},
    l = function() {
      var e, t = n(26)("iframe"),
        r = o.length;
      for (t.style.display = "none", n(76).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; r--;) delete l.prototype[o[r]];
      return l()
    };
  e.exports = Object.create || function(e, t) {
    var n;
    return null !== e ? (u.prototype = r(e), n = new u, u.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : i(n, t)
  }
}, function(e, t, n) {
  var r = n(25),
    i = n(18),
    o = n(17);
  e.exports = n(6) ? Object.defineProperties : function(e, t) {
    i(e);
    for (var n, a = o(t), u = a.length, l = 0; u > l;) r.f(e, n = a[l++], t[n]);
    return e
  }
}, function(e, t, n) {
  var r = n(27),
    i = n(19),
    o = n(70)(!1),
    a = n(31)("IE_PROTO");
  e.exports = function(e, t) {
    var n, u = i(e),
      l = 0,
      c = [];
    for (n in u) n != a && r(u, n) && c.push(n);
    for (; t.length > l;) r(u, n = t[l++]) && (~o(c, n) || c.push(n));
    return c
  }
}, function(e, t) {
  var n = {}.toString;
  e.exports = function(e) {
    return n.call(e).slice(8, -1)
  }
}, function(e, t, n) {
  var r = n(19),
    i = n(71),
    o = n(72);
  e.exports = function(e) {
    return function(t, n, a) {
      var u, l = r(t),
        c = i(l.length),
        s = o(a, c);
      if (e && n != n) {
        for (; c > s;)
          if ((u = l[s++]) != u) return !0
      } else
        for (; c > s; s++)
          if ((e || s in l) && l[s] === n) return e || s || 0;
      return !e && -1
    }
  }
}, function(e, t, n) {
  var r = n(30),
    i = Math.min;
  e.exports = function(e) {
    return e > 0 ? i(r(e), 9007199254740991) : 0
  }
}, function(e, t, n) {
  var r = n(30),
    i = Math.max,
    o = Math.min;
  e.exports = function(e, t) {
    return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
  }
}, function(e, t, n) {
  var r = n(2),
    i = n(14),
    o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
  (e.exports = function(e, t) {
    return o[e] || (o[e] = void 0 !== t ? t : {})
  })("versions", []).push({
    version: r.version,
    mode: n(74) ? "pure" : "global",
    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
  })
}, function(e, t) {
  e.exports = !0
}, function(e, t) {
  var n = 0,
    r = Math.random();
  e.exports = function(e) {
    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
  }
}, function(e, t, n) {
  var r = n(14).document;
  e.exports = r && r.documentElement
}, function(e, t, n) {
  n(78), e.exports = n(2).Object.assign
}, function(e, t, n) {
  var r = n(5);
  r(r.S + r.F, "Object", {
    assign: n(79)
  })
}, function(e, t, n) {
  "use strict";
  var r = n(6),
    i = n(17),
    o = n(80),
    a = n(33),
    u = n(34),
    l = n(28),
    c = Object.assign;
  e.exports = !c || n(16)((function() {
    var e = {},
      t = {},
      n = Symbol(),
      r = "abcdefghijklmnopqrst";
    return e[n] = 7, r.split("").forEach((function(e) {
      t[e] = e
    })), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
  })) ? function(e, t) {
    for (var n = u(e), c = arguments.length, s = 1, f = o.f, d = a.f; c > s;)
      for (var p, h = l(arguments[s++]), g = f ? i(h).concat(f(h)) : i(h), m = g.length, v = 0; m > v;) p = g[v++], r && !d.call(h, p) || (n[p] = h[p]);
    return n
  } : c
}, function(e, t) {
  t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
  "use strict";
  var r = n(82);

  function i() {}

  function o() {}
  o.resetWarningCache = i, e.exports = function() {
    function e(e, t, n, i, o, a) {
      if (a !== r) {
        var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw u.name = "Invariant Violation", u
      }
    }

    function t() {
      return e
    }
    e.isRequired = e;
    var n = {
      array: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: o,
      resetWarningCache: i
    };
    return n.PropTypes = n, n
  }
}, function(e, t, n) {
  "use strict";
  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, n) {
  "use strict";
  /** @license React v16.11.0
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = "function" == typeof Symbol && Symbol.for,
    i = r ? Symbol.for("react.element") : 60103,
    o = r ? Symbol.for("react.portal") : 60106,
    a = r ? Symbol.for("react.fragment") : 60107,
    u = r ? Symbol.for("react.strict_mode") : 60108,
    l = r ? Symbol.for("react.profiler") : 60114,
    c = r ? Symbol.for("react.provider") : 60109,
    s = r ? Symbol.for("react.context") : 60110,
    f = r ? Symbol.for("react.async_mode") : 60111,
    d = r ? Symbol.for("react.concurrent_mode") : 60111,
    p = r ? Symbol.for("react.forward_ref") : 60112,
    h = r ? Symbol.for("react.suspense") : 60113,
    g = r ? Symbol.for("react.suspense_list") : 60120,
    m = r ? Symbol.for("react.memo") : 60115,
    v = r ? Symbol.for("react.lazy") : 60116,
    b = r ? Symbol.for("react.fundamental") : 60117,
    y = r ? Symbol.for("react.responder") : 60118,
    w = r ? Symbol.for("react.scope") : 60119;

  function x(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case i:
          switch (e = e.type) {
            case f:
            case d:
            case a:
            case l:
            case u:
            case h:
              return e;
            default:
              switch (e = e && e.$$typeof) {
                case s:
                case p:
                case c:
                  return e;
                default:
                  return t
              }
          }
        case v:
        case m:
        case o:
          return t
      }
    }
  }

  function E(e) {
    return x(e) === d
  }
  t.typeOf = x, t.AsyncMode = f, t.ConcurrentMode = d, t.ContextConsumer = s, t.ContextProvider = c, t.Element = i, t.ForwardRef = p, t.Fragment = a, t.Lazy = v, t.Memo = m, t.Portal = o, t.Profiler = l, t.StrictMode = u, t.Suspense = h, t.isValidElementType = function(e) {
    return "string" == typeof e || "function" == typeof e || e === a || e === d || e === l || e === u || e === h || e === g || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === c || e.$$typeof === s || e.$$typeof === p || e.$$typeof === b || e.$$typeof === y || e.$$typeof === w)
  }, t.isAsyncMode = function(e) {
    return E(e) || x(e) === f
  }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
    return x(e) === s
  }, t.isContextProvider = function(e) {
    return x(e) === c
  }, t.isElement = function(e) {
    return "object" == typeof e && null !== e && e.$$typeof === i
  }, t.isForwardRef = function(e) {
    return x(e) === p
  }, t.isFragment = function(e) {
    return x(e) === a
  }, t.isLazy = function(e) {
    return x(e) === v
  }, t.isMemo = function(e) {
    return x(e) === m
  }, t.isPortal = function(e) {
    return x(e) === o
  }, t.isProfiler = function(e) {
    return x(e) === l
  }, t.isStrictMode = function(e) {
    return x(e) === u
  }, t.isSuspense = function(e) {
    return x(e) === h
  }
}, function(e, t, n) {
  n(85), e.exports = n(2).Object.values
}, function(e, t, n) {
  var r = n(5),
    i = n(86)(!1);
  r(r.S, "Object", {
    values: function(e) {
      return i(e)
    }
  })
}, function(e, t, n) {
  var r = n(6),
    i = n(17),
    o = n(19),
    a = n(33).f;
  e.exports = function(e) {
    return function(t) {
      for (var n, u = o(t), l = i(u), c = l.length, s = 0, f = []; c > s;) n = l[s++], r && !a.call(u, n) || f.push(e ? [n, u[n]] : u[n]);
      return f
    }
  }
}, function(e, t, n) {
  n(88), e.exports = n(2).Object.keys
}, function(e, t, n) {
  var r = n(34),
    i = n(17);
  n(89)("keys", (function() {
    return function(e) {
      return i(r(e))
    }
  }))
}, function(e, t, n) {
  var r = n(5),
    i = n(2),
    o = n(16);
  e.exports = function(e, t) {
    var n = (i.Object || {})[e] || Object[e],
      a = {};
    a[e] = t(n), r(r.S + r.F * o((function() {
      n(1)
    })), "Object", a)
  }
}, function(e, t, n) {
  n(91), e.exports = n(2).Date.now
}, function(e, t, n) {
  var r = n(5);
  r(r.S, "Date", {
    now: function() {
      return (new Date).getTime()
    }
  })
}, function(e, t, n) {
  n(93), e.exports = n(2).Number.isInteger
}, function(e, t, n) {
  var r = n(5);
  r(r.S, "Number", {
    isInteger: n(94)
  })
}, function(e, t, n) {
  var r = n(15),
    i = Math.floor;
  e.exports = function(e) {
    return !r(e) && isFinite(e) && i(e) === e
  }
}, function(e, t, n) {
  "use strict";
  var r, i = this && this.__extends || (r = function(e, t) {
    return (r = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(e, t) {
        e.__proto__ = t
      } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
      })(e, t)
  }, function(e, t) {
    function n() {
      this.constructor = e
    }
    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  });
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function(e) {
    function t(t) {
      var n = e.call(this) || this;
      return n.gun = t, n.getId = function(e) {
        return "string" == typeof e ? e : e._["#"]
      }, n.setIndex = function(e, t) {
        return n.gun.get(n.getId(e)).get("index").put(JSON.stringify(t))
      }, n
    }
    return i(t, e), t
  }(n(35).ContinuousSequence);
  t.GunContinuousSequence = o
}, function(e, t, n) {
  (function(e) {
    var r = void 0 !== e && e || "undefined" != typeof self && self || window,
      i = Function.prototype.apply;

    function o(e, t) {
      this._id = e, this._clearFn = t
    }
    t.setTimeout = function() {
      return new o(i.call(setTimeout, r, arguments), clearTimeout)
    }, t.setInterval = function() {
      return new o(i.call(setInterval, r, arguments), clearInterval)
    }, t.clearTimeout = t.clearInterval = function(e) {
      e && e.close()
    }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
      this._clearFn.call(r, this._id)
    }, t.enroll = function(e, t) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = t
    }, t.unenroll = function(e) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
    }, t._unrefActive = t.active = function(e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      t >= 0 && (e._idleTimeoutId = setTimeout((function() {
        e._onTimeout && e._onTimeout()
      }), t))
    }, n(97), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
  }).call(this, n(7))
}, function(e, t, n) {
  (function(e, t) {
    ! function(e, n) {
      "use strict";
      if (!e.setImmediate) {
        var r, i, o, a, u, l = 1,
          c = {},
          s = !1,
          f = e.document,
          d = Object.getPrototypeOf && Object.getPrototypeOf(e);
        d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? r = function(e) {
          t.nextTick((function() {
            h(e)
          }))
        } : ! function() {
          if (e.postMessage && !e.importScripts) {
            var t = !0,
              n = e.onmessage;
            return e.onmessage = function() {
              t = !1
            }, e.postMessage("", "*"), e.onmessage = n, t
          }
        }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
          h(e.data)
        }, r = function(e) {
          o.port2.postMessage(e)
        }) : f && "onreadystatechange" in f.createElement("script") ? (i = f.documentElement, r = function(e) {
          var t = f.createElement("script");
          t.onreadystatechange = function() {
            h(e), t.onreadystatechange = null, i.removeChild(t), t = null
          }, i.appendChild(t)
        }) : r = function(e) {
          setTimeout(h, 0, e)
        } : (a = "setImmediate$" + Math.random() + "$", u = function(t) {
          t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && h(+t.data.slice(a.length))
        }, e.addEventListener ? e.addEventListener("message", u, !1) : e.attachEvent("onmessage", u), r = function(t) {
          e.postMessage(a + t, "*")
        }), d.setImmediate = function(e) {
          "function" != typeof e && (e = new Function("" + e));
          for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
          var i = {
            callback: e,
            args: t
          };
          return c[l] = i, r(l), l++
        }, d.clearImmediate = p
      }

      function p(e) {
        delete c[e]
      }

      function h(e) {
        if (s) setTimeout(h, 0, e);
        else {
          var t = c[e];
          if (t) {
            s = !0;
            try {
              ! function(e) {
                var t = e.callback,
                  r = e.args;
                switch (r.length) {
                  case 0:
                    t();
                    break;
                  case 1:
                    t(r[0]);
                    break;
                  case 2:
                    t(r[0], r[1]);
                    break;
                  case 3:
                    t(r[0], r[1], r[2]);
                    break;
                  default:
                    t.apply(n, r)
                }
              }(t)
            } finally {
              p(e), s = !1
            }
          }
        }
      }
    }("undefined" == typeof self ? void 0 === e ? this : e : self)
  }).call(this, n(7), n(98))
}, function(e, t) {
  var n, r, i = e.exports = {};

  function o() {
    throw new Error("setTimeout has not been defined")
  }

  function a() {
    throw new Error("clearTimeout has not been defined")
  }

  function u(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
    try {
      return n(e, 0)
    } catch (t) {
      try {
        return n.call(null, e, 0)
      } catch (t) {
        return n.call(this, e, 0)
      }
    }
  }! function() {
    try {
      n = "function" == typeof setTimeout ? setTimeout : o
    } catch (e) {
      n = o
    }
    try {
      r = "function" == typeof clearTimeout ? clearTimeout : a
    } catch (e) {
      r = a
    }
  }();
  var l, c = [],
    s = !1,
    f = -1;

  function d() {
    s && l && (s = !1, l.length ? c = l.concat(c) : f = -1, c.length && p())
  }

  function p() {
    if (!s) {
      var e = u(d);
      s = !0;
      for (var t = c.length; t;) {
        for (l = c, c = []; ++f < t;) l && l[f].run();
        f = -1, t = c.length
      }
      l = null, s = !1,
        function(e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
          try {
            r(e)
          } catch (t) {
            try {
              return r.call(null, e)
            } catch (t) {
              return r.call(this, e)
            }
          }
        }(e)
    }
  }

  function h(e, t) {
    this.fun = e, this.array = t
  }

  function g() {}
  i.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    c.push(new h(e, t)), 1 !== c.length || s || u(p)
  }, h.prototype.run = function() {
    this.fun.apply(null, this.array)
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function(e) {
    return []
  }, i.binding = function(e) {
    throw new Error("process.binding is not supported")
  }, i.cwd = function() {
    return "/"
  }, i.chdir = function(e) {
    throw new Error("process.chdir is not supported")
  }, i.umask = function() {
    return 0
  }
}, function(e, t, n) {
  "use strict";
  (function(e) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */
    var r = n(100),
      i = n(101),
      o = n(102);

    function a() {
      return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }

    function u(e, t) {
      if (a() < t) throw new RangeError("Invalid typed array length");
      return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e
    }

    function l(e, t, n) {
      if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
      if ("number" == typeof e) {
        if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
        return f(this, e)
      }
      return c(this, e, t, n)
    }

    function c(e, t, n, r) {
      if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
        if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
        if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
        t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
        l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = d(e, t);
        return e
      }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
        "string" == typeof n && "" !== n || (n = "utf8");
        if (!l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
        var r = 0 | h(t, n),
          i = (e = u(e, r)).write(t, n);
        i !== r && (e = e.slice(0, i));
        return e
      }(e, t, n) : function(e, t) {
        if (l.isBuffer(t)) {
          var n = 0 | p(t.length);
          return 0 === (e = u(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
        }
        if (t) {
          if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? u(e, 0) : d(e, t);
          if ("Buffer" === t.type && o(t.data)) return d(e, t.data)
        }
        var r;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
      }(e, t)
    }

    function s(e) {
      if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
      if (e < 0) throw new RangeError('"size" argument must not be negative')
    }

    function f(e, t) {
      if (s(t), e = u(e, t < 0 ? 0 : 0 | p(t)), !l.TYPED_ARRAY_SUPPORT)
        for (var n = 0; n < t; ++n) e[n] = 0;
      return e
    }

    function d(e, t) {
      var n = t.length < 0 ? 0 : 0 | p(t.length);
      e = u(e, n);
      for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
      return e
    }

    function p(e) {
      if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
      return 0 | e
    }

    function h(e, t) {
      if (l.isBuffer(e)) return e.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
      "string" != typeof e && (e = "" + e);
      var n = e.length;
      if (0 === n) return 0;
      for (var r = !1;;) switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
        case void 0:
          return G(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * n;
        case "hex":
          return n >>> 1;
        case "base64":
          return z(e).length;
        default:
          if (r) return G(e).length;
          t = ("" + t).toLowerCase(), r = !0
      }
    }

    function g(e, t, n) {
      var r = !1;
      if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
      if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
      if ((n >>>= 0) <= (t >>>= 0)) return "";
      for (e || (e = "utf8");;) switch (e) {
        case "hex":
          return P(this, t, n);
        case "utf8":
        case "utf-8":
          return C(this, t, n);
        case "ascii":
          return I(this, t, n);
        case "latin1":
        case "binary":
          return O(this, t, n);
        case "base64":
          return T(this, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return D(this, t, n);
        default:
          if (r) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), r = !0
      }
    }

    function m(e, t, n) {
      var r = e[t];
      e[t] = e[n], e[n] = r
    }

    function v(e, t, n, r, i) {
      if (0 === e.length) return -1;
      if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
        if (i) return -1;
        n = e.length - 1
      } else if (n < 0) {
        if (!i) return -1;
        n = 0
      }
      if ("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)) return 0 === t.length ? -1 : b(e, t, n, r, i);
      if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : b(e, [t], n, r, i);
      throw new TypeError("val must be string, number or Buffer")
    }

    function b(e, t, n, r, i) {
      var o, a = 1,
        u = e.length,
        l = t.length;
      if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (e.length < 2 || t.length < 2) return -1;
        a = 2, u /= 2, l /= 2, n /= 2
      }

      function c(e, t) {
        return 1 === a ? e[t] : e.readUInt16BE(t * a)
      }
      if (i) {
        var s = -1;
        for (o = n; o < u; o++)
          if (c(e, o) === c(t, -1 === s ? 0 : o - s)) {
            if (-1 === s && (s = o), o - s + 1 === l) return s * a
          } else -1 !== s && (o -= o - s), s = -1
      } else
        for (n + l > u && (n = u - l), o = n; o >= 0; o--) {
          for (var f = !0, d = 0; d < l; d++)
            if (c(e, o + d) !== c(t, d)) {
              f = !1;
              break
            }
          if (f) return o
        }
      return -1
    }

    function y(e, t, n, r) {
      n = Number(n) || 0;
      var i = e.length - n;
      r ? (r = Number(r)) > i && (r = i) : r = i;
      var o = t.length;
      if (o % 2 != 0) throw new TypeError("Invalid hex string");
      r > o / 2 && (r = o / 2);
      for (var a = 0; a < r; ++a) {
        var u = parseInt(t.substr(2 * a, 2), 16);
        if (isNaN(u)) return a;
        e[n + a] = u
      }
      return a
    }

    function w(e, t, n, r) {
      return $(G(t, e.length - n), e, n, r)
    }

    function x(e, t, n, r) {
      return $(function(e) {
        for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
        return t
      }(t), e, n, r)
    }

    function E(e, t, n, r) {
      return x(e, t, n, r)
    }

    function k(e, t, n, r) {
      return $(z(t), e, n, r)
    }

    function S(e, t, n, r) {
      return $(function(e, t) {
        for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
        return o
      }(t, e.length - n), e, n, r)
    }

    function T(e, t, n) {
      return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
    }

    function C(e, t, n) {
      n = Math.min(e.length, n);
      for (var r = [], i = t; i < n;) {
        var o, a, u, l, c = e[i],
          s = null,
          f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
        if (i + f <= n) switch (f) {
          case 1:
            c < 128 && (s = c);
            break;
          case 2:
            128 == (192 & (o = e[i + 1])) && (l = (31 & c) << 6 | 63 & o) > 127 && (s = l);
            break;
          case 3:
            o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (l = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (s = l);
            break;
          case 4:
            o = e[i + 1], a = e[i + 2], u = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & u) && (l = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & u) > 65535 && l < 1114112 && (s = l)
        }
        null === s ? (s = 65533, f = 1) : s > 65535 && (s -= 65536, r.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), r.push(s), i += f
      }
      return function(e) {
        var t = e.length;
        if (t <= _) return String.fromCharCode.apply(String, e);
        var n = "",
          r = 0;
        for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += _));
        return n
      }(r)
    }
    t.Buffer = l, t.SlowBuffer = function(e) {
      +e != e && (e = 0);
      return l.alloc(+e)
    }, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
      try {
        var e = new Uint8Array(1);
        return e.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function() {
            return 42
          }
        }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
      } catch (e) {
        return !1
      }
    }(), t.kMaxLength = a(), l.poolSize = 8192, l._augment = function(e) {
      return e.__proto__ = l.prototype, e
    }, l.from = function(e, t, n) {
      return c(null, e, t, n)
    }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
      value: null,
      configurable: !0
    })), l.alloc = function(e, t, n) {
      return function(e, t, n, r) {
        return s(t), t <= 0 ? u(e, t) : void 0 !== n ? "string" == typeof r ? u(e, t).fill(n, r) : u(e, t).fill(n) : u(e, t)
      }(null, e, t, n)
    }, l.allocUnsafe = function(e) {
      return f(null, e)
    }, l.allocUnsafeSlow = function(e) {
      return f(null, e)
    }, l.isBuffer = function(e) {
      return !(null == e || !e._isBuffer)
    }, l.compare = function(e, t) {
      if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
      if (e === t) return 0;
      for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
        if (e[i] !== t[i]) {
          n = e[i], r = t[i];
          break
        }
      return n < r ? -1 : r < n ? 1 : 0
    }, l.isEncoding = function(e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1
      }
    }, l.concat = function(e, t) {
      if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return l.alloc(0);
      var n;
      if (void 0 === t)
        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
      var r = l.allocUnsafe(t),
        i = 0;
      for (n = 0; n < e.length; ++n) {
        var a = e[n];
        if (!l.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
        a.copy(r, i), i += a.length
      }
      return r
    }, l.byteLength = h, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
      var e = this.length;
      if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var t = 0; t < e; t += 2) m(this, t, t + 1);
      return this
    }, l.prototype.swap32 = function() {
      var e = this.length;
      if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
      return this
    }, l.prototype.swap64 = function() {
      var e = this.length;
      if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
      return this
    }, l.prototype.toString = function() {
      var e = 0 | this.length;
      return 0 === e ? "" : 0 === arguments.length ? C(this, 0, e) : g.apply(this, arguments)
    }, l.prototype.equals = function(e) {
      if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      return this === e || 0 === l.compare(this, e)
    }, l.prototype.inspect = function() {
      var e = "",
        n = t.INSPECT_MAX_BYTES;
      return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
    }, l.prototype.compare = function(e, t, n, r, i) {
      if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
      if (r >= i && t >= n) return 0;
      if (r >= i) return -1;
      if (t >= n) return 1;
      if (this === e) return 0;
      for (var o = (i >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), u = Math.min(o, a), c = this.slice(r, i), s = e.slice(t, n), f = 0; f < u; ++f)
        if (c[f] !== s[f]) {
          o = c[f], a = s[f];
          break
        }
      return o < a ? -1 : a < o ? 1 : 0
    }, l.prototype.includes = function(e, t, n) {
      return -1 !== this.indexOf(e, t, n)
    }, l.prototype.indexOf = function(e, t, n) {
      return v(this, e, t, n, !0)
    }, l.prototype.lastIndexOf = function(e, t, n) {
      return v(this, e, t, n, !1)
    }, l.prototype.write = function(e, t, n, r) {
      if (void 0 === t) r = "utf8", n = this.length, t = 0;
      else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
      else {
        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
      }
      var i = this.length - t;
      if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      r || (r = "utf8");
      for (var o = !1;;) switch (r) {
        case "hex":
          return y(this, e, t, n);
        case "utf8":
        case "utf-8":
          return w(this, e, t, n);
        case "ascii":
          return x(this, e, t, n);
        case "latin1":
        case "binary":
          return E(this, e, t, n);
        case "base64":
          return k(this, e, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return S(this, e, t, n);
        default:
          if (o) throw new TypeError("Unknown encoding: " + r);
          r = ("" + r).toLowerCase(), o = !0
      }
    }, l.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };
    var _ = 4096;

    function I(e, t, n) {
      var r = "";
      n = Math.min(e.length, n);
      for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
      return r
    }

    function O(e, t, n) {
      var r = "";
      n = Math.min(e.length, n);
      for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
      return r
    }

    function P(e, t, n) {
      var r = e.length;
      (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
      for (var i = "", o = t; o < n; ++o) i += F(e[o]);
      return i
    }

    function D(e, t, n) {
      for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
      return i
    }

    function A(e, t, n) {
      if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
      if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
    }

    function N(e, t, n, r, i, o) {
      if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
      if (n + r > e.length) throw new RangeError("Index out of range")
    }

    function R(e, t, n, r) {
      t < 0 && (t = 65535 + t + 1);
      for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
    }

    function j(e, t, n, r) {
      t < 0 && (t = 4294967295 + t + 1);
      for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
    }

    function B(e, t, n, r, i, o) {
      if (n + r > e.length) throw new RangeError("Index out of range");
      if (n < 0) throw new RangeError("Index out of range")
    }

    function M(e, t, n, r, o) {
      return o || B(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
    }

    function L(e, t, n, r, o) {
      return o || B(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
    }
    l.prototype.slice = function(e, t) {
      var n, r = this.length;
      if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), l.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = l.prototype;
      else {
        var i = t - e;
        n = new l(i, void 0);
        for (var o = 0; o < i; ++o) n[o] = this[o + e]
      }
      return n
    }, l.prototype.readUIntLE = function(e, t, n) {
      e |= 0, t |= 0, n || A(e, t, this.length);
      for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
      return r
    }, l.prototype.readUIntBE = function(e, t, n) {
      e |= 0, t |= 0, n || A(e, t, this.length);
      for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
      return r
    }, l.prototype.readUInt8 = function(e, t) {
      return t || A(e, 1, this.length), this[e]
    }, l.prototype.readUInt16LE = function(e, t) {
      return t || A(e, 2, this.length), this[e] | this[e + 1] << 8
    }, l.prototype.readUInt16BE = function(e, t) {
      return t || A(e, 2, this.length), this[e] << 8 | this[e + 1]
    }, l.prototype.readUInt32LE = function(e, t) {
      return t || A(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
    }, l.prototype.readUInt32BE = function(e, t) {
      return t || A(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    }, l.prototype.readIntLE = function(e, t, n) {
      e |= 0, t |= 0, n || A(e, t, this.length);
      for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
      return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
    }, l.prototype.readIntBE = function(e, t, n) {
      e |= 0, t |= 0, n || A(e, t, this.length);
      for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
      return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
    }, l.prototype.readInt8 = function(e, t) {
      return t || A(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
    }, l.prototype.readInt16LE = function(e, t) {
      t || A(e, 2, this.length);
      var n = this[e] | this[e + 1] << 8;
      return 32768 & n ? 4294901760 | n : n
    }, l.prototype.readInt16BE = function(e, t) {
      t || A(e, 2, this.length);
      var n = this[e + 1] | this[e] << 8;
      return 32768 & n ? 4294901760 | n : n
    }, l.prototype.readInt32LE = function(e, t) {
      return t || A(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    }, l.prototype.readInt32BE = function(e, t) {
      return t || A(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    }, l.prototype.readFloatLE = function(e, t) {
      return t || A(e, 4, this.length), i.read(this, e, !0, 23, 4)
    }, l.prototype.readFloatBE = function(e, t) {
      return t || A(e, 4, this.length), i.read(this, e, !1, 23, 4)
    }, l.prototype.readDoubleLE = function(e, t) {
      return t || A(e, 8, this.length), i.read(this, e, !0, 52, 8)
    }, l.prototype.readDoubleBE = function(e, t) {
      return t || A(e, 8, this.length), i.read(this, e, !1, 52, 8)
    }, l.prototype.writeUIntLE = function(e, t, n, r) {
      (e = +e, t |= 0, n |= 0, r) || N(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var i = 1,
        o = 0;
      for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
      return t + n
    }, l.prototype.writeUIntBE = function(e, t, n, r) {
      (e = +e, t |= 0, n |= 0, r) || N(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var i = n - 1,
        o = 1;
      for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
      return t + n
    }, l.prototype.writeUInt8 = function(e, t, n) {
      return e = +e, t |= 0, n || N(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
    }, l.prototype.writeUInt16LE = function(e, t, n) {
      return e = +e, t |= 0, n || N(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
    }, l.prototype.writeUInt16BE = function(e, t, n) {
      return e = +e, t |= 0, n || N(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
    }, l.prototype.writeUInt32LE = function(e, t, n) {
      return e = +e, t |= 0, n || N(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : j(this, e, t, !0), t + 4
    }, l.prototype.writeUInt32BE = function(e, t, n) {
      return e = +e, t |= 0, n || N(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4
    }, l.prototype.writeIntLE = function(e, t, n, r) {
      if (e = +e, t |= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);
        N(this, e, t, n, i - 1, -i)
      }
      var o = 0,
        a = 1,
        u = 0;
      for (this[t] = 255 & e; ++o < n && (a *= 256);) e < 0 && 0 === u && 0 !== this[t + o - 1] && (u = 1), this[t + o] = (e / a >> 0) - u & 255;
      return t + n
    }, l.prototype.writeIntBE = function(e, t, n, r) {
      if (e = +e, t |= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);
        N(this, e, t, n, i - 1, -i)
      }
      var o = n - 1,
        a = 1,
        u = 0;
      for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === u && 0 !== this[t + o + 1] && (u = 1), this[t + o] = (e / a >> 0) - u & 255;
      return t + n
    }, l.prototype.writeInt8 = function(e, t, n) {
      return e = +e, t |= 0, n || N(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
    }, l.prototype.writeInt16LE = function(e, t, n) {
      return e = +e, t |= 0, n || N(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
    }, l.prototype.writeInt16BE = function(e, t, n) {
      return e = +e, t |= 0, n || N(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
    }, l.prototype.writeInt32LE = function(e, t, n) {
      return e = +e, t |= 0, n || N(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : j(this, e, t, !0), t + 4
    }, l.prototype.writeInt32BE = function(e, t, n) {
      return e = +e, t |= 0, n || N(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4
    }, l.prototype.writeFloatLE = function(e, t, n) {
      return M(this, e, t, !0, n)
    }, l.prototype.writeFloatBE = function(e, t, n) {
      return M(this, e, t, !1, n)
    }, l.prototype.writeDoubleLE = function(e, t, n) {
      return L(this, e, t, !0, n)
    }, l.prototype.writeDoubleBE = function(e, t, n) {
      return L(this, e, t, !1, n)
    }, l.prototype.copy = function(e, t, n, r) {
      if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
      if (0 === e.length || 0 === this.length) return 0;
      if (t < 0) throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
      if (r < 0) throw new RangeError("sourceEnd out of bounds");
      r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
      var i, o = r - n;
      if (this === e && n < t && t < r)
        for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
      else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
        for (i = 0; i < o; ++i) e[i + t] = this[i + n];
      else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
      return o
    }, l.prototype.fill = function(e, t, n, r) {
      if ("string" == typeof e) {
        if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
          var i = e.charCodeAt(0);
          i < 256 && (e = i)
        }
        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
        if ("string" == typeof r && !l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
      } else "number" == typeof e && (e &= 255);
      if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
      if (n <= t) return this;
      var o;
      if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
        for (o = t; o < n; ++o) this[o] = e;
      else {
        var a = l.isBuffer(e) ? e : G(new l(e, r).toString()),
          u = a.length;
        for (o = 0; o < n - t; ++o) this[o + t] = a[o % u]
      }
      return this
    };
    var U = /[^+\/0-9A-Za-z-_]/g;

    function F(e) {
      return e < 16 ? "0" + e.toString(16) : e.toString(16)
    }

    function G(e, t) {
      var n;
      t = t || 1 / 0;
      for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
        if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
          if (!i) {
            if (n > 56319) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue
            }
            if (a + 1 === r) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue
            }
            i = n;
            continue
          }
          if (n < 56320) {
            (t -= 3) > -1 && o.push(239, 191, 189), i = n;
            continue
          }
          n = 65536 + (i - 55296 << 10 | n - 56320)
        } else i && (t -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, n < 128) {
          if ((t -= 1) < 0) break;
          o.push(n)
        } else if (n < 2048) {
          if ((t -= 2) < 0) break;
          o.push(n >> 6 | 192, 63 & n | 128)
        } else if (n < 65536) {
          if ((t -= 3) < 0) break;
          o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
        } else {
          if (!(n < 1114112)) throw new Error("Invalid code point");
          if ((t -= 4) < 0) break;
          o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
        }
      }
      return o
    }

    function z(e) {
      return r.toByteArray(function(e) {
        if ((e = function(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
          }(e).replace(U, "")).length < 2) return "";
        for (; e.length % 4 != 0;) e += "=";
        return e
      }(e))
    }

    function $(e, t, n, r) {
      for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
      return i
    }
  }).call(this, n(7))
}, function(e, t, n) {
  "use strict";
  t.byteLength = function(e) {
    var t = c(e),
      n = t[0],
      r = t[1];
    return 3 * (n + r) / 4 - r
  }, t.toByteArray = function(e) {
    var t, n, r = c(e),
      a = r[0],
      u = r[1],
      l = new o(function(e, t, n) {
        return 3 * (t + n) / 4 - n
      }(0, a, u)),
      s = 0,
      f = u > 0 ? a - 4 : a;
    for (n = 0; n < f; n += 4) t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)], l[s++] = t >> 16 & 255, l[s++] = t >> 8 & 255, l[s++] = 255 & t;
    2 === u && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, l[s++] = 255 & t);
    1 === u && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, l[s++] = t >> 8 & 255, l[s++] = 255 & t);
    return l
  }, t.fromByteArray = function(e) {
    for (var t, n = e.length, i = n % 3, o = [], a = 0, u = n - i; a < u; a += 16383) o.push(s(e, a, a + 16383 > u ? u : a + 16383));
    1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
    return o.join("")
  };
  for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, l = a.length; u < l; ++u) r[u] = a[u], i[a.charCodeAt(u)] = u;

  function c(e) {
    var t = e.length;
    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
  }

  function s(e, t, n) {
    for (var i, o, a = [], u = t; u < n; u += 3) i = (e[u] << 16 & 16711680) + (e[u + 1] << 8 & 65280) + (255 & e[u + 2]), a.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
    return a.join("")
  }
  i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
}, function(e, t) {
  t.read = function(e, t, n, r, i) {
    var o, a, u = 8 * i - r - 1,
      l = (1 << u) - 1,
      c = l >> 1,
      s = -7,
      f = n ? i - 1 : 0,
      d = n ? -1 : 1,
      p = e[t + f];
    for (f += d, o = p & (1 << -s) - 1, p >>= -s, s += u; s > 0; o = 256 * o + e[t + f], f += d, s -= 8);
    for (a = o & (1 << -s) - 1, o >>= -s, s += r; s > 0; a = 256 * a + e[t + f], f += d, s -= 8);
    if (0 === o) o = 1 - c;
    else {
      if (o === l) return a ? NaN : 1 / 0 * (p ? -1 : 1);
      a += Math.pow(2, r), o -= c
    }
    return (p ? -1 : 1) * a * Math.pow(2, o - r)
  }, t.write = function(e, t, n, r, i, o) {
    var a, u, l, c = 8 * o - i - 1,
      s = (1 << c) - 1,
      f = s >> 1,
      d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      p = r ? 0 : o - 1,
      h = r ? 1 : -1,
      g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, a = s) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (t += a + f >= 1 ? d / l : d * Math.pow(2, 1 - f)) * l >= 2 && (a++, l /= 2), a + f >= s ? (u = 0, a = s) : a + f >= 1 ? (u = (t * l - 1) * Math.pow(2, i), a += f) : (u = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + p] = 255 & u, p += h, u /= 256, i -= 8);
    for (a = a << i | u, c += i; c > 0; e[n + p] = 255 & a, p += h, a /= 256, c -= 8);
    e[n + p - h] |= 128 * g
  }
}, function(e, t) {
  var n = {}.toString;
  e.exports = Array.isArray || function(e) {
    return "[object Array]" == n.call(e)
  }
}, function(e, t, n) {
  var r = "undefined" != typeof window ? window.Gun : n(8);
  r.on("create", (function(e) {
    r.TESTING && (e.opt.file = "radatatest"), this.to.next(e);
    var t, i = e.opt,
      o = {};
    if (!1 !== i.radisk) {
      var a = r.window && r.window.Radisk || n(40),
        u = a.Radix;
      i.store = i.store || !r.window && n(104)(i);
      var l = a(i),
        c = String.fromCharCode(27);
      e.on("put", (function(n) {
        this.to.next(n);
        var u = n["#"] || r.text.random(3),
          s = !n["@"],
          d = s ? 0 : t,
          p = (n._ || o).rad,
          h = r.state(),
          g = +new Date;

        function m(t, n) {
          if (d--, !m.err)
            if (m.err = t) {
              try {
                i.store.stats.put.err = t
              } catch (e) {}
              e.on("in", {
                "@": u,
                err: t
              })
            } else if (!d) {
            try {
              i.store.stats.put.time[f % 50] = +new Date - g, ++f, i.store.stats.put.count++
            } catch (e) {}
            e.on("in", {
              "@": u,
              ok: 1
            })
          }
        }
        r.graph.is(n.put, null, (function(n, i, u, f) {
          if (s || !p) s && ++d, n = a.encode(n, null, c) + ">" + a.encode(r.state.is(u, i), null, c), l(f + c + i, n, s ? m : t);
          else {
            var g = (e.next || o)[f];
            if (!g) return;
            if (t !== p["."] && (g = (g.next || o)[i]), !g) return;
            g.rad = h
          }
        }))
      })), e.on("get", (function(n) {
        this.to.next(n);
        var f, d, p, h, g = n["#"],
          m = n.get,
          v = n.get["#"],
          b = n.get["."] || "",
          y = {};
        if ("string" == typeof v ? d = v : v && (t !== (p = v["*"]) && (y.limit = h = 1), t !== v[">"] && (y.start = v[">"]), t !== v["<"] && (y.end = v["<"]), d = h ? "" + p : p || v["="], h = null), d && !y.limit && ("string" == typeof b ? d = d + c + (y.atom = b) : b && (t !== b[">"] && (y.start = b[">"], y.limit = 1), t !== b["<"] && (y.end = b["<"], y.limit = 1), t !== (p = b["*"]) && (y.limit = h = 1), d && (d = d + c + (h ? "" + (p || "") : p || (y.atom = b["="] || ""))))), ((p = m["%"]) || y.limit) && (y.limit = p <= (y.pack || 1e5) ? p : 1), (b["-"] || (v || {})["-"]) && (y.reverse = !0), p = (e.next || o)[v]) {
          if (p && p.rad) return;
          if (y.atom && (p = (p.next || o)[y.atom]), p && p.rad) return
        }
        var w = +new Date;

        function x(e, t, n, i) {
          if (e) {
            var o = (t = (d + t).split(c)).slice(0, 1)[0];
            t = t.slice(-1)[0], y.count = (y.count || 0) + e.length;
            var u = e.lastIndexOf(">"),
              l = a.decode(e.slice(u + 1), null, c);
            return e = a.decode(e.slice(0, u), null, c), (f = f || {})[o] = r.state.ify(f[o], t, l, e, o), !!(y.limit && y.limit <= y.count) || void 0
          }
        }
        l(d || "", (function(n, r, o) {
          try {
            i.store.stats.get.time[s % 50] = +new Date - w, ++s, i.store.stats.get.count++, n && (i.store.stats.get.err = n)
          } catch (e) {}
          r && ("string" != typeof r && (o.atom ? r = t : u.map(r, x)), !f && r && x(r, "")), e.on("in", {
            "@": g,
            put: f,
            "%": o.more ? 1 : t,
            err: n || t,
            _: x
          })
        }), y), x.rad = m
      })), i.store.stats = {
        get: {
          time: {},
          count: 0
        },
        put: {
          time: {},
          count: 0
        }
      };
      var s = 0,
        f = 0
    }
  }))
}, function(e, t, n) {
  e.exports = function e(t) {
    (t = t || {}).log = t.log || console.log, t.file = String(t.file || "radata");
    var r = n(105),
      i = function() {};
    if (e[t.file]) return console.log("Warning: reusing same fs store and options as 1st."), e[t.file];
    return e[t.file] = i, i.put = function(e, n, i) {
      var o = Math.random().toString(36).slice(-3),
        a = t.file + "-" + e + "-" + o + ".tmp";
      r.writeFile(a, n, (function(n, o) {
        if (n) return i(n);
        ! function(e, t, n) {
          r.rename(e, t, (function(i) {
            if (i)
              if ("EXDEV" === i.code) {
                var o = r.createReadStream(e),
                  a = r.createWriteStream(t);
                o.on("error", n), a.on("error", n), o.on("close", (function() {
                  r.unlink(e, n)
                })), o.pipe(a)
              } else n(i);
            else n()
          }))
        }(a, t.file + "/" + e, i)
      }))
    }, i.get = function(e, n) {
      r.readFile(t.file + "/" + e, (function(e, r) {
        if (e) {
          if ("ENOENT" === (e.code || "").toUpperCase()) return n(null);
          t.log("ERROR:", e)
        }
        n(e, r)
      }))
    }, r.existsSync(t.file) || r.mkdirSync(t.file), i
  }
}, function(e, t) {}, function(e, t, n) {
  ! function() {
    function t(e) {
      (e = e || {}).file = String(e.file || "radata");
      var n = null;
      try {
        e.indexedDB = e.indexedDB || indexedDB
      } catch (e) {}
      try {
        if (!e.indexedDB || "file:" == location.protocol) {
          var r = {};
          return (i = {}).put = function(e, t, n) {
            r[e] = t, n(null, 1)
          }, i.get = function(e, t) {
            t(null, r[e] || void 0)
          }, console.log("Warning: No indexedDB exists to persist data to!"), i
        }
      } catch (e) {}
      var i = function() {};
      return t[e.file] ? (console.log("Warning: reusing same IndexedDB store and options as 1st."), t[e.file]) : (t[e.file] = i, i.start = function() {
        var t = indexedDB.open(e.file, 1);
        t.onupgradeneeded = function(t) {
          t.target.result.createObjectStore(e.file)
        }, t.onsuccess = function() {
          n = t.result
        }, t.onerror = function(e) {
          console.log(e || 1)
        }
      }, i.start(), i.put = function(t, r, o) {
        if (n) {
          var a = n.transaction([e.file], "readwrite"),
            u = a.objectStore(e.file),
            l = u.put(r, "" + t);
          l.onsuccess = u.onsuccess = a.onsuccess = function() {
            o(null, 1)
          }, l.onabort = u.onabort = a.onabort = function(e) {
            o(e || "put.tx.abort")
          }, l.onerror = u.onerror = a.onerror = function(e) {
            o(e || "put.tx.error")
          }
        } else setTimeout((function() {
          i.put(t, r, o)
        }), 1)
      }, i.get = function(t, r) {
        if (n) {
          var o = n.transaction([e.file], "readonly").objectStore(e.file).get("" + t);
          o.onsuccess = function() {
            r(null, o.result)
          }, o.onabort = function(e) {
            r(e || 4)
          }, o.onerror = function(e) {
            r(e || 5)
          }
        } else setTimeout((function() {
          i.get(t, r)
        }), 9)
      }, setInterval((function() {
        n && n.close(), n = null, i.start()
      }), 15e3), i)
    }
    if ("undefined" != typeof window)(t.window = window).RindexedDB = t;
    else try {
      e.exports = t
    } catch (e) {}
    try {
      (t.window.Gun || n(8)).on("create", (function(e) {
        this.to.next(e), e.opt.store = e.opt.store || t(e.opt)
      }))
    } catch (e) {}
  }()
}, function(e, t, n) {
  var r = "undefined" != typeof window ? window.Gun : n(8);
  r.chain.open = function(e, t, n) {
    return (t = t || {}).doc = t.doc || {}, t.ids = t.ids || {}, t.any = t.any || e, t.ev = t.ev || {
      off: function() {
        r.obj.map(t.ev.s, (function(e) {
          e && e.off()
        })), t.ev.s = {}
      },
      s: {}
    }, this.on((function(e, i, o, a) {
      if (delete((e = r.obj.copy(e)) || {})._, clearTimeout(t.to), t.to = setTimeout((function() {
          t.any && (t.any.call(t.at.$, t.doc, t.key, t, t.ev), t.off && (t.ev.off(), t.any = null))
        }), t.wait || 1), t.at = t.at || o, t.key = t.key || i, t.ev.s[this._.id] = a, r.val.is(e)) n ? n[i] = e : t.doc = e;
      else {
        var u, l = this;
        r.obj.map(e, (function(e, i) {
          var o = n || t.doc;
          o && ((u = r.val.link.is(e)) ? t.ids[u] ? o[i] = t.ids[u] : l.get(i).open(t.any, t, t.ids[u] = o[i] = {}) : o[i] = e)
        }))
      }
    }))
  }
}, function(e, t, n) {
  var r = n(109);
  "string" == typeof r && (r = [
    [e.i, r, ""]
  ]);
  var i = {
    insert: "head",
    singleton: !1
  };
  n(111)(r, i);
  r.locals && (e.exports = r.locals)
}, function(e, t, n) {
  (e.exports = n(110)(!1)).push([e.i, "* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  background-color: blue;\n}\n\nbody,\nhtml,\n#app {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.new-board {\n  width: 20rem;\n  margin: auto;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n}\n\n.board-title {\n  font-size: 120%;\n  color: white;\n  margin: 0.5rem;\n  cursor: pointer;\n}\n\n.board-content {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n\n.lanes {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n\n.lane,\n.new-lane {\n  background-color: lightgray;\n  width: 12rem;\n  margin: 0.5rem;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.lane-title {\n  cursor: pointer;\n  font-weight: bold;\n}\n\ninput {\n  width: 100%;\n}\n\n.cards {\n  display: flex;\n  min-height: 10rem;\n  flex-direction: column;\n}\n\n.card,\n.new-card {\n  background-color: white;\n  padding: 0.25rem;\n  margin: 0.25rem;\n  border-radius: 0.25rem;\n}\n\n.card-link {\n  color: lightgray;\n  text-decoration: none;\n  display: block;\n  visibility: hidden;\n  float: right;\n  font-size: 80%;\n}\n\n.card:hover .card-link {\n  visibility: visible;\n}\n", ""])
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    var t = [];
    return t.toString = function() {
      return this.map((function(t) {
        var n = function(e, t) {
          var n = e[1] || "",
            r = e[3];
          if (!r) return n;
          if (t && "function" == typeof btoa) {
            var i = (a = r, u = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u), "/*# ".concat(l, " */")),
              o = r.sources.map((function(e) {
                return "/*# sourceURL=".concat(r.sourceRoot).concat(e, " */")
              }));
            return [n].concat(o).concat([i]).join("\n")
          }
          var a, u, l;
          return [n].join("\n")
        }(t, e);
        return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n
      })).join("")
    }, t.i = function(e, n) {
      "string" == typeof e && (e = [
        [null, e, ""]
      ]);
      for (var r = {}, i = 0; i < this.length; i++) {
        var o = this[i][0];
        null != o && (r[o] = !0)
      }
      for (var a = 0; a < e.length; a++) {
        var u = e[a];
        null != u[0] && r[u[0]] || (n && !u[2] ? u[2] = n : n && (u[2] = "(".concat(u[2], ") and (").concat(n, ")")), t.push(u))
      }
    }, t
  }
}, function(e, t, n) {
  "use strict";
  var r, i = {},
    o = function() {
      return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
    },
    a = function() {
      var e = {};
      return function(t) {
        if (void 0 === e[t]) {
          var n = document.querySelector(t);
          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head
          } catch (e) {
            n = null
          }
          e[t] = n
        }
        return e[t]
      }
    }();

  function u(e, t) {
    for (var n = [], r = {}, i = 0; i < e.length; i++) {
      var o = e[i],
        a = t.base ? o[0] + t.base : o[0],
        u = {
          css: o[1],
          media: o[2],
          sourceMap: o[3]
        };
      r[a] ? r[a].parts.push(u) : n.push(r[a] = {
        id: a,
        parts: [u]
      })
    }
    return n
  }

  function l(e, t) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = i[r.id],
        a = 0;
      if (o) {
        for (o.refs++; a < o.parts.length; a++) o.parts[a](r.parts[a]);
        for (; a < r.parts.length; a++) o.parts.push(m(r.parts[a], t))
      } else {
        for (var u = []; a < r.parts.length; a++) u.push(m(r.parts[a], t));
        i[r.id] = {
          id: r.id,
          refs: 1,
          parts: u
        }
      }
    }
  }

  function c(e) {
    var t = document.createElement("style");
    if (void 0 === e.attributes.nonce) {
      var r = n.nc;
      r && (e.attributes.nonce = r)
    }
    if (Object.keys(e.attributes).forEach((function(n) {
        t.setAttribute(n, e.attributes[n])
      })), "function" == typeof e.insert) e.insert(t);
    else {
      var i = a(e.insert || "head");
      if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
      i.appendChild(t)
    }
    return t
  }
  var s, f = (s = [], function(e, t) {
    return s[e] = t, s.filter(Boolean).join("\n")
  });

  function d(e, t, n, r) {
    var i = n ? "" : r.css;
    if (e.styleSheet) e.styleSheet.cssText = f(t, i);
    else {
      var o = document.createTextNode(i),
        a = e.childNodes;
      a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
    }
  }

  function p(e, t, n) {
    var r = n.css,
      i = n.media,
      o = n.sourceMap;
    if (i && e.setAttribute("media", i), o && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleSheet) e.styleSheet.cssText = r;
    else {
      for (; e.firstChild;) e.removeChild(e.firstChild);
      e.appendChild(document.createTextNode(r))
    }
  }
  var h = null,
    g = 0;

  function m(e, t) {
    var n, r, i;
    if (t.singleton) {
      var o = g++;
      n = h || (h = c(t)), r = d.bind(null, n, o, !1), i = d.bind(null, n, o, !0)
    } else n = c(t), r = p.bind(null, n, t), i = function() {
      ! function(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e)
      }(n)
    };
    return r(e),
      function(t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          r(e = t)
        } else i()
      }
  }
  e.exports = function(e, t) {
    (t = t || {}).attributes = "object" == typeof t.attributes ? t.attributes : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = o());
    var n = u(e, t);
    return l(n, t),
      function(e) {
        for (var r = [], o = 0; o < n.length; o++) {
          var a = n[o],
            c = i[a.id];
          c && (c.refs--, r.push(c))
        }
        e && l(u(e, t), t);
        for (var s = 0; s < r.length; s++) {
          var f = r[s];
          if (0 === f.refs) {
            for (var d = 0; d < f.parts.length; d++) f.parts[d]();
            delete i[f.id]
          }
        }
      }
  }
}]);