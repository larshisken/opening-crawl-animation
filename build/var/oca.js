var Oca =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @Author: Lars Hisken
 * @Date:   2017-08-29T13:23:23+02:00
 * @Email:  larshisken@protonmail.com
 * @Last modified by:   Lars Hisken
 * @Last modified time: 2017-08-31T19:06:08+02:00
 */

module.exports = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        containerClassName: 'oca-container',
        childClassName: 'oca-text',
        interval: 1000
    };


    /**
     * Wait for the DOM to load
     * @param {Function} callback
     */
    var DOMReady = function DOMReady(callback) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            callback();
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    };

    /**
     * Loop over each container and pass DOM elements to the callback
     * @param  {Function} callback
     */
    var forEachContainer = function forEachContainer(callback) {
        var elements = document.getElementsByClassName(options.containerClassName);
        Array.prototype.forEach.call(elements, callback);
    };

    /**
     * Get the child by childClassName
     * @param  {Object} container A DOM element
     * @return {Object}           Returns the child DOM element
     */
    var getChild = function getChild(container) {
        var child = container.getElementsByClassName(options.childClassName);
        return child[0];
    };

    /**
     * Get the computed style of an element
     * @param  {Object} element A DOM element
     * @return {Object}         Return a CSSStyleDeclaration object
     */
    var getStyle = function getStyle(element) {
        return window.getComputedStyle(element, null);
    };

    /**
     * Get the height from a CSSStyleDeclaration
     * @param  {Object} style A CSSStyleDeclaration object
     * @return {Number}
     */
    var getStyleHeight = function getStyleHeight(style) {
        return style['height'].replace('px', '');
    };

    /**
     * Get the line-height from a CSSStyleDeclaration
     * @param  {Object} style A CSSStyleDeclaration object
     * @return {Number}
     */
    var getStyleLineHeight = function getStyleLineHeight(style) {
        return style['line-height'].replace('px', '');
    };

    /**
     * Set the height style of a DOM element
     * @param {Object} element A DOM element
     * @param {Number} height
     */
    var setElementHeight = function setElementHeight(element, height) {
        return element.style.height = height + 'px';
    };

    /**
     * Set the bottom style of a DOM element
     * @param {Object} element A DOM element
     * @param {Number} bottom
     */
    var setElementBottom = function setElementBottom(element, bottom) {
        return element.style.bottom = bottom + 'px';
    };

    /**
     * Calculate the steps between two values
     * @param  {Number} a
     * @param  {Number} b
     * @return {Number}   Number of steps
     */
    var calculateSteps = function calculateSteps(a, b) {
        return Math.ceil(a / b);
    };

    /**
     * Initialize
     */
    DOMReady(function () {
        forEachContainer(function (container) {

            var child = getChild(container);
            var style = getStyle(child);

            var height = getStyleHeight(style);
            var lineHeight = getStyleLineHeight(style);

            setElementHeight(container, height);
            setElementBottom(child, -height);

            var steps = calculateSteps(height, lineHeight);

            var animate = function animate() {
                var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

                var fromBottom = height - idx * lineHeight;
                if (idx <= steps) {
                    setElementBottom(child, -fromBottom);
                    idx++;
                    setTimeout(function () {
                        animate(idx);
                    }, options.interval);
                }
            };

            animate();
        });
    });
};

/***/ })
/******/ ]);