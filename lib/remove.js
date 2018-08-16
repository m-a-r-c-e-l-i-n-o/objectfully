const _ = require('lodash')
const extract = require('./extract')
const valid = require('./valid')

module.exports = (keys, object) => {
    if (!valid(keys)) {
        return false
    }
    return _.unset(object, extract(keys))
}