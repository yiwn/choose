/**
 * Load dependencies
 */

var type = require('component-type');


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
