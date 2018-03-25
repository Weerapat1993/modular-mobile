import { Calculator } from '../index'

describe('Caluclator.js', () => {
  it('random 10 - 20', () => {
    const min = 10
    const max = 20
    const recieved = Calculator.random(min, max)
    expect(recieved).toBeLessThanOrEqual(max)
    expect(recieved).toBeGreaterThanOrEqual(min)
  })

  it('numberFormat 1234.56 toFixed(0)', () => {
    const recieved = Calculator.numberFormat(1234.56)
    const expected = '1,235'
    expect(recieved).toEqual(expected)
  })

  it('numberFormat 1234.56 .toFixed(2)', () => {
    const recieved = Calculator.numberFormat(1234.56, 2)
    const expected = '1,234.56'
    expect(recieved).toEqual(expected)
  })

  it('numberFormat 1234 .toFixed(2) no comma', () => {
    const recieved = Calculator.numberFormat(1234, 2, '.', '')
    const expected = '1234.00'
    expect(recieved).toEqual(expected)
  })

  it('numberFormat 12345678.901 .toFixed(3)', () => {
    const recieved = Calculator.numberFormat(12345678.901, 3)
    const expected = '12,345,678.901'
    expect(recieved).toEqual(expected)
  })

  it ('convertToCoin £ 20.00', () => {
    const recieved = Calculator.convertToCoin(20)
    const expected = '2,000'
    expect(recieved).toEqual(expected)
  })

  it ('convertToCoin ฿ 880', () => {
    const recieved = Calculator.convertToCoin(880, '฿')
    const expected = '2,000'
    expect(recieved).toEqual(expected)
  })

  it ('convertToCurrency 2000 Coin to £', () => {
    const recieved = Calculator.convertToCurrency(2000)
    const expected = '20.00'
    expect(recieved).toEqual(expected)
  })

  it ('convertToCurrency 2000 Coin to Baht', () => {
    const recieved = Calculator.convertToCurrency(2000, '฿')
    const expected = '880.00'
    expect(recieved).toEqual(expected)
  })

  it ('convertToCoin $ 20.00', () => {
    const recieved = Calculator.convertToCoin(20, '$')
    const expected = '2,000'
    expect(recieved).toEqual(expected)
  })

  it ('convertToCurrency 2000 Coin to Dollar', () => {
    const recieved = Calculator.convertToCurrency(2000, '$')
    const expected = '20.00'
    expect(recieved).toEqual(expected)
  })
})