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
        remove('#{one}', a)
        expect(a).to.deep.equal(b)
    })
    it('Should remove two levels of dot notation', () => {
        const a = JSON.parse(JSON.stringify(object))
        const b = JSON.parse(JSON.stringify(object))
        delete b.one.two
        remove('#{one.two}', a)
        expect(a).to.deep.equal(b)
    })
    it('Should remove three levels of dot notation', () => {
        const a = JSON.parse(JSON.stringify(object))
        const b = JSON.parse(JSON.stringify(object))
        delete b.one.two.three
        remove('#{one.two.three}', a)
        expect(a).to.deep.equal(b)
    })
    it('Should remove four levels of dot notation', () => {
        const a = JSON.parse(JSON.stringify(object))
        const b = JSON.parse(JSON.stringify(object))
        delete b.one.two.three.four
        remove('#{one.two.three.four}', a)
        expect(a).to.deep.equal(b)
    })
})
