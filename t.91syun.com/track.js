var cookies = crm_getCookieValue('singoo_cookie');
var cookie_page1;
var v_visitor_id;
var s_session_id;
var recommend_data;
var temp_type = "recommend";
var leave_pop = false;
var p = window.location.pathname;
var r = document.referrer;
var host = window.location.host;
var current_name = host + p;
var local_href = window.location.href;
local_href = getCurrentQueryString('ex');
var local_cookie = '';
local_cookie = getCurrentQueryString('rand');
var local_cookie = '';
pri = getCurrentQueryString('pri');
website_name = website_name.replace(/http:\/\//g, '').replace(/https:\/\//, '').replace(" ", '');
website_name = website_name.split("/")[0];
var swfobject = function() {
    var D = "undefined",
        r = "object",
        S = "Shockwave Flash",
        W = "ShockwaveFlash.ShockwaveFlash",
        q = "application/x-shockwave-flash",
        R = "SWFObjectExprInst",
        x = "onreadystatechange",
        O = window,
        j = document,
        t = navigator,
        T = false,
        U = [h],
        o = [],
        N = [],
        I = [],
        l, Q, E, B, J = false,
        a = false,
        n, G, m = true,
        M = function() {
            var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                ah = t.userAgent.toLowerCase(),
                Y = t.platform.toLowerCase(),
                ae = Y ? /win/.test(Y) : /win/.test(ah),
                ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                X = !+"\v1",
                ag = [0, 0, 0],
                ab = null;
            if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                ab = t.plugins[S].description;
                if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                    T = true;
                    X = false;
                    ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                    ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof O.ActiveXObject != D) {
                    try {
                        var ad = new ActiveXObject(W);
                        if (ad) {
                            ab = ad.GetVariable("$version");
                            if (ab) {
                                X = true;
                                ab = ab.split(" ")[1].split(",");
                                ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        }
                    } catch (Z) {}
                }
            }
            return {
                w3: aa,
                pv: ag,
                wk: af,
                ie: X,
                win: ae,
                mac: ac
            }
        }(),
        k = function() {
            if (!M.w3) {
                return
            }
            if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
                f()
            }
            if (!J) {
                if (typeof j.addEventListener != D) {
                    j.addEventListener("DOMContentLoaded", f, false)
                }
                if (M.ie && M.win) {
                    j.attachEvent(x, function() {
                        if (j.readyState == "complete") {
                            j.detachEvent(x, arguments.callee);
                            f()
                        }
                    });
                    if (O == top) {
                        (function() {
                            if (J) {
                                return
                            }
                            try {
                                j.documentElement.doScroll("left")
                            } catch (X) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                }
                if (M.wk) {
                    (function() {
                        if (J) {
                            return
                        }
                        if (!/loaded|complete/.test(j.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        f()
                    })()
                }
                s(f)
            }
        }();

    function f() {
        if (J) {
            return
        }
        try {
            var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
            Z.parentNode.removeChild(Z)
        } catch (aa) {
            return
        }
        J = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
            U[Y]()
        }
    }

    function K(X) {
        if (J) {
            X()
        } else {
            U[U.length] = X
        }
    }

    function s(Y) {
        if (typeof O.addEventListener != D) {
            O.addEventListener("load", Y, false)
        } else {
            if (typeof j.addEventListener != D) {
                j.addEventListener("load", Y, false)
            } else {
                if (typeof O.attachEvent != D) {
                    i(O, "onload", Y)
                } else {
                    if (typeof O.onload == "function") {
                        var X = O.onload;
                        O.onload = function() {
                            X();
                            Y()
                        }
                    } else {
                        O.onload = Y
                    }
                }
            }
        }
    }

    function h() {
        if (T) {
            V()
        } else {
            H()
        }
    }

    function V() {
        var X = j.getElementsByTagName("body")[0];
        var aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            (function() {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                    }
                } else {
                    if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                X.removeChild(aa);
                Z = null;
                H()
            })()
        } else {
            H()
        }
    }

    function H() {
        var ag = o.length;
        if (ag > 0) {
            for (var af = 0; af < ag; af++) {
                var Y = o[af].id;
                var ab = o[af].callbackFn;
                var aa = {
                    success: false,
                    id: Y
                };
                if (M.pv[0] > 0) {
                    var ae = c(Y);
                    if (ae) {
                        if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                            w(Y, true);
                            if (ab) {
                                aa.success = true;
                                aa.ref = z(Y);
                                ab(aa)
                            }
                        } else {
                            if (o[af].expressInstall && A()) {
                                var ai = {};
                                ai.data = o[af].expressInstall;
                                ai.width = ae.getAttribute("width") || "0";
                                ai.height = ae.getAttribute("height") || "0";
                                if (ae.getAttribute("class")) {
                                    ai.styleclass = ae.getAttribute("class")
                                }
                                if (ae.getAttribute("align")) {
                                    ai.align = ae.getAttribute("align")
                                }
                                var ah = {};
                                var X = ae.getElementsByTagName("param");
                                var ac = X.length;
                                for (var ad = 0; ad < ac; ad++) {
                                    if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                        ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                    }
                                }
                                P(ai, ah, Y, ab)
                            } else {
                                p(ae);
                                if (ab) {
                                    ab(aa)
                                }
                            }
                        }
                    }
                } else {
                    w(Y, true);
                    if (ab) {
                        var Z = z(Y);
                        if (Z && typeof Z.SetVariable != D) {
                            aa.success = true;
                            aa.ref = Z
                        }
                        ab(aa)
                    }
                }
            }
        }
    }

    function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == "OBJECT") {
            if (typeof Y.SetVariable != D) {
                X = Y
            } else {
                var Z = Y.getElementsByTagName(r)[0];
                if (Z) {
                    X = Z
                }
            }
        }
        return X
    }

    function A() {
        return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
    }

    function P(aa, ab, X, Z) {
        a = true;
        E = Z || null;
        B = {
            success: false,
            id: X
        };
        var ae = c(X);
        if (ae) {
            if (ae.nodeName == "OBJECT") {
                l = g(ae);
                Q = null
            } else {
                l = ae;
                Q = X
            }
            aa.id = R;
            if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                aa.width = "310"
            }
            if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                aa.height = "137"
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
                ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (typeof ab.flashvars != D) {
                ab.flashvars += "&" + ac
            } else {
                ab.flashvars = ac
            }
            if (M.ie && M.win && ae.readyState != 4) {
                var Y = C("div");
                X += "SWFObjectNew";
                Y.setAttribute("id", X);
                ae.parentNode.insertBefore(Y, ae);
                ae.style.display = "none";
                (function() {
                    if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            u(aa, ab, X)
        }
    }

    function p(Y) {
        if (M.ie && M.win && Y.readyState != 4) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(g(Y), X);
            Y.style.display = "none";
            (function() {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            Y.parentNode.replaceChild(g(Y), Y)
        }
    }

    function g(ab) {
        var aa = C("div");
        if (M.win && M.ie) {
            aa.innerHTML = ab.innerHTML
        } else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) {
                    var X = ad.length;
                    for (var Z = 0; Z < X; Z++) {
                        if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                            aa.appendChild(ad[Z].cloneNode(true))
                        }
                    }
                }
            }
        }
        return aa
    }

    function u(ai, ag, Y) {
        var X, aa = c(Y);
        if (M.wk && M.wk < 312) {
            return X
        }
        if (aa) {
            if (typeof ai.id == D) {
                ai.id = Y
            }
            if (M.ie && M.win) {
                var ah = "";
                for (var ae in ai) {
                    if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                            ag.movie = ai[ae]
                        } else {
                            if (ae.toLowerCase() == "styleclass") {
                                ah += ' class="' + ai[ae] + '"'
                            } else {
                                if (ae.toLowerCase() != "classid") {
                                    ah += " " + ae + '="' + ai[ae] + '"'
                                }
                            }
                        }
                    }
                }
                var af = "";
                for (var ad in ag) {
                    if (ag[ad] != Object.prototype[ad]) {
                        af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                    }
                }
                aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                N[N.length] = ai.id;
                X = c(ai.id)
            } else {
                var Z = C(r);
                Z.setAttribute("type", q);
                for (var ac in ai) {
                    if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                            Z.setAttribute("class", ai[ac])
                        } else {
                            if (ac.toLowerCase() != "classid") {
                                Z.setAttribute(ac, ai[ac])
                            }
                        }
                    }
                }
                for (var ab in ag) {
                    if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                        e(Z, ab, ag[ab])
                    }
                }
                aa.parentNode.replaceChild(Z, aa);
                X = Z
            }
        }
        return X
    }

    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X);
        aa.setAttribute("value", Y);
        Z.appendChild(aa)
    }

    function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == "OBJECT") {
            if (M.ie && M.win) {
                X.style.display = "none";
                (function() {
                    if (X.readyState == 4) {
                        b(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                X.parentNode.removeChild(X)
            }
        }
    }

    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) {
                if (typeof Y[X] == "function") {
                    Y[X] = null
                }
            }
            Y.parentNode.removeChild(Y)
        }
    }

    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch (Y) {}
        return X
    }

    function C(X) {
        return j.createElement(X)
    }

    function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        I[I.length] = [Z, X, Y]
    }

    function F(Z) {
        var Y = M.pv,
            X = Z.split(".");
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
    }

    function v(ac, Y, ad, ab) {
        if (M.ie && M.mac) {
            return
        }
        var aa = j.getElementsByTagName("head")[0];
        if (!aa) {
            return
        }
        var X = (ad && typeof ad == "string") ? ad : "screen";
        if (ab) {
            n = null;
            G = null
        }
        if (!n || G != X) {
            var Z = C("style");
            Z.setAttribute("type", "text/css");
            Z.setAttribute("media", X);
            n = aa.appendChild(Z);
            if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                n = j.styleSheets[j.styleSheets.length - 1]
            }
            G = X
        }
        if (M.ie && M.win) {
            if (n && typeof n.addRule == r) {
                n.addRule(ac, Y)
            }
        } else {
            if (n && typeof j.createTextNode != D) {
                n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
            }
        }
    }

    function w(Z, X) {
        if (!m) {
            return
        }
        var Y = X ? "visible" : "hidden";
        if (J && c(Z)) {
            c(Z).style.visibility = Y
        } else {
            v("#" + Z, "visibility:" + Y)
        }
    }

    function L(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
    }
    var d = function() {
        if (M.ie && M.win) {
            window.attachEvent("onunload", function() {
                var ac = I.length;
                for (var ab = 0; ab < ac; ab++) {
                    I[ab][0].detachEvent(I[ab][1], I[ab][2])
                }
                var Z = N.length;
                for (var aa = 0; aa < Z; aa++) {
                    y(N[aa])
                }
                for (var Y in M) {
                    M[Y] = null
                }
                M = null;
                for (var X in swfobject) {
                    swfobject[X] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {};
                Y.id = ab;
                Y.swfVersion = X;
                Y.expressInstall = aa;
                Y.callbackFn = Z;
                o[o.length] = Y;
                w(ab, false)
            } else {
                if (Z) {
                    Z({
                        success: false,
                        id: ab
                    })
                }
            }
        },
        getObjectById: function(X) {
            if (M.w3) {
                return z(X)
            }
        },
        embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {
                success: false,
                id: ah
            };
            if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                w(ah, false);
                K(function() {
                    ae += "";
                    ag += "";
                    var aj = {};
                    if (af && typeof af === r) {
                        for (var al in af) {
                            aj[al] = af[al]
                        }
                    }
                    aj.data = ab;
                    aj.width = ae;
                    aj.height = ag;
                    var am = {};
                    if (ad && typeof ad === r) {
                        for (var ak in ad) {
                            am[ak] = ad[ak]
                        }
                    }
                    if (Z && typeof Z === r) {
                        for (var ai in Z) {
                            if (typeof am.flashvars != D) {
                                am.flashvars += "&" + ai + "=" + Z[ai]
                            } else {
                                am.flashvars = ai + "=" + Z[ai]
                            }
                        }
                    }
                    if (F(Y)) {
                        var an = u(aj, am, ah);
                        if (aj.id == ah) {
                            w(ah, true)
                        }
                        X.success = true;
                        X.ref = an
                    } else {
                        if (aa && A()) {
                            aj.data = aa;
                            P(aj, am, ah, ac);
                            return
                        } else {
                            w(ah, true)
                        }
                    }
                    if (ac) {
                        ac(X)
                    }
                })
            } else {
                if (ac) {
                    ac(X)
                }
            }
        },
        switchOffAutoHideShow: function() {
            m = false
        },
        ua: M,
        getFlashPlayerVersion: function() {
            return {
                major: M.pv[0],
                minor: M.pv[1],
                release: M.pv[2]
            }
        },
        hasFlashPlayerVersion: F,
        createSWF: function(Z, Y, X) {
            if (M.w3) {
                return u(Z, Y, X)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(Z, aa, X, Y) {
            if (M.w3 && A()) {
                P(Z, aa, X, Y)
            }
        },
        removeSWF: function(X) {
            if (M.w3) {
                y(X)
            }
        },
        createCSS: function(aa, Z, Y, X) {
            if (M.w3) {
                v(aa, Z, Y, X)
            }
        },
        addDomLoadEvent: K,
        addLoadEvent: s,
        getQueryParamValue: function(aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z)) {
                    Z = Z.split("?")[1]
                }
                if (aa == null) {
                    return L(Z)
                }
                var Y = Z.split("&");
                for (var X = 0; X < Y.length; X++) {
                    if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return L(Y[X].substring((Y[X].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (a) {
                var X = c(R);
                if (X && l) {
                    X.parentNode.replaceChild(l, X);
                    if (Q) {
                        w(Q, true);
                        if (M.ie && M.win) {
                            l.style.display = "block"
                        }
                    }
                    if (E) {
                        E(B)
                    }
                }
                a = false
            }
        }
    }
}();
var _ec_history = 0;
var _ec_tests = 10;
var _ec_debug = 0;

function _ec_dump(arr, level) {
    var dumped_text = "";
    if (!level) level = 0;
    var level_padding = "";
    for (var j = 0; j < level + 1; j++) level_padding += "    ";
    if (typeof(arr) == 'object') {
        for (var item in arr) {
            var value = arr[item];
            if (typeof(value) == 'object') {
                dumped_text += level_padding + "'" + item + "' ...\n";
                dumped_text += _ec_dump(value, level + 1)
            } else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n"
            }
        }
    } else {
        dumped_text = "===>" + arr + "<===(" + typeof(arr) + ")"
    }
    return dumped_text
}

function _ec_replace(str, key, value) {
    if (str.indexOf('&' + key + '=') > -1 || str.indexOf(key + '=') == 0) {
        var idx = str.indexOf('&' + key + '=');
        if (idx == -1) idx = str.indexOf(key + '=');
        var end = str.indexOf('&', idx + 1);
        var newstr;
        if (end != -1) newstr = str.substr(0, idx) + str.substr(end + (idx ? 0 : 1)) + '&' + key + '=' + value;
        else newstr = str.substr(0, idx) + '&' + key + '=' + value;
        return newstr
    } else return str + '&' + key + '=' + value
}
var _global_lso;

function _evercookie_flash_var(cookie) {
    _global_lso = cookie;
    var swf = document.getElementById('myswf');
    if (swf && swf.parentNode) swf.parentNode.removeChild(swf)
}
var evercookie = (function() {
    this._class = function() {
        var self = this;
        _baseKeyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        this._ec = {};
        var no_color = -1;
        this.get = function(name, cb, dont_reset) {
            self._evercookie(name, cb, undefined, undefined, dont_reset)
        };
        this.set = function(name, value) {
            self._evercookie(name, function() {}, value)
        };
        this._evercookie = function(name, cb, value, i, dont_reset) {
            if (typeof self._evercookie == 'undefined') self = this;
            if (typeof i == 'undefined') i = 0;
            if (i == 0) {
                self.evercookie_database_storage(name, value);
                self.evercookie_png(name, value);
                self.evercookie_etag(name, value);
                self.evercookie_cache(name, value);
                self._ec.userData = self.evercookie_userdata(name, value);
                self._ec.cookieData = self.evercookie_cookie(name, value);
                self._ec.localData = self.evercookie_local_storage(name, value);
                self._ec.globalData = self.evercookie_global_storage(name, value);
                self._ec.sessionData = self.evercookie_session_storage(name, value);
                self._ec.windowData = self.evercookie_window(name, value);
                if (_ec_history) self._ec.historyData = self.evercookie_history(name, value)
            }
            if (typeof value != 'undefined') {
                if (((typeof _global_lso == 'undefined') || (typeof _global_isolated == 'undefined')) && i++ < _ec_tests) setTimeout(function() {
                    self._evercookie(name, cb, value, i, dont_reset)
                }, 10)
            } else {
                if (((window.openDatabase && typeof self._ec.dbData == 'undefined') || (typeof _global_lso == 'undefined') || (typeof self._ec.etagData == 'undefined') || (typeof self._ec.cacheData == 'undefined') || (document.createElement('canvas').getContext && (typeof self._ec.pngData == 'undefined' || self._ec.pngData == '')) || (typeof _global_isolated == 'undefined')) && i++ < _ec_tests) {
                    setTimeout(function() {
                        self._evercookie(name, cb, value, i, dont_reset)
                    }, 10)
                } else {
                    self._ec.lsoData = self.getFromStr(name, _global_lso);
                    _global_lso = undefined;
                    self._ec.slData = self.getFromStr(name, _global_isolated);
                    _global_isolated = undefined;
                    var tmpec = self._ec;
                    self._ec = {};
                    var candidates = new Array();
                    var bestnum = 0;
                    var candidate;
                    for (var item in tmpec) {
                        if (typeof tmpec[item] != 'undefined' && typeof tmpec[item] != 'null' && tmpec[item] != '' && tmpec[item] != 'null' && tmpec[item] != 'undefined' && tmpec[item] != null) {
                            candidates[tmpec[item]] = typeof candidates[tmpec[item]] == 'undefined' ? 1 : candidates[tmpec[item]] + 1
                        }
                    }
                    for (var item in candidates) {
                        if (candidates[item] > bestnum) {
                            bestnum = candidates[item];
                            candidate = item
                        }
                    }
                    if ((typeof dont_reset == "undefined" || dont_reset != 1) && (typeof candidate != "undefined")) {
                        self.set(name, candidate)
                    }
                    if (typeof cb == 'function') cb(candidate, tmpec)
                }
            }
        };
        this.evercookie_window = function(name, value) {
            try {
                if (typeof(value) != "undefined") window.name = _ec_replace(window.name, name, value);
                else return this.getFromStr(name, window.name)
            } catch (e) {}
        };
        this.evercookie_userdata = function(name, value) {
            try {
                var elm = this.createElem('div', 'userdata_el', 1);
                elm.style.behavior = "url(#default#userData)";
                if (typeof(value) != "undefined") {
                    elm.setAttribute(name, value);
                    elm.save(name)
                } else {
                    elm.load(name);
                    return elm.getAttribute(name)
                }
            } catch (e) {}
        };
        this.evercookie_cache = function(name, value) {
            if (typeof(value) != "undefined") {
                document.cookie = 'singoocookie_cache=' + value;
                customAjax({
                    url: '//chat.singoo.cc/php/singoocookie_cache.php?cookie=singoocookie_cache&singoocookie_cache=' + value + '&name=' + name,
                    type: "GET",
                    success: function(data) {
                        document.cookie = 'singoocookie_cache=' + value + '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/'
                    }
                })
            } else {
                var origvalue = this.getFromStr('singoocookie_cache', document.cookie);
                self._ec.cacheData = undefined;
                document.cookie = 'singoocookie_cache=; expires=Mon, 20 Sep 2018 00:00:00 UTC; path=/';
                customAjax({
                    url: '//chat.singoo.cc/php/singoocookie_cache.php?cookie=singoocookie_cache&singoocookie_cache=' + origvalue + '&name=' + name,
                    type: "GET",
                    success: function(data) {
                        document.cookie = 'singoocookie_cache=' + origvalue + '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/';
                        self._ec.cacheData = data
                    }
                })
            }
        };
        this.evercookie_etag = function(name, value) {
            if (typeof(value) != "undefined") {
                document.cookie = 'singoocookie_etag=' + value + '; path=/';
                customAjax({
                    url: '//chat.singoo.cc/php/singoocookie_etag.php?cookie=singoocookie_etag&singoocookie_etag=' + value + '&name=' + name,
                    type: "GET",
                    success: function(data) {
                        document.cookie = 'singoocookie_etag=' + value + '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/'
                    }
                })
            } else {
                var origvalue = this.getFromStr('singoocookie_etag', document.cookie);
                self._ec.etagData = undefined;
                document.cookie = 'singoocookie_etag=; expires=Mon, 20 Sep 2018 00:00:00 UTC; path=/';
                customAjax({
                    url: '//chat.singoo.cc/php/singoocookie_etag.php?cookie=singoocookie_etag&singoocookie_etag=' + origvalue + '&name=' + name,
                    type: "GET",
                    success: function(data) {
                        document.cookie = 'singoocookie_etag=' + origvalue + '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/';
                        self._ec.etagData = data
                    }
                })
            }
        };
        this.evercookie_lso = function(name, value) {
            var div = document.getElementById('swfcontainer');
            if (!div) {
                div = document.createElement("div");
                div.setAttribute('id', 'swfcontainer');
                document.body.appendChild(div)
            }
            var flashvars = {};
            if (typeof value != 'undefined') flashvars.everdata = name + '=' + value;
            var params = {};
            params.swliveconnect = "true";
            var attributes = {};
            attributes.id = "myswf";
            attributes.name = "myswf";
            swfobject.embedSWF("evercookie.swf", "swfcontainer", "1", "1", "9.0.0", false, flashvars, params, attributes)
        };
        this.evercookie_png = function(name, value) {
            if (document.createElement('canvas').getContext) {
                if (typeof(value) != "undefined") {
                    document.cookie = 'singoocookie_png=' + value;
                    var img = new Image();
                    img.style.visibility = 'hidden';
                    img.style.position = 'absolute';
                    img.crossOrigin = 'anonymous';
                    img.src = '//chat.singoo.cc/php/singoocookie_png.php?name=' + name + '&singoocookie_png=' + value
                } else {
                    self._ec.pngData = undefined;
                    var context = document.createElement('canvas');
                    context.style.visibility = 'hidden';
                    context.style.position = 'absolute';
                    context.width = 200;
                    context.height = 1;
                    var ctx = context.getContext('2d');
                    var origvalue = this.getFromStr('singoocookie_png', document.cookie);
                    document.cookie = 'singoocookie_png=; expires=Mon, 20 Sep 2018 00:00:00 UTC; path=/';
                    var img = new Image();
                    img.style.visibility = 'hidden';
                    img.style.position = 'absolute';
                    img.src = '//chat.singoo.cc/php/singoocookie_png.php?name=' + name + '&singoocookie_png=' + origvalue;
                    img.crossOrigin = 'anonymous';
                    img.onload = function() {
                        document.cookie = 'singoocookie_png=' + origvalue + '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/';
                        self._ec.pngData = '';
                        ctx.drawImage(img, 0, 0);
                        var imgd = ctx.getImageData(0, 0, 200, 1);
                        var pix = imgd.data;
                        for (var i = 0, n = pix.length; i < n; i += 4) {
                            if (pix[i] == 0) break;
                            self._ec.pngData += String.fromCharCode(pix[i]);
                            if (pix[i + 1] == 0) break;
                            self._ec.pngData += String.fromCharCode(pix[i + 1]);
                            if (pix[i + 2] == 0) break;
                            self._ec.pngData += String.fromCharCode(pix[i + 2])
                        }
                    }
                }
            }
        };
        this.evercookie_local_storage = function(name, value) {
            try {
                if (window.localStorage) {
                    if (typeof(value) != "undefined") localStorage.setItem(name, value);
                    else return localStorage.getItem(name)
                }
            } catch (e) {}
        };
        this.evercookie_database_storage = function(name, value) {
            try {
                if (window.openDatabase) {
                    var database = window.openDatabase("sqlite_evercookie", "", "evercookie", 1024 * 1024);
                    if (typeof(value) != "undefined") database.transaction(function(tx) {
                        tx.executeSql("CREATE TABLE IF NOT EXISTS cache(" + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " + "name TEXT NOT NULL, " + "value TEXT NOT NULL, " + "UNIQUE (name)" + ")", [], function(tx, rs) {}, function(tx, err) {});
                        tx.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)", [name, value], function(tx, rs) {}, function(tx, err) {})
                    });
                    else {
                        database.transaction(function(tx) {
                            tx.executeSql("SELECT value FROM cache WHERE name=?", [name], function(tx, result1) {
                                if (result1.rows.length >= 1) self._ec.dbData = result1.rows.item(0)['value'];
                                else self._ec.dbData = ''
                            }, function(tx, err) {})
                        })
                    }
                }
            } catch (e) {}
        };
        this.evercookie_session_storage = function(name, value) {
            try {
                if (window.sessionStorage) {
                    if (typeof(value) != "undefined") sessionStorage.setItem(name, value);
                    else return sessionStorage.getItem(name)
                }
            } catch (e) {}
        };
        this.evercookie_global_storage = function(name, value) {
            if (window.globalStorage) {
                var host = this.getHost();
                try {
                    if (typeof(value) != "undefined") eval("globalStorage[host]." + name + " = value");
                    else return eval("globalStorage[host]." + name)
                } catch (e) {}
            }
        };
        this.evercookie_silverlight = function(name, value) {
            var source = "evercookie.xap";
            var minver = "4.0.50401.0";
            var initParam = "";
            if (typeof(value) != "undefined") initParam = '<param name="initParams" value="' + name + '=' + value + '" />';
            var html = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="mysilverlight" width="0" height="0">' + initParam + '<param name="source" value="' + source + '"/>' + '<param name="onLoad" value="onSilverlightLoad"/>' + '<param name="onError" value="onSilverlightError"/>' + '<param name="background" value="Transparent"/>' + '<param name="windowless" value="true"/>' + '<param name="minRuntimeVersion" value="' + minver + '"/>' + '<param name="autoUpgrade" value="false"/>' + '</object>';
            document.body.innerHTML += html
        };
        this.encode = function(input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = this._utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64
                } else if (isNaN(chr3)) {
                    enc4 = 64
                }
                output = output + _baseKeyStr.charAt(enc1) + _baseKeyStr.charAt(enc2) + _baseKeyStr.charAt(enc3) + _baseKeyStr.charAt(enc4)
            }
            return output
        };
        this.decode = function(input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = _baseKeyStr.indexOf(input.charAt(i++));
                enc2 = _baseKeyStr.indexOf(input.charAt(i++));
                enc3 = _baseKeyStr.indexOf(input.charAt(i++));
                enc4 = _baseKeyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2)
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3)
                }
            }
            output = this._utf8_decode(output);
            return output
        };
        this._utf8_encode = function(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c)
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128)
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128)
                }
            }
            return utftext
        };
        this._utf8_decode = function(utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3
                }
            }
            return string
        };
        this.evercookie_history = function(name, value) {
            var baseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=-";
            var baseElems = baseStr.split("");
            var url = '//www.google.com/evercookie/cache/' + this.getHost() + '/' + name;
            if (typeof(value) != "undefined") {
                if (this.hasVisited(url)) return;
                this.createIframe(url, 'if');
                url = url + '/';
                var base = this.encode(value).split("");
                for (var i = 0; i < base.length; i++) {
                    url = url + base[i];
                    this.createIframe(url, 'if' + i)
                }
                url = url + '-';
                this.createIframe(url, 'if_')
            } else {
                if (this.hasVisited(url)) {
                    url = url + '/';
                    var letter = "";
                    var val = "";
                    var found = 1;
                    while (letter != '-' && found == 1) {
                        found = 0;
                        for (var i = 0; i < baseElems.length; i++) {
                            if (this.hasVisited(url + baseElems[i])) {
                                letter = baseElems[i];
                                if (letter != '-') val = val + letter;
                                url = url + letter;
                                found = 1;
                                break
                            }
                        }
                    }
                    return this.decode(val)
                }
            }
        };
        this.createElem = function(type, name, append) {
            var el;
            if (typeof name != 'undefined' && document.getElementById(name)) el = document.getElementById(name);
            else el = document.createElement(type);
            el.style.visibility = 'hidden';
            el.style.position = 'absolute';
            if (name) el.setAttribute('id', name);
            if (append) document.body.appendChild(el);
            return el
        };
        this.createIframe = function(url, name) {
            var el = this.createElem('iframe', name, 1);
            el.setAttribute('src', url);
            return el
        };
        this.waitForSwf = function(i) {
            if (typeof i == 'undefined') i = 0;
            else i++;
            if (i < _ec_tests && typeof swfobject == 'undefined') setTimeout(function() {
                waitForSwf(i)
            }, 300)
        };
        this.evercookie_cookie = function(name, value) {
            if (typeof(value) != "undefined") {
                document.cookie = name + '=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/';
                document.cookie = name + '=' + value + '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/'
            } else return this.getFromStr(name, document.cookie)
        };
        this.getFromStr = function(name, text) {
            if (typeof text != 'string') return;
            var nameEQ = name + "=";
            var ca = text.split(/[;&]/);
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
            }
        };
        this.getHost = function() {
            var domain = document.location.host;
            if (domain.indexOf('www.') == 0) domain = domain.replace('www.', '');
            return domain
        };
        this.toHex = function(str) {
            var r = "";
            var e = str.length;
            var c = 0;
            var h;
            while (c < e) {
                h = str.charCodeAt(c++).toString(16);
                while (h.length < 2) h = "0" + h;
                r += h
            }
            return r
        };
        this.fromHex = function(str) {
            var r = "";
            var e = str.length;
            var s;
            while (e >= 0) {
                s = e - 2;
                r = String.fromCharCode("0x" + str.substring(s, e)) + r;
                e = s
            }
            return r
        };
        this.hasVisited = function(url) {
            if (this.no_color == -1) {
                var no_style = this._getRGB("//samy-was-here-this-should-never-be-visited.com", -1);
                if (no_style == -1) this.no_color = this._getRGB("//samy-was-here-" + Math.floor(Math.random() * 9999999) + "rand.com")
            }
            if (url.indexOf('https:') == 0 || url.indexOf('http:') == 0) return this._testURL(url, this.no_color);
            return this._testURL("http://" + url, this.no_color) || this._testURL("//" + url, this.no_color) || this._testURL("http://www." + url, this.no_color) || this._testURL("//www." + url, this.no_color)
        };
        var _link = this.createElem('a', '_ec_rgb_link');
        var created_style;
        var _cssText = '#_ec_rgb_link:visited{display:none;color:#FF0000}';
        try {
            created_style = 1;
            var style = document.createElement('style');
            if (style.styleSheet) style.styleSheet.innerHTML = _cssText;
            else if (style.innerHTML) style.innerHTML = _cssText;
            else {
                var cssT = document.createTextNode(_cssText);
                style.appendChild(cssT)
            }
        } catch (e) {
            created_style = 0
        }
        this._getRGB = function(u, test_color) {
            if (test_color && created_style == 0) return -1;
            _link.href = u;
            _link.innerHTML = u;
            document.body.appendChild(style);
            document.body.appendChild(_link);
            var color;
            if (document.defaultView) color = document.defaultView.getComputedStyle(_link, null).getPropertyValue('color');
            else color = _link.currentStyle['color'];
            return color
        };
        this._testURL = function(url, no_color) {
            var color = this._getRGB(url);
            if (color == "rgb(255, 0, 0)" || color == "#ff0000") return 1;
            else if (no_color && color != no_color) return 1;
            return 0
        }
    };
    return _class
})();
var _global_isolated;

