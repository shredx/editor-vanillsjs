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
/******/ 	__webpack_require__.p = "/";
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
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar */ "./src/editor/toolbar.js");
/* harmony import */ var _store_editor_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/editor-store */ "./src/store/editor-store.js");
/* harmony import */ var _store_editor_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_store_editor_store__WEBPACK_IMPORTED_MODULE_4__);
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

    _defineProperty(this, "_mutationOberserverCb", function (mutationList, observer) {
      console.log("callback", mutationList);
      mutationList.forEach(function (mutation) {
        switch (mutation.type) {
          case "childList":
            /* One or more children have been added to and/or removed
               from the tree; see mutation.addedNodes and
               mutation.removedNodes */
            break;

          case "attributes":
            /* An attribute value changed on the element in
               mutation.target; the attribute name is in
               mutation.attributeName and its previous value is in
               mutation.oldValue */
            break;
        }
      });
    });

    _defineProperty(this, "getPlugins", function () {
      var data = [];
      Object.keys(_plugins_registry__WEBPACK_IMPORTED_MODULE_1__["default"]).forEach(function (pluginKey) {
        var path = _plugins_registry__WEBPACK_IMPORTED_MODULE_1__["default"][pluginKey];
        console.log(pluginKey, path);

        try {
          var pl = __webpack_require__("./src/plugins sync recursive ^\\.\\/.*$")("./".concat(path))["default"];

          if (pl) {
            data.push(pl);
          }
        } catch (e) {
          // handle error here
          console.log(e);
        }
      });
      return data;
    });

    _defineProperty(this, "_attachEvents", function (node) {
      _this.eventsAndCbs.forEach(function (event) {
        if (event.global) {
          document.addEventListener(event.name, _this[event.handler], false);
        } else {
          node.addEventListener(event.name, _this[event.handler], false);
        }
      });
    });

    _defineProperty(this, "onInputChange", function (event) {
      // run plugins
      _this.dispatchEvent("onContentChanged", event); // call props method


      _this.methods.onChange(event);
    });

    _defineProperty(this, "onFocusLost", function (e) {
      _this.dispatchEvent("onFocusLost");
    });

    _defineProperty(this, "onFocus", function () {
      _this.restoreSelection(_this.currentSelection);
    });

    _defineProperty(this, "onSelect", function () {// implement it
    });

    _defineProperty(this, "onDrop", function (e) {
      _this.dispatchEvent("onDrop", {
        event: e
      });
    });

    _defineProperty(this, "onDragOver", function (e) {
      _this.dispatchEvent("onDragOver", {
        event: e
      });
    });

    _defineProperty(this, "saveSelection", function () {
      if (window.getSelection) {
        var sel = window.getSelection();

        if (sel.getRangeAt && sel.rangeCount) {
          return sel.getRangeAt(0);
        }
      } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
      }

      return null;
    });

    _defineProperty(this, "restoreSelection", function (range) {
      if (range) {
        if (window.getSelection) {
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        } else if (document.selection && range.select) {
          range.select();
        }
      }
    });

    _defineProperty(this, "dispatchEvent", function (method, args) {
      _this.runPlugins(method, args);
    });

    _defineProperty(this, "runPlugins", function (method, args) {
      _this._plugins.forEach(function (plugin) {
        if (plugin[method]) {
          plugin[method](_this, args);
        }
      });
    });

    this._editor = new _utils_editor_editor_api__WEBPACK_IMPORTED_MODULE_0__["default"](editorNode);
    this._plugins = this.getPlugins(); // Config for toolbar

    this._toolbar = new _toolbar__WEBPACK_IMPORTED_MODULE_3__["default"](editorNode, this._editor);
    this.toolbarOptions = this._toolbar.get(); // setup mutation observer

    this._observer = new MutationObserver(this._mutationOberserverCb);

    this._observer.observe(editorNode, {
      childList: true,
      attributes: true,
      subtree: true //Omit or set to false to observe only changes to the parent node.

    }); // All events are here


    this.eventsAndCbs = [{
      name: "blur",
      handler: "onFocusLost"
    }, {
      name: "selectionchange",
      handler: "onSelect",
      global: true
    }, {
      name: "focus",
      handler: "onFocus"
    }, {
      name: "keyup",
      handler: "onKeyup"
    }, {
      name: "keydown",
      handler: "onKeydown"
    }, {
      name: "drop",
      handler: "onDrop"
    }, {
      name: "dragover",
      handler: "onDragOver"
    }];
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

      var parentNode = document.createElement("div");
      parentNode.classList.add("parent");
      var contentEditableNode = document.createElement("div");
      contentEditableNode.classList.add("vanillajs-editor");
      var toolbar = document.createElement("div");
      toolbar.classList.add("editor-toolbar");
      contentEditableNode.contentEditable = true;
      contentEditableNode.addEventListener("input", this.onInputChange, false);

      this._attachEvents(contentEditableNode);

      var options = [];

      for (var func in this.toolbarOptions) {
        if (this.toolbarOptions[func].status) {
          var opt = this.toolbarOptions[func];
          var item = opt.name;

          if (opt.image) {
            item = "<img src=\"".concat(opt.image, "\" data-name=\"").concat(func, "\" class=\"").concat(opt.className, "\" alt=\"").concat(opt.name, "\"/>");
          }

          options.push("<li data-name=\"".concat(func, "\">").concat(item, "</li>"));
        }
      }

      toolbar.innerHTML = "<ul style=\"list-style:none\">\n      ".concat(options.join(""), "\n    </ul>\n    ");
      toolbar.addEventListener("focusout", function (event) {
        console.log("clicked blur", event.srcElement.dataset.name);
      }, false); //@TODO remove these events when editor removed from code to stop leakage of memory

      toolbar.addEventListener("click", function (event) {
        //console.log ("clicked ", event.srcElement.dataset.name);
        _this2.toolbarOptions[event.srcElement.dataset.name].callback();
      }, false);
      parentNode.appendChild(toolbar);
      parentNode.appendChild(contentEditableNode);
      editorNode.appendChild(parentNode);
    }
  }]);

  return Editor;
}();

