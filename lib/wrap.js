const valid = require('./valid')

module.exports = (value) => {
    if (valid(value)) {
        return value
    }
    return `#{${value}}`
}