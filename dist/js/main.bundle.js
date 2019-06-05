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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/editor/editor.js":
/*!******************************!*\
  !*** ./src/editor/editor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_editor_editor_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/editor/editor-api */ "./src/utils/editor/editor-api.js");
/* harmony import */ var _plugins_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugins/registry */ "./src/plugins/registry.js");
/* harmony import */ var _store_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/events */ "./src/store/events.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Editor =
/*#__PURE__*/
function () {
  function Editor(editorNode, config) {
    var _this = this;

    _classCallCheck(this, Editor);

    _defineProperty(this, "onInputChange", function (event) {
      //console.log(event.target.innerHTML);
      // run plugins
      _this.dispatchEvent("onContentChanged", event); // call props method 


      _this.methods.onChange(event);
    });

    _defineProperty(this, "dispatchEvent", function (method, args) {
      console.log(method, " method fired");

      _this.runPlugins(method, args);
    });

    _defineProperty(this, "runPlugins", function (method, args) {
      for (var plugin in Object.getOwnPropertyNames(_plugins_registry__WEBPACK_IMPORTED_MODULE_1__["default"])) {
        if (plugin[method]) {
          plugin[method](args);
        }
      }
    });

    this._editor = new _utils_editor_editor_api__WEBPACK_IMPORTED_MODULE_0__["default"](editorNode);
    this.toolbarOptions = this.toolbarOptions;
    this.toolbarOptions = {
      bold: {
        status: true,
        image: '',
        name: 'B',
        callback: function callback() {
          console.log("bold called");

          _this._editor.focusEditor();

          console.log(document.getSelection().focusNode);

          _this._editor.bold();
        }
      }
    };
    this.mount(editorNode);
    _store_events__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe("changed", function () {
      console.log("content changed");
    });
    this.methods = {};
    this.methods.onChange = config.onChange;
  }

  _createClass(Editor, [{
    key: "mount",
    value: function mount(editorNode) {
      var _this2 = this;

      var parentNode = document.createElement('div');
      var contentEditableNode = document.createElement('div');
      var toolbar = document.createElement('div');
      contentEditableNode.contentEditable = true;
      contentEditableNode.addEventListener('input', this.onInputChange, false);
      var options = [];

      for (var func in this.toolbarOptions) {
        if (this.toolbarOptions[func].status) {
          var opt = this.toolbarOptions[func];
          options.push("<li data-name=\"".concat(func, "\">").concat(opt.name, "</li>"));
        }
      }

      toolbar.innerHTML = "<ul style=\"list-style:none\">\n      ".concat(options, "\n    </ul>\n    ");
      toolbar.addEventListener("click", function (event) {
        console.log("clicked ", event.srcElement.dataset.name);

        _this2.toolbarOptions[event.srcElement.dataset.name].callback();
      }, false);
      parentNode.appendChild(contentEditableNode);
      parentNode.appendChild(toolbar);
      editorNode.appendChild(parentNode);
    }
    /**
     * input event is fired when something in an input 
     * or textarea element has changes and it's also fired
     *  when something has changed in elements with
     *  contenteditable attribute. Perfect!} value 
     */

  }]);

  return Editor;
}();

/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor/editor */ "./src/editor/editor.js");

var node = document.getElementById("local-editor");
var editor = new _editor_editor__WEBPACK_IMPORTED_MODULE_0__["default"](node, {
  onChange: function onChange(value) {
    console.log(value);
  }
}); // mount the editor on root node

/***/ }),

/***/ "./src/plugins/registry.js":
/*!*********************************!*\
  !*** ./src/plugins/registry.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  emojiTransformPlugin: {}
});

/***/ }),

/***/ "./src/store/events.js":
/*!*****************************!*\
  !*** ./src/store/events.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var events = function () {
  var topics = {};
  var hOP = topics.hasOwnProperty;
  return {
    subscribe: function subscribe(topic, listener) {
      // Create the topic's object if not yet created
      if (!hOP.call(topics, topic)) topics[topic] = []; // Add the listener to queue

      var index = topics[topic].push(listener) - 1; // Provide handle back for removal of topic

      return {
        remove: function remove() {
          delete topics[topic][index];
        }
      };
    },
    publish: function publish(topic, info) {
      // If the topic doesn't exist, or there's no listeners in queue, just leave
      if (!hOP.call(topics, topic)) return; // Cycle through topics queue, fire!

      topics[topic].forEach(function (item) {
        item(info != undefined ? info : {});
      });
    }
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (events);

/***/ }),

