const valid = require('./valid')
const walk = require('./walk')

const pick = (value) => value

module.exports = (keys, object) => {
    if (!valid(keys)) {
        return keys
    }
    return walk(keys, object, { found: pick })
}
