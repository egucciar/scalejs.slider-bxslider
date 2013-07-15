/*global define*/
define([
    'knockout',
    './scalejs.slider-bxslider/bxslider',
    'jQuery',
    'bxslider'
], function (
    ko,
    bxslider
) {
    'use strict';
    // bxslider imposed the constraint that all items
    // must be List elements (ul/li).
    // the way we handle this is by dealing with it as divs
    // and letting the extension build the list.
    // so, you need a div to specify the binding for bxslider,
    // and a div for the template of your items which must
    // be passed to 'itemTemplate'
    ko.bindingHandlers.bxslider = bxslider;
});

