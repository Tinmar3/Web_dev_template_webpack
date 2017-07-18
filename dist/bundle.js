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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var _parts = __webpack_require__(1);

var _domready = __webpack_require__(2);

var _domready2 = _interopRequireDefault(_domready);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var width;
var isLarge = false;
var isMedium = false;
var isSmallScreen = false;
var isSmallerScreen = false;
var isSmallestScreen = false;
var screenHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
var pages = {};
var delayedIntervals = [];

function initialize() {
    main();
    updateScreenSize();
    (0, _parts.initDropDown)();
}

DomReady.ready(function () {

    initialize();

    window.onresize = function (event) {

        delayedAction(function () {
            // after resize code
        }, 1);
    };

    window.addEventListener("orientationchange", function () {

        initialize();
    });

    window.addEventListener('scroll', function () {
        // scroll listeners 

        delayedAction(function () {
            // after scroll code
        }, 2);
    });
});

function main() {}

function pageCheck() {
    if (document.getElementById('index-page')) {
        pages['page-1'] = true;
    } else if (document.getElementById('article-page')) {
        pages['page-2'] = true;
    }
}

function updateScreenSize() {

    width = window.innerWidth;

    if (width < 450) {
        isLarge = false;
        isMedium = false;
        isSmallScreen = false;
        isSmallerScreen = false;
        isSmallestScreen = true;
    } else if (width < 768) {
        isLarge = false;
        isMedium = false;
        isSmallScreen = false;
        isSmallerScreen = true;
        isSmallestScreen = false;
    } else if (width < 992) {
        isLarge = false;
        isMedium = false;
        isSmallScreen = true;
        isSmallerScreen = false;
        isSmallestScreen = false;
    } else if (width < 1200) {
        isLarge = false;
        isMedium = true;
        isSmallScreen = false;
        isSmallerScreen = false;
        isSmallestScreen = false;
    } else {
        isLarge = true;
        isMedium = false;
        isSmallScreen = false;
        isSmallerScreen = false;
        isSmallestScreen = false;
    }
}

function getElementIndex(node) {
    var index = 0;
    while (node = node.previousElementSibling) {
        index++;
    }
    return index;
}

function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function isHover(element) {
    return !!(element.querySelector(":hover") || element.parentNode.querySelector(":hover") === element);
}

function delayedAction(functionAction, intervalIndex) {
    if (delayedIntervals[intervalIndex]) {
        clearInterval(delayedIntervals[intervalIndex]);
        delayedIntervals[intervalIndex] = setTimeout(function () {
            functionAction();
        }, 900);
    } else {
        var interval = setTimeout(function () {
            functionAction();
        }, 900);
        delayedIntervals[intervalIndex] = interval;
    }
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

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initDropDown = initDropDown;
// GLOBAL HELPING CLASSES (already included in main.js)

function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function isHover(element) {
    return !!(element.querySelector(":hover") || element.parentNode.querySelector(":hover") === element);
}

// CUSTOM DROPDOWN - start

function initDropDown() {

    var dropdown = document.getElementsByClassName('dropdown');

    for (var i = 0; i < dropdown.length; i++) {
        (function () {
            // for scope to "own" a variable (j) and set click listener correctly
            var j = i;
            var thisDropdown = dropdown[j];
            var thisDropdownToggle = thisDropdown.querySelector('.dropdown-main');
            var thisDropdownList = thisDropdown.querySelector('.dropdown-items-list');
            var thisDropdownItems = thisDropdownList.querySelectorAll('.dropdown-item');
            var thisDropdownSelected = thisDropdown.querySelector('.dropdown-selected');

            thisDropdownToggle.addEventListener('click', function () {
                dropdownToggleClick(thisDropdown);
            });

            for (var m = 0; m < thisDropdownItems.length; m++) {
                (function () {

                    var n = m;
                    var thisDropdownItem = thisDropdownItems[n];
                    var thisItemValue = thisDropdownItem.textContent || thisDropdownItem.innerText || "";
                    thisDropdownItem.addEventListener('click', function () {
                        thisDropdownSelected.innerHTML = thisItemValue;
                        dropdownToggleClick(thisDropdown);
                    });
                })();
            }
        })();
    }

    function dropdownToggleClick(dropdown) {
        if (hasClass(dropdown, 'opened')) {
            dropdown.classList.remove('opened');
        } else {
            dropdown.classList.add('opened');
        }
    }

    document.body.addEventListener('click', function () {
        var itemsToCheck = document.getElementsByClassName('dropdown'); // for closing dropdowns and similar elements on body click
        for (i = 0; i < itemsToCheck.length; i++) {
            var thisItem = itemsToCheck[i];
            if (!isHover(thisItem)) {
                thisItem.classList.remove('opened');
            }
        }
    });
}

// CUSTOM DROPDOWN - end

/***/ }),
/* 2 */
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

/***/ })
/******/ ]);