function onSilverlightLoad(sender, args) {
    var control = sender.getHost();
    _global_isolated = control.Content.App.getIsolatedStorage()
}

function onSilverlightError(sender, args) {
    _global_isolated = ""
}
if (!cookies) {
    var ec = new evercookie();
    var cookies_num = 0;
    ec.get("singoo_cookie", function(value) {
        if (typeof(value) === 'undefined') {
            var myDate = new Date();
            tm = myDate.getTime();
            curr_cookie_page1 = tm + Math.ceil(Math.random() * 1000);
            ec.set("singoo_cookie", curr_cookie_page1 + '');
            canvas = curr_cookie_page1;
            cookies = curr_cookie_page1
        } else {
            cookies = value;
            if (cookies == null) {
                var crm_cook = setInterval(function() {
                    ec.get("singoo_cookie", function(curr_value) {
                        cookies = curr_value
                    });
                    if (!cookies) return;
                    clearInterval(crm_cook)
                }, 200)
            }
        }
        if (track_flag && cookies) {
            crm_data['w'] = cookies.toString();
            watchAction(crm_data)
        }
    });
    cookies = crm_getCookieValue('singoo_cookie')
} else {
    var old_singoo_cookie = localStorage.getItem('singoo_cookie');
    if (old_singoo_cookie === null) {
        var ec = new evercookie();
        ec.set("singoo_cookie", cookies)
    }
}
var canvas = null;
var myDate = new Date();
tm = myDate.getTime();
cookie_page1 = tm + Math.ceil(Math.random() * 1000);
if (typeof keyword == "undefined") {
    var keyword = ''
}
if (typeof e_t == 'undefined') {
    var e_t = getParams('ex');
}

