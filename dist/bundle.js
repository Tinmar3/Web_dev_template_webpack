/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pageCheck = pageCheck;
exports.updateScreenSize = updateScreenSize;
exports.modDelayedAction = modDelayedAction;
exports.getCoords = getCoords;
exports.getViewport = getViewport;
exports.isHover = isHover;
exports.detectIE = detectIE;
function pageCheck() {
    var pages = {};

    if (document.getElementById('projects-page')) {
        pages['projects'] = true;
    } else if (document.getElementById('about-me-page')) {
        pages['aboutMe'] = true;
    } else if (document.getElementById('home-page')) {
        pages['home'] = true;
    } else if (document.getElementById('brands')) {
        pages['brands'] = true;
    } else if (document.getElementById('news')) {
        pages['news'] = true;
    } else if (document.getElementById('search-results')) {
        pages['search'] = true;
    }

    return pages;
}

function updateScreenSize() {

    var sizes = {};
    var width = window.innerWidth;

    if (width < 450) {
        sizes.smallest = true;
    } else if (width < 768) {
        sizes.small = true;
    } else if (width < 992) {
        sizes.medium = true;
    } else if (width < 1200) {
        sizes.large = true;
    } else {
        sizes.largest = true;
    }

    return sizes;
}

function modDelayedAction() {
    var delayedIntervals = [];

    return {
        initDelayedAction: function initDelayedAction(functionAction, intervalIndex) {
            if (delayedIntervals[intervalIndex]) {
                clearInterval(delayedIntervals[intervalIndex]);
                delayedIntervals[intervalIndex] = setTimeout(function () {
                    functionAction();
                }, 500);
            } else {
                var interval = setTimeout(function () {
                    functionAction();
                }, 500);
                delayedIntervals[intervalIndex] = interval;
            }
        }
    };
}

function getCoords(elem) {
    // crossbrowser version
    // get coordinates relative to the DOCUMENT (not viewport)
    var box = elem.getBoundingClientRect();
    var elemWidth = box.width;
    var elemHeight = box.height;

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return {
        top: Math.round(top),
        left: Math.round(left),
        bottom: Math.round(top) + elemHeight,
        right: Math.round(left) + elemWidth
    };
}

function getViewport() {

    var viewPortWidth;
    var viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth, viewPortHeight = window.innerHeight;
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
            viewPortWidth = document.documentElement.clientWidth, viewPortHeight = document.documentElement.clientHeight;
        }

        // older versions of IE
        else {
                viewPortWidth = document.getElementsByTagName('body')[0].clientWidth, viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
            }

    return {
        width: viewPortWidth,
        height: viewPortHeight
    };
}

function isHover(element) {
    return !!(element.querySelector(":hover") || element.parentNode.querySelector(":hover") === element);
}

