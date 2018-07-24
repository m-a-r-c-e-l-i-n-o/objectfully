const { expect } = require('chai')
const { pick } = require('../../')

const four = '!'
const three = { four }
const two = { three }
const one = { two }
const object = { one }

describe('pick()', () => {
    it('Should pick one level dot notation', () => {
        expect(pick('#{one}', object)).to.equal(one)
    })
    it('Should pick two levels of dot notation', () => {
        expect(pick('#{one.two}', object)).to.deep.equal(two)
    })
    it('Should pick three levels of dot notation', () => {
        expect(pick('#{one.two.three}', object)).to.deep.equal(three)
    })
    it('Should pick four levels of dot notation', () => {
        expect(pick('#{one.two.three.four}', object)).to.deep.equal(four)
    })
})