if (typeof e_n == 'undefined') {
    var e_n = getParams('en');
}

if (typeof a_t == 'undefined') {
    var a_t = getParams('at');
}

r = encodeURIComponent(r);
var crm_data;
if (keyword) {
    crm_data = {
        'p': p,
        'r': r,
        'w': cookies,
        'canvas': canvas,
        'i': website_id,
        'cookie_page1': cookie_page1,
        'e_t': e_t,
        'search_keyword': keyword,
        'search_rank': search_rank,
        'search_count': search_count,
        'local_href': local_href,
        'pri': pri,
        'i_r': '1',
        'u': geturl(),
        'en': e_n,
        'at': a_t,
    }
} else {
    crm_data = {
        'p': p,
        'r': r,
        'w': cookies,
        'canvas': canvas,
        'i': website_id,
        'cookie_page1': cookie_page1,
        'e_t': e_t,
        'local_href': local_href,
        'pri': pri,
        'i_r': '1',
        'u': geturl(),
        'en': e_n,
        'at': a_t,
    }
}


// 获取url的get值

function getParams(name) {
    var pos, str, para, parastr;
    var array = []
    str = window.location.href;
    if (str.split("?")[1] != undefined && str.split("=")[1] != undefined) {
        parastr = str.split("?")[1];
        parastr = decodeURIComponent(parastr);
        // console.log(parastr);
        var arr = []
        arr = parastr.split("&");

        for (var i = 0; i < arr.length; i++) {
            array[arr[i].split("=")[0]] = arr[i].split("=")[1];
        }

    }

    // console.log(array);

    //alert(array["projectId"]);
    return array[name]; //project为所要获取的参数

}

