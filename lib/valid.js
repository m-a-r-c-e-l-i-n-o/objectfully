const { REGEX } = require('./regexes')

module.exports = (value, regex) => (regex || REGEX).test(value)
