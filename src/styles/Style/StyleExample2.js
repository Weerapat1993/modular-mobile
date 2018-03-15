import BaseStyle from './BaseStyle2'

class Style extends BaseStyle {
  size = (value) => ({
    width: value,
    height: value
  })

  circle(value) {
    return {
      ...this.size(value),
      borderRadius: value / 2,
    }
  }
}

export default new Style()