/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ "./src/editor/toolbar.js":
/*!*******************************!*\
  !*** ./src/editor/toolbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var toolbar =
/*#__PURE__*/
function () {
  function toolbar(node, editorRef) {
    _classCallCheck(this, toolbar);

    this._editorNode = node;
    this._editor = editorRef;
  }

  _createClass(toolbar, [{
    key: "get",
    value: function get() {
      var _this = this;

      return {
        bold: {
          status: true,
          image: "assets/icons/bold.svg",
          className: "toolbar-icons",
          name: "B",
          callback: function callback() {
            _this._editor.bold();

            _this._editor.focusEditor();
          }
        },
        centerAlign: {
          status: true,
          image: "assets/icons/center-align.png",
          className: "toolbar-icons",
          name: "CA",
          callback: function callback() {
            _this._editor.justifyCenter();

            _this._editor.focusEditor();
          }
        },
        rightAlign: {
          status: true,
          image: "assets/icons/right-align.svg",
          className: "toolbar-icons",
          name: "RA",
          callback: function callback() {
            _this._editor.justifyRight();

            _this._editor.focusEditor();
          }
        },
        leftAlign: {
          status: true,
          image: "assets/icons/left-align.svg",
          className: "toolbar-icons",
          name: "LA",
          callback: function callback() {
            _this._editor.justifyLeft();

            _this._editor.focusEditor();
          }
        },
        attachment: {
          status: true,
          image: "assets/icons/attachment.svg",
          className: "toolbar-icons",
          name: "AT",
          callback: function callback() {
            _this._editor.justifyLeft();

            _this._editor.focusEditor();
          }
        }
      };
    }
  }]);

  return toolbar;
}();

/* harmony default export */ __webpack_exports__["default"] = (toolbar);

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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


var node = document.getElementById("local-editor");
var editor = new _editor_editor__WEBPACK_IMPORTED_MODULE_0__["default"](node, {
  onChange: function onChange(value) {//console.log(value);
  }
}); // mount the editor on root node

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/plugins sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/plugins sync ^\.\/.*$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./drop": "./src/plugins/drop.js",
	"./drop.js": "./src/plugins/drop.js",
	"./emoji-transform-editor-plugin": "./src/plugins/emoji-transform-editor-plugin.js",
	"./emoji-transform-editor-plugin.js": "./src/plugins/emoji-transform-editor-plugin.js",
	"./inline-image-upload-plugin": "./src/plugins/inline-image-upload-plugin.js",
	"./inline-image-upload-plugin.js": "./src/plugins/inline-image-upload-plugin.js",
	"./registry": "./src/plugins/registry.js",
	"./registry.js": "./src/plugins/registry.js",
	"./selection": "./src/plugins/selection.js",
	"./selection.js": "./src/plugins/selection.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/plugins sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/plugins/drop.js":
/*!*****************************!*\
  !*** ./src/plugins/drop.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dropEditorPlugin =
/*#__PURE__*/
function () {
  function dropEditorPlugin() {
    _classCallCheck(this, dropEditorPlugin);
  }

  _createClass(dropEditorPlugin, null, [{
    key: "onDrop",
    value: function onDrop(editor) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      //kill any default behavior
      data.event.stopPropagation();
      data.event.preventDefault(); // const files = data.event.dataTransfer.files;
      // // name, size, type inside of files
      // console.log(files);
    }
  }, {
    key: "onDragOver",
    value: function onDragOver() {//console.log("drag over");
    }
  }]);

  return dropEditorPlugin;
}();

/* harmony default export */ __webpack_exports__["default"] = (dropEditorPlugin);

/***/ }),

/***/ "./src/plugins/emoji-transform-editor-plugin.js":
/*!******************************************************!*\
  !*** ./src/plugins/emoji-transform-editor-plugin.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor/editor */ "./src/editor/editor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var emojiTransformEditorPlugin =