/***/ "./src/utils/editor/editor-api.js":
/*!****************************************!*\
  !*** ./src/utils/editor/editor-api.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var editorApi =
/*#__PURE__*/
function () {
  function editorApi(node) {
    _classCallCheck(this, editorApi);

    this.editorNode = node;
  }

  _createClass(editorApi, [{
    key: "focusEditor",
    value: function focusEditor() {
      this.editorNode.focus();
    }
  }, {
    key: "insertCustomTag",
    value: function insertCustomTag(componentKey) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var replacePlaceholder = props.replacePlaceholder || false;
      this.insertHTML(props.tag);
    }
  }, {
    key: "backColor",
    value: function backColor(color) {
      this._ec("backColor", false, color);
    }
  }, {
    key: "bold",
    value: function bold() {
      this._ec("bold", false);
    } // copy: -> @_ec("copy", false)
    // createLink: (uri) -> @_ec("createLink", false, uri)
    // cut: -> @_ec("cut", false)
    // decreaseFontSize: -> @_ec("decreaseFontSize", false)
    // delete: -> @_ec("delete", false)
    // fontName: (fontName) -> @_ec("fontName", false, fontName)
    // fontSize: (fontSize) -> @_ec("fontSize", false, fontSize)
    // foreColor: (color) -> @_ec("foreColor", false, color)
    // formatBlock: (tagName) -> @_ec("formatBlock", false, tagName)
    // forwardDelete: -> @_ec("forwardDelete", false)
    // heading: (tagName) -> @_ec("heading", false, tagName)
    // hiliteColor: (color) -> @_ec("hiliteColor", false, color)
    // increaseFontSize: -> @_ec("increaseFontSize", false)
    // indent: -> @_ec("indent", false)
    // insertHorizontalRule: -> @_ec("insertHorizontalRule", false)

  }, {
    key: "insertHTML",
    value: function insertHTML(html) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          selectInsertion = _ref.selectInsertion;

      this._ec("insertHTML", false, html);
    } // insertImage: (uri) -> @_ec("insertImage", false, uri)
    // insertOrderedList: -> @_ec("insertOrderedList", false)
    // insertUnorderedList: -> @_ec("insertUnorderedList", false)
    // insertParagraph: -> @_ec("insertParagraph", false)
    // insertText: (text) -> @_ec("insertText", false, text)
    // italic: -> @_ec("italic", false)
    // justifyCenter: -> @_ec("justifyCenter", false)
    // justifyFull: -> @_ec("justifyFull", false)
    // justifyLeft: -> @_ec("justifyLeft", false)
    // justifyRight: -> @_ec("justifyRight", false)
    // outdent: -> @_ec("outdent", false)
    // paste: -> @_ec("paste", false)
    // redo: -> @_ec("redo", false)
    // removeFormat: -> @_ec("removeFormat", false)
    // selectAll: -> @_ec("selectAll", false)
    // strikeThrough: -> @_ec("strikeThrough", false)
    // subscript: -> @_ec("subscript", false)
    // superscript: -> @_ec("superscript", false)
    // underline: -> @_ec("underline", false)
    // undo: -> @_ec("undo", false)
    // unlink: -> @_ec("unlink", false)
    // styleWithCSS: (style) -> @_ec("styleWithCSS", false, style)
    // contentReadOnly: -> @_notImplemented()
    // enableInlineTableEditing: -> @_notImplemented()
    // enableObjectResizing: -> @_notImplemented()
    // insertBrOnReturn: -> @_notImplemented()
    // useCSS: -> @_notImplemented()

  }, {
    key: "_ec",
    value: function _ec() {
      var _document;

      (_document = document).execCommand.apply(_document, arguments);

      return this;
    }
  }, {
    key: "_notImplemented",
    value: function _notImplemented() {
      throw new Error("Not implemented");
    }
  }]);

  return editorApi;
}();

/* harmony default export */ __webpack_exports__["default"] = (editorApi);

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map