// 获取父页面url

function geturl() {
    var url = null;
    if (parent !== window) {
        try {
            url = parent.location.href;
        } catch (e) {
            url = document.referrer;
        }
    }

    // 如果获取失败 则取以下值
    if (!url) {
        url = window.location.href;
    }
    return url;
}

website_name = website_name.replace("www.", "");
var track_flag = host.indexOf(website_name) > -1 || website_name == current_name;
var test_website_name = 'test0607.singoo.co';
if (!track_flag) {
    var track_web_cookies = '';
    if (!track_web_cookies) {
        var get_website_url = '//v5.singoo.cc/v1/Track/getWebsite';
        var website_data = {
            'website_id': website_id
        };
        customAjax({
            url: get_website_url,
            type: "POST",
            data: website_data,
            dataType: "json",
            success: function(response) {
                if (response) {
                    setCookie('website_cookie', response);
                    track_web_cookies = crm_getCookieValue('website_cookie');
                    if (track_web_cookies && track_web_cookies.length > 0) {
                        var track_web_arr = new Array();
                        track_web_arr = track_web_cookies.split(",");
                        var current_host = window.location.host;
                        for (iw = 0; iw < track_web_arr.length; iw++) {
                            if (track_web_arr[iw] == current_host || track_web_arr[iw].indexOf(current_host) > -1) {
                                track_flag = true;
                                break
                            }
                        }
                    }
                    if (track_flag && cookies) {
                        watchAction(crm_data)
                    }
                }
            },
            fail: function(status) {}
        })
    } else {
        track_web_cookies = crm_getCookieValue('website_cookie');
        if (track_web_cookies && track_web_cookies.length > 0) {
            var track_web_arr = new Array();
            track_web_arr = track_web_cookies.split(",");
            for (iw = 0; iw < track_web_arr.length; iw++) {
                if (track_web_arr[iw] == website_name || track_web_arr[iw].indexOf(website_name) > -1) {
                    track_flag = true;
                    break
                }
            }
        }
        if (track_flag && cookies) {
            watchAction(crm_data)
        }
    }
} else {
    if (track_flag && cookies) {
        watchAction(crm_data)
    }
}

