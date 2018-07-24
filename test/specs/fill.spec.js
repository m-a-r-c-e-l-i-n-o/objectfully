const { expect } = require('chai')
const { fill } = require('../../')

const c = '!'
const b = '@'
const a = { b, c }
const object = { a }

describe('fill()', () => {
    it('Should not copy the value of key when it does exist', () => {
        const a = '#{a.b}'
        const b = '#{a.c}'
        expect(fill(a, b, object)).to.deep.equal(object)
    })
    it('Should copy the value of key when it does not exist', () => {
        const a = '#{a.b}'
        const b = '#{a.c}'
        const aO = JSON.parse(JSON.stringify(object))
        const bO = JSON.parse(JSON.stringify(object))
        aO.a.c = null
        bO.a.c = '@'
        expect(fill(a, b, aO)).to.deep.equal(bO)
    })
})
