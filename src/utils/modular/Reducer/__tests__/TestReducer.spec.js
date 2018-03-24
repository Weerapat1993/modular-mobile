import { TestReducer, testReducer } from '../TestReducer'

describe('Test', () => {
  const classReducer = (action, state) => new TestReducer({ action, state })._setInitial()
  it('Test InitialState', () => {
    const action = { type: 'ETC', key: 'ETC' }
    const recieved = testReducer(undefined, action)
    const expected = classReducer(action).initialState
    expect(recieved).toEqual(expected)
  })

  it('Test SET_STATE', () => {
    const action = { type: 'SET_STATE', key: 'SET_STATE' }
    const recieved = testReducer(undefined, action)
    const expected = classReducer(action).setState({ byID: ['HI'] })
    expect(recieved).toEqual(expected)
  })

  it('Test SET_STATE_WITH_KEY', () => {
    const action = { type: 'SET_STATE_WITH_KEY', key: 'SET_STATE_WITH_KEY' }
    const recieved = testReducer(undefined, action)
    const expected = classReducer(action).setStateWithKey({ error: '' })
    expect(recieved).toEqual(expected)
  })

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

  it('Test Update Key', () => {
    // First Data
    const action = { type: 'UPDATE_KEY', key: 'product1', data: { status: 'pending' } }
    const state = classReducer(action).setStateWithKeySuccess({ data: action.data })

    // Second Data
    const action2 = { type: 'UPDATE_KEY', key: 'product1', data: { status: 'processing' } }
    const recieved = testReducer(state, action2) 
    const expected = classReducer(action2, state).setStateWithKey({ 
      data: {
        ...classReducer(action2, state).getStateWithKey().data,
        ...action2.data
      }
    })
    expect(recieved).toEqual(expected)
  })
})