function detectIE() {
    var ua = window.navigator.userAgent;

    /**
    * detect IE
    * returns version of IE or false, if browser is not Internet Explorer
    */

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function () {

	var DomReady = window.DomReady = {};

	// Everything that has to do with properly supporting our document ready event. Brought over from the most awesome jQuery. 

	var userAgent = navigator.userAgent.toLowerCase();

	// Figure out what browser is being used
	var browser = {
		version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
		safari: /webkit/.test(userAgent),
		opera: /opera/.test(userAgent),
		msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
		mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
	};

	var readyBound = false;
	var isReady = false;
	var readyList = [];

	// Handle when the DOM is ready
	function domReady() {
		// Make sure that the DOM is not already loaded
		if (!isReady) {
			// Remember that the DOM is ready
			isReady = true;

			if (readyList) {
				for (var fn = 0; fn < readyList.length; fn++) {
					readyList[fn].call(window, []);
				}

				readyList = [];
			}
		}
	};

	// From Simon Willison. A safe way to fire onload w/o screwing up everyone else.
	function addLoadEvent(func) {
		var oldonload = window.onload;
		if (typeof window.onload != 'function') {
			window.onload = func;
		} else {
			window.onload = function () {
				if (oldonload) {
					oldonload();
				}
				func();
			};
		}
	};

	// does the heavy work of working through the browsers idiosyncracies (let's call them that) to hook onload.
	function bindReady() {
		if (readyBound) {
			return;
		}

		readyBound = true;

		// Mozilla, Opera (see further below for it) and webkit nightlies currently support this event
		if (document.addEventListener && !browser.opera) {
			// Use the handy event callback
			document.addEventListener("DOMContentLoaded", domReady, false);
		}

		// If IE is used and is not in a frame
		// Continually check to see if the document is ready
		if (browser.msie && window == top) (function () {
			if (isReady) return;
			try {
				// If IE is used, use the trick by Diego Perini
				// http://javascript.nwbox.com/IEContentLoaded/
				document.documentElement.doScroll("left");
			} catch (error) {
				setTimeout(arguments.callee, 0);
				return;
			}
			// and execute any waiting functions
			domReady();
		})();

		if (browser.opera) {
			document.addEventListener("DOMContentLoaded", function () {
				if (isReady) return;
				for (var i = 0; i < document.styleSheets.length; i++) {
					if (document.styleSheets[i].disabled) {
						setTimeout(arguments.callee, 0);
						return;
					}
				} // and execute any waiting functions
				domReady();
			}, false);
		}

		if (browser.safari) {
			var numStyles;
			(function () {
				if (isReady) return;
				if (document.readyState != "loaded" && document.readyState != "complete") {
					setTimeout(arguments.callee, 0);
					return;
				}
				if (numStyles === undefined) {
					var links = document.getElementsByTagName("link");
					for (var i = 0; i < links.length; i++) {
						if (links[i].getAttribute('rel') == 'stylesheet') {
							numStyles++;
						}
					}
					var styles = document.getElementsByTagName("style");
					numStyles += styles.length;
				}
				if (document.styleSheets.length != numStyles) {
					setTimeout(arguments.callee, 0);
					return;
				}

				// and execute any waiting functions
				domReady();
			})();
		}

		// A fallback to window.onload, that will always work
		addLoadEvent(domReady);
	};

	// This is the public function that people can use to hook up ready.
	DomReady.ready = function (fn, args) {
		// Attach the listeners
		bindReady();

		// If the DOM is already ready
		if (isReady) {
			// Execute the function immediately
			fn.call(window, []);
		} else {
			// Add the function to the wait list
			readyList.push(function () {
				return fn.call(window, []);
			});
		}
	};

	bindReady();
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _header = __webpack_require__(3);

var _footer = __webpack_require__(4);

var _utils = __webpack_require__(0);

__webpack_require__(1);
__webpack_require__(5);


var pages, header, footer, delayedAction;

{
    var reinitialize = function reinitialize() {
        header.deinitHeader();
        header.initHeader();
    };

    delayedAction = (0, _utils.modDelayedAction)();
    pages = (0, _utils.pageCheck)();
    header = (0, _header.modHeader)();
    footer = (0, _footer.modFooter)();

    header.initHeader();
    footer.initFooter();

    if (pages.home) {
        __webpack_require__(6);
    }

    window.onresize = function (event) {
        delayedAction.initDelayedAction(function () {
            reinitialize();
        }, 1);
    };

    window.addEventListener("orientationchange", function () {
        reinitialize();
    });
}

// window.onload = () => {
// }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.modHeader = modHeader;

var _utils = __webpack_require__(0);

function modHeader() {

    var header = document.querySelector('header');
    var navigation = document.querySelector('nav');

    function initHeader() {}

    function deinitHeader() {}

    var PublicAPI = {
        initHeader: initHeader,
        deinitHeader: deinitHeader
    };

    return PublicAPI;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.modFooter = modFooter;

var _utils = __webpack_require__(0);

function modFooter() {

    var footer = document.querySelector('footer');
    var main = document.querySelector('main');

    function initFooter() {}

    var PublicAPI = {
        initFooter: initFooter
    };

    return PublicAPI;
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* ---------------------- CLASSLIST */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || !function (t) {
    "use strict";
    if ("Element" in t) {
        var e = "classList",
            n = "prototype",
            i = t.Element[n],
            s = Object,
            r = String[n].trim || function () {
            return this.replace(/^\s+|\s+$/g, "");
        },
            o = Array[n].indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++) {
                if (e in this && this[e] === t) return e;
            }return -1;
        },
            a = function a(t, e) {
            this.name = t, this.code = DOMException[t], this.message = e;
        },
            c = function c(t, e) {
            if ("" === e) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");if (/\s/.test(e)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");return o.call(t, e);
        },
            l = function l(t) {
            for (var e = r.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], i = 0, s = n.length; s > i; i++) {
                this.push(n[i]);
            }this._updateClassName = function () {
                t.setAttribute("class", "" + this);
            };
        },
            u = l[n] = [],
            h = function h() {
            return new l(this);
        };if (a[n] = Error[n], u.item = function (t) {
            return this[t] || null;
        }, u.contains = function (t) {
            return t += "", -1 !== c(this, t);
        }, u.add = function () {
            var t,
                e = arguments,
                n = 0,
                i = e.length,
                s = !1;do {
                t = e[n] + "", -1 === c(this, t) && (this.push(t), s = !0);
            } while (++n < i);s && this._updateClassName();
        }, u.remove = function () {
            var t,
                e,
                n = arguments,
                i = 0,
                s = n.length,
                r = !1;do {
                for (t = n[i] + "", e = c(this, t); -1 !== e;) {
                    this.splice(e, 1), r = !0, e = c(this, t);
                }
            } while (++i < s);r && this._updateClassName();
        }, u.toggle = function (t, e) {
            t += "";var n = this.contains(t),
                i = n ? e !== !0 && "remove" : e !== !1 && "add";return i && this[i](t), e === !0 || e === !1 ? e : !n;
        }, u.toString = function () {
            return this.join(" ");
        }, s.defineProperty) {
            var f = { get: h, enumerable: !0, configurable: !0 };try {
                s.defineProperty(i, e, f);
            } catch (g) {
                (void 0 === g.number || -2146823252 === g.number) && (f.enumerable = !1, s.defineProperty(i, e, f));
            }
        } else s[n].__defineGetter__ && i.__defineGetter__(e, h);
    }
}(self), function () {
    "use strict";
    var t = document.createElement("_");if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
        var e = function e(t) {
            var e = DOMTokenList.prototype[t];DOMTokenList.prototype[t] = function (t) {
                var n,
                    i = arguments.length;for (n = 0; i > n; n++) {
                    t = arguments[n], e.call(this, t);
                }
            };
        };e("add"), e("remove");
    }if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
        var n = DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle = function (t, e) {
            return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t);
        };
    }t = null;
}());

