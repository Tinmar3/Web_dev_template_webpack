require('./external/domready');
require('./external/polyfills');
import 'nodelist-foreach-polyfill';
import { modHeader } from './pages/_partials/header';
import { pageCheck } from './shared/utils.js';

var pages, header;

DomReady.ready(() => {

    pages = pageCheck();
    header = modHeader();

    header.initHeader();

    if (pages.home) {

    }

});