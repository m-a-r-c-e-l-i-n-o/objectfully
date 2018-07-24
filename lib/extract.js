const { REGEX } = require('./regexes')

module.exports = (value, regex = REGEX) => {

    const match = value.match(regex)

    if (!match) {
        return undefined
    }

    const [ , key ] = match
    return key
}
