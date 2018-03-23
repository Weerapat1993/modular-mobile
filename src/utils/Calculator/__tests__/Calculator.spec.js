import { Calculator } from '../Calculator'

describe('Caluclator.js', () => {
  it('random(1,1)', () => {
    const min = 10
    const max = 20
    const recieved = Calculator.random(min, max)
    expect(recieved).toBeLessThanOrEqual(max)
    expect(recieved).toBeGreaterThanOrEqual(min)
  });
  it('numberFormat 1234.56 .toFixed(2)', () => {
    const recieved = Calculator.numberFormat(1234.56, 2)
    const expected = '1,234.56'
    expect(recieved).toEqual(expected)
  })

  it('numberFormat 1234 .toFixed(2)', () => {
    const recieved = Calculator.numberFormat(1234, 2, '.', '')
    const expected = '1234.00'
    expect(recieved).toEqual(expected)
  })

  it('numberFormat 12345678.901 .toFixed(3)', () => {
    const recieved = Calculator.numberFormat(12345678.901, 3)
    const expected = '12,345,678.901'
    expect(recieved).toEqual(expected)
  })
})