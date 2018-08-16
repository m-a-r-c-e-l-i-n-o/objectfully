const _ = require('lodash')
const extract = require('./extract')
const valid = require('./valid')

module.exports = (keys, value, object) => {
    if (!valid(keys)) {
        return object
    }
    return _.set(object, extract(keys), value)
}