function watchAction(crm_data) {
    var t = new Date();
    var url = '//v5.singoo.cc/v1/Track';
    customAjax({
        url: url,
        type: "POST",
        data: crm_data,
        dataType: "json",
        success: function(response) {
            if (response) {
                if (typeof response == "string") {
                    var res_data = JSON.parse(response);
                    v_visitor_id = res_data.vid;
                    s_session_id = res_data.sid
                } else if (typeof response == "object") {
                    v_visitor_id = response.vid;
                    s_session_id = response.sid
                }
                var p_data = {
                    'wid': website_id,
                    'sid': s_session_id,
                    'vid': v_visitor_id
                };
                if (localStorage.getItem("recomSession")) {
                    recomSession_json = JSON.parse(localStorage.getItem("recomSession"));
                    session_sid = recomSession_json != null ? recomSession_json.sid : '';
                    sessionName = recomSession_json != null ? recomSession_json.name.split(",") : [];
                    if (s_session_id == session_sid) {
                        var local_path = window.location.pathname;
                        if (!contains(sessionName, local_path)) {
                            getRecommend(p_data)
                        }
                    } else {
                        getRecommend(p_data)
                    }
                } else {
                    getRecommend(p_data)
                }
                if (!localStorage.getItem("leaveSession") || localStorage.getItem("leaveSession") != s_session_id) {
                    recommend_data = true;
                    ouibounce_pop()
                }
            }
        },
        fail: function(status) {}
    })
}

