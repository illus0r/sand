// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var exports = {}, _dewExec = false;
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew() {
    if (_dewExec) return exports;
    _dewExec = true;
    (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === 'object' && true) exports = factory();
        else if (typeof define === 'function' && define.amd) define([], factory);
        else if (typeof exports === 'object') exports["twgl"] = factory();
        else root["twgl"] = factory();
    })(typeof self !== 'undefined' ? self : exports, function() {
        return (function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
                if (installedModules[moduleId]) {
                    return installedModules[moduleId].exports;
                }
                var module = installedModules[moduleId] = {
                    i: moduleId,
                    l: false,
                    exports: {}
                };
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                module.l = true;
                return module.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports1, name, getter) {
                if (!__webpack_require__.o(exports1, name)) {
                    Object.defineProperty(exports1, name, {
                        enumerable: true,
                        get: getter
                    });
                }
            };
            __webpack_require__.r = function(exports2) {
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    Object.defineProperty(exports2, Symbol.toStringTag, {
                        value: 'Module'
                    });
                }
                Object.defineProperty(exports2, '__esModule', {
                    value: true
                });
            };
            __webpack_require__.t = function(value, mode) {
                if (mode & 1) value = __webpack_require__(value);
                if (mode & 8) return value;
                if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
                var ns = Object.create(null);
                __webpack_require__.r(ns);
                Object.defineProperty(ns, 'default', {
                    enumerable: true,
                    value: value
                });
                if (mode & 2 && typeof value != 'string') for(var key1 in value)__webpack_require__.d(ns, key1, (function(key) {
                    return value[key];
                }).bind(null, key1));
                return ns;
            };
            __webpack_require__.n = function(module) {
                var getter = module && module.__esModule ? function getDefault() {
                    return module['default'];
                } : function getModuleExports() {
                    return module;
                };
                __webpack_require__.d(getter, 'a', getter);
                return getter;
            };
            __webpack_require__.o = function(object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = "./src/twgl-full.js");
        })({
            "./src/attributes.js": function(module, exports3, __webpack_require__) {
                "use strict";
                function _typeof(obj1) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj1);
                }
                exports3.__esModule = true;
                exports3.createAttribsFromArrays = createAttribsFromArrays;
                exports3.createBuffersFromArrays = createBuffersFromArrays;
                exports3.createBufferFromArray = createBufferFromArray;
                exports3.createBufferFromTypedArray = createBufferFromTypedArray;
                exports3.createBufferInfoFromArrays = createBufferInfoFromArrays;
                exports3.setAttribInfoBufferFromArray = setAttribInfoBufferFromArray;
                exports3.setAttributePrefix = setAttributePrefix;
                exports3.setAttributeDefaults_ = setDefaults;
                exports3.getNumComponents_ = getNumComponents;
                exports3.getArray_ = getArray;
                var typedArrays = _interopRequireWildcard(__webpack_require__("./src/typedarrays.js"));
                var helper = _interopRequireWildcard(__webpack_require__("./src/helper.js"));
                function _getRequireWildcardCache() {
                    if (typeof WeakMap !== "function") return null;
                    var cache = new WeakMap();
                    _getRequireWildcardCache = function _getRequireWildcardCache() {
                        return cache;
                    };
                    return cache;
                }
                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    }
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                        return {
                            "default": obj
                        };
                    }
                    var cache = _getRequireWildcardCache();
                    if (cache && cache.has(obj)) {
                        return cache.get(obj);
                    }
                    var newObj = {};
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj){
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                            if (desc && (desc.get || desc.set)) {
                                Object.defineProperty(newObj, key, desc);
                            } else {
                                newObj[key] = obj[key];
                            }
                        }
                    }
                    newObj["default"] = obj;
                    if (cache) {
                        cache.set(obj, newObj);
                    }
                    return newObj;
                }
                var STATIC_DRAW = 35044;
                var ARRAY_BUFFER = 34962;
                var ELEMENT_ARRAY_BUFFER = 34963;
                var BUFFER_SIZE = 34660;
                var BYTE = 5120;
                var UNSIGNED_BYTE = 5121;
                var SHORT = 5122;
                var UNSIGNED_SHORT = 5123;
                var INT = 5124;
                var UNSIGNED_INT = 5125;
                var FLOAT = 5126;
                var defaults = {
                    attribPrefix: ""
                };
                function setAttributePrefix(prefix) {
                    defaults.attribPrefix = prefix;
                }
                function setDefaults(newDefaults) {
                    helper.copyExistingProperties(newDefaults, defaults);
                }
                function setBufferFromTypedArray(gl1, type, buffer, array, drawType) {
                    gl1.bindBuffer(type, buffer);
                    gl1.bufferData(type, array, drawType || STATIC_DRAW);
                }
                function createBufferFromTypedArray(gl2, typedArray, type, drawType) {
                    if (helper.isBuffer(gl2, typedArray)) {
                        return typedArray;
                    }
                    type = type || ARRAY_BUFFER;
                    var buffer = gl2.createBuffer();
                    setBufferFromTypedArray(gl2, type, buffer, typedArray, drawType);
                    return buffer;
                }
                function isIndices(name) {
                    return name === "indices";
                }
                function getNormalizationForTypedArray(typedArray) {
                    if (typedArray instanceof Int8Array) {
                        return true;
                    }
                    if (typedArray instanceof Uint8Array) {
                        return true;
                    }
                    return false;
                }
                function getNormalizationForTypedArrayType(typedArrayType) {
                    if (typedArrayType === Int8Array) {
                        return true;
                    }
                    if (typedArrayType === Uint8Array) {
                        return true;
                    }
                    return false;
                }
                function getArray(array) {
                    return array.length ? array : array.data;
                }
                var texcoordRE = /coord|texture/i;
                var colorRE = /color|colour/i;
                function guessNumComponentsFromName(name, length) {
                    var numComponents;
                    if (texcoordRE.test(name)) {
                        numComponents = 2;
                    } else if (colorRE.test(name)) {
                        numComponents = 4;
                    } else {
                        numComponents = 3;
                    }
                    if (length % numComponents > 0) {
                        throw new Error("Can not guess numComponents for attribute '".concat(name, "'. Tried ").concat(numComponents, " but ").concat(length, " values is not evenly divisible by ").concat(numComponents, ". You should specify it."));
                    }
                    return numComponents;
                }
                function getNumComponents(array, arrayName) {
                    return array.numComponents || array.size || guessNumComponentsFromName(arrayName, getArray(array).length);
                }
                function makeTypedArray(array, name) {
                    if (typedArrays.isArrayBuffer(array)) {
                        return array;
                    }
                    if (typedArrays.isArrayBuffer(array.data)) {
                        return array.data;
                    }
                    if (Array.isArray(array)) {
                        array = {
                            data: array
                        };
                    }
                    var Type = array.type;
                    if (!Type) {
                        if (isIndices(name)) {
                            Type = Uint16Array;
                        } else {
                            Type = Float32Array;
                        }
                    }
                    return new Type(array.data);
                }
                function createAttribsFromArrays(gl3, arrays) {
                    var attribs = {};
                    Object.keys(arrays).forEach(function(arrayName) {
                        if (!isIndices(arrayName)) {
                            var array = arrays[arrayName];
                            var attribName = array.attrib || array.name || array.attribName || defaults.attribPrefix + arrayName;
                            if (array.value) {
                                if (!Array.isArray(array.value) && !typedArrays.isArrayBuffer(array.value)) {
                                    throw new Error('array.value is not array or typedarray');
                                }
                                attribs[attribName] = {
                                    value: array.value
                                };
                            } else {
                                var buffer;
                                var type;
                                var normalization;
                                var numComponents;
                                if (array.buffer && array.buffer instanceof WebGLBuffer) {
                                    buffer = array.buffer;
                                    numComponents = array.numComponents || array.size;
                                    type = array.type;
                                    normalization = array.normalize;
                                } else if (typeof array === "number" || typeof array.data === "number") {
                                    var numValues = array.data || array;
                                    var arrayType = array.type || Float32Array;
                                    var numBytes = numValues * arrayType.BYTES_PER_ELEMENT;
                                    type = typedArrays.getGLTypeForTypedArrayType(arrayType);
                                    normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArrayType(arrayType);
                                    numComponents = array.numComponents || array.size || guessNumComponentsFromName(arrayName, numValues);
                                    buffer = gl3.createBuffer();
                                    gl3.bindBuffer(ARRAY_BUFFER, buffer);
                                    gl3.bufferData(ARRAY_BUFFER, numBytes, array.drawType || STATIC_DRAW);
                                } else {
                                    var typedArray = makeTypedArray(array, arrayName);
                                    buffer = createBufferFromTypedArray(gl3, typedArray, undefined, array.drawType);
                                    type = typedArrays.getGLTypeForTypedArray(typedArray);
                                    normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArray(typedArray);
                                    numComponents = getNumComponents(array, arrayName);
                                }
                                attribs[attribName] = {
                                    buffer: buffer,
                                    numComponents: numComponents,
                                    type: type,
                                    normalize: normalization,
                                    stride: array.stride || 0,
                                    offset: array.offset || 0,
                                    divisor: array.divisor === undefined ? undefined : array.divisor,
                                    drawType: array.drawType
                                };
                            }
                        }
                    });
                    gl3.bindBuffer(ARRAY_BUFFER, null);
                    return attribs;
                }
                function setAttribInfoBufferFromArray(gl4, attribInfo, array, offset) {
                    array = makeTypedArray(array);
                    if (offset !== undefined) {
                        gl4.bindBuffer(ARRAY_BUFFER, attribInfo.buffer);
                        gl4.bufferSubData(ARRAY_BUFFER, offset, array);
                    } else {
                        setBufferFromTypedArray(gl4, ARRAY_BUFFER, attribInfo.buffer, array, attribInfo.drawType);
                    }
                }
                function getBytesPerValueForGLType(gl, type) {
                    if (type === BYTE) return 1;
                    if (type === UNSIGNED_BYTE) return 1;
                    if (type === SHORT) return 2;
                    if (type === UNSIGNED_SHORT) return 2;
                    if (type === INT) return 4;
                    if (type === UNSIGNED_INT) return 4;
                    if (type === FLOAT) return 4;
                    return 0;
                }
                var positionKeys = [
                    'position',
                    'positions',
                    'a_position'
                ];
                function getNumElementsFromNonIndexedArrays(arrays) {
                    var key;
                    var ii;
                    for(ii = 0; ii < positionKeys.length; ++ii){
                        key = positionKeys[ii];
                        if (key in arrays) {
                            break;
                        }
                    }
                    if (ii === positionKeys.length) {
                        key = Object.keys(arrays)[0];
                    }
                    var array = arrays[key];
                    var length = getArray(array).length;
                    var numComponents = getNumComponents(array, key);
                    var numElements = length / numComponents;
                    if (length % numComponents > 0) {
                        throw new Error("numComponents ".concat(numComponents, " not correct for length ").concat(length));
                    }
                    return numElements;
                }
                function getNumElementsFromAttributes(gl5, attribs) {
                    var key;
                    var ii;
                    for(ii = 0; ii < positionKeys.length; ++ii){
                        key = positionKeys[ii];
                        if (key in attribs) {
                            break;
                        }
                        key = defaults.attribPrefix + key;
                        if (key in attribs) {
                            break;
                        }
                    }
                    if (ii === positionKeys.length) {
                        key = Object.keys(attribs)[0];
                    }
                    var attrib = attribs[key];
                    gl5.bindBuffer(ARRAY_BUFFER, attrib.buffer);
                    var numBytes = gl5.getBufferParameter(ARRAY_BUFFER, BUFFER_SIZE);
                    gl5.bindBuffer(ARRAY_BUFFER, null);
                    var bytesPerValue = getBytesPerValueForGLType(gl5, attrib.type);
                    var totalElements = numBytes / bytesPerValue;
                    var numComponents = attrib.numComponents || attrib.size;
                    var numElements = totalElements / numComponents;
                    if (numElements % 1 !== 0) {
                        throw new Error("numComponents ".concat(numComponents, " not correct for length ").concat(length));
                    }
                    return numElements;
                }
                function createBufferInfoFromArrays(gl6, arrays, srcBufferInfo) {
                    var newAttribs = createAttribsFromArrays(gl6, arrays);
                    var bufferInfo = Object.assign({}, srcBufferInfo ? srcBufferInfo : {});
                    bufferInfo.attribs = Object.assign({}, srcBufferInfo ? srcBufferInfo.attribs : {}, newAttribs);
                    var indices = arrays.indices;
                    if (indices) {
                        var newIndices = makeTypedArray(indices, "indices");
                        bufferInfo.indices = createBufferFromTypedArray(gl6, newIndices, ELEMENT_ARRAY_BUFFER);
                        bufferInfo.numElements = newIndices.length;
                        bufferInfo.elementType = typedArrays.getGLTypeForTypedArray(newIndices);
                    } else if (!bufferInfo.numElements) {
                        bufferInfo.numElements = getNumElementsFromAttributes(gl6, bufferInfo.attribs);
                    }
                    return bufferInfo;
                }
                function createBufferFromArray(gl7, array, arrayName) {
                    var type = arrayName === "indices" ? ELEMENT_ARRAY_BUFFER : ARRAY_BUFFER;
                    var typedArray = makeTypedArray(array, arrayName);
                    return createBufferFromTypedArray(gl7, typedArray, type);
                }
                function createBuffersFromArrays(gl8, arrays) {
                    var buffers = {};
                    Object.keys(arrays).forEach(function(key) {
                        buffers[key] = createBufferFromArray(gl8, arrays[key], key);
                    });
                    if (arrays.indices) {
                        buffers.numElements = arrays.indices.length;
                        buffers.elementType = typedArrays.getGLTypeForTypedArray(makeTypedArray(arrays.indices), 'indices');
                    } else {
                        buffers.numElements = getNumElementsFromNonIndexedArrays(arrays);
                    }
                    return buffers;
                }
            },
            "./src/draw.js": function(module, exports4, __webpack_require__) {
                "use strict";
                function _typeof(obj2) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj2);
                }
                exports4.__esModule = true;
                exports4.drawBufferInfo = drawBufferInfo;
                exports4.drawObjectList = drawObjectList;
                var programs = _interopRequireWildcard(__webpack_require__("./src/programs.js"));
                function _getRequireWildcardCache() {
                    if (typeof WeakMap !== "function") return null;
                    var cache = new WeakMap();
                    _getRequireWildcardCache = function _getRequireWildcardCache() {
                        return cache;
                    };
                    return cache;
                }
                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    }
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                        return {
                            "default": obj
                        };
                    }
                    var cache = _getRequireWildcardCache();
                    if (cache && cache.has(obj)) {
                        return cache.get(obj);
                    }
                    var newObj = {};
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj){
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                            if (desc && (desc.get || desc.set)) {
                                Object.defineProperty(newObj, key, desc);
                            } else {
                                newObj[key] = obj[key];
                            }
                        }
                    }
                    newObj["default"] = obj;
                    if (cache) {
                        cache.set(obj, newObj);
                    }
                    return newObj;
                }
                var TRIANGLES = 4;
                var UNSIGNED_SHORT = 5123;
                function drawBufferInfo(gl9, bufferInfo, type, count, offset, instanceCount) {
                    type = type === undefined ? TRIANGLES : type;
                    var indices = bufferInfo.indices;
                    var elementType = bufferInfo.elementType;
                    var numElements = count === undefined ? bufferInfo.numElements : count;
                    offset = offset === undefined ? 0 : offset;
                    if (elementType || indices) {
                        if (instanceCount !== undefined) {
                            gl9.drawElementsInstanced(type, numElements, elementType === undefined ? UNSIGNED_SHORT : bufferInfo.elementType, offset, instanceCount);
                        } else {
                            gl9.drawElements(type, numElements, elementType === undefined ? UNSIGNED_SHORT : bufferInfo.elementType, offset);
                        }
                    } else {
                        if (instanceCount !== undefined) {
                            gl9.drawArraysInstanced(type, offset, numElements, instanceCount);
                        } else {
                            gl9.drawArrays(type, offset, numElements);
                        }
                    }
                }
                function drawObjectList(gl10, objectsToDraw) {
                    var lastUsedProgramInfo = null;
                    var lastUsedBufferInfo = null;
                    objectsToDraw.forEach(function(object) {
                        if (object.active === false) {
                            return;
                        }
                        var programInfo = object.programInfo;
                        var bufferInfo = object.vertexArrayInfo || object.bufferInfo;
                        var bindBuffers = false;
                        var type = object.type === undefined ? TRIANGLES : object.type;
                        if (programInfo !== lastUsedProgramInfo) {
                            lastUsedProgramInfo = programInfo;
                            gl10.useProgram(programInfo.program);
                            bindBuffers = true;
                        }
                        if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
                            if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject && !bufferInfo.vertexArrayObject) {
                                gl10.bindVertexArray(null);
                            }
                            lastUsedBufferInfo = bufferInfo;
                            programs.setBuffersAndAttributes(gl10, programInfo, bufferInfo);
                        }
                        programs.setUniforms(programInfo, object.uniforms);
                        drawBufferInfo(gl10, bufferInfo, type, object.count, object.offset, object.instanceCount);
                    });
                    if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject) {
                        gl10.bindVertexArray(null);
                    }
                }
            },
            "./src/framebuffers.js": function(module, exports5, __webpack_require__) {
                "use strict";
                function _typeof(obj3) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj3);
                }
                exports5.__esModule = true;
                exports5.bindFramebufferInfo = bindFramebufferInfo;
                exports5.createFramebufferInfo = createFramebufferInfo;
                exports5.resizeFramebufferInfo = resizeFramebufferInfo;
                var textures = _interopRequireWildcard(__webpack_require__("./src/textures.js"));
                var helper = _interopRequireWildcard(__webpack_require__("./src/helper.js"));
                function _getRequireWildcardCache() {
                    if (typeof WeakMap !== "function") return null;
                    var cache = new WeakMap();
                    _getRequireWildcardCache = function _getRequireWildcardCache() {
                        return cache;
                    };
                    return cache;
                }
                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    }
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                        return {
                            "default": obj
                        };
                    }
                    var cache = _getRequireWildcardCache();
                    if (cache && cache.has(obj)) {
                        return cache.get(obj);
                    }
                    var newObj = {};
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj){
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                            if (desc && (desc.get || desc.set)) {
                                Object.defineProperty(newObj, key, desc);
                            } else {
                                newObj[key] = obj[key];
                            }
                        }
                    }
                    newObj["default"] = obj;
                    if (cache) {
                        cache.set(obj, newObj);
                    }
                    return newObj;
                }
                var FRAMEBUFFER = 36160;
                var RENDERBUFFER = 36161;
                var TEXTURE_2D = 3553;
                var UNSIGNED_BYTE = 5121;
                var DEPTH_COMPONENT = 6402;
                var RGBA = 6408;
                var DEPTH_COMPONENT24 = 33190;
                var DEPTH_COMPONENT32F = 36012;
                var DEPTH24_STENCIL8 = 35056;
                var DEPTH32F_STENCIL8 = 36013;
                var RGBA4 = 32854;
                var RGB5_A1 = 32855;
                var RGB565 = 36194;
                var DEPTH_COMPONENT16 = 33189;
                var STENCIL_INDEX = 6401;
                var STENCIL_INDEX8 = 36168;
                var DEPTH_STENCIL = 34041;
                var COLOR_ATTACHMENT0 = 36064;
                var DEPTH_ATTACHMENT = 36096;
                var STENCIL_ATTACHMENT = 36128;
                var DEPTH_STENCIL_ATTACHMENT = 33306;
                var CLAMP_TO_EDGE = 33071;
                var LINEAR = 9729;
                var defaultAttachments = [
                    {
                        format: RGBA,
                        type: UNSIGNED_BYTE,
                        min: LINEAR,
                        wrap: CLAMP_TO_EDGE
                    },
                    {
                        format: DEPTH_STENCIL
                    }
                ];
                var attachmentsByFormat = {};
                attachmentsByFormat[DEPTH_STENCIL] = DEPTH_STENCIL_ATTACHMENT;
                attachmentsByFormat[STENCIL_INDEX] = STENCIL_ATTACHMENT;
                attachmentsByFormat[STENCIL_INDEX8] = STENCIL_ATTACHMENT;
                attachmentsByFormat[DEPTH_COMPONENT] = DEPTH_ATTACHMENT;
                attachmentsByFormat[DEPTH_COMPONENT16] = DEPTH_ATTACHMENT;
                attachmentsByFormat[DEPTH_COMPONENT24] = DEPTH_ATTACHMENT;
                attachmentsByFormat[DEPTH_COMPONENT32F] = DEPTH_ATTACHMENT;
                attachmentsByFormat[DEPTH24_STENCIL8] = DEPTH_STENCIL_ATTACHMENT;
                attachmentsByFormat[DEPTH32F_STENCIL8] = DEPTH_STENCIL_ATTACHMENT;
                function getAttachmentPointForFormat(format, internalFormat) {
                    return attachmentsByFormat[format] || attachmentsByFormat[internalFormat];
                }
                var renderbufferFormats = {};
                renderbufferFormats[RGBA4] = true;
                renderbufferFormats[RGB5_A1] = true;
                renderbufferFormats[RGB565] = true;
                renderbufferFormats[DEPTH_STENCIL] = true;
                renderbufferFormats[DEPTH_COMPONENT16] = true;
                renderbufferFormats[STENCIL_INDEX] = true;
                renderbufferFormats[STENCIL_INDEX8] = true;
                function isRenderbufferFormat(format) {
                    return renderbufferFormats[format];
                }
                function createFramebufferInfo(gl11, attachments, width, height) {
                    var target = FRAMEBUFFER;
                    var fb = gl11.createFramebuffer();
                    gl11.bindFramebuffer(target, fb);
                    width = width || gl11.drawingBufferWidth;
                    height = height || gl11.drawingBufferHeight;
                    attachments = attachments || defaultAttachments;
                    var colorAttachmentCount = 0;
                    var framebufferInfo = {
                        framebuffer: fb,
                        attachments: [],
                        width: width,
                        height: height
                    };
                    attachments.forEach(function(attachmentOptions) {
                        var attachment = attachmentOptions.attachment;
                        var format = attachmentOptions.format;
                        var attachmentPoint = attachmentOptions.attachmentPoint || getAttachmentPointForFormat(format, attachmentOptions.internalFormat);
                        if (!attachmentPoint) {
                            attachmentPoint = COLOR_ATTACHMENT0 + colorAttachmentCount++;
                        }
                        if (!attachment) {
                            if (isRenderbufferFormat(format)) {
                                attachment = gl11.createRenderbuffer();
                                gl11.bindRenderbuffer(RENDERBUFFER, attachment);
                                gl11.renderbufferStorage(RENDERBUFFER, format, width, height);
                            } else {
                                var textureOptions = Object.assign({}, attachmentOptions);
                                textureOptions.width = width;
                                textureOptions.height = height;
                                if (textureOptions.auto === undefined) {
                                    textureOptions.auto = false;
                                    textureOptions.min = textureOptions.min || textureOptions.minMag || LINEAR;
                                    textureOptions.mag = textureOptions.mag || textureOptions.minMag || LINEAR;
                                    textureOptions.wrapS = textureOptions.wrapS || textureOptions.wrap || CLAMP_TO_EDGE;
                                    textureOptions.wrapT = textureOptions.wrapT || textureOptions.wrap || CLAMP_TO_EDGE;
                                }
                                attachment = textures.createTexture(gl11, textureOptions);
                            }
                        }
                        if (helper.isRenderbuffer(gl11, attachment)) {
                            gl11.framebufferRenderbuffer(target, attachmentPoint, RENDERBUFFER, attachment);
                        } else if (helper.isTexture(gl11, attachment)) {
                            if (attachmentOptions.layer !== undefined) {
                                gl11.framebufferTextureLayer(target, attachmentPoint, attachment, attachmentOptions.level || 0, attachmentOptions.layer);
                            } else {
                                gl11.framebufferTexture2D(target, attachmentPoint, attachmentOptions.target || TEXTURE_2D, attachment, attachmentOptions.level || 0);
                            }
                        } else {
                            throw new Error('unknown attachment type');
                        }
                        framebufferInfo.attachments.push(attachment);
                    });
                    return framebufferInfo;
                }
                function resizeFramebufferInfo(gl12, framebufferInfo, attachments, width, height) {
                    width = width || gl12.drawingBufferWidth;
                    height = height || gl12.drawingBufferHeight;
                    framebufferInfo.width = width;
                    framebufferInfo.height = height;
                    attachments = attachments || defaultAttachments;
                    attachments.forEach(function(attachmentOptions, ndx) {
                        var attachment = framebufferInfo.attachments[ndx];
                        var format = attachmentOptions.format;
                        if (helper.isRenderbuffer(gl12, attachment)) {
                            gl12.bindRenderbuffer(RENDERBUFFER, attachment);
                            gl12.renderbufferStorage(RENDERBUFFER, format, width, height);
                        } else if (helper.isTexture(gl12, attachment)) {
                            textures.resizeTexture(gl12, attachment, attachmentOptions, width, height);
                        } else {
                            throw new Error('unknown attachment type');
                        }
                    });
                }
                function bindFramebufferInfo(gl13, framebufferInfo, target) {
                    target = target || FRAMEBUFFER;
                    if (framebufferInfo) {
                        gl13.bindFramebuffer(target, framebufferInfo.framebuffer);
                        gl13.viewport(0, 0, framebufferInfo.width, framebufferInfo.height);
                    } else {
                        gl13.bindFramebuffer(target, null);
                        gl13.viewport(0, 0, gl13.drawingBufferWidth, gl13.drawingBufferHeight);
                    }
                }
            },
            "./src/helper.js": function(module, exports6, __webpack_require__) {
                "use strict";
                exports6.__esModule = true;
                exports6.copyExistingProperties = copyExistingProperties;
                exports6.copyNamedProperties = copyNamedProperties;
                exports6.error = error;
                exports6.warn = warn;
                exports6.isBuffer = isBuffer;
                exports6.isRenderbuffer = isRenderbuffer;
                exports6.isShader = isShader;
                exports6.isTexture = isTexture;
                exports6.isSampler = isSampler;
                function copyNamedProperties(names, src, dst) {
                    names.forEach(function(name) {
                        var value = src[name];
                        if (value !== undefined) {
                            dst[name] = value;
                        }
                    });
                }
                function copyExistingProperties(src, dst) {
                    Object.keys(dst).forEach(function(key) {
                        if (dst.hasOwnProperty(key) && src.hasOwnProperty(key)) {
                            dst[key] = src[key];
                        }
                    });
                }
                function error() {
                    var _console;
                    (_console = console).error.apply(_console, arguments);
                }
                function warn() {
                    var _console2;
                    (_console2 = console).warn.apply(_console2, arguments);
                }
                function isBuffer(gl, t) {
                    return typeof WebGLBuffer !== 'undefined' && t instanceof WebGLBuffer;
                }
                function isRenderbuffer(gl, t) {
                    return typeof WebGLRenderbuffer !== 'undefined' && t instanceof WebGLRenderbuffer;
                }
                function isShader(gl, t) {
                    return typeof WebGLShader !== 'undefined' && t instanceof WebGLShader;
                }
                function isTexture(gl, t) {
                    return typeof WebGLTexture !== 'undefined' && t instanceof WebGLTexture;
                }
                function isSampler(gl, t) {
                    return typeof WebGLSampler !== 'undefined' && t instanceof WebGLSampler;
                }
            },
            "./src/m4.js": function(module, exports7, __webpack_require__) {
                "use strict";
                function _typeof(obj4) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj4);
                }
                exports7.__esModule = true;
                exports7.axisRotate = axisRotate;
                exports7.axisRotation = axisRotation;
                exports7.copy = copy;
                exports7.frustum = frustum;
                exports7.getAxis = getAxis;
                exports7.getTranslation = getTranslation;
                exports7.identity = identity;
                exports7.inverse = inverse;
                exports7.lookAt = lookAt;
                exports7.multiply = multiply;
                exports7.negate = negate;
                exports7.ortho = ortho;
                exports7.perspective = perspective;
                exports7.rotateX = rotateX;
                exports7.rotateY = rotateY;
                exports7.rotateZ = rotateZ;
                exports7.rotationX = rotationX;
                exports7.rotationY = rotationY;
                exports7.rotationZ = rotationZ;
                exports7.scale = scale;
                exports7.scaling = scaling;
                exports7.setAxis = setAxis;
                exports7.setDefaultType = setDefaultType;
                exports7.setTranslation = setTranslation;
                exports7.transformDirection = transformDirection;
                exports7.transformNormal = transformNormal;
                exports7.transformPoint = transformPoint;
                exports7.translate = translate;
                exports7.translation = translation;
                exports7.transpose = transpose;
                var v3 = _interopRequireWildcard(__webpack_require__("./src/v3.js"));
                function _getRequireWildcardCache() {
                    if (typeof WeakMap !== "function") return null;
                    var cache = new WeakMap();
                    _getRequireWildcardCache = function _getRequireWildcardCache() {
                        return cache;
                    };
                    return cache;
                }
                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    }
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                        return {
                            "default": obj
                        };
                    }
                    var cache = _getRequireWildcardCache();
                    if (cache && cache.has(obj)) {
                        return cache.get(obj);
                    }
                    var newObj = {};
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj){
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                            if (desc && (desc.get || desc.set)) {
                                Object.defineProperty(newObj, key, desc);
                            } else {
                                newObj[key] = obj[key];
                            }
                        }
                    }
                    newObj["default"] = obj;
                    if (cache) {
                        cache.set(obj, newObj);
                    }
                    return newObj;
                }
                var MatType = Float32Array;
                function setDefaultType(ctor) {
                    var oldType = MatType;
                    MatType = ctor;
                    return oldType;
                }
                function negate(m, dst) {
                    dst = dst || new MatType(16);
                    dst[0] = -m[0];
                    dst[1] = -m[1];
                    dst[2] = -m[2];
                    dst[3] = -m[3];
                    dst[4] = -m[4];
                    dst[5] = -m[5];
                    dst[6] = -m[6];
                    dst[7] = -m[7];
                    dst[8] = -m[8];
                    dst[9] = -m[9];
                    dst[10] = -m[10];
                    dst[11] = -m[11];
                    dst[12] = -m[12];
                    dst[13] = -m[13];
                    dst[14] = -m[14];
                    dst[15] = -m[15];
                    return dst;
                }
                function copy(m, dst) {
                    dst = dst || new MatType(16);
                    dst[0] = m[0];
                    dst[1] = m[1];
                    dst[2] = m[2];
                    dst[3] = m[3];
                    dst[4] = m[4];
                    dst[5] = m[5];
                    dst[6] = m[6];
                    dst[7] = m[7];
                    dst[8] = m[8];
                    dst[9] = m[9];
                    dst[10] = m[10];
                    dst[11] = m[11];
                    dst[12] = m[12];
                    dst[13] = m[13];
                    dst[14] = m[14];
                    dst[15] = m[15];
                    return dst;
                }
                function identity(dst) {
                    dst = dst || new MatType(16);
                    dst[0] = 1;
                    dst[1] = 0;
                    dst[2] = 0;
                    dst[3] = 0;
                    dst[4] = 0;
                    dst[5] = 1;
                    dst[6] = 0;
                    dst[7] = 0;
                    dst[8] = 0;
                    dst[9] = 0;
                    dst[10] = 1;
                    dst[11] = 0;
                    dst[12] = 0;
                    dst[13] = 0;
                    dst[14] = 0;
                    dst[15] = 1;
                    return dst;
                }
                function transpose(m, dst) {
                    dst = dst || new MatType(16);
                    if (dst === m) {
                        var t;
                        t = m[1];
                        m[1] = m[4];
                        m[4] = t;
                        t = m[2];
                        m[2] = m[8];
                        m[8] = t;
                        t = m[3];
                        m[3] = m[12];
                        m[12] = t;
                        t = m[6];
                        m[6] = m[9];
                        m[9] = t;
                        t = m[7];
                        m[7] = m[13];
                        m[13] = t;
                        t = m[11];
                        m[11] = m[14];
                        m[14] = t;
                        return dst;
                    }
                    var m00 = m[0 * 4 + 0];
                    var m01 = m[0 * 4 + 1];
                    var m02 = m[0 * 4 + 2];
                    var m03 = m[0 * 4 + 3];
                    var m10 = m[1 * 4 + 0];
                    var m11 = m[1 * 4 + 1];
                    var m12 = m[1 * 4 + 2];
                    var m13 = m[1 * 4 + 3];
                    var m20 = m[2 * 4 + 0];
                    var m21 = m[2 * 4 + 1];
                    var m22 = m[2 * 4 + 2];
                    var m23 = m[2 * 4 + 3];
                    var m30 = m[3 * 4 + 0];
                    var m31 = m[3 * 4 + 1];
                    var m32 = m[3 * 4 + 2];
                    var m33 = m[3 * 4 + 3];
                    dst[0] = m00;
                    dst[1] = m10;
                    dst[2] = m20;
                    dst[3] = m30;
                    dst[4] = m01;
                    dst[5] = m11;
                    dst[6] = m21;
                    dst[7] = m31;
                    dst[8] = m02;
                    dst[9] = m12;
                    dst[10] = m22;
                    dst[11] = m32;
                    dst[12] = m03;
                    dst[13] = m13;
                    dst[14] = m23;
                    dst[15] = m33;
                    return dst;
                }
                function inverse(m, dst) {
                    dst = dst || new MatType(16);
                    var m00 = m[0 * 4 + 0];
                    var m01 = m[0 * 4 + 1];
                    var m02 = m[0 * 4 + 2];
                    var m03 = m[0 * 4 + 3];
                    var m10 = m[1 * 4 + 0];
                    var m11 = m[1 * 4 + 1];
                    var m12 = m[1 * 4 + 2];
                    var m13 = m[1 * 4 + 3];
                    var m20 = m[2 * 4 + 0];
                    var m21 = m[2 * 4 + 1];
                    var m22 = m[2 * 4 + 2];
                    var m23 = m[2 * 4 + 3];
                    var m30 = m[3 * 4 + 0];
                    var m31 = m[3 * 4 + 1];
                    var m32 = m[3 * 4 + 2];
                    var m33 = m[3 * 4 + 3];
                    var tmp_0 = m22 * m33;
                    var tmp_1 = m32 * m23;
                    var tmp_2 = m12 * m33;
                    var tmp_3 = m32 * m13;
                    var tmp_4 = m12 * m23;
                    var tmp_5 = m22 * m13;
                    var tmp_6 = m02 * m33;
                    var tmp_7 = m32 * m03;
                    var tmp_8 = m02 * m23;
                    var tmp_9 = m22 * m03;
                    var tmp_10 = m02 * m13;
                    var tmp_11 = m12 * m03;
                    var tmp_12 = m20 * m31;
                    var tmp_13 = m30 * m21;
                    var tmp_14 = m10 * m31;
                    var tmp_15 = m30 * m11;
                    var tmp_16 = m10 * m21;
                    var tmp_17 = m20 * m11;
                    var tmp_18 = m00 * m31;
                    var tmp_19 = m30 * m01;
                    var tmp_20 = m00 * m21;
                    var tmp_21 = m20 * m01;
                    var tmp_22 = m00 * m11;
                    var tmp_23 = m10 * m01;
                    var t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
                    var t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
                    var t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
                    var t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
                    var d = 1 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
                    dst[0] = d * t0;
                    dst[1] = d * t1;
                    dst[2] = d * t2;
                    dst[3] = d * t3;
                    dst[4] = d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
                    dst[5] = d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
                    dst[6] = d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
                    dst[7] = d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
                    dst[8] = d * (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
                    dst[9] = d * (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
                    dst[10] = d * (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
                    dst[11] = d * (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
                    dst[12] = d * (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
                    dst[13] = d * (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
                    dst[14] = d * (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
                    dst[15] = d * (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));
                    return dst;
                }
                function multiply(a, b, dst) {
                    dst = dst || new MatType(16);
                    var a00 = a[0];
                    var a01 = a[1];
                    var a02 = a[2];
                    var a03 = a[3];
                    var a10 = a[4 + 0];
                    var a11 = a[4 + 1];
                    var a12 = a[4 + 2];
                    var a13 = a[4 + 3];
                    var a20 = a[8 + 0];
                    var a21 = a[8 + 1];
                    var a22 = a[8 + 2];
                    var a23 = a[8 + 3];
                    var a30 = a[12 + 0];
                    var a31 = a[12 + 1];
                    var a32 = a[12 + 2];
                    var a33 = a[12 + 3];
                    var b00 = b[0];
                    var b01 = b[1];
                    var b02 = b[2];
                    var b03 = b[3];
                    var b10 = b[4 + 0];
                    var b11 = b[4 + 1];
                    var b12 = b[4 + 2];
                    var b13 = b[4 + 3];
                    var b20 = b[8 + 0];
                    var b21 = b[8 + 1];
                    var b22 = b[8 + 2];
                    var b23 = b[8 + 3];
                    var b30 = b[12 + 0];
                    var b31 = b[12 + 1];
                    var b32 = b[12 + 2];
                    var b33 = b[12 + 3];
                    dst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
                    dst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
                    dst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
                    dst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
                    dst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
                    dst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
                    dst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
                    dst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
                    dst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
                    dst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
                    dst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
                    dst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
                    dst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
                    dst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
                    dst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
                    dst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;
                    return dst;
                }
                function setTranslation(a, v, dst) {
                    dst = dst || identity();
                    if (a !== dst) {
                        dst[0] = a[0];
                        dst[1] = a[1];
                        dst[2] = a[2];
                        dst[3] = a[3];
                        dst[4] = a[4];
                        dst[5] = a[5];
                        dst[6] = a[6];
                        dst[7] = a[7];
                        dst[8] = a[8];
                        dst[9] = a[9];
                        dst[10] = a[10];
                        dst[11] = a[11];
                    }
                    dst[12] = v[0];
                    dst[13] = v[1];
                    dst[14] = v[2];
                    dst[15] = 1;
                    return dst;
                }
                function getTranslation(m, dst) {
                    dst = dst || v3.create();
                    dst[0] = m[12];
                    dst[1] = m[13];
                    dst[2] = m[14];
                    return dst;
                }
                function getAxis(m, axis, dst) {
                    dst = dst || v3.create();
                    var off = axis * 4;
                    dst[0] = m[off + 0];
                    dst[1] = m[off + 1];
                    dst[2] = m[off + 2];
                    return dst;
                }
                function setAxis(a, v, axis, dst) {
                    if (dst !== a) {
                        dst = copy(a, dst);
                    }
                    var off = axis * 4;
                    dst[off + 0] = v[0];
                    dst[off + 1] = v[1];
                    dst[off + 2] = v[2];
                    return dst;
                }
                function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
                    dst = dst || new MatType(16);
                    var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
                    var rangeInv = 1 / (zNear - zFar);
                    dst[0] = f / aspect;
                    dst[1] = 0;
                    dst[2] = 0;
                    dst[3] = 0;
                    dst[4] = 0;
                    dst[5] = f;
                    dst[6] = 0;
                    dst[7] = 0;
                    dst[8] = 0;
                    dst[9] = 0;
                    dst[10] = (zNear + zFar) * rangeInv;
                    dst[11] = -1;
                    dst[12] = 0;
                    dst[13] = 0;
                    dst[14] = zNear * zFar * rangeInv * 2;
                    dst[15] = 0;
                    return dst;
                }
                function ortho(left, right, bottom, top, near, far, dst) {
                    dst = dst || new MatType(16);
                    dst[0] = 2 / (right - left);
                    dst[1] = 0;
                    dst[2] = 0;
                    dst[3] = 0;
                    dst[4] = 0;
                    dst[5] = 2 / (top - bottom);
                    dst[6] = 0;
                    dst[7] = 0;
                    dst[8] = 0;
                    dst[9] = 0;
                    dst[10] = 2 / (near - far);
                    dst[11] = 0;
                    dst[12] = (right + left) / (left - right);
                    dst[13] = (top + bottom) / (bottom - top);
                    dst[14] = (far + near) / (near - far);
                    dst[15] = 1;
                    return dst;
                }
                function frustum(left, right, bottom, top, near, far, dst) {
                    dst = dst || new MatType(16);
                    var dx = right - left;
                    var dy = top - bottom;
                    var dz = near - far;
                    dst[0] = 2 * near / dx;
                    dst[1] = 0;
                    dst[2] = 0;
                    dst[3] = 0;
                    dst[4] = 0;
                    dst[5] = 2 * near / dy;
                    dst[6] = 0;
                    dst[7] = 0;
                    dst[8] = (left + right) / dx;
                    dst[9] = (top + bottom) / dy;
                    dst[10] = far / dz;
                    dst[11] = -1;
                    dst[12] = 0;
                    dst[13] = 0;
                    dst[14] = near * far / dz;
                    dst[15] = 0;
                    return dst;
                }
                var xAxis;
                var yAxis;
                var zAxis;
                function lookAt(eye, target, up, dst) {
                    dst = dst || new MatType(16);
                    xAxis = xAxis || v3.create();
                    yAxis = yAxis || v3.create();
                    zAxis = zAxis || v3.create();
                    v3.normalize(v3.subtract(eye, target, zAxis), zAxis);
                    v3.normalize(v3.cross(up, zAxis, xAxis), xAxis);
                    v3.normalize(v3.cross(zAxis, xAxis, yAxis), yAxis);
                    dst[0] = xAxis[0];
                    dst[1] = xAxis[1];
                    dst[2] = xAxis[2];
                    dst[3] = 0;
                    dst[4] = yAxis[0];
                    dst[5] = yAxis[1];
                    dst[6] = yAxis[2];
                    dst[7] = 0;
                    dst[8] = zAxis[0];
                    dst[9] = zAxis[1];
                    dst[10] = zAxis[2];
                    dst[11] = 0;
                    dst[12] = eye[0];
                    dst[13] = eye[1];
                    dst[14] = eye[2];
                    dst[15] = 1;
                    return dst;
                }
                function translation(v, dst) {
                    dst = dst || new MatType(16);
                    dst[0] = 1;
                    dst[1] = 0;
                    dst[2] = 0;
                    dst[3] = 0;
                    dst[4] = 0;
                    dst[5] = 1;
                    dst[6] = 0;
                    dst[7] = 0;
                    dst[8] = 0;
                    dst[9] = 0;
                    dst[10] = 1;
                    dst[11] = 0;
                    dst[12] = v[0];
                    dst[13] = v[1];
                    dst[14] = v[2];
                    dst[15] = 1;
                    return dst;
                }
                function translate(m, v, dst) {
                    dst = dst || new MatType(16);
                    var v0 = v[0];
                    var v1 = v[1];
                    var v2 = v[2];
                    var m00 = m[0];
                    var m01 = m[1];
                    var m02 = m[2];
                    var m03 = m[3];
                    var m10 = m[1 * 4 + 0];
                    var m11 = m[1 * 4 + 1];
                    var m12 = m[1 * 4 + 2];
                    var m13 = m[1 * 4 + 3];
                    var m20 = m[2 * 4 + 0];
                    var m21 = m[2 * 4 + 1];
                    var m22 = m[2 * 4 + 2];
                    var m23 = m[2 * 4 + 3];
                    var m30 = m[3 * 4 + 0];
                    var m31 = m[3 * 4 + 1];
                    var m32 = m[3 * 4 + 2];
                    var m33 = m[3 * 4 + 3];
                    if (m !== dst) {
                        dst[0] = m00;
                        dst[1] = m01;
                        dst[2] = m02;
                        dst[3] = m03;
                        dst[4] = m10;
                        dst[5] = m11;
                        dst[6] = m12;
                        dst[7] = m13;
                        dst[8] = m20;
                        dst[9] = m21;
                        dst[10] = m22;
                        dst[11] = m23;
                    }
                    dst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
                    dst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
                    dst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
                    dst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;
                    return dst;
                }
                function rotationX(angleInRadians, dst) {
                    dst = dst || new MatType(16);
                    var c = Math.cos(angleInRadians);
                    var s = Math.sin(angleInRadians);
                    dst[0] = 1;
                    dst[1] = 0;
                    dst[2] = 0;
                    dst[3] = 0;
                    dst[4] = 0;
                    dst[5] = c;
                    dst[6] = s;
                    dst[7] = 0;
                    dst[8] = 0;
                    dst[9] = -s;
                    dst[10] = c;
                    dst[11] = 0;
                    dst[12] = 0;
                    dst[13] = 0;
                    dst[14] = 0;
                    dst[15] = 1;
                    return dst;
                }
                function rotateX(m, angleInRadians, dst) {
                    dst = dst || new MatType(16);
                    var m10 = m[4];
                    var m11 = m[5];
                    var m12 = m[6];
                    var m13 = m[7];
                    var m20 = m[8];
                    var m21 = m[9];
                    var m22 = m[10];
                    var m23 = m[11];
                    var c = Math.cos(angleInRadians);
                    var s = Math.sin(angleInRadians);
                    dst[4] = c * m10 + s * m20;
                    dst[5] = c * m11 + s * m21;
                    dst[6] = c * m12 + s * m22;
                    dst[7] = c * m13 + s * m23;
                    dst[8] = c * m20 - s * m10;
                    dst[9] = c * m21 - s * m11;
                    dst[10] = c * m22 - s * m12;
                    dst[11] = c * m23 - s * m13;
                    if (m !== dst) {
                        dst[0] = m[0];
                        dst[1] = m[1];
                        dst[2] = m[2];
                        dst[3] = m[3];
                        dst[12] = m[12];
                        dst[13] = m[13];
                        dst[14] = m[14];
                        dst[15] = m[15];
                    }
                    return dst;
                }
                function rotationY(angleInRadians, dst) {
                    dst = dst || new MatType(16);
                    var c = Math.cos(angleInRadians);
                    var s = Math.sin(angleInRadians);
                    dst[0] = c;
                    dst[1] = 0;
                    dst[2] = -s;
                    dst[3] = 0;
                    dst[4] = 0;
                    dst[5] = 1;
                    dst[6] = 0;
                    dst[7] = 0;
                    dst[8] = s;
                    dst[9] = 0;
                    dst[10] = c;
                    dst[11] = 0;
                    dst[12] = 0;
                    dst[13] = 0;
                    dst[14] = 0;
                    dst[15] = 1;
                    return dst;
                }
                function rotateY(m, angleInRadians, dst) {
                    dst = dst || new MatType(16);
                    var m00 = m[0 * 4 + 0];
                    var m01 = m[0 * 4 + 1];
                    var m02 = m[0 * 4 + 2];
                    var m03 = m[0 * 4 + 3];
                    var m20 = m[2 * 4 + 0];
                    var m21 = m[2 * 4 + 1];
                    var m22 = m[2 * 4 + 2];
                    var m23 = m[2 * 4 + 3];
                    var c = Math.cos(angleInRadians);
                    var s = Math.sin(angleInRadians);
                    dst[0] = c * m00 - s * m20;
                    dst[1] = c * m01 - s * m21;
                    dst[2] = c * m02 - s * m22;
                    dst[3] = c * m03 - s * m23;
                    dst[8] = c * m20 + s * m00;
                    dst[9] = c * m21 + s * m01;
                    dst[10] = c * m22 + s * m02;
                    dst[11] = c * m23 + s * m03;
                    if (m !== dst) {
                        dst[4] = m[4];
                        dst[5] = m[5];
                        dst[6] = m[6];
                        dst[7] = m[7];
                        dst[12] = m[12];
                        dst[13] = m[13];
                        dst[14] = m[14];
                        dst[15] = m[15];
                    }
                    return dst;
                }
                function rotationZ(angleInRadians, dst) {
                    dst = dst || new MatType(16);
                    var c = Math.cos(angleInRadians);
                    var s = Math.sin(angleInRadians);
                    dst[0] = c;
                    dst[1] = s;
                    dst[2] = 0;
                    dst[3] = 0;
                    dst[4] = -s;
                    dst[5] = c;
                    dst[6] = 0;
                    dst[7] = 0;
                    dst[8] = 0;
                    dst[9] = 0;
                    dst[10] = 1;
                    dst[11] = 0;
                    dst[12] = 0;
                    dst[13] = 0;
                    dst[14] = 0;
                    dst[15] = 1;
                    return dst;
                }
                function rotateZ(m, angleInRadians, dst) {
                    dst = dst || new MatType(16);
                    var m00 = m[0 * 4 + 0];
                    var m01 = m[0 * 4 + 1];
                    var m02 = m[0 * 4 + 2];
                    var m03 = m[0 * 4 + 3];
                    var m10 = m[1 * 4 + 0];
                    var m11 = m[1 * 4 + 1];
                    var m12 = m[1 * 4 + 2];
                    var m13 = m[1 * 4 + 3];
                    var c = Math.cos(angleInRadians);
                    var s = Math.sin(angleInRadians);
                    dst[0] = c * m00 + s * m10;
                    dst[1] = c * m01 + s * m11;
                    dst[2] = c * m02 + s * m12;
                    dst[3] = c * m03 + s * m13;
                    dst[4] = c * m10 - s * m00;
                    dst[5] = c * m11 - s * m01;
                    dst[6] = c * m12 - s * m02;
                    dst[7] = c * m13 - s * m03;
                    if (m !== dst) {
                        dst[8] = m[8];
                        dst[9] = m[9];
                        dst[10] = m[10];
                        dst[11] = m[11];
                        dst[12] = m[12];
                        dst[13] = m[13];
                        dst[14] = m[14];
                        dst[15] = m[15];
                    }
                    return dst;
                }
                function axisRotation(axis, angleInRadians, dst) {
                    dst = dst || new MatType(16);
                    var x = axis[0];
                    var y = axis[1];
                    var z = axis[2];
                    var n = Math.sqrt(x * x + y * y + z * z);
                    x /= n;
                    y /= n;
                    z /= n;
                    var xx = x * x;
                    var yy = y * y;
                    var zz = z * z;
                    var c = Math.cos(angleInRadians);
                    var s = Math.sin(angleInRadians);
                    var oneMinusCosine = 1 - c;
                    dst[0] = xx + (1 - xx) * c;
                    dst[1] = x * y * oneMinusCosine + z * s;
                    dst[2] = x * z * oneMinusCosine - y * s;
                    dst[3] = 0;
                    dst[4] = x * y * oneMinusCosine - z * s;
                    dst[5] = yy + (1 - yy) * c;
                    dst[6] = y * z * oneMinusCosine + x * s;
                    dst[7] = 0;
                    dst[8] = x * z * oneMinusCosine + y * s;
                    dst[9] = y * z * oneMinusCosine - x * s;
                    dst[10] = zz + (1 - zz) * c;
                    dst[11] = 0;
                    dst[12] = 0;
                    dst[13] = 0;
                    dst[14] = 0;
                    dst[15] = 1;
                    return dst;
                }
                function axisRotate(m, axis, angleInRadians, dst) {
                    dst = dst || new MatType(16);
                    var x = axis[0];
                    var y = axis[1];
                    var z = axis[2];
                    var n = Math.sqrt(x * x + y * y + z * z);
                    x /= n;
                    y /= n;
                    z /= n;
                    var xx = x * x;
                    var yy = y * y;
                    var zz = z * z;
                    var c = Math.cos(angleInRadians);
                    var s = Math.sin(angleInRadians);
                    var oneMinusCosine = 1 - c;
                    var r00 = xx + (1 - xx) * c;
                    var r01 = x * y * oneMinusCosine + z * s;
                    var r02 = x * z * oneMinusCosine - y * s;
                    var r10 = x * y * oneMinusCosine - z * s;
                    var r11 = yy + (1 - yy) * c;
                    var r12 = y * z * oneMinusCosine + x * s;
                    var r20 = x * z * oneMinusCosine + y * s;
                    var r21 = y * z * oneMinusCosine - x * s;
                    var r22 = zz + (1 - zz) * c;
                    var m00 = m[0];
                    var m01 = m[1];
                    var m02 = m[2];
                    var m03 = m[3];
                    var m10 = m[4];
                    var m11 = m[5];
                    var m12 = m[6];
                    var m13 = m[7];
                    var m20 = m[8];
                    var m21 = m[9];
                    var m22 = m[10];
                    var m23 = m[11];
                    dst[0] = r00 * m00 + r01 * m10 + r02 * m20;
                    dst[1] = r00 * m01 + r01 * m11 + r02 * m21;
                    dst[2] = r00 * m02 + r01 * m12 + r02 * m22;
                    dst[3] = r00 * m03 + r01 * m13 + r02 * m23;
                    dst[4] = r10 * m00 + r11 * m10 + r12 * m20;
                    dst[5] = r10 * m01 + r11 * m11 + r12 * m21;
                    dst[6] = r10 * m02 + r11 * m12 + r12 * m22;
                    dst[7] = r10 * m03 + r11 * m13 + r12 * m23;
                    dst[8] = r20 * m00 + r21 * m10 + r22 * m20;
                    dst[9] = r20 * m01 + r21 * m11 + r22 * m21;
                    dst[10] = r20 * m02 + r21 * m12 + r22 * m22;
                    dst[11] = r20 * m03 + r21 * m13 + r22 * m23;
                    if (m !== dst) {
                        dst[12] = m[12];
                        dst[13] = m[13];
                        dst[14] = m[14];
                        dst[15] = m[15];
                    }
                    return dst;
                }
                function scaling(v, dst) {
                    dst = dst || new MatType(16);
                    dst[0] = v[0];
                    dst[1] = 0;
                    dst[2] = 0;
                    dst[3] = 0;
                    dst[4] = 0;
                    dst[5] = v[1];
                    dst[6] = 0;
                    dst[7] = 0;
                    dst[8] = 0;
                    dst[9] = 0;
                    dst[10] = v[2];
                    dst[11] = 0;
                    dst[12] = 0;
                    dst[13] = 0;
                    dst[14] = 0;
                    dst[15] = 1;
                    return dst;
                }
                function scale(m, v, dst) {
                    dst = dst || new MatType(16);
                    var v0 = v[0];
                    var v1 = v[1];
                    var v2 = v[2];
                    dst[0] = v0 * m[0 * 4 + 0];
                    dst[1] = v0 * m[0 * 4 + 1];
                    dst[2] = v0 * m[0 * 4 + 2];
                    dst[3] = v0 * m[0 * 4 + 3];
                    dst[4] = v1 * m[1 * 4 + 0];
                    dst[5] = v1 * m[1 * 4 + 1];
                    dst[6] = v1 * m[1 * 4 + 2];
                    dst[7] = v1 * m[1 * 4 + 3];
                    dst[8] = v2 * m[2 * 4 + 0];
                    dst[9] = v2 * m[2 * 4 + 1];
                    dst[10] = v2 * m[2 * 4 + 2];
                    dst[11] = v2 * m[2 * 4 + 3];
                    if (m !== dst) {
                        dst[12] = m[12];
                        dst[13] = m[13];
                        dst[14] = m[14];
                        dst[15] = m[15];
                    }
                    return dst;
                }
                function transformPoint(m, v, dst) {
                    dst = dst || v3.create();
                    var v0 = v[0];
                    var v1 = v[1];
                    var v2 = v[2];
                    var d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];
                    dst[0] = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
                    dst[1] = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
                    dst[2] = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;
                    return dst;
                }
                function transformDirection(m, v, dst) {
                    dst = dst || v3.create();
                    var v0 = v[0];
                    var v1 = v[1];
                    var v2 = v[2];
                    dst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
                    dst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
                    dst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];
                    return dst;
                }
                function transformNormal(m, v, dst) {
                    dst = dst || v3.create();
                    var mi = inverse(m);
                    var v0 = v[0];
                    var v1 = v[1];
                    var v2 = v[2];
                    dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
                    dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
                    dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
                    return dst;
                }
            },
            "./src/primitives.js": function(module, exports8, __webpack_require__) {
                "use strict";
                function _typeof(obj5) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj5);
                }
                exports8.__esModule = true;
                exports8.create3DFVertices = create3DFVertices;
                exports8.createAugmentedTypedArray = createAugmentedTypedArray;
                exports8.createCubeVertices = createCubeVertices;
                exports8.createPlaneVertices = createPlaneVertices;
                exports8.createSphereVertices = createSphereVertices;
                exports8.createTruncatedConeVertices = createTruncatedConeVertices;
                exports8.createXYQuadVertices = createXYQuadVertices;
                exports8.createCrescentVertices = createCrescentVertices;
                exports8.createCylinderVertices = createCylinderVertices;
                exports8.createTorusVertices = createTorusVertices;
                exports8.createDiscVertices = createDiscVertices;
                exports8.deindexVertices = deindexVertices;
                exports8.flattenNormals = flattenNormals;
                exports8.makeRandomVertexColors = makeRandomVertexColors;
                exports8.reorientDirections = reorientDirections;
                exports8.reorientNormals = reorientNormals;
                exports8.reorientPositions = reorientPositions;
                exports8.reorientVertices = reorientVertices;
                exports8.concatVertices = concatVertices;
                exports8.duplicateVertices = duplicateVertices;
                exports8.createDiscBuffers = exports8.createDiscBufferInfo = exports8.createTorusBuffers = exports8.createTorusBufferInfo = exports8.createCylinderBuffers = exports8.createCylinderBufferInfo = exports8.createCrescentBuffers = exports8.createCrescentBufferInfo = exports8.createCresentVertices = exports8.createCresentBuffers = exports8.createCresentBufferInfo = exports8.createXYQuadBuffers = exports8.createXYQuadBufferInfo = exports8.createTruncatedConeBuffers = exports8.createTruncatedConeBufferInfo = exports8.createSphereBuffers = exports8.createSphereBufferInfo = exports8.createPlaneBuffers = exports8.createPlaneBufferInfo = exports8.createCubeBuffers = exports8.createCubeBufferInfo = exports8.create3DFBuffers = exports8.create3DFBufferInfo = void 0;
                var attributes = _interopRequireWildcard(__webpack_require__("./src/attributes.js"));
                var helper = _interopRequireWildcard(__webpack_require__("./src/helper.js"));
                var typedArrays = _interopRequireWildcard(__webpack_require__("./src/typedarrays.js"));
                var m4 = _interopRequireWildcard(__webpack_require__("./src/m4.js"));
                var v3 = _interopRequireWildcard(__webpack_require__("./src/v3.js"));
                function _getRequireWildcardCache() {
                    if (typeof WeakMap !== "function") return null;
                    var cache = new WeakMap();
                    _getRequireWildcardCache = function _getRequireWildcardCache() {
                        return cache;
                    };
                    return cache;
                }
                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    }
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                        return {
                            "default": obj
                        };
                    }
                    var cache = _getRequireWildcardCache();
                    if (cache && cache.has(obj)) {
                        return cache.get(obj);
                    }
                    var newObj = {};
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj){
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                            if (desc && (desc.get || desc.set)) {
                                Object.defineProperty(newObj, key, desc);
                            } else {
                                newObj[key] = obj[key];
                            }
                        }
                    }
                    newObj["default"] = obj;
                    if (cache) {
                        cache.set(obj, newObj);
                    }
                    return newObj;
                }
                var getArray = attributes.getArray_;
                var getNumComponents = attributes.getNumComponents_;
                function augmentTypedArray(typedArray, numComponents) {
                    var cursor = 0;
                    typedArray.push = function() {
                        for(var ii = 0; ii < arguments.length; ++ii){
                            var value = arguments[ii];
                            if (value instanceof Array || typedArrays.isArrayBuffer(value)) {
                                for(var jj = 0; jj < value.length; ++jj){
                                    typedArray[cursor++] = value[jj];
                                }
                            } else {
                                typedArray[cursor++] = value;
                            }
                        }
                    };
                    typedArray.reset = function(opt_index) {
                        cursor = opt_index || 0;
                    };
                    typedArray.numComponents = numComponents;
                    Object.defineProperty(typedArray, 'numElements', {
                        get: function get() {
                            return (this || _global).length / (this || _global).numComponents | 0;
                        }
                    });
                    return typedArray;
                }
                function createAugmentedTypedArray(numComponents, numElements, opt_type) {
                    var Type = opt_type || Float32Array;
                    return augmentTypedArray(new Type(numComponents * numElements), numComponents);
                }
                function allButIndices(name) {
                    return name !== "indices";
                }
                function deindexVertices(vertices) {
                    var indices = vertices.indices;
                    var newVertices = {};
                    var numElements = indices.length;
                    function expandToUnindexed(channel) {
                        var srcBuffer = vertices[channel];
                        var numComponents = srcBuffer.numComponents;
                        var dstBuffer = createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);
                        for(var ii = 0; ii < numElements; ++ii){
                            var ndx = indices[ii];
                            var offset = ndx * numComponents;
                            for(var jj = 0; jj < numComponents; ++jj){
                                dstBuffer.push(srcBuffer[offset + jj]);
                            }
                        }
                        newVertices[channel] = dstBuffer;
                    }
                    Object.keys(vertices).filter(allButIndices).forEach(expandToUnindexed);
                    return newVertices;
                }
                function flattenNormals(vertices) {
                    if (vertices.indices) {
                        throw new Error('can not flatten normals of indexed vertices. deindex them first');
                    }
                    var normals = vertices.normal;
                    var numNormals = normals.length;
                    for(var ii = 0; ii < numNormals; ii += 9){
                        var nax = normals[ii + 0];
                        var nay = normals[ii + 1];
                        var naz = normals[ii + 2];
                        var nbx = normals[ii + 3];
                        var nby = normals[ii + 4];
                        var nbz = normals[ii + 5];
                        var ncx = normals[ii + 6];
                        var ncy = normals[ii + 7];
                        var ncz = normals[ii + 8];
                        var nx = nax + nbx + ncx;
                        var ny = nay + nby + ncy;
                        var nz = naz + nbz + ncz;
                        var length = Math.sqrt(nx * nx + ny * ny + nz * nz);
                        nx /= length;
                        ny /= length;
                        nz /= length;
                        normals[ii + 0] = nx;
                        normals[ii + 1] = ny;
                        normals[ii + 2] = nz;
                        normals[ii + 3] = nx;
                        normals[ii + 4] = ny;
                        normals[ii + 5] = nz;
                        normals[ii + 6] = nx;
                        normals[ii + 7] = ny;
                        normals[ii + 8] = nz;
                    }
                    return vertices;
                }
                function applyFuncToV3Array(array, matrix, fn) {
                    var len = array.length;
                    var tmp = new Float32Array(3);
                    for(var ii = 0; ii < len; ii += 3){
                        fn(matrix, [
                            array[ii],
                            array[ii + 1],
                            array[ii + 2]
                        ], tmp);
                        array[ii] = tmp[0];
                        array[ii + 1] = tmp[1];
                        array[ii + 2] = tmp[2];
                    }
                }
                function transformNormal(mi, v, dst) {
                    dst = dst || v3.create();
                    var v0 = v[0];
                    var v1 = v[1];
                    var v2 = v[2];
                    dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
                    dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
                    dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
                    return dst;
                }
                function reorientDirections(array, matrix) {
                    applyFuncToV3Array(array, matrix, m4.transformDirection);
                    return array;
                }
                function reorientNormals(array, matrix) {
                    applyFuncToV3Array(array, m4.inverse(matrix), transformNormal);
                    return array;
                }
                function reorientPositions(array, matrix) {
                    applyFuncToV3Array(array, matrix, m4.transformPoint);
                    return array;
                }
                function reorientVertices(arrays, matrix) {
                    Object.keys(arrays).forEach(function(name) {
                        var array = arrays[name];
                        if (name.indexOf("pos") >= 0) {
                            reorientPositions(array, matrix);
                        } else if (name.indexOf("tan") >= 0 || name.indexOf("binorm") >= 0) {
                            reorientDirections(array, matrix);
                        } else if (name.indexOf("norm") >= 0) {
                            reorientNormals(array, matrix);
                        }
                    });
                    return arrays;
                }
                function createXYQuadVertices(size, xOffset, yOffset) {
                    size = size || 2;
                    xOffset = xOffset || 0;
                    yOffset = yOffset || 0;
                    size *= 0.5;
                    return {
                        position: {
                            numComponents: 2,
                            data: [
                                xOffset + -1 * size,
                                yOffset + -1 * size,
                                xOffset + 1 * size,
                                yOffset + -1 * size,
                                xOffset + -1 * size,
                                yOffset + 1 * size,
                                xOffset + 1 * size,
                                yOffset + 1 * size
                            ]
                        },
                        normal: [
                            0,
                            0,
                            1,
                            0,
                            0,
                            1,
                            0,
                            0,
                            1,
                            0,
                            0,
                            1
                        ],
                        texcoord: [
                            0,
                            0,
                            1,
                            0,
                            0,
                            1,
                            1,
                            1
                        ],
                        indices: [
                            0,
                            1,
                            2,
                            2,
                            1,
                            3
                        ]
                    };
                }
                function createPlaneVertices(width, depth, subdivisionsWidth, subdivisionsDepth, matrix) {
                    width = width || 1;
                    depth = depth || 1;
                    subdivisionsWidth = subdivisionsWidth || 1;
                    subdivisionsDepth = subdivisionsDepth || 1;
                    matrix = matrix || m4.identity();
                    var numVertices = (subdivisionsWidth + 1) * (subdivisionsDepth + 1);
                    var positions = createAugmentedTypedArray(3, numVertices);
                    var normals = createAugmentedTypedArray(3, numVertices);
                    var texcoords = createAugmentedTypedArray(2, numVertices);
                    for(var z = 0; z <= subdivisionsDepth; z++){
                        for(var x = 0; x <= subdivisionsWidth; x++){
                            var u = x / subdivisionsWidth;
                            var v = z / subdivisionsDepth;
                            positions.push(width * u - width * 0.5, 0, depth * v - depth * 0.5);
                            normals.push(0, 1, 0);
                            texcoords.push(u, v);
                        }
                    }
                    var numVertsAcross = subdivisionsWidth + 1;
                    var indices = createAugmentedTypedArray(3, subdivisionsWidth * subdivisionsDepth * 2, Uint16Array);
                    for(var _z = 0; _z < subdivisionsDepth; _z++){
                        for(var _x = 0; _x < subdivisionsWidth; _x++){
                            indices.push((_z + 0) * numVertsAcross + _x, (_z + 1) * numVertsAcross + _x, (_z + 0) * numVertsAcross + _x + 1);
                            indices.push((_z + 1) * numVertsAcross + _x, (_z + 1) * numVertsAcross + _x + 1, (_z + 0) * numVertsAcross + _x + 1);
                        }
                    }
                    var arrays = reorientVertices({
                        position: positions,
                        normal: normals,
                        texcoord: texcoords,
                        indices: indices
                    }, matrix);
                    return arrays;
                }
                function createSphereVertices(radius, subdivisionsAxis, subdivisionsHeight, opt_startLatitudeInRadians, opt_endLatitudeInRadians, opt_startLongitudeInRadians, opt_endLongitudeInRadians) {
                    if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
                        throw new Error('subdivisionAxis and subdivisionHeight must be > 0');
                    }
                    opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
                    opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
                    opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
                    opt_endLongitudeInRadians = opt_endLongitudeInRadians || Math.PI * 2;
                    var latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
                    var longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians;
                    var numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
                    var positions = createAugmentedTypedArray(3, numVertices);
                    var normals = createAugmentedTypedArray(3, numVertices);
                    var texcoords = createAugmentedTypedArray(2, numVertices);
                    for(var y = 0; y <= subdivisionsHeight; y++){
                        for(var x = 0; x <= subdivisionsAxis; x++){
                            var u = x / subdivisionsAxis;
                            var v = y / subdivisionsHeight;
                            var theta = longRange * u + opt_startLongitudeInRadians;
                            var phi = latRange * v + opt_startLatitudeInRadians;
                            var sinTheta = Math.sin(theta);
                            var cosTheta = Math.cos(theta);
                            var sinPhi = Math.sin(phi);
                            var cosPhi = Math.cos(phi);
                            var ux = cosTheta * sinPhi;
                            var uy = cosPhi;
                            var uz = sinTheta * sinPhi;
                            positions.push(radius * ux, radius * uy, radius * uz);
                            normals.push(ux, uy, uz);
                            texcoords.push(1 - u, v);
                        }
                    }
                    var numVertsAround = subdivisionsAxis + 1;
                    var indices = createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);
                    for(var _x2 = 0; _x2 < subdivisionsAxis; _x2++){
                        for(var _y = 0; _y < subdivisionsHeight; _y++){
                            indices.push((_y + 0) * numVertsAround + _x2, (_y + 0) * numVertsAround + _x2 + 1, (_y + 1) * numVertsAround + _x2);
                            indices.push((_y + 1) * numVertsAround + _x2, (_y + 0) * numVertsAround + _x2 + 1, (_y + 1) * numVertsAround + _x2 + 1);
                        }
                    }
                    return {
                        position: positions,
                        normal: normals,
                        texcoord: texcoords,
                        indices: indices
                    };
                }
                var CUBE_FACE_INDICES = [
                    [
                        3,
                        7,
                        5,
                        1
                    ],
                    [
                        6,
                        2,
                        0,
                        4
                    ],
                    [
                        6,
                        7,
                        3,
                        2
                    ],
                    [
                        0,
                        1,
                        5,
                        4
                    ],
                    [
                        7,
                        6,
                        4,
                        5
                    ],
                    [
                        2,
                        3,
                        1,
                        0
                    ]
                ];
                function createCubeVertices(size) {
                    size = size || 1;
                    var k = size / 2;
                    var cornerVertices = [
                        [
                            -k,
                            -k,
                            -k
                        ],
                        [
                            +k,
                            -k,
                            -k
                        ],
                        [
                            -k,
                            +k,
                            -k
                        ],
                        [
                            +k,
                            +k,
                            -k
                        ],
                        [
                            -k,
                            -k,
                            +k
                        ],
                        [
                            +k,
                            -k,
                            +k
                        ],
                        [
                            -k,
                            +k,
                            +k
                        ],
                        [
                            +k,
                            +k,
                            +k
                        ]
                    ];
                    var faceNormals = [
                        [
                            +1,
                            +0,
                            +0
                        ],
                        [
                            -1,
                            +0,
                            +0
                        ],
                        [
                            +0,
                            +1,
                            +0
                        ],
                        [
                            +0,
                            -1,
                            +0
                        ],
                        [
                            +0,
                            +0,
                            +1
                        ],
                        [
                            +0,
                            +0,
                            -1
                        ]
                    ];
                    var uvCoords = [
                        [
                            1,
                            0
                        ],
                        [
                            0,
                            0
                        ],
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            1
                        ]
                    ];
                    var numVertices = 6 * 4;
                    var positions = createAugmentedTypedArray(3, numVertices);
                    var normals = createAugmentedTypedArray(3, numVertices);
                    var texcoords = createAugmentedTypedArray(2, numVertices);
                    var indices = createAugmentedTypedArray(3, 6 * 2, Uint16Array);
                    for(var f = 0; f < 6; ++f){
                        var faceIndices = CUBE_FACE_INDICES[f];
                        for(var v = 0; v < 4; ++v){
                            var position = cornerVertices[faceIndices[v]];
                            var normal = faceNormals[f];
                            var uv = uvCoords[v];
                            positions.push(position);
                            normals.push(normal);
                            texcoords.push(uv);
                        }
                        var offset = 4 * f;
                        indices.push(offset + 0, offset + 1, offset + 2);
                        indices.push(offset + 0, offset + 2, offset + 3);
                    }
                    return {
                        position: positions,
                        normal: normals,
                        texcoord: texcoords,
                        indices: indices
                    };
                }
                function createTruncatedConeVertices(bottomRadius, topRadius, height, radialSubdivisions, verticalSubdivisions, opt_topCap, opt_bottomCap) {
                    if (radialSubdivisions < 3) {
                        throw new Error('radialSubdivisions must be 3 or greater');
                    }
                    if (verticalSubdivisions < 1) {
                        throw new Error('verticalSubdivisions must be 1 or greater');
                    }
                    var topCap = opt_topCap === undefined ? true : opt_topCap;
                    var bottomCap = opt_bottomCap === undefined ? true : opt_bottomCap;
                    var extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);
                    var numVertices = (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
                    var positions = createAugmentedTypedArray(3, numVertices);
                    var normals = createAugmentedTypedArray(3, numVertices);
                    var texcoords = createAugmentedTypedArray(2, numVertices);
                    var indices = createAugmentedTypedArray(3, radialSubdivisions * (verticalSubdivisions + extra / 2) * 2, Uint16Array);
                    var vertsAroundEdge = radialSubdivisions + 1;
                    var slant = Math.atan2(bottomRadius - topRadius, height);
                    var cosSlant = Math.cos(slant);
                    var sinSlant = Math.sin(slant);
                    var start = topCap ? -2 : 0;
                    var end = verticalSubdivisions + (bottomCap ? 2 : 0);
                    for(var yy = start; yy <= end; ++yy){
                        var v = yy / verticalSubdivisions;
                        var y = height * v;
                        var ringRadius = void 0;
                        if (yy < 0) {
                            y = 0;
                            v = 1;
                            ringRadius = bottomRadius;
                        } else if (yy > verticalSubdivisions) {
                            y = height;
                            v = 1;
                            ringRadius = topRadius;
                        } else {
                            ringRadius = bottomRadius + (topRadius - bottomRadius) * (yy / verticalSubdivisions);
                        }
                        if (yy === -2 || yy === verticalSubdivisions + 2) {
                            ringRadius = 0;
                            v = 0;
                        }
                        y -= height / 2;
                        for(var ii = 0; ii < vertsAroundEdge; ++ii){
                            var sin = Math.sin(ii * Math.PI * 2 / radialSubdivisions);
                            var cos = Math.cos(ii * Math.PI * 2 / radialSubdivisions);
                            positions.push(sin * ringRadius, y, cos * ringRadius);
                            if (yy < 0) {
                                normals.push(0, -1, 0);
                            } else if (yy > verticalSubdivisions) {
                                normals.push(0, 1, 0);
                            } else if (ringRadius === 0) {
                                normals.push(0, 0, 0);
                            } else {
                                normals.push(sin * cosSlant, sinSlant, cos * cosSlant);
                            }
                            texcoords.push(ii / radialSubdivisions, 1 - v);
                        }
                    }
                    for(var _yy = 0; _yy < verticalSubdivisions + extra; ++_yy){
                        if (_yy === 1 && topCap || _yy === verticalSubdivisions + extra - 2 && bottomCap) {
                            continue;
                        }
                        for(var _ii = 0; _ii < radialSubdivisions; ++_ii){
                            indices.push(vertsAroundEdge * (_yy + 0) + 0 + _ii, vertsAroundEdge * (_yy + 0) + 1 + _ii, vertsAroundEdge * (_yy + 1) + 1 + _ii);
                            indices.push(vertsAroundEdge * (_yy + 0) + 0 + _ii, vertsAroundEdge * (_yy + 1) + 1 + _ii, vertsAroundEdge * (_yy + 1) + 0 + _ii);
                        }
                    }
                    return {
                        position: positions,
                        normal: normals,
                        texcoord: texcoords,
                        indices: indices
                    };
                }
                function expandRLEData(rleData, padding) {
                    padding = padding || [];
                    var data = [];
                    for(var ii = 0; ii < rleData.length; ii += 4){
                        var runLength = rleData[ii];
                        var element = rleData.slice(ii + 1, ii + 4);
                        element.push.apply(element, padding);
                        for(var jj = 0; jj < runLength; ++jj){
                            data.push.apply(data, element);
                        }
                    }
                    return data;
                }
                function create3DFVertices() {
                    var positions = [
                        0,
                        0,
                        0,
                        0,
                        150,
                        0,
                        30,
                        0,
                        0,
                        0,
                        150,
                        0,
                        30,
                        150,
                        0,
                        30,
                        0,
                        0,
                        30,
                        0,
                        0,
                        30,
                        30,
                        0,
                        100,
                        0,
                        0,
                        30,
                        30,
                        0,
                        100,
                        30,
                        0,
                        100,
                        0,
                        0,
                        30,
                        60,
                        0,
                        30,
                        90,
                        0,
                        67,
                        60,
                        0,
                        30,
                        90,
                        0,
                        67,
                        90,
                        0,
                        67,
                        60,
                        0,
                        0,
                        0,
                        30,
                        30,
                        0,
                        30,
                        0,
                        150,
                        30,
                        0,
                        150,
                        30,
                        30,
                        0,
                        30,
                        30,
                        150,
                        30,
                        30,
                        0,
                        30,
                        100,
                        0,
                        30,
                        30,
                        30,
                        30,
                        30,
                        30,
                        30,
                        100,
                        0,
                        30,
                        100,
                        30,
                        30,
                        30,
                        60,
                        30,
                        67,
                        60,
                        30,
                        30,
                        90,
                        30,
                        30,
                        90,
                        30,
                        67,
                        60,
                        30,
                        67,
                        90,
                        30,
                        0,
                        0,
                        0,
                        100,
                        0,
                        0,
                        100,
                        0,
                        30,
                        0,
                        0,
                        0,
                        100,
                        0,
                        30,
                        0,
                        0,
                        30,
                        100,
                        0,
                        0,
                        100,
                        30,
                        0,
                        100,
                        30,
                        30,
                        100,
                        0,
                        0,
                        100,
                        30,
                        30,
                        100,
                        0,
                        30,
                        30,
                        30,
                        0,
                        30,
                        30,
                        30,
                        100,
                        30,
                        30,
                        30,
                        30,
                        0,
                        100,
                        30,
                        30,
                        100,
                        30,
                        0,
                        30,
                        30,
                        0,
                        30,
                        60,
                        30,
                        30,
                        30,
                        30,
                        30,
                        30,
                        0,
                        30,
                        60,
                        0,
                        30,
                        60,
                        30,
                        30,
                        60,
                        0,
                        67,
                        60,
                        30,
                        30,
                        60,
                        30,
                        30,
                        60,
                        0,
                        67,
                        60,
                        0,
                        67,
                        60,
                        30,
                        67,
                        60,
                        0,
                        67,
                        90,
                        30,
                        67,
                        60,
                        30,
                        67,
                        60,
                        0,
                        67,
                        90,
                        0,
                        67,
                        90,
                        30,
                        30,
                        90,
                        0,
                        30,
                        90,
                        30,
                        67,
                        90,
                        30,
                        30,
                        90,
                        0,
                        67,
                        90,
                        30,
                        67,
                        90,
                        0,
                        30,
                        90,
                        0,
                        30,
                        150,
                        30,
                        30,
                        90,
                        30,
                        30,
                        90,
                        0,
                        30,
                        150,
                        0,
                        30,
                        150,
                        30,
                        0,
                        150,
                        0,
                        0,
                        150,
                        30,
                        30,
                        150,
                        30,
                        0,
                        150,
                        0,
                        30,
                        150,
                        30,
                        30,
                        150,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        30,
                        0,
                        150,
                        30,
                        0,
                        0,
                        0,
                        0,
                        150,
                        30,
                        0,
                        150,
                        0
                    ];
                    var texcoords = [
                        0.22,
                        0.19,
                        0.22,
                        0.79,
                        0.34,
                        0.19,
                        0.22,
                        0.79,
                        0.34,
                        0.79,
                        0.34,
                        0.19,
                        0.34,
                        0.19,
                        0.34,
                        0.31,
                        0.62,
                        0.19,
                        0.34,
                        0.31,
                        0.62,
                        0.31,
                        0.62,
                        0.19,
                        0.34,
                        0.43,
                        0.34,
                        0.55,
                        0.49,
                        0.43,
                        0.34,
                        0.55,
                        0.49,
                        0.55,
                        0.49,
                        0.43,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        1,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        1,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        1,
                        1,
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        0,
                        1,
                        1,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        0,
                        1,
                        1,
                        0,
                        1,
                        0,
                        0,
                        0,
                        1,
                        1,
                        1,
                        0,
                        0,
                        1,
                        1,
                        1,
                        0,
                        0,
                        0,
                        1,
                        1,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        0,
                        1,
                        1,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        0,
                        1,
                        1,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        0,
                        0,
                        1,
                        1,
                        1,
                        0,
                        0,
                        1,
                        1,
                        1,
                        0,
                        0,
                        0,
                        1,
                        1,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        0,
                        0,
                        1,
                        1,
                        1,
                        0,
                        0,
                        1,
                        1,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        1,
                        1,
                        0,
                        0,
                        1,
                        1,
                        1,
                        0
                    ];
                    var normals = expandRLEData([
                        18,
                        0,
                        0,
                        1,
                        18,
                        0,
                        0,
                        -1,
                        6,
                        0,
                        1,
                        0,
                        6,
                        1,
                        0,
                        0,
                        6,
                        0,
                        -1,
                        0,
                        6,
                        1,
                        0,
                        0,
                        6,
                        0,
                        1,
                        0,
                        6,
                        1,
                        0,
                        0,
                        6,
                        0,
                        -1,
                        0,
                        6,
                        1,
                        0,
                        0,
                        6,
                        0,
                        -1,
                        0,
                        6,
                        -1,
                        0,
                        0
                    ]);
                    var colors = expandRLEData([
                        18,
                        200,
                        70,
                        120,
                        18,
                        80,
                        70,
                        200,
                        6,
                        70,
                        200,
                        210,
                        6,
                        200,
                        200,
                        70,
                        6,
                        210,
                        100,
                        70,
                        6,
                        210,
                        160,
                        70,
                        6,
                        70,
                        180,
                        210,
                        6,
                        100,
                        70,
                        210,
                        6,
                        76,
                        210,
                        100,
                        6,
                        140,
                        210,
                        80,
                        6,
                        90,
                        130,
                        110,
                        6,
                        160,
                        160,
                        220
                    ], [
                        255
                    ]);
                    var numVerts = positions.length / 3;
                    var arrays = {
                        position: createAugmentedTypedArray(3, numVerts),
                        texcoord: createAugmentedTypedArray(2, numVerts),
                        normal: createAugmentedTypedArray(3, numVerts),
                        color: createAugmentedTypedArray(4, numVerts, Uint8Array),
                        indices: createAugmentedTypedArray(3, numVerts / 3, Uint16Array)
                    };
                    arrays.position.push(positions);
                    arrays.texcoord.push(texcoords);
                    arrays.normal.push(normals);
                    arrays.color.push(colors);
                    for(var ii = 0; ii < numVerts; ++ii){
                        arrays.indices.push(ii);
                    }
                    return arrays;
                }
                function createCrescentVertices(verticalRadius, outerRadius, innerRadius, thickness, subdivisionsDown, startOffset, endOffset) {
                    if (subdivisionsDown <= 0) {
                        throw new Error('subdivisionDown must be > 0');
                    }
                    startOffset = startOffset || 0;
                    endOffset = endOffset || 1;
                    var subdivisionsThick = 2;
                    var offsetRange = endOffset - startOffset;
                    var numVertices = (subdivisionsDown + 1) * 2 * (2 + subdivisionsThick);
                    var positions = createAugmentedTypedArray(3, numVertices);
                    var normals = createAugmentedTypedArray(3, numVertices);
                    var texcoords = createAugmentedTypedArray(2, numVertices);
                    function lerp(a, b, s) {
                        return a + (b - a) * s;
                    }
                    function createArc(arcRadius, x, normalMult, normalAdd, uMult, uAdd) {
                        for(var z = 0; z <= subdivisionsDown; z++){
                            var uBack = x / (subdivisionsThick - 1);
                            var v = z / subdivisionsDown;
                            var xBack = (uBack - 0.5) * 2;
                            var angle = (startOffset + v * offsetRange) * Math.PI;
                            var s = Math.sin(angle);
                            var c = Math.cos(angle);
                            var radius = lerp(verticalRadius, arcRadius, s);
                            var px = xBack * thickness;
                            var py = c * verticalRadius;
                            var pz = s * radius;
                            positions.push(px, py, pz);
                            var n = v3.add(v3.multiply([
                                0,
                                s,
                                c
                            ], normalMult), normalAdd);
                            normals.push(n);
                            texcoords.push(uBack * uMult + uAdd, v);
                        }
                    }
                    for(var x1 = 0; x1 < subdivisionsThick; x1++){
                        var uBack1 = (x1 / (subdivisionsThick - 1) - 0.5) * 2;
                        createArc(outerRadius, x1, [
                            1,
                            1,
                            1
                        ], [
                            0,
                            0,
                            0
                        ], 1, 0);
                        createArc(outerRadius, x1, [
                            0,
                            0,
                            0
                        ], [
                            uBack1,
                            0,
                            0
                        ], 0, 0);
                        createArc(innerRadius, x1, [
                            1,
                            1,
                            1
                        ], [
                            0,
                            0,
                            0
                        ], 1, 0);
                        createArc(innerRadius, x1, [
                            0,
                            0,
                            0
                        ], [
                            uBack1,
                            0,
                            0
                        ], 0, 1);
                    }
                    var indices = createAugmentedTypedArray(3, subdivisionsDown * 2 * (2 + subdivisionsThick), Uint16Array);
                    function createSurface(leftArcOffset, rightArcOffset) {
                        for(var z = 0; z < subdivisionsDown; ++z){
                            indices.push(leftArcOffset + z + 0, leftArcOffset + z + 1, rightArcOffset + z + 0);
                            indices.push(leftArcOffset + z + 1, rightArcOffset + z + 1, rightArcOffset + z + 0);
                        }
                    }
                    var numVerticesDown = subdivisionsDown + 1;
                    createSurface(numVerticesDown * 0, numVerticesDown * 4);
                    createSurface(numVerticesDown * 5, numVerticesDown * 7);
                    createSurface(numVerticesDown * 6, numVerticesDown * 2);
                    createSurface(numVerticesDown * 3, numVerticesDown * 1);
                    return {
                        position: positions,
                        normal: normals,
                        texcoord: texcoords,
                        indices: indices
                    };
                }
                function createCylinderVertices(radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap) {
                    return createTruncatedConeVertices(radius, radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap);
                }
                function createTorusVertices(radius, thickness, radialSubdivisions, bodySubdivisions, startAngle, endAngle) {
                    if (radialSubdivisions < 3) {
                        throw new Error('radialSubdivisions must be 3 or greater');
                    }
                    if (bodySubdivisions < 3) {
                        throw new Error('verticalSubdivisions must be 3 or greater');
                    }
                    startAngle = startAngle || 0;
                    endAngle = endAngle || Math.PI * 2;
                    var range = endAngle - startAngle;
                    var radialParts = radialSubdivisions + 1;
                    var bodyParts = bodySubdivisions + 1;
                    var numVertices = radialParts * bodyParts;
                    var positions = createAugmentedTypedArray(3, numVertices);
                    var normals = createAugmentedTypedArray(3, numVertices);
                    var texcoords = createAugmentedTypedArray(2, numVertices);
                    var indices = createAugmentedTypedArray(3, radialSubdivisions * bodySubdivisions * 2, Uint16Array);
                    for(var slice = 0; slice < bodyParts; ++slice){
                        var v = slice / bodySubdivisions;
                        var sliceAngle = v * Math.PI * 2;
                        var sliceSin = Math.sin(sliceAngle);
                        var ringRadius = radius + sliceSin * thickness;
                        var ny = Math.cos(sliceAngle);
                        var y = ny * thickness;
                        for(var ring = 0; ring < radialParts; ++ring){
                            var u = ring / radialSubdivisions;
                            var ringAngle = startAngle + u * range;
                            var xSin = Math.sin(ringAngle);
                            var zCos = Math.cos(ringAngle);
                            var x = xSin * ringRadius;
                            var z = zCos * ringRadius;
                            var nx = xSin * sliceSin;
                            var nz = zCos * sliceSin;
                            positions.push(x, y, z);
                            normals.push(nx, ny, nz);
                            texcoords.push(u, 1 - v);
                        }
                    }
                    for(var _slice = 0; _slice < bodySubdivisions; ++_slice){
                        for(var _ring = 0; _ring < radialSubdivisions; ++_ring){
                            var nextRingIndex = 1 + _ring;
                            var nextSliceIndex = 1 + _slice;
                            indices.push(radialParts * _slice + _ring, radialParts * nextSliceIndex + _ring, radialParts * _slice + nextRingIndex);
                            indices.push(radialParts * nextSliceIndex + _ring, radialParts * nextSliceIndex + nextRingIndex, radialParts * _slice + nextRingIndex);
                        }
                    }
                    return {
                        position: positions,
                        normal: normals,
                        texcoord: texcoords,
                        indices: indices
                    };
                }
                function createDiscVertices(radius, divisions, stacks, innerRadius, stackPower) {
                    if (divisions < 3) {
                        throw new Error('divisions must be at least 3');
                    }
                    stacks = stacks ? stacks : 1;
                    stackPower = stackPower ? stackPower : 1;
                    innerRadius = innerRadius ? innerRadius : 0;
                    var numVertices = (divisions + 1) * (stacks + 1);
                    var positions = createAugmentedTypedArray(3, numVertices);
                    var normals = createAugmentedTypedArray(3, numVertices);
                    var texcoords = createAugmentedTypedArray(2, numVertices);
                    var indices = createAugmentedTypedArray(3, stacks * divisions * 2, Uint16Array);
                    var firstIndex = 0;
                    var radiusSpan = radius - innerRadius;
                    var pointsPerStack = divisions + 1;
                    for(var stack = 0; stack <= stacks; ++stack){
                        var stackRadius = innerRadius + radiusSpan * Math.pow(stack / stacks, stackPower);
                        for(var i = 0; i <= divisions; ++i){
                            var theta = 2 * Math.PI * i / divisions;
                            var x = stackRadius * Math.cos(theta);
                            var z = stackRadius * Math.sin(theta);
                            positions.push(x, 0, z);
                            normals.push(0, 1, 0);
                            texcoords.push(1 - i / divisions, stack / stacks);
                            if (stack > 0 && i !== divisions) {
                                var a = firstIndex + (i + 1);
                                var b = firstIndex + i;
                                var c = firstIndex + i - pointsPerStack;
                                var d = firstIndex + (i + 1) - pointsPerStack;
                                indices.push(a, b, c);
                                indices.push(a, c, d);
                            }
                        }
                        firstIndex += divisions + 1;
                    }
                    return {
                        position: positions,
                        normal: normals,
                        texcoord: texcoords,
                        indices: indices
                    };
                }
                function randInt(range) {
                    return Math.random() * range | 0;
                }
                function makeRandomVertexColors(vertices, options) {
                    options = options || {};
                    var numElements = vertices.position.numElements;
                    var vColors = createAugmentedTypedArray(4, numElements, Uint8Array);
                    var rand = options.rand || function(ndx, channel) {
                        return channel < 3 ? randInt(256) : 255;
                    };
                    vertices.color = vColors;
                    if (vertices.indices) {
                        for(var ii = 0; ii < numElements; ++ii){
                            vColors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
                        }
                    } else {
                        var numVertsPerColor = options.vertsPerColor || 3;
                        var numSets = numElements / numVertsPerColor;
                        for(var _ii2 = 0; _ii2 < numSets; ++_ii2){
                            var color = [
                                rand(_ii2, 0),
                                rand(_ii2, 1),
                                rand(_ii2, 2),
                                rand(_ii2, 3)
                            ];
                            for(var jj = 0; jj < numVertsPerColor; ++jj){
                                vColors.push(color);
                            }
                        }
                    }
                    return vertices;
                }
                function createBufferFunc(fn) {
                    return function(gl14) {
                        var arrays = fn.apply(this || _global, Array.prototype.slice.call(arguments, 1));
                        return attributes.createBuffersFromArrays(gl14, arrays);
                    };
                }
                function createBufferInfoFunc(fn) {
                    return function(gl15) {
                        var arrays = fn.apply(null, Array.prototype.slice.call(arguments, 1));
                        return attributes.createBufferInfoFromArrays(gl15, arrays);
                    };
                }
                var arraySpecPropertyNames = [
                    "numComponents",
                    "size",
                    "type",
                    "normalize",
                    "stride",
                    "offset",
                    "attrib",
                    "name",
                    "attribName"
                ];
                function copyElements(src, dst, dstNdx, offset) {
                    offset = offset || 0;
                    var length = src.length;
                    for(var ii = 0; ii < length; ++ii){
                        dst[dstNdx + ii] = src[ii] + offset;
                    }
                }
                function createArrayOfSameType(srcArray, length) {
                    var arraySrc = getArray(srcArray);
                    var newArray = new arraySrc.constructor(length);
                    var newArraySpec = newArray;
                    if (arraySrc.numComponents && arraySrc.numElements) {
                        augmentTypedArray(newArray, arraySrc.numComponents);
                    }
                    if (srcArray.data) {
                        newArraySpec = {
                            data: newArray
                        };
                        helper.copyNamedProperties(arraySpecPropertyNames, srcArray, newArraySpec);
                    }
                    return newArraySpec;
                }
                function concatVertices(arrayOfArrays) {
                    var names = {};
                    var baseName;
                    var _loop = function _loop(ii) {
                        var arrays = arrayOfArrays[ii];
                        Object.keys(arrays).forEach(function(name) {
                            if (!names[name]) {
                                names[name] = [];
                            }
                            if (!baseName && name !== 'indices') {
                                baseName = name;
                            }
                            var arrayInfo = arrays[name];
                            var numComponents = getNumComponents(arrayInfo, name);
                            var array = getArray(arrayInfo);
                            var numElements = array.length / numComponents;
                            names[name].push(numElements);
                        });
                    };
                    for(var ii1 = 0; ii1 < arrayOfArrays.length; ++ii1){
                        _loop(ii1);
                    }
                    function getLengthOfCombinedArrays(name) {
                        var length = 0;
                        var arraySpec;
                        for(var _ii3 = 0; _ii3 < arrayOfArrays.length; ++_ii3){
                            var arrays = arrayOfArrays[_ii3];
                            var arrayInfo = arrays[name];
                            var array = getArray(arrayInfo);
                            length += array.length;
                            if (!arraySpec || arrayInfo.data) {
                                arraySpec = arrayInfo;
                            }
                        }
                        return {
                            length: length,
                            spec: arraySpec
                        };
                    }
                    function copyArraysToNewArray(name, base, newArray) {
                        var baseIndex = 0;
                        var offset = 0;
                        for(var _ii4 = 0; _ii4 < arrayOfArrays.length; ++_ii4){
                            var arrays = arrayOfArrays[_ii4];
                            var arrayInfo = arrays[name];
                            var array = getArray(arrayInfo);
                            if (name === 'indices') {
                                copyElements(array, newArray, offset, baseIndex);
                                baseIndex += base[_ii4];
                            } else {
                                copyElements(array, newArray, offset);
                            }
                            offset += array.length;
                        }
                    }
                    var base1 = names[baseName];
                    var newArrays = {};
                    Object.keys(names).forEach(function(name) {
                        var info = getLengthOfCombinedArrays(name);
                        var newArraySpec = createArrayOfSameType(info.spec, info.length);
                        copyArraysToNewArray(name, base1, getArray(newArraySpec));
                        newArrays[name] = newArraySpec;
                    });
                    return newArrays;
                }
                function duplicateVertices(arrays) {
                    var newArrays = {};
                    Object.keys(arrays).forEach(function(name) {
                        var arraySpec = arrays[name];
                        var srcArray = getArray(arraySpec);
                        var newArraySpec = createArrayOfSameType(arraySpec, srcArray.length);
                        copyElements(srcArray, getArray(newArraySpec), 0);
                        newArrays[name] = newArraySpec;
                    });
                    return newArrays;
                }
                var create3DFBufferInfo = createBufferInfoFunc(create3DFVertices);
                exports8.create3DFBufferInfo = create3DFBufferInfo;
                var create3DFBuffers = createBufferFunc(create3DFVertices);
                exports8.create3DFBuffers = create3DFBuffers;
                var createCubeBufferInfo = createBufferInfoFunc(createCubeVertices);
                exports8.createCubeBufferInfo = createCubeBufferInfo;
                var createCubeBuffers = createBufferFunc(createCubeVertices);
                exports8.createCubeBuffers = createCubeBuffers;
                var createPlaneBufferInfo = createBufferInfoFunc(createPlaneVertices);
                exports8.createPlaneBufferInfo = createPlaneBufferInfo;
                var createPlaneBuffers = createBufferFunc(createPlaneVertices);
                exports8.createPlaneBuffers = createPlaneBuffers;
                var createSphereBufferInfo = createBufferInfoFunc(createSphereVertices);
                exports8.createSphereBufferInfo = createSphereBufferInfo;
                var createSphereBuffers = createBufferFunc(createSphereVertices);
                exports8.createSphereBuffers = createSphereBuffers;
                var createTruncatedConeBufferInfo = createBufferInfoFunc(createTruncatedConeVertices);
                exports8.createTruncatedConeBufferInfo = createTruncatedConeBufferInfo;
                var createTruncatedConeBuffers = createBufferFunc(createTruncatedConeVertices);
                exports8.createTruncatedConeBuffers = createTruncatedConeBuffers;
                var createXYQuadBufferInfo = createBufferInfoFunc(createXYQuadVertices);
                exports8.createXYQuadBufferInfo = createXYQuadBufferInfo;
                var createXYQuadBuffers = createBufferFunc(createXYQuadVertices);
                exports8.createXYQuadBuffers = createXYQuadBuffers;
                var createCrescentBufferInfo = createBufferInfoFunc(createCrescentVertices);
                exports8.createCrescentBufferInfo = createCrescentBufferInfo;
                var createCrescentBuffers = createBufferFunc(createCrescentVertices);
                exports8.createCrescentBuffers = createCrescentBuffers;
                var createCylinderBufferInfo = createBufferInfoFunc(createCylinderVertices);
                exports8.createCylinderBufferInfo = createCylinderBufferInfo;
                var createCylinderBuffers = createBufferFunc(createCylinderVertices);
                exports8.createCylinderBuffers = createCylinderBuffers;
                var createTorusBufferInfo = createBufferInfoFunc(createTorusVertices);
                exports8.createTorusBufferInfo = createTorusBufferInfo;
                var createTorusBuffers = createBufferFunc(createTorusVertices);
                exports8.createTorusBuffers = createTorusBuffers;
                var createDiscBufferInfo = createBufferInfoFunc(createDiscVertices);
                exports8.createDiscBufferInfo = createDiscBufferInfo;
                var createDiscBuffers = createBufferFunc(createDiscVertices);
                exports8.createDiscBuffers = createDiscBuffers;
                var createCresentBufferInfo = createCrescentBufferInfo;
                exports8.createCresentBufferInfo = createCresentBufferInfo;
                var createCresentBuffers = createCrescentBuffers;
                exports8.createCresentBuffers = createCresentBuffers;
                var createCresentVertices = createCrescentVertices;
                exports8.createCresentVertices = createCresentVertices;
            },
            "./src/programs.js": function(module, exports9, __webpack_require__) {
                "use strict";
                function _typeof(obj6) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj6);
                }
                exports9.__esModule = true;
                exports9.createAttributeSetters = createAttributeSetters;
                exports9.createProgram = createProgram;
                exports9.createProgramFromScripts = createProgramFromScripts;
                exports9.createProgramFromSources = createProgramFromSources;
                exports9.createProgramInfo = createProgramInfo;
                exports9.createProgramInfoFromProgram = createProgramInfoFromProgram;
                exports9.createUniformSetters = createUniformSetters;
                exports9.createUniformBlockSpecFromProgram = createUniformBlockSpecFromProgram;
                exports9.createUniformBlockInfoFromProgram = createUniformBlockInfoFromProgram;
                exports9.createUniformBlockInfo = createUniformBlockInfo;
                exports9.createTransformFeedback = createTransformFeedback;
                exports9.createTransformFeedbackInfo = createTransformFeedbackInfo;
                exports9.bindTransformFeedbackInfo = bindTransformFeedbackInfo;
                exports9.setAttributes = setAttributes;
                exports9.setBuffersAndAttributes = setBuffersAndAttributes;
                exports9.setUniforms = setUniforms;
                exports9.setUniformBlock = setUniformBlock;
                exports9.setBlockUniforms = setBlockUniforms;
                exports9.bindUniformBlock = bindUniformBlock;
                exports9.setUniformsAndBindTextures = void 0;
                var utils = _interopRequireWildcard(__webpack_require__("./src/utils.js"));
                var helper = _interopRequireWildcard(__webpack_require__("./src/helper.js"));
                function _getRequireWildcardCache() {
                    if (typeof WeakMap !== "function") return null;
                    var cache = new WeakMap();
                    _getRequireWildcardCache = function _getRequireWildcardCache() {
                        return cache;
                    };
                    return cache;
                }
                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    }
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                        return {
                            "default": obj
                        };
                    }
                    var cache = _getRequireWildcardCache();
                    if (cache && cache.has(obj)) {
                        return cache.get(obj);
                    }
                    var newObj = {};
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj){
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                            if (desc && (desc.get || desc.set)) {
                                Object.defineProperty(newObj, key, desc);
                            } else {
                                newObj[key] = obj[key];
                            }
                        }
                    }
                    newObj["default"] = obj;
                    if (cache) {
                        cache.set(obj, newObj);
                    }
                    return newObj;
                }
                function _toConsumableArray(arr) {
                    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
                }
                function _nonIterableSpread() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                function _unsupportedIterableToArray(o, minLen) {
                    if (!o) return;
                    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    if (n === "Object" && o.constructor) n = o.constructor.name;
                    if (n === "Map" || n === "Set") return Array.from(o);
                    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
                }
                function _iterableToArray(iter) {
                    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
                }
                function _arrayWithoutHoles(arr) {
                    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
                }
                function _arrayLikeToArray(arr, len) {
                    if (len == null || len > arr.length) len = arr.length;
                    for(var i = 0, arr2 = new Array(len); i < len; i++){
                        arr2[i] = arr[i];
                    }
                    return arr2;
                }
                var error = helper.error;
                var warn = helper.warn;
                function getElementById(id) {
                    return typeof document !== 'undefined' && document.getElementById ? document.getElementById(id) : null;
                }
                var TEXTURE0 = 33984;
                var DYNAMIC_DRAW = 35048;
                var ARRAY_BUFFER = 34962;
                var ELEMENT_ARRAY_BUFFER = 34963;
                var UNIFORM_BUFFER = 35345;
                var TRANSFORM_FEEDBACK_BUFFER = 35982;
                var TRANSFORM_FEEDBACK = 36386;
                var COMPILE_STATUS = 35713;
                var LINK_STATUS = 35714;
                var FRAGMENT_SHADER = 35632;
                var VERTEX_SHADER = 35633;
                var SEPARATE_ATTRIBS = 35981;
                var ACTIVE_UNIFORMS = 35718;
                var ACTIVE_ATTRIBUTES = 35721;
                var TRANSFORM_FEEDBACK_VARYINGS = 35971;
                var ACTIVE_UNIFORM_BLOCKS = 35382;
                var UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 35396;
                var UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 35398;
                var UNIFORM_BLOCK_DATA_SIZE = 35392;
                var UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 35395;
                var FLOAT = 5126;
                var FLOAT_VEC2 = 35664;
                var FLOAT_VEC3 = 35665;
                var FLOAT_VEC4 = 35666;
                var INT = 5124;
                var INT_VEC2 = 35667;
                var INT_VEC3 = 35668;
                var INT_VEC4 = 35669;
                var BOOL = 35670;
                var BOOL_VEC2 = 35671;
                var BOOL_VEC3 = 35672;
                var BOOL_VEC4 = 35673;
                var FLOAT_MAT2 = 35674;
                var FLOAT_MAT3 = 35675;
                var FLOAT_MAT4 = 35676;
                var SAMPLER_2D = 35678;
                var SAMPLER_CUBE = 35680;
                var SAMPLER_3D = 35679;
                var SAMPLER_2D_SHADOW = 35682;
                var FLOAT_MAT2x3 = 35685;
                var FLOAT_MAT2x4 = 35686;
                var FLOAT_MAT3x2 = 35687;
                var FLOAT_MAT3x4 = 35688;
                var FLOAT_MAT4x2 = 35689;
                var FLOAT_MAT4x3 = 35690;
                var SAMPLER_2D_ARRAY = 36289;
                var SAMPLER_2D_ARRAY_SHADOW = 36292;
                var SAMPLER_CUBE_SHADOW = 36293;
                var UNSIGNED_INT = 5125;
                var UNSIGNED_INT_VEC2 = 36294;
                var UNSIGNED_INT_VEC3 = 36295;
                var UNSIGNED_INT_VEC4 = 36296;
                var INT_SAMPLER_2D = 36298;
                var INT_SAMPLER_3D = 36299;
                var INT_SAMPLER_CUBE = 36300;
                var INT_SAMPLER_2D_ARRAY = 36303;
                var UNSIGNED_INT_SAMPLER_2D = 36306;
                var UNSIGNED_INT_SAMPLER_3D = 36307;
                var UNSIGNED_INT_SAMPLER_CUBE = 36308;
                var UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311;
                var TEXTURE_2D = 3553;
                var TEXTURE_CUBE_MAP = 34067;
                var TEXTURE_3D = 32879;
                var TEXTURE_2D_ARRAY = 35866;
                var typeMap = {};
                function getBindPointForSamplerType(gl, type) {
                    return typeMap[type].bindPoint;
                }
                function floatSetter(gl16, location) {
                    return function(v) {
                        gl16.uniform1f(location, v);
                    };
                }
                function floatArraySetter(gl17, location) {
                    return function(v) {
                        gl17.uniform1fv(location, v);
                    };
                }
                function floatVec2Setter(gl18, location) {
                    return function(v) {
                        gl18.uniform2fv(location, v);
                    };
                }
                function floatVec3Setter(gl19, location) {
                    return function(v) {
                        gl19.uniform3fv(location, v);
                    };
                }
                function floatVec4Setter(gl20, location) {
                    return function(v) {
                        gl20.uniform4fv(location, v);
                    };
                }
                function intSetter(gl21, location) {
                    return function(v) {
                        gl21.uniform1i(location, v);
                    };
                }
                function intArraySetter(gl22, location) {
                    return function(v) {
                        gl22.uniform1iv(location, v);
                    };
                }
                function intVec2Setter(gl23, location) {
                    return function(v) {
                        gl23.uniform2iv(location, v);
                    };
                }
                function intVec3Setter(gl24, location) {
                    return function(v) {
                        gl24.uniform3iv(location, v);
                    };
                }
                function intVec4Setter(gl25, location) {
                    return function(v) {
                        gl25.uniform4iv(location, v);
                    };
                }
                function uintSetter(gl26, location) {
                    return function(v) {
                        gl26.uniform1ui(location, v);
                    };
                }
                function uintArraySetter(gl27, location) {
                    return function(v) {
                        gl27.uniform1uiv(location, v);
                    };
                }
                function uintVec2Setter(gl28, location) {
                    return function(v) {
                        gl28.uniform2uiv(location, v);
                    };
                }
                function uintVec3Setter(gl29, location) {
                    return function(v) {
                        gl29.uniform3uiv(location, v);
                    };
                }
                function uintVec4Setter(gl30, location) {
                    return function(v) {
                        gl30.uniform4uiv(location, v);
                    };
                }
                function floatMat2Setter(gl31, location) {
                    return function(v) {
                        gl31.uniformMatrix2fv(location, false, v);
                    };
                }
                function floatMat3Setter(gl32, location) {
                    return function(v) {
                        gl32.uniformMatrix3fv(location, false, v);
                    };
                }
                function floatMat4Setter(gl33, location) {
                    return function(v) {
                        gl33.uniformMatrix4fv(location, false, v);
                    };
                }
                function floatMat23Setter(gl34, location) {
                    return function(v) {
                        gl34.uniformMatrix2x3fv(location, false, v);
                    };
                }
                function floatMat32Setter(gl35, location) {
                    return function(v) {
                        gl35.uniformMatrix3x2fv(location, false, v);
                    };
                }
                function floatMat24Setter(gl36, location) {
                    return function(v) {
                        gl36.uniformMatrix2x4fv(location, false, v);
                    };
                }
                function floatMat42Setter(gl37, location) {
                    return function(v) {
                        gl37.uniformMatrix4x2fv(location, false, v);
                    };
                }
                function floatMat34Setter(gl38, location) {
                    return function(v) {
                        gl38.uniformMatrix3x4fv(location, false, v);
                    };
                }
                function floatMat43Setter(gl39, location) {
                    return function(v) {
                        gl39.uniformMatrix4x3fv(location, false, v);
                    };
                }
                function samplerSetter(gl40, type, unit, location) {
                    var bindPoint = getBindPointForSamplerType(gl40, type);
                    return utils.isWebGL2(gl40) ? function(textureOrPair) {
                        var texture;
                        var sampler;
                        if (helper.isTexture(gl40, textureOrPair)) {
                            texture = textureOrPair;
                            sampler = null;
                        } else {
                            texture = textureOrPair.texture;
                            sampler = textureOrPair.sampler;
                        }
                        gl40.uniform1i(location, unit);
                        gl40.activeTexture(TEXTURE0 + unit);
                        gl40.bindTexture(bindPoint, texture);
                        gl40.bindSampler(unit, sampler);
                    } : function(texture) {
                        gl40.uniform1i(location, unit);
                        gl40.activeTexture(TEXTURE0 + unit);
                        gl40.bindTexture(bindPoint, texture);
                    };
                }
                function samplerArraySetter(gl41, type, unit, location, size) {
                    var bindPoint = getBindPointForSamplerType(gl41, type);
                    var units = new Int32Array(size);
                    for(var ii = 0; ii < size; ++ii){
                        units[ii] = unit + ii;
                    }
                    return utils.isWebGL2(gl41) ? function(textures) {
                        gl41.uniform1iv(location, units);
                        textures.forEach(function(textureOrPair, index) {
                            gl41.activeTexture(TEXTURE0 + units[index]);
                            var texture;
                            var sampler;
                            if (helper.isTexture(gl41, textureOrPair)) {
                                texture = textureOrPair;
                                sampler = null;
                            } else {
                                texture = textureOrPair.texture;
                                sampler = textureOrPair.sampler;
                            }
                            gl41.bindSampler(unit, sampler);
                            gl41.bindTexture(bindPoint, texture);
                        });
                    } : function(textures) {
                        gl41.uniform1iv(location, units);
                        textures.forEach(function(texture, index) {
                            gl41.activeTexture(TEXTURE0 + units[index]);
                            gl41.bindTexture(bindPoint, texture);
                        });
                    };
                }
                typeMap[FLOAT] = {
                    Type: Float32Array,
                    size: 4,
                    setter: floatSetter,
                    arraySetter: floatArraySetter
                };
                typeMap[FLOAT_VEC2] = {
                    Type: Float32Array,
                    size: 8,
                    setter: floatVec2Setter,
                    cols: 2
                };
                typeMap[FLOAT_VEC3] = {
                    Type: Float32Array,
                    size: 12,
                    setter: floatVec3Setter,
                    cols: 3
                };
                typeMap[FLOAT_VEC4] = {
                    Type: Float32Array,
                    size: 16,
                    setter: floatVec4Setter,
                    cols: 4
                };
                typeMap[INT] = {
                    Type: Int32Array,
                    size: 4,
                    setter: intSetter,
                    arraySetter: intArraySetter
                };
                typeMap[INT_VEC2] = {
                    Type: Int32Array,
                    size: 8,
                    setter: intVec2Setter,
                    cols: 2
                };
                typeMap[INT_VEC3] = {
                    Type: Int32Array,
                    size: 12,
                    setter: intVec3Setter,
                    cols: 3
                };
                typeMap[INT_VEC4] = {
                    Type: Int32Array,
                    size: 16,
                    setter: intVec4Setter,
                    cols: 4
                };
                typeMap[UNSIGNED_INT] = {
                    Type: Uint32Array,
                    size: 4,
                    setter: uintSetter,
                    arraySetter: uintArraySetter
                };
                typeMap[UNSIGNED_INT_VEC2] = {
                    Type: Uint32Array,
                    size: 8,
                    setter: uintVec2Setter,
                    cols: 2
                };
                typeMap[UNSIGNED_INT_VEC3] = {
                    Type: Uint32Array,
                    size: 12,
                    setter: uintVec3Setter,
                    cols: 3
                };
                typeMap[UNSIGNED_INT_VEC4] = {
                    Type: Uint32Array,
                    size: 16,
                    setter: uintVec4Setter,
                    cols: 4
                };
                typeMap[BOOL] = {
                    Type: Uint32Array,
                    size: 4,
                    setter: intSetter,
                    arraySetter: intArraySetter
                };
                typeMap[BOOL_VEC2] = {
                    Type: Uint32Array,
                    size: 8,
                    setter: intVec2Setter,
                    cols: 2
                };
                typeMap[BOOL_VEC3] = {
                    Type: Uint32Array,
                    size: 12,
                    setter: intVec3Setter,
                    cols: 3
                };
                typeMap[BOOL_VEC4] = {
                    Type: Uint32Array,
                    size: 16,
                    setter: intVec4Setter,
                    cols: 4
                };
                typeMap[FLOAT_MAT2] = {
                    Type: Float32Array,
                    size: 32,
                    setter: floatMat2Setter,
                    rows: 2,
                    cols: 2
                };
                typeMap[FLOAT_MAT3] = {
                    Type: Float32Array,
                    size: 48,
                    setter: floatMat3Setter,
                    rows: 3,
                    cols: 3
                };
                typeMap[FLOAT_MAT4] = {
                    Type: Float32Array,
                    size: 64,
                    setter: floatMat4Setter,
                    rows: 4,
                    cols: 4
                };
                typeMap[FLOAT_MAT2x3] = {
                    Type: Float32Array,
                    size: 32,
                    setter: floatMat23Setter,
                    rows: 2,
                    cols: 3
                };
                typeMap[FLOAT_MAT2x4] = {
                    Type: Float32Array,
                    size: 32,
                    setter: floatMat24Setter,
                    rows: 2,
                    cols: 4
                };
                typeMap[FLOAT_MAT3x2] = {
                    Type: Float32Array,
                    size: 48,
                    setter: floatMat32Setter,
                    rows: 3,
                    cols: 2
                };
                typeMap[FLOAT_MAT3x4] = {
                    Type: Float32Array,
                    size: 48,
                    setter: floatMat34Setter,
                    rows: 3,
                    cols: 4
                };
                typeMap[FLOAT_MAT4x2] = {
                    Type: Float32Array,
                    size: 64,
                    setter: floatMat42Setter,
                    rows: 4,
                    cols: 2
                };
                typeMap[FLOAT_MAT4x3] = {
                    Type: Float32Array,
                    size: 64,
                    setter: floatMat43Setter,
                    rows: 4,
                    cols: 3
                };
                typeMap[SAMPLER_2D] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_2D
                };
                typeMap[SAMPLER_CUBE] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_CUBE_MAP
                };
                typeMap[SAMPLER_3D] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_3D
                };
                typeMap[SAMPLER_2D_SHADOW] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_2D
                };
                typeMap[SAMPLER_2D_ARRAY] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_2D_ARRAY
                };
                typeMap[SAMPLER_2D_ARRAY_SHADOW] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_2D_ARRAY
                };
                typeMap[SAMPLER_CUBE_SHADOW] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_CUBE_MAP
                };
                typeMap[INT_SAMPLER_2D] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_2D
                };
                typeMap[INT_SAMPLER_3D] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_3D
                };
                typeMap[INT_SAMPLER_CUBE] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_CUBE_MAP
                };
                typeMap[INT_SAMPLER_2D_ARRAY] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_2D_ARRAY
                };
                typeMap[UNSIGNED_INT_SAMPLER_2D] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_2D
                };
                typeMap[UNSIGNED_INT_SAMPLER_3D] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_3D
                };
                typeMap[UNSIGNED_INT_SAMPLER_CUBE] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_CUBE_MAP
                };
                typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = {
                    Type: null,
                    size: 0,
                    setter: samplerSetter,
                    arraySetter: samplerArraySetter,
                    bindPoint: TEXTURE_2D_ARRAY
                };
                function floatAttribSetter(gl42, index) {
                    return function(b) {
                        if (b.value) {
                            gl42.disableVertexAttribArray(index);
                            switch(b.value.length){
                                case 4:
                                    gl42.vertexAttrib4fv(index, b.value);
                                    break;
                                case 3:
                                    gl42.vertexAttrib3fv(index, b.value);
                                    break;
                                case 2:
                                    gl42.vertexAttrib2fv(index, b.value);
                                    break;
                                case 1:
                                    gl42.vertexAttrib1fv(index, b.value);
                                    break;
                                default:
                                    throw new Error('the length of a float constant value must be between 1 and 4!');
                            }
                        } else {
                            gl42.bindBuffer(ARRAY_BUFFER, b.buffer);
                            gl42.enableVertexAttribArray(index);
                            gl42.vertexAttribPointer(index, b.numComponents || b.size, b.type || FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);
                            if (b.divisor !== undefined) {
                                gl42.vertexAttribDivisor(index, b.divisor);
                            }
                        }
                    };
                }
                function intAttribSetter(gl43, index) {
                    return function(b) {
                        if (b.value) {
                            gl43.disableVertexAttribArray(index);
                            if (b.value.length === 4) {
                                gl43.vertexAttrib4iv(index, b.value);
                            } else {
                                throw new Error('The length of an integer constant value must be 4!');
                            }
                        } else {
                            gl43.bindBuffer(ARRAY_BUFFER, b.buffer);
                            gl43.enableVertexAttribArray(index);
                            gl43.vertexAttribIPointer(index, b.numComponents || b.size, b.type || INT, b.stride || 0, b.offset || 0);
                            if (b.divisor !== undefined) {
                                gl43.vertexAttribDivisor(index, b.divisor);
                            }
                        }
                    };
                }
                function uintAttribSetter(gl44, index) {
                    return function(b) {
                        if (b.value) {
                            gl44.disableVertexAttribArray(index);
                            if (b.value.length === 4) {
                                gl44.vertexAttrib4uiv(index, b.value);
                            } else {
                                throw new Error('The length of an unsigned integer constant value must be 4!');
                            }
                        } else {
                            gl44.bindBuffer(ARRAY_BUFFER, b.buffer);
                            gl44.enableVertexAttribArray(index);
                            gl44.vertexAttribIPointer(index, b.numComponents || b.size, b.type || UNSIGNED_INT, b.stride || 0, b.offset || 0);
                            if (b.divisor !== undefined) {
                                gl44.vertexAttribDivisor(index, b.divisor);
                            }
                        }
                    };
                }
                function matAttribSetter(gl45, index, typeInfo1) {
                    var defaultSize = typeInfo1.size;
                    var count = typeInfo1.count;
                    return function(b) {
                        gl45.bindBuffer(ARRAY_BUFFER, b.buffer);
                        var numComponents = b.size || b.numComponents || defaultSize;
                        var size = numComponents / count;
                        var type = b.type || FLOAT;
                        var typeInfo = typeMap[type];
                        var stride = typeInfo.size * numComponents;
                        var normalize = b.normalize || false;
                        var offset = b.offset || 0;
                        var rowOffset = stride / count;
                        for(var i = 0; i < count; ++i){
                            gl45.enableVertexAttribArray(index + i);
                            gl45.vertexAttribPointer(index + i, size, type, normalize, stride, offset + rowOffset * i);
                            if (b.divisor !== undefined) {
                                gl45.vertexAttribDivisor(index + i, b.divisor);
                            }
                        }
                    };
                }
                var attrTypeMap = {};
                attrTypeMap[FLOAT] = {
                    size: 4,
                    setter: floatAttribSetter
                };
                attrTypeMap[FLOAT_VEC2] = {
                    size: 8,
                    setter: floatAttribSetter
                };
                attrTypeMap[FLOAT_VEC3] = {
                    size: 12,
                    setter: floatAttribSetter
                };
                attrTypeMap[FLOAT_VEC4] = {
                    size: 16,
                    setter: floatAttribSetter
                };
                attrTypeMap[INT] = {
                    size: 4,
                    setter: intAttribSetter
                };
                attrTypeMap[INT_VEC2] = {
                    size: 8,
                    setter: intAttribSetter
                };
                attrTypeMap[INT_VEC3] = {
                    size: 12,
                    setter: intAttribSetter
                };
                attrTypeMap[INT_VEC4] = {
                    size: 16,
                    setter: intAttribSetter
                };
                attrTypeMap[UNSIGNED_INT] = {
                    size: 4,
                    setter: uintAttribSetter
                };
                attrTypeMap[UNSIGNED_INT_VEC2] = {
                    size: 8,
                    setter: uintAttribSetter
                };
                attrTypeMap[UNSIGNED_INT_VEC3] = {
                    size: 12,
                    setter: uintAttribSetter
                };
                attrTypeMap[UNSIGNED_INT_VEC4] = {
                    size: 16,
                    setter: uintAttribSetter
                };
                attrTypeMap[BOOL] = {
                    size: 4,
                    setter: intAttribSetter
                };
                attrTypeMap[BOOL_VEC2] = {
                    size: 8,
                    setter: intAttribSetter
                };
                attrTypeMap[BOOL_VEC3] = {
                    size: 12,
                    setter: intAttribSetter
                };
                attrTypeMap[BOOL_VEC4] = {
                    size: 16,
                    setter: intAttribSetter
                };
                attrTypeMap[FLOAT_MAT2] = {
                    size: 4,
                    setter: matAttribSetter,
                    count: 2
                };
                attrTypeMap[FLOAT_MAT3] = {
                    size: 9,
                    setter: matAttribSetter,
                    count: 3
                };
                attrTypeMap[FLOAT_MAT4] = {
                    size: 16,
                    setter: matAttribSetter,
                    count: 4
                };
                var errorRE = /ERROR:\s*\d+:(\d+)/gi;
                function addLineNumbersWithError(src) {
                    var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
                    var lineOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    var matches = _toConsumableArray(log.matchAll(errorRE));
                    var lineNoToErrorMap = new Map(matches.map(function(m, ndx) {
                        var lineNo = parseInt(m[1]);
                        var next = matches[ndx + 1];
                        var end = next ? next.index : log.length;
                        var msg = log.substring(m.index, end);
                        return [
                            lineNo - 1,
                            msg
                        ];
                    }));
                    return src.split('\n').map(function(line, lineNo) {
                        var err = lineNoToErrorMap.get(lineNo);
                        return "".concat(lineNo + 1 + lineOffset, ": ").concat(line).concat(err ? "\n\n^^^ ".concat(err) : '');
                    }).join('\n');
                }
                var spaceRE = /^[ \t]*\n/;
                function loadShader(gl46, shaderSource, shaderType, opt_errorCallback) {
                    var errFn = opt_errorCallback || error;
                    var shader = gl46.createShader(shaderType);
                    var lineOffset = 0;
                    if (spaceRE.test(shaderSource)) {
                        lineOffset = 1;
                        shaderSource = shaderSource.replace(spaceRE, '');
                    }
                    gl46.shaderSource(shader, shaderSource);
                    gl46.compileShader(shader);
                    var compiled = gl46.getShaderParameter(shader, COMPILE_STATUS);
                    if (!compiled) {
                        var lastError = gl46.getShaderInfoLog(shader);
                        errFn("".concat(addLineNumbersWithError(shaderSource, lastError, lineOffset), "\nError compiling ").concat(utils.glEnumToString(gl46, shaderType), ": ").concat(lastError));
                        gl46.deleteShader(shader);
                        return null;
                    }
                    return shader;
                }
                function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
                    var transformFeedbackVaryings;
                    var transformFeedbackMode;
                    if (typeof opt_locations === 'function') {
                        opt_errorCallback = opt_locations;
                        opt_locations = undefined;
                    }
                    if (typeof opt_attribs === 'function') {
                        opt_errorCallback = opt_attribs;
                        opt_attribs = undefined;
                    } else if (opt_attribs && !Array.isArray(opt_attribs)) {
                        if (opt_attribs.errorCallback) {
                            return opt_attribs;
                        }
                        var opt = opt_attribs;
                        opt_errorCallback = opt.errorCallback;
                        opt_attribs = opt.attribLocations;
                        transformFeedbackVaryings = opt.transformFeedbackVaryings;
                        transformFeedbackMode = opt.transformFeedbackMode;
                    }
                    var options = {
                        errorCallback: opt_errorCallback || error,
                        transformFeedbackVaryings: transformFeedbackVaryings,
                        transformFeedbackMode: transformFeedbackMode
                    };
                    if (opt_attribs) {
                        var attribLocations = {};
                        if (Array.isArray(opt_attribs)) {
                            opt_attribs.forEach(function(attrib, ndx) {
                                attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
                            });
                        } else {
                            attribLocations = opt_attribs;
                        }
                        options.attribLocations = attribLocations;
                    }
                    return options;
                }
                var defaultShaderType = [
                    "VERTEX_SHADER",
                    "FRAGMENT_SHADER"
                ];
                function getShaderTypeFromScriptType(gl, scriptType) {
                    if (scriptType.indexOf("frag") >= 0) {
                        return FRAGMENT_SHADER;
                    } else if (scriptType.indexOf("vert") >= 0) {
                        return VERTEX_SHADER;
                    }
                    return undefined;
                }
                function deleteShaders(gl47, shaders) {
                    shaders.forEach(function(shader) {
                        gl47.deleteShader(shader);
                    });
                }
                function createProgram(gl48, shaders, opt_attribs, opt_locations, opt_errorCallback) {
                    var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
                    var realShaders = [];
                    var newShaders = [];
                    for(var ndx = 0; ndx < shaders.length; ++ndx){
                        var shader = shaders[ndx];
                        if (typeof shader === 'string') {
                            var elem = getElementById(shader);
                            var src = elem ? elem.text : shader;
                            var type = gl48[defaultShaderType[ndx]];
                            if (elem && elem.type) {
                                type = getShaderTypeFromScriptType(gl48, elem.type) || type;
                            }
                            shader = loadShader(gl48, src, type, progOptions.errorCallback);
                            newShaders.push(shader);
                        }
                        if (helper.isShader(gl48, shader)) {
                            realShaders.push(shader);
                        }
                    }
                    if (realShaders.length !== shaders.length) {
                        progOptions.errorCallback("not enough shaders for program");
                        deleteShaders(gl48, newShaders);
                        return null;
                    }
                    var program = gl48.createProgram();
                    realShaders.forEach(function(shader) {
                        gl48.attachShader(program, shader);
                    });
                    if (progOptions.attribLocations) {
                        Object.keys(progOptions.attribLocations).forEach(function(attrib) {
                            gl48.bindAttribLocation(program, progOptions.attribLocations[attrib], attrib);
                        });
                    }
                    var varyings = progOptions.transformFeedbackVaryings;
                    if (varyings) {
                        if (varyings.attribs) {
                            varyings = varyings.attribs;
                        }
                        if (!Array.isArray(varyings)) {
                            varyings = Object.keys(varyings);
                        }
                        gl48.transformFeedbackVaryings(program, varyings, progOptions.transformFeedbackMode || SEPARATE_ATTRIBS);
                    }
                    gl48.linkProgram(program);
                    var linked = gl48.getProgramParameter(program, LINK_STATUS);
                    if (!linked) {
                        var lastError = gl48.getProgramInfoLog(program);
                        progOptions.errorCallback("".concat(realShaders.map(function(shader) {
                            var src = addLineNumbersWithError(gl48.getShaderSource(shader), '', 0);
                            var type = gl48.getShaderParameter(shader, gl48.SHADER_TYPE);
                            return "".concat(utils.glEnumToString(gl48, type), "\n").concat(src, "}");
                        }).join('\n'), "\nError in program linking: ").concat(lastError));
                        gl48.deleteProgram(program);
                        deleteShaders(gl48, newShaders);
                        return null;
                    }
                    return program;
                }
                function createShaderFromScript(gl49, scriptId, opt_shaderType, opt_errorCallback) {
                    var shaderSource = "";
                    var shaderScript = getElementById(scriptId);
                    if (!shaderScript) {
                        throw new Error("unknown script element: ".concat(scriptId));
                    }
                    shaderSource = shaderScript.text;
                    var shaderType = opt_shaderType || getShaderTypeFromScriptType(gl49, shaderScript.type);
                    if (!shaderType) {
                        throw new Error('unknown shader type');
                    }
                    return loadShader(gl49, shaderSource, shaderType, opt_errorCallback);
                }
                function createProgramFromScripts(gl50, shaderScriptIds, opt_attribs, opt_locations, opt_errorCallback) {
                    var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
                    var shaders = [];
                    for(var ii = 0; ii < shaderScriptIds.length; ++ii){
                        var shader = createShaderFromScript(gl50, shaderScriptIds[ii], gl50[defaultShaderType[ii]], progOptions.errorCallback);
                        if (!shader) {
                            return null;
                        }
                        shaders.push(shader);
                    }
                    return createProgram(gl50, shaders, progOptions);
                }
                function createProgramFromSources(gl51, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
                    var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
                    var shaders = [];
                    for(var ii = 0; ii < shaderSources.length; ++ii){
                        var shader = loadShader(gl51, shaderSources[ii], gl51[defaultShaderType[ii]], progOptions.errorCallback);
                        if (!shader) {
                            return null;
                        }
                        shaders.push(shader);
                    }
                    return createProgram(gl51, shaders, progOptions);
                }
                function isBuiltIn(info) {
                    var name = info.name;
                    return name.startsWith("gl_") || name.startsWith("webgl_");
                }
                var tokenRE = /(\.|\[|]|\w+)/g;
                var isDigit = function isDigit(s) {
                    return s >= '0' && s <= '9';
                };
                function addSetterToUniformTree(fullPath, setter, node1, uniformSetters) {
                    var tokens = fullPath.split(tokenRE).filter(function(s) {
                        return s !== '';
                    });
                    var tokenNdx = 0;
                    var path = '';
                    for(;;){
                        var token = tokens[tokenNdx++];
                        path += token;
                        var isArrayIndex = isDigit(token[0]);
                        var accessor = isArrayIndex ? parseInt(token) : token;
                        if (isArrayIndex) {
                            path += tokens[tokenNdx++];
                        }
                        var isLastToken = tokenNdx === tokens.length;
                        if (isLastToken) {
                            node1[accessor] = setter;
                            break;
                        } else {
                            var _token = tokens[tokenNdx++];
                            var isArray = _token === '[';
                            var child = node1[accessor] || (isArray ? [] : {});
                            node1[accessor] = child;
                            node1 = child;
                            uniformSetters[path] = uniformSetters[path] || (function(node) {
                                return function(value) {
                                    setUniformTree(node, value);
                                };
                            })(child);
                            path += _token;
                        }
                    }
                }
                function createUniformSetters(gl52, program) {
                    var textureUnit = 0;
                    function createUniformSetter(program, uniformInfo, location) {
                        var isArray = uniformInfo.name.endsWith("[0]");
                        var type = uniformInfo.type;
                        var typeInfo = typeMap[type];
                        if (!typeInfo) {
                            throw new Error("unknown type: 0x".concat(type.toString(16)));
                        }
                        var setter;
                        if (typeInfo.bindPoint) {
                            var unit = textureUnit;
                            textureUnit += uniformInfo.size;
                            if (isArray) {
                                setter = typeInfo.arraySetter(gl52, type, unit, location, uniformInfo.size);
                            } else {
                                setter = typeInfo.setter(gl52, type, unit, location, uniformInfo.size);
                            }
                        } else {
                            if (typeInfo.arraySetter && isArray) {
                                setter = typeInfo.arraySetter(gl52, location);
                            } else {
                                setter = typeInfo.setter(gl52, location);
                            }
                        }
                        setter.location = location;
                        return setter;
                    }
                    var uniformSetters = {};
                    var uniformTree = {};
                    var numUniforms = gl52.getProgramParameter(program, ACTIVE_UNIFORMS);
                    for(var ii = 0; ii < numUniforms; ++ii){
                        var uniformInfo1 = gl52.getActiveUniform(program, ii);
                        if (isBuiltIn(uniformInfo1)) {
                            continue;
                        }
                        var name = uniformInfo1.name;
                        if (name.endsWith("[0]")) {
                            name = name.substr(0, name.length - 3);
                        }
                        var location1 = gl52.getUniformLocation(program, uniformInfo1.name);
                        if (location1) {
                            var setter1 = createUniformSetter(program, uniformInfo1, location1);
                            uniformSetters[name] = setter1;
                            addSetterToUniformTree(name, setter1, uniformTree, uniformSetters);
                        }
                    }
                    return uniformSetters;
                }
                function createTransformFeedbackInfo(gl53, program) {
                    var info = {};
                    var numVaryings = gl53.getProgramParameter(program, TRANSFORM_FEEDBACK_VARYINGS);
                    for(var ii = 0; ii < numVaryings; ++ii){
                        var varying = gl53.getTransformFeedbackVarying(program, ii);
                        info[varying.name] = {
                            index: ii,
                            type: varying.type,
                            size: varying.size
                        };
                    }
                    return info;
                }
                function bindTransformFeedbackInfo(gl54, transformFeedbackInfo, bufferInfo) {
                    if (transformFeedbackInfo.transformFeedbackInfo) {
                        transformFeedbackInfo = transformFeedbackInfo.transformFeedbackInfo;
                    }
                    if (bufferInfo.attribs) {
                        bufferInfo = bufferInfo.attribs;
                    }
                    for(var name in bufferInfo){
                        var varying = transformFeedbackInfo[name];
                        if (varying) {
                            var buf = bufferInfo[name];
                            if (buf.offset) {
                                gl54.bindBufferRange(TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer, buf.offset, buf.size);
                            } else {
                                gl54.bindBufferBase(TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer);
                            }
                        }
                    }
                }
                function createTransformFeedback(gl55, programInfo, bufferInfo) {
                    var tf = gl55.createTransformFeedback();
                    gl55.bindTransformFeedback(TRANSFORM_FEEDBACK, tf);
                    gl55.useProgram(programInfo.program);
                    bindTransformFeedbackInfo(gl55, programInfo, bufferInfo);
                    gl55.bindTransformFeedback(TRANSFORM_FEEDBACK, null);
                    return tf;
                }
                function createUniformBlockSpecFromProgram(gl56, program) {
                    var numUniforms = gl56.getProgramParameter(program, ACTIVE_UNIFORMS);
                    var uniformData = [];
                    var uniformIndices = [];
                    for(var ii = 0; ii < numUniforms; ++ii){
                        uniformIndices.push(ii);
                        uniformData.push({});
                        var uniformInfo = gl56.getActiveUniform(program, ii);
                        uniformData[ii].name = uniformInfo.name;
                    }
                    [
                        [
                            "UNIFORM_TYPE",
                            "type"
                        ],
                        [
                            "UNIFORM_SIZE",
                            "size"
                        ],
                        [
                            "UNIFORM_BLOCK_INDEX",
                            "blockNdx"
                        ],
                        [
                            "UNIFORM_OFFSET",
                            "offset"
                        ]
                    ].forEach(function(pair) {
                        var pname = pair[0];
                        var key = pair[1];
                        gl56.getActiveUniforms(program, uniformIndices, gl56[pname]).forEach(function(value, ndx) {
                            uniformData[ndx][key] = value;
                        });
                    });
                    var blockSpecs = {};
                    var numUniformBlocks = gl56.getProgramParameter(program, ACTIVE_UNIFORM_BLOCKS);
                    for(var _ii = 0; _ii < numUniformBlocks; ++_ii){
                        var name = gl56.getActiveUniformBlockName(program, _ii);
                        var blockSpec = {
                            index: gl56.getUniformBlockIndex(program, name),
                            usedByVertexShader: gl56.getActiveUniformBlockParameter(program, _ii, UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
                            usedByFragmentShader: gl56.getActiveUniformBlockParameter(program, _ii, UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
                            size: gl56.getActiveUniformBlockParameter(program, _ii, UNIFORM_BLOCK_DATA_SIZE),
                            uniformIndices: gl56.getActiveUniformBlockParameter(program, _ii, UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
                        };
                        blockSpec.used = blockSpec.usedByVertexShader || blockSpec.usedByFragmentShader;
                        blockSpecs[name] = blockSpec;
                    }
                    return {
                        blockSpecs: blockSpecs,
                        uniformData: uniformData
                    };
                }
                var arraySuffixRE = /\[\d+\]\.$/;
                var pad = function pad(v, padding) {
                    return ((v + (padding - 1)) / padding | 0) * padding;
                };
                function createUniformBlockUniformSetter(view, isArray, rows, cols) {
                    if (isArray || rows) {
                        cols = cols || 1;
                        var numElements = view.length;
                        var totalRows = numElements / 4;
                        return function(value) {
                            var dst = 0;
                            var src = 0;
                            for(var row = 0; row < totalRows; ++row){
                                for(var col = 0; col < cols; ++col){
                                    view[dst++] = value[src++];
                                }
                                dst += 4 - cols;
                            }
                        };
                    } else {
                        return function(value) {
                            if (value.length) {
                                view.set(value);
                            } else {
                                view[0] = value;
                            }
                        };
                    }
                }
                function createUniformBlockInfoFromProgram(gl57, program, uniformBlockSpec, blockName) {
                    var blockSpecs = uniformBlockSpec.blockSpecs;
                    var uniformData = uniformBlockSpec.uniformData;
                    var blockSpec = blockSpecs[blockName];
                    if (!blockSpec) {
                        warn("no uniform block object named:", blockName);
                        return {
                            name: blockName,
                            uniforms: {}
                        };
                    }
                    var array = new ArrayBuffer(blockSpec.size);
                    var buffer = gl57.createBuffer();
                    var uniformBufferIndex = blockSpec.index;
                    gl57.bindBuffer(UNIFORM_BUFFER, buffer);
                    gl57.uniformBlockBinding(program, blockSpec.index, uniformBufferIndex);
                    var prefix = blockName + ".";
                    if (arraySuffixRE.test(prefix)) {
                        prefix = prefix.replace(arraySuffixRE, ".");
                    }
                    var uniforms = {};
                    var setters = {};
                    var setterTree = {};
                    blockSpec.uniformIndices.forEach(function(uniformNdx) {
                        var data = uniformData[uniformNdx];
                        var name = data.name;
                        if (name.startsWith(prefix)) {
                            name = name.substr(prefix.length);
                        }
                        var isArray = name.endsWith('[0]');
                        if (isArray) {
                            name = name.substr(0, name.length - 3);
                        }
                        var typeInfo = typeMap[data.type];
                        var Type = typeInfo.Type;
                        var byteLength = isArray ? pad(typeInfo.size, 16) * data.size : typeInfo.size * data.size;
                        var uniformView = new Type(array, data.offset, byteLength / Type.BYTES_PER_ELEMENT);
                        uniforms[name] = uniformView;
                        var setter = createUniformBlockUniformSetter(uniformView, isArray, typeInfo.rows, typeInfo.cols);
                        setters[name] = setter;
                        addSetterToUniformTree(name, setter, setterTree, setters);
                    });
                    return {
                        name: blockName,
                        array: array,
                        asFloat: new Float32Array(array),
                        buffer: buffer,
                        uniforms: uniforms,
                        setters: setters
                    };
                }
                function createUniformBlockInfo(gl58, programInfo, blockName) {
                    return createUniformBlockInfoFromProgram(gl58, programInfo.program, programInfo.uniformBlockSpec, blockName);
                }
                function bindUniformBlock(gl59, programInfo, uniformBlockInfo) {
                    var uniformBlockSpec = programInfo.uniformBlockSpec || programInfo;
                    var blockSpec = uniformBlockSpec.blockSpecs[uniformBlockInfo.name];
                    if (blockSpec) {
                        var bufferBindIndex = blockSpec.index;
                        gl59.bindBufferRange(UNIFORM_BUFFER, bufferBindIndex, uniformBlockInfo.buffer, uniformBlockInfo.offset || 0, uniformBlockInfo.array.byteLength);
                        return true;
                    }
                    return false;
                }
                function setUniformBlock(gl60, programInfo, uniformBlockInfo) {
                    if (bindUniformBlock(gl60, programInfo, uniformBlockInfo)) {
                        gl60.bufferData(UNIFORM_BUFFER, uniformBlockInfo.array, DYNAMIC_DRAW);
                    }
                }
                function setBlockUniforms(uniformBlockInfo, values) {
                    var setters = uniformBlockInfo.setters;
                    for(var name in values){
                        var setter = setters[name];
                        if (setter) {
                            var value = values[name];
                            setter(value);
                        }
                    }
                }
                function setUniformTree(tree, values) {
                    for(var name in values){
                        var prop = tree[name];
                        if (typeof prop === 'function') {
                            prop(values[name]);
                        } else {
                            setUniformTree(tree[name], values[name]);
                        }
                    }
                }
                function setUniforms(setters) {
                    var actualSetters = setters.uniformSetters || setters;
                    var numArgs = arguments.length <= 1 ? 0 : arguments.length - 1;
                    for(var aNdx = 0; aNdx < numArgs; ++aNdx){
                        var values = aNdx + 1 < 1 || arguments.length <= aNdx + 1 ? undefined : arguments[aNdx + 1];
                        if (Array.isArray(values)) {
                            var numValues = values.length;
                            for(var ii = 0; ii < numValues; ++ii){
                                setUniforms(actualSetters, values[ii]);
                            }
                        } else {
                            for(var name in values){
                                var setter = actualSetters[name];
                                if (setter) {
                                    setter(values[name]);
                                }
                            }
                        }
                    }
                }
                var setUniformsAndBindTextures = setUniforms;
                exports9.setUniformsAndBindTextures = setUniformsAndBindTextures;
                function createAttributeSetters(gl61, program) {
                    var attribSetters = {};
                    var numAttribs = gl61.getProgramParameter(program, ACTIVE_ATTRIBUTES);
                    for(var ii = 0; ii < numAttribs; ++ii){
                        var attribInfo = gl61.getActiveAttrib(program, ii);
                        if (isBuiltIn(attribInfo)) {
                            continue;
                        }
                        var index = gl61.getAttribLocation(program, attribInfo.name);
                        var typeInfo = attrTypeMap[attribInfo.type];
                        var setter = typeInfo.setter(gl61, index, typeInfo);
                        setter.location = index;
                        attribSetters[attribInfo.name] = setter;
                    }
                    return attribSetters;
                }
                function setAttributes(setters, buffers) {
                    for(var name in buffers){
                        var setter = setters[name];
                        if (setter) {
                            setter(buffers[name]);
                        }
                    }
                }
                function setBuffersAndAttributes(gl62, programInfo, buffers) {
                    if (buffers.vertexArrayObject) {
                        gl62.bindVertexArray(buffers.vertexArrayObject);
                    } else {
                        setAttributes(programInfo.attribSetters || programInfo, buffers.attribs);
                        if (buffers.indices) {
                            gl62.bindBuffer(ELEMENT_ARRAY_BUFFER, buffers.indices);
                        }
                    }
                }
                function createProgramInfoFromProgram(gl63, program) {
                    var uniformSetters = createUniformSetters(gl63, program);
                    var attribSetters = createAttributeSetters(gl63, program);
                    var programInfo = {
                        program: program,
                        uniformSetters: uniformSetters,
                        attribSetters: attribSetters
                    };
                    if (utils.isWebGL2(gl63)) {
                        programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl63, program);
                        programInfo.transformFeedbackInfo = createTransformFeedbackInfo(gl63, program);
                    }
                    return programInfo;
                }
                function createProgramInfo(gl64, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
                    var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
                    var good = true;
                    shaderSources = shaderSources.map(function(source) {
                        if (source.indexOf("\n") < 0) {
                            var script = getElementById(source);
                            if (!script) {
                                progOptions.errorCallback("no element with id: " + source);
                                good = false;
                            } else {
                                source = script.text;
                            }
                        }
                        return source;
                    });
                    if (!good) {
                        return null;
                    }
                    var program = createProgramFromSources(gl64, shaderSources, progOptions);
                    if (!program) {
                        return null;
                    }
                    return createProgramInfoFromProgram(gl64, program);
                }
            },
            "./src/textures.js": function(module, exports10, __webpack_require__) {
                "use strict";
                function _typeof(obj7) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj7);
                }
                exports10.__esModule = true;
                exports10.setTextureDefaults_ = setDefaults;
                exports10.createSampler = createSampler;
                exports10.createSamplers = createSamplers;
                exports10.setSamplerParameters = setSamplerParameters;
                exports10.createTexture = createTexture;
                exports10.setEmptyTexture = setEmptyTexture;
                exports10.setTextureFromArray = setTextureFromArray;
                exports10.loadTextureFromUrl = loadTextureFromUrl;
                exports10.setTextureFromElement = setTextureFromElement;
                exports10.setTextureFilteringForSize = setTextureFilteringForSize;
                exports10.setTextureParameters = setTextureParameters;
                exports10.setDefaultTextureColor = setDefaultTextureColor;
                exports10.createTextures = createTextures;
                exports10.resizeTexture = resizeTexture;
                exports10.canGenerateMipmap = canGenerateMipmap;
                exports10.canFilter = canFilter;
                exports10.getNumComponentsForFormat = getNumComponentsForFormat;
                exports10.getBytesPerElementForInternalFormat = getBytesPerElementForInternalFormat;
                exports10.getFormatAndTypeForInternalFormat = getFormatAndTypeForInternalFormat;
                var utils = _interopRequireWildcard(__webpack_require__("./src/utils.js"));
                var typedArrays = _interopRequireWildcard(__webpack_require__("./src/typedarrays.js"));
                var helper = _interopRequireWildcard(__webpack_require__("./src/helper.js"));
                function _getRequireWildcardCache() {
                    if (typeof WeakMap !== "function") return null;
                    var cache = new WeakMap();
                    _getRequireWildcardCache = function _getRequireWildcardCache() {
                        return cache;
                    };
                    return cache;
                }
                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    }
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                        return {
                            "default": obj
                        };
                    }
                    var cache = _getRequireWildcardCache();
                    if (cache && cache.has(obj)) {
                        return cache.get(obj);
                    }
                    var newObj = {};
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj){
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                            if (desc && (desc.get || desc.set)) {
                                Object.defineProperty(newObj, key, desc);
                            } else {
                                newObj[key] = obj[key];
                            }
                        }
                    }
                    newObj["default"] = obj;
                    if (cache) {
                        cache.set(obj, newObj);
                    }
                    return newObj;
                }
                var defaults = {
                    textureColor: new Uint8Array([
                        128,
                        192,
                        255,
                        255
                    ]),
                    textureOptions: {},
                    crossOrigin: undefined
                };
                var isArrayBuffer = typedArrays.isArrayBuffer;
                var getShared2DContext = function() {
                    var s_ctx;
                    return function getShared2DContext() {
                        s_ctx = s_ctx || (typeof document !== 'undefined' && document.createElement ? document.createElement("canvas").getContext("2d") : null);
                        return s_ctx;
                    };
                }();
                var ALPHA = 6406;
                var RGB = 6407;
                var RGBA = 6408;
                var LUMINANCE = 6409;
                var LUMINANCE_ALPHA = 6410;
                var DEPTH_COMPONENT = 6402;
                var DEPTH_STENCIL = 34041;
                var CLAMP_TO_EDGE = 33071;
                var NEAREST = 9728;
                var LINEAR = 9729;
                var TEXTURE_2D = 3553;
                var TEXTURE_CUBE_MAP = 34067;
                var TEXTURE_3D = 32879;
                var TEXTURE_2D_ARRAY = 35866;
                var TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
                var TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
                var TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
                var TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
                var TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
                var TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
                var TEXTURE_MIN_FILTER = 10241;
                var TEXTURE_MAG_FILTER = 10240;
                var TEXTURE_WRAP_S = 10242;
                var TEXTURE_WRAP_T = 10243;
                var TEXTURE_WRAP_R = 32882;
                var TEXTURE_MIN_LOD = 33082;
                var TEXTURE_MAX_LOD = 33083;
                var TEXTURE_BASE_LEVEL = 33084;
                var TEXTURE_MAX_LEVEL = 33085;
                var UNPACK_ALIGNMENT = 3317;
                var UNPACK_ROW_LENGTH = 3314;
                var UNPACK_IMAGE_HEIGHT = 32878;
                var UNPACK_SKIP_PIXELS = 3316;
                var UNPACK_SKIP_ROWS = 3315;
                var UNPACK_SKIP_IMAGES = 32877;
                var UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443;
                var UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
                var UNPACK_FLIP_Y_WEBGL = 37440;
                var R8 = 33321;
                var R8_SNORM = 36756;
                var R16F = 33325;
                var R32F = 33326;
                var R8UI = 33330;
                var R8I = 33329;
                var RG16UI = 33338;
                var RG16I = 33337;
                var RG32UI = 33340;
                var RG32I = 33339;
                var RG8 = 33323;
                var RG8_SNORM = 36757;
                var RG16F = 33327;
                var RG32F = 33328;
                var RG8UI = 33336;
                var RG8I = 33335;
                var R16UI = 33332;
                var R16I = 33331;
                var R32UI = 33334;
                var R32I = 33333;
                var RGB8 = 32849;
                var SRGB8 = 35905;
                var RGB565 = 36194;
                var RGB8_SNORM = 36758;
                var R11F_G11F_B10F = 35898;
                var RGB9_E5 = 35901;
                var RGB16F = 34843;
                var RGB32F = 34837;
                var RGB8UI = 36221;
                var RGB8I = 36239;
                var RGB16UI = 36215;
                var RGB16I = 36233;
                var RGB32UI = 36209;
                var RGB32I = 36227;
                var RGBA8 = 32856;
                var SRGB8_ALPHA8 = 35907;
                var RGBA8_SNORM = 36759;
                var RGB5_A1 = 32855;
                var RGBA4 = 32854;
                var RGB10_A2 = 32857;
                var RGBA16F = 34842;
                var RGBA32F = 34836;
                var RGBA8UI = 36220;
                var RGBA8I = 36238;
                var RGB10_A2UI = 36975;
                var RGBA16UI = 36214;
                var RGBA16I = 36232;
                var RGBA32I = 36226;
                var RGBA32UI = 36208;
                var DEPTH_COMPONENT16 = 33189;
                var DEPTH_COMPONENT24 = 33190;
                var DEPTH_COMPONENT32F = 36012;
                var DEPTH32F_STENCIL8 = 36013;
                var DEPTH24_STENCIL8 = 35056;
                var BYTE = 5120;
                var UNSIGNED_BYTE = 5121;
                var SHORT = 5122;
                var UNSIGNED_SHORT = 5123;
                var INT = 5124;
                var UNSIGNED_INT = 5125;
                var FLOAT = 5126;
                var UNSIGNED_SHORT_4_4_4_4 = 32819;
                var UNSIGNED_SHORT_5_5_5_1 = 32820;
                var UNSIGNED_SHORT_5_6_5 = 33635;
                var HALF_FLOAT = 5131;
                var HALF_FLOAT_OES = 36193;
                var UNSIGNED_INT_2_10_10_10_REV = 33640;
                var UNSIGNED_INT_10F_11F_11F_REV = 35899;
                var UNSIGNED_INT_5_9_9_9_REV = 35902;
                var FLOAT_32_UNSIGNED_INT_24_8_REV = 36269;
                var UNSIGNED_INT_24_8 = 34042;
                var RG = 33319;
                var RG_INTEGER = 33320;
                var RED = 6403;
                var RED_INTEGER = 36244;
                var RGB_INTEGER = 36248;
                var RGBA_INTEGER = 36249;
                var formatInfo = {};
                {
                    var f = formatInfo;
                    f[ALPHA] = {
                        numColorComponents: 1
                    };
                    f[LUMINANCE] = {
                        numColorComponents: 1
                    };
                    f[LUMINANCE_ALPHA] = {
                        numColorComponents: 2
                    };
                    f[RGB] = {
                        numColorComponents: 3
                    };
                    f[RGBA] = {
                        numColorComponents: 4
                    };
                    f[RED] = {
                        numColorComponents: 1
                    };
                    f[RED_INTEGER] = {
                        numColorComponents: 1
                    };
                    f[RG] = {
                        numColorComponents: 2
                    };
                    f[RG_INTEGER] = {
                        numColorComponents: 2
                    };
                    f[RGB] = {
                        numColorComponents: 3
                    };
                    f[RGB_INTEGER] = {
                        numColorComponents: 3
                    };
                    f[RGBA] = {
                        numColorComponents: 4
                    };
                    f[RGBA_INTEGER] = {
                        numColorComponents: 4
                    };
                    f[DEPTH_COMPONENT] = {
                        numColorComponents: 1
                    };
                    f[DEPTH_STENCIL] = {
                        numColorComponents: 2
                    };
                }
                var s_textureInternalFormatInfo;
                function getTextureInternalFormatInfo(internalFormat1) {
                    if (!s_textureInternalFormatInfo) {
                        var t = {};
                        t[ALPHA] = {
                            textureFormat: ALPHA,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                1,
                                2,
                                2,
                                4
                            ],
                            type: [
                                UNSIGNED_BYTE,
                                HALF_FLOAT,
                                HALF_FLOAT_OES,
                                FLOAT
                            ]
                        };
                        t[LUMINANCE] = {
                            textureFormat: LUMINANCE,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                1,
                                2,
                                2,
                                4
                            ],
                            type: [
                                UNSIGNED_BYTE,
                                HALF_FLOAT,
                                HALF_FLOAT_OES,
                                FLOAT
                            ]
                        };
                        t[LUMINANCE_ALPHA] = {
                            textureFormat: LUMINANCE_ALPHA,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                2,
                                4,
                                4,
                                8
                            ],
                            type: [
                                UNSIGNED_BYTE,
                                HALF_FLOAT,
                                HALF_FLOAT_OES,
                                FLOAT
                            ]
                        };
                        t[RGB] = {
                            textureFormat: RGB,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                3,
                                6,
                                6,
                                12,
                                2
                            ],
                            type: [
                                UNSIGNED_BYTE,
                                HALF_FLOAT,
                                HALF_FLOAT_OES,
                                FLOAT,
                                UNSIGNED_SHORT_5_6_5
                            ]
                        };
                        t[RGBA] = {
                            textureFormat: RGBA,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                4,
                                8,
                                8,
                                16,
                                2,
                                2
                            ],
                            type: [
                                UNSIGNED_BYTE,
                                HALF_FLOAT,
                                HALF_FLOAT_OES,
                                FLOAT,
                                UNSIGNED_SHORT_4_4_4_4,
                                UNSIGNED_SHORT_5_5_5_1
                            ]
                        };
                        t[DEPTH_COMPONENT] = {
                            textureFormat: DEPTH_COMPONENT,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                2,
                                4
                            ],
                            type: [
                                UNSIGNED_INT,
                                UNSIGNED_SHORT
                            ]
                        };
                        t[R8] = {
                            textureFormat: RED,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                1
                            ],
                            type: [
                                UNSIGNED_BYTE
                            ]
                        };
                        t[R8_SNORM] = {
                            textureFormat: RED,
                            colorRenderable: false,
                            textureFilterable: true,
                            bytesPerElement: [
                                1
                            ],
                            type: [
                                BYTE
                            ]
                        };
                        t[R16F] = {
                            textureFormat: RED,
                            colorRenderable: false,
                            textureFilterable: true,
                            bytesPerElement: [
                                4,
                                2
                            ],
                            type: [
                                FLOAT,
                                HALF_FLOAT
                            ]
                        };
                        t[R32F] = {
                            textureFormat: RED,
                            colorRenderable: false,
                            textureFilterable: false,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                FLOAT
                            ]
                        };
                        t[R8UI] = {
                            textureFormat: RED_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                1
                            ],
                            type: [
                                UNSIGNED_BYTE
                            ]
                        };
                        t[R8I] = {
                            textureFormat: RED_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                1
                            ],
                            type: [
                                BYTE
                            ]
                        };
                        t[R16UI] = {
                            textureFormat: RED_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                2
                            ],
                            type: [
                                UNSIGNED_SHORT
                            ]
                        };
                        t[R16I] = {
                            textureFormat: RED_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                2
                            ],
                            type: [
                                SHORT
                            ]
                        };
                        t[R32UI] = {
                            textureFormat: RED_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                UNSIGNED_INT
                            ]
                        };
                        t[R32I] = {
                            textureFormat: RED_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                INT
                            ]
                        };
                        t[RG8] = {
                            textureFormat: RG,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                2
                            ],
                            type: [
                                UNSIGNED_BYTE
                            ]
                        };
                        t[RG8_SNORM] = {
                            textureFormat: RG,
                            colorRenderable: false,
                            textureFilterable: true,
                            bytesPerElement: [
                                2
                            ],
                            type: [
                                BYTE
                            ]
                        };
                        t[RG16F] = {
                            textureFormat: RG,
                            colorRenderable: false,
                            textureFilterable: true,
                            bytesPerElement: [
                                8,
                                4
                            ],
                            type: [
                                FLOAT,
                                HALF_FLOAT
                            ]
                        };
                        t[RG32F] = {
                            textureFormat: RG,
                            colorRenderable: false,
                            textureFilterable: false,
                            bytesPerElement: [
                                8
                            ],
                            type: [
                                FLOAT
                            ]
                        };
                        t[RG8UI] = {
                            textureFormat: RG_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                2
                            ],
                            type: [
                                UNSIGNED_BYTE
                            ]
                        };
                        t[RG8I] = {
                            textureFormat: RG_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                2
                            ],
                            type: [
                                BYTE
                            ]
                        };
                        t[RG16UI] = {
                            textureFormat: RG_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                UNSIGNED_SHORT
                            ]
                        };
                        t[RG16I] = {
                            textureFormat: RG_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                SHORT
                            ]
                        };
                        t[RG32UI] = {
                            textureFormat: RG_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                8
                            ],
                            type: [
                                UNSIGNED_INT
                            ]
                        };
                        t[RG32I] = {
                            textureFormat: RG_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                8
                            ],
                            type: [
                                INT
                            ]
                        };
                        t[RGB8] = {
                            textureFormat: RGB,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                3
                            ],
                            type: [
                                UNSIGNED_BYTE
                            ]
                        };
                        t[SRGB8] = {
                            textureFormat: RGB,
                            colorRenderable: false,
                            textureFilterable: true,
                            bytesPerElement: [
                                3
                            ],
                            type: [
                                UNSIGNED_BYTE
                            ]
                        };
                        t[RGB565] = {
                            textureFormat: RGB,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                3,
                                2
                            ],
                            type: [
                                UNSIGNED_BYTE,
                                UNSIGNED_SHORT_5_6_5
                            ]
                        };
                        t[RGB8_SNORM] = {
                            textureFormat: RGB,
                            colorRenderable: false,
                            textureFilterable: true,
                            bytesPerElement: [
                                3
                            ],
                            type: [
                                BYTE
                            ]
                        };
                        t[R11F_G11F_B10F] = {
                            textureFormat: RGB,
                            colorRenderable: false,
                            textureFilterable: true,
                            bytesPerElement: [
                                12,
                                6,
                                4
                            ],
                            type: [
                                FLOAT,
                                HALF_FLOAT,
                                UNSIGNED_INT_10F_11F_11F_REV
                            ]
                        };
                        t[RGB9_E5] = {
                            textureFormat: RGB,
                            colorRenderable: false,
                            textureFilterable: true,
                            bytesPerElement: [
                                12,
                                6,
                                4
                            ],
                            type: [
                                FLOAT,
                                HALF_FLOAT,
                                UNSIGNED_INT_5_9_9_9_REV
                            ]
                        };
                        t[RGB16F] = {
                            textureFormat: RGB,
                            colorRenderable: false,
                            textureFilterable: true,
                            bytesPerElement: [
                                12,
                                6
                            ],
                            type: [
                                FLOAT,
                                HALF_FLOAT
                            ]
                        };
                        t[RGB32F] = {
                            textureFormat: RGB,
                            colorRenderable: false,
                            textureFilterable: false,
                            bytesPerElement: [
                                12
                            ],
                            type: [
                                FLOAT
                            ]
                        };
                        t[RGB8UI] = {
                            textureFormat: RGB_INTEGER,
                            colorRenderable: false,
                            textureFilterable: false,
                            bytesPerElement: [
                                3
                            ],
                            type: [
                                UNSIGNED_BYTE
                            ]
                        };
                        t[RGB8I] = {
                            textureFormat: RGB_INTEGER,
                            colorRenderable: false,
                            textureFilterable: false,
                            bytesPerElement: [
                                3
                            ],
                            type: [
                                BYTE
                            ]
                        };
                        t[RGB16UI] = {
                            textureFormat: RGB_INTEGER,
                            colorRenderable: false,
                            textureFilterable: false,
                            bytesPerElement: [
                                6
                            ],
                            type: [
                                UNSIGNED_SHORT
                            ]
                        };
                        t[RGB16I] = {
                            textureFormat: RGB_INTEGER,
                            colorRenderable: false,
                            textureFilterable: false,
                            bytesPerElement: [
                                6
                            ],
                            type: [
                                SHORT
                            ]
                        };
                        t[RGB32UI] = {
                            textureFormat: RGB_INTEGER,
                            colorRenderable: false,
                            textureFilterable: false,
                            bytesPerElement: [
                                12
                            ],
                            type: [
                                UNSIGNED_INT
                            ]
                        };
                        t[RGB32I] = {
                            textureFormat: RGB_INTEGER,
                            colorRenderable: false,
                            textureFilterable: false,
                            bytesPerElement: [
                                12
                            ],
                            type: [
                                INT
                            ]
                        };
                        t[RGBA8] = {
                            textureFormat: RGBA,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                UNSIGNED_BYTE
                            ]
                        };
                        t[SRGB8_ALPHA8] = {
                            textureFormat: RGBA,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                UNSIGNED_BYTE
                            ]
                        };
                        t[RGBA8_SNORM] = {
                            textureFormat: RGBA,
                            colorRenderable: false,
                            textureFilterable: true,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                BYTE
                            ]
                        };
                        t[RGB5_A1] = {
                            textureFormat: RGBA,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                4,
                                2,
                                4
                            ],
                            type: [
                                UNSIGNED_BYTE,
                                UNSIGNED_SHORT_5_5_5_1,
                                UNSIGNED_INT_2_10_10_10_REV
                            ]
                        };
                        t[RGBA4] = {
                            textureFormat: RGBA,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                4,
                                2
                            ],
                            type: [
                                UNSIGNED_BYTE,
                                UNSIGNED_SHORT_4_4_4_4
                            ]
                        };
                        t[RGB10_A2] = {
                            textureFormat: RGBA,
                            colorRenderable: true,
                            textureFilterable: true,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                UNSIGNED_INT_2_10_10_10_REV
                            ]
                        };
                        t[RGBA16F] = {
                            textureFormat: RGBA,
                            colorRenderable: false,
                            textureFilterable: true,
                            bytesPerElement: [
                                16,
                                8
                            ],
                            type: [
                                FLOAT,
                                HALF_FLOAT
                            ]
                        };
                        t[RGBA32F] = {
                            textureFormat: RGBA,
                            colorRenderable: false,
                            textureFilterable: false,
                            bytesPerElement: [
                                16
                            ],
                            type: [
                                FLOAT
                            ]
                        };
                        t[RGBA8UI] = {
                            textureFormat: RGBA_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                UNSIGNED_BYTE
                            ]
                        };
                        t[RGBA8I] = {
                            textureFormat: RGBA_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                BYTE
                            ]
                        };
                        t[RGB10_A2UI] = {
                            textureFormat: RGBA_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                UNSIGNED_INT_2_10_10_10_REV
                            ]
                        };
                        t[RGBA16UI] = {
                            textureFormat: RGBA_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                8
                            ],
                            type: [
                                UNSIGNED_SHORT
                            ]
                        };
                        t[RGBA16I] = {
                            textureFormat: RGBA_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                8
                            ],
                            type: [
                                SHORT
                            ]
                        };
                        t[RGBA32I] = {
                            textureFormat: RGBA_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                16
                            ],
                            type: [
                                INT
                            ]
                        };
                        t[RGBA32UI] = {
                            textureFormat: RGBA_INTEGER,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                16
                            ],
                            type: [
                                UNSIGNED_INT
                            ]
                        };
                        t[DEPTH_COMPONENT16] = {
                            textureFormat: DEPTH_COMPONENT,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                2,
                                4
                            ],
                            type: [
                                UNSIGNED_SHORT,
                                UNSIGNED_INT
                            ]
                        };
                        t[DEPTH_COMPONENT24] = {
                            textureFormat: DEPTH_COMPONENT,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                UNSIGNED_INT
                            ]
                        };
                        t[DEPTH_COMPONENT32F] = {
                            textureFormat: DEPTH_COMPONENT,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                FLOAT
                            ]
                        };
                        t[DEPTH24_STENCIL8] = {
                            textureFormat: DEPTH_STENCIL,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                UNSIGNED_INT_24_8
                            ]
                        };
                        t[DEPTH32F_STENCIL8] = {
                            textureFormat: DEPTH_STENCIL,
                            colorRenderable: true,
                            textureFilterable: false,
                            bytesPerElement: [
                                4
                            ],
                            type: [
                                FLOAT_32_UNSIGNED_INT_24_8_REV
                            ]
                        };
                        Object.keys(t).forEach(function(internalFormat) {
                            var info = t[internalFormat];
                            info.bytesPerElementMap = {};
                            info.bytesPerElement.forEach(function(bytesPerElement, ndx) {
                                var type = info.type[ndx];
                                info.bytesPerElementMap[type] = bytesPerElement;
                            });
                        });
                        s_textureInternalFormatInfo = t;
                    }
                    return s_textureInternalFormatInfo[internalFormat1];
                }
                function getBytesPerElementForInternalFormat(internalFormat, type) {
                    var info = getTextureInternalFormatInfo(internalFormat);
                    if (!info) {
                        throw "unknown internal format";
                    }
                    var bytesPerElement = info.bytesPerElementMap[type];
                    if (bytesPerElement === undefined) {
                        throw "unknown internal format";
                    }
                    return bytesPerElement;
                }
                function getFormatAndTypeForInternalFormat(internalFormat) {
                    var info = getTextureInternalFormatInfo(internalFormat);
                    if (!info) {
                        throw "unknown internal format";
                    }
                    return {
                        format: info.textureFormat,
                        type: info.type[0]
                    };
                }
                function isPowerOf2(value) {
                    return (value & value - 1) === 0;
                }
                function canGenerateMipmap(gl65, width, height, internalFormat) {
                    if (!utils.isWebGL2(gl65)) {
                        return isPowerOf2(width) && isPowerOf2(height);
                    }
                    var info = getTextureInternalFormatInfo(internalFormat);
                    if (!info) {
                        throw "unknown internal format";
                    }
                    return info.colorRenderable && info.textureFilterable;
                }
                function canFilter(internalFormat) {
                    var info = getTextureInternalFormatInfo(internalFormat);
                    if (!info) {
                        throw "unknown internal format";
                    }
                    return info.textureFilterable;
                }
                function getNumComponentsForFormat(format) {
                    var info = formatInfo[format];
                    if (!info) {
                        throw "unknown format: " + format;
                    }
                    return info.numColorComponents;
                }
                function getTextureTypeForArrayType(gl, src, defaultType) {
                    if (isArrayBuffer(src)) {
                        return typedArrays.getGLTypeForTypedArray(src);
                    }
                    return defaultType || UNSIGNED_BYTE;
                }
                function guessDimensions(gl, target, width, height, numElements) {
                    if (numElements % 1 !== 0) {
                        throw "can't guess dimensions";
                    }
                    if (!width && !height) {
                        var size = Math.sqrt(numElements / (target === TEXTURE_CUBE_MAP ? 6 : 1));
                        if (size % 1 === 0) {
                            width = size;
                            height = size;
                        } else {
                            width = numElements;
                            height = 1;
                        }
                    } else if (!height) {
                        height = numElements / width;
                        if (height % 1) {
                            throw "can't guess dimensions";
                        }
                    } else if (!width) {
                        width = numElements / height;
                        if (width % 1) {
                            throw "can't guess dimensions";
                        }
                    }
                    return {
                        width: width,
                        height: height
                    };
                }
                function setDefaultTextureColor(color) {
                    defaults.textureColor = new Uint8Array([
                        color[0] * 255,
                        color[1] * 255,
                        color[2] * 255,
                        color[3] * 255
                    ]);
                }
                function setDefaults(newDefaults) {
                    helper.copyExistingProperties(newDefaults, defaults);
                    if (newDefaults.textureColor) {
                        setDefaultTextureColor(newDefaults.textureColor);
                    }
                }
                function setPackState(gl66, options) {
                    if (options.colorspaceConversion !== undefined) {
                        gl66.pixelStorei(UNPACK_COLORSPACE_CONVERSION_WEBGL, options.colorspaceConversion);
                    }
                    if (options.premultiplyAlpha !== undefined) {
                        gl66.pixelStorei(UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.premultiplyAlpha);
                    }
                    if (options.flipY !== undefined) {
                        gl66.pixelStorei(UNPACK_FLIP_Y_WEBGL, options.flipY);
                    }
                }
                function setSkipStateToDefault(gl67) {
                    gl67.pixelStorei(UNPACK_ALIGNMENT, 4);
                    if (utils.isWebGL2(gl67)) {
                        gl67.pixelStorei(UNPACK_ROW_LENGTH, 0);
                        gl67.pixelStorei(UNPACK_IMAGE_HEIGHT, 0);
                        gl67.pixelStorei(UNPACK_SKIP_PIXELS, 0);
                        gl67.pixelStorei(UNPACK_SKIP_ROWS, 0);
                        gl67.pixelStorei(UNPACK_SKIP_IMAGES, 0);
                    }
                }
                function setTextureSamplerParameters(gl68, target, parameteriFn, options) {
                    if (options.minMag) {
                        parameteriFn.call(gl68, target, TEXTURE_MIN_FILTER, options.minMag);
                        parameteriFn.call(gl68, target, TEXTURE_MAG_FILTER, options.minMag);
                    }
                    if (options.min) {
                        parameteriFn.call(gl68, target, TEXTURE_MIN_FILTER, options.min);
                    }
                    if (options.mag) {
                        parameteriFn.call(gl68, target, TEXTURE_MAG_FILTER, options.mag);
                    }
                    if (options.wrap) {
                        parameteriFn.call(gl68, target, TEXTURE_WRAP_S, options.wrap);
                        parameteriFn.call(gl68, target, TEXTURE_WRAP_T, options.wrap);
                        if (target === TEXTURE_3D || helper.isSampler(gl68, target)) {
                            parameteriFn.call(gl68, target, TEXTURE_WRAP_R, options.wrap);
                        }
                    }
                    if (options.wrapR) {
                        parameteriFn.call(gl68, target, TEXTURE_WRAP_R, options.wrapR);
                    }
                    if (options.wrapS) {
                        parameteriFn.call(gl68, target, TEXTURE_WRAP_S, options.wrapS);
                    }
                    if (options.wrapT) {
                        parameteriFn.call(gl68, target, TEXTURE_WRAP_T, options.wrapT);
                    }
                    if (options.minLod) {
                        parameteriFn.call(gl68, target, TEXTURE_MIN_LOD, options.minLod);
                    }
                    if (options.maxLod) {
                        parameteriFn.call(gl68, target, TEXTURE_MAX_LOD, options.maxLod);
                    }
                    if (options.baseLevel) {
                        parameteriFn.call(gl68, target, TEXTURE_BASE_LEVEL, options.baseLevel);
                    }
                    if (options.maxLevel) {
                        parameteriFn.call(gl68, target, TEXTURE_MAX_LEVEL, options.maxLevel);
                    }
                }
                function setTextureParameters(gl69, tex, options) {
                    var target = options.target || TEXTURE_2D;
                    gl69.bindTexture(target, tex);
                    setTextureSamplerParameters(gl69, target, gl69.texParameteri, options);
                }
                function setSamplerParameters(gl70, sampler, options) {
                    setTextureSamplerParameters(gl70, sampler, gl70.samplerParameteri, options);
                }
                function createSampler(gl71, options) {
                    var sampler = gl71.createSampler();
                    setSamplerParameters(gl71, sampler, options);
                    return sampler;
                }
                function createSamplers(gl72, samplerOptions) {
                    var samplers = {};
                    Object.keys(samplerOptions).forEach(function(name) {
                        samplers[name] = createSampler(gl72, samplerOptions[name]);
                    });
                    return samplers;
                }
                function make1Pixel(color) {
                    color = color || defaults.textureColor;
                    if (isArrayBuffer(color)) {
                        return color;
                    }
                    return new Uint8Array([
                        color[0] * 255,
                        color[1] * 255,
                        color[2] * 255,
                        color[3] * 255
                    ]);
                }
                function setTextureFilteringForSize(gl73, tex, options, width, height, internalFormat) {
                    options = options || defaults.textureOptions;
                    internalFormat = internalFormat || RGBA;
                    var target = options.target || TEXTURE_2D;
                    width = width || options.width;
                    height = height || options.height;
                    gl73.bindTexture(target, tex);
                    if (canGenerateMipmap(gl73, width, height, internalFormat)) {
                        gl73.generateMipmap(target);
                    } else {
                        var filtering = canFilter(internalFormat) ? LINEAR : NEAREST;
                        gl73.texParameteri(target, TEXTURE_MIN_FILTER, filtering);
                        gl73.texParameteri(target, TEXTURE_MAG_FILTER, filtering);
                        gl73.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
                        gl73.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
                    }
                }
                function shouldAutomaticallySetTextureFilteringForSize(options) {
                    return options.auto === true || options.auto === undefined && options.level === undefined;
                }
                function getCubeFaceOrder(gl, options) {
                    options = options || {};
                    return options.cubeFaceOrder || [
                        TEXTURE_CUBE_MAP_POSITIVE_X,
                        TEXTURE_CUBE_MAP_NEGATIVE_X,
                        TEXTURE_CUBE_MAP_POSITIVE_Y,
                        TEXTURE_CUBE_MAP_NEGATIVE_Y,
                        TEXTURE_CUBE_MAP_POSITIVE_Z,
                        TEXTURE_CUBE_MAP_NEGATIVE_Z
                    ];
                }
                function getCubeFacesWithNdx(gl74, options) {
                    var faces = getCubeFaceOrder(gl74, options);
                    var facesWithNdx = faces.map(function(face, ndx) {
                        return {
                            face: face,
                            ndx: ndx
                        };
                    });
                    facesWithNdx.sort(function(a, b) {
                        return a.face - b.face;
                    });
                    return facesWithNdx;
                }
                function setTextureFromElement(gl75, tex, element, options) {
                    options = options || defaults.textureOptions;
                    var target = options.target || TEXTURE_2D;
                    var level = options.level || 0;
                    var width = element.width;
                    var height = element.height;
                    var internalFormat = options.internalFormat || options.format || RGBA;
                    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
                    var format = options.format || formatType.format;
                    var type = options.type || formatType.type;
                    setPackState(gl75, options);
                    gl75.bindTexture(target, tex);
                    if (target === TEXTURE_CUBE_MAP) {
                        var imgWidth = element.width;
                        var imgHeight = element.height;
                        var size;
                        var slices;
                        if (imgWidth / 6 === imgHeight) {
                            size = imgHeight;
                            slices = [
                                0,
                                0,
                                1,
                                0,
                                2,
                                0,
                                3,
                                0,
                                4,
                                0,
                                5,
                                0
                            ];
                        } else if (imgHeight / 6 === imgWidth) {
                            size = imgWidth;
                            slices = [
                                0,
                                0,
                                0,
                                1,
                                0,
                                2,
                                0,
                                3,
                                0,
                                4,
                                0,
                                5
                            ];
                        } else if (imgWidth / 3 === imgHeight / 2) {
                            size = imgWidth / 3;
                            slices = [
                                0,
                                0,
                                1,
                                0,
                                2,
                                0,
                                0,
                                1,
                                1,
                                1,
                                2,
                                1
                            ];
                        } else if (imgWidth / 2 === imgHeight / 3) {
                            size = imgWidth / 2;
                            slices = [
                                0,
                                0,
                                1,
                                0,
                                0,
                                1,
                                1,
                                1,
                                0,
                                2,
                                1,
                                2
                            ];
                        } else {
                            throw "can't figure out cube map from element: " + (element.src ? element.src : element.nodeName);
                        }
                        var ctx = getShared2DContext();
                        if (ctx) {
                            ctx.canvas.width = size;
                            ctx.canvas.height = size;
                            width = size;
                            height = size;
                            getCubeFacesWithNdx(gl75, options).forEach(function(f) {
                                var xOffset = slices[f.ndx * 2 + 0] * size;
                                var yOffset = slices[f.ndx * 2 + 1] * size;
                                ctx.drawImage(element, xOffset, yOffset, size, size, 0, 0, size, size);
                                gl75.texImage2D(f.face, level, internalFormat, format, type, ctx.canvas);
                            });
                            ctx.canvas.width = 1;
                            ctx.canvas.height = 1;
                        } else if (typeof createImageBitmap !== 'undefined') {
                            width = size;
                            height = size;
                            getCubeFacesWithNdx(gl75, options).forEach(function(f) {
                                var xOffset = slices[f.ndx * 2 + 0] * size;
                                var yOffset = slices[f.ndx * 2 + 1] * size;
                                gl75.texImage2D(f.face, level, internalFormat, size, size, 0, format, type, null);
                                createImageBitmap(element, xOffset, yOffset, size, size, {
                                    premultiplyAlpha: 'none',
                                    colorSpaceConversion: 'none'
                                }).then(function(imageBitmap) {
                                    setPackState(gl75, options);
                                    gl75.bindTexture(target, tex);
                                    gl75.texImage2D(f.face, level, internalFormat, format, type, imageBitmap);
                                    if (shouldAutomaticallySetTextureFilteringForSize(options)) {
                                        setTextureFilteringForSize(gl75, tex, options, width, height, internalFormat);
                                    }
                                });
                            });
                        }
                    } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
                        var smallest = Math.min(element.width, element.height);
                        var largest = Math.max(element.width, element.height);
                        var depth = largest / smallest;
                        if (depth % 1 !== 0) {
                            throw "can not compute 3D dimensions of element";
                        }
                        var xMult = element.width === largest ? 1 : 0;
                        var yMult = element.height === largest ? 1 : 0;
                        gl75.pixelStorei(UNPACK_ALIGNMENT, 1);
                        gl75.pixelStorei(UNPACK_ROW_LENGTH, element.width);
                        gl75.pixelStorei(UNPACK_IMAGE_HEIGHT, 0);
                        gl75.pixelStorei(UNPACK_SKIP_IMAGES, 0);
                        gl75.texImage3D(target, level, internalFormat, smallest, smallest, smallest, 0, format, type, null);
                        for(var d = 0; d < depth; ++d){
                            var srcX = d * smallest * xMult;
                            var srcY = d * smallest * yMult;
                            gl75.pixelStorei(UNPACK_SKIP_PIXELS, srcX);
                            gl75.pixelStorei(UNPACK_SKIP_ROWS, srcY);
                            gl75.texSubImage3D(target, level, 0, 0, d, smallest, smallest, 1, format, type, element);
                        }
                        setSkipStateToDefault(gl75);
                    } else {
                        gl75.texImage2D(target, level, internalFormat, format, type, element);
                    }
                    if (shouldAutomaticallySetTextureFilteringForSize(options)) {
                        setTextureFilteringForSize(gl75, tex, options, width, height, internalFormat);
                    }
                    setTextureParameters(gl75, tex, options);
                }
                function noop() {}
                function urlIsSameOrigin(url) {
                    if (typeof document !== 'undefined') {
                        var a = document.createElement('a');
                        a.href = url;
                        return a.hostname === location.hostname && a.port === location.port && a.protocol === location.protocol;
                    } else {
                        var localOrigin = new URL(location.href).origin;
                        var urlOrigin = new URL(url, location.href).origin;
                        return urlOrigin === localOrigin;
                    }
                }
                function setToAnonymousIfUndefinedAndURLIsNotSameOrigin(url, crossOrigin) {
                    return crossOrigin === undefined && !urlIsSameOrigin(url) ? 'anonymous' : crossOrigin;
                }
                function loadImage(url, crossOrigin, callback) {
                    callback = callback || noop;
                    var img;
                    crossOrigin = crossOrigin !== undefined ? crossOrigin : defaults.crossOrigin;
                    crossOrigin = setToAnonymousIfUndefinedAndURLIsNotSameOrigin(url, crossOrigin);
                    if (typeof Image !== 'undefined') {
                        img = new Image();
                        if (crossOrigin !== undefined) {
                            img.crossOrigin = crossOrigin;
                        }
                        var clearEventHandlers = function clearEventHandlers() {
                            img.removeEventListener('error', onError);
                            img.removeEventListener('load', onLoad);
                            img = null;
                        };
                        var onError = function onError() {
                            var msg = "couldn't load image: " + url;
                            helper.error(msg);
                            callback(msg, img);
                            clearEventHandlers();
                        };
                        var onLoad = function onLoad() {
                            callback(null, img);
                            clearEventHandlers();
                        };
                        img.addEventListener('error', onError);
                        img.addEventListener('load', onLoad);
                        img.src = url;
                        return img;
                    } else if (typeof ImageBitmap !== 'undefined') {
                        var err;
                        var bm;
                        var cb = function cb() {
                            callback(err, bm);
                        };
                        var options = {};
                        if (crossOrigin) {
                            options.mode = 'cors';
                        }
                        fetch(url, options).then(function(response) {
                            if (!response.ok) {
                                throw response;
                            }
                            return response.blob();
                        }).then(function(blob) {
                            return createImageBitmap(blob, {
                                premultiplyAlpha: 'none',
                                colorSpaceConversion: 'none'
                            });
                        }).then(function(bitmap) {
                            bm = bitmap;
                            setTimeout(cb);
                        })["catch"](function(e) {
                            err = e;
                            setTimeout(cb);
                        });
                        img = null;
                    }
                    return img;
                }
                function isTexImageSource(obj) {
                    return typeof ImageBitmap !== 'undefined' && obj instanceof ImageBitmap || typeof ImageData !== 'undefined' && obj instanceof ImageData || typeof HTMLElement !== 'undefined' && obj instanceof HTMLElement;
                }
                function loadAndUseImage(obj, crossOrigin, callback) {
                    if (isTexImageSource(obj)) {
                        setTimeout(function() {
                            callback(null, obj);
                        });
                        return obj;
                    }
                    return loadImage(obj, crossOrigin, callback);
                }
                function setTextureTo1PixelColor(gl76, tex, options) {
                    options = options || defaults.textureOptions;
                    var target = options.target || TEXTURE_2D;
                    gl76.bindTexture(target, tex);
                    if (options.color === false) {
                        return;
                    }
                    var color = make1Pixel(options.color);
                    if (target === TEXTURE_CUBE_MAP) {
                        for(var ii = 0; ii < 6; ++ii){
                            gl76.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, RGBA, 1, 1, 0, RGBA, UNSIGNED_BYTE, color);
                        }
                    } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
                        gl76.texImage3D(target, 0, RGBA, 1, 1, 1, 0, RGBA, UNSIGNED_BYTE, color);
                    } else {
                        gl76.texImage2D(target, 0, RGBA, 1, 1, 0, RGBA, UNSIGNED_BYTE, color);
                    }
                }
                function loadTextureFromUrl(gl77, tex, options, callback) {
                    callback = callback || noop;
                    options = options || defaults.textureOptions;
                    setTextureTo1PixelColor(gl77, tex, options);
                    options = Object.assign({}, options);
                    var img1 = loadAndUseImage(options.src, options.crossOrigin, function(err, img) {
                        if (err) {
                            callback(err, tex, img);
                        } else {
                            setTextureFromElement(gl77, tex, img, options);
                            callback(null, tex, img);
                        }
                    });
                    return img1;
                }
                function loadCubemapFromUrls(gl78, tex, options, callback) {
                    callback = callback || noop;
                    var urls = options.src;
                    if (urls.length !== 6) {
                        throw "there must be 6 urls for a cubemap";
                    }
                    var level = options.level || 0;
                    var internalFormat = options.internalFormat || options.format || RGBA;
                    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
                    var format = options.format || formatType.format;
                    var type = options.type || UNSIGNED_BYTE;
                    var target = options.target || TEXTURE_2D;
                    if (target !== TEXTURE_CUBE_MAP) {
                        throw "target must be TEXTURE_CUBE_MAP";
                    }
                    setTextureTo1PixelColor(gl78, tex, options);
                    options = Object.assign({}, options);
                    var numToLoad = 6;
                    var errors = [];
                    var faces = getCubeFaceOrder(gl78, options);
                    var imgs;
                    function uploadImg(faceTarget) {
                        return function(err, img) {
                            --numToLoad;
                            if (err) {
                                errors.push(err);
                            } else {
                                if (img.width !== img.height) {
                                    errors.push("cubemap face img is not a square: " + img.src);
                                } else {
                                    setPackState(gl78, options);
                                    gl78.bindTexture(target, tex);
                                    if (numToLoad === 5) {
                                        getCubeFaceOrder(gl78).forEach(function(otherTarget) {
                                            gl78.texImage2D(otherTarget, level, internalFormat, format, type, img);
                                        });
                                    } else {
                                        gl78.texImage2D(faceTarget, level, internalFormat, format, type, img);
                                    }
                                    if (shouldAutomaticallySetTextureFilteringForSize(options)) {
                                        gl78.generateMipmap(target);
                                    }
                                }
                            }
                            if (numToLoad === 0) {
                                callback(errors.length ? errors : undefined, tex, imgs);
                            }
                        };
                    }
                    imgs = urls.map(function(url, ndx) {
                        return loadAndUseImage(url, options.crossOrigin, uploadImg(faces[ndx]));
                    });
                }
                function loadSlicesFromUrls(gl79, tex, options, callback) {
                    callback = callback || noop;
                    var urls = options.src;
                    var internalFormat = options.internalFormat || options.format || RGBA;
                    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
                    var format = options.format || formatType.format;
                    var type = options.type || UNSIGNED_BYTE;
                    var target = options.target || TEXTURE_2D_ARRAY;
                    if (target !== TEXTURE_3D && target !== TEXTURE_2D_ARRAY) {
                        throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
                    }
                    setTextureTo1PixelColor(gl79, tex, options);
                    options = Object.assign({}, options);
                    var numToLoad = urls.length;
                    var errors = [];
                    var imgs;
                    var level = options.level || 0;
                    var width = options.width;
                    var height = options.height;
                    var depth = urls.length;
                    var firstImage = true;
                    function uploadImg(slice) {
                        return function(err, img) {
                            --numToLoad;
                            if (err) {
                                errors.push(err);
                            } else {
                                setPackState(gl79, options);
                                gl79.bindTexture(target, tex);
                                if (firstImage) {
                                    firstImage = false;
                                    width = options.width || img.width;
                                    height = options.height || img.height;
                                    gl79.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null);
                                    for(var s = 0; s < depth; ++s){
                                        gl79.texSubImage3D(target, level, 0, 0, s, width, height, 1, format, type, img);
                                    }
                                } else {
                                    var src = img;
                                    var ctx;
                                    if (img.width !== width || img.height !== height) {
                                        ctx = getShared2DContext();
                                        src = ctx.canvas;
                                        ctx.canvas.width = width;
                                        ctx.canvas.height = height;
                                        ctx.drawImage(img, 0, 0, width, height);
                                    }
                                    gl79.texSubImage3D(target, level, 0, 0, slice, width, height, 1, format, type, src);
                                    if (ctx && src === ctx.canvas) {
                                        ctx.canvas.width = 0;
                                        ctx.canvas.height = 0;
                                    }
                                }
                                if (shouldAutomaticallySetTextureFilteringForSize(options)) {
                                    gl79.generateMipmap(target);
                                }
                            }
                            if (numToLoad === 0) {
                                callback(errors.length ? errors : undefined, tex, imgs);
                            }
                        };
                    }
                    imgs = urls.map(function(url, ndx) {
                        return loadAndUseImage(url, options.crossOrigin, uploadImg(ndx));
                    });
                }
                function setTextureFromArray(gl80, tex, src, options) {
                    options = options || defaults.textureOptions;
                    var target = options.target || TEXTURE_2D;
                    gl80.bindTexture(target, tex);
                    var width = options.width;
                    var height = options.height;
                    var depth = options.depth;
                    var level = options.level || 0;
                    var internalFormat = options.internalFormat || options.format || RGBA;
                    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
                    var format = options.format || formatType.format;
                    var type = options.type || getTextureTypeForArrayType(gl80, src, formatType.type);
                    if (!isArrayBuffer(src)) {
                        var Type = typedArrays.getTypedArrayTypeForGLType(type);
                        src = new Type(src);
                    } else if (src instanceof Uint8ClampedArray) {
                        src = new Uint8Array(src.buffer);
                    }
                    var bytesPerElement = getBytesPerElementForInternalFormat(internalFormat, type);
                    var numElements = src.byteLength / bytesPerElement;
                    if (numElements % 1) {
                        throw "length wrong size for format: " + utils.glEnumToString(gl80, format);
                    }
                    var dimensions;
                    if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
                        if (!width && !height && !depth) {
                            var size = Math.cbrt(numElements);
                            if (size % 1 !== 0) {
                                throw "can't guess cube size of array of numElements: " + numElements;
                            }
                            width = size;
                            height = size;
                            depth = size;
                        } else if (width && (!height || !depth)) {
                            dimensions = guessDimensions(gl80, target, height, depth, numElements / width);
                            height = dimensions.width;
                            depth = dimensions.height;
                        } else if (height && (!width || !depth)) {
                            dimensions = guessDimensions(gl80, target, width, depth, numElements / height);
                            width = dimensions.width;
                            depth = dimensions.height;
                        } else {
                            dimensions = guessDimensions(gl80, target, width, height, numElements / depth);
                            width = dimensions.width;
                            height = dimensions.height;
                        }
                    } else {
                        dimensions = guessDimensions(gl80, target, width, height, numElements);
                        width = dimensions.width;
                        height = dimensions.height;
                    }
                    setSkipStateToDefault(gl80);
                    gl80.pixelStorei(UNPACK_ALIGNMENT, options.unpackAlignment || 1);
                    setPackState(gl80, options);
                    if (target === TEXTURE_CUBE_MAP) {
                        var elementsPerElement = bytesPerElement / src.BYTES_PER_ELEMENT;
                        var faceSize = numElements / 6 * elementsPerElement;
                        getCubeFacesWithNdx(gl80, options).forEach(function(f) {
                            var offset = faceSize * f.ndx;
                            var data = src.subarray(offset, offset + faceSize);
                            gl80.texImage2D(f.face, level, internalFormat, width, height, 0, format, type, data);
                        });
                    } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
                        gl80.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, src);
                    } else {
                        gl80.texImage2D(target, level, internalFormat, width, height, 0, format, type, src);
                    }
                    return {
                        width: width,
                        height: height,
                        depth: depth,
                        type: type
                    };
                }
                function setEmptyTexture(gl81, tex, options) {
                    var target = options.target || TEXTURE_2D;
                    gl81.bindTexture(target, tex);
                    var level = options.level || 0;
                    var internalFormat = options.internalFormat || options.format || RGBA;
                    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
                    var format = options.format || formatType.format;
                    var type = options.type || formatType.type;
                    setPackState(gl81, options);
                    if (target === TEXTURE_CUBE_MAP) {
                        for(var ii = 0; ii < 6; ++ii){
                            gl81.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, options.width, options.height, 0, format, type, null);
                        }
                    } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
                        gl81.texImage3D(target, level, internalFormat, options.width, options.height, options.depth, 0, format, type, null);
                    } else {
                        gl81.texImage2D(target, level, internalFormat, options.width, options.height, 0, format, type, null);
                    }
                }
                function createTexture(gl82, options, callback) {
                    callback = callback || noop;
                    options = options || defaults.textureOptions;
                    var tex = gl82.createTexture();
                    var target = options.target || TEXTURE_2D;
                    var width = options.width || 1;
                    var height = options.height || 1;
                    var internalFormat = options.internalFormat || RGBA;
                    gl82.bindTexture(target, tex);
                    if (target === TEXTURE_CUBE_MAP) {
                        gl82.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
                        gl82.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
                    }
                    var src = options.src;
                    if (src) {
                        if (typeof src === "function") {
                            src = src(gl82, options);
                        }
                        if (typeof src === "string") {
                            loadTextureFromUrl(gl82, tex, options, callback);
                        } else if (isArrayBuffer(src) || Array.isArray(src) && (typeof src[0] === 'number' || Array.isArray(src[0]) || isArrayBuffer(src[0]))) {
                            var dimensions = setTextureFromArray(gl82, tex, src, options);
                            width = dimensions.width;
                            height = dimensions.height;
                        } else if (Array.isArray(src) && (typeof src[0] === 'string' || isTexImageSource(src[0]))) {
                            if (target === TEXTURE_CUBE_MAP) {
                                loadCubemapFromUrls(gl82, tex, options, callback);
                            } else {
                                loadSlicesFromUrls(gl82, tex, options, callback);
                            }
                        } else {
                            setTextureFromElement(gl82, tex, src, options);
                            width = src.width;
                            height = src.height;
                        }
                    } else {
                        setEmptyTexture(gl82, tex, options);
                    }
                    if (shouldAutomaticallySetTextureFilteringForSize(options)) {
                        setTextureFilteringForSize(gl82, tex, options, width, height, internalFormat);
                    }
                    setTextureParameters(gl82, tex, options);
                    return tex;
                }
                function resizeTexture(gl83, tex, options, width, height, depth) {
                    width = width || options.width;
                    height = height || options.height;
                    depth = depth || options.depth;
                    var target = options.target || TEXTURE_2D;
                    gl83.bindTexture(target, tex);
                    var level = options.level || 0;
                    var internalFormat = options.internalFormat || options.format || RGBA;
                    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
                    var format = options.format || formatType.format;
                    var type;
                    var src = options.src;
                    if (!src) {
                        type = options.type || formatType.type;
                    } else if (isArrayBuffer(src) || Array.isArray(src) && typeof src[0] === 'number') {
                        type = options.type || getTextureTypeForArrayType(gl83, src, formatType.type);
                    } else {
                        type = options.type || formatType.type;
                    }
                    if (target === TEXTURE_CUBE_MAP) {
                        for(var ii = 0; ii < 6; ++ii){
                            gl83.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, width, height, 0, format, type, null);
                        }
                    } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
                        gl83.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null);
                    } else {
                        gl83.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
                    }
                }
                function isAsyncSrc(src) {
                    return typeof src === 'string' || Array.isArray(src) && typeof src[0] === 'string';
                }
                function createTextures(gl84, textureOptions, callback) {
                    callback = callback || noop;
                    var numDownloading = 0;
                    var errors = [];
                    var textures = {};
                    var images = {};
                    function callCallbackIfReady() {
                        if (numDownloading === 0) {
                            setTimeout(function() {
                                callback(errors.length ? errors : undefined, textures, images);
                            }, 0);
                        }
                    }
                    Object.keys(textureOptions).forEach(function(name) {
                        var options = textureOptions[name];
                        var onLoadFn;
                        if (isAsyncSrc(options.src)) {
                            onLoadFn = function onLoadFn(err, tex, img) {
                                images[name] = img;
                                --numDownloading;
                                if (err) {
                                    errors.push(err);
                                }
                                callCallbackIfReady();
                            };
                            ++numDownloading;
                        }
                        textures[name] = createTexture(gl84, options, onLoadFn);
                    });
                    callCallbackIfReady();
                    return textures;
                }
            },
            "./src/twgl-full.js": function(module, exports11, __webpack_require__) {
                "use strict";
                function _typeof(obj8) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj8);
                }
                exports11.__esModule = true;
                var _exportNames = {
                    m4: true,
                    v3: true,
                    primitives: true
                };
                exports11.primitives = exports11.v3 = exports11.m4 = void 0;
                var m4 = _interopRequireWildcard(__webpack_require__("./src/m4.js"));
                exports11.m4 = m4;
                var v3 = _interopRequireWildcard(__webpack_require__("./src/v3.js"));
                exports11.v3 = v3;
                var primitives = _interopRequireWildcard(__webpack_require__("./src/primitives.js"));
                exports11.primitives = primitives;
                var _twgl = __webpack_require__("./src/twgl.js");
                Object.keys(_twgl).forEach(function(key) {
                    if (key === "default" || key === "__esModule") return;
                    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
                    exports11[key] = _twgl[key];
                });
                function _getRequireWildcardCache() {
                    if (typeof WeakMap !== "function") return null;
                    var cache = new WeakMap();
                    _getRequireWildcardCache = function _getRequireWildcardCache() {
                        return cache;
                    };
                    return cache;
                }
                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    }
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                        return {
                            "default": obj
                        };
                    }
                    var cache = _getRequireWildcardCache();
                    if (cache && cache.has(obj)) {
                        return cache.get(obj);
                    }
                    var newObj = {};
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj){
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                            if (desc && (desc.get || desc.set)) {
                                Object.defineProperty(newObj, key, desc);
                            } else {
                                newObj[key] = obj[key];
                            }
                        }
                    }
                    newObj["default"] = obj;
                    if (cache) {
                        cache.set(obj, newObj);
                    }
                    return newObj;
                }
            },
            "./src/twgl.js": function(module, exports12, __webpack_require__) {
                "use strict";
                function _typeof(obj9) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj9);
                }
                exports12.__esModule = true;
                var _exportNames = {
                    addExtensionsToContext: true,
                    getContext: true,
                    getWebGLContext: true,
                    resizeCanvasToDisplaySize: true,
                    setDefaults: true,
                    attributes: true,
                    textures: true,
                    utils: true,
                    draw: true,
                    framebuffers: true,
                    programs: true,
                    typedarrays: true,
                    vertexArrays: true
                };
                exports12.addExtensionsToContext = addExtensionsToContext;
                exports12.getContext = getContext;
                exports12.getWebGLContext = getWebGLContext;
                exports12.resizeCanvasToDisplaySize = resizeCanvasToDisplaySize;
                exports12.setDefaults = setDefaults;
                exports12.vertexArrays = exports12.typedarrays = exports12.programs = exports12.framebuffers = exports12.draw = exports12.utils = exports12.textures = exports12.attributes = void 0;
                var attributes = _interopRequireWildcard(__webpack_require__("./src/attributes.js"));
                exports12.attributes = attributes;
                Object.keys(attributes).forEach(function(key) {
                    if (key === "default" || key === "__esModule") return;
                    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
                    exports12[key] = attributes[key];
                });
                var textures = _interopRequireWildcard(__webpack_require__("./src/textures.js"));
                exports12.textures = textures;
                Object.keys(textures).forEach(function(key) {
                    if (key === "default" || key === "__esModule") return;
                    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
                    exports12[key] = textures[key];
                });
                var helper = _interopRequireWildcard(__webpack_require__("./src/helper.js"));
                var utils = _interopRequireWildcard(__webpack_require__("./src/utils.js"));
                exports12.utils = utils;
                Object.keys(utils).forEach(function(key) {
                    if (key === "default" || key === "__esModule") return;
                    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
                    exports12[key] = utils[key];
                });
                var draw1 = _interopRequireWildcard(__webpack_require__("./src/draw.js"));
                exports12.draw = draw1;
                Object.keys(draw1).forEach(function(key) {
                    if (key === "default" || key === "__esModule") return;
                    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
                    exports12[key] = draw1[key];
                });
                var framebuffers = _interopRequireWildcard(__webpack_require__("./src/framebuffers.js"));
                exports12.framebuffers = framebuffers;
                Object.keys(framebuffers).forEach(function(key) {
                    if (key === "default" || key === "__esModule") return;
                    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
                    exports12[key] = framebuffers[key];
                });
                var programs = _interopRequireWildcard(__webpack_require__("./src/programs.js"));
                exports12.programs = programs;
                Object.keys(programs).forEach(function(key) {
                    if (key === "default" || key === "__esModule") return;
                    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
                    exports12[key] = programs[key];
                });
                var typedarrays = _interopRequireWildcard(__webpack_require__("./src/typedarrays.js"));
                exports12.typedarrays = typedarrays;
                Object.keys(typedarrays).forEach(function(key) {
                    if (key === "default" || key === "__esModule") return;
                    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
                    exports12[key] = typedarrays[key];
                });
                var vertexArrays = _interopRequireWildcard(__webpack_require__("./src/vertex-arrays.js"));
                exports12.vertexArrays = vertexArrays;
                Object.keys(vertexArrays).forEach(function(key) {
                    if (key === "default" || key === "__esModule") return;
                    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
                    exports12[key] = vertexArrays[key];
                });
                function _getRequireWildcardCache() {
                    if (typeof WeakMap !== "function") return null;
                    var cache = new WeakMap();
                    _getRequireWildcardCache = function _getRequireWildcardCache() {
                        return cache;
                    };
                    return cache;
                }
                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    }
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                        return {
                            "default": obj
                        };
                    }
                    var cache = _getRequireWildcardCache();
                    if (cache && cache.has(obj)) {
                        return cache.get(obj);
                    }
                    var newObj = {};
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj){
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                            if (desc && (desc.get || desc.set)) {
                                Object.defineProperty(newObj, key, desc);
                            } else {
                                newObj[key] = obj[key];
                            }
                        }
                    }
                    newObj["default"] = obj;
                    if (cache) {
                        cache.set(obj, newObj);
                    }
                    return newObj;
                }
                var defaults = {
                    addExtensionsToContext: true
                };
                function setDefaults(newDefaults) {
                    helper.copyExistingProperties(newDefaults, defaults);
                    attributes.setAttributeDefaults_(newDefaults);
                    textures.setTextureDefaults_(newDefaults);
                }
                var prefixRE = /^(.*?)_/;
                function addExtensionToContext(gl85, extensionName) {
                    utils.glEnumToString(gl85, 0);
                    var ext = gl85.getExtension(extensionName);
                    if (ext) {
                        var enums = {};
                        var fnSuffix = prefixRE.exec(extensionName)[1];
                        var enumSuffix = '_' + fnSuffix;
                        for(var key in ext){
                            var value = ext[key];
                            var isFunc = typeof value === 'function';
                            var suffix = isFunc ? fnSuffix : enumSuffix;
                            var name = key;
                            if (key.endsWith(suffix)) {
                                name = key.substring(0, key.length - suffix.length);
                            }
                            if (gl85[name] !== undefined) {
                                if (!isFunc && gl85[name] !== value) {
                                    helper.warn(name, gl85[name], value, key);
                                }
                            } else {
                                if (isFunc) {
                                    gl85[name] = (function(origFn) {
                                        return function() {
                                            return origFn.apply(ext, arguments);
                                        };
                                    })(value);
                                } else {
                                    gl85[name] = value;
                                    enums[name] = value;
                                }
                            }
                        }
                        enums.constructor = {
                            name: ext.constructor.name
                        };
                        utils.glEnumToString(enums, 0);
                    }
                    return ext;
                }
                var supportedExtensions = [
                    'ANGLE_instanced_arrays',
                    'EXT_blend_minmax',
                    'EXT_color_buffer_float',
                    'EXT_color_buffer_half_float',
                    'EXT_disjoint_timer_query',
                    'EXT_disjoint_timer_query_webgl2',
                    'EXT_frag_depth',
                    'EXT_sRGB',
                    'EXT_shader_texture_lod',
                    'EXT_texture_filter_anisotropic',
                    'OES_element_index_uint',
                    'OES_standard_derivatives',
                    'OES_texture_float',
                    'OES_texture_float_linear',
                    'OES_texture_half_float',
                    'OES_texture_half_float_linear',
                    'OES_vertex_array_object',
                    'WEBGL_color_buffer_float',
                    'WEBGL_compressed_texture_atc',
                    'WEBGL_compressed_texture_etc1',
                    'WEBGL_compressed_texture_pvrtc',
                    'WEBGL_compressed_texture_s3tc',
                    'WEBGL_compressed_texture_s3tc_srgb',
                    'WEBGL_depth_texture',
                    'WEBGL_draw_buffers'
                ];
                function addExtensionsToContext(gl86) {
                    for(var ii = 0; ii < supportedExtensions.length; ++ii){
                        addExtensionToContext(gl86, supportedExtensions[ii]);
                    }
                }
                function create3DContext(canvas1, opt_attribs) {
                    var names = [
                        "webgl",
                        "experimental-webgl"
                    ];
                    var context = null;
                    for(var ii = 0; ii < names.length; ++ii){
                        context = canvas1.getContext(names[ii], opt_attribs);
                        if (context) {
                            if (defaults.addExtensionsToContext) {
                                addExtensionsToContext(context);
                            }
                            break;
                        }
                    }
                    return context;
                }
                function getWebGLContext(canvas2, opt_attribs) {
                    var gl87 = create3DContext(canvas2, opt_attribs);
                    return gl87;
                }
                function createContext(canvas3, opt_attribs) {
                    var names = [
                        "webgl2",
                        "webgl",
                        "experimental-webgl"
                    ];
                    var context = null;
                    for(var ii = 0; ii < names.length; ++ii){
                        context = canvas3.getContext(names[ii], opt_attribs);
                        if (context) {
                            if (defaults.addExtensionsToContext) {
                                addExtensionsToContext(context);
                            }
                            break;
                        }
                    }
                    return context;
                }
                function getContext(canvas4, opt_attribs) {
                    var gl88 = createContext(canvas4, opt_attribs);
                    return gl88;
                }
                function resizeCanvasToDisplaySize(canvas5, multiplier) {
                    multiplier = multiplier || 1;
                    multiplier = Math.max(0, multiplier);
                    var width = canvas5.clientWidth * multiplier | 0;
                    var height = canvas5.clientHeight * multiplier | 0;
                    if (canvas5.width !== width || canvas5.height !== height) {
                        canvas5.width = width;
                        canvas5.height = height;
                        return true;
                    }
                    return false;
                }
            },
            "./src/typedarrays.js": function(module, exports13, __webpack_require__) {
                "use strict";
                exports13.__esModule = true;
                exports13.getGLTypeForTypedArray = getGLTypeForTypedArray;
                exports13.getGLTypeForTypedArrayType = getGLTypeForTypedArrayType;
                exports13.getTypedArrayTypeForGLType = getTypedArrayTypeForGLType;
                exports13.isArrayBuffer = void 0;
                var BYTE = 5120;
                var UNSIGNED_BYTE = 5121;
                var SHORT = 5122;
                var UNSIGNED_SHORT = 5123;
                var INT = 5124;
                var UNSIGNED_INT = 5125;
                var FLOAT = 5126;
                var UNSIGNED_SHORT_4_4_4_4 = 32819;
                var UNSIGNED_SHORT_5_5_5_1 = 32820;
                var UNSIGNED_SHORT_5_6_5 = 33635;
                var HALF_FLOAT = 5131;
                var UNSIGNED_INT_2_10_10_10_REV = 33640;
                var UNSIGNED_INT_10F_11F_11F_REV = 35899;
                var UNSIGNED_INT_5_9_9_9_REV = 35902;
                var FLOAT_32_UNSIGNED_INT_24_8_REV = 36269;
                var UNSIGNED_INT_24_8 = 34042;
                var glTypeToTypedArray = {};
                {
                    var tt = glTypeToTypedArray;
                    tt[BYTE] = Int8Array;
                    tt[UNSIGNED_BYTE] = Uint8Array;
                    tt[SHORT] = Int16Array;
                    tt[UNSIGNED_SHORT] = Uint16Array;
                    tt[INT] = Int32Array;
                    tt[UNSIGNED_INT] = Uint32Array;
                    tt[FLOAT] = Float32Array;
                    tt[UNSIGNED_SHORT_4_4_4_4] = Uint16Array;
                    tt[UNSIGNED_SHORT_5_5_5_1] = Uint16Array;
                    tt[UNSIGNED_SHORT_5_6_5] = Uint16Array;
                    tt[HALF_FLOAT] = Uint16Array;
                    tt[UNSIGNED_INT_2_10_10_10_REV] = Uint32Array;
                    tt[UNSIGNED_INT_10F_11F_11F_REV] = Uint32Array;
                    tt[UNSIGNED_INT_5_9_9_9_REV] = Uint32Array;
                    tt[FLOAT_32_UNSIGNED_INT_24_8_REV] = Uint32Array;
                    tt[UNSIGNED_INT_24_8] = Uint32Array;
                }
                function getGLTypeForTypedArray(typedArray) {
                    if (typedArray instanceof Int8Array) {
                        return BYTE;
                    }
                    if (typedArray instanceof Uint8Array) {
                        return UNSIGNED_BYTE;
                    }
                    if (typedArray instanceof Uint8ClampedArray) {
                        return UNSIGNED_BYTE;
                    }
                    if (typedArray instanceof Int16Array) {
                        return SHORT;
                    }
                    if (typedArray instanceof Uint16Array) {
                        return UNSIGNED_SHORT;
                    }
                    if (typedArray instanceof Int32Array) {
                        return INT;
                    }
                    if (typedArray instanceof Uint32Array) {
                        return UNSIGNED_INT;
                    }
                    if (typedArray instanceof Float32Array) {
                        return FLOAT;
                    }
                    throw new Error('unsupported typed array type');
                }
                function getGLTypeForTypedArrayType(typedArrayType) {
                    if (typedArrayType === Int8Array) {
                        return BYTE;
                    }
                    if (typedArrayType === Uint8Array) {
                        return UNSIGNED_BYTE;
                    }
                    if (typedArrayType === Uint8ClampedArray) {
                        return UNSIGNED_BYTE;
                    }
                    if (typedArrayType === Int16Array) {
                        return SHORT;
                    }
                    if (typedArrayType === Uint16Array) {
                        return UNSIGNED_SHORT;
                    }
                    if (typedArrayType === Int32Array) {
                        return INT;
                    }
                    if (typedArrayType === Uint32Array) {
                        return UNSIGNED_INT;
                    }
                    if (typedArrayType === Float32Array) {
                        return FLOAT;
                    }
                    throw new Error('unsupported typed array type');
                }
                function getTypedArrayTypeForGLType(type) {
                    var CTOR = glTypeToTypedArray[type];
                    if (!CTOR) {
                        throw new Error('unknown gl type');
                    }
                    return CTOR;
                }
                var isArrayBuffer = typeof SharedArrayBuffer !== 'undefined' ? function isArrayBufferOrSharedArrayBuffer(a) {
                    return a && a.buffer && (a.buffer instanceof ArrayBuffer || a.buffer instanceof SharedArrayBuffer);
                } : function isArrayBuffer(a) {
                    return a && a.buffer && a.buffer instanceof ArrayBuffer;
                };
                exports13.isArrayBuffer = isArrayBuffer;
            },
            "./src/utils.js": function(module, exports14, __webpack_require__) {
                "use strict";
                exports14.__esModule = true;
                exports14.isWebGL1 = isWebGL1;
                exports14.isWebGL2 = isWebGL2;
                exports14.glEnumToString = void 0;
                function isWebGL2(gl89) {
                    return !!gl89.texStorage2D;
                }
                function isWebGL1(gl90) {
                    return !gl90.texStorage2D;
                }
                var glEnumToString = function() {
                    var haveEnumsForType = {};
                    var enums = {};
                    function addEnums(gl91) {
                        var type = gl91.constructor.name;
                        if (!haveEnumsForType[type]) {
                            for(var key in gl91){
                                if (typeof gl91[key] === 'number') {
                                    var existing = enums[gl91[key]];
                                    enums[gl91[key]] = existing ? "".concat(existing, " | ").concat(key) : key;
                                }
                            }
                            haveEnumsForType[type] = true;
                        }
                    }
                    return function glEnumToString(gl92, value) {
                        addEnums(gl92);
                        return enums[value] || (typeof value === 'number' ? "0x".concat(value.toString(16)) : value);
                    };
                }();
                exports14.glEnumToString = glEnumToString;
            },
            "./src/v3.js": function(module, exports15, __webpack_require__) {
                "use strict";
                exports15.__esModule = true;
                exports15.add = add;
                exports15.copy = copy;
                exports15.create = create;
                exports15.cross = cross;
                exports15.distance = distance;
                exports15.distanceSq = distanceSq;
                exports15.divide = divide;
                exports15.divScalar = divScalar;
                exports15.dot = dot;
                exports15.lerp = lerp;
                exports15.lerpV = lerpV;
                exports15.length = length;
                exports15.lengthSq = lengthSq;
                exports15.max = max;
                exports15.min = min;
                exports15.mulScalar = mulScalar;
                exports15.multiply = multiply;
                exports15.negate = negate;
                exports15.normalize = normalize;
                exports15.setDefaultType = setDefaultType;
                exports15.subtract = subtract;
                var VecType = Float32Array;
                function setDefaultType(ctor) {
                    var oldType = VecType;
                    VecType = ctor;
                    return oldType;
                }
                function create(x, y, z) {
                    var dst = new VecType(3);
                    if (x) {
                        dst[0] = x;
                    }
                    if (y) {
                        dst[1] = y;
                    }
                    if (z) {
                        dst[2] = z;
                    }
                    return dst;
                }
                function add(a, b, dst) {
                    dst = dst || new VecType(3);
                    dst[0] = a[0] + b[0];
                    dst[1] = a[1] + b[1];
                    dst[2] = a[2] + b[2];
                    return dst;
                }
                function subtract(a, b, dst) {
                    dst = dst || new VecType(3);
                    dst[0] = a[0] - b[0];
                    dst[1] = a[1] - b[1];
                    dst[2] = a[2] - b[2];
                    return dst;
                }
                function lerp(a, b, t, dst) {
                    dst = dst || new VecType(3);
                    dst[0] = a[0] + t * (b[0] - a[0]);
                    dst[1] = a[1] + t * (b[1] - a[1]);
                    dst[2] = a[2] + t * (b[2] - a[2]);
                    return dst;
                }
                function lerpV(a, b, t, dst) {
                    dst = dst || new VecType(3);
                    dst[0] = a[0] + t[0] * (b[0] - a[0]);
                    dst[1] = a[1] + t[1] * (b[1] - a[1]);
                    dst[2] = a[2] + t[2] * (b[2] - a[2]);
                    return dst;
                }
                function max(a, b, dst) {
                    dst = dst || new VecType(3);
                    dst[0] = Math.max(a[0], b[0]);
                    dst[1] = Math.max(a[1], b[1]);
                    dst[2] = Math.max(a[2], b[2]);
                    return dst;
                }
                function min(a, b, dst) {
                    dst = dst || new VecType(3);
                    dst[0] = Math.min(a[0], b[0]);
                    dst[1] = Math.min(a[1], b[1]);
                    dst[2] = Math.min(a[2], b[2]);
                    return dst;
                }
                function mulScalar(v, k, dst) {
                    dst = dst || new VecType(3);
                    dst[0] = v[0] * k;
                    dst[1] = v[1] * k;
                    dst[2] = v[2] * k;
                    return dst;
                }
                function divScalar(v, k, dst) {
                    dst = dst || new VecType(3);
                    dst[0] = v[0] / k;
                    dst[1] = v[1] / k;
                    dst[2] = v[2] / k;
                    return dst;
                }
                function cross(a, b, dst) {
                    dst = dst || new VecType(3);
                    var t1 = a[2] * b[0] - a[0] * b[2];
                    var t2 = a[0] * b[1] - a[1] * b[0];
                    dst[0] = a[1] * b[2] - a[2] * b[1];
                    dst[1] = t1;
                    dst[2] = t2;
                    return dst;
                }
                function dot(a, b) {
                    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
                }
                function length(v) {
                    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
                }
                function lengthSq(v) {
                    return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
                }
                function distance(a, b) {
                    var dx = a[0] - b[0];
                    var dy = a[1] - b[1];
                    var dz = a[2] - b[2];
                    return Math.sqrt(dx * dx + dy * dy + dz * dz);
                }
                function distanceSq(a, b) {
                    var dx = a[0] - b[0];
                    var dy = a[1] - b[1];
                    var dz = a[2] - b[2];
                    return dx * dx + dy * dy + dz * dz;
                }
                function normalize(a, dst) {
                    dst = dst || new VecType(3);
                    var lenSq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
                    var len = Math.sqrt(lenSq);
                    if (len > 0.00001) {
                        dst[0] = a[0] / len;
                        dst[1] = a[1] / len;
                        dst[2] = a[2] / len;
                    } else {
                        dst[0] = 0;
                        dst[1] = 0;
                        dst[2] = 0;
                    }
                    return dst;
                }
                function negate(v, dst) {
                    dst = dst || new VecType(3);
                    dst[0] = -v[0];
                    dst[1] = -v[1];
                    dst[2] = -v[2];
                    return dst;
                }
                function copy(v, dst) {
                    dst = dst || new VecType(3);
                    dst[0] = v[0];
                    dst[1] = v[1];
                    dst[2] = v[2];
                    return dst;
                }
                function multiply(a, b, dst) {
                    dst = dst || new VecType(3);
                    dst[0] = a[0] * b[0];
                    dst[1] = a[1] * b[1];
                    dst[2] = a[2] * b[2];
                    return dst;
                }
                function divide(a, b, dst) {
                    dst = dst || new VecType(3);
                    dst[0] = a[0] / b[0];
                    dst[1] = a[1] / b[1];
                    dst[2] = a[2] / b[2];
                    return dst;
                }
            },
            "./src/vertex-arrays.js": function(module, exports16, __webpack_require__) {
                "use strict";
                function _typeof(obj10) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj10);
                }
                exports16.__esModule = true;
                exports16.createVertexArrayInfo = createVertexArrayInfo;
                exports16.createVAOAndSetAttributes = createVAOAndSetAttributes;
                exports16.createVAOFromBufferInfo = createVAOFromBufferInfo;
                var programs = _interopRequireWildcard(__webpack_require__("./src/programs.js"));
                function _getRequireWildcardCache() {
                    if (typeof WeakMap !== "function") return null;
                    var cache = new WeakMap();
                    _getRequireWildcardCache = function _getRequireWildcardCache() {
                        return cache;
                    };
                    return cache;
                }
                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    }
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                        return {
                            "default": obj
                        };
                    }
                    var cache = _getRequireWildcardCache();
                    if (cache && cache.has(obj)) {
                        return cache.get(obj);
                    }
                    var newObj = {};
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj){
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                            if (desc && (desc.get || desc.set)) {
                                Object.defineProperty(newObj, key, desc);
                            } else {
                                newObj[key] = obj[key];
                            }
                        }
                    }
                    newObj["default"] = obj;
                    if (cache) {
                        cache.set(obj, newObj);
                    }
                    return newObj;
                }
                var ELEMENT_ARRAY_BUFFER = 34963;
                function createVertexArrayInfo(gl93, programInfos, bufferInfo) {
                    var vao = gl93.createVertexArray();
                    gl93.bindVertexArray(vao);
                    if (!programInfos.length) {
                        programInfos = [
                            programInfos
                        ];
                    }
                    programInfos.forEach(function(programInfo) {
                        programs.setBuffersAndAttributes(gl93, programInfo, bufferInfo);
                    });
                    gl93.bindVertexArray(null);
                    return {
                        numElements: bufferInfo.numElements,
                        elementType: bufferInfo.elementType,
                        vertexArrayObject: vao
                    };
                }
                function createVAOAndSetAttributes(gl94, setters, attribs, indices) {
                    var vao = gl94.createVertexArray();
                    gl94.bindVertexArray(vao);
                    programs.setAttributes(setters, attribs);
                    if (indices) {
                        gl94.bindBuffer(ELEMENT_ARRAY_BUFFER, indices);
                    }
                    gl94.bindVertexArray(null);
                    return vao;
                }
                function createVAOFromBufferInfo(gl95, programInfo, bufferInfo) {
                    return createVAOAndSetAttributes(gl95, programInfo.attribSetters || programInfo, bufferInfo.attribs, bufferInfo.indices);
                }
            }
        });
    });
    return exports;
}
const __default = dew();
class ZShaderWrapper {
    constructor(gl96, twgl){
        this.gl = gl96;
        this.twgl = twgl;
    }
    createPass(frag, size) {
        if (frag == null) throw Error('frag is expected');
        if (size == null) size = 8;
        const resolution = Array.isArray(size) ? size : [
            size,
            size
        ];
        console.debug(resolution);
        const vert = `#version 300 es
    precision mediump float;
    in vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }`;
        return new Pass(this.gl, this.twgl, vert, frag, resolution);
    }
}
class Pass {
    constructor(gl97, twgl, vert, frag, resolution){
        this.gl = gl97;
        this.twgl = twgl;
        this.resolution = resolution;
        const program = this.twgl.createProgramInfo(this.gl, [
            vert,
            frag
        ]);
        const attachments = [
            {
                internalFormat: this.gl.RGBA32F
            }
        ];
        const buffer = this.twgl.createFramebufferInfo(this.gl, attachments, ...resolution);
        const backbuffer = this.twgl.createFramebufferInfo(this.gl, attachments, ...resolution);
        this.b = backbuffer.attachments[0];
        this.positionObject = {
            position: {
                data: [
                    1,
                    1,
                    1,
                    -1,
                    -1,
                    -1,
                    -1,
                    1
                ],
                numComponents: 2
            }
        };
        this.positionBuffer = this.twgl.createBufferInfoFromArrays(this.gl, this.positionObject);
        this.buffer = buffer;
        this.backbuffer = backbuffer;
        this.program = program;
        this.attachments = attachments;
    }
    draw(uniforms, target) {
        if (uniforms == null) throw new Error('uniforms must be defined');
        if (target == null) throw new Error('target must be defined');
        this.gl.useProgram(this.program.program);
        this.twgl.setBuffersAndAttributes(this.gl, this.program, this.positionBuffer);
        if (!uniforms.u_resolution) uniforms.u_resolution = this.resolution;
        if (target !== 'screen') uniforms.backbuffer = this.backbuffer.attachments[0];
        this.twgl.setUniforms(this.program, uniforms);
        if (target !== 'self') {
            this.twgl.bindFramebufferInfo(this.gl, null);
            this.twgl.drawBufferInfo(this.gl, this.positionBuffer, this.gl.TRIANGLE_FAN);
        }
        if (target !== 'screen') {
            this.twgl.bindFramebufferInfo(this.gl, this.buffer);
            const tmp = this.buffer;
            this.buffer = this.backbuffer;
            this.backbuffer = tmp;
            this.b = this.backbuffer.attachments[0];
            this.twgl.drawBufferInfo(this.gl, this.positionBuffer, this.gl.TRIANGLE_FAN);
        }
    }
}
const PI = `
#define PI 3.14159265
`;
const rnd = `
#define rnd(x) fract(54321.987 * sin(987.12345 * x + .1))
`;
`
#define rnd2D(X) fract(1e5*sin(dot(mod(X,PI),vec2(9.,PI))+.1))
`;
const rot = `
#define rot(a) mat2(cos(a),-sin(a),sin(a),cos(a))
`;
const colorGradient = `
vec3 colorGradient(float x, vec3 colorOffset, vec3 colorMultiply, vec3 colorAdd){
    return x-cos((x + colorOffset) * 2. * 3.1415) * colorMultiply + colorAdd;
}
vec3 colorGradient(float x, vec3 colorOffset){
    vec3 colorMultiply = vec3(.5, .5, .5);
    vec3 colorAdd = vec3(.5, .5, .5);
    return colorGradient(x, colorOffset, colorMultiply, colorAdd);
}
vec3 colorGradient(float x){
    vec3 colorOffset = vec3(.0, .2, .35);
    return colorGradient(x, colorOffset);
}
`;
`
vec2 d2p(vec2 decart) {
    float alpha = atan(decart.x, decart.y);
    float R = length(decart);
    return vec2(alpha, R);
}
`;
`
vec2 p2d(vec2 polar) {
    float alpha = polar.x;
    float R = polar.y;
    float x = sin(alpha) * R;
    float y = cos(alpha) * R;
    return vec2(x, y);
}
`;
let glsl = `#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform vec2 mouse;
uniform float u_voxels_num;
uniform float u_time;
uniform float u_frame;
uniform float u_params[10];
uniform sampler2D backbuffer;
uniform sampler2D u_tex_voxels;
${rnd + PI + rot + colorGradient}
#define rnd_k(_) rnd(k+floor(100.*objId)+_)
#define EPS .001
#define REFLECTIONS 4.
#define MAX_STEPS 200.
#define MAX_DIST 50.
#define UV_SCALE 16.

out vec4 o;

float objId = 0.;
vec3 col = vec3(1); // accumulated color
int side = 0; // side of the building

float kDepthMin; // # of the smallest rib
float depthMin = 999.; // depth of the smalles rib
float kHit = 0.; // # of the rib the ray hit
float voxelId;
bool isRoof;

vec4 getRelativeVoxel(vec3 p) {
    p = floor(p / 2.);
    vec3 pTex = p + u_voxels_num / 2.; // FIXME pass N as uniform
    vec2 uvTex = vec2(pTex.x, pTex.y + u_voxels_num * pTex.z) / vec2(u_voxels_num, u_voxels_num * u_voxels_num);  // FIXME pass N as uniform
    return texture(u_tex_voxels, uvTex);
}

float sdfVoxel(vec3 p) {
    objId = 0.;
    vec4 tx = getRelativeVoxel(p);
    objId = tx.r;
    if(tx.r > 0.) { // voxel is full
        bool b = getRelativeVoxel(p + vec3(0, 0, 1)).r > 0.;
        bool r = getRelativeVoxel(p + vec3(1, 0, 0)).r > 0.;
        bool f = getRelativeVoxel(p + vec3(0, 0, -1)).r > 0.;
        bool l = getRelativeVoxel(p + vec3(-1, 0, 0)).r > 0.;
        bool br = getRelativeVoxel(p + vec3(1, 0, 1)).r > 0.;
        bool rf = getRelativeVoxel(p + vec3(1, 0, -1)).r > 0.;
        bool fl = getRelativeVoxel(p + vec3(-1, 0, -1)).r > 0.;
        bool lb = getRelativeVoxel(p + vec3(-1, 0, 1)).r > 0.;
        isRoof = getRelativeVoxel(p + vec3(0, 1, 0)).r == 0.;

        if(false);
        else if(!b && r && f && l)     // b    1
            side = 1;
        else if(b && !r && f && l)     // r    2
            side = 2;
        else if(b && r && !f && l)     // f    3
            side = 3;
        else if(b && r && f && !l)     // l    4
            side = 4;
        else if(!b && !r && f && l)    // br   5
            side = 5;
        else if(b && !r && !f && l)    // rf   6
            side = 6;
        else if(b && r && !f && !l)    // fl   7
            side = 7;
        else if(!b && r && f && !l)    // lb   8
            side = 8;
        else if(!br)                   // bri  9
            side = 9;
        else if(!rf)                   // rfi 10
            side = 10;
        else if(!fl)                   // fli 11
            side = 11;
        else if(!lb)                   // lbi 12
            side = 12;
        else                           // c    0
            side = 0;
    }

    float res = .5 - step(1e-4, tx.r);

    voxelId = rnd(dot(floor(p), vec3(13, 17, 19)));
    return res;
}

float sdf(vec3 p) {
    float boundingBox = length(p - clamp(p, -.4999, .4999)) - .0001;
    float res;

    switch(side) {
        case 0:
            kHit = -1.;
            if(isRoof) return 999.;
            else return boundingBox;
        case 1: // b
            p.xz *= rot(PI);
            break;
        case 2: // r
            p.xz *= rot(-PI / 2.);
            break;
        case 3: // f
            break;
        case 4: // l
            p.xz *= rot(PI / 2.);
            break;
        case 5: // br
            p.xz = -p.xz;
            if(p.x < p.z)
                p.xz = p.zx;
            break;
        case 6: // rf
            p.x = -p.x;
            if(p.x < p.z)
                p.xz = p.zx;
            break;
        case 7: // fl
            if(p.x < p.z)
                p.xz = p.zx;
            break;
        case 8: // lb
            p.z = -p.z;
            if(p.x < p.z)
                p.xz = p.zx;
            break;
        case 9: // bri
            p.xz = -p.xz;
            if(p.x > p.z)
                p.xz = p.zx;
            break;
        case 10: // rfi
            p.x = -p.x;
            if(p.x > p.z)
                p.xz = p.zx;
            break;
        case 11: // fli
            if(p.x > p.z)
                p.xz = p.zx;
            break;
        case 12: // lbi
            p.z = -p.z;
            if(p.x > p.z)
                p.xz = p.zx;
            break;
    }

    kHit = 0.;
    kDepthMin = 0.;

    float c = -p.z;

    for(float k = 1.; k < 6.; k++) {
        p.xy = p.yx;
        float period = 2. * (rnd_k(.3) * .8 + .2);
        if(k <= 2.)
            period = 1.;
        p.y = mod(p.y, period) - period * .5;
        vec3 p1 = p;
        p1.x = 0.;
        float width = rnd_k(.1) * period * .1 + .04;
        float depth = pow(rnd_k(.2), 1.) * .4 + .05;
        if(depth < depthMin) {
            // discard;
            depthMin = depth;
            kDepthMin = k;
        }
        p1.y -= clamp(p1.y, -width * .5, width * .5); // width
        p1.z -= clamp(p1.z, -depth, .0); // depth

        float cNew = length(p1) - .0001;
        if(cNew < c) {
            c = cNew;
            kHit = -1.;
        }
    }
    if(isRoof && c < p.z+.1) {
        c = p.z+.1;
        kHit = -1.;
    }

    if(c > boundingBox) {
        return c;
    } else {
        kHit = -1.;
        return boundingBox;
    }
}

vec3 norm(vec3 p) {
    float d = sdf(p);
    vec2 e = vec2(.0001, 0);
    return normalize(vec3(d - sdf(p - e.xyy), d - sdf(p - e.yxy), d - sdf(p - e.yyx)));
}

vec3 getLight(vec3 p) {
    // if(p.y > 30. && p.z > 0. && p.x > 0.)
        // return vec3(15, 6, 5);
    // if(p.y > 26. && p.z < -0. && p.x < -0.)
        // return vec3(100, 15, 15);
    // if(p.y > 16.)
    //     return vec3(50, 15, 15);
    if(kHit == kDepthMin)
        return colorGradient(voxelId * .2 + objId) * rnd(voxelId) * rnd(voxelId) * 4.;
    return vec3(0);
}

void main() {
    float i, d, e, rfl, l;

    vec2 uv = (gl_FragCoord.xy + rnd(length(mod(vec3(gl_FragCoord.xy, u_time), 3.141592))) - .5 - u_resolution * .5) / u_resolution.y + .001;
    vec3 rd = (vec3(0, 0, 1)), ro, p;
    ro.xz = uv * UV_SCALE;
    ro.y = 30.;
    rd.yz *= rot(atan(1. / sqrt(2.)));
    rd.xz *= rot(3.1415 / 4.);
    ro.x /= sqrt(3.);
    ro.xz *= rot(3.1415 / 4.);

    vec3 light;

    vec3 n;
    for(; rfl++ < REFLECTIONS;) {
        d = 0.;
        for(i = 0.; i++ < MAX_STEPS;) {
            p = ro + rd * d;
            vec3 dp = (step(0., rd) - fract(p)) / rd;
            float dpmin;

            dpmin = min(min(dp.x, dp.y), dp.z) + 1e-4;

            bool breaker = false;
            if(sdfVoxel(p) < 0.) {
                float ddd = 0.;
                for(float stepsWithnVoxel; stepsWithnVoxel++ < 100.;) {
                    p = ro + rd * (d + ddd);
                    ddd += e = sdf(fract(p) - .5);
                    if(e < EPS || ++i > MAX_STEPS) {
                        n = norm(fract(p) - .5);
                        dpmin = ddd;
                        breaker = true;
                        break;
                    }
                    if(ddd > dpmin) { // улетели в соседнюю клетку
                        break;
                    }
                }
            }

            d += dpmin;

            if(breaker == true)
                break;

        }
        if(d > MAX_DIST) {
            break;
        }
        light = getLight(p);
        if(length(light) > 0.) {
            break;
        } else {
            rd += (rnd(length(uv) + u_frame + vec3(0, 1, 2)) * 2. - 1.) * .8;
            rd = reflect(rd, n);
            rd = normalize(rd);
            float g = dot(rd, n);
            rd = rd - (g - abs(g))*n;
            ro = p + n * .001;
            col *= .9;
        }
    }
    col *= light;
    o += mix(texture(backbuffer, gl_FragCoord.xy / u_resolution), col.rgbb, 1. / (u_frame + 1.));
    // o += 10./i * tex;
    // o.rgb = n * .5 + .5;
    // if(kHit == kDepthMin)
        // o *= 0.;//kHit/6.;
    o.a = 1.;

    // o = vec4(1,1,0,1);
}
`;
let glsl1 = `#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform vec2 u_tex_res;
uniform sampler2D tex;
// uniform sampler2D backbuffer;
uniform float u_time;

out vec4 o;

void main() {
  vec2 uvN = gl_FragCoord.xy / u_resolution;
  o = texture(tex, uvN);
  // o.a = 1.;
}
`;
const canvas = document.getElementById('canvasgl');
const gl = canvas.getContext('webgl2', {
    preserveDrawingBuffer: true
});
gl.getExtension('EXT_color_buffer_float');
gl.getExtension('OES_texture_float_linear');
const voxelsNum = 128;
let segments, relief;
function prepare2dSegmentsMap() {
    relief = [
        ...Array(voxelsNum)
    ].map((d)=>[
            ...Array(voxelsNum)
        ].map((d)=>Math.random()
        )
    );
    segments = [
        ...Array(voxelsNum)
    ].map((d)=>[
            ...Array(voxelsNum)
        ].fill(0)
    );
    function getRelief(i, j) {
        i = (i + voxelsNum) % voxelsNum;
        j = (j + voxelsNum) % voxelsNum;
        return relief[i][j];
    }
    for(let x = 0; x < 128; x++){
        for(let y = 0; y < 128; y++){
            let minVal = Infinity;
            let idx = x;
            let idy = y;
            for(let step = 0; step < 3; step++){
                let imin = 0;
                let jmin = 0;
                for(let i = -3; i <= 3; i++){
                    for(let j = -3; j <= 3; j++){
                        if (Math.hypot(i, j) > 3) continue;
                        const r = getRelief(idx + i, idy + j);
                        if (r < minVal) {
                            minVal = r;
                            imin = i;
                            jmin = j;
                        }
                    }
                }
                idx += imin;
                idy += jmin;
            }
            segments[x][y] = minVal * 1000 - Math.floor(minVal * 1000);
        }
    }
    console.log('segments, relief', segments, relief);
}
const rnd1 = (x)=>{
    const s = x * 90000;
    return s - Math.floor(s);
};
function prepareTexVoxels() {
    const texVoxelsArray = [
        ...Array(128)
    ].map(()=>[
            ...Array(128)
        ].map(()=>[
                ...Array(128)
            ].map((_)=>[
                    0,
                    0,
                    0,
                    0
                ]
            )
        )
    );
    prepare2dSegmentsMap();
    for(let x = 1; x < 128; x++){
        for(let z = 1; z < 128; z++){
            const id = segments[x][z];
            let height = -63;
            if (id === segments[x - 1][z] && id === segments[x][z - 1] && id === segments[x - 1][z - 1]) {
                height = 4 + 8 * rnd1(id);
            }
            for(let y = 0; y < 64 + height; y++){
                texVoxelsArray[x][y][z] = [
                    id,
                    0,
                    0,
                    0
                ].map((d)=>d * 255
                );
            }
        }
    }
    const texVoxels1 = __default.createTexture(gl, {
        src: texVoxelsArray.flat(3),
        width: texVoxelsArray[0].length,
        mag: gl.NEAREST,
        min: gl.NEAREST
    });
    return texVoxels1;
}
const texVoxels = prepareTexVoxels();
let tick = 0;
__default.resizeCanvasToDisplaySize(gl.canvas);
const zsw = new ZShaderWrapper(gl, __default);
const passes = {
    gi: zsw.createPass(glsl, [
        canvas.width,
        canvas.height
    ]),
    draw: zsw.createPass(glsl1)
};
const params = [
    ...Array(10)
].map(()=>Math.random()
);
const timeI = new Date().getSeconds();
function draw() {
    const time = new Date().getSeconds();
    __default.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    passes.gi.draw({
        u_frame: tick,
        tex: passes.gi.b,
        u_time: time - timeI,
        u_params: params,
        u_tex_voxels: texVoxels,
        u_voxels_num: 128
    }, 'self');
    passes.draw.draw({
        tex: passes.gi.b,
        u_resolution: [
            canvas.width,
            canvas.height
        ]
    }, 'screen');
    tick++;
    console.log(tick);
    if (tick < 100) {
        requestAnimationFrame(draw);
    }
}
draw();
window.addEventListener('resize', (e)=>{
    resize();
});
function resize() {
    const w = window.innerWidth * window.devicePixelRatio;
    const h = window.innerHeight * window.devicePixelRatio;
    __default.resizeFramebufferInfo(gl, passes.gi.buffer, passes.gi.attachments, w, h);
    __default.resizeFramebufferInfo(gl, passes.gi.backbuffer, passes.gi.attachments, w, h);
    passes.gi.resolution = [
        w,
        h
    ];
}
resize();
