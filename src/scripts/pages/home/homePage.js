require('../../external/domready');
import { modDelayedAction } from '../../shared/utils.js';

DomReady.ready(() => {

    delayedAction = modDelayedAction();

    function reinitialize() {
    }

    window.onresize = (event) => {
        delayedAction.initDelayedAction(() => {
            reinitialize();
        }, 1);
    };

    window.addEventListener("orientationchange", () => {
        reinitialize();
    });

});

// window.onload = () => {
// }