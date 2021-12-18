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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

/***/ "./assets/src/scripts/blocks/courseTemplate.js":
/*!*****************************************************!*\
  !*** ./assets/src/scripts/blocks/courseTemplate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    FormFileUpload = _wp$components.FormFileUpload,
    Button = _wp$components.Button;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    useBlockProps = _wp$blockEditor.useBlockProps,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var useEntityProp = wp.coreData.useEntityProp;
var __ = wp.i18n.__;
registerBlockType('gutenberg-good-guitarist/course-template', {
  title: 'Course or Ebook Template',
  icon: 'admin-customizer',
  category: 'text',
  attributes: {
    courseDescription: {
      type: 'string',
      "default": ''
    },
    courseUrl: {
      type: 'string',
      "default": ''
    },
    imageId: {
      type: 'integer',
      "default": 0
    },
    imageUrl: {
      type: 'string',
      "default": ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var courseUrl = attributes.courseUrl,
        courseDescription = attributes.courseDescription,
        imageId = attributes.imageId,
        imageUrl = attributes.imageUrl;
    var blockProps = useBlockProps();

    var onSelectMedia = function onSelectMedia(newImage) {
      setAttributes({
        imageId: newImage.id,
        imageUrl: newImage.url
      });
    };

    var removeMedia = function removeMedia() {
      setAttributes({
        imageId: 0,
        imageUrl: ''
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Description'),
      value: courseDescription,
      onChange: function onChange(newValue) {
        return setAttributes({
          courseDescription: newValue
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('URL'),
      value: courseUrl,
      onChange: function onChange(newValue) {
        return setAttributes({
          courseUrl: newValue
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "media-upload-component"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "image-label"
    }, __('Course Thumbnail')), imageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "course-image",
      src: imageUrl
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: onSelectMedia,
      allowedTypes: ['image'],
      render: function render(_ref2) {
        var open = _ref2.open;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          className: 0 === imageId ? 'select-image-button' : 'select-image-button button-hidden',
          onClick: open
        }, imageId == 0 && __('Choose an image'));
      }
    })), imageId !== 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, __('Remove image')))));
  },
  save: function save() {
    return null;
  }
});

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

/***/ "./assets/src/scripts/blocks/largeCourseCard.js":
/*!******************************************************!*\
  !*** ./assets/src/scripts/blocks/largeCourseCard.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState;
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
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;
var useSelect = wp.data.useSelect;
var parse = wp.blockSerializationDefaultParser.parse;
var __ = wp.i18n.__;
registerBlockType('gutenberg-good-guitarist/large-course-card', {
  title: 'Large Course Card',
  icon: 'format-image',
  category: 'layout',
  className: 'large-course-card',
  attributes: {
    selectedCourseId: {
      type: 'integer',
      "default": 0
    },
    selectedCourseTitle: {
      type: 'string',
      "default": ''
    },
    selectedCourseDesc: {
      type: 'string',
      "default": ''
    },
    selectedCourseLink: {
      type: 'string',
      "default": ''
    },
    selectedCourseImageID: {
      type: 'integer',
      "default": 0
    },
    selectedCourseImageUrl: {
      type: 'string',
      "default": ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;
    var selectedCourseId = attributes.selectedCourseId;
    var courseData = useSelect(function (select) {
      return select('core').getEntityRecords('postType', 'course');
    });
    var isLoading = useSelect(function (select) {
      return select('core/data').isResolving('core', 'getEntityRecords', ['postType', 'course']);
    });
    var courseOptions = [{
      label: 'Select a course',
      value: null,
      "default": true
    }];
    var courseDetails = {};

    if (courseData) {
      courseData.forEach(function (course) {
        if (course.id) {
          var parsedBlocks = parse(course.content.raw);
          /**
           * There may be multiple blocks in the course post.
           *
           * Find the course template block(which should be the first)
           * and get its attributes.
           */

          var courseTemplateBlock = parsedBlocks.find(function (block) {
            return 'gutenberg-good-guitarist/course-template' === block.blockName;
          });
          var courseAtts = courseTemplateBlock.attrs;

          if (courseAtts) {
            // Create options for SelectControl.
            courseOptions.push({
              label: course.title.raw,
              value: course.id
            }); // Keep separate courseDetail objects used to populate attributes.

            courseDetails[course.id] = {
              title: course.title.raw,
              description: courseAtts.courseDescription,
              url: courseAtts.courseUrl,
              imageId: courseAtts.imageId,
              imageUrl: courseAtts.imageUrl
            };
          }
        }
      });
    }

    var handleCourseSelect = function handleCourseSelect(selectedCourse) {
      console.log(courseDetails[selectedCourse].imageUrl);

      if (selectedCourse in courseDetails) {
        setAttributes({
          selectedCourseId: parseInt(selectedCourse),
          selectedCourseTitle: courseDetails[selectedCourse].title,
          selectedCourseDesc: courseDetails[selectedCourse].description,
          selectedCourseImageID: courseDetails[selectedCourse].image,
          selectedCourseLink: courseDetails[selectedCourse].url,
          selectedCourseImageUrl: courseDetails[selectedCourse].imageUrl
        });
      } else {
        setAttributes({
          selectedCourseId: selectedCourse,
          selectedCourseTitle: '',
          selectedCourseDesc: '',
          selectedCourseImageID: '',
          selectedCourseLink: '',
          selectedCourseImageUrl: ''
        });
      }
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "dynamic-block-h2"
    }, __('Large Course Card')), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, __('Loading...')), courseOptions && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Select course",
      value: selectedCourseId,
      options: courseOptions,
      onChange: handleCourseSelect
    }));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./assets/src/scripts/blocks/latestLessons.js":
