"use strict";
var factory = {
    element: function (properties) {
        if (!properties || !properties.tag) {
            throw "Tag is required.";
        }
        var element = document.createElement(properties.tag);
        if (properties.id) {
            element.id = properties.id;
        }
        if (properties.children) {
            if (!Array.isArray(properties.children)) {
                properties.children = [properties.children];
            }
            for (var i = 0; i < properties.children.length; i++) {
                if (typeof properties.children[i] === "string") {
                    properties.children[i] = document.createTextNode(properties.children[i]);
                }
                element.appendChild(properties.children[i]);
            }
        }
        if (properties.src) {
            element.src = properties.src;
        }
        if (properties.value) {
            element.value = properties.value;
        }
        if (properties.selected) {
            element.selected = properties.selected;
        }
        if (properties.type) {
            element.type = properties.type;
        }
        if (properties.href) {
            element.href = properties.href;
        }
        if (properties.target) {
            element.target = properties.target;
        }
        if (properties.alt) {
            element.alt = properties.alt;
        }
        if (properties.className) {
            element.className = properties.className;
        }
        return element;
    }
};