/*#__PURE__*/
function (_editor) {
  _inherits(emojiTransformEditorPlugin, _editor);

  function emojiTransformEditorPlugin() {
    _classCallCheck(this, emojiTransformEditorPlugin);

    return _possibleConstructorReturn(this, _getPrototypeOf(emojiTransformEditorPlugin).apply(this, arguments));
  }

  _createClass(emojiTransformEditorPlugin, [{
    key: "onContentChanged",
    value: function onContentChanged(editor, event) {// do here
    }
  }], [{
    key: "transformToEmojis",
    value: function transformToEmojis(editor, args) {// transform here
    }
  }]);

  return emojiTransformEditorPlugin;
}(_editor_editor__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (emojiTransformEditorPlugin);

/***/ }),

/***/ "./src/plugins/inline-image-upload-plugin.js":
/*!***************************************************!*\
  !*** ./src/plugins/inline-image-upload-plugin.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/utils/dom.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


console.log(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"]);

var inlineImageUploadPlugin =
/*#__PURE__*/
function () {
  function inlineImageUploadPlugin() {
    _classCallCheck(this, inlineImageUploadPlugin);
  }

  _createClass(inlineImageUploadPlugin, null, [{
    key: "onDrop",
    value: function onDrop(editor) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      //kill any default behavior
      data.event.stopPropagation();
      data.event.preventDefault();
      var files = data.event.dataTransfer.files; // name, size, type inside of files

      console.log(files);

      if (files.length === 0) {
        return;
      }

      console.log(files[0].content);
      var reader = new FileReader();

      reader.onload = function (e) {
        editor._editor.addCustomTag(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"].buildAnchorTag({
          url: e.target.result,
          text: files[0].name
        }));
      };

      reader.readAsDataURL(files[0]);
    }
  }, {
    key: "onDragOver",
    value: function onDragOver() {//buildAnchorTag();
      //console.log("drag over");
    }
  }]);

  return inlineImageUploadPlugin;
}();

/* harmony default export */ __webpack_exports__["default"] = (inlineImageUploadPlugin);

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
  emojiTransformEditorPlugin: "emoji-transform-editor-plugin",
  selection: "selection",
  drop: "drop",
  inlineImageUploadPlugin: "inline-image-upload-plugin"
});

/***/ }),

/***/ "./src/plugins/selection.js":
/*!**********************************!*\
  !*** ./src/plugins/selection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var selectionEditorPlugin =
/*#__PURE__*/
function () {
  function selectionEditorPlugin() {
    _classCallCheck(this, selectionEditorPlugin);
  }

  _createClass(selectionEditorPlugin, null, [{
    key: "onFocusLost",
    value: function onFocusLost(editor) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var currentSelection = editor.saveSelection();
      editor.restoreSelection(currentSelection); // then, you loose focus
    }
  }]);

  return selectionEditorPlugin;
}();

/* harmony default export */ __webpack_exports__["default"] = (selectionEditorPlugin);

/***/ }),

/***/ "./src/store/editor-store.js":
/*!***********************************!*\
  !*** ./src/store/editor-store.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var editorStore = function editorStore() {
  _classCallCheck(this, editorStore);
};

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

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var buildAnchorTag = function buildAnchorTag(data) {
  var url = data.url,
      _data$text = data.text,
      text = _data$text === void 0 ? "" : _data$text,
      _data$target = data.target,
      target = _data$target === void 0 ? "" : _data$target;
  return "<img src='".concat(url, "' alt=\"").concat(text, "\"></img>");
};

/* harmony default export */ __webpack_exports__["default"] = ({
  buildAnchorTag: buildAnchorTag
});

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
    this.focusNode = null;
    this.focusNodeOffset = 0;
  }

  _createClass(editorApi, [{
    key: "focusEditor",
    value: function focusEditor() {
      this.editorNode.focus();
    }
  }, {
    key: "removeAllRanges",
    value: function removeAllRanges() {
      this.saveFocusNode();
      document.getSelection().removeAllRanges();
      this.focusNodeFn();
    }
  }, {
    key: "saveFocusNode",
    value: function saveFocusNode() {
      var node = document.getSelection();
      this.focusNode = node.focusNode;
      this.focusNodeOffset = node.focusOffset;
    }
  }, {
    key: "getSelection",
    value: function getSelection() {
      return document.getSelection();
    }
  }, {
    key: "focusNodeFn",
    value: function focusNodeFn() {
      this.getSelection().setPosition(this.focusNode, this.focusNodeOffset);

      this._resetFocusNode();
    }
  }, {
    key: "_resetFocusNode",
    value: function _resetFocusNode() {
      this.focusNode = null;
      this.focusNodeOffset = 0;
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
      this._ec("bold", false, null);
    }
  }, {
    key: "addCustomTag",
    value: function addCustomTag(htmlString) {
      this._ec("insertHTML", false, htmlString);
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
    //heading: (tagName) -> @_ec("heading", false, tagName)
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

  }, {
    key: "justifyLeft",
    value: function justifyLeft() {
      this._ec("justifyLeft", false);
    }
  }, {
    key: "justifyRight",
    value: function justifyRight() {
      this._ec("justifyRight", false);
    }
  }, {
    key: "justifyCenter",
    value: function justifyCenter() {
      this._ec("justifyCenter", false);
    } // outdent: -> @_ec("outdent", false)
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