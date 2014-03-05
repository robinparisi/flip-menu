var ResponsiveMenu = (function () {

    var nav;

    var _toggleState = function (elem, one, two) {
        var elem = document.querySelector(elem);
        elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);

    };

    var _bindClick = function () {
        nav.onclick = function (e) {
            _toggleState('body', 'front', 'back');
            e.preventDefault();
        };
    };

    var _has3DTransform = function () {
        var el = document.createElement('p'),
            has3d,
            transforms = {
                'webkitTransform':'-webkit-transform',
                'transform':'transform'
            };

        // test computed style
        document.body.insertBefore(el, null);

        for (var t in transforms) {
            if (el.style[t] !== undefined) {
                el.style[t] = "translate3d(1px,1px,1px)";
                has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
        }

        document.body.removeChild(el);

        return (has3d !== undefined && has3d.length > 0 && has3d !== "none");

    };

    var _fallBackFor3DTransform = function () {
        document.querySelector('html').classList.add('no-csstransforms3d');
    };

    var _removeNoJS = function () {
        document.querySelector('html').classList.remove('no-js');
    };

    var init = function (elem) {
        nav = document.querySelector(elem);

        _removeNoJS();
        _bindClick();

        if(!_has3DTransform()) {
            _fallBackFor3DTransform();
        }
    };

    return {
        init: init
    };
}());