function getRecommend(data) {
    var url = '//app.singoo.cc/index.php/Home/Track/getRecommend';
    customAjax({
        url: url,
        type: "POST",
        data: data,
        dataType: "json",
        success: function(response) {
            if (response) {
                var res_data = JSON.parse(response);
                recommend_data = res_data ? res_data : {};
                if (recommend_data.popup_count <= recommend_data.frequency) {
                    localStorage.setItem("leave_tpl", recommend_data.leave_tpl);
                    window.setTimeout("clockPop()", (recommend_data.show_time) * 1000)
                }
            }
        },
        fail: function(status) {}
    })
}

function customAjax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    if (IEVersion() == 9 || IEVersion() == 8) {
        console.log('鎴戞槸ie');
        if (window.XDomainRequest) {
            var xdr = new XDomainRequest();
            var curr_url = options.url + "?" + params;
            xdr.open(options.type, options.url);
            xdr.onprogress = function() {};
            xdr.ontimeout = function() {};
            xdr.onerror = function() {
                options.fail(Occured)
            };
            xdr.onload = function() {
                options.success(xdr.responseText)
            };
            setTimeout(function() {
                var params = JSON.stringify(options.data);
                xdr.send(params)
            }, 0)
        }
    } else {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                    options.success && options.success(xhr.responseText, xhr.responseXML)
                } else {
                    options.fail && options.fail(status)
                }
            }
        };
        if (options.type == "GET") {
            var params = formatParams(options.data);
            xhr.open("GET", options.url + "?" + params, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            if (typeof options.singoo_cookie != 'undefined') {
                xhr.setRequestHeader('Singoo_cookie', options.singoo_cookie)
            }
            xhr.send(null)
        } else if (options.type == "POST") {
            xhr.open("POST", options.url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var params = JSON.stringify(options.data);
            xhr.send(params)
        }
    }
}

