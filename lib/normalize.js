const extract = require('./extract')
const valid = require('./valid')
const wrap = require('./wrap')

module.exports = (value, regex) => {

    if (!regex || !valid(value, regex)) {
        return value
    }
    
    return wrap(extract(value, regex))
}