import { updateScreenSize } from '../../shared/utils.js';

export function modHeader() {

    var menuButton = document.querySelector('.mobile-menu-icon');
    var header = document.querySelector('header');
    var menuButtonOnClick;

    function initHeader() {

        var screenSize = updateScreenSize();

        if (screenSize.smallest || screenSize.small || screenSize.medium) {

            menuButtonOnClick = () => {
                var thisElement = event.target;
                if (header.classList.contains('opened')) {
                    header.classList.remove('opened');
                } else {
                    header.classList.add('opened');
                }
            }

            menuButton.addEventListener('click', menuButtonOnClick, true);
        }

    }

    function deinitHeader() {
        menuButton.removeEventListener('click', menuButtonOnClick, true);
    }

    var PublicAPI = {
        initHeader: initHeader,
        deinitHeader: deinitHeader
    }

    return PublicAPI;
}