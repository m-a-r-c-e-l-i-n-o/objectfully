const { expect } = require('chai')
const { replace } = require('../../')

const regex = /\$\{(.*?)\}/g
const object = { world: 'World', exclamations: '!!' }

describe('replace()', () => {
    it('Should replace one templated instance', () => {
        const string = 'Hello #{world}!'
        expect(replace(string, object)).to.equal('Hello World!')
    })
    it('Should replace two templated instance', () => {
        const string = 'Hello #{world}!#{exclamations}'
        expect(replace(string, object)).to.equal('Hello World!!!')
    })

    it('Should replace two custom templated instance', () => {
        const string = 'Hello ${world}!${exclamations}'
        expect(replace(string, object, regex)).to.equal('Hello World!!!')
    })

    it('Should replace one object templated instance', () => {
        const string = '#{hello}'
        const result = { world: '!' }
        const object = { hello: result }
        expect(replace(string, object)).to.deep.equal(result)
    })
})
