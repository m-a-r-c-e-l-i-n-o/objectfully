const { expect } = require('chai')
const { valid } = require('../../')

const regex = /\$\{(.*?)\}/

describe('valid()', () => {
    it('Should should return true when a non template string is passed in', () => {
        expect(valid('#{hello}')).to.equal(true)
    })
    it('Should should return false when a non template value is passed in', () => {
        expect(valid('hello')).to.equal(false)
        expect(valid({ template: '#{hello}' })).to.equal(false)
        expect(valid(true)).to.equal(false)
        expect(valid(false)).to.equal(false)
    })
    it('Should should validate custom templates', () => {
        expect(valid('${hello}', regex)).to.equal(true)
    })
})
