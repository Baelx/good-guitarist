/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/scripts/blocks/cta-template/BlockEdit.jsx":
/*!**************************************************************!*\
  !*** ./assets/src/scripts/blocks/cta-template/BlockEdit.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockEdit": () => (/* binding */ BlockEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button;
var _wp$blockEditor = wp.blockEditor,
    useBlockProps = _wp$blockEditor.useBlockProps,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var __ = wp.i18n.__;
var BlockEdit = function BlockEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var url = attributes.url,
      description = attributes.description,
      buttonText = attributes.buttonText,
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
    value: description,
    onChange: function onChange(newValue) {
      return setAttributes({
        description: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('URL'),
    value: url,
    onChange: function onChange(newValue) {
      return setAttributes({
        url: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Button text (if nothing is entered, button text will be "Click here")'),
    value: buttonText,
    onChange: function onChange(newValue) {
      return setAttributes({
        buttonText: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "media-upload-component"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "image-label"
  }, __('Call to action thumbnail (if no image is chosen, a default image will be used)')), imageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
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
};

/***/ }),

/***/ "./assets/src/scripts/blocks/cta-template/index.js":
/*!*********************************************************!*\
  !*** ./assets/src/scripts/blocks/cta-template/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlockEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockEdit */ "./assets/src/scripts/blocks/cta-template/BlockEdit.jsx");
var registerBlockType = wp.blocks.registerBlockType;

registerBlockType('gutenberg-good-guitarist/cta-template', {
  title: 'Call to Action Template',
  icon: 'admin-customizer',
  category: 'text',
  attributes: {
    description: {
      type: 'string',
      "default": ''
    },
    url: {
      type: 'string',
      "default": ''
    },
    buttonText: {
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
  edit: _BlockEdit__WEBPACK_IMPORTED_MODULE_0__.BlockEdit,
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./assets/src/scripts/blocks/group/index.js":
/*!**************************************************!*\
  !*** ./assets/src/scripts/blocks/group/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

var addFilter = wp.hooks.addFilter;
/**
 * Modify the Gutenberg group block.
 * 
 * @param {*} settings 
 * @returns 
 */

var modifyGroupBlock = function modifyGroupBlock(settings) {
  if (settings.name !== 'core/group') {
    return settings;
  }

  var newSettings = _objectSpread({}, settings);

  return settings;
};

addFilter('blocks.registerBlockType', 'good-guitarist/modify-group-block', modifyGroupBlock);

/***/ }),

/***/ "./assets/src/scripts/blocks/large-cta/BlockEdit.jsx":
/*!***********************************************************!*\
  !*** ./assets/src/scripts/blocks/large-cta/BlockEdit.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockEdit": () => (/* binding */ BlockEdit)
/* harmony export */ });
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
var BlockEdit = function BlockEdit(_ref) {
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
    label: 'Select a call to action',
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
};

/***/ }),

/***/ "./assets/src/scripts/blocks/large-cta/index.js":
/*!******************************************************!*\
  !*** ./assets/src/scripts/blocks/large-cta/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlockEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockEdit */ "./assets/src/scripts/blocks/large-cta/BlockEdit.jsx");

var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('gutenberg-good-guitarist/large-cta', {
  title: 'Large Call to Action',
  icon: 'megaphone',
  category: 'layout',
  className: 'large-cta',
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
  edit: _BlockEdit__WEBPACK_IMPORTED_MODULE_0__.BlockEdit,
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./assets/src/scripts/blocks/latest-lessons/BlockEdit.jsx":
/*!****************************************************************!*\
  !*** ./assets/src/scripts/blocks/latest-lessons/BlockEdit.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockEdit": () => (/* binding */ BlockEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var BlockEdit = function BlockEdit() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "dynamic-block-h2"
  }, __('Latest Lessons Carousel')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, __('A carousel of the latest lessons will appear here on the frontend.')));
};

/***/ }),

