const pick = require('./pick')

module.exports = (a, object) => {
    
    const result = pick(a, object)
    
    if (result !== undefined) {
        return true
    }

    return false
}