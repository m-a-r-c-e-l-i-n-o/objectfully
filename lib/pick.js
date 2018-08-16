const _ = require('lodash')
const extract = require('./extract')
const valid = require('./valid')

module.exports = (keys, object) => {
    if (!valid(keys)) {
        return keys
    }
    return _.get(object, extract(keys))
}
