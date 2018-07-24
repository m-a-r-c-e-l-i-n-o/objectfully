const _ = require('lodash')
const normalize = require('./normalize')
const wrap = require('./wrap')
const pick = require('./pick')
const { REGEX_GLOBAL } = require('./regexes')

const replace = (object) => (match, keys) => (
    pick(wrap(keys), object)
)

module.exports = (value, object, regex = REGEX_GLOBAL) => {

    const localRegex = regex && new RegExp(regex.source)
    
    if (!_.isString(value)) {
        return value
    }

    const matches = value.match(localRegex)
    
    if (!matches) {
        return value
    }
        
    if (_.isArray(matches) && matches[0] === value) {
        const normalized = normalize(value, localRegex)
        return pick(normalized, object)
    }

    const globalRegex = regex && new RegExp(regex.source, 'g')
    return _.replace(value, globalRegex, replace(object))
}
