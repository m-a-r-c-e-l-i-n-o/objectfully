const pick = require('./pick')
const assign = require('./assign')

module.exports = (a, b, object) => {
    assign(b, pick(a, object), object)
    return object
}