/***/ "./assets/src/scripts/blocks/latest-lessons/index.js":
/*!***********************************************************!*\
  !*** ./assets/src/scripts/blocks/latest-lessons/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlockEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockEdit */ "./assets/src/scripts/blocks/latest-lessons/BlockEdit.jsx");
var registerBlockType = wp.blocks.registerBlockType;

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
  edit: _BlockEdit__WEBPACK_IMPORTED_MODULE_0__.BlockEdit,
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./assets/src/scripts/blocks/small-cta/BlockEdit.jsx":
/*!***********************************************************!*\
  !*** ./assets/src/scripts/blocks/small-cta/BlockEdit.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockEdit": () => (/* binding */ BlockEdit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./assets/src/scripts/utils.js");



var __ = wp.i18n.__;
var MediaUpload = wp.editor.MediaUpload;
var _wp$blockEditor = wp.blockEditor,
    useBlockProps = _wp$blockEditor.useBlockProps,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    ToolbarDropdownMenu = _wp$components.ToolbarDropdownMenu,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl;
var useSelect = wp.data.useSelect;
var BlockEdit = function BlockEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var blockProps = useBlockProps();
  var url = attributes.url,
      buttonText = attributes.buttonText,
      description = attributes.description,
      imageId = attributes.imageId,
      imageUrl = attributes.imageUrl;
  var ctaSelectOptions = useSelect(function (select) {
    var ctaPosts = select('core').getEntityRecords('postType', 'cta');

    if (ctaPosts) {
      var ctaData = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCtaDataFromPosts)(ctaPosts); // Create dropdown options.

      return ctaData.map(function (cta) {
        return {
          title: cta.title,
          onClick: function onClick() {
            return setAttributes({
              description: cta.description,
              url: cta.url,
              imageId: cta.imageId,
              imageUrl: cta.imageUrl
            });
          }
        };
      });
    }
  });
  /**
   * Event handler for When images is selected.
   *
   * @param   {object}  media  The media object, to set url, and id.
   */

  var onSelectImage = function onSelectImage(media) {
    setAttributes({
      imageUrl: media.url,
      imageId: media.id
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    className: "small-cta"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Toolbar, null, ctaSelectOptions && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarDropdownMenu, {
    icon: "update",
    label: "Use with an existing course",
    controls: ctaSelectOptions
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "image-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: imageUrl,
    alt: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: "image",
    value: imageId,
    render: function render(_ref2) {
      var open = _ref2.open;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
        type: "text",
        className: "image-button change-image-button",
        onClick: open
      }, __("Change Image"));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "details-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextareaControl, {
    label: "Description",
    value: description,
    onChange: function onChange(value) {
      return setAttributes({
        description: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Link",
    value: url,
    onChange: function onChange(value) {
      return setAttributes({
        url: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    className: "button-text-input",
    label: "Button text",
    value: buttonText,
    onChange: function onChange(value) {
      return setAttributes({
        buttonText: value
      });
    }
  })));
};

/***/ }),

/***/ "./assets/src/scripts/blocks/small-cta/BlockSave.jsx":
/*!***********************************************************!*\
  !*** ./assets/src/scripts/blocks/small-cta/BlockSave.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockSave": () => (/* binding */ BlockSave)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var BlockSave = function BlockSave(_ref) {
  var attributes = _ref.attributes;
  var url = attributes.url,
      buttonText = attributes.buttonText,
      description = attributes.description,
      imageUrl = attributes.imageUrl;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageUrl,
    alt: ""
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "details-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "cta-button",
    href: url
  }, buttonText)));
};

/***/ }),

/***/ "./assets/src/scripts/blocks/small-cta/index.js":
/*!******************************************************!*\
  !*** ./assets/src/scripts/blocks/small-cta/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlockEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockEdit */ "./assets/src/scripts/blocks/small-cta/BlockEdit.jsx");
