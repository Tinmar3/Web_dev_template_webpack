import { initDropDown } from './parts';
import exec from './domready';

var width;
var isLarge = false;
var isMedium = false;
var isSmallScreen = false;
var isSmallerScreen = false;
var isSmallestScreen = false;
var screenHeight = "innerHeight" in window
    ? window.innerHeight
    : document.documentElement.offsetHeight;
var pages = {};
var delayedIntervals = [];

function initialize() {
    main();
    updateScreenSize();
    initDropDown();
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

    window.addEventListener('scroll', function () { // scroll listeners 
        delayedAction(function () {
            // after scroll code
        }, 2);
    });

});

function main() { }

function pageCheck() {
    if (document.getElementById('index-page')) {
        pages['page-1'] = true;
    } else if (document.getElementById('article-page')) {
        pages['page-2'] = true;
    }
}

function updateScreenSize() {

    width = (window).innerWidth;

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
    while ((node = node.previousElementSibling)) {
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