function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]))
    }
    arr.push(("v=" + Math.random()).replace(".", ""));
    return arr.join("&")
}

function setCookie(name, value) {
    var Days = 3000;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/"
}

function crm_getCookieValue(cookieName) {
    var cookieValue = document.cookie;
    var cookieStartAt = cookieValue.indexOf("" + cookieName + "=");
    if (cookieStartAt == -1) {
        cookieStartAt = cookieValue.indexOf(cookieName + "=")
    }
    if (cookieStartAt == -1) {
        cookieValue = null
    } else {
        cookieStartAt = cookieValue.indexOf("=", cookieStartAt) + 1;
        cookieEndAt = cookieValue.indexOf(";", cookieStartAt);
        if (cookieEndAt == -1) {
            cookieEndAt = cookieValue.length
        }
        cookieValue = unescape(cookieValue.substring(cookieStartAt, cookieEndAt))
    }
    return cookieValue
}

function getCurrentQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null
}

function sentDatas(event, str_content) {
    var crm_data = {
        'p': p,
        'r': r,
        'w': cookies,
        'canvas': canvas,
        'i': website_id,
        'cookie_page1': cookie_page1,
        'e_t': e_t,
        'local_href': local_href,
        'pri': pri,
        'event': event,
        'str': str_content
    };
    var url = '//v5.singoo.cc/v1/Track/eventSend';
    customAjax({
        url: url,
        type: "POST",
        data: crm_data,
        dataType: "json",
        success: function(response) {
            return true
        },
        fail: function(status) {
            return true
        }
    })
}