/* harmony import */ var _BlockSave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockSave */ "./assets/src/scripts/blocks/small-cta/BlockSave.jsx");
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('gutenberg-good-guitarist/small-cta', {
  title: 'Small Call to Action',
  icon: 'megaphone',
  category: 'layout',
  className: 'small-cta',
  attributes: {
    description: {
      type: 'string',
      "default": ''
    },
    url: {
      type: 'string',
      "default": ''
    },
    buttonText: {
      type: 'string',
      "default": 'Click here'
    },
    imageId: {
      type: "number"
    },
    imageUrl: {
      type: "string",
      "default": "".concat(gutenbergVars.image_dir, "/good-guitarist-preview-img.png")
    }
  },
  edit: _BlockEdit__WEBPACK_IMPORTED_MODULE_0__.BlockEdit,
  save: _BlockSave__WEBPACK_IMPORTED_MODULE_1__.BlockSave
});

/***/ }),

/***/ "./assets/src/scripts/blocks/youtube-post-template/BlockEdit.jsx":
/*!***********************************************************************!*\
  !*** ./assets/src/scripts/blocks/youtube-post-template/BlockEdit.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockEdit": () => (/* binding */ BlockEdit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./assets/src/scripts/utils.js");
/* harmony import */ var _components_SidebarCta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SidebarCta */ "./assets/src/scripts/components/SidebarCta.jsx");





function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}



var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    Spinner = _wp$components.Spinner;
var _wp$blockEditor = wp.blockEditor,
    useBlockProps = _wp$blockEditor.useBlockProps,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
var _wp$data = wp.data,
    select = _wp$data.select,
    useSelect = _wp$data.useSelect,
    dispatch = _wp$data.dispatch,
    useDispatch = _wp$data.useDispatch;
var _wp$element = wp.element,
    useRef = _wp$element.useRef,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var __ = wp.i18n.__;
