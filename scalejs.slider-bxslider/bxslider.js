/*global define*/
define([
    'scalejs!core',
    'text!./bxslider.html',
    './bxsliderBindings',
    'knockout',
    'jQuery',
    'scalejs.mvvm'
], function (
    core,
    bxsliderTemplate,
    bxsliderBindings,
    ko,
    $
) {
    var registerBindings = core.mvvm.registerBindings,
        registerTemplates = core.mvvm.registerTemplates,
        unwrap = ko.utils.unwrapObservable;

    function wrapValueAccessor(valueAccessor, element) {
        return function () {
            var slider = valueAccessor();

            //TODO: apply bxSlider after last child element is rendered
            function afterRender() {
                if (unwrap(slider.items).length > 0) {
                    $(element).children().bxSlider(slider.options);
                }
            }
            return {
                name: 'sj_bxslider_template',
                data: slider,
                afterRender: afterRender
            };
        };
    }

    function init(        element,        valueAccessor,        allBindingsAccessor,        viewModel,        bindingContext    ) {
        return { 'controlsDescendantBindings': true };
    }

    function update(
        element,
        valueAccessor,
        allBindingsAccessor,
        viewModel,
        bindingContext
    ) {
        return ko.bindingHandlers.template.update(
            element,
            wrapValueAccessor(valueAccessor, element),
            allBindingsAccessor,
            viewModel,
            bindingContext
        );
    }

    registerTemplates(bxsliderTemplate);
    registerBindings(bxsliderBindings);

    return {
        init: init,
        update: update
    };
});

