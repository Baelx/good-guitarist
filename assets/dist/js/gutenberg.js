/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./assets/src/scripts/blocks/cover.js":
/*!********************************************!*\
  !*** ./assets/src/scripts/blocks/cover.js ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./assets/src/scripts/blocks/group.js":
/*!********************************************!*\
  !*** ./assets/src/scripts/blocks/group.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var addFilter = wp.hooks.addFilter;
/**
 * When this function gets run by the addfilter
 * hook below, the filter passes it the block settings
 * or config file.
 */

var modifyGroupBlock = function modifyGroupBlock(settings) {
  // console.log(settings.name)
  if (settings.name !== 'core/group') {
    return settings;
  }

  var newSettings = _objectSpread({}, settings); // we need to pass along the settings object
  // even if we haven't modified them!


  return settings;
};

addFilter('blocks.registerBlockType', // hook name, very important!
'good-guitarist/modify-group-block', // your name, very arbitrary!
modifyGroupBlock // function to run
);

/***/ }),

/***/ "./assets/src/scripts/blocks/large-cta.js":
/*!************************************************!*\
  !*** ./assets/src/scripts/blocks/large-cta.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    ColorPalette = _wp$editor.ColorPalette,
    getColorClass = _wp$editor.getColorClass;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    RangeControl = _wp$components.RangeControl,
    PanelBody = _wp$components.PanelBody;
registerBlockType('gutenberg-good-guitarist/large-cta', {
  title: 'Large Call to Action',
  icon: 'format-image',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h3'
    },
    body: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    titleColor: {
      type: 'string',
      "default": 'white'
    },
    bodyColor: {
      type: 'string',
      "default": 'white'
    },
    overlayColor: {
      type: 'string',
      "default": 'black'
    },
    overlayOpacity: {
      type: 'number',
      "default": 0.3
    },
    backgroundImage: {
      type: 'string',
      "default": null
    },
    url: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'href'
    },
    buttonText: {
      type: 'string',
      selector: 'a',
      "default": 'Call to action'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;
    var title = attributes.title,
        body = attributes.body,
        backgroundImage = attributes.backgroundImage,
        titleColor = attributes.titleColor,
        bodyColor = attributes.bodyColor,
        overlayColor = attributes.overlayColor,
        overlayOpacity = attributes.overlayOpacity,
        url = attributes.url,
        buttonText = attributes.buttonText;

    function onSelectImage(newImage) {
      setAttributes({
        backgroundImage: newImage.sizes.full.url
      });
    }

    function onChangeBody(newBody) {
      setAttributes({
        body: newBody
      });
    }

    function onChangeTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    }

    function onTitleColorChange(newColor) {
      setAttributes({
        titleColor: newColor
      });
    }

    function onBodyColorChange(newColor) {
      setAttributes({
        bodyColor: newColor
      });
    }

    function onOverlayColorChange(newColor) {
      setAttributes({
        overlayColor: newColor
      });
    }

    function onOverlayOpacityChange(newOpacity) {
      setAttributes({
        overlayOpacity: newOpacity
      });
    }

    function changeButtonText(newText) {
      setAttributes({
        buttonText: newText
      });
    }

    function onChangeUrl(newUrl) {
      setAttributes({
        url: newUrl
      });
    }

    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'Font Color Settings'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginTop: '20px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Select a Title color:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: titleColor,
      onChange: onTitleColorChange
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginTop: '20px',
        marginBottom: '40px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Select a Body color:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: bodyColor,
      onChange: onBodyColorChange
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'Background Image Settings'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Select a background image:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: backgroundImage,
      render: function render(_ref2) {
        var open = _ref2.open;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
          className: "editor-media-placeholder__button is-button is-default is-large",
          icon: "upload",
          onClick: open
        }, "Background Image");
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginTop: '20px',
        marginBottom: '40px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Overlay Color:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: overlayColor,
      onChange: onOverlayColorChange
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: 'Overlay Opacity',
      value: overlayOpacity,
      onChange: onOverlayOpacityChange,
      min: 0,
      max: 1,
      step: 0.05
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-container",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-overlay",
      style: {
        background: overlayColor,
        opacity: overlayOpacity
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      key: "editable",
      tagName: "h3",
      className: className,
      placeholder: "Your CTA title",
      onChange: onChangeTitle,
      value: title,
      style: {
        color: titleColor
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      key: "editable",
      tagName: "p",
      className: className,
      placeholder: "Your CTA Description",
      onChange: onChangeBody,
      value: body,
      style: {
        color: bodyColor
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-content-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "a",
      onChange: changeButtonText,
      title: buttonText,
      value: buttonText,
      target: "_blank"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      style: {
        color: '#333',
        fontSize: '12px',
        padding: '2px'
      },
      value: url,
      onChange: onChangeUrl,
      placeholder: 'http://'
    })))];
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var title = attributes.title,
        body = attributes.body,
        titleColor = attributes.titleColor,
        bodyColor = attributes.bodyColor,
        overlayColor = attributes.overlayColor,
        overlayOpacity = attributes.overlayOpacity,
        backgroundImage = attributes.backgroundImage,
        url = attributes.url,
        buttonText = attributes.buttonText;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-container",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-overlay",
      style: {
        background: overlayColor,
        opacity: overlayOpacity
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      style: {
        color: titleColor
      }
    }, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      value: body,
      style: {
        color: bodyColor
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-content-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      href: url,
      title: buttonText,
      value: buttonText,
      target: "_blank"
    }))));
  }
});

/***/ }),

