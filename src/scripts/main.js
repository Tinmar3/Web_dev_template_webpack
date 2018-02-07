require('./external/domready');
require('./external/polyfills');
import { modHeader } from './pages/_partials/header';
import { modFooter } from './pages/_partials/footer';
import { pageCheck, modDelayedAction } from './shared/utils.js';

var pages, header, footer, delayedAction;

{

    delayedAction = modDelayedAction();
    pages = pageCheck();
    header = modHeader();
    footer = modFooter();

    header.initHeader();
    footer.initFooter();

    if (pages.home) {
        require('./pages/home/homePage.js');
    }

    function reinitialize() {
        header.deinitHeader();
        header.initHeader();
    }

    window.onresize = (event) => {
        delayedAction.initDelayedAction(() => {
            reinitialize();
        }, 1);
    };

    window.addEventListener("orientationchange", () => {
        reinitialize();
    });

}

// DomReady.ready(() => {
// });

// window.onload = () => {
// }
