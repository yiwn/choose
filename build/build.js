/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  if (!('exports' in module) && typeof module.definition === 'function') {
    module.client = module.component = true;
    module.definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

/**
 * Define a module's exports immediately with `exports`.
 *
 * @param {String} name
 * @param {Generic} exports
 * @api private
 */

require.define = function (name, exports) {
  require.modules[name] = {
    exports: exports
  };
};
require.register("component~type@1.0.0", function (exports, module) {

/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Function]': return 'function';
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object String]': return 'string';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val && val.nodeType === 1) return 'element';
  if (val === Object(val)) return 'object';

  return typeof val;
};

});

require.register("choose", function (exports, module) {
module.exports = require("choose/lib/choose.js");

});

require.register("choose/lib/choose.js", function (exports, module) {
/**
 * Load dependencies
 */

var type = require("component~type@1.0.0");


/**
 * Setup shim
 */

var slice = [].slice;


/**
 * Expose `choose`
 */

module.exports = choose;

/**
 * Expose helpers
 */

module.exports.pick = pick;
module.exports.omit = omit;


/**
 * Create and return clone of provided object
 * by including or excluding given properties.
 *
 * @param  {Object} source
 * @param  {Array} keys
 * @param  {Boolean} include [optional]
 * @return {Object}
 * @api public
 */

function choose(source, keys, include) {
    keys = keys || [];
    // falsey only if false
    include = include !== false;

    var picked = {}, name;

    for (name in source)
        // exists ⊻ include
        if (~ keys.indexOf(name) ? include : !include)
            picked[name] = source[name];

    return picked;
}


/**
 * Shortcut for picking properties.
 *
 * @param  {Object} source
 * @param  {Array} keys
 * @return {Object}
 */

function pick(source, keys) {
    if (type(keys) == 'arguments')
        keys = slice.call(keys);

    if (type(keys) != 'array')
        keys = slice.call(arguments, 1);

    return choose(source, keys);
}


/**
 * Shortcut for omitting properties.
 *
 * @param  {Object} source
 * @param  {Array} keys
 * @return {Object}
 */

function omit(source, keys) {
    if (type(keys) == 'arguments')
        keys = slice.call(keys);

    if (type(keys) != 'array')
        keys = slice.call(arguments, 1);

    return choose(source, keys, false);
}

});

require("choose")
