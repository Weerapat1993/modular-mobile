import styles from '../Style'

describe('Styles', () => {
  it('Styles', () => {
    const recieved = styles.height(20).width(20).get()
    const recieved2 = styles.width(50).get()
    const expected = { width: 50 }
    expect(recieved2).toEqual(expected)
  })
  it('Styles 2', () => {
    const recieved = styles.height(20).width(20).get()
    const recieved2 = styles.width(50).get()
    const expected = { height: 20, width: 20 }
    expect(recieved).toEqual(expected)
  })

  it('Styles 3', () => {
    const recieved = styles.marginLeft(20).marginRight(15).get()
    const expected = { marginLeft: 20, marginRight: 15 }
    expect(recieved).toEqual(expected)
  })

  it('Styles Size', () => {
    const recieved = styles.size(50).get()
    const expected = { width: 50, height: 50 }
    expect(recieved).toEqual(expected)
  })
  it('Styles Circle', () => {
    const recieved = styles.circle(30).get()
    const expected = { width: 30, height: 30, borderRadius: 15 }
    expect(recieved).toEqual(expected)
  })

  it('Styles Undefined', () => {
    const recieved = styles.width().get()
    const expected = {}
    expect(styles.width().get()).toEqual(expected)
    expect(styles.width(undefined).get()).toEqual(expected)
    expect(styles.width('').get()).toEqual(expected)
    expect(styles.width(0).get()).toEqual({ width: 0 })
    expect(styles.width(null).get()).toEqual(expected)
    expect(styles.width(false).get()).toEqual(expected)
  })
})