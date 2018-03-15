import styles from '../StyleExample2'

describe('Styles', () => {
  it('Styles', () => {
    const recieved = styles.height(20)
    const expected = { height: 20 }
    expect(recieved).toEqual(expected)
  })

  it('Styles Merge Object', () => {
    const recieved = { ...styles.marginLeft(20), ...styles.marginRight(15) }
    const expected = { marginLeft: 20, marginRight: 15 }
    expect(recieved).toEqual(expected)
  })

  it('Styles Size', () => {
    const recieved = styles.size(50)
    const expected = { width: 50, height: 50 }
    expect(recieved).toEqual(expected)
  })

  it('Styles Circle', () => {
    const recieved = styles.circle(30)
    const expected = { width: 30, height: 30, borderRadius: 15 }
    expect(recieved).toEqual(expected)
  })

  it('Styles Undefined', () => {
    const expected = {}
    expect(styles.width()).toEqual(expected)
    expect(styles.width(undefined)).toEqual(expected)
    expect(styles.width('')).toEqual(expected)
    expect(styles.width(0)).toEqual({ width: 0 })
    expect(styles.width(null)).toEqual(expected)
    expect(styles.width(false)).toEqual(expected)
  })
})