var BlockEdit = function BlockEdit(_ref) {
  var clientId = _ref.clientId,
      attributes = _ref.attributes,
      className = _ref.className,
      setAttributes = _ref.setAttributes;
  var videoInfoFetched = attributes.videoInfoFetched,
      videoID = attributes.videoID,
      videoUrlRaw = attributes.videoUrlRaw,
      videoUrlEmbed = attributes.videoUrlEmbed,
      videoTitle = attributes.videoTitle,
      videoThumbnail = attributes.videoThumbnail,
      songTitle = attributes.songTitle,
      sidebarCtaSlotOne = attributes.sidebarCtaSlotOne,
      sidebarCtaSlotTwo = attributes.sidebarCtaSlotTwo;
  var blockProps = useBlockProps();
  var postBody = useRef();

  var _useState = useState(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      isFetching = _useState2[0],
      setIsFetching = _useState2[1];

  var _useState3 = useState({
    "class": 'fetch-message-hidden',
    message: ''
  }),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  useEffect(function () {
    if (!gutenbergVars.youtube_api_key) {
      setErrorMessage({
        "class": 'fetch-message-fail',
        message: __('Youtube API key not detected. Please ensure you have entered a valid API key in the "GG Settings" section.')
      });
    }
  }, []);

  var _useSelect = useSelect(function (select) {
    var ctaPosts = select('core').getEntityRecords('postType', 'cta');
    var ctaData;
    var ctaSelectOptions = [{
      label: 'None',
      value: -1
    }];

    if (ctaPosts) {
      ctaData = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getCtaDataFromPosts)(ctaPosts); // Create dropdown options.

      ctaData.forEach(function (cta) {
        ctaSelectOptions.push({
          label: cta.title,
          value: cta.id
        });
      });
    }

    return {
      postMeta: select('core/editor').getEditedPostAttribute('meta'),
      ctaData: ctaData,
      ctaSelectOptions: ctaSelectOptions
    };
  }),
      postMeta = _useSelect.postMeta,
      ctaData = _useSelect.ctaData,
      ctaSelectOptions = _useSelect.ctaSelectOptions;

  var handleSidebarToggle = function handleSidebarToggle(sidebarSlot, ctaId) {
    if (ctaData) {
      var numId = Number(ctaId);
      var cta = ctaData.find(function (cta) {
        return cta.id === numId;
      });
      setAttributes((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, sidebarSlot, _objectSpread({
        id: numId
      }, cta)));
    }
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
      videoUrlRaw: url,
      videoUrlEmbed: "https://www.youtube.com/embed/".concat(parsedVideoID)
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

    setErrorMessage({
      "class": fetchMessageClass,
      message: fetchMessageText
    });
    setTimeout(function () {
      setErrorMessage({
        "class": 'fetch-message-hidden',
        message: ''
      });
    }, 3000);
  };
  /**
   * Handle a successful youtube video fetch.
   *
   * @param {Object} response
   */


  var handleFetchResponse = function handleFetchResponse(response) {
    try {
      // Remove old innerBlocks in post body.
      var currentBlock = select('core/block-editor').getBlocksByClientId(clientId)[0];
      var childBlockIds = currentBlock.innerBlocks.map(function (block) {
        return block.clientId;
      });
      dispatch('core/block-editor').removeBlocks(childBlockIds);
      var fetchedTitle = response.result.items[0].snippet.title;
      var fetchedDescription = response.result.items[0].snippet.description;
      var fetchedThumbnail = response.result.items[0].snippet.thumbnails.medium.url;
      var descriptionArray = fetchedDescription.split('\n');
      var postBodyBlocks = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createBlocksFromDescription)(descriptionArray); // Update the post title.

      dispatch('core/editor').editPost({
        title: fetchedTitle
      }); // Update innerBlocks in post body.

      dispatch('core/block-editor').insertBlocks(postBodyBlocks, 0, clientId); // Set attributes from fetched video info.

      setAttributes({
        videoTitle: fetchedTitle,
        videoThumbnail: fetchedThumbnail,
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
    setIsFetching(true);
    setErrorMessage({
      "class": 'fetch-message-hidden',
      message: ''
    });
    gapi.load('client', function () {
      console.log('the vid id', videoID);
      gapi.client.setApiKey(gutenbergVars.youtube_api_key);
      gapi.client.load('youtube', 'v3', function () {
        gapi.client.youtube.videos.list({
          part: 'snippet',
          id: videoID
        }).then(function (response) {
          setIsFetching(false);
          handleFetchResponse(response);
        }, function (error) {
          setIsFetching(false); // Let the user know the fetch failed.

          showFetchCompleteMessage(false, error);
        });
      });
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    className: className
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(PluginDocumentSettingPanel, {
    name: "sidebar-cta-slots",
    title: __("Video sidebar CTA slots"),
    className: "sidebar-cta-slots-panel"
  }, ctaSelectOptions && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(SelectControl, {
    label: __('Sidebar CTA slot 1'),
    value: sidebarCtaSlotOne.id,
    options: ctaSelectOptions,
    onChange: function onChange(newValue) {
      return handleSidebarToggle("sidebarCtaSlotOne", newValue);
    }
  })), ctaSelectOptions && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(SelectControl, {
    label: __('Sidebar CTA slot 2'),
    value: sidebarCtaSlotTwo.id,
    options: ctaSelectOptions,
    onChange: function onChange(newValue) {
      return handleSidebarToggle("sidebarCtaSlotTwo", newValue);
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(PluginDocumentSettingPanel, {
    name: "song-difficulty-attributes",
    title: __('Song difficulty'),
    className: "song-difficulty-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(PanelRow, null, postMeta && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(TextControl, {
    label: __('Enter a number from 1 to 50'),
    value: postMeta.song_difficulty,
    onChange: function onChange(newValue) {
      return dispatch('core/editor').editPost({
        meta: {
          song_difficulty: newValue
        }
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(PluginDocumentSettingPanel, {
    name: "contains-only-one-barre-chord",
    title: __('Contains only one barre chord'),
    className: "contains-only-one-barre-chord-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(PanelRow, null, postMeta && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(ToggleControl, {
    label: __('One barre chord song'),
    checked: postMeta.contains_one_barre,
    onChange: function onChange(newValue) {
      return dispatch('core/editor').editPost({
        meta: {
          contains_one_barre: newValue
        }
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("section", {
    className: "video-details"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("h2", null, __('Video Details')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", {
    className: "fetch-message ".concat(errorMessage["class"])
  }, errorMessage.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("label", {
    className: "youtube-post-label",
    htmlFor: "youtube-video-url"
  }, "Search by Youtube video URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("form", {
    onSubmit: function onSubmit(event) {
      return initFetch(event, videoID);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", {
    id: "youtube-video-url",
    label: __('Video URL'),
    className: "youtube-video-url",
    value: videoUrlRaw,
    onChange: handleURLChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("button", {
    type: "submit",
    className: "yt-submit-button",
    disabled: isFetching
  }, isFetching ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(Spinner, null) : __('Submit'))), videoTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(TextControl, {
    label: __('Video Title'),
    value: videoTitle,
    onChange: function onChange(e) {
      return setAttributes({
        videoTitle: e.target.value
      });
    }
  }), videoThumbnail && videoInfoFetched && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("label", {
    className: "youtube-post-label"
  }, __('Video Thumbnail')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("img", {
    src: videoThumbnail
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("label", {
    className: "youtube-post-label",
    htmlFor: "song-title"
  }, __('Song Title')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", {
    id: "song-title",
    type: "text",
    value: songTitle,
    onChange: function onChange(e) {
      return setAttributes({
        songTitle: e.target.value
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("section", {
    ref: postBody,
    className: "post-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("h2", null, __('Post Body')), videoID ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", {
    className: "youtube-post-video-area"
  }, videoInfoFetched && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("iframe", {
    width: "560",
    height: "715",
    src: videoUrlEmbed,
    className: sidebarCtaSlotOne.id > 0 || sidebarCtaSlotTwo.id > 0 ? 'iframe-two-third-width' : 'iframe-full-width',
    title: "YouTube video player",
    frameborder: "0",
    allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  }), (sidebarCtaSlotOne.id > 0 || sidebarCtaSlotTwo.id > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", {
    className: "cta-sidebar"
  }, sidebarCtaSlotOne.id > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_components_SidebarCta__WEBPACK_IMPORTED_MODULE_5__.SidebarCta, {
    cta: sidebarCtaSlotOne
  }), sidebarCtaSlotTwo.id > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_components_SidebarCta__WEBPACK_IMPORTED_MODULE_5__.SidebarCta, {
    cta: sidebarCtaSlotTwo
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", {
    className: "post-content-video-description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(InnerBlocks, null))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", {
    className: "empty-post-body-msg"
  }, __('Submit URL to populate post body.'))));
};

/***/ }),

/***/ "./assets/src/scripts/blocks/youtube-post-template/BlockSave.jsx":
/*!***********************************************************************!*\
  !*** ./assets/src/scripts/blocks/youtube-post-template/BlockSave.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockSave": () => (/* binding */ BlockSave)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SidebarCta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SidebarCta */ "./assets/src/scripts/components/SidebarCta.jsx");

var InnerBlocks = wp.blockEditor.InnerBlocks;

var BlockSave = function BlockSave(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  var videoUrlEmbed = attributes.videoUrlEmbed,
      videoInfoFetched = attributes.videoInfoFetched,
      sidebarCtaSlotOne = attributes.sidebarCtaSlotOne,
      sidebarCtaSlotTwo = attributes.sidebarCtaSlotTwo;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "youtube-post-video-area"
  }, videoInfoFetched && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    width: "560",
    height: "715",
    src: videoUrlEmbed,
    className: sidebarCtaSlotOne.id > 0 || sidebarCtaSlotTwo.id > 0 ? 'iframe-two-third-width' : 'iframe-full-width',
    title: "YouTube video player",
    frameborder: "0",
    allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  }), (sidebarCtaSlotOne.id > 0 || sidebarCtaSlotTwo.id > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cta-sidebar"
  }, sidebarCtaSlotOne.id > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SidebarCta__WEBPACK_IMPORTED_MODULE_1__.SidebarCta, {
    cta: sidebarCtaSlotOne
  }), sidebarCtaSlotTwo.id > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SidebarCta__WEBPACK_IMPORTED_MODULE_1__.SidebarCta, {
    cta: sidebarCtaSlotTwo
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "class": "youtube-post-type-video-description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)));
};

/***/ }),

/***/ "./assets/src/scripts/blocks/youtube-post-template/index.js":
/*!******************************************************************!*\
  !*** ./assets/src/scripts/blocks/youtube-post-template/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlockEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockEdit */ "./assets/src/scripts/blocks/youtube-post-template/BlockEdit.jsx");
/* harmony import */ var _BlockSave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockSave */ "./assets/src/scripts/blocks/youtube-post-template/BlockSave.jsx");
var registerBlockType = wp.blocks.registerBlockType;


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
    videoID: {
      type: 'string'
    },
    videoUrlRaw: {
      type: 'string',
      "default": ''
    },
    videoUrlEmbed: {
      type: 'string',
      "default": ''
    },
    songTitle: {
      type: 'string',
      "default": ''
    },
    sidebarCtaSlotOne: {
      type: 'object',
      "default": {}
    },
    sidebarCtaSlotTwo: {
      type: 'object',
      "default": {}
    },
    postBodyElements: {
      type: 'array',
      "default": []
    }
  },
  edit: _BlockEdit__WEBPACK_IMPORTED_MODULE_0__.BlockEdit,
  save: _BlockSave__WEBPACK_IMPORTED_MODULE_1__.BlockSave
});

/***/ }),

/***/ "./assets/src/scripts/blocks/ypt-search/BlockEdit.jsx":
/*!************************************************************!*\
  !*** ./assets/src/scripts/blocks/ypt-search/BlockEdit.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockEdit": () => (/* binding */ BlockEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
 // const { ServerSideRender } = wp.components;

var BlockEdit = function BlockEdit() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null);
};

/***/ }),

/***/ "./assets/src/scripts/blocks/ypt-search/index.js":
/*!*******************************************************!*\
  !*** ./assets/src/scripts/blocks/ypt-search/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlockEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockEdit */ "./assets/src/scripts/blocks/ypt-search/BlockEdit.jsx");
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;

registerBlockType('gutenberg-good-guitarist/ypt-search', {
  title: 'Youtube Post Search Box',
  icon: 'search',
  category: 'layout',
  className: 'youtube-post-type-search',
  attributes: {},
  edit: _BlockEdit__WEBPACK_IMPORTED_MODULE_0__.BlockEdit,
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./assets/src/scripts/components/SidebarCta.jsx":
/*!******************************************************!*\
  !*** ./assets/src/scripts/components/SidebarCta.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarCta": () => (/* binding */ SidebarCta)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
/**
 *
 * @param {*}
 * @returns {JSX}
 */

var SidebarCta = function SidebarCta(_ref) {
  var cta = _ref.cta;
  var description = cta.description,
      imageUrl = cta.imageUrl,
      url = cta.url,
      buttonText = cta.buttonText;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar-cta-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageUrl || gutenbergVars.image_dir + '/good-guitarist-preview-img.png',
    alt: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cta-card-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "body-text"
  }, description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "cta-url-button",
    href: url
  }, buttonText || __("Click here"))));
};

/***/ }),

/***/ "./assets/src/scripts/utils.js":
/*!*************************************!*\
  !*** ./assets/src/scripts/utils.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBlocksFromDescription": () => (/* binding */ createBlocksFromDescription),
/* harmony export */   "getCtaDataFromPosts": () => (/* binding */ getCtaDataFromPosts),
/* harmony export */   "stringContainsLink": () => (/* binding */ stringContainsLink)
/* harmony export */ });
var parse = wp.blockSerializationDefaultParser.parse;
var createBlock = wp.blocks.createBlock;
/**
 * Parse 'gutenberg-good-guitarist/cta-template' block from a post.
 *
 * @param {array} ctaPost
 * @returns {array}
 */

var getCtaTemplateBlockFromPost = function getCtaTemplateBlockFromPost(ctaPost) {
  var parsedBlocks = parse(ctaPost.content.raw);
  return parsedBlocks.find(function (block) {
    return 'gutenberg-good-guitarist/cta-template' === block.blockName;
  });
};
/**
 *  Format CTA data from a CTA post.
 *
 * @param {array} ctaPosts
 * @returns {array}
 */


var getCtaDataFromPosts = function getCtaDataFromPosts(ctaPosts) {
  var validCtaPosts = ctaPosts.filter(function (ctaPost) {
    return ctaPost.id ? getCtaTemplateBlockFromPost(ctaPost) : undefined;
  });
  return validCtaPosts.map(function (ctaPost) {
    var ctaAtts = getCtaTemplateBlockFromPost(ctaPost).attrs;
    return {
      id: ctaPost.id,
      title: ctaPost.title.raw,
      description: ctaAtts.description,
      url: ctaAtts.url,
      buttonText: ctaAtts.buttonText,
      imageId: ctaAtts.imageId,
      imageUrl: ctaAtts.imageUrl
    };
  });
};
/**
 * Check if string has http:// or https:// in it.
 *
 * @param {string} stringToCheck
 */

