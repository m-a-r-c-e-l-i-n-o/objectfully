const { expect } = require('chai')
const { compare } = require('../../')

const c = '@'
const b = '@'
const a = { b, c }
const object = { a }

describe('compare()', () => {
    it('Should return true when two templated values equal each other', () => {
        const a = '#{a.b}'
        const b = '#{a.c}'
        expect(compare(a, b, object)).to.equal(true)
    })
    it('Should return true when two values equal each other', () => {
        const a = '@'
        const b = '#{a.c}'
        expect(compare(a, b, object)).to.equal(true)
    })
    it('Should return true when two regular values equal each other', () => {
        const a = '@'
        const b = '@'
        expect(compare(a, b, object)).to.equal(true)
    })
    it('Should return false when two values templated do not equal each other', () => {
        const a = '#{a.b}'
        const b = '#{a.c}'
        const o = JSON.parse(JSON.stringify(object))
        o.a.c = '!'
        expect(compare(a, b, o)).to.equal(false)
    })
    it('Should return false when two values do not equal each other', () => {
        const a = '#{a.b}'
        const b = '!'
        expect(compare(a, b, object)).to.equal(false)
    })
    it('Should return false when two regular values do not equal each other', () => {
        const a = '!'
        const b = '@'
        expect(compare(a, b, object)).to.equal(false)
    })
})
