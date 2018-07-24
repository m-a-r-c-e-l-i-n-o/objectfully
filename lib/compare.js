const pick = require('./pick')

module.exports = (a, b, object) => {
    if (pick(a, object) === pick(b, object)) {
        return true
    }
    return false
}