function IEVersion() {
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7
        } else if (fIEVersion == 8) {
            return 8
        } else if (fIEVersion == 9) {
            return 9
        } else if (fIEVersion == 10) {
            return 10
        } else {
            return 6
        }
    } else if (isEdge) {
        return 'edge'
    } else if (isIE11) {
        return 11
    } else {
        return -1
    }
}(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory)
    } else if (typeof exports === 'object') {
        module.exports = factory(require, exports, module)
    } else {
        root.ouibounce = factory()
    }
}(this, function(require, exports, module) {
    return function ouibounce(el, custom_config) {
        "use strict";
        var config = custom_config || {},
            aggressive = config.aggressive || false,
            sensitivity = setDefault(config.sensitivity, 20),
            timer = setDefault(config.timer, 1000),
            delay = setDefault(config.delay, 0),
            callback = config.callback ||
                function() {}, cookieExpire = setDefaultCookieExpire(config.cookieExpire) || '', cookieDomain = config.cookieDomain ? ';domain=' + config.cookieDomain : '', cookieName = config.cookieName ? config.cookieName : 'viewedOuibounceModal', sitewide = config.sitewide === true ? ';path=/' : '', _delayTimer = null, _html = document.documentElement;

        function setDefault(_property, _default) {
            return typeof _property === 'undefined' ? _default : _property
        }

        function setDefaultCookieExpire(days) {
            var ms = days * 24 * 60 * 60 * 1000;
            var date = new Date();
            date.setTime(date.getTime() + ms);
            return "; expires=" + date.toUTCString()
        }
        setTimeout(attachOuiBounce, timer);

        function attachOuiBounce() {
            if (isDisabled()) {
                return
            }
            _html.addEventListener('mouseleave', handleMouseleave);
            _html.addEventListener('mouseenter', handleMouseenter);
            _html.addEventListener('keydown', handleKeydown)
        }

        function handleMouseleave(e) {
            if (e.clientY > sensitivity) {
                return
            }
            _delayTimer = setTimeout(fire, delay)
        }

        function handleMouseenter() {
            if (_delayTimer) {
                clearTimeout(_delayTimer);
                _delayTimer = null
            }
        }
        var disableKeydown = false;

        function handleKeydown(e) {
            if (disableKeydown) {
                return
            } else if (!e.metaKey || e.keyCode !== 76) {
                return
            }
            disableKeydown = true;
            _delayTimer = setTimeout(fire, delay)
        }

        function checkCookieValue(cookieName, value) {
            return parseCookies()[cookieName] === value
        }

        function parseCookies() {
            var cookies = document.cookie.split('; ');
            var ret = {};
            for (var i = cookies.length - 1; i >= 0; i--) {
                var el = cookies[i].split('=');
                ret[el[0]] = el[1]
            }
            return ret
        }

        function isDisabled() {
            return checkCookieValue(cookieName, 'true') && !aggressive
        }

        function fire() {
            if (isDisabled()) {
                return
            }
            if (el) {
                el.style.display = 'block'
            }
            callback();
            disable()
        }

        function disable(custom_options) {
            var options = custom_options || {};
            if (typeof options.cookieExpire !== 'undefined') {
                cookieExpire = setDefaultCookieExpire(options.cookieExpire)
            }
            if (options.sitewide === true) {
                sitewide = ';path=/'
            }
            if (typeof options.cookieDomain !== 'undefined') {
                cookieDomain = ';domain=' + options.cookieDomain
            }
            if (typeof options.cookieName !== 'undefined') {
                cookieName = options.cookieName
            }
            document.cookie = cookieName + '=true' + cookieExpire + cookieDomain + sitewide;
            _html.removeEventListener('mouseleave', handleMouseleave);
            _html.removeEventListener('mouseenter', handleMouseenter);
            _html.removeEventListener('keydown', handleKeydown)
        }
        return {
            fire: fire,
            disable: disable,
            isDisabled: isDisabled
        }
    }
}));

function contains(arr, obj) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === obj) {
            return true
        }
    }
    return false
}
var session_change = false,
    pop_leve = false;
var recomSession_json, session_sid, sessionName;

function closePopup() {
    document.getElementById("temp_wrap").style.visibility = "hidden";
    document.getElementById("temp_wrap").remove();
    var leaveSession_id = localStorage.getItem("leaveSession");
    if (!localStorage.getItem("leaveSession") || leaveSession_id != s_session_id) {
        ouibounce_pop()
    }
}

function ouibounce_pop() {
    var leaveSession_id = localStorage.getItem("leaveSession");
    var _ouibounce = ouibounce(document.getElementById('temp_wrap'), {
        aggressive: true,
        timer: 0,
        callback: function() {
            propFrom = sessionStorage.getItem("popform");
            if (propFrom == "false" || !propFrom) {
                if ((!localStorage.getItem("leaveSession") || leaveSession_id != s_session_id) && recommend_data) {
                    if (!document.getElementById('temp_wrap') && recommend_data && temp_type != "leave" && !pop_leve) {
                        temp_type = "leave";
                        pop_leve = true;
                        Popup();
                        setLocalstorage_leave()
                    }
                }
            }
        }
    })
}
window.onbeforeunload = function() {
    sessionStorage.setItem("popform", 'false')
};

function setLocalstorage_recom() {
    recomSession_json = JSON.parse(localStorage.getItem("recomSession"));
    session_sid = recomSession_json != null ? recomSession_json.sid : '';
    sessionName = recomSession_json != null ? recomSession_json.name.split(",") : [];
    if (!localStorage.getItem("recomSession") || session_sid != s_session_id) {
        var obj = {
            "name": window.location.pathname,
            "sid": s_session_id
        };
        localStorage.setItem("recomSession", JSON.stringify(obj))
    } else {
        var local_path = window.location.pathname;
        if (!contains(sessionName, local_path)) {
            sessionName.push(window.location.pathname);
            var nameStr = sessionName.join(",");
            var obj = {
                "name": nameStr,
                "sid": s_session_id
            };
            localStorage.setItem("recomSession", JSON.stringify(obj))
        }
    }
}

function setLocalstorage_leave() {
    if (!localStorage.getItem("leaveSession") || localStorage.getItem("leaveSession") != s_session_id) {
        localStorage.setItem("leaveSession", s_session_id)
    }
}

function popupCountSetIn() {
    var url = '//app.singoo.cc/index.php/Home/Track/popupCountSetInc';
    customAjax({
        url: url,
        type: "GET",
        data: {
            'session_id': s_session_id
        },
        dataType: "json",
        success: function(response) {},
        fail: function(status) {}
    })
}

function clockPop() {
    web_session_json = JSON.parse(localStorage.getItem("recomSession"));
    session_sid = web_session_json != null ? web_session_json.sid : '';
    sessionName = web_session_json != null ? web_session_json.name.split(",") : [];
    propFrom = sessionStorage.getItem("popform");
    if (propFrom == 'false' || !propFrom) {
        if (!web_session_json) {
            Popup()
        } else {
            var local_path = window.location.pathname;
            if (!contains(sessionName, local_path) || session_sid != s_session_id) {
                Popup()
            }
        }
        popupCountSetIn();
        if (!pop_leve) {
            setLocalstorage_recom()
        }
        ouibounce_pop()
    }
}

function Popup() {
    var html = '';
    if (temp_type == 'recommend') {
        html = recommend_data.recommend_tpl
    } else {
        html = localStorage.getItem("leave_tpl")
    }
    if (!html) {
        return
    }
    if (!document.getElementById('temp_wrap')) {
        var div = document.createElement("div");
        div.setAttribute('style', "top: 0;left: 0;width: 100%;height: 100%;z-index: 1043;position: fixed;white-space: nowrap;background: rgba(0, 0, 0, 0.5);font-size: 14px;");
        div.setAttribute("id", "temp_wrap");
        div.setAttribute("class", "popUpsWrap");
        div.innerHTML = html;
        document.body.appendChild(div)
    }
    sentDatas('website_bounced');
    if (!IsPC()) {
        sessionStorage.exitBrowser = true
    }
}
window.addEventListener("popstate", function(e) {
    if (String(sessionStorage.exitBrowser) == "true") {
        ouibounce_pop();
        sessionStorage.exitBrowser = false
    }
}, false);

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break
        }
    }
    return flag
}
