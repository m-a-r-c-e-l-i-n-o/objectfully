const { expect } = require('chai')
const { remove } = require('../../')

const four = '!'
const three = { four }
const two = { three }
const one = { two }
const object = { one }

describe('remove()', () => {
    it('Should remove one level dot notation', () => {
        const a = JSON.parse(JSON.stringify(object))
        const b = JSON.parse(JSON.stringify(object))
        delete b.one
        expect(remove('#{one}', a)).to.deep.equal(b)
    })
    it('Should remove two levels of dot notation', () => {
        const a = JSON.parse(JSON.stringify(object))
        const b = JSON.parse(JSON.stringify(object))
        delete b.one.two
        expect(remove('#{one.two}', a)).to.deep.equal(b)
    })
    it('Should remove three levels of dot notation', () => {
        const a = JSON.parse(JSON.stringify(object))
        const b = JSON.parse(JSON.stringify(object))
        delete b.one.two.three
        expect(remove('#{one.two.three}', a)).to.deep.equal(b)
    })
    it('Should remove four levels of dot notation', () => {
        const a = JSON.parse(JSON.stringify(object))
        const b = JSON.parse(JSON.stringify(object))
        delete b.one.two.three.four
        expect(remove('#{one.two.three.four}', a)).to.deep.equal(b)
    })
})