/*!****************************************************!*\
  !*** ./assets/src/scripts/blocks/latestLessons.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls;
var useBlockProps = wp.blockEditor.useBlockProps;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Dashicon = _wp$components.Dashicon;
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
var _wp$data = wp.data,
    select = _wp$data.select,
    useSelect = _wp$data.useSelect;
var __ = wp.i18n.__;
var parse = wp.blockSerializationDefaultParser.parse;
registerBlockType('gutenberg-good-guitarist/latest-lessons', {
  title: 'Latest Lessons',
  icon: 'list',
  category: 'layout',
  className: 'latest-lessons',
  attributes: {
    lessons: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className;
    var blockProps = useBlockProps();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "dynamic-block-h2"
    }, __('Latest Lessons Carousel')));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./assets/src/scripts/blocks/smallCourseCard.js":
/*!******************************************************!*\
  !*** ./assets/src/scripts/blocks/smallCourseCard.js ***!
  \******************************************************/
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
registerBlockType('gutenberg-good-guitarist/small-course-card', {
  title: 'Small Course Card',
  icon: 'format-image',
  category: 'layout',
  className: 'small-course-card',
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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _youtube_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../youtube-api-config */ "./youtube-api-config.js");



var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    useBlockProps = _wp$blockEditor.useBlockProps;
var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    dispatch = _wp$data.dispatch,
    useDispatch = _wp$data.useDispatch;
var _wp$element = wp.element,
    useRef = _wp$element.useRef,
    useState = _wp$element.useState;
var __ = wp.i18n.__;
var parse = wp.blockSerializationDefaultParser.parse;


registerBlockType('gutenberg-good-guitarist/ypt', {
  apiVersion: 2,
  title: 'Youtube Post Template',
  icon: 'playlist-video',
  category: 'layout',
  className: 'youtube-post-type',
  attributes: {
    videoInfoFetched: {
      type: 'boolean',
      "default": false
    },
    videoTitle: {
      type: 'string'
    },
    videoThumbnail: {
      type: 'string',
      "default": gutenbergVars.image_dir + '/good-guitarist-preview-img.png'
    },
    videoDescription: {
      type: 'array'
    },
    videoURL: {
      type: 'string'
    },
    videoID: {
      type: 'string'
    },
    songTitle: {
      type: 'string',
      "default": ''
    },
    sidebarCourseSlotOne: {
      type: 'integer',
      "default": -1
    },
    sidebarCourseSlotTwo: {
      type: 'integer',
      "default": -1
    },
    postBodyElements: {
      type: 'array',
      "default": []
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;
    var videoInfoFetched = attributes.videoInfoFetched,
        videoID = attributes.videoID,
        videoURL = attributes.videoURL,
        videoTitle = attributes.videoTitle,
        videoThumbnail = attributes.videoThumbnail,
        songTitle = attributes.songTitle,
        sidebarCourseSlotOne = attributes.sidebarCourseSlotOne,
        sidebarCourseSlotTwo = attributes.sidebarCourseSlotTwo,
        postBodyElements = attributes.postBodyElements;
    var blockProps = useBlockProps();
    var postBody = useRef();

    var _useState = useState({
      "class": 'fetch-message-hidden',
      message: ''
    }),
        _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
        fetchStatus = _useState2[0],
        setFetchStatus = _useState2[1];

    var _useSelect = useSelect(function (select) {
      var courses = select('core').getEntityRecords('postType', 'course');
      var courseDetails = {};
      var courseOptions = [{
        label: 'None',
        value: -1
      }];
      var courseOptionsWithAuto = [{
        label: 'Autodetect',
        value: 0
      }].concat(courseOptions);

      if (courses) {
        courses.forEach(function (course) {
          var parsedBlocks = parse(course.content.raw);
          /**
           * There may be multiple blocks in the course post.
           *
           * Find the course template block(which should be the first)
           * and get its attributes.
           */

          var courseTemplateBlock = parsedBlocks.find(function (block) {
            return 'gutenberg-good-guitarist/course-template' === block.blockName;
          });
          var courseAtts = courseTemplateBlock.attrs;
          courseOptions.push({
            label: course.title.raw,
            value: parseInt(course.id)
          });
          courseOptionsWithAuto.push({
            label: course.title.raw,
            value: parseInt(course.id)
          }); // Keep separate courseDetail objects used to populate attributes.

          courseDetails[course.id] = {
            title: course.title.raw,
            description: courseAtts.courseDescription,
            url: courseAtts.courseUrl,
            imageId: courseAtts.imageId,
            imageUrl: courseAtts.imageUrl
          };
        });
      }

      return {
        postMeta: select('core/editor').getEditedPostAttribute('meta'),
        courseDetails: courseDetails,
        courseOptions: courseOptions,
        courseOptionsWithAuto: courseOptionsWithAuto
      };
    }),
        postMeta = _useSelect.postMeta,
        courseDetails = _useSelect.courseDetails,
        courseOptions = _useSelect.courseOptions,
        courseOptionsWithAuto = _useSelect.courseOptionsWithAuto;

    var _useDispatch = useDispatch('core/editor', [postMeta.difficulty]),
        editPost = _useDispatch.editPost;
    /**
     * Check if string has http:// or https:// in it.
     *
     * @param {String} stringToCheck
     */


    var stringContainsLink = function stringContainsLink(stringToCheck) {
      var containsLink = false;

      if ('string' === typeof stringToCheck && stringToCheck.search(/(http:\/\/|https:\/\/).*/g) >= 0) {
        containsLink = true;
      }

      return containsLink;
    };
    /**
     * Checks if a string begins with an arrow character.
     *
     * @param {String} stringtoCheck
     * @returns
     */


    var stringContainsArrow = function stringContainsArrow(stringToCheck) {
      var containsArrow = false;

      if ('string' === typeof stringToCheck && stringToCheck.search(/^►([^&]*)/) >= 0) {
        containsArrow = true;
      }

      return containsArrow;
    };
    /**
     * Parse the youtube video ID from the URL.
     * Set the video URL and ID attributes.
     *
     * @param {*} event
     */


    var handleURLChange = function handleURLChange(event) {
      var url = event.target.value;
      var parsedVideoID = null;
      var videoIDMatch = url.match(/(\?v=)(\w|-)+/g);

      if (videoIDMatch) {
        parsedVideoID = videoIDMatch[0].replace('?v=', '');
      }

      setAttributes({
        videoID: parsedVideoID,
        videoURL: url
      });
    };
    /**
     * Update fetch completion message state and make message visible to user.
     *
     * @param {Boolean} completedSuccessfully
     * @param {String} errorMessage
     */


    var showFetchCompleteMessage = function showFetchCompleteMessage(completedSuccessfully) {
      var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var fetchMessageClass = '';
      var fetchMessageText = '';

      if (completedSuccessfully) {
        fetchMessageClass = 'fetch-message-success';
        fetchMessageText = __('Video information fetched successfully.');
      } else {
        fetchMessageClass = 'fetch-message-fail';
        fetchMessageText = __('Couldn\'t fetch video information.') + " ".concat(errorMessage);
      }

      setFetchStatus({
        "class": fetchMessageClass,
        message: fetchMessageText
      });
      setTimeout(function () {
        setFetchStatus({
          "class": 'fetch-message-hidden',
          message: ''
        });
      }, 3000);
    };
    /**
     * If individual paragraphs of the youtube post description are found
     * to include an arrow character, a link, or both, output a type
     * accordingly.
     *
     * @param {String} element
     */


    var postBodyElementType = function postBodyElementType(element) {
      var elementType = "text";

      if (stringContainsLink(element)) {
        if (stringContainsArrow(element)) {
          elementType = "courseLinkAndDescription";
        } else {
          elementType = "courseLink";
        }
      } else if (stringContainsArrow(element)) {
        elementType = "courseDescription";
      }

      return elementType;
    };
    /**
     * Handle a successful youtube video fetch.
     *
     * @param {Object} response
     */


    var handleFetchResponse = function handleFetchResponse(response) {
      try {
        var fetchedTitle = response.result.items[0].snippet.title;
        var fetchedDescription = response.result.items[0].snippet.description;
        var fetchedThumbnail = response.result.items[0].snippet.thumbnails.medium.url;
        var descriptionArray = fetchedDescription.split('\n');
        var postBodyContentArray = descriptionArray.map(function (element) {
          return {
            content: element,
            type: postBodyElementType(element),
            course: 0
          };
        });
        console.log("the post body", postBodyContentArray);
        setAttributes({
          postBodyElements: postBodyContentArray
        }); // Update the post title.

        dispatch('core/editor').editPost({
          title: fetchedTitle
        }); // Set attributes from fetched video info.

        setAttributes({
          videoTitle: fetchedTitle,
          videoDescription: descriptionArray,
          videoThumbnail: fetchedThumbnail
        }); // Todo: convert to useState()

        setAttributes({
          videoInfoFetched: true
        }); // Give some feedback to the user that the fetch has completed.

        showFetchCompleteMessage(true);
      } catch (error) {
        // Let the user know the operation failed.
        showFetchCompleteMessage(false);
        console.error(error);
      }
    };
    /**
     * Interface with the google client API to perform a fetch request
     * to get information from the youtube video ID.
     *
     * @link https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md
     *
     * @param {MouseEvent} event
     * @param {String} videoID
     */


    var initFetch = function initFetch(event, videoID) {
      event.preventDefault();
      setFetchStatus({
        "class": 'fetch-message-hidden',
        message: ''
      });
      gapi.load('client', function () {
        console.log('the vid id', videoID);
        gapi.client.setApiKey(_youtube_api_config__WEBPACK_IMPORTED_MODULE_4__.youtubeAPIConfig.key);
        gapi.client.load('youtube', 'v3', function () {
          gapi.client.youtube.videos.list({
            part: 'snippet',
            id: videoID
          }).then(function (response) {
            handleFetchResponse(response);
          }, function (error) {
            // Let the user know the fetch failed.
            showFetchCompleteMessage(false, error);
          });
        });
      });
    };

    var handlePostBodyCourseChange = function handlePostBodyCourseChange(newCourse, courseAreaIndex) {
      console.log('the post body element', postBodyElements);
      /**
       * If the course area select box has a matching element in the post body,
       * update the corresponding position in the array attribute and update the
       * course area HTML.
       */

      var newCourseObject = postBodyElements[courseAreaIndex];
      newCourseObject.course = parseInt(newCourse); // if (courseAreaElements[courseAreaAttributeToUpdate]) {

      var newPostBodyElements = postBodyElements.fill(newCourseObject, courseAreaIndex, courseAreaIndex + 1);
      console.log('the new ones', newPostBodyElements);
      setAttributes({
        postBodyElements: newPostBodyElements
      }); // 	courseAreaElements.forEach(courseArea => console.log('sus', courseArea.dataset.courseSlot));
      // 	// courseAreaElements[courseAreaAttributeToUpdate].classList.remove('no-course');
      // }
    };

    var handleCourseChange = function handleCourseChange(newValue, id) {
      if ('first-course-slot' === id) {
        console.log('it is set', newValue);

        if ('None' !== newValue) {
          setAttributes({
            sidebarCourseSlotOne: newValue
          });
        } else {
          setAttributes({
            sidebarCourseSlotOne: 0
          });
        }
      }

      if ('second-course-slot' === id) {
        if ('None' !== newValue) {
          setAttributes({
            sidebarCourseSlotTwo: newValue
          });
        } else {
          setAttributes({
            sidebarCourseSlotTwo: 0
          });
        }
      }
    };

    var SidebarCourseArea = function SidebarCourseArea(_ref2) {
      var courseID = _ref2.courseID;
      console.log('course?', courseID, courseDetails);
      var course = courseDetails[props.courseID];
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
        className: "sidebar-course-card"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("img", {
        src: course.imageUrl,
        alt: ""
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
        className: "course-card-body"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
        className: "body-text"
      }, course.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("a", {
        className: "course-url-button",
        href: course.courseUrl
      }, 'Get it now!')));
    };

    var getCourseViewInfo = function getCourseViewInfo(element, courseAreaIndex) {
      var courseViewInfo = ['', '', ''];
      var elementContent = element.content;
      var matchedDescription = '';
      var matchedButtonText = '';
      var matchedLink = elementContent.match(/(http:\/\/|https:\/\/).*/);

      if ("string" === typeof elementContent) {
        if ("courseLink" === element.type) {
          elementContent = postBodyElements[courseAreaIndex - 1].content;
        }

        matchedDescription = elementContent.match(/^►([^&]*)/);

        if (matchedLink && matchedDescription) {
          matchedButtonText = matchedLink[0].replace(/.+\/\/|www.|\..+/g, '');
          matchedDescription = matchedDescription[0].replace(/(http:\/\/|https:\/\/).*/, '');
          matchedDescription = matchedDescription.replace(/►/, '');
          courseViewInfo = [matchedLink[0], matchedDescription, matchedButtonText.toUpperCase()];
        }
      }

      return courseViewInfo;
    };

    var PostBodyCourseArea = function PostBodyCourseArea(_ref3) {
      var element = _ref3.element,
          courseAreaIndex = _ref3.courseAreaIndex;
      var courseTypes = ["courseLink", "courseDescription", "courseLinkAndDescription"];

      if ("courseLinkAndDescription" === element.type || "courseLink" === element.type) {
        var _getCourseViewInfo = getCourseViewInfo(element, courseAreaIndex),
            _getCourseViewInfo2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_getCourseViewInfo, 3),
            courseLink = _getCourseViewInfo2[0],
            courseDescription = _getCourseViewInfo2[1],
            buttonText = _getCourseViewInfo2[2];

        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("article", {
          className: "post-body-course-area course"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("img", {
          src: '',
          alt: ""
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
          className: "course-card-body"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
          className: "body-text"
        }, courseDescription), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("a", {
          className: "course-url-button",
          href: courseLink
        }, buttonText)));
      } else {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
          className: "post-body-course-area no-course"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", null, __('Select a course to fill this area or leave blank.')));
      }
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, blockProps, {
      className: className
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PluginDocumentSettingPanel, {
      name: "sidebar-course-slots",
      title: __("Video sidebar course slots"),
      className: "sidebar-course-slots-panel"
    }, courseDetails && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(SelectControl, {
      id: "first-course-slot",
      label: __('Sidebar course 1'),
      value: sidebarCourseSlotOne,
      options: courseOptions,
      onChange: function onChange(newValue) {
        return handleCourseChange(newValue, 'first-course-slot');
      }
    })), courseDetails && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(SelectControl, {
      id: "second-course-slot",
      label: __('Sidebar course 2'),
      value: sidebarCourseSlotTwo,
      options: courseOptions,
      onChange: function onChange(newValue) {
        return handleCourseChange(newValue, 'second-course-slot');
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PluginDocumentSettingPanel, {
      name: "post-body-course-slots",
      title: __('Post body course slots'),
      className: "post-body-course-slots-panel"
    }, postBodyElements && postBodyElements.map(function (element, index) {
      if ("courseLink" === element.type) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(SelectControl, {
          id: index,
          label: __('Course slot line') + " ".concat(index + 1),
          value: element.course,
          options: courseOptionsWithAuto,
          onChange: function onChange(newValue) {
            return handlePostBodyCourseChange(newValue, index);
          }
        }));
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PluginDocumentSettingPanel, {
      name: "song-difficulty-attributes",
      title: __('Song difficulty'),
      className: "song-difficulty-panel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(TextControl, {
      label: __('Enter a number from 1 to 50'),
      value: postMeta.song_difficulty,
      onChange: function onChange(newValue) {
        return editPost({
          meta: {
            song_difficulty: newValue
          }
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PluginDocumentSettingPanel, {
      name: "contains-only-one-barre-chord",
      title: __('Contains only one barre chord'),
      className: "contains-only-one-barre-chord-panel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(ToggleControl, {
      label: __('One barre chord song'),
      checked: postMeta.contains_one_barre,
      onChange: function onChange(newValue) {
        return editPost({
          meta: {
            contains_one_barre: newValue
          }
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("section", {
      className: "video-details"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("h2", null, __('Video Details')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
      className: "fetch-message ".concat(fetchStatus["class"])
    }, fetchStatus.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("label", {
      className: "youtube-post-label",
      htmlFor: "youtube-video-url"
    }, "Search by Youtube video URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("form", {
      onSubmit: function onSubmit(event) {
        return initFetch(event, videoID);
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("input", {
      id: "youtube-video-url",
      label: __('Video URL'),
      className: "youtube-video-url",
      value: videoURL,
      onChange: handleURLChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("input", {
      type: "submit",
      className: "yt-submit-button",
      value: "Submit"
    })), videoTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(TextControl, {
      label: __('Video Title'),
      value: videoTitle,
      onChange: function onChange(e) {
        return setAttributes({
          videoTitle: e.target.value
        });
      }
    }), videoThumbnail && videoInfoFetched && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("label", {
      className: "youtube-post-label"
    }, __('Video Thumbnail')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("img", {
      src: videoThumbnail
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("label", {
      className: "youtube-post-label",
      htmlFor: "song-title"
    }, __('Song Title')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("input", {
      id: "song-title",
      type: "text",
      value: songTitle,
      onChange: function onChange(e) {
        return setAttributes({
          songTitle: e.target.value
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("section", {
      ref: postBody,
      className: "post-body"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("h2", null, __('Post Body')), videoID ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "youtube-post-video-area"
    }, videoURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("iframe", {
      width: "560",
      height: "715",
      src: videoURL,
      className: sidebarCourseSlotOne > 0 ? 'iframe-two-third-width' : 'iframe-full-width',
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true
    }), (sidebarCourseSlotOne > 0 || sidebarCourseSlotTwo > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "course-sidebar"
    }, sidebarCourseSlotOne > 0 && has(courseDetails, courseID) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(SidebarCourseArea, {
      courseID: sidebarCourseSlotOne
    }), sidebarCourseSlotTwo > 0 && has(courseDetails, courseID) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(SidebarCourseArea, {
      courseID: sidebarCourseSlotTwo
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "post-content-video-description"
    }, postBodyElements && postBodyElements.map(function (element, index) {
      if ("text" === element.type) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(RichText, {
          value: element.content
        });
      } else if ("courseLink" === element.type || "courseLinkAndDescription" === element.type) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(PostBodyCourseArea, {
          element: element,
          courseAreaIndex: index
        });
      }
    }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
      className: "empty-post-body-msg"
    }, __('Submit URL to populate post body.'))));
  },
  save: function save() {
    return null;
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

var registerBlockType = wp.blocks.registerBlockType;
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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

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
__webpack_require__(/*! ./blocks/smallCourseCard.js */ "./assets/src/scripts/blocks/smallCourseCard.js");

__webpack_require__(/*! ./blocks/largeCourseCard.js */ "./assets/src/scripts/blocks/largeCourseCard.js");

__webpack_require__(/*! ./blocks/cover.js */ "./assets/src/scripts/blocks/cover.js");

__webpack_require__(/*! ./blocks/courseTemplate.js */ "./assets/src/scripts/blocks/courseTemplate.js");

__webpack_require__(/*! ./blocks/group.js */ "./assets/src/scripts/blocks/group.js");

__webpack_require__(/*! ./blocks/latestLessons.js */ "./assets/src/scripts/blocks/latestLessons.js");

__webpack_require__(/*! ./blocks/youtube-post-template.js */ "./assets/src/scripts/blocks/youtube-post-template.js");

__webpack_require__(/*! ./blocks/ypt-search.js */ "./assets/src/scripts/blocks/ypt-search.js");
})();

/******/ })()
;