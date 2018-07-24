const { expect } = require('chai')
const { copy } = require('../../')

const c = null
const b = '@'
const a = { b, c }
const object = { a }

describe('copy()', () => {
    it('Should copy the value of key', () => {
        const a = '#{a.b}'
        const b = '#{a.c}'
        const cO = JSON.parse(JSON.stringify(object))
        cO.a.c = '@'
        expect(copy(a, b, object)).to.deep.equal(cO)
    })
})