/***/ "./assets/src/scripts/blocks/small-cta.js":
/*!************************************************!*\
  !*** ./assets/src/scripts/blocks/small-cta.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    ColorPalette = _wp$editor.ColorPalette,
    getColorClass = _wp$editor.getColorClass;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    RangeControl = _wp$components.RangeControl,
    PanelBody = _wp$components.PanelBody;
registerBlockType('gutenberg-good-guitarist/small-cta', {
  title: 'Small Call to Action',
  icon: 'format-image',
  category: 'layout',
  attributes: {},
  edit: function edit() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "",
      alt: ""
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null));
  },
  save: function save() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "",
      alt: ""
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null));
  }
});

/***/ }),

/***/ "./assets/src/scripts/blocks/youtube-post-template.js":
/*!************************************************************!*\
  !*** ./assets/src/scripts/blocks/youtube-post-template.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _youtube_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../youtube-api-config */ "./youtube-api-config.js");
/* harmony import */ var _dist_images_ebook_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dist/images/ebook-1.png */ "./assets/dist/images/ebook-1.png");
/* harmony import */ var _dist_images_ebook_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dist/images/ebook-2.png */ "./assets/dist/images/ebook-2.png");
/* harmony import */ var _dist_images_good_guitarist_preview_img_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dist/images/good-guitarist-preview-img.png */ "./assets/dist/images/good-guitarist-preview-img.png");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    Button = _wp$components.Button,
    FocusableIframe = _wp$components.FocusableIframe,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    FormToggle = _wp$components.FormToggle,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    URLInput = _wp$blockEditor.URLInput,
    URLInputButton = _wp$blockEditor.URLInputButton,
    useBlockProps = _wp$blockEditor.useBlockProps; // import { useEntityProp } from '@wordpress/core-data';

var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    dispatch = _wp$data.dispatch;
var useEntityProp = wp.coreData.useEntityProp;
var __ = wp.i18n.__;




