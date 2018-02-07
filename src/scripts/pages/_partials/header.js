import { updateScreenSize } from '../../shared/utils.js';

export function modHeader() {

    var header = document.querySelector('header');
    var navigation = document.querySelector('nav');

    function initHeader() {

    }

    function deinitHeader() {
    }

    var PublicAPI = {
        initHeader: initHeader,
        deinitHeader: deinitHeader
    }

    return PublicAPI;
}