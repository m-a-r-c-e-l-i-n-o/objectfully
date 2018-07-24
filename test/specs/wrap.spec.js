const { expect } = require('chai')
const { wrap } = require('../../')

describe('wrap()', () => {
    it('Should should wrap a string into the "objectfully" format', () => {
        expect(wrap('hello')).to.equal('#{hello}')
    })
})