/* ------------------------- FROM */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
    Array.from = function () {
        var toStr = Object.prototype.toString;
        var isCallable = function isCallable(fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function toInteger(value) {
            var number = Number(value);
            if (isNaN(number)) {
                return 0;
            }
            if (number === 0 || !isFinite(number)) {
                return number;
            }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function toLength(value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        // The length property of the from method is 1.
        return function from(arrayLike /*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;

            // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike);

            // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) {
                throw new TypeError('Array.from requires an array-like object - not null or undefined');
            }

            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) {
                    throw new TypeError('Array.from: when provided, the second argument must be a function');
                }

                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }

            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);

            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method 
            // of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            // 16. Let k be 0.
            var k = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                    A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                    A[k] = kValue;
                }
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
        };
    }();
}

/* ------------------------- QUERY SELECTOR */

(function (doc, proto) {
    try {
        // check if browser supports :scope natively
        doc.querySelector(':scope body');
    } catch (err) {
        // polyfill native methods if it doesn't
        ['querySelector', 'querySelectorAll'].forEach(function (method) {
            var nativ = proto[method];
            proto[method] = function (selectors) {
                if (/(^|,)\s*:scope/.test(selectors)) {
                    // only if selectors contains :scope
                    var id = this.id; // remember current element id
                    this.id = 'ID_' + Date.now(); // assign new unique id
                    selectors = selectors.replace(/((^|,)\s*):scope/g, '$1#' + this.id); // replace :scope with #ID
                    var result = doc[method](selectors);
                    this.id = id; // restore previous id
                    return result;
                } else {
                    return nativ.call(this, selectors); // use native code for other selectors
                }
            };
        });
    }
})(window.document, Element.prototype);

/* -------------------------------------------- FOREACH */

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _utils = __webpack_require__(0);

__webpack_require__(1);


DomReady.ready(function () {

    delayedAction = (0, _utils.modDelayedAction)();

    console.log("home");

    function reinitialize() {}

    window.onresize = function (event) {
        delayedAction.initDelayedAction(function () {
            reinitialize();
        }, 1);
    };

    window.addEventListener("orientationchange", function () {
        reinitialize();
    });
});

// window.onload = () => {
// }

/***/ })
/******/ ]);