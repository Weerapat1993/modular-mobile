import { Optimize } from '../Optimize'

describe('Optimize.js', () => {
  it ('_removeFunction', () => {
    const data = {
      a: {},
      b: { id: 'Test' },
      c: [{ id: 'Test' }],
      func: () => null,
    }
    const recieved = Optimize._removeFunction(data)
    const expected = {
      a: {},
      b: { id: 'Test' },
      c: [{ id: 'Test' }],
    }
    expect(recieved).toEqual(expected)
  });
  it ('_removeFunction when data is object function', () => {
    const data = {
      a: {},
      b: { id: 'Test' },
      actionCreator: {
        func: () => null,
        func2: () => null,
        arr: [{ id: 1234 }]
      }
    }
    const recieved = Optimize._removeFunction(data)
    const expected = {
      a: {},
      b: { id: 'Test' },
      actionCreator: {
        arr: [{ id: 1234 }]
      },
    }
    expect(recieved).toEqual(expected)
  });
  it ('isShouldRender when data is equal', () => {
    const prevProps = {
      a: {},
      b: { id: 'Test' },
      func: () => null,
    }
    const nextProps = {
      a: {},
      b: { id: 'Test' },
      func: () => null,
      func2: (id) => 1234,
      func3: [() => null],
    }
    const recievedProps = Optimize.isShouldRenderProps(prevProps, nextProps)
    const recievedState = Optimize.isShouldRenderState(prevProps, nextProps)
    expect(recievedProps).toEqual(false)
    expect(recievedState).toEqual(false)
  });

  it ('isShouldRender when data is not equal', () => {
    const prevProps = {
      a: {},
      b: { id: 'Test' },
      func: () => null,
    }
    const nextProps = {
      a: {},
      b: { id: 'Test2' },
      func: () => null,
      func2: (id) => 1234,
      func3: [() => null],
    }
    const recievedProps = Optimize.isShouldRenderProps(prevProps, nextProps)
    const recievedState = Optimize.isShouldRenderState(prevProps, nextProps)
    expect(recievedProps).toEqual(false)
    expect(recievedState).toEqual(false)
  });
})