const valid = require('./valid')
const walk = require('./walk')

const found = (assignee) => (value, key, object) => {
    delete object[key]
    return assignee
}

module.exports = (keys, object) => {
    if (!valid(keys)) {
        return
    }
    return walk(keys, object, { found: found(object) })
}