const { expect } = require('chai')
const { exists } = require('../../')

const d = undefined
const c = null
const b = '@'
const a = { b, c, d }
const object = { a }

describe('exists()', () => {
    it('Should return true if value is present', () => {
        expect(exists('#{a.b}', object)).to.equal(true)
        expect(exists('#{a.c}', object)).to.equal(true)
    })
    it('Should return false if value is not present', () => {
        expect(exists('#{a.d}', object)).to.equal(false)
        expect(exists('#{a.e}', object)).to.equal(false)
    })
})
