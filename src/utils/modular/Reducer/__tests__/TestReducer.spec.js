import { TestReducer, testReducer } from '../TestReducer'

describe('Test', () => {
  const classReducer = (action) => new TestReducer({ action })._setInitial()
  it('Test Request', () => {
    const action = { type: 'REQUEST', key: 'REQUEST' }
    const recieved = testReducer(undefined, action)
    const expected = classReducer(action).setStateWithKeyRequest()
    expect(recieved).toEqual(expected)
  })

  it('Test Success', () => {
    const data = { name: 'John' }
    const action = { type: 'SUCCESS', key: 'SUCCESS', data }
    const recieved = testReducer(undefined, action)
    const expected = classReducer(action).setStateWithKeySuccess({ data })
    expect(recieved).toEqual(expected)
  })

  it('Test Failure', () => {
    const action = { type: 'FAILURE', key: 'FAILURE', error: new Error('Error') }
    const recieved = testReducer(undefined, action)
    const expected = classReducer(action).setStateWithKeyFailure()
    expect(recieved).toEqual(expected)
  })

  it('Test ConvertArray', () => {
    const data = [
      {
        id: 'article:1',
        name: 'John',
      },
      {
        id: 'article:2',
        name: 'Henry',
      }
    ]
    const action = { type: 'SUCCESS', key: 'SUCCESS', data }
    const recieved = classReducer(action).arrayToObject(data, 'id')
    const expected = {
      'article:1': {
        id: 'article:1',
        name: 'John',
      },
      'article:2': {
        id: 'article:2',
        name: 'Henry',
      }
    }
    expect(recieved).toEqual(expected)
  })
})