var stringContainsLink = function stringContainsLink(stringToCheck) {
  var linkRegex = /(http:\/\/|https:\/\/).*/g;
  var matchedLink = '';

  if ('string' === typeof stringToCheck && (stringToCheck === null || stringToCheck === void 0 ? void 0 : stringToCheck.search(linkRegex)) >= 0) {
    matchedLink = stringToCheck.match(linkRegex);
  }

  return matchedLink;
};
/**
 * Create a gutenberg block for each paragraph of the fetched
 * youtube description.
 *
 * @param {array} descriptionArray
 * @returns
 */

var createBlocksFromDescription = function createBlocksFromDescription(descriptionArray) {
  var descriptionWithoutEmpties = descriptionArray.filter(function (description) {
    return description.length;
  });
  return descriptionWithoutEmpties.map(function (description) {
    var matchedLink = stringContainsLink(description);
    var blockType = 'core/paragraph';
    var blockAtts = {
      content: description
    };

    if (matchedLink) {
      blockType = 'gutenberg-good-guitarist/small-cta';
      blockAtts = {
        url: matchedLink,
        description: description
      };
    }

    return createBlock(blockType, blockAtts);
  });
};

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

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
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

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
 * Import Gutenberg custom blocks.
 */
__webpack_require__(/*! ./blocks/small-cta */ "./assets/src/scripts/blocks/small-cta/index.js");

__webpack_require__(/*! ./blocks/large-cta */ "./assets/src/scripts/blocks/large-cta/index.js");

__webpack_require__(/*! ./blocks/cta-template */ "./assets/src/scripts/blocks/cta-template/index.js");

__webpack_require__(/*! ./blocks/group */ "./assets/src/scripts/blocks/group/index.js");

__webpack_require__(/*! ./blocks/latest-lessons */ "./assets/src/scripts/blocks/latest-lessons/index.js");

__webpack_require__(/*! ./blocks/youtube-post-template */ "./assets/src/scripts/blocks/youtube-post-template/index.js");

__webpack_require__(/*! ./blocks/ypt-search */ "./assets/src/scripts/blocks/ypt-search/index.js");
})();

/******/ })()
;