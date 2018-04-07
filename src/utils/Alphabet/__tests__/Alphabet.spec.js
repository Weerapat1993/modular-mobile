import Alphabet from '../Alphabet'

describe('Alphabet.js', () => {
  it('method random 50 characters', () => {
    const recieved = Alphabet.random(50)
    expect(recieved).toHaveLength(50)
  })

  it('method enum', () => {
    const recieved = Alphabet.enum(['meetup', 'delivery'])
    expect(typeof recieved).toEqual('string')
  })
})
