import { Github } from '../Github'

const dataTable = {
  id: 0,
  name: '',
  description: '',
  avatar: '',
  url: ''
}

describe('Github Model', () => {
  it('Github.set()', () => {
    const recieved = Github.set()
    const expected = dataTable
    expect(recieved).toEqual(expected)
  })
  it('Github.set(data)', () => {
    const data = {
      id: 1234,
      name: 'Github',
      description: 'Guthub Description',
      owner: {
        avatar_url: 'avatar:12345',
      },
      html_url: 'html:12345'
    }
    const recieved = Github.set(data)
    const expected = {
      id: 1234,
      name: 'Github',
      description: 'Guthub Description',
      avatar: 'avatar:12345',
      url: 'html:12345'
    }
    expect(recieved).toEqual(expected)
  })

  it('Github.get(data)', () => {
    const data = dataTable
    const recieved = Github.get(data)
    expect(recieved).toEqual(data)
  })
})
