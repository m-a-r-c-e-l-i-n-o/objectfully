const _ = require('lodash')
const walk = require('./walk')

const found = (assignment, assignee) => (value, key, object) => {
    object[key] = assignment
    return assignee
}

const step = (value, key, object) => {
    if (!_.isObjectLike(value)) {
        object[key] = {}
    }
}

module.exports = (keys, value, object) => (
    walk(keys, object, { found: found(value, object), step })
)