export function pageCheck() {
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

export function updateScreenSize() {

    var sizes = {}
    var width = (window).innerWidth;

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

export function modDelayedAction() {
    var delayedIntervals = [];

    return {
        initDelayedAction: (functionAction, intervalIndex) => {
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
    }

}

export function getCoords(elem) { // crossbrowser version
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

export function getViewport() {

    var viewPortWidth;
    var viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth,
            viewPortHeight = window.innerHeight
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
            viewPortHeight = document.documentElement.clientHeight
    }

    // older versions of IE
    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
            viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    
    return {
        width: viewPortWidth,
        height: viewPortHeight
    }
}

export function isHover(element) {
    return !!(element.querySelector(":hover") || element.parentNode.querySelector(":hover") === element);
}

export function detectIE() {
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