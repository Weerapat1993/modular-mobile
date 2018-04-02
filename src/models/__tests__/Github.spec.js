import { Github } from '../Github'

describe('Github Model', () => {
  it('Github.set()', () => {
    const recieved = Github.set()
    const expected = {
      id: '',
      name: '',
      description: '',
      avatar: '',
      url: ''
    }
    expect(recieved).toEqual(expected)
  })
  it('Github.set(data)', () => {
    const data = {
      id: 'github:1',
      name: 'Github',
      description: 'Guthub Description',
      owner: {
        avatar_url: 'avatar:12345',
      },
      html_url: 'html:12345'
    }
    const recieved = Github.set(data)
    const expected = {
      id: 'github:1',
      name: 'Github',
      description: 'Guthub Description',
      avatar: 'avatar:12345',
      url: 'html:12345'
    }
    expect(recieved).toEqual(expected)
  })
})
