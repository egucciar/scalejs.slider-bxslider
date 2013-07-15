/// <reference path="../scripts/_references.js" />
/*global console,define*/
define(function () {
    'use strict';
    return {
        'bxslider-items': function () {
            return {
                foreach: this.items
            };
        },
        'bxslider-item-content': function(ctx) {
            return {
              template: {
                  name: ctx.$parent.itemTemplate,
                  data: ctx.$data
              }  
            };
        }
    };
});

