const { expect } = require('chai')
const { assign } = require('../../')

const four = '!'
const three = { four }
const two = { three }
const one = { two }
const object = { one }

describe('assign()', () => {
    it('Should assign one level dot notation', () => {
        expect(assign('#{one}', one, {})).to.deep.equal(object)
    })
    it('Should assign two levels of dot notation', () => {
        expect(assign('#{one.two}', two, {})).to.deep.equal(object)
    })
    it('Should assign three levels of dot notation', () => {
        expect(assign('#{one.two.three}', three, {})).to.deep.equal(object)
    })
    it('Should assign four levels of dot notation', () => {
        expect(assign('#{one.two.three.four}', four, {})).to.deep.equal(object)
    })
})