registerBlockType('gutenberg-good-guitarist/ypt', {
  title: 'Youtube Post Template',
  icon: 'playlist-video',
  category: 'layout',
  className: 'youtube-post-type',
  attributes: {
    videoTitle: {
      type: 'string'
    },
    videoDescription: {
      type: 'string'
    },
    videoThumbnail: {
      type: 'string',
      "default": _dist_images_good_guitarist_preview_img_png__WEBPACK_IMPORTED_MODULE_6__.default
    },
    videoURL: {
      type: 'string'
    },
    videoID: {
      type: 'string'
    },
    showPatreonLink: {
      type: 'boolean'
    },
    showEBookLink: {
      type: 'boolean'
    },
    courseSlotOne: {
      type: 'string'
    },
    courseSlotTwo: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;
    var videoID = attributes.videoID,
        videoURL = attributes.videoURL,
        videoTitle = attributes.videoTitle,
        videoDescription = attributes.videoDescription,
        videoThumbnail = attributes.videoThumbnail,
        showPatreonLink = attributes.showPatreonLink,
        showEBookLink = attributes.showEBookLink,
        courseSlotOne = attributes.courseSlotOne,
        courseSlotTwo = attributes.courseSlotTwo; // const blockProps = useBlockProps();

    var postType = useSelect(function (select) {
      return select('core/editor').getCurrentPostType();
    }, []);

    var _useEntityProp = useEntityProp('postType', postType, 'meta'),
        _useEntityProp2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useEntityProp, 2),
        meta = _useEntityProp2[0],
        setMeta = _useEntityProp2[1];

    var metaFieldValue = meta['song_difficulty'];

    function updateMetaValue(newValue) {
      setMeta(_objectSpread(_objectSpread({}, meta), {}, {
        song_difficulty: newValue
      }));
    }

    var videoInfoFetched = false;

    var initFetch = function initFetch(videoID) {
      gapi.load('client', function () {
        console.log('the vid id', videoID);
        gapi.client.setApiKey(_youtube_api_config__WEBPACK_IMPORTED_MODULE_3__.youtubeAPIConfig.key);
        gapi.client.load('youtube', 'v3', function () {
          gapi.client.youtube.videos.list({
            part: 'snippet',
            id: videoID
          }).execute(function (response) {
            var fetchedTitle = response.result.items[0].snippet.title;
            var fetchedDescription = response.result.items[0].snippet.description;
            var fetchedThumbnail = response.result.items[0].snippet.thumbnails.medium.url;
            var descriptitonWithAnchorTags = fetchedDescription.replace(/(http:\/\/|https:\/\/).*/g, function (text) {
              return "<a href=\"".concat(text, "\">").concat(text, "</a>");
            }); // Update the post title.

            dispatch('core/editor').editPost({
              title: fetchedTitle
            });
            setAttributes({
              videoTitle: fetchedTitle,
              videoDescription: descriptitonWithAnchorTags,
              videoThumbnail: fetchedThumbnail
            });
            videoInfoFetched = true;
          });
        });
      });
    };

    var availableCourses = [{
      label: 'Select a course',
      value: null,
      img: _dist_images_ebook_1_png__WEBPACK_IMPORTED_MODULE_4__.default
    }, {
      label: 'Beginner Course',
      value: 'beginner-course',
      img: _dist_images_ebook_2_png__WEBPACK_IMPORTED_MODULE_5__.default
    }, {
      label: 'Intermediate Course',
      value: 'intermediate-course',
      img: ''
    }, {
      label: 'Advanced Course',
      value: 'advanced-course',
      img: ''
    }, {
      label: 'Expert Course',
      value: 'expert-course',
      img: ''
    }];

    var CourseArea = function CourseArea(props) {
      var selectedCourse = availableCourses.filter(function (item) {
        return item.value === props.slotContent;
      });
      var imgSrc = selectedCourse.img;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
        className: ""
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("img", {
        src: _dist_images_ebook_1_png__WEBPACK_IMPORTED_MODULE_4__.default,
        alt: ""
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("h3", null, props.slotContent), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", null));
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelBody, {
      title: "Courses and Links"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(ToggleControl, {
      id: "show-patreon-form-toggle",
      label: "Show Patreon Link",
      checked: showPatreonLink,
      onChange: function onChange(newValue) {
        return setAttributes({
          showPatreonLink: newValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(ToggleControl, {
      id: "high-contrast-form-toggle",
      label: "Show E-Book Link",
      checked: showEBookLink,
      onChange: function onChange(newValue) {
        return setAttributes({
          showEBookLink: newValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(SelectControl, {
      label: "Course Slot 1",
      value: courseSlotOne,
      options: availableCourses,
      onChange: function onChange(newValue) {
        return setAttributes({
          courseSlotOne: newValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(SelectControl, {
      label: "Course slot 2",
      value: courseSlotTwo,
      options: availableCourses,
      onChange: function onChange(newValue) {
        return setAttributes({
          courseSlotTwo: newValue
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelBody, {
      title: "Song Difficulty"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(TextControl, {
      label: "Enter a number from 1 to 50",
      value: metaFieldValue,
      onChange: updateMetaValue
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelBody, {
      title: "Contains only one barre chord"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(ToggleControl // id="show-patreon-form-toggle"
    , {
      label: "One barre chord song",
      checked: showPatreonLink,
      onChange: function onChange(newValue) {
        return setAttributes({
          showPatreonLink: newValue
        });
      }
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("form", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(URLInput, {
      label: "Video URL",
      value: videoURL,
      className: "youtube-video-url",
      onChange: function onChange(url) {
        var parsedVideoID = null;
        var videoIDMatch = url.match(/(\?v=)(\w|-)+/g);

        if (videoIDMatch) {
          parsedVideoID = videoIDMatch[0].replace('?v=', '');
        }

        setAttributes({
          videoID: parsedVideoID,
          videoURL: url
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(Button, {
      isSecondary: true,
      onClick: function onClick() {
        return initFetch(videoID);
      }
    }, "Populate Post")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("label", {
      className: "youtube-post-label"
    }, __('Post Thumbnail')), videoThumbnail && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("img", {
      src: videoThumbnail
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "youtube-post-video-area"
    }, videoURL && videoInfoFetched && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("iframe", {
      width: "560",
      height: "515",
      src: videoURL,
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true
    }), courseSlotOne ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(CourseArea, {
      slotContent: courseSlotOne
    }) : null, courseSlotTwo ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(CourseArea, {
      slotContent: courseSlotTwo
    }) : null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      claclassNamess: "post-content-video-description"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(RichText, {
      value: videoDescription
    })));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes,
        className = _ref2.className;
    var videoURL = attributes.videoURL,
        videoDescription = attributes.videoDescription;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: className
    }, videoURL ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("iframe", {
      width: "560",
      height: "515",
      src: videoURL,
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "post-content-video-description"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(RichText.Content, {
      value: videoDescription
    })));
  }
});

/***/ }),

/***/ "./assets/src/scripts/blocks/ypt-search.js":
/*!*************************************************!*\
  !*** ./assets/src/scripts/blocks/ypt-search.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youtube_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../youtube-api-config */ "./youtube-api-config.js");
/* harmony import */ var _dist_images_ebook_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dist/images/ebook-1.png */ "./assets/dist/images/ebook-1.png");
/* harmony import */ var _dist_images_ebook_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dist/images/ebook-2.png */ "./assets/dist/images/ebook-2.png");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    Button = _wp$components.Button,
    FocusableIframe = _wp$components.FocusableIframe,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    FormToggle = _wp$components.FormToggle,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    URLInput = _wp$blockEditor.URLInput,
    URLInputButton = _wp$blockEditor.URLInputButton;



registerBlockType('gutenberg-good-guitarist/ypt-search', {
  title: 'Youtube Post Search Box',
  icon: 'search',
  category: 'layout',
  className: 'youtube-post-type-search',
  attributes: {},
  edit: function edit() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "This is the search box for looking at.");
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./youtube-api-config.js":
/*!*******************************!*\
  !*** ./youtube-api-config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "youtubeAPIConfig": () => (/* binding */ youtubeAPIConfig)
/* harmony export */ });
var youtubeAPIConfig = {
  key: 'AIzaSyAZ1ibASlnCXrLWO5UDk6Hu4hRnFtn_V9o'
};

/***/ }),

/***/ "./assets/dist/images/ebook-1.png":
/*!****************************************!*\
  !*** ./assets/dist/images/ebook-1.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/ebook-1.png?6ceb9c15c59ce949d4303af96df5bb6d");

/***/ }),

/***/ "./assets/dist/images/ebook-2.png":
/*!****************************************!*\
  !*** ./assets/dist/images/ebook-2.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/ebook-2.png?e328a82c1e3d80583e70b535caf1e4ed");

/***/ }),

/***/ "./assets/dist/images/good-guitarist-preview-img.png":
/*!***********************************************************!*\
  !*** ./assets/dist/images/good-guitarist-preview-img.png ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/good-guitarist-preview-img.png?be9a6975d58dbba41a7fc7e6708652eb");

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./assets/src/scripts/gutenberg.js ***!
  \*****************************************/
/**
 * Import your Gutenberg custom blocks here
 */
__webpack_require__(/*! ./blocks/small-cta.js */ "./assets/src/scripts/blocks/small-cta.js");

__webpack_require__(/*! ./blocks/large-cta.js */ "./assets/src/scripts/blocks/large-cta.js");

__webpack_require__(/*! ./blocks/cover.js */ "./assets/src/scripts/blocks/cover.js");

__webpack_require__(/*! ./blocks/group.js */ "./assets/src/scripts/blocks/group.js");

__webpack_require__(/*! ./blocks/youtube-post-template.js */ "./assets/src/scripts/blocks/youtube-post-template.js");

__webpack_require__(/*! ./blocks/ypt-search.js */ "./assets/src/scripts/blocks/ypt-search.js");
})();

/******/ })()
;