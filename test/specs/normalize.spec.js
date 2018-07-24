const { expect } = require('chai')
const { normalize } = require('../../')

const regex = /\$\{(.*?)\}/

describe('normalize()', () => {
    it('Should should turn a given template into the "objectfully" format', () => {
        expect(normalize('${hello}', regex)).to.equal('#{hello}')
    })
    it('Should should return value if it is not templated', () => {
        expect(normalize('hello', regex)).to.equal('hello')
    })
    it('Should should return value if no regex is given', () => {
        expect(normalize('hello')).to.equal('hello')
    })
})
