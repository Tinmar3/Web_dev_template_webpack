// GLOBAL HELPING CLASSES (already included in main.js)

function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function isHover(element) {
    return !!(element.querySelector(":hover") || element.parentNode.querySelector(":hover") === element);
}

// CUSTOM DROPDOWN - start

export function initDropDown() {

    var dropdown = document.getElementsByClassName('dropdown');

    for (var i = 0; i < dropdown.length; i++) {
        (function () { // for scope to "own" a variable (j) and set click listener correctly
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