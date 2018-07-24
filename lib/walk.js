const _ = require('lodash')
const valid = require('./valid')
const extract = require('./extract')

const noop = (x, y, z) => undefined

const walk = (keys, object, events) => {

    const { found = noop, step = noop, unfound = noop } = events

    if (!_.isString(keys) || !_.isObjectLike(object)) {
        return unfound(keys, object)
    }

    if (!keys.includes('.')) {
        return found(object[keys], keys, object)
    }

    const [ key, ...remaining ] = keys.split('.')

    step(object[key], key, object)

    return walk(remaining.join('.'), object[key], events)
}

module.exports = (keys, object, events) => {
    if (!valid(keys)) {
        return keys
    }
    return walk(extract(keys), object, events)
}