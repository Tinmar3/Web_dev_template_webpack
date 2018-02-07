import { updateScreenSize, getViewport } from '../../shared/utils.js';

export function modFooter() {

    var footer = document.querySelector('footer');
    var main = document.querySelector('main');

    function initFooter() {

    }

    var PublicAPI = {
        initFooter: initFooter
    }

    